import { GrFormClose } from "react-icons/gr";
import * as Yup from "yup";
import React from "react";
import { StoreContext } from "../../../store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../custom-hooks/queryData";
import { setError, setMessage, setSuccess } from "../../../store/StoreAction";
import ModalAddWrapper from "../modals/ModalAddWrapper";
import { Form, Formik } from "formik";
import { InputText } from "../../helpers/FormInputs";
import ButtonSpinner from "../spinners/ButtonSpinner";

const ModalChangeColor = ({ itemEdit, setIsColorChange, colorsData }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");

  const handleClose = () => {
    setAnimate("translate-x-full");
    setTimeout(() => {
      setIsColorChange(false);
    }, 200);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        colorsData?.data?.length
          ? `/v1/colors/${colorsData.data[0].colors_aid}` // update
          : `/v1/colors`, // create
        colorsData?.data?.length ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["colors"] });
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        console.log("Success");
        setIsColorChange(false);
        document.body.classList.remove("overflow-hidden");
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully Updated.`));
      }
    },
  });

  React.useEffect(() => {
    setAnimate("");
  }, []);

  const initVal = {
    isUpdateColors: itemEdit,
    colors_primary: colorsData?.data?.[0]?.colors_primary ?? "#000000",
    colors_secondary: colorsData?.data?.[0]?.colors_secondary ?? "#000000",
    colors_accent: colorsData?.data?.[0]?.colors_accent ?? "#000000",
    colors_light: colorsData?.data?.[0]?.colors_light ?? "#000000",
    colors_dark: colorsData?.data?.[0]?.colors_dark ?? "#000000",
  };

  const yupSchema = Yup.object({});
  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 ${animate}`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm text-black">Edit Theme Palette</h2>
        <button onClick={handleClose}>
          <GrFormClose className="text-[25px] text-black" />
        </button>
      </div>
      <div className="modal-content">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values) => {
            mutation.mutate(values);

            // to change the color when submitted
            document
              .querySelector(":root")
              .style.setProperty(
                "--primary-color",
                hexToRgb(values.colors_primary)
              );
            document
              .querySelector(":root")
              .style.setProperty(
                "--secondary-color",
                hexToRgb(values.colors_secondary)
              );
            document
              .querySelector(":root")
              .style.setProperty(
                "--accent-color",
                hexToRgb(values.colors_accent)
              );
            document
              .querySelector(":root")
              .style.setProperty(
                "--light-color",
                hexToRgb(values.colors_light)
              );
            document
              .querySelector(":root")
              .style.setProperty("--dark-color", hexToRgb(values.colors_dark));
          }}
        >
          {(props) => {
            console.log(props);
            return (
              <Form className="modal-form">
                <div className="form-input">
                  <div className="input-wrapper">
                    <InputText
                      label="*Primary Color"
                      type="color"
                      name="colors_primary"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="*Secondary Color"
                      type="color"
                      name="colors_secondary"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="*Accent Color"
                      type="color"
                      name="colors_accent"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="*Light Color"
                      type="color"
                      name="colors_light"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="*Dark Color"
                      type="color"
                      name="colors_dark"
                      disabled={mutation.isPending}
                    />
                  </div>
                </div>
                <div className="form-action">
                  <div className="form-btn">
                    <button
                      className="btn-modal-submit"
                      type="submit"
                      disabled={mutation.isPending || !props.dirty}
                    >
                      {mutation.isPending ? (
                        <ButtonSpinner />
                      ) : colorsData ? (
                        "Save"
                      ) : (
                        "Add"
                      )}
                    </button>
                    <button
                      className="btn-modal-cancel"
                      type="button"
                      onClick={handleClose}
                    >
                      Cancel
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

export default ModalChangeColor;
