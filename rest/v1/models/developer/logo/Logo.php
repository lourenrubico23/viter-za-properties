<?php

class Logo
{
    public $logo_aid;
    public $logo_image;
    public $logo_name;
    public $logo_position;
    public $logo_created;
    public $logo_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblLogo;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblLogo = "zapv1_header_logo";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblLogo} ";
            $sql .= "order by logo_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblLogo}";
            $sql .= "(logo_image, ";
            $sql .= "logo_name, ";
            $sql .= "logo_position, ";
            $sql .= "logo_created, ";
            $sql .= "logo_datetime ) values ( ";
            $sql .= ":logo_image, ";
            $sql .= ":logo_name, ";
            $sql .= ":logo_position, ";
            $sql .= ":logo_created, ";
            $sql .= ":logo_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "logo_image" => $this->logo_image,
                "logo_name" => $this->logo_name,
                "logo_position" => $this->logo_position,
                "logo_created" => $this->logo_created,
                "logo_datetime" => $this->logo_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblLogo} set ";
            $sql .= "logo_image = :logo_image, ";
            $sql .= "logo_name = :logo_name, ";
            $sql .= "logo_position = :logo_position, ";
            $sql .= "logo_datetime = :logo_datetime ";
            $sql .= "where logo_aid = :logo_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "logo_image" => $this->logo_image,
                "logo_name" => $this->logo_name,
                "logo_position" => $this->logo_position,
                "logo_datetime" => $this->logo_datetime,
                "logo_aid" => $this->logo_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblLogo} ";
            $sql .= "where logo_aid = :logo_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "logo_aid" => $this->logo_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
