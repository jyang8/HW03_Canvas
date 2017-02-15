var canvas = document.getElementById("drawing");
var context = canvas.getContext("2d");

// add rectangles
var addRect = function(e) {
    var xcor = e.offsetX;
    var ycor = e.offsetY;
    // rust color
    context.fillStyle = "#B7410E";
    context.fillRect(xcor-20, ycor-20, 100, 100);
}

// canvas.addEventListener("click", addRect);

// clear button
var clear = document.getElementById("clear_btn");

// clear function
var clearCanvas = function(e) {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

clear.addEventListener("click", clearCanvas);

// add circles
var addDots = function(e) {
    context.beginPath();
    var xcor = e.offsetX;
    var ycor = e.offsetY;
    context.moveTo(xcor, ycor);
    context.fillStyle = "#B7410E";
    context.arc(xcor, ycor, 10, 0, 2*Math.PI);
    context.fill();
    context.stroke();
}

// connects each circle
var connectDots = function(e) {
    var xcor = e.offsetX;
    var ycor = e.offsetY;
    context.lineTo(xcor, ycor);
    context.stroke();
    addDots(e);
}

canvas.addEventListener("click", connectDots);
