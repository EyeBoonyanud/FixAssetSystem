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
  Paper,
  Checkbox,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";

import {
  DeleteOutlined,
  FileTextOutlined,
  FileExcelOutlined,
  FilePdfOutlined,
  FileWordOutlined,
  FileUnknownOutlined,
  CloudUploadOutlined,
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import Header from "../Page/Hearder";
import DeleteIcon from "@mui/icons-material/Delete";

import PageLoadding from "../Loadding/Pageload";

function ForRequest() {
  const navigate = useNavigate();
  const VIEW_FAM = localStorage.getItem("EDIT");
  const VIEW_TYPE = localStorage.getItem("TYPE_flow")
  console.log(VIEW_FAM, "VIEW_FAM",VIEW_TYPE);
  const NextPage = async () => {
    window.location.href = `/FamTrans`;
  };
  const Back_page = async () => {
    window.location.href = `/FAMMaster`;
    localStorage.removeItem("EDIT");
  };
  const For_Edit_Fixed = localStorage.getItem("Edit_Dteail_for_FixedCode");
  const For_Ed_FixCode = JSON.parse(For_Edit_Fixed);

  const For_edit_request = localStorage.getItem("For_Req_Edit");
  const For_Rq_Edit = JSON.parse(For_edit_request);
  console.log("For_Rq_Edit", For_Rq_Edit);

  const FileUp = localStorage.getItem("Type");
  var storedFileArray = JSON.parse(FileUp);

  const [isPopupOpenLoadding, setPopupOpenLoadding] = useState(false);
  const openPopupLoadding = () => {
    setPopupOpenLoadding(true);
  };
  const closePopupLoadding = () => {
    setPopupOpenLoadding(false);
  };
  const [Datafamno, setDatafamno] = useState([]);
  const [DataDetailfamno, setDataDetailfamno] = useState([]);

  const [Filedata, setFiledata] = useState([]);

  const queryParams = new URLSearchParams(window.location.search);
  const downloadFile = (fileName) => {
    const downloadUrl = `/downloads?filename=${encodeURIComponent(
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
  useEffect(() => {
    openPopupLoadding();
    const fetchData = () => {
      axios
        .post("/FAM_FILE_ATTACH", {
          FamNo: VIEW_FAM,
        })
        .then((res) => {
          const data = res.data;
          if (data.length > 0) {
            setFiledata(data);
            // console.log(data);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    const FAM_Hearder = async () => {
        try {
          const response = await axios.post("/getData_Hearder_show_VIEW", {
            famno: VIEW_FAM,
          });
        const data = await response.data;
        setDatafamno(data);
      } catch (error) {
        console.error("Error RequesterORType:", error);
      }
    };
    const FAM_Detail = async () => {
   
        try {
          const response = await axios.post("/getData_Detail_show_VIEW", {
            famno: VIEW_FAM,
          });
        const data = await response.data;
        setDataDetailfamno(data);
      } catch (error) {
        console.error("Error RequesterORType:", error);
      }
    };

    fetchData();
    FAM_Hearder();
    FAM_Detail();
    setTimeout(function () {
      closePopupLoadding();
    }, 2000);
  }, []);

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <Header />
      </div>
      <PageLoadding isOpen={isPopupOpenLoadding} onClose={closePopupLoadding} />

      <div className="Box-Insert">
        {/* สำหรับ Gen Fam no */}
        <div className="Insert">
          {/* <PageLoadding
            isOpen={isPopupOpenLoadding}
            onClose={closePopupLoadding}
          /> */}
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
                      value={Datafamno && Datafamno[0] ? Datafamno[0][0] : ""}
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
                      value={Datafamno && Datafamno[0] ? Datafamno[0][1] : ""}
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
                      value={Datafamno && Datafamno[0] ? Datafamno[0][2] : ""}
                      // onChange={(e) => setdataUserLogin1(e.target.value)}
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
                      disabled
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      id="Txt_Tel"
                      value={Datafamno && Datafamno[0] ? Datafamno[0][3] : ""}
                      //   ={handleTel
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
                      disabled
                      size="small"
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      id="Txt_user"
                      value={Datafamno && Datafamno[0] ? Datafamno[0][4] : ""}
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
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      disabled
                      value={Datafamno && Datafamno[0] ? Datafamno[0][5] : ""}
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
                      value={Datafamno && Datafamno[0] ? Datafamno[0][6] : ""}
                    ></TextField>
                  </Grid>
                  <Grid xs={2}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Owner Tel :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      size="small"
                      value={Datafamno && Datafamno[0] ? Datafamno[0][7] : ""}
                      disabled
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
                      value={Datafamno && Datafamno[0] ? Datafamno[0][8] : ""}
                      // onChange={(e) => setFactory1(e.target.value)}
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
                    <TextField
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      className="Style1"
                      size="small"
                      disabled
                      value={Datafamno && Datafamno[0] ? Datafamno[0][9] : ""}
                    ></TextField>
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
                      value={Datafamno && Datafamno[0] ? Datafamno[0][10] : ""}
                    >
                      <FormControlLabel
                        value="GP01001"
                        control={<Radio />}
                        label="Transfer"
                        className="Radio"
                        disabled
                      />
                      <FormControlLabel
                        value="GP01002"
                        control={<Radio />}
                        label="Scrap"
                        className="Radio"
                        disabled
                      />

                      <FormControlLabel
                        value="GP01003"
                        control={<Radio />}
                        label="Sales"
                        className="Radio"
                        disabled
                      />
                      <FormControlLabel
                        value="GP01004"
                        control={<Radio />}
                        label="Lost"
                        className="Radio"
                        disabled
                      />
                      <FormControlLabel
                        value="GP01005"
                        control={<Radio />}
                        label="Write-off"
                        className="Radio"
                        disabled
                      />
                      <FormControlLabel
                        value="GP01006"
                        control={<Radio />}
                        label="Landing to Third-party"
                        disabled
                      />
                      <FormControlLabel
                        value="GP01007"
                        control={<Radio />}
                        label="Donation"
                        className="Radio"
                        disabled
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
                    <TextField
                      className="Style1"
                      size="small"
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      disabled
                      value={Datafamno && Datafamno[0] ? Datafamno[0][11] : ""}
                    ></TextField>
                  </Grid>
                  <Grid xs={2}>
                    <Typography
                      style={{
                        width: "100%",
                        textAlign: "right",
                        display: "none",
                      }}
                    >
                      Asset Cost Center :
                    </Typography>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Request Status:
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                        display: "none",
                      }}
                      // value={status}
                      disabled
                      value={Datafamno && Datafamno[0] ? Datafamno[0][12] : ""}
                      // onChange={(e) => setRequest_sts1(e.target.value)}
                    ></TextField>
                    <TextField
                      size="small"
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      // value={status}
                      disabled
                      value={Datafamno && Datafamno[0] ? Datafamno[0][13] : ""}
                      // onChange={(e) => setRequest_sts1(e.target.value)}
                    ></TextField>
                  </Grid>
                </Grid>
                {/* Request status */}
                {/* <Grid container spacing={3}>
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
                      value={Datafamno && Datafamno[0] ? Datafamno[0][13] : ""}
                      // onChange={(e) => setRequest_sts1(e.target.value)}
                    ></TextField>
                  </Grid>
                </Grid> */}
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
                      disabled
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      value={Datafamno && Datafamno[0] ? Datafamno[0][14] : ""}
                      //// onChange={(e) => setRemark(e.target.value)}
                      // onChange={handleRemark}
                    ></TextField>
                  </Grid>
                </Grid>

                <div className="Button_forGenNo">
                  {/* <Button
                    style={{
                      marginLeft: "5px",
                      backgroundColor: "green",
              
                    }}
                    variant="contained"
                   // onClick={Gen_No}
                  >
                    Gen FAM No.
                  </Button>
                  <Button
                    style={{
                      marginLeft: "5px",
                      backgroundColor: "gray",
                 
                    }}
                    variant="contained"
                  //  onClick={handleEmpUser}
                  >
                    Reset
                  </Button> */}
                </div>
              </Box>
            </Card>
          </Card>
        </div>
        {/* สำหรับ Fixed Assets Code */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="Fixed-Asset-Code">
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
              <br></br>

              <div>
                {" "}
                <Dialog
                  //open={open}
                  //onClose={handleClose}
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
                    <DialogTitle>Fixed Assets Code : {""}</DialogTitle>
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
                                  // onChange={() => handleCheckboxChange(index)}
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
                              //checked={selectAll}
                              // onChange={handleCheckboxAllChange}
                              />
                            </TableCell>
                            <TableCell>Comp.</TableCell>
                            <TableCell>Cc.</TableCell>
                            <TableCell>Fixed Assets Name</TableCell>
                            <TableCell>Fixed Assets Name</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
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
                                  // onChange={() => handleCheckboxChange(index)}
                                  disabled={
                                    COMP.some(
                                      (compItem) =>
                                        compItem[1] === item[3] &&
                                        compItem[2] !== null
                                    ) ||
                                    datatable
                                      .map((dataItem) => dataItem[3])
                                      .includes(item[3])
                                  }
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
                          ))} */}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <DialogActions style={{ marginTop: "20px" }}>
                      {/* <Button
                        variant="contained"
                        style={{
                          backgroundColor: "green",
                        }}
                        // onClick={handleAdd}
                      >
                        ADD
                      </Button>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "gray" }}
                        // onClick={handleClose}
                      >
                        Close
                      </Button> */}
                    </DialogActions>
                  </div>
                </Dialog>
              </div>

              <div>
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
                        {DataDetailfamno.map((item, index) => (
                          <React.Fragment key={index}>
                            <TableRow
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell></TableCell>
                              {index === 0 ||
                              item[1] !== DataDetailfamno[index - 1][1] ? (
                                <TableCell>{item[1]}</TableCell>
                              ) : (
                                <TableCell></TableCell>
                              )}
                              <TableCell>{item[2]}</TableCell>
                              <TableCell>{item[3]}</TableCell>
                              <TableCell>{item[4]}</TableCell>
                              <TableCell>{item[5]}</TableCell>
                              <TableCell>{item[6]}</TableCell>
                              <TableCell>{item[7]}</TableCell>
                              {/* <TableCell>{item[8]}</TableCell> */}
                              <TableCell>
                                {typeof item[8] === "number"
                                  ? item[8].toLocaleString()
                                  : item[8]}
                              </TableCell>

                              <TableCell>{item[9]}</TableCell>
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
                            {DataDetailfamno.reduce(
                              (acc, curr) => acc + parseFloat(curr[8]),
                              0
                            ).toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </TableCell>

                          <TableCell style={{ fontWeight: "bold" }}>
                            {DataDetailfamno.reduce(
                              (acc, curr) => acc + parseInt(curr[9]),
                              0
                            ).toLocaleString("en-US")}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  justifyContent: "flex-end",
                  margin: "15px",
                }}
              ></div>
            </div>
          </Card>
        </div>

        <br></br>
        <br></br>
        <br></br>
        {/* สำหรับ Upload File */}

        <div className="ShowFile">
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
            <table className="TableShow" style={{ padding: "40px" }}>
              <tr>
                <td>
                  <div className="ImageShowFile">
                    <img
                      src="./src/assets/Image/2.png"
                      style={{ width: "400px" }}
                      alt="Description of your image"
                    />
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
                                  onClick={() =>
                                    downloadFile(Filedata[index][4])
                                  }
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

        {/* ปุ่ม Next Page */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            style={{
              width: "200px",
              marginTop: "20px",
              marginBottom: "20px",
              backgroundColor: "gray",
              marginLeft: "20px",
            }}
            onClick={Back_page}
          >
            BACK PAGE
          </Button>

          <Button
            style={{
              width: "200px",
              marginTop: "20px",
              marginBottom: "20px",
              backgroundColor: "gray",

              marginRight: "20px",
            }}
            variant="contained"
            onClick={NextPage}
          >
            Next Page
          </Button>
        </div>
      </div>
    </>
  );
}

export default ForRequest;
