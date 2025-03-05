<?php

class About
{
    public $about_aid;
    public $about_name;
    public $about_paragraph_a;
    public $about_paragraph_b;
    public $about_paragraph_c;
    public $about_img;
    public $about_logo_img;
    public $about_created;
    public $about_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblAbout;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblAbout = "zapv1_about";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblAbout} ";
            $sql .= "order by about_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblAbout}";
            $sql .= "(about_name, ";
            $sql .= "about_paragraph_a, ";
            $sql .= "about_paragraph_b, ";
            $sql .= "about_paragraph_c, ";
            $sql .= "about_img, ";
            $sql .= "about_logo_img, ";
            $sql .= "about_created, ";
            $sql .= "about_datetime ) values ( ";
            $sql .= ":about_name, ";
            $sql .= ":about_paragraph_a, ";
            $sql .= ":about_paragraph_b, ";
            $sql .= ":about_paragraph_c, ";
            $sql .= ":about_img, ";
            $sql .= ":about_logo_img, ";
            $sql .= ":about_created, ";
            $sql .= ":about_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "about_name" => $this->about_name,
                "about_paragraph_a" => $this->about_paragraph_a,
                "about_paragraph_b" => $this->about_paragraph_b,
                "about_paragraph_c" => $this->about_paragraph_c,
                "about_img" => $this->about_img,
                "about_logo_img" => $this->about_logo_img,
                "about_created" => $this->about_created,
                "about_datetime" => $this->about_datetime,
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
            $sql = "update {$this->tblAbout} set ";
            $sql .= "about_name = :about_name, ";
            $sql .= "about_paragraph_a = :about_paragraph_a, ";
            $sql .= "about_paragraph_b = :about_paragraph_b, ";
            $sql .= "about_paragraph_c = :about_paragraph_c, ";
            $sql .= "about_img = :about_img, ";
            $sql .= "about_logo_img = :about_logo_img, ";
            $sql .= "about_datetime = :about_datetime ";
            $sql .= "where about_aid = :about_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "about_name" => $this->about_name,
                "about_paragraph_a" => $this->about_paragraph_a,
                "about_paragraph_b" => $this->about_paragraph_b,
                "about_paragraph_c" => $this->about_paragraph_c,
                "about_img" => $this->about_img,
                "about_logo_img" => $this->about_logo_img,
                "about_datetime" => $this->about_datetime,
                "about_aid" => $this->about_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblAbout} ";
            $sql .= "where about_aid = :about_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "about_aid" => $this->about_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
