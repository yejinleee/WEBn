const loginForm = document.querySelector(".loginInput")
const pa = document.querySelector("#a");
function showId(){
  console.log("func");
  pa.innerText =loginForm.value;
}

const login_button = document.getElementsByTagName("button");
login_button[0].addEventListener("click",showId);
