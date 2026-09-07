let main = document.querySelector("#main");
let cursor = document.querySelector(".cursor");

// cursor.style.backgroundColor = "red"

main.addEventListener("mousemove", (dets) => {
  console.log(dets);
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});
