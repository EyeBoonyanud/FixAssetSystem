import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function FAM_TRANSECTION_SALE() {
  const EditFam = localStorage.getItem("EDIT");
  const Edit_trans = localStorage.getItem("Edit_Trans");
  const For_edit_trans = JSON.parse(Edit_trans);
  const ForRequester = localStorage.getItem("ForRequester");
  const For_Req = JSON.parse(ForRequester);

  const [pte_input_weight_size, setpte_input_weight_size] = useState([]); //PTE (ENV) input weight/size
  const [selectpte_input_weight_size, setselectpte_input_weight_size] =
    useState("");
  const [pln_staff_boi, setpln_staff_boi] = useState([]); //PLN Staff contact BOI
  const [selectpln_staff_boi, setselectpln_staff_boi] = useState("");
  const [import_boi_prepare, setimport_boi_prepare] = useState([]); //Import & BOI prepare
  const [selectimport_boi_prepare, setselectimport_boi_prepare] = useState("");
  const [boi_input_data, setboi_input_data] = useState([]); //BOI Input data Import
  const [selectboi_input_data, setselectboi_input_data] = useState("");
  const [thai_catergories, setthai_catergories] = useState([]); //Import & BOI input thai catergories
  const [selectthai_catergories, setselectthai_catergories] = useState("");
  const [pln_staff_bidding, setpln_staff_bidding] = useState([]); // PLN Staff bidding
  const [selectpln_staff_bidding, setselectpln_staff_bidding] = useState("");
  const [pte_dept, setpte_dept] = useState([]); //PTE (ENV) contact Department of Industrial Works
  const [selectpte_dept, setselectpte_dept] = useState("");
  const [export_clearance, setexport_clearance] = useState([]); //BOI make export clearance
  const [selectexport_clearance, setselectexport_clearance] = useState("");
  const [pte_upload_file, setpte_upload_file] = useState([]); // PTE (ENV) upload file after BOI make export clearance:
  const [selectpte_upload_file, setselectpte_upload_file] = useState("");
  const [pln_req_inv, setpln_req_inv] = useState([]); //PLN Staff request Invoice
  const [selectpln_req_inv, setselectpln_req_inv] = useState("");
  const [ship_input_inv, setship_input_inv] = useState([]); //Shipping Staff imput invoice no.
  const [selectship_input_inv, setselectship_input_inv] = useState("");
  const [pln_upload_final, setpln_upload_final] = useState([]); //PLN Staff upload Final payment 50%:
  const [selectpln_upload_final, setselectpln_upload_final] = useState("");

 

 
  return
  {
    pte_input_weight_size, setpte_input_weight_size,
    selectpte_input_weight_size, setselectpte_input_weight_size,
    pln_staff_boi, setpln_staff_boi,
    selectpln_staff_boi, setselectpln_staff_boi,
    import_boi_prepare, setimport_boi_prepare,
    selectimport_boi_prepare, setselectimport_boi_prepare,
    boi_input_data, setboi_input_data,
    selectboi_input_data, setselectboi_input_data


  }
}

export { FAM_TRANSECTION_SALE };
