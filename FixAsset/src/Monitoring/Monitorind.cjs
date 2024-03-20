const express = require("express");
const oracledb = require("oracledb");
const path = require("path");
const app = express();
app.use(express.json());

oracledb.initOracleClient({
  tnsAdmin: "D:\\app\\Administrator\\product\\11.2.0\\client_1\\network\\admin",
});

const AVO = {
  user: "avo",
  password: "avo",
  connectString: "TCIX01",
};

const QAD = {
  user: "qad",
  password: "qad",
  connectString: "TCIX01",
};

const CUSR = {
  user: "cusr",
  password: "cusr",
  connectString: "TCIX01",
};

// getData_Hearder_show_VIEW
module.exports.getData_Hearder_show_VIEW = async function (req, res) {
    try {
      const connection = await oracledb.getConnection(AVO);
      const strFamno = req.query.FamNo;
      const result = await connection.execute(`
      SELECT DISTINCT  T.FRH_FAM_NO,
      TO_CHAR(T.FAM_REQ_DATE, 'DD/MM/YYYY') AS FRT_PLAN_MOVE_DATE,
     R.USER_EMP_ID ||' : ' || R.USER_FNAME||' ' || R.USER_SURNAME AS REQ_BY,
     T.FAM_REQ_TEL,
     T.FAM_REQ_OWNER,
     T.FAM_REQ_OWNER_CC,
     S.ENAME || '  ' || S.ESURNAME AS NAME_SURNAME ,
     T.FAM_REQ_OWNER_TEL,
     M.FACTORY_NAME AS FACTORYNAME,
     T.FAM_REQ_DEPT ,
     T.FAM_REQ_TYPE ,
     FR.FRC_GROUP AS ASSET_GROUP,
     T.FAM_ASSET_CC,
     FL.FFM_DESC AS REQ_STATUS,
     T.FAM_REQ_REMARK
     FROM FAM_REQ_HEADER T 
     LEFT JOIN FAM_FLOW_MASTER F ON F.FFM_CODE = T.FAM_REQ_STATUS 
     LEFT JOIN CUSR.CU_FACTORY_M M ON  M.FACTORY_CODE  =  T.FAM_FACTORY 
     LEFT JOIN CUSR.CU_USER_M R ON R.USER_LOGIN = T.FAM_REQ_BY 
     LEFT JOIN CUSR.CU_USER_HUMANTRIX S  ON S.EMPCODE = T.FAM_REQ_OWNER 
     LEFT JOIN FAM_RUNNING_CONTROL FR ON T.FAM_ASSET_GROUP = FR.FRC_CHK_PREFIX 
     LEFT JOIN FAM_FLOW_MASTER FL ON FL.FFM_CODE  = T.FAM_REQ_STATUS 
     WHERE T.FRH_FAM_NO = :famno
    `, { famno: strFamno });
    connection.release();
    const rows = result.rows;
    console.log(rows)
    res.json(rows);
    } catch (error) {
      console.error("Error fetching department data:", error);
      res.status(500).json({ error: "An error occurred" });
    }
  };

  // getData_Detail_show_VIEW
module.exports.getData_Detail_show_VIEW = async function (req, res) {
    try {
      const connection = await oracledb.getConnection(AVO);
      const strFamno = req.query.FamNo;
      const result = await connection.execute(`
      SELECT 
      FRD_FAM_NO 
      FRD_ASSET_CODE,
      FRD_COMP,
      FRD_OWNER_CC,
      FRD_ASSET_NAME,
      FRD_BOI_PROJ,
      FRD_QTY,
      FRD_INV_NO,
      FRD_ACQ_COST,
      FRD_BOOK_VALUE
      FROM FAM_REQ_DETAIL WHERE FRD_FAM_NO = :famno
    `, { famno: strFamno });
    connection.release();
    const rows = result.rows;
    console.log(rows)
    res.json(rows);
    } catch (error) {
      console.error("Error fetching department data:", error);
      res.status(500).json({ error: "An error occurred" });
    }
  };
  
