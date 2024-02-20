import React, { useState, useEffect } from "react";
import "../Page/Style.css";
import {
    Typography,
    FormControl,
    TableRow,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    Select,
    MenuItem,
    Grid,
    TextField,
    Button,
    InputLabel,
  } from "@mui/material";

  import axios from "axios";

function Popup() {

    const [Data, setData] = useState([]);
    
    if (!isopen) {
        return null;
    }

    const Filedata = () => {
        axios.post("")
    }


  return (
    <div className="popup">
        <div className="popup-contect">
            <Table className="FamFilePopUp">
                <TableHead>
                    <TableRow>
                        <TableCell>FAM No.</TableCell>
                        <TableCell>Attach from.</TableCell>
                        <TableCell>No.</TableCell>
                        <TableCell>File</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                </TableBody>
            </Table>
        </div>
    </div>
  )
}

export default Popup