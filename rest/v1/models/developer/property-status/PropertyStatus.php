<?php
class PropertyStatus
{
    public $property_status_aid;
    public $property_status_is_active;
    public $property_status_name;
    public $property_status_description;
    public $property_status_created;
    public $property_status_datetime;


    public $property_status_start;
    public $property_status_total;
    public $property_status_search;

    public $connection;
    public $lastInsertedId;

    public $tblPropertyStatus;
    public $tblPropertyList;


    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPropertyStatus = "zapv1_property_status";
        $this->tblPropertyList = "zapv1_property_list";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblPropertyStatus} ";
            $sql .= "( property_status_name, ";
            $sql .= "property_status_description, ";
            $sql .= "property_status_is_active, ";
            $sql .= "property_status_created, ";
            $sql .= "property_status_datetime ) values ( ";
            $sql .= ":property_status_name, ";
            $sql .= ":property_status_description, ";
            $sql .= ":property_status_is_active, ";
            $sql .= ":property_status_created, ";
            $sql .= ":property_status_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "property_status_name" => $this->property_status_name,
                "property_status_description" => $this->property_status_description,
                "property_status_is_active" => $this->property_status_is_active,
                "property_status_created" => $this->property_status_created,
                "property_status_datetime" => $this->property_status_datetime,
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
            $sql = "select * from {$this->tblPropertyStatus} ";
            $sql .= "order by property_status_is_active desc, ";
            $sql .= "property_status_name asc ";
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
            $sql .= "from {$this->tblPropertyStatus} ";
            $sql .= "order by ";
            $sql .= "property_status_is_active desc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->property_status_start - 1,
                "total" => $this->property_status_total,
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
            $sql = "select * from {$this->tblPropertyStatus} ";
            $sql .= "where property_status_aid = :property_status_aid ";
            $sql .= "order by property_status_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "property_status_aid" => $this->property_status_aid,
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
            $sql = "update {$this->tblPropertyStatus} set ";
            $sql .= "property_status_name = :property_status_name, ";
            $sql .= "property_status_description = :property_status_description, ";
            $sql .= "property_status_datetime = :property_status_datetime ";
            $sql .= "where property_status_aid  = :property_status_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "property_status_name" => $this->property_status_name,
                "property_status_description" => $this->property_status_description,
                "property_status_datetime" => $this->property_status_datetime,
                "property_status_aid" => $this->property_status_aid,
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
            $sql = "update {$this->tblPropertyStatus} set ";
            $sql .= "property_status_is_active = :property_status_is_active, ";
            $sql .= "property_status_datetime = :property_status_datetime ";
            $sql .= "where property_status_aid = :property_status_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "property_status_is_active" => $this->property_status_is_active,
                "property_status_datetime" => $this->property_status_datetime,
                "property_status_aid" => $this->property_status_aid,
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
            $sql = "delete from {$this->tblPropertyStatus} ";
            $sql .= "where property_status_aid = :property_status_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "property_status_aid" => $this->property_status_aid,
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
            $sql = "select property_status_name from {$this->tblPropertyStatus} ";
            $sql .= "where property_status_name = :property_status_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "property_status_name" => "{$this->property_status_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblPropertyStatus} ";
            $sql .= "where ";
            $sql .= "property_status_name like :property_status_name ";
            $sql .= "order by ";
            $sql .= "property_status_is_active desc, ";
            $sql .= "property_status_created asc, ";
            $sql .= "property_status_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                'property_status_name' => "%{$this->property_status_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // check association validation
    public function checkMenuAssociation()
    {
        try {
            $sql = "select list_property_status_id from {$this->tblPropertyList} ";
            $sql .= "where list_property_status_id = :property_status_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "property_status_aid" => "{$this->property_status_aid}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
