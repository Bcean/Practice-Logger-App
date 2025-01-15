import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
export const AddSession = ({ removeVisable }) => {
  return (
    <div className="flex flex-col items-center  w-fit h-fit bg-gray-500 p-[5%] rounded-lg absolute top-[50%] left-[50%] z-10">
      <FontAwesomeIcon
        icon={faCircleXmark}
        style={{ color: "#ffffff" }}
        onClick={removeVisable}
      />
      <form className="flex flex-col w-full h-fit p-[2%] items center text-white">
        <input
          placeholder="Name Session"
          type="text"
          name="sessionName"
        ></input>
        <input
          placeholder="Session Notes"
          type="text"
          name="sessionNotes"
        ></input>
        <h3>Skills worked</h3>
        <input type="checkbox" name="range"></input>
        <label for="range">range</label>
        <input type="checkbox" name="scales"></input>
        <label for="scales">scales</label>
        <input type="checkbox" name="endurance"></input>
        <label for="endurance">endurane</label>
        <input type="text" placeholder="timeSpent"></input>
        <button type="submit">Log session</button>
      </form>
    </div>
  );
};
