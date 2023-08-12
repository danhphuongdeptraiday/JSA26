// Bài 2

// let emptyArrayFood = [];

// let n = Number(prompt("Nhập số lượng đồ ăn trong mảng"));

// for (let i = 0; i < n; i++) {
//   let food = prompt("Nhập tên đồ ăn tại ví trị thứ " + (i + 1));
//   emptyArrayFood.push(food);
// }

// console.log(emptyArrayFood);

// Bài 3

let calculation = prompt(
  "Nhập dấu theo các số sau để thực hiện phép tính sau \n (1): Phép (+) \n (2): Phép (-) \n (3): Phép (x) \n (4): Phép / \n (0): Cảm ơn với người dùng là đã sử dụng trười trình"
);

if (calculation == 1) {
  let a = Number(prompt("Nhập số thứ 1: "));
  let b = Number(prompt("Nhập số thứ 2: "));
  let value = plus(a, b);
  alert(`Tổng 2 số ${a} và ${b} = ${value}`);
} else if (calculation == 2) {
  let a = Number(prompt("Nhập số thứ 1: "));
  let b = Number(prompt("Nhập số thứ 2: "));
  let value = minus(a, b);
  alert(`Hiệu 2 số ${a} và ${b} = ${value}`);
} else if (calculation == 3) {
  let a = Number(prompt("Nhập số thứ 1: "));
  let b = Number(prompt("Nhập số thứ 2: "));
  let value = product(a, b);
  alert(`Tích 2 số ${a} và ${b} = ${value}`);
} else if (calculation == 4) {
  let a = Number(prompt("Nhập số thứ 1: "));
  let b = Number(prompt("Nhập số thứ 2: "));
  let value = divide(a, b);
  alert(`Thương 2 số ${a} và ${b} = ${value}`);
} else if (calculation == 0) {
  alert("Cảm ơn bạn đã dùng chương trình");
}

function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function product(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
