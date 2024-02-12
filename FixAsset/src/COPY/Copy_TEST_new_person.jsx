import React, { useState, useEffect } from "react";
import Header from "../Page/Hearder";
import "../Page/Style.css";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Tooltip from "@mui/material/Tooltip";
import {
  Typography,
  FormControl,
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Select,
  MenuItem,
  Grid,
  TextField,
  Button,
  InputLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Empty } from "antd";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

function person_maintain() {
  const Name = localStorage.getItem("Name");
  const Lastname = localStorage.getItem("Lastname");
  let UserLogin = Name + " " + Lastname;
  const UserLoginn = localStorage.getItem("UserLogin");

  const [datafac, setdatafac] = useState([]);

  const [datalevel, setdatalevel] = useState([]);
  const [selecteDatalevel, setselecteDatalevel] = useState("");

  const [selecteDatafac, setselecteDatafac] = useState("");

  const [dept, setdept] = useState([]);
  const [selectdept, setselectdept] = useState("");

  const [cost, setcost] = useState([]);
  const [selectcost, setselectcost] = useState("");

  const [ReType, setReType] = useState([]);
  const [selectReType, setselectReType] = useState("");

  const [dataSearch, setdataSearch] = useState([]);
  const [checkHead, setCheckHead] = useState("hidden"); //ตัวแปรเช็คค่าของ ตาราง
  const [checkEmpty, setCheckEmpty] = useState("hidden"); // ตัวแปรเช็คค่าว่าง
  const [checkData, setCheckData] = useState("visible"); // ตัวแปร datashow warning

  function formatDateString(rawDate) {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const date = new Date(rawDate);
    return date.toLocaleDateString(undefined, options);
  }
  const handleSelectChange = async (event) => {
    setselecteDatafac(event.target.value);
    let idFactory = event.target.value;
    // console.log(idFactory,"ถถถซ")
    try {
      const response = await axios.get(
        `http://localhost:5000/getdept?idFactory=${idFactory}`
      );
      // console.log(response.data,"ID1 :")
      const data = await response.data;
      // console.log(data,"ID2 :")
      setdept(data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handlelevel = (event) => {
    setselecteDatalevel(event.target.value);
  };
  const handleDept = (event) => {
    setselectdept(event.target.value);
  };
  const handleCost = (event) => {
    setselectcost(event.target.value);
    console.log(event.target.value, "setselectcost");
  };
  const handleType = (event) => {
    setselectReType(event.target.value);
    // console.log(event.target.value,"Typeeee")
  };

  const navigate = useNavigate();
  const New = () => {
    const PAGE_STATUS = "NEW";
    localStorage.setItem("PAGE_STATUS", PAGE_STATUS);
    navigate("/PersonNew");
  };

  useEffect(() => {
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
    // get level
    const Level = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getlevel`);
        const LevelData = await response.data;
        setdatalevel(LevelData);
        console.log(setdatalevel, "Level Data eiei");
      } catch (error) {
        console.error("Error during login:", error);
      }
    };
    const Costcenter = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getcost`);
        const CostData = await response.data;
        setcost(CostData);
        // console.log(CostData, "CostData :");
      } catch (error) {
        console.error("Error during login:", error);
      }
    };
    const RequestType = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/gettype`);
        const TypeData = await response.data;
        setReType(TypeData);
        // console.log(TypeData, "TypeData");
      } catch (error) {
        console.error("Error during login:", error);
      }
    };
    Level();
    Factory();
    Costcenter();
    RequestType();
  }, []);

  const Search = async () => {
    const FamNo = document.getElementById("FamNo").value;
    const FamTo = document.getElementById("FamTo").value;
    const FixAsset = document.getElementById("FixAsset").value;
    const Date = document.getElementById("Date").value;
    const DateTo = document.getElementById("DateTo").value;

    try {
      const rollNoSearch = await axios.get(
        `http://localhost:5000/getsearch?UserLogin=${UserLoginn}&FacCode=${selecteDatafac}&DeptCode=${selectdept}&FamNo=${FamNo}&FamTo=${FamTo}&Costcenter=${selectcost}&FixAsset=${FixAsset}&ReType=${selectReType}&ReDate=${Date}&ReDateTo=${DateTo}`
      );
      const data = rollNoSearch.data;
      setCheckHead("visible");
      setdataSearch(data);
      if (data.length === 0) {
        setCheckEmpty("visible");
        setCheckData("hidden");
      } else {
        setCheckEmpty("hidden");
        setCheckData("visible");
      }
      // console.log(rollNoSearch.data,"Search: ")
      // console.log(selectdept,"DEPT:")
    } catch (error) {
      console.error("Error requesting data:", error);
    }
  };

  const Reset = async () => {
    document.getElementById("FamNo").value = "";
    document.getElementById("FamTo").value = "";
    document.getElementById("FixAsset").value = "";
    document.getElementById("Date").value = "";
    document.getElementById("DateTo").value = "";
    setselectdept("");
    setselecteDatafac("");
    setselectcost("");
    setselectReType("");
    setdataSearch("");
    setCheckHead("hidden");
    setCheckEmpty("hidden");
    setCheckData("visible");
  };

  const handleOpenEdit = async (item_Fam_no) => {
    console.log(item_Fam_no);

    try {
      const getEdit_show = await axios.get(
        `http://localhost:5000/getEdit_request_show?FamNo=${item_Fam_no}`
      );
      const data = await getEdit_show.data;

      console.log("Show data Edit =", data);
      const DataEdit = data;
      const PAGE_STATUS = "EDIT";
      const FAM_NO_EDIT = data[0][0];
      const REQUEST_DATE_EDIT = data[0][1];
      const USER_LOGIN_EDIT = data[0][2];
      const TEL_EDIT = data[0][3];
      const FACTORY_EDIT = data[0][4];
      const COST_CENTER_EDIT = data[0][5];
      const DEPT_EDIT = data[0][6];
      const TYPE_EDIT = data[0][7];
      const ASSET_GROUP_EDIT = data[0][8];
      const ASSET_COST_CENTER_EDIT = data[0][9];
      const REQUEST_STATUS_EDIT = data[0][10];
      const REMARK_EDIT = data[0][11];

      if (data && data.length > 0) {
        const sentdata = JSON.stringify(DataEdit);
        localStorage.setItem("ForRequester", sentdata);
        localStorage.setItem("PAGE_STATUS", PAGE_STATUS);
        localStorage.setItem("FAM_NO_EDIT", FAM_NO_EDIT);
        localStorage.setItem("REQUEST_DATE_EDIT", REQUEST_DATE_EDIT);
        localStorage.setItem("USER_LOGIN_EDIT", USER_LOGIN_EDIT);
        localStorage.setItem("TEL_EDIT", TEL_EDIT);
        localStorage.setItem("FACTORY_EDIT", FACTORY_EDIT);
        localStorage.setItem("COST_CENTER_EDIT", COST_CENTER_EDIT);
        localStorage.setItem("DEPT_EDIT", DEPT_EDIT);
        localStorage.setItem("TYPE_EDIT", TYPE_EDIT);
        localStorage.setItem("ASSET_GROUP_EDIT", ASSET_GROUP_EDIT);
        localStorage.setItem("ASSET_COST_CENTER_EDIT", ASSET_COST_CENTER_EDIT);
        localStorage.setItem("REQUEST_STATUS_EDIT", REQUEST_STATUS_EDIT);
        localStorage.setItem("REMARK_EDIT", REMARK_EDIT);
      } else {
        console.error("Login failed");
        alert("Invalid username or password");
      }

      navigate("/InsertIssue");
    } catch (error) {
      console.error("Error requesting data:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="body">
        <div className="BoxSearch">
          <Grid
            container
            spacing={1}
            style={{
              width: "100%",
              marginLeft: "20px",
              marginTop: "4px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={3} style={{ marginTop: "10px", textAlign: "left" }}>
              <Typography>Factory</Typography>
            </Grid>

            <Grid item xs={3} style={{ marginTop: "10px", textAlign: "left" }}>
              <Typography>Level</Typography>
            </Grid>
          </Grid>

          {/* Factiory and Level */}
          <Grid
            container
            spacing={1}
            style={{
              width: "100%",
              marginLeft: "20px",
              marginTop: "5px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel size="small" id="demo-simple-select-label">
                  Select
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="factorycbt"
                  label="Select"
                  // className="factorycb"
                  value={selecteDatafac}
                  onChange={handleSelectChange}
                  size="small"
                  style={{
                    width: "220px",
                  }}
                >
                  {datafac.map((option, index) => (
                    <MenuItem key={index} value={option[0]}>
                      {option[1]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel size="small" id="demo-simple-select-label">
                  Select
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="factorycbt"
                  label="Select"
                  // className="factorycb"
                  value={selecteDatalevel}
                  onChange={handlelevel}
                  size="small"
                  style={{
                    width: "220px",
                  }}
                >
                  {datalevel.map((option, index) => (
                    <MenuItem key={index} value={option[0]}>
                      {option[1]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            style={{
              width: "100%",
              marginLeft: "20px",
              marginTop: "4px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={3} style={{ marginTop: "10px", textAlign: "left" }}>
              <Typography>Cost Center</Typography>
            </Grid>

            <Grid item xs={3} style={{ marginTop: "10px", textAlign: "left" }}>
              <Typography>User Login</Typography>
            </Grid>
          </Grid>
          {/* Cost Center  and User Login */}
          <Grid
            container
            spacing={1}
            style={{
              width: "100%",
              marginLeft: "20px",
              marginTop: "5px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel size="small" id="demo-simple-select-label">
                  Select
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  // id="factorycbt"
                  // className="factorycb"
                  label="Select"
                  value={selectReType}
                  onChange={handleType}
                  size="small"
                  style={{
                    width: "220px",
                  }}
                >
                  {cost.map((option) => (
                    <MenuItem value={option[0]}>{option[1]}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <TextField id="FixAsset" size="small"></TextField>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            style={{
              width: "100%",
              marginLeft: "20px",
              marginTop: "4px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={3} style={{ marginTop: "10px", textAlign: "left" }}>
              <Typography>User Login</Typography>
            </Grid>

            <Grid item xs={3} style={{ marginTop: "10px", textAlign: "left" }}>
              <Typography></Typography>
            </Grid>
          </Grid>
          {/* Cost Center  and User Login */}
          <Grid
            container
            spacing={1}
            style={{
              width: "100%",
              marginLeft: "5.5%",
              marginTop: "5px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={3}>
              <TextField id="FixAsset" size="small"></TextField>
            </Grid>

            <Grid item xs={4}>
              <TextField id="FixAsset" size="small" style={{width: "100%"}}></TextField>
            </Grid>
          </Grid>

          {/* Search New Export */}
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <Grid>
              <Button
                className="ButtonSearch"
                style={{
                  backgroundColor: "#FBD61A",
                  color: "gray",
                }}
                variant="contained"
                onClick={Search}
              >
                {" "}
                <SearchIcon />
                Save
              </Button>
            </Grid>

            <Grid style={{ marginLeft: "20px" }}>
              <Button
                className="ButtonSearch"
                onClick={Reset}
                style={{
                  backgroundColor: "#E2E3DC",
                  width: "100px",
                  color: "black",
                }}
                variant="contained"
              >
                <RestartAltIcon />
                Reset
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default person_maintain;
