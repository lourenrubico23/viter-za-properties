import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import {
  setError,
  setIsDelete,
  setMessage,
  setSuccess,
} from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import { queryData } from "../../custom-hooks/queryData";
import ButtonSpinner from "../spinners/ButtonSpinner";

const ModalDelete = ({ mysqlEndpoint, queryKey, item }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    dispatch(setIsDelete(false));
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(mysqlEndpoint, "delete", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      dispatch(setIsDelete(false));

      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        setIsDelete(false);
        dispatch(setSuccess(true));
        dispatch(setMessage("Successfully Deleted!"));
      }
    },
  });

  const handleYes = () => {
    mutation.mutate({
      item: item,
    });
  };

  return (
    <div className=" fixed top-0 left-0 h-screen w-full flex justify-center items-center z-[9999999]">
      <div
        className=" backdrop bg-dark/50 h-full w-full absolute top-0 left-0 z-[-1]"
        onClick={handleClose}
      ></div>
      <div className="max-w-[450px] w-full bg-[white] rounded-md">
        <div className="flex justify-between p-4 pb-2 ">
          <div></div>
          <h2 className="translate-y-2 translate-x-2 items-center">
            <MdDelete className="mx-auto text-warning w-12 h-12" />
          </h2>
          <button
            onClick={handleClose}
            className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-8"
          >
            <GrFormClose className="text-[25px]" />
          </button>
        </div>
        <div className="p-5 text-center">
          <h3 className="text-sm pb-2 text-[black]">
            Are you sure you want to delete {item}?
          </h3>
          <div className="flex justify-center mt-5 gap-2">
            <button
              className="text-sm btn-modal-submit"
              onClick={handleYes}
              disabled={mutation.isPending}
            >
              {mutation.isPending ? <ButtonSpinner /> : "Delete"}
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

export default ModalDelete;
