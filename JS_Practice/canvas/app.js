const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 500;
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
  painting = true;
}
function stopPainting(){
  painting=false;
}
function onMousedown(e){
  painting = true;
}


if(canvas){
  canvas.addEventListener("mousemove",onMouseMove);
  canvas.addEventListener("mousedown",startPainting); //마우스'클릭'시 발생
  canvas.addEventListener("mouseup",stopPainting); //마우스 클릭을 '뗐을 때' 발생
  canvas.addEventListener("mouseleave",stopPainting);

}
const colors = document.getElementsByClassName("controls_color");
for (let i=0;i<colors.length;i++){
  colors[i].addEventListener("click",function(e){
    console.log(e.target.style.background);
    ctx.strokeStyle = e.target.style.background;
  });
}
