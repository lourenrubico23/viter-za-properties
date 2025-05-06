<?php
class FeaturedProperties
{
    public $featured_properties_aid;
    public $featured_properties_is_active;
    public $featured_properties_property_id;
    public $featured_properties_property_name;
    public $featured_properties_created;
    public $featured_properties_datetime;


    public $featured_properties_start;
    public $featured_properties_total;
    public $featured_properties_search;

    public $connection;
    public $lastInsertedId;

    public $tblFeaturedProperties;
    public $tblPropertyList;


    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblFeaturedProperties = "zapv1_featured_properties";
        $this->tblPropertyList = "zapv1_property_list";
    }

    // create
    public function create()
    {
        try {
            $sql = "INSERT INTO {$this->tblFeaturedProperties} ";
            $sql .= "(featured_properties_property_id, ";
            $sql .= "featured_properties_property_name, ";
            $sql .= "featured_properties_is_active, ";
            $sql .= "featured_properties_created, ";
            $sql .= "featured_properties_datetime) ";
            $sql .= "SELECT :featured_properties_property_id, "; // Instead of using VALUES to insert data, the function uses a SELECT to specify the data to insert
            $sql .= ":featured_properties_property_name, ";
            $sql .= ":featured_properties_is_active, ";
            $sql .= ":featured_properties_created, ";
            $sql .= ":featured_properties_datetime ";
            $sql .= "FROM DUAL "; //DUAL is used to perform the INSERT without querying any real table, allowing the SELECT statement to insert values
            $sql .= "WHERE (SELECT COUNT(*) FROM {$this->tblFeaturedProperties}) < 7"; // it checks if the total number of records in the featured_properties table is less than 7
            $query = $this->connection->prepare($sql);
            $query->execute([
                "featured_properties_property_id" => $this->featured_properties_property_id,
                "featured_properties_property_name" => $this->featured_properties_property_name,
                "featured_properties_is_active" => $this->featured_properties_is_active,
                "featured_properties_created" => $this->featured_properties_created,
                "featured_properties_datetime" => $this->featured_properties_datetime,
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
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblFeaturedProperties} as featured, ";
            $sql .= "{$this->tblPropertyList} as list ";
            $sql .= "where featured.featured_properties_property_id = list.list_aid ";
            $sql .= "order by ";
            $sql .= "featured_properties_aid desc ";
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
            $sql .= "from {$this->tblFeaturedProperties} as featured, ";
            $sql .= "{$this->tblPropertyList} as list ";
            $sql .= "where featured.featured_properties_property_id = list.list_aid ";
            $sql .= "order by ";
            $sql .= "featured_properties_aid desc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->featured_properties_start - 1,
                "total" => $this->featured_properties_total,
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
            $sql = "select * from {$this->tblFeaturedProperties} ";
            $sql .= "where featured_properties_aid = :featured_properties_aid ";
            $sql .= "order by featured_properties_property_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "featured_properties_aid" => $this->featured_properties_aid,
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
            $sql = "update {$this->tblFeaturedProperties} set ";
            $sql .= "featured_properties_property_id = :featured_properties_property_id, ";
            $sql .= "featured_properties_property_name = :featured_properties_property_name, ";
            $sql .= "featured_properties_datetime = :featured_properties_datetime ";
            $sql .= "where featured_properties_aid  = :featured_properties_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "featured_properties_property_id" => $this->featured_properties_property_id,
                "featured_properties_property_name" => $this->featured_properties_property_name,
                "featured_properties_datetime" => $this->featured_properties_datetime,
                "featured_properties_aid" => $this->featured_properties_aid,
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
            $sql = "update {$this->tblFeaturedProperties} set ";
            $sql .= "featured_properties_is_active = :featured_properties_is_active, ";
            $sql .= "featured_properties_datetime = :featured_properties_datetime ";
            $sql .= "where featured_properties_aid = :featured_properties_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "featured_properties_is_active" => $this->featured_properties_is_active,
                "featured_properties_datetime" => $this->featured_properties_datetime,
                "featured_properties_aid" => $this->featured_properties_aid,
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
            $sql = "delete from {$this->tblFeaturedProperties} ";
            $sql .= "where featured_properties_aid = :featured_properties_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "featured_properties_aid" => $this->featured_properties_aid,
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
            $sql .= "from {$this->tblFeaturedProperties} ";
            $sql .= "where ";
            $sql .= "featured_properties_property_name like :featured_properties_property_name ";
            $sql .= "order by ";
            $sql .= "featured_properties_is_active desc, ";
            $sql .= "featured_properties_created asc, ";
            $sql .= "featured_properties_property_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                'featured_properties_property_name' => "%{$this->featured_properties_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    //  search for property list modal
    public function searchPropertyList()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblPropertyList} ";
            $sql .= "where list_name like :list_name ";
            $sql .= "and list_is_active = 1 ";
            $sql .= "order by ";
            $sql .= "list_aid desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "list_name" => "%{$this->featured_properties_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
