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
} from "@mui/material";
import Header from "../Page/Hearder";
import PageLoadding from "../Loadding/Pageload";
import {
  InfoCircleOutlined,
  LoadingOutlined,
  FileSearchOutlined,
  FilePdfOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Get_Data } from "../Function/Tranfer_fn";
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
  certificate_date ,setcertificate_date
  } = Get_Data();
  // เก็บตัวแปร
  console.log(Showtype, "STS1STS1");

  // Const Return
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
        <Typography> FAM NO : {EditFam ? EditFam : For_Req[0]}</Typography>
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
                        Owner (Send from) :
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
                        From BOI Project :
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
                        Transfer to Factory :
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
                        Transfer to CC :
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
                              Please select : Transfer To CC
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
                        New BOI Project :
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
                            Please select : New BOI Project{" "}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </td>
                    <td className="Style5" colSpan={3}></td>
                  </tr>
                  <tr>
                    <td className="Style4">
                      <Typography variant="subtitle2">New Owner :</Typography>
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
                            Please select : New Owner{" "}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </td>
                    <td className="Style5"></td>
                    <td className="Style7">
                      <Typography variant="subtitle2">Tel :</Typography>
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
                        Plan Remove Date :
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
                        Transfer Abnormal :
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
                      Department Manager :
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
                            Please select : Department Manager
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
                      Action Date :
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
                    <Typography variant="subtitle2"> Comment :</Typography>
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
                    <Typography variant="subtitle2"> Service Dept :</Typography>
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
                    <Typography variant="subtitle2">Tel :</Typography>
                  </td>
                  {console.log(Tel_service,'Tel_service')}
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
                    <Typography variant="subtitle2">Service By :</Typography>
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
                            Please select : Service By
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
                      Action Date :
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
                    <Typography variant="subtitle2">Comment :</Typography>
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
                    <Typography variant="subtitle2">BOI Staff :</Typography>{" "}
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
                            Please select : BOI Manager
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
                      Action Date :
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
                    <Typography variant="subtitle2"> Comment :</Typography>
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
                    <Typography variant="subtitle2">BOI Manager :</Typography>{" "}
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
                            Please select : BOI Manager
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
                      Action Date :
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
                    <Typography variant="subtitle2"> Comment :</Typography>
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
                      Factory Manager :
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
                            Please select : Factory Manager
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
                      Action Date :
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
                      <Typography variant="subtitle2"> Comment :</Typography>
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
                <tr >
                  <td className="Style4" >
                    <Typography variant="subtitle2">ACC Check :</Typography>{" "}
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
                            Please select : ACC Check :
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
                        // value={selectradio_acc_check}
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
                      Action Date :
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
                {Showtype == 'GP01007' && STS1 == 'FLDN007' &&(
                <tr >
                  <td className="Style4" >
                    <Typography variant="subtitle2">Receive certificate date :</Typography>{" "}
                  </td>
                  
                  <td>
                  <FormControl className="Style1">
                        <TextField
                          id="Plan_Remove"
                          size="small"
                          type="date"
                          disabled={read_accchk_cmmt}
                          style={{
                            backgroundColor: read_accchk_cmmt
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          value={certificate_date }
                          // error={
                          //   ErrorDate && (!certificate_date || plan_date == "null")
                          // }
                          onChange={(e) => setcertificate_date(e.target.value)}
                          // helperText={
                          //   ErrorDate && (!plan_date || plan_date == "null")
                          //     ? "Please select date"
                          //     : undefined
                          // }
                        />
                      </FormControl>
                  </td>
                </tr>
              )} 
                <tr style={{ display: CM_acc_check }}>
                  <td className="Style4">
                    {" "}
                    <Typography variant="subtitle2">Comment :</Typography>{" "}
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
                    <Typography variant="subtitle2">Requester :</Typography>{" "}
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
                  </td>
                  <td className="Style7">
                    <Typography
                      variant="subtitle2"
                      style={{ visibility: chkowner }}
                    >
                      Action Date :
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
                    <Typography variant="subtitle2">Comment :</Typography>
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
                        Receiver :
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
                        Action Date :
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
                      <Typography variant="subtitle2"> Comment :</Typography>
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
                    <Typography variant="subtitle2"> ACC Record :</Typography>
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
                      Action Date :
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
                    <Typography variant="subtitle2">Comment :</Typography>
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
                    <Typography variant="subtitle2">ACC Manager :</Typography>{" "}
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
                            Please select : ACC Manager
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
                      Action Date :
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
                    <Typography variant="subtitle2"> Comment :</Typography>
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
                      Service Close By :
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
                      Action Date :
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
                    <Typography variant="subtitle2">Comment :</Typography>
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
            {console.log(STS1,"STS1")}
            <table>
              <tr>
                <td
                  style={{
                    display:
                      STS1 == "" ||
                      STS1 == "FLTR001" ||
                      STS1 == "FLLS001" ||
                      STS1 == "FLWO001" ||
                      STS1 == "FLDN001"
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
