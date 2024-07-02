import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function FAM_REQUESTER() {
    const navigate = useNavigate();
    const VIEW_FAM = localStorage.getItem("EDIT");
    const VIEW_TYPE = localStorage.getItem("TYPE_flow")
    const NextPage = async () => {
      window.location.href = `/FAMsystem/FamTrans`;
    };
    const Back_page = async () => {
      window.location.href = `/FAMsystem/FAMMaster`;
      localStorage.removeItem("EDIT");
    };
    const For_Edit_Fixed = localStorage.getItem("Edit_Dteail_for_FixedCode");
    const For_Ed_FixCode = JSON.parse(For_Edit_Fixed);
  
    const For_edit_request = localStorage.getItem("For_Req_Edit");
    const For_Rq_Edit = JSON.parse(For_edit_request);
  
    const FileUp = localStorage.getItem("Type");
  
    const [isPopupOpenLoadding, setPopupOpenLoadding] = useState(false);
    const openPopupLoadding = () => {
      setPopupOpenLoadding(true);
    };
    const closePopupLoadding = () => {
      setPopupOpenLoadding(false);
    };
    const [Datafamno, setDatafamno] = useState([]);
    const [DataDetailfamno, setDataDetailfamno] = useState([]);
    const [DataNewCC_ToProj , setDataNewCC_ToProj] = useState([]);
    const [DataWeight_Size_Unit_Env , setDataWeight_Size_Unit_Env] = useState([]);
    
    const [STS , setSTS] = useState("")
    const [Filedata, setFiledata] = useState([]);
  
    const downloadFile = (fileName) => {
      const downloadUrl = `/downloads?filename=${encodeURIComponent(
        fileName
      )}`;
  
      axios({
        url: downloadUrl,
        method: "GET",
        responseType: "blob",
      })
        .then((response) => {
          const blob = new Blob([response.data], {
            type: response.headers["content-type"],
          });
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = "downloaded_file";
          link.click();
          window.URL.revokeObjectURL(link.href);
        })
        .catch((error) => {
          console.error("Error downloading file:", error);
        });
    };
    useEffect(() => {
        openPopupLoadding();
        const fetchData = () => {
          axios
            .post("/FAM_FILE_ATTACH", {
              FamNo: VIEW_FAM,
            })
            .then((res) => {
              const data = res.data;
              if (data.length > 0) {
                setFiledata(data);
              }
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
            });
        };
    
        const FAM_Hearder = async () => {
            try {
              const response = await axios.post("/getData_Hearder_show_VIEW", {
                famno: VIEW_FAM,
              });
            const data = await response.data;
            setDatafamno(data);
            setSTS(data[0][15])
          } catch (error) {
            console.error("Error FAM_Hearder:", error);
          }
        };
        const FAM_Detail = async () => {
       
            try {
              const response = await axios.post("/getData_Detail_show_VIEW", {
                famno: VIEW_FAM,
              });
            const data = await response.data;
            setDataDetailfamno(data);
          } catch (error) {
            console.error("Error FAM_Detail:", error);
          }
        };
        const NewwCC_ToProj = async () => {
       
          try {
            const response = await axios.post("/getData_NewCC_Toproject", {
              famno: VIEW_FAM,
            });
          const data = await response.data;
          setDataNewCC_ToProj(data);
        } catch (error) {
          console.error("Error RequesterORType:", error);
        }
      };
      const Weight_Size_Unit_INV = async () => {
       
        try {
          const response = await axios.post("/getWeight_Size_Unit_INV", {
            famno: VIEW_FAM,
          });
        const data = await response.data;
        setDataWeight_Size_Unit_Env(data);
      } catch (error) {
        console.error("Error RequesterORType:", error);
      }
    };
    
        fetchData();
        FAM_Hearder();
        FAM_Detail();
        NewwCC_ToProj();
        Weight_Size_Unit_INV();
        setTimeout(function () {
          closePopupLoadding();
        }, 2000);
      }, []);
    
  return {
    navigate,VIEW_TYPE,NextPage,Back_page,For_Rq_Edit,isPopupOpenLoadding,
    Datafamno,DataDetailfamno,Filedata,downloadFile,closePopupLoadding,downloadFile,STS,DataNewCC_ToProj,DataWeight_Size_Unit_Env
    
  }
}

export  {FAM_REQUESTER}