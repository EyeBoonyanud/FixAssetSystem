import React, { useState, useEffect } from "react";
import Header from "../Page/Hearder";
import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TableRow,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TableHead,
  TableContainer,
  Paper,
  Autocomplete,
  TablePagination,
  TableFooter
} from "@mui/material";
import { Empty } from "antd";
import {
  FileExcelOutlined,
  SearchOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import Popup from "./Popup_FamFileAttach";
import { InfoCircleOutlined } from "@ant-design/icons";
import { FAM_REPORT_DETAILS } from "../Function/FN_REPORT/FAM_REPORT_DETAILS";
import {FAM_SEARCH} from "../Function/FN_SEARCH_ALL/FAM_SEARCH";
function Report() {
  
  const {
    getCostCenter,
    TableSearch,
    TypeRequest,
    getFactory,
    selectRequestType,
    setselectRequestType,
    selectFactory,
    setselectFactory,
    selectCostCenter,
    setselectCostCenter,
    Txt_FamNo,
    setTxt_FamNo,
    Txt_ID_Owner,
    setTxt_ID_Owner,
    Txt_FamNo_TO,
    setTxt_FamNo_TO,
    Txt_user,
    checkHead,
    checkEmpty,
    checkData,
    Checkvale,
    Owner,
    Reset,
    Search,
    selectedFamNo,
    setSelectedFamNo,
    isPopupOpen,
    setPopupOpen,
    openPopup,
    closePopup,
    exportToExcelTable1,
  } = FAM_REPORT_DETAILS();
const {handleChangeRowsPerPage,
  handleChangePage,
  page,rowsPerPage,emptyRows_table_report} =FAM_SEARCH();
  return (
    <>
      <Header />
      <Popup isOpen={isPopupOpen} onClose={closePopup} FamNo={selectedFamNo} />
      <div
        style={{
          marginTop: "60px",
          marginLeft: "90px",
          justifyContent: "left",
          display: "flex",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: "Verdana, sans-serif",
              color: "#3AA6B9",
              fontWeight: "bold",
            }}
          >
            FAM Detail Report
          </h1>
        </div>
      </div>

      <div className="Filter">
        <div
          style={{
            display: "flex",

            marginBottom: "10px",
          }}
        >
          <Table className="SarchFill">
            <TableRow>
              <TableCell style={{ border: "0" }}>
                <FormControl sx={{ width: 200 }}>
                  <InputLabel id="demo-simple-select-label" size="small">
                    Factory :
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label=" Factory :"
                    size="small"
                    sx={{ textAlign: "left" }}
                    value={selectFactory}
                    onChange={(e) => setselectFactory(e.target.value)}
                  >
                    {getFactory.map((item, index) => (
                      <MenuItem key={index} value={getFactory[index][0]}>
                        {getFactory[index][1]}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell style={{ border: "0" }}>
                <FormControl sx={{ width: 200 }}>
                  <Autocomplete
                    value={selectCostCenter}
                    onChange={(e, value) => setselectCostCenter(value)}
                    options={getCostCenter.map((item) => item[0])}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Cost Center :"
                        size="small"
                        sx={{ textAlign: "left" }}
                      />
                    )}
                  />
                </FormControl>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: "0" }}>
                <FormControl sx={{ width: 200 }}>
                  <InputLabel id="demo-simple-select-label" size="small">
                    Request Type :
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Request Type :"
                    size="small"
                    sx={{ textAlign: "left" }}
                    value={selectRequestType}
                    onChange={(e) => setselectRequestType(e.target.value)}
                  >
                    {TypeRequest.map((item, index) => (
                      <MenuItem key={index} value={TypeRequest[index][0]}>
                        {TypeRequest[index][1]}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: "0" }}>
                <TextField
                  id="outlined-basic"
                  label="FAM No. :"
                  size="small"
                  variant="outlined"
                  style={{ width: "200px" }}
                  value={Txt_FamNo}
                  onChange={(e) => setTxt_FamNo(e.target.value)}
                />
              </TableCell>
              {/* <TableCell>&nbsp; - &nbsp;</TableCell> */}
              <TableCell style={{ border: "0" }}>
                <TextField
                  id="outlined-basic"
                  label="To :"
                  size="small"
                  variant="outlined"
                  style={{ width: "200px" }}
                  value={Txt_FamNo_TO}
                  onChange={(e) => setTxt_FamNo_TO(e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: "0" }}>
                <TextField
                  id="outlined-basic"
                  label="Owner :"
                  size="small"
                  variant="outlined"
                  style={{ width: "200px" }}
                  value={Txt_ID_Owner}
                  onChange={(e) => {
                    setTxt_ID_Owner(e.target.value);
                    Owner(e.target.value);
                  }}
                />
              </TableCell>
              <TableCell style={{ border: "0" }}>
                <TextField
                  id="outlined-basic"
                  label=""
                  size="small"
                  variant="outlined"
                  style={{
                    width: "270px",
                    backgroundColor: "rgba(169, 169, 169, 0.3)",
                  }}
                  value={Txt_user}
                  disabled
                />
              </TableCell>
            </TableRow>
          </Table>
        </div>
      </div>
      <div className="Filter">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
            width: "790px",
          }}
        >
          <Table>
            <TableRow style={{ textAlign: "center" }}>
              <TableCell style={{ border: "0", textAlign: "center" }}>
                <Button variant="contained" onClick={Search}>
                  <SearchOutlined style={{ fontSize: "20px" }} /> &nbsp; Search
                </Button>{" "}
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#BE3144" }}
                  onClick={Reset}
                >
                  <RedoOutlined style={{ fontSize: "20px" }} /> &nbsp; Reset
                </Button>
              </TableCell>
            </TableRow>
          </Table>
        </div>
      </div>
      {console.log(TableSearch, "TableSearchTableSearch")}
      <div
        style={
          TableSearch.length !== 0
            ? {
                display: "flex",
                justifyContent: "flex-end",
                width: "95%",
                marginBottom: "10px",
              }
            : { display: "none" }
        }
      >
        <Button
          variant="contained"
          style={{ backgroundColor: "#1A5D1A" }}
          onClick={exportToExcelTable1}
        >
          <FileExcelOutlined style={{ fontSize: "20px" }} /> &nbsp; Export EXCEL
        </Button>
      </div>

      <div className="DivTableFam">
        <TableContainer
          component={Paper}
          style={{ width: "96%", maxHeight: "450px", visibility: checkHead }}
        >
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            className="TableFam"
          >
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Factory</TableCell>
                <TableCell>Cost Center</TableCell>
                <TableCell>Fam No.</TableCell>
                <TableCell>No.</TableCell>
                <TableCell>Asset Code</TableCell>
                <TableCell>Comp.</TableCell>
                <TableCell>From CC</TableCell>
                <TableCell>Descriptions</TableCell>
                <TableCell>code No.</TableCell>
                <TableCell>Project BOI</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Inv.No.</TableCell>
                <TableCell>Inv. Date</TableCell>
                <TableCell>Acquisition Cost</TableCell>
                <TableCell>Book value</TableCell>
                <TableCell>New CC</TableCell>
                <TableCell>Project BOI</TableCell>
                <TableCell>Remark</TableCell>
                <TableCell>Document Attach</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ overflowY: "auto" }}>
              {Object.keys(TableSearch).length > 0 ? (
                Object.keys(TableSearch) .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((famno, famnoIndex) => (
                  <React.Fragment key={famnoIndex}>
                    {TableSearch[famno].map((row, rowIndex) => (
                      <React.Fragment key={`${famno}-${rowIndex}`}>
                        <TableRow>
                          {/* ตัวอย่างการใส่ Fac */}
                          <TableCell>
                            {rowIndex === 0 ? (
                              // <FilePdfOutlined
                              //   style={{ color: "red", fontSize: "20px" }}
                              // />
                              <p></p>
                            ) : (
                              ""
                            )}
                          </TableCell>
                          <TableCell>{row[0]}</TableCell>
                          <TableCell>{row[1]}</TableCell>
                          <TableCell>{row[2]}</TableCell>
                          <TableCell>{row[3]}</TableCell>
                          <TableCell>{row[4]}</TableCell>
                          <TableCell>{row[5]}</TableCell>
                          <TableCell style={{ textAlign: "left" }}>
                            {row[6]}
                          </TableCell>
                          <TableCell style={{ textAlign: "left" }}>
                            {row[7]}
                          </TableCell>
                          <TableCell>{row[8]}</TableCell>
                          <TableCell style={{ textAlign: "left" }}>
                            {row[9]}
                          </TableCell>
                          <TableCell>{row[10]}</TableCell>
                          <TableCell style={{ textAlign: "left" }}>
                            {row[11]}
                          </TableCell>
                          <TableCell>{row[12]}</TableCell>
                          <TableCell style={{ textAlign: "right" }}>
                            {row[13]}
                          </TableCell>
                          <TableCell>{row[14]}</TableCell>
                          <TableCell style={{ textAlign: "left" }}>
                            {row[15] || "-"}
                          </TableCell>
                          <TableCell style={{ textAlign: "left" }}>
                            {row[16] || "-"}
                          </TableCell>
                          <TableCell style={{ textAlign: "left" }}>
                            {row[17]}
                          </TableCell>
                          <TableCell>
                            {rowIndex === 0 ? (
                              <Button onClick={() => openPopup(row[2])}>
                                {" "}
                                File
                              </Button>
                            ) : (
                              ""
                            )}
                          </TableCell>
                        </TableRow>
                        {rowIndex === TableSearch[famno].length - 1 && (
                          <TableRow>
                            <TableCell colSpan={14}></TableCell>
                            <TableCell
                              style={{ fontWeight: "bold", textAlign: "right" }}
                            >
                              {row[18]}
                            </TableCell>
                            <TableCell style={{ fontWeight: "bold" }}>
                              {row[19]}
                            </TableCell>
                            <TableCell colSpan={4}></TableCell>
                          </TableRow>
                        )}
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))
              ) : (
                // {TableSearch!=}
                // <TableRow>
                //   <TableCell colSpan={24}>
                //     <Empty description="No data" />
                //   </TableCell>
                // </TableRow>
                <TableRow style={{ visibility: checkEmpty }}>
                  <TableCell colSpan={16}>
                    <InfoCircleOutlined
                      style={{
                        visibility: checkData,
                        fontSize: "30px",
                        color: "#ffd580",
                      }}
                    />
                    <text
                      style={{
                        visibility: checkData,
                        fontSize: "25px",
                        marginLeft: "10px",
                      }}
                    >
                      {Checkvale}
                    </text>
                  </TableCell>
                </TableRow>
              )}
               {/* {emptyRows_table_report > 0 && (
                  <TableRow style={{ height: 10 * emptyRows_table_report }}>
                    <TableCell colSpan={11} />
                  </TableRow>
                )} */}
            </TableBody>
            {/* <TableFooter>
              {console.log("KKK",rowsPerPage,page)}
                <TableRow>
                <TablePagination
  rowsPerPageOptions={[10, 25, 50]}
  colSpan={11}
  // count={TableSearch ? TableSearch.length : 0} // Ensure TableSearch is not undefined and count is set to its length
  rowsPerPage={rowsPerPage}
  page={page}
  SelectProps={{
    inputProps: { "aria-label": "rows per page" },
    // native: true,
  }}
  onPageChange={handleChangePage}
  onRowsPerPageChange={handleChangeRowsPerPage}
/>

                </TableRow>
              </TableFooter> */}
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Report;
