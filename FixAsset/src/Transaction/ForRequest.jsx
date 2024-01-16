import React, { useState, useEffect } from "react";
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
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function ForRequest() {
  return (
    <div className="Box-Insert">
      <div className="Insert">
        <Box sx={{ flexGrow: 1 }}>
          {/* FAM Np and Request */}
          <Grid container spacing={3}>
            <Grid xs={1.5}>
              <Typography style={{ width: "100%", textAlign: "left" }}>
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
              <Typography style={{ width: "100%", textAlign: "left" }}>
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
              <Typography style={{ width: "100%", textAlign: "left" }}>
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
              <Typography style={{ width: "100%", textAlign: "left" }}>
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
          <Grid container spacing={3} style={{width:'100%'}}>
          <Grid xs={1.5}>
              <Typography style={{ width: "100%", textAlign: "left" }}>
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
          <Grid container spacing={3} >
            <Grid xs={1.5}>
              <Typography  style={{ width: "100%", textAlign: "left" }}>
                FAM No :
              </Typography>
            </Grid>
            <Grid xs={8}>
              <TextField size="small" style={{ width: "100%" }}></TextField>
            </Grid>
            
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default ForRequest;
