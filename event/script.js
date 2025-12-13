"use strict";

// // const parent = document.getElementById("parent");
// // const button = document.getElementById("child");
// // const list = document.getElementById("list");

// // parent.addEventListener("click", () => console.log("Parent (Capture)"), true);
// // button.addEventListener("click", () => console.log("Button (Target)"));

// const handlerClick = (e) => console.log(e);

// const items = document.querySelectorAll(".items");

// // items.forEach((item) => {
// //   item.addEventListener("click", handlerClick);
// // });

// items.addEventListener("click", (e) => {
//   if (e.target.matches("li")) {
//     console.log("Clicked item:", e.target);
//   }
// });

const list = document.getElementById("todo-list");

const addBtn = document.getElementById("add");

// list.addEventListener("click", (e) => {
//   if (e.target.tagName === "LI") {
//     console.log("Clicked: ", e.target.textContent);
//     console.log("ID: ", e.target.dataset.id);
//   }
// });

addBtn.addEventListener("click", () => {
  const liEl = document.createElement("li");

  liEl.textContent = "New Item";
  liEl.dataset.id = Date.now();

  list.appendChild(liEl);
});
