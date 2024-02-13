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
import SEARCH from "../Person_Maintain/Search_person";

function Boi_maintain({ isOpen, onClose, searchFunction }) {
  if (!isOpen) return null;
  const Name = localStorage.getItem("Name");
  const Lastname = localStorage.getItem("Lastname");
  let UserLogin = Name + " " + Lastname;
  const UserLoginn = localStorage.getItem("UserLogin");
  const [datafac, setdatafac] = useState([]);
  const [selecteDatafac, setselecteDatafac] = useState("");
  const [cost, setcost] = useState([]);
  const [selectcost, setselectcost] = useState("");
  const [Date_show, setDate_show] = useState("");
  const [Date_show_update, setDate_show_update] = useState("");
  const [user_create, setuser_create] = useState("");
  const [user_update, setuser_update] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [BOI_Project, setBOI_Project] = useState("");
  const [Comment, setComment] = useState("");
  const PAGE_STATUS = localStorage.getItem("PAGE_STATUS");
  console.log(PAGE_STATUS, "ข้อมูลอยู่ตรงนี้ไหม");
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>;
  // Popup
  const onCloseCancel = () => {
    console.log("ปิด");
    onClose();
  };

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
      setselectcost("");
      setBOI_Project("");
      setComment("");
      setStatus("");
      setuser_create(UserLoginn);
      setuser_update(UserLoginn);
    } else {
      console.log("CASE EDIT", DATA_EDIT);
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
    Factory();
    Costcenter();
  }, []);

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

  const handleCost = (event) => {
    setselectcost(event.target.value);
    console.log(event.target.value, "setselectcost");
  };

  const navigate = useNavigate();

  const Save = async () => {
    console.log("FACTORY CHECK", selecteDatafac);
    console.log("COST CENTER CHECK", selectcost);
    console.log("BOI PROJECT CHECK", BOI_Project);
    console.log("STATUS CHECK", status);
    console.log("COMMENT CHECK", Comment);
    console.log("CREATE BY CHECK", UserLoginn);
    console.log("CREATE DATE CHECK", Date_show);
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
          const response = await axios.post(
            `http://localhost:5000/ins_BOI_MAINTAIN?FBMC_cost_center=${selectcost}&FBMC_factory=${selecteDatafac}&FBMC_BOI_Project=${BOI_Project}&FBMC_status=${status}&FBMC_comment=${Comment}&FBMC_create_by=${UserLoginn}&FBMC_update_by=${UserLoginn}`
          );
          console.log("[บันทึกข้อมูลสำเร็จ] =", response);
          swal("success", "You save data success", "success");
          const DATA_BACK_SEARCH = [selecteDatafac, selectcost, BOI_Project];
          const sentdata_back_search = JSON.stringify(DATA_BACK_SEARCH);
          localStorage.setItem("DATA_BACK_SEARCH", sentdata_back_search);
          console.log(DATA_BACK_SEARCH, "ข้อมูลที่1");
          console.log(sentdata_back_search, "ข้อมูลที่2");
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
          const response = await axios.post(
            `http://localhost:5000/update_BOI_MAINTAIN?FBMC_cost_center=${selectcost}&FBMC_factory=${selecteDatafac}&FBMC_BOI_Project=${BOI_Project}&FBMC_status=${status}&FBMC_comment=${Comment}&FBMC_update_by=${UserLoginn}`
          );

          console.log("[บันทึกข้อมูลสำเร็จ] =", response);
          swal("success", "You save data success", "success");
          const DATA_BACK_SEARCH = [selecteDatafac, selectcost, BOI_Project];
          const sentdata_back_search = JSON.stringify(DATA_BACK_SEARCH);
          localStorage.setItem("DATA_BACK_SEARCH", sentdata_back_search);
          console.log(DATA_BACK_SEARCH, "ข้อมูลที่1");
          console.log(sentdata_back_search, "ข้อมูลที่2");
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
  };

  // check status New and Edit
  const EDIT = localStorage.getItem("BOI_Edit");
  console.log("show data edit", EDIT);
  const DATA_EDIT = JSON.parse(EDIT);

  const Reset = async () => {
    if (PAGE_STATUS === "NEW") {
      setselecteDatafac("");
      setselectcost("");
      setBOI_Project("");
      setComment("");
      setStatus("");
      UserLoginn("");
      setDate_show("");
      setDate_show_update("");
    } else {
      setselecteDatafac(DATA_EDIT[1]);
      setselectcost(DATA_EDIT[0]);
      setBOI_Project(DATA_EDIT[2]);
      setComment(DATA_EDIT[4]);
      setStatus(DATA_EDIT[3]);
      setuser_create(DATA_EDIT[6]);
      setuser_update(UserLoginn);
      setDate_show(DATA_EDIT[5]);
      setDate_show_update(formattedDate);
    }
  };

  // Check BOI Project
  const handleBOI_Project = (event) => {
    const dataBoi_P = event.target.value;
    setBOI_Project(dataBoi_P);
    // const dataBoi_P = event.target.value;
    // if (dataBoi_P.length <= 50) {
    //   setBOI_Project(dataBoi_P);
    // } else {
    //   alert("ขนาดตัวอักษรเกิน (ไม่ควรเกิน 50 ตัวอักษร)");
    // }
  };

  // Check Comment
  const handleComment = (event) => {
    const dataComment = event.target.value;
    setComment(dataComment);
  };

  // Status
  const [status, setStatus] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;
    setStatus(value);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        {/* Factiory and Level */}
        <Table className="PopupEditPerson">
          <TableRow>
            <TableCell>
              <Typography>Factory</Typography>
            </TableCell>
            <TableCell>
              <Typography>Cost Center</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              {" "}
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
                  size="small"
                  style={{ width: "100%" }}
                >
                  {datafac.map((option, index) => (
                    <MenuItem key={index} value={option[0]}>
                      {option[1]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </TableCell>
            <TableCell>
              {" "}
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
                    width: "100%",
                  }}
                >
                  {cost.map((option) => (
                    <MenuItem
                      value={option[0]}
                    >
                      {option[0]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              {" "}
              <Typography>BOI Project</Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>
              {" "}
              <TextField
                id="UserLogin"
                size="small"
                value={BOI_Project}
                onChange={handleBOI_Project}
                style={{ width: "100%" }}
              ></TextField>
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
                style={{ width: "100%" }}
              ></TextField>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              {" "}
              <Typography>Status</Typography>
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
                  style={{
                    width: "100%",
                  }}
                  value={status} // Set the value from state
                  onChange={handleChange}
                >
                  <MenuItem value="A">Active</MenuItem>
                  <MenuItem value="I">In Active</MenuItem>
                </Select>
              </FormControl>
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
