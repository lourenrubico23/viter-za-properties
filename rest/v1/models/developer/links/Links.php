<?php

class Links
{
    public $links_aid;
    public $links_icons;
    public $links_title;
    public $links_link;
    public $links_created;
    public $links_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblLinks;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblLinks = "zapv1_header_links";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblLinks} ";
            $sql .= "order by links_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblLinks}";
            $sql .= "(links_icons, ";
            $sql .= "links_title, ";
            $sql .= "links_link, ";
            $sql .= "links_created, ";
            $sql .= "links_datetime ) values ( ";
            $sql .= ":links_icons, ";
            $sql .= ":links_title, ";
            $sql .= ":links_link, ";
            $sql .= ":links_created, ";
            $sql .= ":links_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "links_icons" => $this->links_icons,
                "links_title" => $this->links_title,
                "links_link" => $this->links_link,
                "links_created" => $this->links_created,
                "links_datetime" => $this->links_datetime,
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
            $sql = "update {$this->tblLinks} set ";
            $sql .= "links_icons = :links_icons, ";
            $sql .= "links_title = :links_title, ";
            $sql .= "links_link = :links_link, ";
            $sql .= "links_datetime = :links_datetime ";
            $sql .= "where links_aid = :links_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "links_icons" => $this->links_icons,
                "links_title" => $this->links_title,
                "links_link" => $this->links_link,
                "links_datetime" => $this->links_datetime,
                "links_aid" => $this->links_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblLinks} ";
            $sql .= "where links_aid = :links_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "links_aid" => $this->links_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
