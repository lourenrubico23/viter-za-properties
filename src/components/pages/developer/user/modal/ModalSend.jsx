import { queryData } from "@/components/helpers/queryData";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import { setError, setMessage } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { IoIosSend } from "react-icons/io";

const ModalSend = ({
  recipientList,
  setIsSend,
  setConfirmSend,
  setQueryCount,
  setIsSendingLoading,
  isSendingLoading,
  setIsSuccessSendingEmail,
  setQueryStatus,
  payloadData,
  msg,
  mysqlEndpoint,
  queryKey,
}) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleYes = async () => {
    // close the confirmation modal
    setIsSend(false);

    // show the status of sending email
    setConfirmSend(true);

    // add loading state
    // disabled all input field and button
    setIsSendingLoading(true);

    const queryCreateOtherUser = await queryData(
      mysqlEndpoint,
      "post",
      payloadData
    );

    console.log("Query: ", queryCreateOtherUser);

    if (queryCreateOtherUser?.success) {
      // loop through the list of recipient email

      // query key
      queryClient.invalidateQueries({ queryKey: [queryKey] });

      for (let i = 0; i <= recipientList.length; i++) {
        try {
          if (queryCreateOtherUser?.success) {
            setQueryStatus(queryCreateOtherUser);
            setQueryCount(i); // Update the counter *after* a successful query.
          } else {
            // Handle failure immediately
            setConfirmSend(false);
            setIsSendingLoading(false);
            setIsSuccessSendingEmail(true);
            setQueryStatus(queryCreateOtherUser); // Important to set the status even on failure
            return; // Exit the loop on the first failure.  No point in continuing.
          }

          /* console.log(query); */ // Keep the logging for debugging.

          // Check for completion *inside* the loop *after* the query:
          if (i === recipientList.length) {
            setTimeout(() => {
              setConfirmSend(false);
              setIsSendingLoading(false);
              setIsSuccessSendingEmail(true);
            }, 1000);
          }
        } catch (error) {
          // Handle errors from queryData (e.g., network errors, JSON parsing issues)
          console.error("Error sending newsletter:", error);
          setConfirmSend(false);
          setIsSendingLoading(false);
          setIsSuccessSendingEmail(true); // Consider a different state for a true error.
          setQueryStatus({
            success: false,
            message: "An error occurred during sending.",
          }); // Set an appropriate error message.
          return; // Exit the loop.
        }
      }
    } else {
      dispatch(setError(true));
      dispatch(setMessage(queryCreateOtherUser?.error));
      setConfirmSend(false);
      setIsSendingLoading(false);
      setIsSuccessSendingEmail(true);

      return;
    }
  };

  const handleClose = () => {
    setIsSend(false);
  };

  return (
    <>
      <div className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 z-[99] flex justify-center items-center w-full md:inset-0 max-h-full">
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              data-modal-hide="popup-modal"
              onClick={handleClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              <IoIosSend className="mx-auto mb-8 text-warning w-12 h-12" />

              <h3 className="mb-8 text-sm font-normal text-black">{msg}</h3>
              <div className="flex gap-2">
                <button
                  className="text-sm btn-modal-submit"
                  onClick={handleYes}
                  disabled={isSendingLoading}
                >
                  {isSendingLoading ? <ButtonSpinner /> : "Yes"}
                </button>

                <button
                  className="text-sm btn-modal-cancel"
                  onClick={handleClose}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSend;
