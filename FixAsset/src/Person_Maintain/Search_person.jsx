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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Empty } from "antd";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import swal from "sweetalert";
import "./Person_maintain.css";
import Popup from "../Person_Maintain/New_person";
import Autocomplete from "@mui/material/Autocomplete";

function person_maintain() {
  const Name = localStorage.getItem("Name");
  const Lastname = localStorage.getItem("Lastname");
  let UserLogin = Name + " " + Lastname;
  const UserLoginn = localStorage.getItem("UserLogin");
  const [datafac, setdatafac] = useState([]);
  const [datalevel, setdatalevel] = useState([]);
  const [cost, setcost] = useState([]);

  const [dataSearch, setdataSearch] = useState([]);
  const [selectcost, setselectcost] = useState("");
  const [selecteDatalevel, setselecteDatalevel] = useState("");
  const [selecteDatafac, setselecteDatafac] = useState("");
  const [User_Login, setUser_Login] = useState("");
  const [checkHead, setCheckHead] = useState("hidden"); //ตัวแปรเช็คค่าของ ตาราง
  const [checkEmpty, setCheckEmpty] = useState("hidden"); // ตัวแปรเช็คค่าว่าง
  const [checkData, setCheckData] = useState("visible"); // ตัวแปร datashow warning

  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>;

  function formatDateString(rawDate) {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const date = new Date(rawDate);
    return date.toLocaleDateString(undefined, options);
  }

  console.log(selecteDatafac,"ขอดูข้อมูลของ FACTORY ที่เข้ามาตอนแรก");
  const handleSelectChange = async (event, newValue) => {
    if (newValue === null){
      setselecteDatafac("");
    } else {
      setselecteDatafac(newValue);
    }
    // setselecteDatafac(newValue);
    // console.log(newValue,"กด เลือก แล้วได้");
    // console.log(newValue,"กด clear แล้วไม่ได้ ERROR");
  };
  const handlelevel = (event, newValue) => {
    if (newValue === null){
      setselecteDatalevel("");
    } else {
      setselecteDatalevel(newValue);
    }
    // setselecteDatalevel(newValue);
    // setselecteDatalevel(event.target.value);
  };
  const handleCost = (event, newValue) => {
    if (newValue === null){
      setselectcost("");
    } else {
      setselectcost(newValue);
    }
    // setselectcost(newValue);
  };

  const navigate = useNavigate();
  const New = () => {
    localStorage.removeItem("DATA_BACK_SEARCH");
    const PAGE_STATUS = "NEW";
    localStorage.setItem("PAGE_STATUS", PAGE_STATUS);
    openPopup();
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
        console.log(CostData, "CostData :");
      } catch (error) {
        console.error("Error during login:", error);
      }
    };

    Level();
    Factory();
    Costcenter();
    Search_back();
  }, []);

  const Search_back = async () => {
    const DATA_SAVE_EDIT = localStorage.getItem("DATA_BACK_SEARCH");
    const DATA_SEARCH_S_E = JSON.parse(DATA_SAVE_EDIT);
    if (DATA_SEARCH_S_E !== null) {
      setselecteDatafac(DATA_SEARCH_S_E[0]);
      setselecteDatalevel(DATA_SEARCH_S_E[1]);
      setselectcost(DATA_SEARCH_S_E[2]);
      setUser_Login(DATA_SEARCH_S_E[3]);
      console.log(
        "มีข้อมูลที่กลับมาค้นหา",
        DATA_SEARCH_S_E[0],
        DATA_SEARCH_S_E[1],
        DATA_SEARCH_S_E[2],
        DATA_SEARCH_S_E[3]
      );
      // เรียกใช้งาน Search โดยตรง
      Search();
    } else {
      console.log("ไม่มีข้อมูลที่กลับมาค้นหา");
    }
  };

  const Search = async () => {
    console.log("F", selecteDatafac[0]);
    console.log("L", selecteDatalevel[0]);
    console.log("C", selectcost[0]);
    console.log("U", User_Login[0]);
    try {
      const factoryValue =
      selecteDatafac[0] !== undefined ? selecteDatafac[0] : "";
      const levelValue = selecteDatalevel[0] !== undefined ? selecteDatalevel[0] : "";
      const costValue = selectcost[0] !== undefined ? selectcost[0] : "";
      const User_LoginValue = User_Login[0] !== undefined ? User_Login[0] : "";
      const rollNoSearch = await axios.get(
        `http://localhost:5000/Search_Person_Maintain?FPM_factory=${factoryValue}&FPM_level=${levelValue}&FPM_cost_center=${costValue}&FPM_user_login=${User_LoginValue}`
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
      localStorage.removeItem("DATA_BACK_SEARCH");
    } catch (error) {
      console.error("Error requesting data:", error);
    }
  };

  const Reset = async () => {
    localStorage.removeItem("DATA_BACK_SEARCH");
    setselecteDatafac("");
    setselectcost("");
    setselecteDatalevel("");
    setUser_Login("");
    setdataSearch("");
    setCheckHead("hidden");
    setCheckEmpty("hidden");
    setCheckData("visible");
  };
  const handleOpenEdit = async (
    factory,
    level,
    cost_center,
    user_login,
    name_surname
  ) => {
    console.log(" อยากเห็น =",factory);
    console.log(" อยากเห็น =",level);
    console.log(" อยากเห็น =",cost_center);
    console.log(" อยากเห็น =",user_login);

    swal("Do you want to edit information", name_surname, {
      buttons: {
        cancel: "Cancel",
        ok: {
          text: "OK",
          value: "ok",
        },
      },
    }).then(async (value) => {
      switch (value) {
        case "cancel":
          break;
        case "ok":
          try {
            const getEdit_show = await axios.get(
              `http://localhost:5000/Search_Person_Maintain_Edit?FPM_factory=${factory}&FPM_level=${level}&FPM_cost_center=${cost_center}&FPM_user_login=${user_login}`
            );
            const data = await getEdit_show.data;
            console.log("Show data Edit อยากเห็น =", data);
            const DataEdit = data;
            const PAGE_STATUS = "EDIT";

            if (data && data.length > 0) {
              const sentdata = JSON.stringify(DataEdit);
              localStorage.setItem("Person_Edit", sentdata);
              localStorage.setItem("PAGE_STATUS", PAGE_STATUS);
              console.log("ข้อมูลใน if Edit อยู่ตรงนี้ไหม =", sentdata);
              console.log("ข้อมูลใน if Edit อยู่ตรงนี้ไหม =", PAGE_STATUS);
            } else {
              console.error("Login failed");
            }

            openPopup();
            // navigate("/PersonNew");
          } catch (error) {
            console.error("Error requesting data:", error);
          }
          break;
      }
    });
  };

  const handleOpenDelete = async (
    factory,
    level,
    cost_center,
    user_login,
    name_surname
  ) => {
    console.log(factory);
    console.log(level);
    console.log(cost_center);
    console.log(user_login);

    swal({
      title: "Are you sure delete to information ",
      text: name_surname,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const delete_person_maintain = await axios.post(
            `http://localhost:5000/dlt_PERSON_MAINTAIN?FPM_factory_delete=${factory}&FPM_level_delete=${level}&FPM_cost_center_delete=${cost_center}&FPM_user_login_delete=${user_login}`
          );
          const data = await delete_person_maintain.data;
          console.log("DELETE DATA PERSON =", data);
          Search();
          swal("Your data has been deleted successfully", {
            icon: "success",
          });
        } catch (error) {
          console.error("Error deleting data:", error);
        }
      } else {
      }
    });
  };

  // Check user login
  const handleUserLogin = (event) => {
    const user_login = event.target.value;
    setUser_Login(user_login);
    Check_Username_Email(user_login);
  };

  // popup
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <Header />
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        searchFunction={Search_back}
      />
      <div className="DD">
        <h1
          style={{
            fontFamily: "Verdana, sans-serif",
            color: "#3AA6B9",
            fontWeight: "bold",
          }}
        >
          Person maintain search
        </h1>
        <div className="BoxSearch">
          {/* Factiory and Level */}
          <Grid
            container
            spacing={1}
            style={{ width: "100%", marginLeft: "20px", marginTop: "5px" }}
          >
            <Grid item xs={1.3} style={{ height: "10px" }}>
              <FormControl fullWidth>
                <Autocomplete
                  options={datafac}
                  getOptionLabel={(option) =>
                    typeof option[1] !== "undefined" ? option[1] : ""
                  }
                  value={selecteDatafac ||  null}
                  onChange={handleSelectChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Factory"
                      size="small"
                      variant="outlined"
                    />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={1.3}>
 
              <FormControl fullWidth>
                <Autocomplete
                  options={cost}
                  getOptionLabel={(option) =>
                    typeof option[0] !== "undefined" ? option[0] : ""
                  }
                  value={selectcost || null}
                  onChange={handleCost}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Cost Center"
                      size="small"
                      variant="outlined"
                    />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={2.2}>
            <FormControl fullWidth>
                <Autocomplete
                  options={datalevel}
                  getOptionLabel={(option) =>
                    typeof option[1] !== "undefined" ? option[1] : ""
                  }
                  value={selecteDatalevel || null}
                  onChange={handlelevel}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Level"
                      size="small"
                      variant="outlined"
                    />
                  )}
                />
              </FormControl>
              
            </Grid>
            <Grid item xs={2.2}>
              <FormControl fullWidth>
                <TextField
                  id="FixAsset"
                  size="small"
                  label="User Login"
                  value={User_Login}
                  onChange={handleUserLogin}
                ></TextField>
              </FormControl>
            </Grid>
            <Grid item xs={1} style={{ margin: "0 5px" }}>
              <Button
                className="ButtonSearch"
                style={{
                  color: "white",
                  width: "100%",
                }}
                variant="contained"
                onClick={Search}
              >
                {" "}
                <SearchIcon />
                Search
              </Button>
            </Grid>
            <Grid item xs={1} style={{ margin: "0 5px" }}>
              <Button
                className="ButtonSearch"
                style={{
                  backgroundColor: "#65B741",
                  width: "100%",
                  color: "white",
                }}
                variant="contained"
                onClick={New}
              >
                <AddIcon />
                New
              </Button>
            </Grid>

            <Grid item xs={1} style={{ margin: "0 5px" }}>
              <Button
                className="ButtonSearch"
                onClick={Reset}
                style={{
                  backgroundColor: "#BE3144",
                  color: "white",
                  width: "100%",
                }}
                variant="contained"
              >
                <RestartAltIcon />
                Reset
              </Button>
            </Grid>
          </Grid>
        </div>

        <div className="responsive-container">
          <TableContainer
            style={{
              visibility: checkHead,
            }}
            className="TABLEKHUN"
            component={Paper}
          >
            {/* <Table sx={{ minWidth: 650  }} aria-label="simple table" className="TABLEKHUN"> */}
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Factory</TableCell>
                  <TableCell>Level</TableCell>
                  <TableCell>Cost Center</TableCell>
                  <TableCell>User Login</TableCell>
                  <TableCell>Name-Surname</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Update By</TableCell>
                  <TableCell>Update Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataSearch.length > 0 ? (
                  dataSearch.map((item) => (
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>
                        <Tooltip title="Edit">
                          <EditNoteIcon
                            style={{ color: "#F4D03F", fontSize: "30px" }}
                            onClick={() =>
                              handleOpenEdit(
                                item[1],
                                item[3],
                                item[5],
                                item[6],
                                item[7]
                              )
                            }
                          />
                        </Tooltip>

                        <Tooltip title="Delete">
                          <DeleteForeverIcon
                            style={{ color: "red", fontSize: "30px" }}
                            onClick={() =>
                              handleOpenDelete(
                                item[1],
                                item[3],
                                item[5],
                                item[6],
                                item[7]
                              )
                            }
                          />
                        </Tooltip>
                      </TableCell>
                      <TableCell className="TexttableA">{item[0]}</TableCell>
                      <TableCell className="TexttableA">{item[2]}</TableCell>
                      <TableCell className="TexttableA">{item[5]}</TableCell>
                      <TableCell className="TexttableA">{item[6]}</TableCell>
                      <TableCell className="TexttableA">{item[7]}</TableCell>
                      <TableCell className="TexttableA">{item[8]}</TableCell>
                      <TableCell className="TexttableA">{item[9]}</TableCell>
                      <TableCell className="TexttableA">{item[10]}</TableCell>
                      <TableCell>{item[11]}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow style={{ visibility: checkEmpty }}>
                    <TableCell colSpan={9}>
                      <InfoCircleOutlined
                        style={{
                          visibility: checkData,
                          fontSize: "30px",
                          color: "#ffd580",
                        }}
                      />
                      <text
                        style={{
                          visibility: checkData,
                          fontSize: "25px",
                          marginLeft: "10px",
                        }}
                      >
                        {" "}
                        Please fill in information{" "}
                      </text>
                      <Empty style={{ visibility: checkEmpty }} />
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default person_maintain;
