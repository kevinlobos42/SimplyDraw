const logo = document.querySelectorAll("path");

window.onload = () => {
  setTimeout(() => {
    for (let i = 0; i < logo.length; i++) {
      logo[i].style.animation = "fillWhite .5s forwards";
      logo[i].style.transition = "all .5s";
    }
  }, 4200);
  setTimeout(() => {
    document.querySelector("#begin-btn").style.animation = "opac .8s forwards";
  }, 4500);
};

document.querySelector("#begin-btn").addEventListener("click", () => {
  document.querySelector("canvas").style.opacity = "1";
  document.querySelector("canvas").height = window.innerHeight;
  document.querySelector("canvas").width = window.innerWidth;
  document.querySelector(".menu").style.opacity = "1";
  document.querySelector("svg").style.display = "none";
  document.querySelector("#begin-btn").style.display = "none";
  document.querySelector("#begin-btn").classList.toggle("cl");
});

window.addEventListener("resize", () => {
  if (document.querySelector("#begin-btn").classList.contains("cl")) {
    document.querySelector("canvas").width = window.innerWidth;
    document.querySelector("canvas").height = window.innerHeight;
  }
});
