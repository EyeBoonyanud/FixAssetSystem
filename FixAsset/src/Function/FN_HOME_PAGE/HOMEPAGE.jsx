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
    const [dataScrap, setdataScrap] = useState([]);
    const [dataSale, setdataSale] = useState([]);
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
                "/getCountTransfer",
                { UserLogin : UserLogin }
              );
              const Transfer = await response.data;
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
              setdataname_type("GP01001");
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
              setdataall_Show(Transferall);
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
              setdataLoss(Loss);
            } catch (error) {
              console.error("Error RequesterORType:", error);
            }
          };
          const Scrap = async () => {
            try {
              const response = await axios.post(
                "/getCountScrap",
                { UserLogin : UserLogin }
              );
              const Scrap = await response.data;
              setdataScrap(Scrap);
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
              setdataDonation(Donation);
            } catch (error) {
              console.error("Error RequesterORType:", error);
            }
            closePopupLoadding();
          };
          const Sale= async () => {
            try {
              const response = await axios.post(
                "/getCountSale",
                { UserLogin : UserLogin }
              );
              const Sale = await response.data;
              setdataSale(Sale);
            } catch (error) {
              console.error("Error Sale:", error);
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
          await Scrap();
          await Sale();
        };
        fetchData();
      }, []);
    
      const handleClickNextToSearch =  (value, type) => {
        if (value === "Create") {
          localStorage.setItem("STATUS", value);
          localStorage.setItem("TYPE", type);
          window.location.href = `/FAMsystem/Search`;
        } else {
          localStorage.setItem("STATUS", value);
          localStorage.setItem("TYPE", type);
          window.location.href = `/FAMsystem/ApproveFam`;
        }
      };

      const handleClickMenu_LIST = async (Data) => {
        
        openPopupLoadding();
        if (Data === "Transfer") {
                try {
                  const response = await axios.get(
                    `/getCountTransferlistaLLname`
                  );
                  const Transferallname = await response.data;
                  setdataallname_Show(Transferallname);
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
            setdataname_type("GP01001");
            setdataname_show(Data);
            closePopupLoadding();
        } else if (Data === "Loss") {
            try {
                const response = await axios.get(
                `/getCountLosslistaLLname`
                );
                const Lossallname = await response.data;
                setdataallname_Show(Lossallname);
            } catch (error) {
                console.error("Error Lossallname:", error);
            }
            try {
                const response = await axios.post(
                "/getCountLosslistaLL",
                { UserLogin : UserLogin }
                );
                const Lossall = await response.data;
                setdataall_Show(Lossall);
            } catch (error) {
                console.error("Error Lossall:", error);
            }
            setdataname_type("GP01004");
            setdataname_show(Data);
            closePopupLoadding();
        } else if (Data === "Write off") {
            try {
                const response = await axios.get(
                `/getCountWrite_offlistaLLname`
                );
                const Write_offallname = await response.data;
                setdataallname_Show(Write_offallname);
            } catch (error) {
                console.error("Error Write_offallname:", error);
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
            setdataname_type("GP01005");
            setdataname_show(Data);
            closePopupLoadding();
        } else if (Data === "Lending") {
            try {
                const response = await axios.get(
                `/getCountLendinglistaLLname`
                );
                const Lendingallname = await response.data;
                setdataallname_Show(Lendingallname);
            } catch (error) {
                console.error("Error Lendingallname:", error);
            }
            try {
                const response = await axios.post(
                "/getCountLendinglistaLL",
                { UserLogin : UserLogin }
                );
                const Lendingall = await response.data;
                setdataall_Show(Lendingall);
            } catch (error) {
                console.error("Error Lendingall:", error);
            }
            setdataname_type("GP01006");
            setdataname_show(Data);
            closePopupLoadding();
        } else if (Data === "Donations") {
            try {
                const response = await axios.get(
                `/getCountDonationlistaLLname`
                );
                const Donationallname = await response.data;
                setdataallname_Show(Donationallname);
            } catch (error) {
                console.error("Error Donationallname:", error);
            }
            try {
                const response = await axios.post(
                "/getCountDonationlistaLL",
                { UserLogin : UserLogin }
                );
                const Donationall = await response.data;
                setdataall_Show(Donationall);
            } catch (error) {
                console.error("Error Donationall:", error);
            }
            setdataname_type("GP01007");
            setdataname_show(Data);
            closePopupLoadding();
        }  else if (Data === "Scrap") {
          try {
              const response = await axios.get(
              `/getCountScraplistaLLname`
              );
              const Scarpallname = await response.data;
              setdataallname_Show(Scarpallname);
          } catch (error) {
              console.error("Error Scarpallname:", error);
          }
          try {
              const response = await axios.post(
              "/getCountScraplistaLL",
              { UserLogin : UserLogin }
              );
              const Scrapall = await response.data;
              setdataall_Show(Scrapall);
          } catch (error) {
              console.error("Error Scrapall:", error);
          }
          setdataname_type("GP01002");
          setdataname_show(Data);
          closePopupLoadding();
      } else if (Data === "Sales") {
        try {
            const response = await axios.get(
            `/getCountSalelistaLLname`
            );
            const Saleallname = await response.data;
            setdataallname_Show(Saleallname);
        } catch (error) {
            console.error("Error Saleallname:", error);
        }
        try {
            const response = await axios.post(
            "/getCountSalelistaLL",
            { UserLogin : UserLogin }
            );
            const Saleall = await response.data;
            setdataall_Show(Saleall);
        } catch (error) {
            console.error("Error Scrapall:", error);
        }
        setdataname_type("GP01003");
        setdataname_show(Data);
        closePopupLoadding();
    }else {
            closePopupLoadding();
        }              
      };

      


    return {dataallname_Show,dataall_Show,dataname_show,isPopupOpenLoadding,closePopupLoadding,dataTransfer,dataTransferall,dataTransferallname,handleClickNextToSearch,dataLoss,dataWrite_off,dataLending,dataDonation,handleClickMenu_LIST,dataname_type,dataScrap,dataSale};
}


export { function_homepage }; 





