import React from "react";
import styles from "./DonorSidebar.module.css";
// import { DonorSidebarData } from "./DonorSidebarData";
import { Separator } from "../../../components/Separator/Separator";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import HistoryIcon from "@mui/icons-material/History";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";

function DonorSidebar(props) {
  return (
    <div className={styles.DonorSidebar}>
      <ul className={styles.DonorSidebarList}>
        &nbsp;
        <h1 style={{ mt: "3px", color: "white", margin: "20px" }}>
          <BloodtypeIcon style={{ size: "lg" }} />
          {"Blood Bank"}
        </h1>
        <Separator></Separator>
        <li
          className={styles.donorrow}
          onClick={() => {
            props.setWhatToShow("donateBlood");
          }}
        >
          <div id={styles.donoricon}>{<AddIcon />}</div>{" "}
          <div id={styles.donortitle}>{"Donate Blood"}</div>
        </li>
        <li
          className={styles.donorrow}
          onClick={() => {
            props.setWhatToShow("donateHistory");
          }}
        >
          <div id={styles.donoricon}>{<HistoryIcon />}</div>{" "}
          <div id={styles.donortitle}>{"History"}</div>
        </li>
        <li
          className={styles.donorrow}
          onClick={() => {
            props.setWhatToShow("login");
            props.setLoggedIn(0);
          }}
        >
          <a href="/">
            <div id={styles.donoricon}>{<LogoutIcon />}</div>{" "}
            <div id={styles.donortitle}>{"Logout"}</div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default DonorSidebar;
