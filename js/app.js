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
  document.querySelector(".canvas-box").style.height = "819px";
  setTimeout(() => {
    document.querySelector("canvas").height = window.innerHeight - 150;
  }, 2000);
  document.querySelector("#clear").style.top = "50px";
  document.querySelector("#clear").style.right = "350px";
  document.querySelector("#clear").style.display = "grid";
  document.querySelector("#clear").style.alignItems = "center";
  document.querySelector("#size-box").style.display = "grid";
  document.querySelector("#size-box").style.alignItems = "center";
  document.querySelector("#size-box").style.top = "50px";
  document.querySelector("#size-box").style.right = "550px";
  document.querySelector("#color-box").style.display = "grid";
  document.querySelector("#color-box").style.alignItems = "center";
  document.querySelector("#color-box").style.top = "50px";
  document.querySelector("#color-box").style.right = "150px";
  document.querySelector("svg").style.height = "50px";
  document.querySelector("svg").style.position = "absolute";
  document.querySelector("svg").style.top = "50px";
  document.querySelector("svg").style.left = "0";
  document.querySelector("#begin-btn").style.display = "none";
  document.querySelector("#begin-btn").classList.toggle("cl");
});

window.addEventListener("resize", () => {
  if (document.querySelector("#begin-btn").classList.contains("cl")) {
    document.querySelector("canvas").width = window.innerWidth - 40;
    document.querySelector("canvas").height = window.innerHeight - 150;
  }
});
