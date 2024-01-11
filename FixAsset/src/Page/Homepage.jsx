import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import "./Style.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

function ButtonAppBar({ isOpen, onClose }) {
  const Name = localStorage.getItem("Name");
  const Lastname = localStorage.getItem("Lastname");
  const Role = localStorage.getItem("Role");
  const UserLogin = localStorage.getItem("UserLogin");
  const [Login, setDataLogin] = useState([]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const Menu = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/getMenu?userlogin=${UserLogin}&role=${Role}`
      );
      const data = await response.data;

      console.log("ทั้งหมด", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    Menu();
  }, []);
  const navigate = useNavigate();
  const Logout = () => {
    navigate("/");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{
            backgroundColor: "green",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleSidebar}
            >
              <MenuIcon />
            </IconButton>
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Fix Asset System
            </Typography>
            <Avatar
              sx={{ bgcolor: deepOrange[500], marginRight: "10px" }}
            ></Avatar>
            <Button
              className="btnDate"
              color="inherit"
              style={{
                display: "contents",
                alignItems: "start",
                justifyContent: "start",
                fontSize: "12px",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              User: {Name} {Lastname}  &nbsp;| &nbsp; <text onClick={Logout}>Logout</text> 
              <br />

            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="responsive-container">
        <table className="table">
          <tr>
            <td colSpan={4}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 300 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left">Transfer </TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell align="left">Create</TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                            Wait Dept. manager{" "}
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                            Wait Service Dept. check
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                            Wait BOI Staff check
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">Wait BOI Manager</TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                            Wait Factory Manager
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                            Wait ACC Staff check
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">Wait Owner check</TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                            Wait Receiver action{" "}
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                            Wait ACC staff update data
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                            Wait ACC staff update data
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                            Wait Service Dept. close
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </td>
            <td colSpan={4}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 300 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left">Loss/Write off</TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell align="left">Create</TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                            Wait Dept. manager{" "}
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                          Wait Service Dept review 
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                          Wait BOI Staff 	
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">Wait BOI Manager</TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                          Wait FM 
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                          Wait Account Staff check 
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">Wait Owner action </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                          Wait Account Staff update data 
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                          Wait Account Manager 
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                          Wait Service Dept close
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                      
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </td>
            <td colSpan={4}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 300 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left">Lending		 </TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell align="left">Create</TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                            Wait Dept. manager{" "}
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                          Wait Service Dept review 
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                          Wait BOI Staff 	
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">Wait BOI Manager</TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                          Wait FM 
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                          Wait Account Staff check 
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">Wait Owner action</TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                          Wait Account Staff update data 
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                            Wait ACC staff update data
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                          Wait Account Manager 
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                          Wait Service Dept close 
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr>
            <td colSpan={4}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 300 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left">Scrap</TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell align="left">Create</TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                            Wait Dept. manager{" "}
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                          Wait Service Dept review 
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                            Wait BOI Staff check
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">Wait BOI Manager</TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                            Wait Factory Manager
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                          Wait FM 
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">Wait Account Staff check </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                          Wait Owner action {" "}
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                          Wait PTE (ENV) action	
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                          Wait PLN Staff	
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                          Wait Shipping Staff	
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                          Wait Account Staff update data 	
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                          Wait Account Manager
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                          Wait Service Dept close
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </td>
            <td colSpan={4}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 300 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left">Sales </TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell align="left">Create</TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                            Wait Dept. manager{" "}
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                          Wait Service Dept review
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                            Wait BOI Staff 
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">Wait BOI Manager</TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                            Wait FM
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                            Wait ACC Staff check
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">Wait Owner action </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                          Wait PTE (ENV) action	
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                          Wait PLN Staff
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                          Wait Shipping Staff
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                          Wait Account Staff update data
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                          Wait Account Manager
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                          Wait Service Dept close 
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </td>
            <td colSpan={4}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 300 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left">Lending	 </TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell align="left">Create</TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                          Wait Dept. Manager
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                            Wait Service Dept. check
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                            Wait BOI Staff 
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">Wait BOI Manager</TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                            Wait FM
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                            Wait ACC Staff check
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">Wait Owner action </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                          Wait Account Staff update data
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>{" "}
                        <TableRow>
                          <TableCell align="left">
                          Wait Account Manager 
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">
                          Wait Service Dept close 
                          </TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
export default ButtonAppBar;
