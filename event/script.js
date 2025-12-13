"use strict";

const parent = document.getElementById("parent");
const button = document.getElementById("child");

parent.addEventListener("click", () => console.log("Parent (Capture)"), true);
button.addEventListener("click", () => console.log("Button (Target)"));
