import { HandleEscape } from "@/components/helpers/functions-general";
import { queryData } from "@/components/helpers/queryData";
import { setError, setMessage } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FaKey } from "react-icons/fa";
const ModalReset = ({
  mysqlApiReset,
  msg,
  successMsg,
  queryKey,
  setIsReset,
  dataItem,
  setConfirmSend,
  setIsSendingLoading,
  setQueryStatus,
  setIsSuccessSendingEmail,
  recipientList,
  setQueryCount,
}) => {
  const { dispatch } = React.useContext(StoreContext);

  const queryClient = useQueryClient();

  const handleYes = async () => {
    // show the status of sending email
    setConfirmSend(true);

    // add loading state
    // disabled all input field and button
    setIsSendingLoading(true);

    const queryResetPassword = await queryData(mysqlApiReset, "post", {
      email: dataItem.user_email,
    });

    console.log("Query: ", queryResetPassword);

    if (queryResetPassword?.success) {
      // loop through the list of recipient email

      // query key
      queryClient.invalidateQueries({ queryKey: [queryKey] });

      for (let i = 0; i <= recipientList.length; i++) {
        try {
          if (queryResetPassword?.success) {
            setQueryStatus(queryResetPassword);
            setQueryCount(i); // Update the counter *after* a successful query.
          } else {
            // Handle failure immediately
            setConfirmSend(false);
            setIsSendingLoading(false);
            setIsSuccessSendingEmail(true);
            setQueryStatus(queryResetPassword); // Important to set the status even on failure
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
      dispatch(setMessage(queryResetPassword?.error));
      setConfirmSend(false);
      setIsSendingLoading(false);
      setIsSuccessSendingEmail(true);

      return;
    }
  };

  const handleClose = () => {
    setIsReset(false);
  };

  HandleEscape(() => handleClose());

  return (
    <>
      <div
        className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 z-[99] flex justify-center items-center w-full md:inset-0 max-h-full"
        onClick={handleClose}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              data-modal-hide="popup-modal"
              onClick={handleClose}
              // disabled={mutation.isPending}
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
              <FaKey className="mx-auto mb-8 text-warning w-12 h-12" />

              <h3 className="mb-8 text-sm font-normal text-black">{msg}</h3>
              <div className="text-sm flex gap-2">
                <button
                  type="submit"
                  className=" btn-modal-submit"
                  onClick={handleYes}
                  // disabled={mutation.isPending}
                >
                  {/* {mutation.isPending && <ButtonSpinner />} Yes */}
                  Yes
                </button>
                <button
                  type="reset"
                  className=" btn-modal-cancel"
                  onClick={handleClose}
                  // disabled={mutation.isPending}
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

export default ModalReset;
