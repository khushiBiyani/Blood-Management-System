import React from "react";
import "./Home.css";
import HomeSidebar from "./HomeSidebar";

export default function Home() {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url("https://healthmatters.nyp.org/wp-content/uploads/2020/01/Heart-Article-Hero-1200x500.gif")`,
      }}
    >
      <HomeSidebar />
    </div>
  );
}
