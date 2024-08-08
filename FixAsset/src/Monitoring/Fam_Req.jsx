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
import Header from "../Page/Hearder";
import PageLoadding from "../Loadding/Pageload";
import { Empty } from "antd";
import { FAM_REQUESTER } from "../Function/FN_MASTER_LIST/FAM_REQUESTER";
import image_for_req from "../assets/Image/2.png";
function ForRequest() {
  const {
    NextPage,
    Back_page,
    isPopupOpenLoadding,
    Datafamno,
    DataDetailfamno,
    Filedata,
    downloadFile,
    closePopupLoadding,
    STS,
    DataNewCC_ToProj,
    DataWeight_Size_Unit_Env,
  } = FAM_REQUESTER();
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <Header />
      </div>
      <PageLoadding isOpen={isPopupOpenLoadding} onClose={closePopupLoadding} />

      <div className="Box-Insert">
        {/* สำหรับ Gen Fam no */}
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
                    />
                  </Grid>
                </Grid>

                {/* Owner and TelOwner */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Request (Owner Id) :
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
                      disabled
                    ></TextField>
                  </Grid>
                </Grid>

                {/* Dept  */}
                {/* <Grid container spacing={3}>
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
                </Grid> */}
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
                        label="Loss"
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
                        label="Lending to Third-party"
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
                      Service Dept :
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
                      disabled
                      value={Datafamno && Datafamno[0] ? Datafamno[0][12] : ""}
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
                    ></TextField>
                  </Grid>
                </Grid>
                {/* Request status */}

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
                    ></TextField>
                  </Grid>
                </Grid>

                <div className="Button_forGenNo"></div>
              </Box>
            </Card>
          </Card>
        </div>
        {/* สำหรับ Fixed Assets Code */}
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
              Details
            </Typography>

            {/* ADD Modal */}
            <div>
              <br></br>

              <div>
                {" "}
                <Dialog
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
                      <Table className="Modal-Table">
                        <TableHead>
                          <TableRow>
                            <TableCell>
                              <Checkbox />
                            </TableCell>
                            <TableCell>Comp.</TableCell>
                            <TableCell>Cc.</TableCell>
                            <TableCell>Fixed Assets Name</TableCell>
                            <TableCell>Fixed Assets Name</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody></TableBody>
                      </Table>
                    </TableContainer>
                    <DialogActions
                      style={{ marginTop: "20px" }}
                    ></DialogActions>
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
                          {(STS === "FLTR011" || STS === "FLTR012") && (
                            <React.Fragment>
                              <TableCell>New CC</TableCell>
                              <TableCell>New BOI Projrct</TableCell>
                            </React.Fragment>
                          )}
                          {(STS == "FLSC009" ||
                            STS == "FLSC100" ||
                            STS == "FLSC101" ||
                            STS == "FLSC010" ||
                            STS == "FLSC012" ||
                            STS == "FLSC013" ||
                            STS == "FLSC011" ||
                            STS == "FLSL009" ||
                            STS == "FLSL010" ||
                            STS == "FLSL011" ||
                            STS == "FLSL012" ||
                            STS == "FLSL013" ||
                            STS == "FLSL014" ||
                            STS == "FLSL015" ||
                            STS == "FLSL016" ||
                            STS == "FLSL017" ||
                            STS == "FLSL018" ||
                            STS == "FLSL019" ||
                            STS == "FLSL020" ||
                            STS == "FLSL021" ||
                            STS == "FLSL022" ||
                            STS == "FLSL023" ||
                            STS == "FLSL024") && (
                            <React.Fragment>
                              <TableCell>Weight(kg)</TableCell>
                              <TableCell>Size</TableCell>
                            </React.Fragment>
                          )}
                          {(STS == "FLSC100" ||
                            STS == "FLSC101" ||
                            STS == "FLSC010" ||
                            STS == "FLSC012" ||
                            STS == "FLSC013" ||
                            STS == "FLSC011") && (
                            <React.Fragment>
                              <TableCell>Unit Price(Baht)</TableCell>
                            </React.Fragment>
                          )}
                          {(STS == "FLSC101" ||
                            STS == "FLSC010" ||
                            STS == "FLSC012" ||
                            STS == "FLSC011" ||
                            STS == "FLSC013" ||
                            STS == "FLSL019" ||
                            STS == "FLSL020" ||
                            STS == "FLSL021" ||
                            STS == "FLSL022" ||
                            STS == "FLSL023" ||
                            STS == "FLSL024") && (
                            <React.Fragment>
                              <TableCell>Invoice No.</TableCell>
                            </React.Fragment>
                          )}
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
                              {(STS === "FLTR011" || STS === "FLTR012") && (
                                <React.Fragment>
                                  <TableCell>{item[10]}</TableCell>
                                  <TableCell>{item[11]}</TableCell>
                                </React.Fragment>
                              )}
                              {(STS == "FLSC009" ||
                                STS == "FLSC100" ||
                                STS == "FLSC101" ||
                                STS == "FLSC010" ||
                                STS == "FLSC012" ||
                                STS == "FLSC013" ||
                                STS == "FLSC011" ||
                                STS == "FLSL009" ||
                                STS == "FLSL010" ||
                                STS == "FLSL011" ||
                                STS == "FLSL012" ||
                                STS == "FLSL013" ||
                                STS == "FLSL014" ||
                                STS == "FLSL015" ||
                                STS == "FLSL016" ||
                                STS == "FLSL017" ||
                                STS == "FLSL018" ||
                                STS == "FLSL019" ||
                                STS == "FLSL020" ||
                                STS == "FLSL021" ||
                                STS == "FLSL022" ||
                                STS == "FLSL023" ||
                                STS == "FLSL024") && (
                                <React.Fragment>
                                  <TableCell>{item[12]}</TableCell>
                                  <TableCell>{item[13]}</TableCell>
                                </React.Fragment>
                              )}
                              {(STS == "FLSC100" ||
                                STS == "FLSC101" ||
                                STS == "FLSC010" ||
                                STS == "FLSC012" ||
                                STS == "FLSC013" ||
                                STS == "FLSC011") && (
                                <React.Fragment>
                                  <TableCell>{item[14]}</TableCell>
                                </React.Fragment>
                              )}
                              {(STS == "FLSC101" ||
                                STS == "FLSC010" ||
                                STS == "FLSC012" ||
                                STS == "FLSC011" ||
                                STS == "FLSC013" ||
                                STS == "FLSL019" ||
                                STS == "FLSL020" ||
                                STS == "FLSL021" ||
                                STS == "FLSL022" ||
                                STS == "FLSL023" ||
                                STS == "FLSL024") && (
                                <React.Fragment>
                                  <TableCell>{item[15]}</TableCell>
                                </React.Fragment>
                              )}
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
                          {(STS == "FLSC009" ||
                            STS == "FLSC100" ||
                            STS == "FLSC101" ||
                            STS == "FLSC010" ||
                            STS == "FLSC012" ||
                            STS == "FLSC011") && (
                            <TableCell style={{ fontWeight: "bold" }}>
                              {DataDetailfamno.reduce(
                                (acc, curr) => acc + parseInt(curr[12]),
                                0
                              ).toLocaleString("en-US")}
                            </TableCell>
                          )}
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
                      src={image_for_req}
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
                          {Filedata.length > 0 ? (
                            Filedata.map((option, index) => (
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
                            ))
                          ) : (
                            <TableRow>
                              <TableCell
                                colSpan={4}
                                style={{ textAlign: "center" }}
                              >
                                <Empty />
                              </TableCell>
                            </TableRow>
                          )}
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
