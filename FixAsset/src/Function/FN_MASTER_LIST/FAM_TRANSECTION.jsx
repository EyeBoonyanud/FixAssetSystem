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
  const [DataScrap ,setDataScrap] = useState([]);
  const [DataSale ,setDataSale] =useState([]);
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
  const [FiledataPTE_ENV ,setFiledataPTE_ENV] = useState([]);
  const [FiledataPLN_Staff,setFiledataPLN_Staff] = useState([]);
  const [FiledataShiiping,setFiledataShiiping] = useState([]);

  const [FiledataPTE_EN_input_ws ,setFiledataPTE_ENV_input_ws] = useState([]);
  const [FiledataPLN_Staff_boi,setFiledataPLN_Staff_boi] = useState([]);
  const [Filedataimp_prapare,setFiledataimp_prapare] = useState([]);
  const [FiledataBoi_input_data,setFiledataBoi_input_data] = useState([]);
  const [Filedatathai_catergorise ,setFiledatathai_catergorise] = useState([]);
  const [FiledataPLN_bidding,setFiledataPLN_bidding] = useState([]);
  const [FiledataWID,setFiledataWID] = useState([]);
  const [Filedataexp_clearance,setFileFiledataexp_clearance] = useState([]);
  const [Filedataafter_export,setFiledataafter_export] = useState([]);
  const [Filedatareq_inv ,setFiledatareq_inv] = useState([]);
  const [Filedataship_staff,setFiledataship_staff] = useState([]);
  const [Filedataupload_final,setFiledataFiledataupload_final] = useState([]);
  

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
        const response = await axios.post("/getFAM_FILE_DATA", {
          FamNo: VIEW_FAM,
          ATT_FROM:'OWNER CHECK'
        });
        const jsonData = await response.data;
        setFiledata(jsonData);;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchData_Owner_return = async () => {
      try {
        const response = await axios.post("/getFAM_FILE_DATA", {
          FamNo: VIEW_FAM,
          ATT_FROM:'OWNER RETURN'
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
      } catch (error) {
        console.error("Error during login:", error);
      }
    };
    const fetchData_Scrap = async () => {
      try {
        const response = await axios.post("/getEdit_scrap", {
          famno: VIEW_FAM,
        });

        const data = await response.data.flat();
        setDataScrap(data);
      } catch (error) {
        console.error("Error during login:", error);
      }
    };
    const fetchData_Sale = async () => {
      try {
        const response = await axios.post("/getEdit_sale", {
          famno: VIEW_FAM,
        });

        const data = await response.data.flat();
        setDataSale(data);
      } catch (error) {
        console.error("Error during login:", error);
      }
    };
    const fetchData_PTE_ENV = async () => {
      try {
        const response = await axios.post("/getFAM_FILE_DATA", {
          FamNo: VIEW_FAM,
          ATT_FROM:'ENV CHECK'
        });
        const jsonData = await response.data;
        setFiledataPTE_ENV(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchData_PLN_Staff = async () => {
      try {
        const response = await axios.post("/getFAM_FILE_DATA", {
          FamNo: VIEW_FAM,
          ATT_FROM:'PLN CHECK'
        });
        const jsonData = await response.data;
        setFiledataPLN_Staff(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchData_Shipping = async () => {
      try {
        const response = await axios.post("/getFAM_FILE_DATA", {
          FamNo: VIEW_FAM,
          ATT_FROM:'SHP CHECK'
        });
        const jsonData = await response.data;
        setFiledataShiiping(jsonData);
        setFiledataship_staff(jsonData);
      } catch (error) {
        console.error("Error fetchData_Shipping data:", error);
      }
    };
    const fetchData_ENV1_SALE = async () => {
      try {
         const response = await axios.post("/getFAM_FILE_DATA", {
           FamNo: VIEW_FAM,
           ATT_FROM:'ENV1 SALE'
         });
         const jsonData = await response.data;   
         setFiledataPTE_ENV_input_ws(jsonData);
       } catch (error) {
         console.error("Error fetchData_ENV1_SALE:", error);
       }
      };
     const fetchData_PLN1_SALE  = async () => {
      try {
         const response = await axios.post("/getFAM_FILE_DATA", {
           FamNo: VIEW_FAM,
           ATT_FROM:'PLN1 SALE'
         });
         const jsonData = await response.data;   
         setFiledataPLN_Staff_boi(jsonData);
       } catch (error) {
         console.error("Error fetchData_PLN1_SALE:", error);
       }
     };
     const fetchData_IMP1_SALE  = async () => {
      try {
         const response = await axios.post("/getFAM_FILE_DATA", {
           FamNo: VIEW_FAM,
           ATT_FROM:'IMP1 SALE'
         });
         const jsonData = await response.data;   
         setFiledataimp_prapare(jsonData);
       } catch (error) {
         console.error("Error fetchData_IMP1_SALE:", error);
       }
     };
     const fetchData_BOI1_SALE  = async () => {
      try {
         const response = await axios.post("/getFAM_FILE_DATA", {
           FamNo: VIEW_FAM,
           ATT_FROM:'BOI1 SALE'
         });
         const jsonData = await response.data;   
         setFiledataBoi_input_data(jsonData);
       } catch (error) {
         console.error("Error fetchData_BOI1_SALE:", error);
       }
     };
     const fetchData_IMP2_SALE  = async () => {
      try {
         const response = await axios.post("/getFAM_FILE_DATA", {
           FamNo: VIEW_FAM,
           ATT_FROM:'IMP2 SALE'
         });
         const jsonData = await response.data;   
         setFiledatathai_catergorise(jsonData);
       } catch (error) {
         console.error("Error fetchData_IMP2_SALE:", error);
       }
     };
     const fetchData_PLN2_SALE  = async () => {
      try {
         const response = await axios.post("/getFAM_FILE_DATA", {
           FamNo: VIEW_FAM,
           ATT_FROM:'PLN2 SALE'
         });
         const jsonData = await response.data;   
         setFiledataPLN_bidding(jsonData);
       } catch (error) {
         console.error("Error fetchData_PLN2_SALE:", error);
       }
     };
     const fetchData_ENV2_SALE  = async () => {
      try {
         const response = await axios.post("/getFAM_FILE_DATA", {
           FamNo: VIEW_FAM,
           ATT_FROM:'ENV2 SALE'
         });
         const jsonData = await response.data;   
         setFiledataWID(jsonData);
       } catch (error) {
         console.error("Error fetchData_ENV2_SALE:", error);
       }
     };
     const fetchData_BOI2_SALE  = async () => {
      try {
         const response = await axios.post("/getFAM_FILE_DATA", {
           FamNo: VIEW_FAM,
           ATT_FROM:'BOI2 SALE'
         });
         const jsonData = await response.data;   
         setFileFiledataexp_clearance(jsonData);
       } catch (error) {
         console.error("Error fetchData_BOI2_SALE:", error);
       }
     };
     const fetchData_ENV3_SALE  = async () => {
      try {
         const response = await axios.post("/getFAM_FILE_DATA", {
           FamNo: VIEW_FAM,
           ATT_FROM:'ENV3 SALE'
         });
         const jsonData = await response.data;   
         setFiledataafter_export(jsonData);
       } catch (error) {
         console.error("Error fetchData_ENV3_SALE", error);
       }
     };
     const fetchData_PLN3_SALE  = async () => {
      try {
         const response = await axios.post("/getFAM_FILE_DATA", {
           FamNo: VIEW_FAM,
           ATT_FROM:'PLN3 SALE'
         });
         const jsonData = await response.data;   
         setFiledatareq_inv(jsonData);
       } catch (error) {
         console.error("Error fetchData_PLN3_SALE", error);
       }
     };
     const fetchData_PLN4_SALE  = async () => {
      try {
         const response = await axios.post("/getFAM_FILE_DATA", {
           FamNo: VIEW_FAM,
           ATT_FROM:'PLN4 SALE'
         });
         const jsonData = await response.data;   
         setFiledataFiledataupload_final(jsonData);
       } catch (error) {
         console.error("Error fetchData_PLN4_SALE", error);
       }
     };
  
  

    Name();
    FAM_Transfer();
    FAM_Routing();
    fetchData();
    fetchData_Owner_return();
    fetchData_Leading();
    fetchData_Scrap();
    fetchData_Sale();
    fetchData_PTE_ENV();
    fetchData_PLN_Staff();
    fetchData_Shipping();
    fetchData_ENV1_SALE();
    fetchData_PLN1_SALE();
    fetchData_IMP1_SALE();
    fetchData_BOI1_SALE();
    fetchData_IMP2_SALE();
    fetchData_PLN2_SALE();
    fetchData_ENV2_SALE();
    fetchData_BOI2_SALE();
    fetchData_ENV3_SALE();
    fetchData_PLN3_SALE();
    fetchData_PLN4_SALE();
    setTimeout(function () {
      closePopupLoadding();
    }, 2000);
  }, []);

  const BackPage = async () => {
    const encodedVIEW_FAM = encodeURIComponent(VIEW_FAM);
    window.location.href = `/FAMsystem/VIEW_Fammaster?VIEW_FAM=${encodedVIEW_FAM}`;
  };

  return {
    VIEW_FAM,
    VIEW_TYPE,
    DataTransferFamno,
    DataRoutingFamno,
    DataName,
    DataLending,
    DataScrap,
    DataSale,
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
    FiledataPTE_ENV,
    FiledataShiiping,
    FiledataPLN_Staff,
    isPopupOpenLoadding,
    FiledataPTE_EN_input_ws,
    FiledataPLN_Staff_boi,
    Filedataimp_prapare,
    FiledataBoi_input_data,
    Filedatathai_catergorise,
    FiledataPLN_bidding,
    FiledataWID,
    Filedataexp_clearance,
    Filedataafter_export,
    Filedatareq_inv,
    Filedataship_staff,
    Filedataupload_final,
    openPopupLoadding,
    closePopupLoadding,
    BackPage,
  };
}

export { FAM_TRANSECTION };
