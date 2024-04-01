import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import "./Style.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from './Hearder'
function ButtonAppBar() {

  const Role = localStorage.getItem("Role");
  const UserLogin = localStorage.getItem("UserLogin");
  const [Data_homepage, setData_homepage] =useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const Menu = async () => {
    try {
      const response = await axios.get(
        `http://10.17.100.183:5000/getMenu?userlogin=${UserLogin}&role=${Role}`
      );
      const data = await response.data;

      // console.log("ทั้งหมด", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const DataHomepage = async () => {
    try {
      const response = await axios.get(
        `http://10.17.100.183:5000/gethome_page?user_for_login=${UserLogin}`
      );
      const data = await response.data;
      setData_homepage(data)
      // console.log("HOMEEEEEEEeeeee", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  useEffect(() => {
    Menu();
    DataHomepage();
  }, []);
  return (
   <>
  <Header />
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
  {Data_homepage.map((item, index) => (
    <React.Fragment key={index}>
      <TableRow>
        <TableCell align="left">Create</TableCell>
        <TableCell align="right">{item[0]}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="left">Wait Dept. manager</TableCell>
        <TableCell align="right">{item[1]}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="left">Wait Service Dept. check</TableCell>
        <TableCell align="right">{item[2]}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="left">Wait BOI Staff check</TableCell>
        <TableCell align="right">{item[3]}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="left">Wait BOI Manager</TableCell>
        <TableCell align="right">{item[4]}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="left">Wait Factory Manager</TableCell>
        <TableCell align="right">{item[5]}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="left">Wait ACC Staff check</TableCell>
        <TableCell align="right">{item[6]}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="left">Wait Owner check</TableCell>
        <TableCell align="right">{item[7]}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="left">Wait Receiver action</TableCell>
        <TableCell align="right">{item[8]}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="left">Wait ACC staff update data</TableCell>
        <TableCell align="right">{item[9]}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="left">Wait ACC staff update data</TableCell>
        <TableCell align="right">{item[10]}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="left">Wait Service Dept. close</TableCell>
        <TableCell align="right">{item[11]}</TableCell>
      </TableRow>
    </React.Fragment>
  ))}
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
