import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FaArchive } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import {
  setError,
  setMessage,
  setSuccess,
  setIsArchive,
} from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import { queryData } from "../../helpers/queryData";
import ButtonSpinner from "../spinners/ButtonSpinner";

const ModalArchive = ({ mysqlEndpoint, queryKey, item }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    dispatch(setIsArchive(false));
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(mysqlEndpoint, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      // dispatch(setIsDelete(false));

      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        dispatch(setIsArchive(false));
        dispatch(setSuccess(true));
        dispatch(setMessage("Successfully Archived!"));
      }
    },
  });

  const handleYes = async () => {
    // mutate data
    mutation.mutate({
      isActive: 0,
    });
  };
  return (
    <div className=" fixed top-0 left-0 h-screen w-full flex justify-center items-center z-[999]">
      <div
        className=" backdrop bg-[black] opacity-50 h-full w-full absolute top-0 left-0 z-[-1] "
        onClick={handleClose}
      ></div>
      <div className="max-w-[450px] w-full bg-[white] rounded-md">
        <div className="flex items-center justify-between p-4 pb-2 ">
          <div></div>
          <h2 className="translate-y-2">
            <FaArchive className="text-[30px]" />
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-8"
          >
            <GrFormClose className="text-[25px]" />
          </button>
        </div>
        <div className="p-5 text-center">
          <h3 className="text-sm pb-2">
            Are you sure you want to archive {item}?
          </h3>
          <div className="flex justify-center mt-5 gap-2">
            <button
              className="text-sm btn-modal-submit"
              onClick={handleYes}
              disabled={mutation.isPending}
            >
              {mutation.isPending ? <ButtonSpinner /> : "Yes"}
            </button>
            <button className="text-sm btn-modal-cancel" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalArchive;
