import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import * as Yup from "yup";
import { FaTrash } from "react-icons/fa";
import { StoreContext } from "../../../../store/StoreContext";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import {
  devApiVersion,
  getConvertStringToJSONparseData,
  googleHDViewLink,
  googleViewLink,
} from "../../../helpers/functions-general";
import useUploadMultiplePhoto from "../../../custom-hooks/useUploadMultiplePhoto";
import { queryData } from "../../../custom-hooks/queryData";
import {
  InputFileUpload,
  InputText,
  InputTextArea,
} from "../../../helpers/FormInputs";
import LoadImages from "../../../partials/LoadImages";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import ModalRemovedPhoto from "../../../partials/modals/ModalRemovedPhoto";
import ModalAddWrapper from "../../../partials/modals/ModalAddWrapper";

const ModalAddAbout = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const [withFile, setWithFile] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [fileData, setFileData] = React.useState({
    images: [],
    itemKey: null,
    props: null,
    type: "", // 'client' or 'logo'
  });
  const [isRemovedPhoto, setIsRemovedPhoto] = React.useState(false);

  // multiple files
  const {
    uploadMultiplePhoto: uploadClientImages,
    handleChangeMultiplePhoto: handleChangeClientImages,
    setPhotoArrayList: setClientImages,
    photoArrayList: clientImages,
  } = useUploadMultiplePhoto(
    `${devApiVersion}/upload-multiple-photo`,
    dispatch
  );

  const {
    uploadMultiplePhoto: uploadLogoImages,
    handleChangeMultiplePhoto: handleChangeLogoImages,
    setPhotoArrayList: setLogoImages,
    photoArrayList: logoImages,
  } = useUploadMultiplePhoto(
    `${devApiVersion}/upload-multiple-photo`,
    dispatch
  );

  const handleClickViewSlideshow = (photos, key) => {
    if (mutation.isPending || loading) return;
    const link =
      photos[key] instanceof Blob || photos[key] instanceof File
        ? URL.createObjectURL(photos[key])
        : `${googleViewLink}${photos[key]?.id}`;
    window.open(link, "_blank");
  };

  // delete the file in the server (public)
  const handleRemovePhoto = (photos, key, props, type) => {
    if (mutation.isPending || loading) return;
    setFileData({ images: photos, itemKey: key, props, type });
    setIsRemovedPhoto(true);
  };

  const handleCloseModal = () => {
    setAnimate("translate-x-full");
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${devApiVersion}/about/${itemEdit.about_aid}` // Update
          : `${devApiVersion}/about`, // Create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["about"],
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
      const clientPhotos = getConvertStringToJSONparseData(itemEdit.about_img);
      setClientImages(clientPhotos);
    }
    if (itemEdit) {
      const logoPhotos = getConvertStringToJSONparseData(
        itemEdit.about_logo_img
      );
      setLogoImages(logoPhotos);
    }
  }, []);

  // Initial values for mutation Formik
  const initVal = {
    about_name: itemEdit ? itemEdit.about_name : "",
    about_paragraph_a: itemEdit ? itemEdit.about_paragraph_a : "",
    about_paragraph_b: itemEdit ? itemEdit.about_paragraph_b : "",
    about_paragraph_c: itemEdit ? itemEdit.about_paragraph_c : "",
    about_img: itemEdit ? itemEdit.about_img : "",
    about_logo_img: itemEdit ? itemEdit.about_logo_img : "",

    about_img_old: itemEdit ? itemEdit.about_img : "",
    about_logo_img_old: itemEdit ? itemEdit.about_logo_img : "",
    pendingDeleteFile: [],
  };

  const yupSchema = Yup.object({});

  return (
    <>
      <ModalAddWrapper
        handleClose={handleCloseModal}
        className={`transition-all ease-linear transform duration-200 max-w-[900px]  ${animate}`}
      >
        <div className="modal-title">
          <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} About</h2>
          <button onClick={handleCloseModal}>
            <GrFormClose className="text-[25px]" />
          </button>
        </div>
        <div className="modal-content">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values) => {
              setLoading(true);

              const data = {
                ...values,
                about_img: clientImages.map((item) =>
                  JSON.stringify({
                    name: item.name,
                    id: item?.id || "",
                  })
                ),
                about_logo_img: logoImages.map((item) =>
                  JSON.stringify({
                    name: item.name,
                    id: item?.id || "",
                  })
                ),
              };

              // Upload separately
              const clientPhotoUpload = await uploadClientImages(clientImages);
              const logoPhotoUpload = await uploadLogoImages(logoImages);

              if (clientPhotoUpload?.success || logoPhotoUpload?.success) {
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
                    <div className="modal_container h-[100dvh] flex gap-7">
                      <div className=" flex gap-4">
                        <div className="mt-5">
                          <span className="top-20 px-2 text-[12px]"></span>
                          <div
                            className={`relative mt-4 mb-4 border border-gray-300 rounded-md hover:border-primary hover:border-dashed w-[230px] text-xs ${
                              withFile && "border-primary border-dashed"
                            }`}
                            onDragOver={() => setWithFile(true)}
                            onDragLeave={() => setWithFile(false)}
                          >
                            <span className="min-h-16 flex items-center justify-center">
                              <span className="text-dark mr-1">
                                Drag & Drop
                              </span>{" "}
                              Photo here or{" "}
                              <span className="text-dark ml-1">Browse</span>
                            </span>

                            <InputFileUpload
                              label="Upload Profile Image"
                              name="File"
                              type="file"
                              id="myFile"
                              accept="*"
                              title="Upload Image"
                              onChange={handleChangeClientImages}
                              onDrop={(e) => handleChangeClientImages(e)}
                              disabled={mutation.isPending || loading}
                              className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full z-20"
                            />
                          </div>

                          <div className="relative w-[230px] ">
                            <ol className="flex flex-wrap gap-5 justify-center bg-gray-300 ">
                              {clientImages.length > 0 &&
                                clientImages.map((item, key) => {
                                  const fileLink =
                                    item instanceof File || item instanceof Blob
                                      ? URL.createObjectURL(item)
                                      : `${googleHDViewLink}${item?.id}`;

                                  return (
                                    <React.Fragment key={key}>
                                      <li
                                        className={`relative z-10 h-32 w-48 group cursor-pointer overflow-hidden ${
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
                                          className="relative z-20 w-full h-full object-cover object-center"
                                        />
                                        {(!mutation.isPending || !loading) && (
                                          <div className="hidden group-hover:inline-flex absolute top-0 z-30 w-full h-full bg-black/40 items-center justify-center text-white text-center text-xs">
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
                                                    clientImages,
                                                    key,
                                                    props,
                                                    "client"
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
                        <div className="w-[300px]">
                          <div className="input-wrapper">
                            <InputText
                              label="Name"
                              type="text"
                              name="about_name"
                              className="text-xs"
                              disabled={mutation.isPending}
                            />
                          </div>
                          <div className="input-wrapper">
                            <InputTextArea
                              label="First Paragraph"
                              type="text"
                              name="about_paragraph_a"
                              className="text-xs h-[200px]"
                              disabled={mutation.isPending}
                            />
                          </div>
                          <div className="input-wrapper">
                            <InputTextArea
                              label="Second Paragraph"
                              type="text"
                              name="about_paragraph_b"
                              className="text-xs h-[200px]"
                              disabled={mutation.isPending}
                            />
                          </div>
                          <div className="input-wrapper">
                            <InputTextArea
                              label="Third Paragraph"
                              type="text"
                              name="about_paragraph_c"
                              className="text-xs h-[200px]"
                              disabled={mutation.isPending}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4 mt-5">
                        <div className="">
                          <span className="top-20 px-2 text-[12px]"></span>
                          <div
                            className={`relative mt-4 mb-4 border border-gray-300 rounded-md hover:border-primary hover:border-dashed w-[230px] text-xs ${
                              withFile && "border-primary border-dashed"
                            }`}
                            onDragOver={() => setWithFile(true)}
                            onDragLeave={() => setWithFile(false)}
                          >
                            <span className="min-h-16 flex items-center justify-center">
                              <span className="text-dark mr-1">
                                Drag & Drop
                              </span>{" "}
                              Photo here or{" "}
                              <span className="text-dark ml-1">Browse</span>
                            </span>

                            <InputFileUpload
                              label="Upload Logo"
                              name="File"
                              type="file"
                              id="myFile"
                              accept="*"
                              title="Upload File"
                              multiple
                              onChange={handleChangeLogoImages}
                              onDrop={(e) => handleChangeLogoImages(e)}
                              disabled={mutation.isPending || loading}
                              className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full z-20"
                            />
                          </div>

                          <div className="relative w-[230px] ">
                            <ol className="flex flex-wrap gap-5 justify-center bg-gray-300 ">
                              {logoImages.length > 0 &&
                                logoImages.map((item, key) => {
                                  const fileLink =
                                    item instanceof File || item instanceof Blob
                                      ? URL.createObjectURL(item)
                                      : `${googleHDViewLink}${item?.id}`;

                                  return (
                                    <React.Fragment key={key}>
                                      <li
                                        className="relative z-10 h-32 w-48 group cursor-pointer overflow-hidden"
                                        onClick={() =>
                                          handleClickViewSlideshow(
                                            logoImages,
                                            key
                                          )
                                        }
                                      >
                                        <LoadImages
                                          url={fileLink}
                                          className="relative z-20 w-full h-full object-cover object-center"
                                        />
                                        {(!mutation.isPending || !loading) && (
                                          <div className="hidden group-hover:inline-flex absolute top-0 z-30 w-full h-full bg-black/40 items-center justify-center text-white text-center text-xs">
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
                                                    logoImages,
                                                    key,
                                                    props,
                                                    "logo"
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
          setNewFile={
            fileData.type === "client" ? setClientImages : setLogoImages
          }
        />
      )}
    </>
  );
};

export default ModalAddAbout;
