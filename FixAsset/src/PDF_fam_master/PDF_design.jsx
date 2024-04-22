
import React, { useRef, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useLocation } from "react-router-dom";
import {
  TableRow,
  Table,
  TableBody,
  TableCell,
  Button,
  TableContainer,
  TableHead,
  Checkbox,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./PDF_designCSS.css"
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import html2pdf from "html2pdf.js";
import axios from "axios";
import { createRoot } from "react-dom/client";
import PageLoadding from "../Loadding/Pageload";

function PDF_design() {
  const BackPage = async () => {
    window.location.href = `/FAMsystem/FAMMaster`;
  };
  const tableRefOne = useRef([]);
  const tableRefTwo = useRef([]);
  const tableRefThree = useRef([]);
  const location = useLocation();
  const selectedData = location.state?.selectedData || [];
  const [Count, setCount] = useState([]);
  // console.log("ข้อมูลที่ได้รับ", selectedData);
  const [Datafamno, setDatafamno] = useState([]);
  const [DataLoopDetail, setDataLoopDetail] = useState([]);
  const [SumTotal, setSumTotal] = useState([]);
  const [DataNumberL, setDataNumberL] = useState([]);
  const [DataNumberR, setDataNumberR] = useState([]);
  const [CheckRow, setCheckRow] = useState(0);
  const PDF_FAM = localStorage.getItem("PDF_FAM_DATA");
  // console.log(PDF_FAM, "PDF");
  const [DataTest, setDataTest] = useState([]);
  const [DataTest2, setDataTest2] = useState([]);
  const [DataPageH, setDataPageH] = useState([]);
  const [DataPageE, setDataPageE] = useState([]);
  const [DataPageA, setDataPageA] = useState([]);

  const [isPopupOpenLoadding, setPopupOpenLoadding] = useState(false);
  const openPopupLoadding = () => {
    setPopupOpenLoadding(true);
  };
  const closePopupLoadding = () => {
    setPopupOpenLoadding(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      openPopupLoadding();
      const RequesterORType = async () => {
        console.log(PDF_FAM, "ข้อมูลที่ไปทำการเช็ค PDF_FAM");
        try {
          const response = await axios.post(
            "/getData_Hearder_show_PDF",
            { FamNo: PDF_FAM }
          );
          const data = await response.data;
          console.log(data, "ข้อมูลที่ไปทำการเช็ค FAM NO");
          setDatafamno(data);
        } catch (error) {
          console.error("Error RequesterORType:", error);
        }
      };

      const LoopDataDetail = async () => {
        try {
          const response = await axios.post(
            "/getData_Loop_show_Detail",
            { FamNo: PDF_FAM }
          );
          const data = await response.data;
          const datalength = await response.data.length;
          console.log(datalength, data, "ข้อมูลที่ไปทำการเช็คลูปของ detail");

          if (datalength >= 68) {
            console.log("ทดสอบข้อมูล : ข้อมูลทั้งหมด", data);
            let slicedData = data.slice(36);
            console.log("ทดสอบข้อมูล : slicedData", slicedData);
            let remainingData = slicedData;
            console.log("ทดสอบข้อมูล : remainingData", remainingData);
            let loopCount = Math.ceil(remainingData.length / 44);
            console.log("ทดสอบข้อมูล : loopCount", loopCount, DataTest);
            let loopData = [];
            let loopData2 = [];
            let loopDataCount = [];
            let loopDataCount2 = [];
            for (let i = 0; i < loopCount; i++) {
              let startIndex = i * 44;
              console.log("ทดสอบข้อมูล : startIndex", startIndex);
              let endIndex = Math.min(startIndex + 44, remainingData.length);
              console.log("ทดสอบข้อมูล : endIndex", endIndex);
              if (endIndex - startIndex <= 44 && endIndex - startIndex > 36) {
                let chunk = remainingData.slice(startIndex, endIndex);
                console.log("ทดสอบข้อมูล : chunk", chunk);
                loopData.push(chunk);
                setDataTest(loopData);
                loopDataCount.push(i + 2);
                setDataPageH(loopDataCount);
              } else {
                let chunk2 = remainingData.slice(startIndex, endIndex);
                console.log("ทดสอบข้อมูล : chunk2", chunk2);
                loopData2.push(chunk2);
                setDataTest2(loopData2);
                loopDataCount2.push(i + 2);
                setDataPageE(loopDataCount2);
              }
              setDataPageA(loopDataCount2.length + loopDataCount.length + 1);
              console.log("ทดสอบข้อมูล : loopData", loopData);
              console.log("ทดสอบข้อมูล : loopData2", loopData2);
              console.log(
                loopDataCount,
                loopDataCount2,
                "ทดสอบข้อมูล : loopDataCount1-2",
                loopDataCount2.length + loopDataCount.length
              );
            }
          }
          console.log("Data set length", datalength);
          setDataLoopDetail(data);
          setCheckRow(datalength);
        } catch (error) {
          console.error("Error RequesterORType:", error);
        }
      };
      const ShownumberLeft = async () => {
        try {
          const response = await axios.post(
            "/getData_show_number_left"
          );
          const data = await response.data;
          setDataNumberL(data);
        } catch (error) {
          console.error("Error ShownumberLeft:", error);
        }
      };
      const ShownumberRight = async () => {
        try {
          const response = await axios.post(
            "/getData_show_number_right"
          );
          const data = await response.data;
          setDataNumberR(data);
        } catch (error) {
          console.error("Error ShownumberRight:", error);
        }
      };
      const SumCost = async () => {
        
        try {
          const response = await axios.post("/SumCost", {
            FamNo: PDF_FAM,
          });
          const tableData = response.data;
          setCount(tableData);
        } catch (error) {
          console.error("Error:", error);
        }
      };
      const Sumdata_Total = async () => {
        try {
          const response = await axios.post(
            "/getSum_Data_total?FamNo=${PDF_FAM}",
            { FamNo: PDF_FAM }
          );
          const data = await response.data;
          setSumTotal(data);
        } catch (error) {
          console.error("Error RequesterORType:", error);
        }
        closePopupLoadding();
      };

      await RequesterORType();
      await LoopDataDetail();
      await ShownumberLeft();
      await ShownumberRight();
      await SumCost();
      await Sumdata_Total();
    };
    fetchData();
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  const downloadAsPDF = async () => {
    console.log("PDFGGG");
    const container = document.createElement("div");
    const container2 = document.createElement("div");
    const container3 = document.createElement("div");

    try {
      if (CheckRow <= 24) {
        const loopOneContent = Loop_One(tableRefOne);
        console.log("<= 24");
        const loopOneNode = document.createElement("div");
        createRoot(loopOneNode).render(loopOneContent);
        container.appendChild(loopOneNode);
      }
      if (CheckRow > 24 && CheckRow <= 68) {
        const loopTwoContent = Loop_Two(tableRefTwo);
        console.log("> 24 && <= 68");
        const loopTwoNode = document.createElement("div");
        createRoot(loopTwoNode).render(loopTwoContent);
        container2.appendChild(loopTwoNode);
      }
      if (CheckRow > 68) {
        const loopThreeContent = Loop_Three(tableRefThree);
        console.log("> 68");
        const loopThreeNode = document.createElement("div");
        createRoot(loopThreeNode).render(loopThreeContent);
        container3.appendChild(loopThreeNode);
      }

      const options = {
        margin: 0,
        filename: "Fixed Assets Movement System" + " Fam No " + PDF_FAM ,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
      };

      // // สร้าง PDF สำหรับ Loop 1
      if (CheckRow <= 24 && container.childNodes.length > 0) {
        console.log("เข้ามาใน <= 24");
        const pdfBlob = await html2pdf(container, options).output("blob");
        const formData = new FormData();
        formData.append("subject", "PDF Attachment");
        formData.append("emailMessage", "Here is your PDF file.");
        formData.append("pdfFile", pdfBlob, "Fixasset-file-test.pdf");
      }
      // สร้าง PDF สำหรับ Loop 2
      if (CheckRow > 24 && CheckRow <= 68 && container2.childNodes.length > 0) {
        const pdfBlob2 = await html2pdf(container2, options).output("blob");
        const formData = new FormData();
        formData.append("pdfFile2", pdfBlob2, "Fixasset-file-test2.pdf");
      }
      if (CheckRow > 68 && container3.childNodes.length > 0) {
        const pdfBlob3 = await html2pdf(container3, options).output("blob");
        const formData = new FormData();
        formData.append("pdfFile2", pdfBlob3, "Fixasset-file-test3.pdf");
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const tableBodyRef = useRef(null);
  const tableBodyRef2_1 = useRef(null);
  const tableBodyRef2_2 = useRef(null);
  const tableBodyRef3_1 = useRef(null);
  const tableBodyRef3_2 = useRef(null);
  const tableBodyRef3_3 = useRef(null);
  const [NewRow, setNewRow] = useState([]);
  const [NewRowTwo, setNewRowTwo] = useState([]);
  const [NewRowThree_2, setNewRowThree_2] = useState([]);
  const [NewRowThree_3, setNewRowThree_3] = useState([]);
  useEffect(() => {
    console.log("T0", CheckRow);
    if (tableBodyRef.current || tableBodyRef2_1.current || tableBodyRef2_2.current || tableBodyRef3_1.current || tableBodyRef3_2.current || tableBodyRef3_3.current) {
      console.log("เข้ามาแล้ว",tableBodyRef3_3.current);
      if (CheckRow <= 24) {
        console.log("เข้ามาใน Loop One");
        const numberOfRows = tableBodyRef.current.children.length;
        console.log("Number of rows T1:", numberOfRows);
        const numberOfRowsToAdd = 24 - numberOfRows;
        const newRows = [];
        for (let i = 0; i < numberOfRowsToAdd; i++) {
          newRows.push(
            <TableRow key={numberOfRows + i}>
              {[...Array(10)].map((_, columnIndex) => (
                <TableCell
                  key={columnIndex}
                  className={`HeaderListTableDataTablecell_${columnIndex + 1}`}
                >
                  &nbsp;
                </TableCell>
              ))}
            </TableRow>
          );
          setNewRow(newRows);
        }
      } else if (CheckRow > 24 && CheckRow <= 68) {
        console.log("เข้ามาใน Loop Two");
        const numberOfRows1 = tableBodyRef2_1.current.children.length;
        console.log("Number of rows T2-1:", numberOfRows1);
        const numberOfRowsToAdd1 = 36 - numberOfRows1;
        console.log("ข้อมูล 1 ถึง 36", numberOfRowsToAdd1);
        const newRows1 = [];
        for (let i = 0; i < numberOfRowsToAdd1; i++) {
          newRows1.push(
            <TableRow key={numberOfRows1 + i}>
              {[...Array(10)].map((_, columnIndex) => (
                <TableCell
                  key={columnIndex}
                  className={`HeaderListTableDataTablecell_${columnIndex + 1}`}
                >
                  &nbsp;
                </TableCell>
              ))}
            </TableRow>
          );
          setNewRow(newRows1);
        }
        const numberOfRows2 = tableBodyRef2_2.current.children.length;
        console.log("Number of rows T2-2:", numberOfRows2);
        const numberOfRowsToAdd2 = 32 - numberOfRows2;
        console.log("ข้อมูล 37 ถึง 68", numberOfRowsToAdd2);
        const newRows2 = [];
        for (let i = 0; i < numberOfRowsToAdd2; i++) {
          newRows2.push(
            <TableRow key={numberOfRows2 + i}>
              {[...Array(10)].map((_, columnIndex) => (
                <TableCell
                  key={columnIndex}
                  className={`HeaderListTableDataTablecell_${columnIndex + 1}`}
                >
                  &nbsp;
                </TableCell>
              ))}
            </TableRow>
          );
          setNewRowTwo(newRows2);
        }
        console.log(newRows2,"NewRowTwo");
      } else {
        console.log("เข้ามาในเงื่อนไข Loop Three");
        if (CheckRow > 68) {
          const numberOfRows3_3 = tableBodyRef3_3.current.children.length;
          console.log("Number of rows T3-3:", numberOfRows3_3);
          const numberOfRowsToAdd3_3 = 32 - numberOfRows3_3;
          console.log("ข้อมูลแถวของ T3-3 ", numberOfRowsToAdd3_3);
          const newRows3_3 = [];
          for (let i = 0; i < numberOfRowsToAdd3_3; i++) {
            newRows3_3.push(
              <TableRow key={numberOfRows3_3 + i}>
                {[...Array(10)].map((_, columnIndex) => (
                  <TableCell
                    key={columnIndex}
                    className={`HeaderListTableDataTablecell_${
                      columnIndex + 1
                    }`}
                  >
                    &nbsp;
                  </TableCell>
                ))}
              </TableRow>
            );
            setNewRowThree_3(newRows3_3);
          } 
          if(tableBodyRef3_2.current.children.length < 44 ) {
            const numberOfRows3_2 = tableBodyRef3_2.current.children.length;
            console.log("Number of rows T3-2:", numberOfRows3_2,CheckRow);
            const numberOfRowsToAdd3_2 = 44 - numberOfRows3_2;
            console.log(
              "ข้อมูลแถวของ T3-2 ",
              numberOfRowsToAdd3_2
            );
            const newRows3_2 = [];
            for (let i = 0; i < numberOfRowsToAdd3_2; i++) {
              newRows3_2.push(
                <TableRow key={numberOfRows3_2 + i}>
                  {[...Array(10)].map((_, columnIndex) => (
                    <TableCell
                      key={columnIndex}
                      className={`HeaderListTableDataTablecell_${
                        columnIndex + 1
                      }`}
                    >
                      &nbsp;
                    </TableCell>
                  ))}
                </TableRow>
              );
            }
            setNewRowThree_2(newRows3_2);
          }
         
        }

      }
      console.log("ออกมาแล้ว");
    }
    console.log("ออกมาแล้ว2");
  }, [DataLoopDetail]);
  function Loop_One() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PageLoadding
          isOpen={isPopupOpenLoadding}
          onClose={closePopupLoadding}
        />
        <TableRow>
          {Datafamno.map((item, index) => (
            <div
              style={{
                padding: "0px",
              }}
              key={item[0]}
              ref={(el) => (tableRefOne.current[index] = el)}
            >
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Card variant="elevation" className="cardPDF">
                        <CardContent className="cardContainer">
                          <TableContainer>
                            <Table aria-label="customized table" size="small">
                              <TableHead>
                                <TableRow className="Header">
                                  <TableCell className="HeaderTablecell_1">
                                    &nbsp;Fixed Assets Movement Slip Number
                                  </TableCell>
                                  <TableCell className="HeaderTablecell_2">
                                    FAM : {Datafamno[0][0]}
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                            </Table>
                            <Table aria-label="customized table" size="medium">
                              <TableHead>
                                <TableRow className="HeaderOne">
                                  <TableCell className="HeaderOneTablecell_1">
                                    &nbsp;1) Requester
                                  </TableCell>
                                  <TableCell className="HeaderOneTablecell_2">
                                    <TableRow>
                                      <TableCell className="HeaderOneTablecell_row">
                                        &nbsp;Name : {Datafamno[0][1]} /
                                        {Datafamno[0][2]}
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderOneTablecell_row">
                                        &nbsp;Dept. : {Datafamno[0][3]}
                                      </TableCell>
                                    </TableRow>
                                  </TableCell>
                                  <TableCell className="HeaderOneTablecell_3">
                                    <TableRow>
                                      <TableCell className="HeaderOneTablecell_row">
                                        &nbsp;Ext. : {Datafamno[0][4]}/{" "}
                                        {Datafamno[0][5]} &nbsp; Factory :
                                        {Datafamno[0][6]}
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderOneTablecell_row">
                                        &nbsp;Cost Center : {Datafamno[0][7]}
                                      </TableCell>
                                    </TableRow>
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                            </Table>
                            <Table aria-label="customized table" size="medium">
                              <TableHead>
                                <TableRow className="HeaderTwo">
                                  <TableCell className="HeaderTwoTablecell_1">
                                    &nbsp;2) Type
                                  </TableCell>
                                  <TableCell className="HeaderTwoTablecell_2">
                                    <TableRow>
                                      <TableCell className="HeaderTwoTablecell_3_checkbox">
                                        <FormControl>
                                          <FormGroup row>
                                            &nbsp;{" "}
                                            <FormControlLabel
                                              value="end"
                                              control={
                                                <Checkbox
                                                  disabled
                                                  checked={
                                                    Datafamno[0][8] ===
                                                    "GP01001"
                                                  }
                                                  style={{
                                                    color: "#686D76",
                                                    transform: "scale(0.8)",
                                                  }}
                                                />
                                              }
                                              label={
                                                <span
                                                  style={{
                                                    fontSize: "small",
                                                    color:
                                                      "rgba(0, 0, 0, 0.87)",
                                                    lineHeight: "1.2",
                                                    marginBottom: "0px",
                                                    marginTop: "0px",
                                                    display: "block",
                                                  }}
                                                >
                                                  Transfer
                                                </span>
                                              }
                                              labelPlacement="end"
                                              style={{
                                                lineHeight: "1.2",
                                                marginLeft: "0px",
                                                marginRight: "0px",
                                              }}
                                            />
                                            <FormControlLabel
                                              value="end"
                                              control={
                                                <Checkbox
                                                  disabled
                                                  checked={
                                                    Datafamno[0][8] ===
                                                    "GP01002"
                                                  }
                                                  style={{
                                                    color: "#686D76",
                                                    transform: "scale(0.8)",
                                                  }}
                                                />
                                              }
                                              label={
                                                <span
                                                  style={{
                                                    fontSize: "small",
                                                    color:
                                                      "rgba(0, 0, 0, 0.87)",
                                                    lineHeight: "1.2",
                                                    marginBottom: "0px",
                                                    marginTop: "0px",
                                                    display: "block",
                                                  }}
                                                >
                                                  Scrap
                                                </span>
                                              }
                                              labelPlacement="end"
                                              style={{
                                                lineHeight: "1.2",
                                                marginLeft: "0px",
                                                marginRight: "0px",
                                              }}
                                            />
                                            <FormControlLabel
                                              value="end"
                                              control={
                                                <Checkbox
                                                  disabled
                                                  checked={
                                                    Datafamno[0][8] ===
                                                    "GP01003"
                                                  }
                                                  style={{
                                                    color: "#686D76",
                                                    transform: "scale(0.8)",
                                                  }}
                                                />
                                              }
                                              label={
                                                <span
                                                  style={{
                                                    fontSize: "small",
                                                    color:
                                                      "rgba(0, 0, 0, 0.87)",
                                                    lineHeight: "1.2",
                                                    marginBottom: "0px",
                                                    marginTop: "0px",
                                                    display: "block",
                                                  }}
                                                >
                                                  Sales
                                                </span>
                                              }
                                              labelPlacement="end"
                                              style={{
                                                lineHeight: "1.2",
                                                marginLeft: "0px",
                                                marginRight: "0px",
                                              }}
                                            />
                                            <FormControlLabel
                                              value="end"
                                              control={
                                                <Checkbox
                                                  disabled
                                                  checked={
                                                    Datafamno[0][8] ===
                                                    "GP01004"
                                                  }
                                                  style={{
                                                    color: "#686D76",
                                                    transform: "scale(0.8)",
                                                  }}
                                                />
                                              }
                                              label={
                                                <span
                                                  style={{
                                                    fontSize: "small",
                                                    color:
                                                      "rgba(0, 0, 0, 0.87)",
                                                    lineHeight: "1.2",
                                                    marginBottom: "0px",
                                                    marginTop: "0px",
                                                    display: "block",
                                                  }}
                                                >
                                                  Loss
                                                </span>
                                              }
                                              labelPlacement="end"
                                              style={{
                                                lineHeight: "1.2",
                                                marginLeft: "0px",
                                                marginRight: "0px",
                                              }}
                                            />
                                            <FormControlLabel
                                              value="end"
                                              control={
                                                <Checkbox
                                                  disabled
                                                  checked={
                                                    Datafamno[0][8] ===
                                                    "GP01005"
                                                  }
                                                  style={{
                                                    color: "#686D76",
                                                    transform: "scale(0.8)",
                                                  }}
                                                />
                                              }
                                              label={
                                                <span
                                                  style={{
                                                    fontSize: "small",
                                                    color:
                                                      "rgba(0, 0, 0, 0.87)",
                                                    lineHeight: "1.2",
                                                    marginBottom: "0px",
                                                    marginTop: "0px",
                                                    display: "block",
                                                  }}
                                                >
                                                  Write-off
                                                </span>
                                              }
                                              labelPlacement="end"
                                              style={{
                                                lineHeight: "1.2",
                                                marginLeft: "0px",
                                                marginRight: "0px",
                                              }}
                                            />
                                            <FormControlLabel
                                              value="end"
                                              control={
                                                <Checkbox
                                                  disabled
                                                  checked={
                                                    Datafamno[0][8] ===
                                                    "GP01006"
                                                  }
                                                  style={{
                                                    color: "#686D76",
                                                    transform: "scale(0.8)",
                                                  }}
                                                />
                                              }
                                              label={
                                                <span
                                                  style={{
                                                    fontSize: "small",
                                                    color:
                                                      "rgba(0, 0, 0, 0.87)",
                                                    lineHeight: "1.2",
                                                    marginBottom: "0px",
                                                    marginTop: "0px",
                                                    display: "block",
                                                  }}
                                                >
                                                  Lending to Third-party
                                                </span>
                                              }
                                              labelPlacement="end"
                                              style={{
                                                lineHeight: "1.2",
                                                marginLeft: "0px",
                                                marginRight: "0px",
                                              }}
                                            />
                                            <FormControlLabel
                                              value="end"
                                              control={
                                                <Checkbox
                                                  disabled
                                                  checked={
                                                    Datafamno[0][8] ===
                                                    "GP01007"
                                                  }
                                                  style={{
                                                    color: "#686D76",
                                                    transform: "scale(0.8)",
                                                  }}
                                                />
                                              }
                                              label={
                                                <span
                                                  style={{
                                                    fontSize: "small",
                                                    color:
                                                      "rgba(0, 0, 0, 0.87)",
                                                    lineHeight: "1.2",
                                                    marginBottom: "0px",
                                                    marginTop: "0px",
                                                    display: "block",
                                                  }}
                                                >
                                                  Donation
                                                </span>
                                              }
                                              labelPlacement="end"
                                              style={{
                                                lineHeight: "1.2",
                                                marginLeft: "0px",
                                                marginRight: "0px",
                                              }}
                                            />
                                          </FormGroup>
                                        </FormControl>
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      {" "}
                                  <TableCell className="HeaderTwoTablecell_3_remark">
                                    &nbsp;Remark : {Datafamno[0][9].length <= 153 ? Datafamno[0][9] : `${Datafamno[0][9].substring(0, 153)}...`}
                                  </TableCell>
                                    </TableRow>
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                            </Table>
                            <Table aria-label="customized table" size="small">
                              <TableHead>
                                <TableRow className="HeaderThree">
                                  <TableCell className="HeaderThreeTablecell_1">
                                    &nbsp;3) Details
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                            </Table>
                            <Table style={{ height: "114mm" }}>
                              <Table aria-label="customized table" size="small">
                                <TableHead>
                                  <TableRow className="HeaderListTable">
                                    <TableCell className="HeaderListTableTablecell_1">
                                      Fixed Assets Number
                                    </TableCell>
                                    <TableCell className="HeaderListTableTablecell_2">
                                      Comp
                                    </TableCell>
                                    <TableCell className="HeaderListTableTablecell_3">
                                      CC.
                                    </TableCell>
                                    <TableCell className="HeaderListTableTablecell_4">
                                      Fixed Assets Name
                                    </TableCell>
                                    <TableCell className="HeaderListTableTablecell_5">
                                      BOI Project
                                    </TableCell>
                                    <TableCell className="HeaderListTableTablecell_6">
                                      Qty
                                    </TableCell>
                                    <TableCell className="HeaderListTableTablecell_7">
                                      Invoice No
                                    </TableCell>
                                    <TableCell className="HeaderListTableTablecell_8">
                                      Acquisition 
                                      <br/>Cost (Baht)
                                    </TableCell>
                                    <TableCell className="HeaderListTableTablecell_9">
                                      Book Value (Baht)
                                    </TableCell>
                                    <TableCell className="HeaderListTableTablecell_10">
                                      New 
                                      <br/>CC.
                                    </TableCell>
                                  </TableRow>
                                </TableHead>

                                <TableBody ref={tableBodyRef}>
                                  {DataLoopDetail.length > 0
                                    ? DataLoopDetail.map((item, index) => (
                                        <TableRow key={index}>
                                          <TableCell className="HeaderListTableDataTablecell_1">
                                            &nbsp;
                                            {index === 0 ||
                                            item[0] !==
                                              (index > 0
                                                ? DataLoopDetail[index - 1][0]
                                                : null)
                                              ? item[0]
                                              : ""}
                                          </TableCell>
                                          <TableCell className="HeaderListTableDataTablecell_2">
                                            {item[1]}&nbsp;
                                          </TableCell>
                                          <TableCell className="HeaderListTableDataTablecell_3">
                                            &nbsp;{item[2]}
                                          </TableCell>
                                          <TableCell className="HeaderListTableDataTablecell_4">
                                            &nbsp;{item[3]}
                                          </TableCell>
                                          <TableCell className="HeaderListTableDataTablecell_5">
                                            &nbsp;{item[4]}
                                          </TableCell>
                                          <TableCell className="HeaderListTableDataTablecell_6">
                                            {item[5]}&nbsp;
                                          </TableCell>
                                          <TableCell className="HeaderListTableDataTablecell_7">
                                            &nbsp;{item[6]}
                                          </TableCell>
                                          <TableCell className="HeaderListTableDataTablecell_9">
                                            {item[7] !== null
                                              ? new Intl.NumberFormat("en-US", {
                                                  minimumFractionDigits: 2,
                                                  maximumFractionDigits: 2,
                                                }).format(parseFloat(item[7]))
                                              : "0.00"}
                                            &nbsp;
                                          </TableCell>
                                          <TableCell className="HeaderListTableDataTablecell_9">
                                            {item[8] !== null
                                              ? parseFloat(item[8]).toFixed(2)
                                              : "0.00"}
                                            &nbsp;
                                          </TableCell>
                                          <TableCell className="HeaderListTableDataTablecell_10">
                                            &nbsp;{item[9]}
                                          </TableCell>
                                        </TableRow>
                                      ))
                                    : null}
                                  {/* Add additional empty rows if table height is less than 114mm */}
                                  {NewRow}
                                </TableBody>
                              </Table>
                            </Table>
                            <Table aria-label="customized table" size="small">
                              <TableHead>
                                <TableRow className="HeaderTotal">
                                  <TableCell className="HeaderTotal_1"></TableCell>
                                  <TableCell className="HeaderTotal_2">
                                    &nbsp;Total
                                  </TableCell>
                                  <TableCell className="HeaderTotal_3">
                                    {SumTotal &&
                                    SumTotal[0] &&
                                    SumTotal[0][0] !== null
                                      ? new Intl.NumberFormat("en-US", {
                                          minimumFractionDigits: 2,
                                          maximumFractionDigits: 2,
                                        }).format(parseFloat(SumTotal[0][0]))
                                      : "0.00"}
                                    &nbsp;
                                  </TableCell>
                                  <TableCell className="HeaderTotal_4">
                                    {SumTotal && SumTotal[0] && SumTotal[0][1]}
                                    &nbsp;
                                  </TableCell>
                                  <TableCell className="HeaderTotal_5"></TableCell>
                                </TableRow>
                              </TableHead>
                            </Table>
                            <Table aria-label="customized table" size="medium">
                              <TableHead>
                                <TableRow className="HeaderFour">
                                  <TableCell className="HeaderFourTablecell_1">
                                    &nbsp;4) Plan
                                  </TableCell>
                                  <TableCell className="HeaderFourTablecell_2">
                                    <TableRow>
                                      <TableCell className="HeaderFourTablecell_row ">
                                        &nbsp;Remove :
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderFourTablecell_row ">
                                        &nbsp;Date : {Datafamno[0][10]}
                                      </TableCell>
                                    </TableRow>
                                  </TableCell>
                                  <TableCell className="HeaderFourTablecell_3">
                                    <TableRow>
                                      <TableCell className="HeaderFourTablecell_row ">
                                        &nbsp;Set up / Scrap :
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderFourTablecell_row ">
                                        &nbsp;Date :
                                      </TableCell>
                                    </TableRow>
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                            </Table>
                            <Table aria-label="customized table" size="medium">
                              <TableHead>
                                <TableRow className="HeaderFive">
                                  <TableCell className="HeaderFiveTablecell_1">
                                    &nbsp;5) Service Dept.
                                  </TableCell>
                                  <TableCell className="HeaderFiveTablecell_2">
                                    &nbsp;Receipt by : {Datafamno[0][11]}
                                  </TableCell>
                                  <TableCell className="HeaderFiveTablecell_3">
                                    &nbsp;CC : {Datafamno[0][12]}
                                  </TableCell>
                                  <TableCell className="HeaderFiveTablecell_4"></TableCell>
                                  <TableCell className="HeaderFiveTablecell_5">
                                    &nbsp;Receipt date : {Datafamno[0][13]}
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                            </Table>
                            <Table aria-label="customized table" size="medium">
                              <TableHead>
                                <TableRow className="HeaderSix">
                                  <TableCell className="HeaderSixTablecell_1">
                                    &nbsp;6) Approval
                                  </TableCell>
                                  <TableCell className="HeaderSixTablecell_2">
                                    <TableRow>
                                      <TableCell className="HeaderSixTablecell_row ">
                                        &nbsp;Manager : {Datafamno[0][14]}
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSixTablecell_row ">
                                        &nbsp;Signature :
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSixTablecell_row ">
                                        &nbsp;Date :{" "}
                                        {formatDate(Datafamno[0][15])}
                                      </TableCell>
                                    </TableRow>
                                  </TableCell>
                                  <TableCell className="HeaderSixTablecell_3">
                                    <TableRow>
                                      <TableCell className="HeaderSixTablecell_row ">
                                        &nbsp;BOI : {Datafamno[0][16]}
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSixTablecell_row ">
                                        &nbsp;Signature :
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSixTablecell_row ">
                                        &nbsp;Date :{" "}
                                        {formatDate(Datafamno[0][17])}
                                      </TableCell>
                                    </TableRow>
                                  </TableCell>
                                  <TableCell className="HeaderSixTablecell_4">
                                    <TableRow>
                                      <TableCell className="HeaderSixTablecell_row ">
                                        &nbsp;FM up : {Datafamno[0][18]}
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSixTablecell_row ">
                                        &nbsp;Signature :
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSixTablecell_row ">
                                        &nbsp;Date : {Datafamno[0][19]}
                                      </TableCell>
                                    </TableRow>
                                  </TableCell>
                                  <TableCell className="HeaderSixTablecell_5">
                                    <TableRow>
                                      <TableCell className="HeaderSixTablecell_row ">
                                        &nbsp;ACC : {Datafamno[0][20]}
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSixTablecell_row ">
                                        &nbsp;Signature :
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSixTablecell_row ">
                                        &nbsp;Date : {Datafamno[0][21]}
                                      </TableCell>
                                    </TableRow>
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                            </Table>
                            <Table aria-label="customized table" size="medium">
                              <TableHead>
                                <TableRow className="HeaderSeven">
                                  <TableCell className="HeaderSevenTablecell_1">
                                    &nbsp;7) Action Status <br />{" "}
                                    &nbsp;(Completed Date)
                                  </TableCell>
                                  <TableCell className="HeaderSevenTablecell_2">
                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                        &nbsp;Old Owner
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                        &nbsp;{Datafamno[0][22]}
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                        &nbsp;{Datafamno[0][23]}
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                        &nbsp;Completed Date
                                      </TableCell>
                                    </TableRow>
                                  </TableCell>
                                  <TableCell className="HeaderSevenTablecell_3">
                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                        &nbsp;New Owner
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                        &nbsp;{Datafamno[0][24]}
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                        &nbsp;{Datafamno[0][25]}
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                        &nbsp;Completed Date
                                      </TableCell>
                                    </TableRow>
                                  </TableCell>
                                  <TableCell className="HeaderSevenTablecell_4">
                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                        &nbsp;Sales / Scrap
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                        &nbsp;
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                        &nbsp;
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                        &nbsp;Completed Date
                                      </TableCell>
                                    </TableRow>
                                  </TableCell>
                                  <TableCell className="HeaderSevenTablecell_5">
                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                        &nbsp;Service Dept
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                        &nbsp;{Datafamno[0][26]}
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                        &nbsp;{formatDate(Datafamno[0][27])}
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                        &nbsp;Completed Date
                                      </TableCell>
                                    </TableRow>
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                            </Table>
                          </TableContainer>
                        </CardContent>
                        <Table aria-label="customized table" size="small">
                          <TableRow>
                            <TableCell className="LowheaderL">
                              &nbsp;{DataNumberL[0]}
                            </TableCell>
                            <TableCell className="LowheaderC">
                              Page 1/1
                            </TableCell>
                            <TableCell className="LowheaderR">
                              {DataNumberR[0]}&nbsp;
                            </TableCell>
                          </TableRow>
                        </Table>
                      </Card>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          ))}
        </TableRow>
      </div>
    );
  }
  function Loop_Two() {
    return (
      <div>
        <PageLoadding
          isOpen={isPopupOpenLoadding}
          onClose={closePopupLoadding}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TableRow>
            {Datafamno.map((item, index) => (
              <div
                style={{
                  padding: "0px",
                }}
                key={item[0]}
                ref={(el) => (tableRefTwo.current[index] = el)}
              >
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Card variant="elevation" className="cardPDF">
                          <CardContent className="cardContainer">
                            <TableContainer>
                              <Table aria-label="customized table" size="small">
                                <TableHead>
                                  <TableRow className="Header">
                                    <TableCell className="HeaderTablecell_1">
                                      &nbsp;Fixed Assets Movement Slip Number
                                    </TableCell>
                                    <TableCell className="HeaderTablecell_2">
                                      FAM : {Datafamno[0][0]}
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                              </Table>
                              <Table
                                aria-label="customized table"
                                size="medium"
                              >
                                <TableHead>
                                  <TableRow className="HeaderOne">
                                    <TableCell className="HeaderOneTablecell_1">
                                      &nbsp;1) Requester
                                    </TableCell>
                                    <TableCell className="HeaderOneTablecell_2">
                                      <TableRow>
                                        <TableCell className="HeaderOneTablecell_row">
                                          &nbsp;Name : {Datafamno[0][1]} /
                                          {Datafamno[0][2]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderOneTablecell_row">
                                          &nbsp;Dept. : {Datafamno[0][3]}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderOneTablecell_3">
                                      <TableRow>
                                        <TableCell className="HeaderOneTablecell_row">
                                          &nbsp;Ext. : {Datafamno[0][4]}/{" "}
                                          {Datafamno[0][5]} &nbsp; Factory :
                                          {Datafamno[0][6]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderOneTablecell_row">
                                          &nbsp;Cost Center : {Datafamno[0][7]}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                              </Table>
                              <Table
                                aria-label="customized table"
                                size="medium"
                              >
                                <TableHead>
                                  <TableRow className="HeaderTwo">
                                    <TableCell className="HeaderTwoTablecell_1">
                                      &nbsp;2) Type
                                    </TableCell>
                                    <TableCell className="HeaderTwoTablecell_2">
                                      <TableRow>
                                        <TableCell className="HeaderTwoTablecell_3_checkbox">
                                          <FormControl>
                                            <FormGroup row>
                                              &nbsp;{" "}
                                              <FormControlLabel
                                                value="end"
                                                control={
                                                  <Checkbox
                                                    disabled
                                                    checked={
                                                      Datafamno[0][8] ===
                                                      "GP01001"
                                                    }
                                                    style={{
                                                      color: "#686D76",
                                                      transform: "scale(0.8)",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "small",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "1.2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                    }}
                                                  >
                                                    Transfer
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "1.2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                }}
                                              />
                                              <FormControlLabel
                                                value="end"
                                                control={
                                                  <Checkbox
                                                    disabled
                                                    checked={
                                                      Datafamno[0][8] ===
                                                      "GP01002"
                                                    }
                                                    style={{
                                                      color: "#686D76",
                                                      transform: "scale(0.8)",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "small",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "1.2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                    }}
                                                  >
                                                    Scrap
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "1.2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                }}
                                              />
                                              <FormControlLabel
                                                value="end"
                                                control={
                                                  <Checkbox
                                                    disabled
                                                    checked={
                                                      Datafamno[0][8] ===
                                                      "GP01003"
                                                    }
                                                    style={{
                                                      color: "#686D76",
                                                      transform: "scale(0.8)",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "small",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "1.2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                    }}
                                                  >
                                                    Sales
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "1.2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                }}
                                              />
                                              <FormControlLabel
                                                value="end"
                                                control={
                                                  <Checkbox
                                                    disabled
                                                    checked={
                                                      Datafamno[0][8] ===
                                                      "GP01004"
                                                    }
                                                    style={{
                                                      color: "#686D76",
                                                      transform: "scale(0.8)",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "small",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "1.2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                    }}
                                                  >
                                                    Loss
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "1.2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                }}
                                              />
                                              <FormControlLabel
                                                value="end"
                                                control={
                                                  <Checkbox
                                                    disabled
                                                    checked={
                                                      Datafamno[0][8] ===
                                                      "GP01005"
                                                    }
                                                    style={{
                                                      color: "#686D76",
                                                      transform: "scale(0.8)",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "small",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "1.2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                    }}
                                                  >
                                                    Write-off
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "1.2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                }}
                                              />
                                              <FormControlLabel
                                                value="end"
                                                control={
                                                  <Checkbox
                                                    disabled
                                                    checked={
                                                      Datafamno[0][8] ===
                                                      "GP01006"
                                                    }
                                                    style={{
                                                      color: "#686D76",
                                                      transform: "scale(0.8)",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "small",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "1.2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                    }}
                                                  >
                                                    Lending to Third-party
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "1.2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                }}
                                              />
                                              <FormControlLabel
                                                value="end"
                                                control={
                                                  <Checkbox
                                                    disabled
                                                    checked={
                                                      Datafamno[0][8] ===
                                                      "GP01007"
                                                    }
                                                    style={{
                                                      color: "#686D76",
                                                      transform: "scale(0.8)",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "small",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "1.2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                    }}
                                                  >
                                                    Donation
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "1.2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                }}
                                              />
                                            </FormGroup>
                                          </FormControl>
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        {" "}
                                        <TableCell className="HeaderTwoTablecell_3_remark">
                                          &nbsp;Remark : {Datafamno[0][9]}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                              </Table>
                              <Table aria-label="customized table" size="small">
                                <TableHead>
                                  <TableRow className="HeaderThree">
                                    <TableCell className="HeaderThreeTablecell_1">
                                      &nbsp;3) Details
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                              </Table>
                              {/* <Table style={{ height: "114mm" }}> */}
                              <Table>
                                <Table
                                  aria-label="customized table"
                                  size="small"
                                >
                                  <TableHead>
                                    <TableRow className="HeaderListTable">
                                      <TableCell className="HeaderListTableTablecell_1">
                                        Fixed Assets Number
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_2">
                                        Comp
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_3">
                                        CC.
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_4">
                                        Fixed Assets Name
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_5">
                                        BOI Project
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_6">
                                        Qty
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_7">
                                        Invoice No
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_8">
                                        Acquisition 
                                        <br/>Cost (Baht)
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_9">
                                        Book Value (Baht)
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_10">
                                        New CC.
                                      </TableCell>
                                    </TableRow>
                                  </TableHead>

                                  <TableBody ref={tableBodyRef2_1}>
                                    {DataLoopDetail.length > 0
                                      ? DataLoopDetail.slice(0, 36).map(
                                          (item, index) => (
                                            <TableRow key={index}>
                                              <TableCell className="HeaderListTableDataTablecell_1">
                                                &nbsp;
                                                {index === 0 ||
                                                item[0] !==
                                                  (index > 0
                                                    ? DataLoopDetail[
                                                        index - 1
                                                      ][0]
                                                    : null)
                                                  ? item[0]
                                                  : ""}
                                              </TableCell>
                                              <TableCell className="HeaderListTableDataTablecell_2">
                                                {item[1]}&nbsp;
                                              </TableCell>
                                              <TableCell className="HeaderListTableDataTablecell_3">
                                                &nbsp;{item[2]}
                                              </TableCell>
                                              <TableCell className="HeaderListTableDataTablecell_4">
                                                &nbsp;{item[3]}
                                              </TableCell>
                                              <TableCell className="HeaderListTableDataTablecell_5">
                                                &nbsp;{item[4]}
                                              </TableCell>
                                              <TableCell className="HeaderListTableDataTablecell_6">
                                                {item[5]}&nbsp;
                                              </TableCell>
                                              <TableCell className="HeaderListTableDataTablecell_7">
                                                &nbsp;{item[6]}
                                              </TableCell>
                                              <TableCell className="HeaderListTableDataTablecell_9">
                                                {item[7] !== null
                                                  ? new Intl.NumberFormat(
                                                      "en-US",
                                                      {
                                                        minimumFractionDigits: 2,
                                                        maximumFractionDigits: 2,
                                                      }
                                                    ).format(
                                                      parseFloat(item[7])
                                                    )
                                                  : "0.00"}
                                                &nbsp;
                                              </TableCell>
                                              <TableCell className="HeaderListTableDataTablecell_9">
                                                {item[8] !== null
                                                  ? parseFloat(item[8]).toFixed(
                                                      2
                                                    )
                                                  : "0.00"}
                                                &nbsp;
                                              </TableCell>
                                              <TableCell className="HeaderListTableDataTablecell_10">
                                                &nbsp;{item[9]}
                                              </TableCell>
                                            </TableRow>
                                          )
                                        )
                                      : null}
                                    {NewRow}
                                  </TableBody>
                                </Table>
                              </Table>
                            </TableContainer>
                          </CardContent>
                          <Table aria-label="customized table" size="small">
                            <TableRow>
                              <TableCell className="LowheaderL">
                                &nbsp;{DataNumberL[0]}
                              </TableCell>
                              <TableCell className="LowheaderC">
                                Page 1/2
                              </TableCell>
                              <TableCell className="LowheaderR">
                                {DataNumberR[0]}&nbsp;
                              </TableCell>
                            </TableRow>
                          </Table>
                        </Card>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            ))}
          </TableRow>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          <TableRow>
            {Datafamno.map((item, index) => (
              <div
                style={{
                  padding: "0px",
                }}
                key={item[0]}
                ref={(el) => (tableRefTwo.current[index] = el)}
              >
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Card variant="elevation" className="cardPDF">
                          <CardContent className="cardContainer">
                            <TableContainer>
                              <Table style={{ height: "150mm" }}>
                                <Table
                                  aria-label="customized table"
                                  size="small"
                                >
                                  <TableHead>
                                    <TableRow className="HeaderListTable">
                                      <TableCell className="HeaderListTableTablecell_1">
                                        Fixed Assets Number
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_2">
                                        Comp
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_3">
                                        CC.
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_4">
                                        Fixed Assets Name
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_5">
                                        BOI Project
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_6">
                                        Qty
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_7">
                                        Invoice No
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_8">
                                        Acquisition 
                                        <br/>Cost (Baht)
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_9">
                                        Book Value (Baht)
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_10">
                                        New CC.
                                      </TableCell>
                                    </TableRow>
                                  </TableHead>

                                  <TableBody ref={tableBodyRef2_2}>
                                    {DataLoopDetail.length > 0
                                      ? DataLoopDetail.map(
                                          (item, index) =>
                                            index >= 36 && (
                                              <TableRow key={index}>
                                                <TableCell className="HeaderListTableDataTablecell_1">
                                                  &nbsp;
                                                  {index === 0 ||
                                                  item[0] !==
                                                    DataLoopDetail[index - 1][0]
                                                    ? item[0]
                                                    : ""}
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_2">
                                                  {item[1]}&nbsp;
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_3">
                                                  &nbsp;{item[2]}
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_4">
                                                  &nbsp;{item[3]}
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_5">
                                                  &nbsp;{item[4]}
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_6">
                                                  {item[5]}&nbsp;
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_7">
                                                  &nbsp;{item[6]}
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_9">
                                                  {item[7] !== null
                                                    ? new Intl.NumberFormat(
                                                        "en-US",
                                                        {
                                                          minimumFractionDigits: 2,
                                                          maximumFractionDigits: 2,
                                                        }
                                                      ).format(
                                                        parseFloat(item[7])
                                                      )
                                                    : "0.00"}
                                                  &nbsp;
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_9">
                                                  {item[8] !== null
                                                    ? parseFloat(
                                                        item[8]
                                                      ).toFixed(2)
                                                    : "0.00"}
                                                  &nbsp;
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_10">
                                                  &nbsp;{item[9]}
                                                </TableCell>
                                              </TableRow>
                                            )
                                        )
                                      : null}

                                    {/* Add additional empty rows if table height is less than 114mm */}
                                 {NewRowTwo}
                                  </TableBody>
                                </Table>
                              </Table>
                              <Table aria-label="customized table" size="small">
                              <TableHead>
                                <TableRow className="HeaderTotal">
                                  <TableCell className="HeaderTotal_1"></TableCell>
                                  <TableCell className="HeaderTotal_2">
                                    &nbsp;Total
                                  </TableCell>
                                  <TableCell className="HeaderTotal_3">
                                    {SumTotal &&
                                    SumTotal[0] &&
                                    SumTotal[0][0] !== null
                                      ? new Intl.NumberFormat("en-US", {
                                          minimumFractionDigits: 2,
                                          maximumFractionDigits: 2,
                                        }).format(parseFloat(SumTotal[0][0]))
                                      : "0.00"}
                                    &nbsp;
                                  </TableCell>
                                  <TableCell className="HeaderTotal_4">
                                    {SumTotal && SumTotal[0] && SumTotal[0][1]}
                                    &nbsp;
                                  </TableCell>
                                  <TableCell className="HeaderTotal_5"></TableCell>
                                </TableRow>
                              </TableHead>
                            </Table>
                              <Table
                                aria-label="customized table"
                                size="medium"
                              >
                                <TableHead>
                                  <TableRow className="HeaderFour">
                                    <TableCell className="HeaderFourTablecell_1">
                                      &nbsp;4) Plan
                                    </TableCell>
                                    <TableCell className="HeaderFourTablecell_2">
                                      <TableRow>
                                        <TableCell className="HeaderFourTablecell_row ">
                                          &nbsp;Remove :
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderFourTablecell_row ">
                                          &nbsp;Date : {Datafamno[0][10]}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderFourTablecell_3">
                                      <TableRow>
                                        <TableCell className="HeaderFourTablecell_row ">
                                          &nbsp;Set up / Scrap :
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderFourTablecell_row ">
                                          &nbsp;Date :
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                              </Table>
                              <Table
                                aria-label="customized table"
                                size="medium"
                              >
                                <TableHead>
                                  <TableRow className="HeaderFive">
                                    <TableCell className="HeaderFiveTablecell_1">
                                      &nbsp;5) Service Dept.
                                    </TableCell>
                                    <TableCell className="HeaderFiveTablecell_2">
                                      &nbsp;Receipt by : {Datafamno[0][11]}
                                    </TableCell>
                                    <TableCell className="HeaderFiveTablecell_3">
                                      &nbsp;CC : {Datafamno[0][12]}
                                    </TableCell>
                                    <TableCell className="HeaderFiveTablecell_4"></TableCell>
                                    <TableCell className="HeaderFiveTablecell_5">
                                      &nbsp;Receipt date : {Datafamno[0][13]}
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                              </Table>
                              <Table
                                aria-label="customized table"
                                size="medium"
                              >
                                <TableHead>
                                  <TableRow className="HeaderSix">
                                    <TableCell className="HeaderSixTablecell_1">
                                      &nbsp;6) Approval
                                    </TableCell>
                                    <TableCell className="HeaderSixTablecell_2">
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;Manager : {Datafamno[0][14]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;Signature :
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;Date :{" "}
                                          {formatDate(Datafamno[0][15])}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderSixTablecell_3">
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;BOI : {Datafamno[0][16]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;Signature :
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;Date :{" "}
                                          {formatDate(Datafamno[0][17])}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderSixTablecell_4">
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;FM up : {Datafamno[0][18]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;Signature :
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;Date : {Datafamno[0][19]}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderSixTablecell_5">
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;ACC : {Datafamno[0][20]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;Signature :
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;Date : {Datafamno[0][21]}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                              </Table>
                              <Table
                                aria-label="customized table"
                                size="medium"
                              >
                                <TableHead>
                                  <TableRow className="HeaderSeven">
                                    <TableCell className="HeaderSevenTablecell_1">
                                      &nbsp;7) Action Status <br />{" "}
                                      &nbsp;(Completed Date)
                                    </TableCell>
                                    <TableCell className="HeaderSevenTablecell_2">
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Old Owner
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;{Datafamno[0][22]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;{Datafamno[0][23]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Completed Date
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderSevenTablecell_3">
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;New Owner
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;{Datafamno[0][24]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;{Datafamno[0][25]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Completed Date
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderSevenTablecell_4">
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Sales / Scrap
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Completed Date
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderSevenTablecell_5">
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Service Dept
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;{Datafamno[0][26]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;{formatDate(Datafamno[0][27])}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Completed Date
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                              </Table>
                            </TableContainer>
                          </CardContent>
                          <Table aria-label="customized table" size="small">
                            <TableRow>
                              <TableCell className="LowheaderL">
                                &nbsp;{DataNumberL[0]}
                              </TableCell>
                              <TableCell className="LowheaderC">
                                Page 2/2
                              </TableCell>
                              <TableCell className="LowheaderR">
                                {DataNumberR[0]}&nbsp;
                              </TableCell>
                            </TableRow>
                          </Table>
                        </Card>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            ))}
          </TableRow>
        </div>
      </div>
    );
  }
  function Loop_Three() {
    return (
      <div>
        <PageLoadding
          isOpen={isPopupOpenLoadding}
          onClose={closePopupLoadding}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TableRow>
            {Datafamno.map((item, index) => (
              <div
                style={{
                  padding: "0px",
                }}
                key={item[0]}
                ref={(el) => (tableRefThree.current[index] = el)}
              >
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Card variant="elevation" className="cardPDF">
                          <CardContent className="cardContainer">
                            <TableContainer>
                              <Table aria-label="customized table" size="small">
                                <TableHead>
                                  <TableRow className="Header">
                                    <TableCell className="HeaderTablecell_1">
                                      &nbsp;Fixed Assets Movement Slip Number
                                    </TableCell>
                                    <TableCell className="HeaderTablecell_2">
                                      FAM : {Datafamno[0][0]}
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                              </Table>
                              <Table
                                aria-label="customized table"
                                size="medium"
                              >
                                <TableHead>
                                  <TableRow className="HeaderOne">
                                    <TableCell className="HeaderOneTablecell_1">
                                      &nbsp;1) Requester
                                    </TableCell>
                                    <TableCell className="HeaderOneTablecell_2">
                                      <TableRow>
                                        <TableCell className="HeaderOneTablecell_row">
                                          &nbsp;Name : {Datafamno[0][1]} /
                                          {Datafamno[0][2]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderOneTablecell_row">
                                          &nbsp;Dept. : {Datafamno[0][3]}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderOneTablecell_3">
                                      <TableRow>
                                        <TableCell className="HeaderOneTablecell_row">
                                          &nbsp;Ext. : {Datafamno[0][4]}/{" "}
                                          {Datafamno[0][5]} &nbsp; Factory :
                                          {Datafamno[0][6]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderOneTablecell_row">
                                          &nbsp;Cost Center : {Datafamno[0][7]}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                              </Table>
                              <Table
                                aria-label="customized table"
                                size="medium"
                              >
                                <TableHead>
                                  <TableRow className="HeaderTwo">
                                    <TableCell className="HeaderTwoTablecell_1">
                                      &nbsp;2) Type
                                    </TableCell>
                                    <TableCell className="HeaderTwoTablecell_2">
                                      <TableRow>
                                        <TableCell className="HeaderTwoTablecell_3_checkbox">
                                          <FormControl>
                                            <FormGroup row>
                                              &nbsp;{" "}
                                              <FormControlLabel
                                                value="end"
                                                control={
                                                  <Checkbox
                                                    disabled
                                                    checked={
                                                      Datafamno[0][8] ===
                                                      "GP01001"
                                                    }
                                                    style={{
                                                      color: "#686D76",
                                                      transform: "scale(0.8)",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "small",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "1.2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                    }}
                                                  >
                                                    Transfer
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "1.2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                }}
                                              />
                                              <FormControlLabel
                                                value="end"
                                                control={
                                                  <Checkbox
                                                    disabled
                                                    checked={
                                                      Datafamno[0][8] ===
                                                      "GP01002"
                                                    }
                                                    style={{
                                                      color: "#686D76",
                                                      transform: "scale(0.8)",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "small",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "1.2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                    }}
                                                  >
                                                    Scrap
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "1.2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                }}
                                              />
                                              <FormControlLabel
                                                value="end"
                                                control={
                                                  <Checkbox
                                                    disabled
                                                    checked={
                                                      Datafamno[0][8] ===
                                                      "GP01003"
                                                    }
                                                    style={{
                                                      color: "#686D76",
                                                      transform: "scale(0.8)",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "small",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "1.2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                    }}
                                                  >
                                                    Sales
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "1.2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                }}
                                              />
                                              <FormControlLabel
                                                value="end"
                                                control={
                                                  <Checkbox
                                                    disabled
                                                    checked={
                                                      Datafamno[0][8] ===
                                                      "GP01004"
                                                    }
                                                    style={{
                                                      color: "#686D76",
                                                      transform: "scale(0.8)",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "small",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "1.2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                    }}
                                                  >
                                                    Loss
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "1.2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                }}
                                              />
                                              <FormControlLabel
                                                value="end"
                                                control={
                                                  <Checkbox
                                                    disabled
                                                    checked={
                                                      Datafamno[0][8] ===
                                                      "GP01005"
                                                    }
                                                    style={{
                                                      color: "#686D76",
                                                      transform: "scale(0.8)",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "small",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "1.2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                    }}
                                                  >
                                                    Write-off
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "1.2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                }}
                                              />
                                              <FormControlLabel
                                                value="end"
                                                control={
                                                  <Checkbox
                                                    disabled
                                                    checked={
                                                      Datafamno[0][8] ===
                                                      "GP01006"
                                                    }
                                                    style={{
                                                      color: "#686D76",
                                                      transform: "scale(0.8)",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "small",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "1.2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                    }}
                                                  >
                                                    Lending to Third-party
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "1.2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                }}
                                              />
                                              <FormControlLabel
                                                value="end"
                                                control={
                                                  <Checkbox
                                                    disabled
                                                    checked={
                                                      Datafamno[0][8] ===
                                                      "GP01007"
                                                    }
                                                    style={{
                                                      color: "#686D76",
                                                      transform: "scale(0.8)",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "small",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "1.2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                    }}
                                                  >
                                                    Donation
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "1.2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                }}
                                              />
                                            </FormGroup>
                                          </FormControl>
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        {" "}
                                        <TableCell className="HeaderTwoTablecell_3_remark">
                                          &nbsp;Remark : {Datafamno[0][9]}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                              </Table>
                              <Table aria-label="customized table" size="small">
                                <TableHead>
                                  <TableRow className="HeaderThree">
                                    <TableCell className="HeaderThreeTablecell_1">
                                      &nbsp;3) Details
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                              </Table>
                              {/* <Table style={{ height: "114mm" }}> */}
                              <Table>
                                <Table
                                  aria-label="customized table"
                                  size="small"
                                >
                                  <TableHead>
                                    <TableRow className="HeaderListTable">
                                      <TableCell className="HeaderListTableTablecell_1">
                                        Fixed Assets Number
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_2">
                                        Comp
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_3">
                                        CC.
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_4">
                                        Fixed Assets Name
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_5">
                                        BOI Project
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_6">
                                        Qty
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_7">
                                        Invoice No
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_8">
                                        Acquisition <br/>Cost (Baht)
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_9">
                                        Book Value (Baht)
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_10">
                                        New CC.
                                      </TableCell>
                                    </TableRow>
                                  </TableHead>
                                  {/* data loop table 3 top */}
                                  <TableBody ref={tableBodyRef3_1}>
                                    {DataLoopDetail.length > 0
                                      ? DataLoopDetail.slice(0, 36).map(
                                          (item, index) => (
                                            <TableRow key={index}>
                                              <TableCell className="HeaderListTableDataTablecell_1">
                                                &nbsp;
                                                {index === 0 ||
                                                item[0] !==
                                                  (index > 0
                                                    ? DataLoopDetail[
                                                        index - 1
                                                      ][0]
                                                    : null)
                                                  ? item[0]
                                                  : ""}
                                              </TableCell>
                                              <TableCell className="HeaderListTableDataTablecell_2">
                                                {item[1]}&nbsp;
                                              </TableCell>
                                              <TableCell className="HeaderListTableDataTablecell_3">
                                                &nbsp;{item[2]}
                                              </TableCell>
                                              <TableCell className="HeaderListTableDataTablecell_4">
                                                &nbsp;{item[3]}
                                              </TableCell>
                                              <TableCell className="HeaderListTableDataTablecell_5">
                                                &nbsp;{item[4]}
                                              </TableCell>
                                              <TableCell className="HeaderListTableDataTablecell_6">
                                                {item[5]}&nbsp;
                                              </TableCell>
                                              <TableCell className="HeaderListTableDataTablecell_7">
                                                &nbsp;{item[6]}
                                              </TableCell>
                                              <TableCell className="HeaderListTableDataTablecell_9">
                                                {item[7] !== null
                                                  ? new Intl.NumberFormat(
                                                      "en-US",
                                                      {
                                                        minimumFractionDigits: 2,
                                                        maximumFractionDigits: 2,
                                                      }
                                                    ).format(
                                                      parseFloat(item[7])
                                                    )
                                                  : "0.00"}
                                                &nbsp;
                                              </TableCell>
                                              <TableCell className="HeaderListTableDataTablecell_9">
                                                {item[8] !== null
                                                  ? parseFloat(item[8]).toFixed(
                                                      2
                                                    )
                                                  : "0.00"}
                                                &nbsp;
                                              </TableCell>
                                              <TableCell className="HeaderListTableDataTablecell_10">
                                                &nbsp;{item[9]}
                                              </TableCell>
                                            </TableRow>
                                          )
                                        )
                                      : null}
                                  </TableBody>
                                </Table>
                              </Table>
                            </TableContainer>
                          </CardContent>
                          <Table aria-label="customized table" size="small">
                            <TableRow>
                              <TableCell className="LowheaderL">
                                &nbsp;{DataNumberL[0]}
                              </TableCell>
                              <TableCell className="LowheaderC">
                                Page 1/{DataPageA}
                              </TableCell>
                              <TableCell className="LowheaderR">
                                {DataNumberR[0]}&nbsp;
                              </TableCell>
                            </TableRow>
                          </Table>
                        </Card>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            ))}
          </TableRow>
        </div>
        {DataTest.map((arrayItem, arrayIndex) => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "5px",
            }}
          >
            <TableRow>
              {/* {Datafamno.map((item, index) => ( */}
              <div
                style={{
                  padding: "0px",
                }}
                key={arrayItem}
                ref={(el) => (tableRefThree.current[arrayIndex] = el)}
              >
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Card variant="elevation" className="cardPDF">
                          <CardContent className="cardContainer">
                            <TableContainer>
                              <Table style={{ height: "150mm" }}>
                                <Table
                                  aria-label="customized table"
                                  size="small"
                                >
                                  <TableHead>
                                    <TableRow className="HeaderListTable">
                                      <TableCell className="HeaderListTableTablecell_1">
                                        Fixed Assets Number
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_2">
                                        Comp
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_3">
                                        CC.
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_4">
                                        Fixed Assets Name
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_5">
                                        BOI Project
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_6">
                                        Qty
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_7">
                                        Invoice No
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_8">
                                        Acquisition <br/>Cost (Baht)
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_9">
                                        Book Value (Baht)
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_10">
                                        New CC.
                                      </TableCell>
                                    </TableRow>
                                  </TableHead>

                                  <TableBody ref={tableBodyRef3_2}>
                                    {arrayItem.length > 0
                                      ? arrayItem.map(
                                          (item, index) =>
                                            index >= 0 &&
                                            index <= 43 && (
                                              <TableRow key={index}>
                                                <TableCell className="HeaderListTableDataTablecell_1">
                                                  &nbsp;
                                                  {index === 0 ||
                                                  item[0] !==
                                                    arrayItem[index - 1][0]
                                                    ? item[0]
                                                    : ""}
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_2">
                                                  {item[1]}&nbsp;
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_3">
                                                  &nbsp;{item[2]}
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_4">
                                                  &nbsp;{item[3]}
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_5">
                                                  &nbsp;{item[4]}
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_6">
                                                  {item[5]}&nbsp;
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_7">
                                                  &nbsp;{item[6]}
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_9">
                                                  {item[7] !== null
                                                    ? new Intl.NumberFormat(
                                                        "en-US",
                                                        {
                                                          minimumFractionDigits: 2,
                                                          maximumFractionDigits: 2,
                                                        }
                                                      ).format(
                                                        parseFloat(item[7])
                                                      )
                                                    : "0.00"}
                                                  &nbsp;
                                                </TableCell>

                                                <TableCell className="HeaderListTableDataTablecell_9">
                                                  {item[8] !== null
                                                    ? parseFloat(
                                                        item[8]
                                                      ).toFixed(2)
                                                    : "0.00"}
                                                  &nbsp;
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_10">
                                                  &nbsp;{item[9]}
                                                </TableCell>
                                              </TableRow>
                                            )
                                        )
                                        
                                      : null}                   
                                  {tableBodyRef3_2.current && arrayItem.length <= 43 ? NewRowThree_2 : null}


                                    {/* {NewRowThree_2}  */}
                                    {/* {tableBodyRef3_2.current && tableBodyRef3_2.current.children.length <= 43 && console.log("T3-2 : ", tableBodyRef3_2.current.children.length)} */}
                                  </TableBody>
                                </Table>
                              </Table>
                            </TableContainer>
                          </CardContent>
                          <Table aria-label="customized table" size="small">
                            <TableRow>
                              <TableCell className="LowheaderL">
                                &nbsp;{DataNumberL[0]}
                              </TableCell>
                              <TableCell className="LowheaderC">
                                Page {arrayIndex + 2}/{DataPageA}
                              </TableCell>
                              <TableCell className="LowheaderR">
                                {DataNumberR[0]}&nbsp;
                              </TableCell>
                            </TableRow>
                          </Table>
                        </Card>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              {/* ))} */}
            </TableRow>
          </div>
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          <TableRow>
            {Datafamno.map((item, index) => (
              <div
                style={{
                  padding: "0px",
                }}
                key={item[0]}
                ref={(el) => (tableRefThree.current[index] = el)}
              >
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Card variant="elevation" className="cardPDF">
                          <CardContent className="cardContainer">
                            <TableContainer>
                              <Table style={{ height: "150mm" }}>
                                <Table
                                  aria-label="customized table"
                                  size="small"
                                >
                                  <TableHead>
                                    <TableRow className="HeaderListTable">
                                      <TableCell className="HeaderListTableTablecell_1">
                                        Fixed Assets Number
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_2">
                                        Comp
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_3">
                                        CC.
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_4">
                                        Fixed Assets Name
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_5">
                                        BOI Project
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_6">
                                        Qty
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_7">
                                        Invoice No
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_8">
                                        Acquisition <br/>Cost (Baht)
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_9">
                                        Book Value (Baht)
                                      </TableCell>
                                      <TableCell className="HeaderListTableTablecell_10">
                                        New CC.
                                      </TableCell>
                                    </TableRow>
                                  </TableHead>

                                  <TableBody ref={tableBodyRef3_3}>
                                    {DataTest2[0]
                                      ? DataTest2[0].map(
                                          (item, index) =>
                                            index >= 0 && (
                                              <TableRow key={index}>
                                                <TableCell className="HeaderListTableDataTablecell_1">
                                                  &nbsp;
                                                  {index === 0 ||
                                                  item[0] !==
                                                    DataTest2[0][index - 1][0]
                                                    ? item[0]
                                                    : ""}
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_2">
                                                  {item[1]}&nbsp;
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_3">
                                                  &nbsp;{item[2]}
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_4">
                                                  &nbsp;{item[3]}
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_5">
                                                  &nbsp;{item[4]}
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_6">
                                                  {item[5]}&nbsp;
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_7">
                                                  &nbsp;{item[6]}
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_9">
                                                  {item[7] !== null
                                                    ? new Intl.NumberFormat(
                                                        "en-US",
                                                        {
                                                          minimumFractionDigits: 2,
                                                          maximumFractionDigits: 2,
                                                        }
                                                      ).format(
                                                        parseFloat(item[7])
                                                      )
                                                    : "0.00"}
                                                  &nbsp;
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_9">
                                                  {item[8] !== null
                                                    ? parseFloat(
                                                        item[8]
                                                      ).toFixed(2)
                                                    : "0.00"}
                                                  &nbsp;
                                                </TableCell>
                                                <TableCell className="HeaderListTableDataTablecell_10">
                                                  &nbsp;{item[9]}
                                                </TableCell>
                                              </TableRow>
                                            )
                                        )
                                      : null}

                                    {/* data loop table 3 buttom */}
                                    {/* {tableBodyRef4.current &&
                                      tableBodyRef4.current.children.length !==
                                        29 &&
                                      Array.from(
                                        {
                                          length: Math.max(
                                            29 -
                                              tableBodyRef4.current.children
                                                .length,
                                            0
                                          ),
                                        },
                                        (_, index) => (
                                          <TableRow key={index}>
                                            {[...Array(10)].map(
                                              (_, columnIndex) => (
                                                <TableCell
                                                  key={columnIndex}
                                                  className={`HeaderListTableDataTablecell_${
                                                    columnIndex + 1
                                                  }`}
                                                >
                                                  &nbsp;
                                                </TableCell>
                                              )
                                            )}
                                          </TableRow>
                                        )
                                      )} */}
                                      {NewRowThree_3}
                                  </TableBody>
                                </Table>
                              </Table>
                              <Table aria-label="customized table" size="small">
                                <TableHead>
                                  <TableRow className="HeaderTotal">
                                    <TableCell className="HeaderTotal_1"></TableCell>
                                    <TableCell className="HeaderTotal_2">
                                      &nbsp;Total
                                    </TableCell>
                                    <TableCell className="HeaderTotal_3">
                                      {SumTotal &&
                                      SumTotal[0] &&
                                      SumTotal[0][0] !== null
                                        ? new Intl.NumberFormat("en-US", {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                          }).format(parseFloat(SumTotal[0][0]))
                                        : "0.00"}
                                      &nbsp;
                                    </TableCell>
                                    <TableCell className="HeaderTotal_4">
                                      {SumTotal &&
                                        SumTotal[0] &&
                                        SumTotal[0][1]}
                                      &nbsp;
                                    </TableCell>
                                    <TableCell className="HeaderTotal_5"></TableCell>
                                  </TableRow>
                                </TableHead>
                              </Table>
                              <Table
                                aria-label="customized table"
                                size="medium"
                              >
                                <TableHead>
                                  <TableRow className="HeaderFour">
                                    <TableCell className="HeaderFourTablecell_1">
                                      &nbsp;4) Plan
                                    </TableCell>
                                    <TableCell className="HeaderFourTablecell_2">
                                      <TableRow>
                                        <TableCell className="HeaderFourTablecell_row ">
                                          &nbsp;Remove :
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderFourTablecell_row ">
                                          &nbsp;Date : {Datafamno[0][10]}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderFourTablecell_3">
                                      <TableRow>
                                        <TableCell className="HeaderFourTablecell_row ">
                                          &nbsp;Set up / Scrap :
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderFourTablecell_row ">
                                          &nbsp;Date :
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                              </Table>
                              <Table
                                aria-label="customized table"
                                size="medium"
                              >
                                <TableHead>
                                  <TableRow className="HeaderFive">
                                    <TableCell className="HeaderFiveTablecell_1">
                                      &nbsp;5) Service Dept.
                                    </TableCell>
                                    <TableCell className="HeaderFiveTablecell_2">
                                      &nbsp;Receipt by : {Datafamno[0][11]}
                                    </TableCell>
                                    <TableCell className="HeaderFiveTablecell_3">
                                      &nbsp;CC : {Datafamno[0][12]}
                                    </TableCell>
                                    <TableCell className="HeaderFiveTablecell_4"></TableCell>
                                    <TableCell className="HeaderFiveTablecell_5">
                                      &nbsp;Receipt date : {Datafamno[0][13]}
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                              </Table>
                              <Table
                                aria-label="customized table"
                                size="medium"
                              >
                                <TableHead>
                                  <TableRow className="HeaderSix">
                                    <TableCell className="HeaderSixTablecell_1">
                                      &nbsp;6) Approval
                                    </TableCell>
                                    <TableCell className="HeaderSixTablecell_2">
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;Manager : {Datafamno[0][14]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;Signature :
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;Date :{" "}
                                          {formatDate(Datafamno[0][15])}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderSixTablecell_3">
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;BOI : {Datafamno[0][16]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;Signature :
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;Date :{" "}
                                          {formatDate(Datafamno[0][17])}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderSixTablecell_4">
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;FM up : {Datafamno[0][18]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;Signature :
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;Date : {Datafamno[0][19]}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderSixTablecell_5">
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;ACC : {Datafamno[0][20]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;Signature :
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSixTablecell_row ">
                                          &nbsp;Date : {Datafamno[0][21]}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                              </Table>
                              <Table
                                aria-label="customized table"
                                size="medium"
                              >
                                <TableHead>
                                  <TableRow className="HeaderSeven">
                                    <TableCell className="HeaderSevenTablecell_1">
                                      &nbsp;7) Action Status <br />{" "}
                                      &nbsp;(Completed Date)
                                    </TableCell>
                                    <TableCell className="HeaderSevenTablecell_2">
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Old Owner
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;{Datafamno[0][22]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;{Datafamno[0][23]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Completed Date
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderSevenTablecell_3">
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;New Owner
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;{Datafamno[0][24]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;{Datafamno[0][25]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Completed Date
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderSevenTablecell_4">
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Sales / Scrap
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Completed Date
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderSevenTablecell_5">
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Service Dept
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;{Datafamno[0][26]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;{formatDate(Datafamno[0][27])}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Completed Date
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                              </Table>
                            </TableContainer>
                          </CardContent>
                          <Table aria-label="customized table" size="small">
                            <TableRow>
                              <TableCell className="LowheaderL">
                                &nbsp;{DataNumberL[0]}
                              </TableCell>
                              <TableCell className="LowheaderC">
                                Page {DataPageE}/{DataPageA}
                              </TableCell>
                              <TableCell className="LowheaderR">
                                {DataNumberR[0]}&nbsp;
                              </TableCell>
                            </TableRow>
                          </Table>
                        </Card>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            ))}
          </TableRow>
        </div>
      </div>
    );
  }

  return (
    <>
      {" "}
      <Table>
        <TableBody>
          <TableRow styles={{ border: "0px" }}>
            <TableCell style={{ textAlign: "left" }}>
              <Button
                style={{ borderRadius: "30px" }}
                component="label"
                variant="contained"
                startIcon={<ChevronLeftIcon />}
              
                onClick={BackPage}
              >
                Backk
              </Button>
            </TableCell>
            <TableCell style={{ textAlign: "right" }}>
              <Button
                style={{ borderRadius: "30px" }}
                component="label"
                color="error"
                variant="contained"
                startIcon={<FileDownloadIcon />}
                
                onClick={downloadAsPDF}
              >
                Download as PDF
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>{" "}
      {CheckRow <= 24 ? (
        <Loop_One />
      ) : CheckRow > 24 && CheckRow <= 68 ? (
        <Loop_Two />
      ) : (
        <Loop_Three />
      )}
    </>
  );
}

export default PDF_design;