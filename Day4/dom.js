// // Lấy ra 1 thẻ dựa vào tên id
// let myH1 = document.getElementById("myName");
// myH1.innerText = "Long bịp :D";
// myH1.style.color = "red";
// myH1.style.backgroundColor = "yellow";
// myH1.style.display = "inline-block";
// console.log(myH1.innerText);

// let box = document.getElementById("box");
// box.innerText = "Mu vo dich";
// box.style.width = "300px";
// box.style.height = "300px";
// box.style.border = "2px solid red";
// box.style.borderRadius = "50%";
// box.style.display = "flex";
// box.style.justifyContent = "center";
// box.style.alignItems = "center";

// let line1Element = document.getElementsByClassName("line1");
// console.log(line1Element[1]);

// let listLiElement = document.getElementsByTagName("li");
// listLiElement[0].style.fontSize = "50px";
// listLiElement[0].style.color = "blue";

// listLiElement[1].style.fontSize = "30px";
// listLiElement[1].style.color = "yellow";

// listLiElement[2].style.fontSize = "10px";
// listLiElement[2].style.color = "red";

// Dùng Dom để tạo ra 1 thẻ mới trong html
let div = document.createElement("div");
div.className = "container";

let h1 = document.createElement("h1");
h1.innerText = "HELLO WORLD";

let img = document.createElement("img");
img.src = "./anh1.png";
// Thêm vào body
document.body.appendChild(div);
document.body.appendChild(img);
div.appendChild(h1);

