window.addEventListener("load", () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const sizeSlider = document.querySelector("#size");
  const sizeCode = document.querySelector("#sizeCode");
  const colorChooser = document.querySelector("#color");
  const colorCode = document.querySelector("#colorCode");
  const sizes = document.querySelectorAll(".item");
  const clear = document.querySelector("#clear");
  const save = document.querySelector("#save");
  let lineWidth = 2;
  let color = "black";

  //RESIZE
canvas.height=0;
canvas.width = window.innerWidth;
sizeCode.value = lineWidth;
colorCode.value = colorChooser.value;


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

    ctx.lineTo(e.clientX , e.clientY );
    ctx.stroke();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(e.clientX , e.clientY );
  }
  
  // event Listeners
  canvas.addEventListener("mousedown", startPos);
  canvas.addEventListener("mouseup", finish);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("touchstart", touchStartPos);
  canvas.addEventListener("touchend", touchFinish);
  canvas.addEventListener("touchmove", touchDraw);


  sizeSlider.addEventListener("input", () => {
    if(sizeSlider.value == 0 || sizeSlider.value == 1){
      lineWidth=2;
      sizeCode.value = lineWidth

    }else{
      lineWidth= sizeSlider.value;
      sizeCode.value = lineWidth;

    }
    
  });
  colorChooser.addEventListener("input", (e) => {
    color = colorChooser.value;
    colorCode.value = colorChooser.value
  });
  sizeCode.addEventListener("input",(e)=>{
    if(sizeCode.value == 0 || sizeCode.value == 1){
      lineWidth=2;
      sizeSlider.value = lineWidth;

    }else{
      lineWidth= sizeCode.value;
      sizeSlider.value = lineWidth;

    }
  })
  colorCode.addEventListener("input",(e)=>{
    color = colorCode.value;
    if(isHex(colorCode.value)){
      colorChooser.value = colorCode.value;
    }
  })
  clear.addEventListener("click", () =>
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  );
  function isHex(num){
    var exp = new RegExp("^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$")
    return exp.test(num);
  }
  save.addEventListener("click", ()=>{
    save.download= "image"
    save.href = canvas.toDataURL();
  })
  function touchStartPos(e){
 
    painting =true;
    touchDraw(e);
  }
  function touchDraw(e){
    var touch = e.changedTouches[0];
    var x = parseInt(touch.clientX);
    var y = parseInt(touch.clientY);
  
    if(!painting) return;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";
  
      ctx.lineTo(x , y );
      ctx.stroke();
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(x , y);
  }
  function touchFinish(){
    painting = false;
    ctx.beginPath();
  }
});

