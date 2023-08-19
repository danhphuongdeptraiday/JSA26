// function sayHello() {
//   console.log("Hello World");
// }

// Lấy 1 value từ input

// let input = document.querySelector("#myInput");
// let shapeBox = document.querySelector(".shape");
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
localStorage.setItem("tên lớp", "JSA26");
localStorage.setItem("myName", "Danh Phương");

// lấy dữ liệu từ localStorage

let outPut = localStorage.getItem("tên lớp");
console.log(outPut);

let a = document.getElementById("myButton");
a.addEventListener("click", function () {
  localStorage.clear();
});

// Xóa dữ liệu dự theo key
// localStorage.removeItem("tên lớp");

// Xóa hết dữ liệu
