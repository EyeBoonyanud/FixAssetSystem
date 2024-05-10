import React, { useState, useEffect } from "react";
import axios from "axios";
function Homepage_fn() {
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
                "/getCountTransfer",
                { UserLogin : UserLogin }
              );
              const Transfer = await response.data;
              (Transfer,"Transfer");
              setdataTransfer(Transfer);
            } catch (error) {
              console.error("Error RequesterORType:", error);
            }
          };
          const Transferlistallname = async () => {
            try {
              const response = await axios.get(
                `/getCountTransferlistaLLname`
              );
              const Transferallname = await response.data;
              setdataTransferallname(Transferallname);
              setdataallname_Show(Transferallname);
              setdataname_show("Transfer");
              (Transferallname, "ดูข้อมูล");
            } catch (error) {
              console.error("Error Transferdataall:", error);
            }
          };
    
          const Transferlistall = async () => {
            try {
              const response = await axios.post(
                "/getCountTransferlistaLL",
                { UserLogin : UserLogin }
              );
              const Transferall = await response.data;
              setdataTransferall(Transferall);
              setdataall_Show(Transfer);
            } catch (error) {
              console.error("Error Transferdataall:", error);
            }
          };
          const Loss = async () => {
            try {
              const response = await axios.post(
                "/getCountLoss",
                { UserLogin : UserLogin }
              );
              const Loss = await response.data;
              (Loss,"Loss");
              setdataLoss(Loss);
            } catch (error) {
              console.error("Error RequesterORType:", error);
            }
          };
          const Write_off = async () => {
            try {
              const response = await axios.post(
                "/getCountWrite_off",
                { UserLogin : UserLogin }
              );
              const Write_off = await response.data;
              (Write_off,"Loss");
              setdataWrite_off(Write_off);
            } catch (error) {
              console.error("Error RequesterORType:", error);
            }
          };
          const Lending = async () => {
            try {
              const response = await axios.post(
                "/getCountLending",
                { UserLogin : UserLogin }
              );
              const Lending = await response.data;
              (Lending,"Loss");
              setdataLending(Lending);
            } catch (error) {
              console.error("Error RequesterORType:", error);
            }
          };
          const Donation = async () => {
            try {
              const response = await axios.post(
                "/getCountDonation",
                { UserLogin : UserLogin }
              );
              const Donation = await response.data;
              (Donation,"Loss");
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
    
      const handleClickNextToSearch =  (value) => {
        ("Received value:", value);
        if (value === "Create") {
          localStorage.setItem("STATUS", value);
          window.location.href = `/Search`;     
        } else {
          localStorage.setItem("STATUS", value);
          window.location.href = `/ApproveFam`;
        }
      };

      const handleClickMenu_LIST = async (Data) => {
        ("Data",Data);
        
        openPopupLoadding();
        if (Data === "Transfer") {
            ("DataShow Transfer");
                try {
                  const response = await axios.get(
                    `/getCountTransferlistaLLname`
                  );
                  const Transferallname = await response.data;
                  setdataallname_Show(Transferallname);
                  (Transferallname, "ดูข้อมูล");
                } catch (error) {
                  console.error("Error Transferdataall:", error);
                }

                try {
                  const response = await axios.post(
                    "/getCountTransferlistaLL",
                    { UserLogin : UserLogin }
                  );
                  const Transferall = await response.data;
                  setdataall_Show(Transferall);
                } catch (error) {
                  console.error("Error Transferdataall:", error);
                }
            setdataname_show(Data);
            closePopupLoadding();
        } else if (Data === "Loss") {
            ("DataShow Loss");
            try {
                const response = await axios.get(
                `/getCountLosslistaLLname`
                );
                const Lossallname = await response.data;
                setdataallname_Show(Lossallname);
                (Lossallname, "ดูข้อมูล Loss");
            } catch (error) {
                console.error("Error Transferdataall:", error);
            }
            try {
                const response = await axios.post(
                "/getCountLosslistaLL",
                { UserLogin : UserLogin }
                );
                const Lossall = await response.data;
                setdataall_Show(Lossall);
            } catch (error) {
                console.error("Error Transferdataall:", error);
            }
            setdataname_show(Data);
            closePopupLoadding();
        } else if (Data === "Write off") {
            ("DataShow Write off");
            try {
                const response = await axios.get(
                `/getCountWrite_offlistaLLname`
                );
                const Write_offallname = await response.data;
                setdataallname_Show(Write_offallname);
                (Write_offallname, "ดูข้อมูล Loss");
            } catch (error) {
                console.error("Error Transferdataall:", error);
            }
            try {
                const response = await axios.post(
                "/getCountWrite_offlistaLL",
                { UserLogin : UserLogin }
                );
                const Write_offall = await response.data;
                setdataall_Show(Write_offall);
            } catch (error) {
                console.error("Error Transferdataall:", error);
            }
            setdataname_show(Data);
            closePopupLoadding();
        } else if (Data === "Lending") {
            ("DataShow Lending");
            try {
                const response = await axios.get(
                `/getCountLendinglistaLLname`
                );
                const Lendingallname = await response.data;
                setdataallname_Show(Lendingallname);
                (Lendingallname, "ดูข้อมูล Loss");
            } catch (error) {
                console.error("Error Transferdataall:", error);
            }
            try {
                const response = await axios.post(
                "/getCountLendinglistaLL",
                { UserLogin : UserLogin }
                );
                const Lendingall = await response.data;
                setdataall_Show(Lendingall);
            } catch (error) {
                console.error("Error Transferdataall:", error);
            }
            setdataname_show(Data);
            closePopupLoadding();
        } else if (Data === "Donations") {
            ("DataShow Donation");
            try {
                const response = await axios.get(
                `/getCountDonationlistaLLname`
                );
                const Donationallname = await response.data;
                setdataallname_Show(Donationallname);
                (Donationallname, "ดูข้อมูล Loss");
            } catch (error) {
                console.error("Error Transferdataall:", error);
            }
            try {
                const response = await axios.post(
                "/getCountDonationlistaLL",
                { UserLogin : UserLogin }
                );
                const Donationall = await response.data;
                setdataall_Show(Donationall);
            } catch (error) {
                console.error("Error Transferdataall:", error);
            }
            setdataname_show(Data);
            closePopupLoadding();
        } else {
            closePopupLoadding();
        }              
      };

      


    return {dataallname_Show,dataall_Show,dataname_show,isPopupOpenLoadding,closePopupLoadding,dataTransfer,dataTransferall,dataTransferallname,handleClickNextToSearch,dataLoss,dataWrite_off,dataLending,dataDonation,handleClickMenu_LIST};
}


export { Homepage_fn }; 





