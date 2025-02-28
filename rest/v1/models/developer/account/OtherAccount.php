<?php

class OtherAccount
{
    public $user_aid;
    public $user_is_active;
    public $user_first_name;
    public $user_last_name;
    public $user_email;
    public $user_email_new;
    public $user_role_id;
    public $user_key;
    public $user_password;
    public $user_created;
    public $user_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblUser;
    public $tblRole;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblUser = "zapv1_settings_users";
        $this->tblRole = "zapv1_settings_role";
    }

    // read account
    public function readAccount()
    {
        try {
            $sql = "select user_aid, ";
            $sql .= "user_is_active, ";
            $sql .= "user_password ";
            $sql .= "from {$this->tblUser} ";
            $sql .= "where user_aid = :user_aid ";
            $sql .= "and user_is_active = 1 ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_aid" => $this->user_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // set password
    public function updatePassword()
    {
        try {
            $sql = "update {$this->tblUser} set ";
            $sql .= "user_password = :user_password, ";
            $sql .= "user_datetime = :user_datetime ";
            $sql .= "where user_aid = :user_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_password" => $this->user_password,
                "user_datetime" => $this->user_datetime,
                "user_aid" => $this->user_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
