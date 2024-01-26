-- //SELECT ทุก TABLE ในหน้า search
SELECT * FROM FAM_REQ_HEADER; --TABLE haedเก็บข้อมูล
SELECT * FROM  FAM_REQ_DETAIL; -- ตัว deatil ของ req
SELECT * FROM CUSR.CU_FACTORY_M;  --factory
SELECT * FROM FAM_CODE_MASTER; 
SELECT * FROM FAM_FLOW_MASTER;


-- SELECT T.FAM_REQ_TYPE  FROM FAM_REQ_HEADER T INNER JOIN FAM_CODE_MASTER R ON  R.FCM_CODE = T.FAM_REQ_TYPE  WHERE R.FCM_GROUP_ID = 'GP01' 
-- SELECT T.FAM_REQ_STATUS FROM FAM_REQ_HEADER T INNER JOIN FAM_FLOW_MASTER F ON F.FFM_CODE = T.FAM_REQ_STATUS WHERE F.FFM_TYPE = 'TRANSFER'
-- SELECT M.FACTORY_NAME FROM CUSR.CU_FACTORY_M M INNER JOIN FAM_REQ_HEADER T ON T.FAM_FACTORY  = M.FACTORY_CODE WHERE M.FACTORY_CODE ='2000'
 
 
-- //ผลลัพทธ์ทุกตัว ที่เรียกมา
 SELECT M.FACTORY_NAME AS FACTORY 
 ,T.FAM_REQ_CC AS COSTCENTER 
 ,T.FRH_FAM_NO AS FAMNO
 ,T.FAM_REQ_DATE AS ISSUEDATE
 ,T.FAM_REQ_BY AS ISSUEBY
 ,R.FCM_DESC AS RETYPE
 ,C.FRD_ASSET_CODE AS FIXED_CODE
 , F.FFM_DESC AS STATUS 
 FROM FAM_REQ_HEADER T INNER JOIN  CUSR.CU_FACTORY_M M ON M.FACTORY_CODE =T.FAM_FACTORY 
 INNER JOIN FAM_CODE_MASTER R ON  R.FCM_CODE = T.FAM_REQ_TYPE 
 INNER JOIN FAM_FLOW_MASTER F ON F.FFM_CODE = T.FAM_REQ_STATUS 
 INNER JOIN FAM_REQ_DETAIL C ON C.FRD_FAM_NO = T.FRH_FAM_NO 
 WHERE T.FAM_FACTORY ='2000' 
 AND T.FAM_REQ_DEPT ='CGM'
 AND  (T.FRH_FAM_NO ='' OR '' IS NULL)
 AND (T.FRH_FAM_NO ='' OR '' IS NULL)
 OR  T.FAM_REQ_CC = ''
 OR  T.FAM_REQ_TYPE ='' 
 OR  R.FCM_CODE =''
 OR  C.FRD_FAM_NO =''
 AND (T.FAM_REQ_DATE ='' OR '' IS NULL) 
 AND (T.FAM_REQ_DATE =''OR '' IS NULL) 
 
-- 
 
 
SELECT
	DISTINCT M.FACTORY_NAME AS FACTORY,
	T.FAM_REQ_CC AS COSTCENTER,
	T.FRH_FAM_NO AS FAMNO,
	T.FAM_REQ_DATE AS ISSUEDATE,
	T.FAM_REQ_BY AS ISSUEBY,
	R.FCM_DESC AS RETYPE,
	(
	SELECT
		TO_CHAR(WM_CONCAT(CD.FRD_ASSET_CODE))
	FROM
		FAM_REQ_DETAIL CD
	WHERE
		CD.FRD_FAM_NO = T.FRH_FAM_NO) AS FIXED_CODE,
	--C.FRD_ASSET_CODE AS FIXED_CODE,
	F.FFM_DESC AS STATUS
FROM
	FAM_REQ_HEADER T
INNER JOIN CUSR.CU_FACTORY_M M ON M.FACTORY_CODE = T.FAM_FACTORY
INNER JOIN FAM_CODE_MASTER R ON R.FCM_CODE = T.FAM_REQ_TYPE
INNER JOIN FAM_FLOW_MASTER F ON F.FFM_CODE = T.FAM_REQ_STATUS
INNER JOIN FAM_REQ_DETAIL C ON C.FRD_FAM_NO = T.FRH_FAM_NO
WHERE (T.FAM_FACTORY = :FACTORY OR :FACTORY IS NULL)
	AND (T.FAM_REQ_DEPT = :dept OR :dept IS NULL)
	AND (T.FRH_FAM_NO >= :famno OR :famno IS NULL)
	AND (T.FRH_FAM_NO <= :famto OR :famto IS NULL)
	AND (T.FAM_REQ_CC = :cost OR :cost IS NULL)
	AND (T.FAM_REQ_TYPE = :type OR :type IS NULL)
	AND (C.FRD_ASSET_CODE  = :asset OR :asset IS NULL)
	AND (TO_CHAR(T.FAM_REQ_DATE , 'YYYYMMDD') >= :date OR :date IS NULL)
	AND (TO_CHAR(T.FAM_REQ_DATE , 'YYYYMMDD') >= :dateto OR :dateto IS NULL)

 
A1-R438-23-0001
 
SELECT DISTINCT
    M.FACTORY_NAME AS FACTORY,
    T.FAM_REQ_CC AS COSTCENTER,
    T.FRH_FAM_NO AS FAMNO,
    T.FAM_REQ_DATE AS ISSUEDATE,
    T.FAM_REQ_BY AS ISSUEBY,
    R.FCM_DESC AS RETYPE,
    (SELECT TO_CHAR(WM_CONCAT(CD.FRD_ASSET_CODE)) FROM FAM_REQ_DETAIL CD WHERE CD.FRD_FAM_NO = T.FRH_FAM_NO) AS FIXED_CODE,
    F.FFM_DESC AS STATUS
FROM
    FAM_REQ_HEADER T
    INNER JOIN CUSR.CU_FACTORY_M M ON M.FACTORY_CODE = T.FAM_FACTORY
    INNER JOIN FAM_CODE_MASTER R ON R.FCM_CODE = T.FAM_REQ_TYPE
    INNER JOIN FAM_FLOW_MASTER F ON F.FFM_CODE = T.FAM_REQ_STATUS
    INNER JOIN FAM_REQ_DETAIL C ON C.FRD_FAM_NO = T.FRH_FAM_NO
WHERE
    T.FAM_FACTORY LIKE  '${factory}'||'%' 
    AND  T.FAM_REQ_DEPT  LIKE '${dept}' ||'%' 
    AND  T.FRH_FAM_NO BETWEEN ('${famno}'  OR '' IS NULL )
    AND ('${famto}'  OR '' IS NULL )
      
    AND  T.FAM_REQ_DEPT  '${dept}' 
    AND  T.FRH_FAM_NO BETWEEN '${famno}' AND '${famto}'
--    AND (T.FRH_FAM_NO >= '${famno}' OR '' IS NULL)
--    AND (T.FRH_FAM_NO <= '${famto}' OR '' IS NULL)
--    AND (T.FAM_REQ_CC = '${cost}' OR '' IS NULL)
--    AND (T.FAM_REQ_TYPE = '${type}' OR '' IS NULL)
--    AND (R.FCM_CODE = '${asset}' OR '' IS NULL)
--    AND (T.FAM_REQ_DATE >= '${date}' OR '${date}' IS NULL)
--    AND (T.FAM_REQ_DATE <= '${datto}' OR '${datto}' IS NULL);

 SELECT DISTINCT M.FACTORY_NAME   AS FACTORY,
                T.FAM_REQ_CC     AS COSTCENTER,
                T.FRH_FAM_NO     AS FAMNO,
                T.FAM_REQ_DATE   AS ISSUEDATE,
                T.FAM_REQ_BY     AS ISSUEBY,
                R.FCM_DESC       AS RETYPE,
                (SELECT TO_CHAR(WM_CONCAT(CD.FRD_ASSET_CODE)) FROM FAM_REQ_DETAIL CD WHERE CD.FRD_FAM_NO = T.FRH_FAM_NO) AS FIXED_CODE,
                --C.FRD_ASSET_CODE AS FIXED_CODE,
                F.FFM_DESC       AS STATUS
  FROM FAM_REQ_HEADER T
INNER JOIN CUSR.CU_FACTORY_M M ON M.FACTORY_CODE = T.FAM_FACTORY
INNER JOIN FAM_CODE_MASTER R ON R.FCM_CODE = T.FAM_REQ_TYPE
INNER JOIN FAM_FLOW_MASTER F ON F.FFM_CODE = T.FAM_REQ_STATUS
INNER JOIN FAM_REQ_DETAIL C ON C.FRD_FAM_NO = T.FRH_FAM_NO
WHERE T.FAM_FACTORY = '${factory}'
  AND  T.FAM_REQ_DEPT = '${dept}'
   AND  (T.FRH_FAM_NO = '${famno}' OR '' IS NULL)
   AND (T.FRH_FAM_NO = '${famto}' OR '' IS NULL)
   AND (T.FAM_REQ_CC = ''  OR '' IS NULL)
   AND (T.FAM_REQ_TYPE = '' OR '' IS NULL)
   AND (R.FCM_CODE = '' OR '' IS NULL)
   AND (C.FRD_FAM_NO = '' OR '' IS NULL)
   AND (T.FAM_REQ_DATE = '' OR '' IS NULL)
   AND (T.FAM_REQ_DATE = '' OR '' IS NULL)
 
 
 
 
 
-- AND  R.FCM_GROUP_ID = 'GP01' 
-- AND  F.FFM_TYPE = 'TRANSFER'
-- AND C.FRD_FAM_NO ='A1-R438-23-0001'
--  
 
 
-- ค้นหา fixed asset code 
 SELECT  C.FRD_ASSET_CODE , C.FRD_ASSET_NAME ,C.FRD_COMP 
 ,C.FRD_OWNER_CC ,C.FRD_ASSET_NAME 
 ,C.FRD_BOI_PROJ ,C.FRD_QTY 
 ,C.FRD_INV_NO ,C.FRD_ACQ_COST 
 ,C.FRD_BOOK_VALUE 
 FROM FAM_REQ_HEADER T 
 INNER JOIN  CUSR.CU_FACTORY_M M ON M.FACTORY_CODE =T.FAM_FACTORY 
 INNER JOIN FAM_CODE_MASTER R ON  R.FCM_CODE = T.FAM_REQ_TYPE 
 INNER JOIN FAM_FLOW_MASTER F ON F.FFM_CODE = T.FAM_REQ_STATUS 
  LEFT JOIN FAM_REQ_DETAIL C ON C.FRD_FAM_NO = T.FRH_FAM_NO 
 WHERE T.FRH_FAM_NO ='A1-R438-23-0001'
   
   
   query 
   SELECT
	DISTINCT M.FACTORY_NAME AS FACTORY,
	T.FAM_REQ_CC AS COSTCENTER,
	T.FRH_FAM_NO AS FAMNO,
	T.FAM_REQ_DATE AS ISSUEDATE,
	T.FAM_REQ_BY AS ISSUEBY,
	R.FCM_DESC AS RETYPE,
	(
	SELECT
		TO_CHAR(WM_CONCAT(CD.FRD_ASSET_CODE))
	FROM
		FAM_REQ_DETAIL CD
	WHERE
		CD.FRD_FAM_NO = T.FRH_FAM_NO) AS FIXED_CODE,
	--C.FRD_ASSET_CODE AS FIXED_CODE,
	F.FFM_DESC AS STATUS
FROM
	FAM_REQ_HEADER T
INNER JOIN CUSR.CU_FACTORY_M M ON M.FACTORY_CODE = T.FAM_FACTORY
INNER JOIN FAM_CODE_MASTER R ON R.FCM_CODE = T.FAM_REQ_TYPE
INNER JOIN FAM_FLOW_MASTER F ON F.FFM_CODE = T.FAM_REQ_STATUS
INNER JOIN FAM_REQ_DETAIL C ON C.FRD_FAM_NO = T.FRH_FAM_NO
WHERE (T.FAM_FACTORY = :FACTORY OR :FACTORY IS NULL)
	AND (T.FAM_REQ_DEPT = :dept OR :dept IS NULL)
	AND (T.FRH_FAM_NO >= :famno OR :famno IS NULL)
	AND (T.FRH_FAM_NO <= :famto OR :famto IS NULL)
	AND (T.FAM_REQ_CC = :cost OR :cost IS NULL)
	AND (T.FAM_REQ_TYPE = :type OR :type IS NULL)
	AND (R.FCM_CODE = :asset OR :asset IS NULL)
	AND (TO_CHAR(T.FAM_REQ_DATE , 'YYYYMMDD') >= :date OR :date IS NULL)
	AND (TO_CHAR(T.FAM_REQ_DATE , 'YYYYMMDD') <= :dateto OR :dateto IS NULL)
	
	
	
-- 

 