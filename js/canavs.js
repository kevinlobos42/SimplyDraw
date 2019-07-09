window.addEventListener("load", () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const sizebox = document.querySelector("#size-box");
  const colorbox = document.querySelector("#color-box");
  const sizes = document.querySelectorAll(".item");
  const clear = document.querySelector("#clear");
  let lineWidth = 2;
  let color = "black";

  //RESIZE
  canvas.height = 0;
  canvas.width = window.innerWidth - 38;

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
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";

    ctx.lineTo(e.clientX - 20, e.clientY - 135);
    ctx.stroke();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(e.clientX - 20, e.clientY - 135);
  }
  function change(e) {
    if (e.target.classList.contains("size1")) {
      lineWidth = 2;
    } else if (e.target.classList.contains("size2")) {
      lineWidth = 7;
    } else if (e.target.classList.contains("size3")) {
      lineWidth = 12;
    } else if (e.target.classList.contains("size4")) {
      lineWidth = 17;
    } else if (e.target.classList.contains("size5")) {
      lineWidth = 25;
    } else if (e.target.classList.contains("black")) {
      color = "black";
    } else if (e.target.classList.contains("blue")) {
      color = "blue";
    } else if (e.target.classList.contains("purple")) {
      color = "purple";
    } else if (e.target.classList.contains("pink")) {
      color = "pink";
    } else if (e.target.classList.contains("red")) {
      color = "red";
    } else if (e.target.classList.contains("orange")) {
      color = "orange";
    } else if (e.target.classList.contains("yellow")) {
      color = "yellow";
    } else if (e.target.classList.contains("green")) {
      color = "green";
    }
  }
  // event Listeners
  canvas.addEventListener("mousedown", startPos);
  canvas.addEventListener("mouseup", finish);
  canvas.addEventListener("mousemove", draw);

  sizebox.addEventListener("click", () => {
    sizebox.classList.toggle("hide");
    sizebox.style.zIndex = "4";
    if (sizebox.classList.contains("hide")) {
      document.querySelector("#sizes").style.display = "none";
      sizebox.style.height = "50px";
      sizebox.style.width = "90px";
      sizebox.style.transform = "translateX(0px)";
    } else {
      sizebox.style.height = "auto";
      sizebox.style.width = "220px";
      sizebox.style.transform = "translateX(85px)";
      document.querySelector("#sizes").style.display = "flex";
      document.querySelector("#sizes").style.width = "100%";
      document.querySelector("#sizes").style.justifyContent = "space-between";
    }
  });
  colorbox.addEventListener("click", () => {
    colorbox.classList.toggle("hide");
    colorbox.style.zIndex = "4";
    if (colorbox.classList.contains("hide")) {
      document.querySelector("#colors").style.display = "none";
      colorbox.style.height = "50px";
      colorbox.style.width = "90px";
      colorbox.style.transform = "translateX(0px)";
    } else {
      colorbox.style.height = "auto";
      colorbox.style.width = "256px";
      colorbox.style.transform = "translateX(128px)";
      document.querySelector("#colors").style.display = "flex";
      document.querySelector("#colors").style.width = "100%";
      document.querySelector("#colors").style.justifyContent = "space-between";
    }
  });
  sizes.forEach(item => item.addEventListener("click", change));
  clear.addEventListener("click", () =>
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  );
});
