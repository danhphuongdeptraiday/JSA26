// var a = "Phương";
// a = "Huy";
// a = "Phong";

// let n1 = 10; // Số
// let n2 = "10"; // chuỗi
// let s = n1;
// console.log(typeof s);

// let giangAnComChua = false;
// console.log(typeof giangAnComChua);

// Prompt: cho phép người dùng nhập dữ liệu từ đầu vào
// let valueFromPrompt = prompt("Enter smt");
// // alert("Giá trị vừa nhập là: " + valueFromPrompt);
// valueFromPrompt = Number(valueFromPrompt);
// valueFromPrompt = String(valueFromPrompt);
// valueFromPrompt = Boolean(valueFromPrompt);
// console.log(valueFromPrompt);

// let n = 2 ** 4;
// console.log(Math.sqrt(n));

// let a = 10;
// let b = "10";
// console.log("Sau khi so sánh a và b ta thấy: " + (a === b));

// let point = prompt("Enter điểm đại học ?");

// if (point < 15) {
//   alert("Không đỗ trường nào cả");
// } else if (point >= 15 && point <= 20) {
//   alert("Với số điểm là " + point + " thì chỉ đỗ được trường tầm trung");
// } else if (point > 20 && point <= 24) {
//   alert("Với số điểm là " + point + " thì chỉ đỗ được trường từ khá trở lên");
// } else {
//   alert("Với số điểm là " + point + " thì chỉ đỗ trường vip pro");
// }

// let point = prompt(
//   "Enter điểm đại học(lưu ý dùng dấu chấm thay cho dấu phẩy. VD: 25.55)"
// );
// if (point >= 27.61) {
//   document.write("Đỗ Kỹ thuật Điều khiển - Tự động hóa<br>");
//   document.write("Đỗ Kỹ thuật Điều khiển - Tự động hóa (CT tiên tiến)<br>");
//   document.write(
//     "Đỗ Tin học công nghiệp và Tự động hóa(Chương trình Việt - Pháp PFIEV<br>"
//   );
//   document.write("Đỗ Hệ thống điện và năng lượng tái tạo(CT tiên tiến)<br>");
//   document.write("Đỗ Kỹ thuật điện<br>");
// } else if (point >= 25.99 && point < 27.61) {
//   document.write("Đỗ Kỹ thuật Điều khiển - Tự động hóa (CT tiên tiến)<br>");
//   document.write(
//     "Đỗ Tin học công nghiệp và Tự động hóa(Chương trình Việt - Pháp PFIEV<br>"
//   );
//   document.write("Đỗ Hệ thống điện và năng lượng tái tạo(CT tiên tiến)<br>");
//   document.write("Đỗ Kỹ thuật điện<br>");
// } else if (point >= 23.99 && point < 25.99) {
//   document.write(
//     "Đỗ Tin học công nghiệp và Tự động hóa(Chương trình Việt - Pháp PFIEV<br>"
//   );
//   document.write("Đỗ Hệ thống điện và năng lượng tái tạo(CT tiên tiến)<br>");
//   document.write("Đỗ Kỹ thuật điện<br>");
// } else if (point >= 23.55 && point < 23.99) {
//   document.write("Đỗ Hệ thống điện và năng lượng tái tạo(CT tiên tiến)<br>");
//   document.write("Đỗ Kỹ thuật điện<br>");
// } else if (point >= 23.5 && point < 23.55) {
//   document.write("Đỗ Kỹ thuật điện<br>");
// } else {
//   document.write("Không đỗ");
// }
let number = Number(prompt("Enter number ?"));
let temp = 1;
for (let i = 1; i <= number; i++) {
  temp = temp * i;
}
console.log(temp);

// temp = temp + 1;
// temp = temp + 3;
// temp = temp + 5;

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
