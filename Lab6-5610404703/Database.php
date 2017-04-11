<?php

Class Database {
  static $servername = "localhost";
  static $username = "root";
  static $password = "";
  static $dbname = "webtech";
  static $conn;

  public function __construct() {
    $this->connectToDB();
  }

  public function connectToDB() {
    self::$conn = new PDO("mysql:host=".self::$servername.";dbname=".self::$dbname,self::$username,self::$password);

    // set the PDO error mode to exception
    self::$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  }

  public function insert($customerID, $citizenID, $fname, $lname) {
    try {
      $stmt = self::$conn->prepare("INSERT INTO customers (customerID, citizenID, fname, lname)
      VALUES ( :customerID, :citizenID, :fname, :lname )");

      $stmt->bindParam(':customerID', $customerID);
      $stmt->bindParam(':citizenID', $citizenID);
      $stmt->bindParam(':fname', $fname);
      $stmt->bindParam(':lname', $lname);

      $stmt->execute();

      print "Query Successful!";

    }catch(PDOException $e){
      $e->getMessage();
      print "\n".$e->getMessage()."\n"."Add to table error\n";
    }
  }
}
?>
