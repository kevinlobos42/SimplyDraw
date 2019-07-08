const logo = document.querySelectorAll("path");
console.log(logo.length);
for (let i = 0; i < logo.length; i++) {
  console.log(logo[i].getTotalLength());
}
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
  document.querySelector("canvas").style.animation = "heightUp 2s forwards";
  document.querySelector("svg").style.height = "50px";
  document.querySelector("svg").style.position = "absolute";
  document.querySelector("svg").style.top = "50px";
  document.querySelector("svg").style.left = "0";
  document.querySelector("#begin-btn").style.margin = ".5rem";
});
