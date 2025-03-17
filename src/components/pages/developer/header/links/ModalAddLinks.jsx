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
import { StoreContext } from "../../../../../store/StoreContext";
import { queryData } from "../../../../custom-hooks/queryData";
import { InputText } from "../../../../helpers/FormInputs";
import { devApiVersion } from "../../../../helpers/functions-general";
import ModalAddWrapper from "../../../../partials/modals/ModalAddWrapper";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";

const ModalAddLinks = ({ itemEdit, linksData }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");

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
        linksData?.data?.length
          ? `${devApiVersion}/links/${linksData.data[0].links_aid}` // update
          : `${devApiVersion}/links`, // create
        linksData?.data?.length ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        console.log("Success");
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? "Updated" : "Added"}.`));
      }
    },
  });

  React.useEffect(() => {
    setAnimate("");
  }, []);

  const initVal = {
    isUpdateLinks: itemEdit,
    links_aid: linksData?.data?.[0]?.links_aid ?? "",
    links_facebook_link: linksData?.data?.[0]?.links_facebook_link ?? "",
    links_facebook_title: linksData?.data?.[0]?.links_facebook_title ?? "",
    links_instagram_link: linksData?.data?.[0]?.links_instagram_link ?? "",
    links_instagram_title: linksData?.data?.[0]?.links_instagram_title ?? "",
    links_message_link: linksData?.data?.[0]?.links_message_link ?? "",
    links_message_title: linksData?.data?.[0]?.links_message_title ?? "",
    links_contact: linksData?.data?.[0]?.links_contact ?? "",
  };

  const yupSchema = Yup.object({});

  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 ${animate}`}
      handleClose={handleCloseModal}
    >
      <div className="modal-title">
        <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Header</h2>
        <button onClick={handleCloseModal}>
          <GrFormClose className="text-[25px]" />
        </button>
      </div>
      <div className="modal-content">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values) => {
            const data = {
              ...values,
            };
            mutation.mutate(data);
          }}
        >
          {(props) => {
            return (
              <Form className="modal-form">
                <div className="form-input">
                  <div className="input-wrapper">
                    <InputText
                      label="Facebook"
                      type="text"
                      name="links_facebook_title"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Facebook Link"
                      type="text"
                      name="links_facebook_link"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Instagram"
                      type="text"
                      name="links_instagram_title"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Instagram Link"
                      type="text"
                      name="links_instagram_link"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Message"
                      type="text"
                      name="links_message_title"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Message Link"
                      type="text"
                      name="links_message_link"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Contact No."
                      type="text"
                      name="links_contact"
                      disabled={mutation.isPending}
                    />
                  </div>
                </div>
                <div className="form-action mb-1">
                  <div className="form-btn">
                    <button
                      className="btn-modal-submit"
                      type="submit"
                      disabled={mutation.isPending || !props.dirty}
                    >
                      {mutation.isPending ? (
                        <>
                          <ButtonSpinner /> Save
                        </>
                      ) : (
                        "Save"
                      )}
                    </button>
                    <button
                      className="btn-modal-cancel"
                      type="button"
                      onClick={handleCloseModal}
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
  );
};

export default ModalAddLinks;
