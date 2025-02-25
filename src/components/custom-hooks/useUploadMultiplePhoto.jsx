import { setError, setMessage } from "@/store/StoreAction";
import React from "react";
import { devApiUrl, fetchFormData } from "../helpers/functions-general";

const useUploadMultiplePhoto = (url, dispatch) => {
  const [photoArrayList, setPhotoArrayList] = React.useState([]);
  let isPhotoJsonString = false;

  const uploadMultiplePhoto = async () => {
    if (photoArrayList.length > 0) {
      const fd = new FormData();
      let count = 0;
      // loop file
      for (let i = 0; i < photoArrayList.length; i++) {
        if (
          photoArrayList[i] instanceof File !== true ||
          photoArrayList[i] instanceof Blob !== true
        ) {
          // isPhotoJsonString = true;
          continue;
        }
        fd.append(
          `file${count}`,
          photoArrayList[i],
          photoArrayList[i].name.toLowerCase()
        );
        count++;
      }
      // if photo is json string return succes and not upload
      // if (isPhotoJsonString) return { success: true };
      if (count === 0) return { success: true };
      // upload photo
      const data = await fetchFormData(devApiUrl + url, fd, dispatch);
      // if not success return error
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      }
      // return data
      return data;
    }
  };

  const handleChangeMultiplePhoto = (
    e, // onchange file input
    fileLimit = 1, // limit of file
    isAcceptImagesOnly = true // isAccept images only
  ) => {
    // let allImageSizes = 0;
    // check if input length of file limit
    let checkIsImageLimited = e.target.files.length > fileLimit;
    // check if file is empty
    if (e.target.files.length === 0) {
      setPhotoArrayList([]);
      dispatch(setError(false));
      return;
    }
    // limit and less length of files
    if (checkIsImageLimited) {
      dispatch(setError(true));
      dispatch(
        setMessage(`Invalid count of file. Only accept ${fileLimit} or less.`)
      );
      const checkCountIfFileIsImage = Array.from(e.target.files).filter(
        (item) => {
          // allImageSizes += item.size;
          return item.type.split("/")[0] !== "image";
        }
      );
      // CHECK IF IMAGE ONLY
      if (isAcceptImagesOnly && checkCountIfFileIsImage.length > 0) {
        dispatch(setError(true));
        dispatch(setMessage(`Invalid file. Input only accept images.`));
      }
      return;
    }
    // get files and sort by name
    const files = Array.from(e.target.files).sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    setPhotoArrayList(files);
  };

  return {
    uploadMultiplePhoto,
    handleChangeMultiplePhoto,
    setPhotoArrayList,
    photoArrayList,
  };
};

export default useUploadMultiplePhoto;
