import React from "react";
import warning from "../../assets/warning.svg";
import success from "../../assets/success.svg";
import error from "../../assets/error.svg";
import update from "../../assets/update.svg";
import "../components.css";

export default function Banner({ status, isMultiLine }) {
  const statusClass =
    status === "success"
      ? "green"
      : status === "warning"
      ? "yellow"
      : status === "error"
      ? "red"
      : status === "update"
      ? "blue"
      : "";

  const iconsObject = {
    success,
    warning,
    error,
    update,
  };

  const bannerTitle =
    status === "success"
      ? "Congratulations!"
      : status === "warning"
      ? "Attention"
      : status === "error"
      ? "There is a problem with your application"
      : status === "update"
      ? "Update available"
      : "";

  const icon2BUsed = status ? iconsObject[status] : "";

  console.log(icon2BUsed);

  return (
    <div className={`banner ${statusClass}`}>
      <img src={icon2BUsed} className="w-5 h-5 mr-3 mt-[2px]" />
      <div className="flex flex-col gap-2">
        <h2 className="font-medium text-nowrap">{bannerTitle}</h2>
        {isMultiLine && (
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            perferendis reiciendis, fugiat officiis quia dolorum in libero
            eveniet molestiae veniam error officia deserunt esse adipisci,
            magnam quas aperiam ut enim.
          </p>
        )}
      </div>
    </div>
  );
}
