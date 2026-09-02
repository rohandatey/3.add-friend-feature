// let istatus = document.querySelector("h5");
// let addFriend = document.querySelector("#add");
// let removeFriend = document.querySelector("#remove");

// addFriend.addEventListener("click", () => {
//   istatus.innerHTML = "Friends"; // here i chnage inner HTML
//   istatus.style.color = "green"; // here i chnage inner HTML color
// });

// removeFriend.addEventListener("click", () => {
//   istatus.innerHTML = "Stranger"; // here i chnage inner HTML
//   istatus.style.color = "red";
// });

let istatus = document.querySelector("h5");
let addFriend = document.querySelector("#add");

let check = 0;

addFriend.addEventListener("click", () => {
  //if main == use hoga == use true/false ke liye hota ha
  // and = oprater set ke kiye hota ha

  if (check == 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    check = 1;
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    check = 0;
  }
});
