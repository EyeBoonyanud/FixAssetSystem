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
  Autocomplete,
  Checkbox,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  InfoCircleOutlined,
  LoadingOutlined,
  FileSearchOutlined,
  FilePdfOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Empty } from "antd";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Swal from "sweetalert2";
import AddTaskIcon from "@mui/icons-material/AddTask";
import PageLoadding from "../Loadding/Pageload";
import * as XLSX from "xlsx";

function Issue() {
  const UserLoginn = localStorage.getItem("UserLogin");
  const Name = localStorage.getItem("Name");
  const Lastname = localStorage.getItem("Lastname");
  const Emp = localStorage.getItem("EmpID");
  let UserLogin = Emp + ":" + Name + " " + Lastname;
  const [datafac, setdatafac] = useState([]);
  const [selecteDatafac, setselecteDatafac] = useState("");
  const [dept, setdept] = useState([]);
  const [selectdept, setselectdept] = useState("");

  const [selectcostMul, setselectcostMul] = useState([]);
  const [selectReTypeMul, setselectReTypeMul] = useState([]);
  const [selectStatus, setselectStatus] = useState(null);
  const [Status, setStatus] = useState([]);
  const [idStatus, setidStatus] = useState([]);

  const [selectdeptMul, setselectdeptMul] = useState([]);
  const [selectcost, setselectcost] = useState("");
  const [Txt_user, setTxt_user] = useState("");
  const [ReType, setReType] = useState([]);

  const [selectReType, setselectReType] = useState("");
  const [getCostCenter, setgetCostCenter] = useState([]);
  const [selectCostCenter, setselectCostCenter] = useState([]);
  const [dataSearch, setdataSearch] = useState([]);
  const [checkHead, setCheckHead] = useState("hidden"); 
  const [checkEmpty, setCheckEmpty] = useState("hidden"); 
  const [checkData, setCheckData] = useState("visible"); 
  const [loading, setloading] = useState("true");
  const [selectindex, setselectindex] = useState("0");
  const [selectindex_delete, setselectindex_delete] = useState("0");
  const [selectedDateFrom, setSelectedDateFrom] = useState("วว/ดด/ปป");
  const [selectedDateTo, setSelectedDateTo] = useState("วว/ดด/ปป");
  const [Txt_ID_Owner, setTxt_ID_Owner] = useState("");
  const [dataStatus, setdataStatus] = useState("");
  const [PAGEStatus, setPAGEStatus] = useState("");
  const [Txt_Title, setTxt_Title] = useState("");
  const [dataName_file, setdataName_file] = useState([]);
  const [isPopupOpenLoadding, setPopupOpenLoadding] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  console.log("YYYY", dataName_file);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const openPopupLoadding = () => {
    setPopupOpenLoadding(true);
  };
  const closePopupLoadding = () => {
    setPopupOpenLoadding(false);
  };

  const handleSelectChange = async (event) => {
    setselecteDatafac(event.target.value);
    let idFactory = event.target.value;
    try {
      const response = await axios.post("/getdept", {
        id_fac: idFactory,
      });
      const data = await response.data;
      setdept(data);
      console.log("data67hehsb", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const navigate = useNavigate();
  const New = () => {
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
    navigate("/ForRe");
  };
  const currentURL = window.location.href;
  const parts = currentURL.split("/");
  const cutPath = parts[parts.length - 1];
  const Path = cutPath.toUpperCase();
  localStorage.setItem("pageshow", cutPath);
  useEffect(() => {
    console.log("mmmmmaamamamamaamam")
    openPopupLoadding();
    const Statuss = localStorage.getItem("STATUS");
    if (Statuss !== null) {
      setdataStatus(Statuss);
      if (dataStatus !== undefined) {
        if (Statuss === "Create") {
          setPAGEStatus("C");
        } else {
          setPAGEStatus("A");
        }
        Search();
      } else {
      }
      localStorage.removeItem("STATUS");
    } else {
      localStorage.removeItem("STATUS");
      setPAGEStatus("");
    }
    TextTitle();
    Factory();
    CostCenter();
    RequestType();
    findStatus();
  }, []);

  const Factory = async () => {
    try {
      const response = await axios.get(`/getfactory`);
      const FactoryData = await response.data;
      setdatafac(FactoryData);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const CostCenter = () => {
    axios.get("/getcost").then((res) => {
      const data = res.data;
      setgetCostCenter(data);
    });
  };
  const RequestType = async () => {
    try {
      const response = await axios.get(`/gettype`);
      const TypeData = await response.data;
      console.log();
      setReType(TypeData);
    } catch (error) {
      console.error("Error during login:", error);
    }
    closePopupLoadding();
  };
  const findStatus = async () => {
    try {
      const response = await axios.get(`/findsts`);
      const data = await response.data;
      setStatus(data);
    } catch (error) {
      console.error("Error during login:", error);
    }
    closePopupLoadding();
  };
  const handleEdit = async (EditFam, index, TextField) => {
    setselectindex(index);
    setloading("false");
    try {
      const response = await axios.post(
        "/getEdit_request_show",
        {
          FamNo: EditFam,
        }
      );

      const data = await response.data;
      const data_edit = JSON.stringify(data);
      localStorage.setItem("For_Req_Edit", data_edit);
    } catch (error) {
      //console.error("Error during login:", error);
    }
    try {
      const response = await axios.post(
        "/getEdit_FixAsset",
        {
          FamNo: EditFam,
        }
      );
      const data = await response.data;
      const DataEdit = data;
      const data_edit = JSON.stringify(DataEdit);
      localStorage.setItem("Edit_Dteail_for_FixedCode", data_edit);
    } catch (error) {
      //console.error("Error during login:", error);
    }
    try {
      const response = await axios.post(
        "/getEdit_Trans",
        {
          FamNo: EditFam,
        }
      );
      const data = await response.data;
      const data_edit = JSON.stringify(data);
      localStorage.setItem("Edit_Trans", data_edit);
    } catch (error) {
      //console.error("Error during login:", error);
    }
    try {
      const response = await axios.post(
        "/getEdit_routing",
        {
          FamNo: EditFam,
        }
      );
      const data = await response.data;
      const data_edit = JSON.stringify(data);
      localStorage.setItem("Edit_routing", data_edit);
    } catch (error) {
      //console.error("Error during login:", error);
    }
    try {
      const response = await axios.post(
        "/getEditdate_certaficate",
        {
          famno: EditFam,
        }
      );
      
      const data = await response.data;
      const data_edit = JSON.stringify(data);
      localStorage.setItem("Edit_cer_date", data_edit);
      console.log(data,"data")
    } catch (error) {
      console.error("Error during login:", error);
    }

    localStorage.setItem("EDIT", EditFam);
    setloading("True");
    setselectindex("0");

   window.location.href = "/ForRe";
  };

  const handlePDF = async (PDF_FAM) => {
    console.log(PDF_FAM,"PDF_FAM");
    localStorage.removeItem("PDF_FAM_DATA");
    const PDF_FAM_DATA = PDF_FAM;
    localStorage.setItem("PDF_FAM_DATA", PDF_FAM_DATA);
    window.location.href = `/PDF_download
    `;
  };
  const handleVIEW = async (VIEW_FAM,TYPE) => {
    console.log(VIEW_FAM, "PDF_FAM");
    localStorage.setItem("EDIT", VIEW_FAM);
    localStorage.setItem("TYPE_flow", TYPE);
    // const encodedVIEW_FAM = encodeURIComponent(VIEW_FAM);
    window.location.href = `/VIEW_Fammaster`;
  };

  const TextTitle = () => {
    if (Path == "SEARCH") {
      setTxt_Title("Issue FAM");
      localStorage.setItem("page", Path);
      console.log(Path, "TextField");
    } else if (Path == "APPROVEFAM") {
      setTxt_Title("Approve FAM");
      localStorage.setItem("page", Path);
    } else if (Path == "FAMMASTER") {
      setTxt_Title("FAM Master List");
      localStorage.setItem("page", Path);
    }
  };
  const Search = async () => {
    const FamNo = document.getElementById("FamNo").value;
    const FamTo = document.getElementById("FamTo").value;
    const FixAsset = document.getElementById("FixAsset").value;
    const Date = document.getElementById("Date").value;
    const DateTo = document.getElementById("DateTo").value;
    let chk_sts = "";
    console.log(selectStatus, "selectStatus");
    // if(selectStatus = null)

    if (Path === "SEARCH") {
      console.log(Date, DateTo, "date");
      try {
        const response = await axios.post(
          "/getsearch",
          {
            UserLogin: UserLoginn,
            FacCode: selecteDatafac,
            DeptCode: selectdept,
            FamNo: FamNo,
            FamTo: FamTo,
            Costcenter: selectcost,
            FixAsset: FixAsset,
            ReType: selectReType,
            ReDate: Date,
            ReDateTo: DateTo,
          }
        );
        const data = response.data;
        setCheckHead("visible");
        setdataSearch(data);
        if (data.length === 0) {
          setCheckEmpty("visible");
          setCheckData("hidden");
        } else {
          setCheckEmpty("hidden");
          setCheckData("visible");
        }
      } catch (error) {
        console.error("Error requesting data:", error);
      }
    } else if (Path === "APPROVEFAM") {
      try {
        const response = await axios.post(
          "/getsearch2",
          {
            UserLogin: UserLoginn,
            FacCode: selecteDatafac,
            DeptCode: selectdept,
            FamNo: FamNo,
            FamTo: FamTo,
            Costcenter: selectcost,
            FixAsset: FixAsset,
            ReType: selectReType,
            ReDate: Date,
            ReDateTo: DateTo,
          }
        );
        const data = response.data;
        setCheckHead("visible");
        setdataSearch(data);
        if (data.length === 0) {
          setCheckEmpty("visible");
          setCheckData("hidden");
        } else {
          setCheckEmpty("hidden");
          setCheckData("visible");
        }
      } catch (error) {
        console.error("Error requesting data:", error);
      }
    } else if (Path === "FAMMASTER") {
      const unwrappedArrayOwnerCC = selectCostCenter.map((item) =>
        item.replace(/'/g, "")
      );
      const MultipleOwnerCC = unwrappedArrayOwnerCC.join(",");

      const unwrappedArrayDept = selectdeptMul.map((item) =>
        item.replace(/'/g, "")
      );
      const MultipleDept = unwrappedArrayDept.join(",");

      const unwrappedArrayReqType = selectReTypeMul.map((item) =>
        item.replace(/'/g, "")
      );
      const MultipleReqType = unwrappedArrayReqType.join(",");

      const unwrappedArrayAssetCC = selectcostMul.map((item) =>
        item.replace(/'/g, "")
      );
      const MultipleAssetCC = unwrappedArrayAssetCC.join(",");
      axios
        .post("/searchFamMaster", {
          Fac: selecteDatafac,
          OwnerCC: MultipleOwnerCC,
          FamFrom: FamNo,
          FamTo: FamTo,
          Dept: MultipleDept,
          AssetCC: MultipleAssetCC,
          ReqType: MultipleReqType,
          FixCode: FixAsset,
          DateFrom: Date,
          DateTo: DateTo,
          ByID: Txt_ID_Owner.trim(),
          StsID: idStatus,
        })
        .then((res) => {
          const data = res.data;
          setCheckHead("visible");
          setdataSearch(data);
          if (data.length === 0) {
            setCheckEmpty("visible");
            setCheckData("hidden");
          } else {
            setCheckEmpty("hidden");
            setCheckData("visible");
          }
        });
    }
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

  const dataExport = [];
  const sortedTableFirst = dataSearch.map((item) => [
    item[0],
    item[1],
    item[2],
    item[3],
    item[4],
    item[8],
    item[6],
    item[7],
  ]);
  dataExport.push(...sortedTableFirst);
  sortedTableFirst.sort((a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a[i] < b[i]) return -1;
      if (a[i] > b[i]) return 1;
    }
    return 0;
  });
  const exportToExcelTable1 = () => {
    const selectedData = dataSearch.filter((item) =>
      selectedRows.includes(item[2])
    );

    if (selectedRows.length > 0 && selectedData.length > 0) {
      // ถ้ามี checkbox ถูกเลือก
      const ws = XLSX.utils.aoa_to_sheet([
        [
          "Factory",
          "Cost Center",
          "FAM NO",
          "Issue By",
          "Issue Date",
          "Type",
          "Fixed Assets Code",
          "Request Status",
        ],
        ...selectedData,
      ]);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
      XLSX.writeFile(wb, `Selected_RollLeaf_.xlsx`);
    } else {
      // ถ้าไม่มี checkbox ถูกเลือก หรือไม่มีข้อมูลที่ถูกเลือก
      const ws = XLSX.utils.aoa_to_sheet([
        [
          "Factory",
          "Cost Center",
          "FAM NO",
          "Issue By",
          "Issue Date",
          "Type",
          "Fixed Assets Code",
          "Request Status",
        ],
        ...dataRoll,
      ]);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
      XLSX.writeFile(wb, `RollLeaf_.xlsx`);
    }
  };
  const handleCheckboxChange = (id) => {
    if (selectAll) {
      // ถ้ากด Select All ให้ยกเลิกการเลือกทั้งหมด
      setSelectAll(false);
      setSelectedRows([id]);
    } else {
      // ถ้ายังไม่ได้กด Select All ให้ทำการเลือกหรือยกเลิกตามปกติ
      if (selectedRows.includes(id)) {
        setSelectedRows((prev) => prev.filter((rowId) => rowId !== id));
      } else {
        setSelectedRows((prev) => [...prev, id]);
      }
    }
  };
  const handleSelectAll = () => {
    const allIds = dataSearch.map((item) => item[2]);
    if (selectAll) {
      // ถ้าเลือกทั้งหมดให้ยกเลิกการเลือกทั้งหมด
      setSelectedRows([]);
    } else {
      // ถ้ายังไม่ได้เลือกทั้งหมดให้ทำการเลือกทั้งหมด
      setSelectedRows(allIds);
    }
    // สลับสถานะ SelectAll
    setSelectAll(!selectAll);
  };
  const Reset = async () => {
    document.getElementById("FamNo").value = "";
    document.getElementById("FamTo").value = "";
    document.getElementById("FixAsset").value = "";
    document.getElementById("Date").value = "";
    document.getElementById("DateTo").value = "";
    setselectdept("");
    setselecteDatafac("");
    setselectcost("");
    setselectReType("");
    setdataSearch([]);
    setCheckHead("hidden");
    setCheckEmpty("hidden");
    setCheckData("visible");
    setselectCostCenter([]);
    setselectdeptMul([]);
    setselectcostMul([]);
    setReType([]);
    setSelectedDateFrom("วว/ดด/ปป");
    setSelectedDateTo("วว/ดด/ปป");
    setTxt_ID_Owner("");
    setTxt_user("");
    setSelectAll("");
    setSelectedRows("");
    setidStatus("");
    setselectStatus(null);
  };

  const Delete = async (item, index) => {
    // setselectindex_delete(index);

    // setloading("false");
    openPopupLoadding();
    // แสดง SweetAlert เพื่อยืนยันการลบ
    Swal.fire({
      title: "Are you sure you want to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios
            .post("/namefile", {
              fam_no: item,
            })
            .then((response) => {
              const data1 = response.data;

              setdataName_file(data1);
              console.log(data1, "HHHHHHH");
              if (data1.length > 0) {
                for (let i = 0; i < data1.length; i++) {
                  console.log(i, "////>>>>>>>>>>>", data1[i]);

                  axios.delete(
                    `/deleteFile?data=${data1[i]}`
                  );
                  
                }
              }
            });
          let idDelete = "FLTR999";
          await axios.post(
            "/delect_all_fam_transfer",
            { famno: item, idsts: idDelete }
          );
          await axios.post("/delete_all_file", {
            famno: item,
          });
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
          Search();
          closePopupLoadding();
        } catch (error) {
          console.error("Error deleting data:", error);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your data is safe :)", "info");
        closePopupLoadding();
      }
    });
  };

  const selectStatusID = async (id) => {
    setidStatus(id);
  };

  return (
    <>
      <Header />
      <PageLoadding isOpen={isPopupOpenLoadding} onClose={closePopupLoadding} />
      <div className="body">
        <div
          style={{
            marginLeft: "90px",
            justifyContent: "left",
            display: "flex",
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: "Verdana, sans-serif",
                color: "#3AA6B9",
                fontWeight: "bold",
              }}
            >
              {Txt_Title}
            </h1>
          </div>
        </div>
        <div className="Filter">
          <div
            style={{
              display: "flex",

              marginBottom: "10px",
            }}
          >
            <Table className="SarchFill">
              <TableRow>
                <TableCell style={{ border: "0" }}>
                  <FormControl sx={{ width: 200 }}>
                    <InputLabel size="small" id="demo-simple-select-label">
                      Factory :
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="factorycbt"
                      label="Factory :"
                      // className="factorycb"
                      value={selecteDatafac}
                      onChange={handleSelectChange}
                      size="small"
                    >
                      {datafac.map((option, index) => (
                        <MenuItem key={index} value={option[0]}>
                          {option[1]}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell style={{ border: "0" }}>
                  <FormControl
                    sx={{ width: 200 }}
                    style={{
                      display:
                        Path === "SEARCH" || Path === "APPROVEFAM"
                          ? "none"
                          : "",
                    }}
                  >
                    <Autocomplete
                      multiple
                      value={selectCostCenter}
                      onChange={(e, value) => setselectCostCenter(value)}
                      options={getCostCenter.map((item) => item[0])}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Owner Cost Center :"
                          size="small"
                          sx={{ textAlign: "left" }}
                        />
                      )}
                    />
                  </FormControl>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ border: "0" }}>
                  <TextField
                    id="FamNo"
                    size="small"
                    label="FAM No. :"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "4px",
                      width: "200px",
                      marginRight: "5px",
                    }}
                  ></TextField>
                </TableCell>
                <TableCell style={{ border: "0" }}>
                  <TextField
                    id="FamTo"
                    size="small"
                    label="To. :"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "4px",
                      width: "200px",
                      marginRight: "5px",
                    }}
                  ></TextField>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ border: "0" }}>
                  <FormControl
                    sx={{ width: 200 }}
                    style={{
                      display:
                        Path === "SEARCH" || Path === "APPROVEFAM"
                          ? "block"
                          : "none",
                    }}
                  >
                    <Autocomplete
                      value={selectdept}
                      onChange={(e, value) => setselectdept(value)}
                      options={dept.map((item) => item[0])}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Dept :"
                          size="small"
                          sx={{ textAlign: "left" }}
                        />
                      )}
                    />
                  </FormControl>
                  <FormControl
                    sx={{ width: 200 }}
                    style={{ display: Path === "FAMMASTER" ? "block" : "none" }}
                  >
                    <Autocomplete
                      multiple
                      value={selectdeptMul}
                      onChange={(e, value) => setselectdeptMul(value)}
                      options={dept.map((item) => item[0])}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Dept :"
                          size="small"
                          sx={{ textAlign: "left" }}
                        />
                      )}
                    />
                  </FormControl>
                </TableCell>
                <TableCell style={{ border: 0 }}>
                  <FormControl
                    sx={{ width: 200 }}
                    style={{
                      display:
                        Path === "SEARCH" || Path === "APPROVEFAM"
                          ? "block"
                          : "none",
                    }}
                  >
                    <Autocomplete
                      value={selectcost}
                      onChange={(e, value) => setselectcost(value)}
                      options={getCostCenter.map((item) => item[0])}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Asset Cost Center :"
                          size="small"
                          sx={{ textAlign: "left" }}
                        />
                      )}
                    />
                  </FormControl>
                  <FormControl
                    sx={{ width: 200 }}
                    style={{ display: Path === "FAMMASTER" ? "block" : "none" }}
                  >
                    <Autocomplete
                      multiple
                      value={selectcostMul}
                      onChange={(e, value) => setselectcostMul(value)}
                      options={getCostCenter.map((item) => item[0])}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Asset Cost Center :"
                          size="small"
                          sx={{ textAlign: "left" }}
                        />
                      )}
                    />
                  </FormControl>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ border: "0" }}>
                  <FormControl
                    sx={{ width: 200 }}
                    style={{
                      display:
                        Path === "SEARCH" || Path === "APPROVEFAM"
                          ? "block"
                          : "none",
                    }}
                  >
                    <InputLabel size="small" id="demo-simple-select-label">
                      Request Type :
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Request Type :"
                      value={selectReType}
                      onChange={(e) => setselectReType(e.target.value)}
                      size="small"
                      style={{
                        width: "200px",
                      }}
                    >
                      {ReType.map((option) => (
                        <MenuItem value={option[0]}>{option[1]}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl
                    sx={{ width: 200 }}
                    style={{ display: Path === "FAMMASTER" ? "block" : "none" }}
                  >
                    <InputLabel size="small" id="demo-simple-select-label">
                      Request Type :
                    </InputLabel>
                    <Select
                      multiple
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Request Type :"
                      value={selectReTypeMul}
                      onChange={(e) => setselectReTypeMul(e.target.value)}
                      size="small"
                      style={{
                        width: "200px",
                      }}
                    >
                      {ReType.map((option) => (
                        <MenuItem value={option[0]}>{option[1]}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell style={{ border: 0 }}>
                  <TextField
                    label="Fix Asset Code :"
                    size="small"
                    variant="outlined"
                    id="FixAsset"
                    style={{
                      width: 200,
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ border: 0 }}>
                  <TextField
                    id="Date"
                    size="small"
                    type="date"
                    label="Date From :"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "4px",
                      width: "200px",
                      marginRight: "5px",
                    }}
                    s
                    value={selectedDateFrom}
                    onChange={(e) => {
                      setSelectedDateFrom(e.target.value);

                    }}
                  ></TextField>
                </TableCell>
                <TableCell style={{ border: 0 }}>
                  <TextField
                    id="DateTo"
                    size="small"
                    type="date"
                    label="Date To :"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "4px",
                      width: "200px",
                      marginRight: "5px",
                    }}
                    value={selectedDateTo}
                    onChange={(e) => {
                      setSelectedDateTo(e.target.value);
                    }}
                  ></TextField>
                </TableCell>
              </TableRow>

              <TableRow
                style={{
                  display:
                    Path === "SEARCH"
                      ? //|| Path === "APPROVEFAM"
                        "table-row"
                      : "none",
                }}
              >
                <TableCell style={{ border: 0 }} colSpan={2}>
                  <TextField
                    size="small"
                    value={UserLogin}
                    label="Request By :"
                    disabled
                    style={{
                      backgroundColor: "rgba(169, 169, 169, 0.3)",
                      width: "420px",
                    }}
                  ></TextField>
                </TableCell>
              </TableRow>

              <TableRow
                style={{ display: Path === "FAMMASTER" ? "table-row" : "none" }}
              >
                <TableCell style={{ border: "0" }} colSpan={2}>
                  <TextField
                    id="outlined-basic"
                    label="Request By :"
                    size="small"
                    variant="outlined"
                    style={{ width: "414px" }}
                    value={Txt_ID_Owner}
                    onChange={(e) => {
                      setTxt_ID_Owner(e.target.value);
               
                    }}
                  />
                </TableCell>
                {/* <TableCell style={{ border: "0" }}>
                  <TextField
                    id="outlined-basic"
                    label=""
                    size="small"
                    variant="outlined"
                    style={{
                      width: "270px",
                      backgroundColor: "rgba(169, 169, 169, 0.3)",
                    }}
                    value={Txt_user}
                    disabled
                  />
                </TableCell> */}
              </TableRow>
              <TableRow>
                <TableCell style={{ border: "0" }}>
                  <FormControl
                    sx={{ width: 200 }}
                    style={{ display: Path === "FAMMASTER" ? "block" : "none" }}
                  >
                    <Autocomplete
                      value={selectStatus}
                      onChange={(e, value) => {
                        setselectStatus(value);
                        selectStatusID(value.value); 
                      }}
                      options={Status.map((item) => ({
                        label: item[1],
                        value: item[0],
                      }))}
                      getOptionLabel={(option) => option.label}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Status :"
                          size="small"
                          sx={{ textAlign: "left" }}
                        />
                      )}
                    />
                  </FormControl>
                </TableCell>
                <TableCell style={{ border: 0 }}></TableCell>
              </TableRow>
            </Table>
          </div>
        </div>
        <div className="Filter">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "30px",
              width: "790px",
            }}
          >
            <Table>
              <TableRow style={{ textAlign: "center" }}>
                <TableCell style={{ border: "0", textAlign: "center" }}>
                  <Button
                    className="ButtonSearch"
                    style={{
                      backgroundColor: "#FBD61A",
                      color: "gray",
                    }}
                    variant="contained"
                    onClick={Search}
                  >
                    {" "}
                    <SearchIcon />
                    Search
                  </Button>
                  &nbsp;
                  <Button
                    className="ButtonSearch"
                    style={{
                      display: Path === "SEARCH" ? "" : "none",
                      backgroundColor: "#391AFB",
                    }}
                    variant="contained"
                    onClick={New}
                  >
                    <AddIcon />
                    New
                  </Button>
                  &nbsp;
                  {Path === "FAMMASTER" && (
                    <Button
                      className="ButtonSearch"
                      style={{
                        backgroundColor: "#00C344",
                        width: "180px",
                      }}
                      variant="contained"
                      onClick={exportToExcelTable1}
                    >
                      <FileDownloadIcon />
                      Export Excel
                    </Button>
                  )}
                  &nbsp;
                  <Button
                    className="ButtonSearch"
                    onClick={Reset}
                    style={{
                      backgroundColor: "#E2E3DC",
                      width: "100px",
                      color: "black",
                    }}
                    variant="contained"
                  >
                    <RestartAltIcon />
                    Reset
                  </Button>
                </TableCell>
              </TableRow>
            </Table>
          </div>
        </div>

        <div className="responsive-container">
          <TableContainer
            style={{
              visibility: checkHead,
            }}
            component={Paper}
          >
            <Table sx={{}} aria-label="simple table">
              <TableHead className="Serach-Data">
                <TableRow>
                  {Path === "FAMMASTER" && (
                    <TableCell>
                      <Checkbox
                        style={{ color: "white" }}
                        {...label}
                        onChange={handleSelectAll}
                        checked={selectAll}
                      />
                    </TableCell>
                  )}
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>Factory</TableCell>
                  <TableCell>Cost Center</TableCell>
                  <TableCell>FAM No.</TableCell>
                  <TableCell>Issue By</TableCell>
                  <TableCell>Issue Date</TableCell>
                  <TableCell>Type</TableCell>
                  {/* <TableCell>Fixed Asset Code</TableCell> */}
                  <TableCell>Request Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataSearch.length > 0 ? (
                  dataSearch.map((item, index) => (
                    <TableRow key={item[2]}>
                      {Path === "FAMMASTER" && (
                        <TableCell>
                          <Checkbox
                            {...label}
                            onChange={() => handleCheckboxChange(item[2])}
                            checked={selectedRows.includes(item[2])}
                          />
                        </TableCell>
                      )}
                      <TableCell style={{ width: "0px" }}>
                        {Path === "SEARCH" ? (
                          loading === "false" && index === selectindex ? (
                            <LoadingOutlined style={{ fontSize: "30px" }} />
                          ) : (
                            <EditNoteIcon
                              style={{ color: "#F4D03F", fontSize: "30px" }}
                              onClick={() => handleEdit(item[2], index)}
                            />
                          )
                        ) : Path === "APPROVEFAM" ? (
                          loading === "false" && index === selectindex ? (
                            <LoadingOutlined style={{ fontSize: "30px" }} />
                          ) : (
                            <AddTaskIcon
                              style={{ color: "#F4D03F", fontSize: "30px" }}
                              onClick={() => handleEdit(item[2], index)}
                            />
                          )
                        ) : loading === "false" && index === selectindex ? (
                          <LoadingOutlined style={{ fontSize: "30px" }} />
                        ) : (
                          <>
                            <FilePdfOutlined
                              style={{ color: "red", fontSize: "30px" }}
                              onClick={() => handlePDF(item[2], index)}
                            />
                            {/* <FileSearchOutlined
                            style={{ color: "#40A2E3", fontSize: "30px" }}
                            onClick={() => handleVIEW(item[2])}
                          /> */}
                          </>
                        )}
                      </TableCell>
                      <TableCell style={{ width: "0px" }}>
                        {item[7] === "Create" &&
                          Path == "SEARCH" &&
                          (loading === "false" &&
                          index === selectindex_delete ? (
                            <LoadingOutlined style={{ fontSize: "30px" }} />
                          ) : (
                            <DeleteForeverIcon
                              style={{
                                color: "red",
                                fontSize: "30px",
                                display: "block",
                              }}
                              onClick={() => {
                                Delete(item[2], index);
                            
                              }}
                            />
                          ))}

                        {Path === "FAMMASTER" &&
                          (loading === "false" &&
                          index === selectindex_delete ? (
                            <LoadingOutlined style={{ fontSize: "30px" }} />
                          ) : (
                            <FileSearchOutlined
                              style={{ color: "#40A2E3", fontSize: "30px" }}
                              onClick={() => {
                                handleVIEW(item[2],item[8]);
                                
                              }}
                              
                            />
                          ))}
                      </TableCell>

                      <TableCell>{item[0]}</TableCell>
                      <TableCell>{item[1]}</TableCell>
                      <TableCell>{item[2]}</TableCell>
                      <TableCell>{item[4]}</TableCell>
                      <TableCell>{item[3]}</TableCell>
                      <TableCell>{item[5]}</TableCell>
          
                      <TableCell>
                        <Typography
                          style={{
                            borderRadius: "10px",
                            background: "#FFB9B9",
                          }}
                        >
                          {item[7]}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow style={{ visibility: checkEmpty }}>
                    <TableCell colSpan={11}>
                      <InfoCircleOutlined
                        style={{
                          visibility: checkData,
                          fontSize: "30px",
                          color: "#ffd580",
                        }}
                      />
                      <text
                        style={{
                          visibility: checkData,
                          fontSize: "25px",
                          marginLeft: "10px",
                        }}
                      >
                        {" "}
                        Please fill in information{" "}
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

export default Issue;
