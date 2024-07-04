import React, { useState, useEffect } from "react";
import "../Page/Style.css";
import {
  Typography,
  FormControl,
  TableRow,
  Table,
  TableCell,
  Select,
  MenuItem,
  TextField,
  Button,
  InputLabel,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import swal from "sweetalert";
import CloseIcon from "@mui/icons-material/Close";
import Autocomplete from "@mui/material/Autocomplete";
import PageLoadding from "../Loadding/Pageload";

function person_maintain_new({ isOpen, onClose, searchFunction }) {
  if (!isOpen) return null;
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
  const [status, setStatus] = useState("A");
  const PAGE_STATUS = localStorage.getItem("PAGE_STATUS");
  const [ErrorFac, setErrorFac] = useState(false);
  const [ErrorLevel, setErrorLevel] = useState(false);
  const [ErrorCost, setErrorCost] = useState(false);
  const [ErrorUserLogin, setErrorUserLogin] = useState(false);
  const [ErrorEmail, setErrorEmail] = useState(false);
  const [ErrorStatus, setErrorStatus] = useState(false);
  // console.log(PAGE_STATUS, "ข้อมูลอยู่ตรงนี้ไหม");
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>;

  const onCloseCancel = () => {
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
      setselecteDatalevel("");
      setselectcost("");
      setUser_Login("");
      setusername("");
      setemail("");
      setStatus("A");
      setuser_create(UserLoginn);
      setuser_update(UserLoginn);
    } else {
      const EDIT = localStorage.getItem("Person_Edit");
       console.log("show data edit", EDIT);
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
      const combinedArray03 = [DATA_EDIT_03.slice(2, 4)];
      const DATA_EDIT = DATA_EDIT_03.slice(0, 2).concat(
        combinedArray03,
        DATA_EDIT_03.slice(4)
      );
      console.log("show data DATA_EDIT", DATA_EDIT);
      // console.log("CASE EDIT", DATA_EDIT);
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
    const fetchData = async () => {
      const Factory = async () => {
        try {
          const response = await axios.get(
            `/getfactory`
          );
          const FactoryData = await response.data;
          setdatafac(FactoryData);
        } catch (error) {
          console.error("Error during fetching factory data:", error);
        }
      };

      const Costcenter = async () => {
        try {
          const response = await axios.get(`/getcost`);
          const CostData = await response.data;
          CostData.push(['ALL', 'ALL']);
          setcost(CostData);
          
        } catch (error) {
          console.error("Error during fetching cost data:", error);
        }
      };

      const Level = async () => {
        try {
          const response = await axios.get(
            `/getlevel`
          );
          const LevelData = await response.data;
          setdatalevel(LevelData);
        } catch (error) {
          console.error("Error during fetching level data:", error);
        }
      };

      await Factory();
      await Costcenter();
      await Level();
      closePopupLoadding();
    };

    fetchData();
  }, []);

  const handleSelectChange = async (event, newValue) => {
    setselecteDatafac(newValue);
    setErrorFac(false);
  };

  const handlelevel = (event, newValue) => {
    setselecteDatalevel(newValue);
    setErrorLevel(false);
  };

  const handleCost = (event, newValue) => {
    setselectcost(newValue);
    setErrorCost(false);
  };

  const navigate = useNavigate();

  const Save = async () => {
    if (!selecteDatafac || selecteDatafac.toString().trim() === "") {
      setErrorFac(true);
    }
    if (!selecteDatalevel || selecteDatalevel.toString().trim() === "") {
      setErrorLevel(true);
    }
    if (!selectcost || selectcost.toString().trim() === "") {
      setErrorCost(true);
    }
    if (!User_Login || User_Login.toString().trim() === "") {
      setErrorUserLogin(true);
    }
    if (!email || email.toString().trim() === "") {
      setErrorEmail(true);
    }
    if (!status || status.toString().trim() === "") {
      setErrorStatus(true);
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
                  "/ins_PERSON_MAINTAIN",
                  {
                    FPM_factory: selecteDatafac[0],
                    FPM_level: selecteDatalevel[0],
                    FPM_cost_center: selectcost[0],
                    FPM_user_login: User_Login,
                    FPM_email: email,
                    FPM_status: status,
                    FPM_create_by: UserLoginn,
                    FPM_update_by: UserLoginn,
                  }
                );
                swal("Success", "Data saved successfully", "success");
                const DATA_BACK_SEARCH = [
                  selecteDatafac,
                  selecteDatalevel,
                  selectcost,
                  [User_Login],
                ];
                const sentdata_back_search = JSON.stringify(DATA_BACK_SEARCH);
                localStorage.setItem("DATA_BACK_SEARCH", sentdata_back_search);

                searchFunction();
                onClose();
              } catch (error) {
                console.error("Unable to save data:", error);
                swal(
                  "Error",
                  "Unable to save data. Please try again.",
                  "error"
                );
              }
            } else {
              console.error("Unable to save data: Empty values ​​are passed.");
              swal(
                "Unable to save information",
                "Please check the entered information.",
                "error"
              );
            }
          } else {
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
                  "/update_PERSON_MAINTAIN",
                  {
                    FPM_factory: selecteDatafac[0],
                    FPM_level: selecteDatalevel[0],
                    FPM_cost_center: selectcost[0],
                    FPM_user_login: User_Login,
                    FPM_email: email,
                    FPM_status: status,
                    FPM_update_by: UserLoginn,
                  }
                );
                swal("success", "You save data success", "success");
                const DATA_BACK_SEARCH = [
                  selecteDatafac,
                  selecteDatalevel,
                  selectcost,
                  [User_Login],
                ];
                const sentdata_back_search = JSON.stringify(DATA_BACK_SEARCH);
                localStorage.setItem("DATA_BACK_SEARCH", sentdata_back_search);

                searchFunction();
                onClose();
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
      setErrorLevel(false);
      setErrorCost(false);
      setErrorUserLogin(false);
      setErrorEmail(false);
      setErrorStatus(false);
      setselecteDatafac("");
      setselecteDatalevel("");
      setselectcost("");
      setUser_Login("");
      setusername("");
      setemail("");
      setStatus("A");
      UserLoginn("");
      setDate_show("");
      setDate_show_update("");
    } else {
      setErrorEmail(false);
      setErrorStatus(false);
      setemail(DATA_EDIT[4]);
      setStatus(DATA_EDIT[5]);
    }
  };

  const handleUserLogin = (event) => {
    const user_login = event.target.value;
    Check_Username_Email(user_login);
    setUser_Login(user_login);
    setErrorUserLogin(false);
    setErrorEmail(false);
  };

  const handleEmail = (event) => {
    const Email = event.target.value;
    setemail(Email);
    setErrorEmail(false);
  };

  const Check_Username_Email = async (user_login) => {
    try {
      const getDatalogin_show = await axios.post(
        '/getData_UserLogin_Person',
        { user_log: user_login }
      );
   
      const data = await getDatalogin_show.data;
      if (data && data.length > 0) {
        const USERNAME = data[0][0];
        console.log( data[0][0]," data[0][0]")
        const EMAIL = data[0][1];
        if (PAGE_STATUS === "NEW") {
          setusername(data[0][0]);
          setemail(data[0][1]);
          console.log("Show data Email2 =");
        } else {
          setusername(data[0][0]);
        }

        localStorage.setItem("USERNAME", USERNAME);
        localStorage.setItem("EMAIL", EMAIL);
      } else {
        setusername("");
        setemail("");
        console.error("User Login file");
      }
    } catch (error) {
      console.error("Error requesting data:", error);
    }
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
        {/* Factiory and Level */}
        <Table className="PopupEditPerson">
          <TableRow>
            <TableCell>
              <Typography>
                Factory <span class="red-star">*</span>
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                Level <span class="red-star">*</span>
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
                  options={datalevel}
                  getOptionLabel={(option) =>
                    typeof option[1] !== "undefined" ? option[1] : ""
                  }
                  value={selecteDatalevel || null}
                  onChange={handlelevel}
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
                      label={!selecteDatalevel ? "Select" : undefined}
                      size="small"
                      variant="outlined"
                      error={ErrorLevel}
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
                {ErrorLevel ? "Please key value in level" : null}
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>
              {" "}
              <Typography>
                Cost Center <span class="red-star">*</span>
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>
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
            <TableCell colSpan={2}>
              <Typography style={{ fontSize: "small", color: "red" }}>
                {ErrorCost ? "Please key value in cost center" : null}
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              {" "}
              <Typography>
                User Login <span class="red-star">*</span>
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              {" "}
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
                error={ErrorUserLogin}
                style={{ width: "100%" }}
              ></TextField>
            </TableCell>
            <TableCell>
              {" "}
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
            </TableCell>
          </TableRow>

          <TableRow style={{ height: "25px" }}>
            <TableCell colSpan={2}>
              <Typography style={{ fontSize: "small", color: "red" }}>
                {ErrorUserLogin ? "Please key value in user login" : null}
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              {" "}
              <Typography>
                Email <span class="red-star">*</span>
              </Typography>
            </TableCell>
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
              <TextField
                id="Email"
                size="small"
                value={email}
                onChange={handleEmail}
                style={{ width: "100%" }}
                error={ErrorEmail}
              ></TextField>
            </TableCell>
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
                  error={ErrorStatus}
                >
                  <MenuItem value="A">Active</MenuItem>
                  <MenuItem value="I">In Active</MenuItem>
                </Select>
              </FormControl>
            </TableCell>
          </TableRow>

          <TableRow style={{ height: "25px" }}>
            <TableCell>
              <Typography style={{ fontSize: "small", color: "red" }}>
                {ErrorEmail ? "Please key value in email" : null}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography style={{ fontSize: "small", color: "red" }}>
                {ErrorStatus ? "Please key value in status" : null}
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              {" "}
              <Typography>Create By </Typography>{" "}
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
          {/* {console.log("PAGE_STATUS === TEST", PAGE_STATUS)} */}
          {PAGE_STATUS === "EDIT" && (
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
              {/* {console.log("PAGE_STATUS === EDIT")} */}
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

export default person_maintain_new;
