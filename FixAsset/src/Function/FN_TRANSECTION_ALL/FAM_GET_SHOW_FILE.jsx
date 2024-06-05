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
  }, []);
  // Donation
  const fetchData = async () => {
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
    try {
      const response = await axios.post("/getFAM_FILE_OWNER_CHK", {
        FamNo: Gen_Fam_No_Show,
      });
      const jsonData = await response.data;
      setshowfile_owner(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData_Owner_return = async () => {
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
    try {
      const response = await axios.post("/getFAM_FILE_Req_Return", {
        FamNo: Gen_Fam_No_Show,
      });
      const jsonData = await response.data;
      setshowfile_owner_return(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData_PTE_ENV = async () => {
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
    try {
      const response = await axios.post("/getFAM_FILE_PTE_ENV", {
        FamNo: Gen_Fam_No_Show,
      });
      const jsonData = await response.data;
      setshowfile_pte_env(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData_PLN_Staff = async () => {
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
    try {
      const response = await axios.post("/getFAM_FILE_PLN_Staff", {
        FamNo: Gen_Fam_No_Show,
      });
      const jsonData = await response.data;   
      setshowfile_pln_staff(jsonData);
     console.log(jsonData, "jsonData");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData_Shipping = async () => {
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
    try {
      const response = await axios.post("/getFAM_FILE_Shipping", {
        FamNo: Gen_Fam_No_Show,
      });
      const jsonData = await response.data;   
      setshowfile_shipping(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
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
    } else if (Status_for_owner == "FLSC009") {
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
    } else if (Status_for_owner == "FLSC100") {
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
    } else {
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
    } else if (Status_for_owner == "FLSC009") {
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
    } else if (Status_for_owner == "FLSC101") {
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
    } else if (Status_for_owner == "FLSC009") {
      FAM_FORM = "ENV CHECK";
    }else if (Status_for_owner == "FLSC100") {
      FAM_FORM = "PLN CHECK";
    }else if (Status_for_owner == "FLSC101") {
      FAM_FORM = "SHP CHECK";
    } else {
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
            console.log("get_run_seq");
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
    showfile_pln_staff,uploadedFiles_Shipping, showfile_shipping
  };
}
export { FAM_GET_SHOW_FILE };
