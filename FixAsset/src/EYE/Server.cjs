
// Person and BOI
app.get("/getData_UserLogin_Person",Transaction.getData_UserLogin_Person);
app.get("/Search_Person_Maintain",Transaction.search_person_maintain);
app.get("/Search_Person_Maintain_Edit",Transaction.getEdit_Person_Show);
app.get("/get_BOI_project",Transaction.get_BOI_project);
app.get("/search_BOI_project",Transaction.search_BOI_project);
app.get("/Search_BOI_Maintain_Edit",Transaction.getEdit_BOI_Show);
app.get("/getCountTransfer",Transaction.getCountTransfer);
app.get("/getCountTransferlistaLL",Transaction.getCountTransferlistaLL);
app.get("/getlevel",Transaction.level_person_maintain);

app.post("/ins_PERSON_MAINTAIN",Transaction.insertPerson_Maintain);
app.post("/update_PERSON_MAINTAIN",Transaction.updatePerson_Maintain);
app.post("/dlt_PERSON_MAINTAIN",Transaction.deletePerson_Maintain);
app.post("/ins_BOI_MAINTAIN",Transaction.insertBOI_Maintain);
app.post("/update_BOI_MAINTAIN",Transaction.updateBOI_Maintain);
app.post("/dlt_BOI_MAINTAIN",Transaction.deleteBOI_Maintain);
