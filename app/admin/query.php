<?php

include_once('dbConfig.php');

/**
 * Creates a json file to list out the categories for js usage in ../places/categories.json
 **/
function createCategoriesFile() {
    $dbConfig = new dbConfig();
    $hostname = $dbConfig->getHostname();
    $username = $dbConfig->getUsername();
    $password = $dbConfig->getPassword();
    $dbName   = $dbConfig->getDbName();

    $mysqli = new mysqli($hostname, $username, $password, $dbName);

    $queryString = "SHOW TABLES";

    $result = $mysqli->query($queryString);

    $row = $result->fetch_assoc();
    $temp = array();
    $json = array();
    do     
    {
        $category = $row["Tables_in_halaman_heritage"];

        $temp['category'] = $category;
        $temp['places'] = array();

        $queryString = "SELECT Name, id FROM " . $category;

        $places = $mysqli->query($queryString);

        $col = $places->fetch_assoc();

        do
        {
            $bus = {$col['Name'], $col['id']};
            array_push($temp['places'], $bus);
        } while($col = mysqli_fetch_array ($places));

        array_push($json, $temp);

    }  while($row = mysqli_fetch_array ($result));

    $jsonstring = json_encode($json);

    file_put_contents("../places/categories.json", $jsonstring);
}

function createListOfPlacesFile($category) {
    $dbConfig = new dbConfig();
    $hostname = $dbConfig->getHostname();
    $username = $dbConfig->getUsername();
    $password = $dbConfig->getPassword();
    $dbName   = $dbConfig->getDbName();

    $mysqli = new mysqli($hostname, $username, $password, $dbName);

    $queryString = "SELECT * FROM " . $category;

    $result = $mysqli->query($queryString);
    $row = $result->fetch_assoc();

    $json = array();
    do     
    {   
        $bus = array(
            'id'            => "",
            'name'          => "",
            'opening_hours' => "",
            'lat'           => "",
            'lng'           => "",
            'location'      => "",
            'price_range'   => "",
            'description'   => "",
            'web'           => ""
        );

        if(isset($row['Name']))          $bus['name']          = $row['Name'];
        if(isset($row['OpeningHours']))  $bus['opening_hours'] = $row['OpeningHours'];
        if(isset($row['Latitude']))      $bus['lat']           = $row['Latitude'];
        if(isset($row['Longitude']))     $bus['lng']           = $row['Longitude'];
        if(isset($row['Location']))      $bus['location']      = $row['Location'];
        if(isset($row['PriceRange']))    $bus['price_range']   = $row['PriceRange'];
        if(isset($row['Description']))   $bus['description']   = $row['Description'];
        if(isset($row['Website']))       $bus['web']           = $row['Website'];
        if(isset($row['ContactNumber'])) $bus['contact_number']= $row['ContactNumber'];

        $bus['id'] = str_replace(' ', '_', trim($bus['name']);

        array_push($json, $bus);
    }  while($row = mysqli_fetch_array ($result));

    $jsonstring = json_encode($json);

    file_put_contents("../places/" . $category . ".json", $jsonstring);

}

?>
