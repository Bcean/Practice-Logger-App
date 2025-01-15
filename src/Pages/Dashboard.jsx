import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavBar } from "../Components/NavBar";
import { UserDashStats } from "../Components/UserDashStats";
import { AiInsight } from "../Components/AiInsight";
import { YearOverviewDash } from "../Components/YearOverviewDash";
import { StartPractice } from "../Components/StartPractice";
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
        <main className="w-[90%] h-full bg-black text-white flex flex-col p-[2%]">
          <h1 className="h-[10%] ">Welcome {displayUsername}</h1>
          <div className="h-[90%] w-full flex p-[2%] justify-between items-center">
            <div
              id="leftDisplay"
              className="w-[47.5%] h-full flex flex-col items-center gap-4 justify-center"
            >
              <UserDashStats></UserDashStats>
              <AiInsight></AiInsight>
              <YearOverviewDash></YearOverviewDash>
            </div>
            <div
              id="rightDisplay"
              className="w-[47.5%] p-[2%] h-full  flex flex-col items-center justify-center gap-4"
            >
              <h1>Start Practice Session</h1>
              <StartPractice></StartPractice>
            </div>
          </div>
        </main>
      </main>
    </>
  );
};
