// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// alert("Hello");

// // //Conditionals
// // let iceCream = "chocolate";
// // if (iceCream === "chocolate") {
// //   alert("Yay, I love chocolate ice cream!");
// // } else {
// //   alert("Awwww, but chocolate is my favorite…");
// // }

// // Functions
// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
//   }

// //Events with anonymous functions
// document.querySelector("html").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
//   });

//  //Events with arrow function
//  document.querySelector("html").addEventListener("click", () => {
//     alert("Ouch! Stop poking me!");
//   });

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox-icon2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name:");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
