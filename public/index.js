const sidebarElem = document.getElementById("sidr");
const sbShowBtn = document.getElementById("sbShowBtn");
const sbCloseBtn = document.getElementById("sbCloseBtn");

const menuDdBtns = document.querySelectorAll("#menuDdBtn");

sbShowBtn.addEventListener("click", () => {
  sidebarElem.classList.remove("hidden");
});
sbCloseBtn.addEventListener("click", () => {
  sidebarElem.classList.add("hidden");
});

menuDdBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const menu = e.target.parentElement.nextSibling.nextSibling;
    const target = e.target;
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      target.classList.remove("fa-angle-down");
      target.classList.remove("text-textColor");
      target.classList.add("fa-angle-up");
      target.classList.add("text-customBlue");
    } else {
      menu.classList.add("hidden");
      target.classList.remove("fa-angle-up");
      target.classList.remove("text-customBlue");
      target.classList.add("fa-angle-down");
      target.classList.add("text-textColor");
    }
  });
});
