import React from "react";

export const YearStatsGraph = () => {
  return (
    <div className="flex flex-col items-center  w-[90%] h-full bg-gray-800 p-[5%] rounded-lg">
      <div className="w-[90%] h-fit p-[2%]  flex  items-center justify-between">
        <h3>
          <strong>Year Overview</strong>
        </h3>
        <button>View full graph</button>
      </div>
      <h1>Graph here</h1>
    </div>
  );
};
