<<<<<<< HEAD
"use strict";
theDate();

function theDate() {
var myDate = new Date();
var month = new Array(12);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


// e.g. "Thursday, 19 October 2017 "

document.getElementById("currentdate").innerHTML = (weekday[myDate.getDay()] + ", " + myDate.getDate()+ " " +month[myDate.getMonth()] + " " + myDate.getFullYear() + " ");
=======
"use strict";
theDate();

function theDate() {
var myDate = new Date();
var month = new Array(12);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


// e.g. "Thursday, 19 October 2017 "

document.getElementById("currentdate").innerHTML = (weekday[myDate.getDay()] + ", " + myDate.getDate()+ " " +month[myDate.getMonth()] + " " + myDate.getFullYear() + " ");
>>>>>>> ec8983e0438a801e77fe028f888b48abdfcb78b5
}