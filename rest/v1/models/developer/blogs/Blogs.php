<?php
class Blogs
{
    public $blogs_aid;
    public $blogs_is_active;
    public $blogs_title;
    public $blogs_author;
    public $blogs_published_date;
    public $blogs_brief_description;
    public $blogs_contents_a;
    public $blogs_contents_b;
    public $blogs_contents_c;
    public $blogs_img;
    public $blogs_created;
    public $blogs_datetime;

    public $connection;
    public $lastInsertedId;
    public $blogs_start;
    public $blogs_total;
    public $blogs_search;

    public $tblBlogs;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBlogs = "zapv1_blogs";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblBlogs} ";
            $sql .= "( blogs_published_date, ";
            $sql .= "blogs_title, ";
            $sql .= "blogs_author, ";
            $sql .= "blogs_contents_a, ";
            $sql .= "blogs_contents_b, ";
            $sql .= "blogs_is_active, ";
            $sql .= "blogs_contents_c, ";
            $sql .= "blogs_img, ";
            $sql .= "blogs_brief_description, ";
            $sql .= "blogs_created, ";
            $sql .= "blogs_datetime ) values ( ";
            $sql .= ":blogs_published_date, ";
            $sql .= ":blogs_title, ";
            $sql .= ":blogs_author, ";
            $sql .= ":blogs_contents_a, ";
            $sql .= ":blogs_contents_b, ";
            $sql .= ":blogs_is_active, ";
            $sql .= ":blogs_contents_c, ";
            $sql .= ":blogs_img, ";
            $sql .= ":blogs_brief_description, ";
            $sql .= ":blogs_created, ";
            $sql .= ":blogs_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "blogs_published_date" => $this->blogs_published_date,
                "blogs_title" => $this->blogs_title,
                "blogs_author" => $this->blogs_author,
                "blogs_contents_a" => $this->blogs_contents_a,
                "blogs_contents_b" => $this->blogs_contents_b,
                "blogs_is_active" => $this->blogs_is_active,
                "blogs_contents_c" => $this->blogs_contents_c,
                "blogs_img" => $this->blogs_img,
                "blogs_brief_description" => $this->blogs_brief_description,
                "blogs_created" => $this->blogs_created,
                "blogs_datetime" => $this->blogs_datetime,
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
            $sql = "select * from {$this->tblBlogs} ";
            $sql .= "order by blogs_is_active desc, ";
            $sql .= "blogs_published_date desc ";
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
            $sql .= "{$this->tblBlogs} ";
            $sql .= "order by blogs_is_active desc, ";
            $sql .= "blogs_published_date desc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->blogs_start - 1,
                "total" => $this->blogs_total,
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
            $sql = "select * from {$this->tblBlogs} ";
            $sql .= "where blogs_aid = :blogs_aid ";
            $sql .= "order by blogs_published_date desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "blogs_aid" => $this->blogs_aid,
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
            $sql .= "from {$this->tblBlogs} ";
            $sql .= "where ";
            $sql .= "blogs_title like :blogs_title ";
            $sql .= "and blogs_author like :blogs_author ";
            $sql .= "order by ";
            $sql .= "blogs_is_active desc, ";
            $sql .= "blogs_published_date desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                'blogs_title' => "%{$this->blogs_search}%",
                'blogs_author' => "%{$this->blogs_search}%",
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
            $sql = "update {$this->tblBlogs} set ";
            $sql .= "blogs_published_date = :blogs_published_date, ";
            $sql .= "blogs_title = :blogs_title, ";
            $sql .= "blogs_author = :blogs_author, ";
            $sql .= "blogs_contents_a = :blogs_contents_a, ";
            $sql .= "blogs_contents_b = :blogs_contents_b, ";
            $sql .= "blogs_contents_c = :blogs_contents_c, ";
            $sql .= "blogs_img = :blogs_img, ";
            $sql .= "blogs_brief_description = :blogs_brief_description, ";
            $sql .= "blogs_datetime = :blogs_datetime ";
            $sql .= "where blogs_aid  = :blogs_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "blogs_published_date" => $this->blogs_published_date,
                "blogs_title" => $this->blogs_title,
                "blogs_author" => $this->blogs_author,
                "blogs_contents_a" => $this->blogs_contents_a,
                "blogs_contents_b" => $this->blogs_contents_b,
                "blogs_contents_c" => $this->blogs_contents_c,
                "blogs_img" => $this->blogs_img,
                "blogs_brief_description" => $this->blogs_brief_description,
                "blogs_datetime" => $this->blogs_datetime,
                "blogs_aid" => $this->blogs_aid,
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
            $sql = "update {$this->tblBlogs} set ";
            $sql .= "blogs_is_active = :blogs_is_active, ";
            $sql .= "blogs_datetime = :blogs_datetime ";
            $sql .= "where blogs_aid = :blogs_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "blogs_is_active" => $this->blogs_is_active,
                "blogs_datetime" => $this->blogs_datetime,
                "blogs_aid" => $this->blogs_aid,
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
            $sql = "delete from {$this->tblBlogs} ";
            $sql .= "where blogs_aid = :blogs_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "blogs_aid" => $this->blogs_aid,
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
            $sql = "select blogs_title from {$this->tblBlogs} ";
            $sql .= "where blogs_title = :blogs_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "blogs_title" => "{$this->blogs_title}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
