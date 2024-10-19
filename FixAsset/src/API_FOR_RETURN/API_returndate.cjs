const oracledb = require("oracledb");
const nodemailer = require("nodemailer");
const path = require('path');
const fs = require("fs");
oracledb.initOracleClient({ tnsAdmin: process.env.TNS_ADMIN });
const AVO = {
  user: "avo",
  password: "avo",
  connectString: "TCIX01",
};
const smtpConfig = {
  host: "10.17.220.200",
  port: 25,
  secure: false,
  auth: {
    user: "FAMsystem@th.fujikura.com",
    pass: "",
  },
};
const transporter = nodemailer.createTransport(smtpConfig);
async function get_data() {
  let data = [];
  try {
    const connect = await oracledb.getConnection(AVO);
    const query = `
       SELECT DISTINCT  TO_CHAR(BB.MRETDATE,'MM/YYYY'), 
       FPM.FPM_USER_LOGIN AS REQUEST_BY, 
       FPM.FPM_EMAIL ,T.FRL_FAM_NO AS FAM,
       FCM.FCM_DESC AS REQUEST_TYPE,
       FFM.FFM_DESC AS STATUS,
       TO_CHAR(BB.MRETDATE,'Month YYYY')
            FROM FAM_REQ_LENDING T
            INNER JOIN FAM_PERSON_MASTER FPM ON T.FRL_OWNER_RETURN_BY = FPM.FPM_USER_LOGIN
            INNER JOIN FAM_REQ_HEADER FRH ON T.FRL_FAM_NO = FRH.FRH_FAM_NO 
            INNER JOIN FAM_CODE_MASTER FCM ON FCM.FCM_CODE = FRH.FAM_REQ_TYPE 
            INNER JOIN FAM_FLOW_MASTER FFM ON FFM.FFM_CODE  = FRH.FAM_REQ_STATUS 

            INNER JOIN
            (
            SELECT MAX(AA.RETDATE) AS MRETDATE, AA.NFAM 
            FROM
            (
                SELECT T.FRL_FAM_NO AS NFAM, T.FRL_RETURN_DATE AS RETDATE 
                FROM FAM_REQ_LENDING T
                UNION
                SELECT T.FRLR_FAM_NO AS NFAM, T.FRLR_RETURN AS RETDATE 
                FROM FAM_LENDING_RETURN T 
            ) AA
            WHERE TO_CHAR(AA.RETDATE, 'YYYY/MM') >= TO_CHAR(TRUNC(SYSDATE, 'MM'), 'YYYY/MM')
                AND TO_CHAR(AA.RETDATE, 'YYYY/MM') <= TO_CHAR(TRUNC(ADD_MONTHS(SYSDATE, 60), 'MM'), 'YYYY/MM')
            GROUP BY AA.NFAM
            ) BB
            ON T.FRL_FAM_NO = BB.NFAM
`;
    const result = await connect.execute(query);
    connect.release();
    for (let i = 0; i < result.rows.length; i++) {
      data.push({
        enddate: result.rows[i][0],
        user: result.rows[i][1],
        email: result.rows[i][2],
        fam: result.rows[i][3],
        type: result.rows[i][4],
        status: result.rows[i][5],
        date_return:result.rows[i][6],
      });
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}
function checkMonth() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const retuenDate = `${month}/${year}`;
  return retuenDate;
}
function logMessage(message) {
  const date = getCurrentDate();
  const logDir = path.join(__dirname, "log");
  const logFileName = path.join(logDir, `log-${date}.txt`);
  const logMessage = `${new Date().toISOString()} - ${message}\n`;

  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }

  fs.appendFile(logFileName, logMessage, (err) => {
    if (err) {
      console.error("Error writing to log file", err);
    } else {
      console.log("Log message written to", logFileName);
    }
  });
}
function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
async function sendEmail(emailTo, emailsubject, emailHtml) {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const FullDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  console.log(emailTo, emailsubject, emailHtml);
  const mailOptions = {
    from: "FAMsystem@th.fujikura.com",
    to: emailTo,
    subject: 'Please Return the Borrowed Item ',
    html: emailHtml,
  };
  try {
    await transporter.sendMail(mailOptions);
    logMessage(`${FullDateTime} : Email sent to ${emailTo}`);
  } catch (error) {
    logMessage(`${FullDateTime} : Error sending email to ${emailTo}`);
  }
}
async function main() {
  const data = await get_data();
    const returnDate = checkMonth();
  if (data.length > 0) {
    data.forEach(async (item, index) => {
      if (item.enddate === returnDate) {
       let emailMessage= await Html_return(item.fam,item.type,item.user,item.status,item.date_return)
        await sendEmail(item.email,'',emailMessage)
       
      }
    });
  }
}

async function Html_return(Fam,Type,RequestBy,Status,date) {
    let emailMessage = `
  <html>
  <body style="font-family: sans-serif; font-size: 16px; color: #333; margin: 0; padding: 0;">
  <div className="container" style="width: 700px; margin: 0 auto; padding: 20px; height: 30px; font-family: Tahoma;">
  <div className="header" style="border-radius: 3px; background-color: #93E9BE; color: #ffff; padding: 10px; text-align: center; font-size: 10px;">
      <h1>FAM system information</h1>
  </div>
  <div className="content" style="border-radius: 3px; border: 1px solid #ddd; padding: 20px; font-size: 12px;">
      <h2 style="color: red;">Dear All Concern </h2>
      <table className="table" style="width: 100%; border-collapse: collapse; border-radius: 3px;">
          <tr>
              <th style="border-radius: 3px; border: 1px solid #ddd; padding: 5px;">Fam No.</th>
              <th style="border-radius: 3px; border: 1px solid #ddd; padding: 5px;">Request Type</th>
              <th style="border-radius: 3px; border: 1px solid #ddd; padding: 5px;">Request By</th>
              <th style="border-radius: 3px; border: 1px solid #ddd; padding: 5px;">Status</th>
              <th style="border-radius: 3px; border: 1px solid #ddd; padding: 5px;">End Date</th>
          </tr>
          <tr>
              <td style="border-radius: 3px; border: 1px solid #ddd; padding: 5px; color: red;">${Fam}</td>
              <td style="border-radius: 3px; border: 1px solid #ddd; padding: 5px; color: red;">${Type}</td>
              <td style="border-radius: 3px; border: 1px solid #ddd; padding: 5px; color: red;">${RequestBy}</td>
              <td style="border-radius: 3px; border: 1px solid #ddd; padding: 5px; color: red;">${Status}</td>
               <td style="border-radius: 3px; border: 1px solid #ddd; padding: 5px; color: red;">${date}</td>
          </tr>
      </table>
      <p style="color: red;"><a href="http://10.17.100.183:3100/FAMsystem/" style="color: red;">Click here for action</a></p>
     
  </div>
</div>
</body>
  </html> 
  <br> <br> <br> <br> <br>  <br>  <br>  <br>  <br>  <br> <br><br> <br> <br> <br> <br>  <br>  <br>  <br>  <br>  <br> <br>
  `
    return emailMessage;
     
  }
  main();