import React, { useState, useEffect } from "react";
import Header from "../Page/Hearder";
import "../CSS/Homepage.css";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Tooltip from "@mui/material/Tooltip";
import {
  Typography,
  FormControl,
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Select,
  MenuItem,
  Grid,
  TextField,
  Button,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Empty } from "antd";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import swal from "sweetalert";
import "../Person_Maintain/Person_maintain.css";
import Popup from "../BOI_Project_Mpping_CC/Boi_maintain";
import Autocomplete from "@mui/material/Autocomplete";
import PageLoadding from "../Loadding/Pageload";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import EditOffIcon from "@mui/icons-material/EditOff";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ApexCharts from "react-apexcharts";

function Boi_project_mcc() {
  const UserLogin = localStorage.getItem("UserLogin");
  const [dataTransfer, setdataTransfer] = useState([]);
  const [dataTransferall, setdataTransferall] = useState([]);

  const colors = [ '#EC8F5E', '#33FFC7', '#336EFF', '#33FF61', '#AA33FF', '#FF33E8', '#3337FF'];

  var options = {
    series: [
      {
        data: [2, 1, 4, 10, 6, 1, 6],
       
      },
    ],

    // series: colors.map(color => ({ data: [2, 1, 4, 10, 6, 1, 6], colors: color })),

    // series: colors.map(color => ({
    //   data: [2, 1, 4, 10, 6, 1, 6],
    //   color: color
    // })),

    // series: [
    //   {
    //     data: [2],
    //     color: colors[0]
    //   },
    //   {
    //     data: [1],
    //     color: colors[1]
    //   },
    //   {
    //     data: [4],
    //     color: colors[2]
    //   },
    //   {
    //     data: [10],
    //     color: colors[3]
    //   },
    //   {
    //     data: [6],
    //     color: colors[4]
    //   },
    //   {
    //     data: [1],
    //     color: colors[5]
    //   },
    //   {
    //     data: [6],
    //     color: colors[6]
    //   }
    // ],
    chart: {
      type: "bar",
      height: 350,
      
    },

    colors: colors,
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },

    },

    dataLabels: {
      enabled: false,
   
    },

    xaxis: {
      
      categories: [
        "Transfer",
        "Lost",
        "Write off",
        "Lending",
        "Scrap",
        "Sales",
        "Donation",
      ],
    },
  };

  // เก็บไว้เป็นกราฟแท่งนะจ๊ะ อิอิ ^ _ ^
  // var options = {
  //   series: [{
  //     data: [1, 2, 10, 20, 5, 15, 11]
  //   }],
  //   chart: {
  //     height: 350,
  //     type: 'bar',
  //     events: {
  //       click: function(chart, w, e) {
  //         // console.log(chart, w, e)
  //       }
  //     }
  //   },
  //   colors: colors,
  //   plotOptions: {
  //     bar: {
  //       columnWidth: '45%',
  //       distributed: true,
  //       // horizontal: true,
  //     }
  //   },
  //   dataLabels: {
  //     enabled: false
  //   },
  //   legend: {
  //     show: false
  //   },
  //   xaxis: {
  //     categories: [
  //       ['Transfer'],
  //       ['Lost'],
  //       ['Write off'],
  //       ['Lending'],
  //       ['Scrap'],
  //       ['Sales'],
  //       ['Donation' ],
  //     ],
  //     labels: {
  //       style: {
  //         colors: colors,
  //         fontSize: '12px'
  //       }
  //     }
  //   }
  // };

  // var chart = new ApexCharts(document.querySelector("#chart"), options);
  // chart.render();

  useEffect(() => {
    openPopupLoadding();
    const fetchData = async () => {
      console.log("fetchData Menulist");

      const Transfer = async () => {
        try {
          console.log(UserLogin, "fetchData UserLogin");
          const response = await axios.get(
            `http://localhost:5000/getCountTransfer?UserLogin=${UserLogin}`
          );
          const Transfer = await response.data;
          setdataTransfer(Transfer);
          console.log(Transfer, "Transferdata");
        } catch (error) {
          console.error("Error Transferdata:", error);
        }
      };

      const Transferlistall = async () => {
        try {
          console.log(UserLogin, "fetchData UserLogin");
          const response = await axios.get(
            `http://localhost:5000/getCountTransferlistaLL?UserLogin=${UserLogin}`
          );
          const Transferall = await response.data;
          setdataTransferall(Transferall);
          console.log(Transferall, "Transferdataall");
        } catch (error) {
          console.error("Error Transferdataall:", error);
        }
        closePopupLoadding();
      };

      await Transfer();
      await Transferlistall();
    };
    fetchData();
  }, []);

  // Loadding
  const [isPopupOpenLoadding, setPopupOpenLoadding] = useState(false);
  const openPopupLoadding = () => {
    setPopupOpenLoadding(true);
  };
  const closePopupLoadding = () => {
    setPopupOpenLoadding(false);
  };

  return (
    <>
      <Header />
      <PageLoadding isOpen={isPopupOpenLoadding} onClose={closePopupLoadding} />
      <div className="BackgroundPage">
        <div className="DDDDDD">
          <Table className="T1">
            {/* Header */}
            <TableRow className="BackgroundRow" colSpan={2}>
              <TableCell className="ShowdataANDData" colSpan={2}>
                <Box sx={{ minWidth: 275, height: 86 }}></Box>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell></TableCell>
              <TableCell className="ShowdataANDData1">
                {/* <Card style={{ width: "100%", marginTop: "-120px" , borderRadius: "50px"}}> */}
                <Card className="ShowData">
                  <CardContent style={{ width: "100%", height: "200px" }}>
                    {/* <TableRow>
                      {" "}
                      <Typography className="BText">Dashborad</Typography>
                    </TableRow> */}
                    <TableRow>
                      <TableCell className="StyleMenuLL">
                        <Card className="MenuSelect">
                          <CardActionArea
                            style={{ width: "100%", height: "100%" }}
                          >
                            <CardContent
                              className="CardCONTENT"
                              style={{
                                backgroundImage:
                                  "linear-gradient(to top, #4D6C68, #AFC8AD)",
                              }}
                            >
                              <TableRow>
                                <TableCell className="CardText">
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    className="BText"
                                  >
                                    <CurrencyExchangeIcon fontSize="large" />{" "}
                                    <br />
                                    Transfer
                                  </Typography>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="CardNumber">
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    className="NText"
                                  >
                                    {dataTransfer[0] || 0}
                                  </Typography>
                                </TableCell>
                              </TableRow>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </TableCell>

                      <TableCell className="StyleMenuLL">
                        <Card className="MenuSelect">
                          <CardActionArea
                            style={{ width: "100%", height: "100%" }}
                          >
                            <CardContent
                              className="CardCONTENT"
                              style={{
                                backgroundImage:
                                  "linear-gradient(to top, #81689D, #DCBFFF)",
                              }}
                            >
                              <TableRow>
                                <TableCell className="CardText">
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    className="BText"
                                  >
                                    <ProductionQuantityLimitsIcon fontSize="large" />
                                    <br /> Lost
                                  </Typography>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="CardNumber">
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    className="NText"
                                  >
                                    0
                                  </Typography>
                                </TableCell>
                              </TableRow>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </TableCell>

                      <TableCell className="StyleMenuLL">
                        <Card className="MenuSelect">
                          <CardActionArea
                            style={{ width: "100%", height: "100%" }}
                          >
                            <CardContent
                              className="CardCONTENT"
                              style={{
                                backgroundImage:
                                  "linear-gradient(to top, #4A55A2, #D2E0FB)",
                              }}
                            >
                              <TableRow>
                                <TableCell className="CardText">
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    className="BText"
                                  >
                                    <EditOffIcon fontSize="large" /> <br />
                                    Write off
                                  </Typography>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="CardNumber">
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    className="NText"
                                  >
                                    0
                                  </Typography>
                                </TableCell>
                              </TableRow>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </TableCell>

                      <TableCell className="StyleMenuLL">
                        <Card className="MenuSelect">
                          <CardActionArea
                            style={{ width: "100%", height: "100%" }}
                          >
                            <CardContent
                              className="CardCONTENT"
                              style={{
                                backgroundImage:
                                  "linear-gradient(to top, #387ADF, #B7C9F2)",
                              }}
                            >
                              <TableRow>
                                <TableCell className="CardText">
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    className="BText"
                                  >
                                    <TransferWithinAStationIcon fontSize="large" />
                                    <br />
                                    Lending
                                  </Typography>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="CardNumber">
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    className="NText"
                                  >
                                    0
                                  </Typography>
                                </TableCell>
                              </TableRow>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </TableCell>

                      <TableCell className="StyleMenuLL">
                        <Card className="MenuSelect">
                          <CardActionArea
                            style={{ width: "100%", height: "100%" }}
                          >
                            <CardContent
                              className="CardCONTENT"
                              style={{
                                backgroundImage:
                                  "linear-gradient(to top, #40A2E3, #B4D4FF)",
                              }}
                            >
                              <TableRow>
                                <TableCell className="CardText">
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    className="BText"
                                  >
                                    <DeleteSweepIcon fontSize="large" />
                                    <br />
                                    Scrap
                                  </Typography>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="CardNumber">
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    className="NText"
                                  >
                                    0
                                  </Typography>
                                </TableCell>
                              </TableRow>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </TableCell>

                      <TableCell className="StyleMenuLL">
                        <Card className="MenuSelect">
                          <CardActionArea
                            style={{ width: "100%", height: "100%" }}
                          >
                            <CardContent
                              className="CardCONTENT"
                              style={{
                                backgroundImage:
                                  "linear-gradient(to top, #7990A7, #D2E0FB)",
                              }}
                            >
                              <TableRow>
                                <TableCell className="CardText">
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    className="BText"
                                  >
                                    <MonetizationOnIcon fontSize="large" />{" "}
                                    <br />
                                    Sales
                                  </Typography>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="CardNumber">
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    className="NText"
                                  >
                                    0
                                  </Typography>
                                </TableCell>
                              </TableRow>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </TableCell>

                      <TableCell className="StyleMenuLL">
                        <Card className="MenuSelect">
                          <CardActionArea
                            style={{ width: "100%", height: "100%" }}
                          >
                            <CardContent
                              className="CardCONTENT"
                              style={{
                                backgroundImage:
                                  "linear-gradient(to top, #667680, #C9D7DD)",
                              }}
                            >
                              <TableRow>
                                <TableCell className="CardText">
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    className="BText"
                                  >
                                    <VolunteerActivismIcon fontSize="large" />{" "}
                                    <br />
                                    Donation
                                  </Typography>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="CardNumber">
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    className="NText"
                                  >
                                    0
                                  </Typography>
                                </TableCell>
                              </TableRow>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </TableCell>
                    </TableRow>
                  </CardContent>
                </Card>
              </TableCell>
            </TableRow>

            {/* Showdata */}
            <TableRow>
              <TableCell className="ShowdataANDData2">
                <Card className="ShowData2">
                  <CardContent style={{ width: "100%", height: "550px" }}>
                    <TableContainer
                      component={Paper}
                      style={{
                        width: "460px",
                      }}
                      className="TableShowData"
                    >
                      <Table
                        size="small"
                        aria-label="a dense table"
                        // aria-label="simple table"
                        className="FORNTTT"
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell
                              colSpan={2}
                              align="center"
                              style={{
                                fontFamily: "Verdana, sans-serif",
                                color: "#000000",
                                fontWeight: "bold",
                                fontSize: "22px",
                              }}
                            >
                              Transfer
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow
                            className="Hoverhover"
                            style={{ borderBottom: "1px solid #E5EAF2" }}
                          >
                            <TableCell align="left">Create </TableCell>
                            <TableCell className="Hlistnumber">
                              <Typography className="listnumber">
                                {" "}
                                {(dataTransferall &&
                                  dataTransferall[0] &&
                                  dataTransferall[0][0]) ||
                                  0}
                              </Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow
                            className="Hoverhover"
                            style={{ borderBottom: "1px solid #E5EAF2" }}
                          >
                            <TableCell align="left">
                              Wait Department manager
                            </TableCell>
                            <TableCell className="Hlistnumber">
                              <Typography className="listnumber">
                                {" "}
                                {(dataTransferall &&
                                  dataTransferall[0] &&
                                  dataTransferall[0][1]) ||
                                  0}
                              </Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow
                            className="Hoverhover"
                            style={{ borderBottom: "1px solid #E5EAF2" }}
                          >
                            <TableCell align="left">
                              Wait Service Dept. check
                            </TableCell>
                            <TableCell className="Hlistnumber">
                              <Typography className="listnumber">
                                {" "}
                                {(dataTransferall &&
                                  dataTransferall[0] &&
                                  dataTransferall[0][2]) ||
                                  0}
                              </Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow
                            className="Hoverhover"
                            style={{ borderBottom: "1px solid #E5EAF2" }}
                          >
                            <TableCell align="left">
                              Wait BOI Staff check
                            </TableCell>
                            <TableCell className="Hlistnumber">
                              <Typography className="listnumber">
                                {" "}
                                {(dataTransferall &&
                                  dataTransferall[0] &&
                                  dataTransferall[0][3]) ||
                                  0}
                              </Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow
                            className="Hoverhover"
                            style={{ borderBottom: "1px solid #E5EAF2" }}
                          >
                            <TableCell align="left">Wait BOI Manager</TableCell>
                            <TableCell className="Hlistnumber">
                              <Typography className="listnumber">
                                {" "}
                                {(dataTransferall &&
                                  dataTransferall[0] &&
                                  dataTransferall[0][4]) ||
                                  0}
                              </Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow
                            className="Hoverhover"
                            style={{ borderBottom: "1px solid #E5EAF2" }}
                          >
                            <TableCell align="left">
                              Wait Factory Manager
                            </TableCell>
                            <TableCell className="Hlistnumber">
                              <Typography className="listnumber">
                                {" "}
                                {(dataTransferall &&
                                  dataTransferall[0] &&
                                  dataTransferall[0][5]) ||
                                  0}
                              </Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow
                            className="Hoverhover"
                            style={{ borderBottom: "1px solid #E5EAF2" }}
                          >
                            <TableCell align="left">
                              Wait ACC Staff check
                            </TableCell>
                            <TableCell className="Hlistnumber">
                              <Typography className="listnumber">
                                {" "}
                                {(dataTransferall &&
                                  dataTransferall[0] &&
                                  dataTransferall[0][6]) ||
                                  0}
                              </Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow
                            className="Hoverhover"
                            style={{ borderBottom: "1px solid #E5EAF2" }}
                          >
                            <TableCell align="left">Wait Owner check</TableCell>
                            <TableCell className="Hlistnumber">
                              <Typography className="listnumber">
                                {" "}
                                {(dataTransferall &&
                                  dataTransferall[0] &&
                                  dataTransferall[0][7]) ||
                                  0}
                              </Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow
                            className="Hoverhover"
                            style={{ borderBottom: "1px solid #E5EAF2" }}
                          >
                            <TableCell align="left">
                              Wait Receiver action
                            </TableCell>
                            <TableCell className="Hlistnumber">
                              <Typography className="listnumber">
                                {" "}
                                {(dataTransferall &&
                                  dataTransferall[0] &&
                                  dataTransferall[0][8]) ||
                                  0}
                              </Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow
                            className="Hoverhover"
                            style={{ borderBottom: "1px solid #E5EAF2" }}
                          >
                            <TableCell align="left">
                              Wait ACC staff update data
                            </TableCell>
                            <TableCell className="Hlistnumber">
                              <Typography className="listnumber">
                                {" "}
                                {(dataTransferall &&
                                  dataTransferall[0] &&
                                  dataTransferall[0][9]) ||
                                  0}
                              </Typography>
                            </TableCell>
                          </TableRow>

                          <TableRow
                            className="Hoverhover"
                            style={{ borderBottom: "1px solid #E5EAF2" }}
                          >
                            <TableCell align="left">Wait ACC Mgr.</TableCell>
                            <TableCell className="Hlistnumber">
                              <Typography className="listnumber">
                                {" "}
                                {(dataTransferall &&
                                  dataTransferall[0] &&
                                  dataTransferall[0][10]) ||
                                  0}
                              </Typography>
                            </TableCell>
                          </TableRow>

                          <TableRow
                            className="Hoverhover"
                            style={{ borderBottom: "1px solid #E5EAF2" }}
                          >
                            <TableCell align="left">
                              Wait Service Dept. close
                            </TableCell>
                            <TableCell className="Hlistnumber">
                              <Typography className="listnumber">
                                {" "}
                                {(dataTransferall &&
                                  dataTransferall[0] &&
                                  dataTransferall[0][11]) ||
                                  0}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CardContent>
                </Card>
              </TableCell>

              <TableCell className="ShowdataANDData3">
                <Card className="ShowData3">
                  <CardContent style={{ width: "100%", height: "300px" }}>
                    <ApexCharts
                      options={options}
                      series={options.series}
                      type="bar"
                      height={320}
                      width={900}
                    />
                  </CardContent>
                </Card>
              </TableCell>
            </TableRow>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Boi_project_mcc;

// <TableRow
// sx={{
//   "&:last-child td, &:last-child th": { border: 0 },
// }}
// className="Hoverhover"
// >
// <TableCell align="left">Create </TableCell>
// <TableCell align="right">{dataTransferall[0][0]}</TableCell>
// </TableRow>
// <TableRow
// sx={{
//   "&:last-child td, &:last-child th": { border: 0 },
// }}
// className="Hoverhover"
// >
// <TableCell align="left">
//   Wait Department manager
// </TableCell>
// <TableCell align="right">{dataTransferall[0][1]}</TableCell>
// </TableRow>
// <TableRow
// sx={{
//   "&:last-child td, &:last-child th": { border: 0 },
// }}
// className="Hoverhover"
// >
// <TableCell align="left">
//   Wait Service Dept. check
// </TableCell>
// <TableCell align="right">{dataTransferall[0][2]}</TableCell>
// </TableRow>
// <TableRow
// sx={{
//   "&:last-child td, &:last-child th": { border: 0 },
// }}
// className="Hoverhover"
// >
// <TableCell align="left">
//   Wait BOI Staff check
// </TableCell>
// <TableCell align="right">{dataTransferall[0][3]}</TableCell>
// </TableRow>
// <TableRow
// sx={{
//   "&:last-child td, &:last-child th": { border: 0 },
// }}
// className="Hoverhover"
// >
// <TableCell align="left">Wait BOI Manager</TableCell>
// <TableCell align="right">{dataTransferall[0][4]}</TableCell>
// </TableRow>
// <TableRow
// sx={{
//   "&:last-child td, &:last-child th": { border: 0 },
// }}
// className="Hoverhover"
// >
// <TableCell align="left">
//   Wait Factory Manager
// </TableCell>
// <TableCell align="right">{dataTransferall[0][5]}</TableCell>
// </TableRow>
// <TableRow
// sx={{
//   "&:last-child td, &:last-child th": { border: 0 },
// }}
// className="Hoverhover"
// >
// <TableCell align="left">
//   Wait ACC Staff check
// </TableCell>
// <TableCell align="right">{dataTransferall[0][6]}</TableCell>
// </TableRow>
// <TableRow
// sx={{
//   "&:last-child td, &:last-child th": { border: 0 },
// }}
// className="Hoverhover"
// >
// <TableCell align="left">Wait Owner check</TableCell>
// <TableCell align="right">{dataTransferall[0][7]}</TableCell>
// </TableRow>
// <TableRow
// sx={{
//   "&:last-child td, &:last-child th": { border: 0 },
// }}
// className="Hoverhover"
// >
// <TableCell align="left">
//   Wait Receiver action
// </TableCell>
// <TableCell align="right">{dataTransferall[0][8]}</TableCell>
// </TableRow>
// <TableRow
// sx={{
//   "&:last-child td, &:last-child th": { border: 0 },
// }}
// className="Hoverhover"
// >
// <TableCell align="left">
//   Wait ACC staff update data
// </TableCell>
// <TableCell align="right">{dataTransferall[0][9]}</TableCell>
// </TableRow>

// <TableRow
// sx={{
//   "&:last-child td, &:last-child th": { border: 0 },
// }}
// className="Hoverhover"
// >
// <TableCell align="left">
//   Wait ACC Mgr.
// </TableCell>
// <TableCell align="right">{dataTransferall[0][10]}</TableCell>
// </TableRow>

// <TableRow
// sx={{
//   "&:last-child td, &:last-child th": { border: 0 },
// }}
// className="Hoverhover"
// >
// <TableCell align="left">
//   Wait Service Dept. close
// </TableCell>
// <TableCell align="right">{dataTransferall[0][11]}</TableCell>
// </TableRow>
