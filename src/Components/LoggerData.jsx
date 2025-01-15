import React from "react";

export const LoggerData = () => {
  return (
    <table className="w-full border-collapse h-fit text-white  ">
      <thead>
        <tr className="text-center">
          <th scope="col">Date</th>
          <th scope="col">Time Spent</th>
          <th scope="col">Instrument</th>
          <th scope="col">Note</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr className="text-center bg-gray-500 border-b border-gray-700 ">
          <td scope="row">2024-11-08</td>
          <td>1 Hour</td>
          <td>Trumpet</td>
          <td>Worked on Scales</td>
          <td className="flex justify-evenly text-violet-500">
            <button>edit</button>
            <button>details</button>
            <button>delete</button>
          </td>
        </tr>
        <tr className="text-center bg-gray-500">
          <td scope="row">2024-11-08</td>
          <td>1 Hour</td>
          <td>Trumpet</td>
          <td>Worked on range</td>
          <td className="flex justify-evenly text-violet-500">
            <button>edit</button>
            <button>details</button>
            <button>delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
