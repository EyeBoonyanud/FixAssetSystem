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
import "./PDF_designCSS.css";
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
  const [Datafamno, setDatafamno] = useState([]);
  const [DataLoopDetail, setDataLoopDetail] = useState([]);
  const [DataLoopDetail_Loop2_One, setDataLoopDetail_Loop2_One] = useState([]);
  const [DataLoopDetail_Loop2_Two, setDataLoopDetail_Loop2_Two] = useState([]);
  const [MAXNUMCOUNT_Loop2_0ne, setMAXNUMCOUNT_Loop2_One] = useState(0);
  const [MAXNUMCOUNT_Loop2_Two, setMAXNUMCOUNT_Loop2_Two] = useState(0);
  const [DataLoopDetail_Loop3_One, setDataLoopDetail_Loop3_One] = useState([]);
  const [DataLoopDetail_Loop3_Two, setDataLoopDetail_Loop3_Two] = useState([]);
  const [DataLoopDetail_CountLoop3_Two, setDataLoopDetail_CountLoop3_Two] =
    useState([]);
  const [DataLoopDetail_Loop3_Three, setDataLoopDetail_Loop3_Three] = useState(
    []
  );
  const [MAXNUMCOUNT_Loop3_One, setMAXNUMCOUNT_Loop3_One] = useState(0);
  const [MAXNUMCOUNT_Loop3_Two, setMAXNUMCOUNT_Loop3_Two] = useState(0);
  const [MAXNUMCOUNT_Loop3_Three, setMAXNUMCOUNT_Loop3_Three] = useState(0);
  const [SumTotal, setSumTotal] = useState([]);
  const [DataNumberL, setDataNumberL] = useState([]);
  const [DataNumberR, setDataNumberR] = useState([]);
  const [CheckRow, setCheckRow] = useState(0);
  const PDF_FAM = localStorage.getItem("PDF_FAM_DATA");
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
        try {
          const response = await axios.post(
            "/getData_Hearder_show_PDF",
            { FamNo: PDF_FAM }
          );
          const data = await response.data;
          console.log("DATA PDF ",data)
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
          // ------------- ทั้งหมด -------------
          let DATA_ALL_LOOP = [];
          let indexxx = 0;
          const datanewloopdetail_fix_all = [];
          const datanewloopdetail_fix_all_two = [];
          let maxItem10 = 0;

          data.map((item) => {
            if (!datanewloopdetail_fix_all.includes(item)) {
              datanewloopdetail_fix_all.push(item);
              let newIndex;
              if (
                item[0].length > 17 ||
                item[3].length > 48 ||
                item[4].length > 38 ||
                item[6].length > 18
              ) {
                newIndex = indexxx + 2;
              } else {
                newIndex = indexxx + 1;
              }
              item[10] = newIndex;
              indexxx = newIndex;
            }
          });

          datanewloopdetail_fix_all.forEach((item) => {
            if (item[10] > 29) {
              datanewloopdetail_fix_all_two.push(item);
            }
          });

          const datanewloopdetail_fix_all_filtered =
            datanewloopdetail_fix_all.filter((item) => {
              if (item[10] > 0) {
                maxItem10 = Math.max(maxItem10, item[10]);
                return true;
              } else {
                return false;
              }
            });

          const MAXNUMCOUNT = maxItem10;
          setDataLoopDetail(data);
          DATA_ALL_LOOP = data;
          setCheckRow(MAXNUMCOUNT);
          // ------------- จบ -------------
          // ------------- loop ที่ 2 -------------
          if (MAXNUMCOUNT > 29 && MAXNUMCOUNT <= 74) {
            // สร้างตัวแปรใหม่เพื่อเก็บข้อมูลที่มีการลบ array[i][10] ออก
            const DATA_ALL_LOOP_NEW = [];
            DATA_ALL_LOOP.forEach((item) => {
              // สร้างข้อมูลใหม่โดยลบค่า array[i][10] ออก
              DATA_ALL_LOOP_NEW.push(item.slice(0, 10));
            });

            // ตรวจสอบค่าใน DATA_ALL_LOOP_NEW

            let indexxx_loop2_One = 0;
            let indexxx_loop2_Two = 0;
            const datanewloopdetail_fix_all_loop2_One = [];
            const datanewloopdetail_fix_all_loop2_Two = [];
            const datanewloopdetail_fix_all_loop2_Three = [];
            let maxItem10_Loop2_One = 0;
            let maxItem20_Loop2_Two = 0;

            DATA_ALL_LOOP_NEW.map((item) => {
              if (!datanewloopdetail_fix_all_loop2_One.includes(item)) {
                datanewloopdetail_fix_all_loop2_One.push(item);
                let newIndex;
                if (
                  item[0].length > 17 ||
                  item[3].length > 48 ||
                  item[4].length > 38 ||
                  item[6].length > 18
                ) {
                  newIndex = indexxx_loop2_One + 2;
                } else {
                  newIndex = indexxx_loop2_One + 1;
                }
                item.push(newIndex);
                indexxx_loop2_One = newIndex;
              }
            });

            datanewloopdetail_fix_all_loop2_One.forEach((item) => {
              if (item[10] > 38) {
                datanewloopdetail_fix_all_loop2_Two.push(item);
              }
            });

            const datanewloopdetail_fix_all_filtered_Loop2_One =
              datanewloopdetail_fix_all_loop2_One.filter((item) => {
                if (item[10] <= 38) {
                  maxItem10_Loop2_One = Math.max(maxItem10_Loop2_One, item[10]);
                  return true;
                }
                return false;
              });

            // ลบค่า index ที่ 10 ของทุกองค์ประกอบใน datanewloopdetail_fix_all_two
            const datanewloopdetail_fix_all_two_2 =
              datanewloopdetail_fix_all_loop2_Two.map((item) => {
                const newItem = [...item];
                delete newItem[10];
                return newItem;
              });

            datanewloopdetail_fix_all_two_2.map((item) => {
              if (!datanewloopdetail_fix_all_loop2_Three.includes(item)) {
                datanewloopdetail_fix_all_loop2_Three.push(item);
                let newIndex_2;
                if (
                  item[0].length > 17 ||
                  item[3].length > 48 ||
                  item[4].length > 38 ||
                  item[6].length > 18
                ) {
                  newIndex_2 = indexxx_loop2_Two + 2;
                } else {
                  newIndex_2 = indexxx_loop2_Two + 1;
                }
                item[10] = newIndex_2;
                indexxx_loop2_Two = newIndex_2;
              }
            });
            const datanewloopdetail_fix_all_filtered_Loop2_Two =
              datanewloopdetail_fix_all_loop2_Three.filter((item) => {
                if (item[10] <= 36) {
                  maxItem20_Loop2_Two = Math.max(maxItem20_Loop2_Two, item[10]);
                  return true;
                }
                return false;
              });

            setMAXNUMCOUNT_Loop2_One(maxItem10_Loop2_One);
            setMAXNUMCOUNT_Loop2_Two(maxItem20_Loop2_Two);
            setDataLoopDetail_Loop2_One(
              datanewloopdetail_fix_all_filtered_Loop2_One
            );
            setDataLoopDetail_Loop2_Two(
              datanewloopdetail_fix_all_filtered_Loop2_Two
            );
          }
          // ------------- จบ -------------

          // ------------- loop ที่ 3 -------------
          //---------- เงื่อนไข Loop ที่ 1 ----------
          if (MAXNUMCOUNT >= 75) {
            const DATA_ALL_LOOP_NEW = [];
            DATA_ALL_LOOP.forEach((item) => {
              // สร้างข้อมูลใหม่โดยลบค่า array[i][10] ออก
              DATA_ALL_LOOP_NEW.push(item.slice(0, 10));
            });

            // ตรวจสอบค่าใน DATA_ALL_LOOP_NEW

            let indexxx_loop3_One = 0;
            let indexxx_loop2_Two = 0;
            const datanewloopdetail_fix_all_loop3_One = [];
            const datanewloopdetail_fix_all_loop3_Two = [];
            const datanewloopdetail_fix_all_loop2_Three = [];
            let maxItem10_Loop3_One = 0;
            let maxItem20_Loop2_Two = 0;

            DATA_ALL_LOOP_NEW.map((item) => {
              if (!datanewloopdetail_fix_all_loop3_One.includes(item)) {
                datanewloopdetail_fix_all_loop3_One.push(item);
                let newIndex;
                if (
                  item[0].length > 17 ||
                  item[3].length > 48 ||
                  item[4].length > 38 ||
                  item[6].length > 18
                ) {
                  newIndex = indexxx_loop3_One + 2;
                } else {
                  newIndex = indexxx_loop3_One + 1;
                }
                item.push(newIndex);
                indexxx_loop3_One = newIndex;
              }
            });

            datanewloopdetail_fix_all_loop3_One.forEach((item) => {
              if (item[10] > 38) {
                datanewloopdetail_fix_all_loop3_Two.push(item);
              }
            });

            const datanewloopdetail_fix_all_filtered_Loop3_One =
              datanewloopdetail_fix_all_loop3_One.filter((item) => {
                if (item[10] <= 38) {
                  maxItem10_Loop3_One = Math.max(maxItem10_Loop3_One, item[10]);
                  return true;
                }
                return false;
              });

            setMAXNUMCOUNT_Loop3_One(maxItem10_Loop3_One);
            // setMAXNUMCOUNT_Loop3_Two(maxItem20_Loop2_Two);
            setDataLoopDetail_Loop3_One(
              datanewloopdetail_fix_all_filtered_Loop3_One
            );
            // setDataLoopDetail_Loop3_Two(datanewloopdetail_fix_all_filtered_Loop2_Two);

            //---------- จบ Loop ที่ 1 ----------
            //---------- เงื่อนไข Loop ที่ 2-3 ----------
            let maxItem10_loop3_Two = 0;

            const datanewloopdetail_fix_all_filtered_loop3 =
              DATA_ALL_LOOP_NEW.filter((item) => {
                if (item[10] > 0) {
                  maxItem10_loop3_Two = Math.max(maxItem10_loop3_Two, item[10]);
                  return true;
                } else {
                  return false;
                }
              });

            const MAXNUMCOUNT_loop3_Two = maxItem10_loop3_Two;

            const data36_tdatanewloopdetail_fix_all_filtered_loop3 =
              datanewloopdetail_fix_all_filtered_loop3.filter(
                (item) => parseFloat(item[10]) > 38
              );

            let slicedData36 = data36_tdatanewloopdetail_fix_all_filtered_loop3;

            let remainingData = slicedData36;
            let lastItemIndex10_End = parseFloat(
              remainingData[remainingData.length - 1][10]
            );
            // let firstItemIndex10_Start = parseFloat(remainingData[0][10]);
            let remainingData_difference = lastItemIndex10_End - 38;

            let loopCount = Math.ceil(remainingData_difference / 44);

            let loopData = [];
            let loopData2 = [];
            let loopDataCount = [];
            let loopDataCount2 = [];
            let loopDataCount_Loop_Two = [];
            for (let i = 0; i < loopCount; i++) {
              let result = [];
              let result_2 = [];
              let totalDifference = 0;
              let totalDifference_ = 0;

              let indexxx_22 = 0;
              const datanewloopdetail_fix_all_22 = [];
              const datanewloopdetail_fix_all_two_22 = remainingData.map(
                (item) => {
                  const newItem = [...item];
                  delete newItem[10];
                  return newItem;
                }
              );

              datanewloopdetail_fix_all_two_22.map((item) => {
                if (!datanewloopdetail_fix_all_22.includes(item)) {
                  datanewloopdetail_fix_all_22.push(item);
                  let newIndex_22;
                  if (
                    item[0].length > 17 ||
                    item[3].length > 48 ||
                    item[4].length > 38 ||
                    item[6].length > 18
                  ) {
                    newIndex_22 = indexxx_22 + 2;
                  } else {
                    newIndex_22 = indexxx_22 + 1;
                  }
                  item[10] = newIndex_22;
                  indexxx_22 = newIndex_22;
                }
              });

              for (
                let i = 0;
                i < datanewloopdetail_fix_all_two_22.length;
                i++
              ) {
                let currentDifference = datanewloopdetail_fix_all_two_22[i][10];
                let tempResult_S = datanewloopdetail_fix_all_two_22[0];
                let tempResult = datanewloopdetail_fix_all_two_22[i];
                // หาค่ารวมของค่า array[i][10] ที่จะลบกัน
                totalDifference = currentDifference - 0;

                // ถ้าค่ารวมไม่เกิน 44 ให้เก็บข้อมูลลงใน result
                if (totalDifference <= 44) {
                  totalDifference_ = totalDifference;
                  result.push(tempResult);
                } else {
                  result_2.push(tempResult);
                }
              }

              let indexxx_2 = 0;
              const datanewloopdetail_fix_all_2 = [];
              let maxItem20 = 0;
              // ลบค่า index ที่ 10 ของทุกองค์ประกอบใน datanewloopdetail_fix_all_two
              const datanewloopdetail_fix_all_two_2 = result.map((item) => {
                const newItem = [...item];
                delete newItem[10];
                return newItem;
              });

              datanewloopdetail_fix_all_two_2.map((item) => {
                if (!datanewloopdetail_fix_all_2.includes(item)) {
                  datanewloopdetail_fix_all_2.push(item);
                  let newIndex_2;
                  if (
                    item[0].length > 17 ||
                    item[3].length > 48 ||
                    item[4].length > 38 ||
                    item[6].length > 18
                  ) {
                    newIndex_2 = indexxx_2 + 2;
                  } else {
                    newIndex_2 = indexxx_2 + 1;
                  }
                  item[10] = newIndex_2;
                  indexxx_2 = newIndex_2;
                }
              });

              const datanewloopdetail_fix_all_filtered_2 =
                datanewloopdetail_fix_all_2.filter((item) => {
                  if (item[10] <= 44) {
                    maxItem20 = Math.max(maxItem20, item[10]);
                    return true;
                  }
                  return false;
                });

              if (loopCount <= 1 && totalDifference_ <= 38) {
                let chunk = datanewloopdetail_fix_all_filtered_2;
                let chunk_new = chunk;
                const datanewloopdetail_fix_all_loop3_Count_Two = [];
                let indexxx_loop3_Two = 0;
                let maxItem20_Loop3_Two = 0;
                chunk_new.map((item) => {
                  if (
                    !datanewloopdetail_fix_all_loop3_Count_Two.includes(item)
                  ) {
                    datanewloopdetail_fix_all_loop3_Count_Two.push(item);
                    let newIndex_3;
                    if (
                      item[0].length > 17 ||
                      item[3].length > 48 ||
                      item[4].length > 38 ||
                      item[6].length > 18
                    ) {
                      newIndex_3 = indexxx_loop3_Two + 2;
                    } else {
                      newIndex_3 = indexxx_loop3_Two + 1;
                    }
                    item[10] = newIndex_3;
                    indexxx_loop3_Two = newIndex_3;
                  }
                });
                const datanewloopdetail_fix_all_filtered_Loop3_Two =
                  datanewloopdetail_fix_all_loop3_Count_Two.filter((item) => {
                    if (item[10] <= 44) {
                      maxItem20_Loop3_Two = Math.max(
                        maxItem20_Loop3_Two,
                        item[10]
                      );
                      return true;
                    }
                    return false;
                  });
                setMAXNUMCOUNT_Loop3_Two(maxItem20_Loop3_Two);
                loopDataCount_Loop_Two.push(maxItem20_Loop3_Two);
                setDataLoopDetail_CountLoop3_Two(loopDataCount_Loop_Two);
                loopData.push(chunk);
                setDataLoopDetail_Loop3_Two(loopData);
                loopDataCount.push(i + 2);
                setDataPageH(loopDataCount);
              } else if (totalDifference_ <= 44 && totalDifference_ > 36) {
                let chunk = datanewloopdetail_fix_all_filtered_2;

                let chunk_new = chunk;
                const datanewloopdetail_fix_all_loop3_Count_Two = [];
                let indexxx_loop3_Two = 0;
                let maxItem20_Loop3_Two = 0;
                chunk_new.map((item) => {
                  if (
                    !datanewloopdetail_fix_all_loop3_Count_Two.includes(item)
                  ) {
                    datanewloopdetail_fix_all_loop3_Count_Two.push(item);
                    let newIndex_3;
                    if (
                      item[0].length > 17 ||
                      item[3].length > 48 ||
                      item[4].length > 38 ||
                      item[6].length > 18
                    ) {
                      newIndex_3 = indexxx_loop3_Two + 2;
                    } else {
                      newIndex_3 = indexxx_loop3_Two + 1;
                    }
                    item[10] = newIndex_3;
                    indexxx_loop3_Two = newIndex_3;
                  }
                });
                const datanewloopdetail_fix_all_filtered_Loop3_Two =
                  datanewloopdetail_fix_all_loop3_Count_Two.filter((item) => {
                    if (item[10] <= 44) {
                      maxItem20_Loop3_Two = Math.max(
                        maxItem20_Loop3_Two,
                        item[10]
                      );
                      return true;
                    }
                    return false;
                  });
                setMAXNUMCOUNT_Loop3_Two(maxItem20_Loop3_Two);
                loopDataCount_Loop_Two.push(maxItem20_Loop3_Two);
                setDataLoopDetail_CountLoop3_Two(loopDataCount_Loop_Two);
                loopData.push(chunk);
                setDataLoopDetail_Loop3_Two(loopData);
                loopDataCount.push(i + 2);
                setDataPageH(loopDataCount);
              } else {
                let chunk2 = datanewloopdetail_fix_all_2;

                let chunk2_new = chunk2;
                const datanewloopdetail_fix_all_loop3_Count_One = [];
                let indexxx_loop3_One = 0;
                let maxItem20_Loop3_One = 0;
                chunk2_new.map((item) => {
                  if (
                    !datanewloopdetail_fix_all_loop3_Count_One.includes(item)
                  ) {
                    datanewloopdetail_fix_all_loop3_Count_One.push(item);
                    let newIndex_3;
                    if (
                      item[0].length > 17 ||
                      item[3].length > 48 ||
                      item[4].length > 38 ||
                      item[6].length > 18
                    ) {
                      newIndex_3 = indexxx_loop3_One + 2;
                    } else {
                      newIndex_3 = indexxx_loop3_One + 1;
                    }
                    item[10] = newIndex_3;
                    indexxx_loop3_One = newIndex_3;
                  }
                });
                const datanewloopdetail_fix_all_filtered_Loop3_One =
                  datanewloopdetail_fix_all_loop3_Count_One.filter((item) => {
                    if (item[10] <= 36) {
                      maxItem20_Loop3_One = Math.max(
                        maxItem20_Loop3_One,
                        item[10]
                      );
                      return true;
                    }
                    return false;
                  });
                setMAXNUMCOUNT_Loop3_Three(maxItem20_Loop3_One);
                loopData2.push(chunk2);
                setDataLoopDetail_Loop3_Three(loopData2);
                loopDataCount2.push(i + 2);
                setDataPageE(loopDataCount2);
              }
              if (loopDataCount2 == "") {
                setDataPageA(1 + loopDataCount.length + 1);
                setDataPageE(1 + loopDataCount.length + 1);
              } else {
                setDataPageA(loopDataCount2.length + loopDataCount.length + 1);
              }
              remainingData = result_2;
            }
            //---------- จบ Loop ที่ 2-3 ----------
          }
          // ------------- จบ -------------
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
        let PDF_FAM = "A1-R340-24-0003";

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
    const container = document.createElement("div");
    const container2 = document.createElement("div");
    const container3 = document.createElement("div");

    try {
      if (CheckRow <= 29) {
        const loopOneContent = Loop_One(tableRefOne);

        const loopOneNode = document.createElement("div");
        createRoot(loopOneNode).render(loopOneContent);
        container.appendChild(loopOneNode);
        // loopOneNode.style.pageBreakAfter = "always";
      }
      if (CheckRow > 29 && CheckRow <= 74) {
        const loopTwoContent = Loop_Two(tableRefTwo);

        const loopTwoNode = document.createElement("div");
        createRoot(loopTwoNode).render(loopTwoContent);
        container2.appendChild(loopTwoNode);
      }
      if (CheckRow >= 75) {
        const loopThreeContent = Loop_Three(tableRefThree);

        const loopThreeNode = document.createElement("div");
        createRoot(loopThreeNode).render(loopThreeContent);
        container3.appendChild(loopThreeNode);
      }

      const options = {
        margin: 0,
        filename: "Fixed Assets Movement System" + " Fam No " + PDF_FAM,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
      };

      // // สร้าง PDF สำหรับ Loop 1
      if (CheckRow <= 29 && container.childNodes.length > 0) {
        const pdfBlob = await html2pdf(container, options).output("blob");
        const formData = new FormData();
        formData.append("subject", "PDF Attachment");
        formData.append("emailMessage", "Here is your PDF file.");
        formData.append("pdfFile", pdfBlob, "Fixasset-file-test.pdf");
      }
      // สร้าง PDF สำหรับ Loop 2
      if (CheckRow > 29 && CheckRow <= 74 && container2.childNodes.length > 0) {
        const pdfBlob2 = await html2pdf(container2, options).output("blob");
        const formData = new FormData();
        formData.append("pdfFile2", pdfBlob2, "Fixasset-file-test2.pdf");
      }
      if (CheckRow >= 75) {
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
  const [NewRow_Loop1, setNewRow_Loop1] = useState([]);
  const [NewRow_Loop2_One, setNewRow_Loop2_One] = useState([]);
  const [NewRow_Loop2_Two, setNewRow_Loop2_Two] = useState([]);
  const [NewRow_Loop3_One, setNewRow_Loop3_One] = useState([]);
  const [NewRow_Loop3_Two, setNewRow_Loop3_Two] = useState([]);
  const [NewRow_Loop3_Three, setNewRow_Loop3_Three] = useState([]);
  // const [NewRow_Loop3_Test, setNewRow_Loop3_Test] = useState([]);
  // const [NewRowThree_2, setNewRowThree_2] = useState([]);
  // const [NewRowThree_3, setNewRowThree_3] = useState([]);
  useEffect(() => {
    if (CheckRow > 0) {
      if (CheckRow <= 29) {
        const numberOfRows = CheckRow;

        const numberOfRowsToAdd = 29 - numberOfRows;
        const newRows_Loop1 = [];
        for (let i = 0; i < numberOfRowsToAdd; i++) {
          newRows_Loop1.push(
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
          setNewRow_Loop1(newRows_Loop1);
        }
      } else if (CheckRow > 29 && CheckRow <= 74) {
        const numberOfRows1 = MAXNUMCOUNT_Loop2_0ne;

        const numberOfRowsToAdd1 = 38 - numberOfRows1;

        const newRows_Loop2_One = [];
        for (let i = 0; i < numberOfRowsToAdd1; i++) {
          newRows_Loop2_One.push(
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
          setNewRow_Loop2_One(newRows_Loop2_One);
        }
        const numberOfRows2 = MAXNUMCOUNT_Loop2_Two;

        const numberOfRowsToAdd2 = 36 - numberOfRows2;

        const newRows_Loop2_Two = [];
        for (let i = 0; i < numberOfRowsToAdd2; i++) {
          newRows_Loop2_Two.push(
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
          setNewRow_Loop2_Two(newRows_Loop2_Two);
        }
      } else if (CheckRow > 75) {
        if (MAXNUMCOUNT_Loop3_One >= 0) {
          const numberOfRows1 = MAXNUMCOUNT_Loop3_One;

          const numberOfRowsToAdd1 = 38 - numberOfRows1;

          const newRows_Loop3_One = [];
          for (let i = 0; i < numberOfRowsToAdd1; i++) {
            newRows_Loop3_One.push(
              <TableRow key={numberOfRows1 + i}>
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
            setNewRow_Loop3_One(newRows_Loop3_One);
          }
        }
        if (MAXNUMCOUNT_Loop3_Three >= 0) {
          const numberOfRows3_3 = MAXNUMCOUNT_Loop3_Three;

          const numberOfRowsToAdd3_3 = 36 - numberOfRows3_3;

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
            setNewRow_Loop3_Three(newRows3_3);
          }
        }
      }
    }
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
                      <Card variant="elevation" className="cardpdf">
                        <CardContent className="cardContainer">
                          <TableContainer>
                            <Table aria-label="customized table" size="small">
                              <TableHead>
                                <TableRow className="Header">
                                  <TableCell className="HeaderTablecell_1">
                                    &nbsp;Fixed Assets Movement Slip Number
                                  </TableCell>
                                  <TableCell className="HeaderTablecell_2">
                                    FAM : {Datafamno[0][0]}&nbsp;
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
                                      <TableCell className="HeaderOneTablecell_row_name">
                                        &nbsp;Name : {Datafamno[0][1]}
                                      </TableCell>
                                      <TableCell className="HeaderOneTablecell_row_tel">
                                        &nbsp;Tel. : {Datafamno[0][4]}
                                      </TableCell>
                                    </TableRow>
                                  </TableCell>
                                  <TableCell className="HeaderOneTablecell_3">
                                    <TableRow>
                                      <TableCell className="HeaderOneTablecell_row_name">
                                        &nbsp;Owner : {Datafamno[0][2]}
                                      </TableCell>
                                      <TableCell className="HeaderOneTablecell_row_tel">
                                        &nbsp;Tel. : {Datafamno[0][5]}
                                      </TableCell>
                                    </TableRow>
                                  </TableCell>
                                  <TableCell className="HeaderOneTablecell_4">
                                    <TableRow>
                                      <TableCell className="HeaderOneTablecell_row_fac">
                                        &nbsp; Factory : {Datafamno[0][6]}
                                      </TableCell>
                                      <TableCell className="HeaderOneTablecell_row_cost">
                                        &nbsp;Cost Center : {Datafamno[0][7]}
                                      </TableCell>
                                      <TableCell className="HeaderOneTablecell_row_dept">
                                        &nbsp;Dept. : {Datafamno[0][3]}
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
                                                    transform: "scale(0.7)",
                                                    marginBottom: "0px",
                                                    marginTop: "0px",
                                                    lineHeight: "2",
                                                    padding: "0px",
                                                  }}
                                                />
                                              }
                                              label={
                                                <span
                                                  style={{
                                                    fontSize: "11px",
                                                    color:
                                                      "rgba(0, 0, 0, 0.87)",
                                                    lineHeight: "2",
                                                    marginBottom: "0px",
                                                    marginTop: "0px",
                                                    display: "block",
                                                    padding: "0px",
                                                  }}
                                                >
                                                  Transfer
                                                </span>
                                              }
                                              labelPlacement="end"
                                              style={{
                                                lineHeight: "2",
                                                marginLeft: "0px",
                                                marginRight: "0px",
                                                marginBottom: "0px",
                                                marginTop: "0px",
                                                padding: "0px",
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
                                                    transform: "scale(0.7)",
                                                    lineHeight: "2",
                                                    padding: "0px",
                                                  }}
                                                />
                                              }
                                              label={
                                                <span
                                                  style={{
                                                    fontSize: "11px",
                                                    color:
                                                      "rgba(0, 0, 0, 0.87)",
                                                    lineHeight: "2",
                                                    marginBottom: "0px",
                                                    marginTop: "0px",
                                                    display: "block",
                                                    padding: "0px",
                                                  }}
                                                >
                                                  Scrap
                                                </span>
                                              }
                                              labelPlacement="end"
                                              style={{
                                                lineHeight: "2",
                                                marginLeft: "0px",
                                                marginRight: "0px",
                                                marginBottom: "0px",
                                                marginTop: "0px",
                                                padding: "0px",
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
                                                    transform: "scale(0.7)",
                                                    lineHeight: "2",
                                                    padding: "0px",
                                                  }}
                                                />
                                              }
                                              label={
                                                <span
                                                  style={{
                                                    fontSize: "11px",
                                                    color:
                                                      "rgba(0, 0, 0, 0.87)",
                                                    lineHeight: "2",
                                                    marginBottom: "0px",
                                                    marginTop: "0px",
                                                    display: "block",
                                                    padding: "0px",
                                                  }}
                                                >
                                                  Sales
                                                </span>
                                              }
                                              labelPlacement="end"
                                              style={{
                                                lineHeight: "2",
                                                marginLeft: "0px",
                                                marginRight: "0px",
                                                marginBottom: "0px",
                                                marginTop: "0px",
                                                padding: "0px",
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
                                                    transform: "scale(0.7)",
                                                    lineHeight: "2",
                                                    padding: "0px",
                                                  }}
                                                />
                                              }
                                              label={
                                                <span
                                                  style={{
                                                    fontSize: "11px",
                                                    color:
                                                      "rgba(0, 0, 0, 0.87)",
                                                    lineHeight: "2",
                                                    marginBottom: "0px",
                                                    marginTop: "0px",
                                                    display: "block",
                                                    padding: "0px",
                                                  }}
                                                >
                                                  Loss
                                                </span>
                                              }
                                              labelPlacement="end"
                                              style={{
                                                lineHeight: "2",
                                                marginLeft: "0px",
                                                marginRight: "0px",
                                                marginBottom: "0px",
                                                marginTop: "0px",
                                                padding: "0px",
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
                                                    transform: "scale(0.7)",
                                                    lineHeight: "2",
                                                    padding: "0px",
                                                  }}
                                                />
                                              }
                                              label={
                                                <span
                                                  style={{
                                                    fontSize: "11px",
                                                    color:
                                                      "rgba(0, 0, 0, 0.87)",
                                                    lineHeight: "2",
                                                    marginBottom: "0px",
                                                    marginTop: "0px",
                                                    display: "block",
                                                    padding: "0px",
                                                  }}
                                                >
                                                  Write-off
                                                </span>
                                              }
                                              labelPlacement="end"
                                              style={{
                                                lineHeight: "2",
                                                marginLeft: "0px",
                                                marginRight: "0px",
                                                marginBottom: "0px",
                                                marginTop: "0px",
                                                padding: "0px",
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
                                                    transform: "scale(0.7)",
                                                    lineHeight: "2",
                                                    padding: "0px",
                                                  }}
                                                />
                                              }
                                              label={
                                                <span
                                                  style={{
                                                    fontSize: "11px",
                                                    color:
                                                      "rgba(0, 0, 0, 0.87)",
                                                    lineHeight: "2",
                                                    marginBottom: "0px",
                                                    marginTop: "0px",
                                                    display: "block",
                                                    padding: "0px",
                                                  }}
                                                >
                                                  Lending to Third-party
                                                </span>
                                              }
                                              labelPlacement="end"
                                              style={{
                                                lineHeight: "2",
                                                marginLeft: "0px",
                                                marginRight: "0px",
                                                marginBottom: "0px",
                                                marginTop: "0px",
                                                padding: "0px",
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
                                                    transform: "scale(0.7)",
                                                    lineHeight: "2",
                                                    marginTop: "0px",
                                                    padding: "0px",
                                                  }}
                                                />
                                              }
                                              label={
                                                <span
                                                  style={{
                                                    fontSize: "11px",
                                                    color:
                                                      "rgba(0, 0, 0, 0.87)",
                                                    lineHeight: "2",
                                                    marginBottom: "0px",
                                                    marginTop: "0px",
                                                    display: "block",
                                                    padding: "0px",
                                                  }}
                                                >
                                                  Donation
                                                </span>
                                              }
                                              labelPlacement="end"
                                              style={{
                                                lineHeight: "2",
                                                marginLeft: "0px",
                                                marginRight: "0px",
                                                marginBottom: "0px",
                                                marginTop: "0px",
                                                padding: "0px",
                                              }}
                                            />
                                          </FormGroup>
                                        </FormControl>
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      {" "}
                                      <TableCell className="HeaderTwoTablecell_3_remark">
                                        &nbsp;Remark :{" "}
                                        {Datafamno[0][9] &&
                                        Datafamno[0][9].length > 0
                                          ? Datafamno[0][9].length <= 153
                                            ? Datafamno[0][9]
                                            : `${Datafamno[0][9].substring(
                                                0,
                                                153
                                              )}...`
                                          : ""}
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
                            <Table className="Table_Loop_One">
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
                                      <br />
                                      Cost (Baht)
                                    </TableCell>
                                    <TableCell className="HeaderListTableTablecell_9">
                                      Book Value (Baht)
                                    </TableCell>
                                    <TableCell className="HeaderListTableTablecell_10">
                                      New
                                      <br />
                                      CC.
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
                                  {NewRow_Loop1}
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
                                    SumTotal[0][1] !== null
                                      ? new Intl.NumberFormat("en-US", {
                                          minimumFractionDigits: 2,
                                          maximumFractionDigits: 2,
                                        }).format(parseFloat(SumTotal[0][1]))
                                      : "0.00"}
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
                                        &nbsp;Date : {Datafamno[0][28]}
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
                                  {/* <TableCell className="HeaderFiveTablecell_4"></TableCell> */}
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
                                        &nbsp;Old Owner : {Datafamno[0][22]}
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                        &nbsp;Completed Date :{" "}
                                        {Datafamno[0][23]}
                                      </TableCell>
                                    </TableRow>
                                  </TableCell>
                                  <TableCell className="HeaderSevenTablecell_3">
                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                        &nbsp;New Owner : {Datafamno[0][24]}
                                      </TableCell>
                                    </TableRow>

                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                        &nbsp;Completed Date :{" "}
                                        {Datafamno[0][25]}
                                      </TableCell>
                                    </TableRow>
                                  </TableCell>
                                  <TableCell className="HeaderSevenTablecell_4">
                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                      &nbsp;Sales / Scrap : {Datafamno[0][8] === "GP01002" ? (
                                          <>{Datafamno[0][31]}</>
                                        ) : Datafamno[0][8] === "GP01003" ? (
                                          <>{Datafamno[0][29]}</>
                                        ) : (
                                          <></>
                                        )}
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                        &nbsp;Completed Date :{Datafamno[0][8] === "GP01002" ? (
                                          <>{Datafamno[0][32]}</>
                                        ) : Datafamno[0][8] === "GP01003" ? (
                                          <>{Datafamno[0][30]}</>
                                        ) : (
                                          <></>
                                        )}
                                      </TableCell>
                                    </TableRow>
                                  </TableCell>
                                  <TableCell className="HeaderSevenTablecell_5">
                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                        &nbsp;Service Dept : {Datafamno[0][26]}
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="HeaderSevenTablecell_row ">
                                        &nbsp;Completed Date :{" "}
                                        {formatDate(Datafamno[0][27])}
                                      </TableCell>
                                    </TableRow>
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                            </Table>
                          </TableContainer>
                        </CardContent>
                        <Table aria-label="customized table" size="small">
                          <TableRow className="LowheaderROW"></TableRow>
                        </Table>
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
                        <Card variant="elevation" className="cardpdf">
                          <CardContent className="cardContainer">
                            <TableContainer>
                              <Table aria-label="customized table" size="small">
                                <TableHead>
                                  <TableRow className="Header">
                                    <TableCell className="HeaderTablecell_1">
                                      &nbsp;Fixed Assets Movement Slip Number
                                    </TableCell>
                                    <TableCell className="HeaderTablecell_2">
                                      FAM : {Datafamno[0][0]}&nbsp;
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
                                        <TableCell className="HeaderOneTablecell_row_name">
                                          &nbsp;Name : {Datafamno[0][1]}
                                        </TableCell>
                                        <TableCell className="HeaderOneTablecell_row_tel">
                                          &nbsp;Tel. : {Datafamno[0][4]}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderOneTablecell_3">
                                      <TableRow>
                                        <TableCell className="HeaderOneTablecell_row_name">
                                          &nbsp;Owner : {Datafamno[0][2]}
                                        </TableCell>
                                        <TableCell className="HeaderOneTablecell_row_tel">
                                          &nbsp;Tel. : {Datafamno[0][5]}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderOneTablecell_4">
                                      <TableRow>
                                        <TableCell className="HeaderOneTablecell_row_fac">
                                          &nbsp; Factory : {Datafamno[0][6]}
                                        </TableCell>
                                        <TableCell className="HeaderOneTablecell_row_cost">
                                          &nbsp;Cost Center : {Datafamno[0][7]}
                                        </TableCell>
                                        <TableCell className="HeaderOneTablecell_row_dept">
                                          &nbsp;Dept. : {Datafamno[0][3]}
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
                                                      transform: "scale(0.7)",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      lineHeight: "2",
                                                      padding: "0px",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "11px",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                      padding: "0px",
                                                    }}
                                                  >
                                                    Transfer
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                  marginBottom: "0px",
                                                  marginTop: "0px",
                                                  padding: "0px",
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
                                                      transform: "scale(0.7)",
                                                      lineHeight: "2",
                                                      padding: "0px",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "11px",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                      padding: "0px",
                                                    }}
                                                  >
                                                    Scrap
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                  marginBottom: "0px",
                                                  marginTop: "0px",
                                                  padding: "0px",
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
                                                      transform: "scale(0.7)",
                                                      lineHeight: "2",
                                                      padding: "0px",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "11px",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                      padding: "0px",
                                                    }}
                                                  >
                                                    Sales
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                  marginBottom: "0px",
                                                  marginTop: "0px",
                                                  padding: "0px",
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
                                                      transform: "scale(0.7)",
                                                      lineHeight: "2",
                                                      padding: "0px",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "11px",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                      padding: "0px",
                                                    }}
                                                  >
                                                    Loss
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                  marginBottom: "0px",
                                                  marginTop: "0px",
                                                  padding: "0px",
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
                                                      transform: "scale(0.7)",
                                                      lineHeight: "2",
                                                      padding: "0px",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "11px",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                      padding: "0px",
                                                    }}
                                                  >
                                                    Write-off
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                  marginBottom: "0px",
                                                  marginTop: "0px",
                                                  padding: "0px",
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
                                                      transform: "scale(0.7)",
                                                      lineHeight: "2",
                                                      padding: "0px",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "11px",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                      padding: "0px",
                                                    }}
                                                  >
                                                    Lending to Third-party
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                  marginBottom: "0px",
                                                  marginTop: "0px",
                                                  padding: "0px",
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
                                                      transform: "scale(0.7)",
                                                      lineHeight: "2",
                                                      marginTop: "0px",
                                                      padding: "0px",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "11px",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                      padding: "0px",
                                                    }}
                                                  >
                                                    Donation
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                  marginBottom: "0px",
                                                  marginTop: "0px",
                                                  padding: "0px",
                                                }}
                                              />
                                            </FormGroup>
                                          </FormControl>
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        {" "}
                                        <TableCell className="HeaderTwoTablecell_3_remark">
                                          &nbsp;Remark :{" "}
                                          {Datafamno[0][9] &&
                                          Datafamno[0][9].length > 0
                                            ? Datafamno[0][9].length <= 153
                                              ? Datafamno[0][9]
                                              : `${Datafamno[0][9].substring(
                                                  0,
                                                  153
                                                )}...`
                                            : ""}
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
                                        <br />
                                        Cost (Baht)
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
                                    {DataLoopDetail_Loop2_One.length > 0
                                      ? DataLoopDetail_Loop2_One.map(
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
                                    {NewRow_Loop2_One}
                                  </TableBody>
                                </Table>
                              </Table>
                            </TableContainer>
                          </CardContent>
                          <Table aria-label="customized table" size="small">
                            <TableRow className="LowheaderROW"></TableRow>
                          </Table>
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
                        <Card variant="elevation" className="cardpdf">
                          <CardContent className="cardContainer">
                            <TableContainer>
                              <Table style={{ height: "167mm" }}>
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
                                        <br />
                                        Cost (Baht)
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
                                    {DataLoopDetail_Loop2_Two.length > 0
                                      ? DataLoopDetail_Loop2_Two.map(
                                          (item, index) => (
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

                                    {/* Add additional empty rows if table height is less than 114mm */}
                                    {NewRow_Loop2_Two}
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
                                      SumTotal[0][1] !== null
                                        ? new Intl.NumberFormat("en-US", {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                          }).format(parseFloat(SumTotal[0][1]))
                                        : "0.00"}
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
                                          &nbsp;Old Owner : {Datafamno[0][22]}
                                        </TableCell>
                                      </TableRow>

                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Completed Date :{" "}
                                          {Datafamno[0][23]}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderSevenTablecell_3">
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;New Owner : {Datafamno[0][24]}
                                        </TableCell>
                                      </TableRow>

                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Completed Date :{" "}
                                          {Datafamno[0][25]}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderSevenTablecell_4">
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Sales / Scrap :
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Completed Date :
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderSevenTablecell_5">
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Service Dept :{" "}
                                          {Datafamno[0][26]}
                                        </TableCell>
                                      </TableRow>

                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Completed Date :{" "}
                                          {formatDate(Datafamno[0][27])}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                              </Table>
                            </TableContainer>
                          </CardContent>
                          <Table aria-label="customized table" size="small">
                            <TableRow className="LowheaderROW"></TableRow>
                          </Table>
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
                        <Card variant="elevation" className="cardpdf">
                          <CardContent className="cardContainer">
                            <TableContainer>
                              <Table aria-label="customized table" size="small">
                                <TableHead>
                                  <TableRow className="Header">
                                    <TableCell className="HeaderTablecell_1">
                                      &nbsp;Fixed Assets Movement Slip Number
                                    </TableCell>
                                    <TableCell className="HeaderTablecell_2">
                                      FAM : {Datafamno[0][0]}&nbsp;
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
                                        <TableCell className="HeaderOneTablecell_row_name">
                                          &nbsp;Name : {Datafamno[0][1]}
                                        </TableCell>
                                        <TableCell className="HeaderOneTablecell_row_tel">
                                          &nbsp;Tel. : {Datafamno[0][4]}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderOneTablecell_3">
                                      <TableRow>
                                        <TableCell className="HeaderOneTablecell_row_name">
                                          &nbsp;Owner : {Datafamno[0][2]}
                                        </TableCell>
                                        <TableCell className="HeaderOneTablecell_row_tel">
                                          &nbsp;Tel. : {Datafamno[0][5]}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderOneTablecell_4">
                                      <TableRow>
                                        <TableCell className="HeaderOneTablecell_row_fac">
                                          &nbsp; Factory : {Datafamno[0][6]}
                                        </TableCell>
                                        <TableCell className="HeaderOneTablecell_row_cost">
                                          &nbsp;Cost Center : {Datafamno[0][7]}
                                        </TableCell>
                                        <TableCell className="HeaderOneTablecell_row_dept">
                                          &nbsp;Dept. : {Datafamno[0][3]}
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
                                                      transform: "scale(0.7)",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      lineHeight: "2",
                                                      padding: "0px",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "11px",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                      padding: "0px",
                                                    }}
                                                  >
                                                    Transfer
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                  marginBottom: "0px",
                                                  marginTop: "0px",
                                                  padding: "0px",
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
                                                      transform: "scale(0.7)",
                                                      lineHeight: "2",
                                                      padding: "0px",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "11px",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                      padding: "0px",
                                                    }}
                                                  >
                                                    Scrap
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                  marginBottom: "0px",
                                                  marginTop: "0px",
                                                  padding: "0px",
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
                                                      transform: "scale(0.7)",
                                                      lineHeight: "2",
                                                      padding: "0px",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "11px",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                      padding: "0px",
                                                    }}
                                                  >
                                                    Sales
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                  marginBottom: "0px",
                                                  marginTop: "0px",
                                                  padding: "0px",
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
                                                      transform: "scale(0.7)",
                                                      lineHeight: "2",
                                                      padding: "0px",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "11px",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                      padding: "0px",
                                                    }}
                                                  >
                                                    Loss
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                  marginBottom: "0px",
                                                  marginTop: "0px",
                                                  padding: "0px",
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
                                                      transform: "scale(0.7)",
                                                      lineHeight: "2",
                                                      padding: "0px",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "11px",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                      padding: "0px",
                                                    }}
                                                  >
                                                    Write-off
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                  marginBottom: "0px",
                                                  marginTop: "0px",
                                                  padding: "0px",
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
                                                      transform: "scale(0.7)",
                                                      lineHeight: "2",
                                                      padding: "0px",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "11px",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                      padding: "0px",
                                                    }}
                                                  >
                                                    Lending to Third-party
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                  marginBottom: "0px",
                                                  marginTop: "0px",
                                                  padding: "0px",
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
                                                      transform: "scale(0.7)",
                                                      lineHeight: "2",
                                                      marginTop: "0px",
                                                      padding: "0px",
                                                    }}
                                                  />
                                                }
                                                label={
                                                  <span
                                                    style={{
                                                      fontSize: "11px",
                                                      color:
                                                        "rgba(0, 0, 0, 0.87)",
                                                      lineHeight: "2",
                                                      marginBottom: "0px",
                                                      marginTop: "0px",
                                                      display: "block",
                                                      padding: "0px",
                                                    }}
                                                  >
                                                    Donation
                                                  </span>
                                                }
                                                labelPlacement="end"
                                                style={{
                                                  lineHeight: "2",
                                                  marginLeft: "0px",
                                                  marginRight: "0px",
                                                  marginBottom: "0px",
                                                  marginTop: "0px",
                                                  padding: "0px",
                                                }}
                                              />
                                            </FormGroup>
                                          </FormControl>
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        {" "}
                                        <TableCell className="HeaderTwoTablecell_3_remark">
                                          &nbsp;Remark :{" "}
                                          {Datafamno[0][9] &&
                                          Datafamno[0][9].length > 0
                                            ? Datafamno[0][9].length <= 153
                                              ? Datafamno[0][9]
                                              : `${Datafamno[0][9].substring(
                                                  0,
                                                  153
                                                )}...`
                                            : ""}
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
                                        Acquisition <br />
                                        Cost (Baht)
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
                                    {DataLoopDetail_Loop3_One.length > 0
                                      ? DataLoopDetail_Loop3_One.map(
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
                                    {NewRow_Loop3_One}
                                  </TableBody>
                                </Table>
                              </Table>
                            </TableContainer>
                          </CardContent>
                          <Table aria-label="customized table" size="small">
                            <TableRow className="LowheaderROW"></TableRow>
                          </Table>
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
        {DataLoopDetail_Loop3_Two.map((arrayItem, arrayIndex) => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "5px",
            }}
          >
            <TableRow>
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
                        <Card variant="elevation" className="cardpdf">
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
                                        Acquisition <br />
                                        Cost (Baht)
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
                                      ? arrayItem.map((item, index) => (
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
                                                  ).format(parseFloat(item[7]))
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
                                    {arrayItem.length > 0 &&
                                      (() => {
                                        const maxItemCount = Math.max(
                                          ...arrayItem.map((item) => item[10])
                                        );
                                        const numberOfRows3_2 = maxItemCount;

                                        const numberOfRowsToAdd3_2 =
                                          44 - numberOfRows3_2;

                                        const newRows3_2 = [];
                                        for (
                                          let i = 0;
                                          i < numberOfRowsToAdd3_2;
                                          i++
                                        ) {
                                          newRows3_2.push(
                                            <TableRow key={numberOfRows3_2 + i}>
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
                                          );
                                        }
                                        return newRows3_2;
                                      })()}

                                    {NewRow_Loop3_Two}
                                  </TableBody>
                                </Table>
                              </Table>
                            </TableContainer>
                          </CardContent>
                          <Table aria-label="customized table" size="small">
                            <TableRow className="LowheaderROW"></TableRow>
                          </Table>
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
                        <Card variant="elevation" className="cardpdf">
                          <CardContent className="cardContainer">
                            <TableContainer>
                              <Table style={{ height: "167mm" }}>
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
                                        Acquisition <br />
                                        Cost (Baht)
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
                                    {DataLoopDetail_Loop3_Three[0]
                                      ? DataLoopDetail_Loop3_Three[0].map(
                                          (item, index) =>
                                            index >= 0 && (
                                              <TableRow key={index}>
                                                <TableCell className="HeaderListTableDataTablecell_1">
                                                  &nbsp;
                                                  {index === 0 ||
                                                  item[0] !==
                                                    DataLoopDetail_Loop3_Three[0][
                                                      index - 1
                                                    ][0]
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
                                    {NewRow_Loop3_Three}
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
                                      SumTotal[0][1] !== null
                                        ? new Intl.NumberFormat("en-US", {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                          }).format(parseFloat(SumTotal[0][1]))
                                        : "0.00"}
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
                                          &nbsp;Old Owner : {Datafamno[0][22]}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Completed Date :{" "}
                                          {Datafamno[0][23]}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderSevenTablecell_3">
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;New Owner : {Datafamno[0][24]}
                                        </TableCell>
                                      </TableRow>

                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Completed Date :{" "}
                                          {Datafamno[0][25]}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderSevenTablecell_4">
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Sales / Scrap :
                                        </TableCell>
                                      </TableRow>

                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Completed Date :
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                    <TableCell className="HeaderSevenTablecell_5">
                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Service Dept :{" "}
                                          {Datafamno[0][26]}
                                        </TableCell>
                                      </TableRow>

                                      <TableRow>
                                        <TableCell className="HeaderSevenTablecell_row ">
                                          &nbsp;Completed Date :{" "}
                                          {formatDate(Datafamno[0][27])}
                                        </TableCell>
                                      </TableRow>
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                              </Table>
                            </TableContainer>
                          </CardContent>
                          <Table aria-label="customized table" size="small">
                            <TableRow className="LowheaderROW"></TableRow>
                          </Table>
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
      <Table>
        <TableBody>
          <TableRow styles={{ border: "0px" }}>
            <TableCell style={{ textAlign: "left" }}>
              <Button
                style={{ borderRadius: "30px" }}
                component="label"
                variant="contained"
                startIcon={<ChevronLeftIcon />}
                className="btnback"
                onClick={BackPage}
              >
                Back
              </Button>
            </TableCell>
            <TableCell style={{ textAlign: "right" }}>
              <Button
                style={{ borderRadius: "30px" }}
                component="label"
                color="error"
                variant="contained"
                startIcon={<FileDownloadIcon />}
                className="btnExport"
                onClick={downloadAsPDF}
              >
                Download as PDF
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {CheckRow <= 29 ? (
        <Loop_One />
      ) : CheckRow > 29 && CheckRow <= 74 ? (
        <Loop_Two />
      ) : (
        <Loop_Three />
      )}
    </>
  );
}

export default PDF_design;
