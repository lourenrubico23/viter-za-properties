<?php

// Require Response
require_once 'Response.php';
// Required google api vendor
require_once __DIR__ . '/../google-api/vendor/autoload.php';

use Google\Client;
use Google\Service\Drive;
// use Google\Service\Drive\Permission;

$response = new Response();
$error = [];
$returnData = [];

// START CHANGE DIRECTORY PATH FOR LOCAL AND ONLINE PRODUCTION

function getDirectoryPath()
{
    $localPath = __DIR__ . '/../../../public/img/';
    // $localPath = __DIR__ . '/../../../img/';

    return $localPath;
}

// GOOGLE API KEY
putenv('GOOGLE_APPLICATION_CREDENTIALS=' . __DIR__ . '/../google-api/google-key.json');

// END CHANGE DIRECTORY PATH FOR LOCAL AND ONLINE PRODUCTION

function deleteGoogleFileByFileId($fileId)
{
    if (!$fileId || $fileId == "") {
        $error["count"] = 0;
        $error["success"] = false;
        $error['error'] = 'File empty.';
        return $error;
    }
    try {
        $client = new Client();
        $client->useApplicationDefaultCredentials();
        $client->addScope(Drive::DRIVE);
        $driveService = new Drive($client);
        $queryResponse = $driveService->files->delete($fileId);

        $returnData["count"] = 0;
        $returnData["success"] = true;
        $returnData['data'] = $queryResponse;
        return $returnData;
    } catch (Exception $e) {
        $error["count"] = 0;
        $error["success"] = false;
        $error["driveErrMsg"] = "$e";
        $error['errorMsg'] = 'Authentication failed, check delete by file id google drive files.';
        return $error;
    }
}

// upload file to google drive with public viewing
function fileUploadToGoogleDriveWithPublicPermission($photo)
{
    // return if empty false
    if ($photo == null || $photo == '') {
        $error["count"] = 0;
        $error["success"] = false;
        $error['error'] = 'Image is empty.';
        return $error;
    };
    try {
        // SERVICE
        $client = new Client();
        $client->useApplicationDefaultCredentials();
        // $client->setScopes(Drive::DRIVE);
        $client->setScopes(['https://www.googleapis.com/auth/drive']);
        $driveService = new Drive($client);
        // store file id and permission id
        $googleIds = array();
        // get file img 
        $content = file_get_contents(getDirectoryPath() . strtolower($photo)); // GET FILE CONTENT
        $mimeType = mime_content_type(getDirectoryPath() . strtolower($photo)); // GET FILE TYPE
        // CREATE METADATA
        $fileMetadata = new Drive\DriveFile(array(
            'name' => $photo,
            'writersCanShare' => true,
            'ignoreDefaultVisibility' => true
        ));
        // CREATE FILE
        $requestCreateFile = $driveService->files->create($fileMetadata, array(
            'data' => $content,
            'mimeType' => $mimeType, // ANY FILE TYPE
            'uploadType' => 'multipart',
            'fields' => 'id'
        ));
        // get file id
        $googleIds['file_id'] = $requestCreateFile['id'];
        // PERMISSION METADATA
        $permissionMetaData = new Drive\Permission(array(
            'type' => 'anyone',
            'role' => 'reader',
            'allowFileDiscovery' => true,
            'withLink' => true
        ));
        // CREATE PERMISSION
        $requestNewPermissions = $driveService->permissions->create(
            $googleIds['file_id'],
            $permissionMetaData,
            array('fields' => 'id')
        );
        $googleIds['permission'] = $requestNewPermissions['id'];  // get permission id
        $returnData['success'] = true;       // return success and ids
        $returnData['id'] = $googleIds;
        unlink(getDirectoryPath() . strtolower($photo)); // removed temporary img
        return $returnData;
    } catch (Exception $e) {
        unlink(getDirectoryPath() . strtolower($photo)); // removed temporary img
        $error["count"] = 0;
        $error["success"] = false;
        $error["driveErrMsg"] = "$e";
        $error['error'] = 'Authentication Failed.';
        return $error;
    }
}

function multipleFileUploadToGoogleDriveWithPublicPermission($photoArray)
{
    $resultArray = [];
    $error = [];
    // loop photos array
    for ($i = 0; $i < count($photoArray); $i++) {
        // upload photo and return id
        $uploadData = fileUploadToGoogleDriveWithPublicPermission(
            $photoArray[$i]
        );
        // if success store name and google id in result array
        if ($uploadData['success'] == true) {
            $arrayData = [];
            $arrayData['name'] = $photoArray[$i];
            $arrayData['id'] = $uploadData['id']['file_id'];
            $arrayData['datetime'] = date('Y-m-d H:i:s');
            array_push($resultArray, $arrayData);
        } else {
            // if error return error message from upload photo function and break loop
            $error = $uploadData;
            break;
        }
    }
    if (count($error) != 0) return $error;   // if error uploading return error
    $resultArray['success'] = true;  // return success upload and data
    return $resultArray;
}

// rename file or folder in google drive api
function renameFile($fileId = '', $newTitle = '')
{
    if ($fileId == '' || !$fileId) return false;
    try {
        // SERVICE
        $client = new Client();
        $client->useApplicationDefaultCredentials();
        $client->setScopes(['https://www.googleapis.com/auth/drive']);
        $driveService = new Drive($client);
        $file = new Drive\DriveFile($client);
        $file->setName($newTitle);
        $updateFile = $driveService->files->update($fileId, $file);
        $returnData['data'] = $updateFile;
        $returnData['success'] = true;
        return $returnData;
    } catch (Exception $e) {
        $resultArray['success'] = false;
        return $resultArray;
    }
}

function checkToUploadGoogleDrive($files, $oldFiles)
{
    $result = '';
    if ($files != $oldFiles && count($files) > 0) {
        // DECODE ARRAY FILES
        $jsonDecodeFiles = array_map(fn($value) => json_decode($value), $files);
        // FILTER FILES WITHOUT IDS IN GOOGLE API
        $filterFileWithoutId = array_filter($jsonDecodeFiles, fn($val) => $val->id == '');
        // GET ALL FILE NAMES WITHOUT GOOGLE IDS
        $getArrayFileNames = array_map(fn($value) => $value->name, array_values($filterFileWithoutId));
        // UPLOAD ALL FILES WITHOUT GOOGLE IDS
        $uploadToGoogleData = multipleFileUploadToGoogleDriveWithPublicPermission($getArrayFileNames);
        // IF GOOGLE API ERROR RETURN ERROR MSG
        if ($uploadToGoogleData['success'] == false) returnError($uploadToGoogleData['error']);
        unset($uploadToGoogleData['success']); // UNSET UNSET DATA
        // CONVERT STRINGIFY DATA TO ARRAY
        $oldDataConvertToJSON = json_decode($oldFiles, true);
        $oldData = is_array($oldDataConvertToJSON) ? $oldDataConvertToJSON : []; // RETURN OLD DATA TO ARRAY
        $newData = $uploadToGoogleData; // ALREADY AN ARRAY
        $mergeDataArray = array_merge($oldData, $newData); // MERGE ARRAY 
        $result = json_encode($mergeDataArray);   // SAVE DATA AS STRINGIFY IN DATABASE
    }
    return $result;
}

// function checkDeleteGoogleDriveApiFiles($files, $pendingDeleteFile = [])
// {
//     $value = $files;
//     if (count($pendingDeleteFile) > 0) {
//         $jsonDecodeFiles = is_string($files) ? json_decode($files) : $files;  // DECODE ARRAY FILES
//         $storeData = $jsonDecodeFiles; // STORE NEW DATA 
//         $filterFileId = array_map(fn($value) => $value->id, $storeData); // FILTER ALL GOOGLE ID
//         $resultIds = []; // STORE GOOGLE IDS
//         // LOOP TO STORE TO DELETE ID
//         for ($i = 0; $i < count($pendingDeleteFile); $i++) {
//             $decodeItem = json_decode($pendingDeleteFile[$i]); // DECODE ID 
//             $googleIds = is_object($decodeItem) ? $decodeItem->id : $decodeItem[0]->id; // GET ID
//             array_push($resultIds, $googleIds); // PUSH TO ARRAY GOOGLE ALL ID
//             deleteGoogleFileByFileId($googleIds); // DELETE FILE IN GOOGLE API
//         }
//         // LOOP REMAINING FILE TO REMOVED
//         for ($i = 0; $i < count($resultIds); $i++) {
//             $indexToDelete = array_search($resultIds[$i], $filterFileId); // SEARCH AND GET INDEX BY ID
//             unset($storeData[$indexToDelete]);
//         }
//         $result = array_values($storeData); // RE INDEX ARRAY TO REMOVED ARRAY KEY
//         $value = json_encode($result); // JSON ENCODE ARRAY
//     }
//     return $value;
// }

function checkDeleteGoogleDriveApiFiles($files, $pendingDeleteFile = [])
{
    $value = $files;
    if (!empty($pendingDeleteFile)) {
        $jsonDecodeFiles = is_string($files) ? json_decode($files) : $files; // Decode files if needed
        $storeData = is_array($jsonDecodeFiles) ? $jsonDecodeFiles : []; // Ensure it's an array
        if (!empty($storeData)) { // Ensure there are files to process
            $filterFileId = array_map(fn($value) => $value->id, $storeData); // Extract Google IDs
            $resultIds = []; // Store Google IDs to delete
            // Loop through pending delete files
            foreach ($pendingDeleteFile as $deleteItem) {
                $decodeItem = json_decode($deleteItem); // Decode item
                $googleIds = is_object($decodeItem) ? $decodeItem->id : $decodeItem[0]->id; // Get ID
                array_push($resultIds, $googleIds); // Store the Google ID
                deleteGoogleFileByFileId($googleIds); // Delete file from Google API
            }
            // Remove deleted files from the list
            foreach ($resultIds as $id) {
                $indexToDelete = array_search($id, $filterFileId); // Find index
                if ($indexToDelete !== false) {
                    unset($storeData[$indexToDelete]); // Remove file entry
                }
            }
        }
        // Handle empty case properly
        if (empty($storeData)) {
            $value = null; // Store NULL instead of '[]'
        } else {
            $result = array_values($storeData); // Reindex the array
            $value = json_encode($result); // Encode back to JSON
        }
    }

    return $value;
}
