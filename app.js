const seleectedList = document.querySelectorAll("#collapsed-menu li");
const listInfo = document.querySelectorAll(".list-info");
const cancelBtn = document.getElementById("cancel-btn");
const planNotif = document.getElementById("plan-notif");
const collMenu = document.getElementById("collapsed-menu");
const menuDrop = document.getElementById("menu-dropbtn");
const listItems = document.querySelectorAll("#list-item");
const notifPop = document.getElementById("notif-popup");
const userPop = document.getElementById("user-popup");
const notifIcon = document.getElementById("notif-icon");
const userIcon = document.getElementById("user-icon");

userIcon.addEventListener("click", () => {
  document.querySelector(".active").classList.remove("active");
  userPop.classList.toggle("active");
});

notifIcon.addEventListener("click", () => {
  document.querySelectorAll(".active").classList.remove("active");
  notifPop.classList.toggle("active");
});
// // let checkedBtn = window.getComputedStyle(listItems[0])
// console.log(checkedBtn);

menuDrop.addEventListener("click", () => {
  document.querySelector("#collapsed-menu").classList.toggle("active-menu");
});

cancelBtn.addEventListener("click", () => {
  planNotif.style.opacity = 0;
});

seleectedList.forEach((e) => {
  e.addEventListener("click", (btn) => {
    document.querySelector(".selected-list").classList.remove("selected-list");
    e.classList.add("selected-list");
    listInfo.forEach((e) => {
      e.classList.add("active-info");
    });
  });
});
