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
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("ham")[0].style.top = "20px";
    document.getElementsByClassName("social")[0].style.top = "20px";
    document.getElementsByClassName("slogo")[0].style.top = "20px";
  } else {
    document.getElementsByClassName("ham")[0].style.top = "-200px";
    document.getElementsByClassName("social")[0].style.top = "-200px";
    document.getElementsByClassName("slogo")[0].style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}

//Event Listeners
document.getElementById("menu").addEventListener("click", openSideBar);
document.getElementById("menuh").addEventListener("click", openSideBar);
document.getElementById("closes").addEventListener("click", closeSideBar);
document.getElementById("sidecover").addEventListener("click", closeSideBar);
