// These are all functions for each of the buttons manipulatign the paragraphs.
/********************************************
Shopping list appendChild function
********************************************/
function shoppingList() {
    var li = document.createElement("li");
    var node = document.createTextNode(document.getElementById('addList').value);
    li.appendChild(node);
                
    var element = document.getElementById('shop_list');
    element.appendChild(li);
}
/*******************************************************
Beginning of the buttons on the paragraphs
*******************************************************/
function insertPara() {
    var para = document.createElement("p");
    var node = document.createTextNode("Hi there! I am an insertBefore() method.");
    para.appendChild(node);
                
    var element = document.getElementById("myDiv");
    var child = document.getElementById("p1");
    element.insertBefore(para, child);
}

function removePara() {
    var myChild = document.getElementById("p3");
    myChild.parentNode.removeChild(myChild); 
}

function replaceMe() {
    var pg = document.createElement("p");
    var node = document.createTextNode("Hello! I like to replace paragraphs. I just replaced paragraph 2.");
    pg.appendChild(node);
    
    var parent = document.getElementById("myDiv");
    var child = document.getElementById("p2");
    parent.replaceChild(pg, child);
}

/***************************************************************

***************************************************************/






















