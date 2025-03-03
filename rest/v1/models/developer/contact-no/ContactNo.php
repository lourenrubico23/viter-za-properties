<?php

class ContactNo
{
    public $contact_no_aid;
    public $contact_no_contact;
    public $links_title;
    public $special_offers_price;
    public $links_link;
    public $contact_no_created;
    public $contact_no_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblContactNo;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblContactNo = "zapv1_header_contact_no";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblContactNo} ";
            $sql .= "order by contact_no_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblContactNo}";
            $sql .= "(contact_no_contact, ";
            $sql .= "contact_no_created, ";
            $sql .= "contact_no_datetime ) values ( ";
            $sql .= ":contact_no_contact, ";
            $sql .= ":contact_no_created, ";
            $sql .= ":contact_no_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_no_contact" => $this->contact_no_contact,
                "contact_no_created" => $this->contact_no_created,
                "contact_no_datetime" => $this->contact_no_datetime,
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
            $sql = "update {$this->tblContactNo} set ";
            $sql .= "contact_no_contact = :contact_no_contact, ";
            $sql .= "contact_no_datetime = :contact_no_datetime ";
            $sql .= "where contact_no_aid = :contact_no_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_no_contact" => $this->contact_no_contact,
                "contact_no_datetime" => $this->contact_no_datetime,
                "contact_no_aid" => $this->contact_no_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblContactNo} ";
            $sql .= "where contact_no_aid = :contact_no_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_no_aid" => $this->contact_no_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
