let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/2024.3.8Momba冲浪.jpg"){
    myImage.setAttribute("src", "images/anya.jpeg");
  } else {
    myImage.setAttribute("src", "images/2024.3.8Momba冲浪.jpg");
  }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Anya 太美了！" + myName;
  }
}

myButton.onclick = function () {
  setUserName();
};