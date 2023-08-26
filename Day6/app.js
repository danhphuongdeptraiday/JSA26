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
let read = document.querySelector("#read");
addButton.addEventListener("click", function () {
  localStorage.setItem(departure_name.value, departure_point.value);

  departure_name.value = "";
  departure_point.value = "";

  location.reload();
});

read.addEventListener("click", function () {
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
});
// console.log(keys);
// for (let i = 0; i < keys.length; i++) {
//   console.log(localStorage.getItem(keys[i]));
// }

let listDeparture = [
  { departure_name: "Ngành Kinh tế", departure_point: "29" },
  { departure_name: "Ngành CNTT", departure_point: "27.8" },
];

// Chữa bài:
localStorage.setItem("ListDeparture", JSON.stringify(listDeparture));

// Lấy dữ liễu theo key: ListDeparture
let getDepartureLocalStorage = JSON.parse(
  localStorage.getItem("ListDeparture")
);
console.log(getDepartureLocalStorage[1].departure_point);
// Yêu cầu tiếp theo: lấy ra giá trị thứ departure_point của ngành CNTT

// // khi lưu dữ liệu ở dạng mảng hoặc dạng đối tượng vào trong localStorage thì mình sử dụng JSON.stringify()
// let object = { name: "phuong", age: 22 };
// localStorage.setItem("đối tượng", JSON.stringify(object));
// console.log(object);
// console.log(object.name);

// // khi lấy 1 dữ liệu đối tượng hoặc mảng đang tồn tại ở dạng string thì ta cần phải có 1 bước JSON.parse()
// let t = localStorage.getItem("đối tượng");
// console.log(t);
// console.log(JSON.parse(t).age);
