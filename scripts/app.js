const $ = document;

let itemsTitle = $.querySelectorAll(".listTitle");
let noti = $.querySelector(".noti");
const arrow = $.getElementById("arrow");
const menu = $.getElementById("menu");

let isOpen = false;

arrow.addEventListener("click", () => {
  if (!isOpen) {
    arrow.classList.remove("fa-arrow-right");
    noti.style.display = "none";

    menu.classList.remove("w-44");
    menu.classList.add("w-16");
    arrow.classList.add("fa-arrow-left");
    itemsTitle.forEach((title) => {
      title.style.opacity = "0";
      title.style.display = "none";
      isOpen = true;
    });
  } else {
    arrow.classList.add("fa-arrow-right");
    noti.style.display = "flex";
    menu.classList.add("w-44");
    menu.classList.remove("w-16");
    arrow.classList.remove("fa-arrow-left");
    itemsTitle.forEach((title) => {
      title.style.opacity = "1";
      setTimeout(() => {
        title.style.display = "block";
      }, 200);
      isOpen = false;
    });
  }
});
