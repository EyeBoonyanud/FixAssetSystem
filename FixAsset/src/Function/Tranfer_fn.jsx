import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Get_Data() {
  const EditFam = localStorage.getItem("EDIT");
  const User = localStorage.getItem("UserLogin");
  const View = localStorage.getItem("page");
  const navigate = useNavigate();

  // กรณี Insert Localstorage
  const ForRequester = localStorage.getItem("ForRequester");
  const For_Req = JSON.parse(ForRequester);
  const For_Fixed_Asst = localStorage.getItem("forDetail");
  const For_Fix = JSON.parse(For_Fixed_Asst);
  const ForTransfer = localStorage.getItem("For_Transfer");
  const For_Trans = JSON.parse(ForTransfer);
  const Routing = localStorage.getItem("For_Routing");
  const For_Rou = JSON.parse(Routing);
  const For_edit_date_cer = localStorage.getItem("Edit_cer_date");
  const Edit_Date_cer = JSON.parse(For_edit_date_cer);

  // กรณี Edit LocalStorage
  const Edit_trans = localStorage.getItem("Edit_Trans");
  const For_edit_trans = JSON.parse(Edit_trans);
  const For_edit_request = localStorage.getItem("For_Req_Edit");
  const For_Rq_Edit = JSON.parse(For_edit_request);
  const Edit_rout = localStorage.getItem("Edit_routing");
  const For_Edit_Rou = JSON.parse(Edit_rout);
  console.log("For_Edit_Rou",For_Edit_Rou,Edit_Date_cer)

  const [STS1, setSTS1] = useState("");
  const [For_sts_reject, setFor_sts_reject] = useState("");
  const [ownersend, setownersend] = useState("");
  const [trans_factory, settrans_factory] = useState([]);
  const [selecttrans_factory, setselecttrans_factory] = useState("");
  const [trans_cc, settrans_cc] = useState([]);
  const [selecttrans_cc, setselecttrans_cc] = useState([]);
  const [datanew_boi, setdatanew_boi] = useState([]);
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
  const [CheckSubmit, setCheckSubmit] = useState("False");
  const [CheckSave, setCheckSave] = useState("False");
  const [certificate_date ,setcertificate_date] = useState("")

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
  const [ErrorDate, setErrorDate] = useState(false);
  const [ErrorTel_Rq, setErrorTel_Rq] = useState(false);
  const [ErrorDept, setErrorDept] = useState(false);
  const [ErrNewboi, setErrNewboi] = useState(false);

  let STS = "";
  let Fam_list = "";
  let servivedept = "";

  if (For_Req !== null) {
    Fam_list = For_Req[0];
    let Service_code = Fam_list.split("-")[1];
    servivedept = Service_code + ":" + For_Req[9];
  } else {
    Fam_list = For_Rq_Edit[0];
    let Service_code = Fam_list.split("-")[1];
    servivedept = Service_code + ":" + For_Rq_Edit[13];
  }
  const SERVICEDEPT = () => {
    setservice_dept(servivedept);
  };

  /////////////// ตัวแปร Radio button//////////////////////////////
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

  /////////////// ตัวแปร Check Commnet //////////////////////////////
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
  /////////////// ตัวแปร Check Action Date //////////////////////////////
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

  /////////////// ตัวแปร Check Read Only //////////////////////////////
  const [read_trans_fac, setReadTransFac] = useState(true);
  const [read_trans_cc, setReadTransCC] = useState(true);
  const [read_tel, setReadTel] = useState(true);
  const [read_plan_date, setReadPlanDate] = useState(true);
  const [read_newowner, setReadNewOwnerCmmt] = useState(true);
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


  /////////////// ตัวแปร Check ซ่อนไม่ซ่อน ของ UI //////////////////////////////
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

  // comment ซ่อน ไม่ซ่อน
  const [CM_DepartmentManager, setCM_DepartmentManager] = useState("none");
  const [CM_service_by, setCM_service_by] = useState("none");
  const [CM_boistaff, setCM_boistaff] = useState("none");
  const [CM_boimanager, setCM_boimanager] = useState("none");
  const [CM_facmanager, setCM_facmanager] = useState("none");
  const [CM_acc_check, setCM_acc_check] = useState("none");
  const [CM_owner, setCM_owner] = useState("none");
  const [CM_receiver, setCM_receiver] = useState("none");
  const [CM_acc_record, setCM_acc_record] = useState("none");
  const [CM_acc_manager, setCM_acc_manager] = useState("none");
  const [CM_service_close, setCM_service_close] = useState("none");
 
  // Donation check 
  const [chk_cer_date ,setchk_cer_date] = useState("")

  const [Showtype, setShowtype] = useState("");
  /////////////// ตัวแปร FormatDate //////////////////////////////
  const [currentDate, setCurrentDate] = useState(new Date());
  const formattedDate = `${currentDate
    .getDate()
    .toString()
    .padStart(2, "0")}/${(currentDate.getMonth() + 1)
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
  ////////////////////// Use Effect /////////////////////////////////
  useEffect(() => {
    openPopupLoadding();
    if (For_Rq_Edit != null) {
      setSTS1(For_Rq_Edit[10]);
      setFor_sts_reject(For_Rq_Edit[16]);
      Service_By();
      setShowtype(For_Rq_Edit[7]);
      if (For_Rq_Edit[7] == "GP01001") {
        FactoryCC();
        TransCC();
        BOI_FROM();
      }
    }
    if (For_Req != null) {
      setSTS1(For_Req[10]);
      Service_By();
      setShowtype(For_Req[6]);
      console.log(For_Req[6], "Showtype");
      if (For_Req[6] == "GP01001") {
        FactoryCC();
        TransCC();
        BOI_FROM();
      }
    }

    Department_Mana();
    SERVICEDEPT();
    BOI_Staff();
    BOI_Manager();
    Fac_manager();
    ACC_Check();
    ACC_Manager();
    if (EditFam != null) {
      edit_New_BOI();
    }

    if (EditFam != null) {
      if (For_Rq_Edit != null) {
        openPopupLoadding();
        STS = For_Rq_Edit[10];
        Fam_list = For_Rq_Edit[0];
        setownersend(For_Rq_Edit[20]);
        setowner_roting(For_Rq_Edit[2]);
        if (For_Rq_Edit[7] == "GP01001") {
          New_Owner(For_edit_trans[0][1], For_edit_trans[0][0]);
          if (For_edit_trans != null || EditFam != null) {
            edit_New_BOI();
            if (
              For_edit_trans[0][2] === null ||
              For_edit_trans[0][2] === "" ||
              For_edit_trans[0][2] === undefined ||
              For_edit_trans[0][2] === "null"
            ) {
              setnew_boi("");
            } else {
              setnew_boi(For_edit_trans[0][2]);
            }
            if (
              For_edit_trans[0][9] === null ||
              For_edit_trans[0][9] === "" ||
              For_edit_trans[0][9] === undefined ||
              For_edit_trans[0][9] === "null"
            ) {
              setselectnew_owner("");
            } else {
              setselectnew_owner(For_edit_trans[0][9]);
            }
            if (
              For_edit_trans[0][6] === null ||
              For_edit_trans[0][6] === "" ||
              For_edit_trans[0][6] === undefined ||
              For_edit_trans[0][6] === "null"
            ) {
              setabnormal("");
            } else {
              setabnormal(For_edit_trans[0][6]);
            }
            if (
              For_edit_trans[0][4] === null ||
              For_edit_trans[0][4] === "" ||
              For_edit_trans[0][4] === undefined ||
              For_edit_trans[0][4] === "null"
            ) {
              setTel_for_trans("");
            } else {
              setTel_for_trans(For_edit_trans[0][4]);
            }
            if (
              For_edit_trans[0][3] === null ||
              For_edit_trans[0][3] === "" ||
              For_edit_trans[0][3] === undefined ||
              For_edit_trans[0][3] === "null"
            ) {
              setreceiver("");
            } else {
              setreceiver(For_edit_trans[0][3]);
            }
            if (
              For_edit_trans[0][5] === null ||
              For_edit_trans[0][5] === "" ||
              For_edit_trans[0][5] === undefined ||
              For_edit_trans[0][5] === "null"
            ) {
              setplan_date("");
            } else {
              setplan_date(For_edit_trans[0][5]);
            }

            // setของ Edit Trans

            if (
              For_edit_trans[0][14] === null ||
              For_edit_trans[0][14] === "" ||
              For_edit_trans[0][14] === undefined ||
              For_edit_trans[0][14] === "null"
            ) {
              setsts("");
            } else {
              setsts(For_edit_trans[0][14]);
            }
          }

          if (For_Edit_Rou != null) {
            if (
              For_Edit_Rou[0][7] === null ||
              For_Edit_Rou[0][7] === "" ||
              For_Edit_Rou[0][7] === undefined ||
              For_Edit_Rou[0][7] === "null"
            ) {
              setTel_service("");
            } else {
              setTel_service(For_Edit_Rou[0][7]);
            }

            //
            if (STS != "FLTR001") {
              //Depat Mana
              setaction__dept(For_Edit_Rou[0][1]);
              setselectradio_dept(For_Edit_Rou[0][2]);
              if (For_Edit_Rou[0][3] == "null") {
                setcmmtradio_dept("");
              } else {
                setcmmtradio_dept(For_Edit_Rou[0][3]);
              }

              // Serviceby
              setaction__serviceby(For_Edit_Rou[0][6]);
              setselectradio_serviceby(For_Edit_Rou[0][41]);
              if (For_Edit_Rou[0][42] == "null") {
                setcmmtradio_serviceby("");
              } else {
                setcmmtradio_serviceby(For_Edit_Rou[0][42]);
              }

              // BOI STAFF
              setaction__boistaff(For_Edit_Rou[0][9]);
              setselectradio_boistaff(For_Edit_Rou[0][10]);
              if (For_Edit_Rou[0][11] == "null") {
                setcmmtradio_boistaff("");
              } else {
                setcmmtradio_boistaff(For_Edit_Rou[0][11]);
              }

              // BOI Manager
              setaction__boimanager(For_Edit_Rou[0][13]);
              setselectradio_boimanager(For_Edit_Rou[0][14]);
              if (For_Edit_Rou[0][15] == "null") {
                setcmmtradio_boimanager("");
              } else {
                setcmmtradio_boimanager(For_Edit_Rou[0][15]);
              }
              // FAC_mana
              setaction__facmanager(For_Edit_Rou[0][17]);
              setselectradio_facmanager(For_Edit_Rou[0][18]);
              if (For_Edit_Rou[0][19] == "null") {
                setcmmtradio_facmanager("");
              } else {
                setcmmtradio_facmanager(For_Edit_Rou[0][19]);
              }

              // ACC Check
              setaction__acc_check(For_Edit_Rou[0][21]);
              setselectradio_acc_check(For_Edit_Rou[0][22]);
              if (For_Edit_Rou[0][23] == "null") {
                setcmmtradio_acc_check("");
              } else {
                setcmmtradio_acc_check(For_Edit_Rou[0][23]);
              }

              //Owner
              setaction__owner(For_Edit_Rou[0][33]);
              setselectradio_owner(For_Edit_Rou[0][34]);
              if (For_Edit_Rou[0][35] == "null") {
                setcmmtradio_owner("");
              } else {
                setcmmtradio_owner(For_Edit_Rou[0][35]);
              }

              // Receiver
              setaction__receiver(For_edit_trans[0][11]);
              setselectradio_receiver(For_edit_trans[0][10]);

              if (For_edit_trans[0][12] == "null") {
                setcmmtradio_receiver("");
              } else {
                setcmmtradio_receiver(For_edit_trans[0][12]);
              }

              // Record
              setaction__record(For_Edit_Rou[0][25]);
              setselectradio_record(For_Edit_Rou[0][26]);
              if (For_Edit_Rou[0][27] == "null") {
                setcmmtradio_record("");
              } else {
                setcmmtradio_record(For_Edit_Rou[0][27]);
              }

              // Acc manager
              setaction__acc_manager(For_Edit_Rou[0][29]);
              setselectradio_acc_manager(For_Edit_Rou[0][30]);
              if (For_Edit_Rou[0][31] == "null") {
                setcmmtradio_acc_manager("");
              } else {
                setcmmtradio_acc_manager(For_Edit_Rou[0][31]);
              }

              // Service Close By
              setaction__service_close_by(For_Edit_Rou[0][37]);
              setselectradio_service_close_by(For_Edit_Rou[0][43]);
              if (For_Edit_Rou[0][38] == "null") {
                setcmmtradio_service_close_by("");
              } else {
                setcmmtradio_service_close_by(For_Edit_Rou[0][38]);
              }

              //readonly

              if (STS == "FLTR001" || For_Rq_Edit[16] === "R") {
                setReadTransFac(false);
                setReadTransCC(false);
                setReadTel(false);
                setReadPlanDate(false);
                setReadNewOwnerCmmt(false);
                setReadDept(false);
                setReadDeptRadio(false);
                setReadDeptCmmt(false);
                setReadServiceBy(false);
                setReadServiceByRadio(false);
                setReadServiceByCmmt(false);
                setReadBoistff(false);
                setReadBoistffRadio(false);
                setReadBoistffCmmt(false);
                setReadBoimana(false);
                setReadBoimanaRadio(false);
                setReadBoimanaCmmt(false);
                setReadFacMana(false);
                setReadFacManaRadio(false);
                setReadFacManaCmmt(false);
                setReadAccchk(false);
                setReadAccchkRadio(false);
                setReadAccchkCmmt(false);
                setReadOwnerRadio(false);
                setReadOwnerCmmt(false);
                setReadReceiveRadio(false);
                setReadReceiveCmmt(false);
                setReadRecordRadio(false);
                setReadRecordCmmt(false);
                setReadAccMana(false);
                setReadAccManaRadio(false);
                setReadAccManaCmmt(false);
                setReadCloseRadio(false);
                setReadCloseCmmt(false);
                if (STS == "FLTR092") {
                  setcheckrdo("visible");
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setCM_DepartmentManager("table-row");
                }
                if (STS == "FLTR093") {
                  setchkservice_by("visible");
                  setcheckrdo("visible");
                  setCM_service_by("table-row");
                  setCM_DepartmentManager("table-row");
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setReadServiceByRadio(true);
                  setReadServiceByCmmt(true);
                }
                if (STS == "FLTR094") {
                  setchkboistaff("visible");
                  setchkservice_by("visible");
                  setcheckrdo("visible");
                  setCM_service_by("table-row");
                  setCM_DepartmentManager("table-row");
                  setCM_boistaff("table-row");
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setReadServiceByRadio(true);
                  setReadServiceByCmmt(true);
                  setReadBoistffRadio(true);
                  setReadBoistffCmmt(true);
                }
                if (STS == "FLTR095") {
                  setchkboimanager("visible");
                  setchkboistaff("visible");
                  setchkservice_by("visible");
                  setcheckrdo("visible");
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setReadServiceByRadio(true);
                  setReadServiceByCmmt(true);
                  setReadBoistffRadio(true);
                  setReadBoistffCmmt(true);
                  setReadBoimanaRadio(true);
                  setReadBoimanaCmmt(true);
                  setCM_DepartmentManager("table-row");
                  setCM_service_by("table-row");
                  setCM_boistaff("table-row");
                  setCM_boimanager("table-row");
                }
                if (STS == "FLTR096") {
                  setchkfacmanager("visible");
                  setchkboimanager("visible");
                  setchkboistaff("visible");
                  setchkservice_by("visible");
                  setcheckrdo("visible");
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setReadServiceByRadio(true);
                  setReadServiceByCmmt(true);
                  setReadBoistffRadio(true);
                  setReadBoistffCmmt(true);
                  setReadBoimanaRadio(true);
                  setReadBoimanaCmmt(true);
                  setReadFacManaRadio(true);
                  setReadFacManaCmmt(true);
                  setCM_DepartmentManager("table-row");
                  setCM_service_by("table-row");
                  setCM_boistaff("table-row");
                  setCM_boimanager("table-row");
                  setCM_facmanager("table-row");
                }
                if (STS == "FLTR907") {
                  setchkacc_check("visible");
                  setchkfacmanager("visible");
                  setchkboimanager("visible");
                  setchkboistaff("visible");
                  setchkservice_by("visible");
                  setcheckrdo("visible");
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setReadServiceByRadio(true);
                  setReadServiceByCmmt(true);
                  setReadBoistffRadio(true);
                  setReadBoistffCmmt(true);
                  setReadBoimanaRadio(true);
                  setReadBoimanaCmmt(true);
                  setReadFacManaRadio(true);
                  setReadFacManaCmmt(true);
                  setReadAccchkRadio(true);
                  setReadAccchkCmmt(true);
                  setCM_service_by("table-row");
                  setCM_DepartmentManager("table-row");
                  setCM_boistaff("table-row");
                  setCM_boimanager("table-row");
                  setCM_facmanager("table-row");
                  setCM_acc_check("table-row");
                }
                if (STS == "FLTR908") {
                  setchkowner("visible");
                  setchkacc_check("visible");
                  setchkfacmanager("visible");
                  setchkboimanager("visible");
                  setchkboistaff("visible");
                  setchkservice_by("visible");
                  setcheckrdo("visible");
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setReadServiceByRadio(true);
                  setReadServiceByCmmt(true);
                  setReadBoistffRadio(true);
                  setReadBoistffCmmt(true);
                  setReadBoimanaRadio(true);
                  setReadBoimanaCmmt(true);
                  setReadFacManaRadio(true);
                  setReadFacManaCmmt(true);
                  setReadAccchkRadio(true);
                  setReadAccchkCmmt(true);
                  setReadOwnerRadio(true);
                  setReadOwnerCmmt(true);
                  setCM_service_by("table-row");
                  setCM_DepartmentManager("table-row");
                  setCM_boistaff("table-row");
                  setCM_boimanager("table-row");
                  setCM_facmanager("table-row");
                  setCM_acc_check("table-row");
                  setCM_owner("table-row");
                }
                if (STS == "FLTR909") {
                  setchkreceiver("visible");
                  setchkowner("visible");
                  setchkacc_check("visible");
                  setchkfacmanager("visible");
                  setchkboimanager("visible");
                  setchkboistaff("visible");
                  setchkservice_by("visible");
                  setcheckrdo("visible");
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setReadServiceByRadio(true);
                  setReadServiceByCmmt(true);
                  setReadBoistffRadio(true);
                  setReadBoistffCmmt(true);
                  setReadBoimanaRadio(true);
                  setReadBoimanaCmmt(true);
                  setReadFacManaRadio(true);
                  setReadFacManaCmmt(true);
                  setReadAccchkRadio(true);
                  setReadAccchkCmmt(true);
                  setReadOwnerRadio(true);
                  setReadOwnerCmmt(true);
                  setReadReceiveRadio(true);
                  setReadReceiveCmmt(true);
                  setCM_service_by("table-row");
                  setCM_DepartmentManager("table-row");
                  setCM_boistaff("table-row");
                  setCM_boimanager("table-row");
                  setCM_facmanager("table-row");
                  setCM_acc_check("table-row");
                  setCM_owner("table-row");
                  setCM_receiver("table-row");
                }
                if (STS == "FLTR910") {
                  setchkacc_record("visible");
                  setchkreceiver("visible");
                  setchkowner("visible");
                  setchkacc_check("visible");
                  setchkfacmanager("visible");
                  setchkboimanager("visible");
                  setchkboistaff("visible");
                  setchkservice_by("visible");
                  setcheckrdo("visible");
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setReadServiceByRadio(true);
                  setReadServiceByCmmt(true);
                  setReadBoistffRadio(true);
                  setReadBoistffCmmt(true);
                  setReadBoimanaRadio(true);
                  setReadBoimanaCmmt(true);
                  setReadFacManaRadio(true);
                  setReadFacManaCmmt(true);
                  setReadAccchkRadio(true);
                  setReadAccchkCmmt(true);
                  setReadOwnerRadio(true);
                  setReadOwnerCmmt(true);
                  setReadReceiveRadio(true);
                  setReadReceiveCmmt(true);
                  setReadRecordRadio(true);
                  setReadRecordCmmt(true);
                  setCM_service_by("table-row");
                  setCM_DepartmentManager("table-row");
                  setCM_boistaff("table-row");
                  setCM_boimanager("table-row");
                  setCM_facmanager("table-row");
                  setCM_acc_check("table-row");
                  setCM_acc_record("table-row");
                  setCM_owner("table-row");
                  setCM_receiver("table-row");
                }
                if (STS == "FLTR911") {
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
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setReadServiceByRadio(true);
                  setReadServiceByCmmt(true);
                  setReadBoistffRadio(true);
                  setReadBoistffCmmt(true);
                  setReadBoimanaRadio(true);
                  setReadBoimanaCmmt(true);
                  setReadFacManaRadio(true);
                  setReadFacManaCmmt(true);
                  setReadAccchkRadio(true);
                  setReadAccchkCmmt(true);
                  setReadOwnerRadio(true);
                  setReadOwnerCmmt(true);
                  setReadReceiveRadio(true);
                  setReadReceiveCmmt(true);
                  setReadRecordRadio(true);
                  setReadRecordCmmt(true);
                  setReadAccManaRadio(true);
                  setReadAccManaCmmt(true);
                  setCM_service_by("table-row");
                  setCM_DepartmentManager("table-row");
                  setCM_boistaff("table-row");
                  setCM_boimanager("table-row");
                  setCM_facmanager("table-row");
                  setCM_acc_check("table-row");
                  setCM_owner("table-row");
                  setCM_receiver("table-row");
                  setCM_acc_record("table-row");
                  setCM_acc_manager("table-row");
                }
                if (STS == "FLTR912") {
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
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setReadServiceByRadio(true);
                  setReadServiceByCmmt(true);
                  setReadBoistffRadio(true);
                  setReadBoistffCmmt(true);
                  setReadBoimanaRadio(true);
                  setReadBoimanaCmmt(true);
                  setReadFacManaRadio(true);
                  setReadFacManaCmmt(true);
                  setReadAccchkRadio(true);
                  setReadAccchkCmmt(true);
                  setReadOwnerRadio(true);
                  setReadOwnerCmmt(true);
                  setReadReceiveRadio(true);
                  setReadReceiveCmmt(true);
                  setReadRecordRadio(true);
                  setReadRecordCmmt(true);
                  setReadAccManaRadio(true);
                  setReadAccManaCmmt(true);
                  setReadCloseRadio(true);
                  setReadCloseCmmt(true);
                  setCM_service_by("table-row");
                  setCM_DepartmentManager("table-row");
                  setCM_boistaff("table-row");
                  setCM_boimanager("table-row");
                  setCM_facmanager("table-row");
                  setCM_acc_check("table-row");
                  setCM_owner("table-row");
                  setCM_receiver("table-row");
                  setCM_acc_record("table-row");
                  setCM_acc_manager("table-row");
                  setCM_service_close("table-row");
                }

                //Saveelse if
              }
              // else if(For_Rq_Edit[16]==="R"){

              // }
              else if (STS == "FLTR002") {
                setaction__dept(formattedDate);
                setcheckrdo("visible");
                setReadDeptRadio(false);
                setReadDeptCmmt(false);
                setCM_DepartmentManager("table-row");
              } else if (STS == "FLTR003") {
                setaction__serviceby(formattedDate);
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadServiceByRadio(false);
                setReadServiceByCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
              } else if (STS == "FLTR004") {
                setaction__boistaff(formattedDate);
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadBoistffRadio(false);
                setReadBoistffCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
              } else if (STS == "FLTR005") {
                setaction__boimanager(formattedDate);
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadBoimanaRadio(false);
                setReadBoimanaCmmt(false);
                setCM_DepartmentManager("table-row");
                setCM_service_by("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
              } else if (STS == "FLTR006") {
                setaction__facmanager(formattedDate);
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadFacManaRadio(false);
                setReadFacManaCmmt(false);
                setCM_DepartmentManager("table-row");
                setCM_service_by("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
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
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
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
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
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
                setCM_boistaff("table-row");
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
                setCM_receiver("table-row");
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
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_acc_record("table-row");
                setCM_owner("table-row");
                setCM_receiver("table-row");
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
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
                setCM_receiver("table-row");
                setCM_acc_record("table-row");
                setCM_acc_manager("table-row");
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
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
                setCM_receiver("table-row");
                setCM_acc_record("table-row");
                setCM_acc_manager("table-row");
                setCM_service_close("table-row");
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
              //setbtnsave("visible");
            }
          } else {
            if (STS == "FLTR001") {
              setReadTransFac(false);
              setReadTransCC(false);
              setReadTel(false);
              setReadPlanDate(false);
              setReadNewOwnerCmmt(false);
              setReadDept(false);
              setReadDeptRadio(false);
              setReadDeptCmmt(false);
              setReadServiceBy(false);
              setReadServiceByRadio(false);
              setReadServiceByCmmt(false);
              setReadBoistff(false);
              setReadBoistffRadio(false);
              setReadBoistffCmmt(false);
              setReadBoimana(false);
              setReadBoimanaRadio(false);
              setReadBoimanaCmmt(false);
              setReadFacMana(false);
              setReadFacManaRadio(false);
              setReadFacManaCmmt(false);
              setReadAccchk(false);
              setReadAccchkRadio(false);
              setReadAccchkCmmt(false);
              setReadOwnerRadio(false);
              setReadOwnerCmmt(false);
              setReadReceiveRadio(false);
              setReadReceiveCmmt(false);
              setReadRecordRadio(false);
              setReadRecordCmmt(false);
              setReadAccMana(false);
              setReadAccManaRadio(false);
              setReadAccManaCmmt(false);
              setReadCloseRadio(false);
              setReadCloseCmmt(false);
              //Save
            }
          }
        } else if (For_Rq_Edit[7] == "GP01004" || For_Rq_Edit[7] == "GP01005" ||  For_Rq_Edit[7] == "GP01007") {
        
          if (For_Edit_Rou != null) {
            console.log("STS",STS)
            if (
              For_Edit_Rou[0][7] === null ||
              For_Edit_Rou[0][7] === "" ||
              For_Edit_Rou[0][7] === undefined ||
              For_Edit_Rou[0][7] === "null"
            ) {
              setTel_service("");
            } else {
              setTel_service(For_Edit_Rou[0][7]);
            }
            if (STS != "FLWO001" || STS != "FLLS001" || STS != "FLDN001") {
              
              //Depat Mana
              setcertificate_date(Edit_Date_cer[0])
              setaction__dept(For_Edit_Rou[0][1]);
              setselectradio_dept(For_Edit_Rou[0][2]);
              if (For_Edit_Rou[0][3] == "null") {
                setcmmtradio_dept("");
              } else {
                setcmmtradio_dept(For_Edit_Rou[0][3]);
              }
              // Serviceby
              setaction__serviceby(For_Edit_Rou[0][6]);
              setselectradio_serviceby(For_Edit_Rou[0][41]);
              if (For_Edit_Rou[0][42] == "null") {
                setcmmtradio_serviceby("");
              } else {
                setcmmtradio_serviceby(For_Edit_Rou[0][42]);
              }
              // BOI STAFF
              setaction__boistaff(For_Edit_Rou[0][9]);
              setselectradio_boistaff(For_Edit_Rou[0][10]);
              if (For_Edit_Rou[0][11] == "null") {
                setcmmtradio_boistaff("");
              } else {
                setcmmtradio_boistaff(For_Edit_Rou[0][11]);
              }
              // BOI Manager
              setaction__boimanager(For_Edit_Rou[0][13]);
              setselectradio_boimanager(For_Edit_Rou[0][14]);
              if (For_Edit_Rou[0][15] == "null") {
                setcmmtradio_boimanager("");
              } else {
                setcmmtradio_boimanager(For_Edit_Rou[0][15]);
              }
              // FAC_mana
              setaction__facmanager(For_Edit_Rou[0][17]);
              setselectradio_facmanager(For_Edit_Rou[0][18]);
              if (For_Edit_Rou[0][19] == "null") {
                setcmmtradio_facmanager("");
              } else {
                setcmmtradio_facmanager(For_Edit_Rou[0][19]);
              }
              // ACC Check
              setaction__acc_check(For_Edit_Rou[0][21]);
              setselectradio_acc_check(For_Edit_Rou[0][22]);
              if (For_Edit_Rou[0][23] == "null") {
                setcmmtradio_acc_check("");
              } else {
                setcmmtradio_acc_check(For_Edit_Rou[0][23]);
              }
              //Owner
              setaction__owner(For_Edit_Rou[0][33]);
              setselectradio_owner(For_Edit_Rou[0][34]);
              if (For_Edit_Rou[0][35] == "null") {
                setcmmtradio_owner("");
              } else {
                setcmmtradio_owner(For_Edit_Rou[0][35]);
              }

              // Record
              setaction__record(For_Edit_Rou[0][25]);
              setselectradio_record(For_Edit_Rou[0][26]);
              if (For_Edit_Rou[0][27] == "null") {
                setcmmtradio_record("");
              } else {
                setcmmtradio_record(For_Edit_Rou[0][27]);
              }

              // Acc manager
              setaction__acc_manager(For_Edit_Rou[0][29]);
              setselectradio_acc_manager(For_Edit_Rou[0][30]);
              if (For_Edit_Rou[0][31] == "null") {
                setcmmtradio_acc_manager("");
              } else {
                setcmmtradio_acc_manager(For_Edit_Rou[0][31]);
              }

              // Service Close By
              setaction__service_close_by(For_Edit_Rou[0][37]);
              setselectradio_service_close_by(For_Edit_Rou[0][43]);
              if (For_Edit_Rou[0][38] == "null") {
                setcmmtradio_service_close_by("");
              } else {
                setcmmtradio_service_close_by(For_Edit_Rou[0][38]);
              }
            if (Edit_Date_cer != null){
              if(Edit_Date_cer == "null"){
                setcertificate_date("")
              } else{
                setcertificate_date(Edit_Date_cer[0])
              }
            }
              //readonly

              if (STS == "FLWO001" || For_Rq_Edit[16] === "R" || STS == "FLLS001" || STS == "FLDN001"  ) {

                setReadTel(false);
                setReadDept(false);
                setReadDeptRadio(false);
                setReadDeptCmmt(false);
                setReadServiceBy(false);
                setReadServiceByRadio(false);
                setReadServiceByCmmt(false);
                setReadBoistff(false);
                setReadBoistffRadio(false);
                setReadBoistffCmmt(false);
                setReadBoimana(false);
                setReadBoimanaRadio(false);
                setReadBoimanaCmmt(false);
                setReadFacMana(false);
                setReadFacManaRadio(false);
                setReadFacManaCmmt(false);
                setReadAccchk(false);
                setReadAccchkRadio(false);
                setReadAccchkCmmt(false);
                setReadOwnerRadio(false);
                setReadOwnerCmmt(false);
                setReadRecordRadio(false);
                setReadRecordCmmt(false);
                setReadAccMana(false);
                setReadAccManaRadio(false);
                setReadAccManaCmmt(false);
                setReadCloseRadio(false);
                setReadCloseCmmt(false);
                if (STS == "FLWO092" || STS == "FLLS092" || STS == "FLDN092") {
                  setcheckrdo("visible");
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setCM_DepartmentManager("table-row");
                }
                if (STS == "FLWO093" || STS == "FLLS093" || STS == "FLDN093") {
                  setchkservice_by("visible");
                  setcheckrdo("visible");
                  setCM_service_by("table-row");
                  setCM_DepartmentManager("table-row");
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setReadServiceByRadio(true);
                  setReadServiceByCmmt(true);
                }
                if (STS == "FLWO094" || STS == "FLLS094" || STS == "FLDN094") {
                  setchkboistaff("visible");
                  setchkservice_by("visible");
                  setcheckrdo("visible");
                  setCM_service_by("table-row");
                  setCM_DepartmentManager("table-row");
                  setCM_boistaff("table-row");
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setReadServiceByRadio(true);
                  setReadServiceByCmmt(true);
                  setReadBoistffRadio(true);
                  setReadBoistffCmmt(true);
                }
                if (STS == "FLWO095" || STS == "FLLS095" || STS == "FLDN095") {
                  setchkboimanager("visible");
                  setchkboistaff("visible");
                  setchkservice_by("visible");
                  setcheckrdo("visible");
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setReadServiceByRadio(true);
                  setReadServiceByCmmt(true);
                  setReadBoistffRadio(true);
                  setReadBoistffCmmt(true);
                  setReadBoimanaRadio(true);
                  setReadBoimanaCmmt(true);
                  setCM_DepartmentManager("table-row");
                  setCM_service_by("table-row");
                  setCM_boistaff("table-row");
                  setCM_boimanager("table-row");
                }
                if (STS == "FLWO096"  || STS == "FLLS096" || STS == "FLDN096") {
                  setchkfacmanager("visible");
                  setchkboimanager("visible");
                  setchkboistaff("visible");
                  setchkservice_by("visible");
                  setcheckrdo("visible");
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setReadServiceByRadio(true);
                  setReadServiceByCmmt(true);
                  setReadBoistffRadio(true);
                  setReadBoistffCmmt(true);
                  setReadBoimanaRadio(true);
                  setReadBoimanaCmmt(true);
                  setReadFacManaRadio(true);
                  setReadFacManaCmmt(true);
                  setCM_DepartmentManager("table-row");
                  setCM_service_by("table-row");
                  setCM_boistaff("table-row");
                  setCM_boimanager("table-row");
                  setCM_facmanager("table-row");
                }
                if (STS == "FLWO907"  || STS == "FLLS907" || STS == "FLDN907") {
                  setchkacc_check("visible");
                  setchkfacmanager("visible");
                  setchkboimanager("visible");
                  setchkboistaff("visible");
                  setchkservice_by("visible");
                  setcheckrdo("visible");
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setReadServiceByRadio(true);
                  setReadServiceByCmmt(true);
                  setReadBoistffRadio(true);
                  setReadBoistffCmmt(true);
                  setReadBoimanaRadio(true);
                  setReadBoimanaCmmt(true);
                  setReadFacManaRadio(true);
                  setReadFacManaCmmt(true);
                  setReadAccchkRadio(true);
                  setReadAccchkCmmt(true);
                  setCM_service_by("table-row");
                  setCM_DepartmentManager("table-row");
                  setCM_boistaff("table-row");
                  setCM_boimanager("table-row");
                  setCM_facmanager("table-row");
                  setCM_acc_check("table-row");
                }
                if (STS == "FLWO908"  || STS == "FLDN908" || STS == "FLLS908") {
                  setchkowner("visible");
                  setchkacc_check("visible");
                  setchkfacmanager("visible");
                  setchkboimanager("visible");
                  setchkboistaff("visible");
                  setchkservice_by("visible");
                  setcheckrdo("visible");
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setReadServiceByRadio(true);
                  setReadServiceByCmmt(true);
                  setReadBoistffRadio(true);
                  setReadBoistffCmmt(true);
                  setReadBoimanaRadio(true);
                  setReadBoimanaCmmt(true);
                  setReadFacManaRadio(true);
                  setReadFacManaCmmt(true);
                  setReadAccchkRadio(true);
                  setReadAccchkCmmt(true);
                  setReadOwnerRadio(true);
                  setReadOwnerCmmt(true);
                  setCM_service_by("table-row");
                  setCM_DepartmentManager("table-row");
                  setCM_boistaff("table-row");
                  setCM_boimanager("table-row");
                  setCM_facmanager("table-row");
                  setCM_acc_check("table-row");
                  setCM_owner("table-row");
                }

                if (STS == "FLWO910" || STS == "FLLS910" || STS == "FLDN910") {
                  setchkacc_record("visible");
                  setchkreceiver("visible");
                  setchkowner("visible");
                  setchkacc_check("visible");
                  setchkfacmanager("visible");
                  setchkboimanager("visible");
                  setchkboistaff("visible");
                  setchkservice_by("visible");
                  setcheckrdo("visible");
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setReadServiceByRadio(true);
                  setReadServiceByCmmt(true);
                  setReadBoistffRadio(true);
                  setReadBoistffCmmt(true);
                  setReadBoimanaRadio(true);
                  setReadBoimanaCmmt(true);
                  setReadFacManaRadio(true);
                  setReadFacManaCmmt(true);
                  setReadAccchkRadio(true);
                  setReadAccchkCmmt(true);
                  setReadOwnerRadio(true);
                  setReadOwnerCmmt(true);
                  setReadRecordRadio(true);
                  setReadRecordCmmt(true);
                  setCM_service_by("table-row");
                  setCM_DepartmentManager("table-row");
                  setCM_boistaff("table-row");
                  setCM_boimanager("table-row");
                  setCM_facmanager("table-row");
                  setCM_acc_check("table-row");
                  setCM_acc_record("table-row");
                  setCM_owner("table-row");
                  setCM_receiver("table-row");
                }
                if (STS == "FLWO911" || STS == "FLLS911" || STS == "FLDN911") {
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
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setReadServiceByRadio(true);
                  setReadServiceByCmmt(true);
                  setReadBoistffRadio(true);
                  setReadBoistffCmmt(true);
                  setReadBoimanaRadio(true);
                  setReadBoimanaCmmt(true);
                  setReadFacManaRadio(true);
                  setReadFacManaCmmt(true);
                  setReadAccchkRadio(true);
                  setReadAccchkCmmt(true);
                  setReadOwnerRadio(true);
                  setReadOwnerCmmt(true);
                  setReadRecordRadio(true);
                  setReadRecordCmmt(true);
                  setReadAccManaRadio(true);
                  setReadAccManaCmmt(true);
                  setCM_service_by("table-row");
                  setCM_DepartmentManager("table-row");
                  setCM_boistaff("table-row");
                  setCM_boimanager("table-row");
                  setCM_facmanager("table-row");
                  setCM_acc_check("table-row");
                  setCM_owner("table-row");
                  setCM_receiver("table-row");
                  setCM_acc_record("table-row");
                  setCM_acc_manager("table-row");
                }
                if (STS == "FLWO912" || STS == "FLLS912" || STS == "FLDN912") {
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
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setReadServiceByRadio(true);
                  setReadServiceByCmmt(true);
                  setReadBoistffRadio(true);
                  setReadBoistffCmmt(true);
                  setReadBoimanaRadio(true);
                  setReadBoimanaCmmt(true);
                  setReadFacManaRadio(true);
                  setReadFacManaCmmt(true);
                  setReadAccchkRadio(true);
                  setReadAccchkCmmt(true);
                  setReadOwnerRadio(true);
                  setReadOwnerCmmt(true);
                  setReadRecordRadio(true);
                  setReadRecordCmmt(true);
                  setReadAccManaRadio(true);
                  setReadAccManaCmmt(true);
                  setReadCloseRadio(true);
                  setReadCloseCmmt(true);
                  setCM_service_by("table-row");
                  setCM_DepartmentManager("table-row");
                  setCM_boistaff("table-row");
                  setCM_boimanager("table-row");
                  setCM_facmanager("table-row");
                  setCM_acc_check("table-row");
                  setCM_owner("table-row");
                  setCM_receiver("table-row");
                  setCM_acc_record("table-row");
                  setCM_acc_manager("table-row");
                  setCM_service_close("table-row");
                }

                //Saveelse if
              } else if (STS == "FLWO002"|| STS == "FLLS002" || STS == "FLDN002") {
                setaction__dept(formattedDate);
                setcheckrdo("visible");
                setReadDeptRadio(false);
                setReadDeptCmmt(false);
                setCM_DepartmentManager("table-row");
              } else if (STS == "FLWO003" || STS == "FLLS003" || STS == "FLDN003") {
                setaction__serviceby(formattedDate);
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadServiceByRadio(false);
                setReadServiceByCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
              } else if (STS == "FLWO004" || STS == "FLLS004" || STS == "FLDN004") {
                setaction__boistaff(formattedDate);
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadBoistffRadio(false);
                setReadBoistffCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
              } else if (STS == "FLWO005" ||  STS == "FLLS005" || STS == "FLDN005") {
                setaction__boimanager(formattedDate);
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadBoimanaRadio(false);
                setReadBoimanaCmmt(false);
                setCM_DepartmentManager("table-row");
                setCM_service_by("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
              } else if (STS == "FLWO006" || STS == "FLLS006" || STS == "FLDN006") {
                setaction__facmanager(formattedDate);
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadFacManaRadio(false);
                setReadFacManaCmmt(false);
                setCM_DepartmentManager("table-row");
                setCM_service_by("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
              } else if (STS == "FLWO007" ||STS == "FLLS007"  || STS == "FLDN007") {
              
              
                if(STS == "FLDN007"){
                  console.log("เข้า Donation")
                  setcertificate_date(Edit_Date_cer[0][0])
                }
                setaction__acc_check(formattedDate);
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadAccchkRadio(false);
                setReadAccchkCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
              } else if (STS == "FLWO008" ||STS == "FLLS008"  || STS == "FLDN008") {
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
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
              } else if (STS == "FLWO010" || STS == "FLLS010" || STS == "FLDN010") {
                setaction__record(formattedDate);
                setchkacc_record("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadRecordRadio(false);
                setReadRecordCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_acc_record("table-row");
                setCM_owner("table-row");
              } else if (STS == "FLWO011" || STS == "FLLS011" || STS == "FLDN011") {
                setaction__acc_manager(formattedDate);
                setchkacc_manager("visible");
                setchkacc_record("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadAccManaRadio(false);
                setReadAccManaCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
                setCM_acc_record("table-row");
                setCM_acc_manager("table-row");
              } else if (STS == "FLWO012"|| STS == "FLLS012" || STS == "FLDN012") {
                setaction__service_close_by(formattedDate);
                setchkservice_close("visible");
                setchkacc_manager("visible");
                setchkacc_record("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadCloseRadio(false);
                setReadCloseCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
                setCM_acc_record("table-row");
                setCM_acc_manager("table-row");
                setCM_service_close("table-row");
              }
            } else if (STS == "FLWO001" || STS == "FLLS001" || STS == "FLDN001") {
              setReadTel(false);
              setReadNewOwnerCmmt(false);
              setReadDept(false);
              setReadServiceBy(false);
              setReadBoistff(false);
              setReadBoimana(false);
              setReadFacMana(false);
              setReadAccchk(false);
              setReadAccMana(false);
              //setbtnsave("visible");
            }
          } else {
            if (STS == "FLWO001" || STS == "FLLS001" || STS == "FLDN001") {
              setReadTel(false);
              setReadNewOwnerCmmt(false);
              setReadDept(false);
              setReadDeptRadio(false);
              setReadDeptCmmt(false);
              setReadServiceBy(false);
              setReadServiceByRadio(false);
              setReadServiceByCmmt(false);
              setReadBoistff(false);
              setReadBoistffRadio(false);
              setReadBoistffCmmt(false);
              setReadBoimana(false);
              setReadBoimanaRadio(false);
              setReadBoimanaCmmt(false);
              setReadFacMana(false);
              setReadFacManaRadio(false);
              setReadFacManaCmmt(false);
              setReadAccchk(false);
              setReadAccchkRadio(false);
              setReadAccchkCmmt(false);
              setReadOwnerRadio(false);
              setReadOwnerCmmt(false);
              setReadRecordRadio(false);
              setReadRecordCmmt(false);
              setReadAccMana(false);
              setReadAccManaRadio(false);
              setReadAccManaCmmt(false);
              setReadCloseRadio(false);
              setReadCloseCmmt(false);
              //Save
            }
          }
        }
      }
      setTimeout(function () {
        closePopupLoadding();
      }, 6000);
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
      if (For_Rou != null) {
        if (
          For_Rou[3] === null ||
          For_Rou[3] === "" ||
          For_Rou[3] === undefined ||
          For_Rou[3] === "null"
        ) {
          setTel_service("");
        } else {
          setTel_service(For_Rou[3]);
        }

        setowner_roting(For_Rou[9]);
      }
      if (For_Trans != null) {
        setownersend(For_Req[18]);
        setowner_roting(For_Req[1]);
        setdata_fromboi(For_Trans[2]);
        New_Owner(For_Trans[4], For_Trans[3]);
        if (
          For_Trans[5] === null ||
          For_Trans[5] === "" ||
          For_Trans[5] === undefined ||
          For_Trans[5] === "null"
        ) {
          setnew_boi("");
        } else {
          setnew_boi(For_Trans[5]);
        }
        if (
          For_Trans[6] === null ||
          For_Trans[6] === "" ||
          For_Trans[6] === undefined ||
          For_Trans[6] === "null"
        ) {
          setselectnew_owner("");
        } else {
          setselectnew_owner(For_Trans[6]);
        }
        if (
          For_Trans[7] === null ||
          For_Trans[7] === "" ||
          For_Trans[7] === undefined ||
          For_Trans[7] === "null"
        ) {
          setTel_for_trans("");
        } else {
          setTel_for_trans(For_Trans[7]);
        }
        if (
          For_Trans[9] === null ||
          For_Trans[9] === "" ||
          For_Trans[9] === undefined ||
          For_Trans[9] === "null"
        ) {
          setabnormal("");
        } else {
          setabnormal(For_Trans[9]);
        }
        if (
          For_Trans[10] === null ||
          For_Trans[10] === "" ||
          For_Trans[10] === undefined ||
          For_Trans[10] === "null"
        ) {
          setplan_date("");
        } else {
          setreceiver(For_Trans[10]);
        }
        if (
          For_Trans[8] === null ||
          For_Trans[8] === "" ||
          For_Trans[8] === undefined ||
          For_Trans[8] === "null"
        ) {
          setplan_date("");
        } else {
          setplan_date(For_Trans[8]);
        }
      } else {
        if (For_Req != null) {
          STS = For_Req[10];
          Fam_list = For_Req[0];
          setownersend(For_Req[18]);
          setowner_roting(For_Req[1]);
          setdata_fromboi("");
          setnew_boi("");
          setselectnew_owner("");
          setTel_for_trans("");
          setplan_date("");
          setabnormal("");
          setreceiver("");
        } else {
          Fam_list = For_Req[0];
        }
      }
      setTimeout(function () {
        closePopupLoadding();
      }, 4000);
    }
  }, []);

  const handleFactoryCC = async (event) => {
    setselecttrans_factory(event.target.value);
    if (EditFam != null) {
      if (For_edit_trans) {
        const data = [
          event.target.value,
          For_edit_trans[0][1],
          For_edit_trans[0][2],
          For_edit_trans[0][4],
          For_edit_trans[0][5],
          For_edit_trans[0][6],
          For_edit_trans[0][7],
          For_edit_trans[0][8],
          For_edit_trans[0][9],
          For_edit_trans[0][10],
          For_edit_trans[0][11],
          For_edit_trans[0][12],
          For_edit_trans[0][13],
        ];

        const data_edit = JSON.stringify(data);
        localStorage.setItem("Edit_Trans", data_edit);
      }
    } else {
      if (For_Req[0] == "" && For_Req[0] == null) {
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
        localStorage.setItem("For_Transfer", sentdata);
      }
    }
  };
  const BOI_FROM = async () => {
    try {
      const response = await axios.post("/select_BOI_from", {
        running: Fam_list,
      });
      const data = response.data;
      setdata_fromboi(data[0][0]);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleNew_BOI = async (event) => {
    setselectnew_owner("");
    setnew_boi("");
    let transCC = event;

    setErrorCC(false);
    setselecttrans_cc(event);
    New_Owner(transCC, selecttrans_factory);
    try {
      const response = await axios.post("/new_boi", {
        fac: selecttrans_factory,
        cc: transCC,
      });
      const data = response.data;
      const boi = data.flat();
      setdatanew_boi(boi);
      if (!boi || boi.length === 0) {
        setdatanew_boi(["NON BOI"]);
      } else {
        setdatanew_boi(boi);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleNewboi_proj = async (value) => {
    let NewPoroj = value;
    if (data_fromboi == "NON BOI" || data_fromboi == NewPoroj) {
      setsts("N");
      setabnormal("");
    } else {
      setsts("Y");
      setabnormal("Transfer to difference project");
    }
  };
  const New_Owner = async (selecttrans_cc, selecttrans_factory) => {
    try {
      const response = await axios.post("/new_owner", {
        fac: selecttrans_factory,
        cc: selecttrans_cc,
      });
      let data = response.data.flat();
      if (data.length == 0) {
        setnew_owner(["No Data"]);
      } else {
        setnew_owner(data);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleNewOwner = (event) => {
    let New_own = event;
    if (New_own == "No Data") {
      setselectnew_owner(New_own);
      setreceiver(New_own);
    } else {
      const parts = New_own.split(":");
      let result = parts[1].trim();
      setselectnew_owner(New_own);
      setreceiver(result);
    }
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const getDatatest = async () => {
    console.log("เข้า หาข้อมูล");
    if (EditFam != null) {
      try {
        const response = await axios.post("/getEdit_Trans", {
          FamNo: EditFam,
        });
        const data = await response.data;
        const data_edit = JSON.stringify(data);

        localStorage.setItem("Edit_Trans", data_edit);
      } catch (error) {
        console.error("Error during login:", error);
      }
      try {
        const response = await axios.post("/getEdit_routing", {
          FamNo: EditFam,
        });
        const data = await response.data;
        const data_edit = JSON.stringify(data);
        localStorage.setItem("Edit_routing", data_edit);
      } catch (error) {}
    } else {
      try {
        const response = await axios.post("/getEdit_Trans", {
          FamNo: Fam_list,
        });
        const data = await response.data;
        const data_edit = JSON.stringify(data);

        localStorage.setItem("For_Trans ", data_edit);
      } catch (error) {
        console.error("Error during login:", error);
      }
      try {
        const response = await axios.post("/getEdit_routing", {
          FamNo: Fam_list,
        });
        const data = await response.data;
        const data_edit = JSON.stringify(data);
        localStorage.setItem("For_Rou", data_edit);
        console.log(data, "data_edit");
      } catch (error) {}
    }
  };
  const Back_page = async () => {
    console.log("JJJJJJ");
    openPopupLoadding();
    let ServiceDept = "";
    let Type = "";
    if (EditFam != null) {
      if (For_Rq_Edit[9] != null) {
        ServiceDept = For_Rq_Edit[0].split("-")[1];
        Type = For_Rq_Edit[7];
      }
    } else {
      ServiceDept = For_Req[0].split("-")[1];
      Type = For_Req[6];
      console.log("JJJJJJ", For_Req[6]);
    }

    if (EditFam != null) {
      console.log("Type", Type);
      if (Type == "GP01001") {
        console.log("Type Tranfer", Type);
        try {
          const response = await axios.post("/Update_For_Req_All", {
            famno: For_Rq_Edit[0],
            dept: For_Rq_Edit[6],
            tel: For_Rq_Edit[3],
            remark: For_Rq_Edit[12],
            mrg_dept: selectdepartment_mana,
            serviceby: selectservice_by,
            servicetel: Tel_service,
            boisff: selectboi_staff,
            boimrg: selectboi_manager,
            fmby: selectfac_manager,
            accchk: selectacc_check,
            accmrg: selectacc_manager,
            updateby: For_Rq_Edit[2],
            record_by: text_acc_check,
            owner_id: For_Rq_Edit[17],
            owner_dept: For_Rq_Edit[18],
            owner_tel: For_Rq_Edit[19],
            service_close: selectservice_by,
            owner_by: owner_roting,
            service_dt: ServiceDept,
          });
        } catch (error) {
          console.error("Error updating submit status:", error.message);
        }
        try {
          const response = await axios.post("/ins_transfer", {
            running_no: EditFam,
            date_plan: plan_date,
            fac: selecttrans_factory,
            cc: selecttrans_cc,
            to_proj: new_boi,
            by_re: receiver,
            tel: Tel_for_trans,
            status: sts,
            abnormal: abnormal,
          });
        } catch (error) {
          console.error("Error requesting data:", error);
        }
        try {
          const response = await axios.post("/routing_tran", {
            running_no: EditFam,
            m_dept: selectdepartment_mana,
            s_dept: ServiceDept,
            s_tel: Tel_service,
            s_by: selectservice_by,
            chk_by: selectboi_staff,
            boi_by: selectboi_manager,
            fmby: selectfac_manager,
            acc_by: selectacc_check,
            own_by: owner_roting,
            acc_record: selectacc_check,
            acc_manager: selectacc_manager,
            service_close_by: selectservice_by,
          });
        } catch (error) {
          console.error("Error requesting data:", error);
        }
        try {
          const response = await axios.post("/update_date", {
            tranfer: EditFam,
          });
        } catch (error) {
          console.error("Error during login:", error);
        }
        try {
          const response = await axios.post("/update_new_cc", {
            fam: EditFam,
            New_cc: selecttrans_cc,
            updateby: For_Rq_Edit[2],
          });
        } catch (error) {
          console.error("Error during login:", error);
        }
        try {
          const response = await axios.post("/update_for_date_trans", {
            fam: For_Rq_Edit[0],
            updateby: For_Rq_Edit[2],
          });
        } catch (error) {
          console.error("Error during login:", error);
        }
      } else if (Type == "GP01004" || Type == "GP01005") {
        try {
          const response = await axios.post("/Update_For_Req_All", {
            famno: For_Rq_Edit[0],
            dept: For_Rq_Edit[6],
            tel: For_Rq_Edit[3],
            remark: For_Rq_Edit[12],
            mrg_dept: selectdepartment_mana,
            serviceby: selectservice_by,
            servicetel: Tel_service,
            boisff: selectboi_staff,
            boimrg: selectboi_manager,
            fmby: selectfac_manager,
            accchk: selectacc_check,
            accmrg: selectacc_manager,
            updateby: For_Rq_Edit[2],
            record_by: text_acc_check,
            owner_id: For_Rq_Edit[17],
            owner_dept: For_Rq_Edit[18],
            owner_tel: For_Rq_Edit[19],
            service_close: selectservice_by,
            owner_by: owner_roting,
            service_dt: ServiceDept,
          });
        } catch (error) {
          console.error("Error updating submit status:", error.message);
        }
        try {
          const response = await axios.post("/routing_tran", {
            running_no: EditFam,
            m_dept: selectdepartment_mana,
            s_dept: ServiceDept,
            s_tel: Tel_service,
            s_by: selectservice_by,
            chk_by: selectboi_staff,
            boi_by: selectboi_manager,
            fmby: selectfac_manager,
            acc_by: selectacc_check,
            own_by: owner_roting,
            acc_record: selectacc_check,
            acc_manager: selectacc_manager,
            service_close_by: selectservice_by,
          });
        } catch (error) {
          console.error("Error requesting data:", error);
        }
      }
    } else {
      if (Type == "GP01001") {
        console.log("เข้า Transfer BAck");
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
          sts,
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
          text_acc_check,
        ];
        const sendheader = JSON.stringify(set_data_for_req_details);
        localStorage.setItem("For_Routing", sendheader);
        try {
          const response = await axios.post("/Update_For_Req_All", {
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
            owner_id: For_Req[15],
            owner_dept: For_Req[16],
            owner_tel: For_Req[17],
            service_close: selectservice_by,
            owner_by: owner_roting,
            service_dt: ServiceDept,
          });
        } catch (error) {
          console.error("Error updating submit status:", error.message);
        }
        try {
          const response = await axios.post("/create_date", {
            tranfer: Fam_list,
          });
        } catch (error) {
          console.error("Error during login:", error);
        }
        try {
          const response = await axios.post("/ins_transfer", {
            running_no: Fam_list,
            date_plan: plan_date,
            fac: selecttrans_factory,
            cc: selecttrans_cc,
            to_proj: new_boi,
            by_re: receiver,
            tel: Tel_for_trans,
            status: sts,
            abnormal: abnormal,
          });
        } catch (error) {
          console.error("Error requesting data:", error);
        }
        try {
          const response = await axios.post("/routing_tran", {
            running_no: Fam_list,
            m_dept: selectdepartment_mana,
            s_dept: ServiceDept,
            s_tel: Tel_service,
            s_by: selectservice_by,
            chk_by: selectboi_staff,
            boi_by: selectboi_manager,
            fmby: selectfac_manager,
            acc_by: selectacc_check,
            own_by: owner_roting,
            acc_record: selectacc_check,
            acc_manager: selectacc_manager,
            service_close_by: selectservice_by,
          });
        } catch (error) {
          console.error("Error requesting data:", error);
        }
        try {
          const response = await axios.post("/update_new_cc", {
            fam: Fam_list,
            New_cc: selecttrans_cc,
            updateby: For_Req[1],
          });
        } catch (error) {
          console.error("Error during login:", error);
        }
      } else if (Type == "GP01004" || Type == "GP01005") {
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
          text_acc_check,
        ];
        const sendheader = JSON.stringify(set_data_for_req_details);
        localStorage.setItem("For_Routing", sendheader);
        console.log(set_data_for_req_details);
        try {
          const response = await axios.post("/Update_For_Req_All", {
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
            owner_id: For_Req[15],
            owner_dept: For_Req[16],
            owner_tel: For_Req[17],
            service_close: selectservice_by,
            owner_by: owner_roting,
            service_dt: ServiceDept,
          });
        } catch (error) {
          console.error("Error updating submit status:", error.message);
        }
        try {
          const response = await axios.post("/routing_tran", {
            running_no: Fam_list,
            m_dept: selectdepartment_mana,
            s_dept: ServiceDept,
            s_tel: Tel_service,
            s_by: selectservice_by,
            chk_by: selectboi_staff,
            boi_by: selectboi_manager,
            fmby: selectfac_manager,
            acc_by: selectacc_check,
            own_by: owner_roting,
            acc_record: selectacc_check,
            acc_manager: selectacc_manager,
            service_close_by: selectservice_by,
          });
        } catch (error) {
          console.error("Error requesting data:", error);
        }
      }
    }
    getDatatest();
    closePopupLoadding();
    navigate("/ForRe");
  };

  // ปุ่ม SAVE
  const SAVE = async () => {
    let ServiceDept = "";
    let Type = "";
    if (EditFam != null) {
      if (For_Rq_Edit[9] != null) {
        ServiceDept = For_Rq_Edit[0].split("-")[1];
        Type = For_Rq_Edit[7];
      }
    } else {
      ServiceDept = For_Req[0].split("-")[1];
      Type = For_Req[6];
    }

    if (Type === "GP01001") {
      const confirmResult = await Swal.fire({
        title: "Are you sure you want to save?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, save it!",
        cancelButtonText: "No, cancel!",
      });
      if (confirmResult.isConfirmed) {
        setCheckSave("True");
        if (EditFam != null) {
          try {
            const response = await axios.post("/Update_For_Req_All", {
              famno: For_Rq_Edit[0],
              dept: For_Rq_Edit[6],
              tel: For_Rq_Edit[3],
              remark: For_Rq_Edit[12],
              mrg_dept: selectdepartment_mana,
              serviceby: selectservice_by,
              servicetel: Tel_service,
              boisff: selectboi_staff,
              boimrg: selectboi_manager,
              fmby: selectfac_manager,
              accchk: selectacc_check,
              accmrg: selectacc_manager,
              updateby: For_Rq_Edit[2],
              record_by: text_acc_check,
              owner_id: For_Rq_Edit[17],
              owner_dept: For_Rq_Edit[18],
              owner_tel: For_Rq_Edit[19],
              service_close: selectservice_by,
              owner_by: owner_roting,
              service_dt: ServiceDept,
            });
          } catch (error) {
            console.error("Error updating submit status:", error.message);
          }
          try {
            const response = await axios.post("/ins_transfer", {
              running_no: EditFam,
              date_plan: plan_date,
              fac: selecttrans_factory,
              cc: selecttrans_cc,
              to_proj: new_boi,
              by_re: receiver,
              tel: Tel_for_trans,
              status: sts,
              abnormal: abnormal,
            });
          } catch (error) {
            console.error("Error requesting data:", error);
          }
          try {
            const response = await axios.post("/routing_tran", {
              running_no: EditFam,
              m_dept: selectdepartment_mana,
              s_dept: ServiceDept,
              s_tel: Tel_service,
              s_by: selectservice_by,
              chk_by: selectboi_staff,
              boi_by: selectboi_manager,
              fmby: selectfac_manager,
              acc_by: selectacc_check,
              own_by: owner_roting,
              acc_record: selectacc_check,
              acc_manager: selectacc_manager,
              service_close_by: selectservice_by,
            });
          } catch (error) {
            console.error("Error requesting data:", error);
          }
          try {
            const response = await axios.post("/update_date", {
              tranfer: EditFam,
            });
          } catch (error) {
            console.error("Error during login:", error);
          }
          try {
            const response = await axios.post("/update_new_cc", {
              fam: EditFam,
              New_cc: selecttrans_cc,
              updateby: For_Rq_Edit[2],
            });
          } catch (error) {
            console.error("Error during login:", error);
          }

          try {
            const response = await axios.post("/update_for_date_trans", {
              fam: For_Rq_Edit[0],
              updateby: For_Rq_Edit[2],
            });
            //// console(data, "data");
          } catch (error) {
            console.error("Error during login:", error);
          }

          Swal.fire({
            title: "Save Success",
            text: "Your data has been saved successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
          setCheckSave("False");
          // navigate("/Search")
        } else {
          try {
            const response = await axios.post("/Update_For_Req_All", {
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
              owner_id: For_Req[15],
              owner_dept: For_Req[16],
              owner_tel: For_Req[17],
              service_close: selectservice_by,
              owner_by: owner_roting,
              service_dt: ServiceDept,
            });
          } catch (error) {
            console.error("Error updating submit status:", error.message);
          }
          try {
            const response = await axios.post("/create_date", {
              tranfer: Fam_list,
            });
          } catch (error) {
            console.error("Error during login:", error);
          }
          try {
            const response = await axios.post("/ins_transfer", {
              running_no: Fam_list,
              date_plan: plan_date,
              fac: selecttrans_factory,
              cc: selecttrans_cc,
              to_proj: new_boi,
              by_re: receiver,
              tel: Tel_for_trans,
              status: sts,
              abnormal: abnormal,
            });
          } catch (error) {
            console.error("Error requesting data:", error);
          }
          try {
            const response = await axios.post("/routing_tran", {
              running_no: Fam_list,
              m_dept: selectdepartment_mana,
              s_dept: ServiceDept,
              s_tel: Tel_service,
              s_by: selectservice_by,
              chk_by: selectboi_staff,
              boi_by: selectboi_manager,
              fmby: selectfac_manager,
              acc_by: selectacc_check,
              own_by: owner_roting,
              acc_record: selectacc_check,
              acc_manager: selectacc_manager,
              service_close_by: selectservice_by,
            });
          } catch (error) {
            console.error("Error requesting data:", error);
          }
          try {
            const response = await axios.post("/update_new_cc", {
              fam: Fam_list,
              New_cc: selecttrans_cc,
              updateby: For_Req[1],
            });
            //// console(data, "data");
          } catch (error) {
            console.error("Error during login:", error);
          }

          Swal.fire({
            title: "Save Success",
            text: "Your data has been saved successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        }

        setCheckSave("False");
        // navigate("/Search")
      }
    } else if (Type === "GP01004" || Type == "GP01005" || Type == "GP01007") {
      console.log("เข้ามาตอนครั้งแรก");
      const confirmResult = await Swal.fire({
        title: "Are you sure you want to save?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, save it!",
        cancelButtonText: "No, cancel!",
      });
      if (confirmResult.isConfirmed) {
        setCheckSave("True");
        console.log("เข้าLoss");
        if (EditFam != null) {
          console.log("เข้าLoss1");
          try {
            const response = await axios.post("/Update_For_Req_All", {
              famno: For_Rq_Edit[0],
              dept: For_Rq_Edit[6],
              tel: For_Rq_Edit[3],
              remark: For_Rq_Edit[12],
              mrg_dept: selectdepartment_mana,
              serviceby: selectservice_by,
              servicetel: Tel_service,
              boisff: selectboi_staff,
              boimrg: selectboi_manager,
              fmby: selectfac_manager,
              accchk: selectacc_check,
              accmrg: selectacc_manager,
              updateby: For_Rq_Edit[2],
              record_by: text_acc_check,
              owner_id: For_Rq_Edit[17],
              owner_dept: For_Rq_Edit[18],
              owner_tel: For_Rq_Edit[19],
              service_close: selectservice_by,
              owner_by: owner_roting,
              service_dt: ServiceDept,
            });
          } catch (error) {
            console.error("Error updating submit status:", error.message);
          }

          try {
            const response = await axios.post("/routing_tran", {
              running_no: EditFam,
              m_dept: selectdepartment_mana,
              s_dept: ServiceDept,
              s_tel: Tel_service,
              s_by: selectservice_by,
              chk_by: selectboi_staff,
              boi_by: selectboi_manager,
              fmby: selectfac_manager,
              acc_by: selectacc_check,
              own_by: owner_roting,
              acc_record: selectacc_check,
              acc_manager: selectacc_manager,
              service_close_by: selectservice_by,
            });
          } catch (error) {
            console.error("Error requesting data:", error);
          }

          Swal.fire({
            title: "Save Success",
            text: "Your data has been saved successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
          setCheckSave("False");

          // navigate("/Search")
        } else {
          console.log("เข้าLoss2");
          try {
            const response = await axios.post("/Update_For_Req_All", {
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
              owner_id: For_Req[15],
              owner_dept: For_Req[16],
              owner_tel: For_Req[17],
              service_close: selectservice_by,
              owner_by: owner_roting,
              service_dt: ServiceDept,
            });
          } catch (error) {
            console.error("Error updating submit status:", error.message);
          }
          try {
            const response = await axios.post("/routing_tran", {
              running_no: Fam_list,
              m_dept: selectdepartment_mana,
              s_dept: ServiceDept,
              s_tel: Tel_service,
              s_by: selectservice_by,
              chk_by: selectboi_staff,
              boi_by: selectboi_manager,
              fmby: selectfac_manager,
              acc_by: selectacc_check,
              own_by: owner_roting,
              acc_record: selectacc_check,
              acc_manager: selectacc_manager,
              service_close_by: selectservice_by,
            });
          } catch (error) {
            console.error("Error requesting data:", error);
          }

          Swal.fire({
            title: "Save Success",
            text: "Your data has been saved successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        }

        setCheckSave("False");
        // navigate("/Search")
        // setOpen(true);
      }
    }
  };

  //  ปุ่ม SUBMIT
  const SUBMIT = async () => {
    let ServiceDept = "";
    let Type = "";
    if (EditFam != null) {
      if (For_Rq_Edit[9] != null) {
        console.log("SUBMIT66", For_Rq_Edit[7]);
        ServiceDept = For_Rq_Edit[0].split("-")[1];
        Type = For_Rq_Edit[7];
      }
    } else {
      ServiceDept = For_Req[0].split("-")[1];
      Type = For_Req[6];
    }
    if (Type == "GP01001") {
     // Tranfer
      if (EditFam != null) {
        if (
          For_Rq_Edit[3] === null ||
          For_Rq_Edit[3] === undefined ||
          For_Rq_Edit[3] === "" ||
          For_Rq_Edit[3] === "null"
        ) {
          setErrorTel_Rq(true);
          alert("Please fill in information: Tel For Requester");
          navigate("/ForRe");
          return;
        } else {
          setErrorTel_Rq(false);
        }
        if (
          For_Rq_Edit[6] === null ||
          For_Rq_Edit[6] === undefined ||
          For_Rq_Edit[6] === "" ||
          For_Rq_Edit[6] === "null"
        ) {
          alert("Please fill in information: Dept ");
          setErrorDept(true);
          navigate("/ForRe");
          return;
        }

        if (
          For_Rq_Edit[17] === null ||
          For_Rq_Edit[17] === undefined ||
          For_Rq_Edit[17] === "" ||
          For_Rq_Edit[17] === "null"
        ) {
          alert("Please fill in information: Request Owner");
          setErrorDept(true);
          navigate("/ForRe");
          return;
        }
        if (
          For_Rq_Edit[19] === null ||
          For_Rq_Edit[19] === undefined ||
          For_Rq_Edit[19] === "" ||
          For_Rq_Edit[19] === "null"
        ) {
          alert("Please fill in information:  Owner Tel ");
          setErrorDept(true);
          navigate("/ForRe");
          return;
        }

        if (
          selecttrans_factory === null ||
          selecttrans_factory === undefined ||
          selecttrans_factory === "" ||
          selecttrans_factory === "null"
        ) {
          alert("Please fill in information: Factory");
          setErrorFac(true);
          return;
        } else {
          setErrorFac(false);
        }
        if (
          selecttrans_cc === null ||
          selecttrans_cc === undefined ||
          selecttrans_cc === "" ||
          selecttrans_cc === "null"
        ) {
          alert("Please fill in information: CC");
          setErrorCC(true);
          return;
        } else {
          setErrorCC(false);
        }
        if (
          new_boi === null ||
          new_boi === undefined ||
          new_boi === "" ||
          new_boi === "null"
        ) {
          setErrNewboi(true);
          alert("Please fill in information: New BOI Project  ");
          return;
        } else {
          setErrNewboi(false);
        }
        if (
          selectnew_owner === null ||
          selectnew_owner === undefined ||
          selectnew_owner === "" ||
          selectnew_owner === "null"
        ) {
          setErrorNewOwn(true);
          alert("Please fill in information: New Owner ");
          return;
        } else {
          setErrorNewOwn(false);
        }

        if (
          Tel_for_trans === null ||
          Tel_for_trans === undefined ||
          Tel_for_trans === "" ||
          Tel_for_trans === "null"
        ) {
          alert("Please fill in information: Tel ");
          setErrorTel(true);
          return;
        } else {
          setErrorTel(false);
        }

        if (
          plan_date === null ||
          plan_date === undefined ||
          plan_date === "" ||
          plan_date === "null"
        ) {
          setErrorDate(true);
          alert("Please fill in information: Date");
          return;
        } else {
          setErrorDate(false);
        }
        if (
          selectdepartment_mana === null ||
          selectdepartment_mana === undefined ||
          selectdepartment_mana === "" ||
          selectdepartment_mana === "null"
        ) {
          setErrorManager(true);
          alert("Please fill in information: Department Manager ");
          return;
        } else {
          setErrorManager(false);
        }
        if (
          Tel_service === "" ||
          Tel_service === undefined ||
          Tel_service === null ||
          Tel_service === "null"
        ) {
          setErrorTel_service(true);
          alert("Please fill in information: Tel_Service By");

          return;
        } else {
          setErrorTel_service(false);
        }
        if (
          selectservice_by === null ||
          selectservice_by === undefined ||
          selectservice_by === "" ||
          selectservice_by === "null"
        ) {
          setErrorService_by(true);
          alert("Please fill in information: Service By");
          return;
        } else {
          setErrorService_by(false);
        }

        if (
          selectboi_staff === null ||
          selectboi_staff === undefined ||
          selectboi_staff === "" ||
          selectboi_staff === "null"
        ) {
          setErrorBoi_Staff(true);
          alert("Please fill in information: BOI Staff");
          return;
        } else {
          setErrorBoi_Staff(false);
        }
        if (
          selectboi_manager === null ||
          selectboi_manager === undefined ||
          selectboi_manager === "" ||
          selectboi_manager === "null"
        ) {
          setErrorBoi_manager(true);
          alert("Please fill in information: BOI Manager");
          return;
        } else {
          setErrorBoi_manager(false);
        }
        if (
          selectfac_manager === null ||
          selectfac_manager === undefined ||
          selectfac_manager === "" ||
          selectfac_manager === "null"
        ) {
          setErrorMana_Fac(true);
          alert("Please fill in information: Factory Manager");
          return;
        } else {
          setErrorMana_Fac(false);
        }
        if (
          selectacc_check === null ||
          selectacc_check === undefined ||
          selectacc_check === "" ||
          selectacc_check === "null"
        ) {
          alert("Please fill in information: ACC Check");
          setErrorAcc_check(true);
          return;
        } else {
          setErrorAcc_check(false);
        }

        if (
          selectacc_manager === null ||
          selectacc_manager === undefined ||
          selectacc_manager === "" ||
          selectacc_manager === "null"
        ) {
          alert("Please fill in information: ACC Manager");
          setErrorAcc_Mana(true);
          return;
        } else {
          setErrorAcc_Mana(false);
        }
        // try {
        //   const response = await axios.get(`/getEdit_FixAsset?FamNo=${EditFam}`);
        // } catch (error) {
        //   console.error("Error during login:", error);
        // }
        openPopupLoadding();
        //setCheckSubmit("True")
        // SUBMIT ตามเงื่อนไข Status
        if (For_Rq_Edit != null) {
          if (For_Rq_Edit[10] === "FLTR001") {
            let Status = "FLTR002";
            try {
              const response = await axios.post("/Update_For_Req_All", {
                famno: For_Rq_Edit[0],
                dept: For_Rq_Edit[6],
                tel: For_Rq_Edit[3],
                remark: For_Rq_Edit[12],
                mrg_dept: selectdepartment_mana,
                serviceby: selectservice_by,
                servicetel: Tel_service,
                boisff: selectboi_staff,
                boimrg: selectboi_manager,
                fmby: selectfac_manager,
                accchk: selectacc_check,
                accmrg: selectacc_manager,
                updateby: For_Rq_Edit[2],
                record_by: text_acc_check,
                owner_id: For_Rq_Edit[17],
                owner_dept: For_Rq_Edit[18],
                owner_tel: For_Rq_Edit[19],
                service_close: selectservice_by,
                owner_by: owner_roting,
                service_dt: ServiceDept,
              });
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
            try {
              const response = await axios.post("/Update_For_Trans_All", {
                famno: For_Rq_Edit[0],
                date_plan: plan_date,
                fac_trans: selecttrans_factory,
                cc_trans: selecttrans_cc,
                to_proj: new_boi,
                rec_by: receiver,
                tel: Tel_for_trans,
                sts_for: sts,
                abnormal_for: abnormal,
                create_by: User,
              });
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
            try {
              const response = await axios.post("/update_new_cc", {
                fam: For_Rq_Edit[0],
                New_cc: selecttrans_cc,
                updateby: For_Rq_Edit[2],
              });
            } catch (error) {
              console.error("Error during login:", error);
            }
            try {
              const response = await axios.post("/update_for_date_trans", {
                fam: For_Rq_Edit[0],
                updateby: For_Rq_Edit[2],
              });
            } catch (error) {
              console.error("Error during login:", error);
            }

            try {
              const response = await axios.post("/update_submit", {
                famno: EditFam,
                sts_submit: Status,
              });
              Swal.fire({
                title: "Submit Success",
                icon: "success",
              });

              // setCheckSubmit("False")
              // navigate('/Mail', { state: { selectservice_by } });
              localStorage.setItem("To", selectdepartment_mana);
              localStorage.setItem("Genno", EditFam);
              localStorage.setItem("Req_Type", For_Rq_Edit[7]);
              localStorage.setItem("Req_by", For_Rq_Edit[2]);
              localStorage.setItem("Status", Status);
              // navigate("/Mail");
              //  navigate('/Search');
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
          } else if (For_Rq_Edit[16] === "R") {
            // update สำหรับ === "R" reject
            console.log("Reject", For_Rq_Edit[16]);
            let Status = "FLTR002";
            try {
              const response = await axios.post("/Update_For_Req_All", {
                famno: For_Rq_Edit[0],
                dept: For_Rq_Edit[6],
                tel: For_Rq_Edit[3],
                remark: For_Rq_Edit[12],
                mrg_dept: selectdepartment_mana,
                serviceby: selectservice_by,
                servicetel: Tel_service,
                boisff: selectboi_staff,
                boimrg: selectboi_manager,
                fmby: selectfac_manager,
                accchk: selectacc_check,
                accmrg: selectacc_manager,
                updateby: For_Rq_Edit[2],
                record_by: text_acc_check,
                owner_id: For_Rq_Edit[17],
                owner_dept: For_Rq_Edit[18],
                owner_tel: For_Rq_Edit[19],
                service_close: selectservice_by,
                owner_by: owner_roting,
                service_dt: ServiceDept,
              });
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
            try {
              const response = await axios.post("/Update_For_Trans_All", {
                famno: For_Rq_Edit[0],
                date_plan: plan_date,
                fac_trans: selecttrans_factory,
                cc_trans: selecttrans_cc,
                to_proj: new_boi,
                rec_by: receiver,
                tel: Tel_for_trans,
                sts_for: sts,
                abnormal_for: abnormal,
                create_by: User,
              });
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
            try {
              const response = await axios.post("/update_for_nullRouting_All", {
                famno: EditFam,
                user_a: User,
              });
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }

            try {
              const response = await axios.post("/update_All_for_receive", {
                famno: EditFam,
                user_re: User,
              });
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
            try {
              const response = await axios.post("/update_new_cc", {
                fam: EditFam,
                New_cc: selecttrans_cc,
                updateby: For_Rq_Edit[2],
              });
            } catch (error) {
              console.error("Error during login:", error);
            }
            try {
              const response = await axios.post("/update_submit", {
                famno: EditFam,
                sts_submit: Status,
              });

              Swal.fire({
                title: "Submit Success",
                icon: "success",
              });
              // setCheckSubmit("False")
              localStorage.setItem("status_formail", null);
              localStorage.setItem("To", selectdepartment_mana);
              localStorage.setItem("Genno", EditFam);
              localStorage.setItem("Req_Type", For_Rq_Edit[7]);
              localStorage.setItem("Req_by", For_Rq_Edit[2]);
              localStorage.setItem("Status", Status);
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
              // navigate("/Mail");
              // navigate("/Search");
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
          } else if (For_Rq_Edit[10] === "FLTR002") {
            let Status = "";
            if (selectradio_dept == "A") {
              Status = "FLTR003";
            } else if (selectradio_dept == "R") {
              Status = "FLTR092";
            }
            if (
              selectradio_dept == "R" &&
              (cmmtradio_dept == "" ||
                cmmtradio_dept == null ||
                cmmtradio_dept == "null" ||
                cmmtradio_dept == "undifined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_manager_dept", {
                  famno: EditFam,
                  mgrjud: selectradio_dept,
                  mgrcmmt: cmmtradio_dept,
                  sts: Status,
                });

                if (selectradio_dept != "R") {
                  localStorage.setItem("status_formail", selectradio_dept);
                  localStorage.setItem("To", selectservice_by);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_dept);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }

                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });
                setCheckSubmit("False");

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
                // navigate("/Mail");
                // navigate("/ApproveFam");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLTR003") {
            let Status = "";
            if (selectradio_serviceby == "A") {
              Status = "FLTR004";
            } else if (selectradio_serviceby == "R") {
              Status = "FLTR093";
            }
            if (
              selectradio_serviceby == "R" &&
              (cmmtradio_serviceby == "" ||
                cmmtradio_serviceby == null ||
                cmmtradio_serviceby == "null" ||
                cmmtradio_serviceby == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_service_by", {
                  famno: EditFam,
                  serjud: selectradio_serviceby,
                  sercmmt: cmmtradio_serviceby,
                  sts: Status,
                });
                if (selectradio_serviceby != "R") {
                  localStorage.setItem("status_formail", selectradio_serviceby);
                  localStorage.setItem("To", selectboi_staff);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_serviceby);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }

                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });
                //   setCheckSubmit("False")

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
                // navigate("/ApproveFam");
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLTR004") {
            let Status = "";
            if (selectradio_boistaff == "A") {
              Status = "FLTR005";
            } else if (selectradio_boistaff == "R") {
              Status = "FLTR094";
            }
            if (
              selectradio_boistaff == "R" &&
              (cmmtradio_boistaff == "" ||
                cmmtradio_boistaff == null ||
                cmmtradio_boistaff == "null" ||
                cmmtradio_boistaff == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              // try {
              //   const row = axios.post(
              //     `/update_boi_staff?famno=${EditFam}&stff_jud=${selectradio_boistaff}&stff_cmmt=${cmmtradio_boistaff}&sts=${Status}`
              //   );
              try {
                const response = await axios.post("/update_boi_staff", {
                  famno: EditFam,
                  stff_jud: selectradio_boistaff,
                  stff_cmmt: cmmtradio_boistaff,
                  sts: Status,
                });

                if (selectradio_boistaff != "R") {
                  localStorage.setItem("status_formail", selectradio_boistaff);
                  localStorage.setItem("To", selectboi_manager);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_boistaff);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLTR005") {
            let Status = "";
            if (selectradio_boimanager == "A") {
              Status = "FLTR006";
            } else if (selectradio_boimanager == "R") {
              Status = "FLTR095";
            }

            if (
              selectradio_boimanager == "R" &&
              (cmmtradio_boimanager == "" ||
                cmmtradio_boimanager == null ||
                cmmtradio_boimanager == "null" ||
                cmmtradio_boimanager == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_boi_mana", {
                  famno: EditFam,
                  boimana_jud: selectradio_boimanager,
                  boimana_cmmt: cmmtradio_boimanager,
                  sts: Status,
                });
                if (selectradio_boimanager != "R") {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_boimanager
                  );
                  localStorage.setItem("To", selectfac_manager);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_boimanager
                  );
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/ApproveFam");
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLTR006") {
            let Status = "";
            if (selectradio_facmanager == "A") {
              Status = "FLTR007";
            } else if (selectradio_facmanager == "R") {
              Status = "FLTR096";
            }

            if (
              selectradio_facmanager == "R" &&
              (cmmtradio_facmanager == "" ||
                cmmtradio_facmanager == null ||
                cmmtradio_facmanager == "null" ||
                cmmtradio_facmanager == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_facmanager", {
                  famno: EditFam,
                  fm_jud: selectradio_facmanager,
                  fm_cmmt: cmmtradio_facmanager,
                  sts: Status,
                });

                if (selectradio_boimanager != "R") {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_boimanager
                  );
                  localStorage.setItem("To", selectacc_check);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_boimanager
                  );
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/ApproveFam");
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLTR007") {
            let Status = "";
            if (selectradio_acc_check == "A") {
              Status = "FLTR008";
            } else if (selectradio_acc_check == "R") {
              Status = "FLTR907";
            }

            if (
              selectradio_acc_check == "R" &&
              (cmmtradio_acc_check == "" ||
                cmmtradio_acc_check == null ||
                cmmtradio_acc_check == "null" ||
                cmmtradio_acc_check == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_acccheck", {
                  famno: EditFam,
                  chk_jud: selectradio_acc_check,
                  chk_cmmt: cmmtradio_acc_check,
                  sts: Status,
                });
                if (selectradio_acc_check != "R") {
                  localStorage.setItem("status_formail", selectradio_acc_check);
                  localStorage.setItem("To", owner_roting);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_acc_check);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    selectfac_manager,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });
                //  setCheckSubmit("False")

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
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLTR008") {
            let Status = "";
            if (selectradio_owner == "A") {
              Status = "FLTR009";
            } else if (selectradio_owner == "R") {
              Status = "FLTR908";
            }

            if (
              selectradio_owner == "R" &&
              (cmmtradio_owner == "" ||
                cmmtradio_owner == null ||
                cmmtradio_owner == "null" ||
                cmmtradio_owner == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_owner", {
                  famno: EditFam,
                  owner_jud: selectradio_owner,
                  owner_cmmt: cmmtradio_owner,
                  sts: Status,
                });
                if (selectradio_owner != "R") {
                  localStorage.setItem("status_formail", selectradio_owner);
                  localStorage.setItem("To", receiver);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_owner);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    selectfac_manager,
                    selectacc_check,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/Mail");
                // navigate("/ApproveFam");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLTR009") {
            let Status = "";
            if (selectradio_receiver == "A") {
              Status = "FLTR010";
            } else if (selectradio_receiver == "R") {
              Status = "FLTR909";
            }
            if (
              selectradio_receiver == "R" &&
              (cmmtradio_receiver == "" ||
                cmmtradio_receiver == null ||
                cmmtradio_receiver == "null" ||
                cmmtradio_receiver == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_receiver", {
                  famno: EditFam,
                  receiver_jud: selectradio_receiver,
                  receiver_cmmt: cmmtradio_receiver,
                });

                if (selectradio_receiver != "R") {
                  localStorage.setItem("status_formail", selectradio_receiver);
                  localStorage.setItem("To", text_acc_check);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_receiver);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    selectfac_manager,
                    selectacc_check,
                    owner_roting,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });
                //   setCheckSubmit("False")

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
                // navigate("/ApproveFam");
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
              try {
                const response = await axios.post("/update_submit", {
                  famno: EditFam,
                  sts_submit: Status,
                });
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
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLTR010") {
            let Status = "";
            if (selectradio_record == "A") {
              Status = "FLTR011";
            } else if (selectradio_record == "R") {
              Status = "FLTR910";
            }

            if (
              selectradio_record == "R" &&
              (cmmtradio_record == "" ||
                cmmtradio_record == null ||
                cmmtradio_record == "null" ||
                cmmtradio_record == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              // try {
              //   const row = axios.post(
              //     `/update_recode?famno=${EditFam}&rec_jud=${selectradio_record}&rec_cmmt=${cmmtradio_record}&sts=${Status}`
              //   );
              try {
                const response = await axios.post("/update_recode", {
                  famno: EditFam,
                  rec_jud: selectradio_record,
                  rec_cmmt: cmmtradio_record,
                  sts: Status,
                });

                if (selectradio_record != "R") {
                  localStorage.setItem("status_formail", selectradio_record);
                  localStorage.setItem("To", selectacc_manager);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_record);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    selectfac_manager,
                    selectacc_check,
                    owner_roting,
                    receiver,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/ApproveFam");
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLTR011") {
            let Status = "";
            if (selectradio_acc_manager == "A") {
              Status = "FLTR012";
            } else if (selectradio_acc_manager == "R") {
              Status = "FLTR911";
            }
            if (
              selectradio_acc_manager == "R" &&
              (cmmtradio_acc_manager == "" ||
                cmmtradio_acc_manager == null ||
                cmmtradio_acc_manager == "null" ||
                cmmtradio_acc_manager == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_accmanager", {
                  famno: EditFam,
                  acc_manajud: selectradio_acc_manager,
                  acc_manacmmt: cmmtradio_acc_manager,
                  sts: Status,
                });
                if (selectradio_acc_manager != "R") {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_acc_manager
                  );
                  localStorage.setItem("To", selectacc_manager);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_acc_manager
                  );
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    selectfac_manager,
                    selectacc_check,
                    owner_roting,
                    receiver,
                    text_acc_check,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });
                localStorage.setItem("To", selectservice_by);
                localStorage.setItem("Genno", EditFam);
                localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                localStorage.setItem("Req_by", For_Rq_Edit[2]);
                localStorage.setItem("Status", Status);
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
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLTR012") {
            let Status = "";
            if (selectradio_service_close_by == "A") {
              Status = "FLTR013";
            } else if (selectradio_service_close_by == "R") {
              Status = "FLTR912";
            }

            if (
              selectradio_service_close_by == "R" &&
              (cmmtradio_service_close_by == "" ||
                cmmtradio_service_close_by == null ||
                cmmtradio_service_close_by == "null" ||
                cmmtradio_service_close_by == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              // try {
              //   const row = axios.post(
              //     `/update_service_close?famno=${EditFam}&cls_jud=${selectradio_service_close_by}&cls_cmmt=${cmmtradio_service_close_by}&sts=${Status}`
              //   );
              try {
                const response = await axios.post("/update_service_close", {
                  famno: EditFam,
                  cls_jud: selectradio_service_close_by,
                  cls_cmmt: cmmtradio_service_close_by,
                  sts: Status,
                });

                if (selectradio_service_close_by != "R") {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_service_close_by
                  );
                  localStorage.setItem("To", For_Rq_Edit[2]);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_service_close_by
                  );

                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    selectfac_manager,
                    selectacc_check,
                    owner_roting,
                    receiver,
                    text_acc_check,
                    selectacc_manager,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          }
        }
      } else {
        if (
          For_Req[2] === null ||
          For_Req[2] === undefined ||
          For_Req[2] === "" ||
          For_Req[2] === "null"
        ) {
          setErrorTel_Rq(true);
          alert("Please fill in information: Tel Requester");
          let ErrorTel_Req = "true";

          navigate("/ForRe", ErrorTel_Req);
          return;
        } else {
          setErrorTel_Rq(false);
        }

        if (
          For_Req[5] === null ||
          For_Req[5] === undefined ||
          For_Req[5] === "" ||
          For_Req[5] === "null"
        ) {
          alert("Please fill in information: Dept");
          setErrorDept(true);
          navigate("/ForRe");
          return;
        }
        if (
          For_Req[15] === null ||
          For_Req[15] === undefined ||
          For_Req[15] === "" ||
          For_Req[15] === "null"
        ) {
          alert("Please fill in information: Request Owner");
          navigate("/ForRe");
          return;
        }
        if (
          For_Req[17] === null ||
          For_Req[17] === undefined ||
          For_Req[17] === "" ||
          For_Req[17] === "null"
        ) {
          alert("Please fill in information: Owner Tel");
          navigate("/ForRe");
          return;
        }
        if (
          selecttrans_factory === null ||
          selecttrans_factory === undefined ||
          selecttrans_factory === "" ||
          selecttrans_factory === "null"
        ) {
          alert("Please fill in information: Factory");
          setErrorFac(true);
          return;
        } else {
        }
        if (
          selecttrans_cc === null ||
          selecttrans_cc === undefined ||
          selecttrans_cc === "" ||
          selecttrans_cc === "null"
        ) {
          alert("Please fill in information: CC");
          setErrorCC(true);
          return;
        } else {
          setErrorCC(false);
        }

        if (
          new_boi === null ||
          new_boi === undefined ||
          new_boi === "" ||
          new_boi === "null"
        ) {
          setErrNewboi(true);
          alert("Please fill in information: New BOI Project  ");
          return;
        } else {
          setErrNewboi(false);
        }
        if (
          selectnew_owner === null ||
          selectnew_owner === undefined ||
          selectnew_owner === "" ||
          selectnew_owner === "null"
        ) {
          setErrorNewOwn(true);
          alert("Please fill in information: New Owner ");
          return;
        } else {
          setErrorNewOwn(false);
        }
        if (
          Tel_for_trans === null ||
          Tel_for_trans === undefined ||
          Tel_for_trans === "" ||
          Tel_for_trans === "null"
        ) {
          alert("Please fill in information: Tel ");
          setErrorTel(true);
          return;
        } else {
          setErrorTel(false);
        }
        if (
          plan_date === null ||
          plan_date === undefined ||
          plan_date === "" ||
          plan_date === "null"
        ) {
          setErrorDate(true);
          alert("Please fill in information: Date");
          return;
        } else {
          setErrorDate(false);
        }
        if (
          selectdepartment_mana === null ||
          selectdepartment_mana === undefined ||
          selectdepartment_mana === "" ||
          selectdepartment_mana === "null"
        ) {
          alert("Please fill in information: Department Manager");
          setErrorManager(true);
          return;
        } else {
          setErrorManager(false);
        }

        if (
          Tel_service === null ||
          Tel_service === undefined ||
          Tel_service === "" ||
          Tel_service === "null"
        ) {
          alert("Please fill in information: Tel_Service By");
          setErrorTel_service(true);
          return;
        } else {
          setErrorTel_service(false);
        }
        if (
          selectservice_by === null ||
          selectservice_by === undefined ||
          selectservice_by === "" ||
          selectservice_by === "null"
        ) {
          alert("Please fill in information: Service By");
          setErrorService_by(true);
          return;
        } else {
          setErrorService_by(false);
        }

        if (
          selectboi_staff === null ||
          selectboi_staff === undefined ||
          selectboi_staff === "" ||
          selectboi_staff === "null"
        ) {
          alert("Please fill in information: BOI Staff");
          setErrorBoi_Staff(true);
          return;
        } else {
          setErrorBoi_Staff(false);
        }
        if (
          selectboi_manager === null ||
          selectboi_manager === undefined ||
          selectboi_manager === "" ||
          selectboi_manager === "null"
        ) {
          alert("Please fill in information: BOI Manager");
          setErrorBoi_manager(true);
          return;
        } else {
          setErrorBoi_manager(false);
        }
        if (
          selectfac_manager === null ||
          selectfac_manager === undefined ||
          selectfac_manager === "" ||
          selectfac_manager === "null"
        ) {
          alert("Please fill in information: Factory Manager");
          setErrorMana_Fac(true);
          return;
        } else {
          setErrorMana_Fac(false);
        }
        if (
          selectacc_check === null ||
          selectacc_check === undefined ||
          selectacc_check === "" ||
          selectacc_check === "null"
        ) {
          alert("Please fill in information: ACC Check");
          setErrorAcc_check(true);
          return;
        } else {
          setErrorAcc_check(false);
        }

        if (
          selectacc_manager === null ||
          selectacc_manager === undefined ||
          selectacc_manager === "" ||
          selectacc_manager === "null"
        ) {
          alert("Please fill in information: ACC Manager");
          setErrorAcc_Mana(true);
          return;
        } else {
          setErrorAcc_Mana(false);
        }
        // Submit กรณี insert
        if (For_Req[10] === "FLTR001") {
          let Status = "FLTR002";
          try {
            const response = await axios.post("/update_submit", {
              famno: For_Req[0],
              sts_submit: Status,
            });
          } catch (error) {
            console.error("Error updating submit status:", error.message);
          }
          try {
            const response = await axios.post("/update_new_cc", {
              fam: For_Req[0],
              New_cc: selecttrans_cc,
              updateby: For_Req[1],
            });
            //// console(data, "data");
          } catch (error) {
            console.error("Error during login:", error);
          }
          try {
            const response = await axios.post("/Update_For_Req_All", {
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
              owner_id: For_Req[15],
              owner_dept: For_Req[16],
              owner_tel: For_Req[17],
              service_close: selectservice_by,
              owner_by: owner_roting,
              service_dt: ServiceDept,
            });
          } catch (error) {
            console.error("Error updating submit status:", error.message);
          }
          try {
            const response = await axios.post("/Update_For_Trans_All", {
              famno: For_Req[0],
              date_plan: plan_date,
              fac_trans: selecttrans_factory,
              cc_trans: selecttrans_cc,
              to_proj: new_boi,
              rec_by: receiver,
              tel: Tel_for_trans,
              sts_for: sts,
              abnormal_for: abnormal,
              create_by: User,
            });
            localStorage.setItem("To", selectdepartment_mana);
            localStorage.setItem("Genno", For_Req[0]);
            localStorage.setItem("Req_Type", For_Req[6]);
            localStorage.setItem("Req_by", For_Req[1]);
            localStorage.setItem("Status", Status);
            // navigate("/Mail");
            Swal.fire({
              title: "Save Success",
              icon: "success",
            });
          } catch (error) {
            console.error("Error updating submit status:", error.message);
          }
        }
        // setCheckSubmit("False")
      }
    } else if (Type == "GP01004" ) {
      //Loss
      if (EditFam != null) {
        if (
          For_Rq_Edit[3] === null ||
          For_Rq_Edit[3] === undefined ||
          For_Rq_Edit[3] === "" ||
          For_Rq_Edit[3] === "null"
        ) {
          setErrorTel_Rq(true);
          alert("Please fill in information: Tel For Requester");
          navigate("/ForRe");
          return;
        } else {
          setErrorTel_Rq(false);
        }
        if (
          For_Rq_Edit[6] === null ||
          For_Rq_Edit[6] === undefined ||
          For_Rq_Edit[6] === "" ||
          For_Rq_Edit[6] === "null"
        ) {
          alert("Please fill in information: Dept ");
          setErrorDept(true);
          navigate("/ForRe");
          return;
        }

        if (
          For_Rq_Edit[17] === null ||
          For_Rq_Edit[17] === undefined ||
          For_Rq_Edit[17] === "" ||
          For_Rq_Edit[17] === "null"
        ) {
          alert("Please fill in information: Request Owner");
          setErrorDept(true);
          navigate("/ForRe");
          return;
        }
        if (
          For_Rq_Edit[19] === null ||
          For_Rq_Edit[19] === undefined ||
          For_Rq_Edit[19] === "" ||
          For_Rq_Edit[19] === "null"
        ) {
          alert("Please fill in information:  Owner Tel ");
          setErrorDept(true);
          navigate("/ForRe");
          return;
        }
        if (
          selectdepartment_mana === null ||
          selectdepartment_mana === undefined ||
          selectdepartment_mana === "" ||
          selectdepartment_mana === "null"
        ) {
          setErrorManager(true);
          alert("Please fill in information: Department Manager ");
          return;
        } else {
          setErrorManager(false);
        }
        if (
          Tel_service === "" ||
          Tel_service === undefined ||
          Tel_service === null ||
          Tel_service === "null"
        ) {
          setErrorTel_service(true);
          alert("Please fill in information: Tel_Service By");

          return;
        } else {
          setErrorTel_service(false);
        }
        if (
          selectservice_by === null ||
          selectservice_by === undefined ||
          selectservice_by === "" ||
          selectservice_by === "null"
        ) {
          setErrorService_by(true);
          alert("Please fill in information: Service By");
          return;
        } else {
          setErrorService_by(false);
        }

        if (
          selectboi_staff === null ||
          selectboi_staff === undefined ||
          selectboi_staff === "" ||
          selectboi_staff === "null"
        ) {
          setErrorBoi_Staff(true);
          alert("Please fill in information: BOI Staff");
          return;
        } else {
          setErrorBoi_Staff(false);
        }
        if (
          selectboi_manager === null ||
          selectboi_manager === undefined ||
          selectboi_manager === "" ||
          selectboi_manager === "null"
        ) {
          setErrorBoi_manager(true);
          alert("Please fill in information: BOI Manager");
          return;
        } else {
          setErrorBoi_manager(false);
        }
        if (
          selectfac_manager === null ||
          selectfac_manager === undefined ||
          selectfac_manager === "" ||
          selectfac_manager === "null"
        ) {
          setErrorMana_Fac(true);
          alert("Please fill in information: Factory Manager");
          return;
        } else {
          setErrorMana_Fac(false);
        }
        if (
          selectacc_check === null ||
          selectacc_check === undefined ||
          selectacc_check === "" ||
          selectacc_check === "null"
        ) {
          alert("Please fill in information: ACC Check");
          setErrorAcc_check(true);
          return;
        } else {
          setErrorAcc_check(false);
        }

        if (
          selectacc_manager === null ||
          selectacc_manager === undefined ||
          selectacc_manager === "" ||
          selectacc_manager === "null"
        ) {
          alert("Please fill in information: ACC Manager");
          setErrorAcc_Mana(true);
          return;
        } else {
          setErrorAcc_Mana(false);
        }
       
        openPopupLoadding();
        if (For_Rq_Edit != null) {
          console.log("fdffdfdfd")
          if (For_Rq_Edit[10] === "FLLS001") {
            let Status = "FLLS002";
            try {
              const response = await axios.post("/Update_For_Req_All", {
                famno: For_Rq_Edit[0],
                dept: For_Rq_Edit[6],
                tel: For_Rq_Edit[3],
                remark: For_Rq_Edit[12],
                mrg_dept: selectdepartment_mana,
                serviceby: selectservice_by,
                servicetel: Tel_service,
                boisff: selectboi_staff,
                boimrg: selectboi_manager,
                fmby: selectfac_manager,
                accchk: selectacc_check,
                accmrg: selectacc_manager,
                updateby: For_Rq_Edit[2],
                record_by: text_acc_check,
                owner_id: For_Rq_Edit[17],
                owner_dept: For_Rq_Edit[18],
                owner_tel: For_Rq_Edit[19],
                service_close: selectservice_by,
                owner_by: owner_roting,
                service_dt: ServiceDept,
              });
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
            try {
              const response = await axios.post("/update_submit", {
                famno: EditFam,
                sts_submit: Status,
              });
              Swal.fire({
                title: "Submit Success",
                icon: "success",
              });

              // setCheckSubmit("False")
              // navigate('/Mail', { state: { selectservice_by } });
              localStorage.setItem("To", selectdepartment_mana);
              localStorage.setItem("Genno", EditFam);
              localStorage.setItem("Req_Type", For_Rq_Edit[7]);
              localStorage.setItem("Req_by", For_Rq_Edit[2]);
              localStorage.setItem("Status", Status);
              // navigate("/Mail");
              //  navigate('/Search');
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
          } else if (For_Rq_Edit[16] === "R") {
            let Status = "FLLS002";
            try {
              const response = await axios.post("/Update_For_Req_All", {
                famno: For_Rq_Edit[0],
                dept: For_Rq_Edit[6],
                tel: For_Rq_Edit[3],
                remark: For_Rq_Edit[12],
                mrg_dept: selectdepartment_mana,
                serviceby: selectservice_by,
                servicetel: Tel_service,
                boisff: selectboi_staff,
                boimrg: selectboi_manager,
                fmby: selectfac_manager,
                accchk: selectacc_check,
                accmrg: selectacc_manager,
                updateby: For_Rq_Edit[2],
                record_by: text_acc_check,
                owner_id: For_Rq_Edit[17],
                owner_dept: For_Rq_Edit[18],
                owner_tel: For_Rq_Edit[19],
                service_close: selectservice_by,
                owner_by: owner_roting,
                service_dt: ServiceDept,
              });
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }

            try {
              const response = await axios.post("/update_for_nullRouting_All", {
                famno: EditFam,
                user_a: User,
              });
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }

            try {
              const response = await axios.post("/update_submit", {
                famno: EditFam,
                sts_submit: Status,
              });

              Swal.fire({
                title: "Submit Success",
                icon: "success",
              });
              // setCheckSubmit("False")
              localStorage.setItem("status_formail", null);
              localStorage.setItem("To", selectdepartment_mana);
              localStorage.setItem("Genno", EditFam);
              localStorage.setItem("Req_Type", For_Rq_Edit[7]);
              localStorage.setItem("Req_by", For_Rq_Edit[2]);
              localStorage.setItem("Status", Status);
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
              // navigate("/Mail");
              // navigate("/Search");
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
          } else if (For_Rq_Edit[10] === "FLLS002") {
            let Status = "";
            if (selectradio_dept == "A") {
              Status = "FLTR003";
            } else if (selectradio_dept == "R") {
              Status = "FLLS092";
            }
            if (
              selectradio_dept == "R" &&
              (cmmtradio_dept == "" ||
                cmmtradio_dept == null ||
                cmmtradio_dept == "null" ||
                cmmtradio_dept == "undifined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_manager_dept", {
                  famno: EditFam,
                  mgrjud: selectradio_dept,
                  mgrcmmt: cmmtradio_dept,
                  sts: Status,
                });

                if (selectradio_dept != "R") {
                  localStorage.setItem("status_formail", selectradio_dept);
                  localStorage.setItem("To", selectservice_by);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_dept);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }

                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });
                setCheckSubmit("False");

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
                // navigate("/Mail");
                // navigate("/ApproveFam");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLTR003") {
            let Status = "";
            if (selectradio_serviceby == "A") {
              Status = "FLLS004";
            } else if (selectradio_serviceby == "R") {
              Status = "FLLS093";
            }
            if (
              selectradio_serviceby == "R" &&
              (cmmtradio_serviceby == "" ||
                cmmtradio_serviceby == null ||
                cmmtradio_serviceby == "null" ||
                cmmtradio_serviceby == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_service_by", {
                  famno: EditFam,
                  serjud: selectradio_serviceby,
                  sercmmt: cmmtradio_serviceby,
                  sts: Status,
                });
                if (selectradio_serviceby != "R") {
                  localStorage.setItem("status_formail", selectradio_serviceby);
                  localStorage.setItem("To", selectboi_staff);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_serviceby);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }

                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });
                //   setCheckSubmit("False")

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
                // navigate("/ApproveFam");
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLLS004") {
            let Status = "";
            if (selectradio_boistaff == "A") {
              Status = "FLLS005";
            } else if (selectradio_boistaff == "R") {
              Status = "FLLS094";
            }
            if (
              selectradio_boistaff == "R" &&
              (cmmtradio_boistaff == "" ||
                cmmtradio_boistaff == null ||
                cmmtradio_boistaff == "null" ||
                cmmtradio_boistaff == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              // try {
              //   const row = axios.post(
              //     `/update_boi_staff?famno=${EditFam}&stff_jud=${selectradio_boistaff}&stff_cmmt=${cmmtradio_boistaff}&sts=${Status}`
              //   );
              try {
                const response = await axios.post("/update_boi_staff", {
                  famno: EditFam,
                  stff_jud: selectradio_boistaff,
                  stff_cmmt: cmmtradio_boistaff,
                  sts: Status,
                });

                if (selectradio_boistaff != "R") {
                  localStorage.setItem("status_formail", selectradio_boistaff);
                  localStorage.setItem("To", selectboi_manager);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_boistaff);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLLS005") {
            let Status = "";
            if (selectradio_boimanager == "A") {
              Status = "FLLS006";
            } else if (selectradio_boimanager == "R") {
              Status = "FLLS095";
            }

            if (
              selectradio_boimanager == "R" &&
              (cmmtradio_boimanager == "" ||
                cmmtradio_boimanager == null ||
                cmmtradio_boimanager == "null" ||
                cmmtradio_boimanager == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_boi_mana", {
                  famno: EditFam,
                  boimana_jud: selectradio_boimanager,
                  boimana_cmmt: cmmtradio_boimanager,
                  sts: Status,
                });
                if (selectradio_boimanager != "R") {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_boimanager
                  );
                  localStorage.setItem("To", selectfac_manager);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_boimanager
                  );
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/ApproveFam");
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLLS006") {
            let Status = "";
            if (selectradio_facmanager == "A") {
              Status = "FLLS007";
            } else if (selectradio_facmanager == "R") {
              Status = "FLLS096";
            }

            if (
              selectradio_facmanager == "R" &&
              (cmmtradio_facmanager == "" ||
                cmmtradio_facmanager == null ||
                cmmtradio_facmanager == "null" ||
                cmmtradio_facmanager == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_facmanager", {
                  famno: EditFam,
                  fm_jud: selectradio_facmanager,
                  fm_cmmt: cmmtradio_facmanager,
                  sts: Status,
                });

                if (selectradio_boimanager != "R") {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_boimanager
                  );
                  localStorage.setItem("To", selectacc_check);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_boimanager
                  );
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/ApproveFam");
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLLS007") {
            console.log(certificate_date,"DATEEEEEEEEE:")
            let Status = "";
            if (selectradio_acc_check == "A") {
              Status = "FLLS008";
            } else if (selectradio_acc_check == "R") {
              Status = "FLLS907";
            }

            if (
              selectradio_acc_check == "R" &&
              (cmmtradio_acc_check == "" ||
                cmmtradio_acc_check == null ||
                cmmtradio_acc_check == "null" ||
                cmmtradio_acc_check == "undefined")
            ) {
              alert("Please fill in information");
            } else {
             
              try {
                const response = await axios.post("/update_acccheck", {
                  famno: EditFam,
                  chk_jud: selectradio_acc_check,
                  chk_cmmt: cmmtradio_acc_check,
                  sts: Status,
                });
                if (selectradio_acc_check != "R") {
                  localStorage.setItem("status_formail", selectradio_acc_check);
                  localStorage.setItem("To", owner_roting);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_acc_check);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    selectfac_manager,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });
                //  setCheckSubmit("False")

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
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLLS008") {
            let Status = "";
            if (selectradio_owner == "A") {
              Status = "FLLS010";
            } else if (selectradio_owner == "R") {
              Status = "FLLS908";
            }

            if (
              selectradio_owner == "R" &&
              (cmmtradio_owner == "" ||
                cmmtradio_owner == null ||
                cmmtradio_owner == "null" ||
                cmmtradio_owner == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_owner", {
                  famno: EditFam,
                  owner_jud: selectradio_owner,
                  owner_cmmt: cmmtradio_owner,
                  sts: Status,
                });
                if (selectradio_owner != "R") {
                  localStorage.setItem("status_formail", selectradio_owner);
                  localStorage.setItem("To", receiver);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_owner);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    selectfac_manager,
                    selectacc_check,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/Mail");
                // navigate("/ApproveFam");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLLS010") {
            let Status = "";
            if (selectradio_record == "A") {
              Status = "FLLS011";
            } else if (selectradio_record == "R") {
              Status = "FLLS910";
            }

            if (
              selectradio_record == "R" &&
              (cmmtradio_record == "" ||
                cmmtradio_record == null ||
                cmmtradio_record == "null" ||
                cmmtradio_record == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              // try {
              //   const row = axios.post(
              //     `/update_recode?famno=${EditFam}&rec_jud=${selectradio_record}&rec_cmmt=${cmmtradio_record}&sts=${Status}`
              //   );
              try {
                const response = await axios.post("/update_recode", {
                  famno: EditFam,
                  rec_jud: selectradio_record,
                  rec_cmmt: cmmtradio_record,
                  sts: Status,
                });

                if (selectradio_record != "R") {
                  localStorage.setItem("status_formail", selectradio_record);
                  localStorage.setItem("To", selectacc_manager);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_record);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    selectfac_manager,
                    selectacc_check,
                    owner_roting,
                    receiver,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/ApproveFam");
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLLS011") {
            let Status = "";
            if (selectradio_acc_manager == "A") {
              Status = "FLLS012";
            } else if (selectradio_acc_manager == "R") {
              Status = "FLLS911";
            }
            if (
              selectradio_acc_manager == "R" &&
              (cmmtradio_acc_manager == "" ||
                cmmtradio_acc_manager == null ||
                cmmtradio_acc_manager == "null" ||
                cmmtradio_acc_manager == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_accmanager", {
                  famno: EditFam,
                  acc_manajud: selectradio_acc_manager,
                  acc_manacmmt: cmmtradio_acc_manager,
                  sts: Status,
                });
                if (selectradio_acc_manager != "R") {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_acc_manager
                  );
                  localStorage.setItem("To", selectacc_manager);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_acc_manager
                  );
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    selectfac_manager,
                    selectacc_check,
                    owner_roting,
                    receiver,
                    text_acc_check,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });
                localStorage.setItem("To", selectservice_by);
                localStorage.setItem("Genno", EditFam);
                localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                localStorage.setItem("Req_by", For_Rq_Edit[2]);
                localStorage.setItem("Status", Status);
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
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLLS012") {
            let Status = "";
            if (selectradio_service_close_by == "A") {
              Status = "FLLS013";
            } else if (selectradio_service_close_by == "R") {
              Status = "FLLS912";
            }

            if (
              selectradio_service_close_by == "R" &&
              (cmmtradio_service_close_by == "" ||
                cmmtradio_service_close_by == null ||
                cmmtradio_service_close_by == "null" ||
                cmmtradio_service_close_by == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_service_close", {
                  famno: EditFam,
                  cls_jud: selectradio_service_close_by,
                  cls_cmmt: cmmtradio_service_close_by,
                  sts: Status,
                });

                if (selectradio_service_close_by != "R") {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_service_close_by
                  );
                  localStorage.setItem("To", For_Rq_Edit[2]);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_service_close_by
                  );

                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    selectfac_manager,
                    selectacc_check,
                    owner_roting,
                    receiver,
                    text_acc_check,
                    selectacc_manager,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          }
        }
      } else {
        if (
          For_Req[2] === null ||
          For_Req[2] === undefined ||
          For_Req[2] === "" ||
          For_Req[2] === "null"
        ) {
          setErrorTel_Rq(true);
          alert("Please fill in information: Tel Requester");
          let ErrorTel_Req = "true";

          navigate("/ForRe", ErrorTel_Req);
          return;
        } else {
          setErrorTel_Rq(false);
        }

        if (
          For_Req[5] === null ||
          For_Req[5] === undefined ||
          For_Req[5] === "" ||
          For_Req[5] === "null"
        ) {
          alert("Please fill in information: Dept");
          setErrorDept(true);
          navigate("/ForRe");
          return;
        }
        if (
          For_Req[15] === null ||
          For_Req[15] === undefined ||
          For_Req[15] === "" ||
          For_Req[15] === "null"
        ) {
          alert("Please fill in information: Request Owner");
          navigate("/ForRe");
          return;
        }
        if (
          For_Req[17] === null ||
          For_Req[17] === undefined ||
          For_Req[17] === "" ||
          For_Req[17] === "null"
        ) {
          alert("Please fill in information: Owner Tel");
          navigate("/ForRe");
          return;
        }
        if (
          selectdepartment_mana === null ||
          selectdepartment_mana === undefined ||
          selectdepartment_mana === "" ||
          selectdepartment_mana === "null"
        ) {
          alert("Please fill in information: Department Manager");
          setErrorManager(true);
          return;
        } else {
          setErrorManager(false);
        }

        if (
          Tel_service === null ||
          Tel_service === undefined ||
          Tel_service === "" ||
          Tel_service === "null"
        ) {
          alert("Please fill in information: Tel_Service By");
          setErrorTel_service(true);
          return;
        } else {
          setErrorTel_service(false);
        }
        if (
          selectservice_by === null ||
          selectservice_by === undefined ||
          selectservice_by === "" ||
          selectservice_by === "null"
        ) {
          alert("Please fill in information: Service By");
          setErrorService_by(true);
          return;
        } else {
          setErrorService_by(false);
        }

        if (
          selectboi_staff === null ||
          selectboi_staff === undefined ||
          selectboi_staff === "" ||
          selectboi_staff === "null"
        ) {
          alert("Please fill in information: BOI Staff");
          setErrorBoi_Staff(true);
          return;
        } else {
          setErrorBoi_Staff(false);
        }
        if (
          selectboi_manager === null ||
          selectboi_manager === undefined ||
          selectboi_manager === "" ||
          selectboi_manager === "null"
        ) {
          alert("Please fill in information: BOI Manager");
          setErrorBoi_manager(true);
          return;
        } else {
          setErrorBoi_manager(false);
        }
        if (
          selectfac_manager === null ||
          selectfac_manager === undefined ||
          selectfac_manager === "" ||
          selectfac_manager === "null"
        ) {
          alert("Please fill in information: Factory Manager");
          setErrorMana_Fac(true);
          return;
        } else {
          setErrorMana_Fac(false);
        }
        if (
          selectacc_check === null ||
          selectacc_check === undefined ||
          selectacc_check === "" ||
          selectacc_check === "null"
        ) {
          alert("Please fill in information: ACC Check");
          setErrorAcc_check(true);
          return;
        } else {
          setErrorAcc_check(false);
        }

        if (
          selectacc_manager === null ||
          selectacc_manager === undefined ||
          selectacc_manager === "" ||
          selectacc_manager === "null"
        ) {
          alert("Please fill in information: ACC Manager");
          setErrorAcc_Mana(true);
          return;
        } else {
          setErrorAcc_Mana(false);
        }
        // Submit กรณี insert
        if (For_Req[10] === "FLTR001") {
          let Status = "FLLS002";
          try {
            const response = await axios.post("/update_submit", {
              famno: For_Req[0],
              sts_submit: Status,
            });
          } catch (error) {
            console.error("Error updating update_submit:", error.message);
          }
          try {
            const response = await axios.post("/Update_For_Req_All", {
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
              owner_id: For_Req[15],
              owner_dept: For_Req[16],
              owner_tel: For_Req[17],
              service_close: selectservice_by,
              owner_by: owner_roting,
              service_dt: ServiceDept,
            });
          } catch (error) {
            console.error("Error updating submit status:", error.message);
          }
          localStorage.setItem("To", selectdepartment_mana);
          localStorage.setItem("Genno", For_Req[0]);
          localStorage.setItem("Req_Type", For_Req[6]);
          localStorage.setItem("Req_by", For_Req[1]);
          localStorage.setItem("Status", Status);
          // navigate("/Mail");
          Swal.fire({
            title: "Save Success",
            icon: "success",
          });
        }
        // setCheckSubmit("False")
      }
    } else if (Type == "GP01005") {
      //Write-Off
      if (EditFam != null) {
        if (
          For_Rq_Edit[3] === null ||
          For_Rq_Edit[3] === undefined ||
          For_Rq_Edit[3] === "" ||
          For_Rq_Edit[3] === "null"
        ) {
          setErrorTel_Rq(true);
          alert("Please fill in information: Tel For Requester");
          navigate("/ForRe");
          return;
        } else {
          setErrorTel_Rq(false);
        }
        if (
          For_Rq_Edit[6] === null ||
          For_Rq_Edit[6] === undefined ||
          For_Rq_Edit[6] === "" ||
          For_Rq_Edit[6] === "null"
        ) {
          alert("Please fill in information: Dept ");
          setErrorDept(true);
          navigate("/ForRe");
          return;
        }

        if (
          For_Rq_Edit[17] === null ||
          For_Rq_Edit[17] === undefined ||
          For_Rq_Edit[17] === "" ||
          For_Rq_Edit[17] === "null"
        ) {
          alert("Please fill in information: Request Owner");
          setErrorDept(true);
          navigate("/ForRe");
          return;
        }
        if (
          For_Rq_Edit[19] === null ||
          For_Rq_Edit[19] === undefined ||
          For_Rq_Edit[19] === "" ||
          For_Rq_Edit[19] === "null"
        ) {
          alert("Please fill in information:  Owner Tel ");
          setErrorDept(true);
          navigate("/ForRe");
          return;
        }
        if (
          selectdepartment_mana === null ||
          selectdepartment_mana === undefined ||
          selectdepartment_mana === "" ||
          selectdepartment_mana === "null"
        ) {
          setErrorManager(true);
          alert("Please fill in information: Department Manager ");
          return;
        } else {
          setErrorManager(false);
        }
        if (
          Tel_service === "" ||
          Tel_service === undefined ||
          Tel_service === null ||
          Tel_service === "null"
        ) {
          setErrorTel_service(true);
          alert("Please fill in information: Tel_Service By");

          return;
        } else {
          setErrorTel_service(false);
        }
        if (
          selectservice_by === null ||
          selectservice_by === undefined ||
          selectservice_by === "" ||
          selectservice_by === "null"
        ) {
          setErrorService_by(true);
          alert("Please fill in information: Service By");
          return;
        } else {
          setErrorService_by(false);
        }

        if (
          selectboi_staff === null ||
          selectboi_staff === undefined ||
          selectboi_staff === "" ||
          selectboi_staff === "null"
        ) {
          setErrorBoi_Staff(true);
          alert("Please fill in information: BOI Staff");
          return;
        } else {
          setErrorBoi_Staff(false);
        }
        if (
          selectboi_manager === null ||
          selectboi_manager === undefined ||
          selectboi_manager === "" ||
          selectboi_manager === "null"
        ) {
          setErrorBoi_manager(true);
          alert("Please fill in information: BOI Manager");
          return;
        } else {
          setErrorBoi_manager(false);
        }
        if (
          selectfac_manager === null ||
          selectfac_manager === undefined ||
          selectfac_manager === "" ||
          selectfac_manager === "null"
        ) {
          setErrorMana_Fac(true);
          alert("Please fill in information: Factory Manager");
          return;
        } else {
          setErrorMana_Fac(false);
        }
        if (
          selectacc_check === null ||
          selectacc_check === undefined ||
          selectacc_check === "" ||
          selectacc_check === "null"
        ) {
          alert("Please fill in information: ACC Check");
          setErrorAcc_check(true);
          return;
        } else {
          setErrorAcc_check(false);
        }

        if (
          selectacc_manager === null ||
          selectacc_manager === undefined ||
          selectacc_manager === "" ||
          selectacc_manager === "null"
        ) {
          alert("Please fill in information: ACC Manager");
          setErrorAcc_Mana(true);
          return;
        } else {
          setErrorAcc_Mana(false);
        }
        openPopupLoadding();
        if (For_Rq_Edit != null) {
          if (For_Rq_Edit[10] === "FLWO001") {
            let Status = "FLWO002";
            try {
              const response = await axios.post("/Update_For_Req_All", {
                famno: For_Rq_Edit[0],
                dept: For_Rq_Edit[6],
                tel: For_Rq_Edit[3],
                remark: For_Rq_Edit[12],
                mrg_dept: selectdepartment_mana,
                serviceby: selectservice_by,
                servicetel: Tel_service,
                boisff: selectboi_staff,
                boimrg: selectboi_manager,
                fmby: selectfac_manager,
                accchk: selectacc_check,
                accmrg: selectacc_manager,
                updateby: For_Rq_Edit[2],
                record_by: text_acc_check,
                owner_id: For_Rq_Edit[17],
                owner_dept: For_Rq_Edit[18],
                owner_tel: For_Rq_Edit[19],
                service_close: selectservice_by,
                owner_by: owner_roting,
                service_dt: ServiceDept,
              });
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
            try {
              const response = await axios.post("/update_submit", {
                famno: EditFam,
                sts_submit: Status,
              });
              Swal.fire({
                title: "Submit Success",
                icon: "success",
              });

              // setCheckSubmit("False")
              // navigate('/Mail', { state: { selectservice_by } });
              localStorage.setItem("To", selectdepartment_mana);
              localStorage.setItem("Genno", EditFam);
              localStorage.setItem("Req_Type", For_Rq_Edit[7]);
              localStorage.setItem("Req_by", For_Rq_Edit[2]);
              localStorage.setItem("Status", Status);
              // navigate("/Mail");
              //  navigate('/Search');
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
          } else if (For_Rq_Edit[16] === "R") {
            let Status = "FLWO002";
            try {
              const response = await axios.post("/Update_For_Req_All", {
                famno: For_Rq_Edit[0],
                dept: For_Rq_Edit[6],
                tel: For_Rq_Edit[3],
                remark: For_Rq_Edit[12],
                mrg_dept: selectdepartment_mana,
                serviceby: selectservice_by,
                servicetel: Tel_service,
                boisff: selectboi_staff,
                boimrg: selectboi_manager,
                fmby: selectfac_manager,
                accchk: selectacc_check,
                accmrg: selectacc_manager,
                updateby: For_Rq_Edit[2],
                record_by: text_acc_check,
                owner_id: For_Rq_Edit[17],
                owner_dept: For_Rq_Edit[18],
                owner_tel: For_Rq_Edit[19],
                service_close: selectservice_by,
                owner_by: owner_roting,
                service_dt: ServiceDept,
              });
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }

            try {
              const response = await axios.post("/update_for_nullRouting_All", {
                famno: EditFam,
                user_a: User,
              });
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }

            try {
              const response = await axios.post("/update_submit", {
                famno: EditFam,
                sts_submit: Status,
              });

              Swal.fire({
                title: "Submit Success",
                icon: "success",
              });
              // setCheckSubmit("False")
              localStorage.setItem("status_formail", null);
              localStorage.setItem("To", selectdepartment_mana);
              localStorage.setItem("Genno", EditFam);
              localStorage.setItem("Req_Type", For_Rq_Edit[7]);
              localStorage.setItem("Req_by", For_Rq_Edit[2]);
              localStorage.setItem("Status", Status);
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
              // navigate("/Mail");
              // navigate("/Search");
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
          } else if (For_Rq_Edit[10] === "FLWO002") {
            console.log("เข้าาาาาาาาาา Dept")
            let Status = "";
            if (selectradio_dept == "A") {
              Status = "FLWO003";
            } else if (selectradio_dept == "R") {
              Status = "FLWO092";
            }
            if (
              selectradio_dept == "R" &&
              (cmmtradio_dept == "" ||
                cmmtradio_dept == null ||
                cmmtradio_dept == "null" ||
                cmmtradio_dept == "undifined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_manager_dept", {
                  famno: EditFam,
                  mgrjud: selectradio_dept,
                  mgrcmmt: cmmtradio_dept,
                  sts: Status,
                });

                if (selectradio_dept != "R") {
                  localStorage.setItem("status_formail", selectradio_dept);
                  localStorage.setItem("To", selectservice_by);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_dept);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }

                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });
                setCheckSubmit("False");

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
                // navigate("/Mail");
                // navigate("/ApproveFam");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLWO003") {
            let Status = "";
            if (selectradio_serviceby == "A") {
              Status = "FLWO004";
            } else if (selectradio_serviceby == "R") {
              Status = "FLWO093";
            }
            if (
              selectradio_serviceby == "R" &&
              (cmmtradio_serviceby == "" ||
                cmmtradio_serviceby == null ||
                cmmtradio_serviceby == "null" ||
                cmmtradio_serviceby == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_service_by", {
                  famno: EditFam,
                  serjud: selectradio_serviceby,
                  sercmmt: cmmtradio_serviceby,
                  sts: Status,
                });
                if (selectradio_serviceby != "R") {
                  localStorage.setItem("status_formail", selectradio_serviceby);
                  localStorage.setItem("To", selectboi_staff);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_serviceby);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }

                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });
                //   setCheckSubmit("False")

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
                // navigate("/ApproveFam");
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLWO004") {
            let Status = "";
            if (selectradio_boistaff == "A") {
              Status = "FLWO005";
            } else if (selectradio_boistaff == "R") {
              Status = "FLWO094";
            }
            if (
              selectradio_boistaff == "R" &&
              (cmmtradio_boistaff == "" ||
                cmmtradio_boistaff == null ||
                cmmtradio_boistaff == "null" ||
                cmmtradio_boistaff == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              // try {
              //   const row = axios.post(
              //     `/update_boi_staff?famno=${EditFam}&stff_jud=${selectradio_boistaff}&stff_cmmt=${cmmtradio_boistaff}&sts=${Status}`
              //   );
              try {
                const response = await axios.post("/update_boi_staff", {
                  famno: EditFam,
                  stff_jud: selectradio_boistaff,
                  stff_cmmt: cmmtradio_boistaff,
                  sts: Status,
                });

                if (selectradio_boistaff != "R") {
                  localStorage.setItem("status_formail", selectradio_boistaff);
                  localStorage.setItem("To", selectboi_manager);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_boistaff);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLWO005") {
            let Status = "";
            if (selectradio_boimanager == "A") {
              Status = "FLWO006";
            } else if (selectradio_boimanager == "R") {
              Status = "FLWO095";
            }

            if (
              selectradio_boimanager == "R" &&
              (cmmtradio_boimanager == "" ||
                cmmtradio_boimanager == null ||
                cmmtradio_boimanager == "null" ||
                cmmtradio_boimanager == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_boi_mana", {
                  famno: EditFam,
                  boimana_jud: selectradio_boimanager,
                  boimana_cmmt: cmmtradio_boimanager,
                  sts: Status,
                });
                if (selectradio_boimanager != "R") {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_boimanager
                  );
                  localStorage.setItem("To", selectfac_manager);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_boimanager
                  );
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/ApproveFam");
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLWO006") {
            let Status = "";
            if (selectradio_facmanager == "A") {
              Status = "FLWO007";
            } else if (selectradio_facmanager == "R") {
              Status = "FLWO096";
            }

            if (
              selectradio_facmanager == "R" &&
              (cmmtradio_facmanager == "" ||
                cmmtradio_facmanager == null ||
                cmmtradio_facmanager == "null" ||
                cmmtradio_facmanager == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_facmanager", {
                  famno: EditFam,
                  fm_jud: selectradio_facmanager,
                  fm_cmmt: cmmtradio_facmanager,
                  sts: Status,
                });

                if (selectradio_boimanager != "R") {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_boimanager
                  );
                  localStorage.setItem("To", selectacc_check);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_boimanager
                  );
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/ApproveFam");
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLWO007") {
            let Status = "";
            if (selectradio_acc_check == "A") {
              Status = "FLWO008";
            } else if (selectradio_acc_check == "R") {
              Status = "FLWO907";
            }

            if (
              selectradio_acc_check == "R" &&
              (cmmtradio_acc_check == "" ||
                cmmtradio_acc_check == null ||
                cmmtradio_acc_check == "null" ||
                cmmtradio_acc_check == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_acccheck", {
                  famno: EditFam,
                  chk_jud: selectradio_acc_check,
                  chk_cmmt: cmmtradio_acc_check,
                  sts: Status,
                });
                if (selectradio_acc_check != "R") {
                  localStorage.setItem("status_formail", selectradio_acc_check);
                  localStorage.setItem("To", owner_roting);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_acc_check);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    selectfac_manager,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });
                //  setCheckSubmit("False")

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
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLWO008") {
            let Status = "";
            if (selectradio_owner == "A") {
              Status = "FLWO010";
            } else if (selectradio_owner == "R") {
              Status = "FLWO908";
            }

            if (
              selectradio_owner == "R" &&
              (cmmtradio_owner == "" ||
                cmmtradio_owner == null ||
                cmmtradio_owner == "null" ||
                cmmtradio_owner == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_owner", {
                  famno: EditFam,
                  owner_jud: selectradio_owner,
                  owner_cmmt: cmmtradio_owner,
                  sts: Status,
                });
                if (selectradio_owner != "R") {
                  localStorage.setItem("status_formail", selectradio_owner);
                  localStorage.setItem("To", receiver);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_owner);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    selectfac_manager,
                    selectacc_check,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/Mail");
                // navigate("/ApproveFam");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLWO010") {
            let Status = "";
            if (selectradio_record == "A") {
              Status = "FLWO011";
            } else if (selectradio_record == "R") {
              Status = "FLWO910";
            }

            if (
              selectradio_record == "R" &&
              (cmmtradio_record == "" ||
                cmmtradio_record == null ||
                cmmtradio_record == "null" ||
                cmmtradio_record == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              // try {
              //   const row = axios.post(
              //     `/update_recode?famno=${EditFam}&rec_jud=${selectradio_record}&rec_cmmt=${cmmtradio_record}&sts=${Status}`
              //   );
              try {
                const response = await axios.post("/update_recode", {
                  famno: EditFam,
                  rec_jud: selectradio_record,
                  rec_cmmt: cmmtradio_record,
                  sts: Status,
                });

                if (selectradio_record != "R") {
                  localStorage.setItem("status_formail", selectradio_record);
                  localStorage.setItem("To", selectacc_manager);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_record);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    selectfac_manager,
                    selectacc_check,
                    owner_roting,
                    receiver,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/ApproveFam");
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLWO011") {
            let Status = "";
            if (selectradio_acc_manager == "A") {
              Status = "FLWO012";
            } else if (selectradio_acc_manager == "R") {
              Status = "FLWO911";
            }
            if (
              selectradio_acc_manager == "R" &&
              (cmmtradio_acc_manager == "" ||
                cmmtradio_acc_manager == null ||
                cmmtradio_acc_manager == "null" ||
                cmmtradio_acc_manager == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_accmanager", {
                  famno: EditFam,
                  acc_manajud: selectradio_acc_manager,
                  acc_manacmmt: cmmtradio_acc_manager,
                  sts: Status,
                });
                if (selectradio_acc_manager != "R") {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_acc_manager
                  );
                  localStorage.setItem("To", selectacc_manager);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_acc_manager
                  );
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    selectfac_manager,
                    selectacc_check,
                    owner_roting,
                    receiver,
                    text_acc_check,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });
                localStorage.setItem("To", selectservice_by);
                localStorage.setItem("Genno", EditFam);
                localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                localStorage.setItem("Req_by", For_Rq_Edit[2]);
                localStorage.setItem("Status", Status);
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
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLWO012") {
            let Status = "";
            if (selectradio_service_close_by == "A") {
              Status = "FLWO013";
            } else if (selectradio_service_close_by == "R") {
              Status = "FLWO912";
            }

            if (
              selectradio_service_close_by == "R" &&
              (cmmtradio_service_close_by == "" ||
                cmmtradio_service_close_by == null ||
                cmmtradio_service_close_by == "null" ||
                cmmtradio_service_close_by == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              // try {
              //   const row = axios.post(
              //     `/update_service_close?famno=${EditFam}&cls_jud=${selectradio_service_close_by}&cls_cmmt=${cmmtradio_service_close_by}&sts=${Status}`
              //   );
              try {
                const response = await axios.post("/update_service_close", {
                  famno: EditFam,
                  cls_jud: selectradio_service_close_by,
                  cls_cmmt: cmmtradio_service_close_by,
                  sts: Status,
                });

                if (selectradio_service_close_by != "R") {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_service_close_by
                  );
                  localStorage.setItem("To", For_Rq_Edit[2]);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_service_close_by
                  );

                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    selectfac_manager,
                    selectacc_check,
                    owner_roting,
                    receiver,
                    text_acc_check,
                    selectacc_manager,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          }
        }
      } else {
        if (
          For_Req[2] === null ||
          For_Req[2] === undefined ||
          For_Req[2] === "" ||
          For_Req[2] === "null"
        ) {
          setErrorTel_Rq(true);
          alert("Please fill in information: Tel Requester");
          let ErrorTel_Req = "true";

          navigate("/ForRe", ErrorTel_Req);
          return;
        } else {
          setErrorTel_Rq(false);
        }

        if (
          For_Req[5] === null ||
          For_Req[5] === undefined ||
          For_Req[5] === "" ||
          For_Req[5] === "null"
        ) {
          alert("Please fill in information: Dept");
          setErrorDept(true);
          navigate("/ForRe");
          return;
        }
        if (
          For_Req[15] === null ||
          For_Req[15] === undefined ||
          For_Req[15] === "" ||
          For_Req[15] === "null"
        ) {
          alert("Please fill in information: Request Owner");
          navigate("/ForRe");
          return;
        }
        if (
          For_Req[17] === null ||
          For_Req[17] === undefined ||
          For_Req[17] === "" ||
          For_Req[17] === "null"
        ) {
          alert("Please fill in information: Owner Tel");
          navigate("/ForRe");
          return;
        }
        if (
          selectdepartment_mana === null ||
          selectdepartment_mana === undefined ||
          selectdepartment_mana === "" ||
          selectdepartment_mana === "null"
        ) {
          alert("Please fill in information: Department Manager");
          setErrorManager(true);
          return;
        } else {
          setErrorManager(false);
        }

        if (
          Tel_service === null ||
          Tel_service === undefined ||
          Tel_service === "" ||
          Tel_service === "null"
        ) {
          alert("Please fill in information: Tel_Service By");
          setErrorTel_service(true);
          return;
        } else {
          setErrorTel_service(false);
        }
        if (
          selectservice_by === null ||
          selectservice_by === undefined ||
          selectservice_by === "" ||
          selectservice_by === "null"
        ) {
          alert("Please fill in information: Service By");
          setErrorService_by(true);
          return;
        } else {
          setErrorService_by(false);
        }

        if (
          selectboi_staff === null ||
          selectboi_staff === undefined ||
          selectboi_staff === "" ||
          selectboi_staff === "null"
        ) {
          alert("Please fill in information: BOI Staff");
          setErrorBoi_Staff(true);
          return;
        } else {
          setErrorBoi_Staff(false);
        }
        if (
          selectboi_manager === null ||
          selectboi_manager === undefined ||
          selectboi_manager === "" ||
          selectboi_manager === "null"
        ) {
          alert("Please fill in information: BOI Manager");
          setErrorBoi_manager(true);
          return;
        } else {
          setErrorBoi_manager(false);
        }
        if (
          selectfac_manager === null ||
          selectfac_manager === undefined ||
          selectfac_manager === "" ||
          selectfac_manager === "null"
        ) {
          alert("Please fill in information: Factory Manager");
          setErrorMana_Fac(true);
          return;
        } else {
          setErrorMana_Fac(false);
        }
        if (
          selectacc_check === null ||
          selectacc_check === undefined ||
          selectacc_check === "" ||
          selectacc_check === "null"
        ) {
          alert("Please fill in information: ACC Check");
          setErrorAcc_check(true);
          return;
        } else {
          setErrorAcc_check(false);
        }

        if (
          selectacc_manager === null ||
          selectacc_manager === undefined ||
          selectacc_manager === "" ||
          selectacc_manager === "null"
        ) {
          alert("Please fill in information: ACC Manager");
          setErrorAcc_Mana(true);
          return;
        } else {
          setErrorAcc_Mana(false);
        }
        // Submit กรณี insert
        if (For_Req[10] === "FLTR001") {
          let Status = "FLLS002";
          try {
            const response = await axios.post("/update_submit", {
              famno: For_Req[0],
              sts_submit: Status,
            });
          } catch (error) {
            console.error("Error updating submit status:", error.message);
          }
          try {
            const response = await axios.post("/update_new_cc", {
              fam: For_Req[0],
              New_cc: selecttrans_cc,
              updateby: For_Req[1],
            });
            //// console(data, "data");
          } catch (error) {
            console.error("Error during login:", error);
          }
          try {
            const response = await axios.post("/Update_For_Req_All", {
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
              owner_id: For_Req[15],
              owner_dept: For_Req[16],
              owner_tel: For_Req[17],
              service_close: selectservice_by,
              owner_by: owner_roting,
              service_dt: ServiceDept,
            });
          } catch (error) {
            console.error("Error updating submit status:", error.message);
          }
          localStorage.setItem("To", selectdepartment_mana);
          localStorage.setItem("Genno", For_Req[0]);
          localStorage.setItem("Req_Type", For_Req[6]);
          localStorage.setItem("Req_by", For_Req[1]);
          localStorage.setItem("Status", Status);
          // navigate("/Mail");
          Swal.fire({
            title: "Save Success",
            icon: "success",
          });
        }
        // setCheckSubmit("False")
      }
    }  else if (Type == "GP01007") {
      //Donation
      
      if (EditFam != null) {
     
        if (
          For_Rq_Edit[3] === null ||
          For_Rq_Edit[3] === undefined ||
          For_Rq_Edit[3] === "" ||
          For_Rq_Edit[3] === "null"
        ) {
          setErrorTel_Rq(true);
          alert("Please fill in information: Tel For Requester");
          navigate("/ForRe");
          return;
        } else {
          setErrorTel_Rq(false);
        }
        if (
          For_Rq_Edit[6] === null ||
          For_Rq_Edit[6] === undefined ||
          For_Rq_Edit[6] === "" ||
          For_Rq_Edit[6] === "null"
        ) {
          alert("Please fill in information: Dept ");
          setErrorDept(true);
          navigate("/ForRe");
          return;
        }

        if (
          For_Rq_Edit[17] === null ||
          For_Rq_Edit[17] === undefined ||
          For_Rq_Edit[17] === "" ||
          For_Rq_Edit[17] === "null"
        ) {
          alert("Please fill in information: Request Owner");
          setErrorDept(true);
          navigate("/ForRe");
          return;
        }
        if (
          For_Rq_Edit[19] === null ||
          For_Rq_Edit[19] === undefined ||
          For_Rq_Edit[19] === "" ||
          For_Rq_Edit[19] === "null"
        ) {
          alert("Please fill in information:  Owner Tel ");
          setErrorDept(true);
          navigate("/ForRe");
          return;
        }
        if (
          selectdepartment_mana === null ||
          selectdepartment_mana === undefined ||
          selectdepartment_mana === "" ||
          selectdepartment_mana === "null"
        ) {
          setErrorManager(true);
          alert("Please fill in information: Department Manager ");
          return;
        } else {
          setErrorManager(false);
        }
        if (
          Tel_service === "" ||
          Tel_service === undefined ||
          Tel_service === null ||
          Tel_service === "null"
        ) {
          setErrorTel_service(true);
          alert("Please fill in information: Tel_Service By");

          return;
        } else {
          setErrorTel_service(false);
        }
        if (
          selectservice_by === null ||
          selectservice_by === undefined ||
          selectservice_by === "" ||
          selectservice_by === "null"
        ) {
          setErrorService_by(true);
          alert("Please fill in information: Service By");
          return;
        } else {
          setErrorService_by(false);
        }

        if (
          selectboi_staff === null ||
          selectboi_staff === undefined ||
          selectboi_staff === "" ||
          selectboi_staff === "null"
        ) {
          setErrorBoi_Staff(true);
          alert("Please fill in information: BOI Staff");
          return;
        } else {
          setErrorBoi_Staff(false);
        }
        if (
          selectboi_manager === null ||
          selectboi_manager === undefined ||
          selectboi_manager === "" ||
          selectboi_manager === "null"
        ) {
          setErrorBoi_manager(true);
          alert("Please fill in information: BOI Manager");
          return;
        } else {
          setErrorBoi_manager(false);
        }
        if (
          selectfac_manager === null ||
          selectfac_manager === undefined ||
          selectfac_manager === "" ||
          selectfac_manager === "null"
        ) {
          setErrorMana_Fac(true);
          alert("Please fill in information: Factory Manager");
          return;
        } else {
          setErrorMana_Fac(false);
        }
        if (
          selectacc_check === null ||
          selectacc_check === undefined ||
          selectacc_check === "" ||
          selectacc_check === "null"
        ) {
          alert("Please fill in information: ACC Check");
          setErrorAcc_check(true);
          return;
        } else {
          setErrorAcc_check(false);
        }

        if (
          selectacc_manager === null ||
          selectacc_manager === undefined ||
          selectacc_manager === "" ||
          selectacc_manager === "null"
        ) {
          alert("Please fill in information: ACC Manager");
          setErrorAcc_Mana(true);
          return;
        } else {
          setErrorAcc_Mana(false);
        }
        openPopupLoadding();
        if (For_Rq_Edit != null) {
         
          if (For_Rq_Edit[10] === "FLDN001") {
            let Status = "FLWO002";
            try {
              const response = await axios.post("/Update_For_Req_All", {
                famno: For_Rq_Edit[0],
                dept: For_Rq_Edit[6],
                tel: For_Rq_Edit[3],
                remark: For_Rq_Edit[12],
                mrg_dept: selectdepartment_mana,
                serviceby: selectservice_by,
                servicetel: Tel_service,
                boisff: selectboi_staff,
                boimrg: selectboi_manager,
                fmby: selectfac_manager,
                accchk: selectacc_check,
                accmrg: selectacc_manager,
                updateby: For_Rq_Edit[2],
                record_by: text_acc_check,
                owner_id: For_Rq_Edit[17],
                owner_dept: For_Rq_Edit[18],
                owner_tel: For_Rq_Edit[19],
                service_close: selectservice_by,
                owner_by: owner_roting,
                service_dt: ServiceDept,
              });
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
            try {
              const response = await axios.post("/update_submit", {
                famno: EditFam,
                sts_submit: Status,
              });
              Swal.fire({
                title: "Submit Success",
                icon: "success",
              });

              // setCheckSubmit("False")
              // navigate('/Mail', { state: { selectservice_by } });
              localStorage.setItem("To", selectdepartment_mana);
              localStorage.setItem("Genno", EditFam);
              localStorage.setItem("Req_Type", For_Rq_Edit[7]);
              localStorage.setItem("Req_by", For_Rq_Edit[2]);
              localStorage.setItem("Status", Status);
              // navigate("/Mail");
              //  navigate('/Search');
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
          } else if (For_Rq_Edit[16] === "R") {
            let Status = "FLDN002";
            try {
              const response = await axios.post("/Update_For_Req_All", {
                famno: For_Rq_Edit[0],
                dept: For_Rq_Edit[6],
                tel: For_Rq_Edit[3],
                remark: For_Rq_Edit[12],
                mrg_dept: selectdepartment_mana,
                serviceby: selectservice_by,
                servicetel: Tel_service,
                boisff: selectboi_staff,
                boimrg: selectboi_manager,
                fmby: selectfac_manager,
                accchk: selectacc_check,
                accmrg: selectacc_manager,
                updateby: For_Rq_Edit[2],
                record_by: text_acc_check,
                owner_id: For_Rq_Edit[17],
                owner_dept: For_Rq_Edit[18],
                owner_tel: For_Rq_Edit[19],
                service_close: selectservice_by,
                owner_by: owner_roting,
                service_dt: ServiceDept,
              });
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }

            try {
              const response = await axios.post("/update_for_nullRouting_All", {
                famno: EditFam,
                user_a: User,
              });
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }

            try {
              const response = await axios.post("/update_submit", {
                famno: EditFam,
                sts_submit: Status,
              });

              Swal.fire({
                title: "Submit Success",
                icon: "success",
              });
              // setCheckSubmit("False")
              localStorage.setItem("status_formail", null);
              localStorage.setItem("To", selectdepartment_mana);
              localStorage.setItem("Genno", EditFam);
              localStorage.setItem("Req_Type", For_Rq_Edit[7]);
              localStorage.setItem("Req_by", For_Rq_Edit[2]);
              localStorage.setItem("Status", Status);
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
              // navigate("/Mail");
              // navigate("/Search");
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
          } else if (For_Rq_Edit[10] === "FLDN002") {
            console.log("เข้าาาาาาาาาา Dept")
            let Status = "";
            if (selectradio_dept == "A") {
              Status = "FLDN003";
            } else if (selectradio_dept == "R") {
              Status = "FLDN092";
            }
            if (
              selectradio_dept == "R" &&
              (cmmtradio_dept == "" ||
                cmmtradio_dept == null ||
                cmmtradio_dept == "null" ||
                cmmtradio_dept == "undifined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_manager_dept", {
                  famno: EditFam,
                  mgrjud: selectradio_dept,
                  mgrcmmt: cmmtradio_dept,
                  sts: Status,
                });

                if (selectradio_dept != "R") {
                  localStorage.setItem("status_formail", selectradio_dept);
                  localStorage.setItem("To", selectservice_by);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_dept);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }

                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });
                setCheckSubmit("False");

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
                // navigate("/Mail");
                // navigate("/ApproveFam");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLDN003") {
            let Status = "";
            if (selectradio_serviceby == "A") {
              Status = "FLDN004";
            } else if (selectradio_serviceby == "R") {
              Status = "FLDN093";
            }
            if (
              selectradio_serviceby == "R" &&
              (cmmtradio_serviceby == "" ||
                cmmtradio_serviceby == null ||
                cmmtradio_serviceby == "null" ||
                cmmtradio_serviceby == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_service_by", {
                  famno: EditFam,
                  serjud: selectradio_serviceby,
                  sercmmt: cmmtradio_serviceby,
                  sts: Status,
                });
                if (selectradio_serviceby != "R") {
                  localStorage.setItem("status_formail", selectradio_serviceby);
                  localStorage.setItem("To", selectboi_staff);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_serviceby);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }

                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });
                //   setCheckSubmit("False")

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
                // navigate("/ApproveFam");
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLDN004") {
            let Status = "";
            if (selectradio_boistaff == "A") {
              Status = "FLDN005";
            } else if (selectradio_boistaff == "R") {
              Status = "FLDN094";
            }
            if (
              selectradio_boistaff == "R" &&
              (cmmtradio_boistaff == "" ||
                cmmtradio_boistaff == null ||
                cmmtradio_boistaff == "null" ||
                cmmtradio_boistaff == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              // try {
              //   const row = axios.post(
              //     `/update_boi_staff?famno=${EditFam}&stff_jud=${selectradio_boistaff}&stff_cmmt=${cmmtradio_boistaff}&sts=${Status}`
              //   );
              try {
                const response = await axios.post("/update_boi_staff", {
                  famno: EditFam,
                  stff_jud: selectradio_boistaff,
                  stff_cmmt: cmmtradio_boistaff,
                  sts: Status,
                });

                if (selectradio_boistaff != "R") {
                  localStorage.setItem("status_formail", selectradio_boistaff);
                  localStorage.setItem("To", selectboi_manager);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_boistaff);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLDN005") {
            let Status = "";
            if (selectradio_boimanager == "A") {
              Status = "FLDN006";
            } else if (selectradio_boimanager == "R") {
              Status = "FLDN095";
            }

            if (
              selectradio_boimanager == "R" &&
              (cmmtradio_boimanager == "" ||
                cmmtradio_boimanager == null ||
                cmmtradio_boimanager == "null" ||
                cmmtradio_boimanager == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_boi_mana", {
                  famno: EditFam,
                  boimana_jud: selectradio_boimanager,
                  boimana_cmmt: cmmtradio_boimanager,
                  sts: Status,
                });
                if (selectradio_boimanager != "R") {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_boimanager
                  );
                  localStorage.setItem("To", selectfac_manager);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_boimanager
                  );
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/ApproveFam");
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLDN006") {
            let Status = "";
            if (selectradio_facmanager == "A") {
              Status = "FLDN007";
            } else if (selectradio_facmanager == "R") {
              Status = "FLDN096";
            }

            if (
              selectradio_facmanager == "R" &&
              (cmmtradio_facmanager == "" ||
                cmmtradio_facmanager == null ||
                cmmtradio_facmanager == "null" ||
                cmmtradio_facmanager == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_facmanager", {
                  famno: EditFam,
                  fm_jud: selectradio_facmanager,
                  fm_cmmt: cmmtradio_facmanager,
                  sts: Status,
                });

                if (selectradio_boimanager != "R") {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_boimanager
                  );
                  localStorage.setItem("To", selectacc_check);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_boimanager
                  );
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/ApproveFam");
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLDN007") { 
            console.log("UUUUUUUUU:::::::::::",certificate_date)
            let Status = "";
            if (selectradio_acc_check == "A") {
              Status = "FLDN008";
            } else if (selectradio_acc_check == "R") {
              Status = "FLDN907";
            }
            
            if (
              selectradio_acc_check == "R" &&
              (cmmtradio_acc_check == "" ||
                cmmtradio_acc_check == null ||
                cmmtradio_acc_check == "null" ||
                cmmtradio_acc_check == "undefined")
            ) {
              alert("Please fill in information");
            } else {
             
              // try {
              //   const response = await axios.post("/date_certificate", {
              //     famno: EditFam,
              //     date_cer: certificate_date,
                  
              //   });
              //   //// console(data, "data");
              // } catch (error) {
              //   console.error("Error during login:", error);
              // }
              // try {
              //   const response = await axios.post("/update_acccheck", {
              //     famno: EditFam,
              //     chk_jud: selectradio_acc_check,
              //     chk_cmmt: cmmtradio_acc_check,
              //     sts: Status,
              //   });
              //   if (selectradio_acc_check != "R") {
              //     localStorage.setItem("status_formail", selectradio_acc_check);
              //     localStorage.setItem("To", owner_roting);
              //     localStorage.setItem("Genno", EditFam);
              //     localStorage.setItem("Req_Type", For_Rq_Edit[7]);
              //     localStorage.setItem("Req_by", For_Rq_Edit[2]);
              //     localStorage.setItem("Status", Status);
              //   } else {
              //     localStorage.setItem("status_formail", selectradio_acc_check);
              //     localStorage.setItem("Genno", EditFam);
              //     localStorage.setItem("Req_Type", For_Rq_Edit[7]);
              //     localStorage.setItem("Req_by", For_Rq_Edit[2]);
              //     localStorage.setItem("Status", Status);
              //     const Approver = [
              //       selectdepartment_mana,
              //       selectservice_by,
              //       selectboi_staff,
              //       selectboi_manager,
              //       selectfac_manager,
              //       null,
              //       null,
              //       null,
              //       null,
              //       null,
              //     ];
              //     const sentdata = JSON.stringify(Approver);
              //     localStorage.setItem("Approver_formail", sentdata);
              //   }
              //   Swal.fire({
              //     title: "Save Success",
              //     icon: "success",
              //   });
              //   //  setCheckSubmit("False")

              //   localStorage.removeItem("ForRequester");
              //   localStorage.removeItem("forDetail");
              //   localStorage.removeItem("TransForDetail");
              //   localStorage.removeItem("EDIT");
              //   localStorage.removeItem("For_Transfer");
              //   localStorage.removeItem("For_Routing");
              //   localStorage.removeItem("For_Req_Edit");
              //   localStorage.removeItem("Edit_Trans");
              //   localStorage.removeItem("Edit_Dteail_for_FixedCode");
              //   localStorage.removeItem("Edit_routing");
              //   // navigate("/Mail");
              // } catch (error) {
              //   console.error("Error updating submit status:", error.message);
              // }
            }
          } else if (For_Rq_Edit[10] === "FLDN008") {
            let Status = "";
            if (selectradio_owner == "A") {
              Status = "FLDN010";
            } else if (selectradio_owner == "R") {
              Status = "FLDN908";
            }

            if (
              selectradio_owner == "R" &&
              (cmmtradio_owner == "" ||
                cmmtradio_owner == null ||
                cmmtradio_owner == "null" ||
                cmmtradio_owner == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_owner", {
                  famno: EditFam,
                  owner_jud: selectradio_owner,
                  owner_cmmt: cmmtradio_owner,
                  sts: Status,
                });
                if (selectradio_owner != "R") {
                  localStorage.setItem("status_formail", selectradio_owner);
                  localStorage.setItem("To", receiver);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_owner);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    selectfac_manager,
                    selectacc_check,
                    null,
                    null,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/Mail");
                // navigate("/ApproveFam");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLDN010") {
            let Status = "";
            if (selectradio_record == "A") {
              Status = "FLDN011";
            } else if (selectradio_record == "R") {
              Status = "FLDN910";
            }

            if (
              selectradio_record == "R" &&
              (cmmtradio_record == "" ||
                cmmtradio_record == null ||
                cmmtradio_record == "null" ||
                cmmtradio_record == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              // try {
              //   const row = axios.post(
              //     `/update_recode?famno=${EditFam}&rec_jud=${selectradio_record}&rec_cmmt=${cmmtradio_record}&sts=${Status}`
              //   );
              try {
                const response = await axios.post("/update_recode", {
                  famno: EditFam,
                  rec_jud: selectradio_record,
                  rec_cmmt: cmmtradio_record,
                  sts: Status,
                });

                if (selectradio_record != "R") {
                  localStorage.setItem("status_formail", selectradio_record);
                  localStorage.setItem("To", selectacc_manager);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_record);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    selectfac_manager,
                    selectacc_check,
                    owner_roting,
                    receiver,
                    null,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/ApproveFam");
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLDN011") {
            let Status = "";
            if (selectradio_acc_manager == "A") {
              Status = "FLDN012";
            } else if (selectradio_acc_manager == "R") {
              Status = "FLDN911";
            }
            if (
              selectradio_acc_manager == "R" &&
              (cmmtradio_acc_manager == "" ||
                cmmtradio_acc_manager == null ||
                cmmtradio_acc_manager == "null" ||
                cmmtradio_acc_manager == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_accmanager", {
                  famno: EditFam,
                  acc_manajud: selectradio_acc_manager,
                  acc_manacmmt: cmmtradio_acc_manager,
                  sts: Status,
                });
                if (selectradio_acc_manager != "R") {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_acc_manager
                  );
                  localStorage.setItem("To", selectacc_manager);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_acc_manager
                  );
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    selectfac_manager,
                    selectacc_check,
                    owner_roting,
                    receiver,
                    text_acc_check,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });
                localStorage.setItem("To", selectservice_by);
                localStorage.setItem("Genno", EditFam);
                localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                localStorage.setItem("Req_by", For_Rq_Edit[2]);
                localStorage.setItem("Status", Status);
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
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLDN012") {
            let Status = "";
            if (selectradio_service_close_by == "A") {
              Status = "FLDN013";
            } else if (selectradio_service_close_by == "R") {
              Status = "FLDN912";
            }

            if (
              selectradio_service_close_by == "R" &&
              (cmmtradio_service_close_by == "" ||
                cmmtradio_service_close_by == null ||
                cmmtradio_service_close_by == "null" ||
                cmmtradio_service_close_by == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              // try {
              //   const row = axios.post(
              //     `/update_service_close?famno=${EditFam}&cls_jud=${selectradio_service_close_by}&cls_cmmt=${cmmtradio_service_close_by}&sts=${Status}`
              //   );
              try {
                const response = await axios.post("/update_service_close", {
                  famno: EditFam,
                  cls_jud: selectradio_service_close_by,
                  cls_cmmt: cmmtradio_service_close_by,
                  sts: Status,
                });

                if (selectradio_service_close_by != "R") {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_service_close_by
                  );
                  localStorage.setItem("To", For_Rq_Edit[2]);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_service_close_by
                  );

                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                  const Approver = [
                    selectdepartment_mana,
                    selectservice_by,
                    selectboi_staff,
                    selectboi_manager,
                    selectfac_manager,
                    selectacc_check,
                    owner_roting,
                    receiver,
                    text_acc_check,
                    selectacc_manager,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Save Success",
                  icon: "success",
                });

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
                // navigate("/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          }
        }
      } else {
       
        if (
          For_Req[2] === null ||
          For_Req[2] === undefined ||
          For_Req[2] === "" ||
          For_Req[2] === "null"
        ) {
          setErrorTel_Rq(true);
          alert("Please fill in information: Tel Requester");
          let ErrorTel_Req = "true";

          navigate("/ForRe", ErrorTel_Req);
          return;
        } else {
          setErrorTel_Rq(false);
        }

        if (
          For_Req[5] === null ||
          For_Req[5] === undefined ||
          For_Req[5] === "" ||
          For_Req[5] === "null"
        ) {
          alert("Please fill in information: Dept");
          setErrorDept(true);
          navigate("/ForRe");
          return;
        }
        if (
          For_Req[15] === null ||
          For_Req[15] === undefined ||
          For_Req[15] === "" ||
          For_Req[15] === "null"
        ) {
          alert("Please fill in information: Request Owner");
          navigate("/ForRe");
          return;
        }
        if (
          For_Req[17] === null ||
          For_Req[17] === undefined ||
          For_Req[17] === "" ||
          For_Req[17] === "null"
        ) {
          alert("Please fill in information: Owner Tel");
          navigate("/ForRe");
          return;
        }
        if (
          selectdepartment_mana === null ||
          selectdepartment_mana === undefined ||
          selectdepartment_mana === "" ||
          selectdepartment_mana === "null"
        ) {
          alert("Please fill in information: Department Manager");
          setErrorManager(true);
          return;
        } else {
          setErrorManager(false);
        }

        if (
          Tel_service === null ||
          Tel_service === undefined ||
          Tel_service === "" ||
          Tel_service === "null"
        ) {
          alert("Please fill in information: Tel_Service By");
          setErrorTel_service(true);
          return;
        } else {
          setErrorTel_service(false);
        }
        if (
          selectservice_by === null ||
          selectservice_by === undefined ||
          selectservice_by === "" ||
          selectservice_by === "null"
        ) {
          alert("Please fill in information: Service By");
          setErrorService_by(true);
          return;
        } else {
          setErrorService_by(false);
        }

        if (
          selectboi_staff === null ||
          selectboi_staff === undefined ||
          selectboi_staff === "" ||
          selectboi_staff === "null"
        ) {
          alert("Please fill in information: BOI Staff");
          setErrorBoi_Staff(true);
          return;
        } else {
          setErrorBoi_Staff(false);
        }
        if (
          selectboi_manager === null ||
          selectboi_manager === undefined ||
          selectboi_manager === "" ||
          selectboi_manager === "null"
        ) {
          alert("Please fill in information: BOI Manager");
          setErrorBoi_manager(true);
          return;
        } else {
          setErrorBoi_manager(false);
        }
        if (
          selectfac_manager === null ||
          selectfac_manager === undefined ||
          selectfac_manager === "" ||
          selectfac_manager === "null"
        ) {
          alert("Please fill in information: Factory Manager");
          setErrorMana_Fac(true);
          return;
        } else {
          setErrorMana_Fac(false);
        }
        if (
          selectacc_check === null ||
          selectacc_check === undefined ||
          selectacc_check === "" ||
          selectacc_check === "null"
        ) {
          alert("Please fill in information: ACC Check");
          setErrorAcc_check(true);
          return;
        } else {
          setErrorAcc_check(false);
        }

        if (
          selectacc_manager === null ||
          selectacc_manager === undefined ||
          selectacc_manager === "" ||
          selectacc_manager === "null"
        ) {
          alert("Please fill in information: ACC Manager");
          setErrorAcc_Mana(true);
          return;
        } else {
          setErrorAcc_Mana(false);
        }
        // Submit กรณี insert
        if (For_Req[10] === "FLDN001") {
          let Status = "FLDN002";
          try {
            const response = await axios.post("/update_submit", {
              famno: For_Req[0],
              sts_submit: Status,
            });
          } catch (error) {
            console.error("Error updating submit status:", error.message);
          }
          
          try {
            const response = await axios.post("/Update_For_Req_All", {
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
              owner_id: For_Req[15],
              owner_dept: For_Req[16],
              owner_tel: For_Req[17],
              service_close: selectservice_by,
              owner_by: owner_roting,
              service_dt: ServiceDept,
            });
          } catch (error) {
            console.error("Error updating submit status:", error.message);
          }
          localStorage.setItem("To", selectdepartment_mana);
          localStorage.setItem("Genno", For_Req[0]);
          localStorage.setItem("Req_Type", For_Req[6]);
          localStorage.setItem("Req_by", For_Req[1]);
          localStorage.setItem("Status", Status);
          // navigate("/Mail");
          Swal.fire({
            title: "Save Success",
            icon: "success",
          });
        }
        // setCheckSubmit("False")
      }
    }
    closePopupLoadding();
  };
  // ปุ่ม Reset
  const Reset = async () => {
    if (EditFam !== null) {
      if (STS1 == "" || STS1 == "FLTR001" || For_sts_reject == "R") {
        setselecttrans_factory([]);
        setselecttrans_cc([]);
        setnew_boi("");
        setnew_owner([]);
        setplan_date("");
        setTel_for_trans("");
        setTel_service("");
        setabnormal("");
        setselectdepartment_mana([]);
        setselectservice_by([]);
        setselectboi_staff([]);
        setselectboi_manager([]);
        setselectfac_manager([]);
        setselectacc_check([]);
        setselectacc_manager([]);
      }
      if (STS1 == "FLTR002") {
        setselectradio_dept("A");
        setcmmtradio_dept("");
      }
      if (STS1 == "FLTR003") {
        setselectradio_serviceby("A");
        setcmmtradio_serviceby("");
      }
      if (STS1 == "FLTR004") {
        setselectradio_boistaff("A");
        setcmmtradio_boistaff("");
      }
      if (STS1 == "FLTR005") {
        setselectradio_boimanager("A");
        setcmmtradio_boimanager("");
      }
      if (STS1 == "FLTR006") {
        setselectradio_facmanager("A");
        setcmmtradio_facmanager("");
      }
      if (STS1 == "FLTR007") {
        setselectradio_acc_check("A");
        setcmmtradio_acc_check("");
      }
      if (STS1 == "FLTR008") {
        setselectradio_owner("A");
        setcmmtradio_owner("");
      }
      if (STS1 == "FLTR009") {
        setselectradio_receiver("A");
        setcmmtradio_receiver("");
      }
      if (STS1 == "FLTR010") {
        setselectradio_record("A");
        setcmmtradio_record("");
      }
      if (STS1 == "FLTR011") {
        setselectradio_acc_manager("A");
        setcmmtradio_acc_manager("");
      }
      if (STS1 == "FLTR012") {
        setselectradio_service_close_by("A");
        setcmmtradio_service_close_by("");
      }
    } else {
      setselecttrans_factory([]);
      setselecttrans_cc([]);
      setnew_boi("");
      setnew_owner([]);
      setplan_date("");
      setTel_for_trans("");
      setTel_service("");
      setabnormal("");
      setselectdepartment_mana([]);
      setselectservice_by([]);
      setselectboi_staff([]);
      setselectboi_manager([]);
      setselectfac_manager([]);
      setselectacc_check([]);
      setselectacc_manager([]);
    }
  };

  const FactoryCC = async () => {
    //  setErrorFac(false);
    try {
      const response = await axios.get(`/getfactory`);
      const FactoryData = await response.data;
      settrans_factory(FactoryData);
      console.log("opopop", FactoryData);
      if (EditFam != null) {
        if (For_edit_trans != null)
          console.log(For_edit_trans[0][0], "For_edit_trans[0][0]");
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
  const TransCC = async () => {
    try {
      const response = await axios.get(`/cc_for_transfer`);
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
  const Department_Mana = async () => {
    let level = "";
    let cc = "";

    if (EditFam != null) {
      if (For_edit_trans != null) {
        level = For_Rq_Edit[14];
        cc = For_Rq_Edit[18];
      }
    } else {
      level = For_Req[3];
      cc = For_Req[16];
    }
    try {
      const response = await axios.post("/level", {
        level: level,
        cc: cc,
      });
      const data = response.data.flat();
      setdepartment_mana(data);

      if (EditFam != null) {
        if (For_Edit_Rou != null) {
          setselectdepartment_mana(For_Edit_Rou[0][0]);
        }
      } else {
        if (For_Req != null) {
          setselectdepartment_mana(For_Rou[1]);
        } else {
          setselectdepartment_mana("");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const Service_By = async () => {
    let level = "";
    let cc = "";
    if (EditFam != null) {
      if (For_edit_trans != null) {
        level = For_Rq_Edit[14];
        cc = For_Rq_Edit[0].split("-")[1];
      }
    } else {
      level = For_Req[3];
      cc = For_Req[0].split("-")[1];
    }

    try {
      const response = await axios.post("/service_by", {
        level: level,
        cc: cc,
      });
      const data = response.data.flat();
      setservice_by(data);
      if (EditFam != null) {
        if (For_Edit_Rou != null) {
          if (
            For_Edit_Rou[0][5] === null ||
            For_Edit_Rou[0][5] === "" ||
            For_Edit_Rou[0][5] === undefined ||
            For_Edit_Rou[0][5] === "null"
          ) {
            setselectservice_by("");
          } else {
            setselectservice_by(For_Edit_Rou[0][5]);
          }
        }
      } else {
        if (For_Req != null) {
          if (
            For_Rou[4] === null ||
            For_Rou[4] === "" ||
            For_Rou[4] === undefined ||
            For_Rou[4] === "null"
          ) {
            setselectservice_by("");
          } else {
            setselectservice_by(For_Rou[4]);
          }
        } else {
          setselectservice_by("");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const BOI_Staff = async () => {
    let level = "";
    if (EditFam != null) {
      if (For_edit_trans != null) {
        level = For_Rq_Edit[14];
      }
    } else {
      level = For_Req[3];
    }
    department_mana;
    try {
      const response = await axios.post("/boi_staff", {
        fac: level,
      });
      const data = response.data.flat();
      setboi_staff(data);
      if (EditFam != null) {
        if (For_Edit_Rou != null) {
          setselectboi_staff(For_Edit_Rou[0][8]);
        }
      } else {
        if (For_Req != null) {
          setselectboi_staff(For_Rou[5]);
        } else {
          setselectboi_staff("");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
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
      const response = await axios.post("/boi_manager", {
        fac: level,
      });
      const data = response.data.flat();
      setboi_manager(data);
      if (EditFam != null) {
        if (For_Edit_Rou != null) {
          setselectboi_manager(For_Edit_Rou[0][12]);
        }
      } else {
        if (For_Req != null) {
          setselectboi_manager(For_Rou[6]);
        } else {
          setselectboi_manager("");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
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
      const response = await axios.post("/fac_manager", {
        fac: level,
      });
      const data = response.data.flat();
      setfac_manager(data);
      if (EditFam != null) {
        if (For_Edit_Rou != null) {
          setselectfac_manager(For_Edit_Rou[0][16]);
        }
      } else {
        if (For_Req != null) {
          setselectfac_manager(For_Rou[7]);
        } else {
          setselectfac_manager("");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
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
      const response = await axios.post("/acc_check", {
        fac: level,
      });
      const data = response.data.flat();
      setacc_check(data);
      if (EditFam != null) {
        if (For_Edit_Rou != null) {
          if (
            For_Edit_Rou[0][20] === null ||
            For_Edit_Rou[0][20] === "" ||
            For_Edit_Rou[0][20] === undefined ||
            For_Edit_Rou[0][20] === "null"
          ) {
            settext_acc_check("");
            setselectacc_check("");
          } else {
            setselectacc_check(For_Edit_Rou[0][20]);
            settext_acc_check(For_Edit_Rou[0][20]);
          }
        }
      } else {
        if (For_Req != null) {
          if (
            For_Rou[8] === null ||
            For_Rou[8] === "" ||
            For_Rou[8] === undefined ||
            For_Rou[8] === "null"
          ) {
            settext_acc_check("");
            setselectacc_check("");
          } else {
            setselectacc_check(For_Rou[8]);
            settext_acc_check(For_Rou[8]);
          }
        } else {
          setselectacc_check("");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
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
      const response = await axios.post("/acc_manager", {
        fac: level,
      });
      const data = response.data.flat();
      setacc_manager(data);
      if (EditFam != null) {
        if (For_Edit_Rou != null) {
          setselectacc_manager(For_Edit_Rou[0][28]);
        }
      } else {
        if (For_Req != null) {
          setselectacc_manager(For_Rou[10]);
        } else {
          setselectacc_manager("");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const edit_New_BOI = async () => {
    try {
      const response = await axios.post("/new_boi", {
        fac: For_edit_trans[0][0],
        cc: For_edit_trans[0][1],
      });
      const data = response.data;
      const boi = data.flat();
      setdatanew_boi(boi);
      if (!boi || boi.length === 0) {
        setdatanew_boi(["NON BOI"]);
      } else {
        setdatanew_boi(boi);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return {
    STS1,setSTS1,For_sts_reject,setFor_sts_reject,ownersend,setownersend,trans_factory,
    settrans_factory,selecttrans_factory,setselecttrans_factory,trans_cc,settrans_cc,
    selecttrans_cc,setselecttrans_cc,datanew_boi,setdatanew_boi,new_boi,setnew_boi,data_fromboi,
    setdata_fromboi,new_owner,setnew_owner,selectnew_owner,setselectnew_owner,receiver, setreceiver,sts,
    setsts,abnormal, setabnormal, Tel_for_trans, setTel_for_trans, plan_date, setplan_date, department_mana,
    setdepartment_mana,selectdepartment_mana, setselectdepartment_mana,service_dept, setservice_dept, service_by,
    setservice_by, selectservice_by, setselectservice_by,boi_staff, setboi_staff, selectboi_staff, setselectboi_staff,
    boi_manager, setboi_manager, selectboi_manager, setselectboi_manager, fac_manager, setfac_manager, selectfac_manager, 
    setselectfac_manager,acc_check, setacc_check, selectacc_check, setselectacc_check, text_acc_check, settext_acc_check,owner_roting,
    setowner_roting, acc_manager, setacc_manager, selectacc_manager, setselectacc_manager, 
    Tel_service, setTel_service, CheckSubmit, setCheckSubmit,CheckSave, setCheckSave, FactoryCC, TransCC, Department_Mana, Service_By,
    BOI_Staff, BOI_Manager, Fac_manager, ACC_Check, ACC_Manager, EditFam, User, View, navigate
    ,For_Req, For_Fix, For_Trans, For_Rou, For_edit_trans, For_Rq_Edit, For_Edit_Rou, edit_New_BOI, ErrorTel, setErrorTel, ErrorFac, setErrorFac,
    ErrorCC, setErrorCC, ErrorNewOwn, setErrorNewOwn, ErrorManager, setErrorManager, ErrorService_by, setErrorService_by
    ,ErrorBoi_Staff, setErrorBoi_Staff, ErrorBoi_manager, setErrorBoi_manager, ErrorMana_Fac, setErrorMana_Fac, ErrorAcc_check, setErrorAcc_check,
    ErrorAcc_Mana, setErrorAcc_Mana, ErrorTel_service, setErrorTel_service, ErrorDate, setErrorDate, ErrorTel_Rq, setErrorTel_Rq,
    ErrorDept, setErrorDept,ErrNewboi, setErrNewboi, isPopupOpenLoadding, closePopupLoadding, selectradio_dept, setselectradio_dept, selectradio_serviceby, setselectradio_serviceby, selectradio_boistaff, setselectradio_boistaff, selectradio_boimanager, setselectradio_boimanager
    ,selectradio_facmanager,setselectradio_facmanager, selectradio_acc_check, setselectradio_acc_check, selectradio_owner, selectradio_receiver, 
    selectradio_record, selectradio_acc_manager, selectradio_service_close_by, cmmtradio_dept, cmmtradio_serviceby, cmmtradio_boistaff, cmmtradio_boimanager, cmmtradio_facmanager
    ,cmmtradio_acc_check, cmmtradio_owner, cmmtradio_receiver, cmmtradio_record, cmmtradio_acc_manager, cmmtradio_service_close_by,action_dept, action__serviceby, action__boistaff, action__boimanager, action__facmanager, action__acc_check, action__owner, action__receiver, action__record, action__acc_manager, action__service_close_by,
    read_trans_fac, read_trans_cc, read_tel, read_plan_date, read_newowner, read_dept, read_dept_radio, read_dept_cmmt, read_serviceby, read_serviceby_radio, read_serviceby_cmmt, read_boistff, read_boistff_radio, read_boistff_cmmt, read_boimana, read_boimana_radio, read_boimana_cmmt, read_fac_mana, read_fac_mana_radio,
    read_fac_mana_cmmt, read_accchk, read_accchk_radio, read_accchk_cmmt, read_owner_radio, read_owner_cmmt, read_receive_radio, read_receive_cmmt, read_record_radio, read_record_cmmt, read_acc_mana, read_acc_mana_radio, read_acc_mana_cmmt, read_close_radio, read_close_cmmt
    ,checkrdo, chkservice_by, chkboistaff, chkboimanager, chkfacmanager, chkacc_check, chkowner, chkreceiver, chkacc_record, chkacc_manager, chkservice_close
    ,CM_DepartmentManager, CM_service_by, CM_boistaff, CM_boimanager, CM_facmanager, CM_acc_check, CM_owner, CM_receiver, CM_acc_record, CM_acc_manager, CM_service_close
    ,handleFactoryCC, SAVE, SUBMIT, Reset, Back_page, handleNew_BOI, handleNewOwner, handleNewboi_proj, Showtype, setselectradio_owner, setselectradio_receiver, setselectradio_record, setselectradio_acc_manager, setselectradio_service_close_by, setcmmtradio_dept, setcmmtradio_serviceby, setcmmtradio_boistaff, setcmmtradio_boimanager, 
    setcmmtradio_facmanager, setcmmtradio_acc_check, setcmmtradio_owner, setcmmtradio_receiver, setcmmtradio_record, setcmmtradio_acc_manager, setcmmtradio_service_close_by, setaction__dept, setaction__serviceby, setaction__boistaff, setaction__boimanager, setaction__facmanager, setaction__acc_check, setaction__owner, setaction__receiver, 
    setaction__record, setaction__acc_manager, setaction__service_close_by,certificate_date ,setcertificate_date

  };
}

export { Get_Data };
