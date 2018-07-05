function reload() {
    location.reload();
}

var container = document.getElementById('fam-intro');
var btn = document.getElementById('fetch');

btn.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://palmer-robert.github.io/json/palmerfam.json');
    xhr.onload = function() {
    var myData = JSON.parse(xhr.responseText);
    getHTML(myData);
    };
    xhr.send();
});

function getHTML(data) {
    var html = "";
    
    for(i = 0; i < data.length; i++) {
        html += "<p>" + data[i].name + " is the " + data[i].status + ".</p>";
    }
    
    container.insertAdjacentHTML('beforeend', html);
}








