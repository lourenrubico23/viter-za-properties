import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { BiMailSend } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { HiEyeSlash } from "react-icons/hi2";
import { RiEyeFill } from "react-icons/ri";
import * as Yup from "yup";
import { setError, setMessage } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import { queryData } from "../../../custom-hooks/queryData";
import useQueryData from "../../../custom-hooks/useQueryData";
import { InputText } from "../../../helpers/FormInputs";
import {
  devApiVersion,
  devBaseImgUrl,
  devNavUrl,
  getUrlParam,
} from "../../../helpers/functions-general";
import ModalError from "../../../partials/modals/ModalError";
import PageNotFound from "../../../partials/PageNotFound";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import ServerError from "../../../partials/spinners/ServerError";
import TableSpinner from "../../../partials/spinners/TableSpinner";

const UserCreatePassword = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const paramKey = getUrlParam().get("key");
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [passwordNew, setPasswordNew] = React.useState(true);
  const [passwordConfirm, setPasswordConfirm] = React.useState(true);
  const [lowerValidated, setLowerValidated] = React.useState(false);
  const [upperValidated, setUpperValidated] = React.useState(false);
  const [numberValidated, setNumberValidated] = React.useState(false);
  const [specialValidated, setSpecialValidated] = React.useState(false);
  const [lengthValidated, setLengthValidated] = React.useState(false);

  const {
    isLoading,
    error,
    data: userKey,
  } = useQueryData(
    `/${devApiVersion}/user/key/${paramKey}`, // endpoint
    "get", // method
    "userKey" // key
  );

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(`/${devApiVersion}/user/password`, "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["system"] });
      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        setIsSuccess(true);
      }
    },
  });

  const handleChange = (value) => {
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*`{;:',<.>/?}_-])");
    const length = new RegExp("(?=.{8,})");

    if (lower.test(value)) {
      setLowerValidated(true);
    } else {
      setLowerValidated(false);
    }
    if (upper.test(value)) {
      setUpperValidated(true);
    } else {
      setUpperValidated(false);
    }
    if (number.test(value)) {
      setNumberValidated(true);
    } else {
      setNumberValidated(false);
    }
    if (special.test(value)) {
      setSpecialValidated(true);
    } else {
      setSpecialValidated(false);
    }
    if (length.test(value)) {
      setLengthValidated(true);
    } else {
      setLengthValidated(false);
    }
  };

  const togglePasswordNew = () => setPasswordNew(!passwordNew);
  const togglePasswordConfirm = () => setPasswordConfirm(!passwordConfirm);

  const initVal = {
    new_password: "",
    confirm_password: "",
    key: paramKey,
  };

  const yupSchema = Yup.object({
    new_password: Yup.string()
      .required("Required")
      .min(8, "Password must be at least 8 characters.")
      .matches("(?=.*[a-z])", "At least one lowercase letter.")
      .matches("(?=.*[A-Z])", "At least one uppercase letter.")
      .matches("(?=.*[!@#$%^&*`{;:',<.>/?}_-])", "Atleast 1 special character.")
      .matches("(?=.*[0-9])", "Atleast 1 number."),
    confirm_password: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("new_password"), null], "Passwords does not match."),
  });

  return (
    <>
      {isLoading ? (
        <TableSpinner />
      ) : error ? (
        <ServerError />
      ) : userKey?.count === 0 ? (
        <PageNotFound />
      ) : (
        <div
          className="w-full flex justify-center items-center"
          style={{ transform: "translateY(clamp(3rem,12vw,6rem))" }}
        >
          <div className="max-w-[340px] w-full p-4 py-5 rounded-md">
            <div className="flex justify-center items-center mb-5">
              <div className="relative flex gap-2 justify-center ">
                <img
                  src={`${devBaseImgUrl}/za-properties-logo.png `}
                  alt=""
                  className="w-[100px] h-[100px]"
                />
              </div>
            </div>
            <h2 className="text-base text-center">User - Create Password</h2>

            {isSuccess ? (
              <div className="login-message flex justify-center items-center flex-col text-center ">
                <BiMailSend className="text-[50px] text-green-500 " />
                <p className="text-balance">
                  Your password is set and ready to use. Click the button below
                  to continue login{" "}
                </p>

                <a
                  href={`${devNavUrl}/login`}
                  className="btn-modal-submit text-center mt-5 center-all"
                >
                  Back to Login
                </a>
              </div>
            ) : (
              <div>
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
                        <div className="input-wrapper relative">
                          <InputText
                            label="New Password"
                            type={passwordNew ? "password" : "text"}
                            name="new_password"
                            className="text-xs py-[8px] px-[12px]"
                            disabled={mutation.isPending}
                            onChange={(e) => handleChange(e.target.value)}
                          />

                          <button
                            onClick={() => togglePasswordNew(!passwordNew)}
                            className="absolute top-2 right-2"
                            type="button"
                          >
                            {passwordNew ? (
                              <RiEyeFill className="text-base" />
                            ) : (
                              <HiEyeSlash className="text-base" />
                            )}
                          </button>
                        </div>

                        <div className="input-wrapper relative">
                          <InputText
                            label="Confirm Password"
                            type={passwordConfirm ? "password" : "text"}
                            name="confirm_password"
                            className="text-xs py-[8px] px-[12px]"
                            disabled={mutation.isPending}
                          />

                          <button
                            onClick={() =>
                              togglePasswordConfirm(!passwordConfirm)
                            }
                            className="absolute top-2 right-2"
                            type="button"
                          >
                            {passwordConfirm ? (
                              <RiEyeFill className="text-base" />
                            ) : (
                              <HiEyeSlash className="text-base" />
                            )}
                          </button>
                        </div>

                        <ul className="space-y-2 mt-5">
                          <li className="flex items-center gap-2 text-xs">
                            <FaCheck
                              className={` ${
                                lengthValidated
                                  ? "text-green-500 "
                                  : "text-gray-200"
                              } `}
                            />
                            minimum 8 characters
                          </li>
                          <li className="flex items-center gap-2 text-xs">
                            <FaCheck
                              className={`${
                                lowerValidated
                                  ? "text-green-500 "
                                  : "text-gray-200"
                              } `}
                            />{" "}
                            At least one lowercase character
                          </li>

                          <li className="flex items-center gap-2 text-xs">
                            <FaCheck
                              className={`${
                                upperValidated
                                  ? "text-green-500 "
                                  : "text-gray-200"
                              } `}
                            />{" "}
                            At least one uppercase character
                          </li>

                          <li className="flex items-center gap-2 text-xs">
                            <FaCheck
                              className={`${
                                numberValidated
                                  ? "text-green-500 "
                                  : "text-gray-200"
                              } `}
                            />{" "}
                            At least one numeric character
                          </li>

                          <li className="flex items-center gap-2 text-xs">
                            <FaCheck
                              className={`${
                                specialValidated
                                  ? "text-green-500 "
                                  : "text-gray-200"
                              } `}
                            />{" "}
                            At least 1 symbol character
                          </li>
                        </ul>

                        <button
                          className="btn-modal-submit w-full justify-center mt-5 "
                          type="submit"
                          disabled={mutation.isPending || !props.dirty}
                        >
                          {mutation.isPending && <ButtonSpinner />} Set Password
                        </button>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            )}
          </div>
        </div>
      )}
      {store.error && <ModalError />}
    </>
  );
};

export default UserCreatePassword;
