import React, { useState } from "react";
import DonorSidebar from "../DonorSidebar/DonorSidebar";
import DonateHistory from "../DonorPages/donateHistory";
import DonateBlood from "../DonorPages/donateBlood";
import Register from "../register";
import Login from "../login";

export default function DonorHome() {
  const [whatToShow, setWhatToShow] = useState("login");
  const [loggedIn, setLoggedIn] = useState(0);
  const [user, setUser] = useState();
  // console.log(whatToShow);
  return (
    <>
      {loggedIn === 0 && whatToShow === "login" && (
        <Login setWhatToShow={setWhatToShow} setLoggedIn={setLoggedIn} />
      )}
      {loggedIn === 0 && whatToShow === "register" && (
        <Register
          setWhatToShow={setWhatToShow}
          setUser={setUser}
          setLoggedIn={setLoggedIn}
        />
      )}
      {loggedIn === 1 && (
        <DonorSidebar setWhatToShow={setWhatToShow} setLoggedIn={setLoggedIn} />
      )}
      {whatToShow === "donateHistory" && <DonateHistory user={user} />}
      {whatToShow === "donateBlood" && <DonateBlood user={user} />}
    </>
  );
}
