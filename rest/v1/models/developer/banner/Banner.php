<?php

class Banner
{
    public $banner_aid;
    public $banner_image;
    public $banner_page;
    public $banner_title;
    public $banner_created;
    public $banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBanner = "zapv1_header_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblBanner} ";
            $sql .= "order by banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblBanner}";
            $sql .= "(banner_image, ";
            $sql .= "banner_page, ";
            $sql .= "banner_title, ";
            $sql .= "banner_created, ";
            $sql .= "banner_datetime ) values ( ";
            $sql .= ":banner_image, ";
            $sql .= ":banner_page, ";
            $sql .= ":banner_title, ";
            $sql .= ":banner_created, ";
            $sql .= ":banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "banner_image" => $this->banner_image,
                "banner_page" => $this->banner_page,
                "banner_title" => $this->banner_title,
                "banner_created" => $this->banner_created,
                "banner_datetime" => $this->banner_datetime,
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
            $sql = "update {$this->tblBanner} set ";
            $sql .= "banner_image = :banner_image, ";
            $sql .= "banner_page = :banner_page, ";
            $sql .= "banner_title = :banner_title, ";
            $sql .= "banner_datetime = :banner_datetime ";
            $sql .= "where banner_aid = :banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "banner_image" => $this->banner_image,
                "banner_page" => $this->banner_page,
                "banner_title" => $this->banner_title,
                "banner_datetime" => $this->banner_datetime,
                "banner_aid" => $this->banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblBanner} ";
            $sql .= "where banner_aid = :banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "banner_aid" => $this->banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
