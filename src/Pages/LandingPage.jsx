import React from "react";
import TrebleClef from "../assets/TrebleClef.webp";
import { Link } from "react-router-dom";
export const LandingPage = () => {
  return (
    <div className="h-full w-full bg-violet-300 flex ">
      <div className="w-1/2 items-center flex justify-center ">
        <img
          src={TrebleClef}
          className="w-3/4 h-3/4 animate-pulse infinite"
        ></img>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center text-left  gap-2">
        <h1 className="text-7xl font-extrabold">Welcome to PractR</h1>
        <h4 className="text-2xl font-extralight">
          The best practice logger for you and your fellow musicians
        </h4>
        <button className="bg-violet-500 p-2 rounded shadow-lg font-bold text-2xl w-24 h-fit m-8 hover:brightness-75">
          <Link to="/Login">Login</Link>
        </button>
        <h6 className="tex-xl font-light text-violet-700 underline">
          <Link to="/SignUp">Don't have an account? Create one here</Link>
        </h6>
      </div>
    </div>
  );
};
