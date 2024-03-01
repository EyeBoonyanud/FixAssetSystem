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
import Popup from "./Popup_FamFileAttach";
import * as XLSX from "xlsx";
import { InfoCircleOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2'

function Report() {
  const [selectRequestType, setselectRequestType] = useState("");
  const [Txt_FamNo, setTxt_FamNo] = useState("");
  const [TableSearch, setTableSearch] = useState([]);
  const [TypeRequest, setTypeRequest] = useState([]);
  const [checkHead, setCheckHead] = useState("hidden"); // ตัวแปรเช็คค่าว่าง
  const [checkEmpty, setCheckEmpty] = useState("hidden"); // ตัวแปรเช็คค่าว่าง
  const [checkData, setCheckData] = useState("visible"); // ตัวแปร datashow warning

  useEffect(() => {
    Type();
  }, []);

  const Type = () => {
    axios.post("http://localhost:5000/RequstType").then((res) => {
      const data = res.data;
      setTypeRequest(data);
      // console.log(data)
    });
  };

  const Reset = () => {
    setselectRequestType("");
    setTxt_FamNo("");
    setTableSearch([]);
    setCheckHead("hidden");
    setCheckEmpty("hidden");
    setCheckData("visible");
  };
  const Search = () => {
    if (selectRequestType === "" || Txt_FamNo === "") {
      alert("Please Select Reques Type or Fam No.");
    } else if (selectRequestType !== "" && Txt_FamNo !== "") {
      axios
        .post("http://localhost:5000/FamDetailReport", {
          RequestType: selectRequestType,
          FAMNo: Txt_FamNo,
        })
        .then((res) => {
          if (res.data.length > 0) {
            const data = res.data;
            const dataTablesByFamno = {};

            for (let i = 0; i < data.length; i++) {
              const Famno = data[i][2];
              const Fac = data[i][0];
              const currentDataTable = dataTablesByFamno[Famno] || [];
              if (!dataTablesByFamno[Famno]) {
                var sumAcqCost = 0;
                var sumBookvalue = 0;
              }
              var numericValue = data[i][13].replace(/,/g, '');
              sumAcqCost +=parseFloat( numericValue);
              sumBookvalue = sumBookvalue + data[i][14];
             console.log(numericValue,"iiiiiiiiiiiiiiiiiiiiii")
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
                data[i][13],
                data[i][14],
                data[i][15],
                data[i][16],
                data[i][17],
                sumAcqCost.toLocaleString('en-US', { minimumFractionDigits: 2,  maximumFractionDigits: 2}),
                sumBookvalue,
                numericValue,
                sumAcqCost
              ]);
              dataTablesByFamno[Famno] = currentDataTable;
              setCheckHead("visible");
            }        
            setCheckEmpty("visible");
            setCheckData("hidden");
            setTableSearch(dataTablesByFamno);
          } else {
            Swal.fire({
              title: "Not Found Data",
              text:  `Not Found ${Txt_FamNo} Please enter again`,
              icon: "warning"
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };
  // Object.keys(TableSearch).map((famno, famnoIndex) => (
  const [selectedFamNo, setSelectedFamNo] = useState("");
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = (Famno) => {
    const selectedRow = Famno;
    if (selectedRow) {
      console.log("FamNo", selectedRow);
      setSelectedFamNo(Famno);
      setPopupOpen(true);
    }
    console.log("///////mmmmmmmmmmmmmmmm///////////",Famno)
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const dataTable1export = [];

  const sortedTableFirst = Object.keys(TableSearch).flatMap((famno) => {
    const famnoRows = TableSearch[famno];
    
    // คำนวณผลรวมของ row[18] สำหรับ summaryRow
    const sumRow18 = famnoRows.reduce((sum, row) => row[21], 0);
    const sumRow19 = famnoRows.reduce((sum, row) => row[19], 0);

    const summaryRow = [
      "", // คุณสามารถปรับแต่ง Label ของ summary row ตามต้องการ
      "", // ช่องว่างสำหรับคอลัมน์อื่น ๆ ปรับแต่งตามต้องการ
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      sumRow18, 
      sumRow19, 
      "",
      "",
      "",
      "",
      "",
    ];
  
    const rowsWithSummary = famnoRows.map((row) => [
      row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[8],
      row[9], row[10], row[11], row[12], parseFloat(row[20]), row[14], row[15], row[16],
      row[17],
    ]);
  
    // เพิ่ม summary row ไปที่ท้ายของทุกกลุ่ม
    return [...rowsWithSummary, summaryRow];
  });
  
  dataTable1export.push(...sortedTableFirst);
  
  const exportToExcelTable1 = () => {
    const ws = XLSX.utils.aoa_to_sheet([
      [
        "Factory",
        "Cost Center",
        "FAM No.",
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
      ...dataTable1export,
    ]);

  
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, `FamDetailReport.xlsx`);
  };

  return (
    <>
      <Header />
      <Popup isOpen={isPopupOpen} onClose={closePopup} FamNo={selectedFamNo} />
      <div
        style={{
          marginTop: "60px",
          marginLeft: "90px",
          justifyContent: "left",
          display: "flex",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: "Verdana, sans-serif",
              color: "#3AA6B9",
              fontWeight: "bold",
            }}
          >
            FAM Detail Report
          </h1>
        </div>
      </div>

      <div style={{ justifyContent: "center", display: "flex" }}>
        <div style={{ marginBottom: "30px" }}>
          <FormControl sx={{ width: 300 }} style={{ marginRight: "10px" }}>
            <InputLabel id="demo-simple-select-label" size="small">
              Request Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Request Type"
              size="small"
              sx={{ textAlign: "left" }}
              value={selectRequestType}
              onChange={(e) => setselectRequestType(e.target.value)}
            >
              {TypeRequest.map((item, index) => (
                <MenuItem key={index} value={TypeRequest[index][0]}>
                  {TypeRequest[index][1]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="FAM No."
            size="small"
            variant="outlined"
            style={{ marginRight: "10px", width: "500px" }}
            value={Txt_FamNo}
            onChange={(e) => setTxt_FamNo(e.target.value)}
          />
          <Button variant="contained" onClick={Search}>
            <SearchOutlined style={{ fontSize: "20px" }} /> &nbsp; Search
          </Button>{" "}
          &nbsp;
          <Button
            variant="contained"
            style={{ backgroundColor: "#BE3144" }}
            onClick={Reset}
          >
            <RedoOutlined style={{ fontSize: "20px" }} /> &nbsp; Reset
          </Button>{" "}
          &nbsp;
          <Button
            variant="contained"
            style={{ backgroundColor: "#1A5D1A" }}
            onClick={exportToExcelTable1}
          >
            <FileExcelOutlined style={{ fontSize: "20px" }} /> &nbsp; Export
          </Button>
        </div>
      </div>

      <div className="DivTableFam">
        <TableContainer
          component={Paper}
          style={{ width: "96%", marginBottom: "10px", maxHeight: "450px", visibility : checkHead }}
        >
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            className="TableFam"
          >
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
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
              {Object.keys(TableSearch).length > 0 ? (
                Object.keys(TableSearch).map((famno, famnoIndex) => (
                  <React.Fragment key={famnoIndex}>
                    {TableSearch[famno].map((row, rowIndex) => (
                      <React.Fragment key={`${famno}-${rowIndex}`}>
                        <TableRow>
                          {/* ตัวอย่างการใส่ Fac */}
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
                          <TableCell style={{ textAlign: "left" }}>{row[4]}</TableCell>
                          <TableCell>{row[5]}</TableCell>
                          <TableCell style={{ textAlign: "left" }}>{row[6]}</TableCell>
                          <TableCell style={{ textAlign: "left" }}>
                            {row[7]}
                          </TableCell>
                          <TableCell >{row[8]}</TableCell>
                          <TableCell style={{ textAlign: "left" }}>{row[9]}</TableCell>
                          <TableCell>{row[10]}</TableCell>
                          <TableCell style={{ textAlign: "left" }}>{row[11]}</TableCell>
                          <TableCell>{row[12]}</TableCell>
                          <TableCell style={{ textAlign: "right" }}>{row[13]}</TableCell>
                          <TableCell>{row[14]}</TableCell>
                          <TableCell style={{ textAlign: "left" }}>{row[15]}</TableCell>
                          <TableCell style={{ textAlign: "left" }}>{row[16]}</TableCell>
                          <TableCell style={{ textAlign: "left" }}>{row[17]}</TableCell>
                          <TableCell>
                            {rowIndex === 0 ? (
                              <Button onClick={() => openPopup(row[2])}>
                                {" "}
                                File
                              </Button>
                            ) : (
                              ""
                            )}
                          </TableCell>
                        </TableRow>
                        {rowIndex === TableSearch[famno].length - 1 && (
                          <TableRow>
                            <TableCell colSpan={14}></TableCell>
                            <TableCell style={{ fontWeight: "bold" ,textAlign:"right"}}>
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
                // <TableRow>
                //   <TableCell colSpan={24}>
                //     <Empty description="No data" />
                //   </TableCell>
                // </TableRow>
                <TableRow style={{ visibility: checkEmpty }}>
                  <TableCell colSpan={16}>
                    <InfoCircleOutlined
                      style={{
                        visibility: checkData,
                        fontSize: "30px",
                        color: "#ffd580",
                      }}
                    />
                    <text
                      style={{
                        visibility: checkData,
                        fontSize: "25px",
                        marginLeft: "10px",
                      }}
                    >
                      {" "}
                      Please fill in information{" "}
                    </text>
                    <Empty style={{ visibility: checkEmpty }} />
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

export default Report;
