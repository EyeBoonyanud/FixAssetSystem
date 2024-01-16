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

function Issue() {
  const Name = localStorage.getItem("Name");
  const Lastname = localStorage.getItem("Lastname");
  let UserLogin = Name + " " + Lastname;

  const [datafac, setdatafac] = useState([]);
  const [selecteDatafac, setselecteDatafac] = useState("");

  const [dept, setdept] = useState([]);
  const [selectdept, setselectdept] = useState("");

  const [cost, setcost] = useState([]);
  const [selectcost, setselectcost] = useState("");

  const [ReType, setReType] = useState([]);
  const [selectReType, setselectReType] = useState("");

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
  const handleDept = (event) => {
    setselectdept(event.target.value);
  };
  const handleCost = (event) => {
    setselectcost(event.target.value);
  };
  const handleType = (event) => {
    setselectReType(event.target.value);
  };
  const handleBy = (event) => {
    setselectReBy(event.target.value);
  };

 
  
  const navigate = useNavigate();
  const New = () => {
    navigate("/InsertIssue");
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
  
    Factory();
    Costcenter();
    RequestType();
  }, []);

  const Search = async () => {
    console.log("Selected Value:", selecteDatafac);
    // ทำสิ่งที่คุณต้องการกับค่าที่ถูกเลือก
  };

  return (
    <>
      {/* <Header /> */}
      <div className="body">
        <div className="BoxSearch">
          {/* Factiory  */}
          <Grid
            container
            spacing={1}
            style={{
              width: "100%",
              marginLeft: "20px",
              marginTop: "20px",
              textAlign: "right",
            }}
          >
            <Grid item xs={3} style={{ marginTop: "2px" }}>
              <Typography>Factory :</Typography>
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
          </Grid>

          {/* FamNo. and To. */}
          <Grid
            container
            spacing={1}
            style={{ width: "100%", marginLeft: "20px", marginTop: "5px" }}
          >
            <Grid item xs={3} style={{ marginTop: "10px", textAlign: "right" }}>
              <Typography>FAM No :</Typography>
            </Grid>
            <Grid item xs={1.1} style={{ height: "10px" }}>
              <TextField
                size="small"
                style={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                  width: "220px",
                  marginRight: "5px",
                }}
              ></TextField>
            </Grid>
            <Grid item xs={2} style={{ marginTop: "10px", textAlign: "right" }}>
              <Typography>To :</Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                style={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                  width: "220px",
                  marginRight: "5px",
                }}
              ></TextField>
            </Grid>
          </Grid>

          {/* Dept. and Cost */}
          <Grid
            container
            spacing={1}
            style={{ width: "100%", marginLeft: "20px", marginTop: "5px" }}
          >
            <Grid item xs={3} style={{ marginTop: "2px", textAlign: "right" }}>
              <Typography>Dept :</Typography>
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
              <InputLabel size="small" id="demo-simple-select-label">
                  Select
                </InputLabel>
                <Select
                  // labelId="demo-simple-select-label"
                  id="factorycbt"
                  // className="factorycb"
                  label="Select"
                  value={selectdept}
                  onChange={handleDept}
                  size="small"
                  style={{
                    width: "220px",
                  }}
                >
                  {dept.map((option) => (
                    <MenuItem value={option[0]}>{option[0]}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={1.1}
              style={{ marginTop: "2px", textAlign: "right" }}
            >
              <Typography>Cost Center :</Typography>
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
              <InputLabel size="small" id="demo-simple-select-label">
                  Select
                </InputLabel>
                <Select
                  // labelId="demo-simple-select-label"
                  id="factorycbt"
                  // className="factorycb"
                  label="Select"
                  value={selectcost}
                  onChange={handleCost}
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
          </Grid>

          {/* request and Fix */}
          <Grid
            container
            spacing={1}
            style={{ width: "100%", marginLeft: "20px", marginTop: "5px" }}
          >
            <Grid item xs={3} style={{ marginTop: "2px", textAlign: "right" }}>
              <Typography>Request Type :</Typography>
            </Grid>
            <Grid item xs={2}>
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
                  {ReType.map((option) => (
                    <MenuItem value={option[0]}>{option[1]}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={1.1}
              style={{ marginTop: "5px", textAlign: "right" }}
            >
              <Typography>Fix Asset Code :</Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField size="small"></TextField>
            </Grid>
          </Grid>

          {/* request Date and To */}
          <Grid
            container
            spacing={1}
            style={{ width: "100%", marginLeft: "20px", marginTop: "5px" }}
          >
            <Grid item xs={3} style={{ marginTop: "10px", textAlign: "right" }}>
              <Typography>Request Date :</Typography>
            </Grid>
            <Grid item xs={2} style={{ height: "10px" }}>
              <TextField
                size="small"
                type="date"
                style={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                  width: "220px",
                  marginRight: "5px",
                }}
              ></TextField>
            </Grid>
            <Grid
              item
              xs={1.1}
              style={{ marginTop: "10px", textAlign: "right" }}
            >
              <Typography>To :</Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                type="date"
                style={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                  width: "220px",

                  marginRight: "5px",
                }}
              ></TextField>
            </Grid>
          </Grid>

          {/* Request By */}
          <Grid
            container
            spacing={1}
            style={{ width: "100%", marginLeft: "20px", marginTop: "5px" }}
          >
            <Grid item xs={3} style={{ marginTop: "10px", textAlign: "right" }}>
              <Typography>Request By :</Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField size="small" value={UserLogin} disabled></TextField>
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
                Search
              </Button>
            </Grid>
            <Grid style={{ marginLeft: "20px" }}>
              <Button
                className="ButtonSearch"
                style={{
                  backgroundColor: "#391AFB",
                }}
                variant="contained"
                onClick={New}
              >
                <AddIcon />
                New
              </Button>
            </Grid>
            <Grid style={{ marginLeft: "20px" }}>
              <Button
                className="ButtonSearch"
                style={{
                  backgroundColor: "#00C344",
                  width: "180px",
                }}
                variant="contained"
              >
                <FileDownloadIcon />
                Export Excel
              </Button>
            </Grid>
          </Grid>
        </div>

        <div className="responsive-container">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#A7C9FA" }}>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>Factory</TableCell>
                  <TableCell>Cost Center</TableCell>
                  <TableCell>Issue Date</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Fixed Asset Code</TableCell>
                  <TableCell>Request Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Tooltip title="Edit">
                      <EditNoteIcon
                        style={{ color: "#F4D03F", fontSize: "30px" }}
                        onClick={() => handleOpenEdit(item[0])}
                      />
                    </Tooltip>
                    <Tooltip title="Delete">
                      <DeleteForeverIcon
                        style={{ color: "red", fontSize: "30px" }}
                        onClick={() => Delete(item[0])}
                      />
                    </Tooltip>
                  </TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>6</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default Issue;
