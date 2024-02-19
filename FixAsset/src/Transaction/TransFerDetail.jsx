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
  FormHelperText
} from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
import { LocalActivity, SaveAlt } from "@mui/icons-material";
import Header from "../Page/Hearder";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { ConsoleSqlOutlined } from "@ant-design/icons";

function TransFerDetail() {
  const EditFam = localStorage.getItem("EDIT");
  const navigate = useNavigate();
  const ForRequester = localStorage.getItem("ForRequester");
  const For_Req = JSON.parse(ForRequester);
 // console.log(For_Req, "For_Req");
  const For_Fixed_Asst = localStorage.getItem("forDetail");
  const For_Fix = JSON.parse(For_Fixed_Asst);

  const Edit_trans = localStorage.getItem("Edit_Trans");
  const For_edit_trans = JSON.parse(Edit_trans);
  //console.log(For_edit_trans,"For_edit_trans")

  const For_edit_request = localStorage.getItem("For_Req_Edit");
  const For_Rq_Edit = JSON.parse(For_edit_request);
  console.log(For_Rq_Edit, "For_Req_Edit");

  const ForTransfer = localStorage.getItem("For_Transfer");
  const For_Trans = JSON.parse(ForTransfer);

  const Routing = localStorage.getItem("For_Routing");
  const For_Rou = JSON.parse(Routing);

  const Edit_rout = localStorage.getItem("Edit_routing");
  const For_Edit_Rou = JSON.parse(Edit_rout);
  //console.log("For_Edit_Rou",For_Edit_Rou)

  let Fam_list = "";
  let servivedept = "";

  const SERVICEDEPT = () => {
    setservice_dept(servivedept);
  };
  ////// console("servivedept", servivedept);
  ////// console(For_Req, "For_Rq_Edit");

  // const owner_send = For_Req[1];
  if (ForRequester !== null) {
    Fam_list = For_Req[0];
    servivedept = For_Req[8] + ":" + For_Req[9];
  } else {
    Fam_list = For_Rq_Edit[0];
    servivedept = For_Rq_Edit[9] + ":" + For_Rq_Edit[13];
  }
  ////// console(For_Req, "For_Req");
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
  // radio button
  const [radio_dept, setradio_dept] = useState("");
  const [radio_serviceby, setradio_serviceby] = useState("");
  const [radio_boistaff, setradio_boistaff] = useState("");
  const [radio_boimanager, setradio_boimanager] = useState("");
  const [radio_facmanager, setradio_facmanager] = useState("");
  const [radio_acc_check, setradio_acc_check] = useState("");
  const [radio_owner, setradio_owner] = useState("");
  const [radio_receiver, setradio_receiver] = useState("");
  const [radio_record, setradio_record] = useState("");
  const [radio_acc_manager, setradio_acc_manager] = useState("");
  const [radio_service_close_by, setradio_service_close_by] = useState("");
  // select button
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
  //Error
  const [ErrorTel, setErrorTel] = useState(false); //
  const [ErrorFac, setErrorFac] = useState(false);
  const [ErrorCC, setErrorCC] = useState(false);
  const [ErrorNewOwn, setErrorNewOwn] = useState(false);
  const [ErrorManager, setErrorManager] = useState(false);
  const [ErrorService_by, setErrorService_by] = useState(false);
  const [ErrorBoi_Staff, setErrorBoi_Staff] = useState(false);
  const [ErrorBoi_manager, setErrorBoi_manager] = useState(false);
  const [ErrorMana_Fac, setErrorMana_Fac] = useState(false);
  const [ErrorAcc_check, setErrorAcc_check] = useState(false);
  const [ErrorAcc_Mana, setErrorAcc_Mana] = useState(false);
  const [ErrorTel_service, setErrorTel_service] = useState(false);
  const [ErrorTel_Rq, setErrorTel_Rq] = useState(false);
  const [ErrorDept, setErrorDept] = useState(false);

  // check button 
  const [btnsave , setbtnsave] = useState("visible")



  
  const [checkrdo, setcheckrdo] = useState("hidden");

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
      // Edit_Trans();
      // Edit_Routing();
      // console("มาจ้าาาาา9999999",For_Rq_Edit[0])
      if (For_Rq_Edit != null) {
        setownersend(For_Rq_Edit[2]);
        // console.log(For_edit_trans[0][4]);
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
            // console("Edit Routingggggggggggggg", For_Edit_Rou[0][0]);
            setowner_roting(For_Rq_Edit[2]);
            setTel_service(For_Edit_Rou[0][7]);
          }
        }
      }
    } else {
      //// console("LLLLLLLLLLLLLLLLLLLLLLL",For_Trans);
      if (For_Trans != null) {
        setownersend(For_Req[1]);
        setowner_roting(For_Req[1]);
        setdata_fromboi(For_Trans[2]);
        setnew_boi(For_Trans[5]);
        New_Owner(For_Trans[4], For_Trans[3]);
        setselectnew_owner(For_Trans[6]);
        setTel_for_trans(For_Trans[7]);
        setplan_date(For_Trans[8]);
        setabnormal(For_Trans[9]);
        setreceiver(For_Trans[10]);

        if (For_Rou != null) {
          setTel_service(For_Rou[3]);
          setowner_roting(For_Rou[9]);
        }
      } else {
        if (For_Req != null) {
          setownersend(For_Req[1]);
          setowner_roting(For_Req[1]);
          setdata_fromboi("");
          setnew_boi("");
          setselectnew_owner("");
          setTel_for_trans("");
          setplan_date("");
          setabnormal("");
          setreceiver("");
        }
      }
    }
  }, []);

  // const useef = () => {
  //   if (EditFam !== null) {

  //     if (For_edit_trans !== null) {

  //     } else {
  //       // setownersend(For_Req[1]);
  //       // setowner_roting(For_Req[1]);
  //       // if (For_Rou !== null) {
  //       //   setselectdepartment_mana(For_Rou[1]);
  //       //   setTel_service(For_Rou[3]);
  //       //   setselectservice_by(For_Rou[4]);
  //       //   setselectboi_staff(For_Rou[5]);
  //       //   setselectboi_manager(For_Rou[6]);
  //       //   setselectfac_manager(For_Rou[7]);
  //       //   setselectacc_check(For_Rou[8]);
  //       //   setowner_roting(For_Rou[9]);
  //       //   setselectacc_manager(For_Rou[10]);
  //       // }
  //     }
  //     // } else if (For_Req !== null) {
  //     //   //// console("มีข้อมูลของ For_Req")
  //     //   setownersend(For_Req[1]);
  //     //   setowner_roting(For_Req[1]); // สำหรับ routing
  //     //   if( For_Trans !== null){
  //     //     //// console("มีข้อมูลของ forTrans")
  //     //     setownersend(For_Trans[1]);
  //     //     setdata_fromboi(For_Trans[2]);
  //     //     setselecttrans_factory(For_Trans[3]);
  //     //     setselecttrans_cc(For_Trans[4]);
  //     //     setselectnew_owner(For_Trans[6]);
  //     //     setTel_for_trans(For_Trans[7]);
  //     //     setplan_date(For_Trans[8]);

  //     //   }
  //     //   //// console("มีข้อมูลเลยจ้าาาาาาาาาาาาาาาาาาา")
  //     //     setdata_fromboi("");
  //     //     setselecttrans_factory("");
  //     //     setselecttrans_cc("");
  //     //     setnew_boi("");
  //     //     setselectnew_owner("");
  //     //     setTel_for_trans("");
  //     //     setplan_date("");
  //     //     setabnormal("");
  //     //     setreceiver("")

  //     // }
  //   }
  // };

  const FactoryCC = async () => {
    setErrorFac(false);
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
      console.error("Error during login:", error);
    }
  };
  const handleFactoryCC = async (event) => {
    setselecttrans_factory(event.target.value);

    console.log(For_edit_trans, "rrrrr");
    if (EditFam != null) {
      if (For_edit_trans) console.log(">>>>>>>>..", event.target.value);
      const data = [
        event.target.value,
        For_edit_trans[1],
        For_edit_trans[2],
        For_edit_trans[4],
        For_edit_trans[5],
        For_edit_trans[6],
        For_edit_trans[7],
        For_edit_trans[8],
        For_edit_trans[9],
      ];

      const data_edit = JSON.stringify(data);
      console.log("/////////////////");
      localStorage.setItem("Edit_Trans", data_edit);
      //edit
    } else {
      //insert
      console.log("------bbbbbb---------");

      if (For_Req[0] == "" && For_Req[0] == null) {
        // ยังไม่genfam
        console.log("------>>>>>>>>>>>>>>>>---------");
        const setData_forTranfer_Req_Tranfer_Details = [
          Fam_list,
          ownersend,
          data_fromboi,
          "",
          "",
          new_boi,
          [selectnew_owner],
          "",
          plan_date,
          abnormal,
          receiver,
        ];
        const sentdata = JSON.stringify(setData_forTranfer_Req_Tranfer_Details);
        localStorage.setItem("For_Transfer", sentdata);
      } else {
        console.log("------///////////----------", For_Trans);
        const setData_forTranfer_Req_Tranfer_Details = [
          For_Trans[0],
          For_Trans[1],
          For_Trans[2],
          event.target.value,
          For_Trans[4],
          For_Trans[5],
          For_Trans[6],
          For_Trans[7],
          For_Trans[8],
          For_Trans[9],
          For_Trans[10],
        ];
        const sentdata = JSON.stringify(setData_forTranfer_Req_Tranfer_Details);
        localStorage.setItem("For_Transfer", sentdata); //  insert Tranfer
      }
    }
  };

  const TransCC = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/cc_for_transfer`);
      const data = await response.data;
      settrans_cc(data);
      if (EditFam != null) {
        if (For_edit_trans != null) setselecttrans_cc(For_edit_trans[0][1]);
      } else {
        if (For_Req != null) {
          setselecttrans_cc(For_Trans[4]);
        } else {
          setselecttrans_cc("");
        }
      }
    } catch (error) {}
  };
  const BOI_FROM = async () => {
    //// console(Fam_list, "Fam_no");
    try {
      const response = await axios.get(
        `http://localhost:5000/select_BOI_from?running_no=${Fam_list}`
      );
      const data = response.data;
      //// console(data, "fROM boi");
      setdata_fromboi(data[0][0]);
      //// console(data[0][0], "fROM boi");
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };
  const handleNew_BOI = async (event) => {
    let transCC = event.target.value;
    setErrorCC(false);
    setselecttrans_cc(event.target.value);
    New_Owner(transCC, selecttrans_factory);

    try {
      const response = await axios.get(
        `http://localhost:5000/new_boi?fac=${selecttrans_factory}&cc=${transCC}`
      );
      const data = response.data;
      const boi = data.flat();
      setnew_boi(boi);

      if (!boi || boi.length === 0) {
        setnew_boi("NON BOI");
      } else {
        setnew_boi(boi);
      }
      if (data_fromboi == boi) {
        setsts("N");
        setabnormal("");
      } else {
        setsts("Y");
        setabnormal("Transfer to difference project");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const New_Owner = async (selecttrans_cc, selecttrans_factory) => {
    //// console(selecttrans_cc, "selecttrans_cc", selecttrans_factory);

    try {
      const response = await axios.get(
        `http://localhost:5000/new_owner?fac=${selecttrans_factory}&cc=${selecttrans_cc}`
      );
      const data = response.data.flat();
      setnew_owner(data);
      //// console("dataaa>>>", data, "''''''''", [For_Trans[6]]);
      // if (For_Req != null) {
      //   setnew_owner([For_Trans[6]])
      // } else {

      // }
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };

  const handleNewOwner = (event) => {
    let New_own = event.target.value;
    const parts = New_own.split(":");
    let result = parts[1].trim();
    setselectnew_owner(New_own); // เก็บ select ของ new owner
    setreceiver(result);
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
      //// console("Department :", data);
      //console.error("Error during login:", error);
    }
  };
  

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
  //     ////// console("setboistaff :", data);
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
  //     ////// console("setboimanager :", data);
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
  //     ////// console("setboimanager :", data);
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
  //     //// console("setboimanager :", data);
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
        level = For_Rq_Edit[14];
      }
    } else {
      level = For_Req[3];
    }
    try {
      const response = await axios.get(
        `http://localhost:5000/boi_staff?fac=${level}`
      );
      const data = response.data.flat();
      setboi_staff(data);
      if (EditFam != null) {
        if (For_Edit_Rou != null) {
          setselectboi_staff([For_Edit_Rou[0][8]]);
        }
      } else {
        if (For_Req != null) {
          setselectboi_staff(For_Rou[5]);
        } else {
          setselectboi_staff("");
        }
      }
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };

  const BOI_Manager = async () => {
    let level = "";
    if (EditFam != null) {
      if (For_edit_trans != null) {
        level = For_Rq_Edit[14];
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
      if (EditFam != null) {
        if (For_Edit_Rou != null) {
          setselectboi_manager([For_Edit_Rou[0][12]]);
        }
      } else {
        if (For_Req != null) {
          setselectboi_manager(For_Rou[6]);
        } else {
          setselectboi_manager("");
        }
      }
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };

  const Fac_manager = async () => {
    let level = "";
    if (EditFam != null) {
      if (For_edit_trans != null) {
        level = For_Rq_Edit[14];
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
      if (EditFam != null) {
        if (For_Edit_Rou != null) {
          setselectfac_manager([For_Edit_Rou[0][16]]);
        }
      } else {
        if (For_Req != null) {
          setselectfac_manager(For_Rou[7]);
        } else {
          setselectfac_manager("");
        }
      }
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };

  const ACC_Check = async () => {
    let level = "";
    if (EditFam != null) {
      if (For_edit_trans != null) {
        level = For_Rq_Edit[14];
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
      if (EditFam != null) {
        if (For_Edit_Rou != null) {
          setselectacc_check([For_Edit_Rou[0][20]]);
        }
      } else {
        if (For_Req != null) {
          setselectacc_check(For_Rou[8]);
        } else {
          setselectacc_check("");
        }
      }
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };

  const ACC_Manager = async () => {
    let level = "";
    if (EditFam != null) {
      if (For_edit_trans != null) {
        level = For_Rq_Edit[14];
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
      if (EditFam != null) {
        if (For_Edit_Rou != null) {
          setselectacc_manager([For_Edit_Rou[0][28]]);
        }
      } else {
        if (For_Req != null) {
          setselectacc_manager(For_Rou[10]);
        } else {
          setselectacc_manager("");
        }
      }
    } catch (error) {
      //console.error("Error during login:", error);
    }
  };

  const SAVE = async () => {

    let ServiceDept = "";
    if (EditFam != null) {
      if (For_Rq_Edit[9] != null) {
        ServiceDept = For_Rq_Edit[9];
      }
    } else {
      ServiceDept = For_Req[8];
    }

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

    if (EditFam != null) {
      try {
        const row = axios.post(
          `http://localhost:5000/ins_transfer?running_no=${EditFam}&date_plan=${plan_date}&fac=${selecttrans_factory}&cc=${selecttrans_cc}&to_proj=${new_boi}&by=${receiver}&tel=${Tel_for_trans}&status=${sts}&abnormal=${abnormal}`
        );
      } catch (error) {
        //console.error("Error requesting data:", error);
      }
      try {
        const row = axios.post(
          `http://localhost:5000/routing_tran?running_no=${EditFam}&m_dept=${selectdepartment_mana}&s_dept=${ServiceDept}&s_tel=${Tel_service}&s_by=${selectservice_by}&chk_by=${selectboi_staff}&boi_by=${selectboi_manager}&fmby=${selectfac_manager}&acc_by=${selectacc_check}&own_by=${owner_roting}&acc_record=${owner_roting}&acc_manager=${selectacc_manager}&service_close_by=${selectservice_by}`
        );
      } catch (error) {
        //console.error("Error requesting data:", error);
      }
      try {
        const response = await axios.post(
          `http://localhost:5000/update_date?tranfer=${EditFam}`
        );
        //// console(data, "data");
      } catch (error) {
        //console.error("Error during login:", error);
      }
    } else {
      try {
        const response = await axios.post(
          `http://localhost:5000/create_date?tranfer=${Fam_list}`
        );
      } catch (error) {
        //console.error("Error during login:", error);
      }
    }

    try {
      const row = axios.post(
        // //// console(New_BOI,"New_BOI")
        `http://localhost:5000/ins_transfer?running_no=${Fam_list}&date_plan=${plan_date}&fac=${selecttrans_factory}&cc=${selecttrans_cc}&to_proj=${new_boi}&by=${receiver}&tel=${Tel_for_trans}&status=${sts}&abnormal=${abnormal}`
      );
    } catch (error) {
      //console.error("Error requesting data:", error);
    }
    try {
      const row = axios.post(
        // ////// console(New_BOI,"New_BOI")
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
    if (EditFam != null) {
      if (
        For_Rq_Edit[3] === null ||
        For_Rq_Edit[3] === undefined ||
        For_Rq_Edit[3] === ""
      ) 
      {
        
        setErrorTel_Rq(true);
        alert("ข้อมูลไม่สมบูรณ์: Tel For Requester"); 
        navigate("/ForRe");
        return;
       
      } 
      else {
        setErrorTel_Rq(false);
      }

      if (
        For_Rq_Edit[6] === null ||
        For_Rq_Edit[6] === undefined ||
        For_Rq_Edit[6] === ""
      ) {
        
        alert("ข้อมูลไม่สมบูรณ์: Dept ");
        setErrorDept(true); 
        navigate("/ForRe");
        return; 
       
      }
      console.log(selecttrans_factory, "selecttrans_factory");
      if (
        selecttrans_factory === null ||
        selecttrans_factory === undefined ||
        selecttrans_factory === ""
      ) {
        
        alert("ข้อมูลไม่สมบูรณ์: Factory");
        setErrorFac(true);
        return;
      } else {
        console.log("YYYYYYYY111111111111111");
      }
      if (
        selecttrans_cc === null ||
        selecttrans_cc === undefined ||
        selecttrans_cc === ""
      ) {
        
        alert("ข้อมูลไม่สมบูรณ์: CC");
        setErrorCC(true);
        return;

      } else {
        setErrorCC(false);
      }
      if (Tel_for_trans === null || Tel_for_trans === undefined || Tel_for_trans === ""  ) {
        
        alert("ข้อมูลไม่สมบูรณ์: Tel ");
        setErrorTel(true);
        return;
      } else { 
        setErrorTel(false);
      }

      if (selectnew_owner === null || selectnew_owner === undefined || selectnew_owner === "") {
        setErrorNewOwn(true);
        alert("ข้อมูลไม่สมบูรณ์: New Owner ");
        return;
      } else {
        setErrorNewOwn(false);
      }
      if (
        selectdepartment_mana === null ||
        selectdepartment_mana === undefined ||
        selectdepartment_mana === ""
      ) {
        setErrorManager(true);
        alert("ข้อมูลไม่สมบูรณ์: Department Manager ");
        return;
      } else {
        setErrorManager(false);
      }

      if (selectservice_by[0] === null || selectservice_by[0] === undefined || selectservice_by[0] === "" ) {
        setErrorService_by(true);
        alert("ข้อมูลไม่สมบูรณ์: Service By");
        return;
      } else {
        setErrorService_by(false);
      }
      if (
        Tel_service === "" ||
        Tel_service === undefined ||
        Tel_service === null
      ) {
        setErrorTel_service(true);
        alert("ข้อมูลไม่สมบูรณ์: Tel_Service By");
        return;
      } else {
        setErrorTel_service(false);
      }
      if (selectboi_staff[0] === null || selectboi_staff[0] === undefined || selectboi_staff[0] === "") {
        setErrorBoi_Staff(true);
        alert("ข้อมูลไม่สมบูรณ์: BOI Staff");
        return;
      } else {
        setErrorBoi_Staff(false);
      }
      if (selectboi_manager[0] === null || selectboi_manager[0] === undefined || selectboi_manager[0] === "") {
        setErrorBoi_manager(true);
        alert("ข้อมูลไม่สมบูรณ์: BOI Manager");
        return;
      } else {
        setErrorBoi_manager(false);
      }
      if (selectfac_manager[0] === null || selectfac_manager[0] === undefined || selectfac_manager[0] === "" ) {
        setErrorMana_Fac(true);
        alert("ข้อมูลไม่สมบูรณ์: Factory Manager");
        return;
      } else {
        setErrorMana_Fac(false);
      }
      if (selectacc_check[0] === null || selectacc_check[0] === undefined || selectacc_check[0] === "" ) {
        alert("ข้อมูลไม่สมบูรณ์: ACC Check");
        setErrorAcc_check(true);
      } else {
        setErrorAcc_check(false);
      }
      if (selectacc_manager[0] === null || selectacc_manager[0] === undefined || selectacc_manager[0] === "") {
        alert("ข้อมูลไม่สมบูรณ์: ACC Manager");
        setErrorAcc_Mana(true);
        return;
      } else {
        setErrorAcc_Mana(false);
      }
      try {
        const response = await axios.get(
          `http://localhost:5000/getEdit_FixAsset?FamNo=${EditFam}`
        );
      } catch (error) {
        //console.error("Error during login:", error);
      }
    } else {
      
      if (
        For_Req[2] === null ||
        For_Req[2] === undefined ||
        For_Req[2] === ""
      ) 
      {
        
        setErrorTel_Rq(true);
        alert("ข้อมูลไม่สมบูรณ์: กรุณากรอกข้อมูล Requester");
        let ErrorTel_Req = "true";
        console.log();
        navigate("/ForRe", ErrorTel_Req);
        return;
        
      } 
      else {
        setErrorTel_Rq(false);
      }

      if (
        For_Req[5] === null ||
        For_Req[5] === undefined ||
        For_Req[5] === ""
      ) {
        
        alert("ข้อมูลไม่สมบูรณ์: กรุณาเลือกแผนก");
        setErrorDept(true);
        return;
      }
      if (
        selecttrans_factory === null ||
        selecttrans_factory === undefined ||
        selecttrans_factory === ""
      ) {
        
        alert("ข้อมูลไม่สมบูรณ์: Factory");
        setErrorFac(true);
        return;
      } else {
        console.log("YYYYYYYY111111111111111");
      }
      if (
        selecttrans_cc === null ||
        selecttrans_cc === undefined ||
        selecttrans_cc === ""
      ) {
        
        alert("ข้อมูลไม่สมบูรณ์: CC");
        setErrorCC(true);
        return;

      } else {
        console.log("YYYYYYYY");
        setErrorCC(false);
      }
      if (Tel_for_trans === null || Tel_for_trans === undefined || Tel_for_trans === ""  ) {
        
        alert("ข้อมูลไม่สมบูรณ์: Tel ");
        setErrorTel(true);
        return;
      } else { 
        setErrorTel(false);
      }

      if (selectnew_owner === null || selectnew_owner === undefined || selectnew_owner === "") {
        setErrorNewOwn(true);
        alert("ข้อมูลไม่สมบูรณ์: New Owner ");
        return;
      } else {
        setErrorNewOwn(false);
      }
      if (
        selectdepartment_mana === null ||
        selectdepartment_mana === undefined ||
        selectdepartment_mana === ""
      ) {
        
        alert("ข้อมูลไม่สมบูรณ์: Department Manager");
        setErrorManager(true);
        return;
      } else {
        setErrorManager(false);
      }
      if (selectservice_by === null || selectservice_by === undefined || selectservice_by === "" ) {
        
        alert("ข้อมูลไม่สมบูรณ์: Service By");
        setErrorService_by(true);
        return;
      } else {
        setErrorService_by(false);
      }
      if (Tel_service === null || Tel_service === undefined || Tel_service === "") {
        
        alert("ข้อมูลไม่สมบูรณ์: Tel_Service By");
        setErrorTel_service(true);
        return;
      } else {
        setErrorTel_service(false);
      }
      if (selectboi_staff === null || selectboi_staff === undefined || selectboi_staff === "") {
        
        alert("ข้อมูลไม่สมบูรณ์: BOI Staff");
        setErrorBoi_Staff(true);
        return;
      } else {
        setErrorBoi_Staff(false);
      }
      if (selectboi_manager === null || selectboi_manager === undefined || selectboi_manager === "") {
        
        alert("ข้อมูลไม่สมบูรณ์: BOI Manager");
        setErrorBoi_manager(true);
        return;
      } else {
        setErrorBoi_manager(false);
      }
      if (selectfac_manager === null || selectfac_manager === undefined || selectfac_manager === "") {
        
        alert("ข้อมูลไม่สมบูรณ์: Factory Manager");
        setErrorMana_Fac(true);
        return;
      } else {
        setErrorMana_Fac(false);
      }
      if (selectacc_check === null || selectacc_check === undefined|| selectacc_check === "") {
        
        alert("ข้อมูลไม่สมบูรณ์: ACC Check");
        setErrorAcc_check(true);
        return;
      } else {
        setErrorAcc_check(false);
      }
      if (selectacc_manager === null || selectacc_manager === undefined  || selectacc_manager === "") {
        
        alert("ข้อมูลไม่สมบูรณ์: ACC Manager");
        setErrorAcc_Mana(true);
      } else {
        setErrorAcc_Mana(false);
      }
      //   <ForRequester
      //   errorTelRq={ErrorTel_Rq}
      //   errorDept={ErrorDept}
      // />
    }

    if (EditFam != null) {
      if (For_Rq_Edit != null) {
        console.log("ไม่มาาาาาาาาาาาา");
       if (For_Rq_Edit[10] === "FLTR001") {
          let Status = "FLTR002";
          try {
            console.log("For_Rq_Edit",For_Rq_Edit[0])
            const response = await axios.post(
              "http://localhost:5000/Update_For_Req_All",
              {
                famno : For_Rq_Edit[0],
                dept: For_Rq_Edit[6],
                tel: For_Rq_Edit[3] ,
                remark: For_Rq_Edit[12],
                mrg_dept: selectdepartment_mana[0],
                serviceby: selectservice_by[0] ,
                servicetel: Tel_service , 
                boisff: selectboi_staff[0] ,
                boimrg: selectboi_manager[0],
                fmby: selectfac_manager[0],
                accchk: selectacc_check[0],
                accmrg: selectacc_manager[0],
                updateby: For_Rq_Edit[2] ,

              }
           );
           setbtnsave("hidden")
          
         
        } catch (error) {
          //     console.error("Error updating submit status:", error.message);
        }
          try {
            const response = await axios.post(
              "http://localhost:5000/update_submit",
              {
                famno: EditFam,
                sts_submit: Status,
              }
              
            );
            Swal.fire({
              title: "Save Success",
              icon: "success",
            });

          } catch (error) {
            //     console.error("Error updating submit status:", error.message);
          }
         
        } else {
        }
      }
   } 
   else {
      if (For_Req[10] === "FLTR001") {
        console.log(For_Req[10], "Vkppppppppppppppppppp");
        let Status = "FLTR002";
        try {
          const response = await axios.post(
            "http://localhost:5000/update_submit",
            {
              famno: For_Req[0],
              sts_submit: Status,
            }
          );
        } catch (error) {
          //     console.error("Error updating submit status:", error.message);
        }
          try {
            const response = await axios.post(
              "http://localhost:5000/Update_For_Req_All",
              {
                famno : For_Req[0],
                dept: For_Req[5],
                tel: For_Req[2] ,
                remark: For_Req[12],
                mrg_dept: selectdepartment_mana ,
                serviceby: selectservice_by ,
                servicetel: Tel_service , 
                boisff: selectboi_staff ,
                boimrg: selectboi_manager ,
                fmby: selectfac_manager,
                accchk: selectacc_check,
                accmrg: selectacc_manager ,
                updateby: For_Req[1] ,

              }
           );
           setbtnsave("hidden")
          Swal.fire({
            title: "Save Success",
            icon: "success",
          });
        } catch (error) {
          //     console.error("Error updating submit status:", error.message);
        }
      }
    }
  };
  const Reset  = async () => {
    setselecttrans_factory([]);
    setselecttrans_cc([]);
    setnew_boi("");
    setnew_owner([]);
    setplan_date("");
    setTel_for_trans("");
    setabnormal("");
    setselectdepartment_mana([]);
    setselectservice_by([]);
    setselectboi_staff([]);
    setselectboi_manager([]);
    setselectfac_manager([]);
    setselectacc_check([]);
    setselectacc_manager([]);
  }


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
                        //onChange={(e) => setselecttrans_factory(e.target.value)}
                        onChange={handleFactoryCC}
                        size="small"
                        style={{
                          borderColor: ErrorFac ? "red" : undefined,
                        }}
                        error={ErrorFac}
                        helperText={
                          ErrorFac
                            ? "กรุณาเลือก Transfer To factory"
                            : undefined
                        }
                      >
                        {trans_factory.map((option, index) => (
                          <MenuItem key={index} value={option[0]}>
                            {option[1]}
                          </MenuItem>
                        ))}
                      </Select>
                      {ErrorFac && <FormHelperText style={{color : "red"}}>กรุณาเลือก Transfer To factory</FormHelperText>}
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
                        style={{
                          borderColor: ErrorCC ? "red" : undefined,
                        }}
                        error={ErrorCC}
                      >
                        {trans_cc.map((option, index) => (
                          <MenuItem key={index} value={option[0]}>
                            {option[0]}
                          </MenuItem>
                        ))}
                      </Select>
                      {ErrorCC && <FormHelperText style={{color : "red"}}>กรุณาเลือก Transfer To CC</FormHelperText>}
                    </FormControl>
                  </td>
                  <tr></tr>
                </tr>
                <tr></tr>

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
                        style={{
                          borderColor: ErrorNewOwn ? "red" : undefined,
                        }}
                        error={ErrorNewOwn}
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
                        // id="Tel"
                        value={Tel_for_trans}
                        onChange={(e) => setTel_for_trans(e.target.value)}
                        size="small"
                        style={{
                          borderColor: ErrorTel ? "red" : undefined,
                        }}
                        error={ErrorTel}
                        helperText={ErrorTel ? "กรูณาใส่เบอร์โทร" : undefined}
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
                        style={{
                          borderColor: ErrorManager ? "red" : undefined,
                        }}
                        error={ErrorManager}
                      >
                        {department_mana.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>     {ErrorManager && <FormHelperText style={{color : "red"}}>กรุณาเลือก Department Manager</FormHelperText>}
                 
                    </FormControl>
                  </td>

                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_dept}
                        onChange={(e) => setselectradio_dept(e.target.value)}
                        style={{ visibility: checkrdo }}
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
                  <td className="Style7" style={{ visibility: checkrdo }}>
                    Action Date :
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                          visibility: checkrdo,
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr style={{ display: "none" }}>
                  <th colSpan={5}></th>
                  <td className="Style4" style={{ visibility: checkrdo }}>
                    Comment :
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{ visibility: checkrdo }}
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
                        style={{
                          borderColor: ErrorTel_service ? "red" : undefined,
                        }}
                        error={ErrorTel_service}
                        helperText={
                          ErrorTel_service ? "กรูณาใส่เบอร์โทร" : undefined
                        }
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
                        style={{
                          borderColor: ErrorService_by ? "red" : undefined,
                        }}
                        error={ErrorService_by}
                        size="small"
                      >
                        {service_by.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {ErrorService_by && <FormHelperText style={{color : "red"}}>กรุณาเลือก Service By</FormHelperText>}
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_serviceby}
                        onChange={(e) =>
                          setselectradio_serviceby(e.target.value)
                        }
                        style={{ visibility: checkrdo }}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          // disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR001')}
                        />
                        <FormControlLabel
                          value="R"
                          disable
                          control={<Radio size="small" />}
                          label="Not Accept"
                          // disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR002')}
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: checkrdo }}>
                    Action Date :
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                          visibility: checkrdo,
                        }}
                      />
                    </FormControl>
                  </td>{" "}
                </tr>
                <tr style={{ display: "none" }}>
                  <th colSpan={5}></th>
                  <td className="Style4" style={{ visibility: checkrdo }}>
                    Comment :
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{ visibility: checkrdo }}
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
                        style={{
                          borderColor: ErrorBoi_Staff ? "red" : undefined,
                        }}
                        error={ErrorBoi_Staff}
                        size="small"
                      >
                        {boi_staff.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {ErrorBoi_Staff && <FormHelperText style={{color : "red"}}>กรุณาเลือก BOI Staff</FormHelperText>}
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_boistaff}
                        onChange={(e) =>
                          setselectradio_boistaff(e.target.value)
                        }
                        style={{ visibility: checkrdo }}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          // disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR001')}
                        />
                        <FormControlLabel
                          value="R"
                          disable
                          control={<Radio size="small" />}
                          label="No Accept"
                          // disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR002')}
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: checkrdo }}>
                    Action Date :
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                          visibility: checkrdo,
                        }}
                      />
                    </FormControl>
                  </td>{" "}
                </tr>
                <tr style={{ display: "none" }}>
                  <th colSpan={5}></th>
                  <td className="Style4" style={{ visibility: checkrdo }}>
                    Comment :
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{ visibility: checkrdo }}
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
                        style={{
                          borderColor: ErrorBoi_manager ? "red" : undefined,
                        }}
                        error={ErrorBoi_manager}
                      >
                        {boi_manager.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {ErrorBoi_manager && <FormHelperText style={{color : "red"}}>กรุณาเลือก BOI Manager</FormHelperText>}
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_boimanager}
                        onChange={(e) =>
                          setselectradio_boimanager(e.target.value)
                        }
                        style={{ visibility: checkrdo }}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Approve"
                          // disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR001')}
                        />
                        <FormControlLabel
                          value="R"
                          disable
                          control={<Radio size="small" />}
                          label="Reject"
                          // disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR002')}
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: checkrdo }}>
                    Action Date :
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                          visibility: checkrdo,
                        }}
                      />
                    </FormControl>
                  </td>{" "}
                </tr>
                <tr style={{ display: "none" }}>
                  <th colSpan={5}></th>
                  <td className="Style4" style={{ visibility: checkrdo }}>
                    Comment :
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{ visibility: checkrdo }}
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
                        style={{
                          borderColor: ErrorMana_Fac ? "red" : undefined,
                        }}
                        error={ErrorMana_Fac}
                      >
                        {fac_manager.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {ErrorMana_Fac && <FormHelperText style={{color : "red"}}>กรุณาเลือก Factory Manager</FormHelperText>}
                    </FormControl>
                  </td>

                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_facmanager}
                        onChange={(e) =>
                          setselectradio_facmanager(e.target.value)
                        }
                        style={{ visibility: checkrdo }}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Approve"
                          // disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR001')}
                        />
                        <FormControlLabel
                          value="R"
                          disable
                          control={<Radio size="small" />}
                          label="Reject"
                          // disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR002')}
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>

                  <td className="Style7" style={{ visibility: checkrdo }}>
                    Action Date :
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                          visibility: checkrdo,
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <>
                  <tr style={{ display: "none" }}>
                    <th colSpan={5}></th>
                    <td className="Style4" style={{ visibility: checkrdo }}>
                      Comment :
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          defaultValue=""
                          size="small"
                          disabled
                          style={{ visibility: checkrdo }}
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
                        style={{
                          borderColor: ErrorAcc_check ? "red" : undefined,
                        }}
                        error={ErrorAcc_check}
                      >
                        {acc_check.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {ErrorAcc_check && <FormHelperText style={{color : "red"}}>กรุณาเลือก ACC Check</FormHelperText>}
                    </FormControl>
                  </td>

                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_acc_check}
                        onChange={(e) =>
                          setselectradio_acc_check(e.target.value)
                        }
                        style={{ visibility: checkrdo }}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          // disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR001')}
                        />
                        <FormControlLabel
                          value="R"
                          control={<Radio size="small" />}
                          label="No Accept"
                          // disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR002')}
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: checkrdo }}>
                    Action Date :
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                          visibility: checkrdo,
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr style={{ display: "none" }}>
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
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_owner}
                        onChange={(e) => setselectradio_owner(e.target.value)}
                        style={{ visibility: checkrdo }}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          // disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR001')}
                        />
                        <FormControlLabel
                          value="R"
                          disable
                          control={<Radio size="small" />}
                          label="No Accept"
                          // disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR002')}
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: checkrdo }}>
                    Action Date :
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                          visibility: checkrdo,
                        }}
                      />
                    </FormControl>
                  </td>{" "}
                </tr>
                <tr style={{ display: "none" }}>
                  <th colSpan={5}></th>
                  <td className="Style4" style={{ visibility: checkrdo }}>
                    Comment :
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{ visibility: checkrdo }}
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
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_receiver}
                        onChange={(e) =>
                          setselectradio_receiver(e.target.value)
                        }
                        style={{ visibility: checkrdo }}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          // disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR001')}
                        />
                        <FormControlLabel
                          value="R"
                          disable
                          control={<Radio size="small" />}
                          label="No Accept"
                          // disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR002')}
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: checkrdo }}>
                    Action Date :
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                          visibility: checkrdo,
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>

                <tr style={{ display: "none" }}>
                  <th colSpan={5}></th>
                  <td className="Style4" style={{ visibility: checkrdo }}>
                    Comment :
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{ visibility: checkrdo }}
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
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_record}
                        onChange={(e) => setselectradio_record(e.target.value)}
                        style={{ visibility: checkrdo }}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          // disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR001')}
                        />
                        <FormControlLabel
                          value="R"
                          disable
                          control={<Radio size="small" />}
                          label="No Accept"
                          // disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR002')}
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: checkrdo }}>
                    Action Date :
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                          visibility: checkrdo,
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr style={{ display: "none" }}>
                  <th colSpan={5}></th>
                  <td className="Style4" style={{ visibility: checkrdo }}>
                    Comment :
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        style={{ visibility: checkrdo }}
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
                        style={{
                          borderColor: ErrorAcc_Mana ? "red" : undefined,
                        }}
                        error={ErrorAcc_Mana}
                      >
                        {acc_manager.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {ErrorAcc_Mana && <FormHelperText style={{color : "red"}}>กรุณาเลือก ACC Manager</FormHelperText>}
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_acc_manager}
                        onChange={(e) =>
                          setselectradio_acc_manager(e.target.value)
                        }
                        style={{ visibility: checkrdo }}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Approve"
                          // disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR001')}
                        />
                        <FormControlLabel
                          value="R"
                          disable
                          control={<Radio size="small" />}
                          label="Reject"
                          // disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR002')}
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: checkrdo }}>
                    Action Date :
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                          visibility: checkrdo,
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr style={{ display: "none" }}>
                  <th colSpan={5}></th>
                  <td className="Style4" style={{ visibility: checkrdo }}>
                    Comment :
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        style={{ visibility: checkrdo }}
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
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_service_close_by}
                        onChange={(e) =>
                          setselectradio_service_close_by(e.target.value)
                        }
                        style={{ visibility: checkrdo }}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Approve"
                          // disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR001')}
                        />
                        <FormControlLabel
                          value="R"
                          disable
                          control={<Radio size="small" />}
                          label="Reject"
                          // disabled ={(radio_dept === 'Sucha.S' &&  Sts === 'FLTR002')}
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: checkrdo }}>
                    Action Date :
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                          visibility: checkrdo,
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr style={{ display: "none" }}>
                  <th colSpan={5}></th>
                  <td className="Style4" style={{ visibility: checkrdo }}>
                    Comment :
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        style={{ visibility: checkrdo }}
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
                  style={{visibility: btnsave}}
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
                <Button variant="contained" size="medium" color="error" onClick={Reset}>
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
                  marginLeft: "400px",
                  marginTop: "30px",
                }}
                variant="contained"
                onClick={() => window.history.back()}
              >
                BACK PAGE
              </Button>
            </td>
            <td>
              {" "}
              <Button
                style={{
                  width: "200px",
                  display: "inline-block",
                  marginLeft: "300px",
                  marginTop: "30px",
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
