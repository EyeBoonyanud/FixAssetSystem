import React, { useState, useEffect } from "react";
import {
  TextField,

} from "@mui/material";
function test() {

  const [BOI_Project, setBOI_Project] = useState("");
  const handleBOI_Project = (event) => {
    const dataBoi_P = event.target.value;
    setBOI_Project(dataBoi_P);
    setErrorBOI_P(false);
  };
  return (
    <div>

      <TextField
        id="UserLogin"
        size="small"
        value={"BOI_Project"}
        onChange={handleBOI_Project}
        style={{
          width: "100%",
          
        }}
      ></TextField>
    </div>
  );
}

export default test;
