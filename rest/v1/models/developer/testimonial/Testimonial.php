<?php

class Testimonial
{
    public $testimonial_aid;
    public $testimonial_name;
    public $testimonial_occupation;
    public $testimonial_feedback;
    public $testimonial_created;
    public $testimonial_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblTestimonial;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblTestimonial = "zapv1_testimonial";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblTestimonial} ";
            $sql .= "order by testimonial_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblTestimonial}";
            $sql .= "(testimonial_name, ";
            $sql .= "testimonial_occupation, ";
            $sql .= "testimonial_feedback, ";
            $sql .= "testimonial_created, ";
            $sql .= "testimonial_datetime ) values ( ";
            $sql .= ":testimonial_name, ";
            $sql .= ":testimonial_occupation, ";
            $sql .= ":testimonial_feedback, ";
            $sql .= ":testimonial_created, ";
            $sql .= ":testimonial_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "testimonial_name" => $this->testimonial_name,
                "testimonial_occupation" => $this->testimonial_occupation,
                "testimonial_feedback" => $this->testimonial_feedback,
                "testimonial_created" => $this->testimonial_created,
                "testimonial_datetime" => $this->testimonial_datetime,
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
            $sql = "update {$this->tblTestimonial} set ";
            $sql .= "testimonial_name = :testimonial_name, ";
            $sql .= "testimonial_occupation = :testimonial_occupation, ";
            $sql .= "testimonial_feedback = :testimonial_feedback, ";
            $sql .= "testimonial_datetime = :testimonial_datetime ";
            $sql .= "where testimonial_aid = :testimonial_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "testimonial_name" => $this->testimonial_name,
                "testimonial_occupation" => $this->testimonial_occupation,
                "testimonial_feedback" => $this->testimonial_feedback,
                "testimonial_datetime" => $this->testimonial_datetime,
                "testimonial_aid" => $this->testimonial_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblTestimonial} ";
            $sql .= "where testimonial_aid = :testimonial_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "testimonial_aid" => $this->testimonial_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
