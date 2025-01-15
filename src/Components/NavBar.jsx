import React from "react";
import Calendar from "../assets/calendar.png";
import Graph from "../assets/graph.png";
import Home from "../assets/home.png";
import Settings from "../assets/settings.png";
export const NavBar = () => {
  return (
    <nav className="w-[10%] h-full bg-gray-800 flex flex-col items-center justify-between p-[3%]">
      <div className="w-[95%] h-fit flex flex-col items-center gap-4">
        <img src={Home}></img>
        <img src={Calendar}></img>
        <img src={Graph}></img>
      </div>
      <img src={Settings}></img>
    </nav>
  );
};
