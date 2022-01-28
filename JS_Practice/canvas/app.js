const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

const mode = document.getElementById("jsMode");
let fill=false;

canvas.width = 700;
canvas.height = 500;

ctx.fillStyle="white";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;


function onMouseMove(e){
  // clientX,Y : 윈도우 전체 내에서 마우스 위치값
  // offsetX,Y : 해당 요소 내에서 마우스 위치값
  const x = e.offsetX;
  const y = e.offsetY;
  if(!painting){
    ctx.beginPath();
    ctx.moveTo(x,y);
  }else{
    ctx.lineTo(x,y);
    ctx.stroke();

  }
}
function startPainting(){
  if(fill===true){
      canvas.style.background = ctx.strokeStyle;
      console.log(ctx.strokeStyle);
  }else{
    painting = true;
  }
}
function stopPainting(){
  painting=false;
}

function handelCM(e){
  e.preventDefault(); //우클릭시에 메뉴가 안뜨게하는것. Save눌러야 저장할수있게하려고!
}

if(canvas){
  canvas.addEventListener("mousemove",onMouseMove);
  canvas.addEventListener("mousedown",startPainting); //마우스'클릭'시 발생
  canvas.addEventListener("mouseup",stopPainting); //마우스 클릭을 '뗐을 때' 발생
  canvas.addEventListener("mouseleave",stopPainting);
  canvas.addEventListener("conotextmenu",handelCM); //우클릭시!!!
}

function changeColor(e){
  clickedColor = e.target.style.background;
  ctx.strokeStyle = clickedColor;
}
const colors = document.getElementsByClassName("controls_color");
// for (let i=0;i<colors.length;i++){
//   colors[i].addEventListener("click",changeColor);
// }
//object로부터 array 만드는 방법 : Array.from(colors)
Array.from(colors).forEach(color => {
  color.addEventListener("click",changeColor)
});

function changeBrushWeight(e){
  const inputWeight = e.target.value;
  ctx.lineWidth = inputWeight;
}

const brushWeight = document.getElementById("jsRange");
if(brushWeight){ //확인
  brushWeight.addEventListener("input",changeBrushWeight);
}

function changeMode(){
  fill= !fill;
  mode.innerText = fill ? "Fill":"Draw";
}
if(mode){
  mode.addEventListener("click",changeMode);
}

function saveClick(){
  const image = canvas.toDataURL("imgae/jpeg");  // 디폴트는 png
  const link = document.createElement("a");
  link.href = image; //이미지
  link.download = "PaintJS[EXPORT]"; //이름
  link.click();
}
const saveBtn = document.getElementById("jsSave");
if(saveBtn){
  saveBtn.addEventListener("click",saveClick)
}




//
