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
// import Header from "../Page/Hearder";
import { useNavigate } from "react-router-dom";
// import PageLoadding from "../Loadding/Pageload";
import "../Page/Style.css";


function TransFerDetail() {
 




  

  ////////////////////// ตัวแปร ทั่วไป  //////////////////////////////
 


  
  ////////////////////// Use Effect /////////////////////////////////
  useEffect(() => {
    
    }
  , []);

  const queryParams = new URLSearchParams(window.location.search);
  const VIEW_FAM = queryParams.get("VIEW_FAM");
  console.log(VIEW_FAM, "VIEW");

  const  BackPage = async () => {
    console.log(VIEW_FAM,"PDF_FAM");
    const encodedVIEW_FAM = encodeURIComponent(VIEW_FAM);
    window.location.href = `/VIEW_Fammaster?VIEW_FAM=${encodedVIEW_FAM}`;
  };


  return (
    <>
      <div style={{ marginTop: "100px" }}>
        {/* <Header /> */}
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
                        //value={ownersend}
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
                      // value=
                      //  {data_fromboi}
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
                       // value={For_edit_trans[0][13]}
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
                       // value={For_edit_trans[0][1]}
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
                       // value={For_edit_trans[0][1]}
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
                       // value={For_edit_trans[0][1]}
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
                       // value={For_edit_trans[0][1]}
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
                       // value={For_edit_trans[0][1]}
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
                       // value={For_edit_trans[0][1]}
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
                <tr>
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
                       // value={For_edit_trans[0][1]}
                      ></TextField>
                    </FormControl>
                  </td>

                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        //value={selectradio_dept}
                        //  onChange={(e) => setselectradio_dept(e.target.value)}
                      
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
                  <td className="Style7">
                    <Typography
                      variant="subtitle2"
                     
                    >
                      {" "}
                      Action Date :
                    </Typography>
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                       
                        //  onChange={(e) => setaction__dept(e.target.value)}
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                         
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
               
                <tr
                  // style={{display:''}}
                 
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
                       // value={For_edit_trans[0][1]}
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
                       // value={For_edit_trans[0][1]}
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
                       // value={For_edit_trans[0][1]}
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
                       // value={For_edit_trans[0][1]}
                      ></TextField>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={""}
              
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
                  <td className="Style7">
                    <Typography
                      variant="subtitle2"
                    >
                      Action Date :
                    </Typography>
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)"
                        }}
                      />
                    </FormControl>
                  </td>{" "}
                </tr>
                <tr
               
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
                       // value={For_edit_trans[0][1]}
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
                       // value={For_edit_trans[0][1]}
                      ></TextField>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={""}
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
                  <td className="Style7">
                    <Typography
                      variant="subtitle2"
                      
                    >
                      Action Date :
                    </Typography>
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)"
                        }}
                      />
                    </FormControl>
                  </td>{" "}
                </tr>
                <tr>
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
                       // value={For_edit_trans[0][1]}
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
                       // value={For_edit_trans[0][1]}
                      ></TextField>
                  
                    
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={""}
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
                  <td className="Style7">
                    <Typography
                      variant="subtitle2"
                    
                    >
                      Action Date :
                    </Typography>
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>{" "}
                </tr>
                <tr >
                  <td className="Style4">
                    <Typography variant="subtitle2"> Comment :</Typography>
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        value={""}
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
                       // value={For_edit_trans[0][1]}
                      ></TextField>
                    </FormControl>
                  </td>

                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={""}
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

                  <td className="Style7">
                    <Typography
                      variant="subtitle2"
                    >
                      Action Date :
                    </Typography>
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <>
                  <tr
                  >
                    <td className="Style4">
                      <Typography variant="subtitle2"> Comment :</Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          disabled
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
                       // value={For_edit_trans[0][1]}
                      ></TextField>
                  
                    </FormControl>
                  </td>

                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={""}
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
                  <td className="Style7">
                    <Typography
                      variant="subtitle2"
                    >

                      Action Date :
                    </Typography>
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                        value={""}
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",}}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
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
                       // value={For_edit_trans[0][1]}
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
                       // value={For_edit_trans[0][1]}
                      ></TextField>
                    
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={""}
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
                  <td className="Style7">
                    <Typography
                      variant="subtitle2"
                    >
                      Action Date :
                    </Typography>
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
                       // value={For_edit_trans[0][1]}
                      ></TextField>
                    </FormControl>
                  </td>{" "}
                </tr>
                <tr>
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
                       // value={For_edit_trans[0][1]}
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
                       // value={For_edit_trans[0][1]}
                      ></TextField>
                    </FormControl>
                  </td>

                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      //  value={""}
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
                  <td className="Style7">
                    <Typography
                      variant="subtitle2"
                    >
                      Action Date :
                    </Typography>
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        value={""}
                        //  onChange={(e) => setaction__receiver(e.target.value)}
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>

                <tr>
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
                       // value={For_edit_trans[0][1]}
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
                       // value={For_edit_trans[0][1]}
                      ></TextField>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={""}
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
                  <td className="Style7">
                    <Typography
                      variant="subtitle2"
                    >
                      {" "}
                      Action Date :
                    </Typography>
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
                       // value={For_edit_trans[0][1]}
                      ></TextField>
                    </FormControl>
                  </td>
                </tr>
                <tr>
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
                       // value={For_edit_trans[0][1]}
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
                       // value={For_edit_trans[0][1]}
                      ></TextField>
                  
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                       // value={""}
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
                  <td className="Style7">
                    <Typography
                      variant="subtitle2"
                    >
                      {" "}
                      Action Date :
                    </Typography>
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
                       // value={For_edit_trans[0][1]}
                      ></TextField>
                    </FormControl>
                  </td>
                </tr>
                <tr>
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
                       // value={For_edit_trans[0][1]}
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
                       // value={For_edit_trans[0][1]}
                      ></TextField>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                       // value={""}

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
                  <td className="Style7">
                    <Typography
                      variant="subtitle2"
                    >
                      Action Date :
                    </Typography>
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
                       // value={For_edit_trans[0][1]}
                      ></TextField>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">Comment :</Typography>
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                       // value={""}
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