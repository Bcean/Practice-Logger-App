import React from "react";
import { NavBar } from "../Components/NavBar";
import { UserDashStats } from "../Components/UserDashStats";
import { YearStatsGraph } from "../Components/YearStatsGraph";
import { SkillsBarGraph } from "../Components/SkillsBarGraph";
export const Stats = () => {
  return (
    <>
      <main className="w-full h-full flex justify-center">
        <NavBar></NavBar>
        <main className="w-[90%] h-full bg-black text-white flex flex-col p-[1%]">
          <h1 className="h-[5%] ">Practice Analytics</h1>
          <div className="h-[95%] w-full flex justify-between items-center">
            <div
              id="leftDisplay"
              className="w-[35%] h-full flex flex-col items-center gap-4 justify-center"
            >
              <UserDashStats></UserDashStats>
              <SkillsBarGraph></SkillsBarGraph>
            </div>
            <div
              id="rightDisplay"
              className="w-[60%] p-[2%] h-full  flex flex-col items-center justify-center gap-4"
            >
              <YearStatsGraph></YearStatsGraph>
            </div>
          </div>
        </main>
      </main>
    </>
  );
};
