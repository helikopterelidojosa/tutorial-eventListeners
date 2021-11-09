window.addEventListener("load", () =>{
var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");



let painting = false;

function startPosition(e){
    painting = true;
    draw(e);
}

function finishPosition(e){
    painting = false;
   // ctx.beginPath();
}

function draw(e){
    if(!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  //  ctx.beginPath();
  //  ctx.moveTo(e.clietX, e.clientY);
}

function endWithDouble(e){
    ctx.closePath();
}

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener('mouseup', finishPosition);
//canvas.addEventListener('mousemove', draw);
canvas.addEventListener('dblclick', endWithDouble);
});