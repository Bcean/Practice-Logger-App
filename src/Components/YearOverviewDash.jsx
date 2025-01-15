import React from "react";

export const YearOverviewDash = () => {
  return (
    <div className="w-[90%] h-fit p-[2%] bg-gray-800 text-white flex flex-col items-center gap-1 rounded-lg">
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
