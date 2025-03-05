import React from "react";
import { FaPlus } from "react-icons/fa";
import { setIsAdd } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import { devApiVersion } from "../../../../helpers/functions-general";
import DashboardNav from "../../../../partials/dashboard/DashboardNav";
import Navigation from "../../../../partials/dashboard/Navigation";
import ModalError from "../../../../partials/modals/ModalError";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalAddOtherUser from "./modal/ModalAddOtherUser";
import ModalSend from "./modal/ModalSend";
import ModalSendingEmailStatus from "./modal/ModalSendingEmailStatus";
import ModalSentEmailSummary from "./modal/ModalSentEmailSummary";
import OtherUserTable from "./OtherUserTable";

const OtherUser = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
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

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };
  return (
    <>
      <div className=" bg-[#f5f5f3] ">
        <Navigation menu="user" submenu="users" />
        <div className="main ml-[220px] w-[calc(100%_-_230px)] z-10">
          <DashboardNav />
          <div className=" w-[calc(100%_-_10px)] pt-[65px] relative">
            <div className="headerCover fixed top-0 left-[200px] w-full h-[60px] bg-dashPrimary z-[9]"></div>
            <div className="addShadowDash bg-[#f5f5f3] h-[90dvh]">
              <div className="p-7">
                <div className=" flex justify-between ">
                  <div className="text-sm text-[black] font-semibold">
                    <p>User</p>
                  </div>
                  <button
                    className="flex items-center gap-1 text-[white] hover:underline py-1 px-2 bg-primary rounded-lg text-sm"
                    onClick={handleAdd}
                  >
                    <FaPlus />
                    Add
                  </button>
                </div>
                <OtherUserTable
                  setItemEdit={setItemEdit}
                  itemEdit={itemEdit}
                  setEmailCount={setEmailCount}
                  setRecipientList={setRecipientList}
                  recipientList={recipientList}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
      {!itemEdit && isSend && (
        <ModalSend
          recipientList={recipientList}
          payloadData={payloadData}
          setIsSend={setIsSend}
          setConfirmSend={setConfirmSend}
          setQueryCount={setQueryCount}
          setIsSendingLoading={setIsSendingLoading}
          isSendingLoading={isSendingLoading}
          setIsSuccessSendingEmail={setIsSuccessSendingEmail}
          setQueryStatus={setQueryStatus}
          msg={`Are you sure you want to add this user and send a validation
                email?`}
          mysqlEndpoint={`${devApiVersion}/user`}
          queryKey={`user`}
        />
      )}

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
          message={"The email has been sent successfully!"}
        />
      )}

      {store.isAdd && (
        <ModalAddOtherUser
          itemEdit={itemEdit}
          setIsSend={setIsSend}
          setPayloadData={setPayloadData}
          setEmailCount={setEmailCount}
          setRecipientList={setRecipientList}
        />
      )}
    </>
  );
};

export default OtherUser;
