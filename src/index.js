import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Donor from "./Pages/Donor/DonorHome/DonorHome";
import Admin from "./Pages/Admin/AdminHome/AdminHome";
import Recipient from "./Pages/Recipient/RecipientHome/RecipientHome";
import { AuthContextProvider } from "./context/Authcontext";
import AlertTemplate from "react-alert-template-basic";
import { Provider as AlertProvider } from "react-alert";
ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate}>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/donor" element={<Donor />} />
            <Route path="/recipient" element={<Recipient />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
