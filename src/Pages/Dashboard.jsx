import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavBar } from "../Components/NavBar";
export const Dashboard = () => {
  const [displayUsername, setdisplayUsername] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        fetch("http://localhost:8000/api/user/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json", //json type data being sent
            Authorization: `Bearer ${localStorage.getItem("token")}`, //need 'Bearer' because we are sending a token the backend needs to recognize
          },
        })
          .then((response) => response.json()) //parse the json data so we can use it
          .then((result) => {
            console.log(result.username);
            setdisplayUsername(result.username); //set the username to the result of the fetch
          });
      } catch (error) {
        console.log(error); //if there is an error, log it
        setdisplayUsername("Error");
      }
    };
    fetchUser(); // call function on page load once
  }, []);
  return (
    <>
      <main className="w-full h-full flex justify-center">
        <NavBar></NavBar>
        <main className="w-[90%] h-full bg-black text-white flex flex-col border border-blue-600">
          <h1 className="h-[10%] border border-green-600">
            Welcome {displayUsername}
          </h1>
          <div className="h-[90%] w-full flex p-[2%] justify-between items-center">
            <div
              id="leftDisplay"
              className="w-[47.5%] h-full border border-red-800"
            ></div>
            <div
              id="rightDisplay"
              className="w-[47.5%] h-full border border-red-800"
            ></div>
          </div>
        </main>
      </main>
    </>
  );
};
