import React, { useState, useEffect } from "react";
import Header from "../Page/Hearder";
import "../Page/Style.css";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";
import {
  FormControl,
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Empty } from "antd";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import swal from "sweetalert";
import "../Person_Maintain/Person_maintain.css";
import Popup from "../BOI_Project_Mpping_CC/Boi_maintain";
import Autocomplete from "@mui/material/Autocomplete";
import PageLoadding from "../Loadding/Pageload";
import { LoadingOutlined } from "@ant-design/icons";

function Boi_project_mcc() {
  const Name = localStorage.getItem("Name");
  const Lastname = localStorage.getItem("Lastname");
  let UserLogin = Name + " " + Lastname;
  const UserLoginn = localStorage.getItem("UserLogin");
  const [datafac, setdatafac] = useState([]);
  const [dataBOI, setdataBOI] = useState([]);
  const [cost, setcost] = useState([]);
  const [dataSearch, setdataSearch] = useState([]);
  const [selectcost, setselectcost] = useState("");
  const [selecteDataBOI, setselecteDataBOI] = useState("");
  const [selecteDatafac, setselecteDatafac] = useState("");
  const [User_Login, setUser_Login] = useState("");
  const [checkHead, setCheckHead] = useState("hidden"); 
  const [checkEmpty, setCheckEmpty] = useState("hidden"); 
  const [checkData, setCheckData] = useState("visible"); 
  const [loading, setloading] = useState("true");
  const [selectindex, setselectindex] = useState("0");

  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>;

  const handleSelectChange = async (event, newValue) => {
    setselecteDatafac(newValue);
  };
  const handleBOI = (event, newValue) => {
    setselecteDataBOI(newValue);
  };
  const handleCost = (event, newValue) => {
    setselectcost(newValue);
  };
  const navigate = useNavigate();
  const New = () => {
    localStorage.removeItem("DATA_BACK_SEARCH");
    const PAGE_STATUS = "NEW";
    localStorage.setItem("PAGE_STATUS", PAGE_STATUS);
    openPopup();
  };

  useEffect(() => {
    openPopupLoadding();

    const fetchData = async () => {
      const Factory = async () => {
        try {
          const response = await axios.get(`/getfactory`);
          const FactoryData = await response.data;
          setdatafac(FactoryData);
        } catch (error) {
          console.error("Error during login:", error);
        }
      };
      const BOI_Project = async () => {
        try {
          const response = await axios.get(
            `/get_BOI_project`
          );
          const BOIData = await response.data;
          setdataBOI(BOIData);
        } catch (error) {
          console.error("Error during login:", error);
        }
      };
      const Costcenter = async () => {
        try {
          const response = await axios.get(`/getcost`);
          const CostData = await response.data;
          setcost(CostData);
        } catch (error) {
          console.error("Error during login:", error);
        }
      };
      // เรียกใช้งานทั้ง 3 ฟังก์ชัน
      await Factory();
      await BOI_Project();
      await Costcenter();
      closePopupLoadding();
    };
    fetchData();
  }, []);

  const Search_back = async () => {
    const DATA_SAVE_EDIT = localStorage.getItem("DATA_BACK_SEARCH");
    const DATA_SEARCH_S_E = JSON.parse(DATA_SAVE_EDIT);
    if (DATA_SEARCH_S_E !== null) {
      setselecteDatafac(DATA_SEARCH_S_E[0]);
      setselectcost(DATA_SEARCH_S_E[1]);
      setselecteDataBOI(DATA_SEARCH_S_E[2]);
      try {
        const factoryValue = DATA_SEARCH_S_E[0][0];
        const costValue = DATA_SEARCH_S_E[1][0];
        const BOIValue = DATA_SEARCH_S_E[2][0];
        
          const rollNoSearch = await axios.post(
            "/search_BOI_project",
            {
              FBMC_factory: factoryValue,
              FBMC_cost_center:costValue,
              FBMC_BOI_project:BOIValue
            }
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
    } else {
    }
  };

  const Search = async () => {
    openPopupLoadding();
    try {
      const factoryValue =
        selecteDatafac[0] !== undefined ? selecteDatafac[0] : "";
      const costValue = selectcost[0] !== undefined ? selectcost[0] : "";
      const BOIValue = selecteDataBOI[0] !== undefined ? selecteDataBOI[0] : "";
      // const rollNoSearch = await axios.get(
      //   `/search_BOI_project?FBMC_factory=${factoryValue}&FBMC_cost_center=${costValue}&FBMC_BOI_project=${BOIValue}`
      // );
      const rollNoSearch = await axios.post(
        "/search_BOI_project",
        {
          FBMC_factory: factoryValue,
          FBMC_cost_center:costValue,
          FBMC_BOI_project:BOIValue
        }
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

    closePopupLoadding();
  };

  const Reset = async () => {
    localStorage.removeItem("DATA_BACK_SEARCH");
    setselecteDatafac("");
    setselectcost("");
    setselecteDataBOI("");
    setUser_Login("");
    setdataSearch("");
    setCheckHead("hidden");
    setCheckEmpty("hidden");
    setCheckData("visible");
  };
  const handleOpenEdit = async (factory, cost_center, boi_project , index) => {
          setselectindex(index);
          setloading("false");
           try {
          const getEdit_show = await axios.post(
            "/Search_BOI_Maintain_Edit",
            {
              FBMC_cost_center: cost_center,
              FBMC_BOI_Project:boi_project
            }
          );
            const data = await getEdit_show.data;
            const DataEdit = data;
            const PAGE_STATUS = "EDIT";

            if (data && data.length > 0) {
              const sentdata = JSON.stringify(DataEdit);
              localStorage.setItem("BOI_Edit", sentdata);
              localStorage.setItem("PAGE_STATUS", PAGE_STATUS);
            } else {
              console.error("Login failed");
            }
            openPopup();
          } catch (error) {
            console.error("Error requesting data:", error);
          }
          setloading("true"); 
  };
  const handleOpenDelete = async (factory, cost_center, boi_project) => {
    swal({
      title: "Are you sure delete to information ",
      text: `FACTORY  :  ${factory}\n COST CENTER  :  ${cost_center}\n  BOI PROJECT  :  ${boi_project}`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      openPopupLoadding();
      if (willDelete) {
        try {
          const delete_BOI_maintain = await axios.post(
            "/dlt_BOI_MAINTAIN",
            {
              FBMC_cost_center_delete: cost_center,
              FBMC_BOI_Project_delete:boi_project
            }
          );
          const data = await delete_BOI_maintain.data;
          Search();
          swal("Your data has been deleted successfully", {
            icon: "success",
          });
        } catch (error) {
          console.error("Error deleting data:", error);
        }
      } else {
      }
      closePopupLoadding();
    });
  };

  const handleUserLogin = (event) => {
    const user_login = event.target.value;
    setUser_Login(user_login);
    Check_Username_Email(user_login);
  };

  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const [isPopupOpenLoadding, setPopupOpenLoadding] = useState(false);
  const openPopupLoadding = () => {
    setPopupOpenLoadding(true);
  };
  const closePopupLoadding = () => {
    setPopupOpenLoadding(false);
  };

  return (
    <>
      <Header />
      <PageLoadding isOpen={isPopupOpenLoadding} onClose={closePopupLoadding} />
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
          BOI Project search
        </h1>
        <div className="BoxSearch">
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
                  value={selecteDatafac || null}
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
            <Grid item xs={4}>
              <FormControl fullWidth>
                <Autocomplete
                  options={dataBOI}
                  getOptionLabel={(option) =>
                    typeof option[0] !== "undefined" ? option[0] : ""
                  }
                  value={selecteDataBOI || null}
                  onChange={handleBOI}
                  style={{
                    width: "100%",
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="BOI Project"
                      size="small"
                      variant="outlined"
                    />
                  )}
                />
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
  
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Factory</TableCell>
                  <TableCell>Cost Center</TableCell>
                  <TableCell>BOI Project</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Update By</TableCell>
                  <TableCell>Update Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataSearch.length > 0 ? (
                  dataSearch.map((item, index) => (
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell>
                        {loading == "false" && index == selectindex ? (
                          <LoadingOutlined style={{ fontSize: "30px" }} />
                        ) : (
                          <EditNoteIcon
                            style={{ color: "#F4D03F", fontSize: "30px" }}
                            onClick={() => {
                              handleOpenEdit(item[1], item[3], item[4], index);
                            }}
                          />
                        )}
                        <DeleteForeverIcon
                          style={{ color: "red", fontSize: "30px" }}
                          onClick={() =>
                            handleOpenDelete(item[1], item[3], item[4])
                          }
                        />
                      </TableCell>
                      <TableCell className="TexttableA">{item[1]}</TableCell>
                      <TableCell className="TexttableA">{item[3]}</TableCell>
                      <TableCell className="TexttableA" style={{ textAlign: "left" }}>{item[4]}</TableCell>
                      <TableCell className="TexttableA">{item[5]}</TableCell>
                      <TableCell className="TexttableA">{item[6]}</TableCell>
                      <TableCell>{item[7]}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow style={{ visibility: checkEmpty }}>
                    <TableCell colSpan={9}>
                      {/* <InfoCircleOutlined
                        style={{
                          visibility: checkData,
                          fontSize: "30px",
                          color: "#ffd580",
                        }}
                      /> */}
                      <text
                        style={{
                          visibility: checkData,
                          fontSize: "25px",
                          marginLeft: "10px",
                        }}
                      >
                        {/* {" "}
                        Please fill in information{" "} */}
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

export default Boi_project_mcc;