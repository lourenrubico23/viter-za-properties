<?php
class PropertyList
{
    public $list_aid;
    public $list_is_active;
    public $list_property_type_id;
    public $list_property_type_name;
    public $list_property_status_id;
    public $list_property_status_name;
    public $list_name;
    public $list_price;
    public $list_location;
    public $list_city;
    public $list_id;
    public $list_floor_area;
    public $list_lot_area;
    public $list_bedrooms;
    public $list_bathrooms;
    public $list_carport;
    public $list_key_features;
    public $list_best_buy;
    public $list_img;
    public $list_created;
    public $list_datetime;

    public $connection;
    public $lastInsertedId;
    public $list_start;
    public $list_total;
    public $list_search;

    public $tblPropertyList;
    public $tblPropertyType;
    public $tblPropertyStatus;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPropertyList = "zapv1_property_list";
        $this->tblPropertyType = "zapv1_property_type";
        $this->tblPropertyStatus = "zapv1_property_status";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblPropertyList} ";
            $sql .= "( list_name, ";
            $sql .= "list_property_type_id, ";
            $sql .= "list_property_type_name, ";
            $sql .= "list_property_status_id, ";
            $sql .= "list_property_status_name, ";
            $sql .= "list_price, ";
            $sql .= "list_location, ";
            $sql .= "list_city, ";
            $sql .= "list_is_active, ";
            $sql .= "list_id, ";
            $sql .= "list_floor_area, ";
            $sql .= "list_lot_area, ";
            $sql .= "list_bedrooms, ";
            $sql .= "list_bathrooms, ";
            $sql .= "list_carport, ";
            $sql .= "list_key_features, ";
            $sql .= "list_best_buy, ";
            $sql .= "list_img, ";
            $sql .= "list_created, ";
            $sql .= "list_datetime ) values ( ";
            $sql .= ":list_name, ";
            $sql .= ":list_property_type_id, ";
            $sql .= ":list_property_type_name, ";
            $sql .= ":list_property_status_id, ";
            $sql .= ":list_property_status_name, ";
            $sql .= ":list_price, ";
            $sql .= ":list_location, ";
            $sql .= ":list_city, ";
            $sql .= ":list_is_active, ";
            $sql .= ":list_id, ";
            $sql .= ":list_floor_area, ";
            $sql .= ":list_lot_area, ";
            $sql .= ":list_bedrooms, ";
            $sql .= ":list_bathrooms, ";
            $sql .= ":list_carport, ";
            $sql .= ":list_key_features, ";
            $sql .= ":list_best_buy, ";
            $sql .= ":list_img, ";
            $sql .= ":list_created, ";
            $sql .= ":list_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "list_name" => $this->list_name,
                "list_property_type_id" => $this->list_property_type_id,
                "list_property_type_name" => $this->list_property_type_name,
                "list_property_status_id" => $this->list_property_status_id,
                "list_property_status_name" => $this->list_property_status_name,
                "list_price" => $this->list_price,
                "list_location" => $this->list_location,
                "list_city" => $this->list_city,
                "list_is_active" => $this->list_is_active,
                "list_id" => $this->list_id,
                "list_floor_area" => $this->list_floor_area,
                "list_lot_area" => $this->list_lot_area,
                "list_bedrooms" => $this->list_bedrooms,
                "list_bathrooms" => $this->list_bathrooms,
                "list_carport" => $this->list_carport,
                "list_key_features" => $this->list_key_features,
                "list_best_buy" => $this->list_best_buy,
                "list_img" => $this->list_img,
                "list_created" => $this->list_created,
                "list_datetime" => $this->list_datetime,
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
            $sql = "select * from {$this->tblPropertyList} ";
            $sql .= "order by list_is_active desc, ";
            $sql .= "list_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read limit
    public function readLimit()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPropertyList} as list, ";
            $sql .= "{$this->tblPropertyType} as type, ";
            $sql .= "{$this->tblPropertyStatus} as status ";
            $sql .= "where list.list_property_type_id = type.property_type_aid ";
            $sql .= "and list.list_property_status_id = status.property_status_aid ";
            $sql .= "order by list.list_is_active desc, ";
            $sql .= "list.list_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->list_start - 1,
                "total" => $this->list_total,
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
            $sql = "select * from {$this->tblPropertyList} ";
            $sql .= "where list_aid = :list_aid ";
            $sql .= "order by list_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "list_aid" => $this->list_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // search
    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblPropertyList} as list, ";
            $sql .= " {$this->tblPropertyType} as type, ";
            $sql .= " {$this->tblPropertyStatus} as status ";
            $sql .= "where ";
            $sql .= "list.list_property_type_id = type.property_type_aid ";
            $sql .= "and list.list_property_status_id = status.property_status_aid ";
            $sql .= "and (list.list_name like :list_name ";
            $sql .= "or list.list_price like :list_price ";
            $sql .= "or type.property_type_name like :property_type_name ";
            $sql .= "or list.list_location like :list_location ";
            $sql .= "or status.property_status_name like :property_status_name) ";
            $sql .= "order by list.list_is_active desc, ";
            $sql .= "list.list_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "list_name" => "%{$this->list_search}%",
                "list_price" => "%{$this->list_search}%",
                "property_type_name" => "%{$this->list_search}%",
                "property_status_name" => "%{$this->list_search}%",
                "list_location" => "%{$this->list_search}%",
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
            $sql = "update {$this->tblPropertyList} set ";
            $sql .= "list_name = :list_name, ";
            $sql .= "list_property_type_id = :list_property_type_id, ";
            $sql .= "list_property_type_name = :list_property_type_name, ";
            $sql .= "list_property_status_id = :list_property_status_id, ";
            $sql .= "list_property_status_name = :list_property_status_name, ";
            $sql .= "list_price = :list_price, ";
            $sql .= "list_location = :list_location, ";
            $sql .= "list_city = :list_city, ";
            $sql .= "list_id = :list_id, ";
            $sql .= "list_floor_area = :list_floor_area, ";
            $sql .= "list_lot_area = :list_lot_area, ";
            $sql .= "list_bedrooms = :list_bedrooms, ";
            $sql .= "list_bathrooms = :list_bathrooms, ";
            $sql .= "list_carport = :list_carport, ";
            $sql .= "list_key_features = :list_key_features, ";
            $sql .= "list_best_buy = :list_best_buy, ";
            $sql .= "list_img = :list_img, ";
            $sql .= "list_datetime = :list_datetime ";
            $sql .= "where list_aid  = :list_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "list_name" => $this->list_name,
                "list_property_type_id" => $this->list_property_type_id,
                "list_property_type_name" => $this->list_property_type_name,
                "list_property_status_id" => $this->list_property_status_id,
                "list_property_status_name" => $this->list_property_status_name,
                "list_price" => $this->list_price,
                "list_location" => $this->list_location,
                "list_city" => $this->list_city,
                "list_id" => $this->list_id,
                "list_floor_area" => $this->list_floor_area,
                "list_lot_area" => $this->list_lot_area,
                "list_bedrooms" => $this->list_bedrooms,
                "list_bathrooms" => $this->list_bathrooms,
                "list_carport" => $this->list_carport,
                "list_key_features" => $this->list_key_features,
                "list_best_buy" => $this->list_best_buy,
                "list_img" => $this->list_img,
                "list_datetime" => $this->list_datetime,
                "list_aid" => $this->list_aid,
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
            $sql = "update {$this->tblPropertyList} set ";
            $sql .= "list_is_active = :list_is_active, ";
            $sql .= "list_datetime = :list_datetime ";
            $sql .= "where list_aid = :list_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "list_is_active" => $this->list_is_active,
                "list_datetime" => $this->list_datetime,
                "list_aid" => $this->list_aid,
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
            $sql = "delete from {$this->tblPropertyList} ";
            $sql .= "where list_aid = :list_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "list_aid" => $this->list_aid,
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
            $sql = "select list_name from {$this->tblPropertyList} ";
            $sql .= "where list_name = :list_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "list_name" => "{$this->list_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    //  search for property type modal
    public function searchPropertyType()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblPropertyType} ";
            $sql .= "where property_type_name like :property_type_name ";
            $sql .= "and property_type_is_active = 1 ";
            $sql .= "order by ";
            $sql .= "property_type_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "property_type_name" => "%{$this->list_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    //  search for property type modal
    public function searchPropertyStatus()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblPropertyStatus} ";
            $sql .= "where property_status_name like :property_status_name ";
            $sql .= "and property_status_is_active = 1 ";
            $sql .= "order by ";
            $sql .= "property_status_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "property_status_name" => "%{$this->list_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by property status
    public function filterByPropertyStatus()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPropertyList} ";
            $sql .= "where list_property_status_id = :list_property_status_id ";
            $sql .= "order by list_created desc, ";
            $sql .= "list_name asc, ";
            $sql .= "list_property_status_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "list_property_status_id" => $this->list_property_status_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by location
    public function filterByLocation()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPropertyList} ";
            $sql .= "where list_city = :list_city ";
            $sql .= "order by list_created desc, ";
            $sql .= "list_name asc, ";
            $sql .= "list_city asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "list_city" => $this->list_city,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by property type
    public function filterByPropertyType()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPropertyList} ";
            $sql .= "where list_property_type_id = :list_property_type_id ";
            $sql .= "order by list_created desc, ";
            $sql .= "list_name asc, ";
            $sql .= "list_property_type_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "list_property_type_id" => $this->list_property_type_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by property status and location
    public function filterByPropertyStatusAndLocation()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPropertyList} ";
            $sql .= "where list_property_status_id = :list_property_status_id ";
            $sql .= "and list_city = :list_city ";
            $sql .= "order by list_created desc, ";
            $sql .= "list_name asc, ";
            $sql .= "list_property_status_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "list_property_status_id" => $this->list_property_status_id,
                "list_city" => $this->list_city,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by property status and property type
    public function filterByPropertyStatusAndPropertyType()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPropertyList} ";
            $sql .= "where list_property_status_id = :list_property_status_id ";
            $sql .= "and list_property_type_id = :list_property_type_id ";
            $sql .= "order by list_created desc, ";
            $sql .= "list_name asc, ";
            $sql .= "list_property_status_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "list_property_status_id" => $this->list_property_status_id,
                "list_property_type_id" => $this->list_property_type_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by location and property type
    public function filterByLocationAndPropertyType()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPropertyList} ";
            $sql .= "where list_city = :list_city ";
            $sql .= "and list_property_type_id = :list_property_type_id ";
            $sql .= "order by list_created desc, ";
            $sql .= "list_name asc, ";
            $sql .= "list_city asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "list_city" => $this->list_city,
                "list_property_type_id" => $this->list_property_type_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by property status, location and property type
    public function filterByPropertyStatusAndLocationAndPropertyType()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPropertyList} ";
            $sql .= "where list_city = :list_city ";
            $sql .= "and list_property_type_id = :list_property_type_id ";
            $sql .= "and list_property_status_id = :list_property_status_id ";
            $sql .= "order by list_created desc, ";
            $sql .= "list_name asc, ";
            $sql .= "list_city asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "list_city" => $this->list_city,
                "list_property_type_id" => $this->list_property_type_id,
                "list_property_status_id" => $this->list_property_status_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by search and property status
    public function searchAndPropertyStatus()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPropertyList} ";
            $sql .= "where list_property_status_id = :list_property_status_id ";
            $sql .= "and (list_name like :list_name ";
            $sql .= "or list_price like :list_price ";
            $sql .= "or list_id like :list_id ";
            $sql .= "or list_city like :list_city ";
            $sql .= "or list_floor_area like :list_floor_area ";
            $sql .= "or list_lot_area like :list_lot_area ";
            $sql .= "or list_bedrooms like :list_bedrooms ";
            $sql .= "or list_key_features like :list_key_features ";
            $sql .= "or list_best_buy like :list_best_buy ";
            $sql .= "or list_bathrooms like :list_bathrooms) ";
            $sql .= "order by list_created desc, ";
            $sql .= "list_name asc, ";
            $sql .= "list_property_status_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "list_name" => "%{$this->list_search}%",
                "list_price" => "%{$this->list_search}%",
                "list_id" => "%{$this->list_search}%",
                "list_city" => "%{$this->list_search}%",
                "list_floor_area" => "%{$this->list_search}%",
                "list_lot_area" => "%{$this->list_search}%",
                "list_bedrooms" => "%{$this->list_search}%",
                "list_key_features" => "%{$this->list_search}%",
                "list_best_buy" => "%{$this->list_search}%",
                "list_bathrooms" => "%{$this->list_search}%",
                "list_property_status_id" => $this->list_property_status_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by search and location
    public function searchAndLocation()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPropertyList} ";
            $sql .= "where list_city = :list_city ";
            $sql .= "and (list_name like :list_name ";
            $sql .= "or list_price like :list_price ";
            $sql .= "or list_id like :list_id ";
            $sql .= "or list_floor_area like :list_floor_area ";
            $sql .= "or list_lot_area like :list_lot_area ";
            $sql .= "or list_bedrooms like :list_bedrooms ";
            $sql .= "or list_key_features like :list_key_features ";
            $sql .= "or list_best_buy like :list_best_buy ";
            $sql .= "or list_bathrooms like :list_bathrooms) ";
            $sql .= "order by list_created desc, ";
            $sql .= "list_name asc, ";
            $sql .= "list_city asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "list_name" => "%{$this->list_search}%",
                "list_price" => "%{$this->list_search}%",
                "list_id" => "%{$this->list_search}%",
                "list_floor_area" => "%{$this->list_search}%",
                "list_lot_area" => "%{$this->list_search}%",
                "list_bedrooms" => "%{$this->list_search}%",
                "list_key_features" => "%{$this->list_search}%",
                "list_best_buy" => "%{$this->list_search}%",
                "list_bathrooms" => "%{$this->list_search}%",
                "list_city" => $this->list_city,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by search and property type
    public function searchAndPropertyType()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPropertyList} ";
            $sql .= "where list_property_type_id = :list_property_type_id ";
            $sql .= "and (list_name like :list_name ";
            $sql .= "or list_price like :list_price ";
            $sql .= "or list_id like :list_id ";
            $sql .= "or list_city like :list_city ";
            $sql .= "or list_floor_area like :list_floor_area ";
            $sql .= "or list_lot_area like :list_lot_area ";
            $sql .= "or list_bedrooms like :list_bedrooms ";
            $sql .= "or list_key_features like :list_key_features ";
            $sql .= "or list_best_buy like :list_best_buy ";
            $sql .= "or list_bathrooms like :list_bathrooms) ";
            $sql .= "order by list_created desc, ";
            $sql .= "list_name asc, ";
            $sql .= "list_property_type_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "list_name" => "%{$this->list_search}%",
                "list_price" => "%{$this->list_search}%",
                "list_id" => "%{$this->list_search}%",
                "list_city" => "%{$this->list_search}%",
                "list_floor_area" => "%{$this->list_search}%",
                "list_lot_area" => "%{$this->list_search}%",
                "list_bedrooms" => "%{$this->list_search}%",
                "list_key_features" => "%{$this->list_search}%",
                "list_best_buy" => "%{$this->list_search}%",
                "list_bathrooms" => "%{$this->list_search}%",
                "list_property_type_id" => $this->list_property_type_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by search, property status and location
    public function filterBySearchStatusAndLocation()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPropertyList} ";
            $sql .= "where list_property_status_id = :list_property_status_id ";
            $sql .= "and list_city = :list_city ";
            $sql .= "and (list_name like :list_name ";
            $sql .= "or list_price like :list_price ";
            $sql .= "or list_id like :list_id ";
            $sql .= "or list_floor_area like :list_floor_area ";
            $sql .= "or list_lot_area like :list_lot_area ";
            $sql .= "or list_bedrooms like :list_bedrooms ";
            $sql .= "or list_key_features like :list_key_features ";
            $sql .= "or list_best_buy like :list_best_buy ";
            $sql .= "or list_bathrooms like :list_bathrooms) ";
            $sql .= "order by list_created desc, ";
            $sql .= "list_name asc, ";
            $sql .= "list_property_status_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "list_name" => "%{$this->list_search}%",
                "list_price" => "%{$this->list_search}%",
                "list_id" => "%{$this->list_search}%",
                "list_floor_area" => "%{$this->list_search}%",
                "list_lot_area" => "%{$this->list_search}%",
                "list_bedrooms" => "%{$this->list_search}%",
                "list_key_features" => "%{$this->list_search}%",
                "list_best_buy" => "%{$this->list_search}%",
                "list_bathrooms" => "%{$this->list_search}%",
                "list_property_status_id" => $this->list_property_status_id,
                "list_city" => $this->list_city,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by search, property status and property type
    public function filterBySearchStatusAndPropertyType()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPropertyList} ";
            $sql .= "where list_property_status_id = :list_property_status_id ";
            $sql .= "and list_property_type_id = :list_property_type_id ";
            $sql .= "and (list_name like :list_name ";
            $sql .= "or list_price like :list_price ";
            $sql .= "or list_id like :list_id ";
            $sql .= "or list_floor_area like :list_floor_area ";
            $sql .= "or list_lot_area like :list_lot_area ";
            $sql .= "or list_bedrooms like :list_bedrooms ";
            $sql .= "or list_key_features like :list_key_features ";
            $sql .= "or list_best_buy like :list_best_buy ";
            $sql .= "or list_bathrooms like :list_bathrooms) ";
            $sql .= "order by list_created desc, ";
            $sql .= "list_name asc, ";
            $sql .= "list_property_status_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "list_name" => "%{$this->list_search}%",
                "list_price" => "%{$this->list_search}%",
                "list_id" => "%{$this->list_search}%",
                "list_floor_area" => "%{$this->list_search}%",
                "list_lot_area" => "%{$this->list_search}%",
                "list_bedrooms" => "%{$this->list_search}%",
                "list_key_features" => "%{$this->list_search}%",
                "list_best_buy" => "%{$this->list_search}%",
                "list_bathrooms" => "%{$this->list_search}%",
                "list_property_status_id" => $this->list_property_status_id,
                "list_property_type_id" => $this->list_property_type_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by search, location and property type
    public function filterBySearchLocationAndPropertyType()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPropertyList} ";
            $sql .= "where list_city = :list_city ";
            $sql .= "and list_property_type_id = :list_property_type_id ";
            $sql .= "and (list_name like :list_name ";
            $sql .= "or list_price like :list_price ";
            $sql .= "or list_id like :list_id ";
            $sql .= "or list_floor_area like :list_floor_area ";
            $sql .= "or list_lot_area like :list_lot_area ";
            $sql .= "or list_bedrooms like :list_bedrooms ";
            $sql .= "or list_key_features like :list_key_features ";
            $sql .= "or list_best_buy like :list_best_buy ";
            $sql .= "or list_bathrooms like :list_bathrooms) ";
            $sql .= "order by list_created desc, ";
            $sql .= "list_name asc, ";
            $sql .= "list_city asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "list_name" => "%{$this->list_search}%",
                "list_price" => "%{$this->list_search}%",
                "list_id" => "%{$this->list_search}%",
                "list_floor_area" => "%{$this->list_search}%",
                "list_lot_area" => "%{$this->list_search}%",
                "list_bedrooms" => "%{$this->list_search}%",
                "list_key_features" => "%{$this->list_search}%",
                "list_best_buy" => "%{$this->list_search}%",
                "list_bathrooms" => "%{$this->list_search}%",
                "list_city" => $this->list_city,
                "list_property_type_id" => $this->list_property_type_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by search, property status, location and property type
    public function filterBySearchStatusAndLocationAndPropertyType()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPropertyList} ";
            $sql .= "where list_city = :list_city ";
            $sql .= "and list_property_type_id = :list_property_type_id ";
            $sql .= "and list_property_status_id = :list_property_status_id ";
            $sql .= "and (list_name like :list_name ";
            $sql .= "or list_price like :list_price ";
            $sql .= "or list_id like :list_id ";
            $sql .= "or list_floor_area like :list_floor_area ";
            $sql .= "or list_lot_area like :list_lot_area ";
            $sql .= "or list_bedrooms like :list_bedrooms ";
            $sql .= "or list_key_features like :list_key_features ";
            $sql .= "or list_best_buy like :list_best_buy ";
            $sql .= "or list_bathrooms like :list_bathrooms) ";
            $sql .= "order by list_created desc, ";
            $sql .= "list_name asc, ";
            $sql .= "list_city asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "list_name" => "%{$this->list_search}%",
                "list_price" => "%{$this->list_search}%",
                "list_id" => "%{$this->list_search}%",
                "list_floor_area" => "%{$this->list_search}%",
                "list_lot_area" => "%{$this->list_search}%",
                "list_bedrooms" => "%{$this->list_search}%",
                "list_key_features" => "%{$this->list_search}%",
                "list_best_buy" => "%{$this->list_search}%",
                "list_bathrooms" => "%{$this->list_search}%",
                "list_city" => $this->list_city,
                "list_property_type_id" => $this->list_property_type_id,
                "list_property_status_id" => $this->list_property_status_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
