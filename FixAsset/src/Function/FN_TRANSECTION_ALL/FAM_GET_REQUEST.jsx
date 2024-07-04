import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function FAM_GET_REQUEST() {
  // LocalStrorage
  const EditFam = localStorage.getItem("EDIT");
  const LocalUserLogin = localStorage.getItem("UserLogin");
  const Name = localStorage.getItem("Name");
  const Lastname = localStorage.getItem("Lastname");
  const Emp = localStorage.getItem("EmpID");
  const For_Edit_Fixed = localStorage.getItem("Edit_Dteail_for_FixedCode");

  const For_Ed_FixCode = JSON.parse(For_Edit_Fixed);
  const For_edit_request = localStorage.getItem("For_Req_Edit");
  const For_Rq_Edit = JSON.parse(For_edit_request);
  let Emp_name = Emp + ":" + Name + " " + Lastname;

  const [dataUserLogin, setdataUserLogin] = useState("");
  const [dataUserLogin1, setdataUserLogin1] = useState("");
  const [Request_date, setRequest_date] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [Tel1, setTel1] = useState("");
  const [Factory, setFactory] = useState("");
  const [Factory1, setFactory1] = useState("");
  const [Costcenter, setCostcenter] = useState("");
  const [Costcenter1, setCostcenter1] = useState("");
  const [Dept, setDept] = useState([]);
  const [selectDept1, setselectDept1] = useState("");
  const [FixAssetgroup, setFixAssetgroup] = useState([]);
  const [selectFixAssetgroup1, setselectFixAssetgroup1] = useState("");
  const [Request_type1, setRequest_type1] = useState("GP01001");
  const [Request_sts1, setRequest_sts1] = useState("");
  const [Remark, setRemark] = useState("");
  const currentYear = new Date().getFullYear();
  const Year = currentYear.toString().slice(-2);
  const [Gen_Fam_No, setGen_Fam_No] = useState("");
  const [dataFix_Asset_Cost, setdataFix_Asset_Cost] = useState([]);
  const [datafix_for_find, setdatafix_for_find] = useState([]);
  const [COMP, set_COMP] = useState([]);
  const [owner_req, setowner_req] = useState("");
  const [owner_dept, setowner_dept] = useState("");
  const [name_req, setname_req] = useState("");
  const [owner_tel, setowner_tel] = useState("");
  const [find_fixasset, setfind_fixasset] = useState([]);
  const [find_fixasset1, setfind_fixasset1] = useState("");
  const [open, setOpen] = useState(false);
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

  // Upload File
  const fileInputRef = useRef();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadedFilesDATA, setUploadedFilesDATA] = useState([]);

  // สำหรับ check txtbox
  const page = localStorage.getItem("page");
  const ForRequester = localStorage.getItem("ForRequester");
  const For_Req = JSON.parse(ForRequester);

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
  const [checknext, setchecknext] = useState("visible");

  let STS = "";
  // Upload file
  const [Filedata, setFiledata] = useState([]);
  const FileUp = localStorage.getItem("Type");
  var storedFileArray = JSON.parse(FileUp);
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
    if (Gen_Fam_No != null) {
      axios
        .post("/FAM_FILE_ATTACH", {
          FamNo: Gen_Fam_No_Show,
        })
        .then((res) => {
          const data = res.data;
          if (data.length >= 0) {
            setFiledata(data);
          }
        });
    }
  };
  const downloadFile = (fileName) => {
    const downloadUrl = `/downloads?filename=${encodeURIComponent(fileName)}`;
    axios({
      url: downloadUrl,
      method: "GET",
      responseType: "blob",
    })
      .then((response) => {
        const blob = new Blob([response.data], {
          type: response.headers["content-type"],
        });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "downloaded_file";
        link.click();
        window.URL.revokeObjectURL(link.href);
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
      });
  };
  // Loading
  const [isPopupOpenLoadding, setPopupOpenLoadding] = useState(false);
  const openPopupLoadding = () => {
    setPopupOpenLoadding(true);
  };
  const closePopupLoadding = () => {
    setPopupOpenLoadding(false);
  };
  useEffect(() => {
    openPopupLoadding();
    if (storedFileArray != null) {
      var reconstructedFileArray = storedFileArray.map(
        (data) =>
          new File([], data.name, {
            type: data.type,
            lastModified: new Date(data.lastModified),
            size: data.size,
          })
      );
      setUploadedFiles(reconstructedFileArray);
    }
    request_by();
    factory();
    costcenter();
    keep();
    ShowFile();
    fetchWeights(EditFam);
    fetchSize(EditFam);
    fetchUnitPrice(EditFam);
    fetch_Inv_No(EditFam);

    setTimeout(function () {
      closePopupLoadding();
    }, 2000);
  }, []);

  const keep = () => {
    if (EditFam != null) {
      console.log("STS",For_Rq_Edit[10])
      if (For_Rq_Edit != null) {
        setSTS1_for_R(For_Rq_Edit[16]);
        setSTS1_Req(For_Rq_Edit[10]);
        STS = For_Rq_Edit[10];
        setGen_Fam_No(For_Rq_Edit[0]);
        setRequest_date(For_Rq_Edit[1]);
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
          setdatatable(For_Ed_FixCode);
          if (For_Ed_FixCode.length > 0) {
            setTableOpen(true);
            setbtnSave("visible");
          } else {
            setbtnSave("hidden");
          }
        }
        if (
          STS == "FLTR001" ||
          STS == "" ||
          For_Rq_Edit[16] === "R" ||
          STS == "FLLS001" ||
          STS == "FLWO001" ||
          STS == "FLDN001" ||
          STS == "FLSC001" ||
          STS == "FLSL001" ||
          STS == "FLLD001"
        ) {
        
          console.log("เข้าาาาาา")
          setread_dept(false);
          setread_remark(false);
          setread_type(true);
          setread_tel(false);
          setdelete_fix("visible");
        } else {
        }
      }
    } else {
      if (For_Req != null) {
        setSTS1_Req(For_Req[10]);

        STS = For_Req[10];
        setGen_Fam_No(For_Req[0]);
        setRequest_date(formattedDate);
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
        setread_fix_group(true);
        setread_fix_cost(true);

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
        if (
          STS == "FLTR001" ||
          STS == "" ||
          STS == "FLLS001" ||
          STS == "FLWO001" ||
          STS == "FLDN001" ||
          STS == "FLSC001" ||
          STS == "FLSL001" ||
          STS == "FLLD001"
        ) {
          setread_dept(false);
          setread_remark(false);
          setread_type(false);
          setread_tel(false);
          setdelete_fix("visible");
        } else {
        }
      } else {
        STS = "";
        setRequest_date(formattedDate);
        if (
          STS == "FLTR001" ||
          STS == "" ||
          STS == "FLLS001" ||
          STS == "FLWO001" ||
          STS == "FLDN001" ||
          STS == "FLSC001" ||
          STS == "FLSL001" ||
          STS == "FLLD001"
        ) {
          setread_dept(false);
          setread_remark(false);
          setread_type(false);
          setread_tel(false);
          setdelete_fix("visible");
          setchecknext("hidden");
        } else {
        }
      }
    }
  };
  // Format Date
  const formattedDate = `${currentDate
    .getDate()
    .toString()
    .padStart(2, "0")}/${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${currentDate.getFullYear()}`;

  // Get Const
  const request_by = async () => {
    try {
      const response = await axios.post("/getby", {
        By: LocalUserLogin,
      });
      const data = await response.data;

      const data_insert = data.flat();
      setdataUserLogin(data_insert);
      if (EditFam != null) {
        if (For_Rq_Edit != null) {
          setdataUserLogin1(For_Rq_Edit[15]);
        }
      } else {
        if (For_Req != null) {
          setdataUserLogin1(For_Req[14]);
        } else {
          setdataUserLogin1(data_insert[4]);
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const factory = async () => {
    let data_Fac = "";
    if (EditFam == null) {
      try {
        const response = await axios.post("/getfac_insert", {
          Fac_Login: LocalUserLogin,
        });
        const data = await response.data;
        data_Fac = data.flat();
        setFactory(data_Fac);

        if (EditFam != null) {
          if (For_Rq_Edit != null) {
            setFactory1(For_Rq_Edit[4]);
          }
        } else {
          if (For_Req != null) {
            setFactory1(data_Fac[0]);
          } else {
            setFactory1(data_Fac[0]);
          }
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    } else {
      try {
        const response = await axios.post("/getfac_insert", {
          Fac_Login: For_Rq_Edit[2],
        });
        const data = await response.data;
        data_Fac = data.flat();
        setFactory(data_Fac);
        if (EditFam != null) {
          if (For_Rq_Edit != null) {
            setFactory1(For_Rq_Edit[4]);
          }
        } else {
          if (For_Req != null) {
            setFactory1(For_Req[4]);
          } else {
            setFactory1(data_Fac[0]);
          }
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    }
    if (data_Fac.length >= 0) {
      try {
        const response = await axios.post("/getdept", {
          id_fac: data_Fac[1],
        });
        const data = await response.data;
        const data_dept = data.flat();
        setDept(data_dept);
        if (EditFam != null) {
          if (For_Rq_Edit != null) {
            setselectDept1(For_Rq_Edit[6]);
          }
        } else {
          if (For_Req != null) {
            setselectDept1(For_Req[5]);
          } else {
            setselectDept1("");
          }
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    }
    fixasset_group(data_Fac[1]);
  };
  const costcenter = async () => {
    try {
      const response = await axios.post("/getcost_insert", {
        Cost_Login: LocalUserLogin,
      });
      const data = await response.data;
      const data_insert = data.flat();
      setCostcenter(data_insert);
      if (EditFam != null) {
        if (For_Rq_Edit != null) {
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
      console.error("Error during login:", error);
    }
  };
  const fixasset_group = async (datafac) => {
    try {
      const response = await axios.post("/getfix_group", {
        Asset_group: datafac,
      });
      const data = await response.data;
      setFixAssetgroup(data);
      if (EditFam != null) {
        if (For_Rq_Edit != null) {
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
      console.error("Error during login:", error);
    }
  };
  const handleCost = async () => {
    let Servicedept = selectFixAssetgroup1;

    if (Servicedept === "EACH CC") {
      try {
        const response = await axios.post("/getfind_service", {
          asset_find: owner_dept,
        });
        const data_for_servicedept = await response.data;

        setdataFix_Asset_Cost(data_for_servicedept);
        Gen_No(data_for_servicedept[0]);
      } catch (error) {
        console.error("Error fetching service data for EACH CC:", error);
      }
    } else {
      try {
        const response = await axios.post("/getid_service", {
          fac: Factory[1],
          fixgroub: selectFixAssetgroup1,
        });
        const data = await response.data;

        setdataFix_Asset_Cost(data);
        Gen_No(data[0]);
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    }
  };

  // สำหรับการทำงานทั้งหมด
  const Gen_No = async (asset) => {
    openPopupLoadding();
    let DataStatus = "";
    let StatusType = "";
    if (
      selectFixAssetgroup1.length > 0 &&
      owner_dept.length > 0 &&
      Request_type1.length > 0
    ) {
      try {
        let StatusType;
        switch (Request_type1) {
          case "GP01001":
            StatusType = "TRANSFER";
            break;
          case "GP01002":
            StatusType = "SCRAP";
            break;
          case "GP01003":
            StatusType = "SALES";
            break;
          case "GP01004":
            StatusType = "LOSS";
            break;
          case "GP01005":
            StatusType = "WRITE-OFF";
            break;
          case "GP01006":
            StatusType = "LENDING";
            break;
          case "GP01007":
            StatusType = "DONATION";
            break;
          default:
            break;
        }

        if (StatusType) {
          const response = await axios.post("/getstatus", {
            type: StatusType,
          });
          const dataStatus = await response.data;
          const data = dataStatus.flat();
          setRequest_sts1(data[1]);
          DataStatus = data;
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
      const Run = Factory[0] + "-" + asset[0] + "-" + Year;
      try {
        const response = await axios.post("/getfamno", {
          famno: Run,
        });
        const get_runno = await response.data;
        if (get_runno[0][0] != null) {
          let FamNo_old = parseInt(get_runno[0][0].slice(-4), 10);
          let paddedFamNo_old = (FamNo_old + 1).toString().padStart(4, "0");
          Tranfer_ins(Run + "-" + paddedFamNo_old, DataStatus, asset[2]);
        } else {
          let FamNo_new = Run + "-0001";
          Tranfer_ins(FamNo_new, DataStatus, asset[2]);
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    } else {
      if (
        Request_type1.length === 0 &&
        selectFixAssetgroup1.length === 0 &&
        owner_dept.length === 0
      ) {
        alert("กรุณาเลือก Request Type , Fix Asset Group และ Fix Asset Code");
      } else if (Request_type1.length === 0) {
        alert("กรุณาเลือก Request Type");
      } else if (selectFixAssetgroup1.length === 0) {
        alert("กรุณาเลือก Fix Asset Group");
      } else if (owner_dept.length === 0) {
        alert("กรุณาเลือก Owner Cost Center");
      }
    }
    closePopupLoadding();
  };

  const Tranfer_ins = async (running_no, DataStatus, nameasset) => {
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
      owner_dept,
      nameasset,
      DataStatus[0],
      DataStatus[1],
      Remark,
      selectFixAssetgroup1[1],
      Emp_name,
      owner_req,
      owner_dept,
      owner_tel,
      name_req,
    ];
    const sentdata = JSON.stringify(setData_ForRequester);
    localStorage.setItem("ForRequester", sentdata);
    try {
      const response = await axios.post("/get_gen_famno", {
        tranfer: running_no,
        reqby: LocalUserLogin,
        reTel: Tel1,
        fac: Factory[1],
        cc: Costcenter1,
        dept: selectDept1,
        type: Request_type1,
        assetgroup: selectFixAssetgroup1,
        assetcc: owner_dept,
        assetname: nameasset,
        status: DataStatus[0],
        remark: Remark,
        user_log: LocalUserLogin,
        owner_id: owner_req,
        owner_CC: owner_dept,
        owner_Tel: owner_tel,
      });
      const data = await response.data;
      setcheckGenNo("hidden");
      setcheckReset("hidden");
      setvisibityDetails("visible");
      setchecknext("visible");
      setread_fix_group(true);
      setread_type(true);
      setread_fix_cost(true);
      if (For_Req == null && Request_type1 === "GP01001") {
        try {
          const response = await axios.post("/get_asset_transfer", {
            tranfer: running_no,
            reqby: LocalUserLogin,
            assetcc: owner_dept,
          });
        } catch (error) {}
      }
    } catch (error) {}
  };
  const handleOwner_tel = async (event) => {
    setowner_tel(event.target.value);
    if (EditFam != null) {
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
      const sentdata = JSON.stringify(setData_ForRequester);
      localStorage.setItem("For_Req_Edit", sentdata);
    } else {
      if (For_Req[0] == "" && For_Req[0] == null) {
        const setData_ForRequester = [
          "",
          LocalUserLogin,
          Tel1,
          Factory[1],
          Costcenter1,
          selectDept1,
          Request_type1,
          selectFixAssetgroup1,
          owner_dept,
          "",
          "",
          "",
          Remark,
          "",
          Emp_name,
          owner_req,
          owner_dept,
          event.target.value,
          name_req,
        ];
        const sentdata = JSON.stringify(setData_ForRequester);
        localStorage.setItem("ForRequester", sentdata);
      } else {
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
          event.target.value,
          For_Req[18],
        ];
        const sentdata = JSON.stringify(setData_ForRequester);
        localStorage.setItem("ForRequester", sentdata);
      }
    }
  };
  const handleEmpUser = async (event) => {
    try {
      const response = await axios.post("/Id_owner", {
        owner_id: event,
      });
      const data = response.data;
      setowner_dept(data[0][0]);
      setname_req(data[0][1]);
      setowner_dept(data[0][2]);
      if (EditFam != null) {
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
          data[0][1],
        ];
        const sentdata = JSON.stringify(setData_ForRequester);
        localStorage.setItem("For_Req_Edit", sentdata);
      } else {
        if (For_Req[0] == "" && For_Req[0] == null) {
          const setData_ForRequester = [
            "",
            LocalUserLogin,
            Tel1,
            Factory[1],
            Costcenter1,
            selectDept1,
            Request_type1,
            selectFixAssetgroup1,
            owner_dept,
            "",
            "",
            "",
            Remark,
            "",
            Emp_name,
            event,
            data[0][2],
            owner_tel,
            data[0][1],
          ];
          const sentdata = JSON.stringify(setData_ForRequester);
          localStorage.setItem("ForRequester", sentdata);
        } else {
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
            data[0][1],
          ];
          const sentdata = JSON.stringify(setData_ForRequester);
          localStorage.setItem("ForRequester", sentdata);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const[checkvalue, setcheckvalue]=useState("")
  // const ADD = async () => {
  //   openPopupLoadding();
  //   // let group_fix = "";
  //   // if (selectFixAssetgroup1.length > 1) {
  //   //   group_fix = selectFixAssetgroup1.substring(0, 1);
  //   // } else {
  //   //   group_fix = selectFixAssetgroup1;
   
  //   // } 
   
  //   try {
  //     const response = await axios.post("/find_fix_groub", {
  //       fac: Factory[1],
  //       servicedept: selectFixAssetgroup1,
  //     });
  //     const data = response.data;
  //     const validValues = [];
  //     for (const key in data) {
  //       if (data.hasOwnProperty(key)) {
  //         validValues.push(data[key][0]);
  //       }
  //     }
  //     try {
  //       const response = await axios.post("/getfixcode", {
  //         Fixcode: find_fixasset1,
  //         asset_cc: owner_dept,
  //         fixgroup: validValues,
  //       });

  //       const data = response.data;
  //       setfind_fixasset(data);
  //       setcheckvalue(data[0][5])
  //       if (checkvalue !== "" && checkvalue !== data[0][5]) {
  //         alert("ไม่สามารถ แอดได้ เนื่องจากคนละ BoI Project");
          
  //     }
  
  //     // ถ้า checkvalue เป็นค่าว่างและ data[0][5] ไม่ว่าง หรือ checkvalue เท่ากับ data[0][5]
  //     if ((checkvalue === "" && data[0][5] !== "") || checkvalue === data[0][5]) {
  //         alert("ผ่าน");
  //         return;
  //     }  return;
      
  
  
  //       if (data.length > 0) {
  //         try {
  //           const response = await axios.post("/fix_code_find", {
  //             assetcode: find_fixasset1,
  //           });
  //           const responseData = response.data;
  //           setdatafix_for_find(responseData);
    
  //           if (responseData.length !== data.length) {
  //             setOpen(true);
  //           } else if (responseData.length === data.length) {
  //             const seen = {};
  //             let uniqueKeys = [];
  //             responseData.forEach((item) => {
  //               const key = item[0];
  //               if (!seen[key]) {
  //                 seen[key] = true;
  //                 uniqueKeys.push(key);
  //               }
  //             });
  //             alert(
  //               "Fixed Asset Code has been implemented:\n" +
  //                 uniqueKeys.join(", ")
  //             );
  //           }
  //         } catch (error) {
  //           console.error("Error fetching data:", error);
  //         }
  //       } else {
  //         Swal.fire({
  //           icon: "error",
  //           title: "Data is not found",
  //         });
  //       }
  //       try {
  //         const response = await axios.post("/get_COMP", {
  //           fam_no: Gen_Fam_No,
  //         });
  //         const data = response.data;

  //         set_COMP(data);
  //       } catch (error) {
  //         console.error("Error requesting data:", error);
  //       }
  //     } catch (error) {
  //       console.error("Error requesting data:", error);
  //     }
  //   } catch (error) {}
  //   closePopupLoadding();

  //   setSelectAll("");
  // };
  const ADD = async () => {
    openPopupLoadding();

    try {
        const response = await axios.post("/find_fix_groub", {
            fac: Factory[1],
            servicedept: selectFixAssetgroup1,
        });
        const data = response.data;
        const validValues = [];
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                validValues.push(data[key][0]);
            }
        }

        try {
            const response = await axios.post("/getfixcode", {
                Fixcode: find_fixasset1,
                asset_cc: owner_dept,
                fixgroup: validValues,
            });

            const data = response.data;
            setfind_fixasset(data);
            // setcheckvalue(data[0][5]);
          //   if (datatable.length === 0) {
            
          // } else {
          //     // ถ้า datatable ไม่ว่าง และ datatable[0][5] ต้องมีค่าเท่ากับ data[0][5]
          //     if (datatable[0][5] === data[0][5]) {
                
          //     } else {
          //         // ถ้า datatable[0][5] มีค่าไม่ตรงกันกับ data[0][5]
          //         alert("ไม่สามารถ ADD ได้ เนื่องจากคนละ BOI Project");
          //         closePopupLoadding();
          //         return;
          //     }
          // }
            if (data.length > 0) {
               setcheckvalue(data[0][5]);
                 if (datatable.length === 0) {
            
          } else {
              // ถ้า datatable ไม่ว่าง และ datatable[0][5] ต้องมีค่าเท่ากับ data[0][5]
              if (datatable[0][5] === data[0][5]) {
                
              } else {
                  // ถ้า datatable[0][5] มีค่าไม่ตรงกันกับ data[0][5]
                  alert("ไม่สามารถ ADD ได้ เนื่องจากคนละ BOI Project");
                  closePopupLoadding();
                  return;
              }
          }
                try {
                    const response = await axios.post("/fix_code_find", {
                        assetcode: find_fixasset1,
                    });
                    const responseData = response.data;
                    setdatafix_for_find(responseData);

                    if (responseData.length !== data.length) {
                        setOpen(true);
                    } else if (responseData.length === data.length) {
                        const seen = {};
                        let uniqueKeys = [];
                        responseData.forEach((item) => {
                            const key = item[0];
                            if (!seen[key]) {
                                seen[key] = true;
                                uniqueKeys.push(key);
                            }
                        });
                        alert(
                            "Fixed Asset Code has been implemented:\n" +
                            uniqueKeys.join(", ")
                        );
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Data is not found",
                });
            }

            try {
                const response = await axios.post("/get_COMP", {
                    fam_no: Gen_Fam_No,
                });
                const data = response.data;

                set_COMP(data);
            } catch (error) {
                console.error("Error requesting data:", error);
            }
        } catch (error) {
            console.error("Error requesting data:", error);
        }
    } catch (error) {
        console.error("Error requesting data:", error);
    }

    closePopupLoadding();
    setSelectAll("");
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
  const handleCheckboxAllChange = () => {
    const newSelectedAll = !selectAll;
    let newSelectedItems = [];
    find_fixasset.forEach((item, index) => {
      const isDisabled = COMP.some(
        (compItem) =>
          compItem[1] === item[3] &&
          compItem[2] !== null &&
          compItem[3] === find_fixasset1
      );

      const isItemInDatatable = datatable.some(
        (dataItem) => dataItem[3] === item[3] && dataItem[0] === item[0]
      );

      newSelectedItems[index] =
        isDisabled || isItemInDatatable ? false : newSelectedAll;
    });
    setSelectAll(newSelectedAll);
    setSelectedItems(newSelectedItems);
    updateSelectedData(newSelectedItems);
  };
  // Table Fixed Asset
  const [CountCOMP, setCountCOMP] = useState([]);
  const [Countdatatable, setCountdatatable] = useState([]);
  const handleAdd = () => {
    const hasTrue = selectedItems.includes(true);

    if (!hasTrue || selectedItems.length === 0) {
      let countCOMP = 0;
      let countTABLE = 0;
      find_fixasset.map((item, index) => {
        const filteredItems = COMP.filter(
          (compItem) =>
            compItem[1] === item[3] &&
            compItem[2] !== null &&
            compItem[3] === find_fixasset1
        );
        const filteredItemsDatatable = datatable.filter(
          (dataItem) => dataItem[3] === item[3] && dataItem[0] === item[0]
        );
        countCOMP += filteredItems.length;
        countTABLE += filteredItemsDatatable.length;
      });
      setCountCOMP(countCOMP);
      setCountdatatable(countTABLE);
      if (countTABLE === find_fixasset.length) {
        alert("Duplicate Please Close");
      } else {
        alert("Please select checkbox");
      }
    } else {
      const newDataTable = [...datatable, ...selectedData];
      newDataTable.sort((a, b) => {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0;
      });
      setdatatable(newDataTable);
      setSelectedItems([]);
      setTableOpen(true);
      setOpen(false);
      setbtnSave("visible");
      setlocalTable(newDataTable);
    }
  };
  const setlocalTable = async (newData) => {
    const data = JSON.stringify(newData);
    localStorage.setItem("Edit_Dteail_for_FixedCode", data);
    localStorage.setItem("forDetail", data);
  };
  const handleDelete = async (item, index) => {
    openPopupLoadding();
    const newData = datatable.filter((data) => data[0] !== item);
    setdatatable(newData);
    if (EditFam !== null) {
      try {
        const row = await axios.post("/delete_FAM_REQ_DETAIL", {
          famno: EditFam,
          fixcode: item,
        });
        //localStorage.removeItem("Edit_Dteail_for_FixedCode");
        // Fix_Code();
        setlocalTable(newData);
      } catch (error) {
        console.error("Error requesting data:", error);
      }
    } else {
      try {
        const row = await axios.post("/delete_FAM_REQ_DETAIL", {
          famno: Gen_Fam_No,
          fixcode: item,
        });
        //localStorage.removeItem("forDetail");
        setlocalTable(newData);
        //Fix_Code();
      } catch (error) {
        console.error("Error requesting data:", error);
      }
    }
    closePopupLoadding();
  };
  const Insert_Fam_detail = async () => {
    openPopupLoadding();
    for (let i = 0; i < datatable.length; i++) {
      const sentdata = JSON.stringify(datatable);
      if (EditFam !== null) {
        localStorage.setItem("Edit_Dteail_for_FixedCode", sentdata);
      } else {
        localStorage.setItem("forDetail", sentdata);
      }
      try {
        await axios.post("/ins_REQ_DETAIL", {
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
      try {
        const response = await axios.post("/ins_from_Boi", {
          running_no: Gen_Fam_No,
          from_boi: datatable[i][5],
        });
        setvisibityFile("visible");
      } catch (error) {
        console.error("Error during login:", error);
      }
    }
    closePopupLoadding();
  };
  const handleClose = () => {
    setSelectedItems([]);
    setOpen(false);
  };
  const handleTel = async (event) => {
    setTel1(event.target.value);

    if (EditFam != null) {
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
        For_Rq_Edit[20],
      ];
      const sentdata = JSON.stringify(setData_ForRequester);
      localStorage.setItem("For_Req_Edit", sentdata);
    } else {
      if (For_Req[0] == "" && For_Req[0] == null) {
        const setData_ForRequester = [
          "",
          LocalUserLogin,
          event.target.value,
          Factory[1],
          Costcenter1,
          selectDept1,
          Request_type1,
          selectFixAssetgroup1,
          owner_dept,
          "",
          "",
          "",
          Remark,
          "",
          Emp_name,
        ];
        const sentdata = JSON.stringify(setData_ForRequester);
        localStorage.setItem("ForRequester", sentdata);
      } else {
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
        const sentdata = JSON.stringify(setData_ForRequester);
        localStorage.setItem("ForRequester", sentdata);
      }
    }
  };
  const handleDept = async (event) => {
    setselectDept1(event);
    if (EditFam != null) {
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
        For_Rq_Edit[20],
      ];
      const sentdata = JSON.stringify(setData_ForRequester);
      localStorage.setItem("For_Req_Edit", sentdata);
    } else {
      if (For_Req[0] == "" && For_Req[0] == null) {
        const setData_ForRequester = [
          "",
          LocalUserLogin,
          "",
          Factory[1],
          Costcenter1,
          selectDept1,
          Request_type1,
          selectFixAssetgroup1,
          owner_dept,
          "",
          "",
          "",
          Remark,
          "",
          Emp_name,
        ];
        const sentdata = JSON.stringify(setData_ForRequester);
        localStorage.setItem("ForRequester", sentdata);
      } else {
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
        const sentdata = JSON.stringify(setData_ForRequester);
        localStorage.setItem("ForRequester", sentdata);
      }
    }
  };
  const handleRemark = async (event) => {
    setRemark(event.target.value);
    if (EditFam != null) {
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
        For_Rq_Edit[20],
      ];
      const sentdata = JSON.stringify(setData_ForRequester);
      localStorage.setItem("For_Req_Edit", sentdata);
    } else {
      if (For_Req[0] == "" && For_Req[0] == null) {
        const setData_ForRequester = [
          "",
          LocalUserLogin,
          "",
          Factory[1],
          Costcenter1,
          selectDept1,
          Request_type1,
          selectFixAssetgroup1,
          owner_dept,
          "",
          "",
          "",
          Remark,
          "",
          Emp_name,
        ];
        const sentdata = JSON.stringify(setData_ForRequester);
        localStorage.setItem("ForRequester", sentdata);
      } else {
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
        const sentdata = JSON.stringify(setData_ForRequester);
        localStorage.setItem("ForRequester", sentdata);
      }
    }
  };
  const handleFileUpload = (event) => {
    const selectedFiles = event.target.files;

    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/jpg",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
    ];

    const maxSize = 10 * 1024 * 1024;

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const fileType = file.type;

      if (!allowedTypes.includes(fileType)) {
        alert("ไฟล์ที่สามารถ อัปโหลดได้ PDF, JPG, and XLS files.");
        return;
      }

      if (file.size > maxSize) {
        alert("File size exceeds 10 MB.");
        return;
      }
    }
    setUploadedFiles([...uploadedFiles, ...selectedFiles]);
    setUploadedFilesDATA([...uploadedFilesDATA, ...selectedFiles]);
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
    const fileArrayString = JSON.stringify(jsonDataArray);
    localStorage.setItem("Type", fileArrayString);
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files) {
      handleFileUpload({ target: { files } });
    }
  };
  const handleSave = async () => {
    openPopupLoadding();
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
          const response_seq = await axios.post("/get_seq_request", {
            FAM_no: Gen_Fam_No,
          });
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
            `/ins_FILE_FROM_REQUEST?FAM_no=${Gen_Fam_No}&FAM_from=${FAM_FORM}&FAM_file_seq=${new_run_seq}&FAM_file_name=${file.name}&FAM_file_server=${file_server}&FAM_create=${LocalUserLogin}`
          );
          const data = await response.data;
        } catch (error) {
          console.error("Error Upload File Request:", error);
        }
        try {
          const formData = new FormData();
          uploadedFilesDATA.forEach((file) => {
            formData.append("files", file);
          });
          await axios.post("/ins_FILE_FROM_REQUEST_TO_PROJECT_ME", formData);
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
    setUploadedFiles([]);
    localStorage.removeItem("Type");
    ShowFile();
    closePopupLoadding();
  };
  const handleDeleteFile = async (index, file, fileName) => {
    openPopupLoadding();
    const updatedFiles = uploadedFiles.filter((uploadedFile, i) => i !== index);
    setUploadedFiles(updatedFiles);
    try {
      const response = await axios.post("/deletefile", {
        famno: Gen_Fam_No,
        name_for_file: file,
      });
      localStorage.removeItem("Type");
    } catch (error) {
      console.error("Error deleting file:", error);
    }
    try {
      const response = await axios.delete(`/deleteFile?data=${fileName}`);
    } catch (error) {
      console.error("Error deleting file:", error);
    }
    closePopupLoadding();
    ShowFile();
  };
  const clearLocal = async () => {
    localStorage.removeItem("ForRequester");
    localStorage.removeItem("forDetail");
    localStorage.removeItem("TransForDetail");
    localStorage.removeItem("EDIT");
    localStorage.removeItem("For_Transfer");
    localStorage.removeItem("For_Routing");
    localStorage.removeItem("For_Req_Edit");
    localStorage.removeItem("Edit_Trans");
    localStorage.removeItem("Edit_Dteail_for_FixedCode");
    localStorage.removeItem("Edit_routing");
    localStorage.removeItem("Type");
  };
  const Back_page = async () => {
    if (page == "SEARCH") {
      clearLocal();
      navigate("/FAMsystem/Search");
    } else if (page == "APPROVEFAM") {
      clearLocal();
      navigate("/FAMsystem/ApproveFam");
    }
  };
  const Reset = async () => {
    setTel1("");
    setselectDept1("");
    setRequest_type1("");
    setselectFixAssetgroup1("");
    setRequest_sts1("");
    setRemark("");
    setowner_dept("");
    setowner_req("");
    setname_req("");
    setowner_tel("");
  };
  const navigate = useNavigate();
  const NextPage = async () => {
    Insert_Fam_detail();
    navigate("/FAMsystem/TransDetail");
  };
  const Next = async (value) => {
    Insert_Fam_detail();
    Swal.fire({
      title: "Save Details Success",
      icon: "success",
    });
  };

  const fetchWeights = async (EditFam) => {
    try {
      const response = await axios.post("/get_weights", {
        famno: EditFam,
      });
      const fetchedWeights = response.data;
      //setWeights(response.data);
      
      const hasNullWeights = fetchedWeights.some(weight => weight === null || weight[0] === null);
      setWeights(fetchedWeights)
      if(For_Rq_Edit[10] == 'FLSC009'|| For_Rq_Edit[10] == 'FLSL009'){
        if (hasNullWeights) {
          alert("กรุณากรอก Weight");
        }
      }
      
    } catch (error) {
      console.error("Error fetching weights:", error);
    }
    
  };
  const fetchSize = async (EditFam) => {
    try {
      const response = await axios.post("/get_size", {
        famno: EditFam,
      });
      //setsize(response.data);
      const fetchedWeights = response.data;
      //setWeights(response.data);
      const hasNullWeights = fetchedWeights.some(weight => weight === null || weight[0] === null);
      setsize(fetchedWeights)
      if(For_Rq_Edit[10] == 'FLSC009'|| For_Rq_Edit[10] == 'FLSL009'){
      if (hasNullWeights) {
        alert("กรุณากรอก Size");
      }}
    } catch (error) {
      console.error("Error fetching weights:", error);
    }
  };
  const fetchUnitPrice = async (EditFam) => {
    try {
      const response = await axios.post("/get_unitprice", {
        famno: EditFam,
      });
      const fetchedWeights = response.data;
      //setWeights(response.data);
      const hasNullWeights = fetchedWeights.some(weight => weight === null || weight[0] === null);
      setunit_price(fetchedWeights)
      if(For_Rq_Edit[10] == 'FLSC100' ){
      if (hasNullWeights) {
        alert("กรุณากรอก Unit Price");
      }}
      //setunit_price(response.data);
    } catch (error) {
      console.error("Error Unit Price", error);
    }
  };
  const fetch_Inv_No = async (EditFam) => {
    try {
      const response = await axios.post("/get_inv_no", {
        famno: EditFam,
      });
      const fetchedWeights = response.data;
      //setWeights(response.data);
      const hasNullWeights = fetchedWeights.some(weight => weight === null || weight[0] === null);
      setinvoice(fetchedWeights)
      if(For_Rq_Edit[10] == 'FLSC101' || For_Rq_Edit[10] == 'FLSL019'){
      if (hasNullWeights) {
        alert("กรุณากรอก Invoice No.");
      }}
      //setinvoice(response.data);
    } catch (error) {
      console.error("Error Unit Price", error);
    }
  };
  const [weights, setWeights] = useState({});
  const [size, setsize] = useState({});
  const [unit_price, setunit_price] = useState({});
  const [invoice, setinvoice] = useState({});

  const handleWeightChange = async (e, index, Famno, Idfix, namefix) => {
    const { value } = e.target;
 
    setWeights((prevWeights) => ({
      ...prevWeights,
      [index]: value,
    }));
    try {
      const response = await axios.post("/insert_weight", {
        famno: Famno,
        idfix_asset: Idfix,
        namefixasset: namefix,
        weight_fix: value,
      });
      if (response.status === 500) {
        alert("กรุณากรอกตัวเลข");
        return;
      }
    } catch (error) {
      console.error("Error during weight update:", error);
      if (error.response && error.response.status === 500) {
        alert("กรุณากรอกตัวเลข");
      }
    }
  };
  const totalWeight = Object.values(weights).reduce(
    (acc, curr) => acc + parseFloat(curr),
    0
  );

  const handleSizeChange = async (e, index, Famno, Idfix, namefix) => {
    const { value } = e.target;
  
    setsize((prevSize) => ({
      ...prevSize,
      [index]: value,
    }));
    try {
      const response = await axios.post("/insert_size", {
        famno: Famno,
        idfix_asset: Idfix,
        namefixasset: namefix,
        size_fix: value,
      });

      if (response.status === 500) {
        alert("กรุณากรอกตัวเลข");
        return;
      }
    } catch (error) {
      console.error("Error during size update:", error);
      if (error.response && error.response.status === 500) {
        alert("กรุณากรอกตัวเลข");
      }
    }
  };
  const handleUnitPriceChange = async (e, index, Famno, Idfix, namefix) => {
    const { value } = e.target;
    setunit_price((prevUnit) => ({
      ...prevUnit,
      [index]: value,
    }));
  
    try {
      await axios.post("/insert_unit_price", {
        famno: Famno,
        idfix_asset: Idfix,
        namefixasset: namefix,
        unit_pri: value,
      });
    } catch (error) {
      console.error("Error during size update:", error);
    }
  };
  
  const handleInvoiceChange = async (e, index, Famno, Idfix, namefix) => {  
    const { value } = e.target;
  
    setinvoice((prevInvoice) => ({
      ...prevInvoice,
      [index]: value,
    }));

    try {
    await axios.post("/insert_invoice", {
        famno: Famno,
        idfix_asset: Idfix,
        namefixasset: namefix,
        invoice_no: value,
      });

      // if (response.status === 500) {
      //   alert("กรุณากรอกตัวเลข");
      //   return;
      // }
    } catch (error) {
      console.error("Error during size update:", error);
      // if (error.response && error.response.status === 500) {
      //   alert("กรุณากรอกตัวเลข");
      // }
    }
  };
  // const totalSize = Object.values(size).reduce((acc, curr) => acc + parseFloat(curr), 0);

  return {
    EditFam,
    dataUserLogin1,
    setdataUserLogin1,
    Request_date,
    setRequest_date,
    Tel1,
    Factory1,
    setFactory1,
    Dept,
    selectDept1,
    setselectDept1,
    FixAssetgroup,
    selectFixAssetgroup1,
    setselectFixAssetgroup1,
    Request_type1,
    setRequest_type1,
    Request_sts1,
    setRequest_sts1,
    Remark,
    Gen_Fam_No,
    setGen_Fam_No,
    COMP,
    owner_req,
    setowner_req,
    owner_dept,
    setowner_dept,
    name_req,
    setname_req,
    owner_tel,
    find_fixasset,
    find_fixasset1,
    setfind_fixasset1,
    open,
    selectAll,
    selectedItems,
    datatable,
    isTableOpen,
    checkGenNo,
    checkReset,
    btnSave,
    visibityDetails,
    visibityFile,
    uploadedFiles,
    For_Rq_Edit,
    isPopupOpenLoadding,
    closePopupLoadding,
    Filedata,
    downloadFile,
    handleCost,
    handleOwner_tel,
    handleEmpUser,
    ADD,
    handleCheckboxChange,
    handleCheckboxAllChange,
    handleAdd,
    handleDelete,
    handleClose,
    handleTel,
    handleDept,
    handleRemark,
    handleFileUpload,
    handleDragOver,
    handleDrop,
    handleSave,
    handleDeleteFile,
    Back_page,
    Reset,
    NextPage,
    Next,
    read_fix_group,
    setread_fix_group,
    read_fix_cost,
    setread_fix_cost,
    read_dept,
    setread_dept,
    read_tel,
    setread_tel,
    reac_remark,
    setread_remark,
    reac_type,
    setread_type,
    delete_fix,
    setdelete_fix,
    STS1_Req,
    setSTS1_Req,
    STS1_for_R,
    setSTS1_for_R,
    checknext,
    setchecknext,
    fileInputRef,
    handleSave,
    handleDrop,
    handleDragOver,
    handleFileUpload,
    handleDeleteFile,
    uploadedFiles,
    fileInputRef,
    Filedata,
    downloadFile,
    storedFileArray,
    LocalUserLogin,
    handleWeightChange,
    weights,
    totalWeight,
    size,
    handleSizeChange,
    handleUnitPriceChange,
    unit_price,
    handleInvoiceChange,
    invoice,setinvoice
  };
}

export { FAM_GET_REQUEST };
