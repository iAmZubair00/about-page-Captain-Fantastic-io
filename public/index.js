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
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  });
});
