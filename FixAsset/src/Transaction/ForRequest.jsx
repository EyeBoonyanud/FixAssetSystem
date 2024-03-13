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
  Autocomplete
} from "@mui/material";
import axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";
import ClearIcon from "@mui/icons-material/Clear";
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import { Empty } from "antd";
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
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../Page/Hearder";
import DeleteIcon from "@mui/icons-material/Delete";
import PageLoadding from "../Loadding/Pageload";


function ForRequest() {
  const EditFam = localStorage.getItem("EDIT");
  const LocalUserLogin = localStorage.getItem("UserLogin");
  const Name = localStorage.getItem("Name");
  const Lastname = localStorage.getItem("Lastname");
  const Emp = localStorage.getItem("EmpID");
  let Emp_name = Emp + ":" + Name + " " + Lastname;
  const [dataUserLogin, setdataUserLogin] = useState("");
  const [dataUserLogin1, setdataUserLogin1] = useState("");
  const [Request_date, setRequest_date] = useState("");
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
  const [Request_type1, setRequest_type1] = useState("");
  const [Request_sts, setRequest_sts] = useState("");
  const [Request_sts1, setRequest_sts1] = useState("");
  const [Remark, setRemark] = useState("");
  const currentYear = new Date().getFullYear();
  const Year = currentYear.toString().slice(-2);
  const [Gen_Fam_No, setGen_Fam_No] = useState("");
  const [dataFix_Asset_Cost, setdataFix_Asset_Cost] = useState([]); //Servicept
  const [datafix_for_find,setdatafix_for_find] = useState([]);
  const [COMP, set_COMP] = useState([]);

  const [owner_req,setowner_req] = useState("")
const [owner_req1,setowner_req1] = useState([])

const [owner_dept,setowner_dept] = useState("")
const [owner_dept1,setowner_dept1] = useState([])

const [name_req,setname_req] = useState("")
const [name_req1,setname_req1]= useState([])

const [owner_tel,setowner_tel] = useState("")
const [owner_tel1,setowner_tel1] = useState([])

  const [find_fixasset, setfind_fixasset] = useState([]);
  const [find_fixasset1, setfind_fixasset1] = useState("");
  const [open, setOpen] = useState(false); // open FixAsset
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [datatable, setdatatable] = useState([]);
  const [isTableOpen, setTableOpen] = useState(false);
  const [checkGenNo, setcheckGenNo] = useState("visible");
  const [checkReset, setcheckReset] = useState("visible");
  const [btnSave, setbtnSave] = useState("hidden");
  const [visibityDetails, setvisibityDetails] = useState("hidden");
  const [visibityFile, setvisibityFile] = useState("hidden");
  const [chktable, setchktable] = useState("hidden");

  // Upload File
  const fileInputRef = useRef();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadedFilesDATA, setUploadedFilesDATA] = useState([]);

  // สำหรับ check txtbox

  const ForRequester = localStorage.getItem("ForRequester");
  const For_Req = JSON.parse(ForRequester);
   console.log(For_Req,"VVVVVVVVVV");

  const ForDt = localStorage.getItem("forDetail");
  const For_detail = JSON.parse(ForDt);

  // set Readonly
  const [read_fix_group, setread_fix_group] = useState(false);
  const [read_fix_cost, setread_fix_cost] = useState(false);
  const [read_dept, setread_dept] = useState(true);
  const [read_tel, setread_tel] = useState(true);
  const [reac_remark, setread_remark] = useState(true);
  const [reac_type, setread_type] = useState(true);
  const [delete_fix, setdelete_fix] = useState("hidden");
  const [STS1_Req, setSTS1_Req] = useState("");
  const [STS1_for_R, setSTS1_for_R] = useState("");
  const [checknext ,setchecknext] =useState("visible");

  //
  // const [chkadd,setchkadd] = useState("hidden");

  const navigate = useNavigate();
  const NextPage = async () => {
    navigate("/TransDetail");
  };

  const For_Edit_Fixed = localStorage.getItem("Edit_Dteail_for_FixedCode");
  const For_Ed_FixCode = JSON.parse(For_Edit_Fixed);
  // console.log(For_Ed_FixCode, "For_Ed_FixCode");

  const For_edit_request = localStorage.getItem("For_Req_Edit");
  const For_Rq_Edit = JSON.parse(For_edit_request);
  console.log("For_Rq_Edit", For_Rq_Edit);
  let STS = "";

  const FileUp = localStorage.getItem("Type");
  var storedFileArray = JSON.parse(FileUp);

  //// console.log(">>>>>>>>>>>>>>>>>>>>...", storedFileArray);

  // var storedFileArray = JSON.parse(FileUp);
  // var reconstructedFileArray = storedFileArray.map(data => new File([], data.name, {
  //   type: data.type,
  //   lastModified: new Date(data.lastModified),
  //   size: data.size,

  //   // Add other properties as needed
  // }));

  //////////////////////////////Loading /////////////////////////

  const [isPopupOpenLoadding, setPopupOpenLoadding] = useState(false);
  const openPopupLoadding = () => {
    setPopupOpenLoadding(true);
  };
  const closePopupLoadding = () => {
    setPopupOpenLoadding(false);
  };
  const [Filedata, setFiledata] = useState([]);

  const ShowFile = () => {
    let Gen_Fam_No_Show = "";
   
    if (EditFam != null) {
      if (For_Rq_Edit != null) {
        Gen_Fam_No_Show = For_Rq_Edit[0];
      }
    } else {
      if (For_Req != null) {
        Gen_Fam_No_Show = For_Req[0];
      }
    }
    // console.log("gen fam no มายังเอ่ย :"," = ",Gen_Fam_No_Show);
    // console.log("OOOOOOOOOOOOOO",Gen_Fam_No);
    if ( Gen_Fam_No != null) {
      if (STS1_Req === "" || STS1_Req === "FLTR001" || STS1_for_R === "R") {
        // console.log("มาแล้ววววววววววววววว",Gen_Fam_No_Show);
        axios
     axios
        .post("http://localhost:5000/FAM_FILE_ATTACH", {
          FamNo: Gen_Fam_No_Show,
        })  

        .then((res) => {
          const data = res.data;
          if (data.length >= 0) {
            setFiledata(data);
            // console.log(data);
          }
        });
      }}
     
    // } else {
    //   // console.log("เข้าอันนี้จ้า")
    //   axios
    //   .post("http://localhost:5000/FAM_FILE_ATTACH", {
    //     FamNo: Gen_Fam_No,
    //   })
    //   .then((res) => {
    //     const data = res.data;
    //     if (data.length > 0) {
    //       setFiledata(data);
    //       // console.log(data);
    //     }
    //   });
    // }
  };

  const downloadFile = (fileName) => {
    const downloadUrl = `http://localhost:5000/downloads?filename=${encodeURIComponent(
      fileName
    )}`;

    axios({
      url: downloadUrl,
      method: "GET",
      responseType: "blob",
    })
      .then((response) => {
        const blob = new Blob([response.data], {
          type: response.headers["content-type"],
        });
        // console.log(response);
        // สร้างลิงก์
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);

        // ดาวน์โหลดไฟล์โดยอัตโนมัติ
        //   link.download = 'downloaded_file.xlsx';
        link.download = "downloaded_file";
        link.click();

        // ลบ URL ที่ถูกสร้างขึ้น
        window.URL.revokeObjectURL(link.href);
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
      });
  };
  useEffect(() => {
    openPopupLoadding();

    //  if(EditFam){
    //   if(For_Rq_Edit != null){

    //   }}
    //   if(For_Req !=null ){

    //   }

    if (storedFileArray != null) {
      var reconstructedFileArray = storedFileArray.map(
        (data) =>
          new File([], data.name, {
            type: data.type,
            lastModified: new Date(data.lastModified),
            size: data.size,

            // Add other properties as needed
          })
      );
      // console.log(reconstructedFileArray, "//////////////////////////");
      setUploadedFiles(reconstructedFileArray);
    }

    // Edit();
    // EditFixAsset();
    // // console.log(">>>>>>>>>>>>>>>>>>", For_Rq_Edit, EditFam);
    //handleReload();
    // const TEST = async () => {
    //   await request_by();
    //   await factory();
    //   await costcenter();
    //   await CostforAsset();
    //   await keep();

    // };

    // TEST();
    request_by();
    factory();
    costcenter();
    CostforAsset();
    keep();
    ShowFile();
  

    setTimeout(function () {
      closePopupLoadding();
    }, 5000);
  }, []);

  const keep = () => {
    if (EditFam != null) {
      if (For_Rq_Edit != null) {
        // มี for_rq_edit
        // console.log(For_Rq_Edit[16], "");
        setSTS1_for_R(For_Rq_Edit[16]);//จะต้องเปลี่ยน
        setSTS1_Req(For_Rq_Edit[10]);
        STS = For_Rq_Edit[10];
        setGen_Fam_No(For_Rq_Edit[0]);
        setRequest_date(For_Rq_Edit[1]);
        //setdataUserLogin1(For_Rq_Edit[2]);
        setTel1(For_Rq_Edit[3]);
        setRequest_type1(For_Rq_Edit[7]);
        setRequest_sts1(For_Rq_Edit[11]);
        setRemark(For_Rq_Edit[12]);
        setowner_req(For_Rq_Edit[17]);
        setowner_dept(For_Rq_Edit[18]);
        setowner_tel(For_Rq_Edit[19]);
        setname_req(For_Rq_Edit[20]);
        setcheckGenNo("hidden");
        setcheckReset("hidden");
        setread_fix_group(true);
        setread_fix_cost(true);
        setvisibityDetails("visible");
        setvisibityFile("visible");
        if (For_Ed_FixCode != null) {
          //มี edit detail fixassetcode
          setdatatable(For_Ed_FixCode);
          if (For_Ed_FixCode.length > 0) {
            setTableOpen(true);
            setbtnSave("visible");
          } else {
            //setTableOpen(false);
            setbtnSave("hidden");
          }
        }
        if (STS == "FLTR001" || STS == "" || For_Rq_Edit[16] === "R") {
          // console.log("MMMMMMMMMMMMMMMMMMMMMM");
          // setchkadd("visible")
          setread_dept(false);
          setread_remark(false);
          setread_type(false);
          setread_tel(false);
          setdelete_fix("visible");
          //setbtnSave("visible");
        } else {
        }
      }
    } else {
      if (For_Req != null) {
        setSTS1_Req(For_Req[10]);
        STS = For_Req[10];
        setGen_Fam_No(For_Req[0]);
        setRequest_date(formattedDate);
        //setdataUserLogin1(For_Req[2]);
        setTel1(For_Req[2]);
        setRequest_type1(For_Req[6]);
        setdataFix_Asset_Cost(For_Req[9]);
        setRequest_sts1(For_Req[11]);
        setRemark(For_Req[12]);
        setcheckGenNo("hidden");
        setcheckReset("hidden");
        setvisibityDetails("visible");
        setvisibityFile("visible");
        setowner_req(For_Req[15]);
        setowner_dept(For_Req[16]);
        setowner_tel(For_Req[17]);
        setname_req(For_Req[18]);

        if (For_detail != null) {
          setdatatable(For_detail);

          if (For_detail.length > 0) {
            setTableOpen(true);
            setbtnSave("visible");
          } else {
            setTableOpen(false);
            setbtnSave("hidden");
          }
        }
        if (STS == "FLTR001" || STS == "") {
          // console.log("YYYYYYYYY");
          setread_dept(false);
          setread_remark(false);
          setread_type(false);
          setread_tel(false);
          setdelete_fix("visible");
          //setchkadd("visible")
          //setbtnSave("visible");
        } else {
        }
      } else {
        STS = "";
        setRequest_date(formattedDate);
        if (STS == "FLTR001" || STS == "") {
          setread_dept(false);
          setread_remark(false);
          setread_type(false);
          setread_tel(false);
          setdelete_fix("visible");
          setchecknext("hidden")
          // setchkadd("visible")
          //  setbtnSave("visible");
        } else {
        }
      }
    }
  };

  // const formattedDate = `${(currentDate.getMonth() + 1)
  //   .toString()
  //   .padStart(2, "0")}/${currentDate
  //   .getDate()
  //   .toString()
  //   .padStart(2, "0")}/${currentDate.getFullYear()}`;
  const formattedDate = `${currentDate.getDate().toString().padStart(2, "0")}/${(currentDate.getMonth() + 1).toString().padStart(2, "0")}/${currentDate.getFullYear()}`;


  //Request By /////////////////////////////////////////
  const request_by = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/getby?By=${LocalUserLogin}`
      );
      const data = await response.data;
      const data_insert = data.flat();
      setdataUserLogin(data_insert);
      if (EditFam != null) {
        if (For_Rq_Edit != null) {
          // console.log(For_Rq_Edit[15], "AAAAAAAAAAAAAAAAAAAAAAAAA");
          setdataUserLogin1(For_Rq_Edit[15]);
        }
      } else {
        if (For_Req != null) {
          setdataUserLogin1(For_Req[14]);
        } else {
          //// console.log("/////////");
          setdataUserLogin1(data_insert[4]);
        }
      }
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };
  //Request_Factory//////////////////////////////////////
  const factory = async () => {
    let data_Fac = "";
    if (EditFam == null) {
      try {
        const response = await axios.get(
          `http://localhost:5000/getfac_insert?Fac_Login=${LocalUserLogin}`
        );
        const data = await response.data;
        data_Fac = data.flat();
        setFactory(data_Fac);
        if (EditFam != null) {
          if (For_Rq_Edit != null) {
            //// console.log(For_Rq_Edit,"AAAAAAAAAAAAAAAAAAAAAAAAA")
            setFactory1(For_Rq_Edit[4]);
          }
        } else {
          if (For_Req != null) {
            setFactory1(data_Fac[0]);
          } else {
            //// console.log("/////////");
            setFactory1(data_Fac[0]);
          }
        }
      } catch (error) {
        //console.error("Error during login:", error);
      }
    } else {
      try {
        const response = await axios.get(
          `http://localhost:5000/getfac_insert?Fac_Login=${For_Rq_Edit[2]}`
        );
        const data = await response.data;
        data_Fac = data.flat();
        setFactory(data_Fac);
        if (EditFam != null) {
          if (For_Rq_Edit != null) {
            //// console.log(For_Rq_Edit,"AAAAAAAAAAAAAAAAAAAAAAAAA")
            setFactory1(For_Rq_Edit[4]);
          }
        } else {
          if (For_Req != null) {
            setFactory1(For_Req[4]);
          } else {
            //// console.log("/////////");
            setFactory1(data_Fac[0]);
          }
        }
      } catch (error) {
        //console.error("Error during login:", error);
      }
    }
    if (data_Fac.length >= 0) {
      try {
        const response = await axios.get(
          `http://localhost:5000/getdept?idFactory=${data_Fac[1]}`
        );

        const data = await response.data;
        const data_dept = data.flat();
        setDept(data_dept);
        if (EditFam != null) {
          if (For_Rq_Edit != null) {
            //// console.log(For_Rq_Edit,"AAAAAAAAAAAAAAAAAAAAAAAAA")
            setselectDept1(For_Rq_Edit[6]);
          }
        } else {
          if (For_Req != null) {
            //// console.log(For_Req,"DDDDDDDeptttttt")
            setselectDept1(For_Req[5]);
          } else {
            //// console.log("/////////");
            setselectDept1("");
          }
        }
        //// console.log(data_dept, "data_dept");
      } catch (error) {
        //console.error("Error during login:", error);
      }
    }
    fixasset_group(data_Fac[1]);
  };
  //Cost Center/////////////////////////////////////////
  const costcenter = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/getcost_insert?Cost_Login=${LocalUserLogin}`
      );
      const data = await response.data;
      const data_insert = data.flat();
      //// console.log(data_insert, "data_insert");
      setCostcenter(data_insert);
      //// console.log(For_Req);
      if (EditFam != null) {
        if (For_Rq_Edit != null) {
          //// console.log(For_Rq_Edit,"AAAAAAAAAAAAAAAAAAAAAAAAA")
          setCostcenter1(For_Rq_Edit[5]);
        }
      } else {
        if (For_Req != null) {
          setCostcenter1(data_insert[0]);
        } else {
          setCostcenter1(data_insert[0]);
        }
      }
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };
  //AssetGroup //////////////////////////////////////
  const fixasset_group = async (datafac) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/getfix_group?Asset_group=${datafac}`
      );
      const data = await response.data;

      //// console.log(data, "data_fixgroup");
      setFixAssetgroup(data);

      if (EditFam != null) {
        if (For_Rq_Edit != null) {
          //// console.log(For_Rq_Edit,"AAAAAAAAAAAAAAAAAAAAAAAAA")

          setselectFixAssetgroup1(For_Rq_Edit[8]);
        }
      } else {
        if (For_Req != null) {
          setselectFixAssetgroup1(For_Req[7]);
        } else {
          setselectFixAssetgroup1("");
        }
      }
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };
  //AssetCost
  const CostforAsset = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/getcost`);
      const CostData = await response.data;
      setFixAsset_cost(CostData);
      if (EditFam != null) {
        if (For_Rq_Edit != null) {
          //// console.log(For_Rq_Edit,"AAAAAAAAAAAAAAAAAAAAAAAAA")

          setselectFixAsset_cost1(For_Rq_Edit[9]);
        }
      } else {
        if (For_Req != null) {
          setselectFixAsset_cost1(For_Req[8]);
        } else {
          setselectFixAsset_cost1("");
        }
      }
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };
  // HandleFixAssetCost
  const handleCost = async (event) => {
    
    let Cost_value = event
    console.log(Cost_value,"Y66YYYYY")
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
          //// console.log(data_for_servicedept, "ServiceDept>>>>>>>>>>>");
        } catch (error) {
          //console.error("Error during login:", error);
        }
      } else {
        setdataFix_Asset_Cost(data);
        //// console.log(data, "ServiceDept---------------------");
      }
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };

  






  /////////////// Gen Fam and Tranfer_ins //////////////////
  const Gen_No = async () => {
    // let StatusId = ""; //
    openPopupLoadding();
    let DataStatus = ""; //
    if (
      selectFixAssetgroup1.length > 0 &&
      selectFixAsset_cost1.length > 0 &&
      Request_type1.length > 0
    ) {
      try {
        const response = await axios.get(`http://localhost:5000/getstatus`);
        const dataStatus = await response.data;
        const data = dataStatus.flat();
        setRequest_sts1(data[1]);
        DataStatus = data;
        setRequest_sts1(data[1]);

        // StatusId = dataStatus.flat();
      } catch (error) {
        //console.error("Error during login:", error);
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

          Tranfer_ins(FamNo_new, DataStatus);
        }
      } catch (error) {
        //console.error("Error during login:", error);
      }
    } else {
      // console.log("444444");
      if (
        Request_type1.length === 0 &&
        selectFixAssetgroup1.length === 0 &&
        selectFixAsset_cost1.length === 0
      ) {
        alert("กรุณาเลือก Request Type , Fix Asset Group และ Fix Asset Code");
      } else if (Request_type1.length === 0) {
        alert("กรุณาเลือก Request Type");
      } else if (selectFixAssetgroup1.length === 0) {
        alert("กรุณาเลือก Fix Asset Group");
      } else if (selectFixAsset_cost1.length === 0) {
        alert("กรุณาเลือก Fix Asset Code");
      }
    }
    closePopupLoadding();
  };
  const Tranfer_ins = async (running_no, DataStatus) => {
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
      DataStatus[1],
      Remark,
      selectFixAssetgroup1[1],
      Emp_name, 
      owner_req,
      owner_dept,
      owner_tel,
      name_req
     
    ];
    console.log(setData_ForRequester, "datadata");
    const sentdata = JSON.stringify(setData_ForRequester);
    localStorage.setItem("ForRequester", sentdata);
    try {
      const response = await axios.post(
        `http://localhost:5000/get_gen_famno?tranfer=${running_no}&reqby=${LocalUserLogin}&reTel=${Tel1}&fac=${Factory[1]}&cc=${Costcenter1}&dept=${selectDept1}&type=${Request_type1}&assetgroup=${selectFixAssetgroup1}&assetcc=${selectFixAsset_cost1}&assetname=${dataFix_Asset_Cost[0][2]}&status=${DataStatus[0]}&remark=${Remark}&user=${LocalUserLogin}&owner_id=${owner_req}&owner_CC=${owner_dept}&owner_Tel=${owner_tel}`
      );
      const data = await response.data;
      setcheckGenNo("hidden");
      setcheckReset("hidden");
      setvisibityDetails("visible");
      setchecknext("visible")
      setread_fix_group(true);
      setread_fix_cost(true);
    } catch (error) {
      //console.error("Error during login:", error);
    }

    try {
      const response = await axios.post(
        `http://localhost:5000/get_asset_transfer?tranfer=${running_no}&reqby=${LocalUserLogin}&assetcc=${selectFixAsset_cost1}`
      );
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };

  const handleOwner_tel = async (event) => {
    console.log(event.target.value,"Tel")
    setowner_tel(event.target.value)
    if (EditFam != null) {
      // console.log(">>>>>>>>..", For_Rq_Edit);
      const setData_ForRequester = [
        For_Rq_Edit[0],
        For_Rq_Edit[1],
        For_Rq_Edit[2],
        For_Rq_Edit[3],
        For_Rq_Edit[4],
        For_Rq_Edit[5],
        For_Rq_Edit[6],
        For_Rq_Edit[7],
        For_Rq_Edit[8],
        For_Rq_Edit[9],
        For_Rq_Edit[10],
        For_Rq_Edit[11],
        For_Rq_Edit[12],
        For_Rq_Edit[13],
        For_Rq_Edit[14],
        For_Rq_Edit[15],
        For_Rq_Edit[16],
        For_Rq_Edit[17],
        For_Rq_Edit[18],
        event.target.value,
        For_Rq_Edit[20],
        

      
      ];
      // console.log("/////////////////");
      const sentdata = JSON.stringify(setData_ForRequester);
      localStorage.setItem("For_Req_Edit", sentdata);
      //edit
    } else {
      //insert

      if (For_Req[0] == "" && For_Req[0] == null) {
        // ยังไม่genfam
        // console.log("------>>>>>>>>>>>>>>>>---------");
        const setData_ForRequester = [
          "",
          LocalUserLogin,
          Tel1,
          Factory[1],
          Costcenter1,
          selectDept1,
          Request_type1,
          selectFixAssetgroup1,
          selectFixAsset_cost1,
          "",
          "",
          "",
          Remark,
          "",
          Emp_name,
          owner_req,
          owner_dept,
          event.target.value,
          name_req
        ];
        //// console.log(setData_ForRequester, "datadata");
        const sentdata = JSON.stringify(setData_ForRequester);
        localStorage.setItem("ForRequester", sentdata);
      } else {
        // console.log("------///////////----------", For_Req);
        const setData_ForRequester = [
          For_Req[0],
          For_Req[1],
          For_Req[2],
          For_Req[3],
          For_Req[4],
          For_Req[5],
          For_Req[6],
          For_Req[7],
          For_Req[8],
          For_Req[9],
          For_Req[10],
          For_Req[11],
          For_Req[12],
          For_Req[13],
          For_Req[14],
          For_Req[15],
          For_Req[16],
          event.target.value
        ];
        //// console.log(setData_ForRequester, "datadata");
        const sentdata = JSON.stringify(setData_ForRequester);
        localStorage.setItem("ForRequester", sentdata);
      }
    }
  }



//   const handleOwnerDept = async (event) => {
//     setowner_dept(event.target.value,"Dept")
// if (EditFam != null) {
//       // console.log(">>>>>>>>..", For_Rq_Edit);
//       const setData_ForRequester = [
//         For_Rq_Edit[0],
//         For_Rq_Edit[1],
//         For_Rq_Edit[2],
//         For_Rq_Edit[3],
//         For_Rq_Edit[4],
//         For_Rq_Edit[5],
//         For_Rq_Edit[6],
//         For_Rq_Edit[7],
//         For_Rq_Edit[8],
//         For_Rq_Edit[9],
//         For_Rq_Edit[10],
//         For_Rq_Edit[11],
//         For_Rq_Edit[12],
//         For_Rq_Edit[13],
//         For_Rq_Edit[14],
//         For_Rq_Edit[15],
//         event.target.value,
//         For_Rq_Edit[17],
//       ];
//       // console.log("/////////////////");
//       const sentdata = JSON.stringify(setData_ForRequester);
//       localStorage.setItem("For_Req_Edit", sentdata);
//       //edit
//     } else {
//       //insert

//       if (For_Req[0] == "" && For_Req[0] == null) {
//         // ยังไม่genfam
//         // console.log("------>>>>>>>>>>>>>>>>---------");
//         const setData_ForRequester = [
//           "",
//           LocalUserLogin,
//           Tel1,
//           Factory[1],
//           Costcenter1,
//           selectDept1,
//           Request_type1,
//           selectFixAssetgroup1,
//           selectFixAsset_cost1,
//           "",
//           "",
//           "",
//           Remark,
//           "",
//           Emp_name,
//           owner_req,
//           event.target.value,
//           owner_tel
//         ];
//         //// console.log(setData_ForRequester, "datadata");
//         const sentdata = JSON.stringify(setData_ForRequester);
//         localStorage.setItem("ForRequester", sentdata);
//       } else {
//         // console.log("------///////////----------", For_Req);
//         const setData_ForRequester = [
//           For_Req[0],
//           For_Req[1],
//           For_Req[2],
//           For_Req[3],
//           For_Req[4],
//           For_Req[5],
//           For_Req[6],
//           For_Req[7],
//           For_Req[8],
//           For_Req[9],
//           For_Req[10],
//           For_Req[11],
//           For_Req[12],
//           For_Req[13],
//           For_Req[14],
//           For_Req[15],
//           event.target.value,
//           For_Req[17],
//         ];
//         //// console.log(setData_ForRequester, "datadata");
//         const sentdata = JSON.stringify(setData_ForRequester);
//         localStorage.setItem("ForRequester", sentdata);
//       }
//     }
//   }


  const handleEmpUser = async (event) => {
    console.log(event, "owner_req")

    try {
      const response = await axios.post("http://localhost:5000/Id_owner", { owner_id: event });
      const data = response.data
      console.log(data[0][2], "DATA");
      // กำหนดค่าให้กับ state หรือตัวแปรต่าง ๆ ด้วย setter functions
      setowner_dept(data[0][0]);
      setname_req(data[0][1]);
      setowner_dept(data[0][2]);
      if (EditFam != null) {
        // console.log(">>>>>>>>..", For_Rq_Edit);
        const setData_ForRequester = [
          For_Rq_Edit[0],
          For_Rq_Edit[1],
          For_Rq_Edit[2],
          For_Rq_Edit[3],
          For_Rq_Edit[4],
          For_Rq_Edit[5],
          For_Rq_Edit[6],
          For_Rq_Edit[7],
          For_Rq_Edit[8],
          For_Rq_Edit[9],
          For_Rq_Edit[10],
          For_Rq_Edit[11],
          For_Rq_Edit[12],
          For_Rq_Edit[13],
          For_Rq_Edit[14],
          For_Rq_Edit[15],
          For_Rq_Edit[16],
          event,
          data[0][2],
          For_Rq_Edit[19],
          data[0][1]
        ];
        // console.log("/////////////////");
        const sentdata = JSON.stringify(setData_ForRequester);
        localStorage.setItem("For_Req_Edit", sentdata);
        //edit
      } else {
        //insert
  
        if (For_Req[0] == "" && For_Req[0] == null) {
          // ยังไม่genfam
          // console.log("------>>>>>>>>>>>>>>>>---------");
          const setData_ForRequester = [
            "",
            LocalUserLogin,
            Tel1,
            Factory[1],
            Costcenter1,
            selectDept1,
            Request_type1,
            selectFixAssetgroup1,
            selectFixAsset_cost1,
            "",
            "",
            "",
            Remark,
            "",
            Emp_name,
            event,
            data[0][2],
            owner_tel,
            data[0][1]
          ];
          //// console.log(setData_ForRequester, "datadata");
          const sentdata = JSON.stringify(setData_ForRequester);
          localStorage.setItem("ForRequester", sentdata);
        } else {
          console.log("00000000000000",For_Req);
          console.log(data[0][1], "DATA0000");
          const setData_ForRequester = [
            For_Req[0],
            For_Req[1],
            For_Req[2],
            For_Req[3],
            For_Req[4],
            For_Req[5],
            For_Req[6],
            For_Req[7],
            For_Req[8],
            For_Req[9],
            For_Req[10],
            For_Req[11],
            For_Req[12],
            For_Req[13],
            For_Req[14],
            event,
            data[0][2],
            For_Req[17],
            data[0][1]
          ];
          console.log("------///////////----------", setData_ForRequester);
          //// console.log(setData_ForRequester, "datadata");
          const sentdata = JSON.stringify(setData_ForRequester);
          localStorage.setItem("ForRequester", sentdata);
        }
      }
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  
    
  };
  

  

  /////////////////////////////////////////////////////////////
  ////////////// Select Fixed Assets Code ///////////////////////////////
  //Find FixAsset Group
  const ADD = async () => {
    openPopupLoadding();
    try {
      const rollNoSearch = await axios.get(
        `http://localhost:5000/get_COMP?fam_no=${Gen_Fam_No}}`
      );
      const data = rollNoSearch.data;
      set_COMP(data);
      console.log(data, "TTTTTTTTTTTTTTTTTTT");
    } catch (error) {
      console.error("Error requesting data:", error);
    }
    try {
      const row = await axios.get(
        `http://localhost:5000/getfixcode?Fixcode=${find_fixasset1}&asset_cc=${selectFixAsset_cost1}`
      );
      const data = row.data;
      setfind_fixasset(data);

      if (data.length > 0) {
        setOpen(true);
      } else {
        Swal.fire({
          icon: "error",
          title: "Data is not found",
        });
      }
      //// console.log(data, "1111111111111111");
    } catch (error) {
      //console.error("Error requesting data:", error);
    }
    try {
      const response = await axios.post("http://localhost:5000/fix_code_find", { assetcode: find_fixasset1 });
      const data = response.data;
      console.log(data,"datafayfagai;");
      setdatafix_for_find(data)
    } catch (error) {
      // Handle error here
      console.error("Error fetching data:", error);
      // Do something with the error, e.g., set error state
    }

    closePopupLoadding();
  };
  const updateSelectedData = (selectedItems) => {
    const newData = find_fixasset.filter((item, index) => selectedItems[index]);
    setSelectedData(newData);
  };
  const handleCheckboxChange = (index) => {
    const newSelectedItems = [...selectedItems];
    newSelectedItems[index] = !newSelectedItems[index];
    setSelectedItems(newSelectedItems);
    updateSelectedData(newSelectedItems);
  };
  // const handleCheckboxAllChange = () => {
  //   const newSelectedAll = !selectAll;
  //   setSelectAll(newSelectedAll);
  //   setSelectedItems(newSelectedAll ? find_fixasset.map(() => true) : []);
  //   updateSelectedData(newSelectedAll ? find_fixasset.map(() => true) : []);
  // };
  const handleCheckboxAllChange = () => {
    const newSelectedAll = !selectAll;
    let newSelectedItems = [];
    find_fixasset.forEach((item, index) => {
      const isDisabled = COMP.some(
        (compItem) => compItem[1] === item[3] && compItem[2] !== null
      );
  
  
      const isItemInDatatable = datatable.map((dataItem) => dataItem[3]).includes(item[3]);
  
      newSelectedItems[index] = isDisabled || isItemInDatatable ? false : newSelectedAll;
    });
    setSelectAll(newSelectedAll);
    setSelectedItems(newSelectedItems);
    updateSelectedData(newSelectedItems);
  };

  const handleAdd = () => {
    const newDataTable = [...datatable, ...selectedData];
    console.log(newDataTable,"ccccc")
    setdatatable(newDataTable);
    setSelectedItems([]);
    setTableOpen(true);
    setOpen(false);
    setbtnSave("visible");
  };

  const handleDelete = async (item, index) => {
    // const dtDelete = [...datatable.slice(item)];
    // // console.log(dtDelete,"////////////////")
    // // datatable = datatable.slice(0, item);
    // const data_edit = JSON.stringify(dtDelete);
    // // console.log(">>>>>>>>>>>>>>>>>>>>>>",data_edit)
    //   localStorage.setItem("Edit_Dteail_for_FixedCode", data_edit);

    // setdatatable(datatable);

    if (EditFam !== null) {
      // console.log("index", item, EditFam);
      try {
        const row = await axios.post(
          `http://localhost:5000/delete_FAM_REQ_DETAIL?famno=${EditFam}&fixcode=${item}`
        );
        localStorage.removeItem("Edit_Dteail_for_FixedCode");
        Fix_Code();
      } catch (error) {
        console.error("Error requesting data:", error);
      }
    } else {
      try {
        const row = await axios.post(
          `http://localhost:5000/delete_FAM_REQ_DETAIL?famno=${Gen_Fam_No}&fixcode=${item}`
        );
        localStorage.removeItem("forDetail");
        Fix_Code();
      } catch (error) {
        console.error("Error requesting data:", error);
      }
    }
  };
  const Fix_Code = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/getFixcode?Fam=${Gen_Fam_No}`
      );
      const dataStatus = await response.data;
      setdatatable(dataStatus);
      // console.log(dataStatus, "dataStatus");

      // StatusId = dataStatus.flat();
    } catch (error) {
      console.error("Error requesting data:", error);
    }
  };
  const Insert_Fam_detail = async () => {
    
    for (let i = 0; i < datatable.length; i++) {
      const sentdata = JSON.stringify(datatable);
      if (EditFam !== null) {
        localStorage.setItem("Edit_Dteail_for_FixedCode", sentdata);
      } else {
        localStorage.setItem("forDetail", sentdata);
      }
      console.log("datatable",datatable[i][3])
      try {
        await axios.post("http://localhost:5000/ins_REQ_DETAIL", {
          famno: Gen_Fam_No,
          assetcode: datatable[i][0],
          assetname: datatable[i][3],
          comp: datatable[i][1],
          cc: datatable[i][2],
          boi: datatable[i][5],
          qty: datatable[i][6],
          inv: datatable[i][7],
          cost: datatable[i][9],
          val: datatable[i][10],
          by: LocalUserLogin,
        });
        setvisibityFile("visible");
      } catch (error) {
        console.error("Error during POST request:", error);
      }
      
//////////////////////////////////// อันเก่าก่อนแก้
      // try {
      //   const response = await axios.post(
      //     `http://localhost:5000/ins_REQ_DETAIL?famno=${Gen_Fam_No}&assetcode=${datatable[i][0]}&assetname=${datatable[i][3]}&comp=${datatable[i][1]}&cc=${datatable[i][2]}&boi=${datatable[i][5]}&qty=${datatable[i][6]}&inv=${datatable[i][7]}&cost=${datatable[i][9]}&val=${datatable[i][10]}&by=${LocalUserLogin}`
      //   );
      //   setvisibityFile("visible");
      // } catch (error) {
      //   //console.error("Error during login:", error);
      // }
//////////////////////////////////////// อันเก่าก่อรแก้
      
      try {
        const response = await axios.post(
          `http://localhost:5000/ins_from_Boi?running_no=${Gen_Fam_No}&from_boi=${datatable[i][5]}`
        );
        setvisibityFile("visible");
      } catch (error) {
        //console.error("Error during login:", error);
      }
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  /////////////////////////////////////////////////////////////////////////////
  //////////// Handle set localstorage ////////////////
  const handleTel = async (event) => {
    setTel1(event.target.value);

    if (EditFam != null) {
      // console.log(">>>>>>>>..", For_Rq_Edit);
      const setData_ForRequester = [
        For_Rq_Edit[0],
        For_Rq_Edit[1],
        For_Rq_Edit[2],
        event.target.value,
        For_Rq_Edit[4],
        For_Rq_Edit[5],
        For_Rq_Edit[6],
        For_Rq_Edit[7],
        For_Rq_Edit[8],
        For_Rq_Edit[9],
        For_Rq_Edit[10],
        For_Rq_Edit[11],
        For_Rq_Edit[12],
        For_Rq_Edit[13],
        For_Rq_Edit[14],
        For_Rq_Edit[15],
        For_Rq_Edit[16],
        For_Rq_Edit[17],
        For_Rq_Edit[18],
        For_Rq_Edit[19],
        For_Rq_Edit[20]
      ];
      // console.log("/////////////////");
      const sentdata = JSON.stringify(setData_ForRequester);
      localStorage.setItem("For_Req_Edit", sentdata);
      //edit
    } else {
      //insert

      if (For_Req[0] == "" && For_Req[0] == null) {
        // ยังไม่genfam
        // console.log("------>>>>>>>>>>>>>>>>---------");
        const setData_ForRequester = [
          "",
          LocalUserLogin,
          event.target.value,
          Factory[1],
          Costcenter1,
          selectDept1,
          Request_type1,
          selectFixAssetgroup1,
          selectFixAsset_cost1,
          "",
          "",
          "",
          Remark,
          "",
          Emp_name,
        ];
        //// console.log(setData_ForRequester, "datadata");
        const sentdata = JSON.stringify(setData_ForRequester);
        localStorage.setItem("ForRequester", sentdata);
      } else {
        // console.log("------///////////----------", For_Req);
        const setData_ForRequester = [
          For_Req[0],
          For_Req[1],
          event.target.value,
          For_Req[3],
          For_Req[4],
          For_Req[5],
          For_Req[6],
          For_Req[7],
          For_Req[8],
          For_Req[9],
          For_Req[10],
          For_Req[11],
          For_Req[12],
          For_Req[13],
          For_Req[14],
        ];
        //// console.log(setData_ForRequester, "datadata");
        const sentdata = JSON.stringify(setData_ForRequester);
        localStorage.setItem("ForRequester", sentdata);
      }
    }
  };
  const handleDept = async (event) => {
    console.log(event,"uuuuuuuuu")
    setselectDept1(event);
    // setselectDept1(event.target.value);
    // console.log("/////");

    if (EditFam != null) {
      // console.log(">>>>>>>>..", For_Rq_Edit);
      const setData_ForRequester = [
        For_Rq_Edit[0],
        For_Rq_Edit[1],
        For_Rq_Edit[2],
        For_Rq_Edit[3],
        For_Rq_Edit[4],
        For_Rq_Edit[5],
        event,
        For_Rq_Edit[7],
        For_Rq_Edit[8],
        For_Rq_Edit[9],
        For_Rq_Edit[10],
        For_Rq_Edit[11],
        For_Rq_Edit[12],
        For_Rq_Edit[13],
        For_Rq_Edit[14],
        For_Rq_Edit[15],
        For_Rq_Edit[16],
        For_Rq_Edit[17],
        For_Rq_Edit[18],
        For_Rq_Edit[19],
        For_Rq_Edit[20]
      ];
      // console.log("/////////////////");
      const sentdata = JSON.stringify(setData_ForRequester);
      localStorage.setItem("For_Req_Edit", sentdata);
      //edit
    } else {
      //insert
      // console.log("------bbbbbb---------", For_Req[0]);

      if (For_Req[0] == "" && For_Req[0] == null) {
        // ยังไม่genfam
        // console.log("------>>>>>>>>>>>>>>>>---------");
        const setData_ForRequester = [
          "",
          LocalUserLogin,
          "",
          Factory[1],
          Costcenter1,
          selectDept1,
          Request_type1,
          selectFixAssetgroup1,
          selectFixAsset_cost1,
          "",
          "",
          "",
          Remark,
          "",
          Emp_name,
        ];
        //// console.log(setData_ForRequester, "datadata");
        const sentdata = JSON.stringify(setData_ForRequester);
        localStorage.setItem("ForRequester", sentdata);
      } else {
        // console.log("------///////////----------", For_Req);
        const setData_ForRequester = [
          For_Req[0],
          For_Req[1],
          For_Req[2],
          For_Req[3],
          For_Req[4],
          event,
          For_Req[6],
          For_Req[7],
          For_Req[8],
          For_Req[9],
          For_Req[10],
          For_Req[11],
          For_Req[12],
          For_Req[13],
          For_Req[14],
        ];
        //// console.log(setData_ForRequester, "datadata");
        const sentdata = JSON.stringify(setData_ForRequester);
        localStorage.setItem("ForRequester", sentdata);
      }
    }
  };
  const handleRemark = async (event) => {
    setRemark(event.target.value);
    // console.log("/////");

    if (EditFam != null) {
      // console.log(">>>>>>>>..", For_Rq_Edit);
      const setData_ForRequester = [
        For_Rq_Edit[0],
        For_Rq_Edit[1],
        For_Rq_Edit[2],
        For_Rq_Edit[3],
        For_Rq_Edit[4],
        For_Rq_Edit[5],
        For_Rq_Edit[6],
        For_Rq_Edit[7],
        For_Rq_Edit[8],
        For_Rq_Edit[9],
        For_Rq_Edit[10],
        For_Rq_Edit[11],
        event.target.value,
        For_Rq_Edit[13],
        For_Rq_Edit[14],
        For_Rq_Edit[15],
        For_Rq_Edit[16],
        For_Rq_Edit[17],
        For_Rq_Edit[18],
        For_Rq_Edit[19],
        For_Rq_Edit[20]
      ];
      // console.log("/////////////////");
      const sentdata = JSON.stringify(setData_ForRequester);
      localStorage.setItem("For_Req_Edit", sentdata);
      //edit
    } else {
      //insert
      // console.log("------bbbbbb---------");

      if (For_Req[0] == "" && For_Req[0] == null) {
        // ยังไม่genfam
        // console.log("------>>>>>>>>>>>>>>>>---------");
        const setData_ForRequester = [
          "",
          LocalUserLogin,
          "",
          Factory[1],
          Costcenter1,
          selectDept1,
          Request_type1,
          selectFixAssetgroup1,
          selectFixAsset_cost1,
          "",
          "",
          "",
          Remark,
          "",
          Emp_name,
        ];
        //// console.log(setData_ForRequester, "datadata");
        const sentdata = JSON.stringify(setData_ForRequester);
        localStorage.setItem("ForRequester", sentdata);
      } else {
        // console.log("------///////////----------", For_Req);
        const setData_ForRequester = [
          For_Req[0],
          For_Req[1],
          For_Req[2],
          For_Req[3],
          For_Req[4],
          For_Req[5],
          For_Req[6],
          For_Req[7],
          For_Req[8],
          For_Req[9],
          For_Req[10],
          For_Req[11],
          event.target.value,
          For_Req[13],
          For_Req[14],
        ];
        //// console.log(setData_ForRequester, "datadata");
        const sentdata = JSON.stringify(setData_ForRequester);
        localStorage.setItem("ForRequester", sentdata);
      }
    }
  };
  ////////////////////////////////////////////////////////////////////////////

  ///////////////////////// Upload File ///////////////////////////////////
  // const handleFileUpload = (event) => {
  //   const selectedFiles = event.target.files;
  //   const allowedTypes = ["image/png"]; // Allowed file types (add more if needed)
  //   const maxSize = 10 * 1024 * 1024; // Maximum file size in bytes (10 MB)

  //   // Check file types and sizes
  //   for (let i = 0; i < selectedFiles.length; i++) {
  //     const file = selectedFiles[i];
  //     const fileType = file.type;

  //     // Check if file type is allowed
  //     if (allowedTypes.includes(fileType)) {
  //       alert("PNG files are not allowed.");
  //       return; // Stop further processing
  //     }

  //     // Check file size
  //     if (file.size > maxSize) {
  //       alert("File size exceeds 10 MB.");
  //       return; // Stop further processing
  //     }
  //   }

  //   // If all files passed the checks, proceed to add them to uploadedFiles
  //   setUploadedFiles([...uploadedFiles, ...selectedFiles]);
  //   setUploadedFilesDATA([...uploadedFilesDATA, ...selectedFiles]);

  //   // Convert files to JSON format
  //   const jsonDataArray = uploadedFilesDATA.map((file) => ({
  //     name: file.name,
  //     lastModified: file.lastModified,
  //     lastModifiedDate: file.lastModifiedDate
  //       ? file.lastModifiedDate.toISOString()
  //       : null,
  //     webkitRelativePath: file.webkitRelativePath,
  //     size: file.size,
  //     type: file.type,
  //   }));

  //   // Store JSON string in local storage with key "Type"
  //   const fileArrayString = JSON.stringify(jsonDataArray);
  //   localStorage.setItem("Type", fileArrayString);
  //   // console.log(uploadedFiles, "Uploaded Files", jsonDataArray);
  // };
  const handleFileUpload = (event) => {
    const selectedFiles = event.target.files;
    const allowedTypes = ["application/pdf", "image/jpeg", "image/jpg" ,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]; // Allowed file types
    const maxSize = 10 * 1024 * 1024; // Maximum file size in bytes (10 MB)
  
    // Check file types and sizes
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const fileType = file.type;
  
      // Check if file type is allowed
      if (!allowedTypes.includes(fileType)) {
        alert("Only PDF, JPG, and XLS files are allowed.");
        return; // Stop further processing
      }
  
      // Check file size
      if (file.size > maxSize) {
        alert("File size exceeds 10 MB.");
        return; // Stop further processing
      }
    }
  
    // If all files passed the checks, proceed to add them to uploadedFiles
    setUploadedFiles([...uploadedFiles, ...selectedFiles]);
    setUploadedFilesDATA([...uploadedFilesDATA, ...selectedFiles]);
  
    // Convert files to JSON format
    const jsonDataArray = uploadedFilesDATA.map((file) => ({
      name: file.name,
      lastModified: file.lastModified,
      lastModifiedDate: file.lastModifiedDate
        ? file.lastModifiedDate.toISOString()
        : null,
      webkitRelativePath: file.webkitRelativePath,
      size: file.size,
      type: file.type,
    }));
  
    // Store JSON string in local storage with key "Type"
    const fileArrayString = JSON.stringify(jsonDataArray);
    localStorage.setItem("Type", fileArrayString);
    // console.log(uploadedFiles, "Uploaded Files", jsonDataArray);
  };
  

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files) {
      //// console.log("///////////////////////////////", files);
      handleFileUpload({ target: { files } });
    }
  };
  const handleSave = async () => {
    
    const FAM_FORM = "REQUEST";

    const currentDateTime = new Date()
      .toISOString()
      .slice(2, 10)
      .replace(/-/g, "");
    try {
      for (let i = 0; i < uploadedFilesDATA.length; i++) {
        const file = uploadedFilesDATA[i];
        const lastDotIndex = file.name.lastIndexOf(".");
        const fileExtension = file.name.slice(lastDotIndex + 1);
        let new_run_seq = "";
        try {
          const response_seq = await axios.get(
            `http://localhost:5000/get_seq_request?FAM_no=${Gen_Fam_No}`
          );
          const get_run_seq = await response_seq.data;
          const lastValue =
            get_run_seq.length > 0 ? get_run_seq[get_run_seq.length - 1][0] : 0;
          const incrementedValue = lastValue + 1;
          new_run_seq = [[incrementedValue]];
        } catch (error) {
          console.error("Error committing files to the database:", error);
        }
        const file_server = `${Gen_Fam_No}_${FAM_FORM}_${new_run_seq}_${currentDateTime}.${fileExtension}`;

        try {
          const response = await axios.post(
            `http://localhost:5000/ins_FILE_FROM_REQUEST?FAM_no=${Gen_Fam_No}&FAM_from=${FAM_FORM}&FAM_file_seq=${new_run_seq}&FAM_file_name=${file.name}&FAM_file_server=${file_server}&FAM_create=${LocalUserLogin}`
          );
          const data = await response.data;
          // console.log(data, "dataYpload");
          //// console.log("อัฟโหลดไฟล์สำเร็จ =", response);
        } catch (error) {
          console.error("Error Upload File Request:", error);
        }
        try {
          const formData = new FormData();
          uploadedFilesDATA.forEach((file) => {
            formData.append("files", file);

            // formData.append('filesname', file.name);
          });

          await axios.post(
            "http://localhost:5000/ins_FILE_FROM_REQUEST_TO_PROJECT_ME",
            formData
          );
          //// console.log("Files saved successfully");
        } catch (error) {
          console.error("Error saving files:", error);
        }
      }
    } catch (error) {
      console.error("Error committing files to the database:", error);
    }

    Swal.fire({
      title: "Uploads File Success",
      icon: "success",
    });

    setUploadedFilesDATA([]);
    ShowFile();
  };

  const handleDeleteFile = async (index, file,fileName) => {
    // console.log(index, "index", file);
    //console.log(fileName, "filefilefilefilefile");
    const updatedFiles = uploadedFiles.filter((uploadedFile, i) => i !== index);
    setUploadedFiles(updatedFiles);
    
    try {
      await axios.post(
        `http://localhost:5000/deletefile?famno=${Gen_Fam_No}&name_for_file=${file}`
      );
      localStorage.removeItem("Type");
    } catch (error) {
      console.error("Error deleting file:", error);
    }
    try {
      const response = await axios.delete(`http://localhost:5000/deleteFile?data=${fileName}`, 
          // data: { fileName }
      );
      
  } catch (error) {
      console.error('Error deleting file:', error);
      
  }
    
      ShowFile();
  };

  ////////////////////////////////////////////////////////////////////////////
  ////// ปุ่ม Reset ///////////
  const Reset = async () => {
    
    setTel1("");
    setselectDept1("");
    setRequest_type1("");
    setselectFixAssetgroup1("");
    setselectFixAsset_cost1("");
    setRequest_sts1("");
    setRemark("");
  };
  //////////// Next Page ///////////
  const Next = async (value) => {
    Insert_Fam_detail();
    Swal.fire({
      title: "Save Details Success",
      icon: "success",
    });
  };

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <Header />
      </div>

      <div className="Box-Insert">
        {/* สำหรับ Gen Fam no */}
        <div className="Insert">
          <PageLoadding
            isOpen={isPopupOpenLoadding}
            onClose={closePopupLoadding}
          />
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
                For Requester
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
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      disabled
                      id="Txt_Famno"
                      value={Gen_Fam_No}
                      onChange={(e) => setGen_Fam_No(e.target.value)}
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
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      value={Request_date}
                      onChange={(e) => setRequest_date(e.target.value)}
                      disabled
                    ></TextField>
                  </Grid>
                </Grid>
                {/* Request BY */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Request By :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      disabled
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      id="Txt_user"
                      value={dataUserLogin1}
                      onChange={(e) => setdataUserLogin1(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid xs={2}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                    Request By Tel :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{ width: "100%"  , 
                        backgroundColor: read_tel ? "rgba(169, 169, 169, 0.3)" : "",
                      }}
                      disabled={read_tel}
                      
                      // style={{

                      //   width: "100%",
                      // }}
                      // style={{
                      //   borderColor: errorTelReq ? "red" : undefined,  width: "100%",
                      // }}
                      error={
                        (Gen_Fam_No || EditFam) &&
                        (Tel1 === "" || Tel1 === undefined || Tel1 === null)
                      }
                      id="Txt_Tel"
                      value={Tel1}
                      onChange={handleTel}
                    />
                  </Grid>
                </Grid>
             
                {/* Owner and TelOwner */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Request (Owner) :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      disabled={read_tel}
                      style={{
                        width: "100%" , backgroundColor: read_tel ? "rgba(169, 169, 169, 0.3)" : "",}}
                      id="Txt_user"
                      value={owner_req}
                      onChange={(e) => {
                        setowner_req(e.target.value);
                        console.log(e.target.value);
                        handleEmpUser(e.target.value);
                    }}
  
                    ></TextField> 
                  </Grid>
                  <Grid xs={2}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Owner Cost Center:
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      id="Txt_Tel"
                      style={{width:'100%',backgroundColor: "rgba(169, 169, 169, 0.3)",}}
                      disabled
                      value={owner_dept}
                      onChange={(e) =>setowner_dept(e.target.value)}
                    />
                  </Grid>
                </Grid>  
             
                {/* Owner and TelOwner */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Name Owner :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      disabled
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      id="Txt_user"
                      value={name_req}
                      onChange={(e) => setname_req(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid xs={2}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Owner Tel :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{width:'100%' , backgroundColor: read_tel ? "rgba(169, 169, 169, 0.3)" : "",}}
                      // style={{ width: "100%"  , 
                      //   backgroundColor: read_tel ? "rgba(169, 169, 169, 0.3)" : "",
                      // }}
                      disabled={read_tel}
                      
                      // style={{

                      //   width: "100%",
                      // }}
                      // style={{
                      //   borderColor: errorTelReq ? "red" : undefined,  width: "100%",
                      // }}
                      // error={
                      //   (Gen_Fam_No || EditFam) &&
                      //   (Tel1 === "" || Tel1 === undefined || Tel1 === null)
                      // }
                     
                      value={owner_tel}
                      onChange={handleOwner_tel}
                    />
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
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      value={Factory1}
                      onChange={(e) => setFactory1(e.target.value)}
                      disabled
                    ></TextField>
                  </Grid>
                  {/* <Grid xs={2}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Request by Cost Center :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      value={Costcenter1}
                      onChange={(e) => setCostcenter1(e.target.value)}
                      disabled
                    ></TextField>
                  </Grid> */}
                </Grid>
                
                {/* Dept  */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Dept :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                  {STS1_Req === "FLTR001" ||
                    STS1_Req === "" ||
                    STS1_for_R === "R" ? (
                    <FormControl fullWidth>
                      {/* <InputLabel size="small" id="demo-simple-select-label">
                        Select
                      </InputLabel> */}

                      {/* <Select
                        id="factorycbt"
                        label="Select"
                        size="small"
                        disabled={read_dept}
                        value={selectDept1}
                        onChange={handleDept}
                        style={{
                          width: "100%",
                          backgroundColor: read_dept
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
                        error={
                          (Gen_Fam_No || EditFam) &&
                          (selectDept1 === "" ||
                            selectDept1 === undefined ||
                            selectDept1 === null)
                        }
                      >
                        {Dept.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select> */}
                      <Autocomplete
                       disabled={read_dept}
                  style={{
                    width: "100%",
                          backgroundColor: read_dept
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                  }}
                  error={
                    (Gen_Fam_No || EditFam) &&
                    (selectDept1 === "" ||
                      selectDept1 === undefined ||
                      selectDept1 === null)
                  }
                      value={selectDept1}
                      onChange={(e, value) => {
                        setselectDept1(value);
                        handleDept(value)
                        console.log(value, "MMMMM");
                    }}
                    
                      options={Dept.map((item) => item)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select"
                          size="small"
                          sx={{ textAlign: "left" }}
                        />
                      )}
                    />
                    </FormControl> ) : (
                      <TextField
                        style={{
                          backgroundColor: read_dept
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={For_Rq_Edit[6]}
                      ></TextField>
                    )}
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
                      disabled={reac_type}
                      style={{ opacity: reac_type ? 0.5 : 1 }}
                      onChange={(e) => setRequest_type1(e.target.value)}
                    >
                      <FormControlLabel
                        value="GP01001"
                        control={<Radio />}
                        label="Transfer"
                        className="Radio"
                        disabled={reac_type}
                      />
                      <FormControlLabel
                        value="GP01002"
                        control={<Radio />}
                        label="Scrap"
                        className="Radio"
                        disabled={reac_type}
                      />

                      <FormControlLabel
                        value="GP01003"
                        control={<Radio />}
                        label="Sales"
                        className="Radio"
                        disabled={reac_type}
                      />
                      <FormControlLabel
                        value="GP01004"
                        control={<Radio />}
                        label="Lost"
                        className="Radio"
                        disabled={reac_type}
                      />
                      <FormControlLabel
                        value="GP01005"
                        control={<Radio />}
                        label="Write-off"
                        className="Radio"
                        disabled={reac_type}
                      />
                      <FormControlLabel
                        value="GP01006"
                        control={<Radio />}
                        label="Landing to Third-party"
                        className="Radio"
                        disabled={reac_type}
                      />
                      <FormControlLabel
                        value="GP01007"
                        control={<Radio />}
                        label="Donation"
                        className="Radio"
                        disabled={reac_type}
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
                        style={{
                          backgroundColor: read_fix_group
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
                        disabled={read_fix_group}
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
                      {/* <InputLabel size="small" id="demo-simple-select-label">
                        Select
                      </InputLabel>
                      <Select
                        // labelId="demo-simple-select-label"
                        id="factorycbt"
                        label="Select"
                        size="small"
                        value={selectFixAsset_cost1}
                        onChange={handleCost}
                        style={{
                          backgroundColor: read_fix_cost
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
                        disabled={read_fix_cost}
                      >
                        {FixAsset_cost.map((option) => (
                          <MenuItem value={option[0]}>{option[0]}</MenuItem>
                        ))}
                      </Select> */}
                        <Autocomplete
                         disabled={read_fix_cost}
                   style={{
                    backgroundColor: read_fix_cost
                      ? "rgba(169, 169, 169, 0.3)"
                      : "",
                  }}
                      value={selectFixAsset_cost1}
                      onChange={(e, value) => {
                        setselectFixAsset_cost1(value);
                        handleCost(value);
                    }}
                    
                      options={FixAsset_cost.map((item) => item[0])}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select"
                          size="small"
                          sx={{ textAlign: "left" }}
                        />
                      )}
                    />
                    </FormControl>
                  </Grid>
                </Grid>
                {/* Request status */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}></Grid>
                  <Grid xs={3}></Grid>
                  <Grid xs={2}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Request Status :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      // value={status}
                      disabled
                      value={Request_sts1}
                      onChange={(e) => setRequest_sts1(e.target.value)}
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
                      style={{
                        width: "100%",
                        backgroundColor: reac_remark
                          ? "rgba(169, 169, 169, 0.3)"
                          : "",
                      }}
                      disabled={reac_remark}
                      value={Remark}
                      //onChange={(e) => setRemark(e.target.value)}
                      onChange={handleRemark}
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
        {/* สำหรับ Fixed Assets Code */}
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <div
          className="Fixed-Asset-Code"
          style={{ visibility: visibityDetails }}
        >
          <Card
            sx={{
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
                width: "8%",
                display: "flex",

                justifyContent: "center",
              }}
            >
              {" "}
              Details
            </Typography>

            {/* ADD Modal */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <Typography
                  style={{
                    marginLeft: "10px",
                    display:
                      STS1_Req == "" ||
                      STS1_Req == "FLTR001" ||
                      STS1_for_R == "R"
                        ? "block"
                        : "none",
                  }}
                >
                  Fixed Assets Code :
                </Typography>
                <TextField
                  id="Fixcode"
                  size="small"
                  value={find_fixasset1}
                  onChange={(e) => setfind_fixasset1(e.target.value)}
                  style={{
                    marginLeft: "10px",
                    display:
                      STS1_Req == "" ||
                      STS1_Req == "FLTR001" ||
                      STS1_for_R == "R"
                        ? "block"
                        : "none",
                  }}
                />
                <Button
                  style={{
                    marginTop: "3px",
                    marginLeft: "10px",
                    display:
                      STS1_Req == "" ||
                      STS1_Req == "FLTR001" ||
                      STS1_for_R == "R"
                        ? "block"
                        : "none",
                  }}
                  type="primary"
                  variant="contained"
                  onClick={ADD}
                >
                  ADD
                </Button>
              </div>

              <div>
                {" "}
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
                    <DialogTitle>
                      Fixed Assets Code : {find_fixasset1}
                    </DialogTitle>
                    <TableContainer component={Paper}>
                      {/* {find_fixasset.map((item, index) => (
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
                          ))} */}
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
                            <TableCell>Fixed Assets Name</TableCell>
                            <TableCell>Fixed Assets Name</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {find_fixasset.map((item, index) => (
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
                                  disabled={COMP.some(
                                    (compItem) =>
                                      compItem[1] === item[3] &&
                                      compItem[2] !== null 
                                      ) || datatable.map(
                                        (dataItem) =>
                                          dataItem[3]
                                      ).includes(item[3]
                                  )}
                                />
                              </TableCell>
                              <TableCell>{item[1]}</TableCell>
                              <TableCell>{item[2]}</TableCell>
                              <TableCell>{item[3]}</TableCell>
                              <TableCell>
                                {COMP.map((compItem) => {
                                  if (compItem[1] === item[3]) {
                                    console.log(compItem[0], "RRRRRR");
                                    return compItem[2];
                                  }
                                  return null;
                                })}
                              </TableCell>
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
              </div>

              <div>
                {isTableOpen && (
                  <div
                    style={{ marginTop: "20px", margin: "10px 50px 0px 50px" }}
                  >
                    <TableContainer component={Paper}>
                      <Table aria-label="simple table" className="TableFix">
                        <TableHead
                          sx={{
                            backgroundColor: "#436850",
                            fontSize: "10px",
                          }}
                        >
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Fixed Assets Code</TableCell>
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
                            <React.Fragment key={index}>
                              <TableRow
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell>
                                  {index > 0 &&
                                  item[0] === datatable[index - 1][0] ? (
                                    ""
                                  ) : (
                                    <DeleteIcon
                                      style={{
                                        color: "red",
                                        marginLeft: "10px",
                                        display:
                                          STS1_Req == "" ||
                                          STS1_Req == "FLTR001" ||
                                          STS1_for_R === "R"
                                            ? "block"
                                            : "none",
                                      }}
                                      onClick={() =>
                                        handleDelete(item[0], index)
                                      }
                                    />
                                  )}
                                </TableCell>
                                <TableCell>
                                  {index > 0 &&
                                  item[0] === datatable[index - 1][0]
                                    ? ""
                                    : item[0]}
                                </TableCell>
                                <TableCell>{item[1]}</TableCell>
                                <TableCell>{item[2]}</TableCell>
                                <TableCell>{item[3]}</TableCell>
                                <TableCell>{item[5]}</TableCell>
                                <TableCell>{item[6]}</TableCell>
                                <TableCell>{item[7]}</TableCell>
                                <TableCell>{item[9]}</TableCell>
                                <TableCell>{item[10]}</TableCell>
                              </TableRow>
                            </React.Fragment>
                          ))}
                          {/* Counting */}
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell style={{ fontWeight: "bold" }}>
                              Total
                            </TableCell>
                            <TableCell style={{ fontWeight: "bold" }}>
                              {datatable
                                .reduce((acc, curr) => acc + curr[9], 0)
                                .toFixed(2)}
                            </TableCell>

                            <TableCell style={{ fontWeight: "bold" }}>
                              {datatable.reduce(
                                (acc, curr) => acc + curr[10],
                                0
                              )}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                )}
              </div>
              <div
                style={{
                  display: "grid",
                  justifyContent: "flex-end",
                  margin: "15px",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "",
                    visibility: btnSave,
                    display:
                      STS1_Req == "" ||
                      STS1_Req == "FLTR001" ||
                      STS1_for_R === "R"
                        ? "block"
                        : "none",
                  }}
                  onClick={() => Next("1")}
                >
                  SAVE Details
                </Button>
              </div>
            </div>
          </Card>
        </div>
        {/* สำหรับ Upload File */}
        {STS1_Req === "" || STS1_Req === "FLTR001" || STS1_for_R === "R" ? (
          <div >
            <Card
              sx={{
                visibility: visibityFile,
                borderRadius: "8px",
                border: 2,
                borderColor: "#88AB8E",
                marginTop: 4,
              }}
              //className="Style1"
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

<table className="Table_file_for_req">
<tr >
  <td className="Table_Show_req1">
  <td
                      className="Show-Data-File"
                      style={{ textAlign: "center" }}
                    >
                      <div
                        // style={{
                        //   display: "inline-block",
                        //   marginBottom: "40px",
                        //   width: "500px",
                        // }}
                      >
                       <TableContainer component={Paper}>
  <Table className="FamFilePopUp">
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        <TableCell>No.</TableCell>
        <TableCell>File</TableCell>
        <TableCell>View</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {Filedata.length === 0 ? (
        <TableRow>
          <TableCell colSpan={4} style={{ textAlign: "center" }}>
            <Empty />
          </TableCell>
        </TableRow>
      ) : (
        Filedata.map((option, index) => (
          <TableRow key={index}>
            <TableCell>
              <DeleteOutlined
                onClick={() =>
                  handleDeleteFile(Filedata[index][0], Filedata[index][3], Filedata[index][4])
                }
                className="Icon_DeleteFile"
              />
            </TableCell>
            <TableCell>{Filedata[index][2]}</TableCell>
            <TableCell>{Filedata[index][3]}</TableCell>
            <TableCell
              style={{
                textAlign: "center",
                color: "blue",
                textDecoration: "underline",
              }}
            >
              <PlagiarismIcon
                style={{ cursor: "pointer" ,fontSize:'30px' }}
                onClick={() => downloadFile(Filedata[index][4])}
              >
                {Filedata[index][3]}
              </PlagiarismIcon>
            </TableCell>
          </TableRow>
        ))
      )}
    </TableBody>
  </Table>
</TableContainer>

                      </div>
                    </td>
  </td>
  <td style={{width:'20px'}}></td>
  <td className="Table_Show_req2">
  <input
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      style={{ display: "none" }}
                      id="fileInput"
                      ref={fileInputRef}
                    /> 
                    <div style={{width:'400px'}}>
                    <label
                      htmlFor="fileInput"
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                      className="bt_ChooseFile"
                    >
                      <CloudUploadOutlined
                        style={{ fontSize: "30px", color: "#86B6F6" }}
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
                                  {index + 1} {file.name}
                                </span>
                               
                                <DeleteOutlined
                                
                                  onClick={() =>
                                    handleDeleteFile(index, file.name)
                                    
                                  } 
                                  
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
                        display:
                          STS1_Req == "" ||
                          STS1_Req == "FLTR001" ||
                          STS1_for_R === "R"
                            ? "block"
                            : "none",
                      }}
                    >
                      <Button variant="contained" onClick={handleSave}>
                        Save
                      </Button>
                    </div>
</div>
  </td>
</tr>
</table>


              <table className="All-Layout-File">
                <tr>
                  
                   
                
                  <td className="">
                   
                  </td>
                </tr>
                <tr></tr>
                <tr
                  style={{
                    width: "100%",
                    marginBottom: "20px",
                    marginTop: "20px",
                  }}
                ></tr>
              </table>



            </Card>
          </div>
        ) : (
          <div className="ShowFile" >
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
              <table className="TableShow"  style={{padding:'40px'}}>
                <tr>
                  <td>
                  <div className="ImageShowFile">
  <img src="./src/assets/Image/2.png"
   style={{width:'400px' }}  
    alt="Description of your image" />
</div>

                  </td>
                  <td>
<div className="FileShow" style={{ marginBottom: "40px" }}>
                <TableContainer component={Paper}>
                  <Table className="File_For_Show">
                    <TableHead>
                      <TableRow>
                        <TableCell>No.</TableCell>
                        <TableCell>File</TableCell>
                        <TableCell>View</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Filedata.map((option, index) => (
                        <TableRow key={index}>
                          <TableCell>{Filedata[index][2]}</TableCell>
                          <TableCell>{Filedata[index][3]}</TableCell>
                          <TableCell
                            style={{
                              textAlign: "center",
                              color: "blue",
                              textDecoration: "underline",
                            }}
                          >
                            <p
                              style={{ cursor: "pointer" }}
                              onClick={() => downloadFile(Filedata[index][4])}
                            >
                              {Filedata[index][3]}
                            </p>
                          </TableCell>
                        </TableRow>
                      ))}
                      {/* <TableRow>
              <TableCell colSpan={4} style={{ border: "0" }}>
                
              </TableCell>
            </TableRow> */}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
                  </td>
                </tr>
              </table>
              
              
            </Card>
          </div>
        )}
        {/* ปุ่ม Next Page */}
        <div
          className=""
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <table>
            <tr>
              <td
              // style={{
              //       width: "200px",
              //       display: "inline-block",
              //       marginLeft: "400px",
              //       marginTop: "20px",
              //     }}
              >
                {" "}
                {/* <Button
                  style={{
                    width: "200px",
                    display: "inline-block",
                    marginLeft: "400px",
                    marginTop: "20px",
                  }}
                  variant="contained"
                  onClick={() => window.history.back()}
                >
                  BACK PAGE
                </Button> */}
              </td>
              
              <td>
                {" "}
                <Button
                  style={{
                    width: "200px",
                    marginTop: "20px",
                    marginRight: "10px",
                    marginBottom: "20px",
                    backgroundColor: "gray",
                    visibility: checknext
                  }}
                  variant="contained"
                  onClick={NextPage}
                >
                  Next Page
                </Button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default ForRequest;
