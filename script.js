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
document.getElementById("skills-js").addEventListener("click", () => {
  x.style.display = "none";
  document.body.style.overflowY = "auto";
});

const dayNight = document.getElementById("day-night-button");
dayNight.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "white") {
    dayNight.innerHTML = `<i class="fa-solid fa-sun"></i>`;
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
    document.querySelector(".js-text5").style.color = "white";
    document.querySelector(".js-menu").style.color = "white";
    document.querySelector(".js-menu1").style.color = "white";
    document.querySelector(".js-menu2").style.color = "white";
    document.querySelector(".js-menu3").style.color = "white";
    document.querySelector(".js-menu4").style.color = "white";
    document.querySelector(".js-contact").style.backgroundColor = "black";
    document.querySelector(".js-contact").style.color = "white";
    document.querySelector(".js-project").style.backgroundColor = "black";
    document.querySelector(".js-project").style.color = "white";
    document.querySelector(".js-skills").style.backgroundColor = "black";
    document.querySelector(".js-skills").style.color = "white";
    document.querySelector(".js-skills1").style.backgroundColor =
      "rgb(30, 30, 30)";
    document.querySelector(".js-skills2").style.backgroundColor =
      "rgb(30, 30, 30)";
    document.querySelector(".js-skills3").style.backgroundColor =
      "rgb(30, 30, 30)";
    document.querySelector(".js-skills4").style.backgroundColor =
      "rgb(30, 30, 30)";
    document.querySelector(".js-skills5").style.backgroundColor =
      "rgb(30, 30, 30)";
    document.querySelector(".js-skills6").style.backgroundColor =
      "rgb(30, 30, 30)";
    document.querySelector(".js-skills7").style.backgroundColor =
      "rgb(30, 30, 30)";
    document.querySelector(".js-skills8").style.backgroundColor =
      "rgb(30, 30, 30)";
    document.querySelector(".main-quote").style.color = "black";
  } else {
    dayNight.innerHTML = `<i class="fa-solid fa-moon"></i>`;
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
    document.querySelector(".js-text5").style.color = "black";
    document.querySelector(".js-menu").style.color = "black";
    document.querySelector(".js-menu1").style.color = "black";
    document.querySelector(".js-menu2").style.color = "black";
    document.querySelector(".js-menu3").style.color = "black";
    document.querySelector(".js-menu4").style.color = "black";
    document.querySelector(".js-contact").style.backgroundColor = "white";
    document.querySelector(".js-contact").style.color = "black";
    document.querySelector(".js-project").style.backgroundColor = "white";
    document.querySelector(".js-project").style.color = "black";
    document.querySelector(".js-skills").style.backgroundColor = "white";
    document.querySelector(".js-skills").style.color = "black";
    document.querySelector(".js-skills1").style.backgroundColor =
      "rgb(245, 245, 245)";
    document.querySelector(".js-skills2").style.backgroundColor =
      "rgb(245, 245, 245)";
    document.querySelector(".js-skills3").style.backgroundColor =
      "rgb(245, 245, 245)";
    document.querySelector(".js-skills4").style.backgroundColor =
      "rgb(245, 245, 245)";
    document.querySelector(".js-skills5").style.backgroundColor =
      "rgb(245, 245, 245)";
    document.querySelector(".js-skills6").style.backgroundColor =
      "rgb(245, 245, 245)";
    document.querySelector(".js-skills7").style.backgroundColor =
      "rgb(245, 245, 245)";
    document.querySelector(".js-skills8").style.backgroundColor =
      "rgb(245, 245, 245)";
    document.querySelector(".main-quote").style.color = "white";
  }
});

// Get the button:
const mybutton = document.getElementById("toTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    mybutton.style.display = "block";
    mybutton.style.animation = "toTopButton 0.5s forwards";
  } else {
    mybutton.style.animation = "toDownButton 0.5s forwards";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  scrollFunction();
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("js-scroll").style.top = "0";
  } else {
    document.getElementById("js-scroll").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

// let lastScrollTop = 0;
// let navbar1 = document.getElementById("js-scroll");
// addEventListener("scroll", () => {
//   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   if (scrollTop > lastScrollTop) {
//     navbar1.style.top = "-100px";
//   } else {
//     navbar1.style.top = "0";
//   }
//   lastScrollTop = scrollTop;
// });

// SOLUTION FOR HEADER ON MOBILE
addEventListener("scroll", () => {
  let navbar1 = document.getElementById("js-scroll");

  if (window.pageYOffset <= 0 || window.pageYOffset <= 100) {
    navbar1.style.top = "0";
  }
});

// SONG
let playSong = document.getElementById("music");
document.getElementById("music-button").addEventListener("click", () => {
  if (playSong.paused) {
    playSong.play();
    document.getElementById(
      "music-button"
    ).innerHTML = `<i class="fa-solid fa-pause"></i>`;
  } else {
    playSong.pause();
    document.getElementById(
      "music-button"
    ).innerHTML = `<i class="fa-solid fa-play"></i>`;
  }
});

// FOOTER QUOTE
const changeText = document.getElementById("js-quote");
setInterval(() => {
  if (changeText.innerHTML === "effectively") {
    changeText.innerHTML = "wisely";
  } else if (changeText.innerHTML === "wisely") {
    changeText.innerHTML = "correctly";
  } else {
    changeText.innerHTML = "effectively";
  }
}, 2000);

// ENABLE HOVER FOR MOBILE DEVICES
document.addEventListener("touchstart", function () {}, true);

// SKILLS PROGRESS
function move(percent, color) {
  let elem = document.getElementById("myBar");
  let width = 0;
  let id = setInterval(frame, 10);
  function frame() {
    if (width >= percent) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.style.backgroundColor = color;
      document.getElementById("demo").style.display = "block";
      document.getElementById("demo").innerHTML = width * 1 + "%";
    }
  }
}
function move1(percent, color) {
  let elem = document.getElementById("myBar1");
  let width = 0;
  let id = setInterval(frame, 10);
  function frame() {
    if (width >= percent) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.style.backgroundColor = color;
      document.getElementById("demo1").style.display = "block";
      document.getElementById("demo1").innerHTML = width * 1 + "%";
    }
  }
}
function move2(percent, color) {
  let elem = document.getElementById("myBar2");
  let width = 0;
  let id = setInterval(frame, 10);
  function frame() {
    if (width >= percent) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.style.backgroundColor = color;
      document.getElementById("demo2").style.display = "block";
      document.getElementById("demo2").innerHTML = width * 1 + "%";
    }
  }
}
function move3(percent, color) {
  let elem = document.getElementById("myBar3");
  let width = 0;
  let id = setInterval(frame, 10);
  function frame() {
    if (width >= percent) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.style.backgroundColor = color;
      document.getElementById("demo3").style.display = "block";
      document.getElementById("demo3").innerHTML = width * 1 + "%";
    }
  }
}
function move4(percent, color) {
  let elem = document.getElementById("myBar4");
  let width = 0;
  let id = setInterval(frame, 10);
  function frame() {
    if (width >= percent) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.style.backgroundColor = color;
      document.getElementById("demo4").style.display = "block";
      document.getElementById("demo4").innerHTML = width * 1 + "%";
    }
  }
}
function move5(percent, color) {
  let elem = document.getElementById("myBar5");
  let width = 0;
  let id = setInterval(frame, 10);
  function frame() {
    if (width >= percent) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.style.backgroundColor = color;
      document.getElementById("demo5").style.display = "block";
      document.getElementById("demo5").innerHTML = width * 1 + "%";
    }
  }
}
function move6(percent, color) {
  let elem = document.getElementById("myBar6");
  let width = 0;
  let id = setInterval(frame, 10);
  function frame() {
    if (width >= percent) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.style.backgroundColor = color;
      document.getElementById("demo6").style.display = "block";
      document.getElementById("demo6").innerHTML = width * 1 + "%";
    }
  }
}
function move7(percent, color) {
  let elem = document.getElementById("myBar7");
  let width = 0;
  let id = setInterval(frame, 10);
  function frame() {
    if (width >= percent) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.style.backgroundColor = color;
      document.getElementById("demo7").style.display = "block";
      document.getElementById("demo7").innerHTML = width * 1 + "%";
    }
  }
}
