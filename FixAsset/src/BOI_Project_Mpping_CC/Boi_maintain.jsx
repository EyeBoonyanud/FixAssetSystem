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
import CloseIcon from "@mui/icons-material/Close";
import Autocomplete from "@mui/material/Autocomplete";
import PageLoadding from "../Loadding/Pageload";

function Boi_maintain({ isOpen, onClose, searchFunction }) {
  if (!isOpen) return null;
  const Name = localStorage.getItem("Name");
  const Lastname = localStorage.getItem("Lastname");
  let UserLogin = Name + " " + Lastname;
  const UserLoginn = localStorage.getItem("UserLogin");

  const [selecteDatafac, setselecteDatafac] = useState("");
  const [BOI_Project, setBOI_Project] = useState("");
  const [selectcost, setselectcost] = useState("");
  const [Date_show, setDate_show] = useState("");
  const [Date_show_update, setDate_show_update] = useState("");
  const [user_create, setuser_create] = useState("");
  const [user_update, setuser_update] = useState("");
  const [Comment, setComment] = useState("");
  const [status, setStatus] = useState("A");
  const [datafac, setdatafac] = useState([]);
  const [BOI_name, setBOI_name] = useState([]);
  const [cost, setcost] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const PAGE_STATUS = localStorage.getItem("PAGE_STATUS");
  const [ErrorBOI_P, setErrorBOI_P] = useState(false); //
  const [ErrorFac, setErrorFac] = useState(false);
  const [ErrorCost, setErrorCost] = useState(false);
  const [ErrorStatus, setErrorStatus] = useState(false);
  const [DATA_EDIT_RESET, set_DATA_EDIT_RESET] = useState([]);
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>;

  const onCloseCancel = () => {
    setErrorBOI_P(false);
    setErrorFac(false);
    onClose();
  };

  useEffect(() => {
    openPopupLoadding();

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
      setselectcost("");
      setBOI_Project("");
      setComment("");
      setStatus("A");
      setuser_create(UserLoginn);
      setuser_update(UserLoginn);
    } else {
      const EDIT = localStorage.getItem("BOI_Edit");
      const DATA_EDIT_M = JSON.parse(EDIT);
      const combinedArray01 = [DATA_EDIT_M.slice(0, 2)];
      const DATA_EDIT_02 = DATA_EDIT_M.slice(0, 0).concat(
        combinedArray01,
        DATA_EDIT_M.slice(2)
      );
      const combinedArray02 = [DATA_EDIT_02.slice(1, 3)];
      const DATA_EDIT_03 = DATA_EDIT_02.slice(0, 1).concat(
        combinedArray02,
        DATA_EDIT_02.slice(3)
      );
      const combinedArray03 = [DATA_EDIT_03.slice(2, 3)];
      const DATA_EDIT = DATA_EDIT_03.slice(0, 2).concat(
        combinedArray03,
        DATA_EDIT_03.slice(3)
      );
      set_DATA_EDIT_RESET(DATA_EDIT);
      setselecteDatafac(DATA_EDIT[1]);
      setselectcost(DATA_EDIT[0]);
      setBOI_Project(DATA_EDIT[2]);
      setStatus(DATA_EDIT[3]);
      setComment(DATA_EDIT[4]);
      setuser_create(DATA_EDIT[6]);
      setuser_update(UserLoginn);
      setDate_show(DATA_EDIT[5]);
      setDate_show_update(formattedDate);
    }
    const fetchData = async () => {
      const Factory = async () => {
        try {
          const response = await axios.get(
            `/getfactory`
          );
          const FactoryData = await response.data;
          setdatafac(FactoryData);
          
        } catch (error) {
          console.error("Error during login:", error);
        }
      };

      const Costcenter = async () => {
        try {
          const response = await axios.get(`/getcost`);
          const CostData = await response.data;
          CostData.push(['ALL', 'ALL']);
          setcost(CostData);
        } catch (error) {
          console.error("Error during login:", error);
        }
      };
      const BOI_Project_name = async () => {
        try {
          const response = await axios.get(
            `/get_BOI_project_name`
          );
          const BOI_name = await response.data;
          setBOI_name(BOI_name);
        } catch (error) {
          console.error("Error during login:", error);
        }
      };
      await Factory();
      await Costcenter();
      await BOI_Project_name();
      closePopupLoadding();
    };

    fetchData();
  }, []);

  const handleSelectChange = async (event, newValue) => {
    setselecteDatafac(newValue);
    setErrorFac(false);
  };

  const handleCost = (event, newValue) => {
    setselectcost(newValue);
    setErrorCost(false);
  };

  const handleSelectBOI_name = async (event, newValue) => {
    setBOI_Project(newValue);
    setErrorBOI_P(false);
  };

  const Save = async () => {
    if (!selecteDatafac || selecteDatafac.toString().trim() === "") {
      setErrorFac(true);
    }
    if (selectcost.toString().trim() === "") {
      setErrorCost(true);
    }
    if (BOI_Project.toString().trim() === "") {
      setErrorBOI_P(true);
    }
    if (status.trim() === "") {
      setErrorStatus(true);
    }
    if (!selecteDatafac || selecteDatafac.toString().trim() === "") {
      document.getElementById("selecteDatafac").focus();
    }
    if (selectcost.toString().trim() === "") {
      document.getElementById("selectcost").focus();
    }
    if (BOI_Project.toString().trim() === "") {
      document.getElementById("BOI_Project").focus();
    }
    if (status.trim() === "") {
      document.getElementById("status").focus();
    }

    swal(
      "Do you want to save information",

      {
        buttons: {
          cancel: "Cancel",
          ok: {
            text: "OK",
            value: "ok",
          },
        },
      }
    ).then(async (value) => {
      switch (value) {
        case "cancel":
          break;
        case "ok":
          if (PAGE_STATUS === "NEW") {
            if (
              selecteDatafac &&
              selectcost &&
              BOI_Project &&
              status &&
              UserLoginn &&
              Date_show
            ) {
              
              try {
                const response = await axios.post("/ins_BOI_MAINTAIN", {
                  FBMC_cost_center: selectcost[0],
                  FBMC_factory: selecteDatafac[0],
                  FBMC_BOI_Project: BOI_Project[0] ,
                  FBMC_status:status ,
                  FBMC_comment:Comment ,
                  FBMC_create_by:UserLoginn ,
                  FBMC_update_by:UserLoginn
                });
                swal("success", "You save data success", "success");
                const DATA_BACK_SEARCH = [
                  selecteDatafac,
                  selectcost,
                  BOI_Project,
                ];
                const sentdata_back_search = JSON.stringify(DATA_BACK_SEARCH);
                localStorage.setItem("DATA_BACK_SEARCH", sentdata_back_search);
                
                onClose();
                searchFunction();
              } catch (error) {
                console.error("ไม่สามารถบันนทึกข้อมูลได้:", error);
              }
            } else {
              console.error("ไม่สามารถบันทึกข้อมูลได้: ค่าว่างถูกส่งเข้ามา");
              swal(
                "Unable to save information",
                "Please check the information entered.",
                "error"
              );
            }
          } else {
            if (
              selecteDatafac &&
              selectcost &&
              BOI_Project &&
              status &&
              UserLoginn &&
              Date_show
            ) {
              try {
                const response = await axios.post("/update_BOI_MAINTAIN", {
                  FBMC_cost_center: selectcost[0],
                  FBMC_factory: selecteDatafac[0],
                  FBMC_BOI_Project: BOI_Project[0] ,
                  FBMC_status:status ,
                  FBMC_comment:Comment ,
                  FBMC_update_by:UserLoginn
                });
                swal("success", "You save data success", "success");
                const DATA_BACK_SEARCH = [
                  selecteDatafac,
                  selectcost,
                  BOI_Project,
                ];
                const sentdata_back_search = JSON.stringify(DATA_BACK_SEARCH);
                localStorage.setItem("DATA_BACK_SEARCH", sentdata_back_search);
                onClose();
                searchFunction();
              } catch (error) {
                console.error("ไม่สามารถบันนทึกข้อมูลได้:", error);
              }
            } else {
              console.error("ไม่สามารถบันทึกข้อมูลได้: ค่าว่างถูกส่งเข้ามา");
              swal(
                "Unable to save information",
                "Please check the information entered.",
                "error"
              );
            }
          }
          break;
      }
    });
  };

  const Reset = async () => {
    if (PAGE_STATUS === "NEW") {
      setErrorFac(false);
      setErrorBOI_P(false);
      setErrorCost(false);
      setselecteDatafac("");
      setselectcost("");
      setBOI_Project("");
      setComment("");
      setStatus("A");
    } else {
      setErrorFac(false);
      setErrorBOI_P(false);
      setErrorCost(false);
      setselecteDatafac(DATA_EDIT_RESET[1]);
      setselectcost(DATA_EDIT_RESET[0]);
      setBOI_Project(DATA_EDIT_RESET[2]);
      setComment(DATA_EDIT_RESET[4]);
      setStatus(DATA_EDIT_RESET[3]);
      setuser_create(DATA_EDIT_RESET[6]);
      setuser_update(UserLoginn);
      setDate_show(DATA_EDIT_RESET[5]);
      setDate_show_update(formattedDate);
    }
  };

  const handleBOI_Project = (event) => {
    const dataBoi_P = event.target.value;
    setBOI_Project(dataBoi_P);
    setErrorBOI_P(false);
  };

  const handleComment = (event) => {
    const dataComment = event.target.value;
    setComment(dataComment);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setStatus(value);
    setErrorStatus(false);
  };

  const [isPopupOpenLoadding, setPopupOpenLoadding] = useState(false);
  const openPopupLoadding = () => {
    setPopupOpenLoadding(true);
  };
  const closePopupLoadding = () => {
    setPopupOpenLoadding(false);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <PageLoadding
          isOpen={isPopupOpenLoadding}
          onClose={closePopupLoadding}
        />
        <Table className="PopupEditPerson">
          <TableRow>
            <TableCell>
              <Typography>
                Factory <span class="red-star">*</span>
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                Cost Center <span class="red-star">*</span>
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              {" "}
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
                      label={!selecteDatafac ? "Select" : undefined}
                      size="small"
                      variant="outlined"
                      error={ErrorFac}
                    />
                  )}
                />
              </FormControl>
            </TableCell>
            <TableCell>
              {" "}
              <FormControl fullWidth>
                <Autocomplete
                  options={cost}
                  getOptionLabel={(option) =>
                    typeof option[0] !== "undefined" ? option[0] : ""
                  }
                  value={selectcost || null}
                  onChange={handleCost}
                  disabled={PAGE_STATUS === "EDIT"}
                  sx={{
                    backgroundColor:
                      PAGE_STATUS === "EDIT"
                        ? "rgba(169, 169, 169, 0.3)"
                        : "inherit",
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={!selectcost ? "Select" : undefined}
                      size="small"
                      variant="outlined"
                      error={ErrorCost}
                    />
                  )}
                />
              </FormControl>
            </TableCell>
          </TableRow>

          <TableRow style={{ height: "25px" }}>
            <TableCell>
              <Typography style={{ fontSize: "small", color: "red" }}>
                {ErrorFac ? "Please key value in factory" : null}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography style={{ fontSize: "small", color: "red" }}>
                {ErrorCost ? "Please key value in cost center" : null}
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              {" "}
              <Typography>
                BOI Project <span class="red-star">*</span>
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            {/* <TableCell colSpan={2}>
              {" "}
              <TextField
                id="UserLogin"
                size="small"
                value={BOI_Project}
                onChange={handleBOI_Project}
                disabled={PAGE_STATUS === "EDIT"}
                sx={{
                  backgroundColor:
                    PAGE_STATUS === "EDIT"
                      ? "rgba(169, 169, 169, 0.3)"
                      : "inherit",
                }}
                style={{
                  width: "100%",
                  borderColor: ErrorBOI_P ? "red" : undefined,
                }}
                error={ErrorBOI_P}
              ></TextField>
            </TableCell> */}
            <TableCell colSpan={2}>
              {" "}
              <FormControl fullWidth>
                <Autocomplete
                  options={BOI_name}
                  getOptionLabel={(option) =>
                    typeof option[0] !== "undefined" ? option[0] : ""
                  }
                  value={BOI_Project || null}
                  onChange={handleSelectBOI_name}
                  disabled={PAGE_STATUS === "EDIT"}
                  sx={{
                    backgroundColor:
                      PAGE_STATUS === "EDIT"
                        ? "rgba(169, 169, 169, 0.3)"
                        : "inherit",
                  }}
                  style={{
                    width: "100%",
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={!BOI_Project ? "Select" : undefined}
                      size="small"
                      variant="outlined"
                      error={ErrorBOI_P}
                    />
                  )}
                />
              </FormControl>
            </TableCell>
          </TableRow>

          <TableRow style={{ height: "25px" }}>
            <TableCell colSpan={2}>
              <Typography style={{ fontSize: "small", color: "red" }}>
                {ErrorBOI_P ? "Please key value in BOI project" : null}
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              {" "}
              <Typography>Comment</Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>
              {" "}
              <TextField
                id="UserLogin"
                size="small"
                value={Comment}
                onChange={handleComment}
                style={{
                  width: "100%",
                }}
              ></TextField>
            </TableCell>
          </TableRow>

          <TableRow style={{ height: "25px" }}></TableRow>

          <TableRow>
            <TableCell>
              {" "}
              <Typography>
                Status <span class="red-star">*</span>
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              {" "}
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
                  value={status} // Set the value from state
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    borderColor: ErrorStatus ? "red" : undefined,
                  }}
                  error={ErrorStatus}
                  helperText={
                    ErrorStatus
                      ? "กรุณาใส่ค่าใน Factory ก่อนกด Save"
                      : undefined
                  }
                >
                  <MenuItem value="A">Active</MenuItem>
                  <MenuItem value="I">In Active</MenuItem>
                </Select>
              </FormControl>
            </TableCell>
          </TableRow>

          <TableRow style={{ height: "25px" }}>
            <TableCell colSpan={2}>
              <Typography
                style={{ fontSize: "small", color: "red" }}
              ></Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              {" "}
              <Typography>Create By</Typography>{" "}
            </TableCell>
            <TableCell>
              {" "}
              <Typography>Create Date</Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              {" "}
              <TextField
                id="create_by"
                size="small"
                value={user_create}
                disabled
                sx={{
                  backgroundColor: "rgba(169, 169, 169, 0.3)",
                }}
                style={{ width: "100%" }}
              ></TextField>
            </TableCell>
            <TableCell>
              {" "}
              <TextField
                id="create_date"
                size="small"
                value={Date_show}
                disabled
                sx={{
                  backgroundColor: "rgba(169, 169, 169, 0.3)",
                }}
                style={{ width: "100%" }}
              ></TextField>
            </TableCell>
          </TableRow>
          <TableRow style={{ height: "25px" }}>
            <TableCell>
              <Typography
                style={{ fontSize: "small", color: "red" }}
              ></Typography>
            </TableCell>
            <TableCell>
              <Typography
                style={{ fontSize: "small", color: "red" }}
              ></Typography>
            </TableCell>
          </TableRow>
          {PAGE_STATUS !== "NEW" && (
            <>
              <TableRow>
                <TableCell>
                  {" "}
                  <Typography>Update By</Typography>
                </TableCell>
                <TableCell>
                  <Typography>Update Date</Typography>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <TextField
                    id="update_by"
                    size="small"
                    value={user_update}
                    disabled
                    sx={{
                      backgroundColor: "rgba(169, 169, 169, 0.3)",
                    }}
                    style={{ width: "100%" }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    id="update_date"
                    size="small"
                    value={Date_show_update}
                    disabled
                    sx={{
                      backgroundColor: "rgba(169, 169, 169, 0.3)",
                    }}
                    style={{ width: "100%" }}
                  />
                </TableCell>
              </TableRow>
            </>
          )}
          <TableRow style={{ height: "25px" }}>
            <TableCell>
              <Typography
                style={{ fontSize: "small", color: "red" }}
              ></Typography>
            </TableCell>
            <TableCell>
              <Typography
                style={{ fontSize: "small", color: "red" }}
              ></Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2} style={{ textAlign: "center" }}>
              {" "}
              <Button
                className="ButtonSearch"
                style={{
                  backgroundColor: "#65B741",
                }}
                variant="contained"
                onClick={Save}
              >
                <SaveIcon />
                Save
              </Button>{" "}
              <Button
                className="ButtonSearch"
                onClick={Reset}
                style={{
                  backgroundColor: "#BE3144",
                }}
                variant="contained"
              >
                <RestartAltIcon />
                Reset
              </Button>{" "}
              <Button
                className="ButtonSearch"
                onClick={onCloseCancel}
                style={{
                  backgroundColor: "#B4B4B8",
                }}
                variant="contained"
              >
                <CloseIcon />
                Cancel
              </Button>
            </TableCell>
          </TableRow>
        </Table>
      </div>
    </div>
  );
}

export default Boi_maintain;
