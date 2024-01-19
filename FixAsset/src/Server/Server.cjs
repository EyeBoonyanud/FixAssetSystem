const express = require("express");
const oracledb = require("oracledb");

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
app.get("/getsubmenu",Login.submenu);
app.get("/getemp",Transaction.emp);
app.get("/getfactory",Transaction.factory);
app.get("/getdept",Transaction.dept);
app.get("/getcost",Transaction.cost);
app.get("/gettype",Transaction.type);
app.get("/getsearch",Transaction.search);
app.get("/getfixcode",Transaction.fixcode);


// app.get("/checkconnect", async (req, res) => {
//   try {
//     const oracleConnection = await oracledb.getConnection(CUSR);
//     if (oracleConnection) {
//       res.send("เชื่อมต่อสำเร็จ Oracle");
//     } else {
//       res.send("การเชื่อมต่อไม่สำเร็จ");
//     }
//     await oracleConnection.close();
//   } catch (error) {
//     console.error("เกิดข้อผิดพลาดในการเชื่อมต่อ:", error);
//     res.send("การเชื่อมต่อไม่สำเร็จ");
//   }
// });

 


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
