import React, { useState, useEffect, useRef } from "react";
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
import {
  DeleteOutlined,
  FileTextOutlined,
  UploadOutlined,
  FileExcelOutlined,
  FilePdfOutlined,
  FileWordOutlined,
  FileUnknownOutlined,
  CloudUploadOutlined,
} from "@ant-design/icons";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Header from "../Page/Hearder";

function ForRequest() {
  const LocalUserLogin = localStorage.getItem("UserLogin");
  const [dataUserLogin, setdataUserLogin] = useState("");
  const [dataUserLogin1, setdataUserLogin1] = useState("");
  const [Request_date ,setRequest_date]  = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [Tel, setTel] = useState("");
  const [Tel1, setTel1] = useState("");
  const [Factory, setFactory] = useState("");
  const [Factory1, setFactory1] = useState("");
  const [Costcenter, setCostcenter] = useState("");
  const [Costcenter1, setCostcenter1] = useState("");
  const [Dept, setDept] = useState([]);
  const [selectDept1, setselectDept1] = useState("");
  const [FixAssetgroup, setFixAssetgroup] = useState([]);
  const [selectFixAssetgroup1, setselectFixAssetgroup1] = useState("");
  const [FixAsset_cost, setFixAsset_cost] = useState([]);
  const [selectFixAsset_cost1, setselectFixAsset_cost1] = useState("");
  const [Request_type1 , setRequest_type1] = useState("");
  const [Request_sts ,setRequest_sts] = useState("");
  const [Request_sts1 ,setRequest_sts1] = useState("");
  const [Remark ,setRemark] = useState("");
  const currentYear = new Date().getFullYear();
  const Year = currentYear.toString().slice(-2);
  const [Gen_Fam_No ,setGen_Fam_No] = useState("");
  const [dataFix_Asset_Cost , setdataFix_Asset_Cost]  = useState([]);  //Servicept
  const for_req = localStorage.getItem("for_req");

  useEffect(() => {
    request_by();
    factory();
    costcenter();
    CostforAsset();
    keep();
    
  }, []);
  const keep = () => {
    if(for_req!=null){
      //setRequest_date()
    }else{
      setRequest_date(formattedDate)
    }

  };
  const formattedDate = `${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${currentDate
    .getDate()
    .toString()
    .padStart(2, "0")}/${currentDate.getFullYear()}`;
  // UseEffect
  //Request_By
  const request_by = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/getby?By=${LocalUserLogin}`
      );
      const data = await response.data;
      const data_insert = data.flat();
      setdataUserLogin(data_insert);
      if (for_req != null) {
        setdataUserLogin1(for_req);
      } else {
        console.log("/////////");
        setdataUserLogin1(data_insert[4]);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  //Request_Factory
  const factory = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/getfac_insert?Fac_Login=${LocalUserLogin}`
      );
      const data = await response.data;
      const data_Fac = data.flat();
      setFactory(data_Fac);
      console.log(for_req);
      if (for_req != null) {
        setFactory1(for_req);
      } else {
        console.log("/////////");
        setFactory1(data_Fac[0]);
      }
      if (data_Fac.length >= 0) {
        try {
          const response = await axios.get(
            `http://localhost:5000/getdept?idFactory=${data_Fac[1]}`
          );

          const data = await response.data;
          const data_dept = data.flat();
          setDept(data_dept);
          console.log(data_dept, "data_dept");
        } catch (error) {
          console.error("Error during login:", error);
        }
      }
      fixasset_group(data_Fac[1]);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  //Cost Center
  const costcenter = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/getcost_insert?Cost_Login=${LocalUserLogin}`
      );
      const data = await response.data;
      const data_insert = data.flat();
      console.log(data_insert, "data_insert");
      setCostcenter(data_insert);
      console.log(for_req);
      if (for_req != null) {
        setCostcenter1(for_req);
      } else {
        console.log("/////////");
        setCostcenter1(data_insert[0]);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  //AssetGroup
  const fixasset_group = async (datafac) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/getfix_group?Asset_group=${datafac}`
      );
      const data = await response.data;
      console.log(data, "data_fixgroup");
      setFixAssetgroup(data);
      if (for_req != null) {
        setselectFixAssetgroup1(for_req);
      } else {
        console.log("/////////");
        setselectFixAssetgroup1(data);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  //AssetCost
  const CostforAsset = async () => {
    try {
      const response = await axios.get
      (`http://localhost:5000/getcost`);
      const CostData = await response.data;
      setFixAsset_cost(CostData);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  // HandleFixAssetCost
  const handleCost = async (event) => {
    let Cost_value = event.target.value;
    setselectFixAsset_cost1(Cost_value);
    try {
      const response = await axios.get(
        `http://localhost:5000/getid_service?fac=${Factory[1]}&fixgroub=${selectFixAssetgroup1}`
      );
      const data = await response.data;
      if (data[0][0] === "EACH CC") {
        try {
          const response = await axios.get(
            `http://localhost:5000/getfind_service?asset_find=${Cost_value}`
          );
          const data_for_servicedept = await response.data;
          setdataFix_Asset_Cost(data_for_servicedept);
          console.log(data_for_servicedept,"ServiceDept>>>>>>>>>>>")
        } catch (error) {
          console.error("Error during login:", error);
        }
      } else {
        setdataFix_Asset_Cost(data);
        console.log(data,"ServiceDept---------------------")
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  //Gen Fam No 
  const Gen_No = async () => {
   // let StatusId = ""; //
    let DataStatus =""; //
    if (selectFixAssetgroup1.length > 0 && selectFixAsset_cost1.length > 0) {
      try {
        const response = await axios.get(`http://localhost:5000/getstatus`);
        const dataStatus = await response.data;
        const data = dataStatus.flat();
        setRequest_sts1(data[1]);
        DataStatus=data
       
       // StatusId = dataStatus.flat();
      } catch (error) {
        console.error("Error during login:", error);
      }

      const Run = Factory[0] + "-" + dataFix_Asset_Cost[0][0] + "-" + Year;
      try {
        const response = await axios.get(
          `http://localhost:5000/getfamno?famno=${Run}`
        );
        const get_runno = await response.data;

        if (get_runno[0][0] != null) {
          let FamNo_old = parseInt(get_runno[0][0].slice(-4), 10);
          let paddedFamNo_old = (FamNo_old + 1).toString().padStart(4, "0");
         
          Tranfer_ins(Run + "-" + paddedFamNo_old, DataStatus);
        } else {
          let FamNo_new = Run + "-0001";
        
          Tranfer_ins(FamNo_new,DataStatus);
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    } else {
      if (selectFixAssetgroup1.length === 0 && selectFixAsset_cost1.length === 0) {
        alert("กรุณาเลือก Fix Asset Group และ Fix Asset Code");
      } else if (FixAssetgroup.length === 0) {
        alert("กรุณาเลือก Fix Asset Group");
      } else if (FixAsset_cost.length === 0) {
        alert("กรุณาเลือก Fix Asset Code");
      } 
    }
  };

  // Insert For Request
  const Tranfer_ins = async (running_no ,DataStatus) => {
    setGen_Fam_No(running_no);
    const setData_ForRequester = [
      running_no,
      LocalUserLogin,
      Tel1,
      Factory[1],
      Costcenter1,
      selectDept1,
      Request_type1,
      selectFixAssetgroup1,
      selectFixAsset_cost1,
      dataFix_Asset_Cost[0][2],
      DataStatus[0],
      Remark
  
    ];
console.log(setData_ForRequester)
    // const sentdata = JSON.stringify(setData_ForRequester);
    // localStorage.setItem("ForRequester", sentdata);
    try {
      const response = await axios
        .post(
         // `http://localhost:5000/get_gen_famno?tranfer=${running_no}&reqby=${LocalUserLogin}&reTel=${Tel1}&fac=${Factory[1]}&cc=${Costcenter1}&dept=${selectDept1}&type=${Request_type1}&assetgroup=${selectFixAssetgroup1}&assetcc=${selectFixAsset_cost1}&assetname=${dataFix_Asset_Cost[2]}&status=${Request_sts1}&remark=${Remark}`
        );
        const data = await response.data
        console.log(data,"data")
      setcheckGenNo("hidden");
      setcheckReset("hidden");
      setvisibityDetails("visible");
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
  




  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <Header />
      </div>
      <div className="Box-Insert">
        <div className="Insert">
          <Card className="Style100">
            <Card
              sx={{
                borderRadius: "8px",
                border: 2,
                borderColor: "#88AB8E",
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
                      id="Txt_Date"
                      size="small"
                      style={{ width: "100%" }}
                      value={Request_date}
                      onChange={(e)=>setRequest_date(e.target.value)}
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
                      id="Txt_user"
                      value={dataUserLogin1}
                      onChange={(e) => setdataUserLogin1(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid xs={2}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Tel :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{ width: "100%" }}
                      id="Txt_Tel"
                      value={Tel1}
                      onChange={(e) => setTel1(e.target.value)}
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
                      value={Factory1}
                      onChange={(e) => setFactory1(e.target.value)}
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
                      value={Costcenter1}
                      onChange={(e) => setCostcenter1(e.target.value)}
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
                        id="factorycbt"
                        label="Select"
                        size="small"
                        value={selectDept1}
                        onChange={(e) => setselectDept1(e.target.value)}
                      >
                        {/* <MenuItem value="test">test</MenuItem> */}
                        {Dept.map((option) => (
                          <MenuItem value={option}>{option}</MenuItem>
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
                      id="Radio_ReqType"
                      value={Request_type1}
                      onChange={(e) => setRequest_type1(e.target.value)}
                    >
                      <FormControlLabel
                        value="GP01001"
                        control={<Radio />}
                        label="Transfer"
                        className="Radio"
                      />
                      <FormControlLabel
                        value="GP01002"
                        control={<Radio />}
                        label="Scrap"
                        className="Radio"
                      />

                      <FormControlLabel
                        value="GP01003"
                        control={<Radio />}
                        label="Sales"
                        className="Radio"
                      />
                      <FormControlLabel
                        value="GP01004"
                        control={<Radio />}
                        label="Lost"
                        className="Radio"
                      />
                      <FormControlLabel
                        value="GP01005"
                        control={<Radio />}
                        label="Write off"
                        className="Radio"
                      />
                      <FormControlLabel
                        value="GP01006"
                        control={<Radio />}
                        label="Landing to Third party"
                        className="Radio"
                      />
                      <FormControlLabel
                        value="GP01007"
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
                        id="SL_AssetGroup"
                        size="small"
                        value={selectFixAssetgroup1}
                        onChange={(e) =>
                          setselectFixAssetgroup1(e.target.value)
                        }
                        // disabled={read_fix_group}
                      >
                        {/* <MenuItem value="test">test</MenuItem> */}
                        {FixAssetgroup.map((option, index) => (
                          <MenuItem key={index} value={FixAssetgroup[index][0]}>
                            {FixAssetgroup[index][1]}
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
                        label="Select"
                        size="small"
                        style={{
                          width: "220px",
                        }}
                        value={selectFixAsset_cost1}
                       onChange={handleCost}
                        // disabled={read_fix_cost}
                      >
                        
                        {FixAsset_cost.map((option) => (
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
                      // value={status}
                      disabled
                      value={Request_sts1}
                      onChange={(e) =>
                        setRequest_sts1(e.target.value)}
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
                      value={Remark}
                      onChange={(e) => setRemark(e.target.value)}
                    ></TextField>
                  </Grid>
                </Grid>

                <div className="Button_forGenNo">
                  <Button
                    style={{
                      marginLeft: "5px",
                      backgroundColor: "green",
                      // visibility: checkGenNo,
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
                      // visibility: checkReset,
                    }}
                    variant="contained"
                    // onClick={Reset}
                  >
                    Reset
                  </Button>
                </div>
              </Box>
            </Card>
          </Card>
        </div>
        <div className="Fixed-Asset-Code"></div>
        <div className="UploadFile">
          <Card
            sx={{
              // visibility: visibityFile,
              borderRadius: "8px",
              border: 2,
              borderColor: "#88AB8E",

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
                width: "10%",
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
                  // onChange={handleFileUpload}
                  style={{ display: "none" }}
                  id="fileInput"
                  // ref={fileInputRef}
                />
                <label
                  htmlFor="fileInput"
                  // onDragOver={handleDragOver}
                  // onDrop={handleDrop}
                  className="bt_ChooseFile"
                >
                  <CloudUploadOutlined
                    style={{ fontSize: "60px", color: "#86B6F6" }}
                  />
                  <br />
                  <span style={{ fontWeight: "bold" }}>
                    Drop your files here
                  </span>
                  <br />
                  or
                  <br />
                  <Button size="small" component="span">
                    <b> Browse files</b>
                  </Button>
                </label>

                {/* {uploadedFiles.length > 0 && (
                <div>
                  <ul>
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="BorderFile">
                        <Typography className="Font_File">
                          <span style={{ marginLeft: "10px" }}>
                            {file.type.startsWith("image/") ? (
                              <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                className="Img_file"
                              />
                            ) : (
                              <>
                                {file.name.endsWith(".xlsx") ? (
                                  <FileExcelOutlined
                                    className="Icon_file"
                                    style={{ color: "#65B741" }}
                                  />
                                ) : file.name.endsWith(".pdf") ? (
                                  <FilePdfOutlined
                                    className="Icon_file"
                                    style={{ color: "#FF6347" }}
                                  />
                                ) : file.name.endsWith(".docx") ? (
                                  <FileWordOutlined
                                    className="Icon_file"
                                    style={{ color: "#3468C0" }}
                                  />
                                ) : file.name.endsWith(".txt") ? (
                                  <FileTextOutlined
                                    className="Icon_file"
                                    style={{ color: "#B6BBC4" }}
                                  />
                                ) : (
                                  <FileUnknownOutlined
                                    className="Icon_file"
                                    style={{ color: "#FFD3A3" }}
                                  />
                                )}
                              </>
                            )}
                            {index + 1}) {file.name}
                          </span>
                          <DeleteOutlined
                            onClick={() => handleDeleteFile(index)}
                            className="Icon_DeleteFile"
                          />
                        </Typography>
                      </div>
                    ))}
                  </ul>
                </div>
              )} */}
                <div
                  style={{
                    textAlign: "right",
                    marginTop: "5px",
                  }}
                >
                  {/* <Button variant="contained" onClick={handleSave}>
                  Save
                </Button> */}
                </div>
                <Button
                  style={{
                    marginLeft: "1000px",
                    width: "200px",
                    display: "inline-block",
                  }}
                  variant="contained"
                >
                  Next Page
                </Button>
              </Grid>
            </Grid>
          </Card>
        </div>
      </div>
    </>
  );
}

export default ForRequest;
