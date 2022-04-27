import React, { useState } from "react";
import RecipientSidebar from "../RecipientSidebar/RecipientSidebar";
import RequestHistory from "../RecipientPages/requestHistory";
import RequestBlood from "../RecipientPages/requestBlood";
import Login from "../login";
import Register from "../register";

export default function DonorHome() {
  const [whatToShow, setWhatToShow] = useState("login");
  const [loggedIn, setLoggedIn] = useState(0);
  const [user, setUser] = useState();
  console.log(whatToShow);
  return (
    <>
      {loggedIn === 0 && whatToShow === "login" && (
        <Login setWhatToShow={setWhatToShow} setLoggedIn={setLoggedIn} />
      )}
      {loggedIn === 0 && whatToShow === "register" && (
        <Register setWhatToShow={setWhatToShow} setUser={setUser} />
      )}
      {loggedIn === 1 && (
        <RecipientSidebar
          setWhatToShow={setWhatToShow}
          setLoggedIn={setLoggedIn}
        />
      )}
      {whatToShow === "requestHistory" && <RequestHistory />}
      {whatToShow === "requestBlood" && <RequestBlood />}
    </>
  );
}
