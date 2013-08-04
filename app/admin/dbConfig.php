<?php

class dbConfig
{
	private $hostname = "127.0.0.1";
	private $username = "root";
	private $password = "";
	private $dbName   = "halaman_heritage";

	public function getHostname() { return $this->hostname; }
	public function getUsername() { return $this->username; }
	public function getPassword() { return $this->password; }
	public function getDbName  () { return $this->dbName;   }

}

?>