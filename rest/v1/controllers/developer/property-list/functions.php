<?php


// filter by search property type
function checkSearchPropertyType($object)
{
    $query = $object->searchPropertyType();
    checkQuery($query, "Empty records. (filter by search property type)");
    return $query;
}
