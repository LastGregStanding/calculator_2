"use strict";

/*

add, substract, multiply, divide

*/

const screen = document.querySelector(".screen");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const mainBtns = document.querySelector(".main-buttons");
let input = 0;
let buttons = [];

//#region Buttons

clearBtn.addEventListener("mouseover", function () {
  clearBtn.classList.add("hover-clear-btn");
});
clearBtn.addEventListener("mouseout", function () {
  clearBtn.classList.remove("hover-clear-btn");
});

clearBtn.addEventListener("mousedown", function () {
  clearBtn.classList.remove("hover-clear-btn");
});
clearBtn.addEventListener("mouseup", function () {
  clearBtn.classList.add("hover-clear-btn");
});

deleteBtn.addEventListener("mouseover", function () {
  deleteBtn.classList.add("hover-delete-btn");
});
deleteBtn.addEventListener("mouseout", function () {
  deleteBtn.classList.remove("hover-delete-btn");
});
deleteBtn.addEventListener("mousedown", function () {
  deleteBtn.classList.remove("hover-delete-btn");
});
deleteBtn.addEventListener("mouseup", function () {
  deleteBtn.classList.add("hover-delete-btn");
});
//#endregion

function createMainBtns() {
  for (let i = 0; i < 16; i++) {
    let btn = document.createElement("div");
    btn.classList.add("small-button");
    switch (i) {
      case 0:
        btn.innerText = 7;
        break;
      case 1:
        btn.innerText = 8;
        break;
      case 2:
        btn.innerText = 9;
        break;
      case 3:
        btn.innerText = "÷";
        break;
      case 4:
        btn.innerText = 4;
        break;
      case 5:
        btn.innerText = 5;
        break;
      case 6:
        btn.innerText = 6;
        break;
      case 7:
        btn.innerText = "x";
        break;
      case 8:
        btn.innerText = 1;
        break;
      case 9:
        btn.innerText = 2;
        break;
      case 10:
        btn.innerText = 3;
        break;
      case 11:
        btn.innerText = "-";
        break;
      case 12:
        btn.innerText = ".";
        break;
      case 13:
        btn.innerText = 0;
        break;
      case 14:
        btn.innerText = "=";
        break;
      case 15:
        btn.innerText = "+";
        break;
    }
    buttons.push(btn);
    mainBtns.appendChild(btn);
  }
}

createMainBtns();

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    input += Number(btn.textContent);
    console.log(input);
    screenUpdate();
  });
  btn.addEventListener("mouseover", () => btn.classList.add("hover-small-btn"));
  btn.addEventListener("mouseout", () =>
    btn.classList.remove("hover-small-btn")
  );
  btn.addEventListener("mousedown", function () {
    btn.classList.remove("hover-small-btn");
  });
  btn.addEventListener("mouseup", function () {
    btn.classList.add("hover-small-btn");
  });
});

clearBtn.addEventListener("click", () => {
  input = 0;
  console.log(input);
  screenUpdate();
});

function screenUpdate() {
  screen.textContent = input;
}
