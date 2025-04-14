<?php
class ContactForm
{
    public $form_aid;
    public $form_page;
    public $form_label;
    public $form_title;
    public $form_facebook;
    public $form_facebook_link;
    public $form_instagram;
    public $form_instagram_link;
    public $form_linkedIn;
    public $form_linkedIn_link;
    public $form_address;
    public $form_description;
    public $form_contact_description;
    public $form_contact_disclaimer;
    public $form_created;
    public $form_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblContactForm;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblContactForm = "zapv1_contact_form";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblContactForm} ";
            $sql .= "( form_facebook, ";
            $sql .= "form_facebook_link, ";
            $sql .= "form_label, ";
            $sql .= "form_title, ";
            $sql .= "form_linkedIn, ";
            $sql .= "form_linkedIn_link, ";
            $sql .= "form_address, ";
            $sql .= "form_page, ";
            $sql .= "form_description, ";
            $sql .= "form_contact_description, ";
            $sql .= "form_contact_disclaimer, ";
            $sql .= "form_instagram, ";
            $sql .= "form_instagram_link, ";
            $sql .= "form_created, ";
            $sql .= "form_datetime ) values ( ";
            $sql .= ":form_facebook, ";
            $sql .= ":form_facebook_link, ";
            $sql .= ":form_label, ";
            $sql .= ":form_title, ";
            $sql .= ":form_linkedIn, ";
            $sql .= ":form_linkedIn_link, ";
            $sql .= ":form_address, ";
            $sql .= ":form_page, ";
            $sql .= ":form_description, ";
            $sql .= ":form_contact_description, ";
            $sql .= ":form_contact_disclaimer, ";
            $sql .= ":form_instagram, ";
            $sql .= ":form_instagram_link, ";
            $sql .= ":form_created, ";
            $sql .= ":form_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "form_facebook" => $this->form_facebook,
                "form_facebook_link" => $this->form_facebook_link,
                "form_label" => $this->form_label,
                "form_title" => $this->form_title,
                "form_linkedIn" => $this->form_linkedIn,
                "form_linkedIn_link" => $this->form_linkedIn_link,
                "form_address" => $this->form_address,
                "form_page" => $this->form_page,
                "form_description" => $this->form_description,
                "form_contact_description" => $this->form_contact_description,
                "form_contact_disclaimer" => $this->form_contact_disclaimer,
                "form_instagram" => $this->form_instagram,
                "form_instagram_link" => $this->form_instagram_link,
                "form_created" => $this->form_created,
                "form_datetime" => $this->form_datetime,
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
            $sql = "select * from {$this->tblContactForm} ";
            $sql .= "order by form_page desc, ";
            $sql .= "form_facebook desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblContactForm} ";
            $sql .= "where form_aid = :form_aid ";
            $sql .= "order by form_facebook desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "form_aid" => $this->form_aid,
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
            $sql = "update {$this->tblContactForm} set ";
            $sql .= "form_facebook = :form_facebook, ";
            $sql .= "form_facebook_link = :form_facebook_link, ";
            $sql .= "form_label = :form_label, ";
            $sql .= "form_title = :form_title, ";
            $sql .= "form_linkedIn = :form_linkedIn, ";
            $sql .= "form_linkedIn_link = :form_linkedIn_link, ";
            $sql .= "form_address = :form_address, ";
            $sql .= "form_description = :form_description, ";
            $sql .= "form_contact_description = :form_contact_description, ";
            $sql .= "form_contact_disclaimer = :form_contact_disclaimer, ";
            $sql .= "form_instagram = :form_instagram, ";
            $sql .= "form_instagram_link = :form_instagram_link, ";
            $sql .= "form_datetime = :form_datetime ";
            $sql .= "where form_aid  = :form_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "form_facebook" => $this->form_facebook,
                "form_facebook_link" => $this->form_facebook_link,
                "form_label" => $this->form_label,
                "form_title" => $this->form_title,
                "form_linkedIn" => $this->form_linkedIn,
                "form_linkedIn_link" => $this->form_linkedIn_link,
                "form_address" => $this->form_address,
                "form_description" => $this->form_description,
                "form_contact_description" => $this->form_contact_description,
                "form_contact_disclaimer" => $this->form_contact_disclaimer,
                "form_instagram" => $this->form_instagram,
                "form_instagram_link" => $this->form_instagram_link,
                "form_datetime" => $this->form_datetime,
                "form_aid" => $this->form_aid,
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
            $sql = "delete from {$this->tblContactForm} ";
            $sql .= "where form_aid = :form_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "form_aid" => $this->form_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
