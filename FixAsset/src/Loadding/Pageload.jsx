
import React from "react";
import "../Page/Style.css";
import "../Loadding/Pageload.css";


function Pageload({ isOpen, onClose }) {
  if (!isOpen) return null;

  const onCloseCancel = () => {
    console.log("ปิด");
    onClose();
  };

  return (
    <div className="popup" >
      <div className="loader">
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--text"></div>
      </div>
    </div>
  );
}

export default Pageload;