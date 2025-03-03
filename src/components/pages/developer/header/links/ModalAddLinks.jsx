import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GrFormClose } from "react-icons/gr";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as TiIcons from "react-icons/ti";
import * as LuIcons from "react-icons/lu";
import * as PiIcons from "react-icons/pi";
import { devApiVersion } from "../../../../helpers/functions-general";
import { StoreContext } from "../../../../../store/StoreContext";
import { queryData } from "../../../../custom-hooks/queryData";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../../store/StoreAction";
import ModalAddWrapper from "../../../../partials/modals/ModalAddWrapper";
import { InputText } from "../../../../helpers/FormInputs";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";

const icons = {
  ...FaIcons,
  ...AiIcons,
  ...IoIcons,
  ...TiIcons,
  ...LuIcons,
  ...PiIcons,
};

const ModalAddLinks = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const [searchTerm, setSearchTerm] = React.useState(
    itemEdit ? itemEdit.links_icons : ""
  );
  const [onFocusSearch, setOnFocusSearch] = React.useState(false);
  const [selectedIcon, setSelectedIcon] = React.useState(
    itemEdit ? itemEdit.links_icons : ""
  );
  const [itemsLimit, setItemsLimit] = React.useState(20);

  // sets the limit of icons being show
  const handleShowMore = () => {
    setItemsLimit(itemsLimit + 20);
  };

  const refSearch = React.useRef();

  const clickOutsideRefSearch = (e) => {
    if (refSearch.current && !refSearch.current.contains(e.target)) {
      setOnFocusSearch(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", clickOutsideRefSearch);
    return () => document.removeEventListener("click", clickOutsideRefSearch);
  }, []);

  const handleIconSelect = (iconKey) => {
    setSelectedIcon(iconKey);
    setSearchTerm(iconKey);
    setOnFocusSearch(false);
  };

  const filteredIcons = Object.keys(icons).filter((iconKey) =>
    iconKey.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Limit the number of icons displayed
  const limitedIcons = filteredIcons.slice(0, itemsLimit);

  const handleCloseModal = () => {
    setAnimate("translate-x-full");
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  const SelectedIcon = selectedIcon ? icons[selectedIcon] : null;

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${devApiVersion}/links/${itemEdit.links_aid}` // update
          : `${devApiVersion}/links`, // create
        itemEdit ? "put" : "post",
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
    links_aid: itemEdit ? itemEdit.links_aid : "",
    links_icons: itemEdit ? itemEdit.links_icons : "",
    links_title: itemEdit ? itemEdit.links_title : "",
    links_link: itemEdit ? itemEdit.links_link : "",
  };

  const yupSchema = Yup.object({});

  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 ${animate}`}
      handleClose={handleCloseModal}
    >
      <div className="modal-title">
        <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Links</h2>
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
              links_icons: selectedIcon,
            };
            mutation.mutate(data);
          }}
        >
          {(props) => {
            return (
              <Form className="modal-form">
                <div className="form-input">
                  <div className="input-wrapper" ref={refSearch}>
                    <InputText
                      label="Search Icon"
                      type="text"
                      name="links_icons"
                      placeholder="Type to search icons..."
                      value={searchTerm}
                      onChange={(e) => {
                        const value = e.target.value;
                        setSearchTerm(value);
                        props.setFieldValue("links_icons", value);
                      }}
                      onFocus={() => setOnFocusSearch(true)}
                      className="border p-2 w-full"
                    />
                    {onFocusSearch && (
                      <div className="w-full h-40 max-h-40 overflow-y-auto absolute top-[34px] bg-white shadow-md z-50 rounded-sm border border-gray-200 pt-1">
                        {limitedIcons.map((iconKey) => {
                          const IconComponent = icons[iconKey];
                          return (
                            <div
                              key={iconKey}
                              className="icon-item cursor-pointer flex items-center gap-2 px-2 py-1 hover:bg-gray-100"
                              onClick={() => {
                                handleIconSelect(iconKey);
                                props.setFieldValue("links_icons", iconKey);
                                setOnFocusSearch(false);
                              }}
                            >
                              <IconComponent />
                              <span>{iconKey}</span>
                            </div>
                          );
                        })}
                        {filteredIcons.length > itemsLimit && (
                          <div className="load-more">
                            <button
                              type="button"
                              onClick={handleShowMore}
                              className="text-primary p-1 ml-1.5 rounded"
                            >
                              Show More Icons ...
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                    {selectedIcon ? (
                      <div className="flex items-center gap-4 ml-3 text-xs">
                        Selected icon: <SelectedIcon />
                      </div>
                    ) : (
                      <div className="text-xs ml-3">No icon selected</div>
                    )}
                  </div>

                  <div className="input-wrapper">
                    <InputText
                      label="Title"
                      type="text"
                      name="links_title"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Link"
                      type="text"
                      name="links_link"
                      disabled={mutation.isPending}
                    />
                  </div>
                </div>
                <div className="form-action mb-1">
                  <div className="form-btn">
                    <button
                      className="btn-modal-submit"
                      type="submit"
                      disabled={
                        mutation.isPending ||
                        !props.dirty ||
                        !selectedIcon === ""
                      }
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
