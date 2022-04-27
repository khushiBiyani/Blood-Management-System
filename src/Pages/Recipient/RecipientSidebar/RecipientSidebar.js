import React from "react";
import { Separator } from "../../../components/Separator/Separator";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import RemoveIcon from "@mui/icons-material/Remove";
import login from "../login";
import styles from "./RecipientSidebar.module.css";

function RecipientSidebar(props) {
  return (
    <div className={styles.RecipientSidebar}>
      <ul className={styles.RecipientSidebarList}>
        &nbsp;
        <h1 style={{ mt: "3px", color: "white", margin: "20px" }}>
          <BloodtypeIcon style={{ size: "lg" }} />
          {"Blood Bank"}
        </h1>
        <Separator></Separator>
        <li
          className={styles.recipientrow}
          onClick={() => {
            props.setWhatToShow("requestBlood");
          }}
        >
          <div id={styles.recipienticon}>{<RemoveIcon />}</div>{" "}
          <div id={styles.recipienttitle}>{"Request Blood"}</div>
        </li>
        <li
          className={styles.recipientrow}
          onClick={() => {
            props.setWhatToShow("requestHistory");
          }}
        >
          <div id={styles.recipienticon}>{<HistoryIcon />}</div>{" "}
          <div id={styles.recipienttitle}>{"History"}</div>
        </li>
        <li
          className={styles.recipientrow}
          onClick={() => {
            props.setWhatToShow("login");
            props.setLoggedIn(0);
          }}
        >
          <a href="/">
            <div id={styles.recipienticon}>{<LogoutIcon />}</div>{" "}
            <div id={styles.recipienttitle}>{"Logout"}</div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default RecipientSidebar;

// import React from "react";
// import styles from "./RecipientSidebar.module.css";
// // import { DonorSidebarData } from "./DonorSidebarData";
// import { Separator } from "../../../components/Separator/Separator";
// import BloodtypeIcon from "@mui/icons-material/Bloodtype";
// import HistoryIcon from "@mui/icons-material/History";
// import AddIcon from "@mui/icons-material/Add";
// import LogoutIcon from "@mui/icons-material/Logout";

// function RecipientSidebar(props) {
//   return (
//     <div className={styles.RecipientSidebar}>
//       <ul className={styles.RecipientSidebarList}>
//         &nbsp;
//         <h1 style={{ mt: "3px", color: "white", margin: "20px" }}>
//           <BloodtypeIcon style={{ size: "lg" }} />
//           {"Blood Bank"}
//         </h1>
//         <Separator></Separator>
//         <li
//           className={styles.recipientrow}
//           onClick={() => {
//             props.setWhatToShow("donateBlood");
//           }}
//         >
//           <div id={styles.recipienticon}>{<AddIcon />}</div>{" "}
//           <div id={styles.recipienttitle}>{"Donate Blood"}</div>
//         </li>
//         <li
//           className={styles.recipientrow}
//           onClick={() => {
//             props.setWhatToShow("donateHistory");
//           }}
//         >
//           <div id={styles.recipienticon}>{<HistoryIcon />}</div>{" "}
//           <div id={styles.recipienttitle}>{"History"}</div>
//         </li>
//         <li
//           className={styles.recipientrow}
//           onClick={() => {
//             props.setWhatToShow("login");
//             props.setLoggedIn(0);
//           }}
//         >
//           <a href="/">
//             <div id={styles.recipienticon}>{<LogoutIcon />}</div>{" "}
//             <div id={styles.recipienttitle}>{"Logout"}</div>
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default RecipientSidebar;
