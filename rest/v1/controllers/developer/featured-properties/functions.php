<?php


// filter by search property type modal
function checkSearchPropertyList($object)
{
    $query = $object->searchPropertyList();
    checkQuery($query, "Empty records. (filter by search property list)");
    return $query;
}
