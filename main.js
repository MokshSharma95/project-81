
canvas=
document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

<canvas id="my Canvas" width="800" height="600" style=""></canvas>

ctx.beginPath();
ctx.strokestyle= "red";
ctx.linewidth =1;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokestyle= "blue";
ctx.linewidth =5;
ctx.arc(250,210,40.0,2*Math.PI);
ctx.stroke();
