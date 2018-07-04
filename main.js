var boxColors = [];

var boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
   box.addEventListener("click", function() {
      console.log("clicked");
   });
});

boxes.forEach(box => {
   boxColors.push(getComputedStyle(box).getPropertyValue("background-color"));
})