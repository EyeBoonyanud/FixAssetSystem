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
  //const สำหรับเช็คค่า Approve and Reject 
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
  
    // try {
    //   const response = await axios.post("/getFile_Mail", {
    //     Type_show: RequestType,
    //   });
    //   const data = response.data;
    //   console.log(data, "response");
  
    //   File = data[0];
  
    // } catch (error) {
    //   console.error("Error getting file:", error);
    // }

  //   if(sts_A_or_R == "R"){
  //     for (let i = 0; i < Reject_forApprover.length; i++) {
  //       console.log(Reject_forApprover[i],"Reject_forApprover[i]")
  //       if(Reject_forApprover[i] != null){
  //         try {
  //           const response = await axios.post("/getName_To", {
  //             name: Reject_forApprover[i],
  //           });
  //           const data = response.data;
  //           console.log(data, "response");
        
  //           Name = data[0];
  //          console.log(Name,"Name")
  //         } catch (error) {
  //           console.error("Error getting name:", error);
  //         }
  //         // Datamail(Name, File, Type, Status);
  //   }
   
  //   }
  // }else{
  //     try {
  //       const response = await axios.post("/getName_To", {
  //         name: To_Send,
  //       });
  //       const data = response.data;
  //       console.log(data, "response");
    
  //       Name = data[0];
       
  //     } catch (error) {
  //       console.error("Error getting name:", error);
  //     }
    
  //   }
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
      <p style="color: red;"><a href="http://10.17.100.183:80/FAMsystem/" style="color: red;">Click here for action</a></p>
     
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
      <p style="color: red;"><a href="http://10.17.100.183:8080/" style="color: red;">Click here for action</a></p>
     
  </div>
</div>
</body>
  </html> 
  <br> <br> <br> <br> <br>  <br>  <br>  <br>  <br>  <br> <br><br> <br> <br> <br> <br>  <br>  <br>  <br>  <br>  <br> <br>
  `;
  if ( Type !== "" && Status !== "" && datareq !== undefined) {
     try {
    const response2 = await axios.post("http://10.17.74.202:5000/sendEmail", {
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
      {/* <Space direction="vertical" size={16}>
        <Card title="FAMsystem information" extra={<p style={{ color: 'blue' }}> Waiting manager dept. approve</p>} style={{ width: 500 }}>
          <p>Dear {DataName}</p>
          <p>Fam No : </p>
          <p>Attach file : </p>
          <p>Request By : </p>
          <p>Status : </p>
          <a href=''>Click here for approve : </a>
        </Card>
        <button 
        //onClick={handleMail}
        >
          ส่ง
        </button>
      </Space> */}
      {/* <div dangerouslySetInnerHTML={{ __html: emailMessage }}></div> */}
      {/* <div className="container" style={{ width: '700px', margin: '0 auto', padding: '20px',height:'30px' ,fontFamily:'Tahoma'}}>
    <div className="header" style={{ borderRadius:'3px',backgroundColor: '#93E9BE', color: '#ffff', padding: '10px', textAlign: 'center',fontSize:'10px' }}>
      <h1>FAM system information</h1>
    </div>
    <div className="content" style={{ borderRadius:'3px',border: '1px solid #ddd', padding: '20px',fontSize:'12px' }}>
      <h2 style={{ color: 'red' }}>Dear {NameTo}</h2>
    
      <table className="table" style={{ width: '100%', borderCollapse: 'collapse',borderRadius:'3px', }}>
        <tr style={{borderRadius:'3px',}}>
         
          <th style={{ borderRadius:'3px',border: '1px solid #ddd', padding: '5px' }}>Fam No.</th>
          <th style={{ borderRadius:'3px',border: '1px solid #ddd', padding: '5px' }}>Request Type</th>
          <th style={{ borderRadius:'3px',border: '1px solid #ddd', padding: '5px' }}>AttachFile</th>
          <th style={{ borderRadius:'3px',border: '1px solid #ddd', padding: '5px' }}>Request By</th>
          <th style={{ borderRadius:'3px',border: '1px solid #ddd', padding: '5px' }}>Status</th>
        </tr>
        <tr style={{borderRadius:'3px',}}>
          <td style={{ borderRadius:'3px',border: '1px solid #ddd', padding: '5px', color: 'red' }}>{Fam}</td>
          <td style={{ borderRadius:'3px',border: '1px solid #ddd', padding: '5px', color: 'red' }}>{Typeshow}</td>
          <td style={{ borderRadius:'3px',border: '1px solid #ddd', padding: '5px', color: 'red' }}>{CountFile}</td>
          <td style={{ borderRadius:'3px',border: '1px solid #ddd', padding: '5px', color: 'red' }}>{RequestBy}</td>
          <td style={{ borderRadius:'3px',border: '1px solid #ddd', padding: '5px', color: 'red' }}>{Sts_show}</td>
     
        </tr>
      </table>
      <p style={{ color: 'red' }}><a href="http://10.17.162.238:1234/" style={{ color: 'red' }}>Click here for action</a></p>
    </div>
  </div> */}
    </div>

  );
}

export default Mail;
