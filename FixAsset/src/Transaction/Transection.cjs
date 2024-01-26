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
    SELECT M.FACTORY_NAME,
    T.USER_FNAME,
    T.USER_SURNAME,
    T.USER_SITE ,
    T.USER_FNAME||'  ' ||T.USER_SURNAME AS USER_LOGIN
    FROM  CU_USER_M T 
    INNER JOIN  CU_FACTORY_M M ON M.FACTORY_CODE  = T.USER_SITE
     WHERE  T.USER_EMP_ID = '${EmpID}' `;
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
    // console.log(result.rows);
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
    // console.log(result.rows);
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
    // console.log(result.rows);
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
    // console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
};
// RequestBy
module.exports.by = async function (req, res) {
  try {
    const By = req.query.By;
    const connect = await oracledb.getConnection(CUSR);
    const query = `
    SELECT  H.EMPCODE,H.ENAME,H.ESURNAME,T.USER_LOGIN
    ,H.EMPCODE || ' : ' || H.ENAME || ' ' || H.ESURNAME
    FROM CU_USER_HUMANTRIX H 
    LEFT JOIN  CU_USER_M T  ON  T.USER_EMP_ID = H.EMPCODE
   WHERE  T.USER_LOGIN = '${By}' `;
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
  LEFT JOIN CUSR.CU_FACTORY_M M ON M.FACTORY_CODE = T.FAM_FACTORY
  LEFT JOIN FAM_CODE_MASTER R ON R.FCM_CODE = T.FAM_REQ_TYPE
  LEFT JOIN FAM_FLOW_MASTER F ON F.FFM_CODE = T.FAM_REQ_STATUS
  LEFT JOIN FAM_REQ_DETAIL C ON C.FRD_FAM_NO = T.FRH_FAM_NO
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
    // console.log(result.rows);
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
    // console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
};
//FactoryForInsert
module.exports.fac_insert = async function (req, res) {
  try {
    const UserLogin = req.query.Fac_Login;
    const connect = await oracledb.getConnection(CUSR);
    const query = `
    SELECT
    F.FACTORY_NAME,
    T.USER_SITE
  FROM CU_USER_M T
  INNER JOIN CU_FACTORY_M F ON F.FACTORY_CODE = T.USER_SITE
  WHERE T.USER_LOGIN = '${UserLogin}' `;
    const result = await connect.execute(query);
    connect.release();
    // console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
};
//Costcenter
module.exports.cost_insert = async function (req, res) {
  try {
    const User_cost = req.query.Cost_Login;
    const connect = await oracledb.getConnection(CUSR);
    const query = `
    SELECT H.COST_CENTER 
    FROM CU_USER_M T
    INNER JOIN CU_USER_HUMANTRIX H
    ON H.EMPCODE = T.USER_EMP_ID  
    WHERE  T.USER_LOGIN ='${User_cost}' `;
    const result = await connect.execute(query);
    connect.release();
    // console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
};
// Fixed Asset Group
module.exports.fix_group = async function (req, res) {
  try {
    const Fixasset = req.query.Asset_group;
    const connect = await oracledb.getConnection(AVO);
    const query = `
    SELECT T.FRC_CHK_PREFIX AS inpCode,
    T.FRC_CHK_PREFIX||' : '||T.FRC_GROUP AS ShowDesc 
    FROM FAM_RUNNING_CONTROL T 
    WHERE T.FRC_FACTORY = '${Fixasset}' 
    ORDER BY T.FRC_FACTORY,T.FRC_CHK_PREFIX,T.FRC_GROUP `;
    const result = await connect.execute(query);
    connect.release();
    // console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
};
//Status
module.exports.status = async function (req, res) {
  try {
    const connect = await oracledb.getConnection(AVO);
    const query = `
    SELECT T.FFM_CODE, T.FFM_DESC 
    FROM FAM_FLOW_MASTER T 
    WHERE T.FFM_TYPE = 'TRANSFER' 
    AND T.FFM_SEQ = 1 AND T.FFM_STATUS = 'A' `;
    const result = await connect.execute(query);
    connect.release();
    // console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
};

//หา Service  AssetGroup
module.exports.id_service = async function (req, res) {
  try {
    const Fac = req.query.fac;
    const FixGroup = req.query.fixgroub;
    const connect = await oracledb.getConnection(AVO);
    const query = `
    SELECT DISTINCT T.FRC_PIC_CC,
    T.FRC_PIC_CC||' : '||T.FRC_SERVICE_DEPT 
    FROM FAM_RUNNING_CONTROL T WHERE T.FRC_FACTORY = '${Fac}'
    AND T.FRC_CHK_PREFIX = '${FixGroup}' `;
    const result = await connect.execute(query);
    connect.release();
    // console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
};
//หา Service Find_asset Cost
module.exports.find_service = async function (req, res) {
  try {
    const AssetCost = req.query.asset_find;
    const connect = await oracledb.getConnection(AVO);
    const query = `
    SELECT DISTINCT T.CC_CTR ,
    T.CC_CTR||' : '||T.CC_DESC 
    FROM CUSR.CU_MFGPRO_CC_MSTR T 
    WHERE  T.CC_ACTIVE = '1' 
    AND T.CC_CTR = '${AssetCost}'  
    ORDER BY T.CC_CTR `;
    const result = await connect.execute(query);
    connect.release();
    // console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
};
// หา FAM NO.
module.exports.fam_no = async function (req, res) {
  try {
    const FamNo = req.query.famno;
    const connect = await oracledb.getConnection(AVO);
    const query = `
    SELECT MAX (FRH_FAM_NO)  
     FROM FAM_REQ_HEADER WHERE FRH_FAM_NO LIKE '${FamNo}-%'`;
    console.log(query);
    const result = await connect.execute(query);
    connect.release();
    // console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
};
// insert FAM NO.สำหรับ การได้ เอกสารครั้งแรก
module.exports.insert_tranfer = async function (req, res) {
  
  try {console.log("----")
    const Tranfer_id = req.query.tranfer;
    const ReqBy = req.query.reqby;
    const ReTel = req.query.reTel;
    const Factory = req.query.fac;
    const CC = req.query.cc;
    const Dept = req.query.dept;
    const Type = req.query.type;
    const Assetgroup = req.query.assetgroup;
    const AssetCC = req.query.assetcc;
    const Status = req.query.status;
    const Remark = req.query.remark;
    console.log (Tranfer_id)
    console.log (Remark)
console.log("////")
    const connect = await oracledb.getConnection(AVO);
    const query = `
      INSERT INTO FAM_REQ_HEADER 
      (FRH_FAM_NO, FAM_REQ_DATE, FAM_REQ_BY, FAM_REQ_TEL, FAM_FACTORY, FAM_REQ_CC,
      FAM_REQ_DEPT, FAM_REQ_TYPE, FAM_ASSET_GROUP, FAM_ASSET_CC, FAM_REQ_STATUS, FAM_REQ_REMARK)
      VALUES 
      (:Tranfer_id, SYSDATE, :ReqBy, :ReTel, :Factory, :CC, :Dept, :Type, :Assetgroup, :AssetCC, :Status, :Remark)
    `;

    const data = {
      Tranfer_id,
      ReqBy,
      ReTel,
      Factory,
      CC,
      Dept,
      Type,
      Assetgroup,
      AssetCC,
      Status,
      Remark,
    };
   console.log(query)
   console.log(data)
    const result = await connect.execute(query, data, { autoCommit: true });
    connect.release();
    res.json(result);
  } catch (error) {
    console.error("Error in querying data:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.insert_asset_transfer = async function (req, res) {
  try {
    const Tranfer_id = req.query.tranfer;
    const ReqBy = req.query.reqby;
    const AssetCC = req.query.assetcc;

    const connect = await oracledb.getConnection(AVO);
    const query = `
      INSERT INTO FAM_REQ_TRANSFER (FRT_FAM_NO, FRT_FROM_CC, FRT_CREATE_DATE, FRT_CREATE_BY)
VALUES (:Tranfer_id,:AssetCC, SYSDATE,:ReqBy)
    `;

    const data = {
      Tranfer_id,
      ReqBy,
      AssetCC,
    };

    const result = await connect.execute(query, data, { autoCommit: true });
    connect.release();
    res.json(result);
  } catch (error) {
    console.error("Error in querying data:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

// insert_FAM_DETAIL
module.exports.insert_FAM_REQ_DETAIL = async function (req, res) {
  try {
    const FRD_FAM_NO = req.query.famno;
    const FRD_ASSET_CODE = req.query.assetcode;
    const FRD_ASSET_NAME = req.query.assetname;
    const FRD_COMP = req.query.comp;
    const FRD_OWNER_CC = req.query.cc;
    const FRD_BOI_PROJ = req.query.boi;
    const FRD_QTY = req.query.qty;
    const FRD_INV_NO = req.query.inv;
    const FRD_ACQ_COST = req.query.cost;
    const FRD_BOOK_VALUE = req.query.val;
    const FRD_CREATE_BY = req.query.by;
    const connect = await oracledb.getConnection(AVO);
    const query = `
    MERGE INTO AVO.FAM_REQ_DETAIL dest
    USING (
        SELECT
            :FRD_FAM_NO AS FRD_FAM_NO,
            :FRD_ASSET_CODE AS FRD_ASSET_CODE,
            :FRD_ASSET_NAME AS FRD_ASSET_NAME,
            :FRD_COMP AS FRD_COMP,
            :FRD_OWNER_CC AS FRD_OWNER_CC,
            :FRD_BOI_PROJ AS FRD_BOI_PROJ,
            :FRD_QTY AS FRD_QTY,
            :FRD_INV_NO AS FRD_INV_NO,
            :FRD_ACQ_COST AS FRD_ACQ_COST,
            :FRD_BOOK_VALUE AS FRD_BOOK_VALUE,
            :FRD_CREATE_BY AS FRD_CREATE_BY
        FROM dual
    ) src
    ON (dest.FRD_FAM_NO = src.FRD_FAM_NO
        AND dest.FRD_ASSET_CODE = src.FRD_ASSET_CODE
        AND dest.FRD_COMP = src.FRD_COMP
    ) 
    WHEN MATCHED THEN
        UPDATE SET
            dest.FRD_ASSET_NAME = src.FRD_ASSET_NAME,
            dest.FRD_OWNER_CC = src.FRD_OWNER_CC,
            dest.FRD_BOI_PROJ = src.FRD_BOI_PROJ,
            dest.FRD_QTY = src.FRD_QTY,
            dest.FRD_INV_NO = src.FRD_INV_NO,
            dest.FRD_ACQ_COST = src.FRD_ACQ_COST,
            dest.FRD_BOOK_VALUE = src.FRD_BOOK_VALUE
    WHEN NOT MATCHED THEN
        INSERT (
            FRD_FAM_NO,
            FRD_ASSET_CODE,
            FRD_ASSET_NAME,
            FRD_COMP,
            FRD_OWNER_CC,
            FRD_BOI_PROJ,
            FRD_QTY,
            FRD_INV_NO,
            FRD_ACQ_COST,
            FRD_BOOK_VALUE,
            FRD_CREATE_DATE,
            FRD_CREATE_BY
        ) VALUES (
            src.FRD_FAM_NO,
            src.FRD_ASSET_CODE,
            src.FRD_ASSET_NAME,
            src.FRD_COMP,
            src.FRD_OWNER_CC,
            src.FRD_BOI_PROJ,
            src.FRD_QTY,
            src.FRD_INV_NO,
            src.FRD_ACQ_COST,
            src.FRD_BOOK_VALUE,
            SYSDATE,
            src.FRD_CREATE_BY
        )
    
    `;
    // INSERT INTO AVO.FAM_REQ_DETAIL
    // (FRD_FAM_NO,FRD_ASSET_CODE,FRD_ASSET_NAME,FRD_COMP,
	  // FRD_OWNER_CC,FRD_BOI_PROJ,FRD_QTY,FRD_INV_NO,FRD_ACQ_COST,FRD_BOOK_VALUE,FRD_CREATE_DATE,FRD_CREATE_BY)
    // VALUES(:FRD_FAM_NO,:FRD_ASSET_CODE,:FRD_ASSET_NAME,:FRD_COMP,
    //   :FRD_OWNER_CC,:FRD_BOI_PROJ,:FRD_QTY ,:FRD_INV_NO,:FRD_ACQ_COST,
    //   :FRD_BOOK_VALUE,SYSDATE,:FRD_CREATE_BY)
    const data = {
      FRD_FAM_NO,
      FRD_ASSET_CODE,
      FRD_ASSET_NAME,
      FRD_COMP,
      FRD_OWNER_CC,
      FRD_BOI_PROJ,
      FRD_QTY,
      FRD_INV_NO,
      FRD_ACQ_COST,
      FRD_BOOK_VALUE,
      FRD_CREATE_BY,
    };
console.log(query, data)
    const result = await connect.execute(query, data, { autoCommit: true });
    
    connect.release();
    res.json(result);
  } catch (error) {
    console.error("Error in querying data:", error.message);
    res.status(500).send("Internal Server Error");
  }
};
