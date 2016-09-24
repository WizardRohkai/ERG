document.getElementById("user").addEventListener("click",setUserData);

var localStorage = window.localStorage;
function setUserData(){
      localStorage.setItem("Name", document.getElementById("name").value);
      localStorage.setItem("Surname", document.getElementById("sname").value);
      localStorage.setItem("ID Number", document.getElementById("ID").value);
      localStorage.setItem("Gender", document.getElementById("mySelect").value);
      localStorage.setItem("Allergies", document.getElementById("aller").value);
      localStorage.setItem("Medical Conditions", document.getElementById("conditions").value);
      localStorage.setItem("Emergency Contact", document.getElementById("contact").value);
      localStorage.setItem("Medical insurance company", document.getElementById("company").value);
      localStorage.setItem("Medical insurance ID", document.getElementById("insurance id").value);






};
