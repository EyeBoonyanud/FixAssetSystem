import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import { DownOutlined, UpOutlined, MenuOutlined } from "@ant-design/icons";
import Circle from "@mui/icons-material/CircleOutlined";
const SidebarMenu = ({ isOpen, onClose }) => {
  const [subMenuOpen1, setSubMenuOpen1] = useState(false);
  const [subMenuOpen2, setSubMenuOpen2] = useState(false);
  const [subMenuOpen3, setSubMenuOpen3] = useState(false);
  const [subMenuOpen4, setSubMenuOpen4] = useState(false);
  const [subMenuOpen5, setSubMenuOpen5] = useState(false);
  const [menu, setmenu] = useState([]);
  const [menuId, setmenuId] = useState([]);
  const [menudata, setmenudata] = useState([]);
  const [menudataId, setmenudataId] = useState([]);

  const toggleSubMenu1 = () => {
    setIcondrop1(!Icondrop1);
    setSubMenuOpen1(!subMenuOpen1);
  };
  const toggleSubMenu3 = () => {
    setIcondrop3(!Icondrop3);
    setSubMenuOpen3(!subMenuOpen3);
  };
  const toggleSubMenu4 = () => {
    setIcondrop4(!Icondrop4);
    setSubMenuOpen4(!subMenuOpen4);
  };
  const toggleSubMenu5 = () => {
    setIcondrop5(!Icondrop5);
    setSubMenuOpen5(!subMenuOpen5);
  };

  // ตัวแปรที่รับมาจาก role และ userlogin
  const Role = localStorage.getItem("Role");
  const UserLogin = localStorage.getItem("UserLogin");
  const Menu = async () => {
    try {
      const response = await axios.get(`/getmainmenu`);

      const data = await response.data;
      let datamenu = [];
      let datamenuid = [];
      for (let i = 0; i < data.length; i++) {
        datamenu.push(data[i][1]);
        datamenuid.push(data[i][0]);
      }
      setmenuId(datamenuid);
      setmenu(datamenu);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const subMenu = async () => {
    try {
      const response = await axios.post(
        "/getsubmenu",
        {
          userlogin: UserLogin,
          role: Role,
        }
      );
      const data = await response.data;
      let datasubmenu = [];
      let datasubmenuid = [];
      for (let i = 0; i < data.length; i++) {
        datasubmenu.push(data[i][1]);
        datasubmenuid.push(data[i][3]);
      }
      setmenudataId(datasubmenuid);
      setmenudata(datasubmenu);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  // Path
  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    if (id === "Issue FAM") {
      localStorage.removeItem("TYPE")
      window.location.href = "/FAMsystem/Search";
    }
    if (id === "Approve FAM") {
      localStorage.removeItem("TYPE")
      window.location.href = "/FAMsystem/ApproveFam";
    }
    if (id === "FAM Detail Report") {
      window.location.href = "/FAMsystem/FamDetails";
    }
    if (id === "Person Maintain") {
      window.location.href = "/FAMsystem/Search_person";
    }
    if (id === "BOI Maintain") {
      window.location.href = "/FAMsystem/BOIMaintain";
    }
    if (id === "FAM Master") {
      window.location.href = "/FAMsystem/FAMMaster";
    }
  };

  const Home = () => {
    navigate("/FAMsystem/Homepage");
  };
  useEffect(() => {
    Menu();
    subMenu();
  }, []);
  const [Icondrop1, setIcondrop1] = useState(false);
  const [Icondrop2, setIcondrop2] = useState(false);
  const [Icondrop3, setIcondrop3] = useState(false);
  const [Icondrop4, setIcondrop4] = useState(false);
  const [Icondrop5, setIcondrop5] = useState(false);

  const toggleSubMenu2 = () => {
    setIcondrop2(!Icondrop2);
    setSubMenuOpen2(!subMenuOpen2);
  };

  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose} sx={{ border: "10" }}>
      <List sx={{ width: "300px", bgcolor: "background.paper" }}>
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
          <ListItem className="ListItem" onClick={Home}>
            <ListItemIcon>
              <SensorsOutlinedIcon color="success" />
            </ListItemIcon>
            <ListItemText primary={menu[0]} />
          </ListItem>
          {subMenuOpen1 && (
            <>
              {menudataId.map(
                (item, index) =>
                  menudataId[index] === menuId[0] && (
                    <ListItem
                      className="SubMenuItem"
                      onClick={() => {
                        // onClose();
                        handleButtonClick(menudata[index]);
                      }}
                      key={index}
                    >
                      <Circle
                        style={{ fontSize: "8px", marginRight: "10px" }}
                      />
                      <ListItemText primary={menudata[index]} />
                    </ListItem>
                  )
              )}
            </>
          )}
        </div>

        {/* Menu Transaction */}
        <div style={{ display: Role === "214" ? "none" : "block" }}>
          <ListItem className="ListItem" onClick={toggleSubMenu2}>
            <ListItemIcon>
              <SensorsOutlinedIcon color="success" />
            </ListItemIcon>
            <ListItemText primary={menu[1]} />
            {Icondrop2 ? <UpOutlined /> : <DownOutlined />}
          </ListItem>
          {subMenuOpen2 && (
            <>
              {menudataId.map(
                (item, index) =>
                  menudataId[index] === menuId[1] && (
                    <ListItem
                      className="SubMenuItem"
                      onClick={() => {
                        // onClose();
                        handleButtonClick(menudata[index]);
                      }}
                      key={index}
                    >
                      <Circle
                        style={{ fontSize: "8px", marginRight: "10px" }}
                      />
                      <ListItemText primary={menudata[index]} />
                    </ListItem>
                  )
              )}
            </>
          )}
        </div>

        {/* Menu Monitoring Function */}
        <div style={{ display:  Role === "214"  ? "none" : "block" }}>
          <ListItem className="ListItem" onClick={toggleSubMenu3}>
            <ListItemIcon>
              <SensorsOutlinedIcon color="success" />
            </ListItemIcon>
            <ListItemText primary={menu[2]} />
            {Icondrop3 ? <UpOutlined /> : <DownOutlined />}
          </ListItem>
          {subMenuOpen3 && (
            <>
              {menudataId.map(
                (item, index) =>
                  menudataId[index] === menuId[2] && (
                    <ListItem
                      className="SubMenuItem"
                      onClick={() => {
                        handleButtonClick(menudata[index]);
                      }}
                      key={index}
                    >
                      <Circle
                        style={{ fontSize: "8px", marginRight: "10px" }}
                      />
                      <ListItemText primary={menudata[index]} />
                    </ListItem>
                  )
              )}
            </>
          )}
        </div>

        {/* Menu Master Data Function */}
        <div style={{ display: Role === "214" || Role === "212" || Role === "213" ? "none" : "block" }}>
          <ListItem className="ListItem" onClick={toggleSubMenu4}>
            <ListItemIcon>
              <SensorsOutlinedIcon color="success" />
            </ListItemIcon>
            <ListItemText primary={menu[3]} />
            {Icondrop4 ? <UpOutlined /> : <DownOutlined />}
          </ListItem>
          {subMenuOpen4 && (
            <>
              {menudataId.map(
                (item, index) =>
                  menudataId[index] === menuId[3] && menudata[index] !== "Master Code Maintain" && (
                    <ListItem
                      className="SubMenuItem"
                      onClick={() => {
                        // onClose();
                        handleButtonClick(menudata[index]);
                      }}
                      key={index}
                    >
                      <Circle
                        style={{ fontSize: "8px", marginRight: "10px" }}
                      />
                      <ListItemText primary={menudata[index]} />
                    </ListItem>
                  )
              )}
            </>
          )}
        </div>

        {/* Menu Report Function  */}
        <div>
          <ListItem className="ListItem" onClick={toggleSubMenu5}>
            <ListItemIcon>
              <SensorsOutlinedIcon color="success" />
            </ListItemIcon>
            <ListItemText primary={menu[4]} />
            {Icondrop5 ? <UpOutlined /> : <DownOutlined />}
          </ListItem>
          {subMenuOpen5 && (
            <>
              {menudataId.map(
                (item, index) =>
                  menudataId[index] === menuId[4] && menudata[index] !== "FAM Form" && (
                    <ListItem
                      className="SubMenuItem"
                      onClick={() => {
                        // onClose();
                        handleButtonClick(menudata[index]);
                      }}
                      key={index}
                    >
                      <Circle
                        style={{ fontSize: "8px", marginRight: "10px" }}
                      />
                      <ListItemText primary={menudata[index]} />
                    </ListItem>
                  )
              )}
            </>
          )}
        </div>
      </List>
    </Drawer>
  );
};

export default SidebarMenu;
