window.addEventListener("load", () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  //RESIZE
  canvas.height = 0;
  canvas.width = window.innerWidth - 40;

  //variables
  let painting = false;

  function startPos(e) {
    painting = true;
    draw(e);
  }
  function finish() {
    painting = false;
    ctx.beginPath();
  }
  function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";

    ctx.lineTo(e.clientX - 20, e.clientY - 135);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - 20, e.clientY - 135);
  }
  // event Listeners
  canvas.addEventListener("mousedown", startPos);
  canvas.addEventListener("mouseup", finish);
  canvas.addEventListener("mousemove", draw);
});
