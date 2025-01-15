import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
export const StartPractice = () => {
  return (
    <div className="flex items-center justify-center w-[90%] h-fit bg-gray-800 p-[5%] rounded-lg">
      <FontAwesomeIcon
        icon={faPlay}
        style={{ color: "#ffffff", fontSize: "10em" }}
      />
    </div>
  );
};
