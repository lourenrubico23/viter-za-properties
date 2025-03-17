import { Form, Formik } from "formik";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Smartphone,
} from "lucide-react";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import * as Yup from "yup";
import { setError, setMessage } from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import useQueryData from "../../custom-hooks/useQueryData";
import { InputText, InputTextAreaContactForm } from "../../helpers/FormInputs";
import { devApiVersion, siteKey } from "../../helpers/functions-general";
import ModalSendingEmailStatus from "../../pages/developer/user/other-user/modal/ModalSendingEmailStatus";
import ModalSentEmailSummary from "../../pages/developer/user/other-user/modal/ModalSentEmailSummary";
import ButtonSpinner from "../spinners/ButtonSpinner";
import ModalSendForm from "./ModalSendForm";
import ModalError from "../modals/ModalError";

const ContactForm = ({ pageType }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isSend, setIsSend] = React.useState(false);
  const [isSendingLoading, setIsSendingLoading] = React.useState(false);
  const [queryCount, setQueryCount] = React.useState(0);
  const [emailCount, setEmailCount] = React.useState(0);
  const [confirmSend, setConfirmSend] = React.useState(false);
  const [recipientList, setRecipientList] = React.useState([]);
  const [isSuccessSendingEmail, setIsSuccessSendingEmail] =
    React.useState(false);
  const [queryStatus, setQueryStatus] = React.useState(null);
  const [payloadData, setPayloadData] = React.useState(null); // Store form values
  const recaptchaRef = React.useRef();

  const { data: contactFormData } = useQueryData(
    `${devApiVersion}/contact-form`, // endpoint
    "get", // method
    "contact-form" // key
  );
  const { data: contactNoData } = useQueryData(
    `${devApiVersion}/contactno`, // endpoint
    "get", // method
    "contactno" // key
  );

  const {
    isFetchingReceiver,
    errorReceiver,
    data: receiverData,
  } = useQueryData(
    "/v1/receiver", // endpoint
    "get", // method
    "receiver" // key
  );

  const handleChange = (value) => {
    console.log(value);
    // setCaptcha(value);
  };

  const handleSend = (values) => {
    const captchaValue = recaptchaRef.current?.getValue();

    if (!captchaValue) {
      dispatch(setError(true));
      dispatch(
        setMessage(
          "Please verify that you are not a robot by completing the reCAPTCHA below."
        )
      );
      return;
    }

    // Reset reCAPTCHA after mutation
    recaptchaRef.current?.reset();

    // Pass data to the next modal, including captchaValue
    setPayloadData({ ...values, captchaValue });

    // Extract recipient emails from receiverData
    const recipientEmails =
      receiverData?.data.map((receiver) => receiver.email) || [];

    setEmailCount(recipientEmails.length);
    setIsSend(true);
    setRecipientList(recipientEmails);

    console.log("Recipient count:", recipientEmails.length);
    console.log("Payload Data:", { ...values, captchaValue });
  };

  const initVal = {
    client_name: "",
    client_email: "",
    client_phone: "",
    client_message: "",
    client_time_to_call: "",
    email_subject: `You Have New Inquiry From ${pageType} Page`,
  };

  const yupSchema = Yup.object({
    client_name: Yup.string().required("Required"),
    client_email: Yup.string().required("Required").email("Invalid email"),
    client_phone: Yup.string().required("Required"),
    client_message: Yup.string().required("Required"),
  });

  return (
    <>
      <div className="bg-light py-24">
        <div className="customContainer">
          <div className="lg:flex  items-center justify-between">
            <div className="flex flex-col gap-7">
              {contactFormData?.data.map((item, key) => {
                if (item.form_page === "Home" && pageType === "Home") {
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
                          {contactNoData?.data.map((item, key) => (
                            <p
                              className="text-secondary text-[clamp(20px,3vw,34px)] font-hindBold"
                              key={key}
                            >
                              {item.contact_no_contact}
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
                          {contactNoData?.data.map((item, key) => (
                            <p
                              className="text-secondary text-[clamp(20px,3vw,34px)] font-hindBold"
                              key={key}
                            >
                              {item.contact_no_contact}
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
                if (item.form_page === "Buyers" && pageType === "Buyers") {
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
                          {contactNoData?.data.map((item, key) => (
                            <p
                              className="text-secondary text-[clamp(20px,3vw,34px)] font-hindBold"
                              key={key}
                            >
                              {item.contact_no_contact}
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
                if (item.form_page === "Sellers" && pageType === "Sellers") {
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
                          {contactNoData?.data.map((item, key) => (
                            <p
                              className="text-secondary text-[clamp(20px,3vw,34px)] font-hindBold"
                              key={key}
                            >
                              {item.contact_no_contact}
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
                if (item.form_page === "Blogs" && pageType === "Blogs") {
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
                          {contactNoData?.data.map((item, key) => (
                            <p
                              className="text-secondary text-[clamp(20px,3vw,34px)] font-hindBold"
                              key={key}
                            >
                              {item.contact_no_contact}
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
                if (item.form_page === "Contact" && pageType === "Contact") {
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
                          {contactNoData?.data.map((item, key) => (
                            <p
                              className="text-secondary text-[clamp(20px,3vw,34px)] font-hindBold"
                              key={key}
                            >
                              {item.contact_no_contact}
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
                  if (item.form_page === "Home" && pageType === "Home") {
                    return (
                      <p
                        key={key}
                        className="text-[clamp(16px,3vw,24px)] font-hindBold mb-6 leading-7"
                      >
                        {item.form_contact_description}
                      </p>
                    );
                  }
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
                      </p>
                    );
                  }
                  if (item.form_page === "Buyers" && pageType === "Buyers") {
                    return (
                      <p
                        key={key}
                        className="text-[clamp(16px,3vw,24px)] font-hindBold mb-6 leading-7"
                      >
                        {item.form_contact_description}
                      </p>
                    );
                  }
                  if (item.form_page === "Sellers" && pageType === "Sellers") {
                    return (
                      <p
                        key={key}
                        className="text-[clamp(16px,3vw,24px)] font-hindBold mb-6 leading-7"
                      >
                        {item.form_contact_description}
                      </p>
                    );
                  }
                  if (item.form_page === "Blogs" && pageType === "Blogs") {
                    return (
                      <p
                        key={key}
                        className="text-[clamp(16px,3vw,24px)] font-hindBold mb-6 leading-7"
                      >
                        {item.form_contact_description}
                      </p>
                    );
                  }
                  if (item.form_page === "Contact" && pageType === "Contact") {
                    return (
                      <p
                        key={key}
                        className="text-[clamp(16px,3vw,24px)] font-hindBold mb-6 leading-7"
                      >
                        {item.form_contact_description}
                      </p>
                    );
                  }
                })}
              </div>

              <Formik
                initialValues={initVal}
                validationSchema={yupSchema}
                onSubmit={handleSend}
              >
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
                              disabled={isSendingLoading}
                            />
                          </div>
                          <div className="input-wrapper">
                            <InputText
                              type="text"
                              placeholder="Email Address"
                              className="rounded-none border-2 max-w-[494px] h-[50px]"
                              name="client_email"
                              disabled={isSendingLoading}
                            />
                          </div>
                          <div className="input-wrapper">
                            <InputText
                              type="text"
                              placeholder="Mobile Number"
                              className="rounded-none border-2 max-w-[494px] h-[50px]"
                              name="client_phone"
                              disabled={isSendingLoading}
                            />
                          </div>
                          <div className="input-wrapper">
                            <InputText
                              type="text"
                              placeholder="Best Time To Call"
                              className="rounded-none border-2 max-w-[494px] h-[50px]"
                              name="client_time_to_call"
                              disabled={isSendingLoading}
                            />
                          </div>
                          <div className="input-wrapper">
                            <InputTextAreaContactForm
                              type="text"
                              placeholder="Message"
                              className="rounded-none border-2 max-w-[494px]"
                              name="client_message"
                              disabled={isSendingLoading}
                            />
                          </div>
                          {siteKey ? (
                            <div className="input-wrapper reCaptcha">
                              <ReCAPTCHA
                                ref={recaptchaRef}
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
                            disabled={isSendingLoading || !dirty}
                          >
                            {isSendingLoading ? (
                              <ButtonSpinner />
                            ) : (
                              "Send Message"
                            )}
                          </button>
                        </div>
                      </div>

                      {isSend && (
                        <ModalSendForm
                          recipientList={recipientList}
                          payloadData={payloadData}
                          setIsSend={setIsSend}
                          setConfirmSend={setConfirmSend}
                          setQueryCount={setQueryCount}
                          setIsSendingLoading={setIsSendingLoading}
                          isSendingLoading={isSendingLoading}
                          setIsSuccessSendingEmail={setIsSuccessSendingEmail}
                          setQueryStatus={setQueryStatus}
                          resetForm={resetForm}
                          msg={`Are you sure you want to send this
                email?`}
                          mysqlEndpoint={`${devApiVersion}/sending-email`}
                          queryKey={`sending-email`}
                        />
                      )}
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      {confirmSend && (
        <ModalSendingEmailStatus
          recipientList={recipientList}
          queryCount={queryCount}
        />
      )}
      {isSuccessSendingEmail && (
        <ModalSentEmailSummary
          queryCount={queryCount}
          recipientList={recipientList}
          setIsSuccessSendingEmail={setIsSuccessSendingEmail}
          setQueryCount={setQueryCount}
          queryStatus={queryStatus}
          message={"The email has been sent successfully."}
        />
      )}
      {store.error && <ModalError />}
    </>
  );
};

export default ContactForm;
