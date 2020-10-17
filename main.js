var MouseEvent="";
var Last_X,Last_Y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="red";
linewidth=7;
canvas.addEventListener("mousedown",My_MouseDown);
function My_MouseDown(E){
    MouseEvent="MouseDown";
    colour=document.getElementById("colour").value;
    linewidth=document.getElementById("Width_Line").value;
}
canvas.addEventListener("mouseleave",My_MouseLeave);
function My_MouseLeave(E){
    MouseEvent="MouseLeave";
}
canvas.addEventListener("mouseup",My_MouseUp);
function My_MouseUp(E){
    MouseEvent="MouseUp";
}
canvas.addEventListener("mousemove",My_MouseMove);
function My_MouseMove(E){
    current_x=E.clientX-canvas.offsetLeft;
    current_y=E.clientY-canvas.offsetTop;
    if(MouseEvent=="MouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=linewidth;
        ctx.moveTo(Last_X,Last_Y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();
    }
    Last_X=current_x;
    Last_Y=current_y;
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}