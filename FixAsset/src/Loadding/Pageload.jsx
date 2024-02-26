// import React, { useState, useEffect } from "react";
// import "../Page/Style.css";
// import { LoadingOutlined  } from '@ant-design/icons';
// import { colors } from "@mui/material";
 
// function Pageload({ isOpen , onClose}) {
//   //console.log( isOpen, onClose, FamNo ,"//////////////////////////")
//   if (!isOpen) return null;
 
//   const onCloseCancel = () => {
//     console.log("ปิด");
//     onClose();
//   };
 

//   return (
// <div className="popup" style={{ fontSize: '100px', color: 'white' }}>
//     <LoadingOutlined />
//     <p>Loading</p>
// </div>

//   );
// }
 
// export default Pageload;


import React, { useState, useEffect } from "react";
import "../Page/Style.css";
import "../Loadding/Pagelaod.css";
import { LoadingOutlined } from '@ant-design/icons';

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
