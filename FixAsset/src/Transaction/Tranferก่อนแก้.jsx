import React, { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Card,
  Select,
  FormControl,
  MenuItem,
  Box,
  Button,
} from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
import { LocalActivity, SaveAlt } from "@mui/icons-material";
import Header from "../Page/Hearder";
function TransFerDetail() {
  //Local Storage
  const EditFam = localStorage.getItem("EDIT")
  const ReqBy = localStorage.getItem("UserLogin");
  const Fac_to_request = localStorage.getItem("Factory");
  const Service_ID = localStorage.getItem("datafixgroup");
  // const Service = localStorage.getItem("data_for_sevice");
  // LocalStorage สำหรับการรับค่าแบบ table
  const RQ = localStorage.getItem("ForRequester");
  const For_Req = JSON.parse(RQ);
  // console.log(For_Req, "For_ReqFor_ReqFor_ReqFor_ReqFor_Req");
  const Fam_no = For_Req[0];
  
  const Service = For_Req[13];
  const CC_for_request = For_Req[9];
  const Sts = For_Req[10];
   // console.log(Sts,"SSSSSSSS")
  const DATA = localStorage.getItem("forDetail"); // list สำหรับ Detail AssetCode หน้า Forrequest
  const DATA_FOR = JSON.parse(DATA);
  const fromdatatable = localStorage.getItem("TransForDetail"); //list สำหรับ TransferDetails
  const For_Trans = JSON.parse(fromdatatable);
  // console.log(For_Trans, "For_Trans");
  const fromrouting = localStorage.getItem("Routing"); //list สำหรับ TransferDetails
  const For_Rou = JSON.parse(fromrouting);
//  // console.log(For_Rou, "For_Rou");



const [user_login , setuser_login] = useState("");
const [Owner_Send, setOwner_Send] = useState("");

  // const [dataheader, setdataheader] = useState([]);
  const [datePlan, setdatePlan] = useState("");
  const [dataBoi_from, setdataBoi_from] = useState([]);

  const [datafac, setdatafac] = useState([]);
  const [selecteDatafac, setselecteDatafac] = useState("");

  const [cost, setcost] = useState([]);
  const [selectcost, setselectcost] = useState("");

  const [newowner, setnewowner] = useState([]);
  const [selectnewowner, setselectnewowner] = useState("");
  const [result1, setresult1] = useState("");

  const [department, setdepartment] = useState([]);
  const [selectdepartment, setselectdepartment] = useState("");

  const [service_by, setservice_by] = useState([]);
  const [selectservice_by, setselectservice_by] = useState("");

  const [boistaff, setboistaff] = useState([]);
  const [selectboistaff, setselectboistaff] = useState("");

  const [boimanager, setboimanager] = useState([]);
  const [selectboimanager, setselectboimanager] = useState("");

  const [fac_manager, setfac_manager] = useState([]);
  const [selectfac_manager, setselectfac_manager] = useState("");

  const [acc_check, setacc_check] = useState([]);
  const [selectacc_check, setselectacc_check] = useState("");

  const [acc_manager, setacc_manager] = useState([]);
  const [selectacc_manager, setselectacc_manager] = useState("");

  const [sts, setsts] = useState("");
  const [abnormal, setabnormal] = useState("");

  const [Tel_text, setTel_text] = useState("");
  const [tel_service, settel_service] = useState("");

  const [newboi, setnewboi] = useState("");
  // ตัวแปร Radio Routing
  // const [radio_dept, setradio_dept] = useState("");
  // const [radio_serviceby, setradio_serviceby] = useState("");
  // const [radio_boistaff, setradio_boistaff] = useState("");
  // const [radio_boimanager, setradio_boimanager] = useState("");
  // const [radio_facmanager, setradio_facmanager] = useState("");
  // const [radio_acc_check, setradio_acc_check] = useState("");
  // const [radio_owner, setradio_owner] = useState("");

  const [mgr_chk, setmgr_chk] = useState("hidden");

  // // console.log(New_own, "New_own");

  const Acc_mana = localStorage.getItem("ACC_Manager"); // เก็บแยก ไม่เก็บdata
  

  const keep = async () => {
   
   if (For_Req != null){
      if(For_Trans==null){
        // console.log("เข้าสาาา1",For_Trans)
        setuser_login(ReqBy);
        setOwner_Send(ReqBy);
       setselecteDatafac("");
       setselectcost("");
       setnewboi("");
       New_Owner("");
       setselectnewowner("");
       setresult1("");
       setTel_text("");
        setdatePlan("");
       setabnormal("");
       setsts("");
       setselectdepartment("");
       settel_service("");
       setselectservice_by("");
       setselectboistaff("");
       setselectboimanager("");
       setselectfac_manager("");
       setselectacc_check("");
       
       setselectacc_manager("");
      }
else{
  // console.log("เข้าสาาา2",For_Trans)
  setuser_login(For_Req[2])
  setOwner_Send(For_Req[2]);
setselecteDatafac(For_Trans[2]);
setselectcost(For_Trans[3]);
setnewboi(For_Trans[4]);
New_Owner(For_Trans[3], For_Trans[2]);
setselectnewowner(For_Trans[5]);
setresult1(For_Trans[6]);
setTel_text(For_Trans[7]); 
 setdatePlan(For_Trans[8]);
setabnormal(For_Trans[9]);
setsts(For_Trans[10]);

setselectdepartment(For_Rou[0]);
settel_service(For_Rou[1]);
setselectservice_by(For_Rou[2]);
setselectboistaff(For_Rou[3]);
setselectboimanager(For_Rou[4]);
setselectfac_manager(For_Rou[5]);
setselectacc_check(For_Rou[6]);

setselectacc_manager(Acc_mana);
}

      // เก็บแยก ไม่เก็บdata
   } 
  
  // else {
  //   // console.log("เข้าสาาา3",)
  //   setOwner_Send("");
  //   setselecteDatafac(For_Trans[2]);
  //   setselectcost(For_Trans[3]);
  //   setnewboi(For_Trans[4]);
  //   New_Owner(For_Trans[3], For_Trans[2]);
  //   setselectnewowner(For_Trans[5]);
  //   setresult1(For_Trans[6]);
  //   setTel_text(For_Trans[7]); 
  //    setdatePlan(For_Trans[8]);
  //   setabnormal(For_Trans[9]);
  //   setsts(For_Trans[10]);  
  //   setselectdepartment(For_Rou[0]);
  //   settel_service(For_Rou[1]);
  //   setselectservice_by(For_Rou[2]);
  //   setselectboistaff(For_Rou[3]);
  //   setselectboimanager(For_Rou[4]);
  //   setselectfac_manager(For_Rou[5]);
  //   setselectacc_check(For_Rou[6]);
    
  //   setselectacc_manager(Acc_mana); 
  // }
  };

  useEffect(() => {
    if(EditFam!=null){
      // console.log("-------------------------------")
      EditTrans();
      // EditUpload();
     }
    // console.log(">>>>>>>>>>>>>>>>>>", For_Trans);
    Factory();
    BOI_FROM();
    Costcenter();
    Department_Mana();
    Service_By();
    BOI_Staff();
    BOI_Manager();
    Fac_manager();
    ACC_Check();
    ACC_Manager();
    keep();
  }, []);

  const Telephone = (event) => {
    setTel_text(event.target.value);
    const dataTable = [
      ReqBy,
      dataBoi_from,
      selecteDatafac,
      selectcost,
      newboi,
      selectnewowner,
      result1,
      event.target.value,
      datePlan,
      abnormal,
      sts,

    ];
    
    const sentdata = JSON.stringify(dataTable);
    // // console.log(sentdata)
    localStorage.setItem("TransForDetail", sentdata);
  };

  const Tel_service = (event) => {
    settel_service(event.target.value);
    const data_Routing = [
      selectdepartment,    
      event.target.value,
      selectservice_by,
      selectboistaff,
      selectboimanager,
      selectfac_manager,
      selectacc_check,
    ];

    const sentdata = JSON.stringify(data_Routing);
    // ////// console.log(sentdata)
    localStorage.setItem("Routing", sentdata);
  };
  const handleDatePlan = (event) => {  
  setdatePlan(event.target.value);
  const dataTable = [
    ReqBy,
    dataBoi_from,
    selecteDatafac,
    selectcost,
    newboi,
    selectnewowner,
    result1,
    Tel_text,
    event.target.value,
    abnormal,
    sts,

  ];
  const sentdata = JSON.stringify(dataTable);
    // // console.log(sentdata)
    localStorage.setItem("TransForDetail", sentdata);
};
  const handleRadioDept_Mana = (event) => {
    setradio_dept(event.target.value);
    // // console.log("ค่า", event.target.value);
  };
  const handleRadioService_By = (event) => {
    setradio_serviceby(event.target.value);
  };
  const handleRadioBOI_Staff = (event) => {
    setradio_boistaff(event.target.value);
  };

  const handleRadioFac_Manager = (event) => {
    setradio_facmanager(event.target.value);
  };
  const handleRadioACC_Check = (event) => {
    setradio_acc_check(event.target.value);
  };
  const handleRadioOwner = (event) => {
    setradio_owner(event.target.value);
  };

  // From BOI PROJ
  const BOI_FROM = async () => {
    try {
      const response = await axios.get(
        `http://10.17.100.183:5000/select_BOI_from?running_no=${Fam_no}`
      );
      const data = response.data;
      setdataBoi_from(data[0][0]);
      // // console.log(data[0][0], "มาจาก fromBOI :");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  // Transfer to Factory
  const Factory = async () => {
    try {
      const response = await axios.get(`http://10.17.100.183:5000/getfactory`);
      const FactoryData = await response.data;
      setdatafac(FactoryData);
      // // console.log(FactoryData, "Factory");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleFactory = (event) => {
    setselecteDatafac(event.target.value);
    const dataTable = [
      ReqBy,
      dataBoi_from,
      event.target.value,
      selectcost,
      newboi,
      selectnewowner,
      result1,
      Tel_text,
      datePlan,
      abnormal,
      sts,

    ];

    const sentdata = JSON.stringify(dataTable);
    localStorage.setItem("TransForDetail", sentdata);
  };
  // Tranfer To CC
  const Costcenter = async () => {
    try {
      const response = await axios.get(`http://10.17.100.183:5000/cc_for_transfer`);
      const CostData = await response.data;
      setcost(CostData);

      // // console.log(CostData, "CostData :");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  // Newowner
  const handleCost = async (event) => {
    let Cost = event.target.value; //ตัวแปรสำหรับเก็บค่า selectCostที่จะเอาไปส่งให้ New owner
    //////// console.log(newboi,"<<<<<<<<<<<<<<")
    setselectcost(Cost);
    New_Owner(Cost, selecteDatafac);

    try {
      const response = await axios.get(
        `http://10.17.100.183:5000/new_boi?fac=${selecteDatafac}&cc=${Cost}`
      );
      const data = response.data;
      const boi = data.flat();
      // console.log(boi,"gggggggggggg")
      if (!boi || boi.length === 0) {
        setnewboi("NON BOI");
      } else {
        setnewboi(boi);
      }
      if (dataBoi_from == boi) {
        ////// console.log("เข้า1");
        setsts("N");
        setabnormal("");
        const dataTable = [
          ReqBy,
          dataBoi_from,
          selecteDatafac,
          event.target.value,
          boi,
          selectnewowner,
          result1,
          Tel_text,
          datePlan,
          "N",

        ];
        const sentdata = JSON.stringify(dataTable);

        localStorage.setItem("TransForDetail", sentdata);
      } else {
        ////// console.log("เข้า2");
        setsts("Y");
        const txt_abnormal = "Transfer to difference project";
        setabnormal(txt_abnormal);
        const dataTable = [
          ReqBy,
          dataBoi_from,
          selecteDatafac,
          event.target.value,
          boi,
          selectnewowner,
          result1,
          Tel_text,
          datePlan,
          txt_abnormal,
          "Y",

        ];
        const sentdata = JSON.stringify(dataTable);

        localStorage.setItem("TransForDetail", sentdata);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const New_Owner = async (cost, selectFac) => {
    try {
      const response = await axios.get(
        `http://10.17.100.183:5000/new_owner?fac=${selectFac}&cc=${cost}`
      );
      const data1 = await response.data;
      const data = response.data.flat();
      setnewowner(data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleNew_owner = (event) => {
    let New_own = event.target.value;
    const parts = New_own.split(":");
    let result = parts[1].trim();
    setselectnewowner(New_own); // เก็บ select ของ new owner
    setresult1(result);
    const dataTable = [
      ReqBy,
      dataBoi_from,
      selecteDatafac,
      selectcost,
      newboi,
      New_own,
      result,
      Tel_text,
      datePlan,
      abnormal,
      sts,

    ];
    const sentdata = JSON.stringify(dataTable);
    // console.log(sentdata);
    localStorage.setItem("TransForDetail", sentdata);
  };
  // Department Manager
  const Department_Mana = async () => {
    try {
      const response = await axios.get(
        `http://10.17.100.183:5000/level?level=${Fac_to_request}&cc=${CC_for_request}`
      );
      const data = response.data.flat();
      setdepartment(data);
      //// console.log("Department :", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleDepartment = (event) => {
    setselectdepartment(event.target.value);
    const data_Routing = [
      event.target.value,
      selectservice_by,
      tel_service,
      selectboistaff,
      selectboimanager,
      selectfac_manager,
      selectacc_check,
    ];

    const sentdata = JSON.stringify(data_Routing);
    // ////// console.log(sentdata)
    localStorage.setItem("Routing", sentdata);
  };
  // ServiceBy
  const Service_By = async () => {
    try {
      const response = await axios.get(
        `http://10.17.100.183:5000/service_by?level=${Fac_to_request}&cc=${Service_ID}`
      );
      //// console.log(response, "hhhhhhhhhhhhhhhhhha");
      const data = response.data.flat();
      setservice_by(data);
      //// console.log("setservice_by :", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleService_By = (event) => {
    setselectservice_by(event.target.value);
    const data_Routing = [
      selectdepartment,
      tel_service,    
      event.target.value,
      selectboistaff,
      selectboimanager,
      selectfac_manager,
      selectacc_check,
    ];

    const sentdata = JSON.stringify(data_Routing);
    localStorage.setItem("Routing", sentdata);
  };
  //BOI_Staff
  const BOI_Staff = async () => {
    try {
      const response = await axios.get(
        `http://10.17.100.183:5000/boi_staff?fac=${Fac_to_request}`
      );
      const data = response.data.flat();
      setboistaff(data);
      //// console.log("setboistaff :", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleBOI_Staff = (event) => {
    setselectboistaff(event.target.value);
    const data_Routing = [
      selectdepartment,
      tel_service,
      selectservice_by,
      event.target.value,
      selectboimanager,
      selectfac_manager,
      selectacc_check,
    ];
    const sentdata = JSON.stringify(data_Routing);
    localStorage.setItem("Routing", sentdata);
  };
  //BOI_Manager
  const BOI_Manager = async () => {
    try {
      const response = await axios.get(
        `http://10.17.100.183:5000/boi_manager?fac=${Fac_to_request}`
      );
      const data = response.data.flat();
      setboimanager(data);
      //// console.log("setboimanager :", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleBOI_Manager = (event) => {
    setselectboimanager(event.target.value);
    const data_Routing = [
      selectdepartment,
      tel_service,
      selectservice_by,
      selectboistaff,
      event.target.value,
      selectfac_manager,
      selectacc_check,
    ];
    const sentdata = JSON.stringify(data_Routing);
    localStorage.setItem("Routing", sentdata);
  };
  //Factory_Manager
  const Fac_manager = async () => {
    try {
      const response = await axios.get(
        `http://10.17.100.183:5000/fac_manager?fac=${Fac_to_request}`
      );
      const data = response.data.flat();
      setfac_manager(data);
      //// console.log("setboimanager :", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleFac_manager = (event) => {
    setselectfac_manager(event.target.value);
    const data_Routing = [
      selectdepartment,
      tel_service,
      selectservice_by,
      selectboistaff,
      selectboimanager,
      event.target.value,
      selectacc_check,
    ];
    const sentdata = JSON.stringify(data_Routing);
    localStorage.setItem("Routing", sentdata);
  };
  //ACC Check
  const ACC_Check = async () => {
    try {
      const response = await axios.get(
        `http://10.17.100.183:5000/acc_check?fac=${Fac_to_request}`
      );
      const data = response.data.flat();
      setacc_check(data);
      //// console.log("setboimanager :", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleACC_Check = (event) => {
    setselectacc_check(event.target.value);
    const data_Routing = [
      selectdepartment,
      tel_service,
      selectservice_by,
      selectboistaff,
      selectboimanager,
      selectfac_manager,
      event.target.value,
    ];
    const sentdata = JSON.stringify(data_Routing);
    localStorage.setItem("Routing", sentdata);
  };
  // ACC_Manager
  const ACC_Manager = async () => {
    try {
      const response = await axios.get(
        `http://10.17.100.183:5000/acc_manager?fac=${Fac_to_request}`
      );
      const data = response.data.flat();
      setacc_manager(data);
      //// console.log("setboimanager :", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleACC_Manager = (event) => {
    setselectacc_manager(event.target.value);
    localStorage.setItem("ACC_Manager", event.target.value);
  };
 


  const SAVE = async () => {
    const Plan_date = document.getElementById("Plan_Remove").value;
    const Tel = document.getElementById("Tel").value;
    const Tel_Service = document.getElementById("Tel_Service").value;
    // console.log(sts, "ssssssssssssssssssssssssss");
    // const setData_TransDetail = [
    //   Fam_no,
    //   Plan_date,
    //   selecteDatafac,
    //   newboi,
    //   result1,
    //   Tel,
    //   sts,
    //   abnormal,
    // ];
    // const data_for_detail = JSON.stringify(setData_TransDetail);
    // localStorage.setItem("TransDetails", data_for_detail);
    //// console.log("data_for_detail", data_for_detail);

    // const Fixcode = document.getElementById("Fixcode").value;
    // setFixcode1(Fixcode);

    try {
      const row = axios.post(
        // // console.log(New_BOI,"New_BOI")
        `http://10.17.100.183:5000/ins_transfer?running_no=${Fam_no}&date_plan=${Plan_date}&fac=${selecteDatafac}&cc=${selectcost}&to_proj=${newboi}&by=${result1}&tel=${Tel}&status=${sts}&abnormal=${abnormal}`
      );

      const data = row.data;
      setdataFixCode(data);
    } catch (error) {
      console.error("Error requesting data:", error);
    }
    try {
      const row = axios.post(
        // //// console.log(New_BOI,"New_BOI")
        `http://10.17.100.183:5000/routing_tran?running_no=${Fam_no}&m_dept=${selectdepartment}&s_dept=${Service_ID}&s_tel=${Tel_Service}&s_by=${selectservice_by}&chk_by=${selectboistaff}&boi_by=${selectboimanager}&fmby=${selectfac_manager}&acc_by=${selectacc_check}&own_by=${ReqBy}`
      );

      const data = row.data;
      //// console.log(data, "data");

      setdataFixCode(data);
    } catch (error) {
      //console.error("Error requesting data:", error);
    }
    try {
      const receiver = await axios.post(
        "http://10.17.100.183:5000/receiver_tranfer",
        {
          famno: Fam_no,
          receiver: result1,
        }
      );

      // const data = row.data;
      //     setdataFixCode(data);
    } catch (error) {
      //console.error("Error requesting data:", error);
    }
    try {
      const close_service = await axios.post(
        "http://10.17.100.183:5000/close_routing_tran",
        {
          famno: Fam_no,
          acc_record: selectacc_check,
          acc_manager: selectacc_manager,
          service_close_by: selectservice_by,
        }
      );

      // const data = row.data;
      //     setdataFixCode(data);
    } catch (error) {
      //console.error("Error requesting data:", error);
    }

    Swal.fire({
      title: "Save Success",
      icon: "success",
    });

    setOpen(true);
  };

  const SUBMIT = async () => {
    // if (Sts === "FLTR001") {
    //   const status_submit = "FLTR002";
    //   //// console.log(status_submit, "status_submit");
    //   //// console.log(Fam_no, "Fam_no");
    //   try {
    //     const response = await axios.post(
    //       "http://10.17.100.183:5000/update_submit",
    //       {
    //         famno: Fam_no,
    //         sts_submit: status_submit,
    //       }
    //     );
    //     Swal.fire({
    //       title: "Submit Success",
    //       icon: "success",
    //     });

    //     //// console.log(response.data, "Status submit successfully updated");
    //   } catch (error) {
    //     console.error("Error updating submit status:", error.message);
    //   }
    // } else if (Sts === "FLTR002") {
    //   const status_submit = "FLTR003";
    //   setmgr_chk("visible");
    //   //// console.log(status_submit, "status_submit");
    //   //// console.log(Fam_no, "Fam_no");
    //   try {
    //     const response = await axios.post(
    //       "http://10.17.100.183:5000/update_submit",
    //       {
    //         famno: Fam_no,
    //         sts_submit: status_submit,
    //       }
    //     );
    //     Swal.fire({
    //       title: "Submit Success",
    //       icon: "success",
    //     });

    //     //// console.log(response.data, "Status submit successfully updated");
    //   } catch (error) {
    //     console.error("Error updating submit status:", error.message);
    //   }
    // }
    if (ReqBy == "") {
      // ส่ง error หรือทำอย่างอื่นที่ต้องการเมื่อมีค่าใน array ที่ส่งมาเป็น null
      console.error("Error: One or more arrays contain null values.");
      // ตัวอย่างการแสดงข้อความ error ด้วย Swal
      Swal.fire({
        title: "Error",
        text: "One or more arrays contain null values.",
        icon: "error",
      });
    } else {
      // ทำงานตามปกติเมื่อไม่มีค่าใน array ที่ส่งมาเป็น null
      // console.log(Sts,"")
      if (Sts === "FLTR001") {
        const status_submit = "FLTR002";
        try {
              const response = await axios.post(
                "http://10.17.100.183:5000/update_submit",
                {
                  famno: Fam_no,
                  sts_submit: status_submit,
                }
              );
              Swal.fire({
                title: "Submit Success",
                icon: "success",
              });
      
              //// console.log(response.data, "Status submit successfully updated");
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
      } else if (Sts === "FLTR002") {
        const status_submit = "FLTR003";
        
      }
    }
  };
  //getEdit_Trans
  const EditTrans = async () => {
    // console.log(EditFam,"EditFamKHUNNNN")
      try {
        const response = await axios
          .get(
            `http://10.17.100.183:5000/getEdit_Trans?FamNo=${EditFam}`
          );
          const data = await response.data;
          // console.log(data,"dataaaaaaaaSSSSSSSSSSSS")
          const date = new Date(data[0][8]); // สร้างวัตถุ Date จากวันที่
          const month = date.getMonth() + 1;
          const formattedMonth = month < 10 ? '0' + month : month; // เดือน (จำนวนเดือนเริ่มจาก 0)
          const day = date.getDate(); // วัน
          const formattedDay = day < 10 ? '0' + day : day;
          const year = date.getFullYear(); // ปี
          const formattedDate = `${formattedMonth}/${formattedDay}/${year}`;
          const DataTrans = [
            data[0][1], 
            data[0][2],
            data[0][3],
            data[0][4],
            data[0][5],
            data[0][6],
            data[0][7],
            data[0][8],
            formattedDate,
            data[0][10],
            data[0][11],
     
          ]
          const DataRouting = [
            data[0][12],
            data[0][17],
            data[0][18],
            data[0][22],
            data[0][26],
            data[0][30],
            data[0][34],
            data[0][38],
            data[0][42]
     
          ]
          // console.log(DataTrans,"<<<<<<<<<<<<<")
          const data_trans = JSON.stringify(DataTrans);
          localStorage.setItem("TransForDetail", data_trans);
          const data_routing = JSON.stringify(DataRouting);
          localStorage.setItem("Routing", data_routing);
      } catch (error) {
        console.error("Error during login:", error);
      }
    };

  const A = "Sucha";
  // const B = "FLTR001";
  return (
    
    <> 
    
    <div style={{ marginTop: "100px" }}>
        <Header />
      </div>

      <div>
        <Card className="Style100">
          <Card
            sx={{
              borderRadius: "8px",
              border: 2,
              borderColor: "rgba(64,131,65, 1.5)",
              boxShadow: "0px 4px 8px rgba(64,131,65, 0.4)",
            }}
            className="Style1"
          >
            <Typography
              sx={{
                position: "absolute",
                backgroundColor: "#fff",
                marginTop: "-0.5%",
                marginRight: "85%",
                width: "8%",
                display: "flex",

                justifyContent: "center",
              }}
            >
              Tranfer Detail
            </Typography>
            <div className="Style2">
              <table className="Style3">
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Owner (Send from) :</td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        value={user_login}
                        disabled
                      />
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl></FormControl>
                  </td>
                  <td className="Style7">From BOI Project :</td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        value={dataBoi_from}
                        disabled
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Transfer to Factory :</td>
                  <td>
                    <FormControl className="Style1">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selecteDatafac}
                        onChange={handleFactory}
                        size="small"
                      >
                        {datafac.map((option, index) => (
                          <MenuItem key={index} value={option[0]}>
                            {option[1]}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl></FormControl>
                  </td>
                  <td className="Style7">Tranfer to CC :</td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectcost}
                        onChange={handleCost}
                        size="small"
                      >
                        {cost.map((option, index) => (
                          <MenuItem key={index} value={option[0]}>
                            {option[0]}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">New BOI Project :</td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        defaultValue=""
                        size="small"
                        value={newboi}
                        onChange={(e) => setnewboi(e.target.value)}
                        disabled
                      />
                    </FormControl>
                  </td>
                  <td className="Style5"></td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">New Owner :</td>
                  <td>
                    <FormControl className="Style1">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectnewowner}
                        onChange={handleNew_owner}
                        size="small"
                      >
                        {/* <MenuItem value={"ALL"}>ALL</MenuItem> */}
                        {newowner.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl></FormControl>
                  </td>
                  <td className="Style7">Tel :</td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="Tel"
                        onChange={Telephone}
                        value={Tel_text}
                        size="small"
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Plan Remove Date :</td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        id="Plan_Remove"
                        // defaultValue=""
                        size="small"
                        type="date"
                        onChange={handleDatePlan}
                        value={datePlan}
                      />
                    </FormControl>
                  </td>
                  <td className="Style5"></td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Tranfer Abnormal :</td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        value={abnormal}
                        disabled
                      />
                    </FormControl>
                  </td>
                </tr>
              </table>
            </div>
          </Card>
        </Card>
        <Card className="Style100">
          <Card
            sx={{
              borderRadius: "8px",
              border: 2,
              borderColor: "rgba(64,131,65, 1.5)",
              boxShadow: "0px 4px 8px rgba(64,131,65, 0.4)",
              marginTop: 4,
            }}
            className="Style1"
          >
            <Typography
              sx={{
                position: "absolute",
                backgroundColor: "#fff",
                marginTop: "-0.5%",
                marginRight: "85%",
                width: "8%",
                display: "flex",

                justifyContent: "center",
              }}
            >
              Routing
            </Typography>
            <div className="Style2">
              <table className="Style3">
                {/* Department Manager */}
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Department Manager :</td>

                  <td>
                    <FormControl className="Style3">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectdepartment}
                        onChange={handleDepartment}
                        size="small"
                      >
                        {department.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                  {Sts != "FLTR001" && radio_dept !== ReqBy && (
                    <>
                      <td className="Style5">
                        <FormControl>
                          <RadioGroup
                            row
                            id="RadioDept_Manager"
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={radio_dept}
                            onChange={handleRadioDept_Mana}
                          >
                            <FormControlLabel
                              value="Approve"
                              control={<Radio size="small" />}
                              label="Approve"
                              //  disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR001')}
                            />
                            <FormControlLabel
                              value="Reject"
                              // disable
                              control={<Radio size="small" />}
                              label="Reject"
                              // disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR002')}
                            />
                          </RadioGroup>
                        </FormControl>
                      </td>
                      <td className="Style7">Action Date :</td>
                      <td className="Style6">
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            disabled
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                          />
                        </FormControl>
                      </td>
                    </>
                  )}
                </tr>
                {Sts != "FLTR001" && radio_dept == ReqBy && (
                  <>
                    <tr>
                      <th colSpan={5}></th>
                      <td className="Style4">Comment :</td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            disabled
                          />
                        </FormControl>
                      </td>
                    </tr>
                  </>
                )}
                {/* Sevice Dept */}
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Service Dept :</td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        sx={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        value={Service}
                        // onChange={handleService}
                      />
                    </FormControl>
                  </td>
                  <td className="Style5"></td>
                  <td className="Style7">Tel :</td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        id="Tel_Service"
                        defaultValue=""
                        size="small"
                        onChange={Tel_service}
                        value={tel_service}
                      />
                    </FormControl>
                  </td>
                </tr>
                {/* Servide By */}
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Service By :</td>
                  <td>
                    <FormControl className="Style3">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectservice_by}
                        onChange={handleService_By}
                        size="small"
                      >
                        {service_by.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                  {Sts != "FLTR001" && radio_dept == ReqBy && (
                    <>
                      <td className="Style5">
                        <FormControl>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={radio_serviceby}
                            onChange={handleRadioService_By}
                            // style={{ marginLeft: "20px" }}
                          >
                            <FormControlLabel
                              value="Accept"
                              control={<Radio size="small" />}
                              label="Accept"
                              disabled
                            />
                            <FormControlLabel
                              value="Not Accept"
                              // disabled
                              control={<Radio size="small" />}
                              label="Not Accept"
                              disabled
                            />
                          </RadioGroup>
                        </FormControl>
                      </td>
                      <td className="Style7">Action Date :</td>
                      <td className="Style6">
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            disabled
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                          />
                        </FormControl>
                      </td>{" "}
                    </>
                  )}
                </tr>
                {Sts != "FLTR001" && radio_dept == ReqBy && (
                  <>
                    <tr>
                      <th colSpan={5}></th>
                      <td className="Style4">Comment :</td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            disabled
                          />
                        </FormControl>
                      </td>
                    </tr>
                  </>
                )}
                {/* BOI Staff */}
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">BOI Staff :</td>
                  <td>
                    <FormControl className="Style3">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectboistaff}
                        onChange={handleBOI_Staff}
                        size="small"
                      >
                        {boistaff.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                  {Sts != "FLTR001" && radio_dept == ReqBy && (
                    <>
                      <td className="Style5">
                        <FormControl>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={radio_boistaff}
                            onChange={handleRadioBOI_Staff}
                          >
                            <FormControlLabel
                              value="Accept"
                              control={<Radio size="small" />}
                              label="Accept"
                              disabled
                            />
                            <FormControlLabel
                              value="Not Accept"
                              // disabled
                              control={<Radio size="small" />}
                              label="Not Accept"
                              disabled
                            />
                          </RadioGroup>
                        </FormControl>
                      </td>
                      <td className="Style7">Action Date :</td>
                      <td className="Style6">
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            disabled
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                          />
                        </FormControl>
                      </td>{" "}
                    </>
                  )}
                </tr>
                {Sts != "FLTR001" && radio_dept == ReqBy && (
                  <>
                    {" "}
                    <tr>
                      <th colSpan={5}></th>
                      <td className="Style4">Comment :</td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            disabled
                          />
                        </FormControl>
                      </td>
                    </tr>{" "}
                  </>
                )}
                {/* BOI Manager */}
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">BOI Manager :</td>
                  <td>
                    <FormControl className="Style3">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectboimanager}
                        onChange={handleBOI_Manager}
                        size="small"
                      >
                        {boimanager.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                  {Sts != "FLTR001" && radio_dept == ReqBy &&  (
                    <>
                      <td className="Style5">
                        <FormControl>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            // style={{ marginLeft: "20px" }}
                          >
                            <FormControlLabel
                              value="Approve"
                              control={<Radio size="small" />}
                              label="Approve"
                              disabled
                            />
                            <FormControlLabel
                              value="Reject"
                              // disabled
                              control={<Radio size="small" />}
                              label="Reject"
                              disabled
                            />
                          </RadioGroup>
                        </FormControl>
                      </td>
                      <td className="Style7">Action Date :</td>
                      <td className="Style6">
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            disabled
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                          />
                        </FormControl>
                      </td>{" "}
                    </>
                  )}
                </tr>

                {Sts != "FLTR001" && radio_dept == ReqBy &&  (
                  <>
                    {" "}
                    <tr>
                      <th colSpan={5}></th>
                      <td className="Style4">Comment :</td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            disabled
                          />
                        </FormControl>
                      </td>
                    </tr>
                  </>
                )}
                {/* Factory Manager */}

                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Factory Manager :</td>
                  <td>
                    <FormControl className="Style3">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectfac_manager}
                        onChange={handleFac_manager}
                        size="small"
                      >
                        {fac_manager.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                  {Sts != "FLTR001" && radio_dept == ReqBy &&  (
                    <>
                      <td className="Style5">
                        <FormControl>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={radio_facmanager}
                            onChange={handleRadioFac_Manager}
                          >
                            <FormControlLabel
                              value="Approve"
                              control={<Radio size="small" />}
                              label="Approve"
                              disabled
                            />
                            <FormControlLabel
                              value="Reject"
                              // disabled
                              control={<Radio size="small" />}
                              label="Reject"
                              disabled
                            />
                          </RadioGroup>
                        </FormControl>
                      </td>

                      <td className="Style7">Action Date :</td>
                      <td className="Style6">
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            disabled
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                          />
                        </FormControl>
                      </td>
                    </>
                  )}
                </tr>
                {Sts != "FLTR001" &&  radio_dept == ReqBy && (
                  <>
                    <tr>
                      <th colSpan={5}></th>
                      <td className="Style4">Comment :</td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            disabled
                          />
                        </FormControl>
                      </td>
                    </tr>
                  </>
                )}
                {/* ACC Check */}
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">ACC Check :</td>
                  <td>
                    <FormControl className="Style3">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectacc_check}
                        onChange={handleACC_Check}
                        size="small"
                      >
                        {acc_check.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                  {Sts != "FLTR001" && radio_dept == ReqBy && (
                    <>
                      <td className="Style5">
                        <FormControl>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={radio_acc_check}
                            onChange={handleRadioACC_Check}
                            // style={{ marginLeft: "20px" }}
                          >
                            <FormControlLabel
                              value="Accept"
                              control={<Radio size="small" />}
                              label="Accept"
                              disabled
                            />
                            <FormControlLabel
                              value="Not Accept"
                              // disabled
                              control={<Radio size="small" />}
                              label="Not Accept"
                              disabled
                            />
                          </RadioGroup>
                        </FormControl>
                      </td>
                      <td className="Style7">Action Date :</td>
                      <td className="Style6">
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            disabled
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                          />
                        </FormControl>
                      </td>
                    </>
                  )}
                </tr>
                {Sts != "FLTR001" && radio_dept == ReqBy && (
                  <>
                    <tr>
                      <th colSpan={5}></th>
                      <td className="Style4">Comment :</td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            disabled
                          />
                        </FormControl>
                      </td>
                    </tr>{" "}
                  </>
                )}
                {/* Owner */}

                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Owner :</td>
                  <td>
                    <FormControl className="Style3">
                      <TextField
                        value={Owner_Send}
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                  {Sts != "FLTR001" && radio_dept == ReqBy && (
                    <>
                      <td className="Style5">
                        <FormControl>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={radio_owner}
                            onChange={handleRadioOwner}
                            // style={{ marginLeft: "20px" }}
                          >
                            <FormControlLabel
                              value="Approve"
                              control={<Radio size="small" />}
                              label="Approve"
                              disabled
                            />
                            <FormControlLabel
                              value="Reject"
                              // disabled
                              control={<Radio size="small" />}
                              label="Reject"
                              disabled
                            />
                          </RadioGroup>
                        </FormControl>
                      </td>
                      <td className="Style7">Action Date :</td>
                      <td className="Style6">
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            disabled
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                          />
                        </FormControl>
                      </td>{" "}
                    </>
                  )}
                </tr>
                {Sts != "FLTR001" &&  radio_dept == ReqBy && (
                  <>
                    <tr>
                      <th colSpan={5}></th>
                      <td className="Style4">Comment :</td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            disabled
                          />
                        </FormControl>
                      </td>
                    </tr>{" "}
                  </>
                )}
              </table>
            </div>
          </Card>
        </Card>
        <Card className="Style100">
          <Card
            sx={{
              borderRadius: "8px",
              border: 2,
              borderColor: "rgba(64,131,65, 1.5)",
              boxShadow: "0px 4px 8px rgba(64,131,65, 0.4)",
              marginTop: 4,
            }}
            className="Style1"
          >
            <Typography
              sx={{
                position: "absolute",

                marginTop: "-0.5%",
                marginRight: "85%",
                width: "8%",
                display: "flex",
                border: 0,

                justifyContent: "center",
              }}
            ></Typography>
            <div className="Style2">
              <table className="Style3">
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Receiver :</td>
                  <td>
                    <FormControl className="Style3">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        value={result1}
                        disabled
                        sx={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>

                  {Sts != "FLTR001" ?  (
                    <>
                      <td className="Style5">
                        <FormControl>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            <FormControlLabel
                              value="Approve"
                              control={<Radio size="small" />}
                              label="Approve"
                              disabled
                            />
                            <FormControlLabel
                              value="Reject"
                              control={<Radio size="small" />}
                              label="Reject"
                              disabled
                            />
                          </RadioGroup>
                        </FormControl>
                      </td>
                      <td className="Style7">Action Date :</td>
                      <td className="Style6">
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            disabled
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                          />
                        </FormControl>
                      </td>
                    </>
                  ) : (
                    <>
                      <td style={{ width: "280px" }}></td>

                      <td className="Style5"></td>
                      <td className="Style7"></td>
                      <td className="Style6">
                        <FormControl className="Style1"></FormControl>
                      </td>
                    </>
                  )}
                </tr>
                {Sts != "FLTR001" ? (
                  <>
                    <tr>
                      <th colSpan={5}></th>
                      <td className="Style4">Comment :</td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            disabled
                          />
                        </FormControl>
                      </td>
                    </tr>
                  </>
                ) : (
                  <></>
                )}
              </table>
            </div>
          </Card>
        </Card>
        <Card className="Style100">
          <Card
            sx={{
              borderRadius: "8px",
              border: 2,
              borderColor: "rgba(64,131,65, 1.5)",
              boxShadow: "0px 4px 8px rgba(64,131,65, 0.4)",
              marginTop: 4,
            }}
            className="Style1"
          >
            <Typography
              sx={{
                position: "absolute",
                backgroundColor: "#fff",
                marginTop: "-0.5%",
                marginRight: "85%",
                width: "8%",
                display: "flex",
                border: 1,
                borderColor: "rgba(64,131,65, 1.5)",
                boxShadow: "0px 4px 8px rgba(64,131,65, 0.4)",
                justifyContent: "center",
              }}
            >
              Close Routing
            </Typography>
            <div className="Style2">
              <table className="Style3">
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">ACC Record :</td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        value={selectacc_check}
                        disabled
                        sx={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                  {Sts != "FLTR001" ? (
                    <>
                      <td className="Style5">
                        <FormControl>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            // style={{ marginLeft: "20px" }}
                          >
                            <FormControlLabel
                              value="Approve"
                              control={<Radio size="small" />}
                              label="Approve"
                              disabled
                            />
                            <FormControlLabel
                              value="Reject"
                              // disabled
                              control={<Radio size="small" />}
                              label="Reject"
                              disabled
                            />
                          </RadioGroup>
                        </FormControl>
                      </td>
                      <td className="Style7">Action Date :</td>
                      <td className="Style6">
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            disabled
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                          />
                        </FormControl>
                      </td>
                    </>
                  ) : (
                    <>
                      <td style={{ width: "280px" }}></td>

                      <td className="Style5"></td>
                      <td className="Style7"></td>
                      <td className="Style6">
                        <FormControl className="Style1"></FormControl>
                      </td>
                    </>
                  )}
                </tr>
                {Sts != "FLTR001" &&  radio_dept == ReqBy &&  (
                  <>
                    <tr>
                      <th colSpan={5}></th>
                      <td className="Style4">Comment :</td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            disabled
                          />
                        </FormControl>
                      </td>
                    </tr>
                  </>
                )}
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">ACC Manager :</td>
                  <td>
                    <FormControl className="Style3">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectacc_manager}
                        onChange={handleACC_Manager}
                        size="small"
                      >
                        {acc_manager.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                  {Sts != "FLTR001" &&  radio_dept == ReqBy &&  (
                    <>
                      <td className="Style5">
                        <FormControl>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            // style={{ marginLeft: "20px" }}
                          >
                            <FormControlLabel
                              value="Approve"
                              control={<Radio size="small" />}
                              label="Approve"
                              disabled
                            />
                            <FormControlLabel
                              value="Reject"
                              // disabled
                              control={<Radio size="small" />}
                              label="Reject"
                              disabled
                            />
                          </RadioGroup>
                        </FormControl>
                      </td>
                      <td className="Style7">Action Date :</td>
                      <td className="Style6">
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            disabled
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                          />
                        </FormControl>
                      </td>{" "}
                    </>
                  )}
                </tr>
                {Sts != "FLTR001" &&  radio_dept == ReqBy &&  (
                  <>
                    <tr>
                      <th colSpan={5}></th>
                      <td className="Style4">Comment :</td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            disabled
                          />
                        </FormControl>
                      </td>
                    </tr>
                  </>
                )}
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Service Close By :</td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        value={selectservice_by}
                        sx={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                  {Sts != "FLTR001" &&  radio_dept == ReqBy &&  (
                    <>
                      <td className="Style5">
                        <FormControl>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            // style={{ marginLeft: "20px" }}
                          >
                            <FormControlLabel
                              value="Approve"
                              control={<Radio size="small" />}
                              label="Approve"
                              disabled
                            />
                            <FormControlLabel
                              value="Reject"
                              // disabled
                              control={<Radio size="small" />}
                              label="Reject"
                              disabled
                            />
                          </RadioGroup>
                        </FormControl>
                      </td>
                      <td className="Style7">Action Date :</td>
                      <td className="Style6">
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            disabled
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                          />
                        </FormControl>
                      </td>{" "}
                    </>
                  )}
                </tr>
                {Sts != "FLTR001" &&  radio_dept == ReqBy &&  (
                  <>
                    <tr>
                      <th colSpan={5}></th>
                      <td className="Style4">Comment :</td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            disabled
                          />
                        </FormControl>
                      </td>
                    </tr>{" "}
                  </>
                )}
              </table>
            </div>
          </Card>
        </Card>
      </div>
      <div>
        <div className="Style8">
          <Box>
            <tr>
              <td>
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  className="Style9"
                  onClick={SAVE}
                >
                  Save
                </Button>
              </td>
              <td>
                <Button
                  variant="contained"
                  size="medium"
                  color="success"
                  className="Style9"
                  onClick={SUBMIT}
                >
                  Submit
                </Button>
              </td>
              <td>
                <Button variant="contained" size="medium" color="error">
                  Reset
                </Button>
              </td>
            </tr>
          </Box>
        </div>
      </div>
    </>
  );
}

export default TransFerDetail;



// const [radio_dept, setradio_dept] = useState("");
// const [radio_serviceby, setradio_serviceby] = useState("");


 //onChange={(e) => setownersend(e.target.value)}