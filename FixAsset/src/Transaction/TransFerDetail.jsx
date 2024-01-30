import React, { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Card,
  Select,
  FormControl,
  MenuItem,
  Box,
  Button,
} from "@mui/material";
import axios from "axios";
import { SaveAlt } from "@mui/icons-material";

function TransFerDetail() {
  //const FixAssetGroup = localStorage.getItem("FixAssetGroup")
  const ReqBy = localStorage.getItem("UserLogin");
  const CC_for_request = localStorage.getItem("CC_for_request");
  const Fac_to_request = localStorage.getItem("Factory"); //R180
  const Service_ID = localStorage.getItem("datafixgroup");
  // const Fam_no = localStorage.getItem("FAM_run");
  console.log(Service_ID, "Service_ID:::");
  const Service = localStorage.getItem("data_for_sevice");
  const fam = "A1-R340-24-0001";
  const [dataBoi_from, setdataBoi_from] = useState([]);

  const [datafac, setdatafac] = useState([]);
  const [selecteDatafac, setselecteDatafac] = useState("");

  const [cost, setcost] = useState([]);
  const [selectcost, setselectcost] = useState("");

  const [newowner, setnewowner] = useState([]);
  const [selectnewowner, setselectnewowner] = useState("");
  const [result1, setresult1] = useState("");
  // console.log(result1,"result1")

  const [department, setdepartment] = useState([]);
  const [selectdepartment, setselectdepartment] = useState("");
  

  const [service_by, setservice_by] = useState([]);
  const [selectservice_by, setselectservice_by] = useState("");

  const [boistaff, setboistaff] = useState([]);
  const [selectboistaff, setselectboistaff] = useState("");

  const [boimanager, setboimanager] = useState([]);
  const [selectboimanager, setselectboimanager] = useState("");

  const [fac_manager, setfac_manager] = useState([]);
  const [selectfac_manager, setselectfac_manager] = useState("");

  const [acc_check, setacc_check] = useState([]);
  const [selectacc_check, setselectacc_check] = useState("");

  const [acc_manager, setacc_manager] = useState([]);
  const [selectacc_manager, setselectacc_manager] = useState("");

  const [sts , setsts] = useState("");
  const New_BOI = "NON BOI";


  // From BOI PROJ
  const BOI_FROM = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/select_BOI_from?running_no=${fam}`
      );
      const data = response.data;
      setdataBoi_from(data[0][0]);
      // console.log(data[0][0], "มาจาก fromBOI :");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  // Transfer to Factory
  const Factory = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/getfactory`);
      const FactoryData = await response.data;
      setdatafac(FactoryData);
      // console.log(FactoryData, "Factory");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleFactory = (event) => {
    setselecteDatafac(event.target.value);
    
  };
  // Tranfer To CC
  const Costcenter = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/cc_for_transfer`);
      const CostData = await response.data;
      setcost(CostData);
      // console.log(CostData, "CostData :");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleCost = (event) => {
    let Cost = event.target.value; //ตัวแปรสำหรับเก็บค่า selectCostที่จะเอาไปส่งให้ New owner
    setselectcost(Cost);
    New_Owner(Cost);
    console.log(dataBoi_from,"jjjjjj")
    if (dataBoi_from === New_BOI){
      setsts("N")
      console.log("เท่ากัน : ", sts)
    }else{
      setsts("Y")
      console.log("ไม่เท่ากัน :" ,sts)

    }

    // console.log(Cost, "setselectcost");
  };
  // Newowner
  const New_Owner = async (cost) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/new_owner?fac=${selecteDatafac}&cc=${cost}`
      );
      const data1 = await response.data;
      // console.log("มาจาก New owner :", data1);
      const data = response.data.flat();
      setnewowner(data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleNew_owner = (event) => {
    let New_own = event.target.value;
    const parts = New_own.split(":");
    let result = parts[1].trim();
    setselectnewowner(New_own); // เก็บ select ของ new owner
    setresult1(result); // เก็บค่า Supharat.
    //console.log(result, "NEWWWWWWWWWWWWWWWWWWWWw");
  };
  // Department Manager
  const Department_Mana = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/level?level=${Fac_to_request}&cc=${CC_for_request}`
      );
      const data = response.data.flat();
      setdepartment(data);
      console.log("Department :", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleDepartment = (event) => {
    setselectdepartment(event.target.value);
  };
  // ServiceBy
  const Service_By = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/service_by?level=${Fac_to_request}&cc=${Service_ID}`
      );
      const data = response.data.flat();
      setservice_by(data);
      console.log("Department :", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleService_By = (event) => {
    setselectservice_by(event.target.value);
    // console.log(event.target.value, "setselecteDatafac");
  };
  //BOI_Staff
  const BOI_Staff = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/boi_staff?fac=${Fac_to_request}`
      );
      const data = response.data.flat();
      setboistaff(data);
      console.log("setboistaff :", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleBOI_Staff = (event) => {
    setselectboistaff(event.target.value);
  };
  //BOI_Manager
  const BOI_Manager = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/boi_manager?fac=${Fac_to_request}`
      );
      const data = response.data.flat();
      setboimanager(data);
      console.log("setboimanager :", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleBOI_Manager = (event) => {
    setselectboimanager(event.target.value);
  };
  //Factory_Manager
  const Fac_manager = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/fac_manager?fac=${Fac_to_request}`
      );
      const data = response.data.flat();
      setfac_manager(data);
      console.log("setboimanager :", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleFac_manager = (event) => {
    setselectfac_manager(event.target.value);
  };
  //ACC Check
  const ACC_Check = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/acc_check?fac=${Fac_to_request}`
      );
      const data = response.data.flat();
      setacc_check(data);
      console.log("setboimanager :", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleACC_Check = (event) => {
    setselectacc_check(event.target.value);
  };
  // ACC_Manager
  const ACC_Manager = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/acc_manager?fac=${Fac_to_request}`
      );
      const data = response.data.flat();
      setacc_manager(data);
      console.log("setboimanager :", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleACC_Manager = (event) => {
    setselectacc_manager(event.target.value);
  };

  const SAVE = async () => {   
     const  Plan_date = document.getElementById("Plan_Remove").value;
     const Tel = document.getElementById("Tel").value;

    // const Fixcode = document.getElementById("Fixcode").value;
    // setFixcode1(Fixcode);

    

    try {
      const row = await axios.post(
        `http://localhost:5000/ins_transfer?running_no=${fam}&date_plan=${Plan_date}&fac=${selecteDatafac}&cc=${selectcost}&by=${result1}&tel=${Tel}&status=${sts}`
      );
      const data = row.data;
      setdataFixCode(data);
      //console.log(data);

      //console.log(data, "FixCode: ");
    } catch (error) {
      console.error("Error requesting data:", error);
    }
    setOpen(true);
  };
  useEffect(() => {
    Factory();
    BOI_FROM();
    Costcenter();
    Department_Mana();
    Service_By();
    BOI_Staff();
    BOI_Manager();
    Fac_manager();
    ACC_Check();
    ACC_Manager();
  }, []);

  return (
    <>
      <div>
        <Card className="Style100">
          <Card
            sx={{
              borderRadius: "8px",
              border: 2,
              borderColor: "rgba(64,131,65, 1.5)",
              boxShadow: "0px 4px 8px rgba(64,131,65, 0.4)",
            }}
            className="Style1"
          >
            <Typography
              sx={{
                position: "absolute",
                backgroundColor: "#fff",
                marginTop: "-0.5%",
                marginRight: "85%",
                width: "8%",
                display: "flex",

                justifyContent: "center",
              }}
            >
              Tranfer Detail
            </Typography>
            <div className="Style2">
              <table className="Style3">
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Owner (Send from) :</td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        value={ReqBy}
                        disabled
                      />
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl></FormControl>
                  </td>
                  <td className="Style7">From BOI Project :</td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        value={dataBoi_from}
                        disabled
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Tranfer to Factory :</td>
                  <td>
                    <FormControl className="Style1">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selecteDatafac}
                        onChange={handleFactory}
                        size="small"
                      >
                        {datafac.map((option, index) => (
                          <MenuItem key={index} value={option[0]}>
                            {option[1]}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl></FormControl>
                  </td>
                  <td className="Style7">Tranfer to CC :</td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectcost}
                        onChange={handleCost}
                        size="small"
                      >
                        {cost.map((option, index) => (
                          <MenuItem key={index} value={option[0]}>
                            {option[0]}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">New BOI Project :</td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        value={New_BOI}
                        disabled
                      />
                    </FormControl>
                  </td>
                  <td className="Style5"></td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">New Owner :</td>
                  <td>
                    <FormControl className="Style1">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectnewowner}
                        onChange={handleNew_owner}
                        size="small"
                      >
                        {/* <MenuItem value={"ALL"}>ALL</MenuItem> */}
                        {newowner.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl></FormControl>
                  </td>
                  <td className="Style7">Tel :</td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="Tel"
                        defaultValue=""
                        size="small"
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Plan Remove Date :</td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        id="Plan_Remove"
                        // defaultValue=""
                        size="small"
                        type="date"
                        style={{ color: "red" }}
                      />
                    </FormControl>
                  </td>
                  <td className="Style5"></td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Tranfer Abnormal :</td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                      />
                    </FormControl>
                  </td>
                </tr>
              </table>
            </div>
          </Card>
        </Card>
        <Card className="Style100">
          <Card
            sx={{
              borderRadius: "8px",
              border: 2,
              borderColor: "rgba(64,131,65, 1.5)",
              boxShadow: "0px 4px 8px rgba(64,131,65, 0.4)",
              marginTop: 4,
            }}
            className="Style1"
          >
            <Typography
              sx={{
                position: "absolute",
                backgroundColor: "#fff",
                marginTop: "-0.5%",
                marginRight: "85%",
                width: "8%",
                display: "flex",

                justifyContent: "center",
              }}
            >
              Routing
            </Typography>
            <div className="Style2">
              <table className="Style3">
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Department Manager :</td>
                  <td>
                    <FormControl className="Style3">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectdepartment}
                        onChange={handleDepartment}
                        size="small"
                      >
                        {department.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        // style={{ marginLeft: "20px" }}
                      >
                        <FormControlLabel
                          value="Approve"
                          control={<Radio size="small" />}
                          label="Approve"
                        />
                        <FormControlLabel
                          value="Reject"
                          // disabled
                          control={<Radio size="small" />}
                          label="Reject"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7">Action Date :</td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Comment :</td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Service Dept :</td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        sx={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        value={Service}
                      />
                    </FormControl>
                  </td>
                  <td className="Style5"></td>
                  <td className="Style7">Tel :</td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Service By :</td>
                  <td>
                    <FormControl className="Style3">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectservice_by}
                        onChange={handleService_By}
                        size="small"
                      >
                        {service_by.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        // style={{ marginLeft: "20px" }}
                      >
                        <FormControlLabel
                          value="Approve"
                          control={<Radio size="small" />}
                          label="Approve"
                        />
                        <FormControlLabel
                          value="Reject"
                          // disabled
                          control={<Radio size="small" />}
                          label="Reject"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7">Action Date :</td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Comment :</td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">BOI Staff :</td>
                  <td>
                    <FormControl className="Style3">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectboistaff}
                        onChange={handleBOI_Staff}
                        size="small"
                      >
                        {boistaff.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        // style={{ marginLeft: "20px" }}
                      >
                        <FormControlLabel
                          value="Approve"
                          control={<Radio size="small" />}
                          label="Approve"
                        />
                        <FormControlLabel
                          value="Reject"
                          // disabled
                          control={<Radio size="small" />}
                          label="Reject"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7">Action Date :</td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Comment :</td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">BOI Manager :</td>
                  <td>
                    <FormControl className="Style3">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectboimanager}
                        onChange={handleBOI_Manager}
                        size="small"
                      >
                        {boimanager.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        // style={{ marginLeft: "20px" }}
                      >
                        <FormControlLabel
                          value="Approve"
                          control={<Radio size="small" />}
                          label="Approve"
                        />
                        <FormControlLabel
                          value="Reject"
                          // disabled
                          control={<Radio size="small" />}
                          label="Reject"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7">Action Date :</td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Comment :</td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Factory Manager :</td>
                  <td>
                    <FormControl className="Style3">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectfac_manager}
                        onChange={handleFac_manager}
                        size="small"
                      >
                        {fac_manager.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        // style={{ marginLeft: "20px" }}
                      >
                        <FormControlLabel
                          value="Approve"
                          control={<Radio size="small" />}
                          label="Approve"
                        />
                        <FormControlLabel
                          value="Reject"
                          // disabled
                          control={<Radio size="small" />}
                          label="Reject"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7">Action Date :</td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Comment :</td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">ACC Check :</td>
                  <td>
                    <FormControl className="Style3">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectacc_check}
                        onChange={handleACC_Check}
                        size="small"
                      >
                        {acc_check.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        // style={{ marginLeft: "20px" }}
                      >
                        <FormControlLabel
                          value="Approve"
                          control={<Radio size="small" />}
                          label="Approve"
                        />
                        <FormControlLabel
                          value="Reject"
                          // disabled
                          control={<Radio size="small" />}
                          label="Reject"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7">Action Date :</td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Comment :</td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Owner :</td>
                  <td>
                    <FormControl className="Style3">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        // style={{ marginLeft: "20px" }}
                      >
                        <FormControlLabel
                          value="Approve"
                          control={<Radio size="small" />}
                          label="Approve"
                        />
                        <FormControlLabel
                          value="Reject"
                          // disabled
                          control={<Radio size="small" />}
                          label="Reject"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7">Action Date :</td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Comment :</td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                      />
                    </FormControl>
                  </td>
                </tr>
              </table>
            </div>
          </Card>
        </Card>
        <Card className="Style100">
          <Card
            sx={{
              borderRadius: "8px",
              border: 2,
              borderColor: "rgba(64,131,65, 1.5)",
              boxShadow: "0px 4px 8px rgba(64,131,65, 0.4)",
              marginTop: 4,
            }}
            className="Style1"
          >
            <Typography
              sx={{
                position: "absolute",

                marginTop: "-0.5%",
                marginRight: "85%",
                width: "8%",
                display: "flex",
                border: 0,

                justifyContent: "center",
              }}
            ></Typography>
            <div className="Style2">
              <table className="Style3">
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Receiver :</td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        sx={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        // style={{ marginLeft: "20px" }}
                      >
                        <FormControlLabel
                          value="Approve"
                          control={<Radio size="small" />}
                          label="Approve"
                        />
                        <FormControlLabel
                          value="Reject"
                          // disabled
                          control={<Radio size="small" />}
                          label="Reject"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7">Action Date :</td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Comment :</td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                      />
                    </FormControl>
                  </td>
                </tr>
              </table>
            </div>
          </Card>
        </Card>
      </div>
      <div>
        <Card className="Style100">
          <Card
            sx={{
              borderRadius: "8px",
              border: 2,
              borderColor: "rgba(64,131,65, 1.5)",
              boxShadow: "0px 4px 8px rgba(64,131,65, 0.4)",
              marginTop: 4,
            }}
            className="Style1"
          >
            <Typography
              sx={{
                position: "absolute",
                backgroundColor: "#fff",
                marginTop: "-0.5%",
                marginRight: "85%",
                width: "8%",
                display: "flex",
                border: 1,
                borderColor: "rgba(64,131,65, 1.5)",
                boxShadow: "0px 4px 8px rgba(64,131,65, 0.4)",
                justifyContent: "center",
              }}
            >
              Close Routing
            </Typography>
            <div className="Style2">
              <table className="Style3">
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">ACC Record :</td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        sx={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        // style={{ marginLeft: "20px" }}
                      >
                        <FormControlLabel
                          value="Approve"
                          control={<Radio size="small" />}
                          label="Approve"
                        />
                        <FormControlLabel
                          value="Reject"
                          // disabled
                          control={<Radio size="small" />}
                          label="Reject"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7">Action Date :</td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Comment :</td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">ACC Manager :</td>
                  <td>
                    <FormControl className="Style3">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectacc_manager}
                        onChange={handleACC_Manager}
                        size="small"
                      >
                        {acc_manager.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        // style={{ marginLeft: "20px" }}
                      >
                        <FormControlLabel
                          value="Approve"
                          control={<Radio size="small" />}
                          label="Approve"
                        />
                        <FormControlLabel
                          value="Reject"
                          // disabled
                          control={<Radio size="small" />}
                          label="Reject"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7">Action Date :</td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Comment :</td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Service Close By :</td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        sx={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        // style={{ marginLeft: "20px" }}
                      >
                        <FormControlLabel
                          value="Approve"
                          control={<Radio size="small" />}
                          label="Approve"
                        />
                        <FormControlLabel
                          value="Reject"
                          // disabled
                          control={<Radio size="small" />}
                          label="Reject"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7">Action Date :</td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Comment :</td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                      />
                    </FormControl>
                  </td>
                </tr>
              </table>
            </div>
          </Card>
        </Card>
        <div className="Style8">
          <Box>
            <tr>
              <td>
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  className="Style9"
                  onClick={SAVE}
                >
                  Save
                </Button>
              </td>
              <td>
                <Button
                  variant="contained"
                  size="medium"
                  color="success"
                  className="Style9"
                >
                  Submit
                </Button>
              </td>
              <td>
                <Button variant="contained" size="medium" color="error">
                  Reset
                </Button>
              </td>
            </tr>
          </Box>
        </div>
      </div>
    </>
  );
}

export default TransFerDetail;
