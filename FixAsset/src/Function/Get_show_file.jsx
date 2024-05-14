// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { ForReq_fn } from "../Function/ForReq_fn";
// import { Get_Data } from "../Function/Tranfer_fn";
// import Swal from "sweetalert2";

// function Get_show_file() {
//   const { EditFam, For_Rq_Edit, Gen_Fam_No, LocalUserLogin } = ForReq_fn();
//   const { For_Req } = Get_Data();

//   const [uploadedFiles_Own, setuploadedFiles_Own] = useState([]);
//   const [uploadedFilesDATA_Own, setUploadedFilesDATA_Own] = useState([]);
//   const [uploadedFiles_Own_return, setuploadedFiles_Own_return] = useState([]);
//   const [uploadedFilesDATA_Own_return, setUploadedFilesDATA_Own_return] =
//     useState([]);
  
//   const [showfile_owner, setshowfile_owner] = useState([]);
//   const [showfile_owner_return, setshowfile_owner_return] = useState([]);
  

//   let Status_for_owner = "";
//   let StatusFile = "";
//   if (For_Req !== null) {
//     StatusFile = For_Req[6];
//     Status_for_owner = For_Req[10];
//   } else if (For_Rq_Edit) {
//     StatusFile = For_Rq_Edit[7];
//     Status_for_owner = For_Rq_Edit[10];
//   }
//   useEffect(() => {
//     fetchData();
//     fetchData_Owner_return();
//   }, []);
//   // Donation
//   const fetchData = async () => {
//     let Gen_Fam_No_Show = "";
//     if (EditFam != null) {
//       if (EditFam != null) {
//         if (For_Rq_Edit != null) {
//           Gen_Fam_No_Show = For_Rq_Edit[0];
//         }
//       } else {
//         if (For_Req != null) {
//           Gen_Fam_No_Show = For_Req[0];
//         }
//       }
//     }
//     try {
//       const response = await axios.post("/getFAM_FILE_OWNER_CHK", {
//         FamNo: Gen_Fam_No_Show,
//       });
//       const jsonData = await response.data;
//       setshowfile_owner(jsonData);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//   const fetchData_Owner_return = async () => {
//     let Gen_Fam_No_Show = "";
//     if (EditFam != null) {
//       if (EditFam != null) {
//         if (For_Rq_Edit != null) {
//           Gen_Fam_No_Show = For_Rq_Edit[0];
//         }
//       } else {
//         if (For_Req != null) {
//           Gen_Fam_No_Show = For_Req[0];
//         }
//       }
//     }
//     try {
//       const response = await axios.post("/getFAM_FILE_Req_Return", {
//         FamNo: Gen_Fam_No_Show,
//       });
//       const jsonData = await response.data;
//       setshowfile_owner_return(jsonData);
//       console.log(jsonData, "Owner Return");
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//   const handleDL_File_Owner = async (index, file, fileName) => {
//     if(Status_for_owner == "FLLD100" ){
//       const updatedFiles = uploadedFiles_Own_return.filter(
//         (uploadedFile, i) => i !== index
//       );
//       setuploadedFiles_Own_return(updatedFiles);
  
//       try {
//         const response = await axios.post("/deletefile", {
//           famno: Gen_Fam_No,
//           name_for_file: file,
//         });
//         localStorage.removeItem("Type");
//       } catch (error) {
//         console.error("Error deleting file:", error);
//       }
//       try {
//         const response = await axios.delete(`/deleteFile?data=${fileName}`);
//       } catch (error) {
//         console.error("Error deleting file:", error);
//       }
//       fetchData_Owner_return();
//     }else{
//        const updatedFiles = uploadedFiles_Own.filter(
//       (uploadedFile, i) => i !== index
//     );
//     setuploadedFiles_Own(updatedFiles);

//     try {
//       const response = await axios.post("/deletefile", {
//         famno: Gen_Fam_No,
//         name_for_file: file,
//       });
//       localStorage.removeItem("Type");
//     } catch (error) {
//       console.error("Error deleting file:", error);
//     }
//     try {
//       const response = await axios.delete(`/deleteFile?data=${fileName}`);
//     } catch (error) {
//       console.error("Error deleting file:", error);
//     }
//     fetchData();
//     }
   
//   };
//   const handleDragOve_Own = (event) => {
//     event.preventDefault();
//   };
//   const handleDrop_Own = (event) => {
//     event.preventDefault();
//     const files = event.dataTransfer?.files;
//     if (files) {
//       handleFileUpload_Own({ target: { files } });
//     }
//   };
//   const handleFileUpload_Own = (event) => {
//     const selectedFiles = event.target.files;

//     const allowedTypes = [
//       "application/pdf",
//       "image/jpeg",
//       "image/jpg",
//       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//       "application/vnd.ms-excel",
//     ];

//     const maxSize = 10 * 1024 * 1024;

//     for (let i = 0; i < selectedFiles.length; i++) {
//       const file = selectedFiles[i];
//       const fileType = file.type;

//       if (!allowedTypes.includes(fileType)) {
//         alert("Only PDF, JPG, and XLS files are allowed.");
//         return;
//       }

//       if (file.size > maxSize) {
//         alert("File size exceeds 10 MB.");
//         return;
//       }
//     }
//    if(Status_for_owner == 'FLLD100'){
//     setuploadedFiles_Own_return([...uploadedFiles_Own_return, ...selectedFiles]);
//     setUploadedFilesDATA_Own_return([...uploadedFilesDATA_Own_return, ...selectedFiles]);
//     const jsonDataArray = uploadedFilesDATA_Own_return.map((file) => ({
//       name: file.name,
//       lastModified: file.lastModified,
//       lastModifiedDate: file.lastModifiedDate
//         ? file.lastModifiedDate.toISOString()
//         : null,
//       webkitRelativePath: file.webkitRelativePath,
//       size: file.size,
//       type: file.type,
//     }));
//    }else{
//     setuploadedFiles_Own([...uploadedFiles_Own, ...selectedFiles]);
//     setUploadedFilesDATA_Own([...uploadedFilesDATA_Own, ...selectedFiles]);
//     const jsonDataArray = uploadedFilesDATA_Own.map((file) => ({
//       name: file.name,
//       lastModified: file.lastModified,
//       lastModifiedDate: file.lastModifiedDate
//         ? file.lastModifiedDate.toISOString()
//         : null,
//       webkitRelativePath: file.webkitRelativePath,
//       size: file.size,
//       type: file.type,
//     }));
//    }

//     const fileArrayString = JSON.stringify(jsonDataArray);
//     localStorage.setItem("Type", fileArrayString);
//   };
//   const handleSav_Own = async () => {
//     let FAM_FORM = "";
//     if (Status_for_owner == "FLLD100") {
//       FAM_FORM = "OWNER RETURN";
//       console.log("OWNER RETURNkkk");
//     } else {
//       FAM_FORM = "OWNER CHECK";
//     }

//     const currentDateTime = new Date()
//       .toISOString()
//       .slice(2, 10)
//       .replace(/-/g, "");
//       if(Status_for_owner == "FLLD100"){
//     try {
//       console.log("เข้าแล้ว สำหรับ save ",Status_for_owner)
//       for (let i = 0; i < uploadedFilesDATA_Own_return.length; i++) {
//         const file = uploadedFilesDATA_Own_return[i];
//         const lastDotIndex = file.name.lastIndexOf(".");
//         const fileExtension = file.name.slice(lastDotIndex + 1);
//         let new_run_seq = "";
//         try {
//           const response_seq = await axios.post("/get_run_owner_file_return", {
//             FAM_no: Gen_Fam_No,
//           });
//           const get_run_seq = await response_seq.data;
//           console.log("ข้อมูลที่ได้กลับมาจากowner return")
//           const lastValue =
//             get_run_seq.length > 0 ? get_run_seq[get_run_seq.length - 1][0] : 0;
//           const incrementedValue = lastValue + 1;
//           new_run_seq = [[incrementedValue]];
//         } catch (error) {
//           console.error("Error committing files to the database:", error);
//         }
//         const file_server = `${Gen_Fam_No}_${FAM_FORM}_${new_run_seq}_${currentDateTime}.${fileExtension}`;

//         try {
//           const response = await axios.post(
//             `/ins_FILE_FROM_REQUEST?FAM_no=${Gen_Fam_No}&FAM_from=${FAM_FORM}&FAM_file_seq=${new_run_seq}&FAM_file_name=${file.name}&FAM_file_server=${file_server}&FAM_create=${LocalUserLogin}`
//           );
//           const data = await response.data;
//         } catch (error) {
//           console.error("Error Upload File Request:", error);
//         }
//         try {
//           const formData = new FormData();
//           uploadedFilesDATA_Own_return.forEach((file) => {
//             formData.append("files", file);
//           });
//           await axios.post("/ins_FILE_FROM_REQUEST_TO_PROJECT_ME", formData);
//         } catch (error) {
//           console.error("Error saving files:", error);
//         }
//       }
//     } catch (error) {
//       console.error("Error committing files to the database:", error);
//     }
     
//     setUploadedFilesDATA_Own_return([]);
//     setuploadedFiles_Own_return([]);
  
//        }else{
//       // For Owner Check
//       try {
//         for (let i = 0; i < uploadedFilesDATA_Own.length; i++) {
//           const file = uploadedFilesDATA_Own[i];
//           const lastDotIndex = file.name.lastIndexOf(".");
//           const fileExtension = file.name.slice(lastDotIndex + 1);
//           let new_run_seq = "";
//           try {
//             const response_seq = await axios.post("/get_run_owner_file", {
//               FAM_no: Gen_Fam_No,
//             });
//             const get_run_seq = await response_seq.data;
//             console.log("get_run_seq");
//             const lastValue =
//               get_run_seq.length > 0 ? get_run_seq[get_run_seq.length - 1][0] : 0;
//             const incrementedValue = lastValue + 1;
//             new_run_seq = [[incrementedValue]];
//           } catch (error) {
//             console.error("Error committing files to the database:", error);
//           }
//           const file_server = `${Gen_Fam_No}_${FAM_FORM}_${new_run_seq}_${currentDateTime}.${fileExtension}`;
  
//           try {
//             const response = await axios.post(
//               `/ins_FILE_FROM_REQUEST?FAM_no=${Gen_Fam_No}&FAM_from=${FAM_FORM}&FAM_file_seq=${new_run_seq}&FAM_file_name=${file.name}&FAM_file_server=${file_server}&FAM_create=${LocalUserLogin}`
//             );
//             const data = await response.data;
//           } catch (error) {
//             console.error("Error Upload File Request:", error);
//           }
//           try {
//             const formData = new FormData();
//             uploadedFilesDATA_Own.forEach((file) => {
//               formData.append("files", file);
//             });
//             await axios.post("/ins_FILE_FROM_REQUEST_TO_PROJECT_ME", formData);
//           } catch (error) {
//             console.error("Error saving files:", error);
//           }
//         }
//       } catch (error) {
//         console.error("Error committing files to the database:", error);
//       } 
       
//     setUploadedFilesDATA_Own([]);
//     setuploadedFiles_Own([]);
//     }

//     Swal.fire({
//       title: "Uploads File Success",
//       icon: "success",
//     });
//     fetchData();
//     fetchData_Owner_return();
//   };

//   return {
//     showfile_owner,
//     handleDL_File_Owner,
//     uploadedFiles_Own,
//     handleDragOve_Own,
//     handleDrop_Own,
//     handleFileUpload_Own,
//     handleSav_Own,
//     showfile_owner_return,
//     setshowfile_owner_return,
//     uploadedFiles_Own_return
//   };
// }

// export { Get_show_file };
