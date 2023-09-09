let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let insertButton = document.getElementById("insert");
let shapeBox = document.querySelector(".shape");
let readButton = document.getElementById("read");

// Đoạn check insert

let list = JSON.parse(localStorage.getItem("list"));
if (list == null) {
  localStorage.setItem("list", JSON.stringify([]));
  location.reload();
} else {
  insertButton.addEventListener("click", function () {
    let checkExistedUser = false;
    for (let i = 0; i < list.length; i++) {
      if (list[i].name == nameInput.value) {
        checkExistedUser = true;
      }
    }

    if (checkExistedUser == true) {
      alert("Người dùng đã tồn tại");
    } else {
      list.push({
        name: nameInput.value,
        age: ageInput.value,
      });

      localStorage.setItem("list", JSON.stringify(list));

      nameInput.value = "";
      ageInput.value = "";
    }
  });
}

// Đoạn xử lý đọc tất cả dữ liệu trong localStorage
readButton.addEventListener("click", function () {
  shapeBox.innerHTML = "";

  let list = JSON.parse(localStorage.getItem("list"));

  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);

    let newDiv = document.createElement("div");
    let nameElement = document.createElement("b");
    nameElement.innerText = "Name: ";
    let nameSpan = document.createElement("span");
    nameSpan.innerText = list[i].name;

    let ageElement = document.createElement("b");
    ageElement.innerText = "Age: ";
    let ageSpan = document.createElement("span");
    ageSpan.innerText = list[i].age;

    newDiv.appendChild(nameElement);
    newDiv.appendChild(nameSpan);
    newDiv.appendChild(document.createElement("br"));
    newDiv.appendChild(ageElement);
    newDiv.appendChild(ageSpan);
    shapeBox.appendChild(newDiv);
  }
});

// Chức năng tìm kiếm người dùng
let findUserBtn = document.getElementById("find_user");
let user_want_to_find = document.getElementById("user_want_find");

findUserBtn.addEventListener("click", function () {
  let indexUserFound = 0;
  let checkExistedUser = false;
  for (let i = 0; i < list.length; i++) {
    if (list[i].name == user_want_to_find.value) {
      checkExistedUser = true;
      indexUserFound = i;
    }
  }

  //   list[indexUserFound].age =

  if (checkExistedUser == true) {
    document.querySelector(".user_found span").innerText =
      user_want_to_find.value;
  } else {
    alert("Không tìm thấy người dùng, vui lòng nhập lại");
    document.querySelector(".user_found span").innerText = "Not found";
  }
});

// let t = { name: "Phuong", age: "123" };
// console.log(t.name);
