import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Smartphone,
} from "lucide-react";
import React from "react";
import useQueryData from "../custom-hooks/useQueryData";
import { devApiVersion } from "../helpers/functions-general";

const ContactForm = ({ pageType }) => {
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
  return (
    <div className="bg-light py-24">
      <div className="customContainer">
        <div className="lg:flex  items-center justify-between">
          <div className="flex flex-col gap-7">
            {contactFormData?.data.map((item, key) => {
              if (item.form_page === "Home" && pageType === "home") {
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
                pageType === "properties"
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
              if (item.form_page === "Buyers" && pageType === "buyers") {
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
              if (item.form_page === "Sellers" && pageType === "sellers") {
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
              if (item.form_page === "Blogs" && pageType === "blogs") {
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
              if (item.form_page === "Contact" && pageType === "contact") {
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
            <p className=" md:w-[520px]">
              {contactFormData?.data.map((item, key) => {
                if (item.form_page === "Home" && pageType === "home") {
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
                  pageType === "properties"
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
                if (item.form_page === "Buyers" && pageType === "buyers") {
                  return (
                    <p
                      key={key}
                      className="text-[clamp(16px,3vw,24px)] font-hindBold mb-6 leading-7"
                    >
                      {item.form_contact_description}
                    </p>
                  );
                }
                if (item.form_page === "Sellers" && pageType === "sellers") {
                  return (
                    <p
                      key={key}
                      className="text-[clamp(16px,3vw,24px)] font-hindBold mb-6 leading-7"
                    >
                      {item.form_contact_description}
                    </p>
                  );
                }
                if (item.form_page === "Blogs" && pageType === "blogs") {
                  return (
                    <p
                      key={key}
                      className="text-[clamp(16px,3vw,24px)] font-hindBold mb-6 leading-7"
                    >
                      {item.form_contact_description}
                    </p>
                  );
                }
                if (item.form_page === "Contact" && pageType === "contact") {
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
            </p>

            <div className="flex flex-col gap-7">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-none border-2 max-w-[494px] h-[50px]"
              />
              <input
                type="text"
                placeholder="Email Address"
                className="rounded-none border-2 max-w-[494px] h-[50px]"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="rounded-none border-2 max-w-[494px] h-[50px]"
              />
              <input
                type="text"
                placeholder="Best Time To Call"
                className="rounded-none border-2 max-w-[494px] h-[50px]"
              />
              <textarea
                type="text"
                placeholder="Message"
                className="rounded-none border-2 max-w-[494px]"
              />
            </div>

            <button className="btn my-6 !place-self-start">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
