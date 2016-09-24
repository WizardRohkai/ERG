document.getElementById("checkLogin").addEventListener("click", validateLogin);
var localStorage = window.localStorage;
var debugon = localStorage.getItem("Debug");
function validateLogin(){
  alert("validating login");
  if(debugon){
    alert(document.getElementById("luname").value);
    alert(localStorage.getItem("Username"));
  };
  if ((document.getElementById("luname").value == localStorage.getItem("Username")) &
     (document.getElementById("lpsw").value == localStorage.getItem("Password"))){
            alert("Login accepted");
            window.location = "./info.html";
  }
  else{
    alert("Wrong credentials");
  };
};
