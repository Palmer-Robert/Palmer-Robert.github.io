var family = new XMLHttpRequest();
family.open('GET', 'https://raw.githubusercontent.com/Palmer-Robert/Palmer-Robert.github.io/master/palmerfam.json', true);
family.onload = function() {
    var myData = JSON.parse(family.responseText);
    
    console.log(myData[3].name)
};
family.send();