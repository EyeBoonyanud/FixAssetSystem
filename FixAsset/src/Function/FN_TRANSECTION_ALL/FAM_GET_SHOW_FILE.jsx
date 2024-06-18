import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FAM_GET_REQUEST } from "../FN_TRANSECTION_ALL/FAM_GET_REQUEST";
import { FAM_TRANSECTION_TLWLD } from "../FN_TRANSECTION_ALL/FAM_TRANSECTION_TLWLD";
import Swal from "sweetalert2";

function FAM_GET_SHOW_FILE() {
  const { EditFam, For_Rq_Edit, Gen_Fam_No, LocalUserLogin } =
    FAM_GET_REQUEST();
  const { For_Req } = FAM_TRANSECTION_TLWLD();
  //Upload Lending
  const [uploadedFiles_Own, setuploadedFiles_Own] = useState([]);
  const [uploadedFilesDATA_Own, setUploadedFilesDATA_Own] = useState([]);
  const [uploadedFiles_Own_return, setuploadedFiles_Own_return] = useState([]);
  const [uploadedFilesDATA_Own_return, setUploadedFilesDATA_Own_return] =
    useState([]);
  //Show File Lending
  const [showfile_owner, setshowfile_owner] = useState([]);
  const [showfile_owner_return, setshowfile_owner_return] = useState([]);

  //Upload Scrap
  const [uploadedFiles_PTE, setuploadedFiles_PTE] = useState([]);
  const [uploadedFilesDATA_PTE, setUploadedFilesDATA_PTE] = useState([]);
  const [uploadedFiles_PLN_Staff, setuploadedFiles_PLN_Staff] = useState([]);
  const [uploadedFilesDATA_PLN_Staff, setUploadedFilesDATA_PLN_Staff] =useState([]);
  const [uploadedFiles_Shipping, setuploadedFiles_Shipping] = useState([]);
  const [uploadedFilesDATA_Shipping, setUploadedFilesDATA_Shipping] =useState([]);
  //ShowFile Scrap
  const [showfile_pte_env, setshowfile_pte_env] = useState([]);
  const [showfile_pln_staff, setshowfile_pln_staff] = useState([]);
  const [showfile_shipping, setshowfile_shipping] = useState([]);

  //Upload Sale
  const [uploadedFiles_pte_env_ws, setuploadedFiles_pte_env_ws] = useState([]);
  const [uploadedFiles_pln_stf_boi, setuploadedFiles_pln_stf_boi] = useState([]);
  const [uploadedFiles_imp_boi_prepare, setuploadedFiles_imp_boi_prepare] = useState([]);
  const [uploadedFiles_imp_input_data, setuploadedFiles_imp_input_data] = useState([]);
  const [uploadedFiles_thai_catergorise, setuploadedFiles_thai_catergorise] = useState([]);
  const [uploadedFiles_pln_stf_bidding, setuploadedFiles_pln_stf_bidding] = useState([]);
  const [uploadedFiles_pte_dept, setuploadedFiles_pte_dept] = useState([]);
  const [uploadedFiles_boi_exp_clearance, setuploadedFiles_boi_exp_clearance] = useState([]);
  const [uploadedFiles_pte_upload_after, setuploadedFiles_pte_upload_after] = useState([]);
  const [uploadedFiles_pln_stf_req_inv, setuploadedFiles_pln_stf_req_inv] = useState([]);
  const [uploadedFiles_ship_input_inv, setuploadedFiles_ship_input_inv] = useState([]);
  const [uploadedFiles_pln_upload_final, setuploadedFiles_pln_upload_final] = useState([]);

  const [uploadedFilesDATA_pte_env_ws, setUploadedFilesDATA_pte_env_ws] = useState([]);
  const [uploadedFilesDATA_pln_stf_boi, setUploadedFilesDATA_pln_stf_boi] = useState([]);
  const [uploadedFilesDATA_imp_boi_prepare, setUploadedFilesDATA_imp_boi_prepare] = useState([]);
  const [uploadedFilesDATA_imp_input_data, setUploadedFilesDATA_imp_input_data] = useState([]);
  const [uploadedFilesDATA_thai_catergorise, setUploadedFilesDATA_thai_catergorise] = useState([]);
  const [uploadedFilesDATA_pln_stf_bidding, setUploadedFilesDATA_pln_stf_bidding] = useState([]);
  const [uploadedFilesDATA_pte_dept, setUploadedFilesDATA_pte_dept] = useState([]);
  const [uploadedFilesDATA_boi_exp_clearance, setUploadedFilesDATA_boi_exp_clearance] = useState([]);
  const [uploadedFilesDATA_pte_upload_after, setUploadedFilesDATA_pte_upload_after] = useState([]);
  const [uploadedFilesDATA_pln_stf_req_inv, setUploadedFilesDATA_pln_stf_req_inv] = useState([]);
  const [uploadedFilesDATA_ship_input_inv, setUploadedFilesDATA_ship_input_inv] = useState([]);
  const [uploadedFilesDATA_uploadfinal, setUploadedFilesDATA_uploadfinal] = useState([]);
  //ShowFile Sale
  const [showfilepte_env_ws,setshowfilepte_env_ws] = useState([]);
  const [showfilepln_stf_boi,setshowfilepln_stf_boi] = useState([]);
  const [showfileimp_boi_prepare,setshowfileimp_boi_prepare] = useState([]);
  const [showfileimp_input_data,setshowfileimp_input_data] = useState([]);
  const [showfilethai_catergorise,setshowfilethai_catergorise] = useState([]);
  const [showfilepln_stf_bidding,setshowfilepln_stf_bidding] = useState([]);
  const [showfilepte_dept,setshowfilepte_dept] = useState([]);
  const [showfileboi_exp_clearance,setshowfileboi_exp_clearance] = useState([]);
  const [showfilepte_upload_after,setshowfilepte_upload_after] = useState([]);
  const [showfilepln_stf_req_inv,setshowfilepln_stf_req_inv] = useState([]);
  const [showfileship_input_inv,setshowfileship_input_inv] = useState([]);
  const [showfilepln_upload_final,setshowfilepln_upload_final] = useState([]);

  let Gen_Fam_No_Show = "";
  if (EditFam != null) {
    if (EditFam != null) {
      if (For_Rq_Edit != null) {
        Gen_Fam_No_Show = For_Rq_Edit[0];
      }
    } else {
      if (For_Req != null) {
        Gen_Fam_No_Show = For_Req[0];
      }
    }
  }
  let Status_for_owner = "";
  let StatusFile = "";
  if (For_Req !== null) {
    StatusFile = For_Req[6];
    Status_for_owner = For_Req[10];
  } else if (For_Rq_Edit) {
    StatusFile = For_Rq_Edit[7];
    Status_for_owner = For_Rq_Edit[10];
  }
  useEffect(() => {
    fetchData();
    fetchData_Owner_return();
    fetchData_PTE_ENV();
    fetchData_PLN_Staff();
    fetchData_Shipping();
    fetchData_ENV1_SALE();
    fetchData_PLN1_SALE();
    fetchData_IMP1_SALE();
    fetchData_BOI1_SALE();
    fetchData_IMP2_SALE();
    fetchData_PLN2_SALE();
    fetchData_ENV2_SALE();
    fetchData_BOI2_SALE();
    fetchData_ENV3_SALE();
    fetchData_PLN3_SALE();
    fetchData_PLN4_SALE();
  }, []);
  // Donation
  const fetchData = async () => {
    try {
      const response = await axios.post("/getFAM_FILE_DATA", {
        FamNo: Gen_Fam_No_Show,
        ATT_FROM:'OWNER CHECK'
      });
      const jsonData = await response.data;
      setshowfile_owner(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData_Owner_return = async () => {
    try {
      const response = await axios.post("/getFAM_FILE_DATA", {
        FamNo: Gen_Fam_No_Show,
        ATT_FROM:'OWNER RETURN'
      });
      const jsonData = await response.data;
      setshowfile_owner_return(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData_PTE_ENV = async () => {
    try {
      const response = await axios.post("/getFAM_FILE_DATA", {
        FamNo: Gen_Fam_No_Show,
        ATT_FROM:'ENV CHECK'
      });
      const jsonData = await response.data;
      setshowfile_pte_env(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData_PLN_Staff = async () => {
    try {
      const response = await axios.post("/getFAM_FILE_DATA", {
        FamNo: Gen_Fam_No_Show,
        ATT_FROM:'PLN CHECK'
      });
      const jsonData = await response.data;   
      setshowfile_pln_staff(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData_Shipping = async () => {
   try {
      const response = await axios.post("/getFAM_FILE_DATA", {
        FamNo: Gen_Fam_No_Show,
        ATT_FROM:'SHP CHECK'
      });
      const jsonData = await response.data;   
      setshowfile_shipping(jsonData);
      setshowfileship_input_inv(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //SALE
  const fetchData_ENV1_SALE = async () => {
    try {
       const response = await axios.post("/getFAM_FILE_DATA", {
         FamNo: Gen_Fam_No_Show,
         ATT_FROM:'ENV1 SALE'
       });
       const jsonData = await response.data;   
       setshowfilepte_env_ws(jsonData);
     } catch (error) {
       console.error("Error fetchData_ENV1_SALE:", error);
     }
    };
   const fetchData_PLN1_SALE  = async () => {
    try {
       const response = await axios.post("/getFAM_FILE_DATA", {
         FamNo: Gen_Fam_No_Show,
         ATT_FROM:'PLN1 SALE'
       });
       const jsonData = await response.data;   
       setshowfilepln_stf_boi(jsonData);
     } catch (error) {
       console.error("Error fetchData_PLN1_SALE:", error);
     }
   };
   const fetchData_IMP1_SALE  = async () => {
    try {
       const response = await axios.post("/getFAM_FILE_DATA", {
         FamNo: Gen_Fam_No_Show,
         ATT_FROM:'IMP1 SALE'
       });
       const jsonData = await response.data;   
       setshowfileimp_boi_prepare(jsonData);
     } catch (error) {
       console.error("Error fetchData_ENV1_SALE:", error);
     }
   };
   const fetchData_BOI1_SALE  = async () => {
    try {
       const response = await axios.post("/getFAM_FILE_DATA", {
         FamNo: Gen_Fam_No_Show,
         ATT_FROM:'BOI1 SALE'
       });
       const jsonData = await response.data;   
       setshowfileimp_input_data(jsonData);
     } catch (error) {
       console.error("Error fetchData_ENV1_SALE:", error);
     }
   };
   const fetchData_IMP2_SALE  = async () => {
    try {
       const response = await axios.post("/getFAM_FILE_DATA", {
         FamNo: Gen_Fam_No_Show,
         ATT_FROM:'IMP2 SALE'
       });
       const jsonData = await response.data;   
       setshowfilethai_catergorise(jsonData);
     } catch (error) {
       console.error("Error fetchData_ENV1_SALE:", error);
     }
   };
   const fetchData_PLN2_SALE  = async () => {
    try {
       const response = await axios.post("/getFAM_FILE_DATA", {
         FamNo: Gen_Fam_No_Show,
         ATT_FROM:'PLN2 SALE'
       });
       const jsonData = await response.data;   
       setshowfilepln_stf_bidding(jsonData);
     } catch (error) {
       console.error("Error fetchData_ENV1_SALE:", error);
     }
   };
   const fetchData_ENV2_SALE  = async () => {
    try {
       const response = await axios.post("/getFAM_FILE_DATA", {
         FamNo: Gen_Fam_No_Show,
         ATT_FROM:'ENV2 SALE'
       });
       const jsonData = await response.data;   
       setshowfilepte_dept(jsonData);
     } catch (error) {
       console.error("Error fetchData_ENV2_SALE:", error);
     }
   };
   const fetchData_BOI2_SALE  = async () => {
    try {
       const response = await axios.post("/getFAM_FILE_DATA", {
         FamNo: Gen_Fam_No_Show,
         ATT_FROM:'BOI2 SALE'
       });
       const jsonData = await response.data;   
       setshowfileboi_exp_clearance(jsonData);
     } catch (error) {
       console.error("Error fetchData_BOI2_SALE:", error);
     }
   };
   const fetchData_ENV3_SALE  = async () => {
    try {
       const response = await axios.post("/getFAM_FILE_DATA", {
         FamNo: Gen_Fam_No_Show,
         ATT_FROM:'ENV3 SALE'
       });
       const jsonData = await response.data;   
       setshowfilepte_upload_after(jsonData);
     } catch (error) {
       console.error("Error fetchData_ENV3_SALE", error);
     }
   };
   const fetchData_PLN3_SALE  = async () => {
    try {
       const response = await axios.post("/getFAM_FILE_DATA", {
         FamNo: Gen_Fam_No_Show,
         ATT_FROM:'PLN3 SALE'
       });
       const jsonData = await response.data;   
       setshowfilepln_stf_req_inv(jsonData);
     } catch (error) {
       console.error("Error fetchData_PLN3_SALE", error);
     }
   };
   const fetchData_PLN4_SALE  = async () => {
    try {
       const response = await axios.post("/getFAM_FILE_DATA", {
         FamNo: Gen_Fam_No_Show,
         ATT_FROM:'PLN4 SALE'
       });
       const jsonData = await response.data;   
       setshowfilepln_upload_final(jsonData);
     } catch (error) {
       console.error("Error fetchData_PLN3_SALE", error);
     }
   };



  const handleDL_File_Owner = async (index, file, fileName) => {
    if (Status_for_owner == "FLLD100") {
      const updatedFiles = uploadedFiles_Own_return.filter(
        (uploadedFile, i) => i !== index
      );
      setuploadedFiles_Own_return(updatedFiles);

      try {
        const response = await axios.post("/deletefile", {
          famno: Gen_Fam_No,
          name_for_file: file,
        });
        localStorage.removeItem("Type");
      } catch (error) {
        console.error("Error deleting file:", error);
      }
      try {
        const response = await axios.delete(`/deleteFile?data=${fileName}`);
      } catch (error) {
        console.error("Error deleting file:", error);
      }
      fetchData_Owner_return();
    }else if (Status_for_owner == "FLSC009") {
      const updatedFiles = uploadedFiles_PTE.filter(
        (uploadedFile, i) => i !== index
      );
      setuploadedFiles_PTE(updatedFiles);

      try {
        const response = await axios.post("/deletefile", {
          famno: Gen_Fam_No,
          name_for_file: file,
        });
        localStorage.removeItem("Type");
      } catch (error) {
        console.error("Error handleDL_File_Owner:", error);
      }
      try {
        const response = await axios.delete(`/deleteFile?data=${fileName}`);
      } catch (error) {
        console.error("Error deleting file:", error);
      }
      fetchData_PTE_ENV();
    }else if (Status_for_owner == "FLSC100") {
      const updatedFiles = uploadedFiles_PLN_Staff.filter(
        (uploadedFile, i) => i !== index
      );
      setuploadedFiles_PLN_Staff(updatedFiles);

      try {
        const response = await axios.post("/deletefile", {
          famno: Gen_Fam_No,
          name_for_file: file,
        });
        localStorage.removeItem("Type");
      } catch (error) {
        console.error("Error handleDL_File_PLN:", error);
      }
      try {
        const response = await axios.delete(`/deleteFile?data=${fileName}`);
      } catch (error) {
        console.error("Error deleting file:", error);
      }
      fetchData_PLN_Staff();
    }else if (Status_for_owner == "FLSC101") {
      const updatedFiles = uploadedFiles_Shipping.filter(
        (uploadedFile, i) => i !== index
      );
      setuploadedFiles_Shipping(updatedFiles);

      try {
        const response = await axios.post("/deletefile", {
          famno: Gen_Fam_No,
          name_for_file: file,
        });
        localStorage.removeItem("Type");
      } catch (error) {
        console.error("Error Files_Shipping:", error);
      }
      try {
        const response = await axios.delete(`/deleteFile?data=${fileName}`);
      } catch (error) {
        console.error("Error deleting file:", error);
      }
      fetchData_Shipping();
    }else if (Status_for_owner == "FLSL009") {
      const updatedFiles = uploadedFiles_pte_env_ws.filter(
        (uploadedFile, i) => i !== index
      );
      setuploadedFiles_pte_env_ws(updatedFiles);

      try {
        const response = await axios.post("/deletefile", {
          famno: Gen_Fam_No,
          name_for_file: file,
        });
        localStorage.removeItem("Type");
      } catch (error) {
        console.error("delete setuploadedFiles_pte_env_ws:", error);
      }
      try {
        const response = await axios.delete(`/deleteFile?data=${fileName}`);
      } catch (error) {
        console.error("Error deleting file:", error);
      }
      fetchData_ENV1_SALE();
    }else if (Status_for_owner == "FLSL010") {
      const updatedFiles = uploadedFiles_pln_stf_boi.filter(
        (uploadedFile, i) => i !== index
      );
      setuploadedFiles_pln_stf_boi(updatedFiles);

      try {
        const response = await axios.post("/deletefile", {
          famno: Gen_Fam_No,
          name_for_file: file,
        });
        localStorage.removeItem("Type");
      } catch (error) {
        console.error("delete setuploadedFiles_pte_env_ws:", error);
      }
      try {
        const response = await axios.delete(`/deleteFile?data=${fileName}`);
      } catch (error) {
        console.error("Error deleting file:", error);
      }
      fetchData_PLN1_SALE();
    }else if (Status_for_owner == "FLSL011") {
      const updatedFiles = uploadedFiles_imp_boi_prepare.filter(
        (uploadedFile, i) => i !== index
      );
      setuploadedFiles_imp_boi_prepare(updatedFiles);

      try {
        const response = await axios.post("/deletefile", {
          famno: Gen_Fam_No,
          name_for_file: file,
        });
        localStorage.removeItem("Type");
      } catch (error) {
        console.error("delete uploadedFiles_imp_boi_prepare:", error);
      }
      try {
        const response = await axios.delete(`/deleteFile?data=${fileName}`);
      } catch (error) {
        console.error("Error deleting file:", error);
      }
      fetchData_IMP1_SALE();
    }else if (Status_for_owner == "FLSL012") {
      const updatedFiles = uploadedFiles_imp_input_data.filter(
        (uploadedFile, i) => i !== index
      );
      setuploadedFiles_imp_input_data(updatedFiles);

      try {
        const response = await axios.post("/deletefile", {
          famno: Gen_Fam_No,
          name_for_file: file,
        });
        localStorage.removeItem("Type");
      } catch (error) {
        console.error("delete setuploadedFiles_imp_input_data:", error);
      }
      try {
        const response = await axios.delete(`/deleteFile?data=${fileName}`);
      } catch (error) {
        console.error("Error deleting file:", error);
      }
      fetchData_BOI1_SALE();
    }else if (Status_for_owner == "FLSL013") {
      const updatedFiles = uploadedFiles_thai_catergorise.filter(
        (uploadedFile, i) => i !== index
      );
      setuploadedFiles_thai_catergorise(updatedFiles);

      try {
        const response = await axios.post("/deletefile", {
          famno: Gen_Fam_No,
          name_for_file: file,
        });
        localStorage.removeItem("Type");
      } catch (error) {
        console.error("delete setuploadedFiles_thai_catergorise:", error);
      }
      try {
        const response = await axios.delete(`/deleteFile?data=${fileName}`);
      } catch (error) {
        console.error("Error deleting file:", error);
      }
      fetchData_IMP2_SALE();
    }else if (Status_for_owner == "FLSL014") {
      const updatedFiles = uploadedFiles_pln_stf_bidding.filter(
        (uploadedFile, i) => i !== index
      );
      setuploadedFiles_pln_stf_bidding(updatedFiles);

      try {
        const response = await axios.post("/deletefile", {
          famno: Gen_Fam_No,
          name_for_file: file,
        });
        localStorage.removeItem("Type");
      } catch (error) {
        console.error("delete uploadedFiles_pln_stf_biddin:", error);
      }
      try {
        const response = await axios.delete(`/deleteFile?data=${fileName}`);
      } catch (error) {
        console.error("Error deleting file:", error);
      }
      fetchData_PLN2_SALE();
    }else if (Status_for_owner == "FLSL015") {
      const updatedFiles = uploadedFiles_pte_dept.filter(
        (uploadedFile, i) => i !== index
      );
      setuploadedFiles_pte_dept(updatedFiles);

      try {
        const response = await axios.post("/deletefile", {
          famno: Gen_Fam_No,
          name_for_file: file,
        });
        localStorage.removeItem("Type");
      } catch (error) {
        console.error("delete uploadedFiles_pln_stf_biddin:", error);
      }
      try {
        const response = await axios.delete(`/deleteFile?data=${fileName}`);
      } catch (error) {
        console.error("Error deleting file:", error);
      }
      fetchData_ENV2_SALE();
    }else if (Status_for_owner == "FLSL016") {
      const updatedFiles = uploadedFiles_boi_exp_clearance.filter(
        (uploadedFile, i) => i !== index
      );
      setuploadedFiles_boi_exp_clearance(updatedFiles);

      try {
        const response = await axios.post("/deletefile", {
          famno: Gen_Fam_No,
          name_for_file: file,
        });
        localStorage.removeItem("Type");
      } catch (error) {
        console.error("delete uploadedFiles_boi_exp_clearance:", error);
      }
      try {
        const response = await axios.delete(`/deleteFile?data=${fileName}`);
      } catch (error) {
        console.error("Error deleting file:", error);
      }
      fetchData_BOI2_SALE();
    }else if (Status_for_owner == "FLSL017") {
      const updatedFiles = uploadedFiles_pte_upload_after.filter(
        (uploadedFile, i) => i !== index
      );
      setuploadedFiles_pte_upload_after(updatedFiles);

      try {
        const response = await axios.post("/deletefile", {
          famno: Gen_Fam_No,
          name_for_file: file,
        });
        localStorage.removeItem("Type");
      } catch (error) {
        console.error("delete uploadedFiles_pte_upload_after:", error);
      }
      try {
        const response = await axios.delete(`/deleteFile?data=${fileName}`);
      } catch (error) {
        console.error("Error deleting file:", error);
      }
      fetchData_ENV3_SALE();
    }else if (Status_for_owner == "FLSL018") {
      const updatedFiles = uploadedFiles_pln_stf_req_inv.filter(
        (uploadedFile, i) => i !== index
      );
      setuploadedFiles_pln_stf_req_inv(updatedFiles);

      try {
        const response = await axios.post("/deletefile", {
          famno: Gen_Fam_No,
          name_for_file: file,
        });
        localStorage.removeItem("Type");
      } catch (error) {
        console.error("delete uploadedFiles_pte_upload_after:", error);
      }
      try {
        const response = await axios.delete(`/deleteFile?data=${fileName}`);
      } catch (error) {
        console.error("Error deleting file:", error);
      }
      fetchData_PLN3_SALE();
    }else if (Status_for_owner == "FLSL019") {
      const updatedFiles = uploadedFiles_ship_input_inv.filter(
        (uploadedFile, i) => i !== index
      );
      setuploadedFiles_ship_input_inv(updatedFiles);

      try {
        const response = await axios.post("/deletefile", {
          famno: Gen_Fam_No,
          name_for_file: file,
        });
        localStorage.removeItem("Type");
      } catch (error) {
        console.error("delete uploadedFiles_ship_input_inv:", error);
      }
      try {
        const response = await axios.delete(`/deleteFile?data=${fileName}`);
      } catch (error) {
        console.error("Error deleting file:", error);
      }
      fetchData_Shipping();
    }else if (Status_for_owner == "FLSL020") {
      const updatedFiles = uploadedFiles_pln_upload_final.filter(
        (uploadedFile, i) => i !== index
      );
      setuploadedFiles_pln_upload_final(updatedFiles);

      try {
        const response = await axios.post("/deletefile", {
          famno: Gen_Fam_No,
          name_for_file: file,
        });
        localStorage.removeItem("Type");
      } catch (error) {
        console.error("delete setuploadedFiles_pln_upload_final:", error);
      }
      try {
        const response = await axios.delete(`/deleteFile?data=${fileName}`);
      } catch (error) {
        console.error("Error deleting file:", error);
      }
      fetchData_PLN4_SALE();
    }else {
      const updatedFiles = uploadedFiles_Own.filter(
        (uploadedFile, i) => i !== index
      );
      setuploadedFiles_Own(updatedFiles);

      try {
        const response = await axios.post("/deletefile", {
          famno: Gen_Fam_No,
          name_for_file: file,
        });
        localStorage.removeItem("Type");
      } catch (error) {
        console.error("Error deleting file:", error);
      }
      try {
        const response = await axios.delete(`/deleteFile?data=${fileName}`);
      } catch (error) {
        console.error("Error deleting file:", error);
      }
      fetchData();
    }
  };
  const handleDragOve_Own = (event) => {
    event.preventDefault();
  };
  const handleDrop_Own = (event) => {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files) {
      handleFileUpload_Own({ target: { files } });
    }
  };
  const handleFileUpload_Own = (event) => {
    const selectedFiles = event.target.files;

    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/jpg",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
    ];

    const maxSize = 10 * 1024 * 1024;

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const fileType = file.type;

      if (!allowedTypes.includes(fileType)) {
        alert("Only PDF, JPG, and XLS files are allowed.");
        return;
      }

      if (file.size > maxSize) {
        alert("File size exceeds 10 MB.");
        return;
      }
    }
    if (Status_for_owner == "FLLD100") {
      setuploadedFiles_Own_return([
        ...uploadedFiles_Own_return,
        ...selectedFiles,
      ]);
      setUploadedFilesDATA_Own_return([
        ...uploadedFilesDATA_Own_return,
        ...selectedFiles,
      ]);
      const jsonDataArray = uploadedFilesDATA_Own_return.map((file) => ({
        name: file.name,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate
          ? file.lastModifiedDate.toISOString()
          : null,
        webkitRelativePath: file.webkitRelativePath,
        size: file.size,
        type: file.type,
      }));
      const fileArrayString = JSON.stringify(jsonDataArray);
      localStorage.setItem("Type", fileArrayString);
    }else if (Status_for_owner == "FLSC009") {
      setuploadedFiles_PTE([...uploadedFiles_PTE, ...selectedFiles]);
      setUploadedFilesDATA_PTE([...uploadedFilesDATA_PTE, ...selectedFiles]);
      const jsonDataArray = uploadedFilesDATA_PTE.map((file) => ({
        name: file.name,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate
          ? file.lastModifiedDate.toISOString()
          : null,
        webkitRelativePath: file.webkitRelativePath,
        size: file.size,
        type: file.type,
      }));
      const fileArrayString = JSON.stringify(jsonDataArray);
      localStorage.setItem("Type", fileArrayString);
    }else if (Status_for_owner == "FLSC100") {
      setuploadedFiles_PLN_Staff([...uploadedFiles_PLN_Staff, ...selectedFiles]);
      setUploadedFilesDATA_PLN_Staff([...uploadedFilesDATA_PLN_Staff, ...selectedFiles]);
      const jsonDataArray = uploadedFilesDATA_PLN_Staff.map((file) => ({
        name: file.name,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate
          ? file.lastModifiedDate.toISOString()
          : null,
        webkitRelativePath: file.webkitRelativePath,
        size: file.size,
        type: file.type,
      }));
      const fileArrayString = JSON.stringify(jsonDataArray);
      localStorage.setItem("Type", fileArrayString);
    }else if (Status_for_owner == "FLSC101") {
      setuploadedFiles_Shipping([...uploadedFiles_Shipping, ...selectedFiles]);
      setUploadedFilesDATA_Shipping([...uploadedFilesDATA_Shipping, ...selectedFiles]);
      const jsonDataArray = uploadedFilesDATA_Shipping.map((file) => ({
        name: file.name,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate
          ? file.lastModifiedDate.toISOString()
          : null,
        webkitRelativePath: file.webkitRelativePath,
        size: file.size,
        type: file.type,
      }));
      const fileArrayString = JSON.stringify(jsonDataArray);
      localStorage.setItem("Type", fileArrayString);
    }else if (Status_for_owner == "FLSL009") {
      setuploadedFiles_pte_env_ws([...uploadedFiles_pte_env_ws, ...selectedFiles]);
      setUploadedFilesDATA_pte_env_ws([...uploadedFilesDATA_pte_env_ws, ...selectedFiles]);
      const jsonDataArray = uploadedFilesDATA_pte_env_ws.map((file) => ({
        name: file.name,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate
          ? file.lastModifiedDate.toISOString()
          : null,
        webkitRelativePath: file.webkitRelativePath,
        size: file.size,
        type: file.type,
      }));
      const fileArrayString = JSON.stringify(jsonDataArray);
      localStorage.setItem("Type", fileArrayString);
    }else if (Status_for_owner == "FLSL010") {
      setuploadedFiles_pln_stf_boi([...uploadedFiles_pln_stf_boi, ...selectedFiles]);
      setUploadedFilesDATA_pln_stf_boi([...uploadedFilesDATA_pln_stf_boi, ...selectedFiles]);
      const jsonDataArray = uploadedFilesDATA_pln_stf_boi.map((file) => ({
        name: file.name,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate
          ? file.lastModifiedDate.toISOString()
          : null,
        webkitRelativePath: file.webkitRelativePath,
        size: file.size,
        type: file.type,
      }));
      const fileArrayString = JSON.stringify(jsonDataArray);
      localStorage.setItem("Type", fileArrayString);
    }else if (Status_for_owner == "FLSL011") {
      setuploadedFiles_imp_boi_prepare([...uploadedFiles_imp_boi_prepare, ...selectedFiles]);
      setUploadedFilesDATA_imp_boi_prepare([...uploadedFilesDATA_imp_boi_prepare, ...selectedFiles]);
      const jsonDataArray = uploadedFilesDATA_imp_boi_prepare.map((file) => ({
        name: file.name,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate
          ? file.lastModifiedDate.toISOString()
          : null,
        webkitRelativePath: file.webkitRelativePath,
        size: file.size,
        type: file.type,
      }));
      const fileArrayString = JSON.stringify(jsonDataArray);
      localStorage.setItem("Type", fileArrayString);
    }else if (Status_for_owner == "FLSL012") {
      setuploadedFiles_imp_input_data([...uploadedFiles_imp_input_data, ...selectedFiles]);
      setUploadedFilesDATA_imp_input_data([...uploadedFilesDATA_imp_input_data, ...selectedFiles]);
      const jsonDataArray = uploadedFilesDATA_imp_input_data.map((file) => ({
        name: file.name,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate
          ? file.lastModifiedDate.toISOString()
          : null,
        webkitRelativePath: file.webkitRelativePath,
        size: file.size,
        type: file.type,
      }));
      const fileArrayString = JSON.stringify(jsonDataArray);
      localStorage.setItem("Type", fileArrayString);
    }else if (Status_for_owner == "FLSL013") {
      setuploadedFiles_thai_catergorise([...uploadedFiles_thai_catergorise, ...selectedFiles]);
      setUploadedFilesDATA_thai_catergorise([...uploadedFilesDATA_thai_catergorise, ...selectedFiles]);
      const jsonDataArray = uploadedFilesDATA_thai_catergorise.map((file) => ({
        name: file.name,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate
          ? file.lastModifiedDate.toISOString()
          : null,
        webkitRelativePath: file.webkitRelativePath,
        size: file.size,
        type: file.type,
      }));
      const fileArrayString = JSON.stringify(jsonDataArray);
      localStorage.setItem("Type", fileArrayString);
    }else if (Status_for_owner == "FLSL014") {
      setuploadedFiles_pln_stf_bidding([...uploadedFiles_pln_stf_bidding, ...selectedFiles]);
      setUploadedFilesDATA_pln_stf_bidding([...uploadedFilesDATA_pln_stf_bidding, ...selectedFiles]);
      const jsonDataArray = uploadedFilesDATA_pln_stf_bidding.map((file) => ({
        name: file.name,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate
          ? file.lastModifiedDate.toISOString()
          : null,
        webkitRelativePath: file.webkitRelativePath,
        size: file.size,
        type: file.type,
      }));
      const fileArrayString = JSON.stringify(jsonDataArray);
      localStorage.setItem("Type", fileArrayString);
    }else if (Status_for_owner == "FLSL015") {
      setuploadedFiles_pte_dept([...uploadedFiles_pte_dept, ...selectedFiles]);
      setUploadedFilesDATA_pte_dept([...uploadedFilesDATA_pte_dept, ...selectedFiles]);
      const jsonDataArray = uploadedFilesDATA_pte_dept.map((file) => ({
        name: file.name,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate
          ? file.lastModifiedDate.toISOString()
          : null,
        webkitRelativePath: file.webkitRelativePath,
        size: file.size,
        type: file.type,
      }));
      const fileArrayString = JSON.stringify(jsonDataArray);
      localStorage.setItem("Type", fileArrayString);
    }else if (Status_for_owner == "FLSL016") {
      setuploadedFiles_boi_exp_clearance([...uploadedFiles_boi_exp_clearance, ...selectedFiles]);
      setUploadedFilesDATA_boi_exp_clearance([...uploadedFilesDATA_boi_exp_clearance, ...selectedFiles]);
      const jsonDataArray = uploadedFilesDATA_boi_exp_clearance.map((file) => ({
        name: file.name,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate
          ? file.lastModifiedDate.toISOString()
          : null,
        webkitRelativePath: file.webkitRelativePath,
        size: file.size,
        type: file.type,
      }));
      const fileArrayString = JSON.stringify(jsonDataArray);
      localStorage.setItem("Type", fileArrayString);
    }else if (Status_for_owner == "FLSL017") {
      setuploadedFiles_pte_upload_after([...uploadedFiles_pte_upload_after, ...selectedFiles]);
      setUploadedFilesDATA_pte_upload_after([...uploadedFilesDATA_pte_upload_after, ...selectedFiles]);
      const jsonDataArray = uploadedFilesDATA_pte_upload_after.map((file) => ({
        name: file.name,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate
          ? file.lastModifiedDate.toISOString()
          : null,
        webkitRelativePath: file.webkitRelativePath,
        size: file.size,
        type: file.type,
      }));
      const fileArrayString = JSON.stringify(jsonDataArray);
      localStorage.setItem("Type", fileArrayString);
    }else if (Status_for_owner == "FLSL018") {
      setuploadedFiles_pln_stf_req_inv([...uploadedFiles_pln_stf_req_inv, ...selectedFiles]);
      setUploadedFilesDATA_pln_stf_req_inv([...uploadedFilesDATA_pln_stf_req_inv, ...selectedFiles]);
      const jsonDataArray = uploadedFilesDATA_pln_stf_req_inv.map((file) => ({
        name: file.name,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate
          ? file.lastModifiedDate.toISOString()
          : null,
        webkitRelativePath: file.webkitRelativePath,
        size: file.size,
        type: file.type,
      }));
      const fileArrayString = JSON.stringify(jsonDataArray);
      localStorage.setItem("Type", fileArrayString);
    }else if (Status_for_owner == "FLSL019") {
      setuploadedFiles_ship_input_inv([...uploadedFiles_ship_input_inv, ...selectedFiles]);
      setUploadedFilesDATA_ship_input_inv([...uploadedFilesDATA_ship_input_inv, ...selectedFiles]);
      const jsonDataArray = uploadedFilesDATA_ship_input_inv.map((file) => ({
        name: file.name,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate
          ? file.lastModifiedDate.toISOString()
          : null,
        webkitRelativePath: file.webkitRelativePath,
        size: file.size,
        type: file.type,
      }));
      const fileArrayString = JSON.stringify(jsonDataArray);
      localStorage.setItem("Type", fileArrayString);
    }else if (Status_for_owner == "FLSL020") {
      setuploadedFiles_pln_upload_final([...uploadedFiles_pln_upload_final, ...selectedFiles]);
      setUploadedFilesDATA_uploadfinal([...uploadedFilesDATA_uploadfinal, ...selectedFiles]);
      const jsonDataArray = uploadedFilesDATA_uploadfinal.map((file) => ({
        name: file.name,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate
          ? file.lastModifiedDate.toISOString()
          : null,
        webkitRelativePath: file.webkitRelativePath,
        size: file.size,
        type: file.type,
      }));
      const fileArrayString = JSON.stringify(jsonDataArray);
      localStorage.setItem("Type", fileArrayString);
    } else {
      setuploadedFiles_Own([...uploadedFiles_Own, ...selectedFiles]);
      setUploadedFilesDATA_Own([...uploadedFilesDATA_Own, ...selectedFiles]);
      const jsonDataArray = uploadedFilesDATA_Own.map((file) => ({
        name: file.name,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate
          ? file.lastModifiedDate.toISOString()
          : null,
        webkitRelativePath: file.webkitRelativePath,
        size: file.size,
        type: file.type,
      }));
      const fileArrayString = JSON.stringify(jsonDataArray);
      localStorage.setItem("Type", fileArrayString);
    }
  };


  
  const handleSav_Own = async () => {
    let FAM_FORM = "";
    if (Status_for_owner == "FLLD100") {
      FAM_FORM = "OWNER RETURN";
    }else if (Status_for_owner == "FLSC009") {
      FAM_FORM = "ENV CHECK";
    }else if (Status_for_owner == "FLSC100") {
      FAM_FORM = "PLN CHECK";
    }else if (Status_for_owner == "FLSC101" || Status_for_owner == "FLSL019" ) {
      FAM_FORM = "SHP CHECK";
    }else if (Status_for_owner == "FLSL009") {
      FAM_FORM = "ENV1 SALE";
    }else if (Status_for_owner == "FLSL010") {
      FAM_FORM = "PLN1 SALE";
    }else if (Status_for_owner == "FLSL011") {
      FAM_FORM = "IMP1 SALE";
    }else if (Status_for_owner == "FLSL012") {
      FAM_FORM = "BOI1 SALE";
    }else if (Status_for_owner == "FLSL013") {
      FAM_FORM = "IMP2 SALE";
    }else if (Status_for_owner == "FLSL014") {
      FAM_FORM = "PLN2 SALE";
    }else if (Status_for_owner == "FLSL015") {
      FAM_FORM = "ENV2 SALE";
    }else if (Status_for_owner == "FLSL016") {
      FAM_FORM = "BOI2 SALE";
    }else if (Status_for_owner == "FLSL017") {
      FAM_FORM = "ENV3 SALE";
    }else if (Status_for_owner == "FLSL018") {
      FAM_FORM = "PLN3 SALE";
    }else if (Status_for_owner == "FLSL020") {
      FAM_FORM = "PLN4 SALE";
    }else {
      FAM_FORM = "OWNER CHECK";
    }

    const currentDateTime = new Date()
      .toISOString()
      .slice(2, 10)
      .replace(/-/g, "");
    if (Status_for_owner == "FLLD100") {
      try {
        for (let i = 0; i < uploadedFilesDATA_Own_return.length; i++) {
          const file = uploadedFilesDATA_Own_return[i];
          const lastDotIndex = file.name.lastIndexOf(".");
          const fileExtension = file.name.slice(lastDotIndex + 1);
          let new_run_seq = "";
          try {
            const response_seq = await axios.post(
              "/get_run_owner_file_return",
              {
                FAM_no: Gen_Fam_No,
              }
            );
            const get_run_seq = await response_seq.data;
            const lastValue =
              get_run_seq.length > 0
                ? get_run_seq[get_run_seq.length - 1][0]
                : 0;
            const incrementedValue = lastValue + 1;
            new_run_seq = [[incrementedValue]];
          } catch (error) {
            console.error("Error get_run_owner_file_return:", error);
          }
          const file_server = `${Gen_Fam_No}_${FAM_FORM}_${new_run_seq}_${currentDateTime}.${fileExtension}`;

          try {
            const response = await axios.post(
              `/ins_FILE_FROM_REQUEST?FAM_no=${Gen_Fam_No}&FAM_from=${FAM_FORM}&FAM_file_seq=${new_run_seq}&FAM_file_name=${file.name}&FAM_file_server=${file_server}&FAM_create=${LocalUserLogin}`
            );
            const data = await response.data;
          } catch (error) {
            console.error("Error Upload File Request:", error);
          }
          try {
            const formData = new FormData();
            uploadedFilesDATA_Own_return.forEach((file) => {
              formData.append("files", file);
            });
            await axios.post("/ins_FILE_FROM_REQUEST_TO_PROJECT_ME", formData);
          } catch (error) {
            console.error("Error saving files:", error);
          }
        }
      } catch (error) {
        console.error("Error committing files to the database:", error);
      }

      setUploadedFilesDATA_Own_return([]);
      setuploadedFiles_Own_return([]);
    } else if (Status_for_owner == "FLSC009") {
      try {
        for (let i = 0; i < uploadedFilesDATA_PTE.length; i++) {
          const file = uploadedFilesDATA_PTE[i];
          const lastDotIndex = file.name.lastIndexOf(".");
          const fileExtension = file.name.slice(lastDotIndex + 1);
          let new_run_seq = "";
          try {
            const response_seq = await axios.post("/get_run_owner_file_pte", {
              FAM_no: Gen_Fam_No,
            });
            const get_run_seq = await response_seq.data;
            const lastValue =
              get_run_seq.length > 0
                ? get_run_seq[get_run_seq.length - 1][0]
                : 0;
            const incrementedValue = lastValue + 1;
            new_run_seq = [[incrementedValue]];
          } catch (error) {
            console.error("Error committing files to the database:", error);
          }
          const file_server = `${Gen_Fam_No}_${FAM_FORM}_${new_run_seq}_${currentDateTime}.${fileExtension}`;

          try {
            const response = await axios.post(
              `/ins_FILE_FROM_REQUEST?FAM_no=${Gen_Fam_No}&FAM_from=${FAM_FORM}&FAM_file_seq=${new_run_seq}&FAM_file_name=${file.name}&FAM_file_server=${file_server}&FAM_create=${LocalUserLogin}`
            );
            const data = await response.data;
          } catch (error) {
            console.error("Error Upload File Request:", error);
          }
          try {
            const formData = new FormData();
            uploadedFilesDATA_PTE.forEach((file) => {
              formData.append("files", file);
            });
            await axios.post("/ins_FILE_FROM_REQUEST_TO_PROJECT_ME", formData);
          } catch (error) {
            console.error("Error saving files:", error);
          }
        }
      } catch (error) {
        console.error("Error committing files to the database:", error);
      }

      setUploadedFilesDATA_PTE([]);
      setuploadedFiles_PTE([]);
      fetchData_PTE_ENV();
    } else if (Status_for_owner == "FLSC100") {
      try {
        for (let i = 0; i < uploadedFilesDATA_PLN_Staff.length; i++) {
          const file = uploadedFilesDATA_PLN_Staff[i];
          const lastDotIndex = file.name.lastIndexOf(".");
          const fileExtension = file.name.slice(lastDotIndex + 1);
          let new_run_seq = "";
          try {
            const response_seq = await axios.post("/get_run_owner_file_pln", {
              FAM_no: Gen_Fam_No,
            });
            const get_run_seq = await response_seq.data;
            const lastValue =
              get_run_seq.length > 0
                ? get_run_seq[get_run_seq.length - 1][0]
                : 0;
            const incrementedValue = lastValue + 1;
            new_run_seq = [[incrementedValue]];
          } catch (error) {
            console.error("Error committing files to the database:", error);
          }
          const file_server = `${Gen_Fam_No}_${FAM_FORM}_${new_run_seq}_${currentDateTime}.${fileExtension}`;

          try {
            const response = await axios.post(
              `/ins_FILE_FROM_REQUEST?FAM_no=${Gen_Fam_No}&FAM_from=${FAM_FORM}&FAM_file_seq=${new_run_seq}&FAM_file_name=${file.name}&FAM_file_server=${file_server}&FAM_create=${LocalUserLogin}`
            );
            const data = await response.data;
          } catch (error) {
            console.error("Error Upload File Request:", error);
          }
          try {
            const formData = new FormData();
            uploadedFilesDATA_PLN_Staff.forEach((file) => {
              formData.append("files", file);
            });
            await axios.post("/ins_FILE_FROM_REQUEST_TO_PROJECT_ME", formData);
          } catch (error) {
            console.error("Error saving files:", error);
          }
        }
      } catch (error) {
        console.error("Error committing files to the database:", error);
      }

      setUploadedFilesDATA_PLN_Staff([]);
      setuploadedFiles_PLN_Staff([]);
      fetchData_PLN_Staff();
    }else if (Status_for_owner == "FLSC101") {
      try {
        
        for (let i = 0; i < uploadedFilesDATA_Shipping.length; i++) {
          const file = uploadedFilesDATA_Shipping[i];
          const lastDotIndex = file.name.lastIndexOf(".");
          const fileExtension = file.name.slice(lastDotIndex + 1);
          let new_run_seq = "";
          try {
            const response_seq = await axios.post("/get_run_owner_file_shipping", {
              FAM_no: Gen_Fam_No,
            });
            const get_run_seq = await response_seq.data;
            const lastValue =
              get_run_seq.length > 0
                ? get_run_seq[get_run_seq.length - 1][0]
                : 0;
            const incrementedValue = lastValue + 1;
            new_run_seq = [[incrementedValue]];
          } catch (error) {
            console.error("Error committing files to the database:", error);
          }
          const file_server = `${Gen_Fam_No}_${FAM_FORM}_${new_run_seq}_${currentDateTime}.${fileExtension}`;

          try {
            const response = await axios.post(
              `/ins_FILE_FROM_REQUEST?FAM_no=${Gen_Fam_No}&FAM_from=${FAM_FORM}&FAM_file_seq=${new_run_seq}&FAM_file_name=${file.name}&FAM_file_server=${file_server}&FAM_create=${LocalUserLogin}`
            );
            const data = await response.data;
          } catch (error) {
            console.error("Error Upload File Request:", error);
          }
          try {
            const formData = new FormData();
            uploadedFilesDATA_Shipping.forEach((file) => {
              formData.append("files", file);
            });
            await axios.post("/ins_FILE_FROM_REQUEST_TO_PROJECT_ME", formData);
          } catch (error) {
            console.error("Error saving files:", error);
          }
        }
      } catch (error) {
        console.error("Error committing files to the database:", error);
      }

      setUploadedFilesDATA_Shipping([]);
      setuploadedFiles_Shipping([]);
      fetchData_Shipping();
    }else if (Status_for_owner == "FLSL009") {
      try {
        
        for (let i = 0; i < uploadedFilesDATA_pte_env_ws.length; i++) {
          const file = uploadedFilesDATA_pte_env_ws[i];
          const lastDotIndex = file.name.lastIndexOf(".");
          const fileExtension = file.name.slice(lastDotIndex + 1);
          let new_run_seq = "";
          try {
            const response_seq = await axios.post("/get_run_owner_file_shipping", {
              FAM_no: Gen_Fam_No,
            });
            const get_run_seq = await response_seq.data;
            const lastValue =
              get_run_seq.length > 0
                ? get_run_seq[get_run_seq.length - 1][0]
                : 0;
            const incrementedValue = lastValue + 1;
            new_run_seq = [[incrementedValue]];
          } catch (error) {
            console.error("Error committing files to the database:", error);
          }
          const file_server = `${Gen_Fam_No}_${FAM_FORM}_${new_run_seq}_${currentDateTime}.${fileExtension}`;

          try {
            const response = await axios.post(
              `/ins_FILE_FROM_REQUEST?FAM_no=${Gen_Fam_No}&FAM_from=${FAM_FORM}&FAM_file_seq=${new_run_seq}&FAM_file_name=${file.name}&FAM_file_server=${file_server}&FAM_create=${LocalUserLogin}`
            );
            const data = await response.data;
          } catch (error) {
            console.error("Error Upload File Request:", error);
          }
          try {
            const formData = new FormData();
            uploadedFilesDATA_pte_env_ws.forEach((file) => {
              formData.append("files", file);
            });
            await axios.post("/ins_FILE_FROM_REQUEST_TO_PROJECT_ME", formData);
          } catch (error) {
            console.error("Error saving files:", error);
          }
        }
      } catch (error) {
        console.error("Error committing files to the database:", error);
      }

      setUploadedFilesDATA_pte_env_ws([]);
      setuploadedFiles_pte_env_ws([]);
      fetchData_ENV1_SALE();
    }else if (Status_for_owner == "FLSL010") {
      try {
        
        for (let i = 0; i < uploadedFilesDATA_pln_stf_boi.length; i++) {
          const file = uploadedFilesDATA_pln_stf_boi[i];
          const lastDotIndex = file.name.lastIndexOf(".");
          const fileExtension = file.name.slice(lastDotIndex + 1);
          let new_run_seq = "";
          try {
            const response_seq = await axios.post("/get_run_owner_file_shipping", {
              FAM_no: Gen_Fam_No,
            });
            const get_run_seq = await response_seq.data;
            const lastValue =
              get_run_seq.length > 0
                ? get_run_seq[get_run_seq.length - 1][0]
                : 0;
            const incrementedValue = lastValue + 1;
            new_run_seq = [[incrementedValue]];
          } catch (error) {
            console.error("Error committing files to the database:", error);
          }
          const file_server = `${Gen_Fam_No}_${FAM_FORM}_${new_run_seq}_${currentDateTime}.${fileExtension}`;

          try {
            const response = await axios.post(
              `/ins_FILE_FROM_REQUEST?FAM_no=${Gen_Fam_No}&FAM_from=${FAM_FORM}&FAM_file_seq=${new_run_seq}&FAM_file_name=${file.name}&FAM_file_server=${file_server}&FAM_create=${LocalUserLogin}`
            );
            const data = await response.data;
          } catch (error) {
            console.error("Error Upload File Request:", error);
          }
          try {
            const formData = new FormData();
            uploadedFilesDATA_pln_stf_boi.forEach((file) => {
              formData.append("files", file);
            });
            await axios.post("/ins_FILE_FROM_REQUEST_TO_PROJECT_ME", formData);
          } catch (error) {
            console.error("Error saving files:", error);
          }
        }
      } catch (error) {
        console.error("Error committing files to the database:", error);
      }

      setUploadedFilesDATA_pln_stf_boi([]);
      setuploadedFiles_pln_stf_boi([]);
      fetchData_PLN1_SALE();
    }else if (Status_for_owner == "FLSL011") {
      try {
        
        for (let i = 0; i < uploadedFilesDATA_imp_boi_prepare.length; i++) {
          const file = uploadedFilesDATA_imp_boi_prepare[i];
          const lastDotIndex = file.name.lastIndexOf(".");
          const fileExtension = file.name.slice(lastDotIndex + 1);
          let new_run_seq = "";
          try {
            const response_seq = await axios.post("/get_run_owner_file_shipping", {
              FAM_no: Gen_Fam_No,
            });
            const get_run_seq = await response_seq.data;
            const lastValue =
              get_run_seq.length > 0
                ? get_run_seq[get_run_seq.length - 1][0]
                : 0;
            const incrementedValue = lastValue + 1;
            new_run_seq = [[incrementedValue]];
          } catch (error) {
            console.error("Error committing files to the database:", error);
          }
          const file_server = `${Gen_Fam_No}_${FAM_FORM}_${new_run_seq}_${currentDateTime}.${fileExtension}`;

          try {
            const response = await axios.post(
              `/ins_FILE_FROM_REQUEST?FAM_no=${Gen_Fam_No}&FAM_from=${FAM_FORM}&FAM_file_seq=${new_run_seq}&FAM_file_name=${file.name}&FAM_file_server=${file_server}&FAM_create=${LocalUserLogin}`
            );
            const data = await response.data;
          } catch (error) {
            console.error("Error Upload File Request:", error);
          }
          try {
            const formData = new FormData();
            uploadedFilesDATA_imp_boi_prepare.forEach((file) => {
              formData.append("files", file);
            });
            await axios.post("/ins_FILE_FROM_REQUEST_TO_PROJECT_ME", formData);
          } catch (error) {
            console.error("Error saving files:", error);
          }
        }
      } catch (error) {
        console.error("Error committing files to the database:", error);
      }

      setUploadedFilesDATA_imp_boi_prepare([]);
      setuploadedFiles_imp_boi_prepare([]);
      fetchData_IMP1_SALE();
    }else if (Status_for_owner == "FLSL012") {
      try {
        
        for (let i = 0; i < uploadedFilesDATA_imp_input_data.length; i++) {
          const file = uploadedFilesDATA_imp_input_data[i];
          const lastDotIndex = file.name.lastIndexOf(".");
          const fileExtension = file.name.slice(lastDotIndex + 1);
          let new_run_seq = "";
          try {
            const response_seq = await axios.post("/get_run_owner_file_shipping", {
              FAM_no: Gen_Fam_No,
            });
            const get_run_seq = await response_seq.data;
            const lastValue =
              get_run_seq.length > 0
                ? get_run_seq[get_run_seq.length - 1][0]
                : 0;
            const incrementedValue = lastValue + 1;
            new_run_seq = [[incrementedValue]];
          } catch (error) {
            console.error("Error committing files to the database:", error);
          }
          const file_server = `${Gen_Fam_No}_${FAM_FORM}_${new_run_seq}_${currentDateTime}.${fileExtension}`;

          try {
            const response = await axios.post(
              `/ins_FILE_FROM_REQUEST?FAM_no=${Gen_Fam_No}&FAM_from=${FAM_FORM}&FAM_file_seq=${new_run_seq}&FAM_file_name=${file.name}&FAM_file_server=${file_server}&FAM_create=${LocalUserLogin}`
            );
            const data = await response.data;
          } catch (error) {
            console.error("Error Upload File Request:", error);
          }
          try {
            const formData = new FormData();
            uploadedFilesDATA_imp_input_data.forEach((file) => {
              formData.append("files", file);
            });
            await axios.post("/ins_FILE_FROM_REQUEST_TO_PROJECT_ME", formData);
          } catch (error) {
            console.error("Error saving files:", error);
          }
        }
      } catch (error) {
        console.error("Error committing files to the database:", error);
      }

      setUploadedFilesDATA_imp_input_data([]);
      setuploadedFiles_imp_input_data([]);
      fetchData_BOI1_SALE();
    }else if (Status_for_owner == "FLSL013") {
      try {
        
        for (let i = 0; i < uploadedFilesDATA_thai_catergorise.length; i++) {
          const file = uploadedFilesDATA_thai_catergorise[i];
          const lastDotIndex = file.name.lastIndexOf(".");
          const fileExtension = file.name.slice(lastDotIndex + 1);
          let new_run_seq = "";
          try {
            const response_seq = await axios.post("/get_run_owner_file_shipping", {
              FAM_no: Gen_Fam_No,
            });
            const get_run_seq = await response_seq.data;
            const lastValue =
              get_run_seq.length > 0
                ? get_run_seq[get_run_seq.length - 1][0]
                : 0;
            const incrementedValue = lastValue + 1;
            new_run_seq = [[incrementedValue]];
          } catch (error) {
            console.error("Error committing files to the database:", error);
          }
          const file_server = `${Gen_Fam_No}_${FAM_FORM}_${new_run_seq}_${currentDateTime}.${fileExtension}`;

          try {
            const response = await axios.post(
              `/ins_FILE_FROM_REQUEST?FAM_no=${Gen_Fam_No}&FAM_from=${FAM_FORM}&FAM_file_seq=${new_run_seq}&FAM_file_name=${file.name}&FAM_file_server=${file_server}&FAM_create=${LocalUserLogin}`
            );
            const data = await response.data;
          } catch (error) {
            console.error("Error Upload File Request:", error);
          }
          try {
            const formData = new FormData();
            uploadedFilesDATA_thai_catergorise.forEach((file) => {
              formData.append("files", file);
            });
            await axios.post("/uploadedFilesDATA_pte_env_ws", formData);
          } catch (error) {
            console.error("Error saving files:", error);
          }
        }
      } catch (error) {
        console.error("Error committing files to the database:", error);
      }

      setUploadedFilesDATA_thai_catergorise([]);
      setuploadedFiles_thai_catergorise([]);
      fetchData_IMP2_SALE();
    }else if (Status_for_owner == "FLSL014") {
      try {
        
        for (let i = 0; i < uploadedFilesDATA_pln_stf_bidding.length; i++) {
          const file = uploadedFilesDATA_pln_stf_bidding[i];
          const lastDotIndex = file.name.lastIndexOf(".");
          const fileExtension = file.name.slice(lastDotIndex + 1);
          let new_run_seq = "";
          try {
            const response_seq = await axios.post("/get_run_owner_file_shipping", {
              FAM_no: Gen_Fam_No,
            });
            const get_run_seq = await response_seq.data;
            const lastValue =
              get_run_seq.length > 0
                ? get_run_seq[get_run_seq.length - 1][0]
                : 0;
            const incrementedValue = lastValue + 1;
            new_run_seq = [[incrementedValue]];
          } catch (error) {
            console.error("Error committing files to the database:", error);
          }
          const file_server = `${Gen_Fam_No}_${FAM_FORM}_${new_run_seq}_${currentDateTime}.${fileExtension}`;

          try {
            const response = await axios.post(
              `/ins_FILE_FROM_REQUEST?FAM_no=${Gen_Fam_No}&FAM_from=${FAM_FORM}&FAM_file_seq=${new_run_seq}&FAM_file_name=${file.name}&FAM_file_server=${file_server}&FAM_create=${LocalUserLogin}`
            );
            const data = await response.data;
          } catch (error) {
            console.error("Error Upload File Request:", error);
          }
          try {
            const formData = new FormData();
            uploadedFilesDATA_pln_stf_bidding.forEach((file) => {
              formData.append("files", file);
            });
            await axios.post("/ins_FILE_FROM_REQUEST_TO_PROJECT_ME", formData);
          } catch (error) {
            console.error("Error saving files:", error);
          }
        }
      } catch (error) {
        console.error("Error committing files to the database:", error);
      }

      setUploadedFilesDATA_pln_stf_bidding([]);
      setuploadedFiles_pln_stf_bidding([]);
      fetchData_PLN2_SALE();
    }else if (Status_for_owner == "FLSL015") {
      try {
        
        for (let i = 0; i < uploadedFilesDATA_pte_dept.length; i++) {
          const file = uploadedFilesDATA_pte_dept[i];
          const lastDotIndex = file.name.lastIndexOf(".");
          const fileExtension = file.name.slice(lastDotIndex + 1);
          let new_run_seq = "";
          try {
            const response_seq = await axios.post("/get_run_owner_file_shipping", {
              FAM_no: Gen_Fam_No,
            });
            const get_run_seq = await response_seq.data;
            const lastValue =
              get_run_seq.length > 0
                ? get_run_seq[get_run_seq.length - 1][0]
                : 0;
            const incrementedValue = lastValue + 1;
            new_run_seq = [[incrementedValue]];
          } catch (error) {
            console.error("Error committing files to the database:", error);
          }
          const file_server = `${Gen_Fam_No}_${FAM_FORM}_${new_run_seq}_${currentDateTime}.${fileExtension}`;

          try {
            const response = await axios.post(
              `/ins_FILE_FROM_REQUEST?FAM_no=${Gen_Fam_No}&FAM_from=${FAM_FORM}&FAM_file_seq=${new_run_seq}&FAM_file_name=${file.name}&FAM_file_server=${file_server}&FAM_create=${LocalUserLogin}`
            );
            const data = await response.data;
          } catch (error) {
            console.error("Error Upload File Request:", error);
          }
          try {
            const formData = new FormData();
            uploadedFilesDATA_pte_dept.forEach((file) => {
              formData.append("files", file);
            });
            await axios.post("/ins_FILE_FROM_REQUEST_TO_PROJECT_ME", formData);
          } catch (error) {
            console.error("Error saving files:", error);
          }
        }
      } catch (error) {
        console.error("Error committing files to the database:", error);
      }

      setUploadedFilesDATA_pte_dept([]);
      setuploadedFiles_pte_dept([]);
      fetchData_ENV2_SALE();
    }else if (Status_for_owner == "FLSL016") {
      try {
        
        for (let i = 0; i < uploadedFilesDATA_boi_exp_clearance.length; i++) {
          const file = uploadedFilesDATA_boi_exp_clearance[i];
          const lastDotIndex = file.name.lastIndexOf(".");
          const fileExtension = file.name.slice(lastDotIndex + 1);
          let new_run_seq = "";
          try {
            const response_seq = await axios.post("/get_run_owner_file_shipping", {
              FAM_no: Gen_Fam_No,
            });
            const get_run_seq = await response_seq.data;
            const lastValue =
              get_run_seq.length > 0
                ? get_run_seq[get_run_seq.length - 1][0]
                : 0;
            const incrementedValue = lastValue + 1;
            new_run_seq = [[incrementedValue]];
          } catch (error) {
            console.error("Error committing files to the database:", error);
          }
          const file_server = `${Gen_Fam_No}_${FAM_FORM}_${new_run_seq}_${currentDateTime}.${fileExtension}`;

          try {
            const response = await axios.post(
              `/ins_FILE_FROM_REQUEST?FAM_no=${Gen_Fam_No}&FAM_from=${FAM_FORM}&FAM_file_seq=${new_run_seq}&FAM_file_name=${file.name}&FAM_file_server=${file_server}&FAM_create=${LocalUserLogin}`
            );
            const data = await response.data;
          } catch (error) {
            console.error("Error Upload File Request:", error);
          }
          try {
            const formData = new FormData();
            uploadedFilesDATA_boi_exp_clearance.forEach((file) => {
              formData.append("files", file);
            });
            await axios.post("/ins_FILE_FROM_REQUEST_TO_PROJECT_ME", formData);
          } catch (error) {
            console.error("Error saving files:", error);
          }
        }
      } catch (error) {
        console.error("Error committing files to the database:", error);
      }

      setUploadedFilesDATA_boi_exp_clearance([]);
      setuploadedFiles_boi_exp_clearance([]);
      fetchData_BOI2_SALE();
    }else if (Status_for_owner == "FLSL017") {
      try {
        
        for (let i = 0; i < uploadedFilesDATA_pte_upload_after.length; i++) {
          const file = uploadedFilesDATA_pte_upload_after[i];
          const lastDotIndex = file.name.lastIndexOf(".");
          const fileExtension = file.name.slice(lastDotIndex + 1);
          let new_run_seq = "";
          try {
            const response_seq = await axios.post("/get_run_owner_file_shipping", {
              FAM_no: Gen_Fam_No,
            });
            const get_run_seq = await response_seq.data;
            const lastValue =
              get_run_seq.length > 0
                ? get_run_seq[get_run_seq.length - 1][0]
                : 0;
            const incrementedValue = lastValue + 1;
            new_run_seq = [[incrementedValue]];
          } catch (error) {
            console.error("Error committing files to the database:", error);
          }
          const file_server = `${Gen_Fam_No}_${FAM_FORM}_${new_run_seq}_${currentDateTime}.${fileExtension}`;

          try {
            const response = await axios.post(
              `/ins_FILE_FROM_REQUEST?FAM_no=${Gen_Fam_No}&FAM_from=${FAM_FORM}&FAM_file_seq=${new_run_seq}&FAM_file_name=${file.name}&FAM_file_server=${file_server}&FAM_create=${LocalUserLogin}`
            );
            const data = await response.data;
          } catch (error) {
            console.error("Error Upload File Request:", error);
          }
          try {
            const formData = new FormData();
            uploadedFilesDATA_pte_upload_after.forEach((file) => {
              formData.append("files", file);
            });
            await axios.post("/ins_FILE_FROM_REQUEST_TO_PROJECT_ME", formData);
          } catch (error) {
            console.error("Error saving files:", error);
          }
        }
      } catch (error) {
        console.error("Error committing files to the database:", error);
      }

      setUploadedFilesDATA_pte_upload_after([]);
      setuploadedFiles_pte_upload_after([]);
      fetchData_ENV3_SALE();
    }else if (Status_for_owner == "FLSL018") {
      try {
        
        for (let i = 0; i < uploadedFilesDATA_pln_stf_req_inv.length; i++) {
          const file = uploadedFilesDATA_pln_stf_req_inv[i];
          const lastDotIndex = file.name.lastIndexOf(".");
          const fileExtension = file.name.slice(lastDotIndex + 1);
          let new_run_seq = "";
          try {
            const response_seq = await axios.post("/get_run_owner_file_shipping", {
              FAM_no: Gen_Fam_No,
            });
            const get_run_seq = await response_seq.data;
            const lastValue =
              get_run_seq.length > 0
                ? get_run_seq[get_run_seq.length - 1][0]
                : 0;
            const incrementedValue = lastValue + 1;
            new_run_seq = [[incrementedValue]];
          } catch (error) {
            console.error("Error committing files to the database:", error);
          }
          const file_server = `${Gen_Fam_No}_${FAM_FORM}_${new_run_seq}_${currentDateTime}.${fileExtension}`;

          try {
            const response = await axios.post(
              `/ins_FILE_FROM_REQUEST?FAM_no=${Gen_Fam_No}&FAM_from=${FAM_FORM}&FAM_file_seq=${new_run_seq}&FAM_file_name=${file.name}&FAM_file_server=${file_server}&FAM_create=${LocalUserLogin}`
            );
            const data = await response.data;
          } catch (error) {
            console.error("Error Upload File Request:", error);
          }
          try {
            const formData = new FormData();
            uploadedFilesDATA_pln_stf_req_inv.forEach((file) => {
              formData.append("files", file);
            });
            await axios.post("/ins_FILE_FROM_REQUEST_TO_PROJECT_ME", formData);
          } catch (error) {
            console.error("Error saving files:", error);
          }
        }
      } catch (error) {
        console.error("Error committing files to the database:", error);
      }

      setUploadedFilesDATA_pln_stf_req_inv([]);
      setuploadedFiles_pln_stf_req_inv([]);
      fetchData_PLN3_SALE();
    }else if (Status_for_owner == "FLSL019") {
      try {
        
        for (let i = 0; i < uploadedFilesDATA_ship_input_inv.length; i++) {
          const file = uploadedFilesDATA_ship_input_inv[i];
          const lastDotIndex = file.name.lastIndexOf(".");
          const fileExtension = file.name.slice(lastDotIndex + 1);
          let new_run_seq = "";
          try {
            const response_seq = await axios.post("/get_run_owner_file_shipping", {
              FAM_no: Gen_Fam_No,
            });
            const get_run_seq = await response_seq.data;
            const lastValue =
              get_run_seq.length > 0
                ? get_run_seq[get_run_seq.length - 1][0]
                : 0;
            const incrementedValue = lastValue + 1;
            new_run_seq = [[incrementedValue]];
          } catch (error) {
            console.error("Error committing files to the database:", error);
          }
          const file_server = `${Gen_Fam_No}_${FAM_FORM}_${new_run_seq}_${currentDateTime}.${fileExtension}`;

          try {
            const response = await axios.post(
              `/ins_FILE_FROM_REQUEST?FAM_no=${Gen_Fam_No}&FAM_from=${FAM_FORM}&FAM_file_seq=${new_run_seq}&FAM_file_name=${file.name}&FAM_file_server=${file_server}&FAM_create=${LocalUserLogin}`
            );
            const data = await response.data;
          } catch (error) {
            console.error("Error Upload File Request:", error);
          }
          try {
            const formData = new FormData();
            uploadedFilesDATA_ship_input_inv.forEach((file) => {
              formData.append("files", file);
            });
            await axios.post("/ins_FILE_FROM_REQUEST_TO_PROJECT_ME", formData);
          } catch (error) {
            console.error("Error saving files:", error);
          }
        }
      } catch (error) {
        console.error("Error committing files to the database:", error);
      }

      setUploadedFilesDATA_ship_input_inv([]);
      setuploadedFiles_ship_input_inv([]);
      fetchData_Shipping();
    }else if (Status_for_owner == "FLSL020") {
      try {
        
        for (let i = 0; i < uploadedFilesDATA_uploadfinal.length; i++) {
          const file = uploadedFilesDATA_uploadfinal[i];
          const lastDotIndex = file.name.lastIndexOf(".");
          const fileExtension = file.name.slice(lastDotIndex + 1);
          let new_run_seq = "";
          try {
            const response_seq = await axios.post("/get_run_owner_file_shipping", {
              FAM_no: Gen_Fam_No,
            });
            const get_run_seq = await response_seq.data;
            const lastValue =
              get_run_seq.length > 0
                ? get_run_seq[get_run_seq.length - 1][0]
                : 0;
            const incrementedValue = lastValue + 1;
            new_run_seq = [[incrementedValue]];
          } catch (error) {
            console.error("Error committing files to the database:", error);
          }
          const file_server = `${Gen_Fam_No}_${FAM_FORM}_${new_run_seq}_${currentDateTime}.${fileExtension}`;

          try {
            const response = await axios.post(
              `/ins_FILE_FROM_REQUEST?FAM_no=${Gen_Fam_No}&FAM_from=${FAM_FORM}&FAM_file_seq=${new_run_seq}&FAM_file_name=${file.name}&FAM_file_server=${file_server}&FAM_create=${LocalUserLogin}`
            );
            const data = await response.data;
          } catch (error) {
            console.error("Error Upload File Request:", error);
          }
          try {
            const formData = new FormData();
            uploadedFilesDATA_uploadfinal.forEach((file) => {
              formData.append("files", file);
            });
            await axios.post("/ins_FILE_FROM_REQUEST_TO_PROJECT_ME", formData);
          } catch (error) {
            console.error("Error saving files:", error);
          }
        }
      } catch (error) {
        console.error("Error committing files to the database:", error);
      }

      setUploadedFilesDATA_uploadfinal([]);
      setuploadedFiles_pln_upload_final([]);
      fetchData_PLN4_SALE();
    }else {
      // For Owner Check
      try {
        for (let i = 0; i < uploadedFilesDATA_Own.length; i++) {
          const file = uploadedFilesDATA_Own[i];
          const lastDotIndex = file.name.lastIndexOf(".");
          const fileExtension = file.name.slice(lastDotIndex + 1);
          let new_run_seq = "";
          try {
            const response_seq = await axios.post("/get_run_owner_file", {
              FAM_no: Gen_Fam_No,
            });
            const get_run_seq = await response_seq.data;
            const lastValue =
              get_run_seq.length > 0
                ? get_run_seq[get_run_seq.length - 1][0]
                : 0;
            const incrementedValue = lastValue + 1;
            new_run_seq = [[incrementedValue]];
          } catch (error) {
            console.error("Error committing files to the database:", error);
          }
          const file_server = `${Gen_Fam_No}_${FAM_FORM}_${new_run_seq}_${currentDateTime}.${fileExtension}`;

          try {
            const response = await axios.post(
              `/ins_FILE_FROM_REQUEST?FAM_no=${Gen_Fam_No}&FAM_from=${FAM_FORM}&FAM_file_seq=${new_run_seq}&FAM_file_name=${file.name}&FAM_file_server=${file_server}&FAM_create=${LocalUserLogin}`
            );
            const data = await response.data;
          } catch (error) {
            console.error("Error Upload File Request:", error);
          }
          try {
            const formData = new FormData();
            uploadedFilesDATA_Own.forEach((file) => {
              formData.append("files", file);
            });
            await axios.post("/ins_FILE_FROM_REQUEST_TO_PROJECT_ME", formData);
          } catch (error) {
            console.error("Error saving files:", error);
          }
        }
      } catch (error) {
        console.error("Error committing files to the database:", error);
      }

      setUploadedFilesDATA_Own([]);
      setuploadedFiles_Own([]);
    }

    Swal.fire({
      title: "Uploads File Success",
      icon: "success",
    });
    fetchData();
    fetchData_Owner_return();
  };

  return {
    showfile_owner,
    handleDL_File_Owner,
    uploadedFiles_Own,
    handleDragOve_Own,
    handleDrop_Own,
    handleFileUpload_Own,
    handleSav_Own,
    showfile_owner_return,
    setshowfile_owner_return,
    uploadedFiles_Own_return,
    uploadedFilesDATA_PTE,
    showfile_pte_env,
    uploadedFiles_PTE,
    uploadedFiles_PLN_Staff,
    uploadedFilesDATA_PLN_Staff,
    showfile_pln_staff,uploadedFiles_Shipping, showfile_shipping,
    uploadedFiles_pte_env_ws,uploadedFiles_pln_stf_boi,uploadedFiles_imp_boi_prepare,uploadedFiles_imp_input_data
,uploadedFiles_thai_catergorise,uploadedFiles_pln_stf_bidding,uploadedFiles_pte_dept,
uploadedFiles_boi_exp_clearance,uploadedFiles_pte_upload_after,uploadedFiles_pln_stf_req_inv,uploadedFiles_ship_input_inv,
uploadedFiles_pln_upload_final,showfilepte_env_ws,showfilepln_stf_boi,showfileimp_boi_prepare,
showfileimp_input_data,showfilethai_catergorise,showfilepln_stf_bidding,showfilepte_dept,showfileboi_exp_clearance,showfilepte_upload_after,
showfilepln_stf_req_inv,showfileship_input_inv,showfilepln_upload_final
  };
}
export { FAM_GET_SHOW_FILE };
