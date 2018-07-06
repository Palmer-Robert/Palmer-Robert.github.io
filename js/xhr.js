// This is the function to reset the page once the reset button is clicked
function reload() {
    location.reload();
}
// This function hides the "meet the family" button once clicked
function hideMe() {
    var hide = document.getElementById('fetch');
    hide.classList.add('hidden');
}

// Beginning of the XMLHttpRequest
var container = document.getElementById('fam-intro');
var btn = document.getElementById('fetch');

btn.addEventListener("click", function() {
    // New XHR created
    var xhr = new XMLHttpRequest();
    // Opens the session to call data from the server
    xhr.open('GET', 'https://palmer-robert.github.io/json/palmerfam.json');
    xhr.onload = function() {
    // Parsing JSON data to make it a readable object
    var myData = JSON.parse(xhr.responseText);
    // This calls the HTML function
    getHTML(myData);
    };
    xhr.send();
});
// This function adds HTML to the page
function getHTML(data) {
    var html = "";
    
    for(i = 0; i < data.length; i++) {
        html += 
            "<img src=" + data[i].image + "alt=" + data[i].name + ">"+
            "<p>" + data[i].name + " is the " + data[i].status + ".</p>";
    }
    
    container.insertAdjacentHTML('beforeend', html);
}








