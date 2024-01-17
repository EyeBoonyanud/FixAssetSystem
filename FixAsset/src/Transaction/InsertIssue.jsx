import Header from "../Page/Hearder";
import React, { useState, useEffect } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Box from "@mui/material/Box";
import {
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Card,
  CardHeader,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
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
  MenuItem
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";
import { UploadOutlined } from "@ant-design/icons";
import ClearIcon from "@mui/icons-material/Clear";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isTableOpen, setTableOpen] = useState(false); // เปิด ปิด Table Fixed Asset 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOpenTable = () => {
    setTableOpen(true);
    setOpen(false);
  };
  const handleCloseTable = () => {
    setTableOpen(false);
  };
  const handleFileUpload = (event) => {
    // ทำอะไรกับไฟล์ที่ถูกเลือก
    const selectedFiles = event.target.files;
    setUploadedFiles([...uploadedFiles, ...selectedFiles]);
    console.log(selectedFiles);

    // เพิ่มโค้ดที่คุณต้องการทำต่อไป
  };
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [age, setAge] = React.useState("");
 
  const handleChange1 = (event) => {
    setAge(event.target.value);
  };

  const Tab1 = () => {
    return (
      <div className="Box-Insert">
        <div className="Insert">
          <Card>
            <Box sx={{ flexGrow: 1, marginBottom: "20px", marginTop: "20px" }}>
              {/* FAM Np and Request */}
              <Grid container spacing={3}>
                <Grid xs={1.7}>
                  <Typography style={{ width: "100%", textAlign: "right" }}>
                    FAM No :
                  </Typography>
                </Grid>
                <Grid xs={3}>
                  <TextField size="small" style={{ width: "100%" }}></TextField>
                </Grid>
                <Grid xs={2}>
                  <Typography style={{ width: "100%", textAlign: "right" }}>
                    Request Date :
                  </Typography>
                </Grid>
                <Grid xs={3}>
                  <TextField size="small" style={{ width: "100%" }}></TextField>
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
                  <TextField size="small" style={{ width: "100%" }}></TextField>
                </Grid>
                <Grid xs={2}>
                  <Typography style={{ width: "100%", textAlign: "right" }}>
                    Tel :
                  </Typography>
                </Grid>
                <Grid xs={3}>
                  <TextField size="small" style={{ width: "100%" }}></TextField>
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
                  <TextField size="small" style={{ width: "100%" }}></TextField>
                </Grid>
                <Grid xs={2}>
                  <Typography style={{ width: "100%", textAlign: "right" }}>
                    Cost Center :
                  </Typography>
                </Grid>
                <Grid xs={3}>
                  <Select size="small" style={{ width: "100%" }}></Select>
                </Grid>
              </Grid>
              {/* Dept and Status */}
              <Grid container spacing={3}>
                <Grid xs={1.7}>
                  <Typography style={{ width: "100%", textAlign: "right" }}>
                    Dept :
                  </Typography>
                </Grid>
                <Grid xs={3}>
                  <TextField size="small" style={{ width: "100%" }}></TextField>
                </Grid>
                <Grid xs={2}>
                  <Typography style={{ width: "100%", textAlign: "right" }}>
                    Status :
                  </Typography>
                </Grid>
                <Grid xs={3}>
                  <TextField size="small" style={{ width: "100%" }}></TextField>
                </Grid>
              </Grid>
              {/* Radio Button Type  */}
              <Grid container spacing={3} style={{ width: "100%" }}>
                <Grid xs={1.7}>
                  <Typography style={{ width: "100%", textAlign: "right" }}>
                    Tel :
                  </Typography>
                </Grid>
                <Grid xs={10}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Transfer"
                      control={<Radio />}
                      label="Transfer"
                      className="Radio"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Scrap"
                      className="Radio"
                    />

                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Sales"
                      className="Radio"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Lost"
                      className="Radio"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Write off"
                      className="Radio"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Landing to Third party"
                      className="Radio"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Donation"
                      className="Radio"
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
              {/* Remark */}
              <Grid container spacing={3}>
                <Grid xs={1.7}>
                  <Typography style={{ width: "100%", textAlign: "right" }}>
                    FAM No :
                  </Typography>
                </Grid>
                <Grid xs={8}>
                  <TextField size="small" style={{ width: "100%" }}></TextField>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </div>
        <div className="Fixed-Asset-Code">
          <Card style={{ marginTop: "20px" }}>
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
                <TextField size="small"></TextField> &nbsp;&nbsp;
                <Button
                  style={{ marginTop: "3px" }}
                  type="primary"
                  variant="contained"
                  onClick={handleClickOpen}
                >
                  {" "}
                  ADD
                </Button>
                <Dialog open={open} onClose={handleClose}>
                  <div className="Modal">
                    {" "}
                    <DialogTitle>Fixed Asset Code : XXXX </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        <TableContainer component={Paper}>
                          <Table aria-label="simple table">
                            <TableHead
                              sx={{
                                backgroundColor: "#ACFE8B",
                                fontSize: "10px",
                              }}
                            >
                              <TableRow>
                                <TableCell>
                                  <Checkbox />
                                </TableCell>
                                <TableCell>Comp.</TableCell>
                                <TableCell>Cc.</TableCell>
                                <TableCell>Fixed Asset Name</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
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
                                <TableCell>1</TableCell>
                                <TableCell>R420</TableCell>
                                <TableCell>
                                  WASHING DRYER MACHINE CODE W-41-51{" "}
                                </TableCell>
                              </TableRow>
                              <TableRow
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell>
                                  <Checkbox />
                                </TableCell>
                                <TableCell>2</TableCell>
                                <TableCell>R420</TableCell>
                                <TableCell>
                                  UNLOAD UNPACK &MOVE MACHINE W-41-51
                                </TableCell>
                              </TableRow>
                              <TableRow
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell>
                                  <Checkbox />
                                </TableCell>
                                <TableCell>3</TableCell>
                                <TableCell>R420</TableCell>
                                <TableCell>
                                  UTILITY WORK FOR MACHINE W-41-51
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </DialogContentText>
                      <DialogActions style={{ marginTop: "20px" }}>
                        <Button
                          variant="contained"
                          style={{ backgroundColor: "green" }}
                          onClick={handleOpenTable} 
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
                    </DialogContent>
                  </div>
                </Dialog>
                {isTableOpen && (
                <div style={{ marginTop: "20px" }}>
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableHead
                        sx={{ backgroundColor: "#22FF5E", fontSize: "10px" }}
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
                          <TableCell>1</TableCell>
                          <TableCell>Mc0</TableCell>
                          <TableCell>
                          1
                          </TableCell>
                          <TableCell>
                          R420
                          </TableCell>
                          <TableCell>
                            WASHING DRYER MACHINE CODE W-41-51{" "}
                          </TableCell>
                          <TableCell>
                           NAPK
                          </TableCell>
                          <TableCell>
                          1
                          </TableCell>
                          <TableCell>
                           3562820-1
                          </TableCell>
                          <TableCell>
                            28900000
                          </TableCell>
                          <TableCell>
                          1.0
                          </TableCell>
                        </TableRow>
                    
                      </TableBody>
                    </Table>
                  </TableContainer>
                 </div>
              )} </Grid>
            </Grid>
          </Card>
        </div>
        <div className="UploadFile">
          <Card style={{ marginTop: "20px" }}>
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
                />
                <label htmlFor="fileInput">
                  <Button
                    variant="contained"
                    size="small"
                    style={{ marginTop: "3px" }}
                    component="span"
                  >
                    Upload
                  </Button>
                </label>
                {uploadedFiles.length > 0 && (
                  <div>
                    <ul>
                      {uploadedFiles.map((file, index) => (
                        <li key={index}>
                          {file.name}
                          <ClearIcon />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* <Upload {...props}>
                  <Button style={{width:'200px'}}
                  icon={<UploadOutlined />}>Choose File</Button>
                  &nbsp;&nbsp;
                  <Button type="primary"> Upload</Button>
                </Upload> */}
              </Grid>
            </Grid>
          </Card>
        </div>
      </div>
    );
  };
  

  const Tab2 = () => {
    return (
      <>
       <div className="Insert">
          <Card>
            <Box sx={{ flexGrow: 1, marginBottom: "20px", marginTop: "20px" }}>
              {/* Owner and From  */}
              <Grid container spacing={3}>
                <Grid xs={1.7}>
                  <Typography style={{ width: "100%", textAlign: "right" }}>
                   Owner (Send from):
                  </Typography>
                </Grid>
                <Grid xs={3}>
                  <TextField size="small" style={{ width: "100%" }}></TextField>
                </Grid>
                <Grid xs={2}>
                  <Typography style={{ width: "100%", textAlign: "right" }}>
                    From BOL Project :
                  </Typography>
                </Grid>
                <Grid xs={3}>
                  <TextField size="small" style={{ width: "100%" }}></TextField>
                </Grid>
              </Grid>
              {/* Tranfer Fac and CC */}
              <Grid container spacing={3}>
                <Grid xs={1.7}>
                  <Typography style={{ width: "100%", textAlign: "right" }}>
                    Tranfer to Factory :
                  </Typography>
                </Grid>
                <Grid xs={3}>
                  <TextField size="small" style={{ width: "100%" }}></TextField>
                </Grid>
                <Grid xs={2}>
                  <Typography style={{ width: "100%", textAlign: "right" }}>
                    Tranfer to CC :
                  </Typography>
                </Grid>
                <Grid xs={3}>
                  <TextField size="small" style={{ width: "100%" }}></TextField>
                </Grid>
              </Grid>
              {/* New BOI project  */}
              <Grid container spacing={3}>
                <Grid xs={1.7}>
                  <Typography style={{ width: "100%", textAlign: "right" }}>
                  New BOI project :
                  </Typography>
                </Grid>
                <Grid xs={3}>
                  <TextField size="small" style={{ width: "100%" }}></TextField>
                </Grid>
            
              </Grid>
              {/* New Owner and Tel */}
              <Grid container spacing={3}>
                <Grid xs={1.7}>
                  <Typography style={{ width: "100%", textAlign: "right" }}>
                  New Owner :
                  </Typography>
                </Grid>
                <Grid xs={3}>
                  <TextField size="small" style={{ width: "100%" }}></TextField>
                </Grid>
                <Grid xs={2}>
                  <Typography style={{ width: "100%", textAlign: "right" }}>
                    Tel :
                  </Typography>
                </Grid>
                <Grid xs={3}>
                  <TextField size="small" style={{ width: "100%" }}></TextField>
                </Grid>
              </Grid>
            {/* Plan Remove Date*/}
            <Grid container spacing={3}>
                <Grid xs={1.7}>
                  <Typography style={{ width: "100%", textAlign: "right" }}>
                  Plan Remove Date :
                  </Typography>
                </Grid>
                <Grid xs={3}>
                  <TextField size="small" style={{ width: "100%" }} type="date"></TextField>
                </Grid>
                
              </Grid>
              {/* Transfer abnormal */}
              <Grid container spacing={3}>
                <Grid xs={1.7}>
                  <Typography style={{ width: "100%", textAlign: "right" }}>
                    Transfer abnormal :
                  </Typography>
                </Grid>
                <Grid xs={5}>
                  <TextField size="small" style={{ width: "100%" }}></TextField>
                </Grid>
              
              </Grid>
            </Box>
          </Card>
 
 
        </div>

        <div>
          <table>
            <tr>
              <td></td>
            </tr>
          </table>
        </div>
      </>
    );
  };

  return (
    <div>
      <div style={{ marginTop: "100px" }}>
        <Header />
      </div>

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Tab1 />
          </TabPanel>
          <TabPanel value="2">
            <Tab2 />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
