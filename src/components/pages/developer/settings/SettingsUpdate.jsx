import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../custom-hooks/queryData";
import {
  setError,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import * as Yup from "yup";
import { devApiVersion } from "../../../helpers/functions-general";
import { Form, Formik } from "formik";
import {
  InputText,
  InputTextArea,
  InputTextAreaContactForm,
} from "../../../helpers/FormInputs";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";

const SettingsUpdate = ({ webData }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        webData?.data?.length
          ? `${devApiVersion}/web/${webData.data[0].web_aid}` // update
          : `${devApiVersion}/web`, // create
        webData?.data?.length ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });

      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      }
      if (data.success) {
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully Updated.`));
      }
    },
  });

  React.useEffect(() => {});

  // Initial values for mutation Formik
  const initVal = {
    web_title: webData?.data?.[0]?.web_title ?? "",
    web_description: webData?.data?.[0]?.web_description ?? "",
  };

  const yupSchema = Yup.object({
    web_title: Yup.string().required("Required"),
    web_description: Yup.string().required("Required"),
  });

  return (
    <div>
      <Formik
        initialValues={initVal}
        enableReinitialize={true}
        validationSchema={yupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          mutation.mutate(values);
        }}
      >
        {(props) => {
          return (
            <Form>
              <div className="modal-form">
                <div className="flex flex-col justify-between h-[80vh] max-w-[700px] relative">
                  <div className=" pt-6 ">
                    <div className="flex flex-col md:flex-col lg:flex-row lg:gap-[100px] md:items-start lg:items-center text-sm">
                      <h3>Website Title</h3>
                      <div className="input-wrapper">
                        <InputText
                          label=""
                          type="text"
                          name="web_title"
                          className="text-xs md:w-[500px]"
                          disabled={mutation.isPending}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-col lg:flex-row lg:gap-[60px] items-start text-sm ">
                      <h3 className="pt-3">Website Description</h3>
                      <div className="input-wrapper">
                        <InputTextAreaContactForm
                          label=""
                          type="text"
                          name="web_description"
                          className="text-xs md:w-[500px] min-w-[300px]"
                          disabled={mutation.isPending}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal__action absolute
                           bottom-0 right-0 pr-5"
                  >
                    <button
                      className="btn-modal-submit"
                      type="submit"
                      disabled={mutation.isPending || !props.dirty}
                    >
                      {mutation.isPending ? <ButtonSpinner /> : "Update"}
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SettingsUpdate;
