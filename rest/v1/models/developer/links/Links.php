<?php

class Links
{
    public $links_aid;
    public $links_facebook_link;
    public $links_facebook_title;
    public $links_instagram_link;
    public $links_instagram_title;
    public $links_message_link;
    public $links_message_title;
    public $links_contact;
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
            $sql .= "(links_facebook_link, ";
            $sql .= "links_facebook_title, ";
            $sql .= "links_instagram_link, ";
            $sql .= "links_instagram_title, ";
            $sql .= "links_message_link, ";
            $sql .= "links_message_title, ";
            $sql .= "links_contact, ";
            $sql .= "links_created, ";
            $sql .= "links_datetime ) values ( ";
            $sql .= ":links_facebook_link, ";
            $sql .= ":links_facebook_title, ";
            $sql .= ":links_instagram_link, ";
            $sql .= ":links_instagram_title, ";
            $sql .= ":links_message_link, ";
            $sql .= ":links_message_title, ";
            $sql .= ":links_contact, ";
            $sql .= ":links_created, ";
            $sql .= ":links_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "links_facebook_link" => $this->links_facebook_link,
                "links_facebook_title" => $this->links_facebook_title,
                "links_instagram_link" => $this->links_instagram_link,
                "links_instagram_title" => $this->links_instagram_title,
                "links_message_link" => $this->links_message_link,
                "links_message_title" => $this->links_message_title,
                "links_contact" => $this->links_contact,
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
            $sql .= "links_facebook_link = :links_facebook_link, ";
            $sql .= "links_facebook_title = :links_facebook_title, ";
            $sql .= "links_instagram_link = :links_instagram_link, ";
            $sql .= "links_instagram_title = :links_instagram_title, ";
            $sql .= "links_message_link = :links_message_link, ";
            $sql .= "links_message_title = :links_message_title, ";
            $sql .= "links_contact = :links_contact, ";
            $sql .= "links_datetime = :links_datetime ";
            $sql .= "where links_aid = :links_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "links_facebook_link" => $this->links_facebook_link,
                "links_facebook_title" => $this->links_facebook_title,
                "links_instagram_link" => $this->links_instagram_link,
                "links_instagram_title" => $this->links_instagram_title,
                "links_message_link" => $this->links_message_link,
                "links_message_title" => $this->links_message_title,
                "links_contact" => $this->links_contact,
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
