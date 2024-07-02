import React, { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Card,
  FormControl,
  Button,
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
import "../Page/Style.css";
import { Empty } from "antd";
import { FAM_TRANSECTION } from "../Function/FN_MASTER_LIST/FAM_TRANSECTION";
import { FAM_REQUESTER } from "../Function/FN_MASTER_LIST/FAM_REQUESTER";
import { Dataset } from "@mui/icons-material";

function TransFerDetail() {
  const {
    VIEW_FAM,
    VIEW_TYPE,
    DataTransferFamno,
    DataRoutingFamno,
    DataName,
    DataLending,
    DataScrap,
    DataSale,
    selectradio_dept,
    selectradio_serviceby,
    selectradio_boistaff,
    selectradio_boimanager,
    selectradio_facmanager,
    selectradio_acc_check,
    selectradio_owner,
    selectradio_receiver,
    selectradio_record,
    selectradio_acc_manager,
    selectradio_service_close_by,
    selectradio_acc_return,
    chkaction_date,
    Filedata,
    FiledataReturn,
    FiledataPTE_ENV,
    FiledataShiiping,
    FiledataPLN_Staff,
    DataWeight_Size_Unit_Env,
    FiledataPTE_EN_input_ws,
    FiledataPLN_Staff_boi,
    Filedataimp_prapare,
    FiledataBoi_input_data,
    Filedatathai_catergorise,
    FiledataPLN_bidding,
    FiledataWID,
    Filedataexp_clearance,
    Filedataafter_export,
    Filedatareq_inv,
    Filedataship_staff,
    Filedataupload_final,
    isPopupOpenLoadding,
    closePopupLoadding,
    BackPage,
  } = FAM_TRANSECTION();
  const { downloadFile,STS } = FAM_REQUESTER();
console.log(STS,"STS555")
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
        <Typography> FAM NO : {VIEW_FAM}</Typography>
      </div>
      <div>
        {VIEW_TYPE === "GP01001" && (
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
                          value={DataName}
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                          }}
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
                          size="small"
                          value={DataTransferFamno[0]}
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                          }}
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
                      <TextField
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataTransferFamno[1]}
                      ></TextField>
                    </td>
                    <td className="Style5"></td>
                    <td className="Style7">
                      <Typography variant="subtitle2">
                        Transfer to CC :
                      </Typography>
                    </td>
                    <td className="Style6">
                      <TextField
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataTransferFamno[2]}
                      ></TextField>
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
                        <TextField
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                          }}
                          className="Style1"
                          size="small"
                          disabled
                          value={DataTransferFamno[3]}
                        ></TextField>
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
                        <TextField
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                          }}
                          className="Style1"
                          size="small"
                          disabled
                          value={DataTransferFamno[4]}
                        ></TextField>
                      </FormControl>
                    </td>
                    <td className="Style5"></td>
                    <td className="Style7">
                      <Typography variant="subtitle2">Tel :</Typography>
                    </td>
                    <td className="Style6">
                      <FormControl className="Style1">
                        <TextField
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                          }}
                          className="Style1"
                          size="small"
                          disabled
                          value={DataTransferFamno[5]}
                        ></TextField>
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
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                          }}
                          className="Style1"
                          size="small"
                          disabled
                          value={DataTransferFamno[6]}
                        ></TextField>
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
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                          }}
                          className="Style1"
                          size="small"
                          disabled
                          value={DataTransferFamno[7]}
                        ></TextField>
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
                    <FormControl className="Style1">
                      <TextField
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={
                          DataRoutingFamno[0] !== "null"
                            ? DataRoutingFamno[0]
                            : ""
                        }
                        // value={DataRoutingFamno[0]}
                      ></TextField>
                    </FormControl>
                  </td>

                  <td className="Style5">
                    <FormControl
                      style={{
                        visibility:
                          selectradio_dept == null || selectradio_dept == "null"
                            ? "hidden"
                            : "visibled",
                      }}
                    >
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_dept}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Approve"
                          disabled
                        />
                        <FormControlLabel
                          value="R"
                          control={<Radio size="small" />}
                          label="Reject"
                          disabled
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>

                  <td
                    className="Style7"
                    style={{
                      visibility:
                        selectradio_dept == null || selectradio_dept == "null"
                          ? "hidden"
                          : "visibled",
                    }}
                  >
                    <Typography variant="subtitle2"> Action Date :</Typography>
                  </td>
                  <td
                    className="Style6"
                    style={{
                      visibility:
                        selectradio_dept == null || selectradio_dept == "null"
                          ? "hidden"
                          : "visibled",
                    }}
                  >
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                        value={DataRoutingFamno[2]}
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr
                  style={{
                    display:
                      DataRoutingFamno[2] === null || DataRoutingFamno[2] === ""
                        ? "none"
                        : "table-row",
                  }}
                >
                  <td className="Style4">
                    <Typography variant="subtitle2"> Comment :</Typography>
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={
                          DataRoutingFamno[3] !== "null"
                            ? DataRoutingFamno[3]
                            : ""
                        }
                      ></TextField>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td className="Style4">
                    {" "}
                    <Typography variant="subtitle2"> Service Dept :</Typography>
                  </td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[4]}
                      ></TextField>
                    </FormControl>
                  </td>
                  <td className="Style5"></td>
                  <td className="Style7">
                    {" "}
                    <Typography variant="subtitle2">Tel :</Typography>
                  </td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={
                          DataRoutingFamno[5] !== "null"
                            ? DataRoutingFamno[5]
                            : ""
                        }
                      ></TextField>
                    </FormControl>
                  </td>
                </tr>
                {/* Servide By */}
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">Service By :</Typography>
                  </td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={
                          DataRoutingFamno[6] !== "null"
                            ? DataRoutingFamno[6]
                            : ""
                        }
                      ></TextField>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl
                      style={{
                        visibility:
                          selectradio_serviceby == null ||
                          selectradio_serviceby == "null"
                            ? "hidden"
                            : "visibled",
                      }}
                    >
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_serviceby}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          disabled
                        />
                        <FormControlLabel
                          value="R"
                          disabled
                          control={<Radio size="small" />}
                          label="Not Accept"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td
                    className="Style7"
                    style={{
                      visibility:
                        selectradio_serviceby == null ||
                        selectradio_serviceby == "null"
                          ? "hidden"
                          : "visibled",
                    }}
                  >
                    <Typography variant="subtitle2">Action Date :</Typography>
                  </td>
                  <td className="Style6">
                    <FormControl
                      className="Style1"
                      style={{
                        visibility:
                          selectradio_serviceby == null ||
                          selectradio_serviceby == "null"
                            ? "hidden"
                            : "visibled",
                      }}
                    >
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                        value={DataRoutingFamno[8]}
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>{" "}
                </tr>
                <tr
                  style={{
                    display:
                      DataRoutingFamno[8] === null || DataRoutingFamno[8] === ""
                        ? "none"
                        : "table-row",
                  }}
                >
                  <td className="Style4">
                    <Typography variant="subtitle2">Comment :</Typography>
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={
                          DataRoutingFamno[9] !== "null"
                            ? DataRoutingFamno[9]
                            : ""
                        }
                      ></TextField>
                    </FormControl>
                  </td>
                </tr>
                {/* BOI Staff */}
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">BOI Staff :</Typography>{" "}
                  </td>
                  <td>
                    <FormControl className="Style1">
                      <TextField
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={
                          DataRoutingFamno[10] !== "null"
                            ? DataRoutingFamno[10]
                            : ""
                        }
                      ></TextField>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl
                      style={{
                        visibility:
                          selectradio_boistaff == null ||
                          selectradio_boistaff == "null"
                            ? "hidden"
                            : "visibled",
                      }}
                    >
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_boistaff}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          disabled
                        />
                        <FormControlLabel
                          value="R"
                          disabled
                          control={<Radio size="small" />}
                          label="No Accept"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td
                    className="Style7"
                    style={{
                      visibility:
                        selectradio_boistaff == null ||
                        selectradio_boistaff == "null"
                          ? "hidden"
                          : "visibled",
                    }}
                  >
                    <Typography variant="subtitle2">Action Date :</Typography>
                  </td>
                  <td className="Style6">
                    <FormControl
                      className="Style1"
                      style={{
                        visibility:
                          selectradio_boistaff == null ||
                          selectradio_boistaff == "null"
                            ? "hidden"
                            : "visibled",
                      }}
                    >
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                        value={DataRoutingFamno[12]}
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>{" "}
                </tr>
                <tr
                  style={{
                    display:
                    DataRoutingFamno[12] === null ||
                    DataRoutingFamno[12] === ""
                        ? "none"
                        : "table-row",
                  }}
                >
                  <td className="Style4">
                    <Typography variant="subtitle2"> Comment :</Typography>
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={
                          DataRoutingFamno[13] !== "null"
                            ? DataRoutingFamno[13]
                            : ""
                        }
                      ></TextField>
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
                      <TextField
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={
                          DataRoutingFamno[14] !== "null"
                            ? DataRoutingFamno[14]
                            : ""
                        }
                      ></TextField>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl
                      style={{
                        visibility:
                          selectradio_boimanager == null ||
                          selectradio_boimanager == "null"
                            ? "hidden"
                            : "visibled",
                      }}
                    >
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_boimanager}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Approve"
                          disabled
                        />
                        <FormControlLabel
                          value="R"
                          control={<Radio size="small" />}
                          label="Reject"
                          disabled
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td
                    className="Style7"
                    style={{
                      visibility:
                        selectradio_boimanager == null ||
                        selectradio_boimanager == "null"
                          ? "hidden"
                          : "visibled",
                    }}
                  >
                    <Typography variant="subtitle2">Action Date :</Typography>
                  </td>
                  <td className="Style6">
                    <FormControl
                      className="Style1"
                      style={{
                        visibility:
                        selectradio_boimanager == null ||
                        selectradio_boimanager == "null"
                            ? "hidden"
                            : "visibled",
                      }}
                    >
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        value={DataRoutingFamno[16]}
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>{" "}
                </tr>
                <tr
                  style={{
                    display:
                    selectradio_boimanager == null ||
                    selectradio_boimanager == "null"
                        ? "none"
                        : "table-row",
                  }}
                >
                  <td className="Style4">
                    <Typography variant="subtitle2"> Comment :</Typography>
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        value={
                          DataRoutingFamno[17] !== "null"
                            ? DataRoutingFamno[17]
                            : ""
                        }
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
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
                      <TextField
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={
                          DataRoutingFamno[18] !== "null"
                            ? DataRoutingFamno[18]
                            : ""
                        }
                      ></TextField>
                    </FormControl>
                  </td>

                  <td className="Style5">
                    <FormControl
                      style={{
                        visibility:
                          selectradio_facmanager == null ||
                          selectradio_facmanager == "null"
                            ? "hidden"
                            : "visibled",
                      }}
                    >
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_facmanager}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Approve"
                          disabled
                        />
                        <FormControlLabel
                          value="R"
                          disabled
                          control={<Radio size="small" />}
                          label="Reject"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>

                  <td
                    className="Style7"
                    style={{
                      visibility:
                        selectradio_facmanager == null ||
                        selectradio_facmanager == "null"
                          ? "hidden"
                          : "visibled",
                    }}
                  >
                    <Typography variant="subtitle2">Action Date :</Typography>
                  </td>
                  <td className="Style6">
                    <FormControl
                      className="Style1"
                      style={{
                        visibility:
                          selectradio_facmanager == null ||
                          selectradio_facmanager == "null"
                            ? "hidden"
                            : "visibled",
                      }}
                    >
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                        value={DataRoutingFamno[20]}
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <>
                  <tr
                    style={{
                      display:
                      DataRoutingFamno[20] === null ||
                      DataRoutingFamno[20] === ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4">
                      <Typography variant="subtitle2"> Comment :</Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          id="outlined-size-small"
                          disabled
                          value={
                            DataRoutingFamno[21] !== "null"
                              ? DataRoutingFamno[21]
                              : ""
                          }
                          // value={DataRoutingFamno[21]}
                          size="small"
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>
                </>
                {/* ACC Check */}
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">ACC Check :</Typography>{" "}
                  </td>
                  <td>
                    <FormControl className="Style3">
                      <TextField
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={
                          DataRoutingFamno[22] !== "null"
                            ? DataRoutingFamno[22]
                            : ""
                        }
                      ></TextField>
                    </FormControl>
                  </td>

                  <td className="Style5">
                    <FormControl
                      style={{
                        visibility:
                          selectradio_acc_check == null ||
                          selectradio_acc_check == "null"
                            ? "hidden"
                            : "visibled",
                      }}
                    >
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_acc_check}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          disabled
                        />
                        <FormControlLabel
                          value="R"
                          control={<Radio size="small" />}
                          label="No Accept"
                          disabled
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td
                    className="Style7"
                    style={{
                      visibility:
                        selectradio_acc_check == null ||
                        selectradio_acc_check == "null"
                          ? "hidden"
                          : "visibled",
                    }}
                  >
                    <Typography variant="subtitle2">Action Date :</Typography>
                  </td>

                  <td className="Style6">
                    <FormControl
                      className="Style1"
                      style={{
                        visibility:
                          selectradio_acc_check == null ||
                          selectradio_acc_check == "null"
                            ? "hidden"
                            : "visibled",
                      }}
                    >
                      <TextField
                        id="outlined-size-small"
                        size="small"
                        disabled
                        value={DataRoutingFamno[24]}
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                {(VIEW_TYPE == "GP01007" || VIEW_TYPE == "GP01006") && (
                  <tr
                    style={{
                      display:
                        DataRoutingFamno[42] === null ||
                        DataRoutingFamno[42] === ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4">
                      <Typography variant="subtitle2">
                        Receive certificate date:
                      </Typography>{" "}
                    </td>
                    <td>
                      <FormControl className="Style1">
                        <TextField
                          disabled
                          size="small"
                          value={DataRoutingFamno[42]}
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>
                )}
                <tr
                  style={{
                    display:
                    DataRoutingFamno[24] === null ||
                    DataRoutingFamno[24]=== ""
                        ? "none"
                        : "table-row",
                  }}
                >
                  <td className="Style4">
                    {" "}
                    <Typography variant="subtitle2">Comment :</Typography>{" "}
                  </td>
                  <td colSpan={4}>
                    <TextField
                      style={{
                        backgroundColor: "rgba(169, 169, 169, 0.3)",
                      }}
                      className="Style1"
                      size="small"
                      disabled
                      value={
                        DataRoutingFamno[25] !== "null"
                          ? DataRoutingFamno[25]
                          : ""
                      }
                    ></TextField>
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
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={
                          DataRoutingFamno[26] !== "null"
                            ? DataRoutingFamno[26]
                            : ""
                        }
                      ></TextField>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    {VIEW_TYPE != "GP01006" && VIEW_TYPE != "GP01007" ? (
                      <FormControl
                        style={{
                          visibility:
                            selectradio_owner == null ||
                            selectradio_owner == "null"
                              ? "hidden"
                              : "visibled",
                        }}
                      >
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          value={selectradio_owner}
                        >
                          <FormControlLabel
                            value="A"
                            control={<Radio size="small" />}
                            label="Accept"
                            disabled
                          />
                          <FormControlLabel
                            value="R"
                            disabled
                            control={<Radio size="small" />}
                            label="No Accept"
                          />
                        </RadioGroup>
                      </FormControl>
                    ) : (
                      <div style={{ display: "none" }}>
                        <FormControl
                          style={{
                            visibility:
                              selectradio_owner == null ||
                              selectradio_owner == "null"
                                ? "hidden"
                                : "visibled",
                          }}
                        >
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            value={selectradio_owner}
                          >
                            <FormControlLabel
                              value="A"
                              control={<Radio size="small" />}
                              label="Accept"
                              disabled
                            />
                            <FormControlLabel
                              value="R"
                              disabled
                              control={<Radio size="small" />}
                              label="No Accept"
                            />
                          </RadioGroup>
                        </FormControl>
                      </div>
                    )}
                  </td>
                  <td
                    className="Style7"
                    style={{
                      visibility:
                        selectradio_owner == null || selectradio_owner == "null"
                          ? "hidden"
                          : "visibled",
                    }}
                  >
                    <Typography variant="subtitle2">Action Date :</Typography>
                  </td>
                  <td className="Style6">
                    <FormControl
                      className="Style1"
                      style={{
                        visibility:
                          selectradio_owner == null ||
                          selectradio_owner == "null"
                            ? "hidden"
                            : "visibled",
                      }}
                    >
                      <TextField
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[28]}
                      ></TextField>
                    </FormControl>
                  </td>{" "}
                </tr>
                <tr
                  style={{
                    display:
                    DataRoutingFamno[28]=== null ||
                    DataRoutingFamno[28] === ""
                        ? "none"
                        : "table-row",
                  }}
                >
                  <td className="Style4">
                    <Typography variant="subtitle2">Comment :</Typography>
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={
                          DataRoutingFamno[29] !== "null"
                            ? DataRoutingFamno[29]
                            : ""
                        }
                      ></TextField>
                    </FormControl>
                  </td>
                </tr>{" "}
                {(VIEW_TYPE === "GP01006" || VIEW_TYPE === "GP01007") && (
                  <tr  style={{
                    display:
                    DataRoutingFamno[28] === null ||
                    DataRoutingFamno[28] === ""
                        ? "none"
                        : "table-row",
                  }}>
                    <td className="Style4"></td>
                    <td colSpan={5}>
                      <div style={{ marginLeft: "100px" ,marginTop:'20px' }}>
                        <table>
                          <tr>
                            <td className="Table_Show_req1">
                              <div
                                className="Show-Data-File"
                                style={{ textAlign: "center" }}
                              >
                                <TableContainer component={Paper}>
                                  <Table className="FamFilePopUp">
                                    <TableHead>
                                      <TableRow>
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
                                              {Filedata[index][2]}
                                            </TableCell>
                                            <TableCell>
                                              {Filedata[index][3]}
                                            </TableCell>
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
                                                  downloadFile(
                                                    Filedata[index][4]
                                                  )
                                                }
                                              >
                                                {Filedata[index][3]}
                                              </p>
                                            </TableCell>
                                          </TableRow>
                                        ))
                                      )}
                                    </TableBody>
                                  </Table>
                                </TableContainer>
                              </div>
                            </td>
                          </tr>
                        </table>
                        <table>
                          <tr>
                            <td></td>
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
        {VIEW_TYPE === "GP01001" && (
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
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                          }}
                          className="Style1"
                          size="small"
                          disabled
                          value={
                            DataTransferFamno[8] !== "null"
                              ? DataTransferFamno[8]
                              : ""
                          }
                        ></TextField>
                      </FormControl>
                    </td>

                    <td className="Style5">
                      <FormControl
                        style={{
                          visibility:
                            selectradio_receiver == null ||
                            selectradio_receiver == "null"
                              ? "hidden"
                              : "visibled",
                        }}
                      >
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          value={selectradio_receiver}
                        >
                          <FormControlLabel
                            value="A"
                            control={<Radio size="small" />}
                            label="Accept"
                            disabled
                          />
                          <FormControlLabel
                            value="R"
                            disabled
                            control={<Radio size="small" />}
                            label="No Accept"
                          />
                        </RadioGroup>
                      </FormControl>
                    </td>
                    <td
                      className="Style7"
                      style={{
                        visibility:
                          selectradio_receiver == null ||
                          selectradio_receiver == "null"
                            ? "hidden"
                            : "visibled",
                      }}
                    >
                      <Typography variant="subtitle2">Action Date :</Typography>
                    </td>
                    <td className="Style6">
                      <FormControl
                        className="Style1"
                        style={{
                          visibility:
                            selectradio_receiver == null ||
                            selectradio_receiver == "null"
                              ? "hidden"
                              : "visibled",
                        }}
                      >
                        <TextField
                          id="outlined-size-small"
                          size="small"
                          value={DataTransferFamno[10]}
                          disabled
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>

                  <tr
                    style={{
                      display:
                      selectradio_receiver == null ||
                      selectradio_receiver == "null"
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4">
                      <Typography variant="subtitle2"> Comment :</Typography>
                    </td>
                    <td colSpan={4}>
                      <FormControl className="Style1">
                        <TextField
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                          }}
                          className="Style1"
                          size="small"
                          disabled
                          value={
                            DataTransferFamno[11] !== "null"
                              ? DataTransferFamno[11]
                              : ""
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
        {VIEW_TYPE == "GP01006" && (
          <div>
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
                <div className="Style2">
                  <table className="Style3">
                    <tr>
                      <td className="Style4">
                        <Typography variant="subtitle2">
                         
                          ACC Manager(Return date):
                        </Typography>
                      </td>
                      <td>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataLending[1] !== "null" ? DataLending[1] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                      <td className="Style5">
                        <FormControl
                          style={{
                            visibility:
                              selectradio_acc_return == null ||
                              selectradio_acc_return == "null"
                                ? "hidden"
                                : "visibled",
                          }}
                        >
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={selectradio_acc_return}
                          >
                            <FormControlLabel
                              value="A"
                              control={<Radio size="small" />}
                              label="Accept"
                              disabled
                            />
                            <FormControlLabel
                              value="R"
                              disabled
                              control={<Radio size="small" />}
                              label="No Accept"
                            />
                          </RadioGroup>
                        </FormControl>
                      </td>
                      <td
                        className="Style7"
                        style={{
                          visibility:
                            selectradio_acc_return == null ||
                            selectradio_acc_return == "null"
                              ? "hidden"
                              : "visibled",
                        }}
                      >
                        <Typography variant="subtitle2">
                          
                          Action Date :
                        </Typography>
                      </td>
                      <td className="Style6">
                        <FormControl
                          className="Style1"
                          style={{
                            visibility:
                            selectradio_acc_return== null ||
                            selectradio_acc_return == "null"
                                ? "hidden"
                                : "visibled",
                          }}
                        >
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={DataLending[2]}
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>

                    <tr
                      style={{
                        display:
                        DataLending[2] === null || DataLending[2] === ""
                            ? "none"
                            : "table-row",
                      }}
                    >
                      <td className="Style4">
                        <Typography variant="subtitle2">
                          Return Date:
                        </Typography>{" "}
                      </td>
                      <td>
                        <FormControl className="Style1">
                          <TextField
                            disabled
                            size="small"
                            value={DataLending[9]}
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                          />
                        </FormControl>
                      </td>
                    </tr>

                    <tr
                      style={{
                        display:
                        DataLending[2] === null || DataLending[2] === ""
                            ? "none"
                            : "table-row",
                      }}
                    >
                      <td className="Style4">
                        <Typography variant="subtitle2">Comment :</Typography>
                      </td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataLending[5] !== "null" ? DataLending[5] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>

                    <tr>
                      <td className="Style4">
                        <Typography variant="subtitle2">
                          Requester Return FA:
                        </Typography>{" "}
                      </td>
                      <td>
                        <FormControl className="Style3">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataLending[6] !== "null" ? DataLending[6] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                      <td className="Style5"></td>
                      <td
                        className="Style7"
                        style={{
                          visibility:
                            chkaction_date == null || chkaction_date == "null"
                              ? "hidden"
                              : "visible",
                        }}
                      >
                        <Typography variant="subtitle2">
                          {" "}
                          Action Date :
                        </Typography>
                      </td>
                      <td className="Style6">
                        <FormControl
                          className="Style1"
                          style={{
                            visibility:
                            DataLending[7] == null ||  DataLending[7] == "null"
                                ? "hidden"
                                : "visible",
                          }}
                          
                        >
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={DataLending[7]}
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>

                    <tr
                      style={{
                        display:
                        DataLending[7] == null || DataLending[7] == ""
                            ? "none"
                            : "table-row",
                      }}
                    >
                      <td className="Style4">
                        <Typography variant="subtitle2"> Comment :</Typography>
                      </td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataLending[8] !== "null" ? DataLending[8] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                  </table>
                  <tr
                    style={{
                      display:
                      DataLending[7] == null || DataLending[7] == ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4"></td>
                    <td colSpan={5}>
                      <div  style={{ marginLeft: "150px" ,marginTop:'20px' }}>
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
                                          <TableCell>No.</TableCell>
                                          <TableCell>File</TableCell>
                                          <TableCell>View</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {FiledataReturn.length === 0 ? (
                                          <TableRow>
                                            <TableCell
                                              colSpan={4}
                                              style={{ textAlign: "center" }}
                                            >
                                              <Empty />
                                            </TableCell>
                                          </TableRow>
                                        ) : (
                                          FiledataReturn.map(
                                            (option, index) => (
                                              <TableRow key={index}>
                                                <TableCell>
                                                  {FiledataReturn[index][2]}
                                                </TableCell>
                                                <TableCell>
                                                  {FiledataReturn[index][3]}
                                                </TableCell>
                                                <TableCell
                                                  style={{
                                                    textAlign: "center",
                                                    color: "blue",
                                                    textDecoration: "underline",
                                                  }}
                                                >
                                                  <p
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                      downloadFile(
                                                        FiledataReturn[index][4]
                                                      )
                                                    }
                                                  >
                                                    {FiledataReturn[index][3]}
                                                  </p>
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
                </div>
              </Card>
            </Card>
          </div>
        )}
        {/* Scrap */}
         {VIEW_TYPE == "GP01002"  &&(
          <div>
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
                <div className="Style2">
                  <table className="Style3">
                    {/* {(STS == "FLSC009" || STS == "FLSC100" || STS == "FLSC101"||STS == "FLSC010" || STS == "FLSC012" || STS == "FLSC011")&&( */}
                      <>
                    <tr>
                      <td className="Style4">
                        <Typography variant="subtitle2">
                         PTE(ENV):
                        </Typography>
                      </td>
                      <td>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataScrap[1] !== "null" ? DataScrap[1] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                      <td className="Style5">
                      
                      </td>
                     
                      <td
                        className="Style7"
                      style={{
                        visibility:
                        DataScrap[2] == null || DataScrap[2] == "null"
                     
                          ? "hidden"
                          : "visible"
                      }}
                      >
                        <Typography variant="subtitle2">
                          Action Date :
                        </Typography>
                      </td>
                      <td className="Style6"
                      style={{
                        visibility:
                        DataScrap[2] == null || DataScrap[2] == "null"
                          ? "hidden"
                          : "visible",
                      }} >
                        <FormControl
                          className="Style1"
                        
                        >
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={DataScrap[2]}
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                    style={{
                      display:
                      DataScrap[2] === null ||
                      DataScrap[2] === ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4">
                      <Typography variant="subtitle2">
                       Contact Date:
                      </Typography>{" "}
                    </td>
                    <td>
                      <FormControl className="Style1">
                        <TextField
                          disabled
                          size="small"
                          value={DataScrap[11]}
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>
                    <tr
                      style={{
                        display:
                        DataScrap[2] === null || DataScrap[2] === ""
                            ? "none"
                            : "table-row",
                      }}
                    >
                      <td className="Style4">
                        <Typography variant="subtitle2">Comment :</Typography>
                      </td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataScrap[3] !== "null" ? DataScrap[3] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                
                    <tr
                    style={{
                      display:
                      DataScrap[2] === null || DataScrap[2] === ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4"></td>
                    <td colSpan={5}>
                      <div  style={{ marginLeft: "150px" ,marginTop:'20px' }}>
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
                                          <TableCell>No.</TableCell>
                                          <TableCell>File</TableCell>
                                          <TableCell>View</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {FiledataPTE_ENV.length === 0 ? (
                                          <TableRow>
                                            <TableCell
                                              colSpan={4}
                                              style={{ textAlign: "center" }}
                                            >
                                              <Empty />
                                            </TableCell>
                                          </TableRow>
                                        ) : (
                                          FiledataPTE_ENV.map(
                                            (option, index) => (
                                              <TableRow key={index}>
                                                <TableCell>
                                                  {FiledataPTE_ENV[index][2]}
                                                </TableCell>
                                                <TableCell>
                                                  {FiledataPTE_ENV[index][3]}
                                                </TableCell>
                                                <TableCell
                                                  style={{
                                                    textAlign: "center",
                                                    color: "blue",
                                                    textDecoration: "underline",
                                                  }}
                                                >
                                                  <p
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                      downloadFile(
                                                        FiledataPTE_ENV[index][4]
                                                      )
                                                    }
                                                  >
                                                    {FiledataPTE_ENV[index][3]}
                                                  </p>
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
               </> 
               {/* )} */}

               {/* {( STS == "FLSC100" || STS == "FLSC101"||STS == "FLSC010" || STS == "FLSC012" || STS == "FLSC011")&&( */}
                    <>
                    <tr>
                      <td className="Style4">
                        <Typography variant="subtitle2">
                         PLN Staff:
                        </Typography>{" "}
                      </td>
                      <td>
                        <FormControl className="Style3">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataScrap[4] !== "null" ? DataScrap[4] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                      <td className="Style5"></td>
                      <td
                        className="Style7"
                        style={{
                          visibility:
                          DataScrap[5] == null || DataScrap[5] == "null"
                            ? "hidden"
                            : "visible",
                        }}
                      >
                        <Typography variant="subtitle2">
                          {" "}
                          Action Date :
                        </Typography>
                      </td>
                      <td className="Style6"
                      style={{
                        visibility:
                        DataScrap[5] == null || DataScrap[5] == "null"
                          ? "hidden"
                          : "visible",
                      }}>
                        <FormControl
                          className="Style1"
                        >
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={DataScrap[5]}
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                      style={{
                        display:
                        DataScrap[5] === null || DataScrap[5] === ""
                            ? "none"
                            : "table-row",
                      }}
                    >
                      <td className="Style4">
                        <Typography variant="subtitle2"> Comment :</Typography>
                      </td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataScrap[6] !== "null" ? DataScrap[6] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>  
                    <tr
                    style={{
                      display:
                      DataScrap[5] === null || DataScrap[5] === ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4"></td>
                    <td colSpan={5}>
                      <div  style={{ marginLeft: "150px" ,marginTop:'20px' }}>
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
                                          <TableCell>No.</TableCell>
                                          <TableCell>File</TableCell>
                                          <TableCell>View</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {FiledataPLN_Staff.length === 0 ? (
                                          <TableRow>
                                            <TableCell
                                              colSpan={4}
                                              style={{ textAlign: "center" }}
                                            >
                                              <Empty />
                                            </TableCell>
                                          </TableRow>
                                        ) : (
                                          FiledataPLN_Staff.map(
                                            (option, index) => (
                                              <TableRow key={index}>
                                                <TableCell>
                                                  {FiledataPLN_Staff[index][2]}
                                                </TableCell>
                                                <TableCell>
                                                  {FiledataPLN_Staff[index][3]}
                                                </TableCell>
                                                <TableCell
                                                  style={{
                                                    textAlign: "center",
                                                    color: "blue",
                                                    textDecoration: "underline",
                                                  }}
                                                >
                                                  <p
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                      downloadFile(
                                                        FiledataPLN_Staff[index][4]
                                                      )
                                                    }
                                                  >
                                                    {FiledataPLN_Staff[index][3]}
                                                  </p>
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
              </> 
              {/* )} */}


              {/* {(STS == "FLSC101"||STS == "FLSC010" || STS == "FLSC012" || STS == "FLSC011")&&( */}
                  <>
                  <tr>
                      <td className="Style4">
                        <Typography variant="subtitle2">
                         Shipping Staff:
                        </Typography>
                      </td>
                      <td>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataScrap[7] !== "null" ? DataScrap[7] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                      <td className="Style5">
                       
                      </td>
                      <td
                        className="Style7"
                        style={{
                          visibility:
                          DataScrap[8] == null || DataScrap[8] == "null"
                            ? "hidden"
                            : "visible",
                        }}
                      >
                        <Typography variant="subtitle2">
                          {" "}
                          Action Date :
                        </Typography>
                      </td>
                      <td className="Style6"
                      style={{
                        visibility:
                        DataScrap[8] == null || DataScrap[8] == "null"
                          ? "hidden"
                          : "visible",
                      }}>
                        <FormControl
                          className="Style1"
                        >
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={DataScrap[8]}
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                      style={{
                        display:
                        DataScrap[8] === null || DataScrap[8] === ""
                            ? "none"
                            : "table-row",
                      }}
                    >
                      <td className="Style4">
                        <Typography variant="subtitle2">Comment :</Typography>
                      </td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataScrap[9] !== "null" ? DataScrap[9] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                    style={{
                      display:
                      DataScrap[8] === null || DataScrap[8] === ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4"></td>
                    <td colSpan={5}>
                      <div  style={{ marginLeft: "150px" ,marginTop:'20px' }}>
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
                                          <TableCell>No.</TableCell>
                                          <TableCell>File</TableCell>
                                          <TableCell>View</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {FiledataShiiping.length === 0 ? (
                                          <TableRow>
                                            <TableCell
                                              colSpan={4}
                                              style={{ textAlign: "center" }}
                                            >
                                              <Empty />
                                            </TableCell>
                                          </TableRow>
                                        ) : (
                                          FiledataShiiping.map(
                                            (option, index) => (
                                              <TableRow key={index}>
                                                <TableCell>
                                                  {FiledataShiiping[index][2]}
                                                </TableCell>
                                                <TableCell>
                                                  {FiledataShiiping[index][3]}
                                                </TableCell>
                                                <TableCell
                                                  style={{
                                                    textAlign: "center",
                                                    color: "blue",
                                                    textDecoration: "underline",
                                                  }}
                                                >
                                                  <p
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                      downloadFile(
                                                        FiledataShiiping[index][4]
                                                      )
                                                    }
                                                  >
                                                    {FiledataShiiping[index][3]}
                                                  </p>
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
                  </>
                  {/* )} */}
                  </table>
                
                </div>
              </Card>
            </Card>
          </div>
        )}
        {/* Sale */}
        {VIEW_TYPE == "GP01003"  &&(
          <div>
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
                <div className="Style2">
                  <table className="Style3">
                    {/* {(STS == "FLSC009" || STS == "FLSC100" || STS == "FLSC101"||STS == "FLSC010" || STS == "FLSC012" || STS == "FLSC011")&&( */}
                      <>
                    <tr>
                      <td className="Style4">
                        <Typography variant="subtitle2">
                        PTE (ENV) input weight/size:
                        </Typography>
                      </td>
                      <td>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[1] !== "null" ? DataSale[1] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                      <td className="Style5">
                      
                      </td>
                      <td
                        className="Style7"
                      style={{
                        visibility:
                        DataSale[2] == null || DataSale[2] == "null"
                     
                          ? "hidden"
                          : "visible"
                      }}
                      >
                        <Typography variant="subtitle2">
                          Action Date :
                        </Typography>
                      </td>
                      <td className="Style6"
                      style={{
                        visibility:
                        DataSale[2] == null || DataSale[2] == "null"
                          ? "hidden"
                          : "visible",
                      }} >
                        <FormControl
                          className="Style1"
                        
                        >
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={DataSale[2]}
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                      style={{
                        display:
                        DataSale[2] === null || DataSale[2] === ""
                            ? "none"
                            : "table-row",
                      }}
                    >
                      <td className="Style4">
                        <Typography variant="subtitle2">Comment :</Typography>
                      </td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[3] !== "null" ? DataSale[3] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                    style={{
                      display:
                      DataSale[2] === null || DataSale[2] === ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4"></td>
                    <td colSpan={5}>
                      <div  style={{ marginLeft: "150px" ,marginTop:'20px' }}>
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
                                          <TableCell>No.</TableCell>
                                          <TableCell>File</TableCell>
                                          <TableCell>View</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {FiledataPTE_EN_input_ws.length === 0 ? (
                                          <TableRow>
                                            <TableCell
                                              colSpan={4}
                                              style={{ textAlign: "center" }}
                                            >
                                              <Empty />
                                            </TableCell>
                                          </TableRow>
                                        ) : (
                                          FiledataPTE_EN_input_ws.map(
                                            (option, index) => (
                                              <TableRow key={index}>
                                                <TableCell>
                                                  {FiledataPTE_EN_input_ws[index][2]}
                                                </TableCell>
                                                <TableCell>
                                                  {FiledataPTE_EN_input_ws[index][3]}
                                                </TableCell>
                                                <TableCell
                                                  style={{
                                                    textAlign: "center",
                                                    color: "blue",
                                                    textDecoration: "underline",
                                                  }}
                                                >
                                                  <p
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                      downloadFile(
                                                        FiledataPTE_EN_input_ws[index][4]
                                                      )
                                                    }
                                                  >
                                                    {FiledataPTE_EN_input_ws[index][3]}
                                                  </p>
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
               </> 
               {/* )} */}

               {/* {( STS == "FLSC100" || STS == "FLSC101"||STS == "FLSC010" || STS == "FLSC012" || STS == "FLSC011")&&( */}
                    <>
                    <tr>
                      <td className="Style4">
                        <Typography variant="subtitle2">
                        PLN Staff contact BOI :
                        </Typography>{" "}
                      </td>
                      <td>
                        <FormControl className="Style3">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[4] !== "null" ? DataSale[4] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                      <td className="Style5"></td>
                      <td
                        className="Style7"
                        style={{
                          visibility:
                          DataSale[5] == null || DataSale[5] == "null"
                            ? "hidden"
                            : "visible",
                        }}
                      >
                        <Typography variant="subtitle2">
                          {" "}
                          Action Date :
                        </Typography>
                      </td>
                      <td className="Style6"
                      style={{
                        visibility:
                        DataSale[5] == null || DataSale[5] == "null"
                          ? "hidden"
                          : "visible",
                      }}>
                        <FormControl
                          className="Style1"
                        >
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={DataSale[5]}
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                      style={{
                        display:
                        DataSale[5] === null || DataSale[5] === ""
                            ? "none"
                            : "table-row",
                      }}
                    >
                      <td className="Style4">
                        <Typography variant="subtitle2"> Comment :</Typography>
                      </td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[6] !== "null" ? DataSale[6] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>  
                    <tr
                    style={{
                      display:
                      DataSale[5] === null || DataSale[5] === ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4"></td>
                    <td colSpan={5}>
                      <div  style={{ marginLeft: "150px" ,marginTop:'20px' }}>
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
                                          <TableCell>No.</TableCell>
                                          <TableCell>File</TableCell>
                                          <TableCell>View</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {FiledataPLN_Staff_boi.length === 0 ? (
                                          <TableRow>
                                            <TableCell
                                              colSpan={4}
                                              style={{ textAlign: "center" }}
                                            >
                                              <Empty />
                                            </TableCell>
                                          </TableRow>
                                        ) : (
                                          FiledataPLN_Staff_boi.map(
                                            (option, index) => (
                                              <TableRow key={index}>
                                                <TableCell>
                                                  {FiledataPLN_Staff_boi[index][2]}
                                                </TableCell>
                                                <TableCell>
                                                  {FiledataPLN_Staff_boi[index][3]}
                                                </TableCell>
                                                <TableCell
                                                  style={{
                                                    textAlign: "center",
                                                    color: "blue",
                                                    textDecoration: "underline",
                                                  }}
                                                >
                                                  <p
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                      downloadFile(
                                                        FiledataPLN_Staff_boi[index][4]
                                                      )
                                                    }
                                                  >
                                                    {FiledataPLN_Staff_boi[index][3]}
                                                  </p>
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
              </> 
              {/* )} */}


              {/* {(STS == "FLSC101"||STS == "FLSC010" || STS == "FLSC012" || STS == "FLSC011")&&( */}
                  <>
                  <tr>
                      <td className="Style4">
                        <Typography variant="subtitle2">
                        Import & BOI prepare :
                        </Typography>
                      </td>
                      <td>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[7] !== "null" ? DataSale[7] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                      <td className="Style5">
                       
                      </td>
                      <td
                        className="Style7"
                        style={{
                          visibility:
                          DataSale[8] == null || DataSale[8] == "null"
                            ? "hidden"
                            : "visible",
                        }}
                      >
                        <Typography variant="subtitle2">
                          {" "}
                          Action Date :
                        </Typography>
                      </td>
                      <td className="Style6"
                      style={{
                        visibility:
                        DataSale[8] == null || DataSale[8] == "null"
                          ? "hidden"
                          : "visible",
                      }}>
                        <FormControl
                          className="Style1"
                        >
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={DataSale[8]}
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                      style={{
                        display:
                        DataSale[8] === null || DataSale[8] === ""
                            ? "none"
                            : "table-row",
                      }}
                    >
                      <td className="Style4">
                        <Typography variant="subtitle2">Comment :</Typography>
                      </td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[9] !== "null" ? DataSale[9] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                    style={{
                      display:
                      DataSale[8] === null || DataSale[8] === ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4"></td>
                    <td colSpan={5}>
                      <div  style={{ marginLeft: "150px" ,marginTop:'20px' }}>
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
                                          <TableCell>No.</TableCell>
                                          <TableCell>File</TableCell>
                                          <TableCell>View</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {Filedataimp_prapare.length === 0 ? (
                                          <TableRow>
                                            <TableCell
                                              colSpan={4}
                                              style={{ textAlign: "center" }}
                                            >
                                              <Empty />
                                            </TableCell>
                                          </TableRow>
                                        ) : (
                                          Filedataimp_prapare.map(
                                            (option, index) => (
                                              <TableRow key={index}>
                                                <TableCell>
                                                  {Filedataimp_prapare[index][2]}
                                                </TableCell>
                                                <TableCell>
                                                  {Filedataimp_prapare[index][3]}
                                                </TableCell>
                                                <TableCell
                                                  style={{
                                                    textAlign: "center",
                                                    color: "blue",
                                                    textDecoration: "underline",
                                                  }}
                                                >
                                                  <p
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                      downloadFile(
                                                        Filedataimp_prapare[index][4]
                                                      )
                                                    }
                                                  >
                                                    {Filedataimp_prapare[index][3]}
                                                  </p>
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
                  </>
                  {/* )} */}

                  {/* BOI Input data Import: */}
                  <tr>
                      <td className="Style4">
                        <Typography variant="subtitle2">
                        BOI Input data Import:
                        </Typography>
                      </td>
                      <td>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[10] !== "null" ? DataSale[10] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                      <td className="Style5">
                       
                      </td>
                      <td
                        className="Style7"
                        style={{
                          visibility:
                          DataSale[11] == null || DataSale[11] == "null"
                            ? "hidden"
                            : "visible",
                        }}
                      >
                        <Typography variant="subtitle2">
                          {" "}
                          Action Date :
                        </Typography>
                      </td>
                      <td className="Style6"
                      style={{
                        visibility:
                        DataSale[11] == null || DataSale[11] == "null"
                          ? "hidden"
                          : "visible",
                      }}>
                        <FormControl
                          className="Style1"
                        >
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={DataSale[11]}
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                      style={{
                        display:
                        DataSale[11] === null || DataSale[11] === ""
                            ? "none"
                            : "table-row",
                      }}
                    >
                      <td className="Style4">
                        <Typography variant="subtitle2">Comment :</Typography>
                      </td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[12] !== "null" ? DataSale[12] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                    style={{
                      display:
                      DataSale[11] === null || DataSale[11] === ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4"></td>
                    <td colSpan={5}>
                      <div  style={{ marginLeft: "150px" ,marginTop:'20px' }}>
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
                                          <TableCell>No.</TableCell>
                                          <TableCell>File</TableCell>
                                          <TableCell>View</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {FiledataBoi_input_data.length === 0 ? (
                                          <TableRow>
                                            <TableCell
                                              colSpan={4}
                                              style={{ textAlign: "center" }}
                                            >
                                              <Empty />
                                            </TableCell>
                                          </TableRow>
                                        ) : (
                                          FiledataBoi_input_data.map(
                                            (option, index) => (
                                              <TableRow key={index}>
                                                <TableCell>
                                                  {FiledataBoi_input_data[index][2]}
                                                </TableCell>
                                                <TableCell>
                                                  {FiledataBoi_input_data[index][3]}
                                                </TableCell>
                                                <TableCell
                                                  style={{
                                                    textAlign: "center",
                                                    color: "blue",
                                                    textDecoration: "underline",
                                                  }}
                                                >
                                                  <p
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                      downloadFile(
                                                        FiledataBoi_input_data[index][4]
                                                      )
                                                    }
                                                  >
                                                    {FiledataBoi_input_data[index][3]}
                                                  </p>
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
                  {/* Imp.& BOI input THA categories: */}

                  <tr>
                      <td className="Style4">
                        <Typography variant="subtitle2">
                        Imp.& BOI input THA categories:

                        </Typography>
                      </td>
                      <td>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[13] !== "null" ? DataSale[13] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                      <td className="Style5">
                       
                      </td>
                      <td
                        className="Style7"
                        style={{
                          visibility:
                          DataSale[15] == null || DataSale[15] == "null"
                            ? "hidden"
                            : "visible",
                        }}
                      >
                        <Typography variant="subtitle2">
                          {" "}
                          Action Date :
                        </Typography>
                      </td>
                      <td className="Style6"
                      style={{
                        visibility:
                        DataSale[15] == null || DataSale[15] == "null"
                          ? "hidden"
                          : "visible",
                      }}>
                        <FormControl
                          className="Style1"
                        >
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={DataSale[15]}
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                      style={{
                        display:
                        DataSale[15] === null || DataSale[15] === ""
                            ? "none"
                            : "table-row",
                      }}
                    >
                      <td className="Style4">
                        <Typography variant="subtitle2">Input thai catergorise:</Typography>
                      </td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[14] !== "null" ? DataSale[14] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                      style={{
                        display:
                        DataSale[15] === null || DataSale[15] === ""
                            ? "none"
                            : "table-row",
                      }}
                    >
                      <td className="Style4">
                        <Typography variant="subtitle2">Comment :</Typography>
                      </td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[16] !== "null" ? DataSale[16] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                    style={{
                      display:
                      DataSale[15] === null || DataSale[15]  === ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4"></td>
                    <td colSpan={5}>
                      <div  style={{ marginLeft: "150px" ,marginTop:'20px' }}>
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
                                          <TableCell>No.</TableCell>
                                          <TableCell>File</TableCell>
                                          <TableCell>View</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {Filedatathai_catergorise.length === 0 ? (
                                          <TableRow>
                                            <TableCell
                                              colSpan={4}
                                              style={{ textAlign: "center" }}
                                            >
                                              <Empty />
                                            </TableCell>
                                          </TableRow>
                                        ) : (
                                          Filedatathai_catergorise.map(
                                            (option, index) => (
                                              <TableRow key={index}>
                                                <TableCell>
                                                  {Filedatathai_catergorise[index][2]}
                                                </TableCell>
                                                <TableCell>
                                                  {Filedatathai_catergorise[index][3]}
                                                </TableCell>
                                                <TableCell
                                                  style={{
                                                    textAlign: "center",
                                                    color: "blue",
                                                    textDecoration: "underline",
                                                  }}
                                                >
                                                  <p
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                      downloadFile(
                                                        Filedatathai_catergorise[index][4]
                                                      )
                                                    }
                                                  >
                                                    {Filedatathai_catergorise[index][3]}
                                                  </p>
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
                  {/* PLN Staff bidding: */}
                  <tr>
                      <td className="Style4">
                        <Typography variant="subtitle2">
                        PLN Staff bidding:
                        </Typography>
                      </td>
                      <td>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[17] !== "null" ? DataSale[17] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                      <td className="Style5">
                       
                      </td>
                      <td
                        className="Style7"
                        style={{
                          visibility:
                          DataSale[18] == null || DataSale[18] == "null"
                            ? "hidden"
                            : "visible",
                        }}
                      >
                        <Typography variant="subtitle2">
                          {" "}
                          Action Date :
                        </Typography>
                      </td>
                      <td className="Style6"
                      style={{
                        visibility:
                        DataSale[18] == null || DataSale[18] == "null"
                          ? "hidden"
                          : "visible",
                      }}>
                        <FormControl
                          className="Style1"
                        >
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={DataSale[18]}
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                      style={{
                        display:
                        DataSale[18] === null || DataSale[18] === ""
                            ? "none"
                            : "table-row",
                      }}
                    >
                      <td className="Style4">
                        <Typography variant="subtitle2">Bidding result:</Typography>
                      </td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[19] !== "null" ? DataSale[19] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                      style={{
                        display:
                        DataSale[18] === null || DataSale[18] === ""
                            ? "none"
                            : "table-row",
                      }}
                    >
                      <td className="Style4">
                        <Typography variant="subtitle2">Comment :</Typography>
                      </td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[20] !== "null" ? DataSale[20] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
               
                    <tr
                    style={{
                      display:
                      DataSale[18] === null || DataSale[18] === ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4"></td>
                    <td colSpan={5}>
                      <div  style={{ marginLeft: "150px" ,marginTop:'20px' }}>
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
                                          <TableCell>No.</TableCell>
                                          <TableCell>File</TableCell>
                                          <TableCell>View</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {FiledataShiiping.length === 0 ? (
                                          <TableRow>
                                            <TableCell
                                              colSpan={4}
                                              style={{ textAlign: "center" }}
                                            >
                                              <Empty />
                                            </TableCell>
                                          </TableRow>
                                        ) : (
                                          FiledataPLN_bidding.map(
                                            (option, index) => (
                                              <TableRow key={index}>
                                                <TableCell>
                                                  {FiledataPLN_bidding[index][2]}
                                                </TableCell>
                                                <TableCell>
                                                  {FiledataPLN_bidding[index][3]}
                                                </TableCell>
                                                <TableCell
                                                  style={{
                                                    textAlign: "center",
                                                    color: "blue",
                                                    textDecoration: "underline",
                                                  }}
                                                >
                                                  <p
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                      downloadFile(
                                                        FiledataPLN_bidding[index][4]
                                                      )
                                                    }
                                                  >
                                                    {FiledataPLN_bidding[index][3]}
                                                  </p>
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
                  {/* PTE (ENV) contact DIW: */}
                  <tr>
                      <td className="Style4">
                        <Typography variant="subtitle2">
                        PTE (ENV) contact DIW:
                        </Typography>
                      </td>
                      <td>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[21] !== "null" ? DataSale[21] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                      <td className="Style5">
                       
                      </td>
                      <td
                        className="Style7"
                        style={{
                          visibility:
                          DataSale[23] == null || DataSale[23] == "null"
                            ? "hidden"
                            : "visible",
                        }}
                      >
                        <Typography variant="subtitle2">
                          {" "}
                          Action Date :
                        </Typography>
                      </td>
                      <td className="Style6"
                      style={{
                        visibility:
                        DataSale[23] == null || DataSale[23] == "null"
                          ? "hidden"
                          : "visible",
                      }}>
                        <FormControl
                          className="Style1"
                        >
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={DataSale[23]}
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    {(VIEW_TYPE == "GP01003" ) && (
                  <tr
                    style={{
                      display:
                        DataSale[23] === null ||
                        DataSale[23] === ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4">
                      <Typography variant="subtitle2">
                       Contact Date:
                      </Typography>{" "}
                    </td>
                    <td>
                      <FormControl className="Style1">
                        <TextField
                          disabled
                          size="small"
                          value={DataSale[43]}
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>
                )}
                    <tr
                      style={{
                        display:
                        DataSale[23] === null || DataSale[23] === ""
                            ? "none"
                            : "table-row",
                      }}
                    >
                      <td className="Style4">
                        <Typography variant="subtitle2">Comment :</Typography>
                      </td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[24] !== "null" ? DataSale[24] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                    style={{
                      display:
                      DataSale[23] === null || DataSale[23] === ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4"></td>
                    <td colSpan={5}>
                      <div  style={{ marginLeft: "150px" ,marginTop:'20px' }}>
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
                                          <TableCell>No.</TableCell>
                                          <TableCell>File</TableCell>
                                          <TableCell>View</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {FiledataWID.length === 0 ? (
                                          <TableRow>
                                            <TableCell
                                              colSpan={4}
                                              style={{ textAlign: "center" }}
                                            >
                                              <Empty />
                                            </TableCell>
                                          </TableRow>
                                        ) : (
                                          FiledataWID.map(
                                            (option, index) => (
                                              <TableRow key={index}>
                                                <TableCell>
                                                  {FiledataWID[index][2]}
                                                </TableCell>
                                                <TableCell>
                                                  {FiledataWID[index][3]}
                                                </TableCell>
                                                <TableCell
                                                  style={{
                                                    textAlign: "center",
                                                    color: "blue",
                                                    textDecoration: "underline",
                                                  }}
                                                >
                                                  <p
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                      downloadFile(
                                                        FiledataWID[index][4]
                                                      )
                                                    }
                                                  >
                                                    {FiledataWID[index][3]}
                                                  </p>
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
                  {/* BOI make export clearance : */}
                  <tr>
                      <td className="Style4">
                        <Typography variant="subtitle2">
                        BOI make export clearance :
                        </Typography>
                      </td>
                      <td>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[25] !== "null" ? DataSale[25] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                      <td className="Style5">
                       
                      </td>
                      <td
                        className="Style7"
                        style={{
                          visibility:
                          DataSale[27] == null || DataSale[27] == "null"
                            ? "hidden"
                            : "visible",
                        }}
                      >
                        <Typography variant="subtitle2">
                          {" "}
                          Action Date :
                        </Typography>
                      </td>
                      <td className="Style6"
                      style={{
                        visibility:
                        DataSale[27] == null || DataSale[27]  == "null"
                          ? "hidden"
                          : "visible",
                      }}>
                        <FormControl
                          className="Style1"
                        >
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={DataSale[27] }
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    {(VIEW_TYPE == "GP01003" ) && (
                  <tr
                    style={{
                      display:
                        DataSale[27] === null ||
                        DataSale[27] === ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4">
                      <Typography variant="subtitle2">
                      Clearance date :
                      </Typography>{" "}
                    </td>
                    <td>
                      <FormControl className="Style1">
                        <TextField
                          disabled
                          size="small"
                          value={DataSale[44]}
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>
                )}
                    <tr
                      style={{
                        display:
                        DataSale[27]  === null ||DataSale[27]  === ""
                            ? "none"
                            : "table-row",
                      }}
                    >
                      <td className="Style4">
                        <Typography variant="subtitle2">Comment :</Typography>
                      </td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[28]  !== "null" ? DataSale[28]  : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                    style={{
                      display:
                      DataSale[27] === null || DataSale[27] === ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4"></td>
                    <td colSpan={5}>
                      <div  style={{ marginLeft: "150px" ,marginTop:'20px' }}>
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
                                          <TableCell>No.</TableCell>
                                          <TableCell>File</TableCell>
                                          <TableCell>View</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {Filedataexp_clearance.length === 0 ? (
                                          <TableRow>
                                            <TableCell
                                              colSpan={4}
                                              style={{ textAlign: "center" }}
                                            >
                                              <Empty />
                                            </TableCell>
                                          </TableRow>
                                        ) : (
                                          Filedataexp_clearance.map(
                                            (option, index) => (
                                              <TableRow key={index}>
                                                <TableCell>
                                                  {Filedataexp_clearance[index][2]}
                                                </TableCell>
                                                <TableCell>
                                                  {Filedataexp_clearance[index][3]}
                                                </TableCell>
                                                <TableCell
                                                  style={{
                                                    textAlign: "center",
                                                    color: "blue",
                                                    textDecoration: "underline",
                                                  }}
                                                >
                                                  <p
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                      downloadFile(
                                                        Filedataexp_clearance[index][4]
                                                      )
                                                    }
                                                  >
                                                    {Filedataexp_clearance[index][3]}
                                                  </p>
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
                  {/* PTE(ENV) upload file after clearance: */}
                  <tr>
                      <td className="Style4">
                        <Typography variant="subtitle2">
                        PTE(ENV) upload file after clearance:
                        </Typography>
                      </td>
                      <td>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[29] !== "null" ?  DataSale[29] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                      <td className="Style5">
                       
                      </td>
                      <td
                        className="Style7"
                        style={{
                          visibility:
                          DataSale[31] == null ||  DataSale[31] == "null"
                            ? "hidden"
                            : "visible",
                        }}
                      >
                        <Typography variant="subtitle2">
                          {" "}
                          Action Date :
                        </Typography>
                      </td>
                      <td className="Style6"
                      style={{
                        visibility:
                        DataSale[31]== null || DataSale[31] == "null"
                          ? "hidden"
                          : "visible",
                      }}>
                        <FormControl
                          className="Style1"
                        >
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={DataSale[31]}
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    {(VIEW_TYPE == "GP01003" ) && (
                  <tr
                    style={{
                      display:
                        DataSale[31] === null ||
                        DataSale[31] === ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4">
                      <Typography variant="subtitle2">
                       Contect Date:
                      </Typography>{" "}
                    </td>
                    <td>
                      <FormControl className="Style1">
                        <TextField
                          disabled
                          size="small"
                          value={DataSale[45]}
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>
                )}
                    <tr
                      style={{
                        display:
                        DataSale[31] === null ||DataSale[31] === ""
                            ? "none"
                            : "table-row",
                      }}
                    >
                      <td className="Style4">
                        <Typography variant="subtitle2">Comment :</Typography>
                      </td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[32] !== "null" ? DataSale[32]: ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                    style={{
                      display:
                      DataSale[31] === null || DataSale[31] === ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4"></td>
                    <td colSpan={5}>
                      <div  style={{ marginLeft: "150px" ,marginTop:'20px' }}>
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
                                          <TableCell>No.</TableCell>
                                          <TableCell>File</TableCell>
                                          <TableCell>View</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        { Filedataafter_export.length === 0 ? (
                                          <TableRow>
                                            <TableCell
                                              colSpan={4}
                                              style={{ textAlign: "center" }}
                                            >
                                              <Empty />
                                            </TableCell>
                                          </TableRow>
                                        ) : (
                                          Filedataafter_export.map(
                                            (option, index) => (
                                              <TableRow key={index}>
                                                <TableCell>
                                                  { Filedataafter_export[index][2]}
                                                </TableCell>
                                                <TableCell>
                                                  { Filedataafter_export[index][3]}
                                                </TableCell>
                                                <TableCell
                                                  style={{
                                                    textAlign: "center",
                                                    color: "blue",
                                                    textDecoration: "underline",
                                                  }}
                                                >
                                                  <p
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                      downloadFile(
                                                        Filedataafter_export[index][4]
                                                      )
                                                    }
                                                  >
                                                    { Filedataafter_export[index][3]}
                                                  </p>
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
                  {/* PLN Staff request Invoice: */}
                  <tr>
                      <td className="Style4">
                        <Typography variant="subtitle2">
                        PLN Staff request Invoice:
                        </Typography>
                      </td>
                      <td>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[33] !== "null" ? DataSale[33] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                      <td className="Style5">
                       
                      </td>
                      <td
                        className="Style7"
                        style={{
                          visibility:
                          DataSale[34] == null || DataSale[34] == "null"
                            ? "hidden"
                            : "visible",
                        }}
                      >
                        <Typography variant="subtitle2">
                          {" "}
                          Action Date :
                        </Typography>
                      </td>
                      <td className="Style6"
                      style={{
                        visibility:
                        DataSale[34] == null || DataSale[34] == "null"
                          ? "hidden"
                          : "visible",
                      }}>
                        <FormControl
                          className="Style1"
                        >
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={DataSale[34]}
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                      style={{
                        display:
                        DataSale[34] === null || DataSale[34] === ""
                            ? "none"
                            : "table-row",
                      }}
                    >
                      <td className="Style4">
                        <Typography variant="subtitle2">Comment :</Typography>
                      </td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[35]!== "null" ?DataSale[35] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                    style={{
                      display:
                      DataSale[34] === null ||  DataSale[34] === ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4"></td>
                    <td colSpan={5}>
                      <div  style={{ marginLeft: "150px" ,marginTop:'20px' }}>
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
                                          <TableCell>No.</TableCell>
                                          <TableCell>File</TableCell>
                                          <TableCell>View</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {Filedatareq_inv.length === 0 ? (
                                          <TableRow>
                                            <TableCell
                                              colSpan={4}
                                              style={{ textAlign: "center" }}
                                            >
                                              <Empty />
                                            </TableCell>
                                          </TableRow>
                                        ) : (
                                          Filedatareq_inv.map(
                                            (option, index) => (
                                              <TableRow key={index}>
                                                <TableCell>
                                                  {Filedatareq_inv[index][2]}
                                                </TableCell>
                                                <TableCell>
                                                  {Filedatareq_inv[index][3]}
                                                </TableCell>
                                                <TableCell
                                                  style={{
                                                    textAlign: "center",
                                                    color: "blue",
                                                    textDecoration: "underline",
                                                  }}
                                                >
                                                  <p
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                      downloadFile(
                                                        Filedatareq_inv[index][4]
                                                      )
                                                    }
                                                  >
                                                    {Filedatareq_inv[index][3]}
                                                  </p>
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
                  {/* Shipping Staff input invoice no.: */}
                  <tr>
                      <td className="Style4">
                        <Typography variant="subtitle2">
                        Shipping Staff input invoice no.:
                        </Typography>
                      </td>
                      <td>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[36] !== "null" ? DataSale[36] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                      <td className="Style5">
                       
                      </td>
                      <td
                        className="Style7"
                        style={{
                          visibility:
                          DataSale[37] == null || DataSale[37] == "null"
                            ? "hidden"
                            : "visible",
                        }}
                      >
                        <Typography variant="subtitle2">
                          {" "}
                          Action Date :
                        </Typography>
                      </td>
                      <td className="Style6"
                      style={{
                        visibility:
                        DataSale[37] == null ||DataSale[37] == "null"
                          ? "hidden"
                          : "visible",
                      }}>
                        <FormControl
                          className="Style1"
                        >
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={DataSale[37]}
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                      style={{
                        display:
                        DataSale[37] === null || DataSale[37] === ""
                            ? "none"
                            : "table-row",
                      }}
                    >
                      <td className="Style4">
                        <Typography variant="subtitle2">Comment :</Typography>
                      </td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[38] !== "null" ? DataSale[38] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                    style={{
                      display:
                      DataSale[37]  === null || DataSale[37]  === ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4"></td>
                    <td colSpan={5}>
                      <div  style={{ marginLeft: "150px" ,marginTop:'20px' }}>
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
                                          <TableCell>No.</TableCell>
                                          <TableCell>File</TableCell>
                                          <TableCell>View</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {Filedataship_staff.length === 0 ? (
                                          <TableRow>
                                            <TableCell
                                              colSpan={4}
                                              style={{ textAlign: "center" }}
                                            >
                                              <Empty />
                                            </TableCell>
                                          </TableRow>
                                        ) : (
                                          Filedataship_staff.map(
                                            (option, index) => (
                                              <TableRow key={index}>
                                                <TableCell>
                                                  {Filedataship_staff[index][2]}
                                                </TableCell>
                                                <TableCell>
                                                  {Filedataship_staff[index][3]}
                                                </TableCell>
                                                <TableCell
                                                  style={{
                                                    textAlign: "center",
                                                    color: "blue",
                                                    textDecoration: "underline",
                                                  }}
                                                >
                                                  <p
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                      downloadFile(
                                                        Filedataship_staff[index][4]
                                                      )
                                                    }
                                                  >
                                                    {FiledataShiiping[index][3]}
                                                  </p>
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
                  {/* PLN Staff upload Final payment 50%: */}
                  <tr>
                      <td className="Style4">
                        <Typography variant="subtitle2">
                        PLN Staff upload Final payment 50%:
                        </Typography>
                      </td>
                      <td>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[39] !== "null" ? DataSale[39] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                      <td className="Style5">
                       
                      </td>
                      <td
                        className="Style7"
                        style={{
                          visibility:
                          DataSale[40] == null ||  DataSale[40] == "null"
                            ? "hidden"
                            : "visible",
                        }}
                      >
                        <Typography variant="subtitle2">
                          {" "}
                          Action Date :
                        </Typography>
                      </td>
                      <td className="Style6"
                      style={{
                        visibility:
                        DataSale[40] == null || DataSale[40]== "null"
                          ? "hidden"
                          : "visible",
                      }}>
                        <FormControl
                          className="Style1"
                        >
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={DataSale[40]}
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    {(VIEW_TYPE == "GP01003" ) && (
                  <tr
                    style={{
                      display:
                      DataSale[40] === null ||
                      DataSale[40] === ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4">
                      <Typography variant="subtitle2">
                       Vendor move date:
                      </Typography>{" "}
                    </td>
                    <td>
                      <FormControl className="Style1">
                        <TextField
                          disabled
                          size="small"
                          value={DataSale[46]}
                          style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                          }}
                        />
                      </FormControl>
                    </td>
                  </tr>
                )}
                    <tr
                      style={{
                        display:
                        DataSale[40] === null ||DataSale[40] === ""
                            ? "none"
                            : "table-row",
                      }}
                    >
                      <td className="Style4">
                        <Typography variant="subtitle2">Comment :</Typography>
                      </td>
                      <td colSpan={4}>
                        <FormControl className="Style1">
                          <TextField
                            style={{
                              backgroundColor: "rgba(169, 169, 169, 0.3)",
                            }}
                            className="Style1"
                            size="small"
                            disabled
                            value={
                              DataSale[42] !== "null" ? DataSale[42] : ""
                            }
                          ></TextField>
                        </FormControl>
                      </td>
                    </tr>
                    <tr
                    style={{
                      display:
                      DataSale[40] === null || DataSale[40] === ""
                          ? "none"
                          : "table-row",
                    }}
                  >
                    <td className="Style4"></td>
                    <td colSpan={5}>
                      <div  style={{ marginLeft: "150px" ,marginTop:'20px' }}>
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
                                          <TableCell>No.</TableCell>
                                          <TableCell>File</TableCell>
                                          <TableCell>View</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {Filedataupload_final.length === 0 ? (
                                          <TableRow>
                                            <TableCell
                                              colSpan={4}
                                              style={{ textAlign: "center" }}
                                            >
                                              <Empty />
                                            </TableCell>
                                          </TableRow>
                                        ) : (
                                          Filedataupload_final.map(
                                            (option, index) => (
                                              <TableRow key={index}>
                                                <TableCell>
                                                  {Filedataupload_final[index][2]}
                                                </TableCell>
                                                <TableCell>
                                                  {Filedataupload_final[index][3]}
                                                </TableCell>
                                                <TableCell
                                                  style={{
                                                    textAlign: "center",
                                                    color: "blue",
                                                    textDecoration: "underline",
                                                  }}
                                                >
                                                  <p
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                      downloadFile(
                                                        Filedataupload_final[index][4]
                                                      )
                                                    }
                                                  >
                                                    {Filedataupload_final[index][3]}
                                                  </p>
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
                  </table>
                
                </div>
              </Card>
            </Card>
          </div>
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
                // border: 1,
                // borderColor: "rgba(64,131,65, 1.5)",
                // boxShadow: "0px 4px 8px rgba(64,131,65, 0.4)",
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
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={
                          DataRoutingFamno[30] !== "null"
                            ? DataRoutingFamno[30]
                            : ""
                        }
                      ></TextField>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl
                      style={{
                        visibility:
                          selectradio_record == null ||
                          selectradio_record == "null"
                            ? "hidden"
                            : "visibled",
                      }}
                    >
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_record}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Accept"
                          disabled
                        />
                        <FormControlLabel
                          value="R"
                          disabled
                          control={<Radio size="small" />}
                          label="No Accept"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td
                    className="Style7"
                    style={{
                      visibility:
                        selectradio_record == null ||
                        selectradio_record == "null"
                          ? "hidden"
                          : "visibled",
                    }}
                  >
                    <Typography variant="subtitle2"> Action Date :</Typography>
                  </td>
                  <td className="Style6">
                    <FormControl
                      className="Style1"
                      style={{
                        visibility:
                          selectradio_record == null ||
                          selectradio_record == "null"
                            ? "hidden"
                            : "visibled",
                      }}
                    >
                      <TextField
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[32]}
                      ></TextField>
                    </FormControl>
                  </td>
                </tr>
                <tr
                  style={{
                    display:
                    DataRoutingFamno[32] === null ||
                      DataRoutingFamno[32] === ""
                        ? "none"
                        : "table-row",
                  }}
                >
                  <td className="Style4">
                    <Typography variant="subtitle2">Comment :</Typography>
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={
                          DataRoutingFamno[33] !== "null"
                            ? DataRoutingFamno[33]
                            : ""
                        }
                      ></TextField>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td className="Style4">
                    <Typography variant="subtitle2">ACC Manager :</Typography>{" "}
                  </td>
                  <td>
                    <FormControl className="Style3">
                      <TextField
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={
                          DataRoutingFamno[34] !== "null"
                            ? DataRoutingFamno[34]
                            : ""
                        }
                      ></TextField>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl
                      style={{
                        visibility:
                          selectradio_acc_manager == null ||
                          selectradio_acc_manager == "null"
                            ? "hidden"
                            : "visibled",
                      }}
                    >
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_acc_manager}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Approve"
                          disabled
                        />
                        <FormControlLabel
                          value="R"
                          disabled
                          control={<Radio size="small" />}
                          label="Reject"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td
                    className="Style7"
                    style={{
                      visibility:
                        selectradio_acc_manager == null ||
                        selectradio_acc_manager == "null"
                          ? "hidden"
                          : "visibled",
                    }}
                  >
                    <Typography variant="subtitle2"> Action Date :</Typography>
                  </td>
                  <td className="Style6">
                    <FormControl
                      className="Style1"
                      style={{
                        visibility:
                          selectradio_acc_manager == null ||
                          selectradio_acc_manager == "null"
                            ? "hidden"
                            : "visibled",
                      }}
                    >
                      <TextField
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[36]}
                      ></TextField>
                    </FormControl>
                  </td>
                </tr>
                <tr
                  style={{
                    display:
                      DataRoutingFamno[36] === null ||
                      DataRoutingFamno[36] === ""
                        ? "none"
                        : "table-row",
                  }}
                >
                  <td className="Style4">
                    <Typography variant="subtitle2"> Comment :</Typography>
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={
                          DataRoutingFamno[37] !== "null"
                            ? DataRoutingFamno[37]
                            : ""
                        }
                      ></TextField>
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
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={
                          DataRoutingFamno[38] !== "null"
                            ? DataRoutingFamno[38]
                            : ""
                        }
                      ></TextField>
                    </FormControl>
                  </td>
                  <td className="Style5">
                    <FormControl
                      style={{
                        visibility:
                          selectradio_service_close_by == null ||
                          selectradio_service_close_by == "null"
                            ? "hidden"
                            : "visibled",
                      }}
                    >
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectradio_service_close_by}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio size="small" />}
                          label="Approve"
                          disabled
                        />
                        <FormControlLabel
                          value="R"
                          disabled
                          control={<Radio size="small" />}
                          label="Reject"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                  <td
                    className="Style7"
                    style={{
                      visibility:
                        selectradio_service_close_by == null ||
                        selectradio_service_close_by == "null"
                          ? "hidden"
                          : "visibled",
                    }}
                  >
                    <Typography variant="subtitle2">Action Date :</Typography>
                  </td>
                  <td className="Style6">
                    <FormControl
                      className="Style1"
                      style={{
                        visibility:
                          selectradio_service_close_by == null ||
                          selectradio_service_close_by == "null"
                            ? "hidden"
                            : "visibled",
                      }}
                    >
                      <TextField
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
                        }}
                        className="Style1"
                        size="small"
                        disabled
                        value={DataRoutingFamno[40]}
                      ></TextField>
                    </FormControl>
                  </td>
                </tr>
                <tr
                  style={{
                    display:
                      DataRoutingFamno[40] === null ||
                      DataRoutingFamno[40] === ""
                        ? "none"
                        : "table-row",
                  }}
                >
                  <td className="Style4">
                    <Typography variant="subtitle2">Comment :</Typography>
                  </td>
                  <td colSpan={4}>
                    <FormControl className="Style1">
                      <TextField
                        id="outlined-size-small"
                        value={
                          DataRoutingFamno[41] !== "null"
                            ? DataRoutingFamno[41]
                            : ""
                        }
                        size="small"
                        disabled
                        style={{
                          backgroundColor: "rgba(169, 169, 169, 0.3)",
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
              onClick={BackPage}
            >
              BACK PAGE
            </Button>
            {/* <Button
              variant="contained"
              style={{
                width: "200px",
                marginTop: "20px",
                marginBottom: "20px",
                marginRight: "20px",
                backgroundColor: "gray",
              }}
            >
              Next Page
            </Button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default TransFerDetail;
