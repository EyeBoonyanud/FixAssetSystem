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
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Empty } from "antd";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Swal from "sweetalert2";
import AddTaskIcon from "@mui/icons-material/AddTask";
import PageLoadding from "../Loadding/Pageload";

function Issue() {
  const UserLoginn = localStorage.getItem("UserLogin");
  const Name = localStorage.getItem("Name");
  const Lastname = localStorage.getItem("Lastname");
 const Emp = localStorage.getItem("EmpID");
  let UserLogin = Emp +":" +Name + " " + Lastname;

  const [datafac, setdatafac] = useState([]);
  const [selecteDatafac, setselecteDatafac] = useState("");

  const [dept, setdept] = useState([]);
  const [selectdept, setselectdept] = useState("");

  const [cost, setcost] = useState([]);
  const [selectcost, setselectcost] = useState("");

  const [ReType, setReType] = useState([]);
  const [selectReType, setselectReType] = useState("");

  const [dataSearch, setdataSearch] = useState([]);
  const [checkHead, setCheckHead] = useState("hidden"); //ตัวแปรเช็คค่าของ ตาราง
  const [checkEmpty, setCheckEmpty] = useState("hidden"); // ตัวแปรเช็คค่าว่าง
  const [checkData, setCheckData] = useState("visible"); // ตัวแปร datashow warning

  // Loadding
  const [isPopupOpenLoadding, setPopupOpenLoadding] = useState(false);
  const openPopupLoadding = () => {
      setPopupOpenLoadding(true);
  };
  const closePopupLoadding = () => {
    setPopupOpenLoadding(false);
  };


  function formatDateString(rawDate) {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const date = new Date(rawDate);
    return date.toLocaleDateString(undefined, options);
  }
  const handleSelectChange = async (event) => {
    setselecteDatafac(event.target.value);
    let idFactory = event.target.value;
    // console.log(idFactory,"ถถถซ")
    try {
      const response = await axios.get(
        `http://localhost:5000/getdept?idFactory=${idFactory}`
      );
      // console.log(response.data,"ID1 :")
      const data = await response.data;
      // console.log(data,"ID2 :")
      setdept(data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleDept = (event) => {
    setselectdept(event.target.value);
  };
  const handleCost = (event) => {
    setselectcost(event.target.value);
    console.log(event.target.value, "setselectcost");
  };
  const handleType = (event) => {
    setselectReType(event.target.value);
    // console.log(event.target.value,"Typeeee")
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
    localStorage.removeItem("Type")
    navigate("/InsertIssue");
  };
  const currentURL = window.location.href;
  const parts = currentURL.split("/");
  const cutPath = parts[parts.length - 1];
  useEffect(() => {
    openPopupLoadding();
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
    const RequestType = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/gettype`);
        const TypeData = await response.data;
        setReType(TypeData);
        // console.log(TypeData, "TypeData");
      } catch (error) {
        console.error("Error during login:", error);
      }
      closePopupLoadding();
    };

    Factory();
    Costcenter();
    RequestType();
    // Remove();
  }, []);

  const Edit = async (EditFam) => {
    console.log(EditFam, "XXXXXXXXXXXXXXXxx");

    //reload_edit();
  };
  const EditFixAsset = async (EditFam) => {
    console.log(EditFam, "TTTTTTTTTTTTT");
  };


  const handleEdit = async (EditFam) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/getEdit_request_show?FamNo=${EditFam}`
      );
      const data = await response.data;
      console.log(data,"ooooo")
      // const DataEdit = data;
      const data_edit = JSON.stringify(data);


      localStorage.setItem("For_Req_Edit", data_edit);
    } catch (error) {
      //console.error("Error during login:", error);
    }
    try {
      const response = await axios.get(
        `http://localhost:5000/getEdit_FixAsset?FamNo=${EditFam}`
      );
      const data = await response.data;
      // console.log(data, "FIXEDDDDDDDDDDDDDDDd");
      const DataEdit = data;
      const data_edit = JSON.stringify(DataEdit);
      console.log(data_edit, "data_editdata_editdata_editdata_edit");
      localStorage.setItem("Edit_Dteail_for_FixedCode", data_edit);
    } catch (error) {
      //console.error("Error during login:", error);
    }
    try {
      const response = await axios.get(
        `http://localhost:5000/getEdit_Trans?FamNo=${EditFam}`
      );
      const data = await response.data;

      // // console(data, "dataaaaaaaaSSSSSSSSSSSS");

      // const DataEdit = data;
      const data_edit = JSON.stringify(data);
      localStorage.setItem("Edit_Trans", data_edit);
    } catch (error) {
      //console.error("Error during login:", error);
    }
    try {
      const response = await axios.get(
        `http://localhost:5000/getEdit_routing?FamNo=${EditFam}`
      );
      const data = await response.data;

      // console(data, "dataaaaaaaaSSSSSSSSSSSS");

      // const DataEdit = data;
      const data_edit = JSON.stringify(data);
      localStorage.setItem("Edit_routing", data_edit);
    } catch (error) {
      //console.error("Error during login:", error);
    }

    localStorage.setItem("EDIT", EditFam);

   window.location.href = "/ForRe";
  };
  const Search = async () => {
    if (cutPath === "Search") {
      const FamNo = document.getElementById("FamNo").value;
      const FamTo = document.getElementById("FamTo").value;
      const FixAsset = document.getElementById("FixAsset").value;
      const Date = document.getElementById("Date").value;
      const DateTo = document.getElementById("DateTo").value;
      try {
        const rollNoSearch = await axios.get(
          `http://localhost:5000/getsearch?UserLogin=${UserLoginn}&FacCode=${selecteDatafac}&DeptCode=${selectdept}&FamNo=${FamNo}&FamTo=${FamTo}&Costcenter=${selectcost}&FixAsset=${FixAsset}&ReType=${selectReType}&ReDate=${Date}&ReDateTo=${DateTo}`
        );
        const data = rollNoSearch.data;
        setCheckHead("visible");
        setdataSearch(data);
        if (data.length === 0) {
          setCheckEmpty("visible");
          setCheckData("hidden");
        } else {
          setCheckEmpty("hidden");
          setCheckData("visible");
        }
        // console.log(rollNoSearch.data,"Search: ")
        // console.log(selectdept,"DEPT:")
      } catch (error) {
        console.error("Error requesting data:", error);
      }
    } else {
      const FamNo = document.getElementById("FamNo").value;
      const FamTo = document.getElementById("FamTo").value;
      const FixAsset = document.getElementById("FixAsset").value;
      const Date = document.getElementById("Date").value;
      const DateTo = document.getElementById("DateTo").value;
      try {
        const rollNoSearch = await axios.get(
          `http://localhost:5000/getsearch2?UserLogin=${UserLoginn}&FacCode=${selecteDatafac}&DeptCode=${selectdept}&FamNo=${FamNo}&FamTo=${FamTo}&Costcenter=${selectcost}&FixAsset=${FixAsset}&ReType=${selectReType}&ReDate=${Date}&ReDateTo=${DateTo}`
        );
        const data = rollNoSearch.data;
        setCheckHead("visible");
        setdataSearch(data);
        if (data.length === 0) {
          setCheckEmpty("visible");
          setCheckData("hidden");
        } else {
          setCheckEmpty("hidden");
          setCheckData("visible");
        }
        // console.log(rollNoSearch.data,"Search: ")
        // console.log(selectdept,"DEPT:")
      } catch (error) {
        console.error("Error requesting data:", error);
      }
    }
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
    setdataSearch("");
    setCheckHead("hidden");
    setCheckEmpty("hidden");
    setCheckData("visible");
  };

  const Delete = async (item) => {
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
          // ลบข้อมูลทั้งหมดที่เกี่ยวข้อง
          await axios.post(
            `http://localhost:5000/delect_all_fam_transfer?famno=${item}`
          );
          await axios.post(
            `http://localhost:5000/delect_all_fam_details?famno=${item}`
          );
          await axios.post(
            `http://localhost:5000/delect_all_fam_header?famno=${item}`
          );
          // แสดง SweetAlert แจ้งให้ทราบว่าลบข้อมูลเรียบร้อยแล้ว
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
          // โหลดข้อมูลใหม่หลังจากลบข้อมูล
          Search();
        } catch (error) {
          console.error("Error deleting data:", error);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // ถ้าผู้ใช้ยกเลิกการลบ
        Swal.fire("Cancelled", "Your data is safe :)", "info");
      }
    });
  };

  return (
    
    <>                      <PageLoadding 
    isOpen={isPopupOpenLoadding}
    onClose={closePopupLoadding}
    />
      <Header />

      <div className="body">

        <div className="BoxSearch">
          {/* Factiory  */}

          <Grid
            container
            spacing={1}
            style={{
              width: "100%",
              marginLeft: "20px",
              marginTop: "20px",
              textAlign: "right",
            }}
          >

            <Grid item xs={3} style={{ marginTop: "2px"}}>
              <Typography>Factory :</Typography>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel size="small" id="demo-simple-select-label">
                  Select
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="factorycbt"
                  label="Select"
                  // className="factorycb"
                  value={selecteDatafac}
                  onChange={handleSelectChange}
                  size="small"
                  style={{
                    width: "220px",
                  }}
                >
                  {datafac.map((option, index) => (
                    <MenuItem key={index} value={option[0]}>
                      {option[1]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {/* FamNo. and To. */}
          <Grid
            container
            spacing={1}
            style={{ width: "100%", marginLeft: "20px", marginTop: "5px" }}
          >
            <Grid item xs={3} style={{ marginTop: "10px", textAlign: "right" }}>
              <Typography>FAM No :</Typography>
            </Grid>
            <Grid item xs={1.1} style={{ height: "10px" }}>
              <TextField
                id="FamNo"
                size="small"
                style={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                  width: "220px",
                  marginRight: "5px",
                }}
              ></TextField>
            </Grid>
            <Grid item xs={2} style={{ marginTop: "10px", textAlign: "right" }}>
              <Typography>To :</Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="FamTo"
                size="small"
                style={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                  width: "220px",
                  marginRight: "5px",
                }}
              ></TextField>
            </Grid>
          </Grid>

          {/* Dept. and Cost */}
          <Grid
            container
            spacing={1}
            style={{ width: "100%", marginLeft: "20px", marginTop: "5px" }}
          >
            <Grid item xs={3} style={{ marginTop: "2px", textAlign: "right" }}>
              <Typography>Dept :</Typography>
            </Grid>
            <Grid item xs={2}>
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
                  style={{
                    width: "220px",
                  }}
                >
                  {dept.map((option) => (
                    <MenuItem value={option[0]}>{option[0]}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={1.1}
              style={{ marginTop: "2px", textAlign: "right" }}
            >
              <Typography> Asset Cost Center :</Typography>
            </Grid>
            <Grid item xs={2}>
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

          {/* request and Fix */}
          <Grid
            container
            spacing={1}
            style={{ width: "100%", marginLeft: "20px", marginTop: "5px" }}
          >
            <Grid item xs={3} style={{ marginTop: "2px", textAlign: "right" }}>
              <Typography>Request Type :</Typography>
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel size="small" id="demo-simple-select-label">
                  Select
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  // id="factorycbt"
                  // className="factorycb"
                  label="Select"
                  value={selectReType}
                  onChange={handleType}
                  size="small"
                  style={{
                    width: "220px",
                  }}
                >
                  {ReType.map((option) => (
                    <MenuItem value={option[0]}>{option[1]}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={1.1}
              style={{ marginTop: "5px", textAlign: "right" }}
            >
              <Typography>Fix Asset Code :</Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField id="FixAsset" size="small"></TextField>
            </Grid>
          </Grid>

          {/* request Date and To */}
          <Grid
            container
            spacing={1}
            style={{ width: "100%", marginLeft: "20px", marginTop: "5px" }}
          >
            <Grid item xs={3} style={{ marginTop: "10px", textAlign: "right" }}>
              <Typography>Request Date :</Typography>
            </Grid>
            <Grid item xs={2} style={{ height: "10px" }}>
              <TextField
                id="Date"
                size="small"
                type="date"
                style={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                  width: "220px",
                  marginRight: "5px",
                }}
              ></TextField>
            </Grid>
            <Grid
              item
              xs={1.1}
              style={{ marginTop: "10px", textAlign: "right" }}
            >
              <Typography>To :</Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="DateTo"
                size="small"
                type="date"
                style={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                  width: "220px",
                  marginRight: "5px",
                }}
              ></TextField>
            </Grid>
          </Grid>

          {/* Request By */}
          <Grid
            container
            spacing={1}
            style={{ width: "100%", marginLeft: "20px", marginTop: "5px" }}
          >
            <Grid item xs={3} style={{ marginTop: "10px", textAlign: "right" }}>
              <Typography>Request By :</Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField size="small" value={UserLogin} disabled></TextField>
            </Grid>
          </Grid>

          {/* Search New Export */}
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <Grid>
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
            </Grid>
            <Grid
              style={{
                marginLeft: "20px",
                display: cutPath === "Search" ? "block" : "none",
              }}
            >
              <Button
                className="ButtonSearch"
                style={{
                  backgroundColor: "#391AFB",
                }}
                variant="contained"
                onClick={New}
              >
                <AddIcon />
                New
              </Button>
            </Grid>
            <Grid style={{ marginLeft: "20px" }}>
              <Button
                className="ButtonSearch"
                style={{
                  backgroundColor: "#00C344",
                  width: "180px",
                }}
                variant="contained"
              >
                <FileDownloadIcon />
                Export Excel
              </Button>
            </Grid>
            <Grid style={{ marginLeft: "20px" }}>
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
            </Grid>
          </Grid>
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
        <TableCell></TableCell>
        <TableCell>Factory</TableCell>
        <TableCell>Cost Center</TableCell>
        <TableCell>FAM No.</TableCell>
        <TableCell>Issue By</TableCell>
        <TableCell>Issue Date</TableCell>
        <TableCell>Type</TableCell>
        <TableCell>Fixed Asset Code</TableCell>
        <TableCell>Request Status</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {dataSearch.length > 0 ? (
        dataSearch.map((item) => (
          <TableRow key={item[2]}>
           <TableCell>
  {cutPath === "Search" ? (
    <Tooltip title="Edit">
      <EditNoteIcon
        style={{ color: "#F4D03F", fontSize: "30px" }}
        onClick={() => handleEdit(item[2])}
      />
    </Tooltip>
  ) : (
    <Tooltip title="Add">
      <AddTaskIcon
        style={{ color: "#F4D03F", fontSize: "30px" }}
        onClick={() => handleEdit(item[2])}
      />
    </Tooltip>
  )}
  {cutPath === "Search" && (
    <Tooltip title="Delete">
      {item[7] === "Create" && (
        <DeleteForeverIcon
          style={{
            color: "red",
            fontSize: "30px",
          }}
          onClick={() => Delete(item[2])}
        />
      )}
    </Tooltip>
  )}
</TableCell>

            <TableCell>{item[0]}</TableCell>
            <TableCell>{item[1]}</TableCell>
            <TableCell>{item[2]}</TableCell>
            <TableCell>{item[4]}</TableCell>
            <TableCell>{formatDateString(item[3])}</TableCell>
            <TableCell>{item[5]}</TableCell>
            <TableCell>{item[6]}</TableCell>
            <TableCell>{item[7]}</TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow style={{ visibility: checkEmpty }}>
          <TableCell colSpan={9}>
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
