// console.log(window);

var box = document.getElementById("box");
let firstTitle = document.getElementById("first-title");
let offnyet = document.getElementById("offnyet");
let container = document.getElementById("container");
let tarehe = document.getElementById("tarehe");

container.addEventListener("mousemove", (e) => {
  //   console.log(e);
  firstTitle.style.backgroundColor =
    "rgb(" + e.offsetX + "," + e.offsetY + ",999)";
  offnyet.innerHTML =
    "<h2> OFFSETX: " + e.offsetX + "</h2><h2> OFFSETY: " + e.offsetY + "</h2>";
});
container.addEventListener("mousemove", (e) => {
  //   console.log(e);
  box.style.backgroundColor = "rgb(" + e.offsetY + "," + e.offsetX + ",199)";
  //   offnyet.innerHTML =
  //     "<h2> OFFSETX: " + e.offsetX + "</h2><h2> OFFSETY: " + e.offsetY + "</h2>";
});

// tarehe.innerHTML = Date();
