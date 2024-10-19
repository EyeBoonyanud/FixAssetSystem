import React, { useState, useEffect } from "react";
import Header from "../Page/Hearder";
import "../Page/Style.css";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";
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
  TextField,
  Button,
  InputLabel,
  Autocomplete,
  Checkbox,
  TablePagination,
  TableFooter,
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,Box 
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import {
  InfoCircleOutlined,
  LoadingOutlined,
  FileSearchOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import { Empty } from "antd";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import AddTaskIcon from "@mui/icons-material/AddTask";
import PageLoadding from "../Loadding/Pageload";
import { FAM_SEARCH } from "../Function/FN_SEARCH_ALL/FAM_SEARCH";
import { DatePicker } from "antd";

function Issue() {
  const {
    UserLogin,
    datafac,
    selecteDatafac,
    dept,
    selectdept,
    setselectdept,
    selectcostMul,
    setselectcostMul,
    selectStatus,
    setselectStatus,
    Status,
    selectdeptMul,
    setselectdeptMul,
    selectcost,
    setselectcost,
    ReType,
    selectReType,
    setselectReType,
    getCostCenter,
    selectCostCenter,
    dataSearch,
    checkHead,
    checkEmpty,
    checkData,
    loading,
    selectindex,
    selectindex_delete,
    selectedDateFrom,
    selectedDateTo,
    Txt_ID_Owner,
    Txt_Title,
    isPopupOpenLoadding,
    selectedRows,
    selectAll,
    label,
    closePopupLoadding,
    handleSelectChange,
    New,
    findStatus,
    handleEdit,
    handlePDF,
    handleVIEW,
    Search,
    exportToExcelTable1,
    handleCheckboxChange,
    handleSelectAll,
    Reset,
    Delete,
    selectStatusID,
    Path,
    setSelectedDateFrom,
    setSelectedDateTo,
    setTxt_ID_Owner,
    handleChangePage,
    handleChangeRowsPerPage,
    emptyRows,
    page,
    rowsPerPage,
    setselectCostCenter,
    handleDateChange,
    handleDateToChange,Type,
    selectReturnTo ,setselectReturnTo,
    selectReturnFrom ,setselectReturnFrom,
    CloseJob,open,handleClickOpen,handleClose,handleSaveAndClose,commentall,setcommentall,ReturnStatus,
    selectReturnSts,
    setselectReturnSts,selectStatusReturn
  } = FAM_SEARCH();

  return (
    <>
      <Header />
      <PageLoadding isOpen={isPopupOpenLoadding} onClose={closePopupLoadding} />
      <div className="body">
        <div
          style={{
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
              {Txt_Title}
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
                    <InputLabel size="small" id="demo-simple-select-label">
                      Factory :
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="factorycbt"
                      label="Factory :"
                      value={selecteDatafac}
                      onChange={handleSelectChange}
                      size="small"
                    >
                      {datafac.map((option, index) => (
                        <MenuItem key={index} value={option[0]}>
                          {option[1]}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell style={{ border: "0" }}>
                <FormControl
                    sx={{ width: 200 }}
                    style={{
                      display:
                        Path === "SEARCH" || Path === "APPROVEFAM"
                          ? "block"
                          : "none",
                    }}
                  >
                    <Autocomplete
                      value={selectcost}
                      onChange={(e, value) => setselectcost(value)}
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
                
                  <FormControl
                    sx={{ width: 200 }}
                    style={{
                      display:
                        Path === "SEARCH" || Path === "APPROVEFAM"
                          ? "none"
                          : "",
                    }}
                  >
                    <Autocomplete
                      multiple
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
                  <TextField
                    id="FamNo"
                    size="small"
                    label="FAM No. :"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "4px",
                      width: "200px",
                      marginRight: "5px",
                    }}
                  ></TextField>
                </TableCell>
                <TableCell style={{ border: "0" }}>
                  <TextField
                    id="FamTo"
                    size="small"
                    label="To. :"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "4px",
                      width: "200px",
                      marginRight: "5px",
                    }}
                  ></TextField>
                </TableCell>
              </TableRow>
              <TableRow>
                {/* <TableCell style={{ border: "0" }}>
                  <FormControl
                    sx={{ width: 200 }}
                    style={{
                      display:
                        Path === "SEARCH" || Path === "APPROVEFAM"
                          ? "block"
                          : "none",
                    }}
                  > */}
                    {/* <Autocomplete
                      value={selectdept}
                      onChange={(e, value) => setselectdept(value)}
                      options={dept.map((item) => item[0])}
                      noOptionsText="กรุณาเลือก Factory"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Dept :"
                          size="small"
                          sx={{ textAlign: "left" }}
                        />
                      )}
                    /> */}
                  {/* </FormControl> */}
                  {/* <FormControl
                    sx={{ width: 200 }}
                    style={{ display: Path === "FAMMASTER" ? "block" : "none" }}
                  > */}
                    {/* <Autocomplete
                      multiple
                      value={selectdeptMul}
                      onChange={(e, value) => setselectdeptMul(value)}
                      options={dept.map((item) => item[0])}
                      noOptionsText="กรุณาเลือก Factory"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Dept :"
                          size="small"
                          sx={{ textAlign: "left" }}
                        />
                      )}
                    /> */}
                  {/* </FormControl>
                </TableCell> */}
                {/* <TableCell style={{ border: 0 }}> */}
                  {/* <FormControl
                    sx={{ width: 200 }}
                    style={{
                      display:
                        Path === "SEARCH" || Path === "APPROVEFAM"
                          ? "block"
                          : "none",
                    }}
                  >
                    <Autocomplete
                      value={selectcost}
                      onChange={(e, value) => setselectcost(value)}
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
                
                  <FormControl
                    sx={{ width: 200 }}
                    style={{
                      display:
                        Path === "SEARCH" || Path === "APPROVEFAM"
                          ? "none"
                          : "",
                    }}
                  >
                    <Autocomplete
                      multiple
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
                  </FormControl> */}
                {/* </TableCell> */}
              </TableRow>
         
              <TableRow   >
                {/* <TableCell style={{ border: 0 }}>
               
                  <Typography color={"gray"} style={{ fontSize: "14px" }}>
                    Date From :{" "}
                  </Typography>
                  <DatePicker
                    size="small"
                    fullWidth
                    format="DD/MM/YYYY"
                    onChange={handleDateToChange}
                  />
                </TableCell>
                <TableCell style={{ border: 0 }}>
                
                  <Typography color={"gray"} style={{ fontSize: "14px" }}>
                    Date To:{" "}
                  </Typography>
                  <DatePicker
                    size="small"
                    fullWidth
                    format="DD/MM/YYYY"
                    onChange={handleDateChange}
                  />
                </TableCell> */}
                 <TableCell style={{ border: 0 }}>
                  <TextField
                    id="Date"
                    size="small"
                    type="date"
                    label="Date From FAM." // เพิ่ม label เพื่อแสดงชื่อว่า Date From
                    InputLabelProps={{ shrink: true }} 
                    // label="Date From :"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "4px",
                      width: "200px",
                      marginRight: "5px",
                    }}
                    s
                    value={selectedDateFrom}
                    onChange={(e) => {
                      setSelectedDateFrom(e.target.value);
                    }}
                  ></TextField>
                </TableCell>
                <TableCell style={{ border: 0 }}>
                  <TextField
                    id="DateTo"
                    size="small"
                    type="date"
                    // label="Date To :"
                    label="Date To FAM." // เพิ่ม label เพื่อแสดงชื่อว่า Date From
                    InputLabelProps={{ shrink: true }} 
                    style={{
                      backgroundColor: "white",
                      borderRadius: "4px",
                      width: "200px",
                      marginRight: "5px",
                    }}
                    value={selectedDateTo}
                    onChange={(e) => {
                      setSelectedDateTo(e.target.value);
                    }}
                  ></TextField>
                </TableCell>
              </TableRow>
              {Path !== 'CLOSEACC' &&(
              <TableRow>
                <TableCell style={{ border: "0" }}>
                  <FormControl sx={{ width: 200 }} style={{}}>
                    <InputLabel size="small" id="demo-simple-select-label">
                      Request Type :
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Request Type :"
                      value={selectReType}
                      onChange={(e) => {
                        setselectReType(e.target.value);
                        findStatus(e.target.value);
                      }}
                      size="small"
                      style={{
                        width: "200px",
                      }}
                    >
                      {ReType.map((option) => (
                        <MenuItem value={option[0]}>{option[1]}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                
                </TableCell>
                <TableCell style={{ border: "0" }}>
                <FormControl
                    sx={{ width: 200 }}
                    style={{ display: Path === "FAMMASTER" ? "block" : "none" }}
                  >
                    <Autocomplete
                      value={selectStatus}
                      onChange={(e, value) => {
                        setselectStatus(value);
                        selectStatusID(value.value);
                      }}
                      options={Status.map((item) => ({
                        label: item[1],
                        value: item[0],
                      }))}
                      getOptionLabel={(option) => option.label}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Status :"
                          size="small"
                          sx={{ textAlign: "left" }}
                        />
                      )}
                      getOptionSelected={(option, value) =>
                        value === "" ? false : option.value === value.value
                      }
                      noOptionsText=" กรุณาเลือก Request Type"
                    />
                  </FormControl> </TableCell>
                {/* <TableCell style={{ border: 0 }}>
                  <TextField
                    label="Fix Asset Code :"
                    size="small"
                    variant="outlined"
                    id="FixAsset"
                    style={{
                      width: 200,
                    }}
                  />
                </TableCell> */}
              </TableRow>)}
              <TableRow
                style={{
                  display: Path === "SEARCH" ? "table-row" : "none",
                }}
              >
                <TableCell style={{ border: 0 }} colSpan={2}>
                  <TextField
                    size="small"
                    value={UserLogin}
                    label="Request By :"
                    disabled
                    style={{
                      backgroundColor: "rgba(169, 169, 169, 0.3)",
                      width: "420px",
                    }}
                  ></TextField>
                </TableCell>
              </TableRow>

              <TableRow style={{ display: Path === 'CLOSEACC' ? '' : 'none' }}>
  <TableCell style={{ border: 0 }}>
    <FormControl
      sx={{ width: 200 }}
     
    >
      <TextField
        // id="DateFrom"
        size="small"
        type="date"
        label="Date From Return" // เพิ่ม label เพื่อแสดงชื่อว่า Date From
        InputLabelProps={{ shrink: true }} // ทำให้ label แสดงขึ้นเมื่อเป็น date picker
        style={{
          backgroundColor: 'white',
          borderRadius: '4px',
          width: '200px',
          marginRight: '5px',
        }}
        value={selectReturnFrom}
        onChange={(e) => {
          setselectReturnFrom(e.target.value);
        }}
      />
    </FormControl>
  </TableCell>
  <TableCell style={{ border: 0  }}>
    <FormControl
      sx={{ width: 200 }}
     
    >
      <TextField
        // id="DateTo"
        size="small"
        type="date"
        label="Date To Return" // เพิ่ม label เพื่อแสดงชื่อว่า Date To
        InputLabelProps={{ shrink: true }} // ทำให้ label แสดงขึ้นเมื่อเป็น date picker
        style={{
          backgroundColor: 'white',
          borderRadius: '4px',
          width: '200px',
          marginRight: '5px',
        }}
        value={selectReturnTo}
        onChange={(e) => {
          setselectReturnTo(e.target.value);
        }}
      />
    </FormControl>
  </TableCell>
</TableRow>


              <TableRow
                style={{ display: Path === "FAMMASTER" || Path == 'CLOSEACC' ? "table-row" : "none" }}
              >
                <TableCell style={{ border: "0" }} colSpan={2}>
                  <TextField
                    id="outlined-basic"
                    label="Request By :"
                    size="small"
                    variant="outlined"
                    style={{ width: "414px" }}
                    value={Txt_ID_Owner}
                    onChange={(e) => {
                      setTxt_ID_Owner(e.target.value);
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                
                <TableCell style={{ border: "0" }}>
                 
                  {(Path == 'CLOSEACC' &&
                  <FormControl
                    sx={{ width: 200 }}
                   
                  >
                    <Autocomplete
                      value={selectReturnSts}
                      onChange={(e, value) => {
                       setselectReturnSts(value);
                       selectStatusReturn(value.value);
                      }}
                      options={ReturnStatus.map((item) => ({
                        label: item[1],
                        value: item[0],
                      }))}
                      getOptionLabel={(option) => option.label}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Status :"
                          size="small"
                          sx={{ textAlign: "left" }}
                        />
                      )}
                      getOptionSelected={(option, value) =>
                        value === "" ? false : option.value === value.value
                      }
                    
                    />
                  </FormControl>)}
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
                  <Button
                    className="ButtonSearch"
                    style={{
                      backgroundColor: "#FBD61A",
                      color: "gray",
                    }}
                    variant="contained"
                    onClick={Search}
                  >
                    {" "}
                    <SearchIcon />
                    Search
                  </Button>
                  &nbsp;
                  {(Type == null &&
                  <Button
                    className="ButtonSearch"
                    style={{
                      display: Path === "SEARCH" ? "" : "none",
                      backgroundColor: "#391AFB",
                    }}
                    variant="contained"
                    onClick={() => {
                      New('Issue FAM');
                    }}
                  >
                    <AddIcon />
                    New
                  </Button>)}
                  &nbsp;
                  {Path === "FAMMASTER" && (
                    <Button
                      className="ButtonSearch"
                      style={{
                        backgroundColor: "#00C344",
                        width: "180px",
                      }}
                      variant="contained"
                      onClick={exportToExcelTable1}
                    >
                      <FileDownloadIcon />
                      Export Excel
                    </Button>
                  )}
                   
                  &nbsp;
                  <Button
                    className="ButtonSearch"
                    onClick={Reset}
                    style={{
                      backgroundColor: "#E2E3DC",
                      width: "100px",
                      color: "black",
                    }}
                    variant="contained"
                  >
                    <RestartAltIcon />
                    Reset
                  </Button>
                  &nbsp;
                  &nbsp;
                
                </TableCell>
              </TableRow>
            </Table>
          </div>
        </div>
   
        <div className="responsive-container">
        {Path === "CLOSEACC" && (
          <>
                    <Button
                    className="ButtonSearch"
                    style={{
                      backgroundColor: "#e51c23",
                      width: "180px",
                       visibility: checkHead 
                    }}
                    variant="contained"
                    onClick={handleClickOpen} // เปิด Popup เมื่อคลิก
                  >
                    Close Request
                  </Button>
            
                  <Dialog
                    open={open}
                    onClose={handleClose} // ปิด Popup
                  >
                    <DialogTitle>กรุณากรอก Comment</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                      <Box sx={{ width: 500, maxWidth: '100%', maxHeight: '500px' }}>
        <TextField
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          required
          error={!commentall}
          helperText={!commentall ? 'กรุณา Comment' : ''}
          value={commentall}
          onChange={(e) => setcommentall(e.target.value)} // อย่าลืมอัพเดทค่า comment
        />
      </Box>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>    
                      <Button onClick={handleSaveAndClose} color="primary" variant="contained">
                        Save
                      </Button>
                      <Button onClick={handleClose} color="primary">
                        Close
                      </Button>
                  
                    </DialogActions>
                  </Dialog>
                  </>
                  )}
                
          <TableContainer style={{ visibility: checkHead }} component={Paper}>
          <br></br>
            <Table aria-label="simple table">
              <TableHead className="Serach-Data">
                <TableRow>
                  {Path === "FAMMASTER" && (
                    <TableCell>
                      <Checkbox
                        style={{ color: "white" }}
                        {...label}
                        onChange={handleSelectAll}
                        checked={selectAll}
                      />
                    </TableCell>
                  )}
                       {Path === "CLOSEACC" && (
                    <TableCell>
                     
                    </TableCell>
                  )}
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>Factory</TableCell>
                  <TableCell>Cost Center</TableCell>
                  <TableCell>FAM No.</TableCell>
                  <TableCell>Issue By</TableCell>
                  <TableCell>Issue Date</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Request Status</TableCell>
                  {Path =='CLOSEACC'  &&(
                  <TableCell>Return Date</TableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {dataSearch.length > 0 ? (
                  dataSearch
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item, index) => (
                      <TableRow key={item[2]}>
                        {Path === "FAMMASTER" && (
                          <TableCell>
                            <Checkbox
                              {...label}
                              onChange={() => handleCheckboxChange(item[2])}
                              checked={selectedRows.includes(item[2])}
                            />
                          </TableCell>
                        )}
                        {Path === "CLOSEACC" && (
                          <TableCell>
                            {console.log(item[6],"item[6]")}
                            <Checkbox
                              {...label}
                              onChange={() => CloseJob(item[2])}
                              checked={selectedRows.includes(item[2])}
                              
                            />
                          </TableCell>
                        )}
                        <TableCell style={{ width: "0px" }}>
                        {Path === "SEARCH" ? (
  loading === "false" && index === selectindex ? (
    <LoadingOutlined style={{ fontSize: "30px" }} />
  ) : (
    <EditNoteIcon
      style={{ color: "#F4D03F", fontSize: "30px" }}
      onClick={() => handleEdit(item[2], index, "Issue FAM")}
    />
  )
) : Path === "APPROVEFAM" ? (
  loading === "false" && index === selectindex ? (
    <LoadingOutlined style={{ fontSize: "30px" }} />
  ) : (
    <AddTaskIcon
      style={{ color: "#F4D03F", fontSize: "30px" }}
      onClick={() => handleEdit(item[2], index, "Approve FAM")}
    />
  )
) : Path === "FAMMASTER" ? (
  <>
    <FilePdfOutlined
      style={{ color: "red", fontSize: "30px" }}
      onClick={() => handlePDF(item[2], index)}
    />
  </>
) : (
  loading === "false" && index === selectindex ? (
    <LoadingOutlined style={{ fontSize: "30px" }} />
  ) : null
)}

                        </TableCell>
                        <TableCell style={{ width: "0px" }}>
                          {item[6] === "Create" &&
                            Path == "SEARCH" &&
                            (loading === "false" &&
                            index === selectindex_delete ? (
                              <LoadingOutlined style={{ fontSize: "30px" }} />
                            ) : (
                              <DeleteForeverIcon
                                style={{
                                  color: "red",
                                  fontSize: "30px",
                                  display: "block",
                                }}
                                onClick={() => {
                                  Delete(item[2], item[5]);
                                }}
                              />
                            ))}

{(Path === "FAMMASTER" || Path === "CLOSEACC") &&
  (loading === "false" && index === selectindex_delete ? (
    <LoadingOutlined style={{ fontSize: "30px" }} />
  ) : (
    <FileSearchOutlined
      style={{ color: "#40A2E3", fontSize: "30px" }}
      onClick={() => {
        handleVIEW(item[2], item[7], Path === "FAMMASTER" ? 'FAM Master List' : 'Close lending by ACC');
      }}
    />
  ))}

                        </TableCell>

                        <TableCell>{item[0]}</TableCell>
                        <TableCell>{item[1]}</TableCell>
                        <TableCell>{item[2]}</TableCell>
                        <TableCell>{item[4]}</TableCell>
                        <TableCell>{item[3]}</TableCell>
                        <TableCell>{item[5]}</TableCell>

                        <TableCell>
                          <Typography
                            style={{
                              borderRadius: "6px",
                              background: "#FFB9B9",
                            }}
                          >
                            {item[6]}
                          </Typography>
                        </TableCell>
                        {Path =='CLOSEACC'&&(
                        <TableCell >
                          <Typography
                            style={{
                              borderRadius: "6px",
                              background: "#FFA07A",
                            }}
                          >
                            {item[8]}</Typography>
                            </TableCell>)}
                      </TableRow>
                    ))
                ) : (
                  <TableRow style={{ visibility: checkEmpty }}>
                    <TableCell colSpan={11} >
                      {/* <InfoCircleOutlined
                        style={{
                          visibility: checkData,
                          fontSize: "30px",
                          color: "#ffd580",
                        }}
                      /> */}
                      <text
                        style={{
                          visibility: checkData,
                          fontSize: "25px",
                          
                          // marginLeft: "10px",
                        }}
                      >
                        {/* {" "}
                        Please fill in information{" "} */}
                      </text>
                      <Empty style={{ visibility: checkEmpty }} />
                    </TableCell>
                  </TableRow>
                )}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 10 * emptyRows }}>
                    <TableCell colSpan={11} />
                  </TableRow>
                )}
              </TableBody>

              <TableFooter>
               
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 50]}
                    colSpan={11}
                    count={dataSearch.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    // SelectProps={{
                    //   inputProps: { "aria-label": "rows per page" },
                    //   native: true,
                    // }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default Issue;
