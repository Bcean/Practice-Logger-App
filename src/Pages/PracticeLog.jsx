import React from "react";
import { NavBar } from "../Components/NavBar";
import { LoggerData } from "../Components/LoggerData";
import { useState } from "react";
import { AddSession } from "../Components/AddSession";
export const PracticeLog = () => {
  const [isVisable, setIsVisable] = useState(false); //on click the add session screen should be visable

  const removeVisable = () => {
    setIsVisable(false); //passed as a prop to the AddSession component to remove the visability of the add session screen
  };
  return (
    <>
      <main className="w-full h-full flex justify-center">
        <NavBar></NavBar>
        <main className="w-[90%] h-full bg-black text-white flex flex-col gap-2 p-[2%]">
          <h1>Practice Overview</h1>
          <div className="w-full h-[95%] bg-gray-800 text-white flex flex-col gap-2 p-[2%] rounded-lg items-start">
            <button
              onClick={() => {
                setIsVisable(true);
              }}
              className="bg-violet-500 p-2 rounded shadow-lg font-bold text-1xl w-fit h-fit  hover:brightness-75"
            >
              Add Session
            </button>
            <LoggerData></LoggerData>
          </div>
          {isVisable && <AddSession removeVisable={removeVisable}></AddSession>}
        </main>
      </main>
    </>
  );
};
