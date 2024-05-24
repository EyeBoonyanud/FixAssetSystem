import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as XLSX from "xlsx";
import { FAM_REPORT_DETAILS } from "../FN_REPORT/FAM_REPORT_DETAILS";
import moment from "moment";

function FAM_SEARCH() {
  // Local Storage
  const { TableSearch } = FAM_REPORT_DETAILS();
  const UserLoginn = localStorage.getItem("UserLogin");
  const Name = localStorage.getItem("Name");
  const Lastname = localStorage.getItem("Lastname");
  const Emp = localStorage.getItem("EmpID");
  let UserLogin = Emp + ":" + Name + " " + Lastname;
  //const set
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
  const [selectedDateFrom, setSelectedDateFrom] = useState(null);
  const [selectedDateTo, setSelectedDateTo] = useState(null);
  const [Txt_ID_Owner, setTxt_ID_Owner] = useState("");
  const [dataStatus, setdataStatus] = useState("");
  const [PAGEStatus, setPAGEStatus] = useState("");
  const [Txt_Title, setTxt_Title] = useState("");
  const [dataName_file, setdataName_file] = useState([]);
  const [isPopupOpenLoadding, setPopupOpenLoadding] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [convertedDate, setConvertedDate] = useState("");
  const [convertedDateTo, setConvertedDateTo] = useState("");

  // const pagina
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, dataSearch.length - page * rowsPerPage);
  const emptyRows_table_report =
    rowsPerPage -
    Math.min(rowsPerPage, TableSearch.length - page * rowsPerPage);

  // Londing
  const openPopupLoadding = () => {
    setPopupOpenLoadding(true);
  };
  const closePopupLoadding = () => {
    setPopupOpenLoadding(false);
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
    localStorage.removeItem("Edit_cer_date");
    localStorage.removeItem("Edit_Lending");
    localStorage.removeItem("Type");
    navigate("/ForRe");
  };
  const Search = async () => {
    let Datafrom = "";
    let Dateto = "";
    if (convertedDateTo === "Invalid date") {
      Datafrom = "";
    } else if (convertedDateTo != "Invalid date") {
      Datafrom = convertedDateTo;
    }
    if (convertedDate === "Invalid date") {
      Dateto = "";
    } else if (convertedDate != "Invalid date") {
      Dateto = convertedDate;
    }
    const FamNo = document.getElementById("FamNo").value;
    const FamTo = document.getElementById("FamTo").value;
    const FixAsset = document.getElementById("FixAsset").value;
    const Date = Datafrom;
    const DateTo = Dateto;

    if (Path === "SEARCH") {
      try {
        const response = await axios.post("/getsearch", {
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
        });
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
        const response = await axios.post("/getsearch2", {
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
        });
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
      const MultipleReqType = selectReType;

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
  const Reset = async () => {
    document.getElementById("FamNo").value = "";
    document.getElementById("FamTo").value = "";
    document.getElementById("FixAsset").value = "";
    // document.getElementById("Date").value = "";
    // document.getElementById("DateTo").value = "";
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
    setSelectedDateFrom(null);
    setSelectedDateTo(null);
    setTxt_ID_Owner("");
    setTxt_user("");
    setSelectAll("");
    setSelectedRows("");
    setidStatus("");
    setselectStatus(null);
    setConvertedDate("");
    setConvertedDateTo("");
    console.log(convertedDate, "HJHJJH", convertedDateTo);
  };
  // Get Data
  const Factory = async () => {
    try {
      const response = await axios.get(`/getfactory`);
      const FactoryData = await response.data;
      setdatafac(FactoryData);
    } catch (error) {
      console.error("Error during login:", error);
    }
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
      setReType(TypeData);
    } catch (error) {
      console.error("Error during login:", error);
    }
    closePopupLoadding();
  };
  const findStatus = async (selectReType) => {
    try {
      let StatusType;
      switch (selectReType) {
        case "GP01001":
          StatusType = "TRANSFER";
          break;
        case "GP01002":
          StatusType = "SCRAP";
          break;
        case "GP01003":
          StatusType = "SALE";
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

      try {
        const response = await axios.post("/findsts", {
          Type: StatusType,
        });
        const data = await response.data;
        setStatus(data);
      } catch (error) {
        console.error("Error during login:", error);
      }
      closePopupLoadding();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const currentURL = window.location.href;
  const parts = currentURL.split("/");
  const cutPath = parts[parts.length - 1];
  const Path = cutPath.toUpperCase();
  localStorage.setItem("pageshow", cutPath);

  const handleEdit = async (EditFam, index, TextField) => {
    setselectindex(index);
    setloading("false");
    try {
      const response = await axios.post("/getEdit_request_show", {
        FamNo: EditFam,
      });

      const data = await response.data;
      const data_edit = JSON.stringify(data);
      localStorage.setItem("For_Req_Edit", data_edit);
    } catch (error) {
      console.error("Error during login:", error);
    }
    try {
      const response = await axios.post("/getEdit_FixAsset", {
        FamNo: EditFam,
      });
      const data = await response.data;
      const DataEdit = data;
      const data_edit = JSON.stringify(DataEdit);
      localStorage.setItem("Edit_Dteail_for_FixedCode", data_edit);
    } catch (error) {
      console.error("Error during login:", error);
    }
    try {
      const response = await axios.post("/getEdit_Trans", {
        FamNo: EditFam,
      });
      const data = await response.data;
      const data_edit = JSON.stringify(data);
      localStorage.setItem("Edit_Trans", data_edit);
    } catch (error) {
      console.error("Error during login:", error);
    }
    try {
      const response = await axios.post("/getEdit_routing", {
        FamNo: EditFam,
      });
      const data = await response.data;
      const data_edit = JSON.stringify(data);
      localStorage.setItem("Edit_routing", data_edit);
    } catch (error) {
      console.error("Error during login:", error);
    }
    try {
      const response = await axios.post("/getEditdate_certaficate", {
        famno: EditFam,
      });

      const data = await response.data;
      const data_edit = JSON.stringify(data);
      localStorage.setItem("Edit_cer_date", data_edit);
    } catch (error) {
      console.error("Error during login:", error);
    }
    try {
      const response = await axios.post("/getEdit_lenging", {
        famno: EditFam,
      });

      const data = await response.data;
      const data_edit = JSON.stringify(data);
      localStorage.setItem("Edit_Lending", data_edit);
    } catch (error) {
      console.error("Error during login:", error);
    }

    localStorage.setItem("EDIT", EditFam);
    setloading("True");
    setselectindex("0");

    window.location.href = "/ForRe";
  };

  const handlePDF = async (PDF_FAM) => {
    localStorage.removeItem("PDF_FAM_DATA");
    const PDF_FAM_DATA = PDF_FAM;
    localStorage.setItem("PDF_FAM_DATA", PDF_FAM_DATA);
    window.location.href = `/PDF_download
    `;
  };
  const handleVIEW = async (VIEW_FAM, TYPE) => {
    localStorage.setItem("EDIT", VIEW_FAM);
    localStorage.setItem("TYPE_flow", TYPE);
    window.location.href = `/VIEW_Fammaster`;
  };

  const TextTitle = () => {
    if (Path == "SEARCH") {
      setTxt_Title("Issue FAM");
      localStorage.setItem("page", Path);
    } else if (Path == "APPROVEFAM") {
      setTxt_Title("Approve FAM");
      localStorage.setItem("page", Path);
    } else if (Path == "FAMMASTER") {
      setTxt_Title("FAM Master List");
      localStorage.setItem("page", Path);
    }
  };
  const Delete = async (item, type) => {
    openPopupLoadding();

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
          const response = await axios.post("/namefile", { fam_no: item });
          const data1 = response.data;
          setdataName_file(data1);
          if (data1.length > 0) {
            for (let i = 0; i < data1.length; i++) {
              await axios.delete(`/deleteFile?data=${data1[i]}`);
            }
          }
          let Delect_Status;
          switch (type) {
            case "Transfer":
              Delect_Status = "FLTR999";
              break;
            case "Scrap":
              Delect_Status = "SCRAP";
              break;
            case "Sales":
              Delect_Status = "SALE";
              break;
            case "Loss":
              Delect_Status = "FLLS999";
              break;
            case "Write-off":
              Delect_Status = "FLWO999";
              break;
            case "Lending to Third-party":
              Delect_Status = "FLLD999";
              break;
            case "Donation":
              Delect_Status = "FLDN999";
              break;
            default:
              Delect_Status = "UNKNOWN";
              break;
          }
          await axios.post("/delect_all_fam_transfer", {
            famno: item,
            idsts: Delect_Status,
          });

          await axios.post("/delete_all_file", { famno: item });
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
  //Excel
  const dataExport = [];
  const sortedTableFirst = dataSearch.map((item) => [
    item[0],
    item[1],
    item[2],
    item[4],
    item[3],
    item[5],
    item[6],
    item[7],
  ]);

  sortedTableFirst.sort((a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a[i] < b[i]) return -1;
      if (a[i] > b[i]) return 1;
    }
    return 0;
  });
  dataExport.push(...sortedTableFirst);
  const exportToExcelTable1 = () => {
    const selectedData = dataExport.filter((item) =>
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
      XLSX.writeFile(wb, `Selected_RollLeaf1_.xlsx`);
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
        ...dataExport,
      ]);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
      XLSX.writeFile(wb, `RollLeaf3_.xlsx`);
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
  // const handleDateChange = (date, dateString) => {

  //   setSelectedDateTo(dateString);
  //   console.log("Selected Date: ", date);
  // };

  const handleDateChange = (date, dateString) => {
    // dateString จะอยู่ในรูปแบบ DD/MM/YYYY ตามที่กำหนดใน format
    const formattedDate = convertDate(dateString);
    setSelectedDateTo(dateString);
    setConvertedDate(formattedDate);
  };
  const handleDateToChange = (date, dateString) => {
    // dateString จะอยู่ในรูปแบบ DD/MM/YYYY ตามที่กำหนดใน format
    const formattedDate = convertDate(dateString);
    setSelectedDateTo(dateString);
    setConvertedDateTo(formattedDate);
  };

  const convertDate = (date) => {
    // ใช้ moment.js ในการแปลงวันที่
    return moment(date, "DD/MM/YYYY").format("YYYY-MM-DD");
  };

  // const handleSubmit = () => {
  //   // ใช้ค่าของ convertedDate ในการทำงานต่อ
  //   console.log("Submitting Converted Date: ", convertedDate);
  //   // คุณสามารถเรียก API หรือฟังก์ชันอื่นที่ต้องการใช้ค่าของ convertedDate ที่นี่
  // };
  // Use Effect
  useEffect(() => {
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
  }, []);

  return {
    UserLogin,
    datafac,
    selecteDatafac,
    setselecteDatafac,
    dept,
    selectdept,
    setselectdept,
    selectcostMul,
    setselectcostMul,
    selectStatus,
    setselectStatus,
    Status,
    selectdeptMul,
    setselectdeptMul,
    selectcost,
    setselectcost,
    ReType,
    selectReType,
    setselectReType,
    getCostCenter,
    selectCostCenter,
    dataSearch,
    checkHead,
    checkEmpty,
    checkData,
    loading,
    selectindex,
    selectindex_delete,
    selectedDateFrom,
    selectedDateTo,
    Txt_ID_Owner,
    dataStatus,
    PAGEStatus,
    Txt_Title,
    dataName_file,
    isPopupOpenLoadding,
    selectedRows,
    selectAll,
    label,
    closePopupLoadding,
    handleSelectChange,
    New,
    findStatus,
    handleEdit,
    handlePDF,
    handleVIEW,
    Search,
    exportToExcelTable1,
    handleCheckboxChange,
    handleSelectAll,
    Reset,
    Delete,
    selectStatusID,
    Path,
    setSelectedDateFrom,
    setSelectedDateTo,
    setTxt_ID_Owner,
    handleChangePage,
    handleChangeRowsPerPage,
    emptyRows,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    setselectCostCenter,
    emptyRows_table_report,
    handleDateChange,
    handleDateToChange,
  };
}

export { FAM_SEARCH };
