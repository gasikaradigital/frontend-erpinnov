import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< HomePage/>}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
         <Route path="/Login" element={<Login />}></Route>
         <Route path="/Register" element={<Register />}></Route>
      </Routes>
    </Router>
  );
};
