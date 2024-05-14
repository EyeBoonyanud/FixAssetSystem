import React, { useState, useEffect } from "react";
import axios from "axios";

function FAM_TRANSECTION() {
  // const สำหรับ improt function
  // const สำหรับ LocalStorage
  const VIEW_FAM = localStorage.getItem("EDIT");
  const VIEW_TYPE = localStorage.getItem("TYPE_flow");

  // const ข้อมูลได้จาก Database
  const [DataTransferFamno, setDataTransferFamno] = useState([]);
  const [DataRoutingFamno, setDataRoutingFamno] = useState([]);
  const [DataName, setDataName] = useState("");
  const [DataLending, setDataLending] = useState([]);
  // const radio
  const [selectradio_dept, setselectradio_dept] = useState("");
  const [selectradio_serviceby, setselectradio_serviceby] = useState("");
  const [selectradio_boistaff, setselectradio_boistaff] = useState("");
  const [selectradio_boimanager, setselectradio_boimanager] = useState("");
  const [selectradio_facmanager, setselectradio_facmanager] = useState("");
  const [selectradio_acc_check, setselectradio_acc_check] = useState("");
  const [selectradio_owner, setselectradio_owner] = useState("");
  const [selectradio_receiver, setselectradio_receiver] = useState("");
  const [selectradio_record, setselectradio_record] = useState("");
  const [selectradio_acc_manager, setselectradio_acc_manager] = useState("");
  const [selectradio_service_close_by, setselectradio_service_close_by] =
    useState("");
  const [selectradio_acc_return, setselectradio_acc_return] = useState("");
  const [chkaction_date, setchkaction_date] = useState("");
   // const ได้ file จาก database
  const [Filedata, setFiledata] = useState([]);
  const [FiledataReturn, setFiledataReturn] = useState([]);
  // const Loading 
  const [isPopupOpenLoadding, setPopupOpenLoadding] = useState(false);
  const openPopupLoadding = () => {
    setPopupOpenLoadding(true);
  };
  const closePopupLoadding = () => {
    setPopupOpenLoadding(false);
  };

  // Use Effect
  useEffect(() => {
    openPopupLoadding();
    const FAM_Routing = async () => {
      try {
        const response = await axios.post("/getData_Routing_show_VIEW", {
          famno: VIEW_FAM,
        });
        const data = await response.data.flat();
        setDataRoutingFamno(data);
        setselectradio_dept(data[1]);
        setselectradio_serviceby(data[7]);
        setselectradio_boistaff(data[11]);
        setselectradio_boimanager(data[15]);
        setselectradio_facmanager(data[19]);
        setselectradio_acc_check(data[23]);
        setselectradio_owner(data[27]);
        setselectradio_record(data[31]);
        setselectradio_acc_manager(data[35]);
        setselectradio_service_close_by(data[39]);
      } catch (error) {
        console.error("Error RequesterORType:", error);
      }
    };
    const FAM_Transfer = async () => {
      try {
        const response = await axios.post("/getData_Transfer_show_VIEW", {
          famno: VIEW_FAM,
        });
        const data = await response.data.flat();
        setDataTransferFamno(data);
        setselectradio_receiver(data[9]);
      } catch (error) {
        console.error("Error RequesterORType:", error);
      }
    };
    const Name = async () => {
      try {
        const response = await axios.post("/getData_showName", {
          famno: VIEW_FAM,
        });
        const data = await response.data;

        setDataName(data);
      } catch (error) {
        console.error("Error RequesterORType:", error);
      }
    };
    const fetchData = async () => {
      try {
        const response = await axios.post("/getFAM_FILE_OWNER_CHK", {
          FamNo: VIEW_FAM,
        });
        const jsonData = await response.data;
        setFiledata(jsonData);
        console.log("DATAFILE", jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchData_Owner_return = async () => {
      try {
        const response = await axios.post("/getFAM_FILE_Req_Return", {
          FamNo: VIEW_FAM,
        });
        const jsonData = await response.data;
        setFiledataReturn(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchData_Leading = async () => {
      try {
        const response = await axios.post("/getEdit_lenging", {
          famno: VIEW_FAM,
        });

        const data = await response.data.flat();
        setDataLending(data);
        setselectradio_acc_return(data[4]);
        setchkaction_date(data[7]);
        console.log(data, "YUUYU");
      } catch (error) {
        console.error("Error during login:", error);
      }
    };

    Name();
    FAM_Transfer();
    FAM_Routing();
    fetchData();
    fetchData_Owner_return();
    fetchData_Leading();
    setTimeout(function () {
      closePopupLoadding();
    }, 2000);
  }, []);

  const BackPage = async () => {
    console.log(VIEW_FAM, "PDF_FAM");
    const encodedVIEW_FAM = encodeURIComponent(VIEW_FAM);
    window.location.href = `/VIEW_Fammaster?VIEW_FAM=${encodedVIEW_FAM}`;
  };

  return {
    VIEW_FAM,
    VIEW_TYPE,
    DataTransferFamno,
    DataRoutingFamno,
    DataName,
    DataLending,
    selectradio_dept,
    selectradio_serviceby,
    selectradio_boistaff,
    selectradio_boimanager,
    selectradio_facmanager,
    selectradio_acc_check,
    selectradio_owner,
    selectradio_receiver,
    selectradio_record,
    selectradio_acc_manager,
    selectradio_service_close_by,
    selectradio_acc_return,
    chkaction_date,
    Filedata,
    FiledataReturn,
    isPopupOpenLoadding,
    openPopupLoadding,
    closePopupLoadding,
    BackPage,
  };
}

export { FAM_TRANSECTION };
