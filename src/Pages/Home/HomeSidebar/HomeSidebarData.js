import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

export const HomeSidebarData = [
  // {
  //   title: "Home",
  //   icon: <HomeIcon />,
  //   link: "/",
  // },
  {
    title: "Donor",
    icon: <PersonAddAlt1Icon />,
    link: "/donor",
  },
  {
    title: "Recipient",
    icon: <PersonRemoveIcon />,
    link: "/recipient",
  },
  {
    title: "Admin",
    icon: <SupervisorAccountIcon />,
    link: "/admin",
  },
];
