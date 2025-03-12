import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../helpers/queryData";
import { devApiVersion } from "../../../helpers/functions-general";
import { setError, setIsAdd, setMessage } from "../../../../store/StoreAction";
import * as Yup from "yup";
import ModalAddWrapper from "../../../partials/modals/ModalAddWrapper";
import { GrFormClose } from "react-icons/gr";
import { Form, Formik } from "formik";
import {
  InputSelect,
  InputText,
  InputTextArea,
} from "../../../helpers/FormInputs";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";

const ModalAddContactForm = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${devApiVersion}/contact-form/${itemEdit.form_aid}` // Update
          : `${devApiVersion}/contact-form`, // Create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["contact-form"],
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

  // Initial values for mutation Formik
  const initVal = {
    form_page: itemEdit ? itemEdit.form_page : "",
    form_label: itemEdit ? itemEdit.form_label : "",
    form_title: itemEdit ? itemEdit.form_title : "",
    form_facebook: itemEdit ? itemEdit.form_facebook : "",
    form_instagram: itemEdit ? itemEdit.form_instagram : "",
    form_linkedIn: itemEdit ? itemEdit.form_linkedIn : "",
    form_address: itemEdit ? itemEdit.form_address : "",
    form_description: itemEdit ? itemEdit.form_description : "",
    form_contact_description: itemEdit ? itemEdit.form_contact_description : "",
  };

  const yupSchema = Yup.object({
    form_page: Yup.string().required("Required"),
  });

  const handleCloseModal = () => {
    setAnimate("translate-x-full");
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  React.useEffect(() => {
    setAnimate("");
  }, []);

  return (
    <>
      <ModalAddWrapper
        handleClose={handleCloseModal}
        className={`transition-all ease-linear transform duration-200 ${animate}`}
      >
        <div className="modal-title">
          <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Contact Form</h2>
          <button onClick={handleCloseModal}>
            <GrFormClose className="text-[25px]" />
          </button>
        </div>
        <div className="modal-content">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              mutation.mutate(values);
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="modal-form h-[100dvh]">
                    <div className="modal_container overflow-y-auto overflow-x-hidden h-[100dvh] ">
                      <div className="input-wrapper">
                        <InputSelect
                          label="*Page"
                          type="text"
                          name="form_page"
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
                          label="Label"
                          type="text"
                          name="form_label"
                          className="text-xs"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper">
                        <InputText
                          label="Title"
                          type="text"
                          name="form_title"
                          className="text-xs"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper">
                        <InputText
                          label="Facebook"
                          type="text"
                          name="form_facebook"
                          className="text-xs"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper">
                        <InputText
                          label="Instagram"
                          type="text"
                          name="form_instagram"
                          className="text-xs"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper">
                        <InputText
                          label="LinkedIn"
                          type="text"
                          name="form_linkedIn"
                          className="text-xs"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper">
                        <InputTextArea
                          label="Address"
                          type="text"
                          name="form_address"
                          className="text-xs"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper">
                        <InputTextArea
                          label="Description"
                          type="text"
                          name="form_description"
                          className="text-xs"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper">
                        <InputTextArea
                          label="Form Description"
                          type="text"
                          name="form_contact_description"
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
                        disabled={mutation.isPending || !props.dirty}
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
    </>
  );
};

export default ModalAddContactForm;
