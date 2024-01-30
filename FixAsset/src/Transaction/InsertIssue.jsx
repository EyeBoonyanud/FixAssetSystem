import Header from "../Page/Hearder";
import React, { useState, useEffect } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import "../Page/Style.css";
import Tab1 from "../Transaction/ForRequest"
import Tab2 from "../Transaction/TransFerDetail"

function LabTabs() {
 
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div style={{ marginTop: "100px" }}>
        <Header />
      </div>

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Requester / Details / Fileupload" value="1" />
              <Tab label="Item Two" value="2" />
              {/* <Tab label="Item Three" value="3" /> */}
            </TabList>
          </Box>
          <TabPanel value="1">
            <Tab1 />
          </TabPanel>
          <TabPanel value="2">
            <Tab2 />
          </TabPanel>
          {/* <TabPanel value="3">
            <Tab3 />
          </TabPanel> */}
        </TabContext>
      </Box>
    </div>
  );
}
export default LabTabs;
