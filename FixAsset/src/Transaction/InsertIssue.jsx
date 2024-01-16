import Header from "../Page/Hearder";
import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Box from "@mui/material/Box";
import {
  Typography,
  TextField,
  Select,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Card,
  CardHeader,
  CardContent,
  Button
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const Tab1 = () => {
    return (
      <div className="Box-Insert">
        <div className="Insert">
          <Card>
            <Box sx={{ flexGrow: 1 }}>
              {/* FAM Np and Request */}
              <Grid container spacing={3}>
                <Grid xs={1.5}>
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
                <Grid xs={1.5}>
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
                <Grid xs={1.5}>
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
                <Grid xs={1.5}>
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
                <Grid xs={1.5}>
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
                <Grid xs={1.5}>
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
          <div >
            <Card style={{marginTop:'20px'}}>
              <Grid container spacing={3} style={{ width: "100%" }}>
                <Grid xs={1.6}>
                  <Typography
                    style={{
                      width: "100%",
                      textAlign: "right",
                      marginTop: "7px",
                    }}
                  >
                    Fixed Assets Code :
                  </Typography>
                </Grid>
                <Grid xs={10}>
                  <TextField size="small"></TextField>
                </Grid>
              </Grid>
            </Card>
          </div>
          <div >
            <Card style={{marginTop:'20px'}}>
              <Grid container spacing={3}>
                <Grid xs={1.6}>
                  <Typography
                    style={{
                      width: "100%",
                      textAlign: "right",
                      marginTop: "7px",
                    }}
                  >
                    Upload File :
                  </Typography>
                </Grid>
                <Grid xs={3}>
                  <TextField size="small"></TextField>
                </Grid>
                <Button
                className="ButtonSearch"
                style={{
                  backgroundColor: "#00C344",
                  width: "180px",
                }}
                variant="contained"
              >
              
                Export Excel
              </Button>
              </Grid>
            </Card>
          </div>
        </div>
      </div>
    );
  };

  const Tab2 = () => {
    return (
      <>
        <div>
          {/* <Grid container spacing={3} style={{width:'100%'}}>
          <Grid xs={1.6}>
              <Typography style={{ width: "100%", textAlign: "right" , marginTop:'7px'  }}>
               Fixed Assets Code :
              </Typography>
            </Grid>
            <Grid xs={10}>
            <TextField size="small" >

            </TextField>
            </Grid>
          </Grid> */}
          <Card>
            <CardHeader title="Header Title" />
            <Typography variant="body1" style={{ padding: "16px" }}>
              Content goes here. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Typography>
          </Card>
        </div>
        <div>
          <table></table>
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
