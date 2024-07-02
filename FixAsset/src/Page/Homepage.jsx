
import React from "react";
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
import {function_homepage} from "../Function/FN_HOME_PAGE/HOMEPAGE";

export default function BasicGrid() {
  const {isPopupOpenLoadding,closePopupLoadding,dataallname_Show,dataall_Show,dataname_show,dataTransfer,dataTransferall,dataTransferallname,handleClickNextToSearch,dataLoss,dataWrite_off,dataLending,dataDonation,handleClickMenu_LIST,dataname_type,dataScrap,dataSale} = function_homepage();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid xs={12}>
      <Box sx={{ flexGrow: 1}} className="Style_pageload">
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
                  {dataallname_Show && dataallname_Show[0] && (
                    <Table size="small" aria-label="a dense table">
                      <TableHead>
                        <TableRow>
                          <TableCell
                            colSpan={2}
                            align="center"
                            className="Style_Header_ListMenu"
                          >
                          {dataname_show}
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          style={{ 
                          display: !(
                            dataallname_Show &&
                            dataallname_Show[0] &&
                            dataallname_Show[0] &&
                            dataallname_Show[0][2]
                          ) ? "none" : "table-row"
                           }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(
                              dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[0][2] 
                                ? dataallname_Show[0][2] 
                                : '',
                              dataname_type
                            )
                          }
                        >
                          <TableCell align="left">
                          {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[0] &&
                              dataallname_Show[0][2] 
                              ? dataallname_Show[0][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][0]) ||
                                0}{" "}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{ 
                          display: !(
                            dataallname_Show &&
                            dataallname_Show[0] &&
                            dataallname_Show[1] &&
                            dataallname_Show[1][2]
                          ) ? "none" : "table-row"
                           }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[1] &&
                              dataallname_Show[1][2] 
                              ? dataallname_Show[1][2] 
                              : '',
                              dataname_type 
                            )
                          }
                        >
                          <TableCell align="left">
                          {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[1] &&
                              dataallname_Show[1][2] 
                              ? dataallname_Show[1][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][1]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{ 
                          display: !(
                            dataallname_Show &&
                            dataallname_Show[0] &&
                            dataallname_Show[2] &&
                            dataallname_Show[2][2]
                          ) ? "none" : "table-row"
                           }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[2] &&
                              dataallname_Show[2][2] 
                              ? dataallname_Show[2][2] 
                              : '',
                              dataname_type
                            )
                          }
                        >
                          <TableCell align="left">
                          {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[2] &&
                              dataallname_Show[2][2] 
                              ? dataallname_Show[2][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][2]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{ 
                          display: !(
                            dataallname_Show &&
                            dataallname_Show[0] &&
                            dataallname_Show[3] &&
                            dataallname_Show[3][2]
                          ) ? "none" : "table-row"
                           }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[3] &&
                              dataallname_Show[3][2] 
                              ? dataallname_Show[3][2] 
                              : '',
                              dataname_type
                            )
                          }
                        >
                          <TableCell align="left">
                          {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[3] &&
                              dataallname_Show[3][2] 
                              ? dataallname_Show[3][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][3]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{ 
                          display: !(
                            dataallname_Show &&
                            dataallname_Show[0] &&
                            dataallname_Show[4] &&
                            dataallname_Show[4][2]
                          ) ? "none" : "table-row"
                           }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[4] &&
                              dataallname_Show[4][2] 
                              ? dataallname_Show[4][2] 
                              : '',
                              dataname_type
                            )
                          }
                        >
                          <TableCell align="left">
                          {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[4] &&
                              dataallname_Show[4][2] 
                              ? dataallname_Show[4][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][4]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{ 
                          display: !(
                            dataallname_Show &&
                            dataallname_Show[0] &&
                            dataallname_Show[5] &&
                            dataallname_Show[5][2]
                          ) ? "none" : "table-row"
                           }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[5] &&
                              dataallname_Show[5][2] 
                              ? dataallname_Show[5][2] 
                              : '',
                              dataname_type
                            )
                          }
                        >
                          <TableCell align="left">
                          {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[5] &&
                              dataallname_Show[5][2] 
                              ? dataallname_Show[5][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][5]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{ 
                          display: !(
                            dataallname_Show &&
                            dataallname_Show[0] &&
                            dataallname_Show[6] &&
                            dataallname_Show[6][2]
                          ) ? "none" : "table-row"
                           }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[6] &&
                              dataallname_Show[6][2] 
                              ? dataallname_Show[6][2] 
                              : '',
                              dataname_type
                            )
                          }
                        >
                          <TableCell align="left">
                          {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[6] &&
                              dataallname_Show[6][2] 
                              ? dataallname_Show[6][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][6]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{ 
                          display: !(
                            dataallname_Show &&
                            dataallname_Show[0] &&
                            dataallname_Show[7] &&
                            dataallname_Show[7][2]
                          ) ? "none" : "table-row"
                           }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[7] &&
                              dataallname_Show[7][2] 
                              ? dataallname_Show[7][2] 
                              : '',
                              dataname_type
                            )
                          }
                        >
                          <TableCell align="left">
                          {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[7] &&
                              dataallname_Show[7][2] 
                              ? dataallname_Show[7][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][7]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{ 
                          display: !(
                            dataallname_Show &&
                            dataallname_Show[0] &&
                            dataallname_Show[8] &&
                            dataallname_Show[8][2]
                          ) ? "none" : "table-row"
                           }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[8] &&
                              dataallname_Show[8][2] 
                              ? dataallname_Show[8][2] 
                              : '',
                              dataname_type
                            )
                          }
                        >
                          <TableCell align="left">
                          {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[8] &&
                              dataallname_Show[8][2] 
                              ? dataallname_Show[8][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][8]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{ 
                          display: !(
                            dataallname_Show &&
                            dataallname_Show[0] &&
                            dataallname_Show[9] &&
                            dataallname_Show[9][2]
                          ) ? "none" : "table-row"
                           }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[9] &&
                              dataallname_Show[9][2] 
                              ? dataallname_Show[9][2] 
                              : '',
                              dataname_type
                            )
                          }
                        >
                          <TableCell align="left">
                          {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[9] &&
                              dataallname_Show[9][2] 
                              ? dataallname_Show[9][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][9]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>

                        <TableRow
                          style={{ 
                          display: !(
                            dataallname_Show &&
                            dataallname_Show[0] &&
                            dataallname_Show[10] &&
                            dataallname_Show[10][2]
                          ) ? "none" : "table-row"
                           }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[10] &&
                              dataallname_Show[10][2] 
                              ? dataallname_Show[10][2] 
                              : '',
                              dataname_type
                            )
                          }
                        >
                          <TableCell align="left">
                          {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[10] &&
                              dataallname_Show[10][2] 
                              ? dataallname_Show[10][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][10]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>

                        <TableRow
                          style={{ 
                          display: !(
                            dataallname_Show &&
                            dataallname_Show[0] &&
                            dataallname_Show[11] &&
                            dataallname_Show[11][2]
                          ) ? "none" : "table-row"
                           }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[11] &&
                              dataallname_Show[11][2] 
                              ? dataallname_Show[11][2] 
                              : '',
                              dataname_type
                            )
                          }
                        >
                          <TableCell align="left">
                        
                            {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[11] &&
                              dataallname_Show[11][2] 
                              ? dataallname_Show[11][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {" "}
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][11]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{
                            
                            display: !(
                              dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[12] &&
                              dataallname_Show[12][2]
                            ) ? "none" : "table-row"
                          }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(
                              (dataallname_Show &&
                                dataallname_Show[0] &&
                                dataallname_Show[12] &&
                                dataallname_Show[12][2]) ||
                                '',
                                dataname_type
                            )
                          }
                        >
                          <TableCell align="left">
                            {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[12] &&
                              dataallname_Show[12][2] 
                              ? dataallname_Show[12][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][12]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>

                        <TableRow
                          style={{
                            
                            display: !(
                              dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[13] &&
                              dataallname_Show[13][2]
                            ) ? "none" : "table-row"
                          }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(
                              (dataallname_Show &&
                                dataallname_Show[0] &&
                                dataallname_Show[13] &&
                                dataallname_Show[13][2]) ||
                                '',
                                dataname_type
                            )
                          }
                        >
                          <TableCell align="left">
                            {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[13] &&
                              dataallname_Show[13][2] 
                              ? dataallname_Show[13][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][13]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        
                        <TableRow
                          style={{
                            
                            display: !(
                              dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[14] &&
                              dataallname_Show[14][2]
                            ) ? "none" : "table-row"
                          }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(
                              (dataallname_Show &&
                                dataallname_Show[0] &&
                                dataallname_Show[14] &&
                                dataallname_Show[14][2]) ||
                                '',
                                dataname_type
                            )
                          }
                        >
                          <TableCell align="left">
                            {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[14] &&
                              dataallname_Show[14][2] 
                              ? dataallname_Show[14][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][14]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>

                        <TableRow
                          style={{
                            
                            display: !(
                              dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[15] &&
                              dataallname_Show[15][2]
                            ) ? "none" : "table-row"
                          }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(
                              (dataallname_Show &&
                                dataallname_Show[0] &&
                                dataallname_Show[15] &&
                                dataallname_Show[15][2]) ||
                                '',
                                dataname_type
                            )
                          }
                        >
                          <TableCell align="left">
                            {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[15] &&
                              dataallname_Show[15][2] 
                              ? dataallname_Show[15][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][15]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>

                        <TableRow
                          style={{
                            
                            display: !(
                              dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[16] &&
                              dataallname_Show[16][2]
                            ) ? "none" : "table-row"
                          }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(
                              (dataallname_Show &&
                                dataallname_Show[0] &&
                                dataallname_Show[16] &&
                                dataallname_Show[16][2]) ||
                                '',
                                dataname_type
                            )
                          }
                        >
                          <TableCell align="left">
                            {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[16] &&
                              dataallname_Show[16][2] 
                              ? dataallname_Show[16][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][16]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>

                        <TableRow
                          style={{
                            
                            display: !(
                              dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[17] &&
                              dataallname_Show[17][2]
                            ) ? "none" : "table-row"
                          }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(
                              (dataallname_Show &&
                                dataallname_Show[0] &&
                                dataallname_Show[17] &&
                                dataallname_Show[17][2]) ||
                                '',
                                dataname_type
                            )
                          }
                        >
                          <TableCell align="left">
                            {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[17] &&
                              dataallname_Show[17][2] 
                              ? dataallname_Show[17][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][17]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{
                            
                            display: !(
                              dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[18] &&
                              dataallname_Show[18][2]
                            ) ? "none" : "table-row"
                          }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(
                              (dataallname_Show &&
                                dataallname_Show[0] &&
                                dataallname_Show[18] &&
                                dataallname_Show[18][2]) ||
                                '',
                                dataname_type
                            )
                          }
                        >
                          <TableCell align="left">
                            {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[18] &&
                              dataallname_Show[18][2] 
                              ? dataallname_Show[18][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][18]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{
                            
                            display: !(
                              dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[19] &&
                              dataallname_Show[19][2]
                            ) ? "none" : "table-row"
                          }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(
                              (dataallname_Show &&
                                dataallname_Show[0] &&
                                dataallname_Show[19] &&
                                dataallname_Show[19][2]) ||
                                '',
                                dataname_type
                            )
                          }
                        >
                          <TableCell align="left">
                            {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[19] &&
                              dataallname_Show[19][2] 
                              ? dataallname_Show[19][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][19]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{
                            
                            display: !(
                              dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[20] &&
                              dataallname_Show[20][2]
                            ) ? "none" : "table-row"
                          }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(
                              (dataallname_Show &&
                                dataallname_Show[0] &&
                                dataallname_Show[20] &&
                                dataallname_Show[20][2]) ||
                                '',
                                dataname_type
                            )
                          }
                        >
                          <TableCell align="left">
                            {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[20] &&
                              dataallname_Show[20][2] 
                              ? dataallname_Show[20][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][20]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{
                            
                            display: !(
                              dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[21] &&
                              dataallname_Show[21][2]
                            ) ? "none" : "table-row"
                          }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(
                              (dataallname_Show &&
                                dataallname_Show[0] &&
                                dataallname_Show[21] &&
                                dataallname_Show[21][2]) ||
                                '',
                                dataname_type
                            )
                          }
                        >
                          <TableCell align="left">
                            {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[21] &&
                              dataallname_Show[21][2] 
                              ? dataallname_Show[21][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][21]) ||
                                0}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{
                            
                            display: !(
                              dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[22] &&
                              dataallname_Show[22][2]
                            ) ? "none" : "table-row"
                          }}
                          className="Hoverhover"
                          onClick={() =>
                            handleClickNextToSearch(
                              (dataallname_Show &&
                                dataallname_Show[0] &&
                                dataallname_Show[22] &&
                                dataallname_Show[22][2]) ||
                                '',
                                dataname_type
                            )
                          }
                        >
                          <TableCell align="left">
                            {dataallname_Show &&
                              dataallname_Show[0] &&
                              dataallname_Show[22] &&
                              dataallname_Show[22][2] 
                              ? dataallname_Show[22][2] 
                              : ''}
                          </TableCell>
                          <TableCell>
                            <Typography className="Number-menu-list2 White-background2">
                              {(dataall_Show &&
                                dataall_Show[0] &&
                                dataall_Show[0][22]) ||
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
                        <CardContent
                            onClick={() =>
                              handleClickMenu_LIST("Transfer")
                            }
                          >
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
                        <CardContent
                          onClick={() =>
                            handleClickMenu_LIST("Loss")
                          }>
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
                            Loss
                          </Typography>

                          <Typography
                            gutterBottom
                            variant="h5"
                            className="Number-menu-list White-background"
                          >
                           {dataLoss[0] || 0}
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
                        <CardContent
                         onClick={() =>
                          handleClickMenu_LIST("Write off")
                        }>
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
                            Write&nbsp;off
                          </Typography>

                          <Typography
                            gutterBottom
                            variant="h5"
                            className="Number-menu-list White-background"
                          >
                            {dataWrite_off[0] || 0}
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
                        <CardContent
                            onClick={() =>
                              handleClickMenu_LIST("Lending")
                            }>
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
                           {dataLending[0] || 0}
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
                        <CardContent
                          onClick={() =>
                            handleClickMenu_LIST("Scrap")
                          }>
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
                            {dataScrap[0] || 0}
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
                        <CardContent
                          onClick={() =>
                            handleClickMenu_LIST("Sales")
                          }>
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
                            {dataSale[0] || 0}
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
                        <CardContent
                          onClick={() =>
                            handleClickMenu_LIST("Donations")
                          }>
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
                              {dataDonation[0] || 0}
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