const sidebarElem = document.getElementById("sidr");
const sbShowBtn = document.getElementById("sbShowBtn");
const sbCloseBtn = document.getElementById("sbCloseBtn");
const sidebarOverlayElem = document.getElementById("sidebarOverlay");

const menuDdBtns = document.querySelectorAll("#menuDdBtn");

sbShowBtn.addEventListener("click", () => {
  sidebarElem.classList.remove("hidden");
  sidebarOverlayElem.classList.remove("hidden");
});
sbCloseBtn.addEventListener("click", () => {
  sidebarElem.classList.add("hidden");
  sidebarOverlayElem.classList.add("hidden");
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

// for sticky header

window.onscroll = () => {
  handleSticky();
};

var header = document.getElementById("sticky_header");
var sticky = header.offsetTop;

function handleSticky() {
  console.log(sticky);
  console.log(window.pageYOffset);
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed", "top-0");
  } else {
    header.classList.remove("fixed", "top-0");
  }
}
