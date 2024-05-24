import React, { useState, useEffect } from "react";
import axios from "axios";
function function_homepage() {
    const UserLogin = localStorage.getItem("UserLogin");
    const [dataall_Show, setdataall_Show] = useState([]);
    const [dataallname_Show, setdataallname_Show] = useState([]);
    const [dataTransfer, setdataTransfer] = useState([]);
    const [dataTransferall, setdataTransferall] = useState([]);
    const [dataTransferallname, setdataTransferallname] = useState([]);
    const [dataLoss, setdataLoss] = useState([]);
    const [dataWrite_off, setdataWrite_off] = useState([]);
    const [dataLending, setdataLending] = useState([]);
    const [dataDonation, setdataDonation] = useState([]);
    const [dataLossall, setdataLossall] = useState([]);
    const [dataLossallname, setdataLossallname] = useState([]);
    const [dataname_show, setdataname_show] = useState("");
    const [dataname_type, setdataname_type] = useState("");
    const [isPopupOpenLoadding, setPopupOpenLoadding] = useState(false);
    const openPopupLoadding = () => {
      setPopupOpenLoadding(true);
    };
    const closePopupLoadding = () => {
      setPopupOpenLoadding(false);
    };
  
    useEffect(() => {
        openPopupLoadding();
        const fetchData = async () => {
    
          const Transfer = async () => {

            try {
              const response = await axios.post(
                "http://localhost:5000/getCountTransfer",
                { UserLogin : UserLogin }
              );
              const Transfer = await response.data;
              console.log(Transfer,"Transfer");
              setdataTransfer(Transfer);
            } catch (error) {
              console.error("Error RequesterORType:", error);
            }
          };
          const Transferlistallname = async () => {
            try {
              const response = await axios.get(
                `http://localhost:5000/getCountTransferlistaLLname`
              );
              const Transferallname = await response.data;
              setdataTransferallname(Transferallname);
              setdataallname_Show(Transferallname);
              setdataname_show("Transfer");
              setdataname_type("GP01001");
              console.log(Transferallname, "ดูข้อมูล");
            } catch (error) {
              console.error("Error Transferdataall:", error);
            }
          };
    
          const Transferlistall = async () => {
            try {
              const response = await axios.post(
                "http://localhost:5000/getCountTransferlistaLL",
                { UserLogin : UserLogin }
              );
              const Transferall = await response.data;
              setdataTransferall(Transferall);
              setdataall_Show(Transferall);
            } catch (error) {
              console.error("Error Transferdataall:", error);
            }
          };
          const Loss = async () => {
            try {
              const response = await axios.post(
                "http://localhost:5000/getCountLoss",
                { UserLogin : UserLogin }
              );
              const Loss = await response.data;
              console.log(Loss,"Loss");
              setdataLoss(Loss);
            } catch (error) {
              console.error("Error RequesterORType:", error);
            }
          };
          const Write_off = async () => {
            try {
              const response = await axios.post(
                "http://localhost:5000/getCountWrite_off",
                { UserLogin : UserLogin }
              );
              const Write_off = await response.data;
              console.log(Write_off,"Loss");
              setdataWrite_off(Write_off);
            } catch (error) {
              console.error("Error RequesterORType:", error);
            }
          };
          const Lending = async () => {
            try {
              const response = await axios.post(
                "http://localhost:5000/getCountLending",
                { UserLogin : UserLogin }
              );
              const Lending = await response.data;
              console.log(Lending,"Loss");
              setdataLending(Lending);
            } catch (error) {
              console.error("Error RequesterORType:", error);
            }
          };
          const Donation = async () => {
            try {
              const response = await axios.post(
                "http://localhost:5000/getCountDonation",
                { UserLogin : UserLogin }
              );
              const Donation = await response.data;
              console.log(Donation,"Loss");
              setdataDonation(Donation);
            } catch (error) {
              console.error("Error RequesterORType:", error);
            }
            closePopupLoadding();
          };
   
          await Transfer();
          await Transferlistallname();
          await Transferlistall();
          await Loss();
          await Write_off();
          await Lending();
          await Donation();
        };
        fetchData();
      }, []);
    
      const handleClickNextToSearch =  (value, type) => {
        console.log("Received value:", value,type);
        if (value === "Create") {
          localStorage.setItem("STATUS", value);
          localStorage.setItem("TYPE", type);
          window.location.href = `/Search`;
          console.log(value,"create");     
        } else {
          localStorage.setItem("STATUS", value);
          localStorage.setItem("TYPE", type);
          window.location.href = `/ApproveFam`;
          console.log(value,"not create");
        }
      };

      const handleClickMenu_LIST = async (Data) => {
        console.log("Data",Data);
        
        openPopupLoadding();
        if (Data === "Transfer") {
            console.log("DataShow Transfer");
                try {
                  const response = await axios.get(
                    `http://localhost:5000/getCountTransferlistaLLname`
                  );
                  const Transferallname = await response.data;
                  setdataallname_Show(Transferallname);
                  console.log(Transferallname, "ดูข้อมูล");
                } catch (error) {
                  console.error("Error Transferdataall:", error);
                }

                try {
                  const response = await axios.post(
                    "http://localhost:5000/getCountTransferlistaLL",
                    { UserLogin : UserLogin }
                  );
                  const Transferall = await response.data;
                  setdataall_Show(Transferall);
                } catch (error) {
                  console.error("Error Transferdataall:", error);
                }
            setdataname_type("GP01001");
            setdataname_show(Data);
            closePopupLoadding();
        } else if (Data === "Loss") {
            console.log("DataShow Loss");
            try {
                const response = await axios.get(
                `http://localhost:5000/getCountLosslistaLLname`
                );
                const Lossallname = await response.data;
                setdataallname_Show(Lossallname);
                console.log(Lossallname, "ดูข้อมูล Loss");
            } catch (error) {
                console.error("Error Transferdataall:", error);
            }
            try {
                const response = await axios.post(
                "http://localhost:5000/getCountLosslistaLL",
                { UserLogin : UserLogin }
                );
                const Lossall = await response.data;
                setdataall_Show(Lossall);
            } catch (error) {
                console.error("Error Transferdataall:", error);
            }
            setdataname_type("GP01004");
            setdataname_show(Data);
            closePopupLoadding();
        } else if (Data === "Write off") {
            console.log("DataShow Write off");
            try {
                const response = await axios.get(
                `http://localhost:5000/getCountWrite_offlistaLLname`
                );
                const Write_offallname = await response.data;
                setdataallname_Show(Write_offallname);
                console.log(Write_offallname, "ดูข้อมูล Loss");
            } catch (error) {
                console.error("Error Transferdataall:", error);
            }
            try {
                const response = await axios.post(
                "http://localhost:5000/getCountWrite_offlistaLL",
                { UserLogin : UserLogin }
                );
                const Write_offall = await response.data;
                setdataall_Show(Write_offall);
            } catch (error) {
                console.error("Error Transferdataall:", error);
            }
            setdataname_type("GP01005");
            setdataname_show(Data);
            closePopupLoadding();
        } else if (Data === "Lending") {
            console.log("DataShow Lending");
            try {
                const response = await axios.get(
                `http://localhost:5000/getCountLendinglistaLLname`
                );
                const Lendingallname = await response.data;
                setdataallname_Show(Lendingallname);
                console.log(Lendingallname, "ดูข้อมูล Loss");
            } catch (error) {
                console.error("Error Transferdataall:", error);
            }
            try {
                const response = await axios.post(
                "http://localhost:5000/getCountLendinglistaLL",
                { UserLogin : UserLogin }
                );
                const Lendingall = await response.data;
                setdataall_Show(Lendingall);
            } catch (error) {
                console.error("Error Transferdataall:", error);
            }
            setdataname_type("GP01006");
            setdataname_show(Data);
            closePopupLoadding();
        } else if (Data === "Donations") {
            console.log("DataShow Donation");
            try {
                const response = await axios.get(
                `http://localhost:5000/getCountDonationlistaLLname`
                );
                const Donationallname = await response.data;
                setdataallname_Show(Donationallname);
                console.log(Donationallname, "ดูข้อมูล Loss");
            } catch (error) {
                console.error("Error Transferdataall:", error);
            }
            try {
                const response = await axios.post(
                "http://localhost:5000/getCountDonationlistaLL",
                { UserLogin : UserLogin }
                );
                const Donationall = await response.data;
                setdataall_Show(Donationall);
            } catch (error) {
                console.error("Error Transferdataall:", error);
            }
            setdataname_type("GP01007");
            setdataname_show(Data);
            closePopupLoadding();
        } else {
            closePopupLoadding();
        }              
      };

      


    return {dataallname_Show,dataall_Show,dataname_show,isPopupOpenLoadding,closePopupLoadding,dataTransfer,dataTransferall,dataTransferallname,handleClickNextToSearch,dataLoss,dataWrite_off,dataLending,dataDonation,handleClickMenu_LIST,dataname_type};
}


export { function_homepage }; 





