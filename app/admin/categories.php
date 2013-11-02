<?php

include_once("config.inc.php");
/**
 * Created by JetBrains PhpStorm.
 * User: Admin
 * Date: 9/12/13
 * Time: 11:08 PM
 * To change this template use File | Settings | File Templates.
 */
if(empty($_GET)){
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

}else{
    if(!empty($_GET['category_name'])){
        $category_name = $_GET['category_name'];
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
            file_put_contents("../places/" . $_GET['category_name'] . ".json", json_encode($data));
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

