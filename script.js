const openSideBar = () => {
  document.getElementById("sidebar").classList.remove("hide-sidebar");
  document.getElementById("sidecover").style.width = "100%";
};
const closeSideBar = () => {
  document.getElementById("sidebar").classList.add("hide-sidebar");
  document.getElementById("sidecover").style.width = "0";
};

//navbar
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos < 50) {
    document.getElementsByClassName("ham")[0].classList.remove("hide");
    document.getElementsByClassName("social")[0].classList.remove("hide");
    document.getElementsByClassName("slogo")[0].classList.remove("hide");
  } else {
    document.getElementsByClassName("ham")[0].classList.add("hide");
    document.getElementsByClassName("social")[0].classList.add("hide");
    document.getElementsByClassName("slogo")[0].classList.add("hide");
  }
  prevScrollpos = currentScrollPos;
};

ismobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
let sb_collapsables = document.querySelectorAll(
  "#sidebar .sidebar-collapsable"
);
sb_collapsables.forEach((sb_collapsable) => {
  let title = sb_collapsable.children[0];
  let content = sb_collapsable.children[1];

  // mobile
  title.addEventListener("click", function (e) {
    if (!ismobile) return;
    // #sidebar .sidebar-collapsable>.sidebar-collapsable-title>span>svg
    this.children[1].children[0].classList.toggle("rotate-180");

    // #sidebar .sidebar-collapsable>.sidebar-collapsable-items
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });

  sb_collapsable.addEventListener("mouseover", function (e) {
    if (ismobile) return;
    // #sidebar .sidebar-collapsable>.sidebar-collapsable-title>span>svg
    this.children[0].children[1].children[0].classList.add("rotate-180");

    // #sidebar .sidebar-collapsable>.sidebar-collapsable-items
    let content = this.children[1];
    content.style.maxHeight = content.scrollHeight + "px";
  });

  sb_collapsable.addEventListener("mouseout", function (e) {
    if (ismobile) return;
    // #sidebar .sidebar-collapsable>.sidebar-collapsable-title>span>svg
    this.children[0].children[1].children[0].classList.remove("rotate-180");

    // #sidebar .sidebar-collapsable>.sidebar-collapsable-items
    let content = this.children[1];
    content.style.maxHeight = null;
  });
});

//Event Listeners
document.getElementById("menu").addEventListener("click", openSideBar);
document.getElementById("menuh").addEventListener("click", openSideBar);
document.getElementById("closes").addEventListener("click", closeSideBar);
document.getElementById("sidecover").addEventListener("click", closeSideBar);
