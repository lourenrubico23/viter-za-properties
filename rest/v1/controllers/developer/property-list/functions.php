<?php


// filter by search property type modal
function checkSearchPropertyType($object)
{
    $query = $object->searchPropertyType();
    checkQuery($query, "Empty records. (filter by search property type)");
    return $query;
}

// filter by search property type modal
function checkSearchPropertyStatus($object)
{
    $query = $object->searchPropertyStatus();
    checkQuery($query, "Empty records. (filter by search property status)");
    return $query;
}

// filter by property status
function checkFilterByPropertyStatus($object)
{
    $query = $object->filterByPropertyStatus();
    checkQuery($query, "Empty records. (filter by property status)");
    return $query;
}

// filter by location
function checkFilterByLocation($object)
{
    $query = $object->filterByLocation();
    checkQuery($query, "Empty records. (filter by Location)");
    return $query;
}

// filter by property type
function checkFilterByPropertyType($object)
{
    $query = $object->filterByPropertyType();
    checkQuery($query, "Empty records. (filter by property type)");
    return $query;
}

// filter by property status and location
function checkFilterByPropertyStatusAndLocation($object)
{
    $query = $object->filterByPropertyStatusAndLocation();
    checkQuery($query, "Empty records. (filter by property status and location)");
    return $query;
}

// filter by property status and property type
function checkFilterByPropertyStatusAndPropertyType($object)
{
    $query = $object->filterByPropertyStatusAndPropertyType();
    checkQuery($query, "Empty records. (filter by property status and property type)");
    return $query;
}

// filter by location and property type
function checkFilterByLocationAndPropertyType($object)
{
    $query = $object->filterByLocationAndPropertyType();
    checkQuery($query, "Empty records. (filter by location and property type)");
    return $query;
}

// filter by property status, location and property type
function checkFilterByPropertyStatusAndLocationAndPropertyType($object)
{
    $query = $object->filterByPropertyStatusAndLocationAndPropertyType();
    checkQuery($query, "Empty records. (filter by property status, location and property type)");
    return $query;
}

// filter by search and property status
function checkSearchAndPropertyStatus($object)
{
    $query = $object->searchAndPropertyStatus();
    checkQuery($query, "Empty records. (filter by location and property status)");
    return $query;
}

// filter by search and location
function checkSearchAndLocation($object)
{
    $query = $object->searchAndLocation();
    checkQuery($query, "Empty records. (filter by search and location)");
    return $query;
}

// filter by search and property type
function checkSearchAndPropertyType($object)
{
    $query = $object->searchAndPropertyType();
    checkQuery($query, "Empty records. (filter by search and property type)");
    return $query;
}

// filter by search, property status and location
function checkFilterBySearchStatusAndLocation($object)
{
    $query = $object->filterBySearchStatusAndLocation();
    checkQuery($query, "Empty records. (filter by search, property status and location)");
    return $query;
}

// filter by search, property status and property type
function checkFilterBySearchStatusAndPropertyType($object)
{
    $query = $object->filterBySearchStatusAndPropertyType();
    checkQuery($query, "Empty records. (filter by search, property status and property type)");
    return $query;
}

// filter by search, location and property type
function checkFilterBySearchLocationAndPropertyType($object)
{
    $query = $object->filterBySearchLocationAndPropertyType();
    checkQuery($query, "Empty records. (filter by search, location and property type)");
    return $query;
}

// filter by search, property status, location and property type
function checkfilterBySearchStatusAndLocationAndPropertyType($object)
{
    $query = $object->filterBySearchStatusAndLocationAndPropertyType();
    checkQuery($query, "Empty records. (filter by search, property status, location and property type)");
    return $query;
}
