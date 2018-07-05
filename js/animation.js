function myRight() {
    var elem = document.getElementById("animate"); 
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.left = pos + 'px';
        }
    }
}

function moveDown() {
    var element = document.getElementById('animate'); 
    var pos = 0;
    var id = setInterval(down, 5);
    function down() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++; 
            element.style.top = pos + 'px';
        }
    }
}

/***********************************************************
Not really understanding why my logic isn't working on this 
************************************************************/
function moveLeft() {
    var element = document.getElementById('animate'); 
    var pos = 350;
    var id = setInterval(myLeft, 5);
    function myLeft() {
        if (pos == 0/* Test for finished */) {
            clearInterval(id);
        } else {
            /* Code to change element style */ 
            pos--;
            element.style.right = pos + 'px';
        }
    }
}

function moveUp() {
    var element = document.getElementById('animate'); 
    var pos = 350;
    var id = setInterval(up, 5);
    function up() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos--; 
            element.style.top = pos + 'px';
        }
    }
}

/**********************************************************************************
Touch screen manipulation
**********************************************************************************/

function colorMe(el, clr) {
    var element = document.getElementById(el);
    element.style.transition = "background 3.0s linear 0s";
    element.style.background = clr;
}

function slideOut(elem) {
            var element = document.getElementById(elem);
            element.style.transition = "width 0.5s ease-in 0s";
            element.style.width = "0px";
        }

















