import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  setCredentials,
  setError,
  setIsLogin,
  setMessage,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import { queryData } from "../../../custom-hooks/queryData";
import useOtherLogin from "../../../custom-hooks/useOtherLogin";
import { InputText } from "../../../helpers/FormInputs";
import {
  devApiVersion,
  devBaseImgUrl,
  devNavUrl,
} from "../../../helpers/functions-general";
import {
  checkRoleToRedirect,
  setStorageRoute,
} from "../../../helpers/login-functions";
import LoginFooter from "../../../partials/LoginFooter";
import ModalError from "../../../partials/modals/ModalError";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import TableSpinner from "../../../partials/spinners/TableSpinner";

const OtherUserLogin = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const [passwordShown, setPasswordShown] = React.useState(false);
  const navigate = useNavigate();
  const { loginLoading } = useOtherLogin(navigate);

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(`${devApiVersion}/user/login`, "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["other"] });
      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        if (store.isLogin) {
          delete data.data[0].user_other_password;
          delete data.data[0].role_description;
          delete data.data[0].role_created;
          delete data.data[0].role_datetime;

          dispatch(setCredentials(data.data[0]));
          setStorageRoute(data.data[1]);
          dispatch(setIsLogin(false));
          checkRoleToRedirect(navigate, data.data[0]);
        }
      }
    },
  });

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const initVal = {
    user_email: "",
    password: "",
  };

  const yupSchema = Yup.object({
    user_email: Yup.string().required("Required").email("Invalid email"),
    password: Yup.string().required("Required"),
  });

  return (
    <>
      {loginLoading ? (
        <TableSpinner />
      ) : (
        <div
          className="flex justify-center items-center"
          style={{ transform: "translateY(clamp(3rem,12vw,6rem))" }}
        >
          <div className="w-96 p-6">
            <div className="relative flex gap-2 justify-center ">
              <img
                src={`${devBaseImgUrl}/za-properties-logo.png `}
                alt=""
                className="w-[100px] h-[100px]"
              />
            </div>

            <div className="mb-4">
              <p className="mb-0 mt-2 font-bold text-center text-lg">
                ZA PROPERTIES
              </p>
              <h2 className="mb-0 mt-10 text-[16px] font-semibold">LOGIN</h2>
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
                    <div className="relative mb-6">
                      <InputText
                        label="Email"
                        type="text"
                        name="user_email"
                        disabled={mutation.isPending}
                        className="!bg-white"
                      />
                    </div>
                    <div className="relative mb-5">
                      <InputText
                        label="Password"
                        type={passwordShown ? "text" : "password"}
                        name="password"
                        disabled={
                          mutation.isPending ||
                          (props.values.user_email === "" &&
                            props.values.password === "")
                        }
                      />
                      {props.values.password && (
                        <span
                          className="text-base absolute bottom-1/2 text-gray-400 right-2 translate-y-1/2 cursor-pointer"
                          onClick={togglePassword}
                        >
                          {passwordShown ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 pt-3">
                      <button
                        type="submit"
                        disabled={mutation.isPending || !props.dirty}
                        className="btn-modal-submit relative"
                      >
                        {mutation.isPending && <ButtonSpinner />} Login
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <p className="mt-5 text-xs">
              Did you forget your password?{" "}
              <Link
                to={`${devNavUrl}/forgot-password`}
                className="w-full text-primary"
              >
                <span>Forgot password</span>
              </Link>
            </p>
            <LoginFooter />
          </div>
        </div>
      )}

      {store.error && <ModalError />}
    </>
  );
};

export default OtherUserLogin;
