const x = document.getElementById("myDIV");
const closeButton = document.getElementById("closeBtn");
const openButton = document.getElementById("openBtn");
openButton.addEventListener("click", () => {
  x.style.display = "flex";
  document.body.style.overflowY = "hidden";
});
closeButton.addEventListener("click", () => {
  x.style.display = "none";
  document.body.style.overflowY = "auto";
});
document.getElementById("portfolio-js").addEventListener("click", () => {
  x.style.display = "none";
  document.body.style.overflowY = "auto";
});
document.getElementById("contact-me-js").addEventListener("click", () => {
  x.style.display = "none";
  document.body.style.overflowY = "auto";
});
const dayNight = document.getElementById("day-night-button");
dayNight.addEventListener("click", () => {
  if (dayNight.innerHTML === "Night") {
    dayNight.innerHTML = "Day";
    dayNight.style.color = "black";
    dayNight.style.backgroundColor = "white";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.querySelector(".js-img").src = "img/my-logo-black.png";
    document.querySelector(".js-footer").style.backgroundColor = "white";
    document.querySelector(".js-icon").style.color = "black";
    document.querySelector(".js-icon1").style.color = "black";
    document.querySelector(".js-icon2").style.color = "black";
    document.querySelector(".js-icon3").style.color = "black";
    document.querySelector(".js-icon4").style.color = "black";
    x.style.backgroundColor = "black";
    document.querySelector(".js-but").style.color = "white";
    document.querySelector(".js-text1").style.color = "white";
    document.querySelector(".js-text2").style.color = "white";
    document.querySelector(".js-text3").style.color = "white";
    document.querySelector(".js-text4").style.color = "white";
    document.querySelector(".js-menu").style.color = "white";
    document.querySelector(".js-menu1").style.color = "white";
    document.querySelector(".js-menu2").style.color = "white";
    document.querySelector(".js-menu3").style.color = "white";
    document.querySelector(".js-menu4").style.color = "white";
    document.querySelector(".js-contact").style.backgroundColor = "black";
    document.querySelector(".js-contact").style.color = "white";
    document.querySelector(".js-project").style.backgroundColor = "white";
    document.querySelector(".js-project").style.color = "black";
  } else {
    dayNight.innerHTML = "Night";
    dayNight.style.color = "white";
    dayNight.style.backgroundColor = "black";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.querySelector(".js-img").src = "img/my-logo-white.png";
    document.querySelector(".js-footer").style.backgroundColor = "black";
    document.querySelector(".js-icon").style.color = "white";
    document.querySelector(".js-icon1").style.color = "white";
    document.querySelector(".js-icon2").style.color = "white";
    document.querySelector(".js-icon3").style.color = "white";
    document.querySelector(".js-icon4").style.color = "white";
    x.style.backgroundColor = "white";
    document.querySelector(".js-but").style.color = "black";
    document.querySelector(".js-text1").style.color = "black";
    document.querySelector(".js-text2").style.color = "black";
    document.querySelector(".js-text3").style.color = "black";
    document.querySelector(".js-text4").style.color = "black";
    document.querySelector(".js-menu").style.color = "black";
    document.querySelector(".js-menu1").style.color = "black";
    document.querySelector(".js-menu2").style.color = "black";
    document.querySelector(".js-menu3").style.color = "black";
    document.querySelector(".js-menu4").style.color = "black";
    document.querySelector(".js-contact").style.backgroundColor = "white";
    document.querySelector(".js-contact").style.color = "black";
    document.querySelector(".js-project").style.backgroundColor = "black";
    document.querySelector(".js-project").style.color = "white";
  }
});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("head-scroll").style.top = "0";
  } else {
    document.getElementById("head-scroll").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
