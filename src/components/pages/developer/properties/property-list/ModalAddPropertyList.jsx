import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import * as Yup from "yup";

import { StoreContext } from "../../../../../store/StoreContext";
import {
  devApiVersion,
  getConvertStringToJSONparseData,
  googleHDViewLink,
  googleViewLink,
} from "../../../../helpers/functions-general";
import { queryData } from "../../../../custom-hooks/queryData";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../../store/StoreAction";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import {
  InputFileUpload,
  InputSelect,
  InputText,
  InputTextArea,
} from "../../../../helpers/FormInputs";
import ModalAddWrapper from "../../../../partials/modals/ModalAddWrapper";
import useUploadMultiplePhoto from "../../../../custom-hooks/useUploadMultiplePhoto";
import ModalRemovedPhoto from "../../../../partials/modals/ModalRemovedPhoto";
import { FaTrash } from "react-icons/fa";
import LoadImages from "../../../../partials/LoadImages";
import useQueryData from "../../../../custom-hooks/useQueryData";
import TableSpinner from "../../../../partials/spinners/TableSpinner";
import ServerError from "../../../../partials/spinners/ServerError";
import NoData from "../../../../partials/spinners/NoData";

const ModalAddPropertyList = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const [withFile, setWithFile] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [fileData, setFileData] = React.useState(null);
  const [isRemovedPhoto, setIsRemovedPhoto] = React.useState(false);

  const [onFocusPropertyType, setOnFocusPropertyType] = React.useState(false);
  const [propertyTypeValue, setPropertyTypeValue] = React.useState(
    itemEdit ? `${itemEdit.property_type_name}` : ""
  ); // to get the data from table when update
  const [propertyType, setPropertyType] = React.useState(
    itemEdit ? itemEdit.property_type_name : ""
  );
  const [propertyTypeId, setPropertyTypeId] = React.useState(
    itemEdit ? itemEdit.list_property_type_id : ""
  );

  // multiple files
  const {
    uploadMultiplePhoto,
    handleChangeMultiplePhoto,
    setPhotoArrayList,
    photoArrayList,
  } = useUploadMultiplePhoto(
    `${devApiVersion}/upload-multiple-photo`,
    dispatch
  );

  // handle for file upload
  const handleChangeFileUpload = (
    e,
    props,
    setPhotoArrayList,
    fieldValue = ""
  ) => {
    handleChangeMultiplePhoto(e, 50);
    const files = e.target.files;
    if (files.length > 3) return e;
    let myFiles = Array.from(files);
    props.setFieldValue(fieldValue, myFiles);
    const oldFiles = photoArrayList?.length > 0 ? photoArrayList : [];
    setPhotoArrayList([...oldFiles, ...myFiles]);
  };

  const handleCloseModal = () => {
    setAnimate("translate-x-full");
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  const handleClickViewSlideshow = (photos, key) => {
    if (mutation.isPending || loading) return;
    const link =
      photos[key] instanceof Blob || photos[key] instanceof File
        ? URL.createObjectURL(photos[key])
        : `${googleViewLink}${photos[key]?.id}`;
    window.open(link, "_blank");
  };

  // delete the file in the server (public)
  const handleRemovePhoto = (photos, key, props) => {
    if (mutation.isPending || loading) return;
    setFileData({ images: photos, itemKey: key, props });
    setIsRemovedPhoto(true);
  };

  const {
    isFetching: propertyTypeDataIsFetching,
    error: propertyTypeDataError,
    data: propertyTypeData,
  } = useQueryData(
    `${devApiVersion}/property-list/property-type-search`, // endpoint
    "post", // method
    "property-list/property-type-search", // key
    {
      searchValue: propertyType, // payload
    },
    {
      searchValue: propertyType, // id
    },
    true // refetchOnWindowFocus
  );

  const handleClickPropertyType = (item) => {
    setPropertyType(item.property_type_name);
    setPropertyTypeValue(`${item.property_type_name}`);
    setPropertyTypeId(item.property_type_aid);
    setOnFocusPropertyType(false);
  };

  const handleOnChangePropertyType = (e) => {
    setPropertyTypeValue(e.target.value);
    setLoading(true);
    setPropertyTypeId("");
    if (e.target.value === "") {
      setLoading(false);
    }

    let timeOut;

    timeOut = setTimeout(() => {
      clearTimeout(timeOut);
      let val = e.target.value;
      if (val === "") {
        setPropertyType(val);
        return;
      }
      setPropertyType(val);
      setLoading(false);
    }, 500); // debounce seconds to fetch
  };

  // to close the modal when clicking outside for Subscriber
  const refPropertyType = React.useRef();

  const clickOutsideRefPropertyType = (e) => {
    if (
      refPropertyType.current !== undefined &&
      refPropertyType.current !== null &&
      !refPropertyType.current?.contains(e.target)
    ) {
      setOnFocusPropertyType(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", clickOutsideRefPropertyType);
    return () =>
      document.addEventListener("click", clickOutsideRefPropertyType);
  }, []);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${devApiVersion}/property-list/${itemEdit.list_aid}` // Update
          : `${devApiVersion}/property-list`, // Create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["property-list"],
      });

      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      }
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? "Updated" : "Added"}.`));
      }
    },
  });

  React.useEffect(() => {
    setAnimate("");
    if (itemEdit) {
      const photos = getConvertStringToJSONparseData(itemEdit.list_img);
      setPhotoArrayList(photos);
    }
  }, []);

  // Initial values for mutation Formik
  const initVal = {
    list_img: itemEdit ? itemEdit.list_img : "",
    list_name: itemEdit ? itemEdit.list_name : "",
    list_price: itemEdit ? itemEdit.list_price : "",
    list_location: itemEdit ? itemEdit.list_location : "",
    list_property_type_id: itemEdit ? itemEdit.list_property_type_id : "",
    list_property_type_name: itemEdit ? itemEdit.list_property_type_name : "",
    list_id: itemEdit ? itemEdit.list_id : "",
    list_floor_area: itemEdit ? itemEdit.list_floor_area : "",
    list_lot_area: itemEdit ? itemEdit.list_lot_area : "",
    list_bedrooms: itemEdit ? itemEdit.list_bedrooms : "",
    list_bathrooms: itemEdit ? itemEdit.list_bathrooms : "",
    list_carport: itemEdit ? itemEdit.list_carport : "",
    list_key_features: itemEdit ? itemEdit.list_key_features : "",
    list_best_buy: itemEdit ? itemEdit.list_best_buy : "",

    list_img_old: itemEdit ? itemEdit.list_img : "",
    list_name_old: itemEdit ? itemEdit.list_name : "",
    pendingDeleteFile: [],
  };

  const yupSchema = Yup.object({
    list_name: Yup.string().required("Required"),
    list_price: Yup.string().required("Required"),
  });

  return (
    <>
      <ModalAddWrapper
        handleClose={handleCloseModal}
        className={`transition-all ease-linear transform duration-200 max-w-[800px]  ${animate}`}
      >
        <div className="modal-title">
          <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Property</h2>
          <button onClick={handleCloseModal}>
            <GrFormClose className="text-[25px]" />
          </button>
        </div>
        <div className="modal-content">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              if (propertyTypeId === "" || !propertyTypeId) {
                dispatch(setError(true));
                dispatch(setMessage("Property Type is Required."));
                return;
              }
              const data = {
                ...values,
                list_img: Array.from(photoArrayList).map((item) =>
                  JSON.stringify({
                    name: item.name,
                    id: item?.id || "",
                  })
                ),
                list_property_type_id: propertyTypeId,
                list_property_type_name: propertyType,
              };
              const photoUpload = await uploadMultiplePhoto();
              if (photoUpload?.success || !photoUpload?.success) {
                setLoading(false);
              }
              if (!loading) console.log(data);
              mutation.mutate(data);
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="modal-form mb-[50px]">
                    <div className="modal_container h-[100dvh] flex gap-7 mb-[200px]">
                      <div className="w-[50%] ">
                        <div className="relative input-wrapper">
                          <InputText
                            label="Property Type"
                            type="text"
                            value={propertyTypeValue}
                            name="list_property_type_id"
                            disabled={mutation.isPending}
                            onFocus={() => setOnFocusPropertyType(true)}
                            onChange={handleOnChangePropertyType}
                            refVal={refPropertyType}
                          />
                          {onFocusPropertyType && (
                            <div className="w-full h-40 max-h-40 overflow-y-auto absolute top-[33px] bg-white shadow-md z-50 rounded-sm border border-gray-200 pt-1">
                              {loading || propertyTypeDataIsFetching ? (
                                <TableSpinner />
                              ) : propertyTypeDataError ? (
                                <div className="my-7">
                                  <ServerError />
                                </div>
                              ) : propertyTypeData?.count > 0 ? (
                                propertyTypeData?.data.map((item, key) => (
                                  <div
                                    className="cursor-pointer hover:bg-gray-100 px-2"
                                    value={item.property_type_aid}
                                    key={key}
                                    onClick={() =>
                                      handleClickPropertyType(item)
                                    }
                                  >
                                    {item.property_type_name}
                                  </div>
                                ))
                              ) : (
                                <div className="my-7">
                                  <NoData />
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="Name"
                            type="text"
                            name="list_name"
                            className="text-xs"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="Price"
                            type="text"
                            name="list_price"
                            className="text-xs"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="Location"
                            type="text"
                            name="list_location"
                            className="text-xs"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="Property ID"
                            type="text"
                            name="list_id"
                            className="text-xs"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="Floor Area"
                            type="text"
                            name="list_floor_area"
                            className="text-xs"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="Lot Area"
                            type="text"
                            name="list_lot_area"
                            className="text-xs"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="Bedrooms"
                            type="text"
                            name="list_bedrooms"
                            className="text-xs"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="Bathrooms"
                            type="text"
                            name="list_bathrooms"
                            className="text-xs"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="Carport"
                            type="text"
                            name="list_carport"
                            className="text-xs"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputTextArea
                            label="Key Features"
                            type="text"
                            name="list_key_features"
                            className="text-xs h-[200px]"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputTextArea
                            label="Why This Property is a Best Buy?"
                            type="text"
                            name="list_best_buy"
                            className="text-xs h-[200px]"
                            disabled={mutation.isPending}
                          />
                        </div>
                      </div>
                      <div className=" w-[50%] ">
                        <span className="top-20 px-2 text-[12px]"></span>

                        <div
                          className={`relative mt-7 mb-6 border border-gray-300 rounded-md hover:border-primary hover:border-dashed ${
                            withFile && "border-primary border-dashed"
                          }`}
                          onDragOver={() => setWithFile(true)}
                          onDragLeave={() => setWithFile(false)}
                        >
                          <span className="min-h-20 flex items-center justify-center">
                            <span className="text-dark mr-1">Drag & Drop</span>{" "}
                            Photo here or{" "}
                            <span className="text-dark ml-1">Browse</span>
                          </span>

                          <InputFileUpload
                            label="Upload Images"
                            name="File"
                            type="file"
                            id="myFile"
                            accept="*"
                            title="Upload File"
                            multiple
                            onChange={(e) =>
                              handleChangeFileUpload(
                                e,
                                props,
                                setPhotoArrayList,
                                "list_img"
                              )
                            }
                            onDrop={(e) =>
                              handleChangeFileUpload(
                                e,
                                props,
                                setPhotoArrayList,
                                "list_img"
                              )
                            }
                            disabled={mutation.isPending || loading}
                            className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full z-20"
                          />
                        </div>

                        <div className="relative mb-6">
                          <ol className="flex flex-wrap gap-5 justify-center bg-gray-300 overflow-auto">
                            {photoArrayList?.length > 0 &&
                              Array.from(photoArrayList).map((item, key) => {
                                const fileLink =
                                  item instanceof File || item instanceof Blob
                                    ? URL.createObjectURL(item)
                                    : `${googleHDViewLink}${item?.id}`;

                                return (
                                  <React.Fragment key={key}>
                                    <li
                                      className={`relative z-10 h-[150px] w-[150px] group cursor-pointer overflow-hidden ${
                                        (mutation.isPending || loading) &&
                                        `!cursor-not-allowed`
                                      }`}
                                      onClick={() => {
                                        handleClickViewSlideshow(
                                          photoArrayList,
                                          key
                                        );
                                      }}
                                    >
                                      <LoadImages
                                        url={fileLink}
                                        className={`relative z-20 w-full h-full object-cover object-center`}
                                      />
                                      {(!mutation.isPending || !loading) && (
                                        <div className="hidden group-hover:inline-flex absolute top-0 z-30 w-full h-full bg-black/40 items-center justify-center text-white text-center ">
                                          <span>
                                            Click to View <br />
                                            {key + 1}. {item.name}
                                          </span>

                                          <div
                                            className="absolute bottom-0 right-0 flex items-center gap-2"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                            }}
                                          >
                                            <button
                                              type="button"
                                              className="text-red-600 p-20 mr-2 tooltip-action-table text-lg disabled:bg-transparent disabled:cursor-not-allowed disabled:text-red-400"
                                              data-tooltip={`Delete`}
                                              disabled={
                                                mutation.isPending || loading
                                              }
                                              onClick={() =>
                                                handleRemovePhoto(
                                                  photoArrayList,
                                                  key,
                                                  props
                                                )
                                              }
                                            >
                                              <FaTrash />
                                            </button>
                                          </div>
                                        </div>
                                      )}
                                    </li>
                                  </React.Fragment>
                                );
                              })}
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div
                      className="modal__action fixed bottom-0 flex justify-end w-full pt-4
                     gap-2 bg-white pb-4 pr-11 z-50"
                    >
                      <button
                        className="btn-modal-submit"
                        type="submit"
                        disabled={mutation.isPending || !props.dirty || loading}
                      >
                        {mutation.isPending ? (
                          <ButtonSpinner />
                        ) : itemEdit ? (
                          "Save"
                        ) : (
                          "Add"
                        )}
                      </button>
                      <button
                        onClick={handleCloseModal}
                        className="btn-modal-cancel"
                        type="reset"
                      >
                        Discard
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalAddWrapper>

      {isRemovedPhoto && (
        <ModalRemovedPhoto
          fileData={fileData.images}
          itemKey={fileData.itemKey}
          itemProps={fileData.props}
          msg="Are you sure you want to remove this file?"
          setIsModalShow={setIsRemovedPhoto}
          setNewFile={setPhotoArrayList}
        />
      )}
    </>
  );
};

export default ModalAddPropertyList;
