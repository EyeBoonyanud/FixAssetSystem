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
    return_acc_manager,
    setreturn_acc_manager,
    return_selectacc_manager,
    setreturn_selectacc_manager,
    req_return,
    setreq_return,
    chkreturn_acc,
    setchkreturn_acc,
    chkreturn_owner,
    setchkreturn_owner,
    CM_return_acc,
    setCM_return_acc,
    CM_return_owner,
    setCM_return_owner,
    chk_cer_date,
    setchk_cer_date,
    read_return_acc_cmmt,
    setReadReturnACCCmmt,
    read_return_own_cmmt,
    setReadReturnOwnCmmt,
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
    cmmtradio_return_acc,
    setcmmtradio_return_acc,
    cmmtradio_return_own,
    setcmmtradio_return_own,
    read_return_acc,
    setReadReturnACC,
    read_return_own,
    setReadReturnOwn,
    ErrorACCReturn,
    ErrorDate_Certificate,
    setErrorDate_Certificate,
    ErrorDate_return,
    setErrorDate_return,
  } = FAM_TRANSECTION_TLWLD();

  const {
    Dept,
    selectDept1,
    setselectDept1,
    FixAssetgroup,
    selectFixAssetgroup1,
    setselectFixAssetgroup1,
    Request_type1,
    setRequest_type1,
    Request_sts1,
    setRequest_sts1,
    Remark,
    Gen_Fam_No,
    setGen_Fam_No,
    COMP,
    owner_req,
    setowner_req,
    owner_dept,
    setowner_dept,
    name_req,
    setname_req,
    owner_tel,
    find_fixasset,
    find_fixasset1,
    setfind_fixasset1,
    open,
    selectAll,
    selectedItems,
    datatable,
    isTableOpen,
    checkGenNo,
    checkReset,
    btnSave,
    visibityDetails,
    visibityFile,
    For_Rq_Edit,
    handleCost,
    handleOwner_tel,
    handleEmpUser,
    ADD,
    handleCheckboxChange,
    handleCheckboxAllChange,
    handleAdd,
    handleDelete,
    handleClose,
    handleTel,
    handleDept,
    handleRemark,
    NextPage,
    Next,
    read_fix_group,
    setread_fix_group,
    read_fix_cost,
    setread_fix_cost,
    reac_remark,
    setread_remark,
    reac_type,
    setread_type,
    delete_fix,
    setdelete_fix,
    STS1_Req,
    setSTS1_Req,
    STS1_for_R,
    setSTS1_for_R,
    checknext,
    setchecknext,
    handleSave,
    handleDrop,
    handleDragOver,
    handleFileUpload,
    handleDeleteFile,
    uploadedFiles,
    fileInputRef,
    Filedata,
    downloadFile,
    storedFileArray,
  } = FAM_GET_REQUEST();
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
  } = FAM_GET_SHOW_FILE();
  // Const Return
  let Radio_ACC_check = "A";
  return (
    <>
      {/* <Mail 
    Dept={selectdepartment_mana}
    isVisible={false}
    /> */}
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
                          error={
                            ErrorDate && (!plan_date || plan_date == "null")
                          }
                          onChange={(e) => setplan_date(e.target.value)}
                          helperText={
                            ErrorDate && (!plan_date || plan_date == "null")
                              ? "Please select date"
                              : undefined
                          }
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
                              selectradio_acc_check === "R" && read_accchk_cmmt
                                ? "none"
                                : "auto",
                          }}
                          value={certificate_date}
                          error={
                            ErrorDate_Certificate &&
                            (!certificate_date || certificate_date === "null")
                          }
                          onChange={(e) => setcertificate_date(e.target.value)}
                          helperText={
                            ErrorDate_Certificate &&
                            (!certificate_date || certificate_date === "null")
                              ? "Receive certificate date"
                              : undefined
                          }
                        />
                      </FormControl>
                    </td>
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
                        ACC Manager(Set Return date):
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
                      {/* <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={
                          selectradio_return_own === null || selectradio_return_own === "" 
                            ? setselectradio_return_own("A")
                    : selectradio_return_own
                        }
                        onChange={(e) => setselectradio_record(e.target.value)}
                        style={{ visibility: chkreturn_owner }}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          disabled={read_return_own_radio}
                        />
                        <FormControlLabel
                          value="R"
                          disabled={read_return_own_radio}
                          control={<Radio size="small" />}
                          label="No Accept"
                        />
                      </RadioGroup>
                    </FormControl> */}
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

                  {Showtype == "GP01006" &&
                    STS1 != "FLLD001" &&
                    STS1 != "FLLD002" &&
                    STS1 != "FLLD003" &&
                    STS1 != "FLLD004" &&
                    STS1 != "FLLD005" &&
                    STS1 != "FLLD006" &&
                    STS1 != "FLLD007" &&
                    STS1 != "FLLD008" &&
                    STS1 != "FLLD009" &&
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
                                            {showfile_owner_return.length ===
                                            0 ? (
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
                                              showfile_owner_return.map(
                                                (option, index) => (
                                                  <TableRow key={index}>
                                                    <TableCell>
                                                      {STS1 == "FLLD100" && (
                                                        <DeleteOutlined
                                                          onClick={() =>
                                                            handleDL_File_Owner(
                                                              showfile_owner_return[
                                                                index
                                                              ][0],
                                                              showfile_owner_return[
                                                                index
                                                              ][3],
                                                              showfile_owner_return[
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
                                                        showfile_owner_return[
                                                          index
                                                        ][2]
                                                      }
                                                    </TableCell>
                                                    <TableCell>
                                                      {
                                                        showfile_owner_return[
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
                                                            showfile_owner_return[
                                                              index
                                                            ][4]
                                                          )
                                                        }
                                                      >
                                                        {
                                                          showfile_owner_return[
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

                                      {uploadedFiles_Own_return.length > 0 && (
                                        <div>
                                          <ul>
                                            {uploadedFiles_Own_return.map(
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
                                        {STS1 === "FLLD100" && (
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
                      STS1 == "FLLD001"
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
