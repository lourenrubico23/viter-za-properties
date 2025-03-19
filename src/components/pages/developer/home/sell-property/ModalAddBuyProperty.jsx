import React from "react";
import { StoreContext } from "../../../../../store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { devApiVersion } from "../../../../helpers/functions-general";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../../store/StoreAction";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import { InputText, InputTextArea } from "../../../../helpers/FormInputs";
import { Form, Formik } from "formik";
import { GrFormClose } from "react-icons/gr";
import ModalAddWrapper from "../../../../partials/modals/ModalAddWrapper";
import * as Yup from "yup";
import { queryData } from "../../../../helpers/queryData";

const ModalAddBuyProperty = ({ itemEdit, sellPropertyData }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        sellPropertyData?.data?.length
          ? `${devApiVersion}/sell-property/${sellPropertyData.data[0].sell_aid}` // update
          : `${devApiVersion}/sell-property`, // create
        sellPropertyData?.data?.length ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["sell-property"],
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
    isUpdateSellProperty: itemEdit,
    sell_buy_title: sellPropertyData?.data?.[0]?.sell_buy_title ?? "",
    sell_buy_description:
      sellPropertyData?.data?.[0]?.sell_buy_description ?? "",
    sell_buy_button: sellPropertyData?.data?.[0]?.sell_buy_button ?? "",
  };

  const yupSchema = Yup.object({});

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
          <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Buy Property</h2>
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
                  <div className="modal-form">
                    <div className="modal_container overflow-y-auto overflow-x-hidden">
                      <div className="input-wrapper">
                        <InputText
                          label="Title"
                          type="text"
                          name="sell_buy_title"
                          className="text-xs"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper">
                        <InputTextArea
                          label="Description"
                          type="text"
                          name="sell_buy_description"
                          className="text-xs"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper">
                        <InputText
                          label="Button Text"
                          type="text"
                          name="sell_buy_button"
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

export default ModalAddBuyProperty;
