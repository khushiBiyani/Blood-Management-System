import React from "react";
// import "../App.css";
import "./HomeSidebar.css";
import { HomeSidebarData } from "./HomeSidebarData";
import { Separator } from "../../../components/Separator/Separator";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";

function HomeSidebar() {
  return (
    <div className="HomeSidebar">
      <ul className="HomeSidebarList">
        &nbsp;
        <h1 style={{ mt: "3px", color: "white", margin: "20px" }}>
          <BloodtypeIcon style={{ size: "lg" }} />
          {"Blood Bank"}
        </h1>
        <Separator></Separator>
        {HomeSidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="homerow"
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="homeicon">{val.icon}</div>{" "}
              <div id="hometitle">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HomeSidebar;
