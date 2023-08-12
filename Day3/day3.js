// let myName = prompt("Enter name ? ");
// // console.log(myName.charAt(0));
// // console.log(myName.charAt(1));
// // console.log(myName.charAt(2));
// // console.log(myName.length);
// let checkKhongTrong = true;
// if (myName == "") {
//   // đây là trường hợp xử lý đầu vào khi dữ liệu để trống
//   alert("Nhập lại đi dữ liệu của bạn không được để trống");
// } else {
//   // xử lý đầu vào khi đầu vào không bị trống
//   for (let i = 0; i < myName.length; i++) {
//     if (myName.charAt(i) == " ") {
//       alert("Bạn không được để khoảng trống ở trong từ");
//         checkKhongTrong = false;
//     }
//   }
//   if (checkKhongTrong == true) {
//     alert("Đầu vào của bạn vừa nhập là hợp lệ");
//   }
// }

//                           ARRAY

let favor1 = "basketball";
let favor2 = "tennis";
let favor3 = "football";

let listFavorSport = ["basketball", "tennis", "football"];
// console.log(listFavorSport[0]);
// listFavorSport.push("golf");
// console.log(listFavorSport.pop());
// để thêm 1 phần tử mới vào trong mảng ta dùng hàm push(value)
// * value có thể là bất cứ giá trị nào

// IN RA TẤT CẢ GIÁ TRỊ TRONG MẢNG (DÙNG VÒNG FOR)
// for (let i = 0; i < listFavorSport.length; i++) {
//   console.log(listFavorSport[i]);
// }

// cách 1:
// let tempArray = [];
// for (let i = listFavorSport.length - 1; i >= 0; i--) {
//   console.log(listFavorSport[i]);
//   tempArray.push(listFavorSport[i]);
// }
// console.log(tempArray);

// cách 2:
// for (let i = 0; i <= listFavorSport.length; i++) {
//   // console.log(listFavorSport[i]);
//   tempArray.push(listFavorSport.pop());
// }

// Đảo ngược lại thứ tự ở trong mảng ?
// Bài 2: Khai báo 1 mảng có tên là food. Yêu cầu dùng hàm prompt
// để yêu cầu người dùng nhập số lượng food muốn thêm vào mảng
// sau khi nhập xong số lượng thì sẽ hiện ra ngần đấy prompt
// để người dùng nhập

//                                FUNCTION
// Kiểu 1:
// function helloPhuong() {
//   console.log("hello thầy Phương");
// }

// helloPhuong();

// // Kiểu 2:
// function plus(a, b) {
//   console.log(a + b);
// }

// plus(10, 20);

// Kiểu 3:
// function myName() {
//   return "Ly đáng yêu";
// }

// console.log(myName());

// Kiểu 4 = kiểu 2 + kiểu 3;
// function myName(ho, ten_dem, ten_chinh) {
//   return ho + " " + ten_dem + " " + ten_chinh;
// }

// console.log(myName("Nguyễn", "Danh", "Phương"));

//                                    ĐỐI TƯỢNG

// let person = {
//   name: "Phuong",
//   age: 22,
//   sing: function (song_name) {
//     console.log("tôi thích hát bài " + song_name);
//   },
// };

// console.log(person.name + " " + person.age);

// person.sing("Quốc ca");

// Tạo 1 đối tượng tên là mindx: gồm 3 thuộc tính và 3 chức năng
