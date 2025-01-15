import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
export const NavBar = () => {
  return (
    <nav className="w-[10%] h-full bg-gray-800 flex flex-col items-center justify-between p-[3%]">
      <div className="w-[95%] h-fit flex flex-col items-center gap-8">
        <Link to="/Dashboard">
          <FontAwesomeIcon
            icon={faHouse}
            style={{ color: "#ffffff", fontSize: "3em" }}
          />
        </Link>
        <Link to="/PracticeLog">
          <FontAwesomeIcon
            icon={faMusic}
            style={{ color: "#ffffff", fontSize: "3em" }}
          />
        </Link>
        <Link to="/Stats">
          <FontAwesomeIcon
            icon={faChartSimple}
            style={{ color: "#ffffff", fontSize: "3em" }}
          />
        </Link>
      </div>
      <Link to="/Settings">
        <FontAwesomeIcon
          icon={faGear}
          style={{ color: "#ffffff", fontSize: "3em" }}
        />
      </Link>
    </nav>
  );
};
