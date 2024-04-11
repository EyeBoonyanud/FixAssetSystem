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
  console.log(To_Send,"To_Send")
  const RequestType =localStorage.getItem("Req_Type")
  const RequestBy =localStorage.getItem("Req_by")
  const status =localStorage.getItem("Status")
  const [emailSent, setEmailSent] = useState(false); // สร้าง state สำหรับเก็บสถานะการส่งอีเมล

 
  useEffect(() => {  
    console.log("Ltyyyyyy")
    Status_Show();
   navigate(`/${PAGE}`);
   
    
  }, []);
const Datamail = async (Name,File,Type,Status) => {
  console.log(RequestBy,"NameNameName")
  let dataEmail = ""
  let datareq=""
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
  try {
    const row = await axios.post("/get_req_mail", {
      Name: RequestBy
    });
    const data1 = row.data 
    console.log(data1,"kkkkkkkkk")
    datareq = data1[0][0]
   
    

  } catch (error) {
    console.error("Error sending email:", error);
  }
emailMessage(dataEmail,Name,File,Type,Status,datareq)
};
const Status_Show = async () => {
  let Name = "";
  let File = "";
  let Type = "";
  let Status = "";
  try {
    const response = await axios.post("/getStatus", {
      sts: status,
    });
    const data = response.data;
    console.log(data, "response");

    Status = data[0];
   
  } catch (error) {
    console.error("Error getting status:", error);
  }

  try {
    const response = await axios.post("/getName_To", {
      name: To_Send,
    });
    const data = response.data;
    console.log(data, "response");

    Name = data[0];
   
  } catch (error) {
    console.error("Error getting name:", error);
  }

  try {
    const response = await axios.post("/getType", {
      Type_show: RequestType,
    });
    const data = response.data;
    console.log(data, "response");

    Type = data[0];
  
  } catch (error) {
    console.error("Error getting type:", error);
  }

  try {
    const response = await axios.post("/getFile", {
      Type_show: RequestType,
    });
    const data = response.data;
    console.log(data, "response");

    File = data[0];

  } catch (error) {
    console.error("Error getting file:", error);
  }
  Datamail(Name, File, Type, Status);
};

const emailMessage = async (dataEmail,Name,File,Type,Status,datareq) => {
 
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
      <p style="color: red;"><a href="http://10.17.100.183:8080/" style="color: red;">Click here for action</a></p>
     
  </div>
</div>
</body>
  </html> 
  <br> <br> <br> <br> <br>  <br>  <br>  <br>  <br>  <br> <br><br> <br> <br> <br> <br>  <br>  <br>  <br>  <br>  <br> <br>
  `;
  if (!emailSent && dataEmail !== undefined && Name !== "" && File !== "" && Type !== "" && Status !== "" && datareq !== undefined) {
    console.log("เข้าาาาาาา", datareq);

    try {
      const response1 = await axios.post("http://10.17.74.202:5000/sendEmail", {
        headers: {
          'Content-Type': 'text/html',
        },
        toEmail: dataEmail[0],
        subject: "FAM system information",
        emailMessage: emailMessage
      });

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
    }
  } else {
    return;
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
