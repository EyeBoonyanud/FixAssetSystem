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
import SaveIcon from "@mui/icons-material/Save";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Empty } from "antd";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import swal from "sweetalert";

function person_maintain_new() {
  const Name = localStorage.getItem("Name");
  const Lastname = localStorage.getItem("Lastname");
  let UserLogin = Name + " " + Lastname;
  const UserLoginn = localStorage.getItem("UserLogin");
  const [datafac, setdatafac] = useState([]);
  const [datalevel, setdatalevel] = useState([]);
  const [selecteDatalevel, setselecteDatalevel] = useState("");
  const [selecteDatafac, setselecteDatafac] = useState("");
  const [cost, setcost] = useState([]);
  const [selectcost, setselectcost] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [Date_show, setDate_show] = useState("");
  const [Date_show_update, setDate_show_update] = useState("");
  const [user_create, setuser_create] = useState("");
  const [user_update, setuser_update] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [User_Login, setUser_Login] = useState("");
  const PAGE_STATUS = localStorage.getItem("PAGE_STATUS");

  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>;

  const handleSelectChange = async (event) => {
    setselecteDatafac(event.target.value);
    let idFactory = event.target.value;
    try {
      const response = await axios.get(
        `http://localhost:5000/getdept?idFactory=${idFactory}`
      );
      const data = await response.data;
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handlelevel = (event) => {
    setselecteDatalevel(event.target.value);
  };

  const handleCost = (event) => {
    setselectcost(event.target.value);
    console.log(event.target.value, "setselectcost");
  };

  const navigate = useNavigate();
  const Save = async () => {
    console.log("FACTORY CHECK", selecteDatafac);
    console.log("LEVEL CHECK", selecteDatalevel);
    console.log("COST CENTER CHECK", selectcost);
    console.log("USER LOGIN CHECK", User_Login);
    console.log("EMAIL CHECK", email);
    console.log("STATUS CHECK", status);
    console.log("CREATE BY CHECK", UserLoginn);
    console.log("CREATE DATE CHECK", Date_show);

    if (
        selecteDatafac &&
        selecteDatalevel &&
        selectcost &&
        User_Login &&
        email &&
        status &&
        UserLoginn &&
        Date_show
    ) {
        try {
            const response = await axios.post(
                `http://localhost:5000/ins_PERSON_MAINTAIN?FPM_factory=${selecteDatafac}&FPM_level=${selecteDatalevel}&FPM_cost_center=${selectcost}&FPM_user_login=${User_Login}&FPM_email=${email}&FPM_status=${status}&FPM_create_by=${UserLoginn}&FPM_update_by=${UserLoginn}`
            );

            console.log("[บันทึกข้อมูลสำเร็จ] =", response);
            swal("success", "You save data success", "success");
            if (PAGE_STATUS === "NEW") {
                setselecteDatafac("");
                setselecteDatalevel("");
                setselectcost("");
                setUser_Login("");
                setusername("");
                setemail("");
                setStatus("");
                UserLoginn("");
                setDate_show("");
                setDate_show_update("");
            } else {
                setemail(DATA_EDIT[4]);
                setStatus(DATA_EDIT[5]);
            }
        } catch (error) {
            console.error("ไม่สามารถบันนทึกข้อมูลได้:", error);
        }
    } else {
        console.error("ไม่สามารถบันทึกข้อมูลได้: ค่าว่างถูกส่งเข้ามา");
        swal("Error", "Please check data key", "error");
    }
};


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

  // check status New and Edit
  const EDIT = localStorage.getItem("Person_Edit");
  console.log("show data edit", EDIT);
  const DATA_EDIT = JSON.parse(EDIT);

  useEffect(() => {
    const formattedDate = `${currentDate
      .getDate()
      .toString()
      .padStart(2, "0")}/${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${currentDate.getFullYear()}`;
    setDate_show(formattedDate);
    setDate_show_update(formattedDate);

    if (PAGE_STATUS === "NEW") {
      setselecteDatafac("");
      setselecteDatalevel("");
      setselectcost("");
      setUser_Login("");
      setusername("");
      setemail("");
      setStatus("");
      setuser_create(UserLoginn);
      setuser_update(UserLoginn);
    } else {
      console.log("CASE EDIT", DATA_EDIT);
      setselecteDatafac(DATA_EDIT[0]);
      setselecteDatalevel(DATA_EDIT[1]);
      setselectcost(DATA_EDIT[2]);
      setUser_Login(DATA_EDIT[3]);
      Check_Username_Email(DATA_EDIT[3]);
      setemail(DATA_EDIT[4]);
      setStatus(DATA_EDIT[5]);
      setuser_create(DATA_EDIT[6]);
      setuser_update(UserLoginn);
      setDate_show(DATA_EDIT[7]);
      setDate_show_update(formattedDate);
    }

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
    Level();
    Factory();
    Costcenter();
  }, []);

  const Reset = async () => {
    if (PAGE_STATUS === "NEW") {
      setselecteDatafac("");
      setselecteDatalevel("");
      setselectcost("");
      setUser_Login("");
      setusername("");
      setemail("");
      setStatus("");
      UserLoginn("");
      setDate_show("");
      setDate_show_update("");
    } else {
      setemail(DATA_EDIT[4]);
      setStatus(DATA_EDIT[5]);
    }
  };

  // Check user login

  const handleUserLogin = (event) => {
    const user_login = event.target.value;
    Check_Username_Email(user_login);
    setUser_Login(user_login);
  };

  // Email
  const handleEmail = (event) => {
    const Email = event.target.value;
    setemail(Email);
  };

  const Check_Username_Email = async (user_login) => {
    console.log("Check_Username_Email :", user_login);
    try {
      const getDatalogin_show = await axios.get(
        `http://localhost:5000/getData_UserLogin_Person?User_Login=${user_login}`
      );
      const data = await getDatalogin_show.data;
      console.log("Show data Email =", data);
      if (data && data.length > 0) {
        const USERNAME = data[0][0];
        const EMAIL = data[0][1];
        if (PAGE_STATUS === "NEW") {
          setusername(data[0][0]);
          setemail(data[0][1]);
        } else {
          setusername(data[0][0]);
        }

        localStorage.setItem("USERNAME", USERNAME);
        localStorage.setItem("EMAIL", EMAIL);
      } else {
        setusername("");
        setemail("");
        console.error("User Login file");
        // alert("Plese key User Login");
      }
    } catch (error) {
      console.error("Error requesting data:", error);
    }
  };

  // Status
  const [status, setStatus] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;
    setStatus(value);
  };

  return (
    <>
      <Header />
      <div className="body">
        <div className="BoxSearch">
          {/* Factiory and Level */}
          <Grid
            container
            spacing={1}
            style={{ width: "100%", marginLeft: "20px", marginTop: "5px" }}
          >
            <Grid item xs={3} style={{ marginTop: "10px", textAlign: "right" }}>
              <Typography>Factory :</Typography>
            </Grid>
            <Grid item xs={1.1} style={{ height: "10px" }}>
              <FormControl fullWidth>
                {!selecteDatafac ? (
                  <InputLabel size="small" id="demo-simple-select-label">
                    Select
                  </InputLabel>
                ) : null}
                <Select
                  labelId="demo-simple-select-label"
                  id="factorycbt"
                  label={!selecteDatafac ? "Select" : undefined}
                  value={selecteDatafac}
                  onChange={handleSelectChange}
                  disabled={PAGE_STATUS === "EDIT"}
                  sx={{
                    backgroundColor:
                      PAGE_STATUS === "EDIT"
                        ? "rgba(169, 169, 169, 0.3)"
                        : "inherit",
                  }}
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
            <Grid item xs={2} style={{ marginTop: "10px", textAlign: "right" }}>
              <Typography>Level :</Typography>
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
                {!selecteDatalevel ? (
                  <InputLabel size="small" id="demo-simple-select-label">
                    Select
                  </InputLabel>
                ) : null}
                <Select
                  labelId="demo-simple-select-label"
                  id="levelcbt"
                  label={!selecteDatalevel ? "Select" : undefined}
                  // className="factorycb"
                  value={selecteDatalevel}
                  onChange={handlelevel}
                  disabled={PAGE_STATUS === "EDIT"}
                  sx={{
                    backgroundColor:
                      PAGE_STATUS === "EDIT"
                        ? "rgba(169, 169, 169, 0.3)"
                        : "inherit",
                  }}
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

          {/* Cost Center   */}
          <Grid
            container
            spacing={1}
            style={{ width: "100%", marginLeft: "20px", marginTop: "5px" }}
          >
            <Grid item xs={3} style={{ marginTop: "2px", textAlign: "right" }}>
              <Typography>Cost Center :</Typography>
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
                {!selectcost ? (
                  <InputLabel size="small" id="demo-simple-select-label">
                    Select
                  </InputLabel>
                ) : null}
                <Select
                  labelId="demo-simple-select-label"
                  label={!selectcost ? "Select" : undefined}
                  value={selectcost}
                  onChange={handleCost}
                  disabled={PAGE_STATUS === "EDIT"}
                  sx={{
                    backgroundColor:
                      PAGE_STATUS === "EDIT"
                        ? "rgba(169, 169, 169, 0.3)"
                        : "inherit",
                  }}
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

          {/* User Login*/}
          <Grid
            container
            spacing={1}
            style={{ width: "100%", marginLeft: "20px", marginTop: "5px" }}
          >
            <Grid item xs={3} style={{ marginTop: "2px", textAlign: "right" }}>
              <Typography>User Login :</Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="UserLogin"
                size="small"
                value={User_Login}
                onChange={handleUserLogin}
                disabled={PAGE_STATUS === "EDIT"}
                sx={{
                  backgroundColor:
                    PAGE_STATUS === "EDIT"
                      ? "rgba(169, 169, 169, 0.3)"
                      : "inherit",
                }}
              ></TextField>
            </Grid>

            <Grid item xs={3}>
              <TextField
                id="Username"
                size="small"
                style={{ width: "100%" }}
                value={username}
                disabled
                sx={{
                  backgroundColor: "rgba(169, 169, 169, 0.3)",
                }}
              ></TextField>
            </Grid>
          </Grid>

          {/* Email and Status */}
          <Grid
            container
            spacing={1}
            style={{ width: "100%", marginLeft: "20px", marginTop: "5px" }}
          >
            <Grid item xs={3} style={{ marginTop: "2px", textAlign: "right" }}>
              <Typography>Email :</Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="Email"
                size="small"
                value={email}
                onChange={handleEmail}
              ></TextField>
            </Grid>
            <Grid
              item
              xs={1.1}
              style={{ marginTop: "5px", textAlign: "right" }}
            >
              <Typography>Status :</Typography>
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
                {!status ? (
                  <InputLabel size="small" id="demo-simple-select-label">
                    Select
                  </InputLabel>
                ) : null}
                <Select
                  id="Status"
                  labelId="demo-simple-select-label"
                  label={!status ? "Select" : undefined}
                  size="small"
                  style={{
                    width: "220px",
                  }}
                  value={status} // Set the value from state
                  onChange={handleChange}
                >
                  <MenuItem value="A">Active</MenuItem>
                  <MenuItem value="I">In Active</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          {/* Create By Date */}
          <Grid
            container
            spacing={1}
            style={{ width: "100%", marginLeft: "20px", marginTop: "5px" }}
          >
            <Grid item xs={3} style={{ marginTop: "2px", textAlign: "right" }}>
              <Typography>Create By :</Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="create_by"
                size="small"
                value={user_create}
                disabled
                sx={{
                  backgroundColor: "rgba(169, 169, 169, 0.3)",
                }}
              ></TextField>
            </Grid>
            <Grid
              item
              xs={1.1}
              style={{ marginTop: "5px", textAlign: "right" }}
            >
              <Typography>Create Date :</Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="create_date"
                size="small"
                value={Date_show}
                disabled
                sx={{
                  backgroundColor: "rgba(169, 169, 169, 0.3)",
                }}
              ></TextField>
            </Grid>
          </Grid>

          {/* Update By Date */}
          {PAGE_STATUS !== "NEW" && (
            <Grid
              container
              spacing={1}
              style={{ width: "100%", marginLeft: "20px", marginTop: "5px" }}
            >
              <Grid
                item
                xs={3}
                style={{ marginTop: "2px", textAlign: "right" }}
              >
                <Typography>Update By :</Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id="update_by"
                  size="small"
                  value={user_update}
                  disabled
                  sx={{
                    backgroundColor: "rgba(169, 169, 169, 0.3)",
                  }}
                ></TextField>
              </Grid>
              <Grid
                item
                xs={1.1}
                style={{ marginTop: "5px", textAlign: "right" }}
              >
                <Typography>Update Date :</Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id="update_date"
                  size="small"
                  value={Date_show_update}
                  disabled
                  sx={{
                    backgroundColor: "rgba(169, 169, 169, 0.3)",
                  }}
                ></TextField>
              </Grid>
            </Grid>
          )}

          {/* Save and Reset */}
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <Grid style={{ marginLeft: "20px" }}>
              <Button
                className="ButtonSearch"
                style={{
                  backgroundColor: "#391AFB",
                }}
                variant="contained"
                onClick={Save}
              >
                <SaveIcon />
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

export default person_maintain_new;