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
} from "@mui/material";
import axios from "axios";

function TransFerDetail() {
  const ReqBy = localStorage.getItem("UserLogin");
  const CC_for_request = localStorage.getItem("CC_for_request")
  console.log("CC_for_request",CC_for_request)
  // const Fam_no = localStorage.getItem("FAM_run");
  const fam = "A1-R340-24-0001";
  const [dataBoi_from, setdataBoi_from] = useState([]);

  const [datafac, setdatafac] = useState([]);
  const [selecteDatafac, setselecteDatafac] = useState("");

  const [cost, setcost] = useState([]);
  const [selectcost, setselectcost] = useState("");

  const [newowner, setnewowner] = useState([]);
  const [selectnewowner, setselectnewowner] = useState("");
  const [result1, setresult1] = useState("");
  // const Factory_UserLogin = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:5000/getfac_insert?Fac_Login=${ReqBy}`
  //     );

  //     const dataFac_insert = await response.data;

  //     let Fac = dataFac_insert.flat();

  //     setdatafac(Fac);
  //     console.log(Fac,"Fac")

  //   } catch (error) {
  //     console.error("Error during login:", error);
  //   }
  // };

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
    console.log(Cost, "setselectcost");
  };
  const handleFactory = (event) => {
    setselecteDatafac(event.target.value);
    console.log(event.target.value, "setselecteDatafac");
  };

  const handleNew_owner = (event) => {
    let New_own = event.target.value;
    const parts = New_own.split(":");
    let result = parts[1].trim();
    setselectnewowner(New_own); // เก็บ select ของ new owner
    setresult1(result); // เก็บค่า Supharat.D

    console.log(result, "NEWWWWWWWWWWWWWWWWWWWWw");
  };
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

  const New_Owner = async (cost) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/new_owner?fac=${selecteDatafac}&cc=${cost}`
      );
      const data1 =await response.data 
      console.log("มาจาก New owner :", data1)
      const data = response.data.flat();
     ;
      setnewowner(data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const BOI_FROM = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/select_BOI_from?running_no=${fam}`
      );
      const data = response.data;
      setdataBoi_from(data[0][0]);
      console.log(data[0][0], "มาจาก fromBOI :");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    Factory();
    BOI_FROM();
    Costcenter();

    // Factory_UserLogin();
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
                        id="outlined-size-small"
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
                        id="outlined-size-small"
                        defaultValue=""
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
                        //  value={age}
                        // onChange={handleChange}
                        size="small"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Pee Char</MenuItem>
                        <MenuItem value={20}>Pee Tom</MenuItem>
                        <MenuItem value={30}>Pee Pu</MenuItem>
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
                        //  value={age}
                        // onChange={handleChange}
                        size="small"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Pee Char</MenuItem>
                        <MenuItem value={20}>Pee Tom</MenuItem>
                        <MenuItem value={30}>Pee Pu</MenuItem>
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
                        // // value={age}
                        // onChange={handleChange}
                        size="small"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Pee Char</MenuItem>
                        <MenuItem value={20}>Pee Tom</MenuItem>
                        <MenuItem value={30}>Pee Pu</MenuItem>
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
                        // value={age}
                        // onChange={handleChange}
                        size="small"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Pee Char</MenuItem>
                        <MenuItem value={20}>Pee Tom</MenuItem>
                        <MenuItem value={30}>Pee Pu</MenuItem>
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
                        // value={age}
                        //// onChange={handleChange}
                        size="small"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Pee Char</MenuItem>
                        <MenuItem value={20}>Pee Tom</MenuItem>
                        <MenuItem value={30}>Pee Pu</MenuItem>
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
                        //  value={age}
                        // onChange={handleChange}
                        size="small"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Pee Char</MenuItem>
                        <MenuItem value={20}>Pee Tom</MenuItem>
                        <MenuItem value={30}>Pee Pu</MenuItem>
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
    </>
  );
}

export default TransFerDetail;
