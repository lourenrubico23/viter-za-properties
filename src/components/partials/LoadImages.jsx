import React from "react";
import { FaFile, FaUserCircle } from "react-icons/fa";
import FetchingSpinner from "./spinners/FetchingSpinner";

const LoadImages = ({
  url,
  className,
  isTableSpinner = false,
  isErrorUserImage = false,
  child = false,
}) => {
  if (!url || url === "") return;
  const [isLoading, setIsLoading] = React.useState(true);
  const [isImageError, setIsImageError] = React.useState(false);

  return (
    <>
      {isLoading && (
        <>
          {isTableSpinner ? (
            <div className="bg-gray-300 p-1.5 h-full w-full rounded-md relative loading-bar overflow-hidden z-20"></div>
          ) : (
            <FetchingSpinner />
          )}
        </>
      )}
      <img
        src={url}
        onLoad={({ currentTarget }) => {
          setIsLoading(false);
          setIsImageError(false);
          currentTarget.classList = className;
        }}
        onError={({ currentTarget }) => {
          currentTarget.classList = "hidden";
          // currentTarget.onerror = null; // prevents looping
          setIsLoading(false);
          setIsImageError(true);
        }}
        alt=""
        className={className}
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 -z-20">
        <div className="flex flex-col gap-4 justify-center items-center h-full">
          {isImageError && isErrorUserImage && !child && (
            <FaUserCircle className="w-full h-full fill-gray-400" />
          )}
          {isImageError && !isErrorUserImage && !child && (
            <FaFile className="text-5xl fill-gray-300" />
          )}
          {isImageError && !isErrorUserImage && !child && (
            <span className="text-xs">File could not preview.</span>
          )}
          {isImageError && child && child}
        </div>
      </div>
    </>
  );
};

export default LoadImages;
