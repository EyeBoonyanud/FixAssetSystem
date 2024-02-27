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
  FormHelperText,
} from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../Page/Hearder";
import { useNavigate } from "react-router-dom";
import PageLoadding from "../Loadding/Pageload";

function TransFerDetail() {
  const EditFam = localStorage.getItem("EDIT");
  const User = localStorage.getItem("UserLogin");
  const navigate = useNavigate();
  const ForRequester = localStorage.getItem("ForRequester");
  const For_Req = JSON.parse(ForRequester);
  console.log(For_Req, "For_Req");
  const For_Fixed_Asst = localStorage.getItem("forDetail");
  const For_Fix = JSON.parse(For_Fixed_Asst);

  const Edit_trans = localStorage.getItem("Edit_Trans");
  const For_edit_trans = JSON.parse(Edit_trans);
  //console.log(For_edit_trans,"For_edit_trans")

  const For_edit_request = localStorage.getItem("For_Req_Edit");
  const For_Rq_Edit = JSON.parse(For_edit_request);
  //console.log(For_Rq_Edit,"For_Rq_Edit")
  let STS = "";
  //console.log(For_Rq_Edit, "For_Req_Edit");

  // if (ForRequester !== null) {
  //  STS = For_Req[10];
  // } else {
  //   STS = For_Rq_Edit[10];
  // }

  const ForTransfer = localStorage.getItem("For_Transfer");
  const For_Trans = JSON.parse(ForTransfer);
  console.log(For_Trans, "For_Trans");

  const Routing = localStorage.getItem("For_Routing");
  const For_Rou = JSON.parse(Routing);
  console.log(For_Rou, "For_Rou");

  const Edit_rout = localStorage.getItem("Edit_routing");
  const For_Edit_Rou = JSON.parse(Edit_rout);
  // console.log(For_Edit_Rou,"For_Edit_Rou")

  let Fam_list = "";
  let servivedept = "";

  const SERVICEDEPT = () => {
    setservice_dept(servivedept);
  };

  if (ForRequester !== null) {
    Fam_list = For_Req[0];
    servivedept = For_Req[8] + ":" + For_Req[9];
  } else {
    Fam_list = For_Rq_Edit[0];
    servivedept = For_Rq_Edit[9] + ":" + For_Rq_Edit[13];
  }
  const [STS1, setSTS1] = useState("");
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
  const [text_acc_check, settext_acc_check] = useState("");
  const [owner_roting, setowner_roting] = useState("");
  const [acc_manager, setacc_manager] = useState([]);
  const [selectacc_manager, setselectacc_manager] = useState("");
  const [Tel_service, setTel_service] = useState("");
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
  // CMMT
  const [cmmtradio_dept, setcmmtradio_dept] = useState("");
  const [cmmtradio_serviceby, setcmmtradio_serviceby] = useState("");
  const [cmmtradio_boistaff, setcmmtradio_boistaff] = useState("");
  const [cmmtradio_boimanager, setcmmtradio_boimanager] = useState("");
  const [cmmtradio_facmanager, setcmmtradio_facmanager] = useState("");
  const [cmmtradio_acc_check, setcmmtradio_acc_check] = useState("");
  const [cmmtradio_owner, setcmmtradio_owner] = useState("");
  const [cmmtradio_receiver, setcmmtradio_receiver] = useState("");
  const [cmmtradio_record, setcmmtradio_record] = useState("");
  const [cmmtradio_acc_manager, setcmmtradio_acc_manager] = useState("");
  const [cmmtradio_service_close_by, setcmmtradio_service_close_by] =
    useState("");
  //Date For Action Date
  const [action_dept, setaction__dept] = useState("");
  const [action__serviceby, setaction__serviceby] = useState("");
  const [action__boistaff, setaction__boistaff] = useState("");
  const [action__boimanager, setaction__boimanager] = useState("");
  const [action__facmanager, setaction__facmanager] = useState("");
  const [action__acc_check, setaction__acc_check] = useState("");
  const [action__owner, setaction__owner] = useState("");
  const [action__receiver, setaction__receiver] = useState("");
  const [action__record, setaction__record] = useState("");
  const [action__acc_manager, setaction__acc_manager] = useState("");
  const [action__service_close_by, setaction__service_close_by] = useState("");
  //Error
  const [ErrorTel, setErrorTel] = useState(false);
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
  // check read only
  const [read_trans_fac, setReadTransFac] = useState(true);
  const [read_trans_cc, setReadTransCC] = useState(true);
  const [read_tel, setReadTel] = useState(true);
  const [read_plan_date, setReadPlanDate] = useState(true);
  const [read_newowner, setReadNewOwnerCmmt] = useState(true);
  //const [read_abnormal, setReadAbnormal] = useState(true);
  const [read_dept, setReadDept] = useState(true);
  const [read_dept_radio, setReadDeptRadio] = useState(true);
  const [read_dept_cmmt, setReadDeptCmmt] = useState(true);
  const [read_serviceby, setReadServiceBy] = useState(true);
  const [read_serviceby_radio, setReadServiceByRadio] = useState(true);
  const [read_serviceby_cmmt, setReadServiceByCmmt] = useState(true);
  const [read_boistff, setReadBoistff] = useState(true);
  const [read_boistff_radio, setReadBoistffRadio] = useState(true);
  const [read_boistff_cmmt, setReadBoistffCmmt] = useState(true);
  const [read_boimana, setReadBoimana] = useState(true);
  const [read_boimana_radio, setReadBoimanaRadio] = useState(true);
  const [read_boimana_cmmt, setReadBoimanaCmmt] = useState(true);
  const [read_fac_mana, setReadFacMana] = useState(true);
  const [read_fac_mana_radio, setReadFacManaRadio] = useState(true);
  const [read_fac_mana_cmmt, setReadFacManaCmmt] = useState(true);
  const [read_accchk, setReadAccchk] = useState(true);
  const [read_accchk_radio, setReadAccchkRadio] = useState(true);
  const [read_accchk_cmmt, setReadAccchkCmmt] = useState(true);
  const [read_owner_radio, setReadOwnerRadio] = useState(true);
  const [read_owner_cmmt, setReadOwnerCmmt] = useState(true);
  const [read_receive_radio, setReadReceiveRadio] = useState(true);
  const [read_receive_cmmt, setReadReceiveCmmt] = useState(true);
  const [read_record_radio, setReadRecordRadio] = useState(true);
  const [read_record_cmmt, setReadRecordCmmt] = useState(true);
  const [read_acc_mana, setReadAccMana] = useState(true);
  const [read_acc_mana_radio, setReadAccManaRadio] = useState(true);
  const [read_acc_mana_cmmt, setReadAccManaCmmt] = useState(true);
  const [read_close_radio, setReadCloseRadio] = useState(true);
  const [read_close_cmmt, setReadCloseCmmt] = useState(true);
  //Save
  const [btnsave, setbtnsave] = useState("hidden");
  //check sts
  const [checkrdo, setcheckrdo] = useState("hidden");
  const [chkservice_by, setchkservice_by] = useState("hidden");
  const [chkboistaff, setchkboistaff] = useState("hidden");
  const [chkboimanager, setchkboimanager] = useState("hidden");
  const [chkfacmanager, setchkfacmanager] = useState("hidden");
  const [chkacc_check, setchkacc_check] = useState("hidden");
  const [chkowner, setchkowner] = useState("hidden");
  const [chkreceiver, setchkreceiver] = useState("hidden");
  const [chkacc_record, setchkacc_record] = useState("hidden");
  const [chkacc_manager, setchkacc_manager] = useState("hidden");
  const [chkservice_close, setchkservice_close] = useState("hidden");

  const [currentDate, setCurrentDate] = useState(new Date());
  const formattedDate = `${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${currentDate
    .getDate()
    .toString()
    .padStart(2, "0")}/${currentDate.getFullYear()}`;

  //////////////////////////////Loading /////////////////////////
  const [isPopupOpenLoadding, setPopupOpenLoadding] = useState(false);
  const openPopupLoadding = () => {
    setPopupOpenLoadding(true);
  };
  const closePopupLoadding = () => {
    setPopupOpenLoadding(false);
  };

  useEffect(() => {
    openPopupLoadding();
    if (For_Rq_Edit != null) {
      setSTS1(For_Rq_Edit[10]);
    }
    if (For_Req != null) {
      setSTS1(For_Req[10]);
    }

    const TEST = async () => {
      await FactoryCC();
      await TransCC();
      await BOI_FROM();
      await Department_Mana();
      await SERVICEDEPT();
      await Service_By();
      await BOI_Staff();
      await BOI_Manager();
      await Fac_manager();
      await ACC_Check();
      await ACC_Manager();
      await closePopupLoadding();
    };

    TEST();
    if (EditFam != null) {
      if (For_Rq_Edit != null) {
        STS = For_Rq_Edit[10];
        console.log(STS, "STS");
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
            //set Submit
            setowner_roting(For_Rq_Edit[2]);
            setTel_service(For_Edit_Rou[0][7]);
            if (STS != "FLTR001") {
              //Depat Mana
              setaction__dept(For_Edit_Rou[0][1]);
              setselectradio_dept(For_Edit_Rou[0][2]);
              setcmmtradio_dept(For_Edit_Rou[0][3]);
              // Serviceby
              setaction__serviceby(For_Edit_Rou[0][6]);
              setselectradio_serviceby(For_Edit_Rou[0][41]);
              setcmmtradio_serviceby(For_Edit_Rou[0][42]);
              // BOI STAFF
              setaction__boistaff(For_Edit_Rou[0][9]);
              setselectradio_boistaff(For_Edit_Rou[0][10]);
              setcmmtradio_boistaff(For_Edit_Rou[0][11]);
              // BOI Manager

              setaction__boimanager(For_Edit_Rou[0][13]);
              setselectradio_boimanager(For_Edit_Rou[0][14]);
              setcmmtradio_boimanager(For_Edit_Rou[0][15]);
              // FAC_mana
              setaction__facmanager(For_Edit_Rou[0][17]);
              setselectradio_facmanager(For_Edit_Rou[0][18]);
              setcmmtradio_facmanager(For_Edit_Rou[0][19]);
              // ACC Check
              setaction__acc_check(For_Edit_Rou[0][21]);
              setselectradio_acc_check(For_Edit_Rou[0][22]);
              setcmmtradio_acc_check(For_Edit_Rou[0][23]);
              //Owner
              setaction__owner(For_Edit_Rou[0][33]);
              setselectradio_owner(For_Edit_Rou[0][34]);
              setcmmtradio_owner(For_Edit_Rou[0][35]);
              // Receiver
              setaction__receiver(Edit_trans[0][11]);
              setselectradio_receiver(Edit_trans[0][10]);
              setcmmtradio_receiver(Edit_trans[0][12]);
              // Record
              setaction__record(For_Edit_Rou[0][25]);
              setselectradio_record(For_Edit_Rou[0][26]);
              setcmmtradio_record(For_Edit_Rou[0][27]);
              // Acc manager
              setaction__acc_manager(For_Edit_Rou[0][29]);
              setselectradio_acc_manager(For_Edit_Rou[0][30]);
              setcmmtradio_acc_manager(For_Edit_Rou[0][31]);
              // Service Close By
              setaction__service_close_by(For_Edit_Rou[0][37]);
              setselectradio_service_close_by(For_Edit_Rou[0][43]);
              setcmmtradio_service_close_by(For_Edit_Rou[0][38]);
              //readonly

              // Wait Dept

              if (STS == "FLTR002") {
                setaction__dept(formattedDate);
                setcheckrdo("visible");
                setReadDeptRadio(false);
                setReadDeptCmmt(false);
              } else if (STS == "FLTR003") {
                setaction__serviceby(formattedDate);
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadServiceByRadio(false);
                setReadServiceByCmmt(false);
              } else if (STS == "FLTR004") {
                setaction__boistaff(formattedDate);
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadBoistffRadio(false);
                setReadBoistffCmmt(false);
              } else if (STS == "FLTR005") {
                setaction__boimanager(formattedDate);
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadBoimanaRadio(false);
                setReadBoimanaCmmt(false);
              } else if (STS == "FLTR006") {
                setaction__facmanager(formattedDate);
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadFacManaRadio(false);
                setReadFacManaCmmt(false);
              } else if (STS == "FLTR007") {
                setaction__acc_check(formattedDate);
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadAccchkRadio(false);
                setReadAccchkCmmt(false);
              } else if (STS == "FLTR008") {
                setaction__owner(formattedDate);
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadOwnerRadio(false);
                setReadOwnerCmmt(false);
              } else if (STS == "FLTR009") {
                setaction__receiver(formattedDate);
                setchkreceiver("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadReceiveRadio(false);
                setReadReceiveCmmt(false);
              } else if (STS == "FLTR010") {
                setaction__record(formattedDate);
                setchkacc_record("visible");
                setchkreceiver("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadRecordRadio(false);
                setReadRecordCmmt(false);
              } else if (STS == "FLTR011") {
                setaction__acc_manager(formattedDate);
                setchkacc_manager("visible");
                setchkacc_record("visible");
                setchkreceiver("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadAccManaRadio(false);
                setReadAccManaCmmt(false);
              } else if (STS == "FLTR012") {
                setaction__service_close_by(formattedDate);
                setchkservice_close("visible");
                setchkacc_manager("visible");
                setchkacc_record("visible");
                setchkreceiver("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadCloseRadio(false);
                setReadCloseCmmt(false);
              }
            } else if (STS == "FLTR001") {
              setReadTransFac(false);
              setReadTransCC(false);
              setReadTel(false);
              setReadPlanDate(false);
              setReadNewOwnerCmmt(false);
              setReadDept(false);
              setReadServiceBy(false);
              setReadBoistff(false);
              setReadBoimana(false);
              setReadFacMana(false);
              setReadAccchk(false);
              setReadAccMana(false);
              setbtnsave("visible");
            }
          } else {
            ///////////// else //////////////
          }
        }
      }
    } else {
      setReadTransFac(false);
      setReadTransCC(false);
      setReadTel(false);
      setReadPlanDate(false);
      setReadNewOwnerCmmt(false);
      setReadDept(false);
      setReadServiceBy(false);
      setReadBoistff(false);
      setReadBoimana(false);
      setReadFacMana(false);
      setReadAccchk(false);
      setReadAccMana(false);
      setbtnsave("visible");
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
          STS = For_Req[10];
          setownersend(For_Req[1]);
          setowner_roting(For_Req[1]);
          setdata_fromboi("");
          setnew_boi("");
          setselectnew_owner("");
          setTel_for_trans("");
          setplan_date("");
          setabnormal("");
          setreceiver("");
          //setbtnsave("visible")
        }
      }
    }
  }, []);

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
      console.log("kkkkkkkkkkkkkkkkk", data);
      setboi_staff(data);
      if (EditFam != null) {
        if (For_Edit_Rou != null) {
          console.log([For_Edit_Rou[0][8]], "YYYYYYYYYYYYYYYYYYYYYYy");
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
          settext_acc_check([For_Edit_Rou[0][20]]);
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

  // Handle Save Submit Reset
  const SAVE = async () => {
    console.log(plan_date);
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
          `http://localhost:5000/routing_tran?running_no=${EditFam}&m_dept=${selectdepartment_mana}&s_dept=${ServiceDept}&s_tel=${Tel_service}&s_by=${selectservice_by}&chk_by=${selectboi_staff}&boi_by=${selectboi_manager}&fmby=${selectfac_manager}&acc_by=${selectacc_check}&own_by=${owner_roting}&acc_record=${selectacc_check}&acc_manager=${selectacc_manager}&service_close_by=${selectservice_by}`
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
        `http://localhost:5000/ins_transfer?running_no=${Fam_list}&date_plan=${plan_date}&fac=${selecttrans_factory}&cc=${selecttrans_cc}&to_proj=${new_boi}&by=${receiver}&tel=${Tel_for_trans}&status=${sts}&abnormal=${abnormal}`
      );
    } catch (error) {
      //console.error("Error requesting data:", error);
    }
    try {
      const row = axios.post(
        // ////// console(New_BOI,"New_BOI")
        `http://localhost:5000/routing_tran?running_no=${Fam_list}&m_dept=${selectdepartment_mana}&s_dept=${ServiceDept}&s_tel=${Tel_service}&s_by=${selectservice_by}&chk_by=${selectboi_staff}&boi_by=${selectboi_manager}&fmby=${selectfac_manager}&acc_by=${selectacc_check}&own_by=${owner_roting}&acc_record=${selectacc_check}&acc_manager=${selectacc_manager}&service_close_by=${selectservice_by}`
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
      ) {
        setErrorTel_Rq(true);
        alert("ข้อมูลไม่สมบูรณ์: Tel For Requester");
        navigate("/ForRe");
        return;
      } else {
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

      if (
        selecttrans_factory === null ||
        selecttrans_factory === undefined ||
        selecttrans_factory === ""
      ) {
        alert("ข้อมูลไม่สมบูรณ์: Factory");
        setErrorFac(true);
        return;
      } else {
        setErrorFac(false);
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
      if (
        Tel_for_trans === null ||
        Tel_for_trans === undefined ||
        Tel_for_trans === ""
      ) {
        alert("ข้อมูลไม่สมบูรณ์: Tel ");
        setErrorTel(true);
        return;
      } else {
        setErrorTel(false);
      }

      if (
        selectnew_owner === null ||
        selectnew_owner === undefined ||
        selectnew_owner === ""
      ) {
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

      if (
        selectservice_by[0] === null ||
        selectservice_by[0] === undefined ||
        selectservice_by[0] === ""
      ) {
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
      if (
        selectboi_staff[0] === null ||
        selectboi_staff[0] === undefined ||
        selectboi_staff[0] === ""
      ) {
        setErrorBoi_Staff(true);
        alert("ข้อมูลไม่สมบูรณ์: BOI Staff");
        return;
      } else {
        setErrorBoi_Staff(false);
      }
      if (
        selectboi_manager[0] === null ||
        selectboi_manager[0] === undefined ||
        selectboi_manager[0] === ""
      ) {
        setErrorBoi_manager(true);
        alert("ข้อมูลไม่สมบูรณ์: BOI Manager");
        return;
      } else {
        setErrorBoi_manager(false);
      }
      if (
        selectfac_manager[0] === null ||
        selectfac_manager[0] === undefined ||
        selectfac_manager[0] === ""
      ) {
        setErrorMana_Fac(true);
        alert("ข้อมูลไม่สมบูรณ์: Factory Manager");
        return;
      } else {
        setErrorMana_Fac(false);
      }
      if (
        selectacc_check[0] === null ||
        selectacc_check[0] === undefined ||
        selectacc_check[0] === ""
      ) {
        alert("ข้อมูลไม่สมบูรณ์: ACC Check");
        setErrorAcc_check(true);
      } else {
        setErrorAcc_check(false);
      }
      if (
        selectacc_manager[0] === null ||
        selectacc_manager[0] === undefined ||
        selectacc_manager[0] === ""
      ) {
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
      ) {
        setErrorTel_Rq(true);
        alert("ข้อมูลไม่สมบูรณ์: กรุณากรอกข้อมูล Requester");
        let ErrorTel_Req = "true";
        console.log();
        navigate("/ForRe", ErrorTel_Req);
        return;
      } else {
        setErrorTel_Rq(false);
      }

      if (
        For_Req[5] === null ||
        For_Req[5] === undefined ||
        For_Req[5] === ""
      ) {
        alert("ข้อมูลไม่สมบูรณ์: กรุณาเลือกแผนก");
        setErrorDept(true);
        navigate("/ForRe");
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
      if (
        Tel_for_trans === null ||
        Tel_for_trans === undefined ||
        Tel_for_trans === ""
      ) {
        alert("ข้อมูลไม่สมบูรณ์: Tel ");
        setErrorTel(true);
        return;
      } else {
        setErrorTel(false);
      }

      if (
        selectnew_owner === null ||
        selectnew_owner === undefined ||
        selectnew_owner === ""
      ) {
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
      if (
        selectservice_by === null ||
        selectservice_by === undefined ||
        selectservice_by === ""
      ) {
        alert("ข้อมูลไม่สมบูรณ์: Service By");
        setErrorService_by(true);
        return;
      } else {
        setErrorService_by(false);
      }
      if (
        Tel_service === null ||
        Tel_service === undefined ||
        Tel_service === ""
      ) {
        alert("ข้อมูลไม่สมบูรณ์: Tel_Service By");
        setErrorTel_service(true);
        return;
      } else {
        setErrorTel_service(false);
      }
      if (
        selectboi_staff === null ||
        selectboi_staff === undefined ||
        selectboi_staff === ""
      ) {
        alert("ข้อมูลไม่สมบูรณ์: BOI Staff");
        setErrorBoi_Staff(true);
        return;
      } else {
        setErrorBoi_Staff(false);
      }
      if (
        selectboi_manager === null ||
        selectboi_manager === undefined ||
        selectboi_manager === ""
      ) {
        alert("ข้อมูลไม่สมบูรณ์: BOI Manager");
        setErrorBoi_manager(true);
        return;
      } else {
        setErrorBoi_manager(false);
      }
      if (
        selectfac_manager === null ||
        selectfac_manager === undefined ||
        selectfac_manager === ""
      ) {
        alert("ข้อมูลไม่สมบูรณ์: Factory Manager");
        setErrorMana_Fac(true);
        return;
      } else {
        setErrorMana_Fac(false);
      }
      if (
        selectacc_check === null ||
        selectacc_check === undefined ||
        selectacc_check === ""
      ) {
        alert("ข้อมูลไม่สมบูรณ์: ACC Check");
        setErrorAcc_check(true);
        return;
      } else {
        setErrorAcc_check(false);
      }
      if (
        selectacc_manager === null ||
        selectacc_manager === undefined ||
        selectacc_manager === ""
      ) {
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
      // Submit ตามเงื่อนไข
      if (For_Rq_Edit != null) {
        console.log("ไม่มาาาาาาาาาาาา", selectboi_staff[0], selectboi_staff);
        if (For_Rq_Edit[10] === "FLTR001") {
          let Status = "FLTR002";
          try {
            console.log("For_Rq_Edit", For_Rq_Edit[0]);
            const response = await axios.post(
              "http://localhost:5000/Update_For_Req_All",
              {
                // famno: For_Rq_Edit[0],
                // dept: For_Rq_Edit[6],
                // tel: For_Rq_Edit[3],
                // remark: For_Rq_Edit[12],
                // mrg_dept: selectdepartment_mana[0],
                // serviceby: selectservice_by[0],
                // servicetel: Tel_service,
                // boisff: selectboi_staff[0],
                // boimrg: selectboi_manager[0],
                // fmby: selectfac_manager[0],
                // accchk: selectacc_check[0],
                // accmrg: selectacc_manager,
                // updateby: For_Rq_Edit[2],
                famno: For_Rq_Edit[0],
                dept: For_Rq_Edit[6],
                tel: For_Rq_Edit[3],
                remark: For_Rq_Edit[12],
                mrg_dept: selectdepartment_mana[0],
                serviceby: selectservice_by[0],
                servicetel: Tel_service,
                boisff: selectboi_staff[0],
                boimrg: selectboi_manager[0],
                fmby: selectfac_manager[0],
                accchk: selectacc_check[0],
                accmrg: selectacc_manager[0],
                updateby: For_Rq_Edit[2],
                record_by: text_acc_check,
              }
            );
          } catch (error) {
            //     console.error("Error updating submit status:", error.message);
          }
          try {
            const response = await axios.post(
              "http://localhost:5000/Update_For_Trans_All",
              {
                famno: For_Rq_Edit[0][8],
                date_plan: plan_date,
                fac_trans: selecttrans_factory,
                cc_trans: selecttrans_cc,
                to_proj: new_boi,
                rec_by: selectnew_owner,
                tel: Tel_for_trans,
                sts_for: sts,
                abnormal_for: abnormal,
                create_by: User,
              }
            );
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
        } else if (For_Rq_Edit[10] === "FLTR002") {
          console.log("เข้ามาทำไมมมมมมมมมมมมมมมมม");
          let Status = "FLTR003";
          try {
            const row = axios.post(
              `http://localhost:5000/update_manager_dept?famno=${EditFam}&mgrjud=${selectradio_dept}&mgrcmmt=${cmmtradio_dept}&sts=${Status}`
            );

            Swal.fire({
              title: "Save Success",
              icon: "success",
            });
          } catch (error) {
            //     console.error("Error updating submit status:", error.message);
          }
        } else if (For_Rq_Edit[10] === "FLTR003") {
          let Status = "FLTR004";
          try {
            const row = axios.post(
              `http://localhost:5000/update_service_by?famno=${EditFam}&serjud=${selectradio_serviceby}&sercmmt=${cmmtradio_serviceby}&sts=${Status}`
            );

            Swal.fire({
              title: "Save Success",
              icon: "success",
            });
          } catch (error) {
            //     console.error("Error updating submit status:", error.message);
          }
        } else if (For_Rq_Edit[10] === "FLTR004") {
          let Status = "FLTR005";
          try {
            const row = axios.post(
              `http://localhost:5000/update_boi_staff?famno=${EditFam}&stff_jud=${selectradio_boistaff}&stff_cmmt=${cmmtradio_boistaff}&sts=${Status}`
            );

            Swal.fire({
              title: "Save Success",
              icon: "success",
            });
          } catch (error) {
            //     console.error("Error updating submit status:", error.message);
          }
        } else if (For_Rq_Edit[10] === "FLTR005") {
          let Status = "FLTR006";
          try {
            const row = axios.post(
              `http://localhost:5000/update_boi_mana?famno=${EditFam}&boimana_jud=${selectradio_boimanager}&boimana_cmmt=${cmmtradio_boimanager}&sts=${Status}`
            );

            Swal.fire({
              title: "Save Success",
              icon: "success",
            });
          } catch (error) {
            //     console.error("Error updating submit status:", error.message);
          }
        } else if (For_Rq_Edit[10] === "FLTR006") {
          let Status = "FLTR007";
          try {
            const row = axios.post(
              `http://localhost:5000/update_facmanager?famno=${EditFam}&fm_jud=${selectradio_facmanager}&fm_cmmt=${cmmtradio_facmanager}&sts=${Status}`
            );

            Swal.fire({
              title: "Save Success",
              icon: "success",
            });
          } catch (error) {
            //     console.error("Error updating submit status:", error.message);
          }
        } else if (For_Rq_Edit[10] === "FLTR007") {
          let Status = "FLTR008";
          try {
            const row = axios.post(
              `http://localhost:5000/update_acccheck?famno=${EditFam}&chk_jud=${selectradio_acc_check}&chk_cmmt=${cmmtradio_acc_check}&sts=${Status}`
            );

            Swal.fire({
              title: "Save Success",
              icon: "success",
            });
          } catch (error) {
            console.error("Error updating submit status:", error.message);
            Swal.fire({
              title: "Error",
              icon: "Error",
            });
            return;
          }
        } else if (For_Rq_Edit[10] === "FLTR008") {
          let Status = "FLTR009";
          try {
            const row = axios.post(
              `http://localhost:5000/update_owner?famno=${EditFam}&owner_jud=${selectradio_owner}&owner_cmmt=${cmmtradio_owner}&sts=${Status}`
            );

            Swal.fire({
              title: "Save Success",
              icon: "success",
            });
          } catch (error) {
            //     console.error("Error updating submit status:", error.message);
          }
        } else if (For_Rq_Edit[10] === "FLTR009") {
          let Status = "FLTR010";
          try {
            const row = axios.post(
              `http://localhost:5000/update_receiver?famno=${EditFam}&receiver_jud=${selectradio_receiver}&receiver_cmmt=${cmmtradio_receiver}`
            );

            Swal.fire({
              title: "Save Success",
              icon: "success",
            });
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
          } catch (error) {
            //     console.error("Error updating submit status:", error.message);
          }
        } else if (For_Rq_Edit[10] === "FLTR010") {
          let Status = "FLTR011";
          try {
            const row = axios.post(
              `http://localhost:5000/update_recode?famno=${EditFam}&rec_jud=${selectradio_record}&rec_cmmt=${cmmtradio_record}&sts=${Status}`
            );

            Swal.fire({
              title: "Save Success",
              icon: "success",
            });
          } catch (error) {
            //     console.error("Error updating submit status:", error.message);
          }
        } else if (For_Rq_Edit[10] === "FLTR011") {
          let Status = "FLTR012";
          try {
            const row = axios.post(
              `http://localhost:5000/update_accmanager?famno=${EditFam}&acc_manajud=${selectradio_acc_manager}&acc_manacmmt=${cmmtradio_acc_manager}&sts=${Status}`
            );

            Swal.fire({
              title: "Save Success",
              icon: "success",
            });
          } catch (error) {
            //     console.error("Error updating submit status:", error.message);
          }
        } else if (For_Rq_Edit[10] === "FLTR012") {
          let Status = "FLTR013";
          try {
            const row = axios.post(
              `http://localhost:5000/update_service_close?famno=${EditFam}&cls_jud=${selectradio_service_close_by}&cls_cmmt=${cmmtradio_service_close_by}&sts=${Status}`
            );

            Swal.fire({
              title: "Save Success",
              icon: "success",
            });
          } catch (error) {
            //     console.error("Error updating submit status:", error.message);
          }
        }
      }

      navigate("/Search");
    } else {
      // Submit กรณี insert
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
              famno: For_Req[0],
              dept: For_Req[5],
              tel: For_Req[2],
              remark: For_Req[12],
              mrg_dept: selectdepartment_mana,
              serviceby: selectservice_by,
              servicetel: Tel_service,
              boisff: selectboi_staff,
              boimrg: selectboi_manager,
              fmby: selectfac_manager,
              accchk: selectacc_check,
              accmrg: selectacc_manager,
              updateby: For_Req[1],
              record_by: text_acc_check,
            }
          );
        } catch (error) {
          //     console.error("Error updating submit status:", error.message);
        }
        try {
          const response = await axios.post(
            "http://localhost:5000/Update_For_Trans_All",
            {
              famno: For_Req[0],
              date_plan: plan_date,
              fac_trans: selecttrans_factory,
              cc_trans: selecttrans_cc,
              to_proj: new_boi,
              rec_by: selectnew_owner,
              tel: Tel_for_trans,
              sts_for: sts,
              abnormal_for: abnormal,
              create_by: User,
            }
          );
          Swal.fire({
            title: "Save Success",
            icon: "success",
          });
        } catch (error) {
          //     console.error("Error updating submit status:", error.message);
        }
      }
      navigate("/Search");
    }
    localStorage.removeItem("ForRequester");
    localStorage.removeItem("forDetail");
    localStorage.removeItem("TransForDetail");
    localStorage.removeItem("EDIT");
    localStorage.removeItem("For_Transfer");
    localStorage.removeItem("For_Routing");
    localStorage.removeItem("For_Req_Edit");
    localStorage.removeItem("Edit_Trans");
    localStorage.removeItem("Edit_Dteail_for_FixedCode");
    localStorage.removeItem("Edit_routing");
  };

  const Reset = async () => {
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
  };

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <Header />
      </div>
      <PageLoadding isOpen={isPopupOpenLoadding} onClose={closePopupLoadding} />
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
                        disabled={read_trans_fac}
                        size="small"
                        error={ErrorFac && !selecttrans_factory}
                        helperText={
                          ErrorFac && !selecttrans_factory
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
                        disabled={read_trans_cc}
                        size="small"
                        error={ErrorCC && !selecttrans_cc}
                        helperText={
                          ErrorCC && !selecttrans_cc
                            ? "กรุณาเลือก Transfer To CC"
                            : undefined
                        }
                      >
                        {trans_cc.map((option, index) => (
                          <MenuItem key={index} value={option[0]}>
                            {option[0]}
                          </MenuItem>
                        ))}
                      </Select>
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
                        size="small"
                        value={new_boi}
                        onChange={(e) => setnew_boi(e.target.value)}
                        disabled
                      />
                    </FormControl>
                  </td>
                  <td className="Style5"></td>
                </tr>
                {console.log("PAGE_STATUS === EDIT", STS)}
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">New Owner :</td>
                  <td>
                    <FormControl className="Style1">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        disabled={read_newowner}
                        value={selectnew_owner}
                        onChange={handleNewOwner}
                        size="small"
                        // style={{
                        //   borderColor: ErrorNewOwn ? "red" : undefined,
                        // }}
                        // error={ErrorNewOwn && !selectnew_owner}
                      >
                        {STS1 == "FLTR001" || STS1 == "" ? (
                          new_owner.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))
                        ) : (
                          <MenuItem value={selectnew_owner}>
                            {selectnew_owner}
                          </MenuItem>
                        )}
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
                        disabled={read_tel}
                        value={Tel_for_trans}
                        onChange={(e) => setTel_for_trans(e.target.value)}
                        size="small"
                        error={ErrorTel && !Tel_for_trans}
                        helperText={
                          ErrorTel && !Tel_for_trans
                            ? "กรูณาใส่เบอร์โทร"
                            : undefined
                        }
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
                        disabled={read_plan_date}
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
                        disabled={read_dept}
                        value={selectdepartment_mana}
                        onChange={(e) =>
                          setselectdepartment_mana(e.target.value)
                        }
                        size="small"
                        style={{
                          borderColor: ErrorManager ? "red" : undefined,
                        }}
                        error={ErrorManager && !selectdepartment_mana}
                        helperText={
                          ErrorManager && !selectdepartment_mana
                            ? "Department Manager"
                            : undefined
                        }
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
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_dept}
                        onChange={(e) => setselectradio_dept(e.target.value)}
                        style={{ visibility: checkrdo }}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Approve"
                          disabled={read_dept_radio}
                        />
                        <FormControlLabel
                          value="R"
                          disabled={read_dept_radio}
                          control={<Radio size="small" />}
                          label="Reject"
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
                        size="small"
                        disabled
                        value={action_dept}
                        onChange={(e) => setaction__dept(e.target.value)}
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                          visibility: checkrdo,
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                {/* { STS === "FLTR002" && (    
                  <> */}
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4" style={{ visibility: checkrdo }}>
                    Comment :
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        value={cmmtradio_dept}
                        disabled={read_dept_cmmt}
                        onChange={(e) => setcmmtradio_dept(e.target.value)}
                        //style={{ display: STS === "FTL0002" ? 'none' : 'block' }}
                        style={{ visibility: checkrdo }}
                      />
                    </FormControl>
                  </td>
                </tr>
                {/* </>
                 )} */}
                {/* Sevice Dept */}
                <tr>
                  <th colSpan={5}></th>
                  <td className="Style4">Service Dept :</td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
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
                        disabled={read_tel}
                        size="small"
                        value={Tel_service}
                        onChange={(e) => setTel_service(e.target.value)}
                        // style={{
                        //   borderColor: ErrorTel_service ? "red" : undefined,
                        // }}
                        error={ErrorTel_service && !Tel_service}
                        helperText={
                          ErrorTel_service && !Tel_service
                            ? "กรูณาใส่เบอร์โทร"
                            : undefined
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
                        disabled={read_serviceby}
                        value={selectservice_by}
                        onChange={(e) => setselectservice_by(e.target.value)}
                        style={{
                          borderColor: ErrorService_by ? "red" : undefined,
                        }}
                        error={ErrorService_by && !selectservice_by}
                        size="small"
                        // helperText={
                        //   ErrorService_by && !selectservice_by
                        //     ? "Service By"
                        //     : undefined
                        // }
                      >
                        {service_by.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {ErrorService_by && (
                        <FormHelperText style={{ color: "red" }}>
                          กรุณาเลือก Service By
                        </FormHelperText>
                      )}
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
                        style={{ visibility: chkservice_by }}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          disabled={read_serviceby_radio}
                        />
                        <FormControlLabel
                          value="R"
                          disabled={read_serviceby_radio}
                          control={<Radio size="small" />}
                          label="Not Accept"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: chkservice_by }}>
                    Action Date :
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                        value={action__serviceby}
                        onChange={(e) => setaction__serviceby(e.target.value)}
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                          visibility: chkservice_by,
                        }}
                      />
                    </FormControl>
                  </td>{" "}
                </tr>
                <tr
                // style={{ display: "none" }}
                >
                  <th colSpan={5}></th>
                  <td className="Style4" style={{ visibility: chkservice_by }}>
                    Comment :
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        disabled={read_serviceby_cmmt}
                        size="small"
                        value={cmmtradio_serviceby}
                        onChange={(e) => setcmmtradio_serviceby(e.target.value)}
                        style={{ visibility: chkservice_by }}
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
                        disabled={read_boistff}
                        value={selectboi_staff}
                        onChange={(e) => {
                          setselectboi_staff(e.target.value);
                        }}
                        style={{
                          borderColor: ErrorBoi_Staff ? "red" : undefined,
                        }}
                        error={ErrorBoi_Staff && !selectboi_staff}
                        size="small"
                        helperText={
                          ErrorBoi_Staff && !selectboi_staff
                            ? "BOI Staff"
                            : undefined
                        }
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
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_boistaff}
                        onChange={(e) =>
                          setselectradio_boistaff(e.target.value)
                        }
                        style={{ visibility: chkboistaff }}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          disabled={read_boistff_radio}
                        />
                        <FormControlLabel
                          value="R"
                          disabled={read_boistff_radio}
                          control={<Radio size="small" />}
                          label="No Accept"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: chkboistaff }}>
                    Action Date :
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                        value={action__boistaff}
                        onChange={(e) => setaction__boistaff(e.target.value)}
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                          visibility: chkboistaff,
                        }}
                      />
                    </FormControl>
                  </td>{" "}
                </tr>
                <tr
                //style={{ display: "none" }}
                >
                  <th colSpan={5}></th>
                  <td className="Style4" style={{ visibility: chkboistaff }}>
                    Comment :
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        disabled={read_boistff_cmmt}
                        size="small"
                        value={cmmtradio_boistaff}
                        onChange={(e) => setcmmtradio_boistaff(e.target.value)}
                        style={{ visibility: chkboistaff }}
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
                        disabled={read_boimana}
                        value={selectboi_manager}
                        onChange={(e) => setselectboi_manager(e.target.value)}
                        size="small"
                        style={{
                          borderColor: ErrorBoi_manager ? "red" : undefined,
                        }}
                        error={ErrorBoi_manager && !selectboi_manager}
                        helperText={
                          ErrorBoi_manager && !selectboi_manager
                            ? "BOI Manager"
                            : undefined
                        }
                      >
                        {boi_manager.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {/* {ErrorBoi_manager && <FormHelperText style={{color : "red"}}>กรุณาเลือก BOI Manager</FormHelperText>} */}
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        style={{ visibility: chkboimanager }}
                        value={selectradio_boimanager}
                        onChange={(e) =>
                          setselectradio_boimanager(e.target.value)
                        }
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Approve"
                          disabled={read_boimana_radio}
                        />
                        <FormControlLabel
                          value="R"
                          control={<Radio size="small" />}
                          label="Reject"
                          disabled={read_boimana_radio}
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: chkboimanager }}>
                    Action Date :
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                        value={action__boimanager}
                        onChange={(e) => setaction__boimanager(e.target.value)}
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                          visibility: chkboimanager,
                        }}
                      />
                    </FormControl>
                  </td>{" "}
                </tr>
                <tr
                //style={{ display: "none" }}
                >
                  <th colSpan={5}></th>
                  <td className="Style4" style={{ visibility: chkboimanager }}>
                    Comment :
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        value={cmmtradio_boimanager}
                        disabled={read_boimana_cmmt}
                        onChange={(e) =>
                          setcmmtradio_boimanager(e.target.value)
                        }
                        style={{ visibility: chkboimanager }}
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
                        disabled={read_fac_mana}
                        onChange={(e) => setselectfac_manager(e.target.value)}
                        size="small"
                        style={{
                          borderColor: ErrorMana_Fac ? "red" : undefined,
                        }}
                        error={ErrorMana_Fac && !selectfac_manager}
                        helperText={
                          ErrorMana_Fac && !selectfac_manager
                            ? "BOI Manager"
                            : undefined
                        }
                      >
                        {fac_manager.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {/* {ErrorMana_Fac && <FormHelperText style={{color : "red"}}>กรุณาเลือก Factory Manager</FormHelperText>} */}
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
                        style={{ visibility: chkfacmanager }}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Approve"
                          disabled={read_fac_mana_radio}
                        />
                        <FormControlLabel
                          value="R"
                          disabled={read_fac_mana_radio}
                          control={<Radio size="small" />}
                          label="Reject"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>

                  <td className="Style7" style={{ visibility: chkfacmanager }}>
                    Action Date :
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                        value={action__facmanager}
                        onChange={(e) => setaction__facmanager(e.target.value)}
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                          visibility: chkfacmanager,
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <>
                  <tr
                  // style={{ display: "none" }}
                  >
                    <th colSpan={5}></th>
                    <td
                      className="Style4"
                      style={{ visibility: chkfacmanager }}
                    >
                      Comment :
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          disabled={read_fac_mana_cmmt}
                          size="small"
                          value={cmmtradio_facmanager}
                          onChange={(e) =>
                            setcmmtradio_facmanager(e.target.value)
                          }
                          style={{ visibility: chkfacmanager }}
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
                        disabled={read_accchk}
                        onChange={(e) => {
                          setselectacc_check(e.target.value);
                          settext_acc_check(e.target.value);
                        }}
                        size="small"
                        style={{
                          borderColor: ErrorAcc_check ? "red" : undefined,
                        }}
                        error={ErrorAcc_check && !selectacc_check}
                        helperText={
                          ErrorAcc_check && !selectacc_check
                            ? "BOI Manager"
                            : undefined
                        }
                      >
                        {acc_check.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {/* {ErrorAcc_check && <FormHelperText style={{color : "red"}}>กรุณาเลือก ACC Check</FormHelperText>} */}
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
                        style={{ visibility: chkacc_check }}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          disabled={read_accchk_radio}
                        />
                        <FormControlLabel
                          value="R"
                          control={<Radio size="small" />}
                          label="No Accept"
                          disabled={read_accchk_radio}
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: chkacc_check }}>
                    Action Date :
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                        value={action__acc_check}
                        onChange={(e) => setaction__acc_check(e.target.value)}
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                          visibility: chkacc_check,
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr style={{ visibility: chkacc_check }}>
                  <th colSpan={5}></th>
                  <td className="Style4">Comment :</td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        disabled={read_accchk_cmmt}
                        size="small"
                        value={cmmtradio_acc_check}
                        onChange={(e) => setcmmtradio_acc_check(e.target.value)}
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
                        style={{ visibility: chkowner }}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          disabled={read_owner_radio}
                        />
                        <FormControlLabel
                          value="R"
                          disabled={read_owner_radio}
                          control={<Radio size="small" />}
                          label="No Accept"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: chkowner }}>
                    Action Date :
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        value={action__owner}
                        onChange={(e) => setaction__owner(e.target.value)}
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                          visibility: chkowner,
                        }}
                      />
                    </FormControl>
                  </td>{" "}
                </tr>
                <tr
                // style={{ display: "none" }}
                >
                  <th colSpan={5}></th>
                  <td className="Style4" style={{ visibility: chkowner }}>
                    Comment :
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        disabled={read_owner_cmmt}
                        size="small"
                        value={cmmtradio_owner}
                        onChange={(e) => setcmmtradio_owner(e.target.value)}
                        style={{ visibility: chkowner }}
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
                        style={{ visibility: chkreceiver }}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          disabled={read_receive_radio}
                        />
                        <FormControlLabel
                          value="R"
                          disabled={read_receive_radio}
                          control={<Radio size="small" />}
                          label="No Accept"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: chkreceiver }}>
                    Action Date :
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        value={action__receiver}
                        onChange={(e) => setaction__receiver(e.target.value)}
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                          visibility: chkreceiver,
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>

                <tr
                // style={{ display: "none" }}
                >
                  <th colSpan={5}></th>
                  <td className="Style4" style={{ visibility: chkreceiver }}>
                    Comment :
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled={read_receive_cmmt}
                        value={cmmtradio_receiver}
                        onChange={(e) => setcmmtradio_receiver(e.target.value)}
                        style={{ visibility: chkreceiver }}
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
                        size="small"
                        value={text_acc_check}
                        // value={Txt_acc_check}
                        onChange={(e) => settext_acc_check(e.target.value)}
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
                        style={{ visibility: chkacc_record }}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          disabled={read_record_radio}
                        />
                        <FormControlLabel
                          value="R"
                          disabled={read_record_radio}
                          control={<Radio size="small" />}
                          label="No Accept"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: chkacc_record }}>
                    Action Date :
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        value={action__record}
                        onChange={(e) => setaction__record(e.target.value)}
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                          visibility: chkacc_record,
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr
                //  style={{ display: "none" }}
                >
                  <th colSpan={5}></th>
                  <td className="Style4" style={{ visibility: chkacc_record }}>
                    Comment :
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        value={cmmtradio_record}
                        disabled={read_record_cmmt}
                        onChange={(e) => setcmmtradio_record(e.target.value)}
                        size="small"
                        style={{ visibility: chkacc_record }}
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
                        disabled={read_acc_mana}
                        onChange={(e) => setselectacc_manager(e.target.value)}
                        size="small"
                        style={{
                          borderColor: ErrorAcc_Mana ? "red" : undefined,
                        }}
                        error={ErrorAcc_Mana && !selectacc_manager}
                        helperText={
                          ErrorAcc_Mana && !selectacc_manager
                            ? "BOI Manager"
                            : undefined
                        }
                      >
                        {acc_manager.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {ErrorAcc_Mana && (
                        <FormHelperText style={{ color: "red" }}>
                          กรุณาเลือก ACC Manager
                        </FormHelperText>
                      )}
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
                        style={{ visibility: chkacc_manager }}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Approve"
                          disabled={read_acc_mana_radio}
                        />
                        <FormControlLabel
                          value="R"
                          disabled={read_acc_mana_radio}
                          control={<Radio size="small" />}
                          label="Reject"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td className="Style7" style={{ visibility: chkacc_manager }}>
                    Action Date :
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                        value={action__acc_manager}
                        onChange={(e) => setaction__acc_manager(e.target.value)}
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                          visibility: chkacc_manager,
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr
                // style={{ display: "none" }}
                >
                  <th colSpan={5}></th>
                  <td className="Style4" style={{ visibility: chkacc_manager }}>
                    Comment :
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        value={cmmtradio_acc_manager}
                        disabled={read_acc_mana_cmmt}
                        onChange={(e) =>
                          setcmmtradio_acc_manager(e.target.value)
                        }
                        size="small"
                        style={{ visibility: chkacc_manager }}
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
                        style={{ visibility: chkservice_close }}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Approve"
                          disabled={read_close_radio}
                        />
                        <FormControlLabel
                          value="R"
                          disabled={read_close_radio}
                          control={<Radio size="small" />}
                          label="Reject"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td
                    className="Style7"
                    style={{ visibility: chkservice_close }}
                  >
                    Action Date :
                  </td>
                  <td className="Style6">
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                        value={action__service_close_by}
                        onChange={(e) =>
                          setaction__service_close_by(e.target.value)
                        }
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                          visibility: chkservice_close,
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr
                // style={{ display: "none" }}
                >
                  <th colSpan={5}></th>
                  <td
                    className="Style4"
                    style={{ visibility: chkservice_close }}
                  >
                    Comment :
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        value={cmmtradio_service_close_by}
                        onChange={(e) =>
                          setcmmtradio_service_close_by(e.target.value)
                        }
                        size="small"
                        disabled={read_close_cmmt}
                        style={{ visibility: chkservice_close }}
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
                  style={{ visibility: btnsave }}
                  //style={{ display: STS == "FLTR001" ? "none" : "block" }}
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
                <Button
                  variant="contained"
                  size="medium"
                  color="error"
                  onClick={Reset}
                >
                  Reset
                </Button>
              </td>
            </tr>
          </Box>
        </div>
        <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
  <Button variant="contained" style={{ width: "200px", marginTop: "20px", marginBottom: "20px" , marginLeft:'20px',backgroundColor: "gray",}} onClick={() => window.history.back()}>
    BACK PAGE
  </Button>
  <Button variant="contained" style={{ width: "200px", marginTop: "20px", marginBottom: "20px" ,marginRight:'20px',backgroundColor: "gray", }}>
    Next Page
  </Button>
</div>

        </div>
      </div>
    </>
  );
}

export default TransFerDetail;
