import React, { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Page/Homepage'
import Login from "./Login/Login";
import Search from './Transaction/Search'
import Approve from "./Transaction/Approve";
import InsertIssue from "./Transaction/InsertIssue";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Approve" element={<Approve />} />
        <Route path="/InsertIssue" element={<InsertIssue />} />

        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

root.render(<App />);

export default App;
