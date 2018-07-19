
/***********************************
Canvas
************************************/
var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

/* Event to listen for the mouse position*/
var cPosition = getPosition(canvas);
var mouseX = 0;
var mouseY = 0;

// Event listener to have object follow the mouse
canvas.addEventListener('mousemove', setPosition, false);

// Function called in the event listener
function setPosition(e) {
    mouseX = e.clientX - cPosition.x;
    mouseY = e.clientY - cPosition.y;
}

/* Create the circle */
function buildCircle() {
    var colorPicker = document.getElementById('pickMe').value;
    c.beginPath();
    c.arc(mouseX, mouseY, 30, 0, 2 * Math.PI, true);
    c.fillStyle = colorPicker;
    c.fill();
    
    requestAnimationFrame(buildCircle);
}
buildCircle();

/* Return current position of the mouse */
function getPosition(el) {
    var x = 0;
    var y = 0;
    
    while(el) {
        x += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        y += (el.offsetTop - el.scrollTop + el.clientTop);
        el = el.offsetParent;
    }
    return {
        x: x,
        y: y
    };
}