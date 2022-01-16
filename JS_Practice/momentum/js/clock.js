//Interval 과 timeout

function sayHello(){
  console.log("Hello");
}
// Interval : 매번 일어나야 하는 것  -->setInterval(발생할함수,초(ms))
// setInterval(sayHello,5000);

// 일정시간이 지난 후에 함수를 한번만! 실행하고 싶을 때
setTimeout(sayHello,4000);

//-------------------------------------------------

const clock = document.querySelector("#clock")

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}
getClock();
setInterval(getClock,1000);








//
