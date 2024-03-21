import React, { useState, useEffect } from "react";
import Header from "./Hearder";
import "./Homepage.css";
import {
  Typography,
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Grid,
} from "@mui/material";
import axios from "axios";
// import "../Person_Maintain/Person_maintain.css";
import PageLoadding from "../Loadding/Pageload";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import EditOffIcon from "@mui/icons-material/EditOff";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import MenuWallpaper from "../assets/Image/Wallpaper_Menulist2.jpg";

export default function BasicGrid() {
  const UserLogin = localStorage.getItem("UserLogin");
  const [dataTransfer, setdataTransfer] = useState([]);
  const [dataTransferall, setdataTransferall] = useState([]);
  const [dataTransferallname, setdataTransferallname] = useState([]);
  useEffect(() => {
    openPopupLoadding();
    
    const fetchData = async () => {
      const Transfer = async () => {
        try {
          const response = await axios.get(
            `http://10.17.100.183:5000/getCountTransfer?UserLogin=${UserLogin}`
          );
          const Transfer = await response.data;
          setdataTransfer(Transfer);
        } catch (error) {
          console.error("Error Transferdata:", error);
        }
      };

      const Transferlistallname = async () => {
        try {
          const response = await axios.get(
            `http://10.17.100.183:5000/getCountTransferlistaLLname`
          );
          const Transferallname = await response.data;
          setdataTransferallname(Transferallname);
          console.log(Transferallname, "ดูข้อมูล");
        } catch (error) {
          console.error("Error Transferdataall:", error);
        }
      };

      const Transferlistall = async () => {
        try {
          const response = await axios.get(
            `http://10.17.100.183:5000/getCountTransferlistaLL?UserLogin=${UserLogin}`
          );
          const Transferall = await response.data;
          setdataTransferall(Transferall);
        } catch (error) {
          console.error("Error Transferdataall:", error);
        }
        closePopupLoadding();
      };

      await Transfer();
      await Transferlistallname();
      await Transferlistall();
    };
    fetchData();
  }, []);

  const handleClickNextToSearch = (value) => {
    console.log("Received value:", value);
    if (value === "Create") {
      localStorage.setItem("STATUS", value);
      window.location.href = `/Search`;     
    } else {
      localStorage.setItem("STATUS", value);
      window.location.href = `/ApproveFam`;
    }

  };

  // Loadding
  const [isPopupOpenLoadding, setPopupOpenLoadding] = useState(false);
  const openPopupLoadding = () => {
    setPopupOpenLoadding(true);
  };
  const closePopupLoadding = () => {
    setPopupOpenLoadding(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid xs={12}>
        <Box sx={{ flexGrow: 1, height: "100px" }}>
          <Header />
          <PageLoadding
            isOpen={isPopupOpenLoadding}
            onClose={closePopupLoadding}
          />
        </Box>
      </Grid>
      <Grid container spacing={0}>
        <Grid xs={4}>
          <Card className="Backgroud-card-menu-show">
            <Grid container spacing={0} xs={12}>
              <Grid item xs={12}>
                <Card>
                  {dataTransferallname && dataTransferallname[0] && (
                    <Table size="small" aria-label="a dense table">
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
                          style={{ borderBottom: "1px solid #E5EAF2" }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataTransferallname[0][2])
                          }
                        >
                          <TableCell align="left">
                            {dataTransferallname[0][2]}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataTransferall &&
                                dataTransferall[0] &&
                                dataTransferall[0][0]) ||
                                0}{" "}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{ borderBottom: "1px solid #E5EAF2" }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataTransferallname[1][2])
                          }
                        >
                          <TableCell align="left">
                            {dataTransferallname[1][2]}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataTransferall &&
                                dataTransferall[0] &&
                                dataTransferall[0][1]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{ borderBottom: "1px solid #E5EAF2" }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataTransferallname[2][2])
                          }
                        >
                          <TableCell align="left">
                            {dataTransferallname[2][2]}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataTransferall &&
                                dataTransferall[0] &&
                                dataTransferall[0][2]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{ borderBottom: "1px solid #E5EAF2" }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataTransferallname[3][2])
                          }
                        >
                          <TableCell align="left">
                            {dataTransferallname[3][2]}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataTransferall &&
                                dataTransferall[0] &&
                                dataTransferall[0][3]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{ borderBottom: "1px solid #E5EAF2" }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataTransferallname[4][2])
                          }
                        >
                          <TableCell align="left">
                            {dataTransferallname[4][2]}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataTransferall &&
                                dataTransferall[0] &&
                                dataTransferall[0][4]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{ borderBottom: "1px solid #E5EAF2" }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataTransferallname[5][2])
                          }
                        >
                          <TableCell align="left">
                            {dataTransferallname[5][2]}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataTransferall &&
                                dataTransferall[0] &&
                                dataTransferall[0][5]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{ borderBottom: "1px solid #E5EAF2" }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataTransferallname[6][2])
                          }
                        >
                          <TableCell align="left">
                            {dataTransferallname[6][2]}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataTransferall &&
                                dataTransferall[0] &&
                                dataTransferall[0][6]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{ borderBottom: "1px solid #E5EAF2" }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataTransferallname[7][2])
                          }
                        >
                          <TableCell align="left">
                            {dataTransferallname[7][2]}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataTransferall &&
                                dataTransferall[0] &&
                                dataTransferall[0][7]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{ borderBottom: "1px solid #E5EAF2" }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataTransferallname[8][2])
                          }
                        >
                          <TableCell align="left">
                            {dataTransferallname[8][2]}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataTransferall &&
                                dataTransferall[0] &&
                                dataTransferall[0][8]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{ borderBottom: "1px solid #E5EAF2" }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataTransferallname[9][2])
                          }
                        >
                          <TableCell align="left">
                            {dataTransferallname[9][2]}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataTransferall &&
                                dataTransferall[0] &&
                                dataTransferall[0][9]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>

                        <TableRow
                          style={{ borderBottom: "1px solid #E5EAF2" }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataTransferallname[10][2])
                          }
                        >
                          <TableCell align="left">
                            {dataTransferallname[10][2]}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataTransferall &&
                                dataTransferall[0] &&
                                dataTransferall[0][10]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>

                        <TableRow
                          style={{ borderBottom: "1px solid #E5EAF2" }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataTransferallname[11][2])
                          }
                        >
                          <TableCell align="left">
                            {dataTransferallname[11][2]}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
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
                  )}
                </Card>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid xs={8}>
          <Card className="Backgroud-card-menu">
            <Grid container spacing={0} xs={12}>
              {/* Menu 1 */}
              <Grid item xs={1.7}>
                <Card>
                  <CardContent>
                    <Card className="Backgroud-style-menulist1">
                      <CardActionArea className="Backgroud-style-menulist">
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className="Typography-font"
                          >
                            <CurrencyExchangeIcon
                              fontSize="large"
                              className="Icon-style"
                            />{" "}
                            <br />
                            Transfer
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h5"
                            className="Number-menu-list White-background"
                          >
                            {dataTransfer[0] || 0}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </CardContent>
                </Card>
              </Grid>
              {/* Menu 2 */}
              <Grid item xs={1.7}>
                <Card>
                  <CardContent>
                    <Card className="Backgroud-style-menulist2">
                      <CardActionArea className="Backgroud-style-menulist">
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className="Typography-font"
                          >
                            <ProductionQuantityLimitsIcon
                              fontSize="large"
                              className="Icon-style"
                            />
                            <br />
                            Lost
                          </Typography>

                          <Typography
                            gutterBottom
                            variant="h5"
                            className="Number-menu-list White-background"
                          >
                            0
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </CardContent>
                </Card>
              </Grid>
              {/* Menu 3 */}
              <Grid item xs={1.7}>
                <Card>
                  <CardContent>
                    <Card className="Backgroud-style-menulist3">
                      <CardActionArea className="Backgroud-style-menulist">
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className="Typography-font"
                          >
                            <EditOffIcon
                              fontSize="large"
                              className="Icon-style"
                            />{" "}
                            <br />
                            Write off
                          </Typography>

                          <Typography
                            gutterBottom
                            variant="h5"
                            className="Number-menu-list White-background"
                          >
                            0
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </CardContent>
                </Card>
              </Grid>
              {/* Menu 4 */}
              <Grid item xs={1.7}>
                <Card>
                  <CardContent>
                    <Card className="Backgroud-style-menulist4">
                      <CardActionArea className="Backgroud-style-menulist">
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className="Typography-font"
                          >
                            <TransferWithinAStationIcon
                              fontSize="large"
                              className="Icon-style"
                            />
                            <br />
                            Lending
                          </Typography>

                          <Typography
                            gutterBottom
                            variant="h5"
                            className="Number-menu-list White-background"
                          >
                            0
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </CardContent>
                </Card>
              </Grid>
              {/* Menu 5 */}
              <Grid item xs={1.7}>
                <Card>
                  <CardContent>
                    <Card className="Backgroud-style-menulist5">
                      <CardActionArea className="Backgroud-style-menulist">
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className="Typography-font"
                          >
                            <DeleteSweepIcon
                              fontSize="large"
                              className="Icon-style"
                            />{" "}
                            <br />
                            Scrap
                          </Typography>

                          <Typography
                            gutterBottom
                            variant="h5"
                            className="Number-menu-list White-background"
                          >
                            0
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </CardContent>
                </Card>
              </Grid>
              {/* Menu 6 */}
              <Grid item xs={1.7}>
                <Card>
                  <CardContent>
                    <Card className="Backgroud-style-menulist6">
                      <CardActionArea className="Backgroud-style-menulist">
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className="Typography-font"
                          >
                            <MonetizationOnIcon
                              fontSize="large"
                              className="Icon-style"
                            />{" "}
                            <br />
                            Sales
                          </Typography>

                          <Typography
                            gutterBottom
                            variant="h5"
                            className="Number-menu-list White-background"
                          >
                            0
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </CardContent>
                </Card>
              </Grid>
              {/* Menu 7 */}
              <Grid item xs={1.7}>
                <Card>
                  <CardContent>
                    <Card className="Backgroud-style-menulist7">
                      <CardActionArea className="Backgroud-style-menulist">
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className="Typography-font"
                          >
                            <VolunteerActivismIcon
                              fontSize="large"
                              className="Icon-style"
                            />{" "}
                            <br />
                            Donations
                          </Typography>

                          <Typography
                            gutterBottom
                            variant="h5"
                            className="Number-menu-list White-background"
                          >
                            0
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Card>

          <Grid container spacing={0} xs={12}>
            <CardContent style={{ width: "50%", margin: "auto" }}>
              <img
                src={MenuWallpaper}
                alt="Menu Wallpaper"
                style={{ width: "80%" }}
              />
            </CardContent>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}