var boxColors = [];
var randColor = new rgbObj;
var answer = 0;
var currentMode = 1;
var displayAns = document.querySelector("#color");
const boxes = document.querySelectorAll(".box");
const grid = document.querySelector(".colorGrid");
const row1 = document.querySelectorAll(".row1");
const row2 = document.querySelectorAll(".row2");
const header = document.querySelector("#progress");
const newColorBtn = document.querySelector("#newColor").addEventListener("click", initNewColors);
const easyMode = document.querySelector("#easyMode");
const hardMode = document.querySelector("#hardMode");

easyMode.addEventListener("click", initNewMode);
hardMode.addEventListener("click", initNewMode);

// Object with a variable for each color in rgb space assigned randomly
function rgbObj() {
   this.r = Math.floor((Math.random() * 256));
   this.g = Math.floor((Math.random() * 256));
   this.b = Math.floor((Math.random() * 256));
}

// Initialise game on startup 
function init() {
   makeBoxes(currentMode);
   header.innerHTML = "";
   displayAns.innerHTML = "";
   colorBox();
   selectAns();
   currentAns();
}

// Initialise a new mode function
function initNewMode() {
   if (this.id === "easyMode") {
      currentMode = 0;
      makeBoxes(0);
      initNewColors();       
   } else if (this.id === "hardMode") {
      currentMode = 1;
      makeBoxes(1);
      initNewColors();
   }
}

function initNewColors() {
   colorBox();
   selectAns();
   currentAns();
}

function makeBoxes(mode) {
   if (mode === 1) {
      row2.forEach(box => {
         box.style.display = "grid";
      });
   }

   else if (mode === 0) {
      row2.forEach(box => {
         box.style.display = "none";
      });
   }
}

// Function that cycles through each box and assigns it a random bgColor 
function colorBox() {
   boxes.forEach(box => {
      var bgColor = new rgbObj; 
      box.style.backgroundColor = `rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})`;
      box.style.opacity = "1";
   });
}

// Function to pick random color for the answer
function selectAns() {
   var range = 6;
   if (boxes[3].style.display === "none") {
      range = 3;
   }
   var i = Math.floor(Math.random() * range);
   answer = getComputedStyle(boxes[i]).getPropertyValue("background-color");
}

function currentAns() {
   displayAns.innerHTML = `${answer}`;
}

// Add click event for each box to check if correct one was clicked
boxes.forEach(box => {
   box.addEventListener("click", function() {
      if (getComputedStyle(box).getPropertyValue("background-color") === answer) {
         header.innerHTML = "This is correct";
         initNewColors();
      } else {
         header.innerHTML = "Wrong";
         box.style.opacity = "0";
      }
   });
});

init();