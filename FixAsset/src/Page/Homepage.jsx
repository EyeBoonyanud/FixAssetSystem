import  React ,{useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from "./Sidebar";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import axios from "axios";



 function ButtonAppBar({ isOpen, onClose }) {

  const Name = localStorage.getItem("Name");
  const Lastname = localStorage.getItem("Lastname");
  const Role = localStorage.getItem("Role");
  const UserLogin = localStorage.getItem("UserLogin");
  const [Login , setDataLogin] = useState([]);
 
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
       
        console.log("ทั้งหมด",data)
    
      }
      catch (error) {
        console.error("Error during login:", error);
      }
    }
   
    

  useEffect(() => {
    Menu();
  }, []);





  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
      style={{
        backgroundColor:'green'
      }}>
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
          <Avatar sx={{ bgcolor: deepOrange[500], marginRight: "10px" }}>
          </Avatar>
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
            User: {Name} {Lastname}
            <br />
       
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    <div>

    </div>
    </>
  );
}
export default ButtonAppBar
