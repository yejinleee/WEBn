const images = [
  "0.jpg","1.jpg","2.jpg"
];
let imagesUrl = ["https://img.theqoo.net/img/OTnsp.png","https://img.theqoo.net/img/cYPtI.png"];
const imageUrlForm = document.querySelector("#imageUrl_form");
const inputImageUrl = document.querySelector("#inputImageUrl");

function handelImageUrlSubmit(event){
  event.preventDefault();
  const newImageUrl = inputImageUrl.value;
  inputImageUrl.value="";
  imagesUrl.push(newImageUrl);
  console.log(imagesUrl);
}
imageUrlForm.addEventListener("submit",handelImageUrlSubmit);
// images.append("https://img.theqoo.net/img/OTnsp.png")
// Math/random *범위 : (0~범위-1)수에서 랜덤
const chosenImage = images[Math.floor(Math.random()*images.length)];
const chosenImageUrl = imagesUrl[Math.floor(Math.random()*images.length)];

// JavaScript에서 요소를 만들어 HTML에 추가하기
// const bgimage= document.createElement("img");
// bgimage.src = `img/${chosenImage}`;
// document.body.appendChild(bgimage);

// document.body.style.backgroundImage = `url(${`img/${chosenImage}`})`;
document.body.style.backgroundImage = `url(${chosenImageUrl})`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.height = "100vh";
document.body.style.margin = '0';

// = `img/${chosenImage}`;
// background-repeat : no-repeat;
// background-size : cover;
