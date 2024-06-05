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

function TransFerDetail() {
  const {
    VIEW_FAM,
    VIEW_TYPE,
    DataTransferFamno,
    DataRoutingFamno,
    DataName,
    DataLending,
    DataScrap,
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
                {console.log(DataRoutingFamno[16],"DataRoutingFamno[16]")}
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
                          {" "}
                          Action Date :
                        </Typography>
                      </td>
                      <td className="Style6">
                        <FormControl
                          className="Style1"
                          style={{
                            visibility:
                            DataLending[2] == null ||
                            DataLending[2] == "null"
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
                              : "visibled",
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
                            DataLending[7] == null || DataLending[7] == "null"
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
                          : "visibled",
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
                        DataScrap[2] == null || DataScrap[2] == "null"
                          ? "hidden"
                          : "visibled",
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
                            : "visibled",
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
                          : "visibled",
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
                            : "visibled",
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
                          : "visibled",
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
