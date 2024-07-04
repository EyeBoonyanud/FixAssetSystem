import React, { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import Swal from "sweetalert2";
function FAM_REPORT_DETAILS( ) {
  const [getCostCenter, setgetCostCenter] = useState([]);
  const [TableSearch, setTableSearch] = useState([]);
  const [TypeRequest, setTypeRequest] = useState([]);
  const [getFactory, setgetFactory] = useState([]);
  const [selectRequestType, setselectRequestType] = useState("");
  const [selectFactory, setselectFactory] = useState("");
  const [selectCostCenter, setselectCostCenter] = useState("");
  const [Txt_FamNo, setTxt_FamNo] = useState("");

  const [Txt_ID_Owner, setTxt_ID_Owner] = useState("");
  const [Txt_FamNo_TO, setTxt_FamNo_TO] = useState("");
  const [Txt_user, setTxt_user] = useState("");
  const [checkHead, setCheckHead] = useState("hidden");
  const [checkEmpty, setCheckEmpty] = useState("hidden");
  const [checkData, setCheckData] = useState("visible");
  const [Checkvale, setcheckvalue] = useState("");


  useEffect(() => {
    Type();
    Factory();
    CostCenter();
  }, []);

  const Type = () => {
    axios.post("/RequstType").then((res) => {
      const data = res.data;
      setTypeRequest(data);
    });
  };

  const Factory = () => {
    axios.get("/getfactory").then((res) => {
      const data = res.data;
      setgetFactory(data);
    });
  };

  const CostCenter = () => {
    axios.get("/getcost").then((res) => {
      const data = res.data;
      setgetCostCenter(data);
    });
  };

  const Owner = (Id_owner) => {
    axios
      .post("/Id_owner", {
        owner_id: Id_owner,
      })
      .then((res) => {
        const data = res.data;
        if (data.length > 0) {
          setTxt_user(data[0][1]);
        } else {
          setTxt_user("");
        }
      });
  };

  const Reset = () => {
    setselectFactory("");
    setselectCostCenter("");
    setselectRequestType("");
    setTxt_FamNo("");
    setTxt_FamNo_TO("");
    setTxt_user("");
    setTxt_ID_Owner("");
    setTableSearch([]);
    setCheckHead("hidden");
    setCheckEmpty("hidden");
    setCheckData("visible");
    setcheckvalue("");
  };
  const Search = () => {
    if (
      selectFactory === "" &&
      selectCostCenter === "" &&
      Txt_FamNo_TO === "" &&
      Txt_ID_Owner === "" &&
      Txt_user === "" &&
      selectRequestType === "" &&
      Txt_FamNo === ""
    ) {
      alert("Please fill information");
    } else {
      if (selectRequestType == "") {
        alert("Please Select Request Type");
      } else {
        setCheckHead("hidden");
        setCheckEmpty("hidden");
        setCheckData("visible");
        axios
          .post("/FamDetailReport", {
            Fac: selectFactory,
            CC: selectCostCenter,
            RequestType: selectRequestType,
            FAMNo_From: Txt_FamNo,
            FamNo_To: Txt_FamNo_TO,
            OwnerID: Txt_ID_Owner,
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
                var numericValue = data[i][13].replace(/,/g, "");
                sumAcqCost += parseFloat(numericValue);
                sumBookvalue = sumBookvalue + data[i][14];

                currentDataTable.push([
                  currentDataTable.length === 0 ? data[i][0] : "",
                  currentDataTable.length === 0 ? data[i][1] : "",
                  currentDataTable.length === 0 ? data[i][2] : "",
                  currentDataTable.length === 0 ? data[i][3] : "",

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
                  sumAcqCost.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }),
                  sumBookvalue,
                  numericValue,
                  sumAcqCost,
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
                text: `Not Found ${Txt_FamNo} Please enter again`,
                icon: "warning",
              });
              setcheckvalue("Not Found Data");
            }
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }
    }
  };

  const [selectedFamNo, setSelectedFamNo] = useState("");
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = (Famno) => {
    const selectedRow = Famno;
    if (selectedRow) {
      setSelectedFamNo(Famno);
      setPopupOpen(true);
    }
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
      row[0],
      row[1],
      row[2],
      row[3],
      row[4],
      row[5],
      row[6],
      row[7],
      row[8],
      row[9],
      row[10],
      row[11],
      row[12],
      parseFloat(row[20]),
      row[14],
      row[15],
      row[16],
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

  return {
    getCostCenter,
    setgetCostCenter,
    TableSearch,
    setTableSearch,
    TypeRequest,
    setTypeRequest,
    getFactory,
    setgetFactory,
    selectRequestType,
    setselectRequestType,
    selectFactory,
    setselectFactory,
    selectCostCenter,
    setselectCostCenter,
    Txt_FamNo,
    setTxt_FamNo,
    Txt_ID_Owner,
    setTxt_ID_Owner,
    Txt_FamNo_TO,
    setTxt_FamNo_TO,
    Txt_user,
    setTxt_user,
    checkHead,
    setCheckHead,
    checkEmpty,
    setCheckEmpty,
    checkData,
    setCheckData,
    Checkvale,
    setcheckvalue,
    Type,
    Factory,
    CostCenter,
    Owner,
    Reset,
    Search,
    selectedFamNo,
    setSelectedFamNo,
    isPopupOpen,
    setPopupOpen,
    openPopup,
    closePopup,
    exportToExcelTable1,
  };
}

export { FAM_REPORT_DETAILS };
