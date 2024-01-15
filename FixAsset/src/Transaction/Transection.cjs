const express = require("express");
const oracledb = require("oracledb");

const app = express();
const port = 5000;
app.use(express.json());

oracledb.initOracleClient({
  tnsAdmin: "D:\\app\\Administrator\\product\\11.2.0\\client_1\\network\\admin",
});

const AVO = {
    user: "avo",
    password: "avo",
    connectString: "TCIX01",
  };
// Factory
module.exports.factory = async function (req, res) {
    try {
        const connect = await oracledb.getConnection(AVO);
        const query = `
        SELECT T.FACTORY_CODE,T.FACTORY_NAME 
        FROM CUSR.CU_FACTORY_M T 
        WHERE T.FACTORY_STATUS = 'A' 
        ORDER BY T.FACTORY_CODE
           `;
        const result = await connect.execute(query);
        connect.release();
        console.log(result.rows);
        res.json(result.rows);
        
      } catch (error) {
        console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
      }
        }


//Dept
module.exports.dept = async function (req, res) {
    try {
    const IdFactory = req.query.idFactory;
      const connect = await oracledb.getConnection(AVO);
      const query = `
      SELECT T.FDM_DEPT_SHORT 
      FROM FAM_DEPT_MASTER T 
      WHERE T.FDM_FACTORY = '${IdFactory}'
      AND T.FDM_STATUS = 'A' 
      ORDER BY T.FDM_SORT,T.FDM_DEPT_SHORT`;
      const result = await connect.execute(query);
      connect.release();
      console.log(result.rows);
      res.json(result.rows);
      
    } catch (error) {
      console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
    }
  };
  
  //CostCenter
  module.exports.cost = async function (req, res) {
    try {
      const connect = await oracledb.getConnection(AVO);
      const query = `
      SELECT DISTINCT T.CC_CTR,
      T.CC_DESC FROM CUSR.CU_MFGPRO_CC_MSTR T 
      WHERE  T.CC_ACTIVE = '1'
      ORDER BY T.CC_CTR
         `;
      const result = await connect.execute(query);
      connect.release();
      console.log(result.rows);
      res.json(result.rows);
      
    } catch (error) {
      console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
    }
  };

  //RequestType
  module.exports.type = async function (req, res) {
    try {
      const connect = await oracledb.getConnection(AVO);
      const query = `
      SELECT DISTINCT T.CC_CTR,
      T.CC_DESC FROM CUSR.CU_MFGPRO_CC_MSTR T 
      WHERE  T.CC_ACTIVE = '1'
      ORDER BY T.CC_CTR
         `;
      const result = await connect.execute(query);
      connect.release();
      console.log(result.rows);
      res.json(result.rows);
      
    } catch (error) {
      console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
    }
  };

    //RequestBy
    module.exports.by = async function (req, res) {
        try {
          const connect = await oracledb.getConnection(AVO);
          const query = `
          SELECT DISTINCT T.CC_CTR,
          T.CC_DESC FROM CUSR.CU_MFGPRO_CC_MSTR T 
          WHERE  T.CC_ACTIVE = '1'
          ORDER BY T.CC_CTR
             `;
          const result = await connect.execute(query);
          connect.release();
          console.log(result.rows);
          res.json(result.rows);
          
        } catch (error) {
          console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
        }
      };


