import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import "./Login.css"
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import Person2Icon from "@mui/icons-material/Person2";
import Card from "@mui/material/Card";

// TODO remove, this demo shouldn't need to reset the theme.
export default function SignInSide() {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onFinish = (values) => {
    // // console.log("Received values of form: ", values);
  };
  // Loading
  const [loading, setLoading] = useState(false);

  let Name = ""; //สร้างตัวแปรที่รับค่ากลับมา
  let Lastname = ""; //สร้างตัวแปรที่รับค่ากลับมา
  let Role = ""; //สร้างตัวแปรที่รับค่ากลับมา
  let UserLogin = "";
  let Emp = "";
  let NameRole = "";

  const handleLogin = async () => {
    setLoading(true);
    sessionStorage.setItem("isLoggedIn", "true");
    const usernameElement = document.getElementById("Username");
    const passwordElement = document.getElementById("Password");

    if (usernameElement && passwordElement) {
      const user = usernameElement.value;
      const password = passwordElement.value;

      try {
        const response = await fetch(
          `http://localhost:5000/login?username=${user}&password=${password}`
        );
        const data = await response.json();
        // console.log(data,"/////////////",data.length)
        if (data.length>0) {
          // console.log("Login successful", data[0][0]);
       
          Name = data[0][1];
          Lastname = data[0][2];
          Role = data[0][0];
          UserLogin = data[0][3];
          Emp = data[0][4];
          NameRole = data[0][5];
            localStorage.setItem("Name", Name);
            localStorage.setItem("Lastname", Lastname);
            localStorage.setItem("Role", Role);
            localStorage.setItem("UserLogin", UserLogin);
            localStorage.setItem("EmpID", Emp);
            localStorage.setItem("NameRole", NameRole);
            window.location.href = "/Homepage";
          
        } else {
          console.error("Login failed");
          alert("Invalid username or password");
        }
      } catch (error) {
        console.error("Error during login:", error);
      } finally {
        setLoading(false); // สิ้นสุดการโหลด
      }
    } else {
      console.error("Username or password element not found");
    }
  };

  return (
    // <Grid container component="main" sx={{ height: "100vh"  }} className="Grad">
    <Grid
      container
      component="main"
      sx={{ height: "100vh", width: "100%" }}
      className="Grad"
    >
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          paddingTop: "20%",
        }}
      >
        <Typography variant="h1" className="h1">
          <span className="span01">Fixed Ass</span>
          <span className="span02">e</span>
          <span className="span03">ts</span>
        </Typography>
        <Typography variant="h2" sx={{ textAlign: "center", pl: ["5%", "10%", "15%"] }}>
          <span className="span04">Movement </span>
          <span className="span05">System</span>
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={0}
        square
        className="Grad02"
      >
        <Box
          sx={{
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", // จัดวางตรงกลางแนวตั้ง
            // border: "1px solid #000",
            height: "100%",
          }}
        ><Card className="Card-Login">
          <Table>
            <TableRow>
              <Avatar className="Logo">
                <LockOutlinedIcon />
              </Avatar>
            </TableRow>
            <TableRow>
              <Typography component="h1" variant="h5" className="Textlogin">
                LOGIN
              </Typography>
            </TableRow>
            <TableRow>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%", // Set width to 100% to center the content horizontally
                }}
              >
                <TextField
                  id="Username"
                  label="Username"
                  onChange={(e) => setUser(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person2Icon />
                      </InputAdornment>
                    ),
                  }}
                  s
                  sx={{ width: "50%" }}
                  variant="standard"
                  style={{ margin: "8px" }}
                  className="greenTextField"
                />
              </Box>
            </TableRow>
            <TableRow>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <TextField
                  id="Password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                          color="primary"
                        >
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  style={{ margin: "8px" }}
                  sx={{ width: "50%" }}
                  className="greenTextField"
                />
              </Box>
            </TableRow>

            <TableRow>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Button
                  style={{
                    fontSize: "20px",
                    width: "30%",
                    height: "50px",
                    margin: "8px",
                    backgroundColor: "#62e6a5",
                    borderRadius: "50px",
                    marginTop: "50px",
                  }}
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  onClick={handleLogin}
                  loading={loading} 
                >
                   {loading ? 'Loading' : 'Login'} 
                </Button>
              </Box>
            </TableRow>
          </Table>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}