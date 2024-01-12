import React, { useState, useEffect } from "react";
import Header from "../Page/Hearder";
import "../Page/Style.css";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import {
  Typography,
  FormControl,
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  TextField,
} from "@mui/material";

function Issue() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Header />
      <div >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 7,
              width: 1000,
             
            },
          }}
        >
          <Paper sx={{
            height:500 ,
          }} >
            {/* Factiory  */}
            <Grid
              container
              spacing={2}
              style={{ width: "100%", marginLeft: "20px", marginTop: "20px" }}
            >
              <Grid item xs={1.2} style={{ marginTop: "2px" }}>
                <Typography>Factory</Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    size="small"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* <Grid item xs={1} style={{ marginTop: "20px" }}>
              <Typography>FAM No.</Typography>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid> */}
            </Grid>
            {/* FamNo. and To. */}
            <Grid
              container
              spacing={2}
              style={{ width: "100%", marginLeft: "20px", marginTop: "5px" }}
            >
              <Grid item xs={1.2} style={{ marginTop: "20px" }}>
                <Typography>FAM No :</Typography>
              </Grid>
              <Grid item xs={4} style={{ height: "10px" }}>
                <TextField
                  size="small"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                    width: "319px",
                    marginTop: "10px",
                    marginRight: "5px",
                  }}
                ></TextField>
              </Grid>
              <Grid item xs={1} style={{ marginTop: "20px" }}>
                <Typography>To.</Typography>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  size="small"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                    width: "319px",
                    marginTop: "10px",
                    marginRight: "5px",
                  }}
                ></TextField>
              </Grid>
            </Grid>
            {/* Dept. and Cost */}
            <Grid
              container
              spacing={2}
              style={{ width: "100%", marginLeft: "20px", marginTop: "20px" }}
            >
              <Grid item xs={1.2} style={{ marginTop: "2px" }}>
                <Typography>Dept :</Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    size="small"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={1} style={{ marginTop: "2px" }}>
                <Typography>Cost Center :</Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    size="small"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            {/* request and Fix */}
            <Grid
              container
              spacing={2}
              style={{ width: "100%", marginLeft: "20px", marginTop: "10px" }}
            >
              <Grid item xs={2} style={{ marginTop: "2px" }}>
                <Typography>Request Type :</Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    size="small"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={1} style={{ marginTop: "5px" }}>
                <Typography>Fix Asset Code :</Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    size="small"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            {/* request Date and To */}
            <Grid
              container
              spacing={2}
              style={{ width: "100%", marginLeft: "20px", marginTop: "5px" }}
            >
              <Grid item xs={2} style={{ marginTop: "20px" }}>
                <Typography>Request Date :</Typography>
              </Grid>
              <Grid item xs={4} style={{ height: "10px" }}>
                <TextField
                  size="small"
                  type="date"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                    width: "300px",
                    marginTop: "10px",
                    marginRight: "5px",
                  }}
                ></TextField>
              </Grid>
              <Grid item xs={1} style={{ marginTop: "20px" }}>
                <Typography>To :</Typography>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  size="small"
                  type="date"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                    width: "319px",
                    marginTop: "10px",
                    marginRight: "5px",
                  }}
                ></TextField>
              </Grid>
            </Grid>
            {/* Request By */}
            <Grid
              container
              spacing={2}
              style={{ width: "100%", marginLeft: "20px", marginTop: "5px" }}
            >
              <Grid item xs={2} style={{ marginTop: "20px" }}>
                <Typography>Request By :</Typography>
              </Grid>
              <Grid item xs={4} style={{ height: "5px" }}>
              <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    size="small"
                    style={{
                      width:'737px'
                    }}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </div>
      <div className="responsive-container">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#A7C9FA" }}>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Factory</TableCell>
                <TableCell>Cost Center</TableCell>
                <TableCell>Issue Date</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Fixed Asset Code</TableCell>
                <TableCell>Request Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Tooltip title="Edit">
                    <EditNoteIcon
                      style={{ color: "#F4D03F", fontSize: "30px" }}
                      onClick={() => handleOpenEdit(item[0])}
                    />
                  </Tooltip>
                  <Tooltip title="Delete">
                    <DeleteForeverIcon
                      style={{ color: "red", fontSize: "30px" }}
                      onClick={() => Delete(item[0])}
                    />
                  </Tooltip>
                </TableCell>
                <TableCell>1</TableCell>
                <TableCell>2</TableCell>
                <TableCell>3</TableCell>
                <TableCell>4</TableCell>
                <TableCell>5</TableCell>
                <TableCell>6</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Issue;
