const loginForm = document.querySelector("#loginForm")
const loginInput=loginForm.querySelector("input")
const loginButton = loginForm.querySelector("button")
const greeting = document.querySelector("#greeting")

function showId(){
  const inputValue = loginInput.value;
  if (inputValue ===""){
    alert("Please write your name!");
  }else if(inputValue.length >15){
    alert("Yout name is too long..")
  }
}
// loginButton.addEventListener("click",showId);

// preventDefault는 addEventListener의 첫번째 argument (여기선onLoginSubmit)안에 있는 function!
//

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
  event.preventDefault(); //브라우저가 동작하는걸(새로고침되는걸) 막음
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;

  greeting.classList.remove(HIDDEN_CLASSNAME);
  localStorage.setItem("username",username);
  paintGreeting(username);
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  // greeting.innerText = `Hi! ${username}`;
}
loginForm.addEventListener("submit",onLoginSubmit);

function paintGreeting(username){
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hi! ${username}`;
}
const saveUserName = localStorage.getItem("username");
if( saveUserName ===null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
}else{
  paintGreeting(saveUserName);
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  // greeting.innerText = `Hi! ${saveUserName}`;
}

const link = document.querySelector("a");

function handelLinkClick(event){
  event.preventDefault(); //브라우저가 동작하는걸(여기선 해당링크로이동) 막음
  console.dir(event); //클릭된 좌표값 screenX,Y, path 등 다양하게 확인 가능
  // alert("clicked");
}
// link.addEventListener("click",handelLinkClick);















//
