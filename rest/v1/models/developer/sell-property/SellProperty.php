<?php

class SellProperty
{
    public $sell_aid;
    public $sell_title;
    public $sell_description;
    public $sell_button;
    public $sell_buy_title;
    public $sell_buy_description;
    public $sell_buy_button;
    public $sell_created;
    public $sell_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblSellProperty;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSellProperty = "zapv1_sell";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSellProperty} ";
            $sql .= "order by sell_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblSellProperty}";
            $sql .= "(sell_title, ";
            $sql .= "sell_description, ";
            $sql .= "sell_button, ";
            $sql .= "sell_created, ";
            $sql .= "sell_datetime ) values ( ";
            $sql .= ":sell_title, ";
            $sql .= ":sell_description, ";
            $sql .= ":sell_button, ";
            $sql .= ":sell_created, ";
            $sql .= ":sell_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sell_title" => $this->sell_title,
                "sell_description" => $this->sell_description,
                "sell_button" => $this->sell_button,
                "sell_created" => $this->sell_created,
                "sell_datetime" => $this->sell_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createBuyProperty()
    {
        try {
            $sql = "insert into {$this->tblSellProperty}";
            $sql .= "(sell_buy_title, ";
            $sql .= "sell_buy_description, ";
            $sql .= "sell_buy_button, ";
            $sql .= "sell_created, ";
            $sql .= "sell_datetime ) values ( ";
            $sql .= ":sell_buy_title, ";
            $sql .= ":sell_buy_description, ";
            $sql .= ":sell_buy_button, ";
            $sql .= ":sell_created, ";
            $sql .= ":sell_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sell_buy_title" => $this->sell_buy_title,
                "sell_buy_description" => $this->sell_buy_description,
                "sell_buy_button" => $this->sell_buy_button,
                "sell_created" => $this->sell_created,
                "sell_datetime" => $this->sell_datetime,
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
            $sql = "update {$this->tblSellProperty} set ";
            $sql .= "sell_title = :sell_title, ";
            $sql .= "sell_description = :sell_description, ";
            $sql .= "sell_button = :sell_button, ";
            $sql .= "sell_datetime = :sell_datetime ";
            $sql .= "where sell_aid = :sell_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sell_title" => $this->sell_title,
                "sell_description" => $this->sell_description,
                "sell_button" => $this->sell_button,
                "sell_datetime" => $this->sell_datetime,
                "sell_aid" => $this->sell_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateBuyProperty()
    {
        try {
            $sql = "update {$this->tblSellProperty} set ";
            $sql .= "sell_buy_title = :sell_buy_title, ";
            $sql .= "sell_buy_description = :sell_buy_description, ";
            $sql .= "sell_buy_button = :sell_buy_button, ";
            $sql .= "sell_datetime = :sell_datetime ";
            $sql .= "where sell_aid = :sell_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sell_buy_title" => $this->sell_buy_title,
                "sell_buy_description" => $this->sell_buy_description,
                "sell_buy_button" => $this->sell_buy_button,
                "sell_datetime" => $this->sell_datetime,
                "sell_aid" => $this->sell_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblSellProperty} ";
            $sql .= "where sell_aid = :sell_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sell_aid" => $this->sell_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
