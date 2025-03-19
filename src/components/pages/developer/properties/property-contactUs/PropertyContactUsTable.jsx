import React from "react";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import ReCAPTCHA from "react-google-recaptcha";
import {
  InputText,
  InputTextAreaContactForm,
} from "../../../../helpers/FormInputs";
import { Form, Formik } from "formik";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Smartphone,
} from "lucide-react";
import { siteKey } from "../../../../helpers/functions-general";
import { HiPencil } from "react-icons/hi";

const PropertyContactUsTable = ({
  handleAddContactUs,
  contactFormData,
  isFetching,
  isLoading,
  linksData,
  pageType,
}) => {
  return (
    <>
      <div className=" relative py-12 my-16">
        {isFetching && !isLoading && <FetchingSpinner />}
        <div className="bg-light px-6">
          <div className="customContainer">
            <div className="lg:flex  items-center justify-between">
              <div className="flex flex-col gap-7">
                {contactFormData?.data.map((item, key) => {
                  if (
                    item.form_page === "Properties" &&
                    pageType === "Properties"
                  ) {
                    return (
                      <div className="flex flex-col gap-5" key={key}>
                        <div className="flex flex-col gap-12 mb-9">
                          {item.form_label && (
                            <p className="text-secondary text-[clamp(20px,3vw,34px)] font-hindBold">
                              {item.form_label}
                            </p>
                          )}
                          {item.form_description && (
                            <p className="text-[16px] font-hindRegular max-w-[556px]">
                              {item.form_description}
                            </p>
                          )}
                        </div>
                        <h1 className="text-[clamp(30px,3vw,72px)] font-hindBold">
                          {item.form_title}
                        </h1>
                        <ul className="flex flex-col gap-6 [&>li]:flex [&>li]:items-center [&>li]:gap-4 mb-10 lg:mb-0">
                          <li>
                            <Smartphone className="fill-beige" />
                            {linksData?.data.map((item, key) => (
                              <p
                                className="text-secondary text-[clamp(20px,3vw,34px)] font-hindBold"
                                key={key}
                              >
                                {item.links_contact}
                              </p>
                            ))}
                          </li>
                          <li>
                            <MapPin className="fill-beige" />
                            <p className="text-[16px] font-hindRegular">
                              {item.form_address}
                            </p>
                          </li>
                          <li>
                            <Facebook className="fill-beige" />
                            <p className="text-[16px] font-hindRegular">
                              {item.form_facebook}
                            </p>
                          </li>
                          <li>
                            <Instagram className="fill-beige" />
                            <p className="text-[16px] font-hindRegular">
                              {item.form_instagram}
                            </p>
                          </li>
                          <li>
                            <Linkedin className="fill-beige" />
                            <p className="text-[16px] font-hindRegular">
                              {item.form_linkedIn}
                            </p>
                          </li>
                        </ul>
                      </div>
                    );
                  }
                })}
              </div>

              <div className="bg-light border shadow-lg md:p-16 p-6 min-w-[300px] max-w-[622px] place-self-center">
                <div className=" md:w-[520px]">
                  {contactFormData?.data.map((item, key) => {
                    if (
                      item.form_page === "Properties" &&
                      pageType === "Properties"
                    ) {
                      return (
                        <p
                          key={key}
                          className="text-[clamp(16px,3vw,24px)] font-hindBold mb-6 leading-7"
                        >
                          {item.form_contact_description}
                          <a
                            className="absolute cursor-pointer tooltip-header-nav right-2 top-2"
                            data-tooltip="Edit contents"
                            onClick={handleAddContactUs}
                          >
                            <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px]" />
                          </a>
                        </p>
                      );
                    }
                  })}
                </div>

                <Formik>
                  {({ resetForm, dirty }) => {
                    return (
                      <Form>
                        <div>
                          <div className="flex flex-col ">
                            <div className="input-wrapper">
                              <InputText
                                type="text"
                                placeholder="Full Name"
                                className="rounded-none border-2 max-w-[494px] h-[50px]"
                                name="client_name"
                              />
                            </div>
                            <div className="input-wrapper">
                              <InputText
                                type="text"
                                placeholder="Email Address"
                                className="rounded-none border-2 max-w-[494px] h-[50px]"
                                name="client_email"
                              />
                            </div>
                            <div className="input-wrapper">
                              <InputText
                                type="text"
                                placeholder="Mobile Number"
                                className="rounded-none border-2 max-w-[494px] h-[50px]"
                                name="client_phone"
                              />
                            </div>
                            <div className="input-wrapper">
                              <InputText
                                type="text"
                                placeholder="Best Time To Call"
                                className="rounded-none border-2 max-w-[494px] h-[50px]"
                                name="client_time_to_call"
                              />
                            </div>
                            <div className="input-wrapper">
                              <InputTextAreaContactForm
                                type="text"
                                placeholder="Message"
                                className="rounded-none border-2 max-w-[494px]"
                                name="client_message"
                              />
                            </div>
                            {siteKey ? (
                              <div className="input-wrapper reCaptcha">
                                <ReCAPTCHA
                                  sitekey={siteKey}
                                  onChange={(e) => handleChange(e)}
                                />
                              </div>
                            ) : (
                              <p className="pt-3 text-[red]">
                                There's a problem loading recaptcha.
                              </p>
                            )}
                          </div>
                          <div className=" flex justify-end !place-self-start">
                            <button
                              className="btn btn-modal-submit my-6 border-none "
                              type="submit"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyContactUsTable;
