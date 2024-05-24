import React, { useState, useEffect } from "react";
import "../Page/Style.css";
import {
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Button,
} from "@mui/material";
import axios from "axios";


function person_maintain_new({ isOpen, onClose, FamNo }) {
  if (!isOpen) return null;
  const [Filedata, setFiledata] = useState([]);
  const File = () => {
    axios
      .post("/FAM_FILE_ATTACH", {
        FamNo: FamNo,
      })
      .then((res) => {
        const data = res.data;
        if (data.length > 0) {
          setFiledata(data);
        }
      });
  };
  useEffect(() => {
    File();
  }, []);

  // Popup
  const onCloseCancel = () => {
    onClose();
  };

  const downloadFile = (fileName) => {
    const downloadUrl = `/downloads?filename=${encodeURIComponent(fileName)}`;
 
    axios({
      url: downloadUrl,
      method: 'GET',
      responseType: 'blob',
    })
    .then(response => {
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `DownLoads_${fileName}`;
      link.click();
      window.URL.revokeObjectURL(link.href);
    })
    .catch(error => {
      console.error('Error downloading file:', error);
    });
  };
 

  return (
    <div className="popup">
      <div className="popup-content">
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
            {Filedata.map((option, index) => (
              <TableRow key={index}>
                <TableCell>{Filedata[index][0]}</TableCell>
                <TableCell>{Filedata[index][1]}</TableCell>
                <TableCell>{Filedata[index][2]}</TableCell>
                <TableCell
                  style={{
                    textAlign: "left",
                    color: "#40a9ff",
                    textDecoration: "underline",
                  
                  }}
                >
                  <p style={{ cursor: "pointer"}} onClick={() => downloadFile(Filedata[index][4])}>
                    {Filedata[index][3]}
                  </p>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={4} style={{ border: "0" }}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#BE3144" }}
                  onClick={onCloseCancel}
                >Close
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default person_maintain_new;
