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
  Autocomplete,
  FormHelperText,
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
} from "@mui/material";
import Header from "../Page/Hearder";
import PageLoadding from "../Loadding/Pageload";
import {
  LoadingOutlined,
  FilePdfOutlined,
  DeleteOutlined,
  FileTextOutlined,
  FileExcelOutlined,
  FileWordOutlined,
  FileUnknownOutlined,
  CloudUploadOutlined,
} from "@ant-design/icons";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import { Empty } from "antd";
import { FAM_TRANSECTION_TLWLD } from "../Function/FN_TRANSECTION_ALL/FAM_TRANSECTION_TLWLD";
import { FAM_GET_REQUEST } from "../Function/FN_TRANSECTION_ALL/FAM_GET_REQUEST";
import { FAM_GET_SHOW_FILE } from "../Function/FN_TRANSECTION_ALL/FAM_GET_SHOW_FILE";
import "../Page/Style.css";

function TransFerDetail() {
  const {
    STS1,
    For_sts_reject,
    ownersend,
    setownersend,
    trans_factory,
    selecttrans_factory,
    trans_cc,
    selecttrans_cc,
    setselecttrans_cc,
    datanew_boi,
    new_boi,
    setnew_boi,
    data_fromboi,
    setdata_fromboi,
    new_owner,
    selectnew_owner,
    receiver,
    setreceiver,
    abnormal,
    setabnormal,
    Tel_for_trans,
    setTel_for_trans,
    plan_date,
    setplan_date,
    department_mana,
    selectdepartment_mana,
    setselectdepartment_mana,
    service_dept,
    setservice_dept,
    service_by,
    selectservice_by,
    setselectservice_by,
    boi_staff,
    selectboi_staff,
    setselectboi_staff,
    boi_manager,
    selectboi_manager,
    setselectboi_manager,
    fac_manager,
    selectfac_manager,
    setselectfac_manager,
    acc_check,
    selectacc_check,
    setselectacc_check,
    text_acc_check,
    settext_acc_check,
    owner_roting,
    setowner_roting,
    acc_manager,
    selectacc_manager,
    setselectacc_manager,
    Tel_service,
    setTel_service,
    CheckSubmit,
    CheckSave,
    EditFam,
    For_Req,
    For_edit_trans,
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
    return_selectacc_manager,
    setreturn_selectacc_manager,
    req_return,
    setreq_return,
    chkreturn_acc,
    chkreturn_owner,
    CM_return_acc,
    CM_return_owner,
    read_return_acc_cmmt,
    read_return_own_cmmt,
    action__return_acc,
    setaction__return_acc,
    action__return_own,
    read_return_acc_radio,
    selectradio_return_acc,
    setselectradio_return_acc,
    cmmtradio_return_acc,
    setcmmtradio_return_acc,
    cmmtradio_return_own,
    setcmmtradio_return_own,
    read_return_acc,
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
    read_pte_env_cmmt,
    read_pln_staff_cmmt,
    read_shipping_cmmt,
    chkpte_env,
    chkpln_staff,
    chkshipping,
    CM_pte_env,
    CM_pln_staff,
    CM_shipping,
    read_pte_env,
    read_pln_staff,
    read_shipping,
    setaction__pte,
    setaction__pln_staff,
    setaction__shipping,
    CM_shipping_env,
    setcmmtradio_pte_env,
    setaction__pte_env,
    setcmmtradio_pln_staff,
    setcmmtradio__shipping,
    pte_input_weight_size,
    pln_staff_boi,
    setselectpln_staff_boi,
    import_boi_prepare,
    boi_input_data,
    setboi_input_data,
    thai_catergories,
    setthai_catergories,
    pln_staff_bidding,
    setpln_staff_bidding,
    pte_dept,
    setpte_dept,
    pln_req_inv,
    setpln_req_inv,
    ship_input_inv,
    setship_input_inv,
    pln_upload_final,
    setpln_upload_final,
    selectpte_input_weight_size,
    setselectpte_input_weight_size,
    selectpln_staff_boi,
    setpln_staff_boi,
    selectimport_boi_prepare,
    setselectimport_boi_prepare,
    selectboi_input_data,
    setselectboi_input_data,
    export_clearance,
    setexport_clearance,
    pte_upload_file,
    setpte_upload_file,
    read_pte_input_weight_size,
    read_pte_input_weight_size_radio,
    read_pte_input_weight_size_cmmt,
    read_pte_staff_boi,
    read_pte_staff_boi_radio,
    read_pte_staff_boi_cmmt,
    read_import_boi_prepare,
    read_import_boi_prepare_radio,
    read_import_boi_prepare_cmmt,
    read_boi_input_data,
    read_boi_input_data_radio,
    read_boi_input_data_cmmt,
    read_thai_catergories,
    read_thai_catergories_radio,
    read_thai_catergories_cmmt,
    read_pln_staff_bidding,
    read_pln_staff_bidding_radio,
    read_pln_staff_bidding_cmmt,
    read_pte_dept,
    read_pte_dept_radio,
    read_pte_dept_cmmt,
    read_export_clearance,
    read_export_clearance_radio,
    read_export_clearance_cmmt,
    read_pte_upload_file,
    read_pte_upload_file_radio,
    read_pte_upload_file_cmmt,
    read_pln_req_inv,
    read_pln_req_inv_radio,
    read_pln_req_inv_cmmt,
    read_ship_input_inv,
    read_ship_input_inv_radio,
    read_ship_input_inv_cmmt,
    read_pln_upload_final,
    read_pln_upload_final_radio,
    read_pln_upload_final_cmmt,
    ErrorPTE_INPUT_WS,
    ErrorPLN_Staff_BOI,
    Errorimport_boi_prepare,
    Errorboi_input_data,
    ErrorVendor_move_date,
    Errorcontact_date_pte,
    Errorcontact_date,
    contact_date,
    setcontact_date,
    contact_date_pte,
    setcontact_date_pte,
    cmmtradio_pte_weight_size,
    setcmmtradio_pte_weight_size,
    cmmtradio_pte_staff_boi,
    setcmmtradio_pte_staff_boi,
    cmmtradio_import_boi_prepare,
    setcmmtradio_import_boi_prepare,
    cmmtradio_boi_input_data,
    setcmmtradio_boi_input_data,
    cmmtradio_thai_catergories,
    setcmmtradio_thai_catergories,
    cmmtradio_pln_staff_bidding,
    setcmmtradio_pln_staff_bidding,
    cmmtradio_pte_dept,
    setcmmtradio_pte_dept,
    cmmtradio_export_clearance,
    setcmmtradio_export_clearance,
    cmmtradio_pte_upload_file,
    setcmmtradio_pte_upload_file,
    cmmtradio_pln_req_inv,
    setcmmtradio_pln_req_inv,
    cmmtradio_ship_input_inv,
    setcmmtradio_ship_input_inv,
    cmmtradio_pln_upload_final,
    setcmmtradio_pln_upload_final,
    CM_pte_weight_size,
    CM_pte_staff_boi,
    CM_import_boi_prepare,
    CM_boi_input_data,
    CM_thai_catergories,
    CM_pln_staff_bidding,
    CM_pte_dept,
    CM_export_clearance,
    CM_pte_upload_file,
    CM_pln_req_inv,
    CM_ship_input_inv,
    CM_pln_upload_final,
    export_clearance_date,
    setexport_clearance_date,
    Vendor_move_date,
    setVendor_move_date,
    Errorexport_clearance_date,
    action__pte_weight_size,
    setaction__pte_weight_size,
    action__pte_staff_boi,
    setaction__pte_staff_boi,
    action__import_boi_prepare,
    setaction__import_boi_prepare,
    action__boi_input_data,
    setaction__boi_input_data,
    action__thai_catergories,
    setaction__thai_catergories,
    action__pln_staff_bidding,
    setaction__pln_staff_bidding,
    action__pte_dept,
    setaction__pte_dept,
    action__export_clearance,
    setaction__export_clearance,
    action__pte_upload_file,
    setaction__pte_upload_file,
    action__pln_req_inv,
    setaction__pln_req_inv,
    action__ship_input_inv,
    setaction__ship_input_inv,
    action__pln_upload_final,
    setaction__pln_upload_final,
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
    chk_pln_upload_final,
    Errorship_input_inv,
    Input_thai_categories,
    setInput_thai_categories,
    Bidding_result,
    setBidding_result,
    scrap_date , setscrap_date,ErrScp_date,sale_date,setsale_date,ErrSale_date
  } = FAM_TRANSECTION_TLWLD();

  const { fileInputRef, downloadFile } = FAM_GET_REQUEST();
  const {
    showfile_owner,
    handleDL_File_Owner,
    uploadedFiles_Own,
    handleDragOve_Own,
    handleDrop_Own,
    handleFileUpload_Own,
    handleSav_Own,
    showfile_owner_return,
    uploadedFiles_Own_return,
    uploadedFiles_PTE,
    showfile_pte_env,
    uploadedFiles_PLN_Staff,
    showfile_pln_staff,
    uploadedFiles_Shipping,
    showfile_shipping,
    uploadedFiles_pte_env_ws,
    uploadedFiles_pln_stf_boi,
    uploadedFiles_imp_boi_prepare,
    uploadedFiles_imp_input_data,
    uploadedFiles_thai_catergorise,
    uploadedFiles_pln_stf_bidding,
    uploadedFiles_pte_dept,
    uploadedFiles_boi_exp_clearance,
    uploadedFiles_pte_upload_after,
    uploadedFiles_pln_stf_req_inv,
    uploadedFiles_ship_input_inv,
    uploadedFiles_pln_upload_final,
    showfilepte_env_ws,
    showfilepln_stf_boi,
    showfileimp_boi_prepare,
    showfileimp_input_data,
    showfilethai_catergorise,
    showfilepln_stf_bidding,
    showfilepte_dept,
    showfileboi_exp_clearance,
    showfilepte_upload_after,
    showfilepln_stf_req_inv,
    showfileship_input_inv,
    showfilepln_upload_final,
  } = FAM_GET_SHOW_FILE();
  // Const Return
  const shouldShowTable = Showtype === "GP01006" && 
                          !["FLLD001", "FLLD002", "FLLD003", "FLLD004", "FLLD005", "FLLD006", "FLLD007", "FLLD008", "FLLD009"].includes(STS1) && 
                          For_sts_reject === "R";
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <Header />
      </div>
      <PageLoadding isOpen={isPopupOpenLoadding} onClose={closePopupLoadding} />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "40px",
          fontSize: "15px",
        }}
      >
        <Typography> FAM NO: {EditFam ? EditFam : For_Req[0]}</Typography>
      </div>
      <br></br>
      <div>
        {Showtype === "GP01001" && (
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
                    <td className="Style4">
                      {" "}
                      <Typography variant="subtitle2">
                        Owner (Send from):
                      </Typography>
                    </td>
                    <td>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          disabled
                          value={ownersend}
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                          }}
                          onChange={(e) => setownersend(e.target.value)}
                        />
                      </FormControl>
                    </td>
                    <td className="Style5"></td>
                    <td className="Style7">
                      <Typography variant="subtitle2">
                        From BOI Project:
                      </Typography>
                    </td>
                    <td className="Style6">
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          defaultFactoryValue=""
                          size="small"
                          value={data_fromboi}
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                          }}
                          onChange={(e) => setdata_fromboi(e.target.value)}
                          disabled
                        />
                      </FormControl>
                    </td>
                  </tr>
                  <tr>
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        Transfer to Factory:
                      </Typography>
                    </td>
                    <td>
                      {STS1 === "FLTR001" ||
                      STS1 === "" ||
                      For_sts_reject === "R" ? (
                        <FormControl className="Style1">
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={selecttrans_factory}
                            onChange={handleFactoryCC}
                            disabled={read_trans_fac}
                            size="small"
                            error={ErrorFac && !selecttrans_factory}
                            helperText={
                              ErrorFac && !selecttrans_factory
                                ? "Please select: Transfer To factory"
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
                      ) : (
                        <TextField
                          style={{
                            backgroundColor: read_trans_fac
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          className="Style1"
                          size="small"
                          disabled
                          value={For_edit_trans[0][13]}
                        ></TextField>
                      )}
                    </td>
                    <td className="Style5"></td>
                    <td className="Style7">
                      <Typography variant="subtitle2">
                        Transfer to CC:
                      </Typography>
                    </td>
                    <td className="Style6">
                      {STS1 === "FLTR001" ||
                      STS1 === "" ||
                      For_sts_reject === "R" ? (
                        <FormControl className="Style1">
                          <Autocomplete
                            disabled={read_trans_cc}
                            style={{
                              backgroundColor: read_trans_cc
                                ? "rgba(169, 169, 169, 0.3)"
                                : "",
                            }}
                            value={selecttrans_cc}
                            onChange={(e, value) => {
                              setselecttrans_cc(value);
                              handleNew_BOI(value);
                            }}
                            options={trans_cc.map((item) => item[0])}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                label="Select"
                                size="small"
                                sx={{ textAlign: "left" }}
                                error={ErrorCC && !selecttrans_cc}
                              />
                            )}
                          />

                          {ErrorCC && !selecttrans_cc && (
                            <FormHelperText style={{ color: "red" }}>
                              Please select: Transfer To CC
                            </FormHelperText>
                          )}
                        </FormControl>
                      ) : (
                        <TextField
                          style={{
                            backgroundColor: selecttrans_cc
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          className="Style1"
                          size="small"
                          disabled
                          value={For_edit_trans[0][1]}
                        ></TextField>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        New BOI Project:
                      </Typography>
                    </td>
                    <td>
                      <FormControl className="Style1">
                        <Autocomplete
                          disabled={read_trans_cc}
                          style={{
                            backgroundColor: read_trans_cc
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          error={ErrNewboi && (!new_boi || new_boi == "null")}
                          disablePortal
                          size="small"
                          options={datanew_boi}
                          value={new_boi}
                          onChange={(event, newValue) => {
                            setnew_boi(newValue);
                            handleNewboi_proj(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                        {ErrNewboi && !new_boi && (
                          <FormHelperText style={{ color: "red" }}>
                            Please select: New BOI Project{" "}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </td>
                    <td className="Style5" colSpan={3}></td>
                  </tr>
                  <tr>
                    <td className="Style4">
                      <Typography variant="subtitle2">New Owner:</Typography>
                    </td>
                    <td>
                      <FormControl className="Style1">
                        <Autocomplete
                          size="small"
                          style={{
                            backgroundColor: read_newowner
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          disabled={read_newowner}
                          value={selectnew_owner}
                          error={ErrorNewOwn && !selectnew_owner}
                          onChange={(event, newValue) => {
                            handleNewOwner(newValue);
                          }}
                          options={new_owner}
                          renderInput={(params) => <TextField {...params} />}
                        />
                        {ErrorNewOwn && !selectnew_owner && (
                          <FormHelperText style={{ color: "red" }}>
                            Please select: New Owner{" "}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </td>
                    <td className="Style5"></td>
                    <td className="Style7">
                      <Typography variant="subtitle2">Tel:</Typography>
                    </td>
                    <td className="Style6">
                      <FormControl className="Style1">
                        <TextField
                          // id="Tel"
                          disabled={read_tel}
                          value={Tel_for_trans}
                          style={{
                            backgroundColor: read_tel
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          onChange={(e) => setTel_for_trans(e.target.value)}
                          size="small"
                          error={
                            ErrorTel &&
                            (!Tel_for_trans || Tel_for_trans == "null")
                          }
                          helperText={
                            ErrorTel &&
                            (!Tel_for_trans || Tel_for_trans == "null")
                              ? "Please enter your mobile phone number"
                              : undefined
                          }
                        />
                      </FormControl>
                    </td>
                  </tr>
                  <tr>
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        Plan Remove Date:
                      </Typography>
                    </td>

                    <td>
                      <FormControl className="Style1">
                        <TextField
                          id="Plan_Remove"
                          size="small"
                          type="date"
                          disabled={read_plan_date}
                          style={{
                            backgroundColor: read_plan_date
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          value={plan_date}
                          // error={
                          //   ErrorDate && (!plan_date || plan_date == "null")
                          // }
                          onChange={(e) => setplan_date(e.target.value)}
                          // helperText={
                          //   ErrorDate && (!plan_date || plan_date == "null")
                          //     ? "Please select date"
                          //     : undefined
                          // }
                        />
                      </FormControl>
                    </td>
                    <td className="Style5" colSpan={3}></td>
                  </tr>
                  <tr>
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        Transfer Abnormal:
                      </Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={abnormal}
                          style={{
                            backgroundColor:
                              abnormal &&
                              abnormal.includes(
                                "Transfer to difference project"
                              )
                                ? "rgba(255, 0, 0, 0.3)"
                                : "rgba(169, 169, 169, 0.3)",
                            color:
                              abnormal &&
                              abnormal.includes(
                                "Transfer to difference project"
                              )
                                ? "red"
                                : "black",
                          }}
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
        )}
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
                  <td className="Style4">
                    <Typography variant="subtitle2">
                      Department Manager:
                    </Typography>
                  </td>
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
                          backgroundColor: read_dept
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
                        error={
                          ErrorManager &&
                          (!selectdepartment_mana ||
                            !selectdepartment_mana == "null")
                        }
                        helperText={
                          ErrorManager && !selectdepartment_mana
                            ? "Department Manager"
                            : undefined
                        }
                      >
                        {department_mana.length > 0 ? (
                          department_mana.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))
                        ) : (
                          <MenuItem disabled>No data</MenuItem>
                        )}
                      </Select>
                      {ErrorManager &&
                        (!selectdepartment_mana ||
                          !selectdepartment_mana == "null") && (
                          <FormHelperText style={{ color: "red" }}>
                            Please select: Department Manager
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
                        value={
                          selectradio_dept === null
                            ? setselectradio_dept("A")
                            : selectradio_dept
                        }
                        onChange={(e) => setselectradio_dept(e.target.value)}
                        style={{
                          visibility: checkrdo,
                        }}
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
                  <td className="Style7">
                    <Typography
                      variant="subtitle2"
                      style={{
                        visibility: checkrdo,
                      }}
                    >
                      {" "}
                      Action Date:
                    </Typography>
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
                <tr style={{ display: CM_DepartmentManager }}>
                  <td className="Style4">
                    <Typography variant="subtitle2"> Comment:</Typography>
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        value={cmmtradio_dept}
                        disabled={read_dept_cmmt}
                        style={{
                          backgroundColor: read_dept_cmmt
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
                        onChange={(e) => setcmmtradio_dept(e.target.value)}
                      />
                    </FormControl>
                  </td>
                </tr>
                {/* Sevice Dept */}
                <tr>
                  <td className="Style4">
                    {" "}
                    <Typography variant="subtitle2"> Service Dept:</Typography>
                  </td>
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
                  <td className="Style7">
                    {" "}
                    <Typography variant="subtitle2">Tel:</Typography>
                  </td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        id="Tel_Service"
                        disabled={read_tel}
                        size="small"
                        value={Tel_service}
                        style={{
                          backgroundColor: read_tel
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
                        onChange={(e) => setTel_service(e.target.value)}
                        error={
                          ErrorTel_service &&
                          (!Tel_service || Tel_service == "null")
                        }
                        helperText={
                          ErrorTel_service &&
                          (!Tel_service || Tel_service == "null")
                            ? "Please enter your mobile phone number"
                            : undefined
                        }
                      />
                    </FormControl>
                  </td>
                </tr>
                {/* Servide By */}
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">Service By:</Typography>
                  </td>
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
                          backgroundColor: read_serviceby
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
                        error={
                          ErrorService_by &&
                          (!selectservice_by || selectservice_by == "null")
                        }
                        size="small"
                      >
                        {service_by.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {ErrorService_by &&
                        (!selectservice_by || selectservice_by == "null") && (
                          <FormHelperText style={{ color: "red" }}>
                            Please select: Service By
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
                        value={
                          selectradio_serviceby === null
                            ? setselectradio_serviceby("A")
                            : selectradio_serviceby
                        }
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
                  <td className="Style7">
                    <Typography
                      variant="subtitle2"
                      style={{ visibility: chkservice_by }}
                    >
                      Action Date:
                    </Typography>
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
                <tr style={{ display: CM_service_by }}>
                  <td className="Style4">
                    <Typography variant="subtitle2">Comment:</Typography>
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        disabled={read_serviceby_cmmt}
                        size="small"
                        value={cmmtradio_serviceby}
                        style={{
                          backgroundColor: read_serviceby_cmmt
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
                        onChange={(e) => setcmmtradio_serviceby(e.target.value)}
                      />
                    </FormControl>
                  </td>
                </tr>
                {/* BOI Staff */}
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">BOI Staff:</Typography>{" "}
                  </td>
                  <td>
                    <FormControl className="Style3">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        size="small"
                        disabled={read_boistff}
                        value={selectboi_staff}
                        onChange={(e) => {
                          setselectboi_staff(e.target.value);
                          setexport_clearance(e.target.value);
                        }}
                        style={{
                          borderColor: ErrorBoi_Staff ? "red" : undefined,
                          backgroundColor: read_boistff
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
                        error={
                          ErrorBoi_Staff &&
                          (!selectboi_staff || selectboi_staff == "null")
                        }
                      >
                        {boi_staff.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {ErrorBoi_Staff &&
                        (!selectboi_staff || selectboi_staff == "null") && (
                          <FormHelperText style={{ color: "red" }}>
                            Please select: BOI Manager
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
                        value={
                          selectradio_boistaff === null
                            ? setselectradio_boistaff("A")
                            : selectradio_boistaff
                        }
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
                  <td className="Style7">
                    <Typography
                      variant="subtitle2"
                      style={{ visibility: chkboistaff }}
                    >
                      Action Date:
                    </Typography>
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
                <tr style={{ display: CM_boistaff }}>
                  <td className="Style4">
                    <Typography variant="subtitle2"> Comment:</Typography>
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        disabled={read_boistff_cmmt}
                        size="small"
                        value={cmmtradio_boistaff}
                        style={{
                          backgroundColor: read_boistff_cmmt
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
                        onChange={(e) => setcmmtradio_boistaff(e.target.value)}
                      />
                    </FormControl>
                  </td>
                </tr>{" "}
                {/* BOI Manager */}
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">BOI Manager:</Typography>{" "}
                  </td>
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
                          backgroundColor: read_boimana
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
                        error={
                          ErrorBoi_manager &&
                          (!selectboi_manager || selectboi_manager == "null")
                        }
                      >
                        {boi_manager.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {ErrorBoi_manager &&
                        (!selectboi_manager || selectboi_manager == "null") && (
                          <FormHelperText style={{ color: "red" }}>
                            Please select: BOI Manager
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
                        style={{ visibility: chkboimanager }}
                        value={
                          selectradio_boimanager === null
                            ? setselectradio_boimanager("A")
                            : selectradio_boimanager
                        }
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
                  <td className="Style7">
                    <Typography
                      variant="subtitle2"
                      style={{ visibility: chkboimanager }}
                    >
                      Action Date:
                    </Typography>
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
                <tr style={{ display: CM_boimanager }}>
                  <td className="Style4">
                    <Typography variant="subtitle2"> Comment:</Typography>
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        value={cmmtradio_boimanager}
                        disabled={read_boimana_cmmt}
                        style={{
                          backgroundColor: read_boimana_cmmt
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
                        onChange={(e) =>
                          setcmmtradio_boimanager(e.target.value)
                        }
                      />
                    </FormControl>
                  </td>
                </tr>
                {/* Factory Manager */}
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">
                      Factory Manager:
                    </Typography>{" "}
                  </td>
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
                          backgroundColor: read_fac_mana
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
                        error={
                          ErrorMana_Fac &&
                          (!selectfac_manager || selectfac_manager == "null")
                        }
                      >
                        {fac_manager.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {ErrorMana_Fac &&
                        (!selectfac_manager || selectfac_manager == "null") && (
                          <FormHelperText style={{ color: "red" }}>
                            Please select: Factory Manager
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
                        value={
                          selectradio_facmanager === null
                            ? setselectradio_facmanager("A")
                            : selectradio_facmanager
                        }
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

                  <td className="Style7">
                    <Typography
                      variant="subtitle2"
                      style={{ visibility: chkfacmanager }}
                    >
                      Action Date:
                    </Typography>
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
                  <tr style={{ display: CM_facmanager }}>
                    <td className="Style4">
                      <Typography variant="subtitle2"> Comment:</Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          disabled={read_fac_mana_cmmt}
                          size="small"
                          value={cmmtradio_facmanager}
                          style={{
                            backgroundColor: read_fac_mana_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          onChange={(e) =>
                            setcmmtradio_facmanager(e.target.value)
                          }
                        />
                      </FormControl>
                    </td>
                  </tr>
                </>
                {/* ACC Check */}
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">ACC Check:</Typography>{" "}
                  </td>

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
                          backgroundColor: read_accchk
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
                        error={
                          ErrorAcc_check &&
                          (!selectacc_check || selectacc_check == "null")
                        }
                      >
                        {acc_check.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {ErrorAcc_check &&
                        (!selectacc_check || selectacc_check == "null") && (
                          <FormHelperText style={{ color: "red" }}>
                            Please select: ACC Check:
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
                        value={
                          selectradio_acc_check === null
                            ? setselectradio_acc_check("A")
                            : selectradio_acc_check
                        }
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
                  <td className="Style7">
                    <Typography
                      variant="subtitle2"
                      style={{ visibility: chkacc_check }}
                    >
                      {" "}
                      Action Date:
                    </Typography>
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
                {(Showtype === "GP01007" || Showtype === "GP01006") &&
                STS1 !== "FLDN001" &&
                STS1 !== "FLLD001" &&
                STS1 !== "FLDN002" &&
                STS1 !== "FLLD002" &&
                STS1 !== "FLDN003" &&
                STS1 !== "FLLD003" &&
                STS1 !== "FLDN004" &&
                STS1 !== "FLLD004" &&
                STS1 !== "FLDN005" &&
                STS1 !== "FLLD005" &&
                STS1 !== "FLDN006" &&
                STS1 !== "FLLD006" ? (
                  <tr>
                    {Showtype === "GP01007" && (
                      <>
                        <td className="Style4">
                          <Typography variant="subtitle2">
                            Receive certificate date:
                          </Typography>
                        </td>
                        <td>
                          <FormControl className="Style1">
                            <TextField
                              id="Plan_Remove"
                              size="small"
                              type="date"
                              format="dd/mm/yyyy"
                              disabled={read_accchk_cmmt}
                              style={{
                                backgroundColor:
                                  selectradio_acc_check === "R"
                                    ? "rgba(169, 169, 169, 0.3)"
                                    : read_accchk_cmmt
                                    ? "rgba(169, 169, 169, 0.3)"
                                    : "",
                                pointerEvents:
                                  selectradio_acc_check === "R" &&
                                  read_accchk_cmmt
                                    ? "none"
                                    : "auto",
                              }}
                              value={certificate_date}
                              error={
                                ErrorDate_Certificate &&
                                (!certificate_date ||
                                  certificate_date === "null")
                              }
                              onChange={(e) =>
                                setcertificate_date(e.target.value)
                              }
                              helperText={
                                ErrorDate_Certificate &&
                                (!certificate_date ||
                                  certificate_date === "null")
                                  ? "Receive certificate date"
                                  : undefined
                              }
                            />
                          </FormControl>
                        </td>
                      </>
                    )}
                  </tr>
                ) : null}
                <tr style={{ display: CM_acc_check }}>
                  <td className="Style4">
                    {" "}
                    <Typography variant="subtitle2">Comment:</Typography>{" "}
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        disabled={read_accchk_cmmt}
                        size="small"
                        value={cmmtradio_acc_check}
                        style={{
                          backgroundColor: read_accchk_cmmt
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
                        onChange={(e) => setcmmtradio_acc_check(e.target.value)}
                      />
                    </FormControl>
                  </td>
                </tr>{" "}
                {/* Owner */}
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">Requester:</Typography>{" "}
                  </td>
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
                    {Showtype != "GP01006" && Showtype != "GP01007" ? (
                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          // value={selectradio_owner}
                          value={
                            selectradio_owner === null
                              ? setselectradio_owner("A")
                              : selectradio_owner
                          }
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
                    ) : (
                      <div style={{ display: "none" }}>
                        <FormControl>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            // value={selectradio_owner}
                            value={
                              selectradio_owner === null
                                ? setselectradio_owner("A")
                                : selectradio_owner
                            }
                            onChange={(e) =>
                              setselectradio_owner(e.target.value)
                            }
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
                      </div>
                    )}
                  </td>
                  <td className="Style7">
                    <Typography
                      variant="subtitle2"
                      style={{ visibility: chkowner }}
                    >
                      Action Date:
                    </Typography>
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
                <tr style={{ display: CM_owner }}>
                  <td className="Style4">
                    <Typography variant="subtitle2">Comment:</Typography>
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        disabled={read_owner_cmmt}
                        size="small"
                        value={cmmtradio_owner}
                        style={{
                          backgroundColor: read_owner_cmmt
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
                        onChange={(e) => setcmmtradio_owner(e.target.value)}
                      />
                    </FormControl>
                  </td>
                </tr>{" "}
                {(Showtype === "GP01007" || Showtype === "GP01006") &&
                  STS1 !== "FLDN001" &&
                  STS1 !== "FLLD001" &&
                  STS1 !== "FLDN002" &&
                  STS1 !== "FLLD002" &&
                  STS1 !== "FLDN003" &&
                  STS1 !== "FLLD003" &&
                  STS1 !== "FLDN004" &&
                  STS1 !== "FLLD004" &&
                  STS1 !== "FLDN005" &&
                  STS1 !== "FLLD005" &&
                  STS1 !== "FLDN006" &&
                  STS1 !== "FLLD006" &&
                  STS1 !== "FLDN007" &&
                  STS1 !== "FLLD007" && (
                    <tr>
                      <td className="Style4"></td>
                      <td colSpan={5}>
                        <div style={{ margin: "20px" }}>
                          <table>
                            <tr>
                              <td className="Table_Show_req1">
                                <td
                                  className="Show-Data-File"
                                  style={{ textAlign: "center" }}
                                >
                                  <div>
                                    <TableContainer component={Paper}>
                                      <Table className="FamFilePopUp">
                                        <TableHead>
                                          <TableRow>
                                            <TableCell></TableCell>
                                            <TableCell>No.</TableCell>
                                            <TableCell>File</TableCell>
                                            <TableCell>View</TableCell>
                                          </TableRow>
                                        </TableHead>
                                        <TableBody>
                                          {showfile_owner.length === 0 ? (
                                            <TableRow>
                                              <TableCell
                                                colSpan={4}
                                                style={{ textAlign: "center" }}
                                              >
                                                <Empty />
                                              </TableCell>
                                            </TableRow>
                                          ) : (
                                            showfile_owner.map(
                                              (option, index) => (
                                                <TableRow key={index}>
                                                  <TableCell>
                                                    {(STS1 === "FLDN008" ||
                                                      STS1 === "FLLD008") && (
                                                      <DeleteOutlined
                                                        onClick={() =>
                                                          handleDL_File_Owner(
                                                            showfile_owner[
                                                              index
                                                            ][0],
                                                            showfile_owner[
                                                              index
                                                            ][3],
                                                            showfile_owner[
                                                              index
                                                            ][4]
                                                          )
                                                        }
                                                        className="Icon_DeleteFile"
                                                      />
                                                    )}
                                                  </TableCell>
                                                  <TableCell>
                                                    {showfile_owner[index][2]}
                                                  </TableCell>
                                                  <TableCell>
                                                    {showfile_owner[index][3]}
                                                  </TableCell>
                                                  <TableCell
                                                    style={{
                                                      textAlign: "center",
                                                      color: "blue",
                                                      textDecoration:
                                                        "underline",
                                                    }}
                                                  >
                                                    <PlagiarismIcon
                                                      style={{
                                                        cursor: "pointer",
                                                        fontSize: "30px",
                                                      }}
                                                      onClick={() =>
                                                        downloadFile(
                                                          showfile_owner[
                                                            index
                                                          ][4]
                                                        )
                                                      }
                                                    >
                                                      {showfile_owner[index][3]}
                                                    </PlagiarismIcon>
                                                  </TableCell>
                                                </TableRow>
                                              )
                                            )
                                          )}
                                        </TableBody>
                                      </Table>
                                    </TableContainer>
                                  </div>
                                </td>
                              </td>
                              <td style={{ width: "20px" }}></td>
                              <td className="Table_Show_req2">
                                <input
                                  type="file"
                                  multiple
                                  onChange={handleFileUpload_Own}
                                  style={{ display: "none" }}
                                  id="fileInput"
                                  ref={fileInputRef}
                                />
                                {(STS1 === "FLDN008" || STS1 === "FLLD008") && (
                                  <div style={{ width: "400px" }}>
                                    <label
                                      htmlFor="fileInput"
                                      onDragOver={handleDragOve_Own}
                                      onDrop={handleDrop_Own}
                                      className="bt_ChooseFile"
                                    >
                                      <CloudUploadOutlined
                                        style={{
                                          fontSize: "30px",
                                          color: "#86B6F6",
                                        }}
                                      />
                                      <br />
                                      <span style={{ fontWeight: "bold" }}>
                                        Drop your files here
                                      </span>
                                      <br />
                                      or
                                      <br />
                                      <Button size="small" component="span">
                                        <b> Browse files</b>
                                      </Button>
                                    </label>

                                    {uploadedFiles_Own.length > 0 && (
                                      <div>
                                        <ul>
                                          {uploadedFiles_Own.map(
                                            (file, index) => (
                                              <div
                                                key={index}
                                                className="BorderFile"
                                              >
                                                <Typography className="Font_File">
                                                  <span
                                                    style={{
                                                      marginLeft: "10px",
                                                    }}
                                                  >
                                                    {file.type.startsWith(
                                                      "image/"
                                                    ) ? (
                                                      <img
                                                        src={URL.createObjectURL(
                                                          file
                                                        )}
                                                        alt={file.name}
                                                        className="Img_file"
                                                      />
                                                    ) : (
                                                      <>
                                                        {file.name.endsWith(
                                                          ".xlsx"
                                                        ) ? (
                                                          <FileExcelOutlined
                                                            className="Icon_file"
                                                            style={{
                                                              color: "#65B741",
                                                            }}
                                                          />
                                                        ) : file.name.endsWith(
                                                            ".pdf"
                                                          ) ? (
                                                          <FilePdfOutlined
                                                            className="Icon_file"
                                                            style={{
                                                              color: "#FF6347",
                                                            }}
                                                          />
                                                        ) : file.name.endsWith(
                                                            ".docx"
                                                          ) ? (
                                                          <FileWordOutlined
                                                            className="Icon_file"
                                                            style={{
                                                              color: "#3468C0",
                                                            }}
                                                          />
                                                        ) : file.name.endsWith(
                                                            ".txt"
                                                          ) ? (
                                                          <FileTextOutlined
                                                            className="Icon_file"
                                                            style={{
                                                              color: "#B6BBC4",
                                                            }}
                                                          />
                                                        ) : (
                                                          <FileUnknownOutlined
                                                            className="Icon_file"
                                                            style={{
                                                              color: "#FFD3A3",
                                                            }}
                                                          />
                                                        )}
                                                      </>
                                                    )}
                                                    {index + 1} {file.name}
                                                  </span>

                                                  <DeleteOutlined
                                                    onClick={() =>
                                                      handleDL_File_Owner(
                                                        index,
                                                        file.name
                                                      )
                                                    }
                                                    className="Icon_DeleteFile"
                                                  />
                                                </Typography>
                                              </div>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    )}
                                    <div
                                      style={{
                                        textAlign: "right",
                                        marginTop: "5px",
                                      }}
                                    >
                                      {(STS1 === "FLDN008" ||
                                        STS1 === "FLLD008") && (
                                        <Button
                                          variant="contained"
                                          onClick={handleSav_Own}
                                        >
                                          Save
                                        </Button>
                                      )}
                                    </div>
                                  </div>
                                )}
                              </td>
                            </tr>
                          </table>

                          <table>
                            <tr>
                              <td className=""></td>
                            </tr>
                            <tr></tr>
                            <tr
                              style={{
                                width: "100%",
                                marginBottom: "20px",
                                marginTop: "20px",
                              }}
                            ></tr>
                          </table>
                        </div>
                      </td>
                    </tr>
                  )}
              </table>
            </div>
          </Card>
        </Card>{" "}
        {Showtype === "GP01001" && (
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
                    <td className="Style4">
                      {" "}
                      <Typography variant="subtitle2">
                        {" "}
                        Receiver:
                      </Typography>{" "}
                    </td>
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
                          // value={selectradio_receiver}
                          value={
                            selectradio_receiver === null
                              ? setselectradio_receiver("A")
                              : selectradio_receiver
                          }
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
                    <td className="Style7">
                      <Typography
                        variant="subtitle2"
                        style={{ visibility: chkreceiver }}
                      >
                        Action Date:
                      </Typography>
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

                  <tr style={{ display: CM_receiver }}>
                    <td className="Style4">
                      <Typography variant="subtitle2"> Comment:</Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          disabled={read_receive_cmmt}
                          value={cmmtradio_receiver}
                          style={{
                            backgroundColor: read_receive_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          onChange={(e) =>
                            setcmmtradio_receiver(e.target.value)
                          }
                        />
                      </FormControl>
                    </td>
                  </tr>
                </table>
              </div>
            </Card>
          </Card>
        )}
        {Showtype === "GP01006" && (
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
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        ACC Manager(Return date):
                      </Typography>
                    </td>
                    <td>
                      <FormControl className="Style3">
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={return_selectacc_manager}
                          disabled={read_return_acc}
                          onChange={(e) =>
                            setreturn_selectacc_manager(e.target.value)
                          }
                          size="small"
                          style={{
                            borderColor: ErrorACCReturn ? "red" : undefined,
                            backgroundColor: read_return_acc
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          error={
                            ErrorACCReturn &&
                            (!return_selectacc_manager ||
                              return_selectacc_manager == "null")
                          }
                        >
                          {acc_manager.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                        {ErrorACCReturn &&
                          (!return_selectacc_manager ||
                            return_selectacc_manager == "null") && (
                            <FormHelperText style={{ color: "red" }}>
                              Please select: ACC Manager Return
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
                          value={
                            selectradio_return_acc === null ||
                            selectradio_return_acc === ""
                              ? setselectradio_return_acc("A")
                              : selectradio_return_acc
                          }
                          onChange={(e) =>
                            setselectradio_return_acc(e.target.value)
                          }
                          style={{ visibility: chkreturn_acc }}
                        >
                          <FormControlLabel
                            value="A"
                            control={<Radio size="small" />}
                            label="Approve"
                            disabled={read_return_acc_radio}
                          />
                          <FormControlLabel
                            value="R"
                            disabled={read_return_acc_radio}
                            control={<Radio size="small" />}
                            label="Reject"
                          />
                        </RadioGroup>
                      </FormControl>
                    </td>
                    <td className="Style7">
                      <Typography
                        variant="subtitle2"
                        style={{ visibility: chkreturn_acc }}
                      >
                        {" "}
                        Action Date:
                      </Typography>
                    </td>
                    <td className="Style6">
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={action__return_acc}
                          onChange={(e) =>
                            setaction__return_acc(e.target.value)
                          }
                          disabled
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            visibility: chkreturn_acc,
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>
                  {Showtype == "GP01006" &&
                    STS1 != "FLLD001" &&
                    STS1 != "FLLD002" &&
                    STS1 != "FLLD003" &&
                    STS1 != "FLLD004" &&
                    STS1 != "FLLD005" &&
                    STS1 != "FLLD006" &&
                    STS1 != "FLLD007" &&
                    STS1 != "FLLD008" && (
                      <tr>
                        <td className="Style4">
                          <Typography variant="subtitle2">
                            Return Date:
                          </Typography>{" "}
                        </td>
                        <td>
                          <FormControl className="Style1">
                            <TextField
                              id="Plan_Remove"
                              size="small"
                              type="date"
                              disabled={read_return_acc_cmmt}
                              style={{
                                backgroundColor:
                                  selectradio_return_acc === "R"
                                    ? "rgba(169, 169, 169, 0.3)"
                                    : read_return_acc_cmmt
                                    ? "rgba(169, 169, 169, 0.3)"
                                    : "",
                                pointerEvents:
                                  selectradio_return_acc === "R" &&
                                  read_return_acc_cmmt
                                    ? "none"
                                    : "auto",
                              }}
                              value={return_date}
                              error={
                                ErrorDate_return &&
                                (!return_date || return_date == "null")
                              }
                              onChange={(e) => setreturn_date(e.target.value)}
                              helperText={
                                ErrorDate_return &&
                                (!return_date || return_date == "null")
                                  ? "Please Select Return Date "
                                  : undefined
                              }
                            />
                          </FormControl>
                        </td>
                      </tr>
                    )}
                  <tr style={{ display: CM_return_acc }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">Comment:</Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          value={cmmtradio_return_acc}
                          disabled={read_return_acc_cmmt}
                          style={{
                            backgroundColor: read_return_acc_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          onChange={(e) =>
                            setcmmtradio_return_acc(e.target.value)
                          }
                          size="small"
                        />
                      </FormControl>
                    </td>
                  </tr>
                  <tr>
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        {" "}
                        Requester Return FA:
                      </Typography>
                    </td>
                    <td>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={req_return}
                          onChange={(e) => setreq_return(e.target.value)}
                          disabled
                          sx={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                          }}
                        />
                      </FormControl>
                    </td>
                    <td className="Style5">
                    </td>
                    <td className="Style7">
                      <Typography
                        variant="subtitle2"
                        style={{ visibility: chkreturn_owner }}
                      >
                        {" "}
                        Action Date:
                      </Typography>
                    </td>
                    <td className="Style6">
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={action__return_own}
                          onChange={(e) => setaction__record(e.target.value)}
                          disabled
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            visibility: chkreturn_owner,
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>
                  <tr style={{ display: CM_return_owner }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">Comment:</Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          value={cmmtradio_return_own}
                          disabled={read_return_own_cmmt}
                          style={{
                            backgroundColor: read_return_own_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          onChange={(e) =>
                            setcmmtradio_return_own(e.target.value)
                          }
                          size="small"
                        />
                      </FormControl>
                    </td>
                  </tr>
                  {(Showtype === "GP01006" && STS1 !== "FLLD001" && STS1 !== "FLLD002" && STS1 !== "FLLD003" && STS1 !== "FLLD004" && STS1 !== "FLLD005" &&
    STS1 !== "FLLD006" && STS1 !== "FLLD007" && STS1 !== "FLLD008" && STS1 !== "FLLD009") ||
    For_sts_reject === "R" ? (
      <tr>
        <td className="Style4"></td>
        <td colSpan={5}>
          <div style={{ margin: "20px" }}>
            <table>
              <tr>
                <td className="Table_Show_req1">
                  <td className="Show-Data-File" style={{ textAlign: "center" }}>
                    <div>
                      <TableContainer component={Paper}>
                        <Table className="FamFilePopUp">
                          <TableHead>
                            <TableRow>
                              <TableCell></TableCell>
                              <TableCell>No.</TableCell>
                              <TableCell>File</TableCell>
                              <TableCell>View</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {showfile_owner_return.length === 0 ? (
                              <TableRow>
                                <TableCell colSpan={4} style={{ textAlign: "center" }}>
                                  <Empty />
                                </TableCell>
                              </TableRow>
                            ) : (
                              showfile_owner_return.map((option, index) => (
                                <TableRow key={index}>
                                  <TableCell>
                                    {STS1 === "FLLD100" && (
                                      <DeleteOutlined
                                        onClick={() =>
                                          handleDL_File_Owner(
                                            showfile_owner_return[index][0],
                                            showfile_owner_return[index][3],
                                            showfile_owner_return[index][4]
                                          )
                                        }
                                        className="Icon_DeleteFile"
                                      />
                                    )}
                                  </TableCell>
                                  <TableCell>{showfile_owner_return[index][2]}</TableCell>
                                  <TableCell>{showfile_owner_return[index][3]}</TableCell>
                                  <TableCell
                                    style={{
                                      textAlign: "center",
                                      color: "blue",
                                      textDecoration: "underline",
                                    }}
                                  >
                                    <PlagiarismIcon
                                      style={{
                                        cursor: "pointer",
                                        fontSize: "30px",
                                      }}
                                      onClick={() => downloadFile(showfile_owner_return[index][4])}
                                    >
                                      {showfile_owner_return[index][3]}
                                    </PlagiarismIcon>
                                  </TableCell>
                                </TableRow>
                              ))
                            )}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                  </td>
                </td>
                <td style={{ width: "20px" }}></td>
                <td className="Table_Show_req2">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload_Own}
                    style={{ display: "none" }}
                    id="fileInput"
                    ref={fileInputRef}
                  />
                  {STS1 === "FLLD100" && (
                    <div style={{ width: "400px" }}>
                      <label
                        htmlFor="fileInput"
                        onDragOver={handleDragOve_Own}
                        onDrop={handleDrop_Own}
                        className="bt_ChooseFile"
                      >
                        <CloudUploadOutlined
                          style={{
                            fontSize: "30px",
                            color: "#86B6F6",
                          }}
                        />
                        <br />
                        <span style={{ fontWeight: "bold" }}>Drop your files here</span>
                        <br />
                        or
                        <br />
                        <Button size="small" component="span">
                          <b> Browse files</b>
                        </Button>
                      </label>

                      {uploadedFiles_Own_return.length > 0 && (
                        <div>
                          <ul>
                            {uploadedFiles_Own_return.map((file, index) => (
                              <div key={index} className="BorderFile">
                                <Typography className="Font_File">
                                  <span style={{ marginLeft: "10px" }}>
                                    {file.type.startsWith("image/") ? (
                                      <img src={URL.createObjectURL(file)} alt={file.name} className="Img_file" />
                                    ) : (
                                      <>
                                        {file.name.endsWith(".xlsx") ? (
                                          <FileExcelOutlined className="Icon_file" style={{ color: "#65B741" }} />
                                        ) : file.name.endsWith(".pdf") ? (
                                          <FilePdfOutlined className="Icon_file" style={{ color: "#FF6347" }} />
                                        ) : file.name.endsWith(".docx") ? (
                                          <FileWordOutlined className="Icon_file" style={{ color: "#3468C0" }} />
                                        ) : file.name.endsWith(".txt") ? (
                                          <FileTextOutlined className="Icon_file" style={{ color: "#B6BBC4" }} />
                                        ) : (
                                          <FileUnknownOutlined className="Icon_file" style={{ color: "#FFD3A3" }} />
                                        )}
                                      </>
                                    )}
                                    {index + 1} {file.name}
                                  </span>

                                  <DeleteOutlined
                                    onClick={() => handleDL_File_Owner(index, file.name)}
                                    className="Icon_DeleteFile"
                                  />
                                </Typography>
                              </div>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div style={{ textAlign: "right", marginTop: "5px" }}>
                        {STS1 === "FLLD100" && (
                          <Button variant="contained" onClick={handleSav_Own}>
                            Save
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            </table>

            <table>
              <tr>
                <td className=""></td>
              </tr>
              <tr></tr>
              <tr style={{ width: "100%", marginBottom: "20px", marginTop: "20px" }}></tr>
            </table>
          </div>
        </td>
      </tr>
    ) : null}
        
                    
                </table>
              </div>
            </Card>
          </Card>
        )}
        {/* Srcap GP01002 */}
        {Showtype === "GP01002" && (
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
                    <td className="Style4">
                      <Typography variant="subtitle2">PTE(ENV):</Typography>
                    </td>
                    <td >
                      <FormControl className="Style3">
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={selectpte_env}
                          disabled={read_pte_env}
                          onChange={(e) => setselectpte_env(e.target.value)}
                          size="small"
                          style={{
                            borderColor: ErrorPTE_ENV ? "red" : undefined,
                            backgroundColor: read_pte_env
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                            width:'70%'
                          }}
                          error={
                            ErrorPTE_ENV &&
                            (!selectpte_env || selectpte_env == "null")
                          }
                        >
                          {pte_env.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                        {ErrorPTE_ENV && !selectpte_env && (
                          <FormHelperText style={{ color: "red" }}>
                            Please select: PTE(ENV)
                          </FormHelperText>
                        )}
                      </FormControl>
                    </td>

                    <td style={{ width: "20%" }}></td>
                    <td className="Style7">
                      <Typography
                        variant="subtitle2"
                        style={{ visibility: chkpte_env }}
                      >
                        {" "}
                        Action Date:
                      </Typography>
                    </td>
                    <td className="Style6">
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={action__pte_env}
                          onChange={(e) => setaction__pte_env(e.target.value)}
                          disabled
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            visibility: chkpte_env,
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>
                  {/* Scrap Date : */}
                  <tr style={{ display: CM_pte_env }}>
                    <td className="Style4" >
                      <Typography variant="subtitle2">
                        Scrap Date :
                      </Typography>{" "}
                    </td>
                    <td>
                      <FormControl className="Style1">
                        <TextField
                          size="small"
                          type="date"
                          disabled={read_pte_env_cmmt}
                          style={{
                            
                            backgroundColor: read_pte_env_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                             width:'70%'
                          }}
                          value={scrap_date }
                          error={
                            ErrScp_date  &&
                            (!scrap_date  || scrap_date  == "null")
                          }
                          onChange={(e) => setscrap_date(e.target.value)}
                          helperText={
                            ErrScp_date  &&
                            (!scrap_date  || scrap_date  == "null")
                              ? "Please Select Contact date "
                              : undefined
                          }
                        />
                      </FormControl>
                    </td>
                  </tr>
                  <tr style={{ display: CM_pte_env}}>
                    <td className="Style4">
                      <Typography variant="subtitle2">Comment:</Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          value={cmmtradio_pte_env}
                          disabled={read_pte_env_cmmt}
                          style={{
                            backgroundColor: read_pte_env_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          onChange={(e) => setcmmtradio_pte_env(e.target.value)}
                          size="small"
                        />
                      </FormControl>
                    </td>
                  </tr>

                  {Showtype == "GP01002" &&
                    STS1 != "FLSC001" &&
                    STS1 != "FLSC002" &&
                    STS1 != "FLSC003" &&
                    STS1 != "FLSC004" &&
                    STS1 != "FLSC005" &&
                    STS1 != "FLSC006" &&
                    STS1 != "FLSC007" &&
                    STS1 != "FLSC008" &&
                    For_sts_reject !== "R" && (
                      <tr >
                        <td className="Style4"></td>
                        <td colSpan={5}>
                          <div style={{ margin: "20px" }}>
                            <table>
                              <tr >
                                <td className="Table_Show_req1">
                                  <td
                                    className="Show-Data-File"
                                    style={{ textAlign: "center" }}
                                  >
                                    <div>
                                      <TableContainer component={Paper}>
                                        <Table className="FamFilePopUp">
                                          <TableHead>
                                            <TableRow>
                                              <TableCell></TableCell>
                                              <TableCell>No.</TableCell>
                                              <TableCell>File</TableCell>
                                              <TableCell>View</TableCell>
                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                            {showfile_pte_env.length === 0 ? (
                                              <TableRow>
                                                <TableCell
                                                  colSpan={4}
                                                  style={{
                                                    textAlign: "center",
                                                  }}
                                                >
                                                  <Empty />
                                                </TableCell>
                                              </TableRow>
                                            ) : (
                                              showfile_pte_env.map(
                                                (option, index) => (
                                                  <TableRow key={index}>
                                                    <TableCell>
                                                      {STS1 === "FLSC009" && (
                                                        <DeleteOutlined
                                                          onClick={() =>
                                                            handleDL_File_Owner(
                                                              showfile_pte_env[
                                                                index
                                                              ][0],
                                                              showfile_pte_env[
                                                                index
                                                              ][3],
                                                              showfile_pte_env[
                                                                index
                                                              ][4]
                                                            )
                                                          }
                                                          className="Icon_DeleteFile"
                                                        />
                                                      )}
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfile_pte_env[
                                                          index
                                                        ][2]
                                                      }
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfile_pte_env[
                                                          index
                                                        ][3]
                                                      }
                                                    </TableCell>
                                                    <TableCell
                                                      style={{
                                                        textAlign: "center",
                                                        color: "blue",
                                                        textDecoration:
                                                          "underline",
                                                      }}
                                                    >
                                                      <PlagiarismIcon
                                                        style={{
                                                          cursor: "pointer",
                                                          fontSize: "30px",
                                                        }}
                                                        onClick={() =>
                                                          downloadFile(
                                                            showfile_pte_env[
                                                              index
                                                            ][4]
                                                          )
                                                        }
                                                      >
                                                        {
                                                          showfile_pte_env[
                                                            index
                                                          ][3]
                                                        }
                                                      </PlagiarismIcon>
                                                    </TableCell>
                                                  </TableRow>
                                                )
                                              )
                                            )}
                                          </TableBody>
                                        </Table>
                                      </TableContainer>
                                    </div>
                                  </td>
                                </td>
                                <td style={{ width: "20px" }}></td>
                                <td className="Table_Show_req2">
                                  <input
                                    type="file"
                                    multiple
                                    onChange={handleFileUpload_Own}
                                    style={{ display: "none" }}
                                    id="fileInput"
                                    ref={fileInputRef}
                                  />
                                  {STS1 == "FLSC009" && (
                                    <div style={{ width: "400px" }}>
                                      <label
                                        htmlFor="fileInput"
                                        onDragOver={handleDragOve_Own}
                                        onDrop={handleDrop_Own}
                                        className="bt_ChooseFile"
                                      >
                                        <CloudUploadOutlined
                                          style={{
                                            fontSize: "30px",
                                            color: "#86B6F6",
                                          }}
                                        />
                                        <br />
                                        <span style={{ fontWeight: "bold" }}>
                                          Drop your files here
                                        </span>
                                        <br />
                                        or
                                        <br />
                                        <Button size="small" component="span">
                                          <b> Browse files</b>
                                        </Button>
                                      </label>

                                      {uploadedFiles_PTE.length > 0 && (
                                        <div>
                                          <ul>
                                            {uploadedFiles_PTE.map(
                                              (file, index) => (
                                                <div
                                                  key={index}
                                                  className="BorderFile"
                                                >
                                                  <Typography className="Font_File">
                                                    <span
                                                      style={{
                                                        marginLeft: "10px",
                                                      }}
                                                    >
                                                      {file.type.startsWith(
                                                        "image/"
                                                      ) ? (
                                                        <img
                                                          src={URL.createObjectURL(
                                                            file
                                                          )}
                                                          alt={file.name}
                                                          className="Img_file"
                                                        />
                                                      ) : (
                                                        <>
                                                          {file.name.endsWith(
                                                            ".xlsx"
                                                          ) ? (
                                                            <FileExcelOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#65B741",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".pdf"
                                                            ) ? (
                                                            <FilePdfOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FF6347",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".docx"
                                                            ) ? (
                                                            <FileWordOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#3468C0",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".txt"
                                                            ) ? (
                                                            <FileTextOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#B6BBC4",
                                                              }}
                                                            />
                                                          ) : (
                                                            <FileUnknownOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FFD3A3",
                                                              }}
                                                            />
                                                          )}
                                                        </>
                                                      )}
                                                      {index + 1} {file.name}
                                                    </span>

                                                    <DeleteOutlined
                                                      onClick={() =>
                                                        handleDL_File_Owner(
                                                          index,
                                                          file.name
                                                        )
                                                      }
                                                      className="Icon_DeleteFile"
                                                    />
                                                  </Typography>
                                                </div>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      )}
                                      <div
                                        style={{
                                          textAlign: "right",
                                          marginTop: "5px",
                                        }}
                                      >
                                        <Button
                                          variant="contained"
                                          onClick={handleSav_Own}
                                        >
                                          Save
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            </table>

                            <table>
                              <tr>
                                <td className=""></td>
                              </tr>
                              <tr></tr>
                              <tr
                                style={{
                                  width: "100%",
                                  marginBottom: "20px",
                                  marginTop: "20px",
                                }}
                              ></tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  <tr >
                    <td className="Style4">
                      <Typography variant="subtitle2">PLN Staff:</Typography>
                    </td>
                    <td >
                      <FormControl className="Style3">
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={selectpln_staff}
                          disabled={read_pln_staff}
                          onChange={(e) => setselectpln_staff(e.target.value)}
                          size="small"
                          style={{
                            borderColor: ErrorPLN_Staff ? "red" : undefined,
                            backgroundColor: read_pln_staff
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                            width: "70%",
                          }}
                          error={
                            ErrorPLN_Staff &&
                            (!selectpln_staff || selectpln_staff == "null")
                          }
                        >
                          {pln_staff.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                        {ErrorPLN_Staff && !selectpln_staff && (
                          <FormHelperText style={{ color: "red" }}>
                            Please select: PLN Staff
                          </FormHelperText>
                        )}
                      </FormControl>
                    </td>

                    <td style={{ width: "20%" }}></td>
                    <td className="Style7">
                      <Typography
                        variant="subtitle2"
                        style={{ visibility: chkpln_staff }}
                      >
                        {" "}
                        Action Date:
                      </Typography>
                    </td>
                    <td className="Style6" >
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={action__pln_staff}
                          onChange={(e) => setaction__pln_staff(e.target.value)}
                          disabled
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            visibility: chkpln_staff,
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>

                  <tr style={{ display: CM_pln_staff }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">Comment:</Typography>
                    </td>
                    <td colSpan={4} > 
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          value={cmmtradio_pln_staff}
                          disabled={read_pln_staff_cmmt}
                          style={{
                            backgroundColor: read_pln_staff_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          onChange={(e) =>
                            setcmmtradio_pln_staff(e.target.value)
                          }
                          size="small"
                        />
                      </FormControl>
                    </td>
                  </tr>

                  {Showtype == "GP01002" &&
                    STS1 != "FLSC001" &&
                    STS1 != "FLSC002" &&
                    STS1 != "FLSC003" &&
                    STS1 != "FLSC004" &&
                    STS1 != "FLSC005" &&
                    STS1 != "FLSC006" &&
                    STS1 != "FLSC007" &&
                    STS1 != "FLSC008" &&
                    STS1 != "FLSC009" &&
                    For_sts_reject !== "R" && (
                      <tr>
                        <td className="Style4"></td>
                        <td colSpan={5}>
                          <div style={{ margin: "20px" }}>
                            <table>
                              <tr>
                                <td className="Table_Show_req1">
                                  <td
                                    className="Show-Data-File"
                                    style={{ textAlign: "center" }}
                                  >
                                    <div>
                                      <TableContainer component={Paper}>
                                        <Table className="FamFilePopUp">
                                          <TableHead>
                                            <TableRow>
                                              <TableCell></TableCell>
                                              <TableCell>No.</TableCell>
                                              <TableCell>File</TableCell>
                                              <TableCell>View</TableCell>
                                            </TableRow>
                                          </TableHead>

                                          <TableBody>
                                            {showfile_pln_staff.length === 0 ? (
                                              <TableRow>
                                                <TableCell
                                                  colSpan={4}
                                                  style={{
                                                    textAlign: "center",
                                                  }}
                                                >
                                                  <Empty />
                                                </TableCell>
                                              </TableRow>
                                            ) : (
                                              showfile_pln_staff.map(
                                                (option, index) => (
                                                  <TableRow key={index}>
                                                    <TableCell>
                                                      {STS1 == "FLSC100" && (
                                                        <DeleteOutlined
                                                          onClick={() =>
                                                            handleDL_File_Owner(
                                                              showfile_pln_staff[
                                                                index
                                                              ][0],
                                                              showfile_pln_staff[
                                                                index
                                                              ][3],
                                                              showfile_pln_staff[
                                                                index
                                                              ][4]
                                                            )
                                                          }
                                                          className="Icon_DeleteFile"
                                                        />
                                                      )}
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfile_pln_staff[
                                                          index
                                                        ][2]
                                                      }
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfile_pln_staff[
                                                          index
                                                        ][3]
                                                      }
                                                    </TableCell>
                                                    <TableCell
                                                      style={{
                                                        textAlign: "center",
                                                        color: "blue",
                                                        textDecoration:
                                                          "underline",
                                                      }}
                                                    >
                                                      <PlagiarismIcon
                                                        style={{
                                                          cursor: "pointer",
                                                          fontSize: "30px",
                                                        }}
                                                        onClick={() =>
                                                          downloadFile(
                                                            showfile_pln_staff[
                                                              index
                                                            ][4]
                                                          )
                                                        }
                                                      >
                                                        {
                                                          showfile_pln_staff[
                                                            index
                                                          ][3]
                                                        }
                                                      </PlagiarismIcon>
                                                    </TableCell>
                                                  </TableRow>
                                                )
                                              )
                                            )}
                                          </TableBody>
                                        </Table>
                                      </TableContainer>
                                    </div>
                                  </td>
                                </td>
                                <td style={{ width: "20px" }}></td>
                                <td className="Table_Show_req2">
                                  <input
                                    type="file"
                                    multiple
                                    onChange={handleFileUpload_Own}
                                    style={{ display: "none" }}
                                    id="fileInput"
                                    ref={fileInputRef}
                                  />
                                  {STS1 == "FLSC100" && (
                                    <div style={{ width: "400px" }}>
                                      <label
                                        htmlFor="fileInput"
                                        onDragOver={handleDragOve_Own}
                                        onDrop={handleDrop_Own}
                                        className="bt_ChooseFile"
                                      >
                                        <CloudUploadOutlined
                                          style={{
                                            fontSize: "30px",
                                            color: "#86B6F6",
                                          }}
                                        />
                                        <br />
                                        <span style={{ fontWeight: "bold" }}>
                                          Drop your files here
                                        </span>
                                        <br />
                                        or
                                        <br />
                                        <Button size="small" component="span">
                                          <b> Browse files</b>
                                        </Button>
                                      </label>

                                      {uploadedFiles_PLN_Staff.length > 0 && (
                                        <div>
                                          <ul>
                                            {uploadedFiles_PLN_Staff.map(
                                              (file, index) => (
                                                <div
                                                  key={index}
                                                  className="BorderFile"
                                                >
                                                  <Typography className="Font_File">
                                                    <span
                                                      style={{
                                                        marginLeft: "10px",
                                                      }}
                                                    >
                                                      {file.type.startsWith(
                                                        "image/"
                                                      ) ? (
                                                        <img
                                                          src={URL.createObjectURL(
                                                            file
                                                          )}
                                                          alt={file.name}
                                                          className="Img_file"
                                                        />
                                                      ) : (
                                                        <>
                                                          {file.name.endsWith(
                                                            ".xlsx"
                                                          ) ? (
                                                            <FileExcelOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#65B741",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".pdf"
                                                            ) ? (
                                                            <FilePdfOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FF6347",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".docx"
                                                            ) ? (
                                                            <FileWordOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#3468C0",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".txt"
                                                            ) ? (
                                                            <FileTextOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#B6BBC4",
                                                              }}
                                                            />
                                                          ) : (
                                                            <FileUnknownOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FFD3A3",
                                                              }}
                                                            />
                                                          )}
                                                        </>
                                                      )}
                                                      {index + 1} {file.name}
                                                    </span>

                                                    <DeleteOutlined
                                                      onClick={() =>
                                                        handleDL_File_Owner(
                                                          index,
                                                          file.name
                                                        )
                                                      }
                                                      className="Icon_DeleteFile"
                                                    />
                                                  </Typography>
                                                </div>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      )}
                                      <div
                                        style={{
                                          textAlign: "right",
                                          marginTop: "5px",
                                        }}
                                      >
                                        <Button
                                          variant="contained"
                                          onClick={handleSav_Own}
                                        >
                                          Save
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            </table>

                            <table>
                              <tr>
                                <td className=""></td>
                              </tr>
                              <tr></tr>
                              <tr
                                style={{
                                  width: "100%",
                                  marginBottom: "20px",
                                  marginTop: "20px",
                                }}
                              ></tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  <tr>
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        Shipping Staff:
                      </Typography>
                    </td>
                    <td>
                      <FormControl className="Style3" style={{minWidth:'290px'}}>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={selectshipping_staff}
                          disabled={read_shipping}
                          onChange={(e) =>
                            setselectshipping_staff(e.target.value)
                          }
                          size="small"
                          style={{
                            borderColor: ErrorShipping ? "red" : undefined,
                            backgroundColor: read_shipping
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          width:'70%'
                          }}
                          error={
                            ErrorShipping &&
                            (!selectshipping_staff ||
                              selectshipping_staff == "null")
                          }
                        >
                          {shipping_staff.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                        {ErrorShipping && !selectshipping_staff && (
                          <FormHelperText style={{ color: "red" }}>
                            Please select: Shipping
                          </FormHelperText>
                        )}
                      </FormControl>
                    </td>

                    <td style={{ width: "20%" }}></td>
                    <td className="Style7">
                      <Typography
                        variant="subtitle2"
                        style={{ visibility: chkshipping }}
                      >
                        {" "}
                        Action Date:
                      </Typography>
                    </td>
                    <td className="Style6" >
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={action__shipping}
                          onChange={(e) => setaction__shipping(e.target.value)}
                          disabled
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            visibility: chkshipping,
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>

                  <tr style={{ display: CM_shipping }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">Comment:</Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          value={cmmtradio_shipping}
                          disabled={read_shipping_cmmt}
                          style={{
                            backgroundColor: read_shipping_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          onChange={(e) =>
                            setcmmtradio__shipping(e.target.value)
                          }
                          size="small"
                        />
                      </FormControl>
                    </td>
                  </tr>
                  {Showtype == "GP01002" &&
                    STS1 != "FLSC001" &&
                    STS1 != "FLSC002" &&
                    STS1 != "FLSC003" &&
                    STS1 != "FLSC004" &&
                    STS1 != "FLSC005" &&
                    STS1 != "FLSC006" &&
                    STS1 != "FLSC007" &&
                    STS1 != "FLSC008" &&
                    STS1 != "FLSC009" &&
                    STS1 != "FLSC100" &&
                    For_sts_reject !== "R" && (
                      <tr>
                        <td className="Style4"></td>
                        <td colSpan={5}>
                          <div style={{ margin: "20px" }}>
                            <table>
                              <tr>
                                <td className="Table_Show_req1">
                                  <td
                                    className="Show-Data-File"
                                    style={{ textAlign: "center" }}
                                  >
                                    <div>
                                      <TableContainer component={Paper}>
                                        <Table className="FamFilePopUp">
                                          <TableHead>
                                            <TableRow>
                                              <TableCell></TableCell>
                                              <TableCell>No.</TableCell>
                                              <TableCell>File</TableCell>
                                              <TableCell>View</TableCell>
                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                            {showfile_shipping.length === 0 ? (
                                              <TableRow>
                                                <TableCell
                                                  colSpan={4}
                                                  style={{
                                                    textAlign: "center",
                                                  }}
                                                >
                                                  <Empty />
                                                </TableCell>
                                              </TableRow>
                                            ) : (
                                              showfile_shipping.map(
                                                (option, index) => (
                                                  <TableRow key={index}>
                                                    <TableCell>
                                                      {STS1 == "FLSC101" && (
                                                        <DeleteOutlined
                                                          onClick={() =>
                                                            handleDL_File_Owner(
                                                              showfile_shipping[
                                                                index
                                                              ][0],
                                                              showfile_shipping[
                                                                index
                                                              ][3],
                                                              showfile_shipping[
                                                                index
                                                              ][4]
                                                            )
                                                          }
                                                          className="Icon_DeleteFile"
                                                        />
                                                      )}
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfile_shipping[
                                                          index
                                                        ][2]
                                                      }
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfile_shipping[
                                                          index
                                                        ][3]
                                                      }
                                                    </TableCell>
                                                    <TableCell
                                                      style={{
                                                        textAlign: "center",
                                                        color: "blue",
                                                        textDecoration:
                                                          "underline",
                                                      }}
                                                    >
                                                      <PlagiarismIcon
                                                        style={{
                                                          cursor: "pointer",
                                                          fontSize: "30px",
                                                        }}
                                                        onClick={() =>
                                                          downloadFile(
                                                            showfile_shipping[
                                                              index
                                                            ][4]
                                                          )
                                                        }
                                                      >
                                                        {
                                                          showfile_shipping[
                                                            index
                                                          ][3]
                                                        }
                                                      </PlagiarismIcon>
                                                    </TableCell>
                                                  </TableRow>
                                                )
                                              )
                                            )}
                                          </TableBody>
                                        </Table>
                                      </TableContainer>
                                    </div>
                                  </td>
                                </td>
                                <td style={{ width: "20px" }}></td>
                                <td className="Table_Show_req2">
                                  <input
                                    type="file"
                                    multiple
                                    onChange={handleFileUpload_Own}
                                    style={{ display: "none" }}
                                    id="fileInput"
                                    ref={fileInputRef}
                                  />
                                  {STS1 == "FLSC101" && (
                                    <div style={{ width: "400px" }}>
                                      <label
                                        htmlFor="fileInput"
                                        onDragOver={handleDragOve_Own}
                                        onDrop={handleDrop_Own}
                                        className="bt_ChooseFile"
                                      >
                                        <CloudUploadOutlined
                                          style={{
                                            fontSize: "30px",
                                            color: "#86B6F6",
                                          }}
                                        />
                                        <br />
                                        <span style={{ fontWeight: "bold" }}>
                                          Drop your files here
                                        </span>
                                        <br />
                                        or
                                        <br />
                                        <Button size="small" component="span">
                                          <b> Browse files</b>
                                        </Button>
                                      </label>

                                      {uploadedFiles_Shipping.length > 0 && (
                                        <div>
                                          <ul>
                                            {uploadedFiles_Shipping.map(
                                              (file, index) => (
                                                <div
                                                  key={index}
                                                  className="BorderFile"
                                                >
                                                  <Typography className="Font_File">
                                                    <span
                                                      style={{
                                                        marginLeft: "10px",
                                                      }}
                                                    >
                                                      {file.type.startsWith(
                                                        "image/"
                                                      ) ? (
                                                        <img
                                                          src={URL.createObjectURL(
                                                            file
                                                          )}
                                                          alt={file.name}
                                                          className="Img_file"
                                                        />
                                                      ) : (
                                                        <>
                                                          {file.name.endsWith(
                                                            ".xlsx"
                                                          ) ? (
                                                            <FileExcelOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#65B741",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".pdf"
                                                            ) ? (
                                                            <FilePdfOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FF6347",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".docx"
                                                            ) ? (
                                                            <FileWordOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#3468C0",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".txt"
                                                            ) ? (
                                                            <FileTextOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#B6BBC4",
                                                              }}
                                                            />
                                                          ) : (
                                                            <FileUnknownOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FFD3A3",
                                                              }}
                                                            />
                                                          )}
                                                        </>
                                                      )}
                                                      {index + 1} {file.name}
                                                    </span>

                                                    <DeleteOutlined
                                                      onClick={() =>
                                                        handleDL_File_Owner(
                                                          index,
                                                          file.name
                                                        )
                                                      }
                                                      className="Icon_DeleteFile"
                                                    />
                                                  </Typography>
                                                </div>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      )}
                                      <div
                                        style={{
                                          textAlign: "right",
                                          marginTop: "5px",
                                        }}
                                      >
                                        <Button
                                          variant="contained"
                                          onClick={handleSav_Own}
                                        >
                                          Save
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            </table>

                            <table>
                              <tr>
                                <td className=""></td>
                              </tr>
                              <tr></tr>
                              <tr
                                style={{
                                  width: "100%",
                                  marginBottom: "20px",
                                  marginTop: "20px",
                                }}
                              ></tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                </table>
              </div>
            </Card>
          </Card>
        )}
        {/* Sale GP01003 */}
        {Showtype === "GP01003" && (
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
                  {/* PTE (ENV) input weight/size: */}
                  <tr>
                    <td className="Style4">
                      <Typography variant="subtitle2" >
                        PTE (ENV) input weight/size:
                      </Typography>
                    </td>
                    <td>
                      <FormControl className="Style3">
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={selectpte_input_weight_size}
                          disabled={read_pte_input_weight_size}
                          onChange={(e) => {
                            setselectpte_input_weight_size(e.target.value);
                            setpte_dept(e.target.value);
                            // setexport_clearance(e.target.value);
                            setpte_upload_file(e.target.value);
                          }}
                          size="small"
                          style={{
                            borderColor: ErrorPTE_INPUT_WS ? "red" : undefined,
                            backgroundColor: read_pte_input_weight_size
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                            width: "68%",
                          }}
                          error={
                            ErrorPTE_INPUT_WS &&
                            (!selectpte_input_weight_size ||
                              selectpte_input_weight_size == "null")
                          }
                        >
                          {pte_input_weight_size.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                        {ErrorPTE_INPUT_WS && !ErrorPTE_INPUT_WS && (
                          <FormHelperText style={{ color: "red" }}>
                            Please select: PTE (ENV) input weight/size
                          </FormHelperText>
                        )}
                      </FormControl>
                    </td>

                    <td style={{ width: "20%" }}></td>
                    <td className="Style7">
                      <Typography
                        variant="subtitle2"
                        style={{ visibility: chk_pte_weight_size }}
                      >
                        {" "}
                        Action Date:
                      </Typography>
                    </td>
                    <td className="Style6">
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={action__pte_weight_size}
                          onChange={(e) =>
                            setaction__pte_weight_size(e.target.value)
                          }
                          disabled
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            visibility: chk_pte_weight_size,
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>
                  <tr style={{ display: CM_pte_weight_size }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">Comment:</Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          value={cmmtradio_pte_weight_size}
                          disabled={read_pte_input_weight_size_cmmt}
                          style={{
                            backgroundColor: read_pte_input_weight_size_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          onChange={(e) =>
                            setcmmtradio_pte_weight_size(e.target.value)
                          }
                          size="small"
                        />
                      </FormControl>
                    </td>
                  </tr>

                  {Showtype == "GP01003" &&
                    STS1 != "FLSL001" &&
                    STS1 != "FLSL002" &&
                    STS1 != "FLSL003" &&
                    STS1 != "FLSL004" &&
                    STS1 != "FLSL005" &&
                    STS1 != "FLSL006" &&
                    STS1 != "FLSL007" &&
                    STS1 != "FLSL008" &&
                    For_sts_reject !== "R" && (
                      <tr>
                        <td className="Style4"></td>
                        <td colSpan={5}>
                          <div style={{ margin: "20px" }}>
                            <table>
                              <tr>
                                <td className="Table_Show_req1">
                                  <td
                                    className="Show-Data-File"
                                    style={{ textAlign: "center" }}
                                  >
                                    <div>
                                      <TableContainer component={Paper}>
                                        <Table className="FamFilePopUp">
                                          <TableHead>
                                            <TableRow>
                                              <TableCell></TableCell>
                                              <TableCell>No.</TableCell>
                                              <TableCell>File</TableCell>
                                              <TableCell>View</TableCell>
                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                            {showfilepte_env_ws.length === 0 ? (
                                              <TableRow>
                                                <TableCell
                                                  colSpan={4}
                                                  style={{
                                                    textAlign: "center",
                                                  }}
                                                >
                                                  <Empty />
                                                </TableCell>
                                              </TableRow>
                                            ) : (
                                              showfilepte_env_ws.map(
                                                (option, index) => (
                                                  <TableRow key={index}>
                                                    <TableCell>
                                                      {STS1 === "FLSL009" && (
                                                        <DeleteOutlined
                                                          onClick={() =>
                                                            handleDL_File_Owner(
                                                              showfilepte_env_ws[
                                                                index
                                                              ][0],

                                                              showfilepte_env_ws[
                                                                index
                                                              ][3],

                                                              showfilepte_env_ws[
                                                                index
                                                              ][4]
                                                            )
                                                          }
                                                          className="Icon_DeleteFile"
                                                        />
                                                      )}
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfilepte_env_ws[
                                                          index
                                                        ][2]
                                                      }
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfilepte_env_ws[
                                                          index
                                                        ][3]
                                                      }
                                                    </TableCell>
                                                    <TableCell
                                                      style={{
                                                        textAlign: "center",
                                                        color: "blue",
                                                        textDecoration:
                                                          "underline",
                                                      }}
                                                    >
                                                      <PlagiarismIcon
                                                        style={{
                                                          cursor: "pointer",
                                                          fontSize: "30px",
                                                        }}
                                                        onClick={() =>
                                                          downloadFile(
                                                            showfilepte_env_ws[
                                                              index
                                                            ][4]
                                                          )
                                                        }
                                                      >
                                                        {
                                                          showfilepte_env_ws[
                                                            index
                                                          ][3]
                                                        }
                                                      </PlagiarismIcon>
                                                    </TableCell>
                                                  </TableRow>
                                                )
                                              )
                                            )}
                                          </TableBody>
                                        </Table>
                                      </TableContainer>
                                    </div>
                                  </td>
                                </td>
                                <td style={{ width: "20px" }}></td>
                                <td className="Table_Show_req2">
                                  <input
                                    type="file"
                                    multiple
                                    onChange={handleFileUpload_Own}
                                    style={{ display: "none" }}
                                    id="fileInput"
                                    ref={fileInputRef}
                                  />
                                  {STS1 == "FLSL009" && (
                                    <div style={{ width: "400px" }}>
                                      <label
                                        htmlFor="fileInput"
                                        onDragOver={handleDragOve_Own}
                                        onDrop={handleDrop_Own}
                                        className="bt_ChooseFile"
                                      >
                                        <CloudUploadOutlined
                                          style={{
                                            fontSize: "30px",
                                            color: "#86B6F6",
                                          }}
                                        />
                                        <br />
                                        <span style={{ fontWeight: "bold" }}>
                                          Drop your files here
                                        </span>
                                        <br />
                                        or
                                        <br />
                                        <Button size="small" component="span">
                                          <b> Browse files</b>
                                        </Button>
                                      </label>

                                      {uploadedFiles_pte_env_ws.length > 0 && (
                                        <div>
                                          <ul>
                                            {uploadedFiles_pte_env_ws.map(
                                              (file, index) => (
                                                <div
                                                  key={index}
                                                  className="BorderFile"
                                                >
                                                  <Typography className="Font_File">
                                                    <span
                                                      style={{
                                                        marginLeft: "10px",
                                                      }}
                                                    >
                                                      {file.type.startsWith(
                                                        "image/"
                                                      ) ? (
                                                        <img
                                                          src={URL.createObjectURL(
                                                            file
                                                          )}
                                                          alt={file.name}
                                                          className="Img_file"
                                                        />
                                                      ) : (
                                                        <>
                                                          {file.name.endsWith(
                                                            ".xlsx"
                                                          ) ? (
                                                            <FileExcelOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#65B741",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".pdf"
                                                            ) ? (
                                                            <FilePdfOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FF6347",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".docx"
                                                            ) ? (
                                                            <FileWordOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#3468C0",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".txt"
                                                            ) ? (
                                                            <FileTextOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#B6BBC4",
                                                              }}
                                                            />
                                                          ) : (
                                                            <FileUnknownOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FFD3A3",
                                                              }}
                                                            />
                                                          )}
                                                        </>
                                                      )}
                                                      {index + 1} {file.name}
                                                    </span>

                                                    <DeleteOutlined
                                                      onClick={() =>
                                                        handleDL_File_Owner(
                                                          index,
                                                          file.name
                                                        )
                                                      }
                                                      className="Icon_DeleteFile"
                                                    />
                                                  </Typography>
                                                </div>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      )}
                                      <div
                                        style={{
                                          textAlign: "right",
                                          marginTop: "5px",
                                        }}
                                      >
                                        <Button
                                          variant="contained"
                                          onClick={handleSav_Own}
                                        >
                                          Save
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            </table>

                            <table>
                              <tr>
                                <td className=""></td>
                              </tr>
                              <tr></tr>
                              <tr
                                style={{
                                  width: "100%",
                                  marginBottom: "20px",
                                  marginTop: "20px",
                                }}
                              ></tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  {/* //////////////////////////// */}
                  {/* PLN Staff contact BOI : */}
                  <tr>
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        PLN Staff contact BOI :
                      </Typography>
                    </td>
                    <td>
                      <FormControl className="Style3">
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={selectpln_staff_boi}
                          disabled={read_pte_staff_boi}
                          onChange={(e) => {
                            setselectpln_staff_boi(e.target.value);
                            setpln_req_inv(e.target.value);
                            setpln_upload_final(e.target.value);
                            setpln_staff_bidding(e.target.value);
                          }}
                          size="small"
                          style={{
                            borderColor: ErrorPLN_Staff_BOI ? "red" : undefined,
                            backgroundColor: read_pte_staff_boi
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                            width: "68%",
                          }}
                          error={
                            ErrorPLN_Staff_BOI &&
                            (!selectpln_staff_boi ||
                              selectpln_staff_boi == "null")
                          }
                        >
                          {pln_staff_boi.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                        {/* {selectpln_staff_boi && !selectpln_staff_boi && (
                          <FormHelperText style={{ color: "red" }}>
                            Please select: PLN Staff contact BOI 
                          </FormHelperText>
                        )} */}
                      </FormControl>
                    </td>

                    <td style={{ width: "20%" }}></td>
                    <td className="Style7">
                      <Typography
                        variant="subtitle2"
                        style={{ visibility: chk_pte_staff_boi }}
                      >
                        {" "}
                        Action Date:
                      </Typography>
                    </td>
                    <td className="Style6">
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={action__pte_staff_boi}
                          onChange={(e) =>
                            setaction__pte_staff_boi(e.target.value)
                          }
                          disabled
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            visibility: chk_pte_staff_boi,
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>
                  <tr style={{ display: CM_pte_staff_boi }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">Comment:</Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          value={cmmtradio_pte_staff_boi}
                          disabled={read_pte_staff_boi_cmmt}
                          style={{
                            backgroundColor: read_pte_staff_boi_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          onChange={(e) =>
                            setcmmtradio_pte_staff_boi(e.target.value)
                          }
                          size="small"
                        />
                      </FormControl>
                    </td>
                  </tr>

                  {Showtype == "GP01003" &&
                    STS1 != "FLSL001" &&
                    STS1 != "FLSL002" &&
                    STS1 != "FLSL003" &&
                    STS1 != "FLSL004" &&
                    STS1 != "FLSL005" &&
                    STS1 != "FLSL006" &&
                    STS1 != "FLSL007" &&
                    STS1 != "FLSL008" &&
                    STS1 != "FLSL009" &&
                    For_sts_reject !== "R" && (
                      <tr>
                        <td className="Style4"></td>
                        <td colSpan={5}>
                          <div style={{ margin: "20px" }}>
                            <table>
                              <tr>
                                <td className="Table_Show_req1">
                                  <td
                                    className="Show-Data-File"
                                    style={{ textAlign: "center" }}
                                  >
                                    <div>
                                      <TableContainer component={Paper}>
                                        <Table className="FamFilePopUp">
                                          <TableHead>
                                            <TableRow>
                                              <TableCell></TableCell>
                                              <TableCell>No.</TableCell>
                                              <TableCell>File</TableCell>
                                              <TableCell>View</TableCell>
                                            </TableRow>
                                          </TableHead>

                                          <TableBody>
                                            {showfilepln_stf_boi.length === 0 ? (
                                              <TableRow>
                                                <TableCell
                                                  colSpan={4}
                                                  style={{
                                                    textAlign: "center",
                                                  }}
                                                >
                                                  <Empty />
                                                </TableCell>
                                              </TableRow>
                                            ) : (
                                              showfilepln_stf_boi.map(
                                                (option, index) => (
                                                  <TableRow key={index}>
                                                    <TableCell>
                                                      {STS1 == "FLSL010" && (
                                                        <DeleteOutlined
                                                          onClick={() =>
                                                            handleDL_File_Owner(
                                                              showfilepln_stf_boi[
                                                                index
                                                              ][0],
                                                              showfilepln_stf_boi[
                                                                index
                                                              ][3],
                                                              showfilepln_stf_boi[
                                                                index
                                                              ][4]
                                                            )
                                                          }
                                                          className="Icon_DeleteFile"
                                                        />
                                                      )}
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfilepln_stf_boi[
                                                          index
                                                        ][2]
                                                      }
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfilepln_stf_boi[
                                                          index
                                                        ][3]
                                                      }
                                                    </TableCell>
                                                    <TableCell
                                                      style={{
                                                        textAlign: "center",
                                                        color: "blue",
                                                        textDecoration:
                                                          "underline",
                                                      }}
                                                    >
                                                      <PlagiarismIcon
                                                        style={{
                                                          cursor: "pointer",
                                                          fontSize: "30px",
                                                        }}
                                                        onClick={() =>
                                                          downloadFile(
                                                            showfilepln_stf_boi[
                                                              index
                                                            ][4]
                                                          )
                                                        }
                                                      >
                                                        {
                                                          showfilepln_stf_boi[
                                                            index
                                                          ][3]
                                                        }
                                                      </PlagiarismIcon>
                                                    </TableCell>
                                                  </TableRow>
                                                )
                                              )
                                            )}
                                          </TableBody>
                                        </Table>
                                      </TableContainer>
                                    </div>
                                  </td>
                                </td>
                                <td style={{ width: "20px" }}></td>
                                <td className="Table_Show_req2">
                                  <input
                                    type="file"
                                    multiple
                                    onChange={handleFileUpload_Own}
                                    style={{ display: "none" }}
                                    id="fileInput"
                                    ref={fileInputRef}
                                  />
                                  {STS1 == "FLSL010" && (
                                    <div style={{ width: "400px" }}>
                                      <label
                                        htmlFor="fileInput"
                                        onDragOver={handleDragOve_Own}
                                        onDrop={handleDrop_Own}
                                        className="bt_ChooseFile"
                                      >
                                        <CloudUploadOutlined
                                          style={{
                                            fontSize: "30px",
                                            color: "#86B6F6",
                                          }}
                                        />
                                        <br />
                                        <span style={{ fontWeight: "bold" }}>
                                          Drop your files here
                                        </span>
                                        <br />
                                        or
                                        <br />
                                        <Button size="small" component="span">
                                          <b> Browse files</b>
                                        </Button>
                                      </label>

                                      {uploadedFiles_pln_stf_boi.length > 0 && (
                                        <div>
                                          <ul>
                                            {uploadedFiles_pln_stf_boi.map(
                                              (file, index) => (
                                                <div
                                                  key={index}
                                                  className="BorderFile"
                                                >
                                                  <Typography className="Font_File">
                                                    <span
                                                      style={{
                                                        marginLeft: "10px",
                                                      }}
                                                    >
                                                      {file.type.startsWith(
                                                        "image/"
                                                      ) ? (
                                                        <img
                                                          src={URL.createObjectURL(
                                                            file
                                                          )}
                                                          alt={file.name}
                                                          className="Img_file"
                                                        />
                                                      ) : (
                                                        <>
                                                          {file.name.endsWith(
                                                            ".xlsx"
                                                          ) ? (
                                                            <FileExcelOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#65B741",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".pdf"
                                                            ) ? (
                                                            <FilePdfOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FF6347",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".docx"
                                                            ) ? (
                                                            <FileWordOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#3468C0",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".txt"
                                                            ) ? (
                                                            <FileTextOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#B6BBC4",
                                                              }}
                                                            />
                                                          ) : (
                                                            <FileUnknownOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FFD3A3",
                                                              }}
                                                            />
                                                          )}
                                                        </>
                                                      )}
                                                      {index + 1} {file.name}
                                                    </span>

                                                    <DeleteOutlined
                                                      onClick={() =>
                                                        handleDL_File_Owner(
                                                          index,
                                                          file.name
                                                        )
                                                      }
                                                      className="Icon_DeleteFile"
                                                    />
                                                  </Typography>
                                                </div>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      )}
                                      <div
                                        style={{
                                          textAlign: "right",
                                          marginTop: "5px",
                                        }}
                                      >
                                        <Button
                                          variant="contained"
                                          onClick={handleSav_Own}
                                        >
                                          Save
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            </table>

                            <table>
                              <tr>
                                <td className=""></td>
                              </tr>
                              <tr></tr>
                              <tr
                                style={{
                                  width: "100%",
                                  marginBottom: "20px",
                                  marginTop: "20px",
                                }}
                              ></tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  {/* //////////////////////////// */}
                  {/* Import & BOI prepare : */}
                  <tr>
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        Import & BOI prepare :
                      </Typography>
                    </td>
                    <td>
                      <FormControl className="Style3">
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={selectimport_boi_prepare}
                          disabled={read_boi_input_data}
                          onChange={(e) => {
                            setselectimport_boi_prepare(e.target.value);
                            setthai_catergories(e.target.value);
                          }}
                          size="small"
                          style={{
                            borderColor: Errorimport_boi_prepare
                              ? "red"
                              : undefined,
                            backgroundColor: read_boi_input_data
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                            width: "68%",
                          }}
                          error={
                            Errorimport_boi_prepare &&
                            (!selectimport_boi_prepare ||
                              selectimport_boi_prepare == "null")
                          }
                        >
                          {import_boi_prepare.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                        {Errorimport_boi_prepare && !selectimport_boi_prepare && (
                          <FormHelperText style={{ color: "red" }}>
                            Please select: Import & BOI prepare
                          </FormHelperText>
                        )}
                      </FormControl>
                    </td>

                    <td style={{ width: "20%" }}></td>
                    <td className="Style7">
                      <Typography
                        variant="subtitle2"
                        style={{ visibility: chk_import_boi_prepare }}
                      >
                        {" "}
                        Action Date:
                      </Typography>
                    </td>
                    <td className="Style6">
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={action__import_boi_prepare}
                          onChange={(e) =>
                            setaction__import_boi_prepare(e.target.value)
                          }
                          disabled
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            visibility: chk_import_boi_prepare,
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>
                  <tr style={{ display: CM_import_boi_prepare }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">Comment:</Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          value={cmmtradio_import_boi_prepare}
                          disabled={read_import_boi_prepare_cmmt}
                          style={{
                            backgroundColor: read_import_boi_prepare_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          onChange={(e) =>
                            setcmmtradio_import_boi_prepare(e.target.value)
                          }
                          size="small"
                        />
                      </FormControl>
                    </td>
                  </tr>
                  {Showtype == "GP01003" &&
                    STS1 != "FLSL001" &&
                    STS1 != "FLSL002" &&
                    STS1 != "FLSL003" &&
                    STS1 != "FLSL004" &&
                    STS1 != "FLSL005" &&
                    STS1 != "FLSL006" &&
                    STS1 != "FLSL007" &&
                    STS1 != "FLSL008" &&
                    STS1 != "FLSL009" &&
                    STS1 != "FLSL010" &&
                    For_sts_reject !== "R" && (
                      <tr>
                        <td className="Style4"></td>
                        <td colSpan={5}>
                          <div style={{ margin: "20px" }}>
                            <table>
                              <tr>
                                <td className="Table_Show_req1">
                                  <td
                                    className="Show-Data-File"
                                    style={{ textAlign: "center" }}
                                  >
                                    <div>
                                      <TableContainer component={Paper}>
                                        <Table className="FamFilePopUp">
                                          <TableHead>
                                            <TableRow>
                                              <TableCell></TableCell>
                                              <TableCell>No.</TableCell>
                                              <TableCell>File</TableCell>
                                              <TableCell>View</TableCell>
                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                            {showfileimp_boi_prepare.length === 0 ? (
                                              <TableRow>
                                                <TableCell
                                                  colSpan={4}
                                                  style={{
                                                    textAlign: "center",
                                                  }}
                                                >
                                                  <Empty />
                                                </TableCell>
                                              </TableRow>
                                            ) : (
                                              showfileimp_boi_prepare.map(
                                                (option, index) => (
                                                  <TableRow key={index}>
                                                    <TableCell>
                                                      {STS1 == "FLSL011" && (
                                                        <DeleteOutlined
                                                          onClick={() =>
                                                            handleDL_File_Owner(
                                                              showfileimp_boi_prepare[
                                                                index
                                                              ][0],
                                                              showfileimp_boi_prepare[
                                                                index
                                                              ][3],
                                                              showfileimp_boi_prepare[
                                                                index
                                                              ][4]
                                                            )
                                                          }
                                                          className="Icon_DeleteFile"
                                                        />
                                                      )}
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfileimp_boi_prepare[
                                                          index
                                                        ][2]
                                                      }
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfileimp_boi_prepare[
                                                          index
                                                        ][3]
                                                      }
                                                    </TableCell>
                                                    <TableCell
                                                      style={{
                                                        textAlign: "center",
                                                        color: "blue",
                                                        textDecoration:
                                                          "underline",
                                                      }}
                                                    >
                                                      <PlagiarismIcon
                                                        style={{
                                                          cursor: "pointer",
                                                          fontSize: "30px",
                                                        }}
                                                        onClick={() =>
                                                          downloadFile(
                                                            showfileimp_boi_prepare[
                                                              index
                                                            ][4]
                                                          )
                                                        }
                                                      >
                                                        {
                                                          showfileimp_boi_prepare[
                                                            index
                                                          ][3]
                                                        }
                                                      </PlagiarismIcon>
                                                    </TableCell>
                                                  </TableRow>
                                                )
                                              )
                                            )}
                                          </TableBody>
                                        </Table>
                                      </TableContainer>
                                    </div>
                                  </td>
                                </td>
                                <td style={{ width: "20px" }}></td>
                                <td className="Table_Show_req2">
                                  <input
                                    type="file"
                                    multiple
                                    onChange={handleFileUpload_Own}
                                    style={{ display: "none" }}
                                    id="fileInput"
                                    ref={fileInputRef}
                                  />
                                  {STS1 == "FLSL011" && (
                                    <div style={{ width: "400px" }}>
                                      <label
                                        htmlFor="fileInput"
                                        onDragOver={handleDragOve_Own}
                                        onDrop={handleDrop_Own}
                                        className="bt_ChooseFile"
                                      >
                                        <CloudUploadOutlined
                                          style={{
                                            fontSize: "30px",
                                            color: "#86B6F6",
                                          }}
                                        />
                                        <br />
                                        <span style={{ fontWeight: "bold" }}>
                                          Drop your files here
                                        </span>
                                        <br />
                                        or
                                        <br />
                                        <Button size="small" component="span">
                                          <b> Browse files</b>
                                        </Button>
                                      </label>

                                      {uploadedFiles_imp_boi_prepare.length > 0 && (
                                        <div>
                                          <ul>
                                            {uploadedFiles_imp_boi_prepare.map(
                                              (file, index) => (
                                                <div
                                                  key={index}
                                                  className="BorderFile"
                                                >
                                                  <Typography className="Font_File">
                                                    <span
                                                      style={{
                                                        marginLeft: "10px",
                                                      }}
                                                    >
                                                      {file.type.startsWith(
                                                        "image/"
                                                      ) ? (
                                                        <img
                                                          src={URL.createObjectURL(
                                                            file
                                                          )}
                                                          alt={file.name}
                                                          className="Img_file"
                                                        />
                                                      ) : (
                                                        <>
                                                          {file.name.endsWith(
                                                            ".xlsx"
                                                          ) ? (
                                                            <FileExcelOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#65B741",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".pdf"
                                                            ) ? (
                                                            <FilePdfOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FF6347",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".docx"
                                                            ) ? (
                                                            <FileWordOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#3468C0",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".txt"
                                                            ) ? (
                                                            <FileTextOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#B6BBC4",
                                                              }}
                                                            />
                                                          ) : (
                                                            <FileUnknownOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FFD3A3",
                                                              }}
                                                            />
                                                          )}
                                                        </>
                                                      )}
                                                      {index + 1} {file.name}
                                                    </span>

                                                    <DeleteOutlined
                                                      onClick={() =>
                                                        handleDL_File_Owner(
                                                          index,
                                                          file.name
                                                        )
                                                      }
                                                      className="Icon_DeleteFile"
                                                    />
                                                  </Typography>
                                                </div>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      )}
                                      <div
                                        style={{
                                          textAlign: "right",
                                          marginTop: "5px",
                                        }}
                                      >
                                        <Button
                                          variant="contained"
                                          onClick={handleSav_Own}
                                        >
                                          Save
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            </table>

                            <table>
                              <tr>
                                <td className=""></td>
                              </tr>
                              <tr></tr>
                              <tr
                                style={{
                                  width: "100%",
                                  marginBottom: "20px",
                                  marginTop: "20px",
                                }}
                              ></tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  {/* //////////////////////////// */}
                  {/* BOI Input data Import :*/}
                  <tr>
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        BOI Input data Import:
                      </Typography>
                    </td>
                    <td>
                      <FormControl className="Style3">
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={selectboi_input_data}
                          disabled={read_boi_input_data}
                          onChange={(e) =>
                            setselectboi_input_data(e.target.value)
                          }
                          size="small"
                          style={{
                            borderColor: Errorboi_input_data
                              ? "red"
                              : undefined,
                            backgroundColor: read_boi_input_data
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                            width: "68%",
                          }}
                          error={
                            Errorboi_input_data &&
                            (!selectboi_input_data ||
                              selectboi_input_data == "null")
                          }
                        >
                          {boi_input_data.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                        {Errorboi_input_data && !selectboi_input_data && (
                          <FormHelperText style={{ color: "red" }}>
                            Please select: BOI Input data Import
                          </FormHelperText>
                        )}
                      </FormControl>
                    </td>

                    <td style={{ width: "20%" }}></td>
                    <td className="Style7">
                      <Typography
                        variant="subtitle2"
                        style={{ visibility: chk_boi_input_data }}
                      >
                        {" "}
                        Action Date:
                      </Typography>
                    </td>
                    <td className="Style6">
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={action__boi_input_data}
                          onChange={(e) =>
                            setaction__boi_input_data(e.target.value)
                          }
                          disabled
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            visibility: chk_boi_input_data,
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>
                  <tr style={{ display: CM_boi_input_data }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">Comment:</Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          value={cmmtradio_boi_input_data}
                          disabled={read_boi_input_data_cmmt}
                          style={{
                            backgroundColor: read_boi_input_data_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          onChange={(e) =>
                            setcmmtradio_boi_input_data(e.target.value)
                          }
                          size="small"
                        />
                      </FormControl>
                    </td>
                  </tr>
                  {Showtype == "GP01003" &&
                    STS1 != "FLSL001" &&
                    STS1 != "FLSL002" &&
                    STS1 != "FLSL003" &&
                    STS1 != "FLSL004" &&
                    STS1 != "FLSL005" &&
                    STS1 != "FLSL006" &&
                    STS1 != "FLSL007" &&
                    STS1 != "FLSL008" &&
                    STS1 != "FLSL009" &&
                    STS1 != "FLSL010" &&
                    STS1 != "FLSL011" &&
                    For_sts_reject !== "R" && (
                      <tr>
                        <td className="Style4"></td>
                        <td colSpan={5}>
                          <div style={{ margin: "20px" }}>
                            <table>
                              <tr>
                                <td className="Table_Show_req1">
                                  <td
                                    className="Show-Data-File"
                                    style={{ textAlign: "center" }}
                                  >
                                    <div>
                                      <TableContainer component={Paper}>
                                        <Table className="FamFilePopUp">
                                          <TableHead>
                                            <TableRow>
                                              <TableCell></TableCell>
                                              <TableCell>No.</TableCell>
                                              <TableCell>File</TableCell>
                                              <TableCell>View</TableCell>
                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                            {showfileimp_input_data.length === 0 ? (
                                              <TableRow>
                                                <TableCell
                                                  colSpan={4}
                                                  style={{
                                                    textAlign: "center",
                                                  }}
                                                >
                                                  <Empty />
                                                </TableCell>
                                              </TableRow>
                                            ) : (
                                              showfileimp_input_data.map(
                                                (option, index) => (
                                                  <TableRow key={index}>
                                                    <TableCell>
                                                      {STS1 == "FLSL012" && (
                                                        <DeleteOutlined
                                                          onClick={() =>
                                                            handleDL_File_Owner(
                                                              showfileimp_input_data[
                                                                index
                                                              ][0],
                                                              showfileimp_input_data[
                                                                index
                                                              ][3],
                                                              showfileimp_input_data[
                                                                index
                                                              ][4]
                                                            )
                                                          }
                                                          className="Icon_DeleteFile"
                                                        />
                                                      )}
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfileimp_input_data[
                                                          index
                                                        ][2]
                                                      }
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfileimp_input_data[
                                                          index
                                                        ][3]
                                                      }
                                                    </TableCell>
                                                    <TableCell
                                                      style={{
                                                        textAlign: "center",
                                                        color: "blue",
                                                        textDecoration:
                                                          "underline",
                                                      }}
                                                    >
                                                      <PlagiarismIcon
                                                        style={{
                                                          cursor: "pointer",
                                                          fontSize: "30px",
                                                        }}
                                                        onClick={() =>
                                                          downloadFile(
                                                            showfileimp_input_data[
                                                              index
                                                            ][4]
                                                          )
                                                        }
                                                      >
                                                        {
                                                          showfileimp_input_data[
                                                            index
                                                          ][3]
                                                        }
                                                      </PlagiarismIcon>
                                                    </TableCell>
                                                  </TableRow>
                                                )
                                              )
                                            )}
                                          </TableBody>
                                        </Table>
                                      </TableContainer>
                                    </div>
                                  </td>
                                </td>
                                <td style={{ width: "20px" }}></td>
                                <td className="Table_Show_req2">
                                  <input
                                    type="file"
                                    multiple
                                    onChange={handleFileUpload_Own}
                                    style={{ display: "none" }}
                                    id="fileInput"
                                    ref={fileInputRef}
                                  />
                                  {STS1 == "FLSL012" && (
                                    <div style={{ width: "400px" }}>
                                      <label
                                        htmlFor="fileInput"
                                        onDragOver={handleDragOve_Own}
                                        onDrop={handleDrop_Own}
                                        className="bt_ChooseFile"
                                      >
                                        <CloudUploadOutlined
                                          style={{
                                            fontSize: "30px",
                                            color: "#86B6F6",
                                          }}
                                        />
                                        <br />
                                        <span style={{ fontWeight: "bold" }}>
                                          Drop your files here
                                        </span>
                                        <br />
                                        or
                                        <br />
                                        <Button size="small" component="span">
                                          <b> Browse files</b>
                                        </Button>
                                      </label>

                                      {uploadedFiles_imp_input_data.length > 0 && (
                                        <div>
                                          <ul>
                                            {uploadedFiles_imp_input_data.map(
                                              (file, index) => (
                                                <div
                                                  key={index}
                                                  className="BorderFile"
                                                >
                                                  <Typography className="Font_File">
                                                    <span
                                                      style={{
                                                        marginLeft: "10px",
                                                      }}
                                                    >
                                                      {file.type.startsWith(
                                                        "image/"
                                                      ) ? (
                                                        <img
                                                          src={URL.createObjectURL(
                                                            file
                                                          )}
                                                          alt={file.name}
                                                          className="Img_file"
                                                        />
                                                      ) : (
                                                        <>
                                                          {file.name.endsWith(
                                                            ".xlsx"
                                                          ) ? (
                                                            <FileExcelOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#65B741",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".pdf"
                                                            ) ? (
                                                            <FilePdfOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FF6347",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".docx"
                                                            ) ? (
                                                            <FileWordOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#3468C0",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".txt"
                                                            ) ? (
                                                            <FileTextOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#B6BBC4",
                                                              }}
                                                            />
                                                          ) : (
                                                            <FileUnknownOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FFD3A3",
                                                              }}
                                                            />
                                                          )}
                                                        </>
                                                      )}
                                                      {index + 1} {file.name}
                                                    </span>

                                                    <DeleteOutlined
                                                      onClick={() =>
                                                        handleDL_File_Owner(
                                                          index,
                                                          file.name
                                                        )
                                                      }
                                                      className="Icon_DeleteFile"
                                                    />
                                                  </Typography>
                                                </div>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      )}
                                      <div
                                        style={{
                                          textAlign: "right",
                                          marginTop: "5px",
                                        }}
                                      >
                                        <Button
                                          variant="contained"
                                          onClick={handleSav_Own}
                                        >
                                          Save
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            </table>

                            <table>
                              <tr>
                                <td className=""></td>
                              </tr>
                              <tr></tr>
                              <tr
                                style={{
                                  width: "100%",
                                  marginBottom: "20px",
                                  marginTop: "20px",
                                }}
                              ></tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  {/* //////////////////////////// */}

                  {/* Import & BOI input thai catergories :*/}
                  <tr>
                    <td className="Style4">
                      <Typography variant="subtitle2">
                      Imp.& BOI input THA categories:
                      </Typography>
                    </td>
                    <td>
                      <FormControl className="Style3">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={thai_catergories}
                          onChange={(e) => setthai_catergories(e.target.value)}
                          disabled
                          sx={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            width: "68%",
                          }}
                        />
                      </FormControl>
                    </td>

                    <td style={{ width: "20%" }}></td>
                    <td className="Style7">
                      <Typography
                        variant="subtitle2"
                        style={{ visibility: chk_thai_catergories }}
                      >
                        {" "}
                        Action Date:
                      </Typography>
                    </td>
                    <td className="Style6">
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={action__thai_catergories}
                          onChange={(e) =>
                            setaction__thai_catergories(e.target.value)
                          }
                          disabled
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            visibility: chk_thai_catergories,
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>
                  <tr style={{ display: CM_thai_catergories }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        Input thai catergories:
                      </Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          value={Input_thai_categories}
                          disabled={read_thai_catergories_cmmt}
                          style={{
                            backgroundColor: read_thai_catergories_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          onChange={(e) =>
                            setInput_thai_categories(e.target.value)
                          }
                          size="small"
                        />
                      </FormControl>
                    </td>
                  </tr>
                  <tr style={{ display: CM_thai_catergories }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">Comment:</Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          value={cmmtradio_thai_catergories}
                          disabled={read_thai_catergories_cmmt}
                          style={{
                            backgroundColor: read_thai_catergories_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          onChange={(e) =>
                            setcmmtradio_thai_catergories(e.target.value)
                          }
                          size="small"
                        />
                      </FormControl>
                    </td>
                  </tr>
                  {Showtype == "GP01003" &&
                    STS1 != "FLSL001" &&
                    STS1 != "FLSL002" &&
                    STS1 != "FLSL003" &&
                    STS1 != "FLSL004" &&
                    STS1 != "FLSL005" &&
                    STS1 != "FLSL006" &&
                    STS1 != "FLSL007" &&
                    STS1 != "FLSL008" &&
                    STS1 != "FLSL009" &&
                    STS1 != "FLSL010" &&
                    STS1 != "FLSL011" &&
                    STS1 != "FLSL012" &&
                    For_sts_reject !== "R" && (
                      <tr>
                        <td className="Style4"></td>
                        <td colSpan={5}>
                          <div style={{ margin: "20px" }}>
                            <table>
                              <tr>
                                <td className="Table_Show_req1">
                                  <td
                                    className="Show-Data-File"
                                    style={{ textAlign: "center" }}
                                  >
                                    <div>
                                      <TableContainer component={Paper}>
                                        <Table className="FamFilePopUp">
                                          <TableHead>
                                            <TableRow>
                                              <TableCell></TableCell>
                                              <TableCell>No.</TableCell>
                                              <TableCell>File</TableCell>
                                              <TableCell>View</TableCell>
                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                            {showfilethai_catergorise.length === 0 ? (
                                              <TableRow>
                                                <TableCell
                                                  colSpan={4}
                                                  style={{
                                                    textAlign: "center",
                                                  }}
                                                >
                                                  <Empty />
                                                </TableCell>
                                              </TableRow>
                                            ) : (
                                              showfilethai_catergorise.map(
                                                (option, index) => (
                                                  <TableRow key={index}>
                                                    <TableCell>
                                                      {STS1 == "FLSL013" && (
                                                        <DeleteOutlined
                                                          onClick={() =>
                                                            handleDL_File_Owner(
                                                              showfilethai_catergorise[
                                                                index
                                                              ][0],
                                                              showfilethai_catergorise[
                                                                index
                                                              ][3],
                                                              showfilethai_catergorise[
                                                                index
                                                              ][4]
                                                            )
                                                          }
                                                          className="Icon_DeleteFile"
                                                        />
                                                      )}
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfilethai_catergorise[
                                                          index
                                                        ][2]
                                                      }
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfilethai_catergorise[
                                                          index
                                                        ][3]
                                                      }
                                                    </TableCell>
                                                    <TableCell
                                                      style={{
                                                        textAlign: "center",
                                                        color: "blue",
                                                        textDecoration:
                                                          "underline",
                                                      }}
                                                    >
                                                      <PlagiarismIcon
                                                        style={{
                                                          cursor: "pointer",
                                                          fontSize: "30px",
                                                        }}
                                                        onClick={() =>
                                                          downloadFile(
                                                            showfilethai_catergorise[
                                                              index
                                                            ][4]
                                                          )
                                                        }
                                                      >
                                                        {
                                                          showfilethai_catergorise[
                                                            index
                                                          ][3]
                                                        }
                                                      </PlagiarismIcon>
                                                    </TableCell>
                                                  </TableRow>
                                                )
                                              )
                                            )}
                                          </TableBody>
                                        </Table>
                                      </TableContainer>
                                    </div>
                                  </td>
                                </td>
                                <td style={{ width: "20px" }}></td>
                                <td className="Table_Show_req2">
                                  <input
                                    type="file"
                                    multiple
                                    onChange={handleFileUpload_Own}
                                    style={{ display: "none" }}
                                    id="fileInput"
                                    ref={fileInputRef}
                                  />
                                  {STS1 == "FLSL013" && (
                                    <div style={{ width: "400px" }}>
                                      <label
                                        htmlFor="fileInput"
                                        onDragOver={handleDragOve_Own}
                                        onDrop={handleDrop_Own}
                                        className="bt_ChooseFile"
                                      >
                                        <CloudUploadOutlined
                                          style={{
                                            fontSize: "30px",
                                            color: "#86B6F6",
                                          }}
                                        />
                                        <br />
                                        <span style={{ fontWeight: "bold" }}>
                                          Drop your files here
                                        </span>
                                        <br />
                                        or
                                        <br />
                                        <Button size="small" component="span">
                                          <b> Browse files</b>
                                        </Button>
                                      </label>

                                      {uploadedFiles_thai_catergorise.length > 0 && (
                                        <div>
                                          <ul>
                                            {uploadedFiles_thai_catergorise.map(
                                              (file, index) => (
                                                <div
                                                  key={index}
                                                  className="BorderFile"
                                                >
                                                  <Typography className="Font_File">
                                                    <span
                                                      style={{
                                                        marginLeft: "10px",
                                                      }}
                                                    >
                                                      {file.type.startsWith(
                                                        "image/"
                                                      ) ? (
                                                        <img
                                                          src={URL.createObjectURL(
                                                            file
                                                          )}
                                                          alt={file.name}
                                                          className="Img_file"
                                                        />
                                                      ) : (
                                                        <>
                                                          {file.name.endsWith(
                                                            ".xlsx"
                                                          ) ? (
                                                            <FileExcelOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#65B741",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".pdf"
                                                            ) ? (
                                                            <FilePdfOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FF6347",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".docx"
                                                            ) ? (
                                                            <FileWordOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#3468C0",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".txt"
                                                            ) ? (
                                                            <FileTextOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#B6BBC4",
                                                              }}
                                                            />
                                                          ) : (
                                                            <FileUnknownOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FFD3A3",
                                                              }}
                                                            />
                                                          )}
                                                        </>
                                                      )}
                                                      {index + 1} {file.name}
                                                    </span>

                                                    <DeleteOutlined
                                                      onClick={() =>
                                                        handleDL_File_Owner(
                                                          index,
                                                          file.name
                                                        )
                                                      }
                                                      className="Icon_DeleteFile"
                                                    />
                                                  </Typography>
                                                </div>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      )}
                                      <div
                                        style={{
                                          textAlign: "right",
                                          marginTop: "5px",
                                        }}
                                      >
                                        <Button
                                          variant="contained"
                                          onClick={handleSav_Own}
                                        >
                                          Save
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            </table>

                            <table>
                              <tr>
                                <td className=""></td>
                              </tr>
                              <tr></tr>
                              <tr
                                style={{
                                  width: "100%",
                                  marginBottom: "20px",
                                  marginTop: "20px",
                                }}
                              ></tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  {/* //////////////////////////// */}
                  {/* PLN Staff bidding :*/}
                  <tr>
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        PLN Staff bidding:
                      </Typography>
                    </td>
                    <td>
                      <FormControl className="Style3">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={pln_staff_bidding}
                          onChange={(e) => setpln_staff_bidding(e.target.value)}
                          disabled
                          sx={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            width: "68%",
                          }}
                        />
                      </FormControl>
                    </td>

                    <td style={{ width: "20%" }}></td>
                    <td className="Style7">
                      <Typography
                        variant="subtitle2"
                        style={{ visibility: chk_pln_staff_bidding }}
                      >
                        {" "}
                        Action Date:
                      </Typography>
                    </td>
                    <td className="Style6">
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={action__pln_staff_bidding}
                          onChange={(e) =>
                            setaction__pln_staff_bidding(e.target.value)
                          }
                          disabled
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            visibility: chk_pln_staff_bidding,
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>
                  <tr style={{ display: CM_pln_staff_bidding }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        Bidding result:
                      </Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          value={Bidding_result}
                          disabled={read_pln_staff_bidding_cmmt}
                          style={{
                            backgroundColor: read_pln_staff_bidding_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          onChange={(e) => setBidding_result(e.target.value)}
                          size="small"
                        />
                      </FormControl>
                    </td>
                  </tr>
                  <tr style={{ display: CM_pln_staff_bidding }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">Comment:</Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          value={cmmtradio_pln_staff_bidding}
                          disabled={read_pln_staff_bidding_cmmt}
                          style={{
                            backgroundColor: read_pln_staff_bidding_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          onChange={(e) =>
                            setcmmtradio_pln_staff_bidding(e.target.value)
                          }
                          size="small"
                        />
                      </FormControl>
                    </td>
                  </tr>
                  {Showtype == "GP01003" &&
                    STS1 != "FLSL001" &&
                    STS1 != "FLSL002" &&
                    STS1 != "FLSL003" &&
                    STS1 != "FLSL004" &&
                    STS1 != "FLSL005" &&
                    STS1 != "FLSL006" &&
                    STS1 != "FLSL007" &&
                    STS1 != "FLSL008" &&
                    STS1 != "FLSL009" &&
                    STS1 != "FLSL010" &&
                    STS1 != "FLSL011" &&
                    STS1 != "FLSL012" &&
                    STS1 != "FLSL013" &&
                    For_sts_reject !== "R" && (
                      <tr>
                        <td className="Style4"></td>
                        <td colSpan={5}>
                          <div style={{ margin: "20px" }}>
                            <table>
                              <tr>
                                <td className="Table_Show_req1">
                                  <td
                                    className="Show-Data-File"
                                    style={{ textAlign: "center" }}
                                  >
                                    <div>
                                      <TableContainer component={Paper}>
                                        <Table className="FamFilePopUp">
                                          <TableHead>
                                            <TableRow>
                                              <TableCell></TableCell>
                                              <TableCell>No.</TableCell>
                                              <TableCell>File</TableCell>
                                              <TableCell>View</TableCell>
                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                            {showfilepln_stf_bidding.length === 0 ? (
                                              <TableRow>
                                                <TableCell
                                                  colSpan={4}
                                                  style={{
                                                    textAlign: "center",
                                                  }}
                                                >
                                                  <Empty />
                                                </TableCell>
                                              </TableRow>
                                            ) : (
                                              showfilepln_stf_bidding.map(
                                                (option, index) => (
                                                  <TableRow key={index}>
                                                    <TableCell>
                                                      {STS1 == "FLSL014" && (
                                                        <DeleteOutlined
                                                          onClick={() =>
                                                            handleDL_File_Owner(
                                                              showfilepln_stf_bidding[
                                                                index
                                                              ][0],
                                                              showfilepln_stf_bidding[
                                                                index
                                                              ][3],
                                                              showfilepln_stf_bidding[
                                                                index
                                                              ][4]
                                                            )
                                                          }
                                                          className="Icon_DeleteFile"
                                                        />
                                                      )}
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfilepln_stf_bidding[
                                                          index
                                                        ][2]
                                                      }
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfilepln_stf_bidding[
                                                          index
                                                        ][3]
                                                      }
                                                    </TableCell>
                                                    <TableCell
                                                      style={{
                                                        textAlign: "center",
                                                        color: "blue",
                                                        textDecoration:
                                                          "underline",
                                                      }}
                                                    >
                                                      <PlagiarismIcon
                                                        style={{
                                                          cursor: "pointer",
                                                          fontSize: "30px",
                                                        }}
                                                        onClick={() =>
                                                          downloadFile(
                                                            showfilepln_stf_bidding[
                                                              index
                                                            ][4]
                                                          )
                                                        }
                                                      >
                                                        {
                                                          showfilepln_stf_bidding[
                                                            index
                                                          ][3]
                                                        }
                                                      </PlagiarismIcon>
                                                    </TableCell>
                                                  </TableRow>
                                                )
                                              )
                                            )}
                                          </TableBody>
                                        </Table>
                                      </TableContainer>
                                    </div>
                                  </td>
                                </td>
                                <td style={{ width: "20px" }}></td>
                                <td className="Table_Show_req2">
                                  <input
                                    type="file"
                                    multiple
                                    onChange={handleFileUpload_Own}
                                    style={{ display: "none" }}
                                    id="fileInput"
                                    ref={fileInputRef}
                                  />
                                  {STS1 == "FLSL014" && (
                                    <div style={{ width: "400px" }}>
                                      <label
                                        htmlFor="fileInput"
                                        onDragOver={handleDragOve_Own}
                                        onDrop={handleDrop_Own}
                                        className="bt_ChooseFile"
                                      >
                                        <CloudUploadOutlined
                                          style={{
                                            fontSize: "30px",
                                            color: "#86B6F6",
                                          }}
                                        />
                                        <br />
                                        <span style={{ fontWeight: "bold" }}>
                                          Drop your files here
                                        </span>
                                        <br />
                                        or
                                        <br />
                                        <Button size="small" component="span">
                                          <b> Browse files</b>
                                        </Button>
                                      </label>

                                      {uploadedFiles_pln_stf_bidding.length > 0 && (
                                        <div>
                                          <ul>
                                            {uploadedFiles_pln_stf_bidding.map(
                                              (file, index) => (
                                                <div
                                                  key={index}
                                                  className="BorderFile"
                                                >
                                                  <Typography className="Font_File">
                                                    <span
                                                      style={{
                                                        marginLeft: "10px",
                                                      }}
                                                    >
                                                      {file.type.startsWith(
                                                        "image/"
                                                      ) ? (
                                                        <img
                                                          src={URL.createObjectURL(
                                                            file
                                                          )}
                                                          alt={file.name}
                                                          className="Img_file"
                                                        />
                                                      ) : (
                                                        <>
                                                          {file.name.endsWith(
                                                            ".xlsx"
                                                          ) ? (
                                                            <FileExcelOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#65B741",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".pdf"
                                                            ) ? (
                                                            <FilePdfOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FF6347",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".docx"
                                                            ) ? (
                                                            <FileWordOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#3468C0",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".txt"
                                                            ) ? (
                                                            <FileTextOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#B6BBC4",
                                                              }}
                                                            />
                                                          ) : (
                                                            <FileUnknownOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FFD3A3",
                                                              }}
                                                            />
                                                          )}
                                                        </>
                                                      )}
                                                      {index + 1} {file.name}
                                                    </span>

                                                    <DeleteOutlined
                                                      onClick={() =>
                                                        handleDL_File_Owner(
                                                          index,
                                                          file.name
                                                        )
                                                      }
                                                      className="Icon_DeleteFile"
                                                    />
                                                  </Typography>
                                                </div>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      )}
                                      <div
                                        style={{
                                          textAlign: "right",
                                          marginTop: "5px",
                                        }}
                                      >
                                        <Button
                                          variant="contained"
                                          onClick={handleSav_Own}
                                        >
                                          Save
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            </table>

                            <table>
                              <tr>
                                <td className=""></td>
                              </tr>
                              <tr></tr>
                              <tr
                                style={{
                                  width: "100%",
                                  marginBottom: "20px",
                                  marginTop: "20px",
                                }}
                              ></tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  {/* //////////////////////////// */}
                  {/* PTE (ENV) contact Department of Industrial Works:*/}
                  <tr>
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        PTE (ENV) contact DIW:
                      </Typography>
                    </td>
                    <td>
                      <FormControl className="Style3">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={pte_dept}
                          onChange={(e) => setpte_dept(e.target.value)}
                          disabled
                          sx={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            width: "68%",
                          }}
                        />
                      </FormControl>
                    </td>

                    <td style={{ width: "20%" }}></td>
                    <td className="Style7">
                      <Typography
                        variant="subtitle2"
                        style={{ visibility: chk_pte_dept }}
                      >
                        {" "}
                        Action Date:
                      </Typography>
                    </td>
                    <td className="Style6">
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={action__pte_dept}
                          onChange={(e) => setaction__pte_dept(e.target.value)}
                          disabled
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            visibility: chk_pte_dept,
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>
                  <tr style={{ display: CM_pte_dept }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        Contact date :
                      </Typography>{" "}
                    </td>
                    <td>
                      <FormControl className="Style1">
                        <TextField
                          size="small"
                          type="date"
                          disabled={read_pte_dept_cmmt}
                          style={{
                            
                            backgroundColor: read_pte_dept_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                            width: "68%",
                          }}
                          value={contact_date}
                          error={
                            Errorcontact_date &&
                            (!contact_date || contact_date == "null")
                          }
                          onChange={(e) => setcontact_date(e.target.value)}
                          helperText={
                            Errorcontact_date &&
                            (!contact_date || contact_date == "null")
                              ? "Please Select Contact date "
                              : undefined
                          }
                        />
                      </FormControl>
                    </td>
                  </tr>
                  {/* )} */}
                  <tr style={{ display: CM_pte_dept }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">Comment:</Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          value={cmmtradio_pte_dept}
                          disabled={read_pte_dept_cmmt}
                          style={{
                            backgroundColor: read_pte_dept_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          onChange={(e) =>
                            setcmmtradio_pte_dept(e.target.value)
                          }
                          size="small"
                        />
                      </FormControl>
                    </td>
                  </tr>
                  {Showtype == "GP01003" &&
                    STS1 != "FLSL001" &&
                    STS1 != "FLSL002" &&
                    STS1 != "FLSL003" &&
                    STS1 != "FLSL004" &&
                    STS1 != "FLSL005" &&
                    STS1 != "FLSL006" &&
                    STS1 != "FLSL007" &&
                    STS1 != "FLSL008" &&
                    STS1 != "FLSL009" &&
                    STS1 != "FLSL010" &&
                    STS1 != "FLSL011" &&
                    STS1 != "FLSL012" &&
                    STS1 != "FLSL013" &&
                    STS1 != "FLSL014" &&
                    For_sts_reject !== "R" && (
                      <tr>
                        <td className="Style4"></td>
                        <td colSpan={5}>
                          <div style={{ margin: "20px" }}>
                            <table>
                              <tr>
                                <td className="Table_Show_req1">
                                  <td
                                    className="Show-Data-File"
                                    style={{ textAlign: "center" }}
                                  >
                                    <div>
                                      <TableContainer component={Paper}>
                                        <Table className="FamFilePopUp">
                                          <TableHead>
                                            <TableRow>
                                              <TableCell></TableCell>
                                              <TableCell>No.</TableCell>
                                              <TableCell>File</TableCell>
                                              <TableCell>View</TableCell>
                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                            {showfilepte_dept.length === 0 ? (
                                              <TableRow>
                                                <TableCell
                                                  colSpan={4}
                                                  style={{
                                                    textAlign: "center",
                                                  }}
                                                >
                                                  <Empty />
                                                </TableCell>
                                              </TableRow>
                                            ) : (
                                              showfilepte_dept.map(
                                                (option, index) => (
                                                  <TableRow key={index}>
                                                    <TableCell>
                                                      {STS1 == "FLSL015" && (
                                                        <DeleteOutlined
                                                          onClick={() =>
                                                            handleDL_File_Owner(
                                                              showfilepte_dept[
                                                                index
                                                              ][0],
                                                              showfilepte_dept[
                                                                index
                                                              ][3],
                                                              showfilepte_dept[
                                                                index
                                                              ][4]
                                                            )
                                                          }
                                                          className="Icon_DeleteFile"
                                                        />
                                                      )}
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfilepte_dept[
                                                          index
                                                        ][2]
                                                      }
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfilepte_dept[
                                                          index
                                                        ][3]
                                                      }
                                                    </TableCell>
                                                    <TableCell
                                                      style={{
                                                        textAlign: "center",
                                                        color: "blue",
                                                        textDecoration:
                                                          "underline",
                                                      }}
                                                    >
                                                      <PlagiarismIcon
                                                        style={{
                                                          cursor: "pointer",
                                                          fontSize: "30px",
                                                        }}
                                                        onClick={() =>
                                                          downloadFile(
                                                            showfilepte_dept[
                                                              index
                                                            ][4]
                                                          )
                                                        }
                                                      >
                                                        {
                                                          showfilepte_dept[
                                                            index
                                                          ][3]
                                                        }
                                                      </PlagiarismIcon>
                                                    </TableCell>
                                                  </TableRow>
                                                )
                                              )
                                            )}
                                          </TableBody>
                                        </Table>
                                      </TableContainer>
                                    </div>
                                  </td>
                                </td>
                                <td style={{ width: "20px" }}></td>
                                <td className="Table_Show_req2">
                                  <input
                                    type="file"
                                    multiple
                                    onChange={handleFileUpload_Own}
                                    style={{ display: "none" }}
                                    id="fileInput"
                                    ref={fileInputRef}
                                  />
                                  {STS1 == "FLSL015" && (
                                    <div style={{ width: "400px" }}>
                                      <label
                                        htmlFor="fileInput"
                                        onDragOver={handleDragOve_Own}
                                        onDrop={handleDrop_Own}
                                        className="bt_ChooseFile"
                                      >
                                        <CloudUploadOutlined
                                          style={{
                                            fontSize: "30px",
                                            color: "#86B6F6",
                                          }}
                                        />
                                        <br />
                                        <span style={{ fontWeight: "bold" }}>
                                          Drop your files here
                                        </span>
                                        <br />
                                        or
                                        <br />
                                        <Button size="small" component="span">
                                          <b> Browse files</b>
                                        </Button>
                                      </label>

                                      {uploadedFiles_pte_dept.length > 0 && (
                                        <div>
                                          <ul>
                                            {uploadedFiles_pte_dept.map(
                                              (file, index) => (
                                                <div
                                                  key={index}
                                                  className="BorderFile"
                                                >
                                                  <Typography className="Font_File">
                                                    <span
                                                      style={{
                                                        marginLeft: "10px",
                                                      }}
                                                    >
                                                      {file.type.startsWith(
                                                        "image/"
                                                      ) ? (
                                                        <img
                                                          src={URL.createObjectURL(
                                                            file
                                                          )}
                                                          alt={file.name}
                                                          className="Img_file"
                                                        />
                                                      ) : (
                                                        <>
                                                          {file.name.endsWith(
                                                            ".xlsx"
                                                          ) ? (
                                                            <FileExcelOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#65B741",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".pdf"
                                                            ) ? (
                                                            <FilePdfOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FF6347",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".docx"
                                                            ) ? (
                                                            <FileWordOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#3468C0",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".txt"
                                                            ) ? (
                                                            <FileTextOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#B6BBC4",
                                                              }}
                                                            />
                                                          ) : (
                                                            <FileUnknownOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FFD3A3",
                                                              }}
                                                            />
                                                          )}
                                                        </>
                                                      )}
                                                      {index + 1} {file.name}
                                                    </span>

                                                    <DeleteOutlined
                                                      onClick={() =>
                                                        handleDL_File_Owner(
                                                          index,
                                                          file.name
                                                        )
                                                      }
                                                      className="Icon_DeleteFile"
                                                    />
                                                  </Typography>
                                                </div>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      )}
                                      <div
                                        style={{
                                          textAlign: "right",
                                          marginTop: "5px",
                                        }}
                                      >
                                        <Button
                                          variant="contained"
                                          onClick={handleSav_Own}
                                        >
                                          Save
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            </table>

                            <table>
                              <tr>
                                <td className=""></td>
                              </tr>
                              <tr></tr>
                              <tr
                                style={{
                                  width: "100%",
                                  marginBottom: "20px",
                                  marginTop: "20px",
                                }}
                              ></tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  {/* //////////////////////////// */}
                  {/*BOI make export clearance :*/}
                  <tr>
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        BOI make export clearance :
                      </Typography>
                    </td>
                    <td>
                      <FormControl className="Style3">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={export_clearance}
                          onChange={(e) => setexport_clearance(e.target.value)}
                          disabled
                          sx={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            width: "68%",
                          }}
                        />
                      </FormControl>
                    </td>

                    <td style={{ width: "20%" }}></td>
                    <td className="Style7">
                      <Typography
                        variant="subtitle2"
                        style={{ visibility: chk_export_clearance }}
                      >
                        {" "}
                        Action Date:
                      </Typography>
                    </td>
                    <td className="Style6">
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={action__export_clearance}
                          onChange={(e) =>
                            setaction__export_clearance(e.target.value)
                          }
                          disabled
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            visibility: chk_export_clearance,
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>
                  <tr style={{ display: CM_export_clearance }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">Clearance date  :</Typography>{" "}
                    </td>
                    <td>
                      <FormControl className="Style1">
                        <TextField
                          size="small"
                          type="date"
                          disabled={read_export_clearance_cmmt}
                          style={{
                            backgroundColor: read_export_clearance_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                            width: "68%",
                          }}
                          value={export_clearance_date}
                          error={
                            Errorexport_clearance_date &&
                            (!export_clearance_date ||
                              export_clearance_date == "null")
                          }
                          onChange={(e) =>
                            setexport_clearance_date(e.target.value)
                          }
                          helperText={
                            Errorexport_clearance_date &&
                            (!export_clearance_date ||
                              export_clearance_date == "null")
                              ? "Please Select export Date "
                              : undefined
                          }
                        />
                      </FormControl>
                    </td>
                  </tr>
                  <tr style={{ display: CM_export_clearance }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">Comment:</Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          value={cmmtradio_export_clearance}
                          disabled={read_export_clearance_cmmt}
                          style={{
                            backgroundColor: read_export_clearance_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          onChange={(e) =>
                            setcmmtradio_export_clearance(e.target.value)
                          }
                          size="small"
                        />
                      </FormControl>
                    </td>
                  </tr>
                  {Showtype == "GP01003" &&
                    STS1 != "FLSL001" &&
                    STS1 != "FLSL002" &&
                    STS1 != "FLSL003" &&
                    STS1 != "FLSL004" &&
                    STS1 != "FLSL005" &&
                    STS1 != "FLSL006" &&
                    STS1 != "FLSL007" &&
                    STS1 != "FLSL008" &&
                    STS1 != "FLSL009" &&
                    STS1 != "FLSL010" &&
                    STS1 != "FLSL011" &&
                    STS1 != "FLSL012" &&
                    STS1 != "FLSL013" &&
                    STS1 != "FLSL014" &&
                    STS1 != "FLSL015" &&
                    For_sts_reject !== "R" && (
                      <tr>
                        <td className="Style4"></td>
                        <td colSpan={5}>
                          <div style={{ margin: "20px" }}>
                            <table>
                              <tr>
                                <td className="Table_Show_req1">
                                  <td
                                    className="Show-Data-File"
                                    style={{ textAlign: "center" }}
                                  >
                                    <div>
                                      <TableContainer component={Paper}>
                                        <Table className="FamFilePopUp">
                                          <TableHead>
                                            <TableRow>
                                              <TableCell></TableCell>
                                              <TableCell>No.</TableCell>
                                              <TableCell>File</TableCell>
                                              <TableCell>View</TableCell>
                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                            {showfileboi_exp_clearance.length === 0 ? (
                                              <TableRow>
                                                <TableCell
                                                  colSpan={4}
                                                  style={{
                                                    textAlign: "center",
                                                  }}
                                                >
                                                  <Empty />
                                                </TableCell>
                                              </TableRow>
                                            ) : (
                                              showfileboi_exp_clearance.map(
                                                (option, index) => (
                                                  <TableRow key={index}>
                                                    <TableCell>
                                                      {STS1 == "FLSL016" && (
                                                        <DeleteOutlined
                                                          onClick={() =>
                                                            handleDL_File_Owner(
                                                              showfileboi_exp_clearance[
                                                                index
                                                              ][0],
                                                              showfileboi_exp_clearance[
                                                                index
                                                              ][3],
                                                              showfileboi_exp_clearance[
                                                                index
                                                              ][4]
                                                            )
                                                          }
                                                          className="Icon_DeleteFile"
                                                        />
                                                      )}
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfileboi_exp_clearance[
                                                          index
                                                        ][2]
                                                      }
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfileboi_exp_clearance[
                                                          index
                                                        ][3]
                                                      }
                                                    </TableCell>
                                                    <TableCell
                                                      style={{
                                                        textAlign: "center",
                                                        color: "blue",
                                                        textDecoration:
                                                          "underline",
                                                      }}
                                                    >
                                                      <PlagiarismIcon
                                                        style={{
                                                          cursor: "pointer",
                                                          fontSize: "30px",
                                                        }}
                                                        onClick={() =>
                                                          downloadFile(
                                                            showfileboi_exp_clearance[
                                                              index
                                                            ][4]
                                                          )
                                                        }
                                                      >
                                                        {
                                                          showfileboi_exp_clearance[
                                                            index
                                                          ][3]
                                                        }
                                                      </PlagiarismIcon>
                                                    </TableCell>
                                                  </TableRow>
                                                )
                                              )
                                            )}
                                          </TableBody>
                                        </Table>
                                      </TableContainer>
                                    </div>
                                  </td>
                                </td>
                                <td style={{ width: "20px" }}></td>
                                <td className="Table_Show_req2">
                                  <input
                                    type="file"
                                    multiple
                                    onChange={handleFileUpload_Own}
                                    style={{ display: "none" }}
                                    id="fileInput"
                                    ref={fileInputRef}
                                  />
                                  {STS1 == "FLSL016" && (
                                    <div style={{ width: "400px" }}>
                                      <label
                                        htmlFor="fileInput"
                                        onDragOver={handleDragOve_Own}
                                        onDrop={handleDrop_Own}
                                        className="bt_ChooseFile"
                                      >
                                        <CloudUploadOutlined
                                          style={{
                                            fontSize: "30px",
                                            color: "#86B6F6",
                                          }}
                                        />
                                        <br />
                                        <span style={{ fontWeight: "bold" }}>
                                          Drop your files here
                                        </span>
                                        <br />
                                        or
                                        <br />
                                        <Button size="small" component="span">
                                          <b> Browse files</b>
                                        </Button>
                                      </label>

                                      {uploadedFiles_boi_exp_clearance.length > 0 && (
                                        <div>
                                          <ul>
                                            {uploadedFiles_boi_exp_clearance.map(
                                              (file, index) => (
                                                <div
                                                  key={index}
                                                  className="BorderFile"
                                                >
                                                  <Typography className="Font_File">
                                                    <span
                                                      style={{
                                                        marginLeft: "10px",
                                                      }}
                                                    >
                                                      {file.type.startsWith(
                                                        "image/"
                                                      ) ? (
                                                        <img
                                                          src={URL.createObjectURL(
                                                            file
                                                          )}
                                                          alt={file.name}
                                                          className="Img_file"
                                                        />
                                                      ) : (
                                                        <>
                                                          {file.name.endsWith(
                                                            ".xlsx"
                                                          ) ? (
                                                            <FileExcelOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#65B741",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".pdf"
                                                            ) ? (
                                                            <FilePdfOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FF6347",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".docx"
                                                            ) ? (
                                                            <FileWordOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#3468C0",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".txt"
                                                            ) ? (
                                                            <FileTextOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#B6BBC4",
                                                              }}
                                                            />
                                                          ) : (
                                                            <FileUnknownOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FFD3A3",
                                                              }}
                                                            />
                                                          )}
                                                        </>
                                                      )}
                                                      {index + 1} {file.name}
                                                    </span>

                                                    <DeleteOutlined
                                                      onClick={() =>
                                                        handleDL_File_Owner(
                                                          index,
                                                          file.name
                                                        )
                                                      }
                                                      className="Icon_DeleteFile"
                                                    />
                                                  </Typography>
                                                </div>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      )}
                                      <div
                                        style={{
                                          textAlign: "right",
                                          marginTop: "5px",
                                        }}
                                      >
                                        <Button
                                          variant="contained"
                                          onClick={handleSav_Own}
                                        >
                                          Save
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            </table>

                            <table>
                              <tr>
                                <td className=""></td>
                              </tr>
                              <tr></tr>
                              <tr
                                style={{
                                  width: "100%",
                                  marginBottom: "20px",
                                  marginTop: "20px",
                                }}
                              ></tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  {/* //////////////////////////// */}
                  {/*PTE (ENV) upload file after BOI make export clearance:*/}
                  <tr>
                    <td 
                    className="Style4"
                    >
                      <Typography variant="subtitle2">
                      PTE(ENV) upload file after clearance:
                      </Typography>
                    </td>
                    <td>
                      <FormControl className="Style3">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={pte_upload_file}
                          onChange={(e) => setpte_upload_file(e.target.value)}
                          disabled
                          sx={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            width: "68%",
                          }}
                        />
                      </FormControl>
                    </td>

                    <td style={{ width: "20%" }}></td>
                    <td className="Style7">
                      <Typography
                        variant="subtitle2"
                        style={{ visibility: chk_pte_upload_file }}
                      >
                        {" "}
                        Action Date:
                      </Typography>
                    </td>
                    <td className="Style6">
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={action__pte_upload_file}
                          onChange={(e) =>
                            setaction__pte_upload_file(e.target.value)
                          }
                          disabled
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            visibility: chk_pte_upload_file,
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>
                  
                  <tr style={{ display: CM_pte_upload_file }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        Contact date :
                      </Typography>{" "}
                    </td>
                    <td>
                      <FormControl className="Style1">
                        <TextField
                          size="small"
                          type="date"
                          disabled={read_pte_upload_file_cmmt}
                          style={{
                            backgroundColor: read_pte_upload_file_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                            width: "68%",
                          }}
                          value={contact_date_pte}
                          error={
                            Errorcontact_date_pte &&
                            (!contact_date_pte || contact_date_pte == "null")
                          }
                          onChange={(e) => setcontact_date_pte(e.target.value)}
                          helperText={
                            Errorcontact_date_pte &&
                            (!contact_date_pte || contact_date_pte == "null")
                              ? "Please Select Contact date PTE (ENV) upload file after BOI make export clearance"
                              : undefined
                          }
                        />
                      </FormControl>
                    </td>
                  </tr>
                  <tr style={{ display: CM_pte_upload_file }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">Comment:</Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          value={cmmtradio_pte_upload_file}
                          disabled={read_pte_upload_file_cmmt}
                          style={{
                            backgroundColor: read_pte_upload_file_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          onChange={(e) =>
                            setcmmtradio_pte_upload_file(e.target.value)
                          }
                          size="small"
                        />
                      </FormControl>
                    </td>
                  </tr>
                  {Showtype == "GP01003" &&
                    STS1 != "FLSL001" &&
                    STS1 != "FLSL002" &&
                    STS1 != "FLSL003" &&
                    STS1 != "FLSL004" &&
                    STS1 != "FLSL005" &&
                    STS1 != "FLSL006" &&
                    STS1 != "FLSL007" &&
                    STS1 != "FLSL008" &&
                    STS1 != "FLSL009" &&
                    STS1 != "FLSL010" &&
                    STS1 != "FLSL011" &&
                    STS1 != "FLSL012" &&
                    STS1 != "FLSL013" &&
                    STS1 != "FLSL014" &&
                    STS1 != "FLSL015" &&
                    STS1 != "FLSL016" &&
                    For_sts_reject !== "R" && (
                      <tr>
                        <td className="Style4"></td>
                        <td colSpan={5}>
                          <div style={{ margin: "20px" }}>
                            <table>
                              <tr>
                                <td className="Table_Show_req1">
                                  <td
                                    className="Show-Data-File"
                                    style={{ textAlign: "center" }}
                                  >
                                    <div>
                                      <TableContainer component={Paper}>
                                        <Table className="FamFilePopUp">
                                          <TableHead>
                                            <TableRow>
                                              <TableCell></TableCell>
                                              <TableCell>No.</TableCell>
                                              <TableCell>File</TableCell>
                                              <TableCell>View</TableCell>
                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                            {showfilepte_upload_after.length === 0 ? (
                                              <TableRow>
                                                <TableCell
                                                  colSpan={4}
                                                  style={{
                                                    textAlign: "center",
                                                  }}
                                                >
                                                  <Empty />
                                                </TableCell>
                                              </TableRow>
                                            ) : (
                                              showfilepte_upload_after.map(
                                                (option, index) => (
                                                  <TableRow key={index}>
                                                    <TableCell>
                                                      {STS1 == "FLSL017" && (
                                                        <DeleteOutlined
                                                          onClick={() =>
                                                            handleDL_File_Owner(
                                                              showfilepte_upload_after[
                                                                index
                                                              ][0],
                                                              showfilepte_upload_after[
                                                                index
                                                              ][3],
                                                              showfilepte_upload_after[
                                                                index
                                                              ][4]
                                                            )
                                                          }
                                                          className="Icon_DeleteFile"
                                                        />
                                                      )}
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfilepte_upload_after[
                                                          index
                                                        ][2]
                                                      }
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfilepte_upload_after[
                                                          index
                                                        ][3]
                                                      }
                                                    </TableCell>
                                                    <TableCell
                                                      style={{
                                                        textAlign: "center",
                                                        color: "blue",
                                                        textDecoration:
                                                          "underline",
                                                      }}
                                                    >
                                                      <PlagiarismIcon
                                                        style={{
                                                          cursor: "pointer",
                                                          fontSize: "30px",
                                                        }}
                                                        onClick={() =>
                                                          downloadFile(
                                                            showfilepte_upload_after[
                                                              index
                                                            ][4]
                                                          )
                                                        }
                                                      >
                                                        {
                                                          showfilepte_upload_after[
                                                            index
                                                          ][3]
                                                        }
                                                      </PlagiarismIcon>
                                                    </TableCell>
                                                  </TableRow>
                                                )
                                              )
                                            )}
                                          </TableBody>
                                        </Table>
                                      </TableContainer>
                                    </div>
                                  </td>
                                </td>
                                <td style={{ width: "20px" }}></td>
                                <td className="Table_Show_req2">
                                  <input
                                    type="file"
                                    multiple
                                    onChange={handleFileUpload_Own}
                                    style={{ display: "none" }}
                                    id="fileInput"
                                    ref={fileInputRef}
                                  />
                                  {STS1 == "FLSL017" && (
                                    <div style={{ width: "400px" }}>
                                      <label
                                        htmlFor="fileInput"
                                        onDragOver={handleDragOve_Own}
                                        onDrop={handleDrop_Own}
                                        className="bt_ChooseFile"
                                      >
                                        <CloudUploadOutlined
                                          style={{
                                            fontSize: "30px",
                                            color: "#86B6F6",
                                          }}
                                        />
                                        <br />
                                        <span style={{ fontWeight: "bold" }}>
                                          Drop your files here
                                        </span>
                                        <br />
                                        or
                                        <br />
                                        <Button size="small" component="span">
                                          <b> Browse files</b>
                                        </Button>
                                      </label>

                                      {uploadedFiles_pte_upload_after.length > 0 && (
                                        <div>
                                          <ul>
                                            {uploadedFiles_pte_upload_after.map(
                                              (file, index) => (
                                                <div
                                                  key={index}
                                                  className="BorderFile"
                                                >
                                                  <Typography className="Font_File">
                                                    <span
                                                      style={{
                                                        marginLeft: "10px",
                                                      }}
                                                    >
                                                      {file.type.startsWith(
                                                        "image/"
                                                      ) ? (
                                                        <img
                                                          src={URL.createObjectURL(
                                                            file
                                                          )}
                                                          alt={file.name}
                                                          className="Img_file"
                                                        />
                                                      ) : (
                                                        <>
                                                          {file.name.endsWith(
                                                            ".xlsx"
                                                          ) ? (
                                                            <FileExcelOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#65B741",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".pdf"
                                                            ) ? (
                                                            <FilePdfOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FF6347",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".docx"
                                                            ) ? (
                                                            <FileWordOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#3468C0",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".txt"
                                                            ) ? (
                                                            <FileTextOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#B6BBC4",
                                                              }}
                                                            />
                                                          ) : (
                                                            <FileUnknownOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FFD3A3",
                                                              }}
                                                            />
                                                          )}
                                                        </>
                                                      )}
                                                      {index + 1} {file.name}
                                                    </span>

                                                    <DeleteOutlined
                                                      onClick={() =>
                                                        handleDL_File_Owner(
                                                          index,
                                                          file.name
                                                        )
                                                      }
                                                      className="Icon_DeleteFile"
                                                    />
                                                  </Typography>
                                                </div>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      )}
                                      <div
                                        style={{
                                          textAlign: "right",
                                          marginTop: "5px",
                                        }}
                                      >
                                        <Button
                                          variant="contained"
                                          onClick={handleSav_Own}
                                        >
                                          Save
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            </table>

                            <table>
                              <tr>
                                <td className=""></td>
                              </tr>
                              <tr></tr>
                              <tr
                                style={{
                                  width: "100%",
                                  marginBottom: "20px",
                                  marginTop: "20px",
                                }}
                              ></tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  {/* //////////////////////////// */}
                  {/*PLN Staff request Invoice :*/}
                  <tr>
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        PLN Staff request Invoice:
                      </Typography>
                    </td>
                    <td>
                      <FormControl className="Style3">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={pln_req_inv}
                          onChange={(e) => setpln_req_inv(e.target.value)}
                          disabled
                          sx={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            width: "68%",
                          }}
                        />
                      </FormControl>
                    </td>

                    <td style={{ width: "20%" }}></td>
                    <td className="Style7">
                      <Typography
                        variant="subtitle2"
                        style={{ visibility: chk_pln_req_inv }}
                      >
                        {" "}
                        Action Date:
                      </Typography>
                    </td>
                    <td className="Style6">
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={action__pln_req_inv}
                          onChange={(e) =>
                            setaction__pln_req_inv(e.target.value)
                          }
                          disabled
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            visibility: chk_pln_req_inv,
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>
                  
                   <tr style={{ display: CM_pln_req_inv }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        Sale Date :
                      </Typography>
                    </td>
                
                    <td>
                      <FormControl className="Style1">
                        <TextField
                          size="small"
                          type="date"
                          disabled={read_pln_req_inv_cmmt}
                          style={{
                            
                            backgroundColor: read_pln_req_inv_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                            width: "68%",
                          }}
                          value={sale_date}
                          error={
                            ErrSale_date  &&
                            (!sale_date  || sale_date  == "null")
                          }
                          onChange={(e) => setsale_date(e.target.value)}
                          helperText={
                            ErrSale_date  &&
                            (!sale_date  || sale_date  == "null")
                              ? "Please Select Sale Date "
                              : undefined
                          }
                        />
                      </FormControl>
                    </td>
                  </tr> 
                  <tr style={{ display: CM_pln_req_inv }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">Comment:</Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          value={cmmtradio_pln_req_inv}
                          disabled={read_pln_req_inv_cmmt}
                          style={{
                            backgroundColor: read_pln_req_inv_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          onChange={(e) =>
                            setcmmtradio_pln_req_inv(e.target.value)
                          }
                          size="small"
                        />
                      </FormControl>
                    </td>
                  </tr>
                  {Showtype == "GP01003" &&
                    STS1 != "FLSL001" &&
                    STS1 != "FLSL002" &&
                    STS1 != "FLSL003" &&
                    STS1 != "FLSL004" &&
                    STS1 != "FLSL005" &&
                    STS1 != "FLSL006" &&
                    STS1 != "FLSL007" &&
                    STS1 != "FLSL008" &&
                    STS1 != "FLSL009" &&
                    STS1 != "FLSL010" &&
                    STS1 != "FLSL011" &&
                    STS1 != "FLSL012" &&
                    STS1 != "FLSL013" &&
                    STS1 != "FLSL014" &&
                    STS1 != "FLSL015" &&
                    STS1 != "FLSL016" &&
                    STS1 != "FLSL017" &&
                    For_sts_reject !== "R" && (
                      <tr>
                        <td className="Style4"></td>
                        <td colSpan={5}>
                          <div style={{ margin: "20px" }}>
                            <table>
                              <tr>
                                <td className="Table_Show_req1">
                                  <td
                                    className="Show-Data-File"
                                    style={{ textAlign: "center" }}
                                  >
                                    <div>
                                      <TableContainer component={Paper}>
                                        <Table className="FamFilePopUp">
                                          <TableHead>
                                            <TableRow>
                                              <TableCell></TableCell>
                                              <TableCell>No.</TableCell>
                                              <TableCell>File</TableCell>
                                              <TableCell>View</TableCell>
                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                            {showfilepln_stf_req_inv.length === 0 ? (
                                              <TableRow>
                                                <TableCell
                                                  colSpan={4}
                                                  style={{
                                                    textAlign: "center",
                                                  }}
                                                >
                                                  <Empty />
                                                </TableCell>
                                              </TableRow>
                                            ) : (
                                              showfilepln_stf_req_inv.map(
                                                (option, index) => (
                                                  <TableRow key={index}>
                                                    <TableCell>
                                                      {STS1 == "FLSL018" && (
                                                        <DeleteOutlined
                                                          onClick={() =>
                                                            handleDL_File_Owner(
                                                              showfilepln_stf_req_inv[
                                                                index
                                                              ][0],
                                                              showfilepln_stf_req_inv[
                                                                index
                                                              ][3],
                                                              showfilepln_stf_req_inv[
                                                                index
                                                              ][4]
                                                            )
                                                          }
                                                          className="Icon_DeleteFile"
                                                        />
                                                      )}
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfilepln_stf_req_inv[
                                                          index
                                                        ][2]
                                                      }
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfilepln_stf_req_inv[
                                                          index
                                                        ][3]
                                                      }
                                                    </TableCell>
                                                    <TableCell
                                                      style={{
                                                        textAlign: "center",
                                                        color: "blue",
                                                        textDecoration:
                                                          "underline",
                                                      }}
                                                    >
                                                      <PlagiarismIcon
                                                        style={{
                                                          cursor: "pointer",
                                                          fontSize: "30px",
                                                        }}
                                                        onClick={() =>
                                                          downloadFile(
                                                            showfilepln_stf_req_inv[
                                                              index
                                                            ][4]
                                                          )
                                                        }
                                                      >
                                                        {
                                                          showfilepln_stf_req_inv[
                                                            index
                                                          ][3]
                                                        }
                                                      </PlagiarismIcon>
                                                    </TableCell>
                                                  </TableRow>
                                                )
                                              )
                                            )}
                                          </TableBody>
                                        </Table>
                                      </TableContainer>
                                    </div>
                                  </td>
                                </td>
                                <td style={{ width: "20px" }}></td>
                                <td className="Table_Show_req2">
                                  <input
                                    type="file"
                                    multiple
                                    onChange={handleFileUpload_Own}
                                    style={{ display: "none" }}
                                    id="fileInput"
                                    ref={fileInputRef}
                                  />
                                  {STS1 == "FLSL018" && (
                                    <div style={{ width: "400px" }}>
                                      <label
                                        htmlFor="fileInput"
                                        onDragOver={handleDragOve_Own}
                                        onDrop={handleDrop_Own}
                                        className="bt_ChooseFile"
                                      >
                                        <CloudUploadOutlined
                                          style={{
                                            fontSize: "30px",
                                            color: "#86B6F6",
                                          }}
                                        />
                                        <br />
                                        <span style={{ fontWeight: "bold" }}>
                                          Drop your files here
                                        </span>
                                        <br />
                                        or
                                        <br />
                                        <Button size="small" component="span">
                                          <b> Browse files</b>
                                        </Button>
                                      </label>

                                      {uploadedFiles_pln_stf_req_inv.length > 0 && (
                                        <div>
                                          <ul>
                                            {uploadedFiles_pln_stf_req_inv.map(
                                              (file, index) => (
                                                <div
                                                  key={index}
                                                  className="BorderFile"
                                                >
                                                  <Typography className="Font_File">
                                                    <span
                                                      style={{
                                                        marginLeft: "10px",
                                                      }}
                                                    >
                                                      {file.type.startsWith(
                                                        "image/"
                                                      ) ? (
                                                        <img
                                                          src={URL.createObjectURL(
                                                            file
                                                          )}
                                                          alt={file.name}
                                                          className="Img_file"
                                                        />
                                                      ) : (
                                                        <>
                                                          {file.name.endsWith(
                                                            ".xlsx"
                                                          ) ? (
                                                            <FileExcelOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#65B741",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".pdf"
                                                            ) ? (
                                                            <FilePdfOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FF6347",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".docx"
                                                            ) ? (
                                                            <FileWordOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#3468C0",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".txt"
                                                            ) ? (
                                                            <FileTextOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#B6BBC4",
                                                              }}
                                                            />
                                                          ) : (
                                                            <FileUnknownOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FFD3A3",
                                                              }}
                                                            />
                                                          )}
                                                        </>
                                                      )}
                                                      {index + 1} {file.name}
                                                    </span>

                                                    <DeleteOutlined
                                                      onClick={() =>
                                                        handleDL_File_Owner(
                                                          index,
                                                          file.name
                                                        )
                                                      }
                                                      className="Icon_DeleteFile"
                                                    />
                                                  </Typography>
                                                </div>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      )}
                                      <div
                                        style={{
                                          textAlign: "right",
                                          marginTop: "5px",
                                        }}
                                      >
                                        <Button
                                          variant="contained"
                                          onClick={handleSav_Own}
                                        >
                                          Save
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            </table>

                            <table>
                              <tr>
                                <td className=""></td>
                              </tr>
                              <tr></tr>
                              <tr
                                style={{
                                  width: "100%",
                                  marginBottom: "20px",
                                  marginTop: "20px",
                                }}
                              ></tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  {/* //////////////////////////// */}
                  {/*Shipping Staff imput invoice no. :*/}
                  <tr>
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        Shipping Staff input invoice no.:
                      </Typography>
                    </td>
                    <td>
                      <FormControl className="Style3">
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={ship_input_inv}
                          disabled={read_ship_input_inv}
                          onChange={(e) => setship_input_inv(e.target.value)}
                          size="small"
                          style={{
                            borderColor: Errorship_input_inv
                              ? "red"
                              : undefined,
                            backgroundColor: read_ship_input_inv
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                            width: "68%",
                          }}
                          error={
                            Errorship_input_inv &&
                            (!ship_input_inv || ship_input_inv == "null")
                          }
                        >
                          {shipping_staff.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                        {Errorship_input_inv &&
                        (!ship_input_inv || ship_input_inv == "null") && (
                          <FormHelperText style={{ color: "red" }}>
                            Please select: Shipping Staff input invoice no.
                          </FormHelperText>
                        )}
                        {/* <TextField
                          id="outlined-size-small"
                          size="small"
                          value={ship_input_inv}
                          onChange={(e) => setship_input_inv(e.target.value)}
                          disabled
                          sx={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)", width: "68%",
                          }} /> */}
                      </FormControl>
                    </td>

                    <td style={{ width: "20%" }}></td>
                    <td className="Style7">
                      <Typography
                        variant="subtitle2"
                        style={{ visibility: chk_ship_input_inv }}
                      >
                        {" "}
                        Action Date:
                      </Typography>
                    </td>
                    <td className="Style6">
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={action__ship_input_inv}
                          onChange={(e) =>
                            setaction__ship_input_inv(e.target.value)
                          }
                          disabled
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            visibility: chk_ship_input_inv,
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>
                  <tr style={{ display: CM_ship_input_inv }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">Comment:</Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          value={cmmtradio_ship_input_inv}
                          disabled={read_ship_input_inv_cmmt}
                          style={{
                            backgroundColor: read_ship_input_inv_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          onChange={(e) =>
                            setcmmtradio_ship_input_inv(e.target.value)
                          }
                          size="small"
                        />
                      </FormControl>
                    </td>
                  </tr>
                  {Showtype == "GP01003" &&
                    STS1 != "FLSL001" &&
                    STS1 != "FLSL002" &&
                    STS1 != "FLSL003" &&
                    STS1 != "FLSL004" &&
                    STS1 != "FLSL005" &&
                    STS1 != "FLSL006" &&
                    STS1 != "FLSL007" &&
                    STS1 != "FLSL008" &&
                    STS1 != "FLSL009" &&
                    STS1 != "FLSL010" &&
                    STS1 != "FLSL011" &&
                    STS1 != "FLSL012" &&
                    STS1 != "FLSL013" &&
                    STS1 != "FLSL014" &&
                    STS1 != "FLSL015" &&
                    STS1 != "FLSL016" &&
                    STS1 != "FLSL017" &&
                    STS1 != "FLSL018" &&
                    For_sts_reject !== "R" && (
                      <tr>
                        <td className="Style4"></td>
                        <td colSpan={5}>
                          <div style={{ margin: "20px" }}>
                            <table>
                              <tr>
                                <td className="Table_Show_req1">
                                  <td
                                    className="Show-Data-File"
                                    style={{ textAlign: "center" }}
                                  >
                                    <div>
                                      <TableContainer component={Paper}>
                                        <Table className="FamFilePopUp">
                                          <TableHead>
                                            <TableRow>
                                              <TableCell></TableCell>
                                              <TableCell>No.</TableCell>
                                              <TableCell>File</TableCell>
                                              <TableCell>View</TableCell>
                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                            {showfileship_input_inv.length === 0 ? (
                                              <TableRow>
                                                <TableCell
                                                  colSpan={4}
                                                  style={{
                                                    textAlign: "center",
                                                  }}
                                                >
                                                  <Empty />
                                                </TableCell>
                                              </TableRow>
                                            ) : (
                                              showfileship_input_inv.map(
                                                (option, index) => (
                                                  <TableRow key={index}>
                                                    <TableCell>
                                                      {STS1 == "FLSL019" && (
                                                        <DeleteOutlined
                                                          onClick={() =>
                                                            handleDL_File_Owner(
                                                              showfileship_input_inv[
                                                                index
                                                              ][0],
                                                              showfileship_input_inv[
                                                                index
                                                              ][3],
                                                              showfileship_input_inv[
                                                                index
                                                              ][4]
                                                            )
                                                          }
                                                          className="Icon_DeleteFile"
                                                        />
                                                      )}
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfileship_input_inv[
                                                          index
                                                        ][2]
                                                      }
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfileship_input_inv[
                                                          index
                                                        ][3]
                                                      }
                                                    </TableCell>
                                                    <TableCell
                                                      style={{
                                                        textAlign: "center",
                                                        color: "blue",
                                                        textDecoration:
                                                          "underline",
                                                      }}
                                                    >
                                                      <PlagiarismIcon
                                                        style={{
                                                          cursor: "pointer",
                                                          fontSize: "30px",
                                                        }}
                                                        onClick={() =>
                                                          downloadFile(
                                                            showfileship_input_inv[
                                                              index
                                                            ][4]
                                                          )
                                                        }
                                                      >
                                                        {
                                                          showfileship_input_inv[
                                                            index
                                                          ][3]
                                                        }
                                                      </PlagiarismIcon>
                                                    </TableCell>
                                                  </TableRow>
                                                )
                                              )
                                            )}
                                          </TableBody>
                                        </Table>
                                      </TableContainer>
                                    </div>
                                  </td>
                                </td>
                                <td style={{ width: "20px" }}></td>
                                <td className="Table_Show_req2">
                                  <input
                                    type="file"
                                    multiple
                                    onChange={handleFileUpload_Own}
                                    style={{ display: "none" }}
                                    id="fileInput"
                                    ref={fileInputRef}
                                  />
                                  {STS1 == "FLSL019" && (
                                    <div style={{ width: "400px" }}>
                                      <label
                                        htmlFor="fileInput"
                                        onDragOver={handleDragOve_Own}
                                        onDrop={handleDrop_Own}
                                        className="bt_ChooseFile"
                                      >
                                        <CloudUploadOutlined
                                          style={{
                                            fontSize: "30px",
                                            color: "#86B6F6",
                                          }}
                                        />
                                        <br />
                                        <span style={{ fontWeight: "bold" }}>
                                          Drop your files here
                                        </span>
                                        <br />
                                        or
                                        <br />
                                        <Button size="small" component="span">
                                          <b> Browse files</b>
                                        </Button>
                                      </label>

                                      {uploadedFiles_ship_input_inv.length > 0 && (
                                        <div>
                                          <ul>
                                            {uploadedFiles_ship_input_inv.map(
                                              (file, index) => (
                                                <div
                                                  key={index}
                                                  className="BorderFile"
                                                >
                                                  <Typography className="Font_File">
                                                    <span
                                                      style={{
                                                        marginLeft: "10px",
                                                      }}
                                                    >
                                                      {file.type.startsWith(
                                                        "image/"
                                                      ) ? (
                                                        <img
                                                          src={URL.createObjectURL(
                                                            file
                                                          )}
                                                          alt={file.name}
                                                          className="Img_file"
                                                        />
                                                      ) : (
                                                        <>
                                                          {file.name.endsWith(
                                                            ".xlsx"
                                                          ) ? (
                                                            <FileExcelOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#65B741",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".pdf"
                                                            ) ? (
                                                            <FilePdfOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FF6347",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".docx"
                                                            ) ? (
                                                            <FileWordOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#3468C0",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".txt"
                                                            ) ? (
                                                            <FileTextOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#B6BBC4",
                                                              }}
                                                            />
                                                          ) : (
                                                            <FileUnknownOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FFD3A3",
                                                              }}
                                                            />
                                                          )}
                                                        </>
                                                      )}
                                                      {index + 1} {file.name}
                                                    </span>

                                                    <DeleteOutlined
                                                      onClick={() =>
                                                        handleDL_File_Owner(
                                                          index,
                                                          file.name
                                                        )
                                                      }
                                                      className="Icon_DeleteFile"
                                                    />
                                                  </Typography>
                                                </div>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      )}
                                      <div
                                        style={{
                                          textAlign: "right",
                                          marginTop: "5px",
                                        }}
                                      >
                                        <Button
                                          variant="contained"
                                          onClick={handleSav_Own}
                                        >
                                          Save
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            </table>

                            <table>
                              <tr>
                                <td className=""></td>
                              </tr>
                              <tr></tr>
                              <tr
                                style={{
                                  width: "100%",
                                  marginBottom: "20px",
                                  marginTop: "20px",
                                }}
                              ></tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  {/* //////////////////////////// */}
                  {/*PLN Staff upload Final payment 50% :*/}
                  <tr>
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        PLN Staff upload Final payment 50%:
                      </Typography>
                    </td>
                    <td style={{minWidth:'320px'}}>
                      <FormControl className="Style3">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={pln_upload_final}
                          onChange={(e) => setpln_upload_final(e.target.value)}
                          disabled
                          sx={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            width: "68%",
                          }}
                        />
                      </FormControl>
                    </td>

                    <td style={{ width: "20%" }}></td>
                    <td className="Style7">
                      <Typography
                        variant="subtitle2"
                        style={{ visibility: chk_pln_upload_final }}
                      >
                        {" "}
                        Action Date:
                      </Typography>
                    </td>
                    <td className="Style6">
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={action__pln_upload_final}
                          onChange={(e) =>
                            setaction__pln_upload_final(e.target.value)
                          }
                          disabled
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            visibility: chk_pln_upload_final,
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>
                  <tr style={{ display: CM_pln_upload_final }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        Vendor move date :
                      </Typography>{" "}
                    </td>
                    <td>
                      <FormControl className="Style1">
                        <TextField
                          size="small"
                          type="date"
                          disabled={read_pln_upload_final_cmmt}
                          style={{
                            backgroundColor: read_pln_upload_final_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                            width: "320px",
                          }}
                          value={Vendor_move_date}
                          error={
                            ErrorVendor_move_date &&
                            (!Vendor_move_date || Vendor_move_date == "null")
                          }
                          onChange={(e) => setVendor_move_date(e.target.value)}
                          helperText={
                            ErrorVendor_move_date &&
                            (!Vendor_move_date || Vendor_move_date == "null")
                              ? "Please Select Vendor move date"
                              : undefined
                          }
                        />
                      </FormControl>
                    </td>
                  </tr>
                  {/* )} */}
                  <tr style={{ display: CM_pln_upload_final }}>
                    <td className="Style4">
                      <Typography variant="subtitle2">Comment:</Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          value={cmmtradio_pln_upload_final}
                          disabled={read_pln_upload_final_cmmt}
                          style={{
                            backgroundColor: read_pln_upload_final_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          onChange={(e) =>
                            setcmmtradio_pln_upload_final(e.target.value)
                          }
                          size="small"
                        />
                      </FormControl>
                    </td>
                  </tr>
                  {Showtype == "GP01003" &&
                    STS1 != "FLSL001" &&
                    STS1 != "FLSL002" &&
                    STS1 != "FLSL003" &&
                    STS1 != "FLSL004" &&
                    STS1 != "FLSL005" &&
                    STS1 != "FLSL006" &&
                    STS1 != "FLSL007" &&
                    STS1 != "FLSL008" &&
                    STS1 != "FLSL009" &&
                    STS1 != "FLSL010" &&
                    STS1 != "FLSL011" &&
                    STS1 != "FLSL012" &&
                    STS1 != "FLSL013" &&
                    STS1 != "FLSL014" &&
                    STS1 != "FLSL015" &&
                    STS1 != "FLSL016" &&
                    STS1 != "FLSL017" &&
                    STS1 != "FLSL018" &&
                    STS1 != "FLSL019" &&
                    For_sts_reject !== "R" && (
                      <tr>
                        <td className="Style4"></td>
                        <td colSpan={5}>
                          <div style={{ margin: "20px" }}>
                            <table>
                              <tr>
                                <td className="Table_Show_req1">
                                  <td
                                    className="Show-Data-File"
                                    style={{ textAlign: "center" }}
                                  >
                                    <div>
                                      <TableContainer component={Paper}>
                                        <Table className="FamFilePopUp">
                                          <TableHead>
                                            <TableRow>
                                              <TableCell></TableCell>
                                              <TableCell>No.</TableCell>
                                              <TableCell>File</TableCell>
                                              <TableCell>View</TableCell>
                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                            {showfilepln_upload_final.length === 0 ? (
                                              <TableRow>
                                                <TableCell
                                                  colSpan={4}
                                                  style={{
                                                    textAlign: "center",
                                                  }}
                                                >
                                                  <Empty />
                                                </TableCell>
                                              </TableRow>
                                            ) : (
                                              showfilepln_upload_final.map(
                                                (option, index) => (
                                                  <TableRow key={index}>
                                                    <TableCell>
                                                      {STS1 == "FLSL020" && (
                                                        <DeleteOutlined
                                                          onClick={() =>
                                                            handleDL_File_Owner(
                                                              showfilepln_upload_final[
                                                                index
                                                              ][0],
                                                              showfilepln_upload_final[
                                                                index
                                                              ][3],
                                                              showfilepln_upload_final[
                                                                index
                                                              ][4]
                                                            )
                                                          }
                                                          className="Icon_DeleteFile"
                                                        />
                                                      )}
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfilepln_upload_final[
                                                          index
                                                        ][2]
                                                      }
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfilepln_upload_final[
                                                          index
                                                        ][3]
                                                      }
                                                    </TableCell>
                                                    <TableCell
                                                      style={{
                                                        textAlign: "center",
                                                        color: "blue",
                                                        textDecoration:
                                                          "underline",
                                                      }}
                                                    >
                                                      <PlagiarismIcon
                                                        style={{
                                                          cursor: "pointer",
                                                          fontSize: "30px",
                                                        }}
                                                        onClick={() =>
                                                          downloadFile(
                                                            showfilepln_upload_final[
                                                              index
                                                            ][4]
                                                          )
                                                        }
                                                      >
                                                        {
                                                          showfilepln_upload_final[
                                                            index
                                                          ][3]
                                                        }
                                                      </PlagiarismIcon>
                                                    </TableCell>
                                                  </TableRow>
                                                )
                                              )
                                            )}
                                          </TableBody>
                                        </Table>
                                      </TableContainer>
                                    </div>
                                  </td>
                                </td>
                                <td style={{ width: "20px" }}></td>
                                <td className="Table_Show_req2">
                                  <input
                                    type="file"
                                    multiple
                                    onChange={handleFileUpload_Own}
                                    style={{ display: "none" }}
                                    id="fileInput"
                                    ref={fileInputRef}
                                  />
                                  {STS1 == "FLSL020" && (
                                    <div style={{ width: "400px" }}>
                                      <label
                                        htmlFor="fileInput"
                                        onDragOver={handleDragOve_Own}
                                        onDrop={handleDrop_Own}
                                        className="bt_ChooseFile"
                                      >
                                        <CloudUploadOutlined
                                          style={{
                                            fontSize: "30px",
                                            color: "#86B6F6",
                                          }}
                                        />
                                        <br />
                                        <span style={{ fontWeight: "bold" }}>
                                          Drop your files here
                                        </span>
                                        <br />
                                        or
                                        <br />
                                        <Button size="small" component="span">
                                          <b> Browse files</b>
                                        </Button>
                                      </label>

                                      {uploadedFiles_pln_upload_final.length > 0 && (
                                        <div>
                                          <ul>
                                            {uploadedFiles_pln_upload_final.map(
                                              (file, index) => (
                                                <div
                                                  key={index}
                                                  className="BorderFile"
                                                >
                                                  <Typography className="Font_File">
                                                    <span
                                                      style={{
                                                        marginLeft: "10px",
                                                      }}
                                                    >
                                                      {file.type.startsWith(
                                                        "image/"
                                                      ) ? (
                                                        <img
                                                          src={URL.createObjectURL(
                                                            file
                                                          )}
                                                          alt={file.name}
                                                          className="Img_file"
                                                        />
                                                      ) : (
                                                        <>
                                                          {file.name.endsWith(
                                                            ".xlsx"
                                                          ) ? (
                                                            <FileExcelOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#65B741",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".pdf"
                                                            ) ? (
                                                            <FilePdfOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FF6347",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".docx"
                                                            ) ? (
                                                            <FileWordOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#3468C0",
                                                              }}
                                                            />
                                                          ) : file.name.endsWith(
                                                              ".txt"
                                                            ) ? (
                                                            <FileTextOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#B6BBC4",
                                                              }}
                                                            />
                                                          ) : (
                                                            <FileUnknownOutlined
                                                              className="Icon_file"
                                                              style={{
                                                                color:
                                                                  "#FFD3A3",
                                                              }}
                                                            />
                                                          )}
                                                        </>
                                                      )}
                                                      {index + 1} {file.name}
                                                    </span>

                                                    <DeleteOutlined
                                                      onClick={() =>
                                                        handleDL_File_Owner(
                                                          index,
                                                          file.name
                                                        )
                                                      }
                                                      className="Icon_DeleteFile"
                                                    />
                                                  </Typography>
                                                </div>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      )}
                                      <div
                                        style={{
                                          textAlign: "right",
                                          marginTop: "5px",
                                        }}
                                      >
                                        <Button
                                          variant="contained"
                                          onClick={handleSav_Own}
                                        >
                                          Save
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            </table>

                            <table>
                              <tr>
                                <td className=""></td>
                              </tr>
                              <tr></tr>
                              <tr
                                style={{
                                  width: "100%",
                                  marginBottom: "20px",
                                  marginTop: "20px",
                                }}
                              ></tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  {/* //////////////////////////// */}
                </table>
              </div>
            </Card>
          </Card>
        )}
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
              Close Routing
            </Typography>
            <div className="Style2">
              <table className="Style3">
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2"> ACC Record:</Typography>
                  </td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        value={text_acc_check}
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
                        value={
                          selectradio_record === null
                            ? setselectradio_record("A")
                            : selectradio_record
                        }
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
                  <td className="Style7">
                    <Typography
                      variant="subtitle2"
                      style={{ visibility: chkacc_record }}
                    >
                      {" "}
                      Action Date:
                    </Typography>
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
                <tr style={{ display: CM_acc_record }}>
                  <td className="Style4">
                    <Typography variant="subtitle2">Comment:</Typography>
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        value={cmmtradio_record}
                        disabled={read_record_cmmt}
                        style={{
                          backgroundColor: read_record_cmmt
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
                        onChange={(e) => setcmmtradio_record(e.target.value)}
                        size="small"
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">ACC Manager:</Typography>{" "}
                  </td>
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
                          backgroundColor: read_acc_mana
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
                        error={
                          ErrorAcc_Mana &&
                          (!selectacc_manager || selectacc_manager == "null")
                        }
                      >
                        {acc_manager.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {ErrorAcc_Mana &&
                        (!selectacc_manager || selectacc_manager == "null") && (
                          <FormHelperText style={{ color: "red" }}>
                            Please select: ACC Manager
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
                        value={
                          selectradio_acc_manager === null
                            ? setselectradio_acc_manager("A")
                            : selectradio_acc_manager
                        }
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
                  <td className="Style7">
                    <Typography
                      variant="subtitle2"
                      style={{ visibility: chkacc_manager }}
                    >
                      {" "}
                      Action Date:
                    </Typography>
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
                <tr style={{ display: CM_acc_manager }}>
                  <td className="Style4">
                    <Typography variant="subtitle2"> Comment:</Typography>
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        value={cmmtradio_acc_manager}
                        disabled={read_acc_mana_cmmt}
                        style={{
                          backgroundColor: read_acc_mana_cmmt
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
                        onChange={(e) =>
                          setcmmtradio_acc_manager(e.target.value)
                        }
                        size="small"
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">
                      Service Close By:
                    </Typography>{" "}
                  </td>
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
                        value={
                          selectradio_service_close_by === null
                            ? setselectradio_service_close_by("A")
                            : selectradio_service_close_by
                        }
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
                  <td className="Style7">
                    <Typography
                      variant="subtitle2"
                      style={{ visibility: chkservice_close }}
                    >
                      Action Date:
                    </Typography>
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
                <tr style={{ display: CM_service_close }}>
                  <td className="Style4">
                    <Typography variant="subtitle2">Comment:</Typography>
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
                        style={{
                          backgroundColor: read_close_cmmt
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
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
            <table>
              <tr>
                <td
                  style={{
                    display:
                      STS1 == "" ||
                      STS1 == "FLTR001" ||
                      STS1 == "FLLS001" ||
                      STS1 == "FLWO001" ||
                      STS1 == "FLDN001" ||
                      STS1 == "FLLD001" ||
                      STS1 == "FLSL001" ||
                      STS1 == "FLSC001"
                        ? "block"
                        : "none",
                  }}
                >
                  {CheckSave == "False" ? (
                    <Button
                      variant="contained"
                      size="medium"
                      color="primary"
                      className="Style9"
                      onClick={SAVE}
                    >
                      Save
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      size="medium"
                      color="primary"
                      className="Style9"
                      disabled
                      onClick={SAVE}
                    >
                      Save
                    </Button>
                  )}
                </td>
                <td>
                  {CheckSubmit == "False" ? (
                    <Button
                      variant="contained"
                      size="medium"
                      color="success"
                      className="Style9"
                      onClick={SUBMIT}
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      size="medium"
                      color="success"
                      className="Style9"
                      onClick={SUBMIT}
                      disabled
                    >
                      <LoadingOutlined /> Submit
                    </Button>
                  )}
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
            </table>
          </Box>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              style={{
                width: "200px",
                marginTop: "20px",
                marginBottom: "20px",
                marginLeft: "20px",
                backgroundColor: "gray",
              }}
              onClick={Back_page}
            >
              BACK PAGE
            </Button>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default TransFerDetail;
