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
  const EditFam = localStorage.getItem("EDIT");
  const ForRequester = localStorage.getItem("ForRequester");
  const For_Req = JSON.parse(ForRequester);

  // //console.log(For_Req,"For_Req")
  const For_Fixed_Asst = localStorage.getItem("forDetail");
  const For_Fix = JSON.parse(For_Fixed_Asst);

  const Edit_trans = localStorage.getItem("Edit_Trans");
  const For_edit_trans = JSON.parse(Edit_trans);

  const For_edit_request = localStorage.getItem("For_Req_Edit");
  const For_Rq_Edit = JSON.parse(For_edit_request);
  console.log(For_Rq_Edit, "For_Rq_EditFor_Rq_EditFor_Rq_Edit");

  const ForTransfer = localStorage.getItem("For_Transfer");
  const For_Trans = JSON.parse(ForTransfer);

  const Routing = localStorage.getItem("For_Routing");
  const For_Rou = JSON.parse(Routing);

  const Edit_rout = localStorage.getItem("Edit_routing");
  const For_Edit_Rou = JSON.parse(Edit_rout);

  let Fam_list = "";
  let servivedept = "";
  const SERVICEDEPT = () => {
    setservice_dept(servivedept);
  };
  ////console.log("servivedept", servivedept);
  ////console.log(For_Req, "For_Rq_Edit");

  // const owner_send = For_Req[1];
  if (ForRequester !== null) {
    Fam_list = For_Req[0];
    servivedept = For_Req[8] + ":" + For_Req[9];
  } else {
    Fam_list = For_Rq_Edit[0];
    servivedept = For_Rq_Edit[9] + ":" + For_Rq_Edit[13];
  }
  ////console.log(For_Req, "For_Req");
  const [ownersend, setownersend] = useState("");
  const [trans_factory, settrans_factory] = useState([]);
  const [selecttrans_factory, setselecttrans_factory] = useState("");
  const [trans_cc, settrans_cc] = useState([]);
  const [selecttrans_cc, setselecttrans_cc] = useState("");
  const [new_boi, setnew_boi] = useState("");
  const [data_fromboi, setdata_fromboi] = useState("");
  const [new_owner, setnew_owner] = useState([]);
  const [selectnew_owner, setselectnew_owner] = useState("");
  const [receiver, setreceiver] = useState("");
  const [sts, setsts] = useState("");
  const [abnormal, setabnormal] = useState("");
  const [Tel_for_trans, setTel_for_trans] = useState("");
  const [plan_date, setplan_date] = useState("");
  const [department_mana, setdepartment_mana] = useState([]);
  const [selectdepartment_mana, setselectdepartment_mana] = useState("");
  const [service_dept, setservice_dept] = useState("");
  const [service_by, setservice_by] = useState([]);
  const [selectservice_by, setselectservice_by] = useState("");
  const [boi_staff, setboi_staff] = useState([]);
  const [selectboi_staff, setselectboi_staff] = useState("");
  const [boi_manager, setboi_manager] = useState([]);
  const [selectboi_manager, setselectboi_manager] = useState("");
  const [fac_manager, setfac_manager] = useState([]);
  const [selectfac_manager, setselectfac_manager] = useState("");
  const [acc_check, setacc_check] = useState([]);
  const [selectacc_check, setselectacc_check] = useState("");
  const [owner_roting, setowner_roting] = useState("");
  const [acc_manager, setacc_manager] = useState([]);
  const [selectacc_manager, setselectacc_manager] = useState("");
  const [Tel_service, setTel_service] = useState("");

  useEffect(() => {
    FactoryCC();
    TransCC();
    BOI_FROM();
    // useef();

    Department_Mana();
    SERVICEDEPT();
    Service_By();
    BOI_Staff();
    BOI_Manager();
    Fac_manager();
    ACC_Check();
    ACC_Manager();

    if (EditFam != null) {
      Edit_Trans();
      Edit_Routing();
      if (For_Rq_Edit != null) {
        setownersend(For_Rq_Edit[2]);
        if (For_edit_trans != null) {
          setnew_boi(For_edit_trans[0][2]);
          New_Owner(For_edit_trans[0][1], For_edit_trans[0][0]);
          setselectnew_owner(For_edit_trans[0][9]);
          setabnormal(For_edit_trans[0][6]);
          setTel_for_trans(For_edit_trans[0][4]);
          setreceiver(For_edit_trans[0][3]);
          setplan_date(For_edit_trans[0][5]);
          // setของ Edit Trans
          if (For_Edit_Rou != null) {
            console.log("Edit Routingggggggggggggg", For_Edit_Rou[0][0]);
          }
        }
      }
    } else {
      //console.log("LLLLLLLLLLLLLLLLLLLLLLL",For_Trans);
      if (For_Trans != null) {
        //กรณี new หลังจากกด save แล้ว
        // setownersend(For_Trans[1]);
        //console.log("มีข้อมูลแล้วนะคะะะะะะะะะะะะะะะะะะะะะ");
        setownersend(For_Req[1]);
        setowner_roting(For_Req[1]);
        setdata_fromboi(For_Trans[2]);
        // setselecttrans_factory(For_Trans[3]);
        //setselecttrans_cc(For_Trans[4]);
        setnew_boi(For_Trans[5]);
        New_Owner(For_Trans[4], For_Trans[3]);
        setselectnew_owner(For_Trans[6]);
        setTel_for_trans(For_Trans[7]);
        setplan_date(For_Trans[8]);
        setabnormal(For_Trans[9]);
        setreceiver(For_Trans[10]);

        if (For_Rou != null) {
          //console.log("Rotingggggggggggggggg");
          //setselectdepartment_mana(For_Rou[1]);
          setTel_service(For_Rou[3]);
          setselectservice_by(For_Rou[4]);
          setselectboi_staff(For_Rou[5]);
          setselectboi_manager(For_Rou[6]);
          setselectfac_manager(For_Rou[7]);
          setselectacc_check(For_Rou[8]);
          setowner_roting(For_Rou[9]);
          setselectacc_manager(For_Rou[10]);
        }
      } else {
        if (For_Req != null) {
          //console.log(For_Req, "มาแล้ววววววววววววววววววววววว");
          //กรณี new โดยที่ไม่มีค่าอะไรเลย
          setownersend(For_Req[1]);
          setowner_roting(For_Req[1]);
          setdata_fromboi("");
          // setselecttrans_factory("");
          // setselecttrans_cc("");
          setnew_boi("");
          setselectnew_owner("");
          setTel_for_trans("");
          setplan_date("");
          setabnormal("");
          setreceiver("");
        }
      }
    }

    // if (For_Trans !== null) {

    //   // setownersend(For_Trans[1]);
    //   // setnew_boi(For_Trans[5]);
    //   // New_Owner(For_Trans[4], For_Trans[3]);
    //   // setselectnew_owner(For_Trans[6]);
    //   // setreceiver(For_Trans[10]);
    //   // setabnormal(For_Trans[9]);
    //   // setTel_for_trans(For_Trans[7]);
    // }
    // // setownersend(For_Req[1]);
    // // setowner_roting(For_Req[1]);

    // if (For_Rou !== null) {
    //   setselectdepartment_mana(For_Rou[1]);
    //   setTel_service(For_Rou[3]);
    //   setselectservice_by(For_Rou[4]);
    //   setselectboi_staff(For_Rou[5]);
    //   setselectboi_manager(For_Rou[6]);
    //   setselectfac_manager(For_Rou[7]);
    //   setselectacc_check(For_Rou[8]);
    //   setowner_roting(For_Rou[9]);
    //   setselectacc_manager(For_Rou[10]);
    // }
  }, []);

  const useef = () => {
    if (EditFam !== null) {
      //console.log(EditFam, "EditFamแก้ไขมาแล้วจ้า");
      if (For_edit_trans !== null) {
        //console.log("7777777777777777777777777", For_edit_trans[0][0]);
      } else {
        // setownersend(For_Req[1]);
        // setowner_roting(For_Req[1]);
        // if (For_Rou !== null) {
        //   setselectdepartment_mana(For_Rou[1]);
        //   setTel_service(For_Rou[3]);
        //   setselectservice_by(For_Rou[4]);
        //   setselectboi_staff(For_Rou[5]);
        //   setselectboi_manager(For_Rou[6]);
        //   setselectfac_manager(For_Rou[7]);
        //   setselectacc_check(For_Rou[8]);
        //   setowner_roting(For_Rou[9]);
        //   setselectacc_manager(For_Rou[10]);
        // }
      }
      // } else if (For_Req !== null) {
      //   //console.log("มีข้อมูลของ For_Req")
      //   setownersend(For_Req[1]);
      //   setowner_roting(For_Req[1]); // สำหรับ routing
      //   if( For_Trans !== null){
      //     //console.log("มีข้อมูลของ forTrans")
      //     setownersend(For_Trans[1]);
      //     setdata_fromboi(For_Trans[2]);
      //     setselecttrans_factory(For_Trans[3]);
      //     setselecttrans_cc(For_Trans[4]);
      //     setselectnew_owner(For_Trans[6]);
      //     setTel_for_trans(For_Trans[7]);
      //     setplan_date(For_Trans[8]);

      //   }
      //   //console.log("มีข้อมูลเลยจ้าาาาาาาาาาาาาาาาาาา")
      //     setdata_fromboi("");
      //     setselecttrans_factory("");
      //     setselecttrans_cc("");
      //     setnew_boi("");
      //     setselectnew_owner("");
      //     setTel_for_trans("");
      //     setplan_date("");
      //     setabnormal("");
      //     setreceiver("")

      // }
    }
  };

  const FactoryCC = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/getfactory`);
      const FactoryData = await response.data;
      settrans_factory(FactoryData);
      if (EditFam != null) {
        if (For_edit_trans != null)
          setselecttrans_factory(For_edit_trans[0][0]);
      } else {
        if (For_Req != null) {
          setselecttrans_factory(For_Trans[3]);
        } else {
          setselecttrans_factory("");
        }
      }
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };
  const TransCC = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/cc_for_transfer`);
      const data = await response.data;
      settrans_cc(data);
      if (EditFam != null) {
        if (For_edit_trans != null)
          console.log(For_edit_trans[0][1], "For_edit_trans[0][1]");
        setselecttrans_cc(For_edit_trans[0][1]);
      } else {
        if (For_Req != null) {
          setselecttrans_cc(For_Trans[4]);
        } else {
          setselecttrans_cc("");
        }
      }
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };
  const BOI_FROM = async () => {
    //console.log(Fam_list, "Fam_no");
    try {
      const response = await axios.get(
        `http://localhost:5000/select_BOI_from?running_no=${Fam_list}`
      );
      const data = response.data;
      //console.log(data, "fROM boi");
      setdata_fromboi(data[0][0]);
      //console.log(data[0][0], "fROM boi");
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };
  const handleNew_BOI = async (event) => {
    let transCC = event.target.value;
    setselecttrans_cc(event.target.value);
    New_Owner(transCC, selecttrans_factory);

    //console.log(transCC, "CC ข้อมูล", selecttrans_factory, "Fac มา");
    try {
      const response = await axios.get(
        `http://localhost:5000/new_boi?fac=${selecttrans_factory}&cc=${transCC}`
      );
      const data = response.data;
      const boi = data.flat();
      setnew_boi(boi);
      //console.log("jjjjjjj", boi);

      if (!boi || boi.length === 0) {
        setnew_boi("NON BOI");
      } else {
        setnew_boi(boi);
      }
      if (data_fromboi == boi) {
        //////console.log("เข้า1");
        setsts("N");
        setabnormal("");
      } else {
        setsts("Y");
        setabnormal("Transfer to difference project");
      }
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };
  const New_Owner = async (selecttrans_cc, selecttrans_factory) => {
    //console.log(selecttrans_cc, "selecttrans_cc", selecttrans_factory);
    try {
      const response = await axios.get(
        `http://localhost:5000/new_owner?fac=${selecttrans_factory}&cc=${selecttrans_cc}`
      );
      const data = response.data.flat();
      setnew_owner(data);
      //console.log("dataaa>>>", data, "''''''''", [For_Trans[6]]);
      // if (For_Req != null) {
      //   setnew_owner([For_Trans[6]])
      // } else {

      // }
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };

  const handleNewOwner = (event) => {
    //console.log(event.target.value, "iiiiiiiiiiiiiiiiiiii");
    let New_own = event.target.value;
    const parts = New_own.split(":");
    let result = parts[1].trim();
    setselectnew_owner(New_own); // เก็บ select ของ new owner
    setreceiver(result);
    //console.log(result, "result");
  };
  //Department Manager
  const Department_Mana = async () => {
    let level = "";
    let cc = "";
     if (EditFam != null) {

      if (For_edit_trans != null) {
       
        level = For_Rq_Edit[14];
        cc = For_Rq_Edit[5];
      }
    } else {
      level = For_Req[3];
      cc = For_Req[4];
    }


    try {
      const response = await axios.get(
        `http://localhost:5000/level?level=${level}&cc=${cc}`
      );
      const data = response.data.flat();
      setdepartment_mana(data);

      if (EditFam != null) {
        if (For_Edit_Rou != null) {
          setselectdepartment_mana([For_Edit_Rou[0][0]]);
        }
      } else {
        if (For_Req != null) {
          setselectdepartment_mana(For_Rou[1]);
        } else {
          setselectdepartment_mana("");
        }
      }
    } catch (error) {
      //console.log("Department :", data);
      //console.error("Error during login:", error);
    }
  };
  //  const Data_Deptment = async (level,cc) =>{

  //   try {
  //     const response = await axios.get(
  //       `http://localhost:5000/level?level=${level}&cc=${cc}`
  //     );
  //     const data = response.data.flat();
  //     setdepartment_mana(data);
  //     console.log(EditFam,"setdepartment_mana",data)
  //    if(EditFam != null){
  //     console.log(EditFam,"มาแล้วจ้าแก้เนี่ย",For_Edit_Rou[0][0])
  //     if(For_Edit_Rou != null){
  //       console.log(EditFam,"มาแล้วจ้าแก้เนี่ย55555555555",For_Edit_Rou[0][0])
  //       setselectdepartment_mana([For_Edit_Rou[0][0]]);
  //        }
  //    }
  //    else{
  //     if (For_Req != null) {

  //       setselectdepartment_mana(For_Rou[1]);

  //     } else {
  //       setselectdepartment_mana("");
  //     }
  //    }

  //     }
  //     //console.log("Department :", data);
  //    catch (error) {
  //     //console.error("Error during login:", error);
  //   }
  //  }

  const Service_By = async () => {
    let level = "";
    let cc = "";
    if (EditFam != null) {

      if (For_edit_trans != null) {
       
        level = For_Rq_Edit[14];
        cc = For_Rq_Edit[5];
      }
    } else {
      level = For_Req[3];
      cc = For_Req[4];
    }
    try {
      const response = await axios.get(
        `http://localhost:5000/service_by?level=${level}&cc=${cc}`
      );
      const data = response.data.flat();
      setservice_by(data);
      if (EditFam != null) {
        if (For_Edit_Rou != null) {
          setselectservice_by([For_Edit_Rou[0][5]]);
        }
      } else {
        if (For_Req != null) {
          setselectservice_by(For_Rou[4]);
        } else {
          setselectservice_by("");
        }
      }
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };

  //////////////////////////////////  แก้ไขขขข //////////////////////////////
  // const BOI_Staff = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:5000/boi_staff?fac=${For_Req[3]}`
  //     );
  //     const data = response.data.flat();
  //     setboi_staff(data);
  //     ////console.log("setboistaff :", data);
  //   } catch (error) {
  //     //console.error("Error during login:", error);
  //   }
  // };
  //////////////////////////////////////////////////
  // const BOI_Manager = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:5000/boi_manager?fac=${For_Req[3]}`
  //     );
  //     const data = response.data.flat();
  //     setboi_manager(data);
  //     ////console.log("setboimanager :", data);
  //   } catch (error) {
  //     //console.error("Error during login:", error);
  //   }
  // };
  ///////////////////////////////////////////////////
  // const Fac_manager = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:5000/fac_manager?fac=${For_Req[3]}`
  //     );
  //     const data = response.data.flat();
  //     setfac_manager(data);
  //     ////console.log("setboimanager :", data);
  //   } catch (error) {
  //     //console.error("Error during login:", error);
  //   }
  // };
  ////////////////////////////
  // const ACC_Check = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:5000/acc_check?fac=${For_Req[3]}`
  //     );
  //     const data = response.data.flat();
  //     setacc_check(data);
  //     //console.log("setboimanager :", data);
  //   } catch (error) {
  //     //console.error("Error during login:", error);
  //   }
  // };
  ////////////////////////
  // const ACC_Manager = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:5000/acc_manager?fac=${For_Req[3]}`
  //     );
  //     const data = response.data.flat();
  //     setacc_manager(data);
  //   } catch (error) {
  //     //console.error("Error during login:", error);
  //   }
  // };
  ///////////////// แก้ไข ///////////////////////////////////////////////////////////////
  const BOI_Staff = async () => {
    let level = "";
    if (EditFam != null) {
      if (For_edit_trans != null) {
        level = For_Rq_Edit[0][14];
      }
    } else {
      console.log("เช้าใหม่นะคะ BOI ค่ะ");
      level = For_Req[3];
    }
    try {
      const response = await axios.get(
        `http://localhost:5000/boi_staff?fac=${level}`
      );
      const data = response.data.flat();
      setboi_staff(data);
      ////console.log("setboistaff :", data);
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };

  const BOI_Manager = async () => {
    let level = "";
    if (EditFam != null) {
      if (For_edit_trans != null) {
        level = For_Rq_Edit[0][14];
      }
    } else {
      level = For_Req[3];
    }
    try {
      const response = await axios.get(
        `http://localhost:5000/boi_manager?fac=${level}`
      );
      const data = response.data.flat();
      setboi_manager(data);
      ////console.log("setboimanager :", data);
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };

  const Fac_manager = async () => {
    let level = "";
    if (EditFam != null) {
      if (For_edit_trans != null) {
        level = For_Rq_Edit[0][14];
      }
    } else {
      level = For_Req[3];
    }
    try {
      const response = await axios.get(
        `http://localhost:5000/fac_manager?fac=${level}`
      );
      const data = response.data.flat();
      setfac_manager(data);
      ////console.log("setboimanager :", data);
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };

  const ACC_Check = async () => {
    let level = "";
    if (EditFam != null) {
      if (For_edit_trans != null) {
        level = For_Rq_Edit[0][14];
      }
    } else {
      level = For_Req[3];
    }
    try {
      const response = await axios.get(
        `http://localhost:5000/acc_check?fac=${level}`
      );
      const data = response.data.flat();
      setacc_check(data);
      //console.log("setboimanager :", data);
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };

  const ACC_Manager = async () => {
    let level = "";
    if (EditFam != null) {
      if (For_edit_trans != null) {
        level = For_Rq_Edit[0][14];
      }
    } else {
      level = For_Req[3];
    }
    try {
      const response = await axios.get(
        `http://localhost:5000/acc_manager?fac=${level}`
      );
      const data = response.data.flat();
      setacc_manager(data);
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };
  const handleRadioDept_Mana = (event) => {
    setradio_dept(event.target.value);
    // console.log("ค่า", event.target.value);
  };

  const SAVE = async () => {
    // tablelist จากตาง Req_Tranfer_Details
    let ServiceDept = "";
    if (EditFam != null) {
      if (For_Rq_Edit[9] != null) {
        ServiceDept = For_Rq_Edit[9];
      }
    } else {
      ServiceDept = For_Req[8];
    }
    //console.log(ServiceDept,"ServiceDeptServiceDept")
    const setData_forTranfer_Req_Tranfer_Details = [
      Fam_list,
      ownersend,
      data_fromboi,
      selecttrans_factory,
      selecttrans_cc,
      new_boi,
      [selectnew_owner],
      Tel_for_trans,
      plan_date,
      abnormal,
      receiver,
    ];
    const sentdata = JSON.stringify(setData_forTranfer_Req_Tranfer_Details);
    localStorage.setItem("For_Transfer", sentdata);

    const set_data_for_req_details = [
      Fam_list,
      selectdepartment_mana,
      ServiceDept,
      Tel_service,
      selectservice_by,
      selectboi_staff,
      selectboi_manager,
      selectfac_manager,
      selectacc_check,
      owner_roting,
      selectacc_manager,
      selectservice_by,
    ];
    const sendheader = JSON.stringify(set_data_for_req_details);
    localStorage.setItem("For_Routing", sendheader);
    // //console.log(
    //   setData_forTranfer_Req_Tranfer_Details,
    //   "setData_forTranfer_Req_Tranfer_Details"
    // );
    try {
      const row = axios.post(
        // //console.log(New_BOI,"New_BOI")
        `http://localhost:5000/ins_transfer?running_no=${Fam_list}&date_plan=${plan_date}&fac=${selecttrans_factory}&cc=${selecttrans_cc}&to_proj=${new_boi}&by=${receiver}&tel=${Tel_for_trans}&status=${sts}&abnormal=${abnormal}`
      );
    } catch (error) {
      //console.error("Error requesting data:", error);
    }
    try {
      const row = axios.post(
        // ////console.log(New_BOI,"New_BOI")
        `http://localhost:5000/routing_tran?running_no=${Fam_list}&m_dept=${selectdepartment_mana}&s_dept=${ServiceDept}&s_tel=${Tel_service}&s_by=${selectservice_by}&chk_by=${selectboi_staff}&boi_by=${selectboi_manager}&fmby=${selectfac_manager}&acc_by=${selectacc_check}&own_by=${owner_roting}&acc_record=${owner_roting}&acc_manager=${selectacc_manager}&service_close_by=${selectservice_by}`
      );
    } catch (error) {
      ////console.error("Error requesting data:", error);
    }

    Swal.fire({
      title: "Save Success",
      icon: "success",
    });

    setOpen(true);
  };

  const SUBMIT = async () => {
    if (
      For_Req[0] &&
      For_Req[2] &&
      For_Req[5] &&
      For_Req[6] &&
      For_Req[7] &&
      For_Req[8] &&
      For_Req[9] &&
      For_Req[10] &&
      For_Trans[0] &&
      For_Trans[3] &&
      For_Trans[4] &&
      For_Trans[5] &&
      // For_Trans[7] &&
      For_Trans[8] &&
      For_Trans[9] &&
      For_Trans[10] &&
      For_Rou[1] &&
      For_Rou[3] &&
      For_Rou[4] &&
      For_Rou[5] &&
      For_Rou[7] &&
      For_Rou[8] &&
      For_Rou[9] &&
      For_Rou[10]
    ) {
      Swal.fire({
        title: "Submit Success",
        icon: "success",
      });
    } else {
      try {
        const row = axios.post(
          // ////console.log(New_BOI,"New_BOI")
          `http://localhost:5000/routing_tran?running_no=${Fam_list}&m_dept=${selectdepartment_mana}&s_dept=${For_Req[8]}&s_tel=${Tel_service}&s_by=${selectservice_by}&chk_by=${selectboi_staff}&boi_by=${selectboi_manager}&fmby=${selectfac_manager}&acc_by=${selectacc_check}&own_by=${owner_roting}&acc_record=${owner_roting}&acc_manager=${selectacc_manager}&service_close_by=${selectservice_by}`
        );
      } catch (error) {
        ////console.error("Error requesting data:", error);
      }
      Swal.fire({
        title: "ใส่ข้อมูลไม่ครบ",
        icon: "Error",
      });
    }
  };
  const Edit_Trans = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/getEdit_Trans?FamNo=${EditFam}`
      );
      const data = await response.data;

      // console.log(data, "dataaaaaaaaSSSSSSSSSSSS");

      // const DataEdit = data;
      const data_edit = JSON.stringify(data);
      localStorage.setItem("Edit_Trans", data_edit);
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };
  const Edit_Routing = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/getEdit_routing?FamNo=${EditFam}`
      );
      const data = await response.data;

      console.log(data, "dataaaaaaaaSSSSSSSSSSSS");

      // const DataEdit = data;
      const data_edit = JSON.stringify(data);
      localStorage.setItem("Edit_routing", data_edit);
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };

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
                        size="small"
                        disabled
                        value={ownersend}
                        onChange={(e) => setownersend(e.target.value)}
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
                        defaultFactoryValue=""
                        size="small"
                        value={data_fromboi}
                        onChange={(e) => setdata_fromboi(e.target.value)}
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
                        value={selecttrans_factory}
                        onChange={(e) => setselecttrans_factory(e.target.value)}
                        size="small"
                      >
                        {trans_factory.map((option, index) => (
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
                        value={selecttrans_cc}
                        onChange={handleNew_BOI}
                        size="small"
                      >
                        {trans_cc.map((option, index) => (
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
                        value={new_boi}
                        onChange={(e) => setnew_boi(e.target.value)}
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
                        value={selectnew_owner}
                        onChange={handleNewOwner}
                        size="small"
                      >
                        {new_owner.map((option, index) => (
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
                        value={Tel_for_trans}
                        onChange={(e) => setTel_for_trans(e.target.value)}
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
                        value={plan_date}
                        onChange={(e) => setplan_date(e.target.value)}
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
                        onChange={(e) => setabnormal(e.target.value)}
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
                        value={selectdepartment_mana}
                        onChange={(e) =>
                          setselectdepartment_mana(e.target.value)
                        }
                        size="small"
                      >
                        {department_mana.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>

                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        id="RadioDept_Manager"
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        // value={radio_dept}
                        onChange={handleRadioDept_Mana}
                      >
                        <FormControlLabel
                          value="Approve"
                          control={<Radio size="small" />}
                          label="Approve"
                          // disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR001')}
                        />
                        <FormControlLabel
                          value="Reject"
                          disable
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
                </tr>
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
                        value={service_dept}
                        onChange={(e) => setservice_dept(e.target.value)}
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
                        value={Tel_service}
                        onChange={(e) => setTel_service(e.target.value)}
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
                        onChange={(e) => setselectservice_by(e.target.value)}
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
                  <td className="Style5">
                    <FormControl>
                      {/* <RadioGroup
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
                          </RadioGroup> */}
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
                </tr>
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
                {/* BOI Staff */}
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">BOI Staff :</td>
                  <td>
                    <FormControl className="Style3">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectboi_staff}
                        onChange={(e) => setselectboi_staff(e.target.value)}
                        size="small"
                      >
                        {boi_staff.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      {/* <RadioGroup
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
                          </RadioGroup> */}
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
                </tr>
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
                {/* BOI Manager */}
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">BOI Manager :</td>
                  <td>
                    <FormControl className="Style3">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectboi_manager}
                        onChange={(e) => setselectboi_manager(e.target.value)}
                        size="small"
                      >
                        {boi_manager.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      {/* <RadioGroup
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
                          </RadioGroup> */}
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
                </tr>
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
                        onChange={(e) => setselectfac_manager(e.target.value)}
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

                  <td className="Style5">
                    <FormControl>
                      {/* <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            // value={radio_facmanager}
                            // onChange={handleRadioFac_Manager}
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
                          </RadioGroup> */}
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
                </tr>
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
                        onChange={(e) => setselectacc_check(e.target.value)}
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

                  <td className="Style5">
                    <FormControl>
                      {/* <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            // value={radio_acc_check}
                            // onChange={handleRadioACC_Check}
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
                          </RadioGroup> */}
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
                </tr>
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
                {/* Owner */}
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Owner :</td>
                  <td>
                    <FormControl className="Style3">
                      <TextField
                        //value={Owner_Send}
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        value={owner_roting}
                        onChange={(e) => setowner_roting(e.target.value)}
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      {/* <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            // value={radio_owner}
                            // onChange={handleRadioOwner}
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
                          </RadioGroup> */}
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
                </tr>
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
                        value={receiver}
                        onChange={(e) => setreceiver(e.target.value)}
                        disabled
                        sx={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>

                  <td className="Style5">
                    <FormControl>
                      {/* <RadioGroup
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
                          </RadioGroup> */}
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
                </tr>

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
                        onChange={(e) => setselectacc_check(e.target.value)}
                        disabled
                        sx={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      {/* <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                           style={{ marginLeft: "20px" }}
                        >
                          <FormControlLabel
                            value="Approve"
                            control={<Radio size="small" />}
                            label="Approve"
                          />
                          <FormControlLabel
                            value="Reject"
                             disabled
                            control={<Radio size="small" />}
                            label="Reject"
                          />
                        </RadioGroup> */}
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
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Comment :</td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">ACC Manager :</td>
                  <td>
                    <FormControl className="Style3">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectacc_manager}
                        onChange={(e) => setselectacc_manager(e.target.value)}
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
                  <td className="Style5">
                    <FormControl>
                      {/* <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                           style={{ marginLeft: "20px" }}
                        >
                          <FormControlLabel
                            value="Approve"
                            control={<Radio size="small" />}
                            label="Approve"
                          />
                          <FormControlLabel
                            value="Reject"
                            disabled
                            control={<Radio size="small" />}
                            label="Reject"
                          />
                        </RadioGroup> */}
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
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Comment :</td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Service Close By :</td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        value={selectservice_by}
                        onChange={(e) => setselectservice_by(e.target.value)}
                        disabled
                        sx={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      {/* <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                           style={{ marginLeft: "20px" }}
                        >
                          <FormControlLabel
                            value="Approve"
                            control={<Radio size="small" />}
                            label="Approve"
                          />
                          <FormControlLabel
                            value="Reject"
                             disabled
                            control={<Radio size="small" />}
                            label="Reject"
                          />
                        </RadioGroup> */}
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
                </tr>
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Comment :</td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                      />
                    </FormControl>
                  </td>
                </tr>
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
        <table>
          <tr>
            <td>
              {" "}
              <Button
                style={{
                  width: "200px",
                  display: "inline-block",
                }}
                variant="contained"
                onClick={() => window.history.back()}
              >
                Back
              </Button>
            </td>
            <td>
              {" "}
              <Button
                style={{
                  width: "200px",
                  display: "inline-block",
                }}
                variant="contained"
                // onClick={NextPage}
              >
                Next Page
              </Button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default TransFerDetail;
