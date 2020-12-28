const logo = document.querySelectorAll("path");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

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
var w = canvas.width;
var h = canvas.height;
window.addEventListener("resize", resize)
function resize(){
  let temp = ctx.getImageData(0,0,w,h)
  ctx.canvas.width = window.innerWidth ;
  ctx.canvas.height = window.innerHeight;
  w = canvas.width, h = canvas.height
  ctx.putImageData(temp,0,0)

}
