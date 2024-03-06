
// get level
module.exports.level_person_maintain = async function (req, res) {
    try {
      const connect = await oracledb.getConnection(AVO);
      const query = `
      SELECT T.FCM_CODE,t.fcm_desc 
      FROM FAM_CODE_MASTER T 
      WHERE T.FCM_GROUP_ID = 'GP02' 
      AND T.FCM_STATUS = 'A' 
      ORDER BY T.FCM_SORT,T.FCM_DESC
             `;
      const result = await connect.execute(query);
      connect.release();
      res.json(result.rows);
    } catch (error) {
      console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
    }
  };
  
      /// get show data user login Person maintain
  module.exports.getData_UserLogin_Person = async function (req, res) {
    try {
      const User_login = req.query.User_Login;
      const connect = await oracledb.getConnection(CUSR);
      const query = `
      SELECT '(' || H.EMPCODE || ') ' || H.ENAME || ' ' || H.ESURNAME AS ENAME,T.USER_EMAIL
      FROM CUSR.CU_USER_HUMANTRIX H, CUSR.CU_USER_M T
      WHERE H.EMPCODE = T.USER_EMP_ID
      AND UPPER(T.USER_LOGIN) = UPPER(:User_login)
      `;
      const data = {
        User_login,
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
  // insert person maintian
  module.exports.insertPerson_Maintain = async function (req, res) {
    try {
      const fam_person_fctory = req.query.FPM_factory;
      const fam_person_level = req.query.FPM_level;
      const fam_person_cost_center = req.query.FPM_cost_center;
      const fam_person_user_login = req.query.FPM_user_login;
      const fam_person_email = req.query.FPM_email;
      const fam_person_status = req.query.FPM_status;
      const fam_person_create_by = req.query.FPM_create_by;
      const fam_person_update_by = req.query.FPM_update_by;
  
      console.log(fam_person_fctory);
      console.log(fam_person_level);
      console.log(fam_person_cost_center);
      console.log(fam_person_user_login);
      console.log(fam_person_email);
      console.log(fam_person_status);
      console.log(fam_person_create_by);
      console.log(fam_person_update_by);
  
      const connect = await oracledb.getConnection(AVO);
      const query = `
      
      INSERT INTO FAM_PERSON_MASTER (FPM_FACTORY, FPM_LEVEL, FPM_CC, FPM_USER_LOGIN, FPM_PERSON_STS, FPM_EMAIL, FPM_CREATE_BY, FPM_CREATE_DATE, FPM_UPDATE_BY, FPM_UPDATE_DATE)
      VALUES (:fam_person_fctory, :fam_person_level, :fam_person_cost_center, :fam_person_user_login, :fam_person_status, :fam_person_email, :fam_person_create_by, SYSDATE, :fam_person_update_by, SYSDATE)
  
           `;
      const data = {
        fam_person_fctory,
        fam_person_level,
        fam_person_cost_center,
        fam_person_user_login,
        fam_person_status,
        fam_person_email,
        fam_person_create_by,
        fam_person_update_by,
      };
      const result = await connect.execute(query, data, { autoCommit: true });
      console.log(query);
      connect.release();
      // console.log(result.rows);
      res.json(result.rows);
    } catch (error) {
      console.error("ข้อผิดพลาดในการบันทึกข้อมูล:", error.message);
    }
  };
  
  // update person maintian
  module.exports.updatePerson_Maintain = async function (req, res) {
    try {
      const fam_person_fctory = req.query.FPM_factory;
      const fam_person_level = req.query.FPM_level;
      const fam_person_cost_center = req.query.FPM_cost_center;
      const fam_person_user_login = req.query.FPM_user_login;
      const fam_person_email = req.query.FPM_email;
      const fam_person_status = req.query.FPM_status;
      const fam_person_update_by = req.query.FPM_update_by;
  
      console.log(fam_person_fctory);
      console.log(fam_person_level);
      console.log(fam_person_cost_center);
      console.log(fam_person_user_login);
      console.log(fam_person_email);
      console.log(fam_person_status);
      console.log(fam_person_update_by);
  
      const connect = await oracledb.getConnection(AVO);
      const query = `
      UPDATE
      FAM_PERSON_MASTER
    SET
      FPM_EMAIL = :fam_person_email,
      FPM_PERSON_STS = :fam_person_status,
      FPM_UPDATE_BY = :fam_person_update_by,
      FPM_UPDATE_DATE = SYSDATE
    WHERE
      FPM_FACTORY = :fam_person_fctory
      AND FPM_LEVEL = :fam_person_level
      AND FPM_CC = :fam_person_cost_center
      AND FPM_USER_LOGIN = :fam_person_user_login
           `;
      const data = {
        fam_person_fctory,
        fam_person_level,
        fam_person_cost_center,
        fam_person_user_login,
        fam_person_status,
        fam_person_email,
        fam_person_update_by,
      };
      const result = await connect.execute(query, data, { autoCommit: true });
      console.log(query);
      connect.release();
      // console.log(result.rows);
      res.json(result.rows);
    } catch (error) {
      console.error("ข้อผิดพลาดในการบันทึกข้อมูล:", error.message);
    }
  };
  
  //Search person maintain
  module.exports.search_person_maintain = async function (req, res) {
    try {
      const factory = req.query.FPM_factory;
      const level = req.query.FPM_level;
      const cost_center = req.query.FPM_cost_center;
      const user_login = req.query.FPM_user_login;
      console.log("F", factory);
      console.log("L", level);
      console.log("C", cost_center);
      console.log("U", user_login);
      const connect = await oracledb.getConnection(AVO);
      const query = `
      SELECT DISTINCT 
        C.FACTORY_NAME AS FACTORY, 
        T.FPM_FACTORY AS FACTORY_CC,	
             CM.FCM_DESC AS LEVEL_DESC ,
             T.FPM_LEVEL  AS LEVEL_CC,
             CMCC.CC_DESC  AS COST_CENTER,
             T.FPM_CC AS COST_CENTER_CC,
             T.FPM_USER_LOGIN , 
        (SELECT
          '(' || HH.EMPCODE || ') ' || HH.ENAME || ' ' || HH.ESURNAME AS ENAME
          FROM CUSR.CU_USER_HUMANTRIX HH, CUSR.CU_USER_M TE 		
          WHERE HH.EMPCODE = TE.USER_EMP_ID
            AND UPPER(TE.USER_LOGIN) = UPPER(T.FPM_USER_LOGIN)) AS NAME_SURNAME,
        T.FPM_EMAIL, 
        CASE 
          WHEN T.FPM_PERSON_STS = 'A' THEN 'Active'
          WHEN T.FPM_PERSON_STS = 'I' THEN 'In Active'
          ELSE T.FPM_PERSON_STS 
        END AS PERSON_STATUS,
        T.FPM_UPDATE_BY, 
        TO_CHAR(T.FPM_UPDATE_DATE, 'DD/MM/YYYY') AS UPDATE_DATE
      FROM 
        FAM_PERSON_MASTER T
      LEFT JOIN 
        CUSR.CU_FACTORY_M C ON C.FACTORY_CODE = T.FPM_FACTORY 
      LEFT JOIN 
        FAM_CODE_MASTER CM ON CM.FCM_CODE = T.FPM_LEVEL 
      LEFT JOIN 
        CUSR.CU_MFGPRO_CC_MSTR CMCC ON CMCC.CC_CTR = T.FPM_CC 
      WHERE 
        (T.FPM_FACTORY = '${factory}' OR '${factory}' IS NULL)
        AND (T.FPM_LEVEL = '${level}' OR '${level}' IS NULL)
        AND (TRIM(T.FPM_CC) = '${cost_center}' OR '${cost_center}' IS NULL)
        AND (UPPER(T.FPM_USER_LOGIN) = UPPER('${user_login}') OR UPPER('${user_login}') IS NULL)
        ORDER BY  C.FACTORY_NAME,CM.FCM_DESC,CMCC.CC_DESC,T.FPM_USER_LOGIN DESC
      `;
  
      const result = await connect.execute(query);
      connect.release();
      res.json(result.rows);
      console.log(result);
    } catch (error) {
      console.error("Error in querying data:", error.message);
      res.status(500).send("Internal Server Error");
    }
  };
  
  // get show data edit person
  module.exports.getEdit_Person_Show = async function (req, res) {
    try {
      const factory = req.query.FPM_factory;
      const level = req.query.FPM_level;
      const cost_center = req.query.FPM_cost_center;
      const user_login = req.query.FPM_user_login;
      console.log("F", factory);
      console.log("L", level);
      console.log("C", cost_center);
      console.log("U", user_login);
      const connect = await oracledb.getConnection(AVO);
      const query = `
      SELECT DISTINCT   
      T.FPM_FACTORY,
      CU.FACTORY_NAME,
      T.FPM_LEVEL,
      FCM.FCM_DESC ,
      T.FPM_CC ,
      CTM.CC_DESC ,
      T.FPM_USER_LOGIN,
       T.FPM_EMAIL,
      T.FPM_PERSON_STS,
      T.FPM_CREATE_BY,
      TO_CHAR(T.FPM_CREATE_DATE , 'DD/MM/YYYY') AS FPM_CREATE_DATE_E,
      T.FPM_UPDATE_BY,
      TO_CHAR(T.FPM_UPDATE_DATE , 'DD/MM/YYYY') AS FPM_UPDATE_DATE_E
  FROM FAM_PERSON_MASTER T 
      LEFT JOIN CUSR.CU_FACTORY_M CU ON CU.FACTORY_CODE = T.FPM_FACTORY 
      LEFT JOIN FAM_CODE_MASTER FCM ON FCM.FCM_CODE = T.FPM_LEVEL 
      LEFT JOIN CUSR.CU_MFGPRO_CC_MSTR CTM ON CTM.CC_CTR =  T.FPM_CC 
  WHERE T.FPM_FACTORY = '${factory}'
  AND T.FPM_LEVEL = '${level}'
  AND T.FPM_CC = '${cost_center}'
  AND T.FPM_USER_LOGIN = '${user_login}'
      `;
      const result = await connect.execute(query);
      connect.release();
      const flatArray = result.rows.map((item) => Object.values(item)).flat();
      res.json(flatArray);
      console.log("เช็คดูรอบที่ 1",result);
      console.log("เช็คดูรอบที่ 2",flatArray);
    } catch (error) {
      console.error("Error in querying data:", error.message);
      res.status(500).send("Internal Server Error");
    }
  };
  
  // Delete Person Maintain
  module.exports.deletePerson_Maintain = async function (req, res) {
    try {
      const fam_person_fctory_delete = req.query.FPM_factory_delete;
      const fam_person_level_delete = req.query.FPM_level_delete;
      const fam_person_cost_center_delete = req.query.FPM_cost_center_delete;
      const fam_person_user_login_delete = req.query.FPM_user_login_delete;
  
      console.log(fam_person_fctory_delete);
      console.log(fam_person_level_delete);
      console.log(fam_person_cost_center_delete);
      console.log(fam_person_user_login_delete);
  
      const connect = await oracledb.getConnection(AVO);
      const query = `
      DELETE FROM FAM_PERSON_MASTER T
      WHERE T.FPM_FACTORY = :fam_person_fctory_delete
        AND T.FPM_LEVEL = :fam_person_level_delete 
        AND T.FPM_CC = :fam_person_cost_center_delete
        AND T.FPM_USER_LOGIN = :fam_person_user_login_delete
           `;
      const data = {
        fam_person_fctory_delete,
        fam_person_level_delete,
        fam_person_cost_center_delete,
        fam_person_user_login_delete,
      };
      const result = await connect.execute(query, data, { autoCommit: true });
      console.log(query);
      connect.release();
      // console.log(result.rows);
      res.json(result.rows);
    } catch (error) {
      console.error("ข้อผิดพลาดในการบันทึกข้อมูล:", error.message);
    }
  };
  
  
  //BOI Project 
  module.exports.get_BOI_project = async function (req, res) {
    try {
      const connect = await oracledb.getConnection(AVO);
      const query = `
      SELECT
          DISTINCT T.FBMC_BOI_PROJ
      FROM
          FAM_BOIPROJ_MAP_CC T
      ORDER BY
          T.FBMC_BOI_PROJ
           `;
      const result = await connect.execute(query);
      connect.release();
      res.json(result.rows);
    } catch (error) {
      console.error("ข้อผิดพลาดในการค้นหาข้อมูล:", error.message);
    }
  };
  
  
  //Search BOI Project
  module.exports.search_BOI_project = async function (req, res) {
    try {
      const factory = req.query.FBMC_factory;
      const cost_center = req.query.FBMC_cost_center;
      const BOI_Project = req.query.FBMC_BOI_project;
      console.log("F", factory);
      console.log("C", cost_center);
      console.log("B", BOI_Project);
      const connect = await oracledb.getConnection(AVO);
      const query = `
        SELECT
      DISTINCT 
                        T.FBMC_FACTORY AS FACTORY_CC,
      C.FACTORY_NAME AS FACTORY ,
      CMCC.CC_DESC AS COST_CENTER,
      T.FBMC_COST_CENTER AS COST_CENTER_CC,
      T.FBMC_BOI_PROJ,
    CASE
        WHEN T.FBMC_STATUS = 'A' THEN 'Active'
        WHEN T.FBMC_STATUS = 'I' THEN 'In Active'
        ELSE T.FBMC_STATUS
    END AS BOI_STATUS,
      T.FBMC_UPDATE_BY,
    TO_CHAR(T.FBMC_UPDATE_DATE, 'DD/MM/YYYY') AS UPDATE_DATE
  FROM
      FAM_BOIPROJ_MAP_CC T
  LEFT JOIN CUSR.CU_FACTORY_M C ON
      C.FACTORY_CODE = T.FBMC_FACTORY
  LEFT JOIN CUSR.CU_MFGPRO_CC_MSTR CMCC ON
      CMCC.CC_CTR = T.FBMC_COST_CENTER
  WHERE
      (T.FBMC_FACTORY = '${factory}'
          OR '${factory}' IS NULL)
      AND (TRIM(T.FBMC_COST_CENTER) = '${cost_center}'
          OR '${cost_center}' IS NULL)
      AND (T.FBMC_BOI_PROJ = '${BOI_Project}'
          OR '${BOI_Project}' IS NULL)
  ORDER BY
      C.FACTORY_NAME,
      CMCC.CC_DESC,
      T.FBMC_BOI_PROJ DESC
      `;
  
      const result = await connect.execute(query);
      connect.release();
      res.json(result.rows);
      console.log(result);
    } catch (error) {
      console.error("Error in querying data:", error.message);
      res.status(500).send("Internal Server Error");
    }
  };
  
  // insert BOI project  
  module.exports.insertBOI_Maintain = async function (req, res) {
    try {
      const  fbmc_person_cost_center= req.query.FBMC_cost_center;
      const  fbmc_factory= req.query.FBMC_factory;
      const fbmc_boiproject = req.query.FBMC_BOI_Project;
      const fbmc_status = req.query.FBMC_status;
      const fbmc_comment = req.query.FBMC_comment;
      const fbmc_create_by = req.query.FBMC_create_by;
      const fbmc_update_by = req.query.FBMC_update_by;
  
      console.log(fbmc_person_cost_center);
      console.log(fbmc_factory);
      console.log(fbmc_boiproject);
      console.log(fbmc_status);
      console.log(fbmc_comment);
      console.log(fbmc_create_by);
      console.log(fbmc_update_by);
  
      const connect = await oracledb.getConnection(AVO);
      const query = `
      INSERT INTO FAM_BOIPROJ_MAP_CC (FBMC_COST_CENTER,FBMC_FACTORY,FBMC_BOI_PROJ,FBMC_STATUS,FBMC_COMMENT,FBMC_CREATE_DATE,FBMC_CREATE_BY,FBMC_UPDATE_DATE,FBMC_UPDATE_BY)
      VALUES (:fbmc_person_cost_center,:fbmc_factory,:fbmc_boiproject,:fbmc_status,:fbmc_comment,SYSDATE,:fbmc_create_by,SYSDATE,:fbmc_update_by)
  
           `;
      const data = {
        fbmc_person_cost_center,
        fbmc_factory,
        fbmc_boiproject,
        fbmc_status,
        fbmc_comment,
        fbmc_create_by,
        fbmc_update_by,
      };
      const result = await connect.execute(query, data, { autoCommit: true });
      console.log(query);
      connect.release();
      res.json(result.rows);
    } catch (error) {
      console.error("ข้อผิดพลาดในการบันทึกข้อมูล:", error.message);
    }
  };
  
  
  // update BOI maintian
  module.exports.updateBOI_Maintain = async function (req, res) {
    try {
      const  fbmc_cost_center_a= req.query.FBMC_cost_center;
      const  fbmc_factory_a= req.query.FBMC_factory;
      const fbmc_boi_project_a = req.query.FBMC_BOI_Project;
      const fbmc_status_a = req.query.FBMC_status;
      const fbmc_comment_a = req.query.FBMC_comment;
      const fbmc_update_by_a = req.query.FBMC_update_by;
  
      console.log(fbmc_cost_center_a);
      console.log(fbmc_factory_a);
      console.log(fbmc_boi_project_a);
      console.log(fbmc_status_a);
      console.log(fbmc_comment_a);
      console.log(fbmc_update_by_a);
  
      const connect = await oracledb.getConnection(AVO);
      const query = `
      UPDATE
          FAM_BOIPROJ_MAP_CC
      SET
          FBMC_FACTORY = :fbmc_factory_a,
          FBMC_BOI_PROJ = :fbmc_boi_project_a,
          FBMC_STATUS = :fbmc_status_a,
          FBMC_COMMENT = :fbmc_comment_a,
          FBMC_UPDATE_DATE = SYSDATE,
          FBMC_UPDATE_BY = :fbmc_update_by_a
      WHERE
          FBMC_COST_CENTER = :fbmc_cost_center_a
           `;
      const data = {
        fbmc_cost_center_a,
        fbmc_factory_a,
        fbmc_boi_project_a,
        fbmc_status_a,
        fbmc_comment_a,
        fbmc_update_by_a,
      };
      const result = await connect.execute(query, data, { autoCommit: true });
      console.log(query);
      connect.release();
      // console.log(result.rows);
      res.json(result.rows);
    } catch (error) {
      console.error("ข้อผิดพลาดในการบันทึกข้อมูล:", error.message);
    }
  };
  
  
  
  // get show data edit BOI
  module.exports.getEdit_BOI_Show = async function (req, res) {
    try {
      const cost_center = req.query.FBMC_cost_center;
      console.log("C", cost_center);
  
      const connect = await oracledb.getConnection(AVO);
      const query = `
      SELECT DISTINCT 
      T.FBMC_COST_CENTER,
      CTM.CC_DESC, 
      T.FBMC_FACTORY,
      CU.FACTORY_NAME,
      T.FBMC_BOI_PROJ,
      T.FBMC_STATUS,
      T.FBMC_COMMENT,
       TO_CHAR(T.FBMC_CREATE_DATE , 'DD/MM/YYYY') AS CREATE_E,
      T.FBMC_CREATE_BY,
      TO_CHAR(T.FBMC_UPDATE_DATE , 'DD/MM/YYYY') AS UPDATE_E,
      T.FBMC_UPDATE_BY
  FROM
      FAM_BOIPROJ_MAP_CC T
      LEFT JOIN CUSR.CU_FACTORY_M CU ON CU.FACTORY_CODE = T.FBMC_FACTORY 
      LEFT JOIN CUSR.CU_MFGPRO_CC_MSTR CTM ON CTM.CC_CTR = T.FBMC_COST_CENTER 
  WHERE
      T.FBMC_COST_CENTER = '${cost_center}'
      `;
      const result = await connect.execute(query);
      connect.release();
      const flatArray = result.rows.map((item) => Object.values(item)).flat();
      res.json(flatArray);
      console.log(result);
    } catch (error) {
      console.error("Error in querying data:", error.message);
      res.status(500).send("Internal Server Error");
    }
  };
  
  
  // Delete BOI Maintain
  module.exports.deleteBOI_Maintain = async function (req, res) {
    try {
      const cost_center_a = req.query.FBMC_cost_center_delete;
      console.log(cost_center_a);
  
      const connect = await oracledb.getConnection(AVO);
      const query = `
      DELETE
      FROM
        FAM_BOIPROJ_MAP_CC T
      WHERE
        T.FBMC_COST_CENTER = :cost_center_a 
           `;
      const data = {
        cost_center_a,
      };
      const result = await connect.execute(query, data, { autoCommit: true });
      console.log(query);
      connect.release();
      res.json(result.rows);
    } catch (error) {
      console.error("ข้อผิดพลาดในการบันทึกข้อมูล:", error.message);
    }
  };
  
  //CountTransfer
  module.exports.getCountTransfer = async function (req, res) {
    try {
      const userlogin = req.query.UserLogin;
      const connect = await oracledb.getConnection(AVO);
      const query = `
      SELECT  COUNT(T.FRH_FAM_NO) 
      FROM FAM_REQ_HEADER T
      LEFT JOIN FAM_REQ_TRANSFER A ON A.FRT_FAM_NO = T.FRH_FAM_NO
      WHERE 1=1
          AND (T.FAM_REQ_BY = '${userlogin}' AND T.FAM_REQ_STATUS = 'FLTR001'
          OR (T.FAM_MGR_DEPT = '${userlogin}' AND T.FAM_REQ_STATUS = 'FLTR002')
          OR (T.FAM_SERVICE_BY  = '${userlogin}' AND T.FAM_REQ_STATUS = 'FLTR003')
          OR (T.FAM_BOI_CHK_BY  = '${userlogin}' AND T.FAM_REQ_STATUS = 'FLTR004')
          OR (T.FAM_BOI_MGR_BY  = '${userlogin}'  AND T.FAM_REQ_STATUS = 'FLTR005')
          OR (T.FAM_FM_BY  = '${userlogin}'  AND T.FAM_REQ_STATUS = 'FLTR006')
          OR (T.FAM_ACC_CHK_BY  = '${userlogin}'  AND T.FAM_REQ_STATUS = 'FLTR007')
          OR (T.FAM_OWNER_SEND_BY  = '${userlogin}'  AND T.FAM_REQ_STATUS = 'FLTR008')
          OR ( A.FRT_RECEIVE_BY  = '${userlogin}'  AND T.FAM_REQ_STATUS = 'FLTR009')
          OR (T.FAM_ACC_REC_BY  = '${userlogin}'  AND T.FAM_REQ_STATUS = 'FLTR010')
          OR (T.FAM_ACC_MGR_BY  = '${userlogin}' AND T.FAM_REQ_STATUS = 'FLTR011')
          OR (T.FAM_SERVICE_CLOSE_BY  = '${userlogin}'  AND T.FAM_REQ_STATUS = 'FLTR0012'))
         AND T.FAM_REQ_TYPE  = 'GP01001'
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
  
  //CountTransferListALL
  module.exports.getCountTransferlistaLL = async function (req, res) {
    try {
      const userlogin = req.query.UserLogin;
      const connect = await oracledb.getConnection(AVO);
      const query = `
      SELECT
      COUNT(CASE WHEN TT.FFM_CODE = 'FLTR001' THEN 1 ELSE NULL END) AS T_CREATE,
      COUNT(CASE WHEN TT.FFM_CODE = 'FLTR002' THEN 1 ELSE NULL END) AS T_WAIT_DM,
      COUNT(CASE WHEN TT.FFM_CODE = 'FLTR003' THEN 1 ELSE NULL END) AS T_WAIT_SDC,
      COUNT(CASE WHEN TT.FFM_CODE = 'FLTR004' THEN 1 ELSE NULL END) AS T_WAIT_BOI_SC,
      COUNT(CASE WHEN TT.FFM_CODE = 'FLTR005' THEN 1 ELSE NULL END) AS T_WAIT_BOI_M,
      COUNT(CASE WHEN TT.FFM_CODE = 'FLTR006' THEN 1 ELSE NULL END) AS T_WAIT_FACTORY_M,
      COUNT(CASE WHEN TT.FFM_CODE = 'FLTR007' THEN 1 ELSE NULL END) AS T_WAIT_ACC_SC,
      COUNT(CASE WHEN TT.FFM_CODE = 'FLTR008' THEN 1 ELSE NULL END) AS T_WAIT_O_C,
      COUNT(CASE WHEN TT.FFM_CODE = 'FLTR009' THEN 1 ELSE NULL END) AS T_WAIT_RECEIVER_A,
      COUNT(CASE WHEN TT.FFM_CODE = 'FLTR010' THEN 1 ELSE NULL END) AS T_WAIT_ACC_SUD,
      COUNT(CASE WHEN TT.FFM_CODE = 'FLTR011' THEN 1 ELSE NULL END) AS T_WAIT_ACC_MGR,
      COUNT(CASE WHEN TT.FFM_CODE = 'FLTR012' THEN 1 ELSE NULL END) AS T_WAIT_SERVICE_DC
  FROM FAM_FLOW_MASTER TT
  LEFT JOIN FAM_REQ_HEADER HT ON HT.FAM_REQ_STATUS = TT.FFM_CODE
  LEFT JOIN FAM_REQ_TRANSFER A ON A.FRT_FAM_NO = HT.FRH_FAM_NO
  WHERE 
      TT.FFM_TYPE = 'TRANSFER'
      AND TT.FFM_STATUS = 'A'
      AND (
          HT.FAM_REQ_BY = '${userlogin}' AND HT.FAM_REQ_STATUS = 'FLTR001'
          OR HT.FAM_MGR_DEPT = '${userlogin}' AND HT.FAM_REQ_STATUS = 'FLTR002'
          OR HT.FAM_SERVICE_BY = '${userlogin}' AND HT.FAM_REQ_STATUS = 'FLTR003'
          OR HT.FAM_BOI_CHK_BY = '${userlogin}' AND HT.FAM_REQ_STATUS = 'FLTR004'
          OR HT.FAM_BOI_MGR_BY = '${userlogin}' AND HT.FAM_REQ_STATUS = 'FLTR005'
          OR HT.FAM_FM_BY = '${userlogin}' AND HT.FAM_REQ_STATUS = 'FLTR006'
          OR HT.FAM_ACC_CHK_BY = '${userlogin}' AND HT.FAM_REQ_STATUS = 'FLTR007'
          OR HT.FAM_OWNER_SEND_BY = '${userlogin}' AND HT.FAM_REQ_STATUS = 'FLTR008'
          OR A.FRT_RECEIVE_BY = '${userlogin}' AND HT.FAM_REQ_STATUS = 'FLTR009'
          OR HT.FAM_ACC_REC_BY = '${userlogin}' AND HT.FAM_REQ_STATUS = 'FLTR010'
          OR HT.FAM_ACC_MGR_BY = '${userlogin}' AND HT.FAM_REQ_STATUS = 'FLTR011'
          OR HT.FAM_SERVICE_CLOSE_BY = '${userlogin}' AND HT.FAM_REQ_STATUS = 'FLTR012' )
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