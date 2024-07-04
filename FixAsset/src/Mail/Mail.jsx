import React, { useEffect, useState } from 'react';
import { Card, Space } from 'antd';
import axios from "axios";
import "./StyleMail.css";
import { useNavigate } from "react-router-dom";



function Mail() {

  const PAGE = localStorage.getItem("pageshow")

  
  const navigate = useNavigate();
  const Fam = localStorage.getItem("Genno")
  let To_Send =localStorage.getItem("To")
  
  const RequestType =localStorage.getItem("Req_Type")
  const RequestBy =localStorage.getItem("Req_by")
  const status =localStorage.getItem("Status")
  let Reject = localStorage.getItem("Approver_formail")
  const Reject_forApprover = JSON.parse(Reject);
  const sts_A_or_R = localStorage.getItem("status_formail")
  const [emailSent, setEmailSent] = useState(false); 

 
  useEffect(() => {  
    if(sts_A_or_R == "R"){
      localStorage.removeItem("To")
      To_Send = null
      
    }else{
      localStorage.removeItem("Approver_formail")
      Reject= null
      console.log(To_Send,"FFF")
    }
   
 
    Status_Show();
  navigate(`/FAMsystem/${PAGE}`);
   
    
  }, []);

  const Status_Show = async () => {
    let Name = "";
    // let File = "";
    let Type = "";
    let Status = "";
    try {
      const response = await axios.post("/getStatus_Mail", {
        sts: status,
      });
      const data = response.data;
      console.log(data, "response");
  
      Status = data[0];
     
    } catch (error) {
      console.error("Error getting status:", error);
    }
 
    
  
    try {
      const response = await axios.post("/getType_mail", {
        Type_show: RequestType,
      });
      const data = response.data;
      console.log(data, "response");
  
      Type = data[0];
    
    } catch (error) {
      console.error("Error getting type:", error);
    }
    Datamail(  Type, Status);
  };
  let datareq=""
const Datamail = async (Type,Status) => {
  let dataEmail = ""
  try {
    const row = await axios.post("/get_req_mail", {
      Name: RequestBy
    });
    const data1 = row.data 
    datareq = data1[0][0]
   
    

  } catch (error) {
    console.error("Error sending email:", error);
  }
  if(sts_A_or_R == "R"){
    for (let i = 0; i < Reject_forApprover.length; i++) {
      if(Reject_forApprover[i] != null){
        try {
          const response = await axios.post("/getMailshow", {
            Name: Reject_forApprover[i]
          });
          dataEmail  = response.data.dataEmail; 
          const dataName = response.data.rowName; 
          
        } catch (error) {
          console.error("Error sending email:", error);
        }
        emailMessage(dataEmail,Type,Status,datareq)
      }
     
  }
  
  }else{
    try {
      const response = await axios.post("/getMailshow", {
        Name: To_Send
      });
      dataEmail  = response.data.dataEmail; 
      const dataName = response.data.rowName; 
      console.log(dataEmail,"dataEmail")
    } catch (error) {
      console.error("Error sending email:", error);
    }
    emailMessage(dataEmail,Type,Status,datareq)
  }
  senttoReq(Type,Status,datareq)
};


const emailMessage = async (dataEmail,Type,Status) => {
 
const emailMessage = `
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
          </tr>
          <tr>
              <td style="border-radius: 3px; border: 1px solid #ddd; padding: 5px; color: red;">${Fam}</td>
              <td style="border-radius: 3px; border: 1px solid #ddd; padding: 5px; color: red;">${Type}</td>
              <td style="border-radius: 3px; border: 1px solid #ddd; padding: 5px; color: red;">${RequestBy}</td>
              <td style="border-radius: 3px; border: 1px solid #ddd; padding: 5px; color: red;">${Status}</td>
          </tr>
      </table>
      <p style="color: red;"><a href="http://10.17.100.183:3100/FAMsystem/" style="color: red;">Click here for action</a></p>
     
  </div>
</div>
</body>
  </html> 
  <br> <br> <br> <br> <br>  <br>  <br>  <br>  <br>  <br> <br><br> <br> <br> <br> <br>  <br>  <br>  <br>  <br>  <br> <br>
  `;
  if (!emailSent && dataEmail !== undefined   && Type !== "" && Status !== "" ) {

    try {
      const response1 = await axios.post("/sendEmail", {
        headers: {
          'Content-Type': 'text/html',
        },
        toEmail: dataEmail[0],
        subject: "FAM system information",
        emailMessage: emailMessage
      });
    }catch (error) {
      console.error("Error sending email:", error);
    }
 
  } else {
    return;
  }
};

const senttoReq = async (Type,Status,datareq) => {
  console.log("เข้าาาาาาา333",datareq);
  const emailMessage = `
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
          </tr>
          <tr>
              <td style="border-radius: 3px; border: 1px solid #ddd; padding: 5px; color: red;">${Fam}</td>
              <td style="border-radius: 3px; border: 1px solid #ddd; padding: 5px; color: red;">${Type}</td>
              <td style="border-radius: 3px; border: 1px solid #ddd; padding: 5px; color: red;">${RequestBy}</td>
              <td style="border-radius: 3px; border: 1px solid #ddd; padding: 5px; color: red;">${Status}</td>
          </tr>
      </table>
      <p style="color: red;"><a href="http://10.17.100.183:3100/FAMsystem/" style="color: red;">Click here for action</a></p>
     
  </div>
</div>
</body>
  </html> 
  <br> <br> <br> <br> <br>  <br>  <br>  <br>  <br>  <br> <br><br> <br> <br> <br> <br>  <br>  <br>  <br>  <br>  <br> <br>
  `;
  if ( Type !== "" && Status !== "" && datareq !== undefined) {
     try {
    const response2 = await axios.post("/sendEmail", {
       headers: {
         'Content-Type': 'text/html',
       },
       toEmail: datareq,
       subject: "FAM system information",
       emailMessage: emailMessage
     });
   } catch (error) {
     console.error("Error sending email:", error);
   }}


}



  return (
    <div>
      
    </div>

  );
}

export default Mail;
