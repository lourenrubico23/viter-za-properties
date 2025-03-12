<?php


// filter by search property type
function checkSearchPropertyType($object)
{
    $query = $object->searchPropertyType();
    checkQuery($query, "Empty records. (filter by search property type)");
    return $query;
}

// filter by search property type
function checkSearchPropertyStatus($object)
{
    $query = $object->searchPropertyStatus();
    checkQuery($query, "Empty records. (filter by search property status)");
    return $query;
}
