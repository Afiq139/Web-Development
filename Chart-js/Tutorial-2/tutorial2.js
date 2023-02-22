//https://www.w3schools.com/graphics/canvas_drawing.asp
//getcontext(2d) --> drawing
const blankcanvas = document.getElementById('blankcanvas').getContext('2d');

blankcanvas.fillStyle = "#FF0000";

//first = x-axis -> start from top-left-corner ( 0 pixels to the right)
//second = y-axis -> start from top-left-corner (0 pixels down)
//third = width -- calculate from up
//fourth = height

//blankcanvas.fillRect(0, 0, 150, 75);

// blankcanvas.fillRect(0, 10, 300, 1);
// blankcanvas.fillRect(0, 20, 300, 1);
// blankcanvas.fillRect(0, 30, 300, 5);
// blankcanvas.fillRect(0, 40, 300, 1);
// blankcanvas.fillRect(0, 50, 300, 1);
// blankcanvas.fillRect(0, 60, 300, 1);


// blankcanvas.fillRect(10, 0, 1, 150);
// blankcanvas.fillRect(20, 0, 1, 150);
// blankcanvas.fillRect(30, 0, 5, 150);
// blankcanvas.fillRect(40, 0, 1, 150);
// blankcanvas.fillRect(50, 0, 1, 150);



blankcanvas.fillRect(10, 140, 300, 5);
blankcanvas.fillRect(10, 130, 300, 1);
blankcanvas.fillRect(10, 120, 300, 1);
blankcanvas.fillRect(10, 110, 300, 1);
blankcanvas.fillRect(10, 100, 300, 1);
blankcanvas.fillRect(10, 90, 300, 1);


blankcanvas.fillRect(10, 10, 5, 130);
blankcanvas.fillRect(20, 10, 1, 130);
blankcanvas.fillRect(30, 10, 1, 130);
blankcanvas.fillRect(40, 10, 1, 130);

blankcanvas.fillStyle = "#00FF00";
blankcanvas.fillRect(20, 90, 10, 50);
blankcanvas.fillRect(40, 50, 10, 90);