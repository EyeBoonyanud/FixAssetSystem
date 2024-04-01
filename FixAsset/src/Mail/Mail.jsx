import React, { useEffect, useState } from 'react';
import { Card, Space } from 'antd';
import axios from "axios";
import "./StyleMail.css";
import { useNavigate } from "react-router-dom";

function Mail() {

  const PAGE = localStorage.getItem("pageshow")

  
  const navigate = useNavigate();
  const Fam = localStorage.getItem("Genno")
  const To_Send =localStorage.getItem("To")
  const RequestType =localStorage.getItem("Req_Type")
  const RequestBy =localStorage.getItem("Req_by")
  const status =localStorage.getItem("Status")

 
  useEffect(() => {  
    Status_Show();
    navigate(`/${PAGE}`);
   
    
  }, []);
const Datamail = async (Name,File,Type,Status) => {
  try {
    const response = await axios.post("http://10.17.100.183:5000/getMailshow", {
      Name: To_Send
    });
    const dataEmail = response.data.dataEmail; // เปลี่ยนจาก DataEmail เป็น dataEmail
    const dataName = response.data.rowName; // เปลี่ยนจาก DataName เป็น dataName
  
    // console.log(response.data.message, "KKKKKKK", dataName, dataEmail,Name,File,Type,Status);
    // console.log("5")
    emailMessage(dataEmail,Name,File,Type,Status)
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
const Status_Show = async () => {
  let Name = "";
  let File = "";
  let Type = "";
  let Status = "";
  try {
    const response = await axios.post("http://10.17.100.183:5000/getStatus", {
      sts: status,
    });
    const data = response.data;
    // console.log(data, "response");

    Status = data[0];
   
  } catch (error) {
    console.error("Error getting status:", error);
  }

  try {
    const response = await axios.post("http://10.17.100.183:5000/getName_To", {
      name: To_Send,
    });
    const data = response.data;
    // console.log(data, "response");

    Name = data[0];
   
  } catch (error) {
    console.error("Error getting name:", error);
  }

  try {
    const response = await axios.post("http://10.17.100.183:5000/getType", {
      Type_show: RequestType,
    });
    const data = response.data;
    // console.log(data, "response");

    Type = data[0];
  
  } catch (error) {
    console.error("Error getting type:", error);
  }

  try {
    const response = await axios.post("http://10.17.100.183:5000/getFile", {
      Type_show: RequestType,
    });
    const data = response.data;
    // console.log(data, "response");

    File = data[0];

  } catch (error) {
    console.error("Error getting file:", error);
  }
  Datamail(Name, File, Type, Status);
};

const emailMessage = async (dataEmail,Name,File,Type,Status) => {
 
const emailMessage = `
  <html>
  <body style="font-family: sans-serif; font-size: 16px; color: #333; margin: 0; padding: 0;">
  <div className="container" style="width: 700px; margin: 0 auto; padding: 20px; height: 30px; font-family: Tahoma;">
  <div className="header" style="border-radius: 3px; background-color: #93E9BE; color: #ffff; padding: 10px; text-align: center; font-size: 10px;">
      <h1>FAM system information</h1>
  </div>
  <div className="content" style="border-radius: 3px; border: 1px solid #ddd; padding: 20px; font-size: 12px;">
      <h2 style="color: red;">Dear ${Name}</h2>
      <table className="table" style="width: 100%; border-collapse: collapse; border-radius: 3px;">
          <tr>
              <th style="border-radius: 3px; border: 1px solid #ddd; padding: 5px;">Fam No.</th>
              <th style="border-radius: 3px; border: 1px solid #ddd; padding: 5px;">Request Type</th>
              <th style="border-radius: 3px; border: 1px solid #ddd; padding: 5px;">AttachFile</th>
              <th style="border-radius: 3px; border: 1px solid #ddd; padding: 5px;">Request By</th>
              <th style="border-radius: 3px; border: 1px solid #ddd; padding: 5px;">Status</th>
          </tr>
          <tr>
              <td style="border-radius: 3px; border: 1px solid #ddd; padding: 5px; color: red;">${Fam}</td>
              <td style="border-radius: 3px; border: 1px solid #ddd; padding: 5px; color: red;">${Type}</td>
              <td style="border-radius: 3px; border: 1px solid #ddd; padding: 5px; color: red;">${File}</td>
              <td style="border-radius: 3px; border: 1px solid #ddd; padding: 5px; color: red;">${RequestBy}</td>
              <td style="border-radius: 3px; border: 1px solid #ddd; padding: 5px; color: red;">${Status}</td>
          </tr>
      </table>
      <p style="color: red;"><a href="http://10.17.162.238:1234/" style="color: red;">Click here for action</a></p>
  </div>
</div>
</body>
  </html>
  `;
  if(dataEmail !== undefined && Name!=="" &&File!=""&&Type!=""&&Status!=""){
    // console.log("เข้าาาาาาา")
     try {
    const response = await axios.post("http://10.17.100.183:5000/sendEmail", {
      headers: {
        'Content-Type': 'text/html',
      },
      toEmail: dataEmail[0],
      subject: "Subject of the Email",
      emailMessage: emailMessage
    });

    // console.log(response.data.message);
    // console.log("15")
  } catch (error) {
    console.error("Error sending email:", error);
  }
  }
};




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
