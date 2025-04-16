import React from "react";

// // Local
// const urlZAProperties = "http://localhost/react-vite/viter-za-properties";
// const urlZAPropertiesImg =
//   "http://localhost/react-vite/viter-za-properties/public/img";

//Online Demo url
export const urlZAProperties = "https://zacalfanta.com";
export const urlZAPropertiesImg = "https://zacalfanta.com/img";

// ONLINE DEV and LOCAL
export const devApiUrl = `${urlZAProperties}/rest`;
export const devBaseImgUrl = `${urlZAPropertiesImg}`;
export const devBaseUrl = `${urlZAProperties}`;
export const devNavUrl = "";
export const devApiVersion = "/v1";

export const setTimeZone = "Asia/Taipei";

export const urlDeveloper = "developer";
export const urlAdmin = "admin";

// dev key
export const devKey =
  "$2a$12$5obsBD1n0We9BIAM01RJy.4F0t4W2KmMPJppAur2eY1tmpG4y87vO";

// google api
export const googleThumbnailLink = "https://drive.google.com/thumbnail?id=";
export const googleHDViewLink = "https://lh3.googleusercontent.com/d/";
export const googleViewLink = "https://drive.google.com/file/d/";

// reCAPTCHA site key PRODUCTION
export const siteKey = "";

// get focus on a button
export const GetFocus = (id) => {
  React.useEffect(() => {
    const obj = document.getElementById(id);
    obj.focus();
  }, []);
};

export const formatDate = (dateVal, val = "", format = "") => {
  const formatedDate = val;
  if (typeof dateVal !== "undefined" && dateVal !== "") {
    // formatting date
    const event = new Date(dateVal);

    return event.toLocaleString("en", options(format));
  }
  return formatedDate;
};

export const HandleEscape = (handleClose) => {
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  });
};

//rgb to hex
export const hexToRgb = (hex) => {
  let result = "";
  // console.log(hex);
  if (typeof hex !== "undefined" && hex !== "") {
    result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    result = `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(
      result[3],
      16
    )} `;
  }

  return result;
};

// fetch for uploading photo or file
export const fetchFormData = (url, fd = {}) => {
  const data = fetch(url, {
    method: "post",
    body: fd,
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error(error + " api endpoint error");
    });
  return data;
};

export const getConvertStringToJSONparseData = (jsonString) => {
  let resultArray = [];

  try {
    resultArray = JSON.parse(jsonString);
  } catch (e) {
    // console.log(e);
  }

  return resultArray;
};

// extract google map link
export const getGoogleMapEmbededUrl = (url) => {
  if (!url || !url.includes("google.com/maps")) {
    return null; // Return null for invalid or missing URLs
  }

  // If already an embedded URL, return as is
  if (url.includes("embed?pb=")) {
    return url;
  }

  // Extract latitude & longitude from a "Place" or "Search" URL
  const coordinatesMatch = url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);

  if (coordinatesMatch) {
    const lat = coordinatesMatch[1];
    const lng = coordinatesMatch[2];
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1694518739393`;
  }

  return null; // Return null if no coordinates are found
};

// get the url id parameter
export const getUrlParam = (id) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  // const param = urlParams.get(id);
  // return param;
  return urlParams;
};

export const options = (format) => {
  const options =
    format === "with-weeks"
      ? {
          timeZone: setTimeZone,
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      : format === "timezone-name"
      ? {
          timeZoneName: "short",
        }
      : format === "weeks"
      ? {
          timeZone: setTimeZone,
          weekday: "long",
        }
      : format === "no-year-with-weeks"
      ? {
          timeZone: setTimeZone,
          weekday: "long",
          month: "long",
          day: "numeric",
        }
      : format === "no-year"
      ? {
          timeZone: setTimeZone,
          month: "long",
          day: "numeric",
        }
      : format === "date-time-with-weeks"
      ? {
          timeZone: setTimeZone,
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        }
      : format === "plain-date"
      ? {
          timeZone: setTimeZone,
        }
      : format === "numeric-week"
      ? {
          timeZone: setTimeZone,
          weekday: "numeric",
        }
      : format === "year"
      ? {
          timeZone: setTimeZone,
          year: "numeric",
        }
      : format === "month-short-year"
      ? {
          timeZone: setTimeZone,
          month: "short",
          year: "numeric",
        }
      : {
          timeZone: setTimeZone,
          month: "long",
          day: "numeric",
          year: "numeric",
        };

  return options;
};

export const getDateNow = () => {
  return new Date().toISOString("en", options("plain-date")).split("T")[0];
};

// Copyright year
export const copyrightYear = () => {
  return getDateNow().split("-")[0];
};

// Slug conversion to lower case and remove special characters
export const generateSlug = (title) => {
  if (!title) return "untitled-blog"; // Default slug

  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/-+/g, "-"); // Remove multiple dashes
};
