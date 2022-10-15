const openSideBar = () => {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("sidecover").style.width = "100%";
};
const closeSideBar = () => {
  document.getElementById("sidebar").style.width = "0px";
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

//Event Listeners
document.getElementById("menu").addEventListener("click", openSideBar);
document.getElementById("menuh").addEventListener("click", openSideBar);
document.getElementById("closes").addEventListener("click", closeSideBar);
document.getElementById("sidecover").addEventListener("click", closeSideBar);
