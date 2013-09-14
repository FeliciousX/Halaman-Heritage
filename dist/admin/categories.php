<?php

include("config.inc.php");
/**
 * Created by JetBrains PhpStorm.
 * User: Admin
 * Date: 9/12/13
 * Time: 11:08 PM
 * To change this template use File | Settings | File Templates.
 */
if(empty($_POST)){
    $query = "SHOW TABLES";
    $stmt = null;
    try{
        $stmt = $db->prepare($query);
        $result = $stmt->execute();
    }catch(PDOException $e){
        $response['success'] = 0;
        $response['message'] = "Database Error. Please Try again later<br>".$e->getMessage();

        die(json_encode($response));
    }
    $data = $stmt->fetchAll();
    echo json_encode($data);
    file_put_contents("../places/categories.json", json_encode($data));
    ?>
    <form action="categories.php" method="post">
        <br/>
        Category Name:<br/>
        <input type="text" name = "category_name" value = ""/>
        <br/>
        <input type="submit" value="Submit"/>
    </form>
    <?php

}else{
    if(!empty($_POST['category_name'])){
        $category_name = $_POST['category_name'];
        if(checkIfTableExists($category_name)){
            $query = "SELECT * FROM $category_name";
            $stmt = null;
            try{
                $stmt = $db->prepare($query);
                $result = $stmt->execute();
            }catch(PDOException $e){
                $response['success'] = 0;
                $response['message'] = "Database Error. Please Try again later<br>".$e->getMessage();

                die(json_encode($response));
            }
            $data = $stmt->fetchAll();
            echo json_encode($data);
            file_put_contents("../places/" . $_POST['category_name'] . ".json", json_encode($data));
        }
    }
}





function checkIfTableExists($table){
    include("config.inc.php");
    $query = "SHOW TABLES";
    try{
        $stmt = $db->prepare($query);
        $result = $stmt->execute();
    }catch(PDOException $e){
        $response["success"] = 0;
        $response["message"] = "Database Error. Please Try Again Later.";

        die(json_encode($response));
    }
    $data = $stmt->fetchAll();
    foreach($data as $value){
        if($value['Tables_in_' . $dbname] == $table){
            return true;
        }
    }
    return false;
}

