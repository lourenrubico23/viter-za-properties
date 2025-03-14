<?php


class Colors
{
    public $colors_aid;
    public $colors_primary;
    public $colors_secondary;
    public $colors_accent;
    public $colors_light;
    public $colors_dark;
    public $colors_datetime;


    public $connection;
    public $lastInsertedId;

    public $tblColors;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblColors = "zapv1_colors";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblColors} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblColors}";
            $sql .= "(colors_primary, ";
            $sql .= "colors_secondary, ";
            $sql .= "colors_accent, ";
            $sql .= "colors_light, ";
            $sql .= "colors_dark, ";
            $sql .= "colors_datetime ) values ( ";
            $sql .= ":colors_primary, ";
            $sql .= ":colors_secondary, ";
            $sql .= ":colors_accent, ";
            $sql .= ":colors_light, ";
            $sql .= ":colors_dark, ";
            $sql .= ":colors_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "colors_primary" => $this->colors_primary,
                "colors_secondary" => $this->colors_secondary,
                "colors_accent" => $this->colors_accent,
                "colors_light" => $this->colors_light,
                "colors_dark" => $this->colors_dark,
                "colors_datetime" => $this->colors_datetime,
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
            $sql = "update {$this->tblColors} set ";
            $sql .= "colors_primary = :colors_primary, ";
            $sql .= "colors_secondary = :colors_secondary, ";
            $sql .= "colors_accent = :colors_accent, ";
            $sql .= "colors_light = :colors_light, ";
            $sql .= "colors_dark = :colors_dark, ";
            $sql .= "colors_datetime = :colors_datetime ";
            $sql .= "where colors_aid = :colors_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "colors_primary" => $this->colors_primary,
                "colors_secondary" => $this->colors_secondary,
                "colors_accent" => $this->colors_accent,
                "colors_light" => $this->colors_light,
                "colors_dark" => $this->colors_dark,
                "colors_datetime" => $this->colors_datetime,
                "colors_aid" => $this->colors_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
