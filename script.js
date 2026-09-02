let istates = document.querySelector("h5");
let addFriend = document.querySelector("#add");
let removeFriend = document.querySelector("#remove");

addFriend.addEventListener("click", () => {
  istates.innerHTML = "friends";
  istates.style.color = "green";
});
removeFriend.addEventListener("click", () => {
  istates.innerHTML = "stranger";
  istates.style.color = "red";
});
