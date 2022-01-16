const images = [
  "0.jpg","1.jpg","2.jpg"
];

// Math/random *범위 : (0~범위-1)수에서 랜덤
const chosenImage = images[Math.floor(Math.random()*images.length)];

// JavaScript에서 요소를 만들어 HTML에 추가하기
const bgimage= document.createElement("img");
bgimage.src = `img/${chosenImage}`;
document.body.appendChild(bgimage);
