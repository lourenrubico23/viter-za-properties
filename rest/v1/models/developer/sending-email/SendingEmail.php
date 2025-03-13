<?php

class SendingEmail
{

    public $notification_email;


    public $connection;
    public $lastInsertedId;

    public $tblNotification;


    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblNotification = "zapv1_notification";
    }

    public function readAllEmail()
    {
        try {
            $sql = "select notification_email ";
            $sql .= "from ";
            $sql .= "{$this->tblNotification} ";
            $sql .= "order by notification_email ";
            $query = $this->connection->prepare($sql);
            $query->execute();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
