const express = require("express");
const oracledb = require("oracledb");

const app = express();
const port = 5000;
app.use(express.json());

oracledb.initOracleClient({
  tnsAdmin: "D:\\app\\Administrator\\product\\11.2.0\\client_1\\network\\admin",
  //process.env.TNS_ADMIN
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

//EmpID 
module.exports.emp = async function (req, res) {
  try {
    const EmpID = req.query.empID;
    const connect = await oracledb.getConnection(CUSR);
    const query = `
    SELECT MU.ENAME , MU.ESURNAME , MU.FACTORY , MU.COST_CENTER,
    MU.ENAME||' ' ||MU.ESURNAME AS USER_EMP
     FROM CU_USER_HUMANTRIX MU 
      WHERE MU.EMPCODE  = '${EmpID}' `;
    const result = await connect.execute(query);
    connect.release();
    console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
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
};
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
      WHERE  T.CC_ACTIVE = '1' ORDER BY T.CC_CTR
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
      SELECT T.FCM_CODE,T.FCM_DESC
      FROM FAM_CODE_MASTER T 
      WHERE T.FCM_GROUP_ID = 'GP01'
      AND T.FCM_STATUS = 'A' 
      ORDER BY T.FCM_SORT,T.FCM_DESC
         `;
    const result = await connect.execute(query);
    connect.release();
    console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
};
//Search
module.exports.search = async function (req, res) {
  try {
    const factory = req.query.FacCode;
    const dept = req.query.DeptCode;
    const famno = req.query.FamNo;
    const famto = req.query.FamTo;
    const cost = req.query.Costcenter;
    const asset = req.query.FixAsset;
    const type = req.query.ReType;
    const date = req.query.ReDate;
    const dateto = req.query.ReDateTo;
    console.log(factory, "1");
    console.log(dept, "2");
    console.log(famno, "3");
    console.log(famto, "4");
    console.log(cost, "5");
    console.log(asset, "6");
    console.log(type, "7");
    console.log(date, "8");
    console.log(dateto, "9");
    const connect = await oracledb.getConnection(AVO);
    const query = `
    SELECT
    DISTINCT M.FACTORY_NAME AS FACTORY,
    T.FAM_REQ_CC AS COSTCENTER,
    T.FRH_FAM_NO AS FAMNO,
    T.FAM_REQ_DATE AS ISSUEDATE,
    T.FAM_REQ_BY AS ISSUEBY,
    R.FCM_DESC AS RETYPE,
    (SELECT
      TO_CHAR(WM_CONCAT(CD.FRD_ASSET_CODE))
    FROM
      FAM_REQ_DETAIL CD
    WHERE
      CD.FRD_FAM_NO = T.FRH_FAM_NO) AS FIXED_CODE,
    F.FFM_DESC AS STATUS
  FROM
    FAM_REQ_HEADER T
  INNER JOIN CUSR.CU_FACTORY_M M ON M.FACTORY_CODE = T.FAM_FACTORY
  INNER JOIN FAM_CODE_MASTER R ON R.FCM_CODE = T.FAM_REQ_TYPE
  INNER JOIN FAM_FLOW_MASTER F ON F.FFM_CODE = T.FAM_REQ_STATUS
  INNER JOIN FAM_REQ_DETAIL C ON C.FRD_FAM_NO = T.FRH_FAM_NO
  WHERE (T.FAM_FACTORY = '${factory}' OR '${factory}' IS NULL)
    AND (TRIM(T.FAM_REQ_DEPT) = '${dept}' OR '${dept}' IS NULL)
    AND (T.FRH_FAM_NO >= '${famno}' OR '${famno}' IS NULL)
    AND (T.FRH_FAM_NO <= '${famto}' OR '${famto}'IS NULL)
    AND (TRIM(T.FAM_REQ_CC) = '${cost}' OR '${cost}' IS NULL)
    AND (T.FAM_REQ_TYPE = '${type}' OR '${type}' IS NULL)
    AND (C.FRD_ASSET_CODE  = '${asset}' OR '${asset}' IS NULL)
    AND (TO_CHAR(T.FAM_REQ_DATE , 'YYYYMMDD') >= '${date}' OR '${date}' IS NULL)
    AND (TO_CHAR(T.FAM_REQ_DATE , 'YYYYMMDD') >= '${dateto}' OR '${dateto}' IS NULL)
         `;
    console.log(query);
    const result = await connect.execute(query);
    connect.release();
    console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
};
//Fixed Asset Code
module.exports.fixcode = async function (req, res) {
  try {
    const fixcode = req.query.Fixcode;

    // console.log(factory,"1")

    const connect = await oracledb.getConnection(QAD);
    const query = `
    SELECT KFA_MSTR.KFA_CODE,  
    KFAD_DET.KFAD_COMP,  
    KFAD_DET.KFAD_CC,  
    KFAD_DET.KFAD_COMP_NAME,  
    KFA_MSTR.KFA_SEARCH3,  
    CODE_MSTR.CODE_CMMT,  
    KFAD_DET.KFAD_QTY,  
    KFIN_DET.KFIN_DOC_NO,  
    KFIN_DET.KFIN_REF_DATE,  
    KFAD_DET.KFAD_ACQ_COST,  
    KFAD_DET.KFAD_SVG_VAL 
FROM KFA_MSTR,  
    KFAD_DET,  
    KFIN_DET,  
    CODE_MSTR 
WHERE ( KFA_MSTR.KFA_CODE = KFAD_DET.KFAD_CODE ) and 
    ( KFA_MSTR.KFA_DOMAIN = KFAD_DET.KFAD_DOMAIN ) and 
    ( KFAD_DET.KFAD_CODE = KFIN_DET.KFIN_FA_CODE ) and 
    ( KFIN_DET.KFIN_DOMAIN = KFAD_DET.KFAD_DOMAIN ) and 
    ( KFA_MSTR.KFA_OBLG = CODE_MSTR.CODE_VALUE ) and 
    ( KFA_MSTR.KFA_DOMAIN = CODE_MSTR.CODE_DOMAIN ) and 
    ( KFAD_DET.KFAD_COMP = KFIN_DET.KFIN_INFO_SEQ ) and 
    ( ( KFA_MSTR.KFA_CODE = '${fixcode}' ) AND  
    ( upper(CODE_MSTR.CODE_FLDNAME) = 'KFA_OBLG' ) AND 
    ( KFAD_DET.KFAD_BOOK = 'SL' ) AND 
    ( KFA_MSTR.KFA_DOMAIN = '9000' ) AND 
    ( KFAD_DET.KFAD_SEQ = '0' ) )  
         `;

    const result = await connect.execute(query);
    connect.release();
    console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
};
