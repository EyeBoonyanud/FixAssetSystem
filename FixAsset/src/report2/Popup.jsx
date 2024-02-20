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

function Popup({isOpen, onClose, FamNo }) {

    const [Data, setData] = useState([]);
    
    if (!isOpen) {
        return null;
    }

    const Filedata = () => {
        axios.post("http://localhost:5000/FAM_FILE_ATTACH", {
            FamNo: FamNo,
        })
        .then(res => {
            
            if (res.data.length > 0) {
                setData(res.data);
                console.log(res.data);
            } 
          })
          .catch(error => {
            console.error('Error fetching FAM files:', error);
          });
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