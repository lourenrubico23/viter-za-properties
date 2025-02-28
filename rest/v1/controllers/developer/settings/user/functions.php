<?php

// read role
function checkReadRole($object)
{
    $query = $object->readRole();
    checkQuery($query, "Empty records. (role)");
    return $query;
}

// Update email
function checkUpdateAccountEmail($object)
{
    $query = $object->updateAccountEmail();
    checkQuery($query, "There's a problem processing your request. (update email)");
    return $query;
}

function checkFilterStatus($object)
{
    $query = $object->filterStatus();
    checkQuery($query, "Empty records. (filter status)");
    return $query;
}

function checkFilterStateSearch($object)
{
    $query = $object->filterStateSearch();
    checkQuery($query, "Empty records. (filter state search)");
    return $query;
}
function checkFilterIsActive($object)
{
    $query = $object->filterIsActive();
    checkQuery($query, "Empty records. (filter is active)");
    return $query;
}

function checkSearchUser($object)
{
    $query = $object->searchUser();
    checkQuery($query, "Empty records. (searchUser)");
    return $query;
}
