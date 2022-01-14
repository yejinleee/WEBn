// const (constant) 상수 : 변하지 않음 assingment is not unable
// let 바꿀수 있음. 처음생성할때 씀 let a =10 해놓고 그다음부턴 a = 20
// var 업데이트 가능. 근데 보호못받음. const let으로 나누어서 못바꾸게하고싶은거 const로
// 선언 형태를 보고 개발 의도를 볼 수 있다.

const makeArray = ['a','b','c']
// to push something new
makeArray.push('d')
console.log(makeArray)

// object
const player = {
  name : "yejin",
  points : 10,
};
console.log(player.name);
// const 안의 객체 하나씩은 수정 가능. const 전체를 수정은 X!

const calculator = {
  plus:function(a,b){
    console.log(a+b);
  },
  minus:function(a,b){
    console.log(a-b);
  },
  powerof:function(a,b){
    console.log(a**b);
  },
};
calculator.plus(1,2);
calculator.minus(5,3);
calculator.powerof(2,4);

a = "14"
console.log(isNaN(a));
console.log(parseInt(a), typeof(parseInt(a)));



//querySelector : CSS방식으로 태그 가져올수있음
//querySelectorAll : 해당되는 모두를 array형식으

const h1 = document.querySelector(".hello h1");

h1.innerText = "Hi, there!";
console.dir(h1);

h1.style.color="blue";

function handleTitleClick(){
  console.log("h1 was clicked!");
}
function handleMouseEnter(){
  console.log("Mouse is here!");
}
h1.addEventListener("click", handleTitleClick);
//removeEventListener 도있음
h1.onmouseenter = handleMouseEnter;

const h2 = document.querySelector(".hello h2");
function changeColor(){
  h2.className="active";
}
h2.addEventListener("click",changeColor);


// className
const h3 = document.querySelector(".hello h3");
function handleH3(){
  const clickedClass = "clicked";
  // if (h3.classList.contains(clickedClass)){
  //   h3.classList.remove(clickedClass)
  // }else{
  //   h3.classList.add(clickedClass)
  // }

  //이만큼을 대체하는게 toggle !!
  h3.classList.toggle("clicked");
}
h3.addEventListener("click",handleH3);


















//
