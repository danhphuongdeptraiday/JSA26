// Click me btn
let clickMeBtn = document.getElementById("clickMeBtn");
console.log(clickMeBtn);
clickMeBtn.addEventListener("click", function () {
  console.log("hello my friend");
});

// function clickMe() {
// }

// Count
let countBtn = document.getElementById("countBtn");
let i = 0;
countBtn.addEventListener("click", function () {
  if (i < 10) {
    i = i + 1;
    let newH1 = document.createElement("h1");
    newH1.innerText = "Lần bấm thứ " + i;
    document.body.appendChild(newH1);
  } else {
    alert("Full");
  }
});

//TurnOn/Off
let turnOn = document.getElementById("turnOn");
let box = document.querySelector(".box");
box.style.display = "none";

turnOn.addEventListener("click", function () {
  if (box.style.display == "none") {
    box.style.display = "flex";
  } else {
    box.style.display = "none";
  }
});

// TurnOff
let turnOff = document.getElementById("turnOff");
turnOff.addEventListener("click", function () {
  if (box.style.display != "none") {
    box.style.display = "none";
  }
});

// get value from input element
let input = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", function () {
  console.log(input.value);
  input.value = "";
});
