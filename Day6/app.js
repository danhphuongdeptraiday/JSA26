// function sayHello() {
//   console.log("Hello World");
// }

// Lấy 1 value từ input

// let input = document.querySelector("#myInput");
// // let input = document.getElementById("myInput")

// let a = document.getElementById("myButton");
// a.addEventListener("click", function () {
//   if (input.value == "vuông") {
//     console.log("Shape đang là hình vuông");
//     shapeBox.style.width = "300px";
//     shapeBox.style.height = "300px";
//   } else if (input.value == "tròn") {
//     shapeBox.style.width = "300px";
//     shapeBox.style.height = "300px";
//     shapeBox.style.borderRadius = "50%";
//   } else if (input.value == "chữ nhật") {
//     shapeBox.style.width = "500px";
//     shapeBox.style.height = "300px";
//     shapeBox.style.borderRadius = "0%";
//   }
// });

// LOCALSTORAGE

// lữu dữ liệu vào trong localStorage ta dùng hàm: setItem()
// localStorage.setItem("tên lớp", "JSA26");
// localStorage.setItem("myName", "Danh Phương");

// // lấy dữ liệu từ localStorage

// let outPut = localStorage.getItem("tên lớp");
// console.log(outPut);

// let a = document.getElementById("myButton");
// a.addEventListener("click", function () {
//   localStorage.clear();
// });

// Xóa dữ liệu dự theo key
// localStorage.removeItem("tên lớp");

// Xóa hết dữ liệu

// Bài 3

let departure_name = document.getElementById("departure_name");
let departure_point = document.getElementById("departure_point");
let addButton = document.getElementById("myButton");
let shapeBox = document.querySelector(".shape");

addButton.addEventListener("click", function () {
  localStorage.setItem(departure_name.value, departure_point.value);

  departure_name.value = "";
  departure_point.value = "";
});
const keys = Object.keys(localStorage);

for (let i = 0; i < keys.length; i++) {
  let newDiv = document.createElement("div");
  let newB = document.createElement("b");
  newB.innerText = `${keys[i]}: `;
  let newSpan = document.createElement("span");
  newSpan.innerText = localStorage.getItem(keys[i]);
  newDiv.appendChild(newB);
  newDiv.appendChild(newSpan);
  shapeBox.appendChild(newDiv);
}

// console.log(keys);
for (let i = 0; i < keys.length; i++) {
  console.log(localStorage.getItem(keys[i]));
}
