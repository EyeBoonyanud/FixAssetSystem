

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


function FAM_TRANSECTION_TLWLD() {

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
  const ForLenging = localStorage.getItem("For_Lending");
  const For_Leading_New = JSON.parse(ForLenging);
  const ForSale = localStorage.getItem("For_Sale");
  const For_Sale_New = JSON.parse(ForSale);

  // กรณี Edit LocalStorage
  const Edit_trans = localStorage.getItem("Edit_Trans");
  const For_edit_trans = JSON.parse(Edit_trans);
  const For_edit_request = localStorage.getItem("For_Req_Edit");
  const For_Rq_Edit = JSON.parse(For_edit_request);
  const Edit_rout = localStorage.getItem("Edit_routing");
  const For_Edit_Rou = JSON.parse(Edit_rout);
  const For_edit_date_cer = localStorage.getItem("Edit_cer_date");
  const Edit_Date_cer = JSON.parse(For_edit_date_cer);
  const For_Leading = localStorage.getItem("Edit_Lending");
  const Edit_For_Lending = JSON.parse(For_Leading);
  const For_Scrap = localStorage.getItem("Edit_Scrap");
  const Edit_For_Scrap = JSON.parse(For_Scrap);
  const For_Sale= localStorage.getItem("Edit_Sale");
  const Edit_For_Sale = JSON.parse(For_Sale);

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
  const [return_acc_manager, setreturn_acc_manager] = useState([]);
  const [return_selectacc_manager, setreturn_selectacc_manager] = useState("");
  const [req_return, setreq_return] = useState("");
  const [Tel_service, setTel_service] = useState("");
  const [CheckSubmit, setCheckSubmit] = useState("False");
  const [CheckSave, setCheckSave] = useState("False");
  const [certificate_date, setcertificate_date] = useState("");
  const [return_date, setreturn_date] = useState("");
  //Srcap
  const [pte_env, setpte_env] = useState([]);
  const [selectpte_env, setselectpte_env] = useState("");
  const [pln_staff, setpln_staff] = useState([]);
  const [selectpln_staff, setselectpln_staff] = useState("");
  const [shipping_staff, setshipping_staff] = useState([]);
  const [selectshipping_staff, setselectshipping_staff] = useState("");
  // Sale
  const [pte_input_weight_size, setpte_input_weight_size] = useState([]); //PTE (ENV) input weight/size
  const [selectpte_input_weight_size, setselectpte_input_weight_size] =useState("");
  const [pln_staff_boi, setpln_staff_boi] = useState([]); //PLN Staff contact BOI
  const [selectpln_staff_boi, setselectpln_staff_boi] = useState("");
  const [import_boi_prepare, setimport_boi_prepare] = useState([]); //Import & BOI prepare
  const [selectimport_boi_prepare, setselectimport_boi_prepare] = useState("");
  const [boi_input_data, setboi_input_data] = useState([]); //BOI Input data Import
  const [selectboi_input_data, setselectboi_input_data] = useState("");
  const [thai_catergories, setthai_catergories] = useState(""); //Import & BOI input thai catergories
  const [pln_staff_bidding, setpln_staff_bidding] = useState(""); // PLN Staff bidding
  const [pte_dept, setpte_dept] = useState(""); //PTE (ENV) contact Department of Industrial Works
  const [export_clearance, setexport_clearance] = useState(""); //BOI make export clearance
  const [pte_upload_file, setpte_upload_file] = useState(""); // PTE (ENV) upload file after BOI make export clearance:
  const [pln_req_inv, setpln_req_inv] = useState(""); //PLN Staff request Invoice
  const [ship_input_inv, setship_input_inv] = useState(""); //Shipping Staff imput invoice no.
  const [pln_upload_final, setpln_upload_final] = useState(""); //PLN Staff upload Final payment 50%:
  const [Input_thai_categories, setInput_thai_categories] = useState("");//Input thai categories
  const [Bidding_result, setBidding_result] = useState("");//Bidding result
  const [contact_date,setcontact_date] = useState("") // contact date BOI make export clearance
  const [contact_date_pte,setcontact_date_pte] = useState("") 
  const [Vendor_move_date,setVendor_move_date] = useState("") //Vendor_move_date
  const [export_clearance_date,setexport_clearance_date]  = useState("")//BOI make export clearance :
  const [scrap_date,setscrap_date] = useState("") 
  const [sale_date,setsale_date]  = useState("")
  
  ////////////////////
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
  const [ErrorACCReturn, setErrorACCReturn] = useState(false);
  const [ErrorDate_Certificate, setErrorDate_Certificate] = useState(false);
  const [ErrorDate_return, setErrorDate_return] = useState(false);
  //Scrap
  const [ErrorPTE_ENV, setErrorPTE_ENV] = useState(false);
  const [ErrorPLN_Staff, setErrorPLN_Staff] = useState(false);
  const [ErrorShipping, setErrorShipping] = useState(false);
  //Sale
  const [ErrorPTE_INPUT_WS,setErrorPTE_INPUT_WS] = useState(false);
  const [ErrorPLN_Staff_BOI, setErrorPLN_Staff_BOI] = useState(false);
  const [Errorimport_boi_prepare,setErrorimport_boi_prepare ] = useState(false);
  const [Errorboi_input_data, setErrorboi_input_data] = useState(false);
  const [ErrorVendor_move_date,setErrorVendor_move_date ] = useState(false);
  const [Errorcontact_date_pte,setErrorcontact_date_pte ] = useState(false);
  const [Errorcontact_date,setErrorcontact_date ] = useState(false);
  const [Errorship_input_inv,setErrorship_input_inv ] = useState(false);
  const [Errorexport_clearance_date,setErrorexport_clearance_date ] = useState(false);
  const [ErrScp_date,setErrScp_date ] = useState(false);
  const [ErrSale_date,setErrSale_date ] = useState(false);

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
  const [selectradio_return_acc, setselectradio_return_acc] = useState("");
  const [selectradio_return_own, setselectradio_return_own] = useState("");
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
  //Lending
  const [cmmtradio_return_acc, setcmmtradio_return_acc] = useState("");
  const [cmmtradio_return_own, setcmmtradio_return_own] = useState("");
  //scarp
  const [cmmtradio_pte_env, setcmmtradio_pte_env] = useState("");
  const [cmmtradio_pln_staff, setcmmtradio_pln_staff] = useState("");
  const [cmmtradio_shipping, setcmmtradio__shipping] = useState("");
  // Sale 
  const [cmmtradio_pte_weight_size, setcmmtradio_pte_weight_size] = useState("");
  const [cmmtradio_pte_staff_boi, setcmmtradio_pte_staff_boi] = useState("");
  const [cmmtradio_import_boi_prepare, setcmmtradio_import_boi_prepare] = useState("");
  const [cmmtradio_boi_input_data, setcmmtradio_boi_input_data] = useState("");
  const [cmmtradio_thai_catergories, setcmmtradio_thai_catergories] = useState("");
  const [cmmtradio_pln_staff_bidding, setcmmtradio_pln_staff_bidding] = useState("");
  const [cmmtradio_pte_dept, setcmmtradio_pte_dept] = useState("");
  const [cmmtradio_export_clearance, setcmmtradio_export_clearance] = useState("");
  const [cmmtradio_pte_upload_file, setcmmtradio_pte_upload_file] = useState("");
  const [cmmtradio_pln_req_inv, setcmmtradio_pln_req_inv] = useState("");
  const [cmmtradio_ship_input_inv, setcmmtradio_ship_input_inv] = useState("");
  const [cmmtradio_pln_upload_final, setcmmtradio_pln_upload_final  ] = useState("");




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
  //Lending
  const [action__return_acc, setaction__return_acc] = useState("");
  const [action__return_own, setaction__return_own] = useState("");
  //Scarp
  const [action__pte_env, setaction__pte_env] = useState("");
  const [action__pln_staff, setaction__pln_staff] = useState("");
  const [action__shipping, setaction__shipping] = useState("");
  //Sale
  const [action__pte_weight_size, setaction__pte_weight_size] = useState("");
  const [action__pte_staff_boi,setaction__pte_staff_boi ] = useState("");
  const [action__import_boi_prepare,setaction__import_boi_prepare ] = useState("");
  const [action__boi_input_data,setaction__boi_input_data ] = useState("");
  const [action__thai_catergories,setaction__thai_catergories ] = useState("");
  const [action__pln_staff_bidding,setaction__pln_staff_bidding ] = useState("");
  const [action__pte_dept,setaction__pte_dept ] = useState("");
  const [action__export_clearance,setaction__export_clearance ] = useState("");
  const [action__pte_upload_file,setaction__pte_upload_file ] = useState("");
  const [action__pln_req_inv,setaction__pln_req_inv ] = useState("");
  const [action__ship_input_inv,setaction__ship_input_inv ] = useState("");
  const [action__pln_upload_final,setaction__pln_upload_final ] = useState("");
  

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
  // Lending
  const [read_return_acc, setReadReturnACC] = useState(true);
  const [read_return_acc_radio, setReadReturnACCRadio] = useState(true);
  const [read_return_acc_cmmt, setReadReturnACCCmmt] = useState(true);
  const [read_return_own, setReadReturnOwn] = useState(true);
  const [read_return_own_radio, setReadReturnOwnRadio] = useState(true);
  const [read_return_own_cmmt, setReadReturnOwnCmmt] = useState(true);
  // Scrap
  const [read_pte_env, setReadPte_Env] = useState(true);
  const [read_pte_env_radio, setReadPte_EnvRadio] = useState(true);
  const [read_pte_env_cmmt, setReadPte_EnvCmmt] = useState(true);
 
  const [read_pln_staff, setReadPLN_Staff] = useState(true);
  const [read_pln_staff_radio, setReadPLN_StaffRadio] = useState(true);
  const [read_pln_staff_cmmt, setReadPLN_StaffCmmt] = useState(true);
 
  const [read_shipping, setReadShipping] = useState(true);
  const [read_shipping_radio, setReadShippingRadio] = useState(true);
  const [read_shipping_cmmt, setReadShippingCmmt] = useState(true);
  //Sale
  const [read_pte_input_weight_size, setReadpte_input_weight_size] = useState(true);
  const [read_pte_input_weight_size_cmmt, setReadpte_input_weight_sizeCmmt] = useState(true);
  
  const [read_pte_staff_boi, setReadpte_staff_boi] = useState(true);
  const [read_pte_staff_boi_cmmt, setReadpte_staff_boiCmmt] = useState(true);
 
  const [read_import_boi_prepare, setReadimport_boi_prepare] = useState(true);
  const [read_import_boi_prepare_cmmt, setReadimport_boi_prepareCmmt] = useState(true);
  
  const [read_boi_input_data, setReadboi_input_data] = useState(true);
  const [read_boi_input_data_cmmt, setReadboi_input_dataCmmt] = useState(true);
 
  const [read_thai_catergories, setReadthai_catergories] = useState(true);
  const [read_thai_catergories_cmmt, setReadthai_catergoriesCmmt] = useState(true);
 
  const [read_pln_staff_bidding, setReadpln_staff_bidding] = useState(true);
  const [read_pln_staff_bidding_cmmt, setReadpln_staff_biddingCmmt] = useState(true);
 
  const [read_pte_dept, setReadpte_pte_dept] = useState(true);
  const [read_pte_dept_cmmt, setReadpte_deptCmmt] = useState(true);
 
  const [read_export_clearance, setReadexport_clearance] = useState(true);
  const [read_export_clearance_cmmt, setReadexport_clearanceCmmt] = useState(true);
 
  const [read_pte_upload_file, setReadpte_upload_file] = useState(true);
  const [read_pte_upload_file_cmmt, setReadpte_upload_fileCmmt] = useState(true);
 
  const [read_pln_req_inv, setReadpln_req_inv] = useState(true);
  const [read_pln_req_inv_cmmt, setReadpln_req_invCmmt] = useState(true);
 
  const [read_ship_input_inv, setReadship_input_inv] = useState(true);
  const [read_ship_input_inv_cmmt, setReadship_input_invCmmt] = useState(true);
 
  const [read_pln_upload_final, setReadpln_upload_final] = useState(true);
  const [read_pln_upload_final_cmmt, setReadpln_upload_finalCmmt] = useState(true);

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
  //Leanding Chk
  const [chkreturn_acc, setchkreturn_acc] = useState("hidden");
  const [chkreturn_owner, setchkreturn_owner] = useState("hidden");
  // Scrap Chk
  const [chkpte_env, setchkpte_env] = useState("hidden");
  const [chkpln_staff, setchkpln_staff] = useState("hidden");
  const [chkshipping, setchkshipping] = useState("hidden");
  // Sale Chk
  const [chk_pte_weight_size, setchk_pte_weight_size] = useState("hidden");
  const [chk_pte_staff_boi, setchk_pte_staff_boi] = useState("hidden");
  const [chk_import_boi_prepare, setchk_import_boi_prepare] = useState("hidden");
  const [chk_boi_input_data, setchk_boi_input_data] = useState("hidden");
  const [chk_thai_catergories, setchk_thai_catergories] = useState("hidden");
  const [chk_pln_staff_bidding, setchk_pln_staff_bidding] = useState("hidden");
  const [chk_pte_dept, setchk_pte_dept] = useState("hidden");
  const [chk_export_clearance, setchk_export_clearance] = useState("hidden");
  const [chk_pte_upload_file, setchk_pte_upload_file] = useState("hidden");
  const [chk_pln_req_inv, setchk_pln_req_inv] = useState("hidden");
  const [chk_ship_input_inv, setchk_ship_input_inv] = useState("hidden");
  const [chk_pln_upload_final, setchk_pln_upload_final] = useState("hidden");
  

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
  //Lending Comment
  const [CM_return_acc, setCM_return_acc] = useState("none");
  const [CM_return_owner, setCM_return_owner] = useState("none");
  //Scarp
  const [CM_pte_env, setCM_pte_env] = useState("none");
  const [CM_pln_staff, setCM_pln_staff] = useState("none");
  const [CM_shipping, setCM_shipping] = useState("none");
  //Sale
  const [CM_pte_weight_size, setCM_pte_weight_size] = useState("none");
  const [CM_pte_staff_boi, setCM_pte_staff_boi] = useState("none");
  const [CM_import_boi_prepare, setCM_import_boi_prepare] = useState("none");
  const [CM_boi_input_data, setCM_boi_input_data] = useState("none");
  const [CM_thai_catergories, setCM_thai_catergories] = useState("none");
  const [CM_pln_staff_bidding, setCM_pln_staff_bidding] = useState("none");
  const [CM_pte_dept, setCM_pte_dept] = useState("none");
  const [CM_export_clearance, setCM_export_clearance] = useState("none");
  const [CM_pte_upload_file, setCM_pte_upload_file] = useState("none");
  const [CM_pln_req_inv, setCM_pln_req_inv] = useState("none");
  const [CM_ship_input_inv, setCM_ship_input_inv] = useState("none");
  const [CM_pln_upload_final, setCM_pln_upload_final] = useState("none");

  // Donation check
  const [chk_cer_date, setchk_cer_date] = useState("");

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
    PTE_ENV();
    PLN_staff();
    Shipping();
    Import_boi();
    
    if (Showtype == "GP01001") {
      edit_New_BOI();
    }

    if (EditFam != null) {
      if (For_Rq_Edit != null) {
        openPopupLoadding();
        STS = For_Rq_Edit[10];
        Fam_list = For_Rq_Edit[0];
        setownersend(For_Rq_Edit[20]);
        setowner_roting(For_Rq_Edit[2]);
        setreq_return(For_Rq_Edit[2]);
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
        } else if (
          For_Rq_Edit[7] == "GP01004" ||
          For_Rq_Edit[7] == "GP01005" ||
          For_Rq_Edit[7] == "GP01007" ||
          For_Rq_Edit[7] == "GP01006" ||
          For_Rq_Edit[7] == "GP01003" ||
          For_Rq_Edit[7] == "GP01002"
        ) {
         
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
        
            if (
              STS != "FLWO001" ||
              STS != "FLLS001" ||
              STS != "FLDN001" ||
              STS != "FLLD001" ||
              STS != "FLSL001" ||
              STS != "FLSC001"
            ) {
              //Depat Mana
              setcertificate_date(Edit_Date_cer[0]);
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
              if (Edit_Date_cer != null) {
                if (Edit_Date_cer == "null") {
                  setcertificate_date("");
                } else {
                  setcertificate_date(Edit_Date_cer[0]);
                }
              }

              if (Edit_For_Lending.length > 0) {
                setselectradio_return_acc(Edit_For_Lending[0][4]);
                setaction__return_acc(Edit_For_Lending[0][2]);
                setreturn_date(Edit_For_Lending[0][3]);
                setreturn_acc_manager(Edit_For_Lending[0][1]);
                setaction__return_own(Edit_For_Lending[0][7]);
                if (
                  Edit_For_Lending[0][5] == "null" ||
                  Edit_For_Lending[0][5] == null
                ) {
                  setcmmtradio_return_acc(null);
                } else {
                  setcmmtradio_return_acc(Edit_For_Lending[0][5]);
                }
                if (
                  Edit_For_Lending[0][8] == "null" ||
                  Edit_For_Lending[0][8] == null
                ) {
                  setcmmtradio_return_own(null);
                } else {
                  setcmmtradio_return_own(Edit_For_Lending[0][8]);
                }
              }
              if(Edit_For_Scrap.length >0){
                setaction__pte_env(Edit_For_Scrap[0][2])
                setaction__pln_staff(Edit_For_Scrap[0][5])
                setaction__shipping(Edit_For_Scrap[0][8])
                setscrap_date(Edit_For_Scrap[0][10])
                if (
                  Edit_For_Scrap[0][3] == "null" ||
                  Edit_For_Scrap[0][3] == null
                ) {
                  setcmmtradio_pte_env(null);
                } else {
                  setcmmtradio_pte_env(Edit_For_Scrap[0][3]);
                }
                if (
                  Edit_For_Scrap[0][6] == "null" ||
                  Edit_For_Scrap[0][6] == null
                ) {
                  setcmmtradio_pln_staff(null);
                } else {
                  setcmmtradio_pln_staff(Edit_For_Scrap[0][6]);
                }
                if (
                  Edit_For_Scrap[0][9] == "null" ||
                  Edit_For_Scrap[0][9] == null
                ) {
                  setcmmtradio__shipping(null);
                } else {
                  setcmmtradio__shipping(Edit_For_Scrap[0][9]);
                }
              }
              if(Edit_For_Sale.length >0){
                setaction__pte_weight_size(Edit_For_Sale[0][2])
                setaction__pte_staff_boi(Edit_For_Sale[0][5])
                setaction__import_boi_prepare(Edit_For_Sale[0][8])
                setaction__boi_input_data(Edit_For_Sale[0][11])
                setaction__thai_catergories(Edit_For_Sale[0][15]) 
                setaction__pln_staff_bidding(Edit_For_Sale[0][18])
                setaction__pte_dept(Edit_For_Sale[0][23])
                setaction__export_clearance(Edit_For_Sale[0][27])
                setaction__pte_upload_file(Edit_For_Sale[0][31])
                setaction__pln_req_inv(Edit_For_Sale[0][34])
                setaction__ship_input_inv(Edit_For_Sale[0][37])
                setaction__pln_upload_final(Edit_For_Sale[0][40])
                setcontact_date(Edit_For_Sale[0][22])
                setexport_clearance_date(Edit_For_Sale[0][26])
                setcontact_date_pte(Edit_For_Sale[0][30])
                setVendor_move_date(Edit_For_Sale[0][41])
                setsale_date(Edit_For_Sale[0][47])

                if (
                  Edit_For_Sale[0][3] == "null" ||
                  Edit_For_Sale[0][3] == null
                ) {
                  setcmmtradio_pte_weight_size(null);
                } else {
                  setcmmtradio_pte_weight_size(Edit_For_Sale[0][3]);
                }
                if (
                  Edit_For_Sale[0][6] == "null" ||
                  Edit_For_Sale[0][6] == null
                ) {
                  setcmmtradio_pte_staff_boi(null);
                } else {
                  setcmmtradio_pte_staff_boi(Edit_For_Sale[0][6]);
                }
                if (
                  Edit_For_Sale[0][9] == "null" ||
                  Edit_For_Sale[0][9] == null
                ) {
                  setcmmtradio_import_boi_prepare(null);
                } else {
                  setcmmtradio_import_boi_prepare(Edit_For_Sale[0][9]);
                }
                if (
                  Edit_For_Sale[0][12] == "null" ||
                  Edit_For_Sale[0][12] == null
                ) {
                  setcmmtradio_boi_input_data(null);
                } else {
                  setcmmtradio_boi_input_data(Edit_For_Sale[0][12]);
                }
                if (
                  Edit_For_Sale[0][12] == "null" ||
                  Edit_For_Sale[0][12] == null
                ) {
                  setcmmtradio_boi_input_data(null);
                } else {
                  setcmmtradio_boi_input_data(Edit_For_Sale[0][12]);
                }
                if (
                  Edit_For_Sale[0][14] == "null" ||
                  Edit_For_Sale[0][14] == null
                ) {
                  setInput_thai_categories(null);
                } else {
                  setInput_thai_categories(Edit_For_Sale[0][14]);
                }
                if (
                  Edit_For_Sale[0][16] == "null" ||
                  Edit_For_Sale[0][16] == null
                ) {
                  setcmmtradio_thai_catergories(null);
                } else {
                  setcmmtradio_thai_catergories(Edit_For_Sale[0][16]);
                }
                if (
                  Edit_For_Sale[0][19] == "null" ||
                  Edit_For_Sale[0][19] == null
                ) {
                  setBidding_result(null);
                } else {
                  setBidding_result(Edit_For_Sale[0][19]);
                }
                if (
                  Edit_For_Sale[0][20] == "null" ||
                  Edit_For_Sale[0][20] == null
                ) {
                  setcmmtradio_pln_staff_bidding(null);
                } else {
                  setcmmtradio_pln_staff_bidding(Edit_For_Sale[0][20]);
                }
                if (
                  Edit_For_Sale[0][24] == "null" ||
                  Edit_For_Sale[0][24] == null
                ) {
                  setcmmtradio_pte_dept(null);
                } else {
                  setcmmtradio_pte_dept(Edit_For_Sale[0][24]);
                }
                if (
                  Edit_For_Sale[0][28] == "null" ||
                  Edit_For_Sale[0][28] == null
                ) {
                  setcmmtradio_export_clearance(null);
                } else {
                  setcmmtradio_export_clearance(Edit_For_Sale[0][28]);
                }
                if (
                  Edit_For_Sale[0][32] == "null" ||
                  Edit_For_Sale[0][32] == null
                ) {
                  setcmmtradio_pte_upload_file(null);
                } else {
                  setcmmtradio_pte_upload_file(Edit_For_Sale[0][32]);
                }
                if (
                  Edit_For_Sale[0][35] == "null" ||
                  Edit_For_Sale[0][35] == null
                ) {
                  setcmmtradio_pln_req_inv(null);
                } else {
                  setcmmtradio_pln_req_inv(Edit_For_Sale[0][35]);
                }
                if (
                  Edit_For_Sale[0][38] == "null" ||
                  Edit_For_Sale[0][38] == null
                ) {
                  setcmmtradio_ship_input_inv(null);
                } else {
                  setcmmtradio_ship_input_inv(Edit_For_Sale[0][38]);
                }
                if (
                  Edit_For_Sale[0][42] == "null" ||
                  Edit_For_Sale[0][42] == null
                ) {
                  setcmmtradio_pln_upload_final(null);
                } else {
                  setcmmtradio_pln_upload_final(Edit_For_Sale[0][42]);
                }
              }
              
              if (
                STS == "FLWO001" ||
                For_Rq_Edit[16] === "R" ||
                STS == "FLLS001" ||
                STS == "FLDN001" ||
                STS == "FLLD001" ||
                STS == "FLSL001" ||
                STS == "FLSC001"
              ) {
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
                setReadReturnACC(false);
                setReadReturnOwn(false);
                setReadReturnACCCmmt(false);
                setReadReturnOwnCmmt(false);
                setReadPte_Env(false);
                setReadPte_EnvRadio(false);
                setReadPte_EnvCmmt(false);
                setReadPLN_Staff(false);
                setReadPLN_StaffCmmt(false);
                setReadPLN_StaffRadio(false);
                setReadShipping(false);
                setReadShippingCmmt(false);
                setReadShippingRadio(false);

                setReadpte_input_weight_size(false);
                setReadpte_input_weight_sizeCmmt(false);
                setReadpte_staff_boi(false);
                setReadpte_staff_boiCmmt(false);
                setReadimport_boi_prepare(false);
                setReadimport_boi_prepareCmmt(false);
                setReadboi_input_data(false);
                setReadboi_input_dataCmmt(false);
                setReadthai_catergories(false);
                setReadthai_catergoriesCmmt(false);
                setReadpln_staff_bidding(false);
                setReadpln_staff_biddingCmmt(false);
                setReadpte_pte_dept(false);
                setReadpte_deptCmmt(false);
                setReadexport_clearance(false);
                setReadexport_clearanceCmmt(false);
                setReadpte_upload_file(false);
                setReadpte_upload_fileCmmt(false);
                setReadpln_req_inv(false);
                setReadpln_req_invCmmt(false);
                setReadship_input_inv(false);
                setReadship_input_invCmmt(false);
                setReadpln_upload_final(false);
                setReadpln_upload_finalCmmt(false);


                if (
                  STS == "FLWO092" ||
                  STS == "FLLS092" ||
                  STS == "FLDN092" ||
                  STS == "FLLD092" ||
                  STS == "FLSC092" ||
                  STS == "FLSL092"
                ) {
                  setcheckrdo("visible");
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setCM_DepartmentManager("table-row");
                }
                if (
                  STS == "FLWO093" ||
                  STS == "FLLS093" ||
                  STS == "FLDN093" ||
                  STS == "FLLD093" ||
                  STS == "FLSC093" ||
                   STS == "FLSL093"
                ) {
                  setchkservice_by("visible");
                  setcheckrdo("visible");
                  setCM_service_by("table-row");
                  setCM_DepartmentManager("table-row");
                  setReadDeptRadio(true);
                  setReadDeptCmmt(true);
                  setReadServiceByRadio(true);
                  setReadServiceByCmmt(true);
                }
                if (
                  STS == "FLWO094" ||
                  STS == "FLLS094" ||
                  STS == "FLDN094" ||
                  STS == "FLLD094" ||
                  STS == "FLSC094" ||
                   STS == "FLSL094"
                ) {
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
                if (
                  STS == "FLWO095" ||
                  STS == "FLLS095" ||
                  STS == "FLDN095" ||
                  STS == "FLLD095" ||
                  STS == "FLSC095" || 
                   STS == "FLSL095"
                ) {
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
                if (
                  STS == "FLWO096" ||
                  STS == "FLLS096" ||
                  STS == "FLDN096" ||
                  STS == "FLLD096" ||
                  STS == "FLSC096" ||
                   STS == "FLSL096"
                ) {
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
                if (
                  STS == "FLWO907" ||
                  STS == "FLLS907" ||
                  STS == "FLDN907" ||
                  STS == "FLLD907" ||
                  STS == "FLSC907" ||
                   STS == "FLSL097"
                ) {
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
                if (
                  STS == "FLWO908" ||
                  STS == "FLDN908" ||
                  STS == "FLLS908" ||
                  STS == "FLLD908" ||
                  STS == "FLSC908" ||
                   STS == "FLSL098"
                ) {
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
                // Leanding
                if (STS == "FLLD909") {
                  setchkreturn_acc("visible");
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
                  setReadReturnACCRadio(true);
                  setReadReturnACCCmmt(true);
                  setCM_service_by("table-row");
                  setCM_DepartmentManager("table-row");
                  setCM_boistaff("table-row");
                  setCM_boimanager("table-row");
                  setCM_facmanager("table-row");
                  setCM_acc_check("table-row");
                  setCM_owner("table-row");
                  setCM_return_acc("table-row");
                }
                if (STS == "FLLD109") {
                  setchkreturn_owner("visible");
                  setchkreturn_acc("visible");
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
                  setReadReturnACCRadio(true);
                  setReadReturnACCCmmt(true);
                  setReadReturnOwnRadio(true);
                  setReadReturnOwnCmmt(true);
                  setCM_service_by("table-row");
                  setCM_DepartmentManager("table-row");
                  setCM_boistaff("table-row");
                  setCM_boimanager("table-row");
                  setCM_facmanager("table-row");
                  setCM_acc_check("table-row");
                  setCM_owner("table-row");
                  setCM_return_acc("table-row");
                  setCM_return_owner("table-row");
                }
                if (
                  STS == "FLWO910" ||
                  STS == "FLLS910" ||
                  STS == "FLDN910" ||
                  STS == "FLLD910" ||
                  STS == "FLSC910" ||
                   STS == "FLSL921"
                  
                ) {
                 

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
                  if (STS == "FLSL921"){
                    setchk_pln_upload_final("visible");
                    setchk_boi_input_data("visible");
                    setchk_pte_upload_file("visible");
                    setchk_ship_input_inv("visible");
                    setchk_pln_req_inv("visible");
                    setchk_export_clearance("visible");
                    setchk_pte_dept("visible");
                    setchk_pln_staff_bidding("visible");
                    setchk_thai_catergories("visible");
                    setchk_import_boi_prepare("visible");
                    setchk_pte_staff_boi("visible");
                    setchk_pte_weight_size("visible");
                    setCM_pte_weight_size("table-row");
                    setCM_pte_staff_boi("table-row");
                    setCM_import_boi_prepare("table-row");
                    setCM_boi_input_data("table-row");
                    setCM_thai_catergories("table-row");
                    setCM_pln_staff_bidding("table-row");
                    setCM_pte_dept("table-row");
                    setCM_export_clearance("table-row");
                    setCM_pte_upload_file("table-row");
                    setCM_pln_req_inv("table-row");
                    setCM_ship_input_inv("table-row");
                    setCM_pte_upload_file("table-row");
                    setCM_pln_upload_final("table-row");
                    setReadpte_input_weight_sizeCmmt(true);
                    setReadpte_staff_boiCmmt(true);
                    setReadimport_boi_prepareCmmt(true);
                    setReadboi_input_dataCmmt(true);
                    setReadthai_catergoriesCmmt(true);
                    setReadpln_staff_biddingCmmt(true);
                    setReadpte_deptCmmt(true);
                    setReadexport_clearanceCmmt(true);
                    setReadpte_upload_fileCmmt(true);
                    setReadpln_req_invCmmt(true);
                    setReadship_input_invCmmt(true);
                    setReadpln_upload_finalCmmt(true);
                  }
                  if(STS == "FLSC910"){ 
                    setchkpte_env("visable")
                    setchkpln_staff("visable")
                    setchkshipping("visable")
                    setReadPte_EnvRadio(true);
                    setReadPte_EnvCmmt(true);
                    setReadPLN_StaffCmmt(true);
                    setReadPLN_StaffRadio(true);
                    setReadShippingCmmt(true)
                    setReadShippingCmmt(true)
                    setCM_pte_env("table-row")
                    setCM_pln_staff("table-row")
                    setCM_shipping("table-row");}
                  if (STS == "FLLD910") {
                    setchkreturn_owner("visible");
                    setchkreturn_acc("visible");
                    setReadReturnACCRadio(true);
                    setReadReturnACCCmmt(true);
                    setReadReturnOwnRadio(true);
                    setReadReturnOwnCmmt(true);
                    setCM_return_acc("table-row");
                    setCM_return_owner("table-row");
                  }
                }
                if (
                  STS == "FLWO911" ||
                  STS == "FLLS911" ||
                  STS == "FLDN911" ||
                  STS == "FLLD911" ||
                  STS == "FLSC911"
                ) {
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
                  if(STS == "FLSC911"){ 
                    setchkpte_env("visable")
                    setchkpln_staff("visable")
                    setchkshipping("visable")
                    setReadPte_EnvRadio(true);
                    setReadPte_EnvCmmt(true);
                    setReadPLN_StaffCmmt(true);
                    setReadPLN_StaffRadio(true);
                    setReadShippingCmmt(true)
                    setReadShippingCmmt(true)
                    setCM_pte_env("table-row")
                    setCM_pln_staff("table-row")
                    setCM_shipping("table-row");}
                  if (STS == "FLLD911") {
                    setchkreturn_owner("visible");
                    setchkreturn_acc("visible");
                    setReadReturnACCRadio(true);
                    setReadReturnACCCmmt(true);
                    setReadReturnOwnRadio(true);
                    setReadReturnOwnCmmt(true);
                    setCM_return_acc("table-row");
                    setCM_return_owner("table-row");
                  }
                }
                if (
                  STS == "FLWO912" ||
                  STS == "FLLS912" ||
                  STS == "FLDN912" ||
                  STS == "FLLD912" ||
                  STS == "FLSC912"
                ) {
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
                  if (STS == "FLLD912") {
                    setchkreturn_owner("visible");
                    setchkreturn_acc("visible");
                    setReadReturnACCRadio(true);
                    setReadReturnACCCmmt(true);
                    setReadReturnOwnRadio(true);
                    setReadReturnOwnCmmt(true);
                    setCM_return_acc("table-row");
                    setCM_return_owner("table-row");
                  }
                  if(STS == "FLSC912"){ 
                    setchkpte_env("visable")
                    setchkpln_staff("visable")
                    setchkshipping("visable")
                    setReadPte_EnvRadio(true);
                    setReadPte_EnvCmmt(true);
                    setReadPLN_StaffCmmt(true);
                    setReadPLN_StaffRadio(true);
                    setReadShippingCmmt(true)
                    setReadShippingCmmt(true)
                    setCM_pte_env("table-row")
                    setCM_pln_staff("table-row")
                    setCM_shipping("table-row");
                  }
                }

                //Saveelse if
              } else if (
                STS == "FLWO002" ||
                STS == "FLLS002" ||
                STS == "FLDN002" ||
                STS == "FLLD002" ||
                STS == "FLSL002" ||
                STS == "FLSC002"
              ) {
                setaction__dept(formattedDate);
                setcheckrdo("visible");
                setReadDeptRadio(false);
                setReadDeptCmmt(false);
                setCM_DepartmentManager("table-row");
              } else if (
                STS == "FLWO003" ||
                STS == "FLLS003" ||
                STS == "FLDN003" ||
                STS == "FLLD003" ||
                STS == "FLSL003" ||
                STS == "FLSC003"
              ) {
                setaction__serviceby(formattedDate);
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadServiceByRadio(false);
                setReadServiceByCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
              } else if (
                STS == "FLWO004" ||
                STS == "FLLS004" ||
                STS == "FLDN004" ||
                STS == "FLLD004" ||
                STS == "FLSL004" ||
                STS == "FLSC004"
              ) {
                setaction__boistaff(formattedDate);
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadBoistffRadio(false);
                setReadBoistffCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
              } else if (
                STS == "FLWO005" ||
                STS == "FLLS005" ||
                STS == "FLDN005" ||
                STS == "FLLD005" ||
                STS == "FLSL005" ||
                STS == "FLSC005"
              ) {
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
              } else if (
                STS == "FLWO006" ||
                STS == "FLLS006" ||
                STS == "FLDN006" ||
                STS == "FLLD006" ||
                STS == "FLSL006" ||
                STS == "FLSC006"
              ) {
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
              } else if (
                STS == "FLWO007" ||
                STS == "FLLS007" ||
                STS == "FLDN007" ||
                STS == "FLLD007" ||
                STS == "FLSL007" ||
                STS == "FLSC007"
              ) {
                if (STS == "FLDN007") {
                  setcertificate_date(Edit_Date_cer[0][0]);
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
              } else if (
                STS == "FLWO008" ||
                STS == "FLLS008" ||
                STS == "FLDN008" ||
                STS == "FLLD008" ||
                STS == "FLSL008" ||
                STS == "FLSC008"
              ) {
                setaction__owner(formattedDate);
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                if (STS == "FLDN008" || STS == "FLLD008") {
                  setReadOwnerRadio(true);
                } else {
                  setReadOwnerRadio(false);
                }

                setReadOwnerCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
              } else if (STS == "FLLD009") {
                setaction__return_acc(formattedDate);
                setchkreturn_acc("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadReturnACCRadio(false);
                setReadReturnACCCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
                setCM_return_acc("table-row");
              } else if (STS == "FLLD100") {
                setaction__return_own(formattedDate);
                setchkreturn_owner("visible");
                setchkreturn_acc("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadReturnOwnRadio(false);
                setReadReturnOwnCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
                setCM_return_acc("table-row");
                setCM_return_owner("table-row");
              } else if (STS == "FLSC009") {
                setaction__pte_env(formattedDate);
                setchkpte_env("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadPte_EnvRadio(false);
                setReadPte_EnvCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
                setCM_pte_env("table-row");
              } else if (STS == "FLSC100") {
                setaction__pln_staff(formattedDate);
                setchkpln_staff("visible");
                setchkpte_env("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadPLN_StaffRadio(false);
                setReadPLN_StaffCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
                setCM_pte_env("table-row");
                setCM_pln_staff("table-row");
              } else if (STS == "FLSC101") {
                setaction__shipping(formattedDate);
                setchkshipping("visible");
                setchkpln_staff("visible");
                setchkpte_env("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadShippingRadio(false);
                setReadShippingCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
                setCM_pte_env("table-row");
                setCM_pln_staff("table-row");
                setCM_shipping("table-row");
                
              }else if (STS == "FLSL009") {
                setaction__pte_weight_size(formattedDate);
                setchk_pte_weight_size("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadpte_input_weight_sizeCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
                setCM_pte_weight_size("table-row");
                
              }else if (STS == "FLSL010") {
                setaction__pte_staff_boi(formattedDate);
                setchk_pte_staff_boi("visible");
                setchk_pte_weight_size("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadpte_staff_boiCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
                setCM_pte_weight_size("table-row");
                setCM_pte_staff_boi("table-row");
                
              }else if (STS == "FLSL011") {
                setaction__import_boi_prepare(formattedDate);
                setchk_import_boi_prepare("visible");
                setchk_pte_staff_boi("visible");
                setchk_pte_weight_size("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadimport_boi_prepareCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
                setCM_pte_weight_size("table-row");
                setCM_pte_staff_boi("table-row");
                setCM_import_boi_prepare("table-row");
                
              }else if (STS == "FLSL012") {
                setaction__boi_input_data(formattedDate);
                setchk_import_boi_prepare("visible");
                setchk_pte_staff_boi("visible");
                setchk_pte_weight_size("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadboi_input_dataCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
                setCM_pte_weight_size("table-row");
                setCM_pte_staff_boi("table-row");
                setCM_import_boi_prepare("table-row");
                setCM_boi_input_data("table-row");
                
              }else if (STS == "FLSL013") {
                setaction__thai_catergories(formattedDate);
                setchk_thai_catergories("visible");
                setchk_import_boi_prepare("visible");
                setchk_pte_staff_boi("visible");
                setchk_pte_weight_size("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadthai_catergoriesCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
                setCM_pte_weight_size("table-row");
                setCM_pte_staff_boi("table-row");
                setCM_import_boi_prepare("table-row");
                setCM_boi_input_data("table-row");
                setCM_thai_catergories("table-row");
                
              }else if (STS == "FLSL014") {
                setaction__pln_staff_bidding(formattedDate);
                setchk_pln_staff_bidding("visible");
                setchk_thai_catergories("visible");
                setchk_import_boi_prepare("visible");
                setchk_pte_staff_boi("visible");
                setchk_pte_weight_size("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadpln_staff_biddingCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
                setCM_pte_weight_size("table-row");
                setCM_pte_staff_boi("table-row");
                setCM_import_boi_prepare("table-row");
                setCM_boi_input_data("table-row");
                setCM_thai_catergories("table-row");
                setCM_pln_staff_bidding("table-row");
                
              }else if (STS == "FLSL015") {
                setaction__pte_dept(formattedDate);
                setchk_pte_dept("visible");
                setchk_pln_staff_bidding("visible");
                setchk_thai_catergories("visible");
                setchk_import_boi_prepare("visible");
                setchk_pte_staff_boi("visible");
                setchk_pte_weight_size("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadpte_deptCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
                setCM_pte_weight_size("table-row");
                setCM_pte_staff_boi("table-row");
                setCM_import_boi_prepare("table-row");
                setCM_boi_input_data("table-row");
                setCM_thai_catergories("table-row");
                setCM_pln_staff_bidding("table-row");
                setCM_pte_dept("table-row");
                
              }else if (STS == "FLSL016") {
                setaction__export_clearance(formattedDate);
                setchk_export_clearance("visible");
                setchk_pte_dept("visible");
                setchk_pln_staff_bidding("visible");
                setchk_thai_catergories("visible");
                setchk_import_boi_prepare("visible");
                setchk_pte_staff_boi("visible");
                setchk_pte_weight_size("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadexport_clearanceCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
                setCM_pte_weight_size("table-row");
                setCM_pte_staff_boi("table-row");
                setCM_import_boi_prepare("table-row");
                setCM_boi_input_data("table-row");
                setCM_thai_catergories("table-row");
                setCM_pln_staff_bidding("table-row");
                setCM_pte_dept("table-row");
                setCM_export_clearance("table-row");
              }else if (STS == "FLSL017") {
                setaction__pte_upload_file(formattedDate);
                setchk_pte_upload_file("visible");
                setchk_export_clearance("visible");
                setchk_boi_input_data("visible");
                setchk_pte_dept("visible");
                setchk_pln_staff_bidding("visible");
                setchk_thai_catergories("visible");
                setchk_import_boi_prepare("visible");
                setchk_pte_staff_boi("visible");
                setchk_pte_weight_size("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadpte_upload_fileCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
                setCM_pte_weight_size("table-row");
                setCM_pte_staff_boi("table-row");
                setCM_import_boi_prepare("table-row");
                setCM_boi_input_data("table-row");
                setCM_thai_catergories("table-row");
                setCM_pln_staff_bidding("table-row");
                setCM_pte_dept("table-row");
                setCM_export_clearance("table-row");
                setCM_pte_upload_file("table-row");
              }else if (STS == "FLSL018") {
                setaction__pln_req_inv(formattedDate);
                setchk_pte_upload_file("visible");
                setchk_pln_req_inv("visible");
                setchk_boi_input_data("visible");
                setchk_export_clearance("visible");
                setchk_pte_dept("visible");
                setchk_pln_staff_bidding("visible");
                setchk_thai_catergories("visible");
                setchk_import_boi_prepare("visible");
                setchk_pte_staff_boi("visible");
                setchk_pte_weight_size("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadpln_req_invCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
                setCM_pte_weight_size("table-row");
                setCM_pte_staff_boi("table-row");
                setCM_import_boi_prepare("table-row");
                setCM_boi_input_data("table-row");
                setCM_thai_catergories("table-row");
                setCM_pln_staff_bidding("table-row");
                setCM_pte_dept("table-row");
                setCM_export_clearance("table-row");
                setCM_pte_upload_file("table-row");
                setCM_pln_req_inv("table-row");
              }else if (STS == "FLSL019") {
                setaction__ship_input_inv(formattedDate);
                setchk_boi_input_data("visible");
                setchk_pte_upload_file("visible");
                setchk_ship_input_inv("visible");
                setchk_pln_req_inv("visible");
                setchk_export_clearance("visible");
                setchk_pte_dept("visible");
                setchk_pln_staff_bidding("visible");
                setchk_thai_catergories("visible");
                setchk_import_boi_prepare("visible");
                setchk_pte_staff_boi("visible");
                setchk_pte_weight_size("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadship_input_invCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
                setCM_pte_weight_size("table-row");
                setCM_pte_staff_boi("table-row");
                setCM_import_boi_prepare("table-row");
                setCM_boi_input_data("table-row");
                setCM_thai_catergories("table-row");
                setCM_pln_staff_bidding("table-row");
                setCM_pte_dept("table-row");
                setCM_export_clearance("table-row");
                setCM_pte_upload_file("table-row");
                setCM_pln_req_inv("table-row");
                setCM_ship_input_inv("table-row");
                setCM_pte_upload_file("table-row");
              }else if (STS == "FLSL020") {
                setaction__pln_upload_final(formattedDate);
                setchk_pln_upload_final("visible");
                setchk_boi_input_data("visible");
                setchk_pte_upload_file("visible");
                setchk_ship_input_inv("visible");
                setchk_pln_req_inv("visible");
                setchk_export_clearance("visible");
                setchk_pte_dept("visible");
                setchk_pln_staff_bidding("visible");
                setchk_thai_catergories("visible");
                setchk_import_boi_prepare("visible");
                setchk_pte_staff_boi("visible");
                setchk_pte_weight_size("visible");
                setchkowner("visible");
                setchkacc_check("visible");
                setchkfacmanager("visible");
                setchkboimanager("visible");
                setchkboistaff("visible");
                setchkservice_by("visible");
                setcheckrdo("visible");
                setReadpln_upload_finalCmmt(false);
                setCM_service_by("table-row");
                setCM_DepartmentManager("table-row");
                setCM_boistaff("table-row");
                setCM_boimanager("table-row");
                setCM_facmanager("table-row");
                setCM_acc_check("table-row");
                setCM_owner("table-row");
                setCM_pte_weight_size("table-row");
                setCM_pte_staff_boi("table-row");
                setCM_import_boi_prepare("table-row");
                setCM_boi_input_data("table-row");
                setCM_thai_catergories("table-row");
                setCM_pln_staff_bidding("table-row");
                setCM_pte_dept("table-row");
                setCM_export_clearance("table-row");
                setCM_pte_upload_file("table-row");
                setCM_pln_req_inv("table-row");
                setCM_ship_input_inv("table-row");
                setCM_pte_upload_file("table-row");
                setCM_pln_upload_final("table-row");
              }else if (
                STS == "FLWO010" ||
                STS == "FLLS010" ||
                STS == "FLDN010" ||
                STS == "FLLD010" ||
                STS == "FLSL021" ||
                STS == "FLSC010"
              ) {
                if (STS == "FLLD010") {
                  // setReadReturnACCRadio(ture)
                  setchkreturn_owner("visible");
                  setchkreturn_acc("visible");
                  setCM_return_acc("table-row");
                  setCM_return_owner("table-row");
                }
                if (STS == "FLSC010") {
                  setchkpte_env("visible");
                  setchkpln_staff("visible");
                  setchkshipping("visible");
                  setCM_pte_env("table-row");
                  setCM_pln_staff("table-row");
                  setCM_shipping("table-row");
                }
                if(STS == "FLSL021" ){
                  setchk_pln_upload_final("visible");
                  setchk_boi_input_data("visible");
                  setchk_pte_upload_file("visible");
                  setchk_ship_input_inv("visible");
                  setchk_pln_req_inv("visible");
                  setchk_export_clearance("visible");
                  setchk_pte_dept("visible");
                  setchk_pln_staff_bidding("visible");
                  setchk_thai_catergories("visible");
                  setchk_import_boi_prepare("visible");
                  setchk_pte_staff_boi("visible");
                  setchk_pte_weight_size("visible");
                  setCM_pte_weight_size("table-row");
                  setCM_pte_staff_boi("table-row");
                  setCM_import_boi_prepare("table-row");
                  setCM_boi_input_data("table-row");
                  setCM_thai_catergories("table-row");
                  setCM_pln_staff_bidding("table-row");
                  setCM_pte_dept("table-row");
                  setCM_export_clearance("table-row");
                  setCM_pte_upload_file("table-row");
                  setCM_pln_req_inv("table-row");
                  setCM_ship_input_inv("table-row");
                  setCM_pte_upload_file("table-row");
                  setCM_pln_upload_final("table-row");
                }
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
              } else if (
                STS == "FLWO011" ||
                STS == "FLLS011" ||
                STS == "FLDN011" ||
                STS == "FLLD011" ||
                STS == "FLSL022" ||
                STS == "FLSC011"
              ) {
                if (STS == "FLLD011") {
                  // setReadReturnACCRadio(ture)
                  setchkreturn_owner("visible");
                  setchkreturn_acc("visible");
                  setCM_return_acc("table-row");
                  setCM_return_owner("table-row");
                }
                if (STS == "FLSC011") {
                  // setReadReturnACCRadio(ture)
                  setchkpte_env("visible");
                  setchkpln_staff("visible");
                  setchkshipping("visible");
                  setCM_pte_env("table-row");
                  setCM_pln_staff("table-row");
                  setCM_shipping("table-row");
                }
                if(STS == "FLSL022" ){
                  setchk_pln_upload_final("visible");
                  setchk_boi_input_data("visible");
                  setchk_pte_upload_file("visible");
                  setchk_ship_input_inv("visible");
                  setchk_pln_req_inv("visible");
                  setchk_export_clearance("visible");
                  setchk_pte_dept("visible");
                  setchk_pln_staff_bidding("visible");
                  setchk_thai_catergories("visible");
                  setchk_import_boi_prepare("visible");
                  setchk_pte_staff_boi("visible");
                  setchk_pte_weight_size("visible");
                  setCM_pte_weight_size("table-row");
                  setCM_pte_staff_boi("table-row");
                  setCM_import_boi_prepare("table-row");
                  setCM_boi_input_data("table-row");
                  setCM_thai_catergories("table-row");
                  setCM_pln_staff_bidding("table-row");
                  setCM_pte_dept("table-row");
                  setCM_export_clearance("table-row");
                  setCM_pte_upload_file("table-row");
                  setCM_pln_req_inv("table-row");
                  setCM_ship_input_inv("table-row");
                  setCM_pte_upload_file("table-row");
                  setCM_pln_upload_final("table-row");
                }
                
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
              } else if (
                STS == "FLWO012" ||
                STS == "FLLS012" ||
                STS == "FLDN012" ||
                STS == "FLLD012" ||
                STS == "FLSL023"||
                STS == "FLSC012"
              ) {
                if (STS == "FLLD012") {
                  // setReadReturnACCRadio(ture)
                  setchkreturn_owner("visible");
                  setchkreturn_acc("visible");
                  setCM_return_acc("table-row");
                  setCM_return_owner("table-row");
                }
                if (STS == "FLSC012") {
                  // setReadReturnACCRadio(ture)
                  setchkpte_env("visible");
                  setchkpln_staff("visible");
                  setchkshipping("visible");
                  setCM_pte_env("table-row");
                  setCM_pln_staff("table-row");
                  setCM_shipping("table-row");
                }
                if(STS == "FLSL023" ){
                  setchk_pln_upload_final("visible");
                  setchk_boi_input_data("visible");
                  setchk_pte_upload_file("visible");
                  setchk_ship_input_inv("visible");
                  setchk_pln_req_inv("visible");
                  setchk_export_clearance("visible");
                  setchk_pte_dept("visible");
                  setchk_pln_staff_bidding("visible");
                  setchk_thai_catergories("visible");
                  setchk_import_boi_prepare("visible");
                  setchk_pte_staff_boi("visible");
                  setchk_pte_weight_size("visible");
                  setCM_pte_weight_size("table-row");
                  setCM_pte_staff_boi("table-row");
                  setCM_import_boi_prepare("table-row");
                  setCM_boi_input_data("table-row");
                  setCM_thai_catergories("table-row");
                  setCM_pln_staff_bidding("table-row");
                  setCM_pte_dept("table-row");
                  setCM_export_clearance("table-row");
                  setCM_pte_upload_file("table-row");
                  setCM_pln_req_inv("table-row");
                  setCM_ship_input_inv("table-row");
                  setCM_pte_upload_file("table-row");
                  setCM_pln_upload_final("table-row");
                }
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
            } else if (
              STS == "FLWO001" ||
              STS == "FLLS001" ||
              STS == "FLDN001" ||
              STS == "FLLD001" ||
              STS == "FLSL001" ||
              STS == "FLSC001"
            ) {
              setReadTel(false);
              setReadNewOwnerCmmt(false);
              setReadDept(false);
              setReadServiceBy(false);
              setReadBoistff(false);
              setReadBoimana(false);
              setReadFacMana(false);
              setReadAccchk(false);
              setReadAccMana(false);
              if (STS == "FLLD001") {
                setReadReturnACC(false);
                setReadReturnOwn(false);
              }
              if(STS == "FLSC001")
                { setReadPte_Env(false);
                  setReadPLN_Staff(false);
                  setReadShipping(false);}
              //setbtnsave("visible");
            }
          } else {
            if (
              STS == "FLWO001" ||
              STS == "FLLS001" ||
              STS == "FLDN001" ||
              STS == "FLLD001" ||
              STS == "FLSL001" ||
              STS == "FLSC001"
            ) {
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
              if (STS == "FLLD001") {
                setReadReturnACC(false);
                setReadReturnACCRadio(false);
                setReadReturnACCCmmt(false);
                setReadReturnOwn(false);
                setReadReturnOwnRadio(false);
                setReadReturnOwnCmmt(false);
              }
              if (STS == "FLSC001") {
                setReadPte_Env(false);
                setReadPte_EnvRadio(false);
                setReadPte_EnvCmmt(false);
                setReadPLN_Staff(false);
                setReadPLN_StaffCmmt(false);
                setReadPLN_StaffRadio(false);
                setReadShipping(false);
                setReadShippingCmmt(false);
                setReadShippingRadio(false);
              }

              //Save
            }
          }
        }
      }
      setTimeout(function () {
        closePopupLoadding();
      }, 5000);
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
      setReadReturnACC(false);
      setReadReturnOwn(false);
      setReadPte_Env(false);
      setReadPte_EnvRadio(false);
      setReadPte_EnvCmmt(false);
      setReadPLN_Staff(false);
      setReadPLN_StaffCmmt(false);
      setReadPLN_StaffRadio(false);
      setReadShipping(false);
      setReadShippingCmmt(false);
      setReadShippingRadio(false);
      setReadpte_input_weight_size(false);
      setReadpte_input_weight_sizeCmmt(false);
      setReadpte_staff_boi(false);
      setReadpte_staff_boiCmmt(false);
      setReadimport_boi_prepare(false);
      setReadimport_boi_prepareCmmt(false);
      setReadboi_input_data(false);
      setReadboi_input_dataCmmt(false);
      setReadthai_catergories(false);
      setReadthai_catergoriesCmmt(false);
      setReadpln_staff_bidding(false);
      setReadpln_staff_biddingCmmt(false);
      setReadpte_pte_dept(false);
      setReadpte_deptCmmt(false);
      setReadexport_clearance(false);
      setReadexport_clearanceCmmt(false);
      setReadpte_upload_file(false);
      setReadpte_upload_fileCmmt(false);
      setReadpln_req_inv(false);
      setReadpln_req_invCmmt(false);
      setReadship_input_inv(false);
      setReadship_input_invCmmt(false);
      setReadpln_upload_final(false);
      setReadpln_upload_finalCmmt(false);
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
      if(For_Sale_New !== null){
        setselectpte_input_weight_size(For_Sale_New[1]);
        setselectpln_staff_boi(For_Sale_New[2]);
        setselectimport_boi_prepare(For_Sale_New[3]);
        setselectboi_input_data(For_Sale_New[4]);
        setthai_catergories(For_Sale_New[5]);
        setpln_staff_bidding(For_Sale_New[6]);
        setpte_dept(For_Sale_New[7]);
        setexport_clearance(For_Sale_New[8]);
        setpte_upload_file(For_Sale_New[9]);
        setpln_req_inv(For_Sale_New[10]);
        setship_input_inv(For_Sale_New[11]);
        setpln_upload_final(For_Sale_New[12])
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
          setreq_return(For_Req[1]);
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
      }, 5000);
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
      try {
        const response = await axios.post("/getEdit_sale", {
          famno: EditFam,
        });
  
        const data = await response.data;
        const data_edit = JSON.stringify(data);
        localStorage.setItem("Edit_Sale", data_edit);
      } catch (error) {
        console.error("Error during login:", error);
      }
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
      } catch (error) {}
    }
    try {
      const response = await axios.post("/getEdit_lenging", {
        famno: EditFam,
      });

      const data = await response.data;
      const data_edit = JSON.stringify(data);
      localStorage.setItem("Edit_Lending", data_edit);
    } catch (error) {
      console.error("Error during login:", error);
    }
    try {
      const response = await axios.post("/getEdit_scrap", {
        famno: EditFam,
      });

      const data = await response.data;
      const data_edit = JSON.stringify(data);
      localStorage.setItem("Edit_Scrap", data_edit);
    } catch (error) {
      console.error("Error during login:", error);
    }
    try {
      const response = await axios.post("/getEdit_lenging", {
        famno: EditFam,
      });

      const data = await response.data;
      const data_edit = JSON.stringify(data);
      localStorage.setItem("Edit_Lending", data_edit);
    } catch (error) {
      console.error("Error during login:", error);
    }
    try {
      const response = await axios.post("/getEdit_scrap", {
        famno: EditFam,
      });

      const data = await response.data;
      const data_edit = JSON.stringify(data);
      localStorage.setItem("Edit_Scrap", data_edit);
    } catch (error) {
      console.error("Error during login:", error);
    }
    try {
      const response = await axios.post("/getEdit_sale", {
        famno: EditFam,
      });

      const data = await response.data;
      const data_edit = JSON.stringify(data);
      localStorage.setItem("Edit_Sale", data_edit);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const Back_page = async () => {
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
    }

    if (EditFam != null) {
      if (Type == "GP01001") {
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
      } else if (
        Type == "GP01004" ||
        Type == "GP01005" ||
        Type == "GP01007" ||
        Type == "GP01006" ||
        Type == "GP01002" ||
        Type == "GP01003" 
      ) {
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
      
        if (Type === "GP01002") {
          try {
            const response = await axios.post("/update_scrap", {
              famno: For_Rq_Edit[0],
              pte_env: selectpte_env,
              pln_staff: selectpln_staff,
              shipping: selectshipping_staff,
              update_by: For_Rq_Edit[2],
            });
          } catch (error) {
            console.error("Error update_lending:", error.message);
          }
        }
        if(Type === "GP01003"){
          try {
            const response = await axios.post("/update_sale", {
              famno: For_Rq_Edit[0],
              updateinput_ws: selectpte_input_weight_size,
              update_plnboi: selectpln_staff_boi,
              updateboi_prerare: selectimport_boi_prepare,
              updatedata_import: selectboi_input_data,
              updatethai_catergories:thai_catergories,
              updatebidding:pln_staff_bidding,
              updateindustrial:pte_dept,
              updateclerance:export_clearance,
              update_upload_file_after:pte_upload_file,
              updatereq_inv:pln_req_inv,
              updateinput_in:ship_input_inv,
              updatepayment:pln_upload_final,
              update_by: For_Rq_Edit[2],
            });
          } catch (error) {
            console.error("Error update_sale", error);
          }
        }
      }
    } else {
      if (Type == "GP01001") {
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
      } else if (
        Type == "GP01004" ||
        Type == "GP01005" ||
        Type == "GP01007" ||
        Type == "GP01006" ||
        Type == "GP01003" ||
        Type == "GP01002"
      ) {
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
        console.log("มาแล้ว")
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

          
        if (Type === "GP01002" && Fam_list !== "") {
          const set_data_for_req_details = [
            Fam_list,
            selectpte_env,
            selectpln_staff,
            selectshipping_staff,
          ];
          const sendheader = JSON.stringify(set_data_for_req_details);
          localStorage.setItem("For_Scrap_show", sendheader);
       
          try {
            const response = await axios.post("/update_scrap", {
              famno: For_Req[0],
              pte_env: selectpte_env,
              pln_staff: selectpln_staff,
              shipping: selectshipping_staff,
              update_by: owner_roting,
            });
          } catch (error) {
            console.error("Error update_lending:", error.message);
          }
        }else if(Type === "GP01002" && Fam_list ==""){
          const set_data_for_req_details = [
            Fam_list,
            selectpte_env,
            selectpln_staff,
            selectshipping_staff,
          ];
          const sendheader = JSON.stringify(set_data_for_req_details);
          localStorage.setItem("For_Scrap_show", sendheader);
          try {
            const response = await axios.post("/insert_scrap", {
              famno: Fam_list,
              pte_env: selectpte_env,
              pln_staff: selectpln_staff,
              shipping: selectshipping_staff,
              create_by: owner_roting,
            });
          } catch (error) {
            console.error("Error update_lending:", error.message);
          }
        }
      
        if (Type === "GP01003" && Fam_list !== "" ) {
         const set_data_for_req_details = [
          Fam_list,
          selectpte_input_weight_size,
          selectpln_staff_boi,
          selectimport_boi_prepare,
          selectboi_input_data,
          thai_catergories,
          pln_staff_bidding,
          pte_dept,
          export_clearance,
          pte_upload_file,
          pln_req_inv,
          ship_input_inv,
          pln_upload_final,
        ];
        const sendheader = JSON.stringify(set_data_for_req_details);
        localStorage.setItem("For_Sale", sendheader);
          try {
            const response = await axios.post("/update_sale", {
              famno: For_Req[0],
              updateinput_ws: selectpte_input_weight_size,
              update_plnboi: selectpln_staff_boi,
              updateboi_prerare: selectimport_boi_prepare,
              updatedata_import: selectboi_input_data,
              updatethai_catergories:thai_catergories,
              updatebidding:pln_staff_bidding,
              updateindustrial:pte_dept,
              updateclerance:export_clearance,
              update_upload_file_after:pte_upload_file,
              updatereq_inv:pln_req_inv,
              updateinput_in:ship_input_inv,
              updatepayment:pln_upload_final,
              update_by: For_Req[1],
            });
          } catch (error) {
            console.error("Error update_sale", error);
          }
        }else if(Type === "GP01003" && Fam_list =="") {
          const set_data_for_req_details = [
            Fam_list,
            selectpte_input_weight_size,
            selectpln_staff_boi,
            selectimport_boi_prepare,
            selectboi_input_data,
            thai_catergories,
            pln_staff_bidding,
            pte_dept,
            export_clearance,
            pte_upload_file,
            pln_req_inv,
            ship_input_inv,
            pln_upload_final,
          ];
          const sendheader = JSON.stringify(set_data_for_req_details);
          localStorage.setItem("For_Sale", sendheader);
          try {
            const response = await axios.post("/insert_sale", {
              famno: Fam_list,
              createinput_ws:selectpte_input_weight_size, 
              create_plnboi:selectpln_staff_boi, 
              createboi_prerare:selectimport_boi_prepare, 
              createdata_import:selectboi_input_data,
              createthai_catergories:thai_catergories,
              createbidding:pln_staff_bidding,
              createindustrial:pte_dept,
              createclerance:export_clearance,
              create_upload_file_after:pte_upload_file,
              createreq_inv:pln_req_inv,
              createinput_in:ship_input_inv,
              createpayment:pln_upload_final,
              create_by:For_Req[1],
            });
          } catch (error) {
            console.error("Error update_lending:", error.message);
          }
        }
      }
    }
    getDatatest();
    closePopupLoadding();
  navigate("/FAMsystem/ForRe");
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
          navigate("/FAMsystem/Search")
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
        navigate("/FAMsystem/Search")
      }
    } else if (
      Type === "GP01004" ||
      Type == "GP01005" ||
      Type == "GP01007" ||
      Type == "GP01006" ||
      Type == "GP01003" ||
      Type == "GP01002" 
    ) {
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

          if (Type === "GP01006") {
            try {
              const response = await axios.post("/update_lending", {
                tranfer: For_Rq_Edit[0],
                acc_return: return_selectacc_manager,
                req_reuturn: req_return,
                req_reuturn_by: req_return,
              });
            } catch (error) {
              console.error("Error update_lending:", error.message);
            }
          }
          if (Type === "GP01002") {
            try {
              const response = await axios.post("/update_scrap", {
                famno: For_Rq_Edit[0],
                pte_env: selectpte_env,
                pln_staff: selectpln_staff,
                shipping: selectshipping_staff,
                update_by: For_Rq_Edit[2],
              });
            } catch (error) {
              console.error("Error requesting data:", error);
            }
          }
          if (Type === "GP01003") {
            try {
              const response = await axios.post("/update_sale", {
                famno: For_Rq_Edit[0],
                updateinput_ws: selectpte_input_weight_size,
                update_plnboi: selectpln_staff_boi,
                updateboi_prerare: selectimport_boi_prepare,
                updatedata_import: selectboi_input_data,
                updatethai_catergories:thai_catergories,
                updatebidding:pln_staff_bidding,
                updateindustrial:pte_dept,
                updateclerance:export_clearance,
                update_upload_file_after:pte_upload_file,
                updatereq_inv:pln_req_inv,
                updateinput_in:ship_input_inv,
                updatepayment:pln_upload_final,
                update_by: For_Rq_Edit[2],
              });
            } catch (error) {
              console.error("Error update_sale", error);
            }
          }
          Swal.fire({
            title: "Save Success",
            text: "Your data has been saved successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
          setCheckSave("False");

          navigate("/FAMsystem/Search")
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
          if (Type === "GP01006") {
            try {
              const response = await axios.post("/insert_leading", {
                tranfer: For_Req[0],
                acc_return: return_selectacc_manager,
                req_reuturn: req_return,
                req_reuturn_by: req_return,
              });
            } catch (error) {
              console.error("Error requesting data:", error);
            }
          }
          if (Type === "GP01002") {
            try {
              const response = await axios.post("/insert_scrap", {
                famno: For_Req[0],
                pte_env: selectpte_env,
                pln_staff: selectpln_staff,
                shipping: selectshipping_staff,
                create_by: For_Req[1],
              });
            } catch (error) {
              console.error("Error requesting data:", error);
            }
          }
          if (Type === "GP01003") {
            try {
              const response = await axios.post("/insert_sale", {
               
                famno: For_Req[0],
                createinput_ws:selectpte_input_weight_size, 
                create_plnboi:selectpln_staff_boi, 
                createboi_prerare:selectimport_boi_prepare, 
                createdata_import:selectboi_input_data,
                createthai_catergories:thai_catergories,
                createbidding:pln_staff_bidding,
                createindustrial:pte_dept,
                createclerance:export_clearance,
                create_upload_file_after:pte_upload_file,
                createreq_inv:pln_req_inv,
                createinput_in:ship_input_inv,
                createpayment:pln_upload_final,
                create_by:For_Req[1],
              });
            } catch (error) {
              console.error("Error insert_sale:", error);
            }
          }

          Swal.fire({
            title: "Save Success",
            text: "Your data has been saved successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        }

        setCheckSave("False");
        navigate("/FAMsystem/Search")
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
          navigate("/FAMsystem/ForRe");
          return;
        } else {
          setErrorTel_Rq(false);
        }if (
          For_Rq_Edit[6] === null ||
          For_Rq_Edit[6] === undefined ||
          For_Rq_Edit[6] === "" ||
          For_Rq_Edit[6] === "null"
        ) {
          alert("Please fill in information: Dept ");
          setErrorDept(true);
          navigate("/FAMsystem/ForRe");
          return;
        }if (
          For_Rq_Edit[17] === null ||
          For_Rq_Edit[17] === undefined ||
          For_Rq_Edit[17] === "" ||
          For_Rq_Edit[17] === "null"
        ) {
          alert("Please fill in information: Request Owner");
          setErrorDept(true);
          navigate("/FAMsystem/ForRe");
          return;
        }if (
          For_Rq_Edit[19] === null ||
          For_Rq_Edit[19] === undefined ||
          For_Rq_Edit[19] === "" ||
          For_Rq_Edit[19] === "null"
        ) {
          alert("Please fill in information:  Owner Tel ");
          setErrorDept(true);
          navigate("/FAMsystem/ForRe");
          return;
        }if (
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
        }if (
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
        }if (
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
        }if (
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
        }if (
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

        // if (
        //   plan_date === null ||
        //   plan_date === undefined ||
        //   plan_date === "" ||
        //   plan_date === "null"
        // ) {
        //   setErrorDate(true);
        //   alert("Please fill in information: Date");
        //   return;
        // } else {
        //   setErrorDate(false);
        // }
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
        }if (
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
        }if (
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
        }if (
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
        }if (
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
        } if (
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
        } if (
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
        }if (
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
              localStorage.setItem("To", selectdepartment_mana);
              localStorage.setItem("Genno", EditFam);
              localStorage.setItem("Req_Type", For_Rq_Edit[7]);
              localStorage.setItem("Req_by", For_Rq_Edit[2]);
              localStorage.setItem("Status", Status);
              navigate("/FAMsystem/Mail");
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
          } else if (For_Rq_Edit[16] === "R") {
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
              navigate("/FAMsystem/Mail");
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
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
                navigatenavigate("/ApproveFam");
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
                  title: "Submit Success",
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
                navigate("/ApproveFam");
                navigate("/FAMsystem/Mail");
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
                navigate("/ApproveFam");
                navigate("/FAMsystem/Mail");
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
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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
                  localStorage.setItem("To", selectservice_by);
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
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
                navigate("/ApproveFam");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } }} else {
        if (
          For_Req[2] === null ||
          For_Req[2] === undefined ||
          For_Req[2] === "" ||
          For_Req[2] === "null"
        ) {
          setErrorTel_Rq(true);
          alert("Please fill in information: Tel Requester");
          let ErrorTel_Req = "true";

          navigate("/FAMsystem/ForRe", ErrorTel_Req);
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
          navigate("/FAMsystem/ForRe");
          return;
        }
        if (
          For_Req[15] === null ||
          For_Req[15] === undefined ||
          For_Req[15] === "" ||
          For_Req[15] === "null"
        ) {
          alert("Please fill in information: Request Owner");
          navigate("/FAMsystem/ForRe");
          return;
        }
        if (
          For_Req[17] === null ||
          For_Req[17] === undefined ||
          For_Req[17] === "" ||
          For_Req[17] === "null"
        ) {
          alert("Please fill in information: Owner Tel");
          navigate("/FAMsystem/ForRe");
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
        // if (
        //   plan_date === null ||
        //   plan_date === undefined ||
        //   plan_date === "" ||
        //   plan_date === "null"
        // ) {
        //   setErrorDate(true);
        //   alert("Please fill in information: Date");
        //   return;
        // } else {
        //   setErrorDate(false);
        // }
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
            navigate("/FAMsystem/Mail");
            Swal.fire({
              title: "Submit Success",
              icon: "success",
            });
          } catch (error) {
            console.error("Error updating submit status:", error.message);
          }
        }
        // setCheckSubmit("False")
      }
    } else if (Type == "GP01004") {
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
          navigate("/FAMsystem/ForRe");
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
          navigate("/FAMsystem/ForRe");
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
          navigate("/FAMsystem/ForRe");
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
          navigate("/FAMsystem/ForRe");
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
              localStorage.setItem("To", selectdepartment_mana);
              localStorage.setItem("Genno", EditFam);
              localStorage.setItem("Req_Type", For_Rq_Edit[7]);
              localStorage.setItem("Req_by", For_Rq_Edit[2]);
              localStorage.setItem("Status", Status);
              navigate("/FAMsystem/Mail");
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
              navigate("/FAMsystem/Mail");
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
          } else if (For_Rq_Edit[10] === "FLLS002") {
            let Status = "";
            if (selectradio_dept == "A") {
              Status = "FLLS003";
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
                    For_Rq_Edit[2]
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }

                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLLS003") {
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
                    selectdepartment_mana
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }

                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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
                    selectservice_by
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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
                    selectboi_staff
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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
                    selectboi_manager
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLLS007") {
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
                    selectfac_manager
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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
                  localStorage.setItem("To", text_acc_check);
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
                    selectacc_check
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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
                  localStorage.setItem("To", selectservice_by);
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
                    text_acc_check
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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
                    text_acc_check,
                    selectacc_manager
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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

          navigate("/FAMsystem/ForRe", ErrorTel_Req);
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
          navigate("/FAMsystem/ForRe");
          return;
        }
        if (
          For_Req[15] === null ||
          For_Req[15] === undefined ||
          For_Req[15] === "" ||
          For_Req[15] === "null"
        ) {
          alert("Please fill in information: Request Owner");
          navigate("/FAMsystem/ForRe");
          return;
        }
        if (
          For_Req[17] === null ||
          For_Req[17] === undefined ||
          For_Req[17] === "" ||
          For_Req[17] === "null"
        ) {
          alert("Please fill in information: Owner Tel");
          navigate("/FAMsystem/ForRe");
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
        if (For_Req[10] === "FLLS001") {
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
          navigate("/FAMsystem/Mail");
          Swal.fire({
            title: "Submit Success",
            icon: "success",
          });
        }
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
          navigate("/FAMsystem/ForRe");
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
          navigate("/FAMsystem/ForRe");
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
          navigate("/FAMsystem/ForRe");
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
          navigate("/FAMsystem/ForRe");
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
              localStorage.setItem("To", selectdepartment_mana);
              localStorage.setItem("Genno", EditFam);
              localStorage.setItem("Req_Type", For_Rq_Edit[7]);
              localStorage.setItem("Req_by", For_Rq_Edit[2]);
              localStorage.setItem("Status", Status);
              navigate("/FAMsystem/Mail");
               navigate('/Search');
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
              navigate("/FAMsystem/Mail");
              navigate("/FAMsystem/Search");
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
          } else if (For_Rq_Edit[10] === "FLWO002") {
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
                    For_Rq_Edit[2]
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }

                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
                navigate("/ApproveFam");
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
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }

                Swal.fire({
                  title: "Submit Success",
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
                navigate("/ApproveFam");
                navigate("/FAMsystem/Mail");
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
                    selectservice_by
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                // //navigate("/FAMsystem/Mail");
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
                    selectboi_staff
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/ApproveFam");
                navigate("/FAMsystem/Mail");
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
                    selectboi_manager
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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
                    selectfac_manager
                   
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
                navigate("/ApproveFam");
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
                  localStorage.setItem("To", text_acc_check);
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
                    selectacc_check
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
                navigate("/ApproveFam");
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
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/ApproveFam");
                navigate("/FAMsystem/Mail");
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
                  localStorage.setItem("To", selectservice_by);
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
                    text_acc_check,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
                navigate("/ApproveFam");
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
                    text_acc_check,
                    selectacc_manager,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
                navigate("/ApproveFam");
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

          navigate("/FAMsystem/ForRe", ErrorTel_Req);
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
          navigate("/FAMsystem/ForRe");
          return;
        }
        if (
          For_Req[15] === null ||
          For_Req[15] === undefined ||
          For_Req[15] === "" ||
          For_Req[15] === "null"
        ) {
          alert("Please fill in information: Request Owner");
          navigate("/FAMsystem/ForRe");
          return;
        }
        if (
          For_Req[17] === null ||
          For_Req[17] === undefined ||
          For_Req[17] === "" ||
          For_Req[17] === "null"
        ) {
          alert("Please fill in information: Owner Tel");
          navigate("/FAMsystem/ForRe");
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
        if (For_Req[10] === "FLWO001") {
          let Status = "FLWO002";
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
          navigate("/FAMsystem/Mail");
          Swal.fire({
            title: "Submit Success",
            icon: "success",
          });
        }
      }
    } else if (Type == "GP01007") {
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
          navigate("/FAMsystem/ForRe");
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
          navigate("/FAMsystem/ForRe");
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
          navigate("/FAMsystem/ForRe");
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
          navigate("/FAMsystem/ForRe");
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
              const response = await axios.post("/update_submit", {
                famno: EditFam,
                sts_submit: Status,
              });
              Swal.fire({
                title: "Submit Success",
                icon: "success",
              });
              localStorage.setItem("To", selectdepartment_mana);
              localStorage.setItem("Genno", EditFam);
              localStorage.setItem("Req_Type", For_Rq_Edit[7]);
              localStorage.setItem("Req_by", For_Rq_Edit[2]);
              localStorage.setItem("Status", Status);
              navigate("/FAMsystem/Mail");
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
              navigate("/FAMsystem/Mail");
              // navigate("/FAMsystem/Search");
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
          } else if (For_Rq_Edit[10] === "FLDN002") {
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
                    For_Rq_Edit[2]
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }

                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
                // //navigate("/ApproveFam");
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
                    selectdepartment_mana
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }

                Swal.fire({
                  title: "Submit Success",
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
                navigate("/ApproveFam");
                navigate("/FAMsystem/Mail");
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
                    selectservice_by
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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
                    selectboi_staff
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                // //navigate("/ApproveFam");
                navigate("/FAMsystem/Mail");
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
                    selectboi_manager
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                // //navigate("/ApproveFam");
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLDN007") {
            let Status = "";
            if (
              certificate_date === null ||
              certificate_date === undefined ||
              certificate_date === "" ||
              certificate_date === "null"
            ) {
              setErrorDate_Certificate(true);
              alert("Please fill in information: certifidate date");
              return;
            } else {
              setErrorDate_Certificate(false);
            }
            if (selectradio_acc_check == "A") {
              Status = "FLDN008";
            } else if (selectradio_acc_check == "R") {
              Status = "FLDN907";
            }
            if (
              selectradio_acc_check == "A" &&
              (certificate_date == "" ||
                certificate_date == null ||
                certificate_date == "null" ||
                certificate_date == "undefined")
            ) {
              alert("Please Select Receive certificate date");
              return;
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
                const response = await axios.post("/date_certificate", {
                  famno: EditFam,
                  date_cer: certificate_date,
                });
              } catch (error) {
                console.error("Error during login:", error);
              }

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
                    selectfac_manager
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }

                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLDN008") {
            let Status = "";
            let DataFile_Requester = "";
            try {
              const response = await axios.post("/getFAM_FILE_DATA", {
                FamNo: EditFam,
                ATT_FROM:'OWNER CHECK'
              });
              const jsonData = await response.data;
              DataFile_Requester = await response.data;
            } catch (error) {
              console.error("Error fetching data:", error);
            }

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
            }
            if (
              DataFile_Requester == null ||
              DataFile_Requester == [] ||
              DataFile_Requester.length == 0
            ) {
              alert("Please Select File");
              return;
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
                  localStorage.setItem("To", text_acc_check);
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
                    selectacc_check
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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
                    owner_roting
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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
                  localStorage.setItem("To", selectservice_by);
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
                    text_acc_check,
                    null,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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
                    text_acc_check,
                    selectacc_manager,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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

          navigate("/FAMsystem/ForRe", ErrorTel_Req);
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
          navigate("/FAMsystem/ForRe");
          return;
        }
        if (
          For_Req[15] === null ||
          For_Req[15] === undefined ||
          For_Req[15] === "" ||
          For_Req[15] === "null"
        ) {
          alert("Please fill in information: Request Owner");
          navigate("/FAMsystem/ForRe");
          return;
        }
        if (
          For_Req[17] === null ||
          For_Req[17] === undefined ||
          For_Req[17] === "" ||
          For_Req[17] === "null"
        ) {
          alert("Please fill in information: Owner Tel");
          navigate("/FAMsystem/ForRe");
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
          navigate("/FAMsystem/Mail");
          Swal.fire({
            title: "Submit Success",
            icon: "success",
          });
        }
      }
    } else if (Type == "GP01006") {
      if (EditFam != null) {
        if (
          For_Rq_Edit[3] === null ||
          For_Rq_Edit[3] === undefined ||
          For_Rq_Edit[3] === "" ||
          For_Rq_Edit[3] === "null"
        ) {
          setErrorTel_Rq(true);
          alert("Please fill in information: Tel For Requester");
          navigate("/FAMsystem/ForRe");
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
          navigate("/FAMsystem/ForRe");
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
          navigate("/FAMsystem/ForRe");
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
          navigate("/FAMsystem/ForRe");
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
          return_selectacc_manager === null ||
          return_selectacc_manager === undefined ||
          return_selectacc_manager === "" ||
          return_selectacc_manager === "null"
        ) {
          alert("Please fill in information: ACC Manager return");
          setErrorACCReturn(true);
          return;
        } else {
          setErrorACCReturn(false);
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
          if (For_Rq_Edit[10] === "FLLD001") {
            let Status = "FLLD002";
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
              const response = await axios.post("/update_lending", {
                tranfer: For_Rq_Edit[0],
                acc_return: return_selectacc_manager,
                req_reuturn: req_return,
                req_reuturn_by: req_return,
              });
            } catch (error) {
              console.error("Error update_lending:", error.message);
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
              localStorage.setItem("To", selectdepartment_mana);
              localStorage.setItem("Genno", EditFam);
              localStorage.setItem("Req_Type", For_Rq_Edit[7]);
              localStorage.setItem("Req_by", For_Rq_Edit[2]);
              localStorage.setItem("Status", Status);
              navigate("/FAMsystem/Mail");
              //  navigate('/Search');
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
          } else if (For_Rq_Edit[16] === "R") {
            let Status = "FLLD002";
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
              const response = await axios.post("/update_for_nullLending", {
                famno: EditFam
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
              navigate("/FAMsystem/Mail");
              // navigate("/FAMsystem/Search");
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
          } else if (For_Rq_Edit[10] === "FLLD002") {
            let Status = "";
            if (selectradio_dept == "A") {
              Status = "FLLD003";
            } else if (selectradio_dept == "R") {
              Status = "FLLD092";
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
                    For_Rq_Edit[2]
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLLD003") {
            let Status = "";
            if (selectradio_serviceby == "A") {
              Status = "FLLD004";
            } else if (selectradio_serviceby == "R") {
              Status = "FLLD093";
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
                    selectdepartment_mana
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }

                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLLD004") {
            let Status = "";
            if (selectradio_boistaff == "A") {
              Status = "FLLD005";
            } else if (selectradio_boistaff == "R") {
              Status = "FLLD094";
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
                    selectservice_by
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLLD005") {
            let Status = "";
            if (selectradio_boimanager == "A") {
              Status = "FLLD006";
            } else if (selectradio_boimanager == "R") {
              Status = "FLLD095";
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
                    selectboi_staff
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLLD006") {
            let Status = "";
            if (selectradio_facmanager == "A") {
              Status = "FLLD007";
            } else if (selectradio_facmanager == "R") {
              Status = "FLLD096";
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
                    selectboi_manager
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLLD007") {
            let Status = "";
            if (
              certificate_date === null ||
              certificate_date === undefined ||
              certificate_date === "" ||
              certificate_date === "null"
            ) {
              setErrorDate_Certificate(true);
              alert("Please fill in information: certifidate date");
              return;
            } else {
              setErrorDate_Certificate(false);
            }

            if (selectradio_acc_check == "A") {
              Status = "FLLD008";
            } else if (selectradio_acc_check == "R") {
              Status = "FLLD907";
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
                    selectfac_manager
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }

                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLLD008") {
            let Status = "";
            let DataFile_Requester = "";

            try {
              const response = await axios.post("/getFAM_FILE_DATA", {
                FamNo: EditFam,
                ATT_FROM:'OWNER CHECK'
              });
              const jsonData = await response.data;
              DataFile_Requester = await response.data;
            } catch (error) {
              console.error("Error fetching data:", error);
            }
            if (
              DataFile_Requester == null ||
              DataFile_Requester == [] ||
              DataFile_Requester.length == 0
            ) {
              alert("Please Select File");
              return;
            }
            if (selectradio_owner == "A") {
              Status = "FLLD009";
            } else if (selectradio_owner == "R") {
              Status = "FLLD908";
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
                  localStorage.setItem("To", return_selectacc_manager);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLLD009") {
            let Status = "";
            if (
              return_date === null ||
              return_date === undefined ||
              return_date === "" ||
              return_date === "null"
            ) {
              setErrorDate_return(true);
              alert("Please fill in information: Return Date");
              return;
            } else {
              setErrorDate_return(false);
            }
            if (selectradio_return_acc == "A") {
              Status = "FLLD100";
            } else if (selectradio_return_acc == "R") {
              Status = "FLLD909";
            }
            if (
              selectradio_return_acc == "A" &&
              (return_date == "" ||
                return_date == null ||
                return_date == "null" ||
                return_date == "undefined")
            ) {
              alert("Please Select Return date ");
              return;
            }
            if (
              selectradio_return_acc == "R" &&
              (cmmtradio_return_acc == "" ||
                cmmtradio_return_acc == null ||
                cmmtradio_return_acc == "null" ||
                cmmtradio_return_acc == "undefined")
            ) {
              alert("Please fill in information");
            } else {
              try {
                const response = await axios.post("/update_submit", {
                  famno: EditFam,
                  sts_submit: Status,
                });
              } catch (error) {
                console.error("Error requesting data:", error);
              }
              try {
                const response = await axios.post(
                  "/update_leading_acc_return",
                  {
                    tranfer: EditFam,
                    return_date_acc: return_date,
                    acc_return_jud: selectradio_return_acc,
                    acc_return_cmmt: cmmtradio_return_acc,
                  }
                );

                if (selectradio_record != "R") {
                  localStorage.setItem("status_formail", selectradio_record);
                  localStorage.setItem("To", req_return);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } 
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLLD100") {
            let Status = "FLLD010";
            let DataFile_Requester = "";
            try {
              const response = await axios.post("/getFAM_FILE_DATA", {
                FamNo: EditFam,
                ATT_FROM:'OWNER RETURN'
              });
              const jsonData = await response.data;
              DataFile_Requester = jsonData;
            } catch (error) {
              console.error("Error fetching data:", error);
            }
            if (
              DataFile_Requester == null ||
              DataFile_Requester == [] ||
              DataFile_Requester.length == 0
            ) {
              alert("Please Select File");
              return;
            }

            try {
              const response = await axios.post("/update_submit", {
                famno: EditFam,
                sts_submit: Status,
              });
            } catch (error) {
              console.error("Error requesting data:", error);
            }
            try {
              const response = await axios.post("/update_leading_own_return", {
                tranfer: EditFam,
                own_return_cmmt: cmmtradio_return_own,
              });
              if (selectradio_acc_manager != "R") {
                localStorage.setItem("status_formail", selectradio_acc_manager);
                localStorage.setItem("To", text_acc_check);
                localStorage.setItem("Genno", EditFam);
                localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                localStorage.setItem("Req_by", For_Rq_Edit[2]);
                localStorage.setItem("Status", Status);
              }
              Swal.fire({
                title: "Submit Success",
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
              navigate("/FAMsystem/Mail");
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
          } else if (For_Rq_Edit[10] === "FLLD010") {
            let Status = "";
            if (selectradio_record == "A") {
              Status = "FLLD011";
            } else if (selectradio_record == "R") {
              Status = "FLLD910";
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
                    return_selectacc_manager,
                    req_return
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLLD011") {
            let Status = "";
            if (selectradio_acc_manager == "A") {
              Status = "FLLD012";
            } else if (selectradio_acc_manager == "R") {
              Status = "FLLD911";
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
                  localStorage.setItem("To", selectservice_by);
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
                    return_selectacc_manager,
                    req_return,
                    text_acc_check
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLLD012") {
            let Status = "";
            if (selectradio_service_close_by == "A") {
              Status = "FLLD013";
            } else if (selectradio_service_close_by == "R") {
              Status = "FLLD912";
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
                    return_selectacc_manager,
                    req_return,
                    text_acc_check,
                    selectacc_manager,
                    
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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

          navigate("/FAMsystem/ForRe", ErrorTel_Req);
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
          navigate("/FAMsystem/ForRe");
          return;
        }
        if (
          For_Req[15] === null ||
          For_Req[15] === undefined ||
          For_Req[15] === "" ||
          For_Req[15] === "null"
        ) {
          alert("Please fill in information: Request Owner");
          navigate("/FAMsystem/ForRe");
          return;
        }
        if (
          For_Req[17] === null ||
          For_Req[17] === undefined ||
          For_Req[17] === "" ||
          For_Req[17] === "null"
        ) {
          alert("Please fill in information: Owner Tel");
          navigate("/FAMsystem/ForRe");
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
          return_selectacc_manager === null ||
          return_selectacc_manager === undefined ||
          return_selectacc_manager === "" ||
          return_selectacc_manager === "null"
        ) {
          alert("Please fill in information: ACC Manager return");
          setErrorACCReturn(true);
          return;
        } else {
          setErrorACCReturn(false);
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
        if (For_Req[10] === "FLLD001") {
          let Status = "FLLD002";
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

          try {
            const response = await axios.post("/insert_leading", {
              tranfer: For_Req[0],
              acc_return: return_selectacc_manager,
              req_reuturn: req_return,
              req_reuturn_by: req_return,
            });
          } catch (error) {
            console.error("Error requesting data:", error);
          }

          localStorage.setItem("To", selectdepartment_mana);
          localStorage.setItem("Genno", For_Req[0]);
          localStorage.setItem("Req_Type", For_Req[6]);
          localStorage.setItem("Req_by", For_Req[1]);
          localStorage.setItem("Status", Status);
          navigate("/FAMsystem/Mail");
          Swal.fire({
            title: "Submit Success",
            icon: "success",
          });
        }
      }
    } else if (Type == "GP01002") {
      if (EditFam != null) {
        if (
          For_Rq_Edit[3] === null ||
          For_Rq_Edit[3] === undefined ||
          For_Rq_Edit[3] === "" ||
          For_Rq_Edit[3] === "null"
        ) {
          setErrorTel_Rq(true);
          alert("Please fill in information: Tel For Requester");
          navigate("/FAMsystem/ForRe");
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
          navigate("/FAMsystem/ForRe");
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
          navigate("/FAMsystem/ForRe");
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
          navigate("/FAMsystem/ForRe");
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
          selectpte_env === null ||
          selectpte_env === undefined ||
          selectpte_env === "" ||
          selectpte_env === "null"
        ) {
          alert("Please fill in information: PTE(ENV)");
          setErrorPTE_ENV(true);
          return;
        } else {
          setErrorPTE_ENV(false);
        }
        if (
          selectpln_staff === null ||
          selectpln_staff === undefined ||
          selectpln_staff === "" ||
          selectpln_staff === "null"
        ) {
          alert("Please fill in information: PLN Staff");
          setErrorPLN_Staff(true);
          return;
        } else {
          setErrorPLN_Staff(false);
        }
        if (
          selectshipping_staff === null ||
          selectshipping_staff === undefined ||
          selectshipping_staff === "" ||
          selectshipping_staff === "null"
        ) {
          alert("Please fill in information: Shipping Staff");
          setErrorShipping(true);
          return;
        } else {
          setErrorShipping(false);
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
        if (For_Rq_Edit != null) {
          if (For_Rq_Edit[10] === "FLSC001") {
            let Status = "FLSC002";
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
              const response = await axios.post("/update_scrap", {
                famno: EditFam,
                pte_env: selectpte_env,
                pln_staff:selectpln_staff,
                shipping:selectshipping_staff,
                update_by: For_Rq_Edit[2]

              });
            } catch (error) {
              console.error("Error updating update_scrap:", error.message);
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
              localStorage.setItem("To", selectdepartment_mana);
              localStorage.setItem("Genno", EditFam);
              localStorage.setItem("Req_Type", For_Rq_Edit[7]);
              localStorage.setItem("Req_by", For_Rq_Edit[2]);
              localStorage.setItem("Status", Status);
              navigate("/FAMsystem/Mail");
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
          } else if (For_Rq_Edit[16] === "R") {
            let Status = "FLSC002";
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
              const response = await axios.post("/update_scrap", {
                famno: EditFam,
                pte_env: selectpte_env,
                pln_staff:selectpln_staff,
                shipping:selectshipping_staff,
                update_by: For_Rq_Edit[2]

              });
            } catch (error) {
              console.error("Error updating update_scrap:", error.message);
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
              const response = await axios.post("/update_for_nullScarp", {
                famno: EditFam
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
              navigate("/FAMsystem/Mail");
              navigate("/FAMsystem/Search");
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
          } else if (For_Rq_Edit[10] === "FLSC002") {
            let Status = "";
            if (selectradio_dept == "A") {
              Status = "FLSC003";
            } else if (selectradio_dept == "R") {
              Status = "FLSC092";
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
                    For_Rq_Edit[2]
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }

                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
                //navigate("/ApproveFam");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLSC003") {
            let Status = "";
            if (selectradio_serviceby == "A") {
              Status = "FLSC004";
            } else if (selectradio_serviceby == "R") {
              Status = "FLSC093";
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
                    selectdepartment_mana
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }

                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLSC004") {
            let Status = "";
            if (selectradio_boistaff == "A") {
              Status = "FLSC005";
            } else if (selectradio_boistaff == "R") {
              Status = "FLSC094";
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
                    selectservice_by
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLSC005") {
            let Status = "";
            if (selectradio_boimanager == "A") {
              Status = "FLSC006";
            } else if (selectradio_boimanager == "R") {
              Status = "FLSC095";
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
                    selectboi_staff
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLSC006") {
            let Status = "";
            if (selectradio_facmanager == "A") {
              Status = "FLSC007";
            } else if (selectradio_facmanager == "R") {
              Status = "FLSC096";
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
                    selectboi_manager
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLSC007") {
            let Status = "";
            if (selectradio_acc_check == "A") {
              Status = "FLSC008";
            } else if (selectradio_acc_check == "R") {
              Status = "FLSC907";
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
                const response = await axios.post("/date_certificate", {
                  famno: EditFam,
                  date_cer: certificate_date,
                });
              } catch (error) {
                console.error("Error during login:", error);
              }

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
                    selectfac_manager
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }

                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLSC008") {
            let Status = "";
            if (selectradio_owner == "A") {
              Status = "FLSC009";
            } else if (selectradio_owner == "R") {
              Status = "FLSC908";
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
                  localStorage.setItem("To", selectpte_env);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLSC009") {
            let Status = "FLSC100";
            if (
              scrap_date === null ||
              scrap_date === undefined ||
              scrap_date === "" ||
              scrap_date === "null"
            ) {
              setErrScp_date(true);
              alert("Please fill in information: Scrap Date");
              return;
            } else {
              setErrScp_date(false);
            }
              let DataFile_Requester = "";
              try {
                const response = await axios.post("/getFAM_FILE_DATA", {
                  FamNo: EditFam,
                  ATT_FROM:'ENV CHECK'
                });
              const jsonData = await response.data;
              DataFile_Requester = jsonData;
            } catch (error) {
              console.error("Error fetching data:", error);
            }
            if (
              DataFile_Requester == null ||
              DataFile_Requester == [] ||
              DataFile_Requester.length == 0
            ) {
              alert("Please Select File");
              return;
            }
         
            if (
              cmmtradio_pte_env !== null &&
              (cmmtradio_pte_env == "" ||
              cmmtradio_pte_env == null ||
              cmmtradio_pte_env == "null" ||
              cmmtradio_pte_env == "undefined")
            ) {
              alert("Please fill in information");
            }
              try {
                const response = await axios.post("/update_submit", {
                  famno: EditFam,
                  sts_submit: Status,
                });
              } catch (error) {
                console.error("Error requesting data:", error);
              }
              try {
                const response = await axios.post(
                  "/update_scrap_pte",
                  {
                    tranfer: EditFam,
                    pte_env_cmmt: cmmtradio_pte_env,
                    date_scrap:scrap_date
                   
                  }
                );
                  localStorage.setItem("status_formail", null );
                  localStorage.setItem("To", selectpln_staff);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
             
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            //}
          } else if (For_Rq_Edit[10] === "FLSC100") {
            let Status = "FLSC101";
            let DataFile_Requester = "";
            try {
              const response = await axios.post("/getFAM_FILE_DATA", {
                FamNo: EditFam,
                ATT_FROM:'PLN CHECK'
              });
              const jsonData = await response.data;
              DataFile_Requester = jsonData;
            } catch (error) {
              console.error("Error fetching data:", error);
            }
            if (
              DataFile_Requester == null ||
              DataFile_Requester == [] ||
              DataFile_Requester.length == 0
            ) {
              alert("Please Select File");
              return;
            }

            try {
              const response = await axios.post("/update_submit", {
                famno: EditFam,
                sts_submit: Status,
              });
            } catch (error) {
              console.error("Error requesting data:", error);
            }
            try {
              const response = await axios.post("/update_scrap_pln", {
                tranfer: EditFam,
                pln_staff_cmmt: cmmtradio_pln_staff,
              });
              if (selectradio_acc_manager != "R") {
                localStorage.setItem("status_formail", selectradio_acc_manager);
                localStorage.setItem("To", selectshipping_staff);
                localStorage.setItem("Genno", EditFam);
                localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                localStorage.setItem("Req_by", For_Rq_Edit[2]);
                localStorage.setItem("Status", Status);
              }
              Swal.fire({
                title: "Submit Success",
                icon: "success",
              });
              localStorage.setItem("To", selectshipping_staff);
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
              navigate("/FAMsystem/Mail");
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
          } else if (For_Rq_Edit[10] === "FLSC101") {
            let Status = "FLSC010";
              let DataFile_Requester = "";
              try {
                const response = await axios.post("/getFAM_FILE_DATA", {
                  FamNo: EditFam,
                  ATT_FROM:'SHP CHECK'
                });
                const jsonData = await response.data;
                DataFile_Requester = jsonData;
              } catch (error) {
                console.error("Error fetching data:", error);
              }
              if (
                DataFile_Requester == null ||
                DataFile_Requester == [] ||
                DataFile_Requester.length == 0
              ) {
                alert("Please Select File");
                return;
              }
              try {
                const response = await axios.post("/update_submit", {
                  famno: EditFam,
                  sts_submit: Status,
                });
              } catch (error) {
                console.error("Error requesting data:", error);
              }
              try {
                const response = await axios.post("/update_scrap_shipping", {
                  tranfer: EditFam,
                  shipping_staff_cmmt: cmmtradio_shipping
                });

                if (selectradio_record != "R") {
                  localStorage.setItem("status_formail", selectradio_record);
                  localStorage.setItem("To", text_acc_check);
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
                  title: "Submit Success",
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
                 //navigate("/ApproveFam");
                 navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            //}

          } else if (For_Rq_Edit[10] === "FLSC010") {
            let Status = "";
            if (selectradio_record == "A") {
              Status = "FLSC011";
            } else if (selectradio_record == "R") {
              Status = "FLSC910";
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
                    selectpte_env,
                    selectpln_staff,
                    selectshipping_staff
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
                // //navigate("/ApproveFam");
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          }else if (For_Rq_Edit[10] === "FLSC011") {
            let Status = "";
            if (selectradio_acc_manager == "A") {
              Status = "FLSC012";
            } else if (selectradio_acc_manager == "R") {
              Status = "FLSC911";
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
                  localStorage.setItem("To",selectservice_by );
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
                    selectpte_env,
                    selectpln_staff,
                    selectshipping_staff,
                    text_acc_check,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          }else if (For_Rq_Edit[10] === "FLSC012") {
            let Status = "";
            if (selectradio_service_close_by == "A") {
              Status = "FLSC013";
            } else if (selectradio_service_close_by == "R") {
              Status = "FLSC912";
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
                    selectpte_env,
                    selectpln_staff,
                    selectshipping_staff,
                    text_acc_check,
                    selectacc_manager,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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

          navigate("/FAMsystem/ForRe", ErrorTel_Req);
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
          navigate("/FAMsystem/ForRe");
          return;
        }
        if (
          For_Req[15] === null ||
          For_Req[15] === undefined ||
          For_Req[15] === "" ||
          For_Req[15] === "null"
        ) {
          alert("Please fill in information: Request Owner");
          navigate("/FAMsystem/ForRe");
          return;
        }
        if (
          For_Req[17] === null ||
          For_Req[17] === undefined ||
          For_Req[17] === "" ||
          For_Req[17] === "null"
        ) {
          alert("Please fill in information: Owner Tel");
          navigate("/FAMsystem/ForRe");
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
          selectpte_env === null ||
          selectpte_env === undefined ||
          selectpte_env === "" ||
          selectpte_env === "null"
        ) {
          alert("Please fill in information: PTE(ENV)");
          setErrorPTE_ENV(true);
          return;
        } else {
          setErrorPTE_ENV(false);
        }
        if (
          selectpln_staff === null ||
          selectpln_staff === undefined ||
          selectpln_staff === "" ||
          selectpln_staff === "null"
        ) {
          alert("Please fill in information: PLN Staff");
          setErrorPLN_Staff(true);
          return;
        } else {
          setErrorPLN_Staff(false);
        }
        if (
          selectshipping_staff === null ||
          selectshipping_staff === undefined ||
          selectshipping_staff === "" ||
          selectshipping_staff === "null"
        ) {
          alert("Please fill in information: Shipping Staff");
          setErrorShipping(true);
          return;
        } else {
          setErrorShipping(false);
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
        //Submit Scrap
        if (For_Req[10] === "FLSC001") {
          let Status = "FLSC002";
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

          try {
            const response = await axios.post("/insert_scrap", {
              famno: For_Req[0],
              pte_env: selectpte_env,
              pln_staff: selectpln_staff,
              shipping: selectshipping_staff,
              create_by: For_Req[1],
            });
          } catch (error) {
            console.error("Error insert_scrap :", error);
          }
          localStorage.setItem("To", selectdepartment_mana);
          localStorage.setItem("Genno", For_Req[0]);
          localStorage.setItem("Req_Type", For_Req[6]);
          localStorage.setItem("Req_by", For_Req[1]);
          localStorage.setItem("Status", Status);
          navigate("/FAMsystem/Mail");
          Swal.fire({
            title: "Submit Success",
            icon: "success",
          });
        }
        // setCheckSubmit("False")
      }
    }else if (Type == "GP01003") {
      if (EditFam != null) {
        if (
          For_Rq_Edit[3] === null ||
          For_Rq_Edit[3] === undefined ||
          For_Rq_Edit[3] === "" ||
          For_Rq_Edit[3] === "null"
        ) {
          setErrorTel_Rq(true);
          alert("Please fill in information: Tel For Requester");
          navigate("/FAMsystem/ForRe");
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
          navigate("/FAMsystem/ForRe");
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
          navigate("/FAMsystem/ForRe");
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
          navigate("/FAMsystem/ForRe");
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
        //Sale
        if (
          selectpte_input_weight_size === null ||
          selectpte_input_weight_size === undefined ||
          selectpte_input_weight_size === "" ||
          selectpte_input_weight_size === "null"
        ) {
          alert("Please fill in information: PTE (ENV) input weight/size");
          setErrorPTE_INPUT_WS(true);
          return;
        } else {
          setErrorPTE_INPUT_WS(false);
        }
        if (
          selectpln_staff_boi === null ||
          selectpln_staff_boi === undefined ||
          selectpln_staff_boi === "" ||
          selectpln_staff_boi === "null"
        ) {
          alert("Please fill in information: PLN Staff contact BOI ");
          setErrorPLN_Staff_BOI(true);
          return;
        } else {
          setErrorPLN_Staff_BOI(false);
        }
        if (
          selectimport_boi_prepare === null ||
          selectimport_boi_prepare === undefined ||
          selectimport_boi_prepare === "" ||
          selectimport_boi_prepare === "null"
        ) {
          alert("Please fill in information: Import & BOI prepare  ");
          setErrorimport_boi_prepare(true);
          return;
        } else {
          setErrorimport_boi_prepare(false);
        }
        if (
          selectboi_input_data === null ||
          selectboi_input_data === undefined ||
          selectboi_input_data === "" ||
          selectboi_input_data === "null"
        ) {
          alert("Please fill in information: BOI Input data Import  ");
          setErrorboi_input_data(true);
          return;
        } else {
          setErrorboi_input_data(false);
        }
        if (
          ship_input_inv === null ||
          ship_input_inv === undefined ||
          ship_input_inv === "" ||
          ship_input_inv === "null"
        ) {
          alert("Please fill in information: Shipping Staff input invoice no ");
          setErrorship_input_inv(true);
          return;
        } else {
          setErrorship_input_inv(false);
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
        // openPopupLoadding();
        if (For_Rq_Edit != null) {
          if (For_Rq_Edit[10] === "FLSL001") {
            let Status = "FLSL002";
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
              const response = await axios.post("/update_sale", {
                famno: For_Rq_Edit[0],
                updateinput_ws: selectpte_input_weight_size,
                update_plnboi: selectpln_staff_boi,
                updateboi_prerare: selectimport_boi_prepare,
                updatedata_import: selectboi_input_data,
                updatethai_catergories:thai_catergories,
                updatebidding:pln_staff_bidding,
                updateindustrial:pte_dept,
                updateclerance:export_clearance,
                update_upload_file_after:pte_upload_file,
                updatereq_inv:pln_req_inv,
                updateinput_in:ship_input_inv,
                updatepayment:pln_upload_final,
                update_by: For_Rq_Edit[2],
              });
            } catch (error) {
              console.error("Error update_sale", error);
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
              localStorage.setItem("To", selectdepartment_mana);
              localStorage.setItem("Genno", EditFam);
              localStorage.setItem("Req_Type", For_Rq_Edit[7]);
              localStorage.setItem("Req_by", For_Rq_Edit[2]);
              localStorage.setItem("Status", Status);
              navigate("/FAMsystem/Mail");
              //  navigate('/Search');
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
          } else if (For_Rq_Edit[16] === "R") {
            let Status = "FLSC002";
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
              const response = await axios.post("/update_sale", {
                famno: For_Rq_Edit[0],
                updateinput_ws: selectpte_input_weight_size,
                update_plnboi: selectpln_staff_boi,
                updateboi_prerare: selectimport_boi_prepare,
                updatedata_import: selectboi_input_data,
                updatethai_catergories:thai_catergories,
                updatebidding:pln_staff_bidding,
                updateindustrial:pte_dept,
                updateclerance:export_clearance,
                update_upload_file_after:pte_upload_file,
                updatereq_inv:pln_req_inv,
                updateinput_in:ship_input_inv,
                updatepayment:pln_upload_final,
                update_by: For_Rq_Edit[2],
              });
            } catch (error) {
              console.error("Error update_sale", error);
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
              const response = await axios.post("/update_for_nullSale", {
                famno: EditFam
              });
            } catch (error) {
              console.error("Error update_for_nullSale", error.message);
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
              navigate("/FAMsystem/Mail");
              // navigate("/FAMsystem/Search");
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
          } else if (For_Rq_Edit[10] === "FLSL002") {
            let Status = "";
            if (selectradio_dept == "A") {
              Status = "FLSL003";
            } else if (selectradio_dept == "R") {
              Status = "FLSL092";
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
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
                //navigate("/ApproveFam");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLSL003") {
            let Status = "";
            if (selectradio_serviceby == "A") {
              Status = "FLSL004";
            } else if (selectradio_serviceby == "R") {
              Status = "FLSL093";
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
                  title: "Submit Success",
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
                //navigate("/ApproveFam");
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLSL004") {
            let Status = "";
            if (selectradio_boistaff == "A") {
              Status = "FLSL005";
            } else if (selectradio_boistaff == "R") {
              Status = "FLSL094";
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
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
                //navigate("/ApproveFam");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLSL005") {
            let Status = "";
            if (selectradio_boimanager == "A") {
              Status = "FLSL006";
            } else if (selectradio_boimanager == "R") {
              Status = "FLSL095";
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
                  title: "Submit Success",
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
                // //navigate("/ApproveFam");
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLSL006") {
            let Status = "";
            if (selectradio_facmanager == "A") {
              Status = "FLSL007";
            } else if (selectradio_facmanager == "R") {
              Status = "FLSL096";
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
                  title: "Submit Success",
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
                // //navigate("/ApproveFam");
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLSL007") {
            let Status = "";
            

            if (selectradio_acc_check == "A") {
              Status = "FLSL008";
            } else if (selectradio_acc_check == "R") {
              Status = "FLSL097";
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
                const response = await axios.post("/date_certificate", {
                  famno: EditFam,
                  date_cer: certificate_date,
                });
              } catch (error) {
                console.error("Error during login:", error);
              }

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
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLSL008") {
            let Status = "";
            if (selectradio_owner == "A") {
              Status = "FLSL009";
            } else if (selectradio_owner == "R") {
              Status = "FLSL098";
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
                  localStorage.setItem("To", selectpte_input_weight_size);
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
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
                // //navigate("/ApproveFam");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          } else if (For_Rq_Edit[10] === "FLSL009") {
            let Status = "FLSL010";
              let DataFile_Requester = "";
              try {
                const response = await axios.post("/getFAM_FILE_DATA", {
                  FamNo: EditFam,
                  ATT_FROM:'ENV1 SALE'
                });
              const jsonData = await response.data;
              DataFile_Requester = jsonData;
            } catch (error) {
              console.error("Error fetching data:", error);
            }
            if (
              DataFile_Requester == null ||
              DataFile_Requester == [] ||
              DataFile_Requester.length == 0
            ) {
              alert("Please Select File");
              return;
            }
              try {
                const response = await axios.post("/update_submit", {
                  famno: EditFam,
                  sts_submit: Status,
                });
              } catch (error) {
                console.error("Error requesting data:", error);
              }
              try {
                const response = await axios.post(
                  "/update_sale_ws",
                  {
                    tranfer: EditFam,
                    updateinput_ws_cmmt: cmmtradio_pte_weight_size
                   
                  }
                );
                  localStorage.setItem("status_formail", null);
                  localStorage.setItem("To", selectpln_staff_boi);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                Swal.fire({
                  title: "Submit Success",
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
                // //navigate("/ApproveFam");
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            //}
          } else if (For_Rq_Edit[10] === "FLSL010") {
            let Status = "FLSL011";
            let DataFile_Requester = "";
            try {
              const response = await axios.post("/getFAM_FILE_DATA", {
                FamNo: EditFam,
                ATT_FROM:'PLN1 SALE'
              });
              const jsonData = await response.data;
              DataFile_Requester = jsonData;
            } catch (error) {
              console.error("Error fetching data:", error);
            }
            if (
              DataFile_Requester == null ||
              DataFile_Requester == [] ||
              DataFile_Requester.length == 0
            ) {
              alert("Please Select File");
              return;
            }

            try {
              const response = await axios.post("/update_submit", {
                famno: EditFam,
                sts_submit: Status,
              });
            } catch (error) {
              console.error("Error requesting data:", error);
            }
            try {
              const response = await axios.post("/update_sale_pln_staff_boi", {
                tranfer: EditFam,
                updatepln_staff_boi_cmmt: cmmtradio_pte_staff_boi
              });
                localStorage.setItem("status_formail",null);
                localStorage.setItem("To",selectimport_boi_prepare);
                localStorage.setItem("Genno", EditFam);
                localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                localStorage.setItem("Req_by", For_Rq_Edit[2]);
                localStorage.setItem("Status", Status);
              
              Swal.fire({
                title: "Submit Success",
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
           navigate("/FAMsystem/Mail");
            } catch (error) {
              console.error("Error updating submit status:", error.message);
            }
          } else if (For_Rq_Edit[10] === "FLSL011") {
            let Status = "FLSL012";
              let DataFile_Requester = "";
              try {
                const response = await axios.post("/getFAM_FILE_DATA", {
                  FamNo: EditFam,
                  ATT_FROM:'IMP1 SALE'
                });
                const jsonData = await response.data;
                DataFile_Requester = jsonData;
              } catch (error) {
                console.error("Error fetching data:", error);
              }
              if (
                DataFile_Requester == null ||
                DataFile_Requester == [] ||
                DataFile_Requester.length == 0
              ) {
                alert("Please Select File");
                return;
              }
              try {
                const response = await axios.post("/update_submit", {
                  famno: EditFam,
                  sts_submit: Status,
                });
              } catch (error) {
                console.error("Error requesting data:", error);
              }
              try {
                const response = await axios.post("/update_import_boi_prepare", {
                  tranfer: EditFam,
                  updateimport_boi_prepare: cmmtradio_import_boi_prepare
                });

                
                  localStorage.setItem("status_formail", null);
                  localStorage.setItem("To", selectboi_input_data);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                
                Swal.fire({
                  title: "Submit Success",
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
                 //navigate("/ApproveFam");
                 navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            //}

          } else if (For_Rq_Edit[10] === "FLSL012") {
            let Status = "FLSL013";
            let DataFile_Requester = "";
              try {
                const response = await axios.post("/getFAM_FILE_DATA", {
                  FamNo: EditFam,
                  ATT_FROM:'BOI1 SALE'
                });
                const jsonData = await response.data;
                DataFile_Requester = jsonData;
              } catch (error) {
                console.error("Error fetching data:", error);
              }
              if (
                DataFile_Requester == null ||
                DataFile_Requester == [] ||
                DataFile_Requester.length == 0
              ) {
                alert("Please Select File");
                return;
              }
              try {
                const response = await axios.post("/update_submit", {
                  famno: EditFam,
                  sts_submit: Status,
                });
              } catch (error) {
                console.error("Error requesting data:", error);
              }
              try {
                const response = await axios.post("/update_boi_input_data", {
                  tranfer: EditFam,
                  updateboi_input_data: cmmtradio_boi_input_data
                });
                
                  localStorage.setItem("status_formail", null);
                  localStorage.setItem("To", thai_catergories);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
               
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            
          }else if (For_Rq_Edit[10] === "FLSL013") {
            let Status = "FLSL014";
            let DataFile_Requester = "";
            try {
              const response = await axios.post("/getFAM_FILE_DATA", {
                FamNo: EditFam,
                ATT_FROM:'IMP2 SALE'
              });
              const jsonData = await response.data;
              DataFile_Requester = jsonData;
            } catch (error) {
              console.error("Error fetching data:", error);
            }
            if (
              DataFile_Requester == null ||
              DataFile_Requester == [] ||
              DataFile_Requester.length == 0
            ) {
              alert("Please Select File");
              return;
            }
            if (
              Input_thai_categories == "" ||
              Input_thai_categories == null ||
              Input_thai_categories == "null" ||
              Input_thai_categories == "undefined"
            ) {
              alert("Please fill in information (Input thai categories)");
              return;
            }
            
              try {
                const response = await axios.post("/update_submit", {
                  famno: EditFam,
                  sts_submit: Status,
                });
              } catch (error) {
                console.error("Error requesting data:", error);
              }
              try {
                const response = await axios.post("/update_thai_catergorise", {
                  tranfer: EditFam,
                  updatethai_catergorise: cmmtradio_thai_catergories,
                  update_input_thaicatergory: Input_thai_categories
                });
                 
                  localStorage.setItem("status_formail",null);
                  localStorage.setItem("To",pln_staff_bidding );
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
          }else if (For_Rq_Edit[10] === "FLSL014") {
            let Status = "FLSL015";
            let DataFile_Requester = "";
            try {
              const response = await axios.post("/getFAM_FILE_DATA", {
                FamNo: EditFam,
                ATT_FROM:'PLN2 SALE'
              });
              const jsonData = await response.data;
              DataFile_Requester = jsonData;
            } catch (error) {
              console.error("Error fetching data:", error);
            }
            if (
              DataFile_Requester == null ||
              DataFile_Requester == [] ||
              DataFile_Requester.length == 0
            ) {
              alert("Please Select File");
              return;
            }
            if (
              Bidding_result == "" ||
              Bidding_result == null ||
              Bidding_result == "null" ||
              Bidding_result == "undefined"
            ) {
              alert("Please fill in information (Bidding result)");
              return;
            }
              try {
                const response = await axios.post("/update_submit", {
                  famno: EditFam,
                  sts_submit: Status,
                });
              } catch (error) {
                console.error("Error requesting data:", error);
              }
              try {
                const response = await axios.post("/update_pln_bidding", {
                  tranfer: EditFam,
                  pln_bidding: cmmtradio_pln_staff_bidding,
                  pln_bidding_result: Bidding_result
                });
                  localStorage.setItem("status_formail", null);
                  localStorage.setItem("To", pte_dept);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
           // }
          }else if (For_Rq_Edit[10] === "FLSL015") {
            let Status = "FLSL016";
            if (
              contact_date === null ||
              contact_date === undefined ||
              contact_date === "" ||
              contact_date === "null"
            ) {
              setErrorcontact_date(true);
              alert("Please fill in information: Contact Date");
              return;
            } else {
              setErrorcontact_date(false);
            }
            let DataFile_Requester = "";
            try {
              const response = await axios.post("/getFAM_FILE_DATA", {
                FamNo: EditFam,
                ATT_FROM:'ENV2 SALE'
              });
              const jsonData = await response.data;
              DataFile_Requester = jsonData;
            } catch (error) {
              console.error("Error fetching data:", error);
            }
            if (
              DataFile_Requester == null ||
              DataFile_Requester == [] ||
              DataFile_Requester.length == 0
            ) {
              alert("Please Select File");
              return;
            }
            
              try {
                const response = await axios.post("/update_submit", {
                  famno: EditFam,
                  sts_submit: Status,
                });
              } catch (error) {
                console.error("Error requesting data:", error);
              }
              try {
                const response = await axios.post("/update_pte_contact_dept", {
                  tranfer: EditFam,
                  pte_contact_dept: cmmtradio_pte_dept,
                  date_pte_contact_dept: contact_date
                });
                
                  localStorage.setItem("status_formail", null);
                  localStorage.setItem("To", export_clearance);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
           
          }else if (For_Rq_Edit[10] === "FLSL016") {
            let Status = "FLSL017";
            if (
              export_clearance_date === null ||
              export_clearance_date === undefined ||
              export_clearance_date === "" ||
              export_clearance_date === "null"
            ) {
              setErrorexport_clearance_date(true);
              alert("Please fill in information: Clearance date");
              return;
            } else {
              setErrorexport_clearance_date(false);
            }
            let DataFile_Requester = "";
            try {
              const response = await axios.post("/getFAM_FILE_DATA", {
                FamNo: EditFam,
                ATT_FROM:'BOI2 SALE'
              });
              const jsonData = await response.data;
              DataFile_Requester = jsonData;
            } catch (error) {
              console.error("Error fetching data:", error);
            }
            if (
              DataFile_Requester == null ||
              DataFile_Requester == [] ||
              DataFile_Requester.length == 0
            ) {
              alert("Please Select File");
              return;
            }
              try {
                const response = await axios.post("/update_submit", {
                  famno: EditFam,
                  sts_submit: Status,
                });
              } catch (error) {
                console.error("Error requesting data:", error);
              }
              try {
                const response = await axios.post("/update_boi_make_clearance", {
                  tranfer: EditFam,
                  boi_make_clearance: cmmtradio_export_clearance,
                  date_export:export_clearance_date
                });
                  localStorage.setItem("status_formail", null);
                  localStorage.setItem("To", pte_upload_file);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
               
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
           
          }else if (For_Rq_Edit[10] === "FLSL017") {
            let Status = "FLSL018";
            if (
              contact_date_pte === null ||
              contact_date_pte === undefined ||
              contact_date_pte === "" ||
              contact_date_pte === "null"
            ) {
              setErrorcontact_date_pte(true);
              alert("Please fill in information : Contact date ");
              return;
            } else {
              setErrorcontact_date_pte(false);
            }
            let DataFile_Requester = "";
            try {
              const response = await axios.post("/getFAM_FILE_DATA", {
                FamNo: EditFam,
                ATT_FROM:'ENV3 SALE'
              });
              const jsonData = await response.data;
              DataFile_Requester = jsonData;
            } catch (error) {
              console.error("Error fetching data:", error);
            }
            if (
              DataFile_Requester == null ||
              DataFile_Requester == [] ||
              DataFile_Requester.length == 0
            ) {
              alert("Please Select File");
              return;
            }
              try {
                const response = await axios.post("/update_submit", {
                  famno: EditFam,
                  sts_submit: Status,
                });
              } catch (error) {
                console.error("Error requesting data:", error);
              }
              try {
                const response = await axios.post("/update_pte_upload_file_clearance", {
                  tranfer: EditFam,
                  pte_upload_file_clearance: cmmtradio_pte_upload_file,
                  date_pte_upload_file_clearance: contact_date_pte
                });
                  localStorage.setItem("status_formail",null);
                  localStorage.setItem("To", pln_req_inv);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
           
          }else if (For_Rq_Edit[10] === "FLSL018") {
           
            let Status = "FLSL019";
            let DataFile_Requester = "";
            try {
              const response = await axios.post("/getFAM_FILE_DATA", {
                FamNo: EditFam,
                ATT_FROM:'PLN3 SALE'
              });
              const jsonData = await response.data;
              DataFile_Requester = jsonData;
            } catch (error) {
              console.error("Error fetching data:", error);
            }
            if (
              DataFile_Requester == null ||
              DataFile_Requester == [] ||
              DataFile_Requester.length == 0
            ) {
              alert("Please Select File");
              return;
            }
            if (
              sale_date === null ||
              sale_date === undefined ||
              sale_date === "" ||
              sale_date === "null"
            ) {
              setErrSale_date(true);
              alert("Please fill in information: Sale Date");
              return;
            } else {
              setErrSale_date(false);
            }
        
              try {
                const response = await axios.post("/update_submit", {
                  famno: EditFam,
                  sts_submit: Status,
                });
              } catch (error) {
                console.error("Error requesting data:", error);
              }
              try {
                const response = await axios.post("/update_pln_request_invoice", {
                  tranfer: EditFam,
                  pln_request_invoice: cmmtradio_pln_req_inv,
                  date_sale:sale_date
                });
                  localStorage.setItem( "status_formail",null );
                  localStorage.setItem("To",  ship_input_inv);
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
           
          }else if (For_Rq_Edit[10] === "FLSL019") {
            let Status = "FLSL020";
            let DataFile_Requester = "";
            try {
              const response = await axios.post("/getFAM_FILE_DATA", {
                FamNo: EditFam,
                ATT_FROM:'SHP CHECK'
              });
              const jsonData = await response.data;
              DataFile_Requester = jsonData;
            } catch (error) {
              console.error("Error fetching data:", error);
            }
            if (
              DataFile_Requester == null ||
              DataFile_Requester == [] ||
              DataFile_Requester.length == 0
            ) {
              alert("Please Select File");
              return;
            }
        
              try {
                const response = await axios.post("/update_submit", {
                  famno: EditFam,
                  sts_submit: Status,
                });
              } catch (error) {
                console.error("Error requesting data:", error);
              }
              try {
                const response = await axios.post("/update_shipping_inv", {
                  tranfer: EditFam,
                  updateshipping_inv: cmmtradio_ship_input_inv
                });
                  localStorage.setItem("status_formail",null);
                  localStorage.setItem("To", pln_upload_final);
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
           
          }else if (For_Rq_Edit[10] === "FLSL020") {
            let Status = "FLSL021";
            if (
              Vendor_move_date === null ||
              Vendor_move_date === undefined ||
              Vendor_move_date === "" ||
              Vendor_move_date === "null"
            ) {
              setErrorVendor_move_date(true);
              alert("Please fill in information : Vendor move date ");
              return;
            } else {
              setErrorVendor_move_date(false);
            }
            let DataFile_Requester = "";
            try {
              const response = await axios.post("/getFAM_FILE_DATA", {
                FamNo: EditFam,
                ATT_FROM:'PLN4 SALE'
              });
              const jsonData = await response.data;
              DataFile_Requester = jsonData;
            } catch (error) {
              console.error("Error fetching data:", error);
            }
            if (
              DataFile_Requester == null ||
              DataFile_Requester == [] ||
              DataFile_Requester.length == 0
            ) {
              alert("Please Select File");
              return;
            }
        
              try {
                const response = await axios.post("/update_submit", {
                  famno: EditFam,
                  sts_submit: Status,
                });
              } catch (error) {
                console.error("Error requesting data:", error);
              }
              try {
                const response = await axios.post("/update_pln_upload_final", {
                  tranfer: EditFam,
                  pln_upload_final: cmmtradio_pln_upload_final,
                  move_date:Vendor_move_date
                });

                if (selectradio_acc_manager != "R") {
                  localStorage.setItem(
                    "status_formail",
                    selectradio_acc_manager
                  );
                  localStorage.setItem("To", text_acc_check);
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
                    selectacc_manager,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
           
          }else if (For_Rq_Edit[10] === "FLSL021") {
            let Status = "";
            if (selectradio_record == "A") {
              Status = "FLSL022";
            } else if (selectradio_record == "R") {
              Status = "FLSL921";
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
                    selectpte_input_weight_size,
                    selectpln_staff_boi,
                    selectimport_boi_prepare,
                    selectboi_input_data,
                    thai_catergories,
                    pln_staff_bidding,
                    pte_dept,
                    export_clearance,
                    pte_upload_file,
                    pln_req_inv,
                    ship_input_inv,
                    pln_upload_final
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          }else if (For_Rq_Edit[10] === "FLSL022") {
            let Status = "";
            if (selectradio_acc_manager == "A") {
              Status = "FLSL023";
            } else if (selectradio_acc_manager == "R") {
              Status = "FLSL922";
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
                  localStorage.setItem("To",selectservice_by );
                  localStorage.setItem("Genno", EditFam);
                  localStorage.setItem("Req_Type", For_Rq_Edit[7]);
                  localStorage.setItem("Req_by", For_Rq_Edit[2]);
                  localStorage.setItem("Status", Status);
                } else {
                  localStorage.setItem("status_formail", selectradio_acc_manager);
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
                    selectpte_input_weight_size,
                    selectpln_staff_boi,
                    selectimport_boi_prepare,
                    selectboi_input_data,
                    thai_catergories,
                    pln_staff_bidding,
                    pte_dept,
                    export_clearance,
                    pte_upload_file,
                    pln_req_inv,
                    ship_input_inv,
                    pln_upload_final,
                    text_acc_check
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
              } catch (error) {
                console.error("Error updating submit status:", error.message);
              }
            }
          }else if (For_Rq_Edit[10] === "FLSL023") {
            let Status = "";
            if (selectradio_service_close_by == "A") {
              Status = "FLSL024";
            } else if (selectradio_service_close_by == "R") {
              Status = "FLSL923";
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
                    selectpte_input_weight_size,
                    selectpln_staff_boi,
                    selectimport_boi_prepare,
                    selectboi_input_data,
                    thai_catergories,
                    pln_staff_bidding,
                    pte_dept,
                    export_clearance,
                    pte_upload_file,
                    pln_req_inv,
                    ship_input_inv,
                    pln_upload_final,
                    text_acc_check,
                    selectacc_manager,
                  ];
                  const sentdata = JSON.stringify(Approver);
                  localStorage.setItem("Approver_formail", sentdata);
                }
                Swal.fire({
                  title: "Submit Success",
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
                navigate("/FAMsystem/Mail");
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

          navigate("/FAMsystem/ForRe", ErrorTel_Req);
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
          navigate("/FAMsystem/ForRe");
          return;
        }
        if (
          For_Req[15] === null ||
          For_Req[15] === undefined ||
          For_Req[15] === "" ||
          For_Req[15] === "null"
        ) {
          alert("Please fill in information: Request Owner");
          navigate("/FAMsystem/ForRe");
          return;
        }
        if (
          For_Req[17] === null ||
          For_Req[17] === undefined ||
          For_Req[17] === "" ||
          For_Req[17] === "null"
        ) {
          alert("Please fill in information: Owner Tel");
          navigate("/FAMsystem/ForRe");
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
          selectpte_input_weight_size === null ||
          selectpte_input_weight_size === undefined ||
          selectpte_input_weight_size === "" ||
          selectpte_input_weight_size === "null"
        ) {
          alert("Please fill in information: PTE (ENV) input weight/size");
          setErrorPTE_INPUT_WS(true);
          return;
        } else {
          setErrorPTE_INPUT_WS(false);
        }
        if (
          selectpln_staff_boi === null ||
          selectpln_staff_boi === undefined ||
          selectpln_staff_boi === "" ||
          selectpln_staff_boi === "null"
        ) {
          alert("Please fill in information: PLN Staff contact BOI ");
          setErrorPLN_Staff_BOI(true);
          return;
        } else {
          setErrorPLN_Staff_BOI(false);
        }
        if (
          selectimport_boi_prepare === null ||
          selectimport_boi_prepare === undefined ||
          selectimport_boi_prepare === "" ||
          selectimport_boi_prepare === "null"
        ) {
          alert("Please fill in information: Import & BOI prepare  ");
          setErrorimport_boi_prepare(true);
          return;
        } else {
          setErrorimport_boi_prepare(false);
        }
        if (
          selectboi_input_data === null ||
          selectboi_input_data === undefined ||
          selectboi_input_data === "" ||
          selectboi_input_data === "null"
        ) {
          alert("Please fill in information: BOI Input data Import  ");
          setErrorboi_input_data(true);
          return;
        } else {
          setErrorboi_input_data(false);
        }
        if (
          ship_input_inv === null ||
          ship_input_inv === undefined ||
          ship_input_inv === "" ||
          ship_input_inv === "null"
        ) {
          alert("Please fill in information: Shipping Staff input invoice no ");
          setErrorship_input_inv(true);
          return;
        } else {
          setErrorship_input_inv(false);
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
        if (For_Req[10] === "FLSL001") {
          let Status = "FLSL002";
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

          try {
            const response = await axios.post("/insert_sale", {
             
              famno: For_Req[0],
              createinput_ws:selectpte_input_weight_size, 
              create_plnboi:selectpln_staff_boi, 
              createboi_prerare:selectimport_boi_prepare, 
              createdata_import:selectboi_input_data,
              createthai_catergories:thai_catergories,
              createbidding:pln_staff_bidding,
              createindustrial:pte_dept,
              createclerance:export_clearance,
              create_upload_file_after:pte_upload_file,
              createreq_inv:pln_req_inv,
              createinput_in:ship_input_inv,
              createpayment:pln_upload_final,
              create_by:For_Req[1],
            });
          } catch (error) {
            console.error("Error insert_sale:", error);
          }
          localStorage.setItem("To", selectdepartment_mana);
          localStorage.setItem("Genno", For_Req[0]);
          localStorage.setItem("Req_Type", For_Req[6]);
          localStorage.setItem("Req_by", For_Req[1]);
          localStorage.setItem("Status", Status);
          navigate("/FAMsystem/Mail");
          Swal.fire({
            title: "Submit Success",
            icon: "success",
          });
        }
      }
    }
    closePopupLoadding();
  };
  // ปุ่ม Reset
  const Reset = async () => {
    if (EditFam !== null) {
      if (STS1 == "" || STS1 == "FLTR001" || For_sts_reject == "R" || STS1 == "FLLS001" || STS1 == "FLWO001" || STS1 == "FLSC001" || STS1 == "FLDN001" || STS1 == "FLLD001"|| STS1 == "FLSL001"  ) {
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
        setreturn_selectacc_manager([]);
        setselectpte_env([]);
        setselectpln_staff([]);
        setselectshipping_staff([]);
        setselectpte_input_weight_size([]);
        setselectpln_staff_boi([]);
        setselectimport_boi_prepare([]);
        setselectboi_input_data([]);
        setthai_catergories("");
        setpln_staff_bidding("");
        setpte_dept("");
        setexport_clearance("");
        setpte_upload_file("");
        setpln_req_inv("");
        setship_input_inv([]);
        setpln_upload_final("");

      
      }
      if (STS1 == "FLTR002" || STS1 == "FLWO002" || STS1 == "FLLS002" || STS1 == "FLSC002" || STS1 == "FLDN002" || STS1 == "FLLD002"|| STS1 == "FLSL002" ) {
        setselectradio_dept("A");
        setcmmtradio_dept("");
      }
      if (STS1 == "FLTR003" || STS1 == "FLWO003" || STS1 == "FLLS003" || STS1 == "FLSC003" || STS1 == "FLDN003" || STS1 == "FLLD003"|| STS1 == "FLSL003") {
        setselectradio_serviceby("A");
        setcmmtradio_serviceby("");
      }
      if (STS1 == "FLTR004" || STS1 == "FLWO004" || STS1 == "FLLS004" || STS1 == "FLSC004" || STS1 == "FLDN004" || STS1 == "FLLD004" || STS1 == "FLSL004") {
        setselectradio_boistaff("A");
        setcmmtradio_boistaff("");
      }
      if (STS1 == "FLTR005"|| STS1 == "FLWO005" || STS1 == "FLLS005" || STS1 == "FLSC005" || STS1 == "FLDN005" || STS1 == "FLLD005" || STS1 == "FLSL005") {
        setselectradio_boimanager("A");
        setcmmtradio_boimanager("");
      }
      if (STS1 == "FLTR006"|| STS1 == "FLWO006" || STS1 == "FLLS006" || STS1 == "FLSC006" || STS1 == "FLDN006" || STS1 == "FLLD006" || STS1 == "FLSL006") {
        setselectradio_facmanager("A");
        setcmmtradio_facmanager("");
      }
      if (STS1 == "FLTR007"|| STS1 == "FLWO007" || STS1 == "FLLS007" || STS1 == "FLSC007" || STS1 == "FLDN007" || STS1 == "FLLD007" || STS1 == "FLSL007") {
        setselectradio_acc_check("A");
        setcmmtradio_acc_check("");
      }
      if (STS1 == "FLTR008"|| STS1 == "FLWO008" || STS1 == "FLLS008" || STS1 == "FLSC008" || STS1 == "FLDN008" || STS1 == "FLLD008" || STS1 == "FLSL008") {
        setselectradio_owner("A");
        setcmmtradio_owner("");
      }
      if (STS1 == "FLTR009") {
        setselectradio_receiver("A");
        setcmmtradio_receiver("");
      }
      if (STS1 == "FLSL009") {
        setcmmtradio_pte_weight_size("");
      }
      if (STS1 == "FLSL010") {
        setcmmtradio_pte_staff_boi("");
      }
      if (STS1 == "FLSL011") {
        setcmmtradio_import_boi_prepare("");
      }
      if (STS1 == "FLSL012") {
        setcmmtradio_boi_input_data("");
      }
      if (STS1 == "FLSL013") {
        setInput_thai_categories("");
        setcmmtradio_thai_catergories("");
      }
      if (STS1 == "FLSL014") {
        setBidding_result("");
        setcmmtradio_pln_staff_bidding("");
      }
      if (STS1 == "FLSL015") {
        setcontact_date("");
        setcmmtradio_pte_dept("");
      }
      if (STS1 == "FLSL016") {
        setcmmtradio_export_clearance("");
      }
      if (STS1 == "FLSL017") {
        setcontact_date_pte("");
        setcmmtradio_pte_upload_file("");
      }
      if (STS1 == "FLSL018") {
        setsale_date("")
        setcmmtradio_pln_req_inv("");
      }
      if (STS1 == "FLSL019") {
        setcmmtradio_ship_input_inv("");
      }
      if (STS1 == "FLSL020") {
        setVendor_move_date("");
        setcmmtradio_pln_upload_final("");
      }
      if (STS1 == "FLSC009") {
        setcmmtradio_pte_env("");
      }
      if (STS1 == "FLSC100") {
        setcmmtradio_pln_staff("");
      }
      if (STS1 == "FLSC101") {
        setcmmtradio__shipping("");
      }
      if (STS1 == "FLLD009") {
        setreturn_date("");
        setcmmtradio_return_acc("");
      }
      if (STS1 == "FLLD100") {
        setcmmtradio_return_own("");
      }
      if (STS1 == "FLTR010" || STS1 == "FLWO010" || STS1 == "FLLS010" || STS1 == "FLSC010" || STS1 == "FLDN010" || STS1 == "FLLD010" || STS1 == "FLSL021") {
        setselectradio_record("A");
        setcmmtradio_record("");
      }
      if (STS1 == "FLTR011"|| STS1 == "FLWO011" || STS1 == "FLLS011" || STS1 == "FLSC011" || STS1 == "FLDN011" || STS1 == "FLLD011" || STS1 == "FLSL022") {
        setselectradio_acc_manager("A");
        setcmmtradio_acc_manager("");
      }
      if (STS1 == "FLTR012"|| STS1 == "FLWO012" || STS1 == "FLLS012" || STS1 == "FLSC012" || STS1 == "FLDN012" || STS1 == "FLLD012" || STS1 == "FLSL023") {
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
      setreturn_selectacc_manager([]);
      setselectpte_env([]);
      setselectpln_staff([]);
      setselectshipping_staff([]);
      setselectpte_input_weight_size([]);
      setselectpln_staff_boi([]);
      setselectimport_boi_prepare([]);
      setselectboi_input_data([]);
      setthai_catergories("");
      setpln_staff_bidding("");
      setpte_dept("");
      setexport_clearance("");
      setpte_upload_file("");
      setpln_req_inv("");
      setship_input_inv([]);
      setpln_upload_final("");
      
    
    }
  };

  const FactoryCC = async () => {
    try {
      const response = await axios.get(`/getfactory`);
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
      setboi_input_data(data);
      if (EditFam != null) {
        if (For_Edit_Rou != null) {
          setselectboi_manager(For_Edit_Rou[0][12]);
          if(Edit_For_Sale.length >0){
            setselectboi_input_data(Edit_For_Sale[0][10])
          }
          
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
          if(Edit_For_Lending.length > 0){
            setreturn_selectacc_manager(Edit_For_Lending[0][1]);
          }
          
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
  // Scrap PTE_ENV
  const PTE_ENV = async () => {
    let level = "";
    if (EditFam != null) {
      if (For_edit_trans != null) {
        level = For_Rq_Edit[14];
      }
    } else {
      level = For_Req[3];
    }
    try {
      const response = await axios.post("/pte_env_data", {
        fac: level,
      });
      const data = response.data.flat();
      setpte_env(data);
      setpte_input_weight_size(data);

      if (EditFam != null) { 
        
        if (Edit_For_Scrap.length >0 ) {
          setselectpte_env(Edit_For_Scrap[0][1]);
        }else if(Edit_For_Sale.length >0 ){
          setselectpte_input_weight_size(Edit_For_Sale[0][1])
          setpte_dept(Edit_For_Sale[0][21])
          setexport_clearance(Edit_For_Sale[0][25])
          setpte_upload_file(Edit_For_Sale[0][29])
        }
      } else {
        if (For_Req != null) {
          setselectpte_env(For_Rou[10]);
        } else {
          setselectpte_env("");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const PLN_staff = async () => {
    let level = "";
    if (EditFam != null) {
      if (For_edit_trans != null) {
        level = For_Rq_Edit[14];
      }
    } else {
      level = For_Req[3];
    }
    try {
      const response = await axios.post("/pln_staff_data", {
        fac: level,
      });
      const data = response.data.flat();
      setpln_staff(data);
      setpln_staff_boi(data);

      if (EditFam != null) {
        if (Edit_For_Scrap.length >0) {
          setselectpln_staff(Edit_For_Scrap[0][4]);
        }else if (Edit_For_Sale.length >0){
          setselectpln_staff_boi(Edit_For_Sale[0][4])
          setpln_staff_bidding(Edit_For_Sale[0][17])
          setpln_req_inv(Edit_For_Sale[0][33])
          setpln_upload_final(Edit_For_Sale[0][39])
        }
      } else {
        if (For_Req != null) {
          setselectpln_staff(For_Rou[10]);
        } else {
          setselectpln_staff("");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const Shipping = async () => {
    let level = "";
    if (EditFam != null) {
      if (For_edit_trans != null) {
        level = For_Rq_Edit[14];
      }
    } else {
      level = For_Req[3];
    }
    try {
      const response = await axios.post("/shipping_data", {
        fac: level,
      });
      const data = response.data.flat();
      setshipping_staff(data);

      if (EditFam != null) {
        if (Edit_For_Scrap.length >0) {
          setselectshipping_staff(Edit_For_Scrap[0][7]);
        }else if(Edit_For_Sale.length >0) {
          setship_input_inv(Edit_For_Sale[0][36])
        }
      } else {
        if (For_Req != null) {
          setselectshipping_staff(For_Rou[10]);
        } else {
          setselectshipping_staff("");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const Import_boi = async () => {
    let level = "";
    if (EditFam != null) {
      if (For_edit_trans != null) {
        level = For_Rq_Edit[14];
      }
    } else {
      level = For_Req[3];
    }
    try {
      const response = await axios.post("/import_boi", {
        fac: level,
      });
      const data = response.data.flat();
      setimport_boi_prepare(data);

      if (EditFam != null) {
        if (Edit_For_Sale.length > 0) {
          setselectimport_boi_prepare(Edit_For_Sale[0][7]);
          setthai_catergories(Edit_For_Sale[0][13])
        }
      } else {
        if (For_Req != null) {
        } else {
          setselectimport_boi_prepare("");
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
    STS1,setSTS1,For_sts_reject,setFor_sts_reject,ownersend,setownersend,trans_factory,settrans_factory,selecttrans_factory,
    setselecttrans_factory,trans_cc,settrans_cc,selecttrans_cc,setselecttrans_cc,datanew_boi,setdatanew_boi,new_boi,setnew_boi,
    data_fromboi,setdata_fromboi,new_owner,setnew_owner,selectnew_owner,setselectnew_owner,receiver,setreceiver,sts,setsts,abnormal,
    setabnormal,Tel_for_trans,setTel_for_trans, plan_date,setplan_date,department_mana,setdepartment_mana,
    selectdepartment_mana, setselectdepartment_mana,service_dept,setservice_dept,service_by,setservice_by,
    selectservice_by,setselectservice_by,boi_staff,setboi_staff,selectboi_staff,setselectboi_staff, boi_manager,setboi_manager,
    selectboi_manager,setselectboi_manager,
    fac_manager,
    setfac_manager,
    selectfac_manager,
    setselectfac_manager,
    acc_check,
    setacc_check,
    selectacc_check,
    setselectacc_check,
    text_acc_check,
    settext_acc_check,
    owner_roting,
    setowner_roting,
    acc_manager,
    setacc_manager,
    selectacc_manager,
    setselectacc_manager,
    Tel_service,
    setTel_service,
    CheckSubmit,
    setCheckSubmit,
    CheckSave,
    setCheckSave,
    FactoryCC,
    TransCC,
    Department_Mana,
    Service_By,
    BOI_Staff,
    BOI_Manager,
    Fac_manager,
    ACC_Check,
    ACC_Manager,
    EditFam,
    User,
    View,
    navigate,
    For_Req,
    For_Fix,
    For_Trans,
    For_Rou,
    For_edit_trans,
    For_Rq_Edit,
    For_Edit_Rou,
    edit_New_BOI,
    ErrorTel,
    ErrorFac,
    ErrorCC,
    ErrorNewOwn,
    ErrorManager,
    ErrorService_by,
    ErrorBoi_Staff,
    ErrorBoi_manager,
    ErrorMana_Fac,
    ErrorAcc_check,
    ErrorAcc_Mana,
    ErrorTel_service,
    ErrorDate,
    ErrorTel_Rq,
    ErrorDept,
    ErrNewboi,
    isPopupOpenLoadding,
    closePopupLoadding,
    selectradio_dept,
    setselectradio_dept,
    selectradio_serviceby,
    setselectradio_serviceby,
    selectradio_boistaff,
    setselectradio_boistaff,
    selectradio_boimanager,
    setselectradio_boimanager,
    selectradio_facmanager,
    setselectradio_facmanager,
    selectradio_acc_check,
    setselectradio_acc_check,
    selectradio_owner,
    selectradio_receiver,
    selectradio_record,
    selectradio_acc_manager,
    selectradio_service_close_by,
    cmmtradio_dept,
    cmmtradio_serviceby,
    cmmtradio_boistaff,
    cmmtradio_boimanager,
    cmmtradio_facmanager,
    cmmtradio_acc_check,
    cmmtradio_owner,
    cmmtradio_receiver,
    cmmtradio_record,
    cmmtradio_acc_manager,
    cmmtradio_service_close_by,
    action_dept,
    action__serviceby,
    action__boistaff,
    action__boimanager,
    action__facmanager,
    action__acc_check,
    action__owner,
    action__receiver,
    action__record,
    action__acc_manager,
    action__service_close_by,
    read_trans_fac,
    read_trans_cc,
    read_tel,
    read_plan_date,
    read_newowner,
    read_dept,
    read_dept_radio,
    read_dept_cmmt,
    read_serviceby,
    read_serviceby_radio,
    read_serviceby_cmmt,
    read_boistff,
    read_boistff_radio,
    read_boistff_cmmt,
    read_boimana,
    read_boimana_radio,
    read_boimana_cmmt,
    read_fac_mana,
    read_fac_mana_radio,
    read_fac_mana_cmmt,
    read_accchk,
    read_accchk_radio,
    read_accchk_cmmt,
    read_owner_radio,
    read_owner_cmmt,
    read_receive_radio,
    read_receive_cmmt,
    read_record_radio,
    read_record_cmmt,
    read_acc_mana,
    read_acc_mana_radio,
    read_acc_mana_cmmt,
    read_close_radio,
    read_close_cmmt,
    checkrdo,
    chkservice_by,
    chkboistaff,
    chkboimanager,
    chkfacmanager,
    chkacc_check,
    chkowner,
    chkreceiver,
    chkacc_record,
    chkacc_manager,
    chkservice_close,
    CM_DepartmentManager,
    CM_service_by,
    CM_boistaff,
    CM_boimanager,
    CM_facmanager,
    CM_acc_check,
    CM_owner,
    CM_receiver,
    CM_acc_record,
    CM_acc_manager,
    CM_service_close,
    handleFactoryCC,
    SAVE,
    SUBMIT,
    Reset,
    Back_page,
    handleNew_BOI,
    handleNewOwner,
    handleNewboi_proj,
    Showtype,
    setselectradio_owner,
    setselectradio_receiver,
    setselectradio_record,
    setselectradio_acc_manager,
    setselectradio_service_close_by,
    setcmmtradio_dept,
    setcmmtradio_serviceby,
    setcmmtradio_boistaff,
    setcmmtradio_boimanager,
    setcmmtradio_facmanager,
    setcmmtradio_acc_check,
    setcmmtradio_owner,
    setcmmtradio_receiver,
    setcmmtradio_record,
    setcmmtradio_acc_manager,
    setcmmtradio_service_close_by,
    setaction__dept,
    setaction__serviceby,
    setaction__boistaff,
    setaction__boimanager,
    setaction__facmanager,
    setaction__acc_check,
    setaction__owner,
    setaction__receiver,
    setaction__record,
    setaction__acc_manager,
    setaction__service_close_by,
    certificate_date,
    setcertificate_date,
    return_date,
    setreturn_date,
    return_acc_manager,
    setreturn_acc_manager,
    return_selectacc_manager,
    setreturn_selectacc_manager,
    req_return,
    setreq_return,
    chkreturn_acc,
    chkreturn_owner,
    CM_return_acc,
    CM_return_owner,
    chk_cer_date,
    read_return_acc_cmmt,
    read_return_own_cmmt,
    action__return_acc,
    setaction__return_acc,
    action__return_own,
    setaction__return_own,
    read_return_acc_radio,
    setReadReturnACCRadio,
    read_return_own_radio,
    setReadReturnOwnRadio,
    selectradio_return_acc,
    setselectradio_return_acc,
    selectradio_return_own,
    setselectradio_return_own,
    read_return_acc,
    read_return_own,
    cmmtradio_return_acc,
    setcmmtradio_return_acc,
    cmmtradio_return_own,
    setcmmtradio_return_own,
    ErrorACCReturn,
    ErrorDate_Certificate,
    ErrorDate_return,
    pte_env,
    selectpte_env,
    setselectpte_env,
    pln_staff,
    selectpln_staff,
    setselectpln_staff,
    shipping_staff,
    selectshipping_staff,
    setselectshipping_staff,
    ErrorPTE_ENV,
    ErrorPLN_Staff,
    ErrorShipping,
    cmmtradio_pte_env,
    cmmtradio_pln_staff,
    cmmtradio_shipping,
    action__pte_env,
    action__pln_staff,
    action__shipping,
    read_pte_env_radio,
    read_pte_env_cmmt,
    read_pln_staff_radio,
    read_pln_staff_cmmt,
    read_shipping_radio,
    read_shipping_cmmt,
    chkpte_env,
    chkpln_staff,
    chkshipping,
    setaction__pte_env,
    setcmmtradio_pte_env,
    setaction__pln_staff,
    setaction__shipping,
    read_shipping,
    read_pln_staff,
    read_pte_env,
    CM_pte_env,
    CM_pln_staff,
    CM_shipping,setcmmtradio_pln_staff,setcmmtradio__shipping,pte_input_weight_size, setpte_input_weight_size,
    selectpte_input_weight_size,setselectpte_input_weight_size,selectpln_staff_boi,setpln_staff_boi,
    selectboi_input_data,setselectboi_input_data,
    pln_staff_boi, setpln_staff_boi,
    selectpln_staff_boi, setselectpln_staff_boi,
    import_boi_prepare, setimport_boi_prepare,
    selectimport_boi_prepare, setselectimport_boi_prepare,
    boi_input_data, setboi_input_data,
    thai_catergories, setthai_catergories,
    pln_staff_bidding, setpln_staff_bidding,
    pte_dept, setpte_dept,
    pln_req_inv, setpln_req_inv,
    ship_input_inv, setship_input_inv,
    pln_upload_final, setpln_upload_final,
    export_clearance, setexport_clearance,pte_upload_file, setpte_upload_file,
    read_pte_input_weight_size,
    read_pte_input_weight_size_cmmt,
    read_pte_staff_boi,
    read_pte_staff_boi_cmmt,
    read_import_boi_prepare,
    read_import_boi_prepare_cmmt,
    read_boi_input_data,
    read_boi_input_data_cmmt,
    read_thai_catergories,
    read_thai_catergories_cmmt,
    read_pln_staff_bidding,
    read_pln_staff_bidding_cmmt,
    read_pte_dept,
    read_pte_dept_cmmt,
    read_export_clearance,
    read_export_clearance_cmmt,
    read_pte_upload_file,
    read_pte_upload_file_cmmt,
    read_pln_req_inv,
    read_pln_req_inv_cmmt,
    read_ship_input_inv,
    read_ship_input_inv_cmmt,
    read_pln_upload_final,
    read_pln_upload_final_cmmt,
    ErrorPTE_INPUT_WS,ErrorPLN_Staff_BOI,Errorimport_boi_prepare,Errorboi_input_data,ErrorVendor_move_date,Errorcontact_date_pte,Errorcontact_date,
    cmmtradio_pte_weight_size, setcmmtradio_pte_weight_size,
    cmmtradio_pte_staff_boi, setcmmtradio_pte_staff_boi,
    cmmtradio_import_boi_prepare, setcmmtradio_import_boi_prepare,
    cmmtradio_boi_input_data, setcmmtradio_boi_input_data,
    cmmtradio_thai_catergories, setcmmtradio_thai_catergories,
    cmmtradio_pln_staff_bidding, setcmmtradio_pln_staff_bidding,
    cmmtradio_pte_dept, setcmmtradio_pte_dept,
    cmmtradio_export_clearance, setcmmtradio_export_clearance,
    cmmtradio_pte_upload_file, setcmmtradio_pte_upload_file,
    cmmtradio_pln_req_inv, setcmmtradio_pln_req_inv,
    cmmtradio_ship_input_inv, setcmmtradio_ship_input_inv,
    cmmtradio_pln_upload_final, setcmmtradio_pln_upload_final,
    CM_pte_weight_size,CM_pte_staff_boi,CM_import_boi_prepare,CM_boi_input_data,CM_thai_catergories,
    CM_pln_staff_bidding,CM_pte_dept,CM_export_clearance,CM_pte_upload_file,CM_pln_req_inv,CM_ship_input_inv,
    CM_pln_upload_final,export_clearance_date,setexport_clearance_date,Errorexport_clearance_date,action__pte_weight_size, setaction__pte_weight_size,
    action__pte_staff_boi, setaction__pte_staff_boi,
    action__import_boi_prepare, setaction__import_boi_prepare,
    action__boi_input_data, setaction__boi_input_data,
    action__thai_catergories, setaction__thai_catergories,
    action__pln_staff_bidding, setaction__pln_staff_bidding,
    action__pte_dept, setaction__pte_dept,
    action__export_clearance, setaction__export_clearance,
    action__pte_upload_file, setaction__pte_upload_file,
    action__pln_req_inv, setaction__pln_req_inv,
    action__ship_input_inv, setaction__ship_input_inv,
    action__pln_upload_final, setaction__pln_upload_final,
    chk_pte_weight_size,
    chk_pte_staff_boi, 
    chk_import_boi_prepare, 
    chk_boi_input_data, 
    chk_thai_catergories,
    chk_pln_staff_bidding, 
    chk_pte_dept, 
    chk_export_clearance,
    chk_pte_upload_file, 
    chk_pln_req_inv, 
    chk_ship_input_inv, 
    chk_pln_upload_final,Errorship_input_inv
    ,Input_thai_categories, setInput_thai_categories,Bidding_result, setBidding_result,
    contact_date,setcontact_date,contact_date_pte,contact_date_pte,setcontact_date_pte,Vendor_move_date,setVendor_move_date,
    scrap_date , setscrap_date,ErrScp_date,sale_date,setsale_date,ErrSale_date
  };
}

export { FAM_TRANSECTION_TLWLD };
