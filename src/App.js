import "./App.css";
import Sidebar from "./Pages/Home/HomeSidebar/HomeSidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/HomeSidebar/HomeSidebar";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
