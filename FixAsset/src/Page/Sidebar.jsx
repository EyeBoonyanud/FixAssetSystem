import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import StorageIcon from "@mui/icons-material/Storage";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SidebarMenu = ({ isOpen, onClose }) => {
  // Path 
  const navigate = useNavigate();
  const DataPro = () => {
    navigate("/DataPro");
  };
  const DataDept = () => {
    navigate("/DataDept");
  };
  const Home = () => {
    navigate("/Home");
  };
  // 
  const [subMenuOpen1, setSubMenuOpen1] = useState(false);
  const [subMenuOpen2, setSubMenuOpen2] = useState(false);
  const [subMenuOpen3, setSubMenuOpen3] = useState(false);
  const [subMenuOpen4, setSubMenuOpen4] = useState(false);
  const [subMenuOpen5, setSubMenuOpen5] = useState(false);
  const [menu , setmenu] = useState([]);
  const [menudata, setmenudata] = useState([]);

  const toggleSubMenu1 = () => {
    setSubMenuOpen1(!subMenuOpen1);
  };
  const toggleSubMenu2 = () => {
    setSubMenuOpen2(!subMenuOpen2);
  };
  const toggleSubMenu3 = () => {
    setSubMenuOpen3(!subMenuOpen3);
  };
  const toggleSubMenu4 = () => {
    setSubMenuOpen4(!subMenuOpen4);
  };
  const toggleSubMenu5 = () => {
    setSubMenuOpen5(!subMenuOpen5);
  };

  // ตัวแปรที่รับมาจาก role และ userlogin
  const Role = localStorage.getItem("Role");
  const UserLogin = localStorage.getItem("UserLogin");

  const Menu = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/getmainmenu?userlogin=${UserLogin}&role=${Role}`
      );
  
        const data = await response.data;
        setmenu(data)
        console.log("Maindata",data)
      
    }
      catch (error) {
        console.error("Error during login:", error);
      }
    }

  const subMenu = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/getsubmenu?userlogin=${UserLogin}&role=${Role}`
        );
    
          const data = await response.data;
          setmenudata(data)
          console.log("Subdata",data)
        
      }
        catch (error) {
          console.error("Error during login:", error);
        }
      }
   
    //  const Menu = async () => {
    // try {
    //   const response = await axios.get(
    //     `http://localhost:5000/getmenu?userlogin=${UserLogin}&role=${Role}`
    //   );
  
    //     const data = await response.data;
    //     console.log("data",data)
    //     for (let i=0 ; i<data.length; i++){
    //       if(data[i][3] === null){
           
    //       setmenu(data[i]) 
    //       console.log("เมนูแม่",data[i])}
    //       else {
    //         setmenudata(data[i])
    //         console.log("เมนูลูก",data[i][3])
          
    //       }
    //     }
    // }
    //   catch (error) {
    //     console.error("Error during login:", error);
    //   }
    // }

  useEffect(() => {
    Menu();
    subMenu();
   
  }, []);
  // console.log(menu,"menu")
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose} sx={{ border: "10" }}>
      <List sx={{ width: "250px", bgcolor: "background.paper" }}>
        <div>
          <ListItemButton>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary="Menu" />
          </ListItemButton>
        </div>
        {/* Menu Home */}
        <div>
          <ListItemButton onClick={toggleSubMenu1}>
            <ListItemIcon>
              <StorageIcon />
            </ListItemIcon>
            <ListItemText onClick={Home} primary={menu[0] && menu[0][1]}/>
          </ListItemButton>
        
        </div>
        {/* Menu Transaction */}
        <div>
          <ListItemButton onClick={toggleSubMenu2}> 
            <ListItemIcon>
              <StorageIcon />
            </ListItemIcon>
            <ListItemText  primary={menu[1] && menu[1][1]} />
            {subMenuOpen2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse in={subMenuOpen2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowCircleRightIcon />
                </ListItemIcon>
                <ListItemText onClick={DataPro} primary="Issue FAM" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowCircleRightIcon />
                </ListItemIcon>
                <ListItemText onClick={DataPro} primary="Approve FAM" />
              </ListItemButton> 
            </List>
          </Collapse>
        
        </div>
        {/* Menu Monitoring Function */}
        <div>
          <ListItemButton onClick={toggleSubMenu3}> 
            <ListItemIcon>
              <StorageIcon />
            </ListItemIcon>
            <ListItemText primary={menu[2] && menu[2][1]} />
            {subMenuOpen3 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse in={subMenuOpen3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowCircleRightIcon />
                </ListItemIcon>
                <ListItemText onClick={DataPro} primary="FAM Master" />
              </ListItemButton>
            </List>
          </Collapse>
        </div>
        {/* Menu Master Data Function */}
        <div>
          <ListItemButton onClick={toggleSubMenu4}> 
            <ListItemIcon>
              <StorageIcon />
            </ListItemIcon>
            <ListItemText primary={menu[3] && menu[3][1]} />
            {subMenuOpen4 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse in={subMenuOpen4} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowCircleRightIcon />
                </ListItemIcon>
                <ListItemText onClick={DataPro} primary="Person Maintain" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowCircleRightIcon />
                </ListItemIcon>
                <ListItemText onClick={DataPro} primary="Master Code Maintain" />
              </ListItemButton> 
            </List>
          </Collapse>
        </div>
        {/* Menu Report Function  */}
        <div>
          <ListItemButton onClick={toggleSubMenu5}> 
            <ListItemIcon>
              <StorageIcon />
            </ListItemIcon>
            <ListItemText primary={menu[4] && menu[4][1]} />
            {subMenuOpen5 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse in={subMenuOpen5} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowCircleRightIcon />
                </ListItemIcon>
                <ListItemText onClick={DataPro} primary="FAM Detail Report" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowCircleRightIcon />
                </ListItemIcon>
                <ListItemText onClick={DataPro} primary="FAM Form" />
              </ListItemButton> 
            </List>
          </Collapse>
        </div>
      </List>
    </Drawer>
  );
};

export default SidebarMenu;
