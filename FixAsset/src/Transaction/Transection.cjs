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
    const userlogin = req.query.UserLogin;
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
  LEFT JOIN FAM_REQ_TRANSFER A ON A.FRT_FAM_NO = T.FRH_FAM_NO 
  WHERE  (T.FAM_REQ_BY = '${userlogin}'
    OR (T.FAM_MGR_DEPT = '${userlogin}' AND T.FAM_REQ_STATUS = 'FLTR002')
    OR (T.FAM_SERVICE_BY  = '${userlogin}'  AND T.FAM_REQ_STATUS = 'FLTR003')
    OR (T.FAM_BOI_CHK_BY  = '${userlogin}'  AND T.FAM_REQ_STATUS = 'FLTR004')
    OR (T.FAM_BOI_MGR_BY  = '${userlogin}'  AND T.FAM_REQ_STATUS = 'FLTR005')
    OR (T.FAM_FM_BY  = '${userlogin}'  AND T.FAM_REQ_STATUS = 'FLTR006')
    OR (T.FAM_ACC_CHK_BY  = '${userlogin}'  AND T.FAM_REQ_STATUS = 'FLTR007')
    OR (T.FAM_OWNER_SEND_BY  = '${userlogin}'  AND T.FAM_REQ_STATUS = 'FLTR008')
    OR ( A.FRT_RECEIVE_BY  = '${userlogin}'  AND T.FAM_REQ_STATUS = 'FLTR009')
    OR (T.FAM_ACC_REC_BY  = '${userlogin}'  AND T.FAM_REQ_STATUS = 'FLTR010')
    OR (T.FAM_ACC_MGR_BY  = '${userlogin}'  AND T.FAM_REQ_STATUS = 'FLTR011')
    OR (T.FAM_SERVICE_CLOSE_BY  = '${userlogin}'  AND T.FAM_REQ_STATUS = 'FLTR0012'))
    AND (T.FAM_FACTORY = '${factory}' OR '${factory}' IS NULL)
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
  try {
    console.log("----");
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
    console.log(Tranfer_id);
    console.log(Remark);
    console.log("////");
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
    console.log(query);
    console.log(data);
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
    console.log(query, data);
    const result = await connect.execute(query, data, { autoCommit: true });

    connect.release();
    res.json(result);
  } catch (error) {
    console.error("Error in querying data:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

// FROM_BOI_PROJ (UPDATE ค่า From_BOI )
module.exports.ins_from_Boi = async function (req, res) {
  try {
    const Tranfer_id = req.query.running_no;
    const from = req.query.from_boi;

    const connect = await oracledb.getConnection(AVO);
    const query = `
    UPDATE FAM_REQ_TRANSFER 
    SET FRT_FROM_PROJ  = :boi_from 
    WHERE FRT_FAM_NO = :running
`;
    const data = {
      running: Tranfer_id,
      boi_from: from,
    };
    const result = await connect.execute(query, data, { autoCommit: true });
    connect.release();
    res.json(result);
  } catch (error) {
    console.error("Error in querying data:", error.message);
    res.status(500).send("Internal Server Error");
  }
};
//Select ข้อมูลส่วนของ Transfer Detail
module.exports.select_BOI_from = async function (req, res) {
  try {
    const running = req.query.running_no;
    const connect = await oracledb.getConnection(AVO);
    const query = `
    SELECT FRT_FROM_PROJ  FROM FAM_REQ_TRANSFER frt
      WHERE FRT_FAM_NO = '${running}' `;
    const result = await connect.execute(query);
    connect.release();
    // console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
};
// new Owner
module.exports.new_owner = async function (req, res) {
  try {
    const Fac = req.query.fac;
    const CC = req.query.cc;
    const connect = await oracledb.getConnection(AVO);
    const query = `
    SELECT
    M.USER_EMP_ID ||' : ' ||T.FPM_USER_LOGIN  AS NEW_OWNER
    FROM FAM_PERSON_MASTER T
    INNER JOIN CUSR.CU_USER_M M ON 
    M.USER_LOGIN = T.FPM_USER_LOGIN
    WHERE T.FPM_LEVEL = 'GP02001'
    AND T.FPM_FACTORY = '${Fac}'
    AND T.FPM_CC = '${CC}'
    AND T.FPM_PERSON_STS = 'A' `;
    const result = await connect.execute(query);
    connect.release();
    // console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
};
// cc มี ALL
module.exports.cc = async function (req, res) {
  try {
    const connect = await oracledb.getConnection(AVO);
    const query = `
    SELECT DISTINCT T.CC_CTR, T.CC_DESC,1
    FROM CUSR.CU_MFGPRO_CC_MSTR T 
    WHERE T.CC_ACTIVE = '1'
    UNION ALL
    SELECT 'ALL' AS CC_CTR, 'ALL' AS CC_DESC,0
    FROM DUAL
    ORDER BY  1
         `;
    const result = await connect.execute(query);
    connect.release();
    // console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
};
// D7 Department Manager
module.exports.level_mana = async function (req, res) {
  try {
    const Level = req.query.level;
    const CC = req.query.cc;
    const connect = await oracledb.getConnection(AVO);
    const query = `
    SELECT T.FPM_USER_LOGIN FROM FAM_PERSON_MASTER T 
    WHERE T.FPM_LEVEL = 'GP02002'
    AND T.FPM_FACTORY = '${Level}'
    AND T.FPM_CC = '${CC}'
    AND T.FPM_PERSON_STS = 'A'
         `;
    const result = await connect.execute(query);
    connect.release();
    // console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
};
// D8 Service By
module.exports.service_by = async function (req, res) {
  try {
    const Level = req.query.level;
    const CC = req.query.cc;
    const connect = await oracledb.getConnection(AVO);
    const query = `
    SELECT T.FPM_USER_LOGIN FROM FAM_PERSON_MASTER T 
    WHERE T.FPM_LEVEL = 'GP02003'
    AND T.FPM_FACTORY = '${Level}'
    AND T.FPM_CC = '${CC}'
    AND T.FPM_PERSON_STS = 'A'
         `;
    const result = await connect.execute(query);
    connect.release();
    // console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
};
// D9 BOI Staff
module.exports.boi_staff = async function (req, res) {
  try {
    const Fac = req.query.fac;
    const connect = await oracledb.getConnection(AVO);
    const query = `
    SELECT T.FPM_USER_LOGIN 
    FROM FAM_PERSON_MASTER T 
    WHERE T.FPM_LEVEL = 'GP02004'
    AND T.FPM_FACTORY = '${Fac}' 
    AND T.FPM_CC = 'ALL' 
    AND T.FPM_PERSON_STS = 'A'
    ORDER BY T.FPM_PRIORITY,T.FPM_USER_LOGIN
    
         `;
    const result = await connect.execute(query);
    connect.release();
    // console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
};
//D10 BOI Manager
module.exports.boi_manager = async function (req, res) {
  try {
    const Fac = req.query.fac;
    const connect = await oracledb.getConnection(AVO);
    const query = `
    SELECT T.FPM_USER_LOGIN 
    FROM FAM_PERSON_MASTER T 
    WHERE T.FPM_LEVEL = 'GP02005'
    AND T.FPM_FACTORY = '${Fac}'
    AND T.FPM_CC = 'ALL' 
    AND T.FPM_PERSON_STS = 'A'
    ORDER BY T.FPM_PRIORITY,T.FPM_USER_LOGIN
         `;
    const result = await connect.execute(query);
    connect.release();
    // console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
};
// D11 Factory Manager
module.exports.fac_manager = async function (req, res) {
  try {
    const Fac = req.query.fac;
    const connect = await oracledb.getConnection(AVO);
    const query = `
    SELECT T.FPM_USER_LOGIN 
    FROM FAM_PERSON_MASTER T
    WHERE T.FPM_LEVEL = 'GP02006' 
    AND T.FPM_FACTORY =  '${Fac}'  
    AND T.FPM_CC = 'ALL' AND T.FPM_PERSON_STS = 'A'
    ORDER BY T.FPM_PRIORITY,T.FPM_USER_LOGIN
         `;
    const result = await connect.execute(query);
    connect.release();
    // console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
};
// D12 ACC Check
module.exports.acc_check = async function (req, res) {
  try {
    const Fac = req.query.fac;
    const connect = await oracledb.getConnection(AVO);
    const query = `
    SELECT T.FPM_USER_LOGIN 
    FROM FAM_PERSON_MASTER T 
    WHERE T.FPM_LEVEL = 'GP02007'
    AND T.FPM_FACTORY = ${Fac} 
    AND T.FPM_CC = 'ALL' AND T.FPM_PERSON_STS = 'A'
    ORDER BY T.FPM_PRIORITY,T.FPM_USER_LOGIN

         `;
    const result = await connect.execute(query);
    connect.release();
    // console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
};
//D13 ACC Manager
module.exports.acc_manager = async function (req, res) {
  try {
    const Fac = req.query.fac;
    const connect = await oracledb.getConnection(AVO);
    const query = `
    SELECT T.FPM_USER_LOGIN 
    FROM FAM_PERSON_MASTER T
     WHERE T.FPM_LEVEL = 'GP02012' 
     AND T.FPM_FACTORY = '${Fac}'
     AND T.FPM_CC = 'ALL' 
     AND T.FPM_PERSON_STS = 'A'
    ORDER BY T.FPM_PRIORITY,T.FPM_USER_LOGIN

         `;
    const result = await connect.execute(query);
    connect.release();
    // console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
  }
};
//INSERT_TRANSFER_DETAILS
// module.exports.ins_transfer = async function (req, res) {
//   try {
//     const FAM_NO = req.query.running_no;
//     const Date_plan1 = req.query.date_plan;
//     const Factory = req.query.fac;
//     const CC = req.query.cc;
//     const To = req.query.to_proj;
//     const Receive_By = req.query.by;
//     const Tel = req.query.tel;
//     const Status = req.query.status;
//     const Abnormal = req.query.abnormal;

//     // Declare the connect variable
//     const connect = await oracledb.getConnection(AVO);

//     // Log values
//     console.log(FAM_NO);
//     console.log(Date_plan1);
//     console.log(Factory);
//     console.log(CC);
//     console.log(To);
//     console.log(Receive_By);
//     console.log(Tel);
//     console.log(Status);

//     const query = `
//       UPDATE FAM_REQ_TRANSFER F
//       SET
//       F.FRT_PLAN_MOVE_DATE = TO_DATE(:date_plan1, 'YYYY-MM-DD'),
//         F.FRT_TO_FACTORY = :factory,
//         F.FRT_TO_CC = :cc_tran,
//         F.FRT_TO_PROJ = :to,
//         F.FRT_RECEIVE_BY = :receive_by,
//         F.FRT_RECEIVE_DATE = SYSDATE,
//         F.FRT_RECEIVER_TEL = :tel_tran,
//         F.FRT_ABNORMAL_STS = :status_tran,
//         F.FRT_ABNORMAL_REASON = :abnormal_remark
//       WHERE F.FRT_FAM_NO = :fam_no
//     `;

//     const data = {
//       fam_no: FAM_NO,
//       date_plan1: Date_plan1,
//       factory: Factory,
//       cc_tran: CC,
//       to:To,
//       receive_by: Receive_By,
//       tel_tran: Tel,
//       status_tran: Status,
//       abnormal_remark: Abnormal
//     };

//     // Execute the query
//     const result = await connect.execute(query, data, { autoCommit: true });
//     console.log('Rows updated:', result.rowsAffected);

//     connect.release();
//     res.json(result);
//   } catch (error) {
//     console.error("Error in querying data:", error.message);
//     res.status(500).send("Internal Server Error");
//   }
// };
module.exports.ins_transfer = async function (req, res) {
  try {
    const FAM_NO = req.query.running_no;
    const Date_plan1 = req.query.date_plan;
    const Factory = req.query.fac;
    const CC = req.query.cc;
    const To_TRANS = req.query.to_proj;
    const Receive_By = req.query.by;
    const Tel = req.query.tel;
    const Status = req.query.status;
    const Abnormal = req.query.abnormal;
    const connect = await oracledb.getConnection(AVO);
    const query = `
    UPDATE FAM_REQ_TRANSFER F
    SET
      F.FRT_PLAN_MOVE_DATE = TO_DATE(:date_plan1, 'YYYY-MM-DD'),
      F.FRT_TO_FACTORY = :factory,
      F.FRT_TO_CC = :cc_tran,
      F.FRT_TO_PROJ = :to_tran,
      F.FRT_RECEIVE_BY = :receive_by,
      F.FRT_RECEIVE_DATE = SYSDATE,
      F.FRT_RECEIVER_TEL = :tel_tran,
      F.FRT_ABNORMAL_STS = :status_tran,
      F.FRT_ABNORMAL_REASON = :abnormal_remark
    WHERE F.FRT_FAM_NO = :fam_no
    `;

    const data = {
      fam_no: FAM_NO,
      date_plan1: Date_plan1,
      factory: Factory,
      cc_tran: CC,
      to_tran: To_TRANS,
      receive_by: Receive_By,
      tel_tran: Tel,
      status_tran: Status,
      abnormal_remark: Abnormal,
    };
    console.log(query);
    console.log(data);

    // Execute the query
    const result = await connect.execute(query, data, { autoCommit: true });

    if (result) {
      console.log("Rows updated:", result.rowsAffected);
      res.json(result);
    } else {
      console.error("Error: Unexpected result from the database");
      res.status(500).send("Internal Server Error");
    }

    connect.release();
  } catch (error) {
    console.error("Error in querying data:", error.message);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
};
// ROUTING
// module.exports.routing_tran = async function (req, res) {
//   try {
//     const FAM_NO = req.query.running_no;
//     const MGR_DEPT = req.query.m_dept;
//     const MGR_JUD = req.query.m_jud;
//     const MGR_DATE = req.query.m_date;
//     const MGR_CMMT = req.query.m_cmmt;
//     const SERVICE_DEPT = req.query.s_dept;
//     const SERVICE_TEL = req.query.s_tel;
//     const SERVICE_BY = req.query.s_by;
//     const SERVICE_JUD = req.query.s_jud;
//     const SERVICE_DATE = req.query.s_date;
//     const SERVICE_CMMT = req.query.s_cmmt;
//     const BOI_CHK_BY = req.query.chk_by;
//     const BOI_CHK_JUD = req.query.chk_jud;
//     const BOI_CHK_DATE = req.query.chk_date;
//     const BOI_CHK_CMMT = req.query.chk_cmmt;
//     const BOI_MGR_BY = req.query.boi_by;
//     const BOI_MGR_JUD = req.query.boi_jud;
//     const BOI_MGR_DATE = req.query.boi_date;
//     const BOI_MGR_CMMT = req.query.boi_cmmt;
//     const FM_BY = req.query.fmby;
//     const FM_JUD = req.query.fmjud;
//     const FM_DATE = req.query.fmdate;
//     const FM_CMMT = req.query.fmcmmt;
//     const ACC_CHK_BY = req.query.acc_by;
//     const ACC_CHK_JUD = req.query.acc_jud;
//     const ACC_CHK_DATE = req.query.acc_date;
//     const ACC_CHK_CMMT = req.query.acc_cmmt;
//     const OWNER_SEND_BY = req.query.own_by;
//     const OWNER_SEND_JUD= req.query.own_jud;
//     const OWNER_SEND_DATE = req.query.own_date;
//     const OWNER_SEND_CMMT= req.query.own_cmmt;

//     const connect = await oracledb.getConnection(AVO);
//     const query = `
//     UPDATE FAM_REQ_HEADER H
//     SET
//          H.FAM_MGR_DEPT  = :FAM_MGR_DEPT,
//          H.FAM_MGR_JUD =:FAM_MGR_JUD,
//          H.FAM_MGR_DATE  = :FAM_MGR_DATE,
//          H.FAM_MGR_CMMT = :FAM_MGR_CMMT,
//          H.FAM_SERVICE_DEPT = :FAM_SERVICE_DEPT,
//          H.FAM_SERVICE_TEL =:FAM_SERVICE_TEL,
//          H.FAM_SERVICE_BY =:FAM_SERVICE_BY ,
//          H.FAM_SERVICE_JUD= :FAM_SERVICE_JUD,
//          H.FAM_SERVICE_DATE = :FAM_SERVICE_DATE,
//          H.FAM_SERVICE_CMMT = :FAM_SERVICE_CMMT,
//          H.FAM_BOI_CHK_BY =:FAM_BOI_CHK_BY,
//          H.FAM_BOI_CHK_JUD =:FAM_BOI_CHK_JUD,
//          H.FAM_BOI_CHK_DATE =:FAM_BOI_CHK_DATE,
//          H.FAM_BOI_CHK_CMMT =:FAM_BOI_CHK_CMMT,
//          H.FAM_BOI_MGR_BY =:FAM_BOI_MGR_BY,
//          H.FAM_BOI_MGR_JUD =:FAM_BOI_MGR_JUD,
//          H.FAM_BOI_MGR_DATE =:FAM_BOI_MGR_DATE,
//          H.FAM_BOI_MGR_CMMT =:FAM_BOI_MGR_CMMT,
//          H.FAM_FM_BY =:FAM_FM_BY,
//          H.FAM_FM_JUD =:FAM_FM_JUD,
//          H.FAM_FM_DATE =:FAM_FM_DATE,
//          H.FAM_FM_CMMT =:FAM_FM_CMMT,
//          H.FAM_ACC_CHK_BY =:FAM_ACC_CHK_BY,
//          H.FAM_ACC_CHK_JUD =:FAM_ACC_CHK_JUD,
//          H.FAM_ACC_CHK_DATE =:FAM_ACC_CHK_DATE,
//          H.FAM_ACC_CHK_CMMT =:FAM_ACC_CHK_CMMT,
//          H.FAM_OWNER_SEND_BY =:FAM_OWNER_SEND_BY,
//          H.FAM_OWNER_SEND_JUD =:FAM_OWNER_SEND_JUD,
//          H.FAM_OWNER_SEND_DATE =:FAM_OWNER_SEND_DATE,
//          H.FAM_OWNER_SEND_CMMT =:FAM_OWNER_SEND_CMMT
//       WHERE H.FRH_FAM_NO= :FRH_FAM_NO
//     `;

//     const data = {
//       FRH_FAM_NO: FAM_NO,
//       FAM_MGR_DEPT: MGR_DEPT,
//       FAM_MGR_JUD: MGR_JUD,
//       FAM_MGR_DATE: MGR_DATE,
//       FAM_MGR_CMMT: MGR_CMMT,
//       FAM_SERVICE_DEPT: SERVICE_DEPT,
//       FAM_SERVICE_TEL: SERVICE_TEL,
//       FAM_SERVICE_BY: SERVICE_BY,
//       FAM_SERVICE_JUD: SERVICE_JUD,
//       FAM_SERVICE_DATE: SERVICE_DATE,
//       FAM_SERVICE_CMMT: SERVICE_CMMT,
//       FAM_BOI_CHK_BY: BOI_CHK_BY,
//       FAM_BOI_CHK_JUD: BOI_CHK_JUD,
//       FAM_BOI_CHK_DATE: BOI_CHK_DATE,
//       FAM_BOI_CHK_CMMT: BOI_CHK_CMMT,
//       FAM_BOI_MGR_BY: BOI_MGR_BY,
//       FAM_BOI_MGR_JUD: BOI_MGR_JUD,
//       FAM_BOI_MGR_DATE: BOI_MGR_DATE,
//       FAM_BOI_MGR_CMMT: BOI_MGR_CMMT,
//       FAM_FM_BY: FM_BY,
//       FAM_FM_JUD: FM_JUD,
//       FAM_FM_DATE: FM_DATE,
//       FAM_FM_CMMT: FM_CMMT,
//       FAM_ACC_CHK_BY: ACC_CHK_BY,
//       FAM_ACC_CHK_JUD: ACC_CHK_JUD,
//       FAM_ACC_CHK_DATE: ACC_CHK_DATE,
//       FAM_ACC_CHK_CMMT: ACC_CHK_CMMT,
//       FAM_OWNER_SEND_BY: OWNER_SEND_BY,
//       FAM_OWNER_SEND_JUD: OWNER_SEND_JUD,
//       FAM_OWNER_SEND_DATE: OWNER_SEND_DATE,
//       FAM_OWNER_SEND_CMMT: OWNER_SEND_CMMT

//     };
//     console.log(query)
//     console.log(data)

//     // Execute the query
//     const result = await connect.execute(query, data, { autoCommit: true });

//     if (result) {
//       console.log('Rows updated:', result.rowsAffected);
//       res.json(result);
//     } else {
//       console.error('Error: Unexpected result from the database');
//       res.status(500).send('Internal Server Error');
//     }

//     connect.release();
//   } catch (error) {
//     console.error('Error in querying data:', error.message);
//     res.status(500).send(`Internal Server Error: ${error.message}`);
//   }
// };

//ROUTING_For_request
module.exports.routing_tran = async function (req, res) {
  try {
    const FAM_NO = req.query.running_no;
    const MGR_DEPT = req.query.m_dept;
    const SERVICE_DEPT = req.query.s_dept;
    const SERVICE_TEL = req.query.s_tel;
    const SERVICE_BY = req.query.s_by;
    const BOI_CHK_BY = req.query.chk_by;
    const BOI_MGR_BY = req.query.boi_by;
    const FM_BY = req.query.fmby;
    const ACC_CHK_BY = req.query.acc_by;
    const OWNER_SEND_BY = req.query.own_by;

    const connect = await oracledb.getConnection(AVO);
    const query = `
    UPDATE FAM_REQ_HEADER H
    SET
         H.FAM_MGR_DEPT  = :FAM_MGR_DEPT,
         H.FAM_SERVICE_DEPT = :FAM_SERVICE_DEPT,
         H.FAM_SERVICE_TEL =:FAM_SERVICE_TEL,
         H.FAM_SERVICE_BY =:FAM_SERVICE_BY ,
         H.FAM_BOI_CHK_BY =:FAM_BOI_CHK_BY,
         H.FAM_BOI_MGR_BY =:FAM_BOI_MGR_BY,
         H.FAM_FM_BY =:FAM_FM_BY,
         H.FAM_ACC_CHK_BY =:FAM_ACC_CHK_BY,
         H.FAM_OWNER_SEND_BY =:FAM_OWNER_SEND_BY
      WHERE H.FRH_FAM_NO= :FRH_FAM_NO
    `;

    const data = {
      FRH_FAM_NO: FAM_NO,
      FAM_MGR_DEPT: MGR_DEPT,
      FAM_SERVICE_DEPT: SERVICE_DEPT,
      FAM_SERVICE_TEL: SERVICE_TEL,
      FAM_SERVICE_BY: SERVICE_BY,
      FAM_BOI_CHK_BY: BOI_CHK_BY,
      FAM_BOI_MGR_BY: BOI_MGR_BY,
      FAM_FM_BY: FM_BY,
      FAM_ACC_CHK_BY: ACC_CHK_BY,
      FAM_OWNER_SEND_BY: OWNER_SEND_BY,
    };
    console.log(query);
    console.log(data);

    // Execute the query
    const result = await connect.execute(query, data, { autoCommit: true });

    if (result) {
      console.log("Rows updated:", result.rowsAffected);
      res.json(result);
    } else {
      console.error("Error: Unexpected result from the database");
      res.status(500).send("Internal Server Error");
    }

    connect.release();
  } catch (error) {
    console.error("Error in querying data:", error.message);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
};

//Receiver for Tranfers
module.exports.receiver_tranfer = async function (req, res) {
  try {
    console.log("g-hkkkkkkkkkkkkk");
    const { famno, receiver } = req.body;
    console.log(famno, receiver);

    const connect = await oracledb.getConnection(AVO);
    const query = `
    UPDATE FAM_REQ_TRANSFER  T
    SET
    T.FRT_RECEIVE_BY  = :FRT_RECEIVE_BY
    WHERE T.FRT_FAM_NO= :FRT_FAM_NO
    `;

    const data = {
      FRT_FAM_NO: famno,
      FRT_RECEIVE_BY: receiver,
    };
    console.log(query);
    console.log(data);

    // Execute the query
    const result = await connect.execute(query, data, { autoCommit: true });

    if (result) {
      console.log("Rows updated:", result.rowsAffected);
      res.json(result);
    } else {
      console.error("Error: Unexpected result from the database");
      res.status(500).send("Internal Server Error");
    }

    connect.release();
  } catch (error) {
    console.error("Error in querying data:", error.message);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
};

// get show data edit request
module.exports.getEdit_Request_Show = async function (req, res) {
  try {
    const fam_no = req.query.FamNo;

    const connect = await oracledb.getConnection(AVO);
    const query = `
    SELECT T.FRH_FAM_NO ,
           TO_CHAR(T.FAM_REQ_DATE, 'DD/MM/YYYY') AS FAM_REQ_DATE,
		       T.FAM_REQ_BY ,
		       T.FAM_REQ_TEL ,
           T.FAM_FACTORY ,
           T.FAM_REQ_CC ,
           T.FAM_REQ_DEPT ,
           T.FAM_REQ_TYPE ,
           T.FAM_ASSET_GROUP, 
           T.FAM_ASSET_CC, 
           T.FAM_REQ_STATUS, 
           T.FAM_REQ_REMARK
     FROM FAM_REQ_HEADER T 
     WHERE T.FRH_FAM_NO = :fam_no
    `;
    const data = {
      fam_no,
    };

    const result = await connect.execute(query, data, { autoCommit: true });
    connect.release();
    // res.json(result);
    res.json(result.rows);
    console.log(result);
  } catch (error) {
    console.error("Error in querying data:", error.message);
    res.status(500).send("Internal Server Error");
  }
};
