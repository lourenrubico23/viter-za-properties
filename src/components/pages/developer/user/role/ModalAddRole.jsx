import { InputText, InputTextArea } from "@/components/helpers/FormInputs";
import { queryData } from "@/components/helpers/queryData";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";

import { StoreContext } from "@/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import * as Yup from "yup";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../../store/StoreAction";
import { devApiVersion } from "../../../../helpers/functions-general";
import ModalAddWrapper from "../../../../partials/modals/ModalAddWrapper";

const ModalAddRole = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${devApiVersion}/role/${itemEdit.role_aid}` // Update
          : `${devApiVersion}/role`, // Create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["role"],
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
    role_name: itemEdit ? itemEdit.role_name : "",
    role_description: itemEdit ? itemEdit.role_description : "",
    role_name_old: itemEdit ? itemEdit.role_name : "",
  };

  const yupSchema = Yup.object({
    role_name: Yup.string().required("Require"),
    role_description: Yup.string().required("Require"),
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
          <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Role</h2>
          <button onClick={handleCloseModal}>
            <GrFormClose className="text-[25px]" />
          </button>
        </div>
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
                <div className="modal-form">
                  <div className="modal_container overflow-y-auto overflow-x-hidden h-[100dvh]">
                    <div className="input-wrapper">
                      <InputText
                        label="Name"
                        type="text"
                        name="role_name"
                        className="text-xs"
                        disabled={itemEdit || mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Description"
                        name="role_description"
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
      </ModalAddWrapper>
    </>
  );
};

export default ModalAddRole;
