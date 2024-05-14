import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import {
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Card,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Select,
  Paper,
  Checkbox,
  FormControl,
  MenuItem,
  InputLabel,
  Autocomplete,
  FormHelperText,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ClearIcon from "@mui/icons-material/Clear";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import { Empty } from "antd";
import "../Page/Style.css";
import {
  DeleteOutlined,
  FileTextOutlined,
  UploadOutlined,
  FileExcelOutlined,
  FilePdfOutlined,
  FileWordOutlined,
  FileUnknownOutlined,
  CloudUploadOutlined,
} from "@ant-design/icons";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../Page/Hearder";
import DeleteIcon from "@mui/icons-material/Delete";
import PageLoadding from "../Loadding/Pageload";
import { FAM_GET_REQUEST } from "../Function/FN_TRANSECTION_ALL/FAM_GET_REQUEST";

function ForRequest() {
  const {
    EditFam,
    dataUserLogin1,
    setdataUserLogin1,
    Request_date,
    setRequest_date,
    Tel1,
    Factory1,
    setFactory1,
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
    uploadedFiles,
    For_Rq_Edit,
    isPopupOpenLoadding,
    closePopupLoadding,
    Filedata,
    downloadFile,
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
    handleFileUpload,
    handleDragOver,
    handleDrop,
    handleSave,
    handleDeleteFile,
    Back_page,
    Reset,
    NextPage,
    Next,read_fix_group, setread_fix_group,
    read_fix_cost, setread_fix_cost,
    read_dept, setread_dept,
    read_tel, setread_tel,
    reac_remark, setread_remark,
    reac_type, setread_type,
    delete_fix, setdelete_fix,
    STS1_Req, setSTS1_Req,
    STS1_for_R, setSTS1_for_R,
    checknext, setchecknext,fileInputRef
  } = FAM_GET_REQUEST();
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <Header />
      </div>

      <div className="Box-Insert">
        {/* สำหรับ Gen Fam no */}
        <div className="Insert">
          <PageLoadding
            isOpen={isPopupOpenLoadding}
            onClose={closePopupLoadding}
          />
          <Card className="Style100">
            <Card
              sx={{
                borderRadius: "8px",
                border: 2,
                borderColor: "#88AB8E",
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
                For Requester
              </Typography>
              <Box
                sx={{ flexGrow: 1, marginBottom: "20px", marginTop: "20px" }}
              >
                {/* FAM Np and Request */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      FAM No :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      disabled
                      id="Txt_Famno"
                      value={Gen_Fam_No}
                      onChange={(e) => setGen_Fam_No(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid xs={2}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Request Date :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      id="Txt_Date"
                      size="small"
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      value={Request_date}
                      onChange={(e) => setRequest_date(e.target.value)}
                      disabled
                    ></TextField>
                  </Grid>
                </Grid>
                {/* Request BY */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Request By :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      disabled
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      id="Txt_user"
                      value={dataUserLogin1}
                      onChange={(e) => setdataUserLogin1(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid xs={2}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Request By Tel :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{
                        width: "100%",
                        backgroundColor: read_tel
                          ? "rgba(169, 169, 169, 0.3)"
                          : "",
                      }}
                      disabled={read_tel}
                      id="Txt_Tel"
                      value={Tel1}
                      onChange={handleTel}
                      error={
                        (Gen_Fam_No || EditFam) &&
                        (Tel1 === "" || Tel1 === undefined || Tel1 === null)
                      }
                      FormHelperTextProps={{
                        error:
                          (Gen_Fam_No || EditFam) &&
                          (Tel1 === "" || Tel1 === undefined || Tel1 === null),
                      }}
                    >
                      <FormHelperText>
                        {(Gen_Fam_No || EditFam) &&
                        (Tel1 === "" || Tel1 === undefined || Tel1 === null)
                          ? ""
                          : "Please enter your mobile phone number"}
                      </FormHelperText>
                    </TextField>
                  </Grid>
                </Grid>

                {/* Owner and TelOwner */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Request (Owner) :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      disabled={read_tel}
                      style={{
                        width: "100%",
                        backgroundColor: read_tel
                          ? "rgba(169, 169, 169, 0.3)"
                          : "",
                      }}
                      id="Txt_user"
                      value={owner_req}
                      onChange={(e) => {
                        setowner_req(e.target.value);
                        handleEmpUser(e.target.value);
                      }}
                      error={
                        (Gen_Fam_No || EditFam) &&
                        (owner_req === "" ||
                          owner_req === undefined ||
                          owner_req === null)
                      }
                    ></TextField>
                  </Grid>
                  <Grid xs={2}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Owner Cost Center:
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      id="Txt_Tel"
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      disabled
                      value={owner_dept}
                      onChange={(e) => setowner_dept(e.target.value)}
                    />
                  </Grid>
                </Grid>

                {/* Owner and TelOwner */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Name Owner :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      disabled
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      id="Txt_user"
                      value={name_req}
                      onChange={(e) => setname_req(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid xs={2}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Owner Tel :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{
                        width: "100%",
                        backgroundColor: read_tel
                          ? "rgba(169, 169, 169, 0.3)"
                          : "",
                      }}
                      disabled={read_tel}
                      value={owner_tel}
                      onChange={handleOwner_tel}
                      error={
                        (Gen_Fam_No || EditFam) &&
                        (owner_tel === "" ||
                          owner_tel === undefined ||
                          owner_tel === null)
                      }
                    />
                  </Grid>
                </Grid>

                {/* Factory and Cost center */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Factory :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      value={Factory1}
                      onChange={(e) => setFactory1(e.target.value)}
                      disabled
                    ></TextField>
                  </Grid>
                </Grid>

                {/* Dept  */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Dept :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    {STS1_Req === "FLTR001" || STS1_Req === "FLWO001" ||  STS1_Req === "FLLS001" || STS1_Req === "FLDN001" ||
                    STS1_Req === "" ||
                    STS1_for_R === "R" || STS1_Req == "FLLD001"? (
                      <FormControl fullWidth>
                        <Autocomplete
                          disabled={read_dept}
                          style={{
                            width: "100%",
                            backgroundColor: read_dept
                              ? "rgba(169, 169, 169, 0.3)"
                              : "",
                          }}
                          error={
                            (Gen_Fam_No || EditFam) &&
                            (selectDept1 === "" ||
                              selectDept1 === undefined ||
                              selectDept1 === null)
                          }
                          value={selectDept1}
                          onChange={(e, value) => {
                            setselectDept1(value);
                            handleDept(value);
                          }}
                          options={Dept.map((item) => item)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Select"
                              size="small"
                              sx={{ textAlign: "left" }}
                            />
                          )}
                        />
                      </FormControl>
                    ) : (
                      <TextField
                        style={{
                          backgroundColor: read_dept
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={For_Rq_Edit[6]}
                      ></TextField>
                    )}
                  </Grid>
                </Grid>
                {/* Radio Button Type  */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}>
                    <Typography style={{ textAlign: "right" }}>
                      Request Type :
                    </Typography>
                  </Grid>
                  <Grid>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      id="Radio_ReqType"
                      value={Request_type1}
                      disabled={reac_type}
                      style={{ opacity: reac_type ? 0.5 : 1 }}
                      onChange={(e) => setRequest_type1(e.target.value)}
                    >
                      <FormControlLabel
                        value="GP01001"
                        control={<Radio />}
                        label="Transfer"
                        className="Radio"
                        disabled={reac_type}
                      />
                      <FormControlLabel
                        value="GP01002"
                        control={<Radio />}
                        label="Scrap"
                        className="Radio"
                        disabled={reac_type}
                      />

                      <FormControlLabel
                        value="GP01003"
                        control={<Radio />}
                        label="Sales"
                        className="Radio"
                        disabled={reac_type}
                      />
                      <FormControlLabel
                        value="GP01004"
                        control={<Radio />}
                        label="Loss"
                        className="Radio"
                        disabled={reac_type}
                      />
                      <FormControlLabel
                        value="GP01005"
                        control={<Radio />}
                        label="Write-off"
                        className="Radio"
                        disabled={reac_type}
                      />
                      <FormControlLabel
                        value="GP01006"
                        control={<Radio />}
                        label="Landing to Third-party"
                        className="Radio"
                        disabled={reac_type}
                      />
                      <FormControlLabel
                        value="GP01007"
                        control={<Radio />}
                        label="Donation"
                        className="Radio"
                        disabled={reac_type}
                      />
                    </RadioGroup>
                  </Grid>
                </Grid>
                {/* FixAsset group / AssCost */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Fix Asset Group :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <FormControl fullWidth>
                      <InputLabel size="small" id="demo-simple-select-label">
                        Select
                      </InputLabel>
                      <Select
                        label="Select"
                        id="SL_AssetGroup"
                        size="small"
                        value={selectFixAssetgroup1}
                        onChange={(e) =>
                          setselectFixAssetgroup1(e.target.value)
                        }
                        style={{
                          backgroundColor: read_fix_group
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                        }}
                        disabled={read_fix_group}
                      >
                        {FixAssetgroup.map((option, index) => (
                          <MenuItem key={index} value={FixAssetgroup[index][0]}>
                            {FixAssetgroup[index][1]}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid xs={2}>
                    <Typography
                      style={{
                        width: "100%",
                        textAlign: "right",
                        display: "none",
                      }}
                    >
                      Asset Cost Center :
                    </Typography>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Request Status :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <FormControl fullWidth>
                      <TextField
                        size="small"
                        disabled={read_fix_cost}
                        style={{
                          backgroundColor: read_fix_cost
                            ? "rgba(169, 169, 169, 0.3)"
                            : "",
                          display: "none",
                        }}
                        value={owner_dept}
                        onChange={(e) => {
                          const value = e.target.value;
                          setowner_dept(value);
                        }}
                      />
                      <TextField
                        size="small"
                        style={{
                          width: "100%",
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        disabled
                        value={Request_sts1}
                        onChange={(e) => setRequest_sts1(e.target.value)}
                      ></TextField>
                    </FormControl>
                  </Grid>
                </Grid>
                {/* Request status */}
                {/* <Grid container spacing={3}>
                  <Grid xs={1.7}></Grid>
                  <Grid xs={3}></Grid>
                  <Grid xs={2}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Request Status :
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <TextField
                      size="small"
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      // value={status}
                      disabled
                      value={Request_sts1}
                      onChange={(e) => setRequest_sts1(e.target.value)}
                    ></TextField>
                  </Grid>
                </Grid> */}
                {/* Remark */}
                <Grid container spacing={3}>
                  <Grid xs={1.7}>
                    <Typography style={{ width: "100%", textAlign: "right" }}>
                      Remark :
                    </Typography>
                  </Grid>
                  <Grid xs={8}>
                    <TextField
                      id="Remark"
                      size="small"
                      style={{
                        width: "100%",
                        backgroundColor: reac_remark
                          ? "rgba(169, 169, 169, 0.3)"
                          : "",
                      }}
                      disabled={reac_remark}
                      value={Remark}
                      onChange={handleRemark}
                    ></TextField>
                  </Grid>
                </Grid>

                <div className="Button_forGenNo">
                  <Button
                    style={{
                      marginLeft: "5px",
                      backgroundColor: "green",
                      visibility: checkGenNo,
                    }}
                    variant="contained"
                    onClick={handleCost}
                  >
                    Gen FAM No.
                  </Button>
                  <Button
                    style={{
                      marginLeft: "5px",
                      backgroundColor: "gray",
                      visibility: checkReset,
                    }}
                    variant="contained"
                    onClick={Reset}
                  >
                    Reset
                  </Button>
                </div>
              </Box>
            </Card>
          </Card>
        </div>
        {/* สำหรับ Fixed Assets Code */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div
          className="Fixed-Asset-Code"
          style={{ visibility: visibityDetails }}
        >
          <Card
            sx={{
              borderRadius: "8px",
              border: 2,
              borderColor: "#88AB8E",
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
              {" "}
              Details
            </Typography>

            {/* ADD Modal */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <Typography
                  style={{
                    marginLeft: "10px",
                    display:
                    STS1_Req === "FLTR001" || STS1_Req === "FLWO001" ||  STS1_Req === "FLLS001" || STS1_Req === "FLDN001" ||
                    STS1_Req === "" ||
                    STS1_for_R === "R" || STS1_Req == "FLLD001"
                        ? "block"
                        : "none",
                  }}
                >
                  Fixed Assets Code :
                </Typography>
                <TextField
                  id="Fixcode"
                  size="small"
                  value={find_fixasset1}
                  onChange={(e) => setfind_fixasset1(e.target.value)}
                  style={{
                    marginLeft: "10px",
                    display:
                    STS1_Req === "FLTR001" || STS1_Req === "FLWO001" ||  STS1_Req === "FLLS001" || STS1_Req === "FLDN001" ||
                    STS1_Req === "" ||
                    STS1_for_R === "R" || STS1_Req == "FLLD001"
                        ? "block"
                        : "none",
                  }}
                />
                <Button
                  style={{
                    marginTop: "3px",
                    marginLeft: "10px",
                    display:
                    STS1_Req === "FLTR001" || STS1_Req === "FLWO001" ||  STS1_Req === "FLLS001" || STS1_Req === "FLDN001" ||
                    STS1_Req === "" ||
                    STS1_for_R === "R" || STS1_Req == "FLLD001"
                        ? "block"
                        : "none",
                  }}
                  type="primary"
                  variant="contained"
                  onClick={ADD}
                >
                  ADD
                </Button>
              </div>

              <div>
                {" "}
                <Dialog
                  open={open}
                  onClose={handleClose}
                  maxWidth="lg"
                  fullWidth
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="Modal">
                    {" "}
                    <DialogTitle>
                      Fixed Assets Code : {find_fixasset1}
                    </DialogTitle>
                    <TableContainer component={Paper}>
                      {/* {find_fixasset.map((item, index) => (
                            <TableRow
                              key={index}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                             
                              <TableCell>
                                <Checkbox
                                  checked={selectedItems[index] || false}
                                  onChange={() => handleCheckboxChange(index)}
                                />
                              </TableCell>
                              <TableCell>{item[1]}</TableCell>
                              <TableCell>{item[2]}</TableCell>
                              <TableCell>{item[3]}</TableCell>
                            </TableRow>
                          ))} */}
                      <Table className="Modal-Table">
                        <TableHead>
                          <TableRow>
                            <TableCell>
                              <Checkbox
                                checked={selectAll}
                                onChange={handleCheckboxAllChange}
                              />
                            </TableCell>
                            <TableCell>Comp.</TableCell>
                            <TableCell>Cc.</TableCell>
                            <TableCell>Fixed Assets Name</TableCell>
                            <TableCell>Fam No.</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {find_fixasset.map((item, index) => (
                            <TableRow
                              key={index}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell>
                                <Checkbox
                                  checked={selectedItems[index] || false}
                                  onChange={() => handleCheckboxChange(index)}
                                  disabled={
                                    COMP.some(
                                      (compItem) =>
                                        compItem[1] === item[3] &&
                                        compItem[2] !== null &&
                                        compItem[3] === find_fixasset1
                                    ) ||
                                    datatable.some(
                                      (dataItem) =>
                                        dataItem[3] === item[3] &&
                                        dataItem[0] === item[0]
                                    )
                                  }
                                />
                              </TableCell>
                              <TableCell>{item[1]}</TableCell>
                              <TableCell>{item[2]}</TableCell>
                              <TableCell>{item[3]}</TableCell>
                              <TableCell>
                                {COMP.map((compItem) => {
                                  if (
                                    compItem[1] === item[3] &&
                                    compItem[3] === find_fixasset1
                                  ) {
                                    return compItem[2];
                                  }
                                  return null;
                                })}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <DialogActions style={{ marginTop: "20px" }}>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "green",
                        }}
                        onClick={handleAdd}
                      >
                        ADD
                      </Button>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "gray" }}
                        onClick={handleClose}
                      >
                        Close
                      </Button>
                    </DialogActions>
                  </div>
                </Dialog>
              </div>

              <div>
                {isTableOpen && (
                  <div
                    style={{ marginTop: "20px", margin: "10px 50px 0px 50px" }}
                  >
                    <TableContainer component={Paper}>
                      <Table aria-label="simple table" className="TableFix">
                        <TableHead
                          sx={{
                            backgroundColor: "#436850",
                            fontSize: "10px",
                          }}
                        >
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Fixed Assets Code</TableCell>
                            <TableCell>Comp.</TableCell>
                            <TableCell>CC.</TableCell>
                            <TableCell>Fixed Assets Name</TableCell>
                            <TableCell>BOI Project</TableCell>
                            <TableCell>Qty</TableCell>
                            <TableCell>Invoice No.</TableCell>
                            <TableCell>Acquisition Cost(Baht)</TableCell>
                            <TableCell>Book Value(Baht)</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {datatable.map((item, index) => (
                            <React.Fragment key={index}>
                              <TableRow
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell>
                                  {index > 0 &&
                                  item[0] === datatable[index - 1][0] ? (
                                    ""
                                  ) : (
                                    <DeleteIcon
                                      style={{
                                        color: "red",
                                        marginLeft: "10px",
                                        display:
                                        STS1_Req === "FLTR001" || STS1_Req === "FLWO001" ||  STS1_Req === "FLLS001" || STS1_Req === "FLDN001" ||
                                        STS1_Req === "" ||
                                        STS1_for_R === "R" || STS1_Req == "FLLD001"
                                            ? "block"
                                            : "none",
                                      }}
                                      onClick={() =>
                                        handleDelete(item[0], index)
                                      }
                                    />
                                  )}
                                </TableCell>
                                <TableCell>
                                  {index > 0 &&
                                  item[0] === datatable[index - 1][0]
                                    ? ""
                                    : item[0]}
                                </TableCell>
                                <TableCell>{item[1]}</TableCell>
                                <TableCell>{item[2]}</TableCell>
                                <TableCell>{item[3]}</TableCell>
                                <TableCell>{item[5]}</TableCell>
                                <TableCell>{item[6]}</TableCell>
                                <TableCell>{item[7]}</TableCell>
                                {/* <TableCell>{item[9]}</TableCell> */}
                                <TableCell>
                                  {typeof item[9] === "number"
                                    ? item[9].toLocaleString()
                                    : item[9]}
                                </TableCell>

                                <TableCell>{item[10]}</TableCell>
                              </TableRow>
                            </React.Fragment>
                          ))}
                          {/* Counting */}
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell style={{ fontWeight: "bold" }}>
                              Total
                            </TableCell>
                            {/* <TableCell style={{ fontWeight: "bold" }}>
                              {datatable
                                .reduce((acc, curr) => acc + curr[9], 0)
                                .toFixed(2)}
                            </TableCell>

                            <TableCell style={{ fontWeight: "bold" }}>
                              {datatable.reduce(
                                (acc, curr) => acc + curr[10],
                                0
                              )}
                            </TableCell> */}
                            <TableCell style={{ fontWeight: "bold" }}>
                              {datatable
                                .reduce(
                                  (acc, curr) => acc + parseFloat(curr[9]),
                                  0
                                )
                                .toLocaleString("en-US", {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}
                            </TableCell>

                            <TableCell style={{ fontWeight: "bold" }}>
                              {datatable
                                .reduce(
                                  (acc, curr) => acc + parseInt(curr[10]),
                                  0
                                )
                                .toLocaleString("en-US")}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                )}
              </div>
              <div
                style={{
                  display: "grid",
                  justifyContent: "flex-end",
                  margin: "15px",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "",
                    visibility: btnSave,
                    display:
                    STS1_Req === "FLTR001" || STS1_Req === "FLWO001" ||  STS1_Req === "FLLS001" || STS1_Req === "FLDN001" ||
                    STS1_Req === "" ||
                    STS1_for_R === "R" || STS1_Req == "FLLD001"
                        ? "block"
                        : "none",
                  }}
                  onClick={() => Next("1")}
                >
                  SAVE Details
                </Button>
              </div>
            </div>
          </Card>
        </div>
        {/* สำหรับ Upload File */}
        {STS1_Req === "" || STS1_Req === "FLTR001" || STS1_Req === "FLWO001" ||  STS1_Req === "FLLS001"||  STS1_Req === "FLDN001"  || STS1_for_R === "R"  || STS1_Req == "FLLD001"? (
          <div>
            <Card
              sx={{
                visibility: visibityFile,
                borderRadius: "8px",
                border: 2,
                borderColor: "#88AB8E",
                marginTop: 4,
              }}
              //className="Style1"
            >
              <Typography
                sx={{
                  position: "absolute",
                  backgroundColor: "#fff",
                  marginTop: "-0.5%",
                  marginRight: "85%",
                  width: "10%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                File from request
              </Typography>

              <table className="Table_file_for_req">
                <tr>
                  <td className="Table_Show_req1">
                    <td
                      className="Show-Data-File"
                      style={{ textAlign: "center" }}
                    >
                      <div
                      // style={{
                      //   display: "inline-block",
                      //   marginBottom: "40px",
                      //   width: "500px",
                      // }}
                      >
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
                              {Filedata.length === 0 ? (
                                <TableRow>
                                  <TableCell
                                    colSpan={4}
                                    style={{ textAlign: "center" }}
                                  >
                                    <Empty />
                                  </TableCell>
                                </TableRow>
                              ) : (
                                Filedata.map((option, index) => (
                                  <TableRow key={index}>
                                    <TableCell>
                                      <DeleteOutlined
                                        onClick={() =>
                                          handleDeleteFile(
                                            Filedata[index][0],
                                            Filedata[index][3],
                                            Filedata[index][4]
                                          )
                                        }
                                        className="Icon_DeleteFile"
                                      />
                                    </TableCell>
                                    <TableCell>{Filedata[index][2]}</TableCell>
                                    <TableCell>{Filedata[index][3]}</TableCell>
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
                                        onClick={() =>
                                          downloadFile(Filedata[index][4])
                                        }
                                      >
                                        {Filedata[index][3]}
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
                      onChange={handleFileUpload}
                      style={{ display: "none" }}
                      id="fileInput"
                      ref={fileInputRef}
                    />
                    <div style={{ width: "400px" }}>
                      <label
                        htmlFor="fileInput"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        className="bt_ChooseFile"
                      >
                        <CloudUploadOutlined
                          style={{ fontSize: "30px", color: "#86B6F6" }}
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

                      {uploadedFiles.length > 0 && (
                        <div>
                          <ul>
                            {uploadedFiles.map((file, index) => (
                              <div key={index} className="BorderFile">
                                <Typography className="Font_File">
                                  <span style={{ marginLeft: "10px" }}>
                                    {file.type.startsWith("image/") ? (
                                      <img
                                        src={URL.createObjectURL(file)}
                                        alt={file.name}
                                        className="Img_file"
                                      />
                                    ) : (
                                      <>
                                        {file.name.endsWith(".xlsx") ? (
                                          <FileExcelOutlined
                                            className="Icon_file"
                                            style={{ color: "#65B741" }}
                                          />
                                        ) : file.name.endsWith(".pdf") ? (
                                          <FilePdfOutlined
                                            className="Icon_file"
                                            style={{ color: "#FF6347" }}
                                          />
                                        ) : file.name.endsWith(".docx") ? (
                                          <FileWordOutlined
                                            className="Icon_file"
                                            style={{ color: "#3468C0" }}
                                          />
                                        ) : file.name.endsWith(".txt") ? (
                                          <FileTextOutlined
                                            className="Icon_file"
                                            style={{ color: "#B6BBC4" }}
                                          />
                                        ) : (
                                          <FileUnknownOutlined
                                            className="Icon_file"
                                            style={{ color: "#FFD3A3" }}
                                          />
                                        )}
                                      </>
                                    )}
                                    {index + 1} {file.name}
                                  </span>

                                  <DeleteOutlined
                                    onClick={() =>
                                      handleDeleteFile(index, file.name)
                                    }
                                    className="Icon_DeleteFile"
                                  />
                                </Typography>
                              </div>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div
                        style={{
                          textAlign: "right",
                          marginTop: "5px",
                          display:
                          STS1_Req === "FLTR001" || STS1_Req === "FLWO001" ||  STS1_Req === "FLLS001" || STS1_Req === "FLDN001" ||
                          STS1_Req === "" ||
                          STS1_for_R === "R" || STS1_Req === "FLLD001"
                              ? "block"
                              : "none",
                        }}
                      >
                        <Button variant="contained" onClick={handleSave}
>
                          Save
                        </Button>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>

              <table className="All-Layout-File">
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
            </Card>
          </div>
        ) : (
          <div className="ShowFile">
            <Card
              sx={{
                visibility: visibityFile,
                borderRadius: "8px",
                border: 2,
                borderColor: "#88AB8E",

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
                  width: "10%",
                  display: "flex",

                  justifyContent: "center",
                }}
              >
                File from request
              </Typography>
              <table className="TableShow" style={{ padding: "40px" }}>
                <tr>
                  <td>
                    <div className="ImageShowFile">
                      <img
                        src="./src/assets/Image/2.png"
                        style={{ width: "400px" }}
                        alt="Description of your image"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="FileShow" style={{ marginBottom: "40px" }}>
                      <TableContainer component={Paper}>
                        <Table className="File_For_Show">
                          <TableHead>
                            <TableRow>
                              <TableCell>No.</TableCell>
                              <TableCell>File</TableCell>
                              <TableCell>View</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {Filedata.map((option, index) => (
                              <TableRow key={index}>
                                <TableCell>{Filedata[index][2]}</TableCell>
                                <TableCell>{Filedata[index][3]}</TableCell>
                                <TableCell
                                  style={{
                                    textAlign: "center",
                                    color: "blue",
                                    textDecoration: "underline",
                                  }}
                                >
                                  <p
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                      downloadFile(Filedata[index][4])
                                    }
                                  >
                                    {Filedata[index][3]}
                                  </p>
                                </TableCell>
                              </TableRow>
                            ))}
                            {/* <TableRow>
              <TableCell colSpan={4} style={{ border: "0" }}>
                
              </TableCell>
            </TableRow> */}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                  </td>
                </tr>
              </table>
            </Card>
          </div>
        )}
        {/* ปุ่ม Next Page */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            style={{
              width: "200px",
              marginTop: "20px",
              marginBottom: "20px",
              backgroundColor: "gray",
              marginLeft: "20px",
              visibility: checknext,
            }}
            onClick={Back_page}
          >
            BACK PAGE
          </Button>

          <Button
            style={{
              width: "200px",
              marginTop: "20px",
              marginBottom: "20px",
              backgroundColor: "gray",
              visibility: checknext,
              marginRight: "20px",
            }}
            variant="contained"
            onClick={NextPage}
          >
            Next Page
          </Button>
        </div>
      </div>
    </>
  );
}

export default ForRequest;
