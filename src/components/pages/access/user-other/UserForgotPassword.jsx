
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { BiMailSend } from "react-icons/bi";
import * as Yup from "yup";
import { queryData } from "../../../custom-hooks/queryData";
import { devApiVersion, devBaseImgUrl, devNavUrl } from "../../../helpers/functions-general";
import { setError, setMessage } from "../../../../store/StoreAction";
import { InputText } from "../../../helpers/FormInputs";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import ModalError from "../../../partials/modals/ModalError";
import { StoreContext } from "../../../../store/StoreContext";

const UserForgotPassword = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(`/${devApiVersion}/user/reset`, "post", values),
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

  const initVal = {
    email: "",
  };

  const yupSchema = Yup.object({
    email: Yup.string().required("Required").email("Invalid email."),
  });

  return (
    <>
      <div
        className="w-full flex justify-center items-center"
        style={{ transform: "translateY(clamp(5rem,12vw,8rem))" }}
      >
        <div className="max-w-[340px] w-full p-4 py-5 rounded-md">
          <div className="flex justify-center items-center mb-5">
            <div className="relative flex gap-2 justify-center ">
              <img
                src={`${devBaseImgUrl}/d-container-logo.webp `}
                alt=""
                className="w-[100px] h-[100px]"
              />
              <img
                src={`${devBaseImgUrl}/spa-logo.png `}
                alt=""
                className="w-[100px] h-[100px]"
              />
            </div>
          </div>
          <h2 className="text-base text-center mb-5">User - Forgot Password</h2>

          {isSuccess ? (
            <div className="login-message flex justify-center items-center flex-col text-center ">
              <BiMailSend className="text-[50px] text-green-700" />
              <p className="text-balance">
                We have successfully send the instruction to your email.{" "}
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
              <p className="mb-5">
                Enter your registered email to receive instruction on how to
                reset your password
              </p>

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
                      <div className="input-wrapper">
                        <InputText
                          label="Email"
                          type="email"
                          name="email"
                          className="text-xs py-[8px] px-[12px]"
                          disabled={mutation.isPending}
                        />
                      </div>

                      <button
                        className="btn-modal-submit w-full justify-center mt-5 "
                        type="submit"
                        disabled={mutation.isPending || !props.dirty}
                      >
                        {mutation.isPending && <ButtonSpinner />} Reset Password
                      </button>

                      <a
                        href={`${devNavUrl}/login`}
                        className="text-xs block text-center mt-5 hover:underline"
                      >
                        Back to Login
                      </a>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          )}
        </div>
      </div>

      {/* <div className="h-screen w-full flex justify-center items-center ">
        <div className="max-w-[340px] w-full   p-4 py-5 -translate-y-[100px]   shadow-md rounded-md">
          <div className="flex justify-center items-center mb-5">
            <Fbslogo />
          </div>
          <h2 className="text-base text-center mb-5">User - Forgot Password</h2>

          {isSuccess ? (
            <div className="login-message flex justify-center items-center flex-col text-center ">
              <BiMailSend className="text-[50px] text-green-700" />
              <p className="text-balance">
                We have successfully send the instruction to your email.{" "}
              </p>

              <a
                href={`${devNavUrl}/login`}
                className="btn btn-accent text-center mt-5 center-all"
              >
                Back to Login
              </a>
            </div>
          ) : (
            <div>
              <p className="mb-5">
                Enter your registered email to receive instruction on how to
                reset your password
              </p>

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
                      <div className="input-wrapper">
                        <InputText
                          label="Email"
                          type="email"
                          name="email"
                          className="text-xs"
                          disabled={mutation.isPending}
                        />
                      </div>

                      <button
                        className="btn btn-accent w-full justify-center mt-5 "
                        type="submit"
                        disabled={mutation.isPending || !props.dirty}
                      >
                        {mutation.isPending && <ButtonSpinner />} Reset Password
                      </button>

                      <a
                        href={`${devNavUrl}/login`}
                        className="text-xs block text-center mt-5 hover:underline"
                      >
                        Back to Login
                      </a>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          )}
        </div>
      </div> */}

      {store.error && <ModalError />}
    </>
  );
};

export default UserForgotPassword;
