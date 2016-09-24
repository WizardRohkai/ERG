document.getElementById("storePersonalInfo").addEventListener("click", setLocalStorage);
var debugon = true;
var localStorage = window.localStorage;
function setLocalStorage() {
      if(debugon) alert("test");
      localStorage.setItem("Email", document.getElementById("eml").value);
      localStorage.setItem("Username", document.getElementById("uname").value);
      localStorage.setItem("Password", document.getElementById("psw").value);
      localStorage.setItem("Debug", debugon);
      window.location = "./login.html";
  };
