<?php

// filter is active
function checkFilterIsActive($object)
{
    $query = $object->filterIsActive();
    checkQuery($query, "Empty records. (filter is active)");
    return $query;
}

function checkFilterSearch($object)
{
    $query = $object->filterSearch();
    checkQuery($query, "Empty records. (filter search)");
    return $query;
}

function checkSearchRole($object)
{
    $query = $object->searchRole();
    checkQuery($query, "Empty records. (search responsible)");
    return $query;
}
