import React from "react";
// import "./AdminSidebar.css";
import styles from "./AdminSidebar.module.css";
import { Separator } from "../../../components/Separator/Separator";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import VaccinesIcon from "@mui/icons-material/Vaccines";

function AdminSidebar(props) {
  return (
    <div className={styles.AdminSidebar}>
      <ul className={styles.AdminSidebarList}>
        &nbsp;
        <h1 style={{ mt: "3px", color: "white", margin: "20px" }}>
          <BloodtypeIcon style={{ size: "lg" }} />
          {"Blood Bank"}
        </h1>
        <Separator></Separator>
        <li
          className={styles.adminrow}
          onClick={() => {
            props.setWhatToShow("donors");
          }}
        >
          <div id={styles.adminicon}>{<PersonAddAlt1Icon />}</div>{" "}
          <div id={styles.admintitle}>{"Donors"}</div>
        </li>
        <li
          className={styles.adminrow}
          onClick={() => {
            props.setWhatToShow("recipients");
          }}
        >
          <div id={styles.adminicon}>{<PersonRemoveIcon />}</div>{" "}
          <div id={styles.admintitle}>{"Recipients"}</div>
        </li>
        <li
          className={styles.adminrow}
          onClick={() => {
            props.setWhatToShow("bloodRequests");
          }}
        >
          <div id={styles.adminicon}>{<PlaylistAddIcon />}</div>{" "}
          <div id={styles.admintitle}>{"Blood Requests"}</div>
        </li>
        <li
          className={styles.adminrow}
          onClick={() => {
            props.setWhatToShow("history");
          }}
        >
          <div id={styles.adminicon}>{<HistoryIcon />}</div>{" "}
          <div id={styles.admintitle}>{"Donation History"}</div>
        </li>
        <li
          className={styles.adminrow}
          onClick={() => {
            props.setWhatToShow("bloodStock");
          }}
        >
          <div id={styles.adminicon}>{<VaccinesIcon />}</div>{" "}
          <div id={styles.admintitle}>{"Blood Stock"}</div>
        </li>
        <li
          className={styles.adminrow}
          onClick={() => {
            props.setWhatToShow("login");
            props.setLoggedIn(0);
          }}
        >
          <a href="/">
            <div id={styles.adminicon}>{<LogoutIcon />}</div>{" "}
            <div id={styles.admintitle}>{"Logout"}</div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
