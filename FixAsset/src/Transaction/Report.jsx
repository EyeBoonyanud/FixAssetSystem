import React from "react";
import Header from "../Page/Hearder";
import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TableRow,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TableHead
} from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";


function Report() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "80px", display: "flex", justifyContent: "center" }}>
        <Table className="SearchReport">
          <TableBody>
            <TableRow>
              <TableCell align="left">
                <h1> FAM Detail Report</h1>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-simple-select-label">
                    Request Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Request Type"
                    size="medium"
                    sx={{ textAlign: "left" }}
                  >
                    <MenuItem value="Transfer">Transfer</MenuItem>
                    <MenuItem value="Twenty">Twenty</MenuItem>
                    <MenuItem value="Thirty">Thirty</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ m: 1, width: 700 }}>
                  <TextField
                    id="outlined-basic"
                    label="Fam No"
                    variant="outlined"
                  />
                </FormControl>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  style={{ height: "40px"}}
                >
                  <SearchOutlined />
                </Button>
&nbsp;
                <Button
                  variant="contained"
                  style={{ height: "40px"}}
                >
                  Reset
                </Button>&nbsp;
                <Button
                  variant="contained"
                  style={{ height: "40px"}}
                >
                  Export Excel
                </Button>

              </TableCell>
         
            </TableRow>
            <TableRow>
                
            </TableRow>
          </TableBody>
        </Table>
       
      </div>
      
      <Table stickyHeader aria-label="sticky table" style={{ width: "300px", overflowX: "auto" }}>
  <TableHead>
    <TableRow>
      <TableCell>...</TableCell>
      <TableCell>Factory</TableCell>
      <TableCell>Cost Center</TableCell>
      <TableCell>Fam No.</TableCell>
      <TableCell>No.</TableCell>
      <TableCell>Asset Code</TableCell>
      <TableCell>Comp.</TableCell>
      <TableCell>From CC</TableCell>
      <TableCell>Descriptions</TableCell>
      <TableCell>code No.</TableCell>
      <TableCell>Project BOI</TableCell>
      <TableCell>Qty</TableCell>
      <TableCell>Inv.No.</TableCell>
      <TableCell>Acquisition Cost</TableCell>
      <TableCell>Book value</TableCell>
      <TableCell>New CC</TableCell>
      <TableCell>Project BOI</TableCell>
      <TableCell>Remark</TableCell>
      <TableCell>Document Attach</TableCell>
    </TableRow>
  </TableHead>
  <TableBody style={{ overflowY: "auto" }}>
  <TableRow>
      <TableCell>...</TableCell>
      <TableCell>Factory</TableCell>
      <TableCell>Cost Center</TableCell>
      <TableCell>Fam No.</TableCell>
      <TableCell>No.</TableCell>
      <TableCell>Asset Code</TableCell>
      <TableCell>Comp.</TableCell>
      <TableCell>From CC</TableCell>
      <TableCell>Descriptions</TableCell>
      <TableCell>code No.</TableCell>
      <TableCell>Project BOI</TableCell>
      <TableCell>Qty</TableCell>
      <TableCell>Inv.No.</TableCell>
      <TableCell>Acquisition Cost</TableCell>
      <TableCell>Book value</TableCell>
      <TableCell>New CC</TableCell>
      <TableCell>Project BOI</TableCell>
      <TableCell>Remark</TableCell>
      <TableCell>Document Attach</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>...</TableCell>
      <TableCell>Factory</TableCell>
      <TableCell>Cost Center</TableCell>
      <TableCell>Fam No.</TableCell>
      <TableCell>No.</TableCell>
      <TableCell>Asset Code</TableCell>
      <TableCell>Comp.</TableCell>
      <TableCell>From CC</TableCell>
      <TableCell>Descriptions</TableCell>
      <TableCell>code No.</TableCell>
      <TableCell>Project BOI</TableCell>
      <TableCell>Qty</TableCell>
      <TableCell>Inv.No.</TableCell>
      <TableCell>Acquisition Cost</TableCell>
      <TableCell>Book value</TableCell>
      <TableCell>New CC</TableCell>
      <TableCell>Project BOI</TableCell>
      <TableCell>Remark</TableCell>
      <TableCell>Document Attach</TableCell>
    </TableRow>
  
  </TableBody>
</Table>


    </>
  );
}

export default Report;
