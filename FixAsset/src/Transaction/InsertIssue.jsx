import Header from "../Page/Hearder";
import React, { useState, useEffect } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import {
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Card,
  CardHeader,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Select,
  Paper,
  Checkbox,
  FormControl,
  MenuItem,
  InputLabel,
  Autocomplete,
} from "@mui/material";
import axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";
import ClearIcon from "@mui/icons-material/Clear";
import "../Page/Style.css";
import { CodepenOutlined } from "@ant-design/icons";
import { genNoticeStyle } from "antd/es/notification/style";

export default function LabTabs() {
  // const Emp = localStorage.getItem("EmpID");
  const UserLogin = localStorage.getItem("UserLogin"); // UserLogin ที่เอาค่าของ Userloin ไปหา request by
  const [value, setValue] = React.useState("1");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isTableOpen, setTableOpen] = useState(false); // เปิด ปิด Table Fixed Asset
  const [dataFixcode, setdataFixCode] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [Fixcode1, setFixcode1] = useState("");
  const [open, setOpen] = useState(false);
  const [UserEmp, setUserEmp] = useState("");
  const [Factory, setFac] = useState("");
  const [Cost_sert, setCost_sert] = useState("");
  const [dept, setdept] = useState([]);
  const [selectdept, setselectdept] = useState("");
  const [Assetgroup, setAssetgroup] = useState([]);
  const [AssetgroupID, setAssetgroupID] = useState([]);
  const [selectAssetgroup, setselectAssetgroup] = useState("");
  const [idFac, setidFac] = useState("");
  const [cost, setcost] = useState([]);
  const [selectcost, setselectcost] = useState("");
  const [datafixgroup, setdatafixgroup] = useState("");
  const [selectedType, setselectedType] = useState("");
  const [status, setstatus] = useState([]);
  // const [Tel, setTel] = useState([]);
  // const [Remark, setRemark] = useState([]);
  //ปีที่ 2 ตัวท้าย
  const currentYear = new Date().getFullYear();
  const Year = currentYear.toString().slice(-2);
  // const Year = "23";
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOpenTable = () => {
    setTableOpen(true);
    setOpen(false);
  };
  const handleFileUpload = (event) => {
    // ทำอะไรกับไฟล์ที่ถูกเลือก
    const selectedFiles = event.target.files;
    setUploadedFiles([...uploadedFiles, ...selectedFiles]);
    console.log(selectedFiles);

    // เพิ่มโค้ดที่คุณต้องการทำต่อไป
  };
  const handleDept = (event) => {
    setselectdept(event.target.value);
  
  };
  const handleAssetGroup = async (event) => {
    let FixIdGroup = event.target.value;
    setselectAssetgroup(FixIdGroup);
  };
  const ADD = async () => {
    const Fixcode = document.getElementById("Fixcode").value;
    setFixcode1(Fixcode);

    try {
      const row = await axios.get(
        `http://localhost:5000/getfixcode?Fixcode=${Fixcode}`
      );
      const data = row.data;
      setdataFixCode(data);

      console.log(data, "FixCode: ");
    } catch (error) {
      console.error("Error requesting data:", error);
    }
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteFile = (index) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(index, 1);
    setUploadedFiles(updatedFiles);
  };
  const handleCost = async (event) => {
    let Cost_value = event.target.value;
    setselectcost(Cost_value);
    try {
      const response = await axios.get(
        `http://localhost:5000/getid_service?fac=${idFac}&fixgroub=${selectAssetgroup}`
      );
      const Fixgroup_ID = await response.data;
      console.log(Fixgroup_ID[0][0], "Fixgroup_ID::::::::");
      if (Fixgroup_ID[0][0] === "EACH CC") {
        try {
          const response = await axios.get(
            `http://localhost:5000/getfind_service?asset_find=${Cost_value}`
          );
          const Find_Service = await response.data;
          setdatafixgroup(Find_Service[0][0]);
          console.log(Find_Service, "Find_Service//////////////");
        } catch (error) {
          console.error("Error during login:", error);
        }
      } else {
        setdatafixgroup(Fixgroup_ID[0][0]);
        console.log(Fixgroup_ID[0][0], "Find_Service//////////////");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const CostforAsset = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/getcost`);
      const CostData = await response.data;
      setcost(CostData);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const Status = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/getstatus`);
      const dataStatus = await response.data;
      setstatus(dataStatus.flat());
     console.log(dataStatus.flat(),"dataStatus::::::::")
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const formattedDate = `${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${currentDate
    .getDate()
    .toString()
    .padStart(2, "0")}/${currentDate.getFullYear()}`;
    
  const handleRadio = (event) => {
      setselectedType(event.target.value);
    };
  useEffect(() => {
    //หารหัส RequestBy
    const BY = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/getby?By=${UserLogin}`
        );
        const dataReby = await response.data;
        let DataBY = dataReby.flat(); // การแก้ จาก array 2 มิติ เหลือ 1 มิติ .flat()
        setUserEmp(DataBY);
      } catch (error) {
        console.error("Error during login:", error);
      }
    };
    //หา Factory และเอา FAC ID ไปหา Dept
    const Factory_UserLogin = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/getfac_insert?Fac_Login=${UserLogin}`
        );

        const dataFac_insert = await response.data;

        let Fac = dataFac_insert.flat();
        let idFactory = Fac[1];
        setFac(Fac);
        setidFac(idFactory);

        if (idFactory.length >= 0) {
          try {
            console.log("DEpt;;")
            const response = await axios.get(
              `http://localhost:5000/getdept?idFactory=${idFactory}`
            );
            const DeptData = await response.data;
            setdept(DeptData);
          } catch (error) {
            console.error("Error during login:", error);
          }
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    };
    //หาcost center โดยส่ง UserLogin
    const Costcenter = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/getcost_insert?Cost_Login=${UserLogin}`
        );

        const dataCos_insert = await response.data;

        let Cost = dataCos_insert.flat();
        // การแก้ จาก array 2 มิติ เหลือ 1 มิติ .flat()
        setCost_sert(Cost);
      } catch (error) {
        console.error("Error during login:", error);
      }
    };

    const AssetGroup = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/getfix_group?Asset_group=${idFac}`
        );
        let dataFix_group_Text = [];
        let dataFix_group_Value = [];
        for (let i = 0; i < response.data.length; i++) {
          // console.log(response.data[i][1], "dataFix_group:");
          dataFix_group_Text.push(response.data[i][1]);

          dataFix_group_Value.push(response.data[i][0]);
        }
        // const ad = await response.data;
        // console.log("for", ad);
        setAssetgroup(dataFix_group_Text);
        setAssetgroupID(dataFix_group_Value);
      } catch (error) {
        console.error("Error during login:", error);
      }
    };

    BY();

    Factory_UserLogin();
    Costcenter();
    if (idFac.length > 0) {
      AssetGroup();
    }
    CostforAsset();
  }, [idFac]);
  

  // const [tel1, settel1] = useState('')
  // const onChangeLocation = (event) => {
  //   settel1(event.target.value)
  //  }

  const Tranfer_ins = async (running_no) => {
    // const Tel = document.getElementById("Tel").value;
    const Remark = document.getElementById("Remark").value;
    
    console.log(Tel,"Tel")
    console.log(Remark,"Remark")
    // try {
    //   const response = await axios.post(
    //    `http://localhost:5000/get_gen_famno?tranfer=${running_no}&reqby=${UserLogin}&reTel=${Tel}&fac=${idFac}&cc=${selectcost}&dept=${selectdept}&type=${selectedType}&assetgroup=${selectAssetgroup}&assetcc=${selectcost}&status=${status[0]}&remark=${Remark}`
    //   );
      

    // } catch (error) {
    //   console.error("Error during login:", error);
    // }
  };

  const Gen_No = async () => {
    const Run = Factory[0] + "-" + datafixgroup + "-" + Year;
    // console.log(Run,"lllllllllllllllllllllllllllll")
    try {
      const response = await axios.get(
        `http://localhost:5000/getfamno?famno=${Run}`
      );
      const get_runno = await response.data;

      if (get_runno[0][0] != null) {
       let FamNo_old = parseInt(get_runno[0][0].slice(-4), 10);
        // let FamNo_old = parseInt("0322");
        let paddedFamNo_old = (FamNo_old+1).toString().padStart(4, '0');
        console.log(Run+"-"+paddedFamNo_old);
        Tranfer_ins(paddedFamNo_old)
        Status();

      } else {
        let FamNo_new = Run + "-0001";
        console.log(FamNo_new,"FamNo_new")
        Tranfer_ins(FamNo_new)
        Status();
      }

      // setcost(CostData);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  //หา EmpID
  // const EmployeeId = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:5000/getemp?empID=${Emp}`
  //     );
  //     const dataEmp = await response.data;
  //     let DataEmp = dataEmp.flat(); // การแก้ จาก array 2 มิติ เหลือ 1 มิติ .flat()
  //     setUserEmp(DataEmp);

  //     console.log(test, "test");
  //   } catch (error) {
  //     console.error("Error during login:", error);
  //   }
  // };

  const Tab1 = () => {
    return (
      <div className="Box-Insert">
        <div className="Insert">
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
              <Box
                sx={{ flexGrow: 1, marginBottom: "20px", marginTop: "20px" }}
              >
                {/* FAM Np and Request */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      FAM No :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{ width: "100%" }}
                      disabled
                    ></TextField>
                  </Grid>
                  <Grid xs={2}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Request Date :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      value={formattedDate}
                      size="small"
                      style={{ width: "100%" }}
                      disabled
                    ></TextField>
                  </Grid>
                </Grid>
                {/* Request BY(Owner) */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Request By (Owner) :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      disabled
                      style={{ width: "100%" }}
                      value={UserEmp[4]}
                    ></TextField>
                  </Grid>
                  <Grid xs={2}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Tel :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      id="Tel"
                      size="small"
                      style={{ width: "100%" }}
                      // onChange={onChangeLocation}
                      // value={tel1}
                    ></TextField>
                  </Grid>
                </Grid>
                {/* Factory and Cost center */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Factory :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{ width: "100%" }}
                      value={Factory[0]}
                      disabled
                    ></TextField>
                  </Grid>
                  <Grid xs={2}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Cost Center :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{ width: "100%" }}
                      value={Cost_sert[0]}
                      disabled
                    ></TextField>
                    {/* <FormControl sx={{ width: "220px", marginRight: "5px" }}>
                      <Autocomplete
                        id="Cost"
                        size="small"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "4px",
                          width: "200px",
                          // marginTop: "10px",
                          // marginRight: "5px",
                        }}
                        options={cost}
                        getOptionLabel={(item) => item[0]}
                        value={
                          cost.find((item) => item[0] === selectcost) || null
                        }
                        onChange={(e, newValue) => {
                          setselectcost(newValue ? newValue[0] : "");
                        }}
                        renderInput={(params) => (
                          <TextField {...params} label="Cost" />
                        )}
                      />
                    </FormControl> */}
                  </Grid>
                </Grid>
                {/* Dept and Status */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Dept :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
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
                      >
                        {dept.map((option) => (
                          <MenuItem value={option[0]}>{option[0]}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                {/* Radio Button Type  */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}>
                    <Typography style={{ textAlign: "right" }}>
                      Request Type :
                    </Typography>
                  </Grid>
                  <Grid>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      value={selectedType}
                      onChange={handleRadio}

                    >
                      <FormControlLabel
                        value="Transfer"
                        control={<Radio />}
                        label="Transfer"
                        className="Radio"
                      />
                      <FormControlLabel
                        value="Scrap"
                        control={<Radio />}
                        label="Scrap"
                        className="Radio"
                      />

                      <FormControlLabel
                        value="Sales"
                        control={<Radio />}
                        label="Sales"
                        className="Radio"
                      />
                      <FormControlLabel
                        value="Lost"
                        control={<Radio />}
                        label="Lost"
                        className="Radio"
                      />
                      <FormControlLabel
                        value="Write off"
                        control={<Radio />}
                        label="Write off"
                        className="Radio"
                      />
                      <FormControlLabel
                        value="Landing to Third party"
                        control={<Radio />}
                        label="Landing to Third party"
                        className="Radio"
                      />
                      <FormControlLabel
                        value="Donation"
                        control={<Radio />}
                        label="Donation"
                        className="Radio"
                      />
                    </RadioGroup>
                  </Grid>
                </Grid>
                {/* FixAsset group / AssCost */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Fix Asset Group :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <FormControl fullWidth>
                      <InputLabel size="small" id="demo-simple-select-label">
                        Select
                      </InputLabel>
                      <Select
                        label="Select"
                        value={selectAssetgroup}
                        onChange={handleAssetGroup}
                        size="small"
                      >
                        {Assetgroup.map((option, index) => (
                          <MenuItem value={AssetgroupID[index]}>
                            {Assetgroup[index]}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid xs={2}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Asset Cost Center :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
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
                          <MenuItem value={option[0]}>{option[0]}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                {/* Request status */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}></Grid>
                  <Grid xs={3}></Grid>
                  <Grid xs={2}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Request status :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{ width: "100%" }} value={status[1]} disabled
                    ></TextField>
                  </Grid>
                </Grid>
                {/* Remark */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Remark :
                    </Typography>
                  </Grid>
                  <Grid xs={8}>
                    <TextField
                      id="Remark"
                      size="small"
                      style={{ width: "100%" }}
                    ></TextField>
                  </Grid>
                </Grid>

                <div className="Button_forGenNo">
                  <Button
                    style={{ marginLeft: "5px", backgroundColor: "green" }}
                    variant="contained"
                    onClick={Gen_No}
                  >
                    Gen FAM No.
                  </Button>
                  <Button
                    style={{ marginLeft: "5px", backgroundColor: "gray" }}
                    variant="contained"
                  >
                    Reset
                  </Button>
                </div>
              </Box>
            </Card>
          </Card>
        </div>
        <div className="Fixed-Asset-Code">
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
                Tranfer Detail
              </Typography>
              <Grid
                container
                spacing={3}
                style={{
                  width: "100%",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                <Grid xs={1.6}>
                  <Typography
                    style={{
                      textAlign: "right",
                      marginTop: "7px",
                    }}
                  >
                    Fixed Assets Code :
                  </Typography>
                </Grid>{" "}
                {/* ADD Modal */}
                <Grid xs={10}>
                  <TextField id="Fixcode" size="small"></TextField> &nbsp;&nbsp;
                  <Button
                    style={{ marginTop: "3px" }}
                    type="primary"
                    variant="contained"
                    onClick={ADD}
                  >
                    {" "}
                    ADD
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    maxWidth="lg"
                    fullWidth
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div className="Modal">
                      {" "}
                      <DialogTitle>Fixed Asset Code : {Fixcode1}</DialogTitle>
                      <TableContainer component={Paper}>
                        <Table className="Modal-Table">
                          <TableHead>
                            <TableRow>
                              <TableCell>
                                <Checkbox />
                              </TableCell>
                              <TableCell>Comp.</TableCell>
                              <TableCell>Cc.</TableCell>
                              <TableCell>Fixed Asset Name</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {dataFixcode.map((item) => (
                              <TableRow
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell>
                                  <Checkbox />
                                </TableCell>{" "}
                                <TableCell>{item[1]}</TableCell>
                                <TableCell>{item[2]}</TableCell>
                                <TableCell>{item[3]}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <DialogActions style={{ marginTop: "20px" }}>
                        <Button
                          variant="contained"
                          style={{ backgroundColor: "green" }}
                          onClick={handleOpenTable}
                        >
                          ADD
                        </Button>
                        <Button
                          variant="contained"
                          style={{ backgroundColor: "gray" }}
                          onClick={handleClose}
                        >
                          Close
                        </Button>
                      </DialogActions>
                    </div>
                  </Dialog>
                  {isTableOpen && (
                    <div style={{ marginTop: "20px" }}>
                      <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                          <TableHead
                            sx={{
                              backgroundColor: "#22FF5E",
                              fontSize: "10px",
                            }}
                          >
                            <TableRow>
                              <TableCell>
                                <Checkbox />
                              </TableCell>
                              <TableCell>No.</TableCell>
                              <TableCell>Fixed Asset Code</TableCell>
                              <TableCell>Comp.</TableCell>
                              <TableCell>CC.</TableCell>
                              <TableCell>Fixed Assets Name</TableCell>
                              <TableCell>BOI Project</TableCell>
                              <TableCell>Qty</TableCell>
                              <TableCell>Invoice No.</TableCell>
                              <TableCell>Acquisition Cost(Baht)</TableCell>
                              <TableCell>Book Value(Baht)</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell>
                                <Checkbox />
                              </TableCell>{" "}
                              <TableCell>1</TableCell>
                              <TableCell>Mc0</TableCell>
                              <TableCell>1</TableCell>
                              <TableCell>R420</TableCell>
                              <TableCell>
                                WASHING DRYER MACHINE CODE W-41-51{" "}
                              </TableCell>
                              <TableCell>NAPK</TableCell>
                              <TableCell>1</TableCell>
                              <TableCell>3562820-1</TableCell>
                              <TableCell>28900000</TableCell>
                              <TableCell>1.0</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                  )}{" "}
                </Grid>
              </Grid>
            </Card>
          </Card>
        </div>
        <div className="UploadFile">
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
                Tranfer Detail
              </Typography>
              <Grid
                container
                spacing={3}
                style={{
                  width: "100%",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                <Grid xs={1.6}>
                  <Typography
                    style={{
                      width: "100%",
                      textAlign: "right",
                      marginTop: "7px",
                    }}
                  >
                    Uplpad File :
                  </Typography>
                </Grid>
                <Grid xs={5}>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    style={{ display: "none" }}
                    id="fileInput"
                  />
                  <label htmlFor="fileInput">
                    <Button
                      variant="contained"
                      size="small"
                      style={{ marginTop: "3px" }}
                      component="span"
                    >
                      Upload
                    </Button>
                  </label>
                  {uploadedFiles.length > 0 && (
                    <div>
                      <ul>
                        {uploadedFiles.map((file, index) => (
                          <li key={index}>
                            {file.name}
                            <ClearIcon
                              onClick={() => handleDeleteFile(index)}
                              style={{
                                fontSize: "16",
                                marginTop: "15px",
                                marginLeft: "10px",
                                color: "red",
                              }}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* <Upload {...props}>
                  <Button style={{width:'200px'}}
                  icon={<UploadOutlined />}>Choose File</Button>
                  &nbsp;&nbsp;
                  <Button type="primary"> Upload</Button>
                </Upload> */}
                </Grid>
              </Grid>
            </Card>
          </Card>
        </div>
      </div>
    );
  };

  const Tab2 = () => {
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
                        />
                      </FormControl>
                    </td>
                    <td className="Style5">
                      <FormControl></FormControl>
                    </td>
                    <td className="Style7">From BOL Project :</td>
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
                    <td className="Style4">Tranfer to Factory :</td>
                    <td>
                      <FormControl className="Style1">
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={age}
                          onChange={handleChange}
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
                      <FormControl></FormControl>
                    </td>
                    <td className="Style7">Tranfer to CC :</td>
                    <td className="Style6">
                      <FormControl className="Style1">
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={age}
                          onChange={handleChange}
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
                          value={age}
                          onChange={handleChange}
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
                      <FormControl></FormControl>
                    </td>
                    <td className="Style7">Tel :</td>
                    <td className="Style6">
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          
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
                          value={age}
                          onChange={handleChange}
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
                          value={age}
                          onChange={handleChange}
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
                          value={age}
                          onChange={handleChange}
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
                          value={age}
                          onChange={handleChange}
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
                          value={age}
                          onChange={handleChange}
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
                          value={age}
                          onChange={handleChange}
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
        </div>

        <div>
          <table>
            <tr>
              <td></td>
            </tr>
          </table>
        </div>
      </>
    );
  };

  const Tab3 = () => {
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
                  border: 1,
                  borderColor: "rgba(64,131,65, 1.5)",
                  boxShadow: "0px 4px 8px rgba(64,131,65, 0.4)",
                  justifyContent: "center",
                }}
              >
                ...
              </Typography>
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
                ...
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
                          value={age}
                          onChange={handleChange}
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
        </div>
      </>
    );
  };
  return (
    <div>
      <div style={{ marginTop: "100px" }}>
        <Header />
      </div>

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Tab1 />
          </TabPanel>
          <TabPanel value="2">
            <Tab2 />
          </TabPanel>
          <TabPanel value="3">
            <Tab3 />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
