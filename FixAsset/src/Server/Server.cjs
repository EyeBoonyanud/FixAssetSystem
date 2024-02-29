
const express = require("express");
const oracledb = require("oracledb");
require("dotenv").config();
const app = express();
const port = 5000;
app.use(express.json());
const Login =require("../Login/Login.cjs")
const Transaction =require("../Transaction/Transection.cjs")
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

app.get("/Login", Login.login);
app.get("/getmenu", Login.menu);
app.get("/getmainmenu",Login.mainmenu);
app.get("/gethome_page",Transaction.gethome_page);
app.get("/getsubmenu",Login.submenu);
app.get("/getemp",Transaction.emp);
app.get("/getfactory",Transaction.factory);
app.get("/getdept",Transaction.dept);
app.get("/getcost",Transaction.cost);
app.get("/gettype",Transaction.type);
app.get("/getby",Transaction.by);
app.get("/getstatus",Transaction.status);
app.get("/getsearch",Transaction.search);
app.get("/getsearch2",Transaction.search2);
app.get("/getfixcode",Transaction.fixcode);
app.get("/getfac_insert",Transaction.fac_insert);
app.get("/getcost_insert",Transaction.cost_insert);
app.get("/getfix_group",Transaction.fix_group);
app.get("/getid_service",Transaction.id_service);
app.get("/getfind_service",Transaction.find_service);
app.get("/getfamno",Transaction.fam_no);
app.post("/get_gen_famno",Transaction.insert_tranfer);
app.post("/create_date",Transaction.create_date);
app.post("/update_date",Transaction.update_date);
app.post("/get_asset_transfer",Transaction.insert_asset_transfer);
app.post("/ins_REQ_DETAIL",Transaction.insert_FAM_REQ_DETAIL);
app.post("/ins_from_Boi",Transaction.ins_from_Boi);
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
app.post("/ins_transfer",Transaction.ins_transfer);
app.post("/routing_tran",Transaction.routing_tran);
app.post("/receiver_tranfer",Transaction.receiver_tranfer);
app.get("/header",Transaction.header);
app.post("/close_routing_tran",Transaction.close_routing_tran);
app.post("/update_submit",Transaction.update_submit);
//MAY 
app.post("/ins_FILE_FROM_REQUEST", Transaction.insertFile_from_request); 
app.get("/get_seq_request", Transaction.get_run_seq_request);
app.post("/ins_FILE_FROM_REQUEST_TO_PROJECT_ME", Transaction.insertFile_from_request_to_project_me);
//
app.get("/new_boi",Transaction.new_boi);
//
app.get("/getEdit_request_show",Transaction.getEdit_Request_Show);
app.get("/getEdit_FixAsset",Transaction.getEdit_FixAsset);
app.get("/getEdit_FileUpload",Transaction.getEdit_FileUpload);
app.get("/getEdit_Trans",Transaction.getEdit_Trans);
app.get("/getEdit_routing",Transaction.getEdit_routing);
app.post("/Update_For_Req_All",Transaction.Update_For_Req_All);
app.post("/Update_For_Trans_All",Transaction.Update_For_Trans_All);

app.post("/delete_FAM_REQ_DETAIL",Transaction.delete_FAM_REQ_DETAIL);
app.post("/getFixcode",Transaction.getFixcode);
//delete all
app.post("/delect_all_fam_header",Transaction.delect_all_fam_header);
app.post("/delect_all_fam_details",Transaction.delect_all_fam_details);
app.post("/delect_all_fam_transfer",Transaction.delect_all_fam_transfer);
// Update For Radio 
app.post("/update_manager_dept",Transaction.update_manager_dept);
app.post("/update_service_by",Transaction.update_service_by);
app.post("/update_boi_staff",Transaction.update_boi_staff);
app.post("/update_boi_mana",Transaction.update_boi_mana);
app.post("/update_facmanager",Transaction.update_facmanager);
app.post("/update_acccheck",Transaction.update_acccheck);
app.post("/update_owner",Transaction.update_owner);
app.post("/update_recode",Transaction.update_recode);
app.post("/update_accmanager",Transaction.update_accmanager);
app.post("/update_service_close",Transaction.update_service_close);
app.post("/update_receiver",Transaction.update_receiver);

// Update All Routing (For Reject)
app.post("/update_for_nullRouting_All",Transaction.update_for_nullRouting_All);
app.post("/update_All_for_receive",Transaction.update_All_for_receive);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
