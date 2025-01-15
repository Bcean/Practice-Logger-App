import React from "react";

export const UserDashStats = () => {
  return (
    <div className="w-[90%] h-fit p-[2%] bg-gray-800 text-white flex flex-col items-center gap-1 rounded-lg">
      <h3>
        <strong>Total Hours Practiced</strong>
        <br></br>
        50 Hrs
      </h3>
      <h3>
        <strong>Total Days Practiced</strong>
        <br></br>
        50 days
      </h3>
      <h3>
        <strong>Least Practiced Skill</strong>
        <br></br>
        Scales
      </h3>
      <h3>
        <strong>Most Practiced Skill</strong>
        <br></br>
        range
      </h3>
    </div>
  );
};
