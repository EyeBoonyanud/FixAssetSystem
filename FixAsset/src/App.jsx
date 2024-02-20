import React, { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from './Page/Homepage'
import Login from "./Login/Login";
import Search from './Transaction/Search'
import Approve from "./Transaction/Approve";
import InsertIssue from "./Transaction/InsertIssue";
import ForRe from "./Transaction/ForRequest";
import TransDetail from "./Transaction/TransFerDetail";
import Report from "./report/Report"
import Popup from "./report/Popup_FamFileAttach"
import Report2 from "./report2/Report2";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Approve" element={<Approve />} />
        <Route path="/InsertIssue" element={<InsertIssue />} />
        <Route path="/ForRe" element={<ForRe />} />
        <Route path="/TransDetail" element={<TransDetail />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Pupup" element={<Popup />} />
        <Route path="/Report2" element={<Report2 />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

root.render(<App />);

export default App;
