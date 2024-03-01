
const express = require("express");
const oracledb = require("oracledb");
require("dotenv").config();
const app = express();
const port = 5000;
app.use(express.json());
const Login =require("../Login/Login.cjs")
const Transaction =require("../Transaction/Transection.cjs")
const path = require('path');
const fs = require('fs');

oracledb.initOracleClient({
  tnsAdmin: "D:\\app\\Administrator\\product\\11.2.0\\client_1\\network\\admin",

});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(express.json());



//------------------------get------------------------------------//
app.get("/Login", Login.login);
app.get("/CheckUserLogin", Login.CheckUserlogin); 
app.get("/getmenu", Login.menu);
app.get("/getmainmenu",Login.mainmenu);
app.get("/getsubmenu",Login.submenu);
app.get("/getemp",Transaction.emp);
app.get("/getfactory",Transaction.factory);
app.get("/getdept",Transaction.dept);
app.get("/getcost",Transaction.cost);
app.get("/gettype",Transaction.type);
app.get("/getby",Transaction.by);
app.get("/getstatus",Transaction.status);
app.get("/getsearch",Transaction.search);
app.get("/getfixcode",Transaction.fixcode);
app.get("/getfac_insert",Transaction.fac_insert);
app.get("/getcost_insert",Transaction.cost_insert);
app.get("/getfix_group",Transaction.fix_group);
app.get("/getid_service",Transaction.id_service);
app.get("/getfind_service",Transaction.find_service);
app.get("/getfamno",Transaction.fam_no);
app.get("/select_BOI_from",Transaction.select_BOI_from);
app.get("/new_owner",Transaction.new_owner);
app.get("/cc_for_transfer",Transaction.cc);
app.get("/level",Transaction.level_mana);
app.get("/service_by",Transaction.service_by);
app.get("/boi_staff",Transaction.boi_staff);
app.get("/boi_manager",Transaction.boi_manager);
app.get("/fac_manager",Transaction.fac_manager);
app.get("/acc_check",Transaction.acc_check);
app.get("/acc_manager",Transaction.acc_manager);
app.get("/getEdit_request_show",Transaction.getEdit_Request_Show);
app.get("/getlevel",Transaction.level_person_maintain);
app.get("/getData_UserLogin_Person",Transaction.getData_UserLogin_Person);
app.get("/Search_Person_Maintain",Transaction.search_person_maintain);
app.get("/Search_Person_Maintain_Edit",Transaction.getEdit_Person_Show);
app.get("/get_BOI_project",Transaction.get_BOI_project);
app.get("/search_BOI_project",Transaction.search_BOI_project);
app.get("/Search_BOI_Maintain_Edit",Transaction.getEdit_BOI_Show);
app.get("/getCountTransfer",Transaction.getCountTransfer);
app.get("/getCountTransferlistaLL",Transaction.getCountTransferlistaLL);
// ----------------------------------post-----------------------------------//
app.post("/get_gen_famno",Transaction.insert_tranfer);
app.post("/get_asset_transfer",Transaction.insert_asset_transfer);
app.post("/ins_REQ_DETAIL",Transaction.insert_FAM_REQ_DETAIL);
app.post("/ins_from_Boi",Transaction.ins_from_Boi);
app.post("/ins_transfer",Transaction.ins_transfer);
app.post("/routing_tran",Transaction.routing_tran);
app.post("/receiver_tranfer",Transaction.receiver_tranfer);
app.post("/ins_PERSON_MAINTAIN",Transaction.insertPerson_Maintain);
app.post("/update_PERSON_MAINTAIN",Transaction.updatePerson_Maintain);
app.post("/dlt_PERSON_MAINTAIN",Transaction.deletePerson_Maintain);
app.post("/ins_BOI_MAINTAIN",Transaction.insertBOI_Maintain);
app.post("/update_BOI_MAINTAIN",Transaction.updateBOI_Maintain);
app.post("/dlt_BOI_MAINTAIN",Transaction.deleteBOI_Maintain);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++ may ++++++++++++++++++++++++++++++++++++++++++++++++++
app.post("/FamDetailReport",Transaction.getFamDetailReport)
app.post("/RequstType",Transaction.getRequstType)
app.post("/FAM_FILE_ATTACH",Transaction.getFAM_FILE_ATTACH)
app.use('/downloads', express.static(path.join(__dirname, '../Uploads')));
//getFAM_FILE_ATTACH
app.get('/downloads', (req, res) => {
  const fileName = req.query.filename;
  const filePath = path.join(__dirname, '../Uploads', fileName);

  // ตรวจสอบว่าไฟล์มีอยู่หรือไม่
  if (fs.existsSync(filePath)) {
    // ส่งไฟล์กลับไปยังผู้ใช้
    res.sendFile(filePath);
    console.log(filePath)
    res.sendFile(filePath);
  } else {
    // ถ้าไม่พบไฟล์, ส่งข้อความแจ้งเตือน
    res.status(404).send('File not found');
  }
});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
