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
import ApproveFam from './Transaction/Search';
import FamDetails from './report/Report';
import Search_person from './Person_Maintain/Search_person';
import Boi_main from './BOI_Project_Mpping_CC/Boi_project_mcc';
import FAMMaster from './Transaction/Search';
import FamReq from './Monitoring/Fam_Req';
import FamTrans from './Monitoring/Fam_Trans';
import VIEW_Fammaster from './Monitoring/Fam_Req';

// process.env.NODE_ENV = 'production';


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
        <Route path="/ApproveFam" element={<ApproveFam />} />
        <Route path="/FamDetails" element={<FamDetails />} />
        <Route path="/Search_person" element={<Search_person />} />
        <Route path="/BOIMaintain" element={<Boi_main />} />
        <Route path="/FAMMaster" element={<FAMMaster />} />
        <Route path="/FamReq" element={<FamReq />} />
        <Route path="/FamTrans" element={<FamTrans />} />
        <Route path="/VIEW_Fammaster" element={<VIEW_Fammaster />} />
        
        
        

        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);

export default App;
