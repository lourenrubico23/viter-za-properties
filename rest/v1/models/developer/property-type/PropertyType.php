<?php
class PropertyType
{
    public $property_type_aid;
    public $property_type_is_active;
    public $property_type_name;
    public $property_type_description;
    public $property_type_created;
    public $property_type_datetime;

    public $property_type_start;
    public $property_type_total;
    public $property_type_search;

    public $connection;
    public $lastInsertedId;

    public $tblPropertyType;
    public $tblUser;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPropertyType = "zapv1_property_type";
        $this->tblUser = "zapv1_settings_users";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblPropertyType} ";
            $sql .= "( property_type_name, ";
            $sql .= "property_type_description, ";
            $sql .= "property_type_is_active, ";
            $sql .= "property_type_created, ";
            $sql .= "property_type_datetime ) values ( ";
            $sql .= ":property_type_name, ";
            $sql .= ":property_type_description, ";
            $sql .= ":property_type_is_active, ";
            $sql .= ":property_type_created, ";
            $sql .= ":property_type_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "property_type_name" => $this->property_type_name,
                "property_type_description" => $this->property_type_description,
                "property_type_is_active" => $this->property_type_is_active,
                "property_type_created" => $this->property_type_created,
                "property_type_datetime" => $this->property_type_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function readAll()
    {
        try {
            $sql = "select * from {$this->tblPropertyType} ";
            $sql .= "order by property_type_is_active desc, ";
            $sql .= "property_type_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readLimit()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblPropertyType} ";
            $sql .= "order by ";
            $sql .= "property_type_is_active desc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->property_type_start - 1,
                "total" => $this->property_type_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblPropertyType} ";
            $sql .= "where property_type_aid = :property_type_aid ";
            $sql .= "order by property_type_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "property_type_aid" => $this->property_type_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function update()
    {
        try {
            $sql = "update {$this->tblPropertyType} set ";
            $sql .= "property_type_name = :property_type_name, ";
            $sql .= "property_type_description = :property_type_description, ";
            $sql .= "property_type_datetime = :property_type_datetime ";
            $sql .= "where property_type_aid  = :property_type_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "property_type_name" => $this->property_type_name,
                "property_type_description" => $this->property_type_description,
                "property_type_datetime" => $this->property_type_datetime,
                "property_type_aid" => $this->property_type_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // active
    public function active()
    {
        try {
            $sql = "update {$this->tblPropertyType} set ";
            $sql .= "property_type_is_active = :property_type_is_active, ";
            $sql .= "property_type_datetime = :property_type_datetime ";
            $sql .= "where property_type_aid = :property_type_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "property_type_is_active" => $this->property_type_is_active,
                "property_type_datetime" => $this->property_type_datetime,
                "property_type_aid" => $this->property_type_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // delete
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblPropertyType} ";
            $sql .= "where property_type_aid = :property_type_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "property_type_aid" => $this->property_type_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }



    // validator
    // name
    public function checkName()
    {
        try {
            $sql = "select property_type_name from {$this->tblPropertyType} ";
            $sql .= "where property_type_name = :property_type_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "property_type_name" => "{$this->property_type_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // public function checkUserOtherAssociation()
    // {
    //     try {
    //         $sql = "select user_role_id from {$this->tblUser} ";
    //         $sql .= "where user_role_id = :property_type_aid ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "property_type_aid" => "{$this->property_type_aid}",
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }


    // public function filterIsActive()
    // {
    //     try {
    //         $sql = "select ";
    //         $sql .= "property_type_aid, ";
    //         $sql .= "property_type_is_active, ";
    //         $sql .= "property_type_name ";
    //         $sql .= "from {$this->tblPropertyType} ";
    //         $sql .= "where ";
    //         $sql .= "property_type_is_active = :property_type_is_active ";
    //         $sql .= "order by ";
    //         $sql .= "property_type_is_active desc ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             'property_type_is_active' => $this->property_type_is_active,

    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }


    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblPropertyType} ";
            $sql .= "where ";
            $sql .= "property_type_name like :property_type_name ";
            $sql .= "order by ";
            $sql .= "property_type_is_active desc, ";
            $sql .= "property_type_created asc, ";
            $sql .= "property_type_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                'property_type_name' => "%{$this->property_type_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
