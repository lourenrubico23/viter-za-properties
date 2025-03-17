import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import * as Yup from "yup";
import { FaTrash } from "react-icons/fa";
import { StoreContext } from "../../../../store/StoreContext";
import useUploadMultiplePhoto from "../../../custom-hooks/useUploadMultiplePhoto";
import {
  devApiVersion,
  getConvertStringToJSONparseData,
  googleHDViewLink,
  googleViewLink,
} from "../../../helpers/functions-general";
import { queryData } from "../../../custom-hooks/queryData";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import ModalAddWrapper from "../../../partials/modals/ModalAddWrapper";
import {
  InputFileUpload,
  InputText,
  InputTextArea,
} from "../../../helpers/FormInputs";
import LoadImages from "../../../partials/LoadImages";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import ModalRemovedPhoto from "../../../partials/modals/ModalRemovedPhoto";

const ModalAddBlogs = ({ itemEdit }) => {
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

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${devApiVersion}/blogs/${itemEdit.blogs_aid}` // Update
          : `${devApiVersion}/blogs`, // Create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
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
      const photos = getConvertStringToJSONparseData(itemEdit.blogs_img);
      setPhotoArrayList(photos);
    }
  }, []);

  // Initial values for mutation Formik
  const initVal = {
    blogs_img: itemEdit ? itemEdit.blogs_img : "",
    blogs_title: itemEdit ? itemEdit.blogs_title : "",
    blogs_author: itemEdit ? itemEdit.blogs_author : "",
    blogs_published_date: itemEdit ? itemEdit.blogs_published_date : "",
    blogs_brief_description: itemEdit ? itemEdit.blogs_brief_description : "",
    blogs_contents_a: itemEdit ? itemEdit.blogs_contents_a : "",
    blogs_contents_b: itemEdit ? itemEdit.blogs_contents_b : "",
    blogs_contents_c: itemEdit ? itemEdit.blogs_contents_c : "",

    blogs_img_old: itemEdit ? itemEdit.blogs_img : "",
    blogs_title_old: itemEdit ? itemEdit.blogs_title : "",
    pendingDeleteFile: [],
  };

  const yupSchema = Yup.object({
    blogs_title: Yup.string().required("Required"),
    blogs_author: Yup.string().required("Required"),
    blogs_published_date: Yup.string().required("Required"),
    blogs_brief_description: Yup.string().required("Required"),
  });

  return (
    <>
      <ModalAddWrapper
        handleClose={handleCloseModal}
        className={`transition-all ease-linear transform duration-200 max-w-[800px]  ${animate}`}
      >
        <div className="modal-title">
          <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Blog</h2>
          <button onClick={handleCloseModal}>
            <GrFormClose className="text-[25px]" />
          </button>
        </div>
        <div className="modal-content mb-[50px]">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              const data = {
                ...values,
                blogs_img: Array.from(photoArrayList).map((item) =>
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
                  <div className="modal-form mb-[50px]">
                    <div className="modal_container h-[100dvh] flex gap-7 mb-[250px]">
                      <div className="w-[50%] ">
                        <div className="input-wrapper">
                          <InputText
                            label="Title"
                            type="text"
                            name="blogs_title"
                            className="text-xs"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="Author"
                            type="text"
                            name="blogs_author"
                            className="text-xs"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="Published Date"
                            type="date"
                            name="blogs_published_date"
                            className="text-xs"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputTextArea
                            label="Brief Description"
                            type="text"
                            name="blogs_brief_description"
                            className="text-xs h-[200px]"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputTextArea
                            label="Body Section A"
                            type="text"
                            name="blogs_contents_a"
                            className="text-xs h-[200px]"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputTextArea
                            label="Body Section B"
                            type="text"
                            name="blogs_contents_b"
                            className="text-xs h-[200px]"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputTextArea
                            label="Body Section C"
                            type="text"
                            name="blogs_contents_c"
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
                                "blogs_img"
                              )
                            }
                            onDrop={(e) =>
                              handleChangeFileUpload(
                                e,
                                props,
                                setPhotoArrayList,
                                "blogs_img"
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

export default ModalAddBlogs;
