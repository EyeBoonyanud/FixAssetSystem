import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import {
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Card,
  Button,
  Dialog,
  DialogTitle,
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
} from "@mui/material";
import axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";
import ClearIcon from "@mui/icons-material/Clear";
import "../Page/Style.css";

function ForRequest() {
  const UserLogin = localStorage.getItem("UserLogin"); // UserLogin ที่เอาค่าของ Userloin ไปหา request by

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
  localStorage.setItem("datafixgroup",datafixgroup)
  const [data_for_sevice , setdata_for_sevice] = useState("");
  localStorage.setItem("data_for_sevice",data_for_sevice)
  const [selectedType, setselectedType] = useState("");
  const [status, setstatus] = useState([]);
  const [Tel, setTel] = useState("");
  const [FAM_run, setFAM_run] = useState("");
  const [checkGenNo, setcheckGenNo] = useState("visible");
  const [checkReset, setcheckReset] = useState("visible");
  const [btnSave, setbtnSave] = useState("hidden");
  const [visibityDetails , setvisibityDetails] = useState("hidden");
  const [visibityFile , setvisibityFile] = useState("hidden");
  const [read_fix_group, setread_fix_group] = useState(false);
  const [read_fix_cost, setread_fix_cost] = useState(false);
  const currentYear = new Date().getFullYear();
  const Year = currentYear.toString().slice(-2);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [datatable, setdatatable] = useState([]);
   //สำหรับค่าที่ถูกเก็บตอนที่ได้จากModal
  const updateSelectedData = (selectedItems) => {
    const newData = dataFixcode.filter((item, index) => selectedItems[index]);
    //console.log(newData, "....................");
    setSelectedData(newData);
  };
  const handleCheckboxChange = (index) => {
    const newSelectedItems = [...selectedItems];
    newSelectedItems[index] = !newSelectedItems[index];
    setSelectedItems(newSelectedItems);
    updateSelectedData(newSelectedItems);
  };
  const handleCheckboxAllChange = () => {
    const newSelectedAll = !selectAll;
    setSelectAll(newSelectedAll);
    setSelectedItems(newSelectedAll ? dataFixcode.map(() => true) : []);
    updateSelectedData(newSelectedAll ? dataFixcode.map(() => true) : []);
  };
  const handleAdd = () => {
    //console.log(selectedItems, "selectedItems");
    const newDataTable = [...datatable, ...selectedData];
    setdatatable(newDataTable);
    setSelectedItems([]);
    setTableOpen(true);
    setOpen(false);
    setbtnSave("visible");
  };
  const handleFileUpload = (event) => {
    // ทำอะไรกับไฟล์ที่ถูกเลือก
    const selectedFiles = event.target.files;
    setUploadedFiles([...uploadedFiles, ...selectedFiles]);
    //console.log(selectedFiles);

    // เพิ่มโค้ดที่คุณต้องการทำต่อไป
  };
  const handleAssetGroup = async (event) => {
    let FixIdGroup = event.target.value;
    setselectAssetgroup(FixIdGroup);
    localStorage.setItem("FixAssetGroup",FixIdGroup)
    console.log("FixAssetGroup",FixIdGroup)
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
     //console.log(data);

      //console.log(data, "FixCode: ");
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
      //console.log(Fixgroup_ID[0][0], "Fixgroup_ID::::::::");
      if (Fixgroup_ID[0][0] === "EACH CC") {
        try {
          const response = await axios.get(
            `http://localhost:5000/getfind_service?asset_find=${Cost_value}`
          );
          const Find_Service = await response.data;
          console.log(response.data,"response.data")
          setdatafixgroup(Find_Service[0][0]);
          setdata_for_sevice(Find_Service[0][1])         
          console.log(Find_Service[0][1], "Find_Service");
        } catch (error) {
          console.error("Error during login:", error);
        }
      } else {
        console.log(response.data,"response.data----------")
        setdatafixgroup(Fixgroup_ID[0][0]);
        setdata_for_sevice(Fixgroup_ID[0][1])   
        console.log(Fixgroup_ID[0][1], "Find_Service//////////////");
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
  const Reset = async () => {
    document.getElementById("Txt_Famno").value = "";
    document.getElementById("Tel").value = "";
    document.getElementById("Remark").value = "";
    setselectdept("");
    setselectedType("");
    setselectAssetgroup("");
    setselectcost("");
    setstatus("");

    // document.getElementById("Txt_Famno").value=""
    // document.getElementById("Txt_Famno").value=""
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
        localStorage.setItem("Factory", idFactory);

        if (idFactory.length >= 0) {
          try {
            //console.log("DEpt;;");
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
        localStorage.setItem("CC_for_request", Cost);
        
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
    //console.log('selectedItems:', selectedItems);
    //console.log('selectedAll:', selectAll);
    //console.log('dataFixcode:', dataFixcode);
  }, [idFac, selectedItems, selectAll, dataFixcode]);

  const Tranfer_ins = async (running_no, StatusId) => {
    setFAM_run(running_no);
    localStorage.setItem("FAM_run", running_no);
    const Tel = document.getElementById("Tel").value;
    const Remark = document.getElementById("Remark").value;
    try {
      const response = await axios.post(
        `http://localhost:5000/get_gen_famno?tranfer=${running_no}&reqby=${UserLogin}&reTel=${Tel}&fac=${idFac}&cc=${selectcost}&dept=${selectdept}&type=${selectedType}&assetgroup=${selectAssetgroup}&assetcc=${selectcost}&status=${StatusId}&remark=${Remark}`
      );
      document.getElementById("Txt_Famno").value = running_no;
      setcheckGenNo("hidden");
      setcheckReset("hidden");
      setvisibityDetails("visible")
      setread_fix_group(true);
      setread_fix_cost(true);
    } catch (error) {
      console.error("Error during login:", error);
    }

    try {
      const response = await axios.post(
      `http://localhost:5000/get_asset_transfer?tranfer=${running_no}&reqby=${UserLogin}&assetcc=${selectcost}`
      );
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const Gen_No = async () => {
    let StatusId = "";

    if (selectAssetgroup.length > 0 && selectcost.length > 0) {
      try {
        const response = await axios.get(`http://localhost:5000/getstatus`);
        const dataStatus = await response.data;
        setstatus(dataStatus.flat());
        StatusId = dataStatus.flat();
        //console.log(dataStatus.flat(), "dataStatus::::::::");
      } catch (error) {
        console.error("Error during login:", error);
      }

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
          let paddedFamNo_old = (FamNo_old + 1).toString().padStart(4, "0");
          // console.log("//////1");

          Tranfer_ins(Run + "-" + paddedFamNo_old, StatusId[0]);
        } else {
          let FamNo_new = Run + "-0001";
          //console.log(FamNo_new, "FamNo_new");
          Tranfer_ins(FamNo_new, StatusId[0]);
        }

        // setcost(CostData);
      } catch (error) {
        console.error("Error during login:", error);
      }
    } else {
      if (selectAssetgroup.length === 0 && selectcost.length === 0) {
        alert("กรุณาเลือก Fix Asset Group และ Fix Asset Code");
      } else if (selectAssetgroup.length === 0) {
        alert("กรุณาเลือก Fix Asset Group");
      } else if (selectcost.length === 0) {
        alert("กรุณาเลือก Fix Asset Code");
      } else {
        // กรณีที่ทั้งคู่ไม่ว่าง
        // ตรงนี้คุณสามารถเพิ่มโค้ดที่ต้องการให้ทำเมื่อทั้งคู่ไม่ว่าง
        // เช่น เรียกฟังก์ชันหรือทำการส่งข้อมูลไปที่เซิร์ฟเวอร์
      }
    }
  };
  const Insert_Fam_detail = async () => {
    
    for (let i = 0; i < datatable.length; i++) {
     
      try {
        const response = await axios.post(
          `http://localhost:5000/ins_REQ_DETAIL?famno=${FAM_run}&assetcode=${datatable[i][0]}&assetname=${datatable[i][3]}&comp=${datatable[i][1]}&cc=${datatable[i][2]}&boi=${datatable[i][5]}&qty=${datatable[i][6]}&inv=${datatable[i][7]}&cost=${datatable[i][9]}&val=${datatable[i][10]}&by=${UserLogin}`
        );
        setvisibityFile("visible")
      } catch (error) {
        console.error("Error during login:", error);
      }
      try {
        const response = await axios.post(
          `http://localhost:5000/ins_from_Boi?running_no=${FAM_run}&from_boi=${datatable[i][5]}`
        );
        setvisibityFile("visible")
      } catch (error) {
        console.error("Error during login:", error);
      }
    }
  };

  const Next = async (value) => {
    Insert_Fam_detail();
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
              ForRequeater
            </Typography>
            <Box sx={{ flexGrow: 1, marginBottom: "20px", marginTop: "20px" }}>
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
                    id="Txt_Famno"
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
                    value={Tel}
                    onChange={(e) => setTel(e.target.value)}
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
                </Grid>
              </Grid>
              {/* Dept  */}
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
                      onChange={(e) => setselectdept(e.target.value)}
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
                      value="GP01001"
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
                      disabled={read_fix_group}
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
                      disabled={read_fix_cost}
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
                    style={{ width: "100%" }}
                    value={status[1]}
                    disabled
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
                  style={{
                    marginLeft: "5px",
                    backgroundColor: "green",
                    visibility: checkGenNo,
                  }}
                  variant="contained"
                  onClick={Gen_No}
                >
                  Gen FAM No.
                </Button>
                <Button
                  style={{
                    marginLeft: "5px",
                    backgroundColor: "gray",
                    visibility: checkReset,
                  }}
                  variant="contained"
                  onClick={Reset}
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
              marginTop: 4,  visibility: visibityDetails,
            }}
            className="Style1"
          >
            <Typography
              sx={{
                position: "absolute",
                backgroundColor: "#fff",
                marginTop: "-0.5%",
                marginRight: "85%",
                width: "5%",
                display: "flex",

                justifyContent: "center",
              }}
            >
              {" "}
              Details
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
                              <Checkbox
                                checked={selectAll}
                                onChange={handleCheckboxAllChange}
                              />
                            </TableCell>
                            <TableCell>Comp.</TableCell>
                            <TableCell>Cc.</TableCell>
                            <TableCell>Fixed Asset Name</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {dataFixcode.map((item, index) => (
                            <TableRow
                              key={index}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell>
                                <Checkbox
                                  checked={selectedItems[index] || false}
                                  onChange={() => handleCheckboxChange(index)}
                                />
                              </TableCell>
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
                        style={{
                          backgroundColor: "green",
                        }}
                        onClick={handleAdd}
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
                          {datatable.map((item, index) => (
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
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{item[0]}</TableCell>
                              <TableCell>{item[1]}</TableCell>
                              <TableCell>{item[2]}</TableCell>
                              <TableCell>{item[3]}</TableCell>
                              <TableCell>{item[5]} </TableCell>
                              <TableCell>{item[6]}</TableCell>
                              <TableCell>{item[7]}</TableCell>
                              <TableCell>{item[9]}</TableCell>
                              <TableCell>{item[10]}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                )}{" "}
              </Grid>
              <div style={{ width: "85%", textAlign: "right" }}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "",
                  visibility: btnSave,}}
                  onClick={() => Next("1")}
                >
                  SAVE Details
                </Button>
              </div>
            </Grid>
          </Card>
        </Card>
      </div>
      <div className="UploadFile">
        <Card className="Style100">
          <Card
            sx={{
              visibility: visibityFile,
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
              File from request
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
}

export default ForRequest;
