import React, { useState, useEffect } from "react";
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
  TableHead,
  TableContainer,
  Paper,
} from "@mui/material";
import {
  FilePdfOutlined,
  FileExcelOutlined,
  SearchOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { Empty } from "antd";
import Popup from "./Popup";
import * as XLSX from "xlsx";
import { InfoCircleOutlined } from "@ant-design/icons";

function Report2() {
  const [selectRequestType, setselectRequestType] = useState("");
  const [txtFamNo, settxtFamNo] = useState("");
  const [ReqType, setReqType] = useState([]);
  const [TbSearch, setTbSearch] = useState([]);
  const [CheckHead, setCheackHead] = useState("hidden");
  const [CheckEmpty, setCheckEmpty] = useState("hidden");
  const [CheckData, setCheckData] = useState("visible");

  useEffect(() => {
    RequestType();
  }, []);

  const RequestType = () => {
    axios
      .post("http://localhost:5000/RequstType")
      .then((res) => {
        const data = res.data;
        setReqType(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching RequestType:", error);
      });
  };

  const Search = () => {
    if (selectRequestType === "") {
      alert("Please Select Request Type");
      return;
    }
    if (txtFamNo === "") {
      alert("Please input Fam No.");
      return;
    } else if (selectRequestType !== "" && txtFamNo !== "") {
      axios
        .post("http://localhost:5000/FamDetailReport", {
          RequestType: selectRequestType,
          FAMNo: txtFamNo,
        })
        .then((res) => {
          if (res.data.length > 0) {
            const data = res.data;

            const dataTablesByFamno = {};

            for (let i = 0; i < data.length; i++) {
              const Famno = data[i][2];
              const currentDataTable = dataTablesByFamno[Famno] || [];

              if (!dataTablesByFamno[Famno]) {
                var sumAcqCost = 0;
                var sumBookvalue = 0;
              }

              sumAcqCost += data[i][13];
              sumBookvalue += data[i][14];

              currentDataTable.push([
                currentDataTable.length === 0 ? data[i][0] : "",
                currentDataTable.length === 0 ? data[i][1] : "",
                currentDataTable.length === 0 ? data[i][2] : "",
                currentDataTable.length === 0 ? data[i][3] : "",
                // currentDataTable.length === 0 ? data[i][4] : "",
                data[i][4],
                data[i][5],
                data[i][6],
                data[i][7],
                data[i][8],
                data[i][9],
                data[i][10],
                data[i][11],
                data[i][12],
                data[i][13].toLocaleString(),
                data[i][14],
                data[i][15],
                data[i][16],
                data[i][17],
                sumAcqCost.toLocaleString(),
                sumBookvalue.toLocaleString(),
              ]);

              dataTablesByFamno[Famno] = currentDataTable;
              setCheackHead("visible");
            }
            setCheckEmpty("visible");
            setCheckData("hidden");
            setTbSearch(dataTablesByFamno);
          } else {
            setTbSearch(res.data);
            setCheckEmpty("hidden");
            setCheckData("visible");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };

  const Reset = () => {
    setselectRequestType("");
    settxtFamNo("");
    setTbSearch([]);
    setCheackHead("hidden");
    setCheckEmpty("hidden");
    setCheckData("visible");
  }

  const exportToExcel = () => {
    
    const dataToExport = TbSearch; // ข้อมูลที่จะ export
    const flattenedData = Object.values(dataToExport).flatMap((famno) => famno); // แปลง Object เป็น Array และใช้ .flatMap()

    console.log(flattenedData,"///////////")
    
    const ws = XLSX.utils.aoa_to_sheet([
      [
        "Factory",
        "Cost Center",
        "Fam No.",
        "No.",
        "Asset Code",
        "Comp.",
        "From CC",
        "Descriptions",
        "code No.",
        "Project BOI",
        "Qty",
        "Inv.No.",
        "Inv. Date",
        "Acquisition Cost",
        "Book value",
        "New CC",
        "Project BOI",
        "Remark",
      ],
      ...flattenedData
    ]);
   
  
    const wb = XLSX.utils.book_new(); // สร้าง workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1"); // เพิ่ม worksheet เข้า workbook
    XLSX.writeFile(wb, "exported_data.xlsx"); // บันทึกไฟล์ Excel
  };
  
  const [ClickFileFam, setClickFileFam] = useState("")
  const [OpenPopup, setOpenPopup] = useState(false)

  const PopupOpen = (Famno) => {
    const selectRow = Famno;
    if (selectRow) {
      setClickFileFam(Famno);
      setOpenPopup(true);
    }
  };

  const PopupClose = () => {
    setOpenPopup(false);
  }

  return (
    <>
      <Header />
      <Popup isOpen={OpenPopup} onClose={PopupClose} Famno={ClickFileFam} />
      <div
        style={{
          marginTop: "60px",
          marginLeft: "90px",
          justifyContent: "left",
          display: "flex",
        }}
      >
        <div>
          <h1>FAM Detail Report</h1>
        </div>
      </div>

      <div style={{ justifyContent: "center", display: "flex" }}>
        <div style={{ marginBottom: "30px" }}>
          <FormControl sx={{ width: 300 }} style={{ marginRight: "10px" }}>
            <InputLabel id="lblName" size="small">
              Request Type
            </InputLabel>
            <Select
              labelId="lblName"
              id="demo-multiple-name"
              label="Request Type"
              size="small"
              sx={{ textAlign: "left" }}
              value={selectRequestType}
              onChange={(e) => setselectRequestType(e.target.value)}
            >
              {ReqType.map((item) => (
                <MenuItem key={item[0]} value={item[0]}>
                  {item[1]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="Fam No."
            variant="outlined"
            size="small"
            style={{ marginRight: "10px", width: "400px" }}
            value={txtFamNo}
            onChange={(e) => settxtFamNo(e.target.value)}
          />
          <Button variant="contained" onClick={Search}>
            <SearchOutlined style={{ fontSize: "20px" }} /> &nbsp; Search
          </Button>{" "}
          &nbsp;
          <Button
            variant="contained"
            style={{ backgroundColor: "#C70039" }}
            onClick={Reset}
          >
            <RedoOutlined style={{ fontSize: "20px" }} /> &nbsp; Reset
          </Button>{" "}
          &nbsp;
          <Button
            variant="contained"
            style={{ backgroundColor: "#1A5D1A" }}
            onClick={exportToExcel}
          >
            <FileExcelOutlined style={{ fontSize: "20px" }} /> &nbsp; Export
          </Button>
        </div>
      </div>

      <div className="DivTableFam">
        <TableContainer
          component={Paper}
          style={{
            width: "97%",
            marginBottom: "10px",
            maxHeight: "450px",
            visibility: CheckHead,
          }}
        >
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            className="TbFam"
          >
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Factory</TableCell>
                <TableCell>Cost Center</TableCell>
                <TableCell>FAM No.</TableCell>
                <TableCell>No.</TableCell>
                <TableCell>Asset Code</TableCell>
                <TableCell>Comp.</TableCell>
                <TableCell>From CC</TableCell>
                <TableCell>Descriptions</TableCell>
                <TableCell>Code No.</TableCell>
                <TableCell>Project BOI</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Inv.No.</TableCell>
                <TableCell>Inv. Date</TableCell>
                <TableCell>Acquisition Cost</TableCell>
                <TableCell>Book value</TableCell>
                <TableCell>New CC</TableCell>
                <TableCell>Project BOI</TableCell>
                <TableCell>Remark</TableCell>
                <TableCell>Document Attach</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ overflowY: "auto" }}>
              {Object.keys(TbSearch).length > 0 ? (
                Object.keys(TbSearch).map((famno, famnoIndex) => (
                  <React.Fragment key={famnoIndex}>
                    {TbSearch[famno].map((row, rowIndex) => (
                      <React.Fragment key={`${famno}-${rowIndex}`}>
                        <TableRow>
                          <TableCell>
                            {rowIndex === 0 ? (
                              <FilePdfOutlined
                                style={{ color: "red", fontSize: "20px" }}
                              />
                            ) : (
                              ""
                            )}
                          </TableCell>
                          <TableCell>{row[0]}</TableCell>
                          <TableCell>{row[1]}</TableCell>
                          <TableCell>{row[2]}</TableCell>
                          <TableCell>{row[3]}</TableCell>
                          <TableCell>{row[4]}</TableCell>
                          <TableCell>{row[5]}</TableCell>
                          <TableCell>{row[6]}</TableCell>
                          <TableCell style={{ textAlign: "left" }}>
                            {row[7]}
                          </TableCell>
                          <TableCell>{row[8]}</TableCell>
                          <TableCell>{row[9]}</TableCell>
                          <TableCell>{row[10]}</TableCell>
                          <TableCell>{row[11]}</TableCell>
                          <TableCell>{row[12]}</TableCell>
                          <TableCell>{row[13]}</TableCell>
                          <TableCell>{row[14]}</TableCell>
                          <TableCell>{row[15]}</TableCell>
                          <TableCell>{row[16]}</TableCell>
                          <TableCell>{row[17]}</TableCell>
                          <TableCell>
                            {rowIndex === 0 && 
                            <Button onClick={() => PopupOpen(row[2])}> File</Button>}
                          </TableCell>
                        </TableRow>
                        {rowIndex === TbSearch[famno].length - 1 && (
                          <TableRow>
                            <TableCell colSpan={14}></TableCell>
                            <TableCell style={{ fontWeight: "bold" }}>
                              {row[18]}
                            </TableCell>
                            <TableCell style={{ fontWeight: "bold" }}>
                              {row[19]}
                            </TableCell>
                            <TableCell colSpan={4}></TableCell>
                          </TableRow>
                        )}
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))
              ) : (
                <TableRow style={{ visibility: CheckEmpty }}>
                  <TableCell colSpan={16}>
                    <InfoCircleOutlined
                      style={{
                        visibility: CheckData,
                        fontSize: "30px",
                        color: "#ffd580",
                      }}
                    />
                    <text
                      style={{
                        visibility: CheckData,
                        fontSize: "25px",
                        marginLeft: "10px",
                      }}
                    >
                      {" "}
                      Please fill in information{" "}
                    </text>
                    <Empty style={{ visibility: CheckEmpty }} />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Report2;
