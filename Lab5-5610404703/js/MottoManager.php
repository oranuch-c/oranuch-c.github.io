<?php
  $filename =  $_POST["motto"];
  echo($filename);
  echo file_get_contents("77_Province/motto/".$filename.".txt");
?>
