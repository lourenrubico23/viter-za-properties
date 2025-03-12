<?php

// association with subscribers to audience name
function isAssociatedCheckMenuAssociation($object)
{
    $query = $object->checkMenuAssociation();
    $count = $query->rowCount();
    checkExistence($count, "You cannot delete this item because it is already associated with other module.");
}
