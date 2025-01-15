import React from "react";
import { NavBar } from "../Components/NavBar";
export const Settings = () => {
  return (
    <>
      <main className="w-full h-full flex justify-center">
        <NavBar></NavBar>
        <main className="w-[90%] h-full bg-black text-white flex flex-col p-[2%]">
          <h1>Settings</h1>
          <div className="w-full h-[95%] bg-gray-800 text-white flex flex-col gap-2 p-[2%] rounded-lg items-center justify-center">
            <h1>Username: testUser1</h1>
            <h1>Instrument: trumpet</h1>
            <h1>Password: #########</h1>
            <button>Reset password</button>
            <button>Logout</button>
            <button>Delete Account</button>
          </div>
        </main>
      </main>
    </>
  );
};
