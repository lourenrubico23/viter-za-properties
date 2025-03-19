<?php


// Create Buy Property
function checkCreateBuyProperty($object)
{
    $query = $object->createBuyProperty();
    checkQuery($query, "There's a problem processing your request. (create buy property)");
    return $query;
}

// Update Buy Property
function checkUpdateBuyProperty($object)
{
    $query = $object->updateBuyProperty();
    checkQuery($query, "There's a problem processing your request. (update buy property)");
    return $query;
}
