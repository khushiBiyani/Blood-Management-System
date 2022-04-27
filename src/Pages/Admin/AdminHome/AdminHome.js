import React, { useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import Donors from "../AdminPages/donors";
import Recipients from "../AdminPages/recipients";
import BloodRequests from "../AdminPages/bloodRequests";
import BloodStock from "../AdminPages/bloodStock";
import History from "../AdminPages/history";
import Login from "../login";
export default function AdminHome() {
  const [whatToShow, setWhatToShow] = useState("login");
  const [loggedIn, setLoggedIn] = useState(0);
  console.log(whatToShow);
  return (
    <>
      {loggedIn === 0 && whatToShow === "login" && (
        <Login setWhatToShow={setWhatToShow} setLoggedIn={setLoggedIn} />
      )}
      {/* {loggedIn === 0 && whatToShow === "register" && (
        <Register setWhatToShow={setWhatToShow} />
      )} */}
      {loggedIn === 1 && (
        <AdminSidebar setWhatToShow={setWhatToShow} setLoggedIn={setLoggedIn} />
      )}
      {whatToShow === "donors" && <Donors />}
      {whatToShow === "recipients" && <Recipients />}
      {whatToShow === "bloodRequests" && <BloodRequests />}
      {whatToShow === "bloodStock" && <BloodStock />}
      {whatToShow === "history" && <History />}
    </>
  );
}
