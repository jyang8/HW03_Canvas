var canvas = document.getElementById("drawing");
var context = canvas.getContext("2d");

// add rectangles
canvas.addEventListener("click", function(e) {
    var xcor = e.offsetX;
    var ycor = e.offsetY;
    // rust color
    context.fillStyle = "#B7410E";
    context.fillRect(xcor-20, ycor-20, 100, 100);
});


// clear button
var clear = document.getElementById("clear_btn");

clear.addEventListener("click", function(e) {
    context.clearRect(0, 0, canvas.width, canvas.height);
});
