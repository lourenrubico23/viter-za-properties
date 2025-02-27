import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import * as Yup from "yup";
import { devApiVersion } from "../../../../helpers/functions-general";
import { queryData } from "../../../../custom-hooks/queryData";
import { StoreContext } from "../../../../../store/StoreContext";
import {
  setError,
  setIsAccountUpdated,
  setMessage,
  setSuccess,
} from "../../../../../store/StoreAction";
import { InputText } from "../../../../helpers/FormInputs";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";

const ModalChangePassword = ({ setIsChangeAccountData }) => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [show, setShow] = React.useState("show");
  const [showCurrentPassword, setShowCurrentPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const isRoleDeveloper = store.credentials.data.role_is_developer == 1;
  const userId = isRoleDeveloper
    ? store.credentials.data.developer_aid
    : store.credentials.data.user_aid;
  const email = isRoleDeveloper
    ? store.credentials.data.developer_email
    : store.credentials.data.user_email;
  const fullname = isRoleDeveloper
    ? `${store.credentials.data.developer_lname}, ${store.credentials.data.developer_fname}`
    : `${store.credentials.data.user_last_name}, ${store.credentials.data.user_first_name}`;

  const initVal = {
    user_id: userId,
    current_password: "",
    new_password: "",
    confirm_password: "",
  };

  const yupSchema = Yup.object({
    current_password: Yup.string().required("Required"),
    new_password: Yup.string()
      .required("Required")
      .min(8, "Password must be at least 8 characters.")
      .matches(/[a-z]/, "At least one lowercase letter.")
      .matches(/[A-Z]/, "At least one uppercase letter.")
      .matches("(?=.*[!@#$%^&*-])", "Atleast 1 special character.")
      .matches("(?=.*[0-9])", "Atleast 1 number."),
    confirm_password: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("new_password"), null], "Passwords does not match."),
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        isRoleDeveloper
          ? `${devApiVersion}/account/developer/update-password`
          : `${devApiVersion}/account/other/update-password`,
        "post",
        values,
        true
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["update-password"],
      });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        setIsChangeAccountData(false);
        dispatch(setSuccess(true));
        dispatch(setIsAccountUpdated(true));
        dispatch(
          setMessage(
            "You password has been successfully changed, you will automatically be logged out."
          )
        );
      }
    },
  });

  const handleClose = () => {
    if (mutation.isPending) return;
    // set animation
    setShow("");
    // clear the modal
    setTimeout(() => {
      setIsChangeAccountData(false);
    }, 200);
  };

  HandleEscape(() => handleClose());

  const handleShowCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };
  const handleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <div
        className={`modal fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/50 z-50 animate-fadeIn ${show}`}
      >
        <div className="p-1 w-[420px] animate-slideUp">
          <div className="bg-white p-6 text-center rounded-lg">
            <div className="flex justify-between">
              <h5 className="capitalize text-left text-base w-[17.5rem]">
                Account
              </h5>
              <button
                type="button"
                className=" tooltip-action-table"
                data-tooltip="Close"
                onClick={() => handleClose()}
              >
                <FaTimes className="h-4 w-4 fill-gray-400" />
              </button>
            </div>

            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                setIsChangeAccountData(true);
                // mutate data
                mutation.mutate(values);
                resetForm();
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="modal-overflow mt-5">
                      <div className="pb-3">
                        <ul className="grid grid-cols-[50px_1fr] text-left">
                          <li>Name: </li>
                          <li>{fullname}</li>
                          <li>Email: </li>
                          <li>{email}</li>
                        </ul>
                      </div>
                      <div className="input-wrapper text-left">
                        <InputText
                          label="Current Password"
                          type={showCurrentPassword ? "text" : "password"}
                          name="current_password"
                          disabled={mutation.isPending}
                        />
                        {props.values.current_password && (
                          <button
                            type="button"
                            className="absolute bottom-2 text-base text-gray-400 right-3"
                            onClick={handleShowCurrentPassword}
                          >
                            {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        )}
                      </div>
                      <div className="input-wrapper text-left">
                        <InputText
                          label="New Password"
                          type={showNewPassword ? "text" : "password"}
                          name="new_password"
                          disabled={mutation.isPending}
                        />
                        {props.values.new_password && (
                          <button
                            type="button"
                            className="absolute bottom-2 text-base text-gray-400 right-3"
                            onClick={handleShowNewPassword}
                          >
                            {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        )}
                      </div>
                      <div className="input-wrapper text-left mb-12">
                        <InputText
                          label="Confirmation Password"
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirm_password"
                          disabled={mutation.isPending}
                        />
                        {props.values.confirm_password && (
                          <button
                            type="button"
                            className="absolute bottom-2 text-base text-gray-400 right-3"
                            onClick={handleShowConfirmPassword}
                          >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        )}
                      </div>

                      <div className="flex items-center gap-1 ">
                        <button
                          type="submit"
                          className="btn-modal-submit !border-primary"
                          disabled={mutation.isPending || !props.dirty}
                        >
                          {mutation.isPending ? <ButtonSpinner /> : "Save"}
                        </button>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalChangePassword;
