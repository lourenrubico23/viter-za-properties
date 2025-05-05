<?php


class WebTitleandDesc
{
    public $web_aid;
    public $web_title;
    public $web_description;
    public $web_created;
    public $web_datetime;


    public $connection;
    public $lastInsertedId;

    public $tblWebTitleandDesc;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblWebTitleandDesc = "zapv1_web_title_desc";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblWebTitleandDesc} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblWebTitleandDesc}";
            $sql .= "(web_title, ";
            $sql .= "web_description, ";
            $sql .= "web_created, ";
            $sql .= "web_datetime ) values ( ";
            $sql .= ":web_title, ";
            $sql .= ":web_description, ";
            $sql .= ":web_created, ";
            $sql .= ":web_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "web_title" => $this->web_title,
                "web_description" => $this->web_description,
                "web_created" => $this->web_created,
                "web_datetime" => $this->web_datetime,
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
            $sql = "update {$this->tblWebTitleandDesc} set ";
            $sql .= "web_title = :web_title, ";
            $sql .= "web_description = :web_description, ";
            $sql .= "web_created = :web_created, ";
            $sql .= "web_datetime = :web_datetime ";
            $sql .= "where web_aid = :web_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "web_title" => $this->web_title,
                "web_description" => $this->web_description,
                "web_created" => $this->web_created,
                "web_datetime" => $this->web_datetime,
                "web_aid" => $this->web_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
