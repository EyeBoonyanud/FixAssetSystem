import React, { useState, useEffect } from "react";
import Header from "../Page/Hearder";
import "../Page/Style.css";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Tooltip from "@mui/material/Tooltip";
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
import SaveIcon from "@mui/icons-material/Save";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Empty } from "antd";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
// import swal from "sweetalert";
import CloseIcon from "@mui/icons-material/Close";
// const DownloadsPath = path.join(__dirname, "../uploads");

function person_maintain_new({ isOpen, onClose, FamNo }) {
  console.log(FamNo,"FamNo")
  if (!isOpen) return null;
  const [Filedata, setFiledata] = useState([]);
  const File = () => {
    axios
      .post("http://localhost:5000/FAM_FILE_ATTACH", {
        FamNo: FamNo,
      })
      .then((res) => {
        const data = res.data;
        if (data.length > 0) {
          setFiledata(data);
          console.log(data);
        }
      });
  };
  useEffect(() => {
    File();
  }, []);

  // Popup
  const onCloseCancel = () => {
    console.log("ปิด");
    onClose();
  };

  const downloadFile = (fileName) => {
    const downloadUrl = `http://localhost:5000/downloads?filename=${encodeURIComponent(fileName)}`;
  
    axios({
      url: downloadUrl,
      method: 'GET',
      responseType: 'blob',
    })
    .then(response => {
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
    console.log(response)
      // สร้างลิงก์
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
    
      // ดาวน์โหลดไฟล์โดยอัตโนมัติ
    //   link.download = 'downloaded_file.xlsx';
      link.download = 'downloaded_file';
      link.click();
    
      // ลบ URL ที่ถูกสร้างขึ้น
      window.URL.revokeObjectURL(link.href);
    })
    .catch(error => {
      console.error('Error downloading file:', error);
    });
  };
  
  // เรียกใช้งานฟังก์ชันดาวน์โหลดไฟล์


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
                    color: "blue",
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
                >
                  Close
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