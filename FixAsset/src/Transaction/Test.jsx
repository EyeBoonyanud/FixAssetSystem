import Appbar from "./Home";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import "./StyleTab.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [age, setAge] = React.useState("");

  return (
    <div>
      <Appbar />
      <Box sx={{ width: "100%", typography: "body1", marginTop: 2 }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{
                ".css-1aquho2-MuiTabs-indicator": {
                  backgroundColor: "#639357", // Change this to your desired green color
                },
              }}
            >
              <Tab
                sx={{
                  borderBottom: 1,

                  borderColor: "divider",
                  backgroundColor: "#d0f2d1", // Set the background color as needed
                  borderRadius: "8px", // Set the border radius as needed
                  marginRight: "8px", // Adjust spacing as needed
                  paddingX: "16px", // Adjust padding as needed
                  "&.Mui-selected": {
                    color: "black", // Set the text color when selected
                  },
                }}
                label="Item One"
                value="1"
              />
              <Tab
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  backgroundColor: "#d0f2d1", // Set the background color as needed
                  borderRadius: "8px", // Set the border radius as needed
                  marginRight: "8px", // Adjust spacing as needed
                  paddingX: "16px", // Adjust padding as needed
                  "&.Mui-selected": {
                    color: "black", // Set the text color when selected
                  },
                  "& .MuiTab-label": {
                    color: "black", // Set the label text color when selected
                  },
                }}
                label="Item Two"
                value="2"
              />
              <Tab
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  backgroundColor: "#d0f2d1", // Set the background color as needed
                  borderRadius: "8px", // Set the border radius as needed
                  marginRight: "8px", // Adjust spacing as needed
                  paddingX: "16px", // Adjust padding as needed
                  "&.Mui-selected": {
                    color: "black", // Set the text color when selected
                  },
                }}
                label="Item Three"
                value="3"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
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
                      border: 1,
                      borderColor: "rgba(64,131,65, 1.5)",
                      boxShadow: "0px 4px 8px rgba(64,131,65, 0.4)",
                      justifyContent: "center",
                    }}
                  >
                    Tranfer Detail
                  </Typography>
                  <div className="Style2">
                    <table className="Style3">
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">Owner (Send from) :</td>
                        <td>
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                            />
                          </FormControl>
                        </td>
                        <td className="Style5">
                          <FormControl></FormControl>
                        </td>
                        <td className="Style7">From BOL Project :</td>
                        <td className="Style6">
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                            />
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">Tranfer to Factory :</td>
                        <td>
                          <FormControl className="Style1">
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={age}
                              onChange={handleChange}
                              size="small"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>Pee Char</MenuItem>
                              <MenuItem value={20}>Pee Tom</MenuItem>
                              <MenuItem value={30}>Pee Pu</MenuItem>
                            </Select>
                          </FormControl>
                        </td>
                        <td className="Style5">
                          <FormControl></FormControl>
                        </td>
                        <td className="Style7">Tranfer to CC :</td>
                        <td className="Style6">
                          <FormControl className="Style1">
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={age}
                              onChange={handleChange}
                              size="small"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>Pee Char</MenuItem>
                              <MenuItem value={20}>Pee Tom</MenuItem>
                              <MenuItem value={30}>Pee Pu</MenuItem>
                            </Select>
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">New BOI Project :</td>
                        <td>
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                            />
                          </FormControl>
                        </td>
                        <td className="Style5"></td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">New Owner :</td>
                        <td>
                          <FormControl className="Style1">
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={age}
                              onChange={handleChange}
                              size="small"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>Pee Char</MenuItem>
                              <MenuItem value={20}>Pee Tom</MenuItem>
                              <MenuItem value={30}>Pee Pu</MenuItem>
                            </Select>
                          </FormControl>
                        </td>
                        <td className="Style5">
                          <FormControl></FormControl>
                        </td>
                        <td className="Style7">Tel :</td>
                        <td className="Style6">
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                            />
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">Plan Remove Date :</td>
                        <td>
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                              type="date"
                              style={{ color: "red" }}
                            />
                          </FormControl>
                        </td>
                        <td className="Style5"></td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">Tranfer Abnormal :</td>
                        <td colSpan={4}>
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
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
                      border: 1,
                      borderColor: "rgba(64,131,65, 1.5)",
                      boxShadow: "0px 4px 8px rgba(64,131,65, 0.4)",
                      justifyContent: "center",
                    }}
                  >
                    Routing
                  </Typography>
                  <div className="Style2">
                    <table className="Style3">
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">Department Manager :</td>
                        <td>
                          <FormControl className="Style3">
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={age}
                              onChange={handleChange}
                              size="small"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>Pee Char</MenuItem>
                              <MenuItem value={20}>Pee Tom</MenuItem>
                              <MenuItem value={30}>Pee Pu</MenuItem>
                            </Select>
                          </FormControl>
                        </td>
                        <td className="Style5">
                          <FormControl>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                              // style={{ marginLeft: "20px" }}
                            >
                              <FormControlLabel
                                value="Approve"
                                control={<Radio size="small" />}
                                label="Approve"
                              />
                              <FormControlLabel
                                value="Reject"
                                // disabled
                                control={<Radio size="small" />}
                                label="Reject"
                              />
                            </RadioGroup>
                          </FormControl>
                        </td>
                        <td className="Style7">Action Date :</td>
                        <td className="Style6">
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                              disabled
                              style={{
                                backgroundColor: "rgba(169, 169, 169, 0.3)",
                              }}
                            />
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">Comment :</td>
                        <td colSpan={4}>
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                            />
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">Service Dept :</td>
                        <td>
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                              disabled
                              sx={{
                                backgroundColor: "rgba(169, 169, 169, 0.3)",
                              }}
                            />
                          </FormControl>
                        </td>
                        <td className="Style5"></td>
                        <td className="Style7">Tel :</td>
                        <td>
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                            />
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">Service By :</td>
                        <td>
                          <FormControl className="Style3">
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={age}
                              onChange={handleChange}
                              size="small"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>Pee Char</MenuItem>
                              <MenuItem value={20}>Pee Tom</MenuItem>
                              <MenuItem value={30}>Pee Pu</MenuItem>
                            </Select>
                          </FormControl>
                        </td>
                        <td className="Style5">
                          <FormControl>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                              // style={{ marginLeft: "20px" }}
                            >
                              <FormControlLabel
                                value="Approve"
                                control={<Radio size="small" />}
                                label="Approve"
                              />
                              <FormControlLabel
                                value="Reject"
                                // disabled
                                control={<Radio size="small" />}
                                label="Reject"
                              />
                            </RadioGroup>
                          </FormControl>
                        </td>
                        <td className="Style7">Action Date :</td>
                        <td className="Style6">
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                              disabled
                              style={{
                                backgroundColor: "rgba(169, 169, 169, 0.3)",
                              }}
                            />
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">Comment :</td>
                        <td colSpan={4}>
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                            />
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">BOI Staff :</td>
                        <td>
                          <FormControl className="Style3">
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={age}
                              onChange={handleChange}
                              size="small"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>Pee Char</MenuItem>
                              <MenuItem value={20}>Pee Tom</MenuItem>
                              <MenuItem value={30}>Pee Pu</MenuItem>
                            </Select>
                          </FormControl>
                        </td>
                        <td className="Style5">
                          <FormControl>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                              // style={{ marginLeft: "20px" }}
                            >
                              <FormControlLabel
                                value="Approve"
                                control={<Radio size="small" />}
                                label="Approve"
                              />
                              <FormControlLabel
                                value="Reject"
                                // disabled
                                control={<Radio size="small" />}
                                label="Reject"
                              />
                            </RadioGroup>
                          </FormControl>
                        </td>
                        <td className="Style7">Action Date :</td>
                        <td className="Style6">
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                              disabled
                              style={{
                                backgroundColor: "rgba(169, 169, 169, 0.3)",
                              }}
                            />
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">Comment :</td>
                        <td colSpan={4}>
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                            />
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">BOI Manager :</td>
                        <td>
                          <FormControl className="Style3">
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={age}
                              onChange={handleChange}
                              size="small"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>Pee Char</MenuItem>
                              <MenuItem value={20}>Pee Tom</MenuItem>
                              <MenuItem value={30}>Pee Pu</MenuItem>
                            </Select>
                          </FormControl>
                        </td>
                        <td className="Style5">
                          <FormControl>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                              // style={{ marginLeft: "20px" }}
                            >
                              <FormControlLabel
                                value="Approve"
                                control={<Radio size="small" />}
                                label="Approve"
                              />
                              <FormControlLabel
                                value="Reject"
                                // disabled
                                control={<Radio size="small" />}
                                label="Reject"
                              />
                            </RadioGroup>
                          </FormControl>
                        </td>
                        <td className="Style7">Action Date :</td>
                        <td className="Style6">
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                              disabled
                              style={{
                                backgroundColor: "rgba(169, 169, 169, 0.3)",
                              }}
                            />
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">Comment :</td>
                        <td colSpan={4}>
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                            />
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">Factory Manager :</td>
                        <td>
                          <FormControl className="Style3">
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={age}
                              onChange={handleChange}
                              size="small"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>Pee Char</MenuItem>
                              <MenuItem value={20}>Pee Tom</MenuItem>
                              <MenuItem value={30}>Pee Pu</MenuItem>
                            </Select>
                          </FormControl>
                        </td>
                        <td className="Style5">
                          <FormControl>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                              // style={{ marginLeft: "20px" }}
                            >
                              <FormControlLabel
                                value="Approve"
                                control={<Radio size="small" />}
                                label="Approve"
                              />
                              <FormControlLabel
                                value="Reject"
                                // disabled
                                control={<Radio size="small" />}
                                label="Reject"
                              />
                            </RadioGroup>
                          </FormControl>
                        </td>
                        <td className="Style7">Action Date :</td>
                        <td className="Style6">
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                              disabled
                              style={{
                                backgroundColor: "rgba(169, 169, 169, 0.3)",
                              }}
                            />
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">Comment :</td>
                        <td colSpan={4}>
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                            />
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">ACC Check :</td>
                        <td>
                          <FormControl className="Style3">
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={age}
                              onChange={handleChange}
                              size="small"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>Pee Char</MenuItem>
                              <MenuItem value={20}>Pee Tom</MenuItem>
                              <MenuItem value={30}>Pee Pu</MenuItem>
                            </Select>
                          </FormControl>
                        </td>
                        <td className="Style5">
                          <FormControl>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                              // style={{ marginLeft: "20px" }}
                            >
                              <FormControlLabel
                                value="Approve"
                                control={<Radio size="small" />}
                                label="Approve"
                              />
                              <FormControlLabel
                                value="Reject"
                                // disabled
                                control={<Radio size="small" />}
                                label="Reject"
                              />
                            </RadioGroup>
                          </FormControl>
                        </td>
                        <td className="Style7">Action Date :</td>
                        <td className="Style6">
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                              disabled
                              style={{
                                backgroundColor: "rgba(169, 169, 169, 0.3)",
                              }}
                            />
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">Comment :</td>
                        <td colSpan={4}>
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                            />
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">Owner :</td>
                        <td>
                          <FormControl className="Style3">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                              disabled
                              style={{
                                backgroundColor: "rgba(169, 169, 169, 0.3)",
                              }}
                            />
                          </FormControl>
                        </td>
                        <td className="Style5">
                          <FormControl>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                              // style={{ marginLeft: "20px" }}
                            >
                              <FormControlLabel
                                value="Approve"
                                control={<Radio size="small" />}
                                label="Approve"
                              />
                              <FormControlLabel
                                value="Reject"
                                // disabled
                                control={<Radio size="small" />}
                                label="Reject"
                              />
                            </RadioGroup>
                          </FormControl>
                        </td>
                        <td className="Style7">Action Date :</td>
                        <td className="Style6">
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                              disabled
                              style={{
                                backgroundColor: "rgba(169, 169, 169, 0.3)",
                              }}
                            />
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">Comment :</td>
                        <td colSpan={4}>
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                            />
                          </FormControl>
                        </td>
                      </tr>
                    </table>
                  </div>
                </Card>
              </Card>
            </div>
          </TabPanel>
          <TabPanel value="2">
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
                      border: 1,
                      borderColor: "rgba(64,131,65, 1.5)",
                      boxShadow: "0px 4px 8px rgba(64,131,65, 0.4)",
                      justifyContent: "center",
                    }}
                  >
                    ...
                  </Typography>
                  <div className="Style2">
                    <table className="Style3">
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">Receiver :</td>
                        <td>
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                              disabled
                              sx={{
                                backgroundColor: "rgba(169, 169, 169, 0.3)",
                              }}
                            />
                          </FormControl>
                        </td>
                        <td className="Style5">
                          <FormControl>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                              // style={{ marginLeft: "20px" }}
                            >
                              <FormControlLabel
                                value="Approve"
                                control={<Radio size="small" />}
                                label="Approve"
                              />
                              <FormControlLabel
                                value="Reject"
                                // disabled
                                control={<Radio size="small" />}
                                label="Reject"
                              />
                            </RadioGroup>
                          </FormControl>
                        </td>
                        <td className="Style7">Action Date :</td>
                        <td className="Style6">
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                              disabled
                              style={{
                                backgroundColor: "rgba(169, 169, 169, 0.3)",
                              }}
                            />
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">Comment :</td>
                        <td colSpan={4}>
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
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
                      border: 1,
                      borderColor: "rgba(64,131,65, 1.5)",
                      boxShadow: "0px 4px 8px rgba(64,131,65, 0.4)",
                      justifyContent: "center",
                    }}
                  >
                    ...
                  </Typography>
                  <div className="Style2">
                    <table className="Style3">
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">ACC Record :</td>
                        <td>
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                              disabled
                              sx={{
                                backgroundColor: "rgba(169, 169, 169, 0.3)",
                              }}
                            />
                          </FormControl>
                        </td>
                        <td className="Style5">
                          <FormControl>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                              // style={{ marginLeft: "20px" }}
                            >
                              <FormControlLabel
                                value="Approve"
                                control={<Radio size="small" />}
                                label="Approve"
                              />
                              <FormControlLabel
                                value="Reject"
                                // disabled
                                control={<Radio size="small" />}
                                label="Reject"
                              />
                            </RadioGroup>
                          </FormControl>
                        </td>
                        <td className="Style7">Action Date :</td>
                        <td className="Style6">
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                              disabled
                              style={{
                                backgroundColor: "rgba(169, 169, 169, 0.3)",
                              }}
                            />
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">Comment :</td>
                        <td colSpan={4}>
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                            />
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">ACC Manager :</td>
                        <td>
                          <FormControl className="Style3">
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={age}
                              onChange={handleChange}
                              size="small"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>Pee Char</MenuItem>
                              <MenuItem value={20}>Pee Tom</MenuItem>
                              <MenuItem value={30}>Pee Pu</MenuItem>
                            </Select>
                          </FormControl>
                        </td>
                        <td className="Style5">
                          <FormControl>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                              // style={{ marginLeft: "20px" }}
                            >
                              <FormControlLabel
                                value="Approve"
                                control={<Radio size="small" />}
                                label="Approve"
                              />
                              <FormControlLabel
                                value="Reject"
                                // disabled
                                control={<Radio size="small" />}
                                label="Reject"
                              />
                            </RadioGroup>
                          </FormControl>
                        </td>
                        <td className="Style7">Action Date :</td>
                        <td className="Style6">
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                              disabled
                              style={{
                                backgroundColor: "rgba(169, 169, 169, 0.3)",
                              }}
                            />
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">Comment :</td>
                        <td colSpan={4}>
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                            />
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">Service Close By :</td>
                        <td>
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                              disabled
                              sx={{
                                backgroundColor: "rgba(169, 169, 169, 0.3)",
                              }}
                            />
                          </FormControl>
                        </td>
                        <td className="Style5">
                          <FormControl>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                              // style={{ marginLeft: "20px" }}
                            >
                              <FormControlLabel
                                value="Approve"
                                control={<Radio size="small" />}
                                label="Approve"
                              />
                              <FormControlLabel
                                value="Reject"
                                // disabled
                                control={<Radio size="small" />}
                                label="Reject"
                              />
                            </RadioGroup>
                          </FormControl>
                        </td>
                        <td className="Style7">Action Date :</td>
                        <td className="Style6">
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                              disabled
                              style={{
                                backgroundColor: "rgba(169, 169, 169, 0.3)",
                              }}
                            />
                          </FormControl>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={5}></th>
                        <td className="Style4">Comment :</td>
                        <td colSpan={4}>
                          <FormControl className="Style1">
                            <TextField
                              id="outlined-size-small"
                              defaultValue=""
                              size="small"
                            />
                          </FormControl>
                        </td>
                      </tr>
                    </table>
                  </div>
                </Card>
              </Card>

              <div className="Style8">
                <Box>
                  <tr>
                    <td>
                      <Button variant="contained" size="medium" color="primary">
                        Save
                      </Button>
                    </td>
                    <td>
                      <Button variant="contained" size="medium" color="success">
                        Submit
                      </Button>
                    </td>
                    <td>
                      <Button variant="contained" size="medium" color="error">
                        Reset
                      </Button>
                    </td>
                  </tr>
                </Box>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="3">
            {" "}
            <div>
              <Card
                sx={{
                  border: 1,
                  borderColor: "rgba(169, 169, 169, 0.5)",
                }}
                className="Style1"
              >
                <div className="Style2">
                  <table className="Style3">
                    <tr>
                      <th colSpan={5}></th>
                      <td className="Style4">Owner (Send from) :</td>
                      <td>
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                          />
                        </FormControl>
                      </td>
                      <td className="Style5">
                        <FormControl></FormControl>
                      </td>
                      <td className="Style7">From BOL Project :</td>
                      <td className="Style6">
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                          />
                        </FormControl>
                      </td>
                    </tr>
                    <tr>
                      <th colSpan={5}></th>
                      <td className="Style4">Tranfer to Factory :</td>
                      <td>
                        <FormControl className="Style1">
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={age}
                            onChange={handleChange}
                            size="small"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Pee Char</MenuItem>
                            <MenuItem value={20}>Pee Tom</MenuItem>
                            <MenuItem value={30}>Pee Pu</MenuItem>
                          </Select>
                        </FormControl>
                      </td>
                      <td className="Style5">
                        <FormControl></FormControl>
                      </td>
                      <td className="Style7">Tranfer to CC :</td>
                      <td className="Style6">
                        <FormControl className="Style1">
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={age}
                            onChange={handleChange}
                            size="small"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Pee Char</MenuItem>
                            <MenuItem value={20}>Pee Tom</MenuItem>
                            <MenuItem value={30}>Pee Pu</MenuItem>
                          </Select>
                        </FormControl>
                      </td>
                    </tr>
                    <tr>
                      <th colSpan={5}></th>
                      <td className="Style4">New BOI Project :</td>
                      <td>
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                          />
                        </FormControl>
                      </td>
                      <td className="Style5"></td>
                    </tr>
                    <tr>
                      <th colSpan={5}></th>
                      <td className="Style4">New Owner :</td>
                      <td>
                        <FormControl className="Style1">
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={age}
                            onChange={handleChange}
                            size="small"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Pee Char</MenuItem>
                            <MenuItem value={20}>Pee Tom</MenuItem>
                            <MenuItem value={30}>Pee Pu</MenuItem>
                          </Select>
                        </FormControl>
                      </td>
                      <td className="Style5">
                        <FormControl></FormControl>
                      </td>
                      <td className="Style7">Tel :</td>
                      <td className="Style6">
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                          />
                        </FormControl>
                      </td>
                    </tr>
                    <tr>
                      <th colSpan={5}></th>
                      <td className="Style4">Plan Remove Date :</td>
                      <td>
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            type="date"
                            style={{ color: "red" }}
                          />
                        </FormControl>
                      </td>
                      <td className="Style5"></td>
                    </tr>
                    <tr>
                      <th colSpan={5}></th>
                      <td className="Style4">Tranfer Abnormal :</td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                          />
                        </FormControl>
                      </td>
                    </tr>
                  </table>
                </div>
              </Card>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
