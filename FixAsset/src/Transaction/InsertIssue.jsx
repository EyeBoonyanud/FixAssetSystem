import * as React from "react";
import Header from "../Page/Hearder";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography, Card, Paper, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Header />

      <Box sx={{ width: "100%", margin: "100px", width: "90%" }}>
        {" "}
        <Card>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="For Requester" {...a11yProps(0)} />
              <Tab label="Details" {...a11yProps(1)} />
              <Tab label="File from request" {...a11yProps(2)} />
              <Tab label="Transfer Detail" {...a11yProps(3)} />
              <Tab label="Routing" {...a11yProps(4)} />
              <Tab label="Close Routing" {...a11yProps(5)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0} className="Box-Insert">
            <div className="Insert">
              <Box sx={{ flexGrow: 1 }}>
                {/* FAM Np and Request */}
                <Grid container spacing={3}>
                  <Grid xs={3}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      FAM No :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{ width: "100%" }}
                    ></TextField>
                  </Grid>
                  <Grid xs={3}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Request Date :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{ width: "100%" }}
                    ></TextField>
                  </Grid>
                </Grid>
                {/* Request BY(Owner) */}
                <Grid container spacing={3}>
                  <Grid xs={3}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                     Request By (Owner)
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{ width: "100%" }}
                    ></TextField>
                  </Grid>
                  <Grid xs={3}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Request Date :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{ width: "100%" }}
                    ></TextField>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid xs={3}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      FAM No :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{ width: "100%" }}
                    ></TextField>
                  </Grid>
                  <Grid xs={3}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Request Date :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{ width: "100%" }}
                    ></TextField>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid xs={3}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      FAM No :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{ width: "100%" }}
                    ></TextField>
                  </Grid>
                  <Grid xs={3}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Request Date :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{ width: "100%" }}
                    ></TextField>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid xs={3}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      FAM No :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{ width: "100%" }}
                    ></TextField>
                  </Grid>
                  <Grid xs={3}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Request Date :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{ width: "100%" }}
                    ></TextField>
                  </Grid>
                </Grid>
              </Box>
            </div>

          </CustomTabPanel>
          
          <CustomTabPanel value={value} index={1}>
            <Card className="Insert">2</Card>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Card className="Insert">3</Card>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <Card className="Insert">4</Card>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <Card className="Insert">5</Card>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            <Card className="Insert">6</Card>
          </CustomTabPanel>
        </Card>
      </Box>
    </>
  );
}
