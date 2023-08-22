"use strict";

/*

add, substract, multiply, divide

*/

const smallBtn = document.querySelectorAll(".small-button");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");

smallBtn.forEach((btn) => {
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
