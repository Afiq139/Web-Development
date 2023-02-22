//https://www.w3schools.com/graphics/canvas_drawing.asp
//getcontext(2d) --> drawing
const blankcanvas = document.getElementById('blankcanvas').getContext('2d');

blankcanvas.fillStyle = "#FF0000";

//first = x-axis -> start from top-left-corner ( 0 pixels to the right)
//second = y-axis -> start from top-left-corner (0 pixels down)
//third = width -- calculate from up
//fourth = height
//blankcanvas.fillRect(0, 0, 150, 75);

blankcanvas.fillRect(0, 10, 300, 1);
blankcanvas.fillRect(0, 20, 300, 1);
blankcanvas.fillRect(0, 30, 300, 1);
blankcanvas.fillRect(0, 40, 300, 1);
blankcanvas.fillRect(0, 50, 300, 1);
blankcanvas.fillRect(0, 60, 300, 1);

