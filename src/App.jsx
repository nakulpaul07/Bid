import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Home from "./Component/Home";
import Tender from "./Component/Tender";
import Bid from "./Component/Bid";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tender" element={<Tender />} />
        <Route path="/bid" element={<Bid />} />
      </Routes>
    </div>
  );
}

export default App;
