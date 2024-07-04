import React, { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from './Page/Homepage'
import Login from "./Login/Login";
import Search from './Transaction/Search'
import InsertIssue from "./Transaction/InsertIssue";
import ForRe from "./Transaction/ForRequest";
import TransDetail from "./Transaction/TransFerDetail";
import ApproveFam from './Transaction/Search'
import FamDetails from './report/Report'
import Search_person from './Person_Maintain/Search_person'
import Boi_main from './BOI_Project_Mpping_CC/Boi_project_mcc'
import FAMMaster from './Transaction/Search'
import FamReq from './Monitoring/Fam_Req'
import FamTrans from './Monitoring/Fam_Trans'
import VIEW_Fammaster from './Monitoring/Fam_Req';
import Mail from './Mail/Mail'
import PDF_download from './PDF_fam_master/PDF_design'
//import Tran from './Function/Tranfer_fn'
import axios from "axios";

// process.env.NODE_ENV = 'production';
const backendURL = "http://10.17.74.202:5000";
axios.defaults.baseURL = backendURL;

const App = () => {
  
  return (
    // <StrictMode>
      <BrowserRouter>
        <Routes>
        <Route path="/FAMsystem/" element={<Login />} />
        <Route path="/FAMsystem/Homepage" element={<Homepage />} />
        <Route path="/FAMsystem/Search" element={<Search />} />
        {/* <Route path="/FAMsystem/Approve" element={<Approve />} /> */}
        <Route path="/FAMsystem/InsertIssue" element={<InsertIssue />} />
        <Route path="/FAMsystem/ForRe" element={<ForRe />} />
        <Route path="/FAMsystem/TransDetail" element={<TransDetail />} />
        <Route path="/FAMsystem/ApproveFam" element={<ApproveFam />} />
        <Route path="/FAMsystem/FamDetails" element={<FamDetails />} />
        <Route path="/FAMsystem/Search_person" element={<Search_person />} />
        <Route path="/FAMsystem/BOIMaintain" element={<Boi_main />} />
        <Route path="/FAMsystem/FAMMaster" element={<FAMMaster />} />
        <Route path="/FAMsystem/FamReq" element={<FamReq />} />
        <Route path="/FAMsystem/FamTrans" element={<FamTrans />} />
        <Route path="/FAMsystem/VIEW_Fammaster" element={<VIEW_Fammaster />} />
        <Route path="/FAMsystem/Mail" element={<Mail />} />
        <Route path="/FAMsystem/PDF_download" element={<PDF_download />} />
        
        
        
        
        

        </Routes>
      </BrowserRouter>
    // </StrictMode>
  );
};
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);

export default App;
