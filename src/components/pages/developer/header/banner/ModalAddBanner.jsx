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
} from "../../../../helpers/FormInputs";
import ModalAddWrapper from "../../../../partials/modals/ModalAddWrapper";
import useUploadMultiplePhoto from "../../../../custom-hooks/useUploadMultiplePhoto";
import ModalRemovedPhoto from "../../../../partials/modals/ModalRemovedPhoto";
import { FaTrash } from "react-icons/fa";
import LoadImages from "../../../../partials/LoadImages";

const ModalAddBanner = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const [withFile, setWithFile] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [fileData, setFileData] = React.useState(null);
  const [isRemovedPhoto, setIsRemovedPhoto] = React.useState(false);

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
    handleChangeMultiplePhoto(e, 1);
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

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${devApiVersion}/banner/${itemEdit.banner_aid}` // Update
          : `${devApiVersion}/banner`, // Create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["banner"],
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
      const photos = getConvertStringToJSONparseData(itemEdit.banner_image);
      setPhotoArrayList(photos);
    }
  }, []);

  // Initial values for mutation Formik
  const initVal = {
    banner_image: itemEdit ? itemEdit.banner_image : "",
    banner_page: itemEdit ? itemEdit.banner_page : "",
    banner_title: itemEdit ? itemEdit.banner_title : "",

    banner_image_old: itemEdit ? itemEdit.banner_image : "",
    pendingDeleteFile: [],
  };

  const yupSchema = Yup.object({
    banner_page: Yup.string().required("Required"),
  });

  return (
    <>
      <ModalAddWrapper
        handleClose={handleCloseModal}
        className={`transition-all ease-linear transform duration-200 ${animate}`}
      >
        <div className="modal-title">
          <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Banner</h2>
          <button onClick={handleCloseModal}>
            <GrFormClose className="text-[25px]" />
          </button>
        </div>
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            const data = {
              ...values,
              banner_image: Array.from(photoArrayList).map((item) =>
                JSON.stringify({
                  name: item.name,
                  id: item?.id || "",
                })
              ),
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
                <div className="modal-form">
                  <div className="modal_container overflow-y-auto overflow-x-hidden h-[100dvh]">
                    <div className="mt-5">
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
                          label="Upload Banner Image"
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
                              "banner_image"
                            )
                          }
                          onDrop={(e) =>
                            handleChangeFileUpload(
                              e,
                              props,
                              setPhotoArrayList,
                              "banner_image"
                            )
                          }
                          disabled={mutation.isPending || loading}
                          className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full z-20"
                        />
                      </div>

                      <div className="relative mb-6">
                        <ol className="flex flex-wrap gap-5 justify-center bg-gray-300">
                          {photoArrayList?.length > 0 &&
                            Array.from(photoArrayList).map((item, key) => {
                              const fileLink =
                                item instanceof File || item instanceof Blob
                                  ? URL.createObjectURL(item)
                                  : `${googleHDViewLink}${item?.id}`;

                              return (
                                <React.Fragment key={key}>
                                  <li
                                    className={`relative z-10 h-48 w-48 group cursor-pointer overflow-hidden ${
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
                    <div className="input-wrapper">
                      <InputSelect
                        label="*Page"
                        type="text"
                        name="banner_page"
                        disabled={mutation.isPending}
                      >
                        <option value="" disabled>
                          Select Page
                        </option>
                        <option value="Home">Home</option>
                        <option value="Properties">Properties</option>
                        <option value="Buyers">Buyers</option>
                        <option value="Sellers">Sellers</option>
                        <option value="Blogs">Blogs</option>
                        <option value="Contact">Contact</option>
                      </InputSelect>
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Title"
                        type="text"
                        name="banner_title"
                        className="text-xs"
                        disabled={mutation.isPending}
                      />
                    </div>
                  </div>
                  <div
                    className="modal__action fixed bottom-0 flex justify-end w-full pt-4
                     gap-2 bg-white pb-4 pr-11"
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

export default ModalAddBanner;
