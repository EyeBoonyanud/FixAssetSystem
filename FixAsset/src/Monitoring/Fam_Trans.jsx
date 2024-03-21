import React, { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Card,
  Select,
  FormControl,
  MenuItem,
  Box,
  Button,
  Autocomplete,
  FormHelperText
} from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../Page/Hearder";
import { useNavigate } from "react-router-dom";
import PageLoadding from "../Loadding/Pageload";
import "../Page/Style.css";


function TransFerDetail() {
  const VIEW_FAM = localStorage.getItem("EDIT")
  const [DataTransferFamno, setDataTransferFamno] = useState([]);
  const [DataRoutingFamno, setDataRoutingFamno] = useState([]);
  const [ DataName, setDataName] = useState("");
 
  const [selectradio_dept, setselectradio_dept] = useState("");
  const [selectradio_serviceby, setselectradio_serviceby] = useState("");
  const [selectradio_boistaff, setselectradio_boistaff] = useState("");
  const [selectradio_boimanager, setselectradio_boimanager] = useState("");
  const [selectradio_facmanager, setselectradio_facmanager] = useState("");
  const [selectradio_acc_check, setselectradio_acc_check] = useState("");
  const [selectradio_owner, setselectradio_owner] = useState("");
  const [selectradio_receiver, setselectradio_receiver] = useState("");
  const [selectradio_record, setselectradio_record] = useState("");
  const [selectradio_acc_manager, setselectradio_acc_manager] = useState("");
  const [selectradio_service_close_by, setselectradio_service_close_by] =
    useState("");
  




    const [isPopupOpenLoadding, setPopupOpenLoadding] = useState(false);
  const openPopupLoadding = () => {
    setPopupOpenLoadding(true);
  };
  const closePopupLoadding = () => {
    setPopupOpenLoadding(false);
  };

  ////////////////////// ตัวแปร ทั่วไป  //////////////////////////////
 


  
  ////////////////////// Use Effect /////////////////////////////////
  useEffect(() => {
    openPopupLoadding();
    const FAM_Routing  = async () => {
      try {
        const response = await axios.get(
          `http://10.17.162.238:5000/getData_Routing_show_VIEW?FamNo=${VIEW_FAM}`
        );
        const data = await response.data.flat();
        setDataRoutingFamno(data);
        setselectradio_dept(data[1])
        setselectradio_serviceby(data[7])
        setselectradio_boistaff(data[11])
        setselectradio_boimanager(data[15])
        setselectradio_facmanager(data[19])
        setselectradio_acc_check(data[23])
        setselectradio_owner(data[27])
        setselectradio_record(data[31])
        setselectradio_acc_manager(data[35])
        setselectradio_service_close_by(data[39])

      } catch (error) {
        console.error("Error RequesterORType:", error);
      }
    };
    const FAM_Transfer = async () => {
      try {
        const response = await axios.get(
          `http://10.17.162.238:5000/getData_Transfer_show_VIEW?FamNo=${VIEW_FAM}`
        );
        const data = await response.data.flat();
        setDataTransferFamno(data) ;
        setselectradio_receiver(data[12])
        console.log(data,"data")
      } catch (error) {
        console.error("Error RequesterORType:", error);
      }
    };
    const Name = async () => {
      try {
        const response = await axios.get(
          `http://10.17.162.238:5000/getData_showName?FamNo=${VIEW_FAM}`
        );
        const data = await response.data;

        setDataName(data) ;
        console.log(data,"datauuuuuuuuuuuu")
      } catch (error) {
        console.error("Error RequesterORType:", error);
      }
    };

    Name();
    FAM_Transfer();
    FAM_Routing();
    setTimeout(function () {
      closePopupLoadding();
    }, 2000);
;
    }
  , []);

  // const queryParams = new URLSearchParams(window.location.search);
  // const VIEW_FAM = queryParams.get("VIEW_FAM");
  // console.log(VIEW_FAM, "VIEW");

  const  BackPage = async () => {
    console.log(VIEW_FAM,"PDF_FAM");
    const encodedVIEW_FAM = encodeURIComponent(VIEW_FAM);
    window.location.href = `/VIEW_Fammaster?VIEW_FAM=${encodedVIEW_FAM}`;
  };


  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <Header />
      </div>
      <PageLoadding isOpen={isPopupOpenLoadding} onClose={closePopupLoadding} />
      <div  style={{ display: 'flex', justifyContent: 'flex-end', marginRight:'40px' ,fontSize:'15px'}}>
        <Typography>  FAM NO : {VIEW_FAM}</Typography>

</div>
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
                  <td className="Style4">
                    {" "}
                    <Typography variant="subtitle2">
                      Owner (Send from) :
                    </Typography>
                  </td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                        value={DataName}
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        ////  onChange={(e) => setownersend(e.target.value)}
                      />
                    </FormControl>
                  </td>
                  <td className="Style5"></td>
                  <td className="Style7">
                    <Typography variant="subtitle2">
                      From BOI Project :
                    </Typography>
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        //defaultFactoryValue=""
                        size="small"
                     value={DataTransferFamno[0]}
                      
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        ////  onChange={(e) => setdata_fromboi(e.target.value)}
                        disabled
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">
                      Transfer to Factory :
                    </Typography>
                  </td>
                  <td>
                  
                      <TextField
                        style={{
                          backgroundColor :"rgba(169, 169, 169, 0.3)"
                            
                        }}
                        className="Style1"
                        size="small"
                        disabled
                       value={DataTransferFamno[1]}
                      ></TextField>
                  
                  </td>
                  <td className="Style5"></td>
                  <td className="Style7">
                    <Typography variant="subtitle2">
                      Transfer to CC :
                    </Typography>
                  </td>
                  <td className="Style6">
                   
                    
               
             
                      <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataTransferFamno[2]}
                      ></TextField>
                    
                  </td>
                </tr>

                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">
                      New BOI Project :
                    </Typography>
                  </td>
                  <td>
                    <FormControl className="Style1">
   <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataTransferFamno[3]}
                      ></TextField>
                    </FormControl>
                  </td>
                  <td className="Style5" colSpan={3}></td>
                </tr>
                {/* {// console.log("PAGE_STATUS === EDIT", STS)} */}
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">New Owner :</Typography>
                  </td>
                  <td>
                  <FormControl className="Style1">
   <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataTransferFamno[4]}
                      ></TextField>
                    </FormControl>
                  </td>
                  <td className="Style5"></td>
                  <td className="Style7">
                    <Typography variant="subtitle2">Tel :</Typography>
                  </td>
                  <td className="Style6">
                  <FormControl className="Style1">
   <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataTransferFamno[5]}
                      ></TextField>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">
                      Plan Remove Date :
                    </Typography>
                  </td>
                  {/* {// console.log(ErrorDate, plan_date, "************")} */}
                  <td>
                  <FormControl className="Style1">
   <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataTransferFamno[6]}
                      ></TextField>
                    </FormControl>
                  </td>
                  <td className="Style5" colSpan={3}></td>
                </tr>
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">
                      Transfer Abnormal :
                    </Typography>
                  </td>
                  <td colSpan={4}>
                  <FormControl className="Style1">
   <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataTransferFamno[7]}
                      ></TextField>
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
                {/* Department Manager */}
                <tr >
                  <td className="Style4">
                    <Typography variant="subtitle2">
                      Department Manager :
                    </Typography>
                  </td>
                  <td>
                  <FormControl className="Style1">
   <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[0]}
                      ></TextField>
                    </FormControl>
                  </td>
{console.log(selectradio_dept,"DataRoutingFamno[1]")}
                  <td className="Style5">
  <FormControl style={{ visibility: selectradio_dept==null || selectradio_dept=="null"  ? "hidden" : "visibled" }}>
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
      value={selectradio_dept}
      // onChange={(e) => setselectradio_dept(e.target.value)}
    >
      <FormControlLabel
        value="A"
        control={<Radio size="small" />}
        label="Approve"
        disabled
      />
      <FormControlLabel
        value="R"
        control={<Radio size="small" />}
        label="Reject"
        disabled
      />
    </RadioGroup>
  </FormControl>
</td>

                  <td className="Style7"style={{ visibility: selectradio_dept==null || selectradio_dept=="null"  ? "hidden" : "visibled" }}>
                    <Typography
                      variant="subtitle2"
                     
                    >
                      {" "}
                      Action Date :
                    </Typography>
                  </td >
                  <td className="Style6" style={{ visibility: selectradio_dept==null || selectradio_dept=="null"  ? "hidden" : "visibled" }}>
                    <FormControl className="Style1" >
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                       value={DataRoutingFamno[2]}
                        //  onChange={(e) => setaction__dept(e.target.value)}
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                         
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
               
                <tr
                  style={{ display: (DataRoutingFamno[3] === null || DataRoutingFamno[3] === "" ) ? "none" : "table-row" }}
                 
                >
                  <td className="Style4">
                    <Typography variant="subtitle2"> Comment :</Typography>
                  </td>
                  <td colSpan={4}>
                  <FormControl className="Style1">
   <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[3] !== "null" ? DataRoutingFamno[3] : ''}
                       
                      ></TextField>
                    </FormControl>
                  </td>
                </tr>
              
                <tr>
                  <td className="Style4">
                    {" "}
                    <Typography variant="subtitle2"> Service Dept :</Typography>
                  </td>
                  <td>
                  <FormControl className="Style1">
   <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                       value={DataRoutingFamno[4]}
                      ></TextField>
                    </FormControl>
                  </td>
                  <td className="Style5"></td>
                  <td className="Style7">
                    {" "}
                    <Typography variant="subtitle2">Tel :</Typography>
                  </td>
                  <td>
                  <FormControl className="Style1">
   <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[5]}
                      ></TextField>
                    </FormControl>
                  </td>
                </tr>
                {/* Servide By */}
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">Service By :</Typography>
                  </td>
                  <td>
                  <FormControl className="Style1">
   <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[6]}
                      ></TextField>
                    </FormControl>
                  </td>
               
                  <td className="Style5">
                    <FormControl style={{ visibility: selectradio_serviceby==null || selectradio_serviceby=="null"  ? "hidden" : "visibled" }}>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_serviceby}
              
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          disabled
                        />
                        <FormControlLabel
                          value="R"
                          disabled
                          control={<Radio size="small" />}
                          label="Not Accept"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: selectradio_serviceby==null || selectradio_serviceby=="null"  ? "hidden" : "visibled" }}>
                    <Typography
                      variant="subtitle2"
                    >
                      Action Date :
                    </Typography>
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1"  style={{ visibility: selectradio_serviceby==null ||selectradio_serviceby=="null"  ? "hidden" : "visibled" }}>
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                        value={DataRoutingFamno[8]}
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)"
                        }}
                      />
                    </FormControl>
                  </td>{" "}
                </tr>
                <tr
               style={{ display: (DataRoutingFamno[9] === null || DataRoutingFamno[9] === "" ) ? "none" : "table-row" }}
                >
                  <td className="Style4">
                    <Typography variant="subtitle2">Comment :</Typography>
                  </td>
                  <td colSpan={4}>
                  <FormControl className="Style1">
   <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[9] !== "null" ? DataRoutingFamno[9] : ''}
                        
                      ></TextField>
                    </FormControl>
                  </td>
                </tr>
                {/* BOI Staff */}
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">BOI Staff :</Typography>{" "}
                  </td>
                  <td>
                  <FormControl className="Style1">
   <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[10]}
                      ></TextField>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl   
style={{ visibility: selectradio_boistaff==null || selectradio_boistaff=="null"  ? "hidden" : "visibled" }} >
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_boistaff}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          disabled
                        />
                        <FormControlLabel
                          value="R"
                          disabled
                          control={<Radio size="small" />}
                          label="No Accept"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" 
style={{ visibility: selectradio_boistaff==null || selectradio_boistaff=="null"  ? "hidden" : "visibled" }}>
                    <Typography
                      variant="subtitle2"
                      
                    >
                      Action Date :
                    </Typography>
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1" style={{ visibility: selectradio_boistaff==null || selectradio_boistaff=="null"  ? "hidden" : "visibled" }}>
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                        value={DataRoutingFamno[12]}
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)"
                        }}
                      />
                    </FormControl>
                  </td>{" "}
                </tr>
                <tr style={{ display: (DataRoutingFamno[13] === null || DataRoutingFamno[13] === "") ? "none" : "table-row" }}>
                  <td className="Style4">
                    <Typography variant="subtitle2"> Comment :</Typography>
                  </td>
                  <td colSpan={4}>
                  <FormControl className="Style1">
   <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[13] !== "null" ? DataRoutingFamno[13] : ''}
                       
                      ></TextField>
                    </FormControl>
                  </td>
                </tr>{" "}
                {/* BOI Manager */}
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">BOI Manager :</Typography>{" "}
                  </td>
                  <td>
                    <FormControl className="Style3">
   <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[14]}
                      ></TextField>
                  
                    
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl 
style={{ visibility: selectradio_boimanager ==null || selectradio_boimanager =="null"  ? "hidden" : "visibled" }}>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_boimanager}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Approve"
                          disabled
                        />
                        <FormControlLabel
                          value="R"
                          control={<Radio size="small" />}
                          label="Reject"
                          disabled
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  
                  <td className="Style7" style={{ visibility:selectradio_boimanager==null || selectradio_boimanager=="null"  ? "hidden" : "visibled" }}>
                    <Typography
                      variant="subtitle2"
                    
                    >
                      Action Date :
                    </Typography>
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1" style={{ visibility:selectradio_boimanager==null || selectradio_boimanager=="null"  ? "hidden" : "visibled" }}>
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        value={DataRoutingFamno[16]}
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>{" "}
                </tr>
                <tr style={{ display: (DataRoutingFamno[17] === null || DataRoutingFamno[17] === "") ? "none" : "table-row" }}>
                  <td className="Style4">
                    <Typography variant="subtitle2"> Comment :</Typography>
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        value={DataRoutingFamno[17] !== "null" ? DataRoutingFamno[17] : ''}
                    
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)"
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                {/* Factory Manager */}
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">
                      Factory Manager :
                    </Typography>{" "}
                  </td>
                  <td>
                    <FormControl className="Style3">
                    <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[18]}
                      ></TextField>
                    </FormControl>
                  </td>

                  <td className="Style5">
                    <FormControl style={{ visibility: selectradio_facmanager==null || selectradio_facmanager=="null"  ? "hidden" : "visibled" }}>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_facmanager}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Approve"
                          disabled
                        />
                        <FormControlLabel
                          value="R"
                          disabled
                          control={<Radio size="small" />}
                          label="Reject"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>

                  <td className="Style7" style={{ visibility: selectradio_facmanager==null || selectradio_facmanager=="null"  ? "hidden" : "visibled" }}>
                    <Typography
                      variant="subtitle2"
                    >
                      Action Date :
                    </Typography>
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1" style={{ visibility: selectradio_facmanager==null || selectradio_facmanager=="null"  ? "hidden" : "visibled" }}>
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                        value={DataRoutingFamno[20]}
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <>
                  <tr
                  style={{ display: (DataRoutingFamno[21] === null || DataRoutingFamno[21] === "" ) ? "none" : "table-row" }}
                  >
                    <td className="Style4">
                      <Typography variant="subtitle2"> Comment :</Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          disabled
                          value={DataRoutingFamno[21] !== "null" ? DataRoutingFamno[21] : ''}

                          // value={DataRoutingFamno[21]}
                          size="small"
                          style={{
                            backgroundColor:"rgba(169, 169, 169, 0.3)"
                          }} 
                        />
                      </FormControl>
                    </td>
                  </tr>
                </>
                {/* ACC Check */}
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">ACC Check :</Typography>{" "}
                  </td>
                  <td>
                    <FormControl className="Style3">
                    <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[22]}
                      ></TextField>
                  
                    </FormControl>
                  </td>

                  <td className="Style5">
                    <FormControl style={{ visibility: selectradio_acc_check==null || selectradio_acc_check=="null"  ? "hidden" : "visibled" }}>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_acc_check}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          disabled
                        />
                        <FormControlLabel
                          value="R"
                          control={<Radio size="small" />}
                          label="No Accept"
                          disabled
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: selectradio_acc_check==null || selectradio_acc_check=="null"  ? "hidden" : "visibled" }}>
                    <Typography
                      variant="subtitle2"
                    >

                      Action Date :
                    </Typography>
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1" style={{ visibility: selectradio_acc_check==null || selectradio_acc_check=="null"  ? "hidden" : "visibled" }}>
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                        value={DataRoutingFamno[24]}
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",}}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr style={{ display: (DataRoutingFamno[25] === null || DataRoutingFamno[25] === "" ) ? "none" : "table-row" }}>
                  <td className="Style4">
                    {" "}
                    <Typography variant="subtitle2">Comment :</Typography>{" "}
                  </td>
                  <td colSpan={4}>
                  <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[25] !== "null" ? DataRoutingFamno[25] : ''}
                       
                      ></TextField>
                  </td>
                </tr>{" "}
                {/* Owner */}
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">Owner :</Typography>{" "}
                  </td>
                  <td>
                    <FormControl className="Style3">
                    <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[26]}
                      ></TextField>
                    
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl style={{ visibility: selectradio_owner==null || selectradio_owner=="null"  ? "hidden" : "visibled" }}>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        value={selectradio_owner}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          disabled
                        />
                        <FormControlLabel
                          value="R"
                          disabled
                          control={<Radio size="small" />}
                          label="No Accept"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: selectradio_owner==null || selectradio_owner=="null"  ? "hidden" : "visibled" }}>
                    <Typography
                      variant="subtitle2"
                    >
                      Action Date :
                    </Typography>
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1" style={{ visibility: selectradio_owner==null || selectradio_owner=="null"  ? "hidden" : "visibled" }}>
                    <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[28]}
                      ></TextField>
                    </FormControl>
                  </td>{" "}
                </tr>
                <tr style={{ display: (DataRoutingFamno[29] === null || DataRoutingFamno[29] === "" ) ? "none" : "table-row" }}>
                  <td className="Style4">
                    <Typography variant="subtitle2">Comment :</Typography>
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                    <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[29] !== "null" ? DataRoutingFamno[29] : ''}
                        // value={DataRoutingFamno[29]}
                      ></TextField>
                    </FormControl>
                  </td>
                </tr>{" "}
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

                marginTop: "-0.5%",
                marginRight: "85%",
                width: "8%",
                display: "flex",
                border: 0,

                justifyContent: "center",
              }}
            ></Typography>
            <div className="Style2">
              <table className="Style3">
                <tr>
                  <td className="Style4">
                    {" "}
                    <Typography variant="subtitle2">
                      {" "}
                      Receiver :
                    </Typography>{" "}
                  </td>
                  <td>
                    <FormControl className="Style3">
                    <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                       value={DataTransferFamno[8]}
                      ></TextField>
                    </FormControl>
                  </td>

                  <td className="Style5">
                    <FormControl style={{ visibility: selectradio_receiver==null || selectradio_receiver=="null"  ? "hidden" : "visibled" }}>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_receiver}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          disabled
                        />
                        <FormControlLabel
                          value="R"
                          disabled
                          control={<Radio size="small" />}
                          label="No Accept"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: selectradio_receiver==null || selectradio_receiver=="null"  ? "hidden" : "visibled" }}>
                    <Typography
                      variant="subtitle2"
                    >
                      Action Date :
                    </Typography>
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1" style={{ visibility: selectradio_receiver==null || selectradio_receiver=="null"  ? "hidden" : "visibled" }}>
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        value={DataTransferFamno[10]}
                        //  onChange={(e) => setaction__receiver(e.target.value)}
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
             
                <tr style={{ display: (DataTransferFamno[11] === null || DataTransferFamno[11] === "" ) ? "none" : "table-row" }}>
  <td className="Style4">
    <Typography variant="subtitle2"> Comment :</Typography>
  </td>
  <td colSpan={4}>
    <FormControl className="Style1">
      <TextField
        style={{
          backgroundColor: "rgba(169, 169, 169, 0.3)"
        }}
        className="Style1"
        size="small"
        disabled
        value={DataRoutingFamno[11] !== "null" ? DataRoutingFamno[11] : ''}
       
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
                // border: 1,
                // borderColor: "rgba(64,131,65, 1.5)",
                // boxShadow: "0px 4px 8px rgba(64,131,65, 0.4)",
                justifyContent: "center",
              }}
            >
              Close Routing
            </Typography>
            <div className="Style2">
              <table className="Style3">
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2"> ACC Record :</Typography>
                  </td>
                  <td>
                    <FormControl className="Style1">
                    <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[30]}
                      ></TextField>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl style={{ visibility: selectradio_record==null || selectradio_record=="null"  ? "hidden" : "visibled" }}>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_record}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          disabled
                        />
                        <FormControlLabel
                          value="R"
                          disabled
                          control={<Radio size="small" />}
                          label="No Accept"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: selectradio_record==null || selectradio_record=="null"  ? "hidden" : "visibled" }}>
                    <Typography
                      variant="subtitle2"
                    >
                      {" "}
                      Action Date :
                    </Typography>
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1" style={{ visibility: selectradio_record==null || selectradio_record=="null"  ? "hidden" : "visibled" }}>
                    <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[32]}
                      ></TextField>
                    </FormControl>
                  </td>
                </tr>
                <tr style={{ display: (DataRoutingFamno[33] === null || DataRoutingFamno[33] === "" ) ? "none" : "table-row" }}>
                  <td className="Style4">
                    <Typography variant="subtitle2">Comment :</Typography>
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                    <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[33] !== "null" ? DataRoutingFamno[33] : ''}
                       
                      ></TextField>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">ACC Manager :</Typography>{" "}
                  </td>
                  <td>
                    <FormControl className="Style3">
                    <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[34]}
                      ></TextField>
                  
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl style={{ visibility: selectradio_acc_manager==null || selectradio_acc_manager=="null"  ? "hidden" : "visibled" }}>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_acc_manager}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Approve"
                          disabled
                        />
                        <FormControlLabel
                          value="R"
                          disabled
                          control={<Radio size="small" />}
                          label="Reject"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: selectradio_acc_manager==null || selectradio_acc_manager=="null"  ? "hidden" : "visibled" }}>
                    <Typography
                      variant="subtitle2"
                    >
                      {" "}
                      Action Date :
                    </Typography>
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1" style={{ visibility: selectradio_acc_manager==null || selectradio_acc_manager=="null"  ? "hidden" : "visibled" }}>
                    <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[36]}
                      ></TextField>
                    </FormControl>
                  </td>
                </tr>
                <tr style={{ display: (DataRoutingFamno[37] === null || DataRoutingFamno[37] === "" ) ? "none" : "table-row" }}>
                  <td className="Style4">
                    <Typography variant="subtitle2"> Comment :</Typography>
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                    <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[37] !== "null" ? DataRoutingFamno[37] : ''}
                        
                      ></TextField>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">
                      Service Close By :
                    </Typography>{" "}
                  </td>
                  <td>
                    <FormControl className="Style1">
                    <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[38]}
                      ></TextField>
                    </FormControl>
                  </td>
               {console.log(selectradio_service_close_by,"selectradio_service_close_by")}
                  <td className="Style5">
                    <FormControl style={{ visibility: selectradio_service_close_by==null || selectradio_service_close_by=="null"  ? "hidden" : "visibled" }}>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_service_close_by}

                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Approve"
                          disabled
                        />
                        <FormControlLabel
                          value="R"
                          disabled
                          control={<Radio size="small" />}
                          label="Reject"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: selectradio_service_close_by==null || selectradio_service_close_by=="null"  ? "hidden" : "visibled" }}>
                    <Typography
                      variant="subtitle2"
                    >
                      Action Date :
                    </Typography>
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1" style={{ visibility: selectradio_service_close_by==null || selectradio_service_close_by=="null"  ? "hidden" : "visibled" }}>
                    <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)"
                          
                      }}
                        className="Style1"
                        size="small"
                        disabled
                       value={DataRoutingFamno[40]}
                      ></TextField>
                    </FormControl>
                  </td>
                </tr>
                <tr style={{ display: (DataRoutingFamno[41] === null || DataRoutingFamno[41] === "" ) ? "none" : "table-row" }}>
                  <td className="Style4">
                    <Typography variant="subtitle2">Comment :</Typography>
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        value={DataRoutingFamno[41] !== "null" ? DataRoutingFamno[41] : ''}
                     
                        size="small"
                        disabled
                        style={{
                          backgroundColor :"rgba(169, 169, 169, 0.3)" ,
                        }}
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
       
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              style={{
                width: "200px",
                marginTop: "20px",
                marginBottom: "20px",
                marginLeft: "20px",
                backgroundColor: "gray",
              }}
              onClick={BackPage}
            >
              BACK PAGE
            </Button>
            {/* <Button
              variant="contained"
              style={{
                width: "200px",
                marginTop: "20px",
                marginBottom: "20px",
                marginRight: "20px",
                backgroundColor: "gray",
              }}
            >
              Next Page
            </Button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default TransFerDetail;