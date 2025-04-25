import { InputText, InputTextArea } from "@/components/helpers/FormInputs";
import { queryData } from "@/components/helpers/queryData";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";

import { StoreContext } from "@/store/StoreContext";
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
import { devApiVersion } from "../../../../helpers/functions-general";
import ModalAddWrapper from "../../../../partials/modals/ModalAddWrapper";
import useQueryData from "../../../../custom-hooks/useQueryData";
import ServerError from "../../../../partials/spinners/ServerError";
import TableSpinner from "../../../../partials/spinners/TableSpinner";
import NoData from "../../../../partials/spinners/NoData";

const ModalAddFeaturedProperties = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const [loading, setLoading] = React.useState(false);

  const [onFocusPropertyList, setOnFocusPropertyList] = React.useState(false);
  const [propertyListValue, setPropertyListValue] = React.useState(
    itemEdit ? `${itemEdit.list_name}` : ""
  ); // to get the data from table when update
  const [propertyList, setPropertyList] = React.useState(
    itemEdit ? itemEdit.list_name : ""
  );
  const [propertyListId, setPropertyListId] = React.useState(
    itemEdit ? itemEdit.featured_properties_property_id : ""
  );

  const {
    isFetching: propertyTypeDataIsFetching,
    error: propertyTypeDataError,
    data: propertyTypeData,
  } = useQueryData(
    `${devApiVersion}/featured-properties/property-list-search`, // endpoint
    "post", // method
    "featured-properties/property-list-search", // key
    {
      searchValue: propertyList, // payload
    },
    {
      searchValue: propertyList, // id
    },
    true // refetchOnWindowFocus
  );

  const handleClickPropertyList = (item) => {
    setPropertyList(item.list_name);
    setPropertyListValue(`${item.list_name}`);
    setPropertyListId(item.list_aid);
    setOnFocusPropertyList(false);
  };

  const handleOnChangePropertyList = (e) => {
    setPropertyListValue(e.target.value);
    setLoading(true);
    setPropertyListId("");
    if (e.target.value === "") {
      setLoading(false);
    }

    let timeOut;

    timeOut = setTimeout(() => {
      clearTimeout(timeOut);
      let val = e.target.value;
      if (val === "") {
        setPropertyList(val);
        return;
      }
      setPropertyList(val);
      setLoading(false);
    }, 500); // debounce seconds to fetch
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${devApiVersion}/featured-properties/${itemEdit.featured_properties_aid}` // Update
          : `${devApiVersion}/featured-properties`, // Create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["featured-properties"],
      });

      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      }
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? "Updated" : "Added"}.`));
      }
    },
  });

  // to close the modal when clicking outside for Property type
  const refPropertyList = React.useRef();

  const clickOutsideRefPropertyList = (e) => {
    if (
      refPropertyList.current !== undefined &&
      refPropertyList.current !== null &&
      !refPropertyList.current?.contains(e.target)
    ) {
      setOnFocusPropertyList(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", clickOutsideRefPropertyList);
    return () =>
      document.addEventListener("click", clickOutsideRefPropertyList);
  }, []);

  // Initial values for mutation Formik
  const initVal = {
    featured_properties_property_id: itemEdit
      ? itemEdit.featured_properties_property_id
      : "",
    featured_properties_property_name: itemEdit
      ? itemEdit.featured_properties_property_name
      : "",
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
          <h2 className="text-sm">
            {itemEdit ? "Edit" : "Add"} Featured Properties
          </h2>
          <button onClick={handleCloseModal}>
            <GrFormClose className="text-[25px]" />
          </button>
        </div>
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            if (propertyListId === "" || !propertyListId) {
              dispatch(setError(true));
              dispatch(setMessage("Property is Required."));
              return;
            }
            const data = {
              ...values,
              featured_properties_property_id: propertyListId,
              featured_properties_property_name: propertyList,
            };
            mutation.mutate(data);
          }}
        >
          {(props) => {
            return (
              <Form>
                <div className="modal-form">
                  <div className="modal_container overflow-y-auto overflow-x-hidden h-[100dvh]">
                    <div className=" input-wrapper">
                      <InputText
                        label="*Property List"
                        type="text"
                        value={propertyListValue}
                        name="featured_properties_property_id"
                        disabled={mutation.isPending}
                        onFocus={() => setOnFocusPropertyList(true)}
                        onChange={handleOnChangePropertyList}
                        refVal={refPropertyList}
                      />
                      {onFocusPropertyList && (
                        <div className="w-full h-40 max-h-40 overflow-y-auto absolute top-[33px] bg-white shadow-md z-50 rounded-sm border border-gray-200 pt-1">
                          {loading || propertyTypeDataIsFetching ? (
                            <TableSpinner />
                          ) : propertyTypeDataError ? (
                            <div className="my-7">
                              <ServerError />
                            </div>
                          ) : propertyTypeData?.count > 0 ? (
                            propertyTypeData?.data.map((item, key) => (
                              <div
                                className="cursor-pointer hover:bg-gray-100 px-2"
                                value={item.list_aid}
                                key={key}
                                onClick={() => handleClickPropertyList(item)}
                              >
                                {item.list_name}
                              </div>
                            ))
                          ) : (
                            <div className="my-7">
                              <NoData />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    className="modal__action fixed bottom-0 flex justify-end w-full pt-4
                     gap-2 bg-white pb-4 pr-11"
                  >
                    <button
                      className="btn-modal-submit"
                      type="submit"
                      disabled={mutation.isPending || !propertyListId}
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

export default ModalAddFeaturedProperties;
