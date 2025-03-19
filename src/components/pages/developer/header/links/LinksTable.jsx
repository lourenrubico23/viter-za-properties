import React from "react";
import { Link } from "react-router-dom";
import { setIsAdd, setIsDelete } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import useQueryData from "../../../../custom-hooks/useQueryData";
import {
  devApiVersion,
  devNavUrl,
} from "../../../../helpers/functions-general";
import ModalDelete from "../../../../partials/modals/ModalDelete";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import { FaFacebookF, FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";

const LinksTable = ({ handleAdd, linksData }) => {
  return (
    <>
      <div className=" shadow-md overflow-y-auto mt-5 lg:mb-0  relative">
        <div className="px-8 lg:block bg-secondary h-[81px] place-content-center">
          <div className="customContainer text-light flex justify-between ">
            <ul className="flex items-center gap-8">
              {linksData?.data?.length > 0 &&
                (() => {
                  const item = linksData.data[0];

                  return (
                    <>
                      {item.links_facebook_title && (
                        <li>
                          <a
                            href={item.links_facebook_link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-lg"
                          >
                            <FaFacebookF />
                            <span className="text-xs">
                              {item.links_facebook_title || "Facebook"}
                            </span>
                          </a>
                        </li>
                      )}
                      {item.links_instagram_title && (
                        <li>
                          <a
                            href={item.links_instagram_link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-lg"
                          >
                            <FaInstagram />
                            <span className="text-xs">
                              {item.links_instagram_title || "Instagram"}
                            </span>
                          </a>
                        </li>
                      )}
                      {item.links_message_title && (
                        <li>
                          <a
                            href={item.links_message_link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-lg"
                          >
                            <FaRegEnvelope />
                            <span className="text-xs">
                              {item.links_message_title || "Message"}
                            </span>
                          </a>
                        </li>
                      )}
                    </>
                  );
                })()}
            </ul>
            {linksData?.data?.length > 0 &&
              linksData?.data[0]?.links_contact && (
                <h3 className="text-2xl">{linksData.data[0].links_contact}</h3>
              )}

            <a
              className="absolute cursor-pointer tooltip-header-nav right-1 top-2"
              data-tooltip="Edit contents"
              onClick={handleAdd}
            >
              <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinksTable;
