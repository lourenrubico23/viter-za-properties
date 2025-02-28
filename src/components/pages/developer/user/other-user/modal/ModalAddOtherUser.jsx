import useQueryData from "@/components/custom-hooks/useQueryData";
import { InputSelect, InputText } from "@/components/helpers/FormInputs";
import { devApiVersion } from "@/components/helpers/functions-general";
import { queryData } from "@/components/helpers/queryData";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import {
  setError,
  setIsAccountUpdated,
  setIsAdd,
  setMessage,
  setSuccess,
} from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import * as Yup from "yup";
import ModalAddWrapper from "../../../../../partials/modals/ModalAddWrapper";

const ModalAddOtherUser = ({
  itemEdit,
  setIsSend,
  setPayloadData,
  setEmailCount,
  setRecipientList,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");

  const {
    isLoading: roleIsLoading,
    isFetching: roleIsFetching,
    error: roleError,
    data: role,
  } = useQueryData(`${devApiVersion}/role`, "get", "role");

  const getUserRoles =
    role?.data !== undefined &&
    role?.data.filter((item) => item.role_name !== "Developer");

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit && `${devApiVersion}/user/${itemEdit.user_aid}`, // Update
        "put",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      if (!data?.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        const msgUpdatedEmail =
          itemEdit &&
          store?.credentials?.data?.user_email === itemEdit.user_email
            ? "You will be automatically logged out."
            : "";
        handleCloseModal();
        dispatch(setSuccess(true));
        dispatch(
          setMessage(
            `Successfully ${
              itemEdit
                ? `updated. ${msgUpdatedEmail}`
                : "added, please check your email for verification."
            }`
          )
        );
        if (
          itemEdit &&
          store.credentials.data.user_email === itemEdit.user_email
        ) {
          dispatch(setIsAccountUpdated(true));
        }
      }
    },
  });

  const initVal = {
    user_aid: itemEdit ? itemEdit.user_aid : "",
    user_first_name: itemEdit ? itemEdit.user_first_name : "",
    user_last_name: itemEdit ? itemEdit.user_last_name : "",
    user_email: itemEdit ? itemEdit.user_email : "",
    user_role_id: itemEdit ? itemEdit.user_role_id : "",
    user_email_old: itemEdit ? itemEdit.user_email : "",
  };

  const yupSchema = Yup.object({
    user_first_name: Yup.string().required("Required"),
    user_last_name: Yup.string().required("Required"),
    user_role_id: Yup.string().required("Required"),
    user_email: Yup.string().required("Required").email("Invalid email"),
  });

  const handleCloseModal = () => {
    setAnimate("translate-x-full");
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  const handleSend = (values) => {
    if (itemEdit) {
      mutation.mutate(values);
    } else {
      setPayloadData(values); // Pass data to the next modal
      const recipientEmails = Array.isArray(values.user_email)
        ? values.user_email
        : values.user_email
        ? [values.user_email]
        : [];
      setEmailCount(recipientEmails.length);
      setIsSend(true);
      setRecipientList(recipientEmails);
      dispatch(setIsAdd(false));
    }
  };

  React.useEffect(() => {
    setAnimate("");
  }, []);

  return (
    <>
      <ModalAddWrapper
        className={`transition-all ease-linear transform duration-200 ${animate}`}
        handleClose={handleCloseModal}
      >
        <div className="modal-title">
          <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} User</h2>
          <button onClick={handleCloseModal}>
            <GrFormClose className="text-[25px]" />
          </button>
        </div>
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={handleSend}
        >
          {(props) => {
            return (
              <Form>
                <div className="modal-form">
                  <div className="modal_container overflow-y-auto overflow-x-hidden h-[100dvh]">
                    <div className="input-wrapper">
                      <InputText
                        label="First Name"
                        type="text"
                        name="user_first_name"
                        className="text-xs"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Last Name"
                        type="text"
                        name="user_last_name"
                        className="text-xs"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Email"
                        type="text"
                        name="user_email"
                        className="text-xs"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputSelect
                        label="Role"
                        type="text"
                        name="user_role_id"
                        className="text-xs"
                        required={true}
                        disabled={
                          mutation.isPending || roleIsLoading || roleError
                        }
                      >
                        {roleIsLoading ? (
                          <option value="" hidden>
                            Loading...
                          </option>
                        ) : roleError ? (
                          <option value="" hidden>
                            Error
                          </option>
                        ) : getUserRoles.length === 0 ? (
                          <option value="" hidden>
                            No Data
                          </option>
                        ) : (
                          <optgroup label="Select Role">
                            <option value="" hidden></option>
                            {getUserRoles.map((item, key) => {
                              return (
                                <option value={item.role_aid} key={key}>
                                  {item.role_name}
                                </option>
                              );
                            })}
                          </optgroup>
                        )}
                      </InputSelect>
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

export default ModalAddOtherUser;
