import React from "react";
import * as Yup from "yup";
import { devBaseImgUrl, devNavUrl } from "../../../helpers/functions-general";
import { MdMarkEmailRead } from "react-icons/md";
import { Form, Formik } from "formik";
import { InputText } from "../../../helpers/FormInputs";
import { Link } from "react-router-dom";
import LoginFooter from "../../../partials/LoginFooter";
import ModalError from "../../../partials/modals/ModalError";
import { useQueryClient } from "@tanstack/react-query";
import { StoreContext } from "../../../../store/StoreContext";

const OtherUserForgetPassword = () => {
  const queryClient = useQueryClient();
  const { store, dispatch } = React.useContext(StoreContext);
  const [isSuccess, setIsSuccess] = React.useState(false);

  // const mutation = useMutation({
  //   mutationFn: (values) =>
  //     queryData(`${devApiVersion}/user-other/reset`, "post", values),
  //   onSuccess: (data) => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: ["other"] });
  //     // show error box
  //     if (!data.success) {
  //       dispatch(setError(true));
  //       dispatch(setMessage(data.error));
  //     } else {
  //       setIsSuccess(true);
  //     }
  //   },
  // });

  const initVal = {
    email: "",
  };

  const yupSchema = Yup.object({
    email: Yup.string().required("Required").email("Invalid email."),
  });

  return (
    <>
      <div
        className="flex justify-center items-center"
        style={{ transform: "translateY(clamp(5rem,12vw,8rem))" }}
      >
        <div className="w-96 p-6">
          <div className="flex justify-center gap-2">
            <img
              src={`${devBaseImgUrl}/za-properties-logo.png `}
              alt=""
              className="w-[100px] h-[100px]"
            />
          </div>
          {/* {isSuccess ? ( */}
          <>
            <MdMarkEmailRead className="text-5xl fill-primary mx-auto mt-10 mb-2" />
            <h2 className="mb-4 mt-2 text-lg text-center">Email Sent!</h2>
            <p className="text-sm mb-6">
              We have successfully sent an instruction to reset your password.
              If you haven't received any email, please also check your
              spam/junk folder.
            </p>

            <a
              className="text-primary text-xs block text-center mt-6 underline"
              href={`${devNavUrl}/login`}
            >
              Back to Login
            </a>
          </>
          {/* ) : ( */}
          <>
            <p className="mb-0 mt-2 font-bold text-center text-lg">
              ZA PROPERTIES
            </p>
            <p className="mt-8 mb-5 text-[16px] font-semibold">
              FORGOT PASSWORD
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
                    <div className="relative mb-6">
                      <InputText
                        label="Email"
                        type="text"
                        name="email"
                        // disabled={mutation.isPending}
                        className="!bg-white"
                      />
                    </div>
                    <div className="flex items-center gap-1 mb-4">
                      <button
                        type="submit"
                        // disabled={mutation.isPending || !props.dirty}
                        className="btn-modal-submit relative"
                      >
                        {/* {mutation.isPending && <ButtonSpinner />} Submit */}{" "}
                        Submit
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>

            <p className="mt-2 text-xs">
              Go back to{" "}
              <Link
                to={`${devNavUrl}/login`}
                className="w-full text-primary"
                // disabled={mutation.isPending}
              >
                <span>Login</span>
              </Link>
            </p>
            <LoginFooter />
          </>
          {/* )} */}
        </div>
      </div>

      {store.error && <ModalError />}
    </>
  );
};

export default OtherUserForgetPassword;
