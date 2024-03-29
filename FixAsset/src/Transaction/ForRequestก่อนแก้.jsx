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
import Header from "../Page/Hearder"

function ForRequest() {

  const EditFam = localStorage.getItem("EDIT")
  console.log(EditFam,"EditFam")
  const navigate = useNavigate();
  const UserLogin = localStorage.getItem("UserLogin"); // UserLogin ที่เอาค่าของ Userloin ไปหา request by
  const fileInputRef = useRef();
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
  const [data_for_sevice, setdata_for_sevice] = useState("");
  const [selectedType, setselectedType] = useState("");
  const [status, setstatus] = useState([]);
  const [Txt_Remark, setTxt_Remark] = useState("");
  const [getUser ,setgetUser]= useState("");
  const [Tel, setTel] = useState("");
  const [FAM_run, setFAM_run] = useState("");
  const [checkGenNo, setcheckGenNo] = useState("visible");
  const [checkReset, setcheckReset] = useState("visible");
  const [btnSave, setbtnSave] = useState("visible");
  const [visibityDetails, setvisibityDetails] = useState("hidden");
  const [visibityFile, setvisibityFile] = useState("visible");
  const [read_fix_group, setread_fix_group] = useState(false);
  const [read_fix_cost, setread_fix_cost] = useState(false);
  const currentYear = new Date().getFullYear();
  const Year = currentYear.toString().slice(-2);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [datatable, setdatatable] = useState([]);
  // const [date_show , setdate_show] = useState("");

  // Local Set
  // localStorage.setItem("sts", status[0]);
  localStorage.setItem("data_for_sevice", data_for_sevice);
  // localStorage.setItem("data_for_sevice", selectdept);

  
  const BY = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/getby?By=${UserLogin}`
      );
      const dataReby = await response.data;
      let DataBY = dataReby.flat(); // การแก้ จาก array 2 มิติ เหลือ 1 มิติ .flat()
      setgetUser(DataBY);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
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
  const Costcenter = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/getcost_insert?Cost_Login=${UserLogin}`
      );
      const dataCos_insert = await response.data;
      let Cost = dataCos_insert.flat();
      localStorage.setItem("CC_for_request", Cost);
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
        dataFix_group_Text.push(response.data[i][1]);
        dataFix_group_Value.push(response.data[i][0]);
      }
      setAssetgroup(dataFix_group_Text);
      setAssetgroupID(dataFix_group_Value);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  //สำหรับค่าที่ถูกเก็บตอนที่ได้จากModal
  const updateSelectedData = (selectedItems) => {
    const newData = dataFixcode.filter((item, index) => selectedItems[index]);
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
    ////console.log(selectedItems, "selectedItems");
  
    const newDataTable = [...datatable, ...selectedData];
    setdatatable(newDataTable);
    console.log(newDataTable,"newDataTablenewDataTable")

    setSelectedItems([]);
    setTableOpen(true);
    setOpen(false);
    setbtnSave("visible");
  };
  const handleFileUpload = (event) => {
    //console.log("รับมา")
    const selectedFiles = event.target.files;
    setUploadedFiles([...uploadedFiles, ...selectedFiles]);
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer?.files;

    if (files) {
      //console.log("///////////////////////////////", files);
      handleFileUpload({ target: { files } });
    }
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
      console.log(data,"น้องอายยยยยยยยยยยยยยยยย");

      ////console.log(data, "FixCode: ");
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
      console.log(Fixgroup_ID, "Fixgroup_ID::::::::");
      if (Fixgroup_ID[0][0] === "EACH CC") {
        try {
          const response = await axios.get(
            `http://localhost:5000/getfind_service?asset_find=${Cost_value}`
          );
          const Find_Service = await response.data;
          //console.log(response.data,"response.data")
          setdatafixgroup(Find_Service[0][0]);
          setdata_for_sevice(Find_Service[0][2]);
          // localStorage.setItem("datafixgroup", Find_Service[0][0]);
          // localStorage.setItem("data_for_sevice", Find_Service[0][1]);
          console.log(Find_Service[0][2], "Find_Service///////////////",Find_Service[0][0]);
        } catch (error) {
          console.error("Error during login:", error);
        }
      } else {
        //console.log(response.data,"response.data----------")
        setdatafixgroup(Fixgroup_ID[0][0]);
        setdata_for_sevice(Fixgroup_ID[0][2]);
        // localStorage.setItem("datafixgroup", Fixgroup_ID[0][0]);
        // localStorage.setItem("data_for_sevice", Fixgroup_ID[0][1]);
        console.log(Fixgroup_ID[0][2], "Find_Service--------------------",Fixgroup_ID[0][0]);
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
    document.getElementById("Txt_Tel").value = "";
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

  const handleSave = async () => {


    const FAM_FORM = "REQUEST";
    const famNo = document.getElementById("Txt_Famno").value;
    const currentDateTime = new Date()
      .toISOString()
      .slice(2, 10)
      .replace(/-/g, "");
    try {
      for (let i = 0; i < uploadedFiles.length; i++) {
        const file = uploadedFiles[i];
        const lastDotIndex = file.name.lastIndexOf(".");
        const fileExtension = file.name.slice(lastDotIndex + 1);
        let new_run_seq = "";
        try {
          const response_seq = await axios.get(
            `http://localhost:5000/get_seq_request?FAM_no=${famNo}`
          );
          const get_run_seq = await response_seq.data;
          const lastValue =
            get_run_seq.length > 0 ? get_run_seq[get_run_seq.length - 1][0] : 0;
          const incrementedValue = lastValue + 1;
          new_run_seq = [[incrementedValue]];

        } catch (error) {
          console.error("Error committing files to the database:", error);
        }
        const file_server = `${famNo}_${FAM_FORM}_${new_run_seq}_${currentDateTime}.${fileExtension}`;
 
        try {
          const response = await axios.post(
            `http://localhost:5000/ins_FILE_FROM_REQUEST?FAM_no=${famNo}&FAM_from=${FAM_FORM}&FAM_file_seq=${new_run_seq}&FAM_file_name=${file.name}&FAM_file_server=${file_server}&FAM_create=${UserLogin}`
          );
          const data =  await response.data
          console.log(data,"dataYpload")
          //console.log("อัฟโหลดไฟล์สำเร็จ =", response);
        } catch (error) {
          console.error("Error Upload File Request:", error);
        }
        try {
          const formData = new FormData();
          uploadedFiles.forEach((file) => {
            formData.append("files", file);
          
            // formData.append('filesname', file.name);
          });

          await axios.post(
            "http://localhost:5000/ins_FILE_FROM_REQUEST_TO_PROJECT_ME",
            formData
          );
          //console.log("Files saved successfully");
        } catch (error) {
          console.error("Error saving files:", error);
        }
      }
    } catch (error) {
      console.error("Error committing files to the database:", error);
    }
  };

  const Edit = async () => {
  console.log(EditFam,"EditFamKHUNNNN")
    try {
      const response = await axios
        .get(
          `http://localhost:5000/getEdit_request_show?FamNo=${EditFam}`
        );
        const data = await response.data;
        const datatable=[
           data[0],
           data[1],
           data[2],
           data[3],
           data[13],
           data[5],
           data[6],
           data[7],
           data[8],
           data[9],
           data[10],
           data[11],
           data[12],
           data[4]
           
          

          
        ]
        console.log(data,"dataaaaaaaaSSSSSSSSSSSS")

        const DataEdit = data;
        const data_edit = JSON.stringify(DataEdit);
        localStorage.setItem("ForRequester", data_edit);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const EditFixAsset = async () => {
    console.log(EditFam,"EditFamKHUNNNN")
      try {
        const response = await axios
          .get(
            `http://localhost:5000/getEdit_FixAsset?FamNo=${EditFam}`
          );
          const data = await response.data;
          console.log(data,"dataaaaaaaa")
          const DataEdit = data;
          const data_edit = JSON.stringify(DataEdit);
          localStorage.setItem("forDetail", data_edit);
      } catch (error) {
        console.error("Error during login:", error);
      }
    };
 


  const RQ = localStorage.getItem("ForRequester");
  const For_Req = JSON.parse(RQ);
 
  const ForDt = localStorage.getItem("forDetail");
  const For_detail= JSON.parse(ForDt);

console.log(For_detail)

const keep = async () => {
   
  if(EditFam!=null){
    handleCost()
    Edit();
    EditFixAsset();
    // EditUpload();
   }
  if (For_Req == null) {
    console.log("Empty Array:");
    setFAM_run("");
    setTel();
    setFac(Factory[0])
    setUserEmp(getUser[4])
    setselectdept("");
    setselectedType("");
    setselectAssetgroup("");
    setselectcost("");
    setstatus("");
    setTxt_Remark("");
    
  } else {
    console.log("////////////////////")
    console.log(For_Req,"For_Req")
    console.log(For_detail,"For_detail")
    setFac(For_Req[4])
    setFAM_run(For_Req[0]);
    setUserEmp(For_Req[2])
    setTel(For_Req[3]);
    setselectdept(For_Req[6]);
    setselectedType(For_Req[7]);
    setselectAssetgroup(For_Req[8]);
    setselectcost(For_Req[9]);
    setstatus(For_Req[11]);
    setTxt_Remark(For_Req[12]);
    handleCost()
    setcheckGenNo("hidden");
    setcheckReset("hidden");
    setvisibityDetails("visible");
    setread_fix_group(true);
    setread_fix_cost(true);
    if(For_detail!=null){
      
      setdatatable(For_detail);
      setTableOpen(true)
    }
    // if(For_Uploadshow!=null){
      
    //   setUploadedFiles(For_Uploadshow);
    //   setTableOpen(true)
    // }

  }
 };

  useEffect(() => {

   
    
   
    //หารหัส RequestBy
   
     
    BY();
  Factory_UserLogin();
    Costcenter();
    if (idFac.length > 0) {
      AssetGroup();
    }
    CostforAsset();
    keep();
  


  }, [idFac,  dataFixcode ]);

  const Tranfer_ins = async (running_no, StatusId,datastatus) => {
    setFAM_run(running_no);
    console.log(data_for_sevice,"vvvvvvvvvvvvvvvvvvvvvvvvvvvv")
    const dataservice =selectcost+" : "+data_for_sevice
    const Remark = document.getElementById("Remark").value;
    const setData_ForRequester = [
      running_no,
      formattedDate,
      getUser[4],
      Tel,
      Factory[0],
      Cost_sert[0],
      selectdept,
      selectedType,
      selectAssetgroup,
      selectcost,
      datastatus[0],
      datastatus[1],
      Txt_Remark,
      dataservice,
      Factory[1]
    ];

    const sentdata = JSON.stringify(setData_ForRequester);
    localStorage.setItem("ForRequester", sentdata);
    try {
      const response = await axios
        .post(
          `http://localhost:5000/get_gen_famno?tranfer=${running_no}&reqby=${UserLogin}&reTel=${Tel}&fac=${idFac}&cc=${selectcost}&dept=${selectdept}&type=${selectedType}&assetgroup=${selectAssetgroup}&assetcc=${selectcost}&assetname=${data_for_sevice}&status=${StatusId}&remark=${Txt_Remark}`
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
  
  const Gen_No = async () => {
    let StatusId = "";
    let datastatus ="";
    if (selectAssetgroup.length > 0 && selectcost.length > 0) {
      try {
        const response = await axios.get(`http://localhost:5000/getstatus`);
        const dataStatus = await response.data;
        const data = dataStatus.flat();
        setstatus(data[1]);
        datastatus=data
       
        StatusId = dataStatus.flat();
      } catch (error) {
        console.error("Error during login:", error);
      }

      const Run = Factory[0] + "-" + datafixgroup + "-" + Year;
      try {
        const response = await axios.get(
          `http://localhost:5000/getfamno?famno=${Run}`
        );
        const get_runno = await response.data;

        if (get_runno[0][0] != null) {
          let FamNo_old = parseInt(get_runno[0][0].slice(-4), 10);
         
          let paddedFamNo_old = (FamNo_old + 1).toString().padStart(4, "0");
         
          Tranfer_ins(Run + "-" + paddedFamNo_old, StatusId[0],datastatus);
        } else {
          let FamNo_new = Run + "-0001";
        
          Tranfer_ins(FamNo_new, StatusId[0],datastatus);
        }
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
       
      }
    }
  };
  const Insert_Fam_detail = async () => {
    for (let i = 0; i < datatable.length; i++) {
     
      const sentdata = JSON.stringify(datatable);
      localStorage.setItem("forDetail",sentdata)
      try {
        const response = await axios.post(
          `http://localhost:5000/ins_REQ_DETAIL?famno=${FAM_run}&assetcode=${datatable[i][0]}&assetname=${datatable[i][3]}&comp=${datatable[i][1]}&cc=${datatable[i][2]}&boi=${datatable[i][5]}&qty=${datatable[i][6]}&inv=${datatable[i][7]}&cost=${datatable[i][9]}&val=${datatable[i][10]}&by=${UserLogin}`
        );
        setvisibityFile("visible");
      } catch (error) {
        console.error("Error during login:", error);
      }
      try {
        const response = await axios.post(
          `http://localhost:5000/ins_from_Boi?running_no=${FAM_run}&from_boi=${datatable[i][5]}`
        );
        setvisibityFile("visible");
      } catch (error) {
        console.error("Error during login:", error);
      }
    }
  };
  const Next = async (value) => {
    Insert_Fam_detail();
    Swal.fire({
      title: "Save Details Success",
      icon: "success",
    });
  };
  const NextPage  = async () =>{
    navigate("/TransDetail");
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
                    value={FAM_run}
                    onChange={(e) => setFAM_run(e.target.value)}
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
                    id="Txt_user"
                    value={UserEmp}
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
                    value={Factory}
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
                      id="factorycbt"
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
                    id="Radio_ReqType"
                    value={selectedType}
                    onChange={(e) => setselectedType(e.target.value)}
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
                      id="SL_AssetGroup"
                      value={selectAssetgroup}
                      // onChange={handleAssetGroup}
                      onChange={(e) => setselectAssetgroup(e.target.value)}
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
                    value={status}
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
                    value={Txt_Remark}
                    onChange={(e) => setTxt_Remark(e.target.value)}
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
        <Card
          sx={{
            borderRadius: "8px",
            border: 2,
            borderColor: "#88AB8E",
            marginTop: 4,
            visibility: visibityDetails,
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
                            <TableCell>{item[4]} </TableCell>
                            <TableCell>{item[5]}</TableCell>
                            <TableCell>{item[6]}</TableCell>
                            <TableCell>{item[7]}</TableCell>
                            <TableCell>{item[8]}</TableCell>
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
                style={{ backgroundColor: "", visibility: btnSave }}
                onClick={() => Next("1")}
              >
                SAVE Details
              </Button>
            </div>
          </Grid>
        </Card>
      </div>
      <div className="UploadFile">
        <Card
          sx={{
            visibility: visibityFile,
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
                onChange={handleFileUpload}
                style={{ display: "none" }}
                id="fileInput"
                ref={fileInputRef}
              />
              <label
                htmlFor="fileInput"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="bt_ChooseFile"
              >
                <CloudUploadOutlined
                  style={{ fontSize: "60px", color: "#86B6F6" }}
                />
                <br />
                <span style={{ fontWeight: "bold" }}>Drop your files here</span>
                <br />
                or
                <br />
                <Button size="small" component="span">
                  <b> Browse files</b>
                </Button>
              </label>

              {uploadedFiles.length > 0 && (
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
              )}
              <div
                style={{
                  textAlign: "right",
                  marginTop: "5px",
                }}
              >
                <Button variant="contained" onClick={handleSave}>
                  Save
                </Button>
              </div>
              <Button style={{ marginLeft: '1000px', width:'200px',display: 'inline-block' }} variant="contained" onClick={NextPage}>
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


        // setownersend(For_Req[1]);
        // setowner_roting(For_Req[1]);
        // if (For_Rou !== null) {
        //   setselectdepartment_mana(For_Rou[1]);
        //   setTel_service(For_Rou[3]);
        //   setselectservice_by(For_Rou[4]);
        //   setselectboi_staff(For_Rou[5]);
        //   setselectboi_manager(For_Rou[6]);
        //   setselectfac_manager(For_Rou[7]);
        //   setselectacc_check(For_Rou[8]);
        //   setowner_roting(For_Rou[9]);
        //   setselectacc_manager(For_Rou[10]);
        // }
      
      // } else if (For_Req !== null) {
      //   console.log("มีข้อมูลของ For_Req")
      //   setownersend(For_Req[1]);
      //   setowner_roting(For_Req[1]); // สำหรับ routing
      //   if( For_Trans !== null){
      //     console.log("มีข้อมูลของ forTrans")
      //     setownersend(For_Trans[1]);
      //     setdata_fromboi(For_Trans[2]);
      //     setselecttrans_factory(For_Trans[3]);
      //     setselecttrans_cc(For_Trans[4]);
      //     setselectnew_owner(For_Trans[6]);
      //     setTel_for_trans(For_Trans[7]);
      //     setplan_date(For_Trans[8]);
  
      //   }
      //   
      //     setdata_fromboi("");
      //     setselecttrans_factory("");
      //     setselecttrans_cc("");
      //     setnew_boi("");
      //     setselectnew_owner("");
      //     setTel_for_trans("");
      //     setplan_date("");
      //     setabnormal("");
      //     setreceiver("")
  
      // }
