//var moment = require('moment');
$(document).ready(function(){

$("#currentDay").text(moment().format('MMMM Do YYYY'));
//add local stoarage to save button 
$(".btn").on("click", function(){

    //target text area and get everything written in it
    //know which block of time we got it from 
    var blockOfTime = $(this).parent().attr("id");
    var getEvent = $(this).siblings(".addEvent").val();
    localStorage.setItem(blockOfTime, getEvent);
})


var currentTime = moment().hour();
console.log(currentTime)

//checks what time it is, then changes the color of that row to match css class
if (currentTime === 9) {
    $("#9").addClass("present");
} else if (currentTime > 9) {
    $("#9").addClass("past");
} else {
    $("#9").addClass("future");
}

if (currentTime === 10) {
    $("#10").addClass("present");
} else if (currentTime > 10) {
    $("#10").addClass("past");
} else {
    $("#10").addClass("future");
}

if (currentTime === 11) {
    $("#11").addClass("present");
} else if (currentTime > 11) {
    $("#11").addClass("past");
} else {
    $("#11").addClass("future");
}

if (currentTime === 12) {
    $("#12").addClass("present");
} else if (currentTime > 12) {
    $("#12").addClass("past");
} else {
    $("#12").addClass("future");
}

if (currentTime === 13) {
    $("#13").addClass("present");
} else if (currentTime > 13) {
    $("#13").addClass("past");
} else {
    $("#13").addClass("future");
}

if (currentTime === 14) {
    $("#14").addClass("present");
} else if (currentTime > 14) {
    $("#14").addClass("past");
} else {
    $("#14").addClass("future");
}

if (currentTime === 15) {
    $("#15").addClass("present");
} else if (currentTime > 15) {
    $("#15").addClass("past");
} else {
    $("#15").addClass("future");
}

if (currentTime === 16) {
    $("#16").addClass("present");
} else if (currentTime > 16) {
    $("#16").addClass("past");
} else {
    $("#16").addClass("future");
}

if (currentTime === 17) {
    $("#17").addClass("present");
} else if (currentTime > 17) {
    $("#17").addClass("past");
} else {
    $("#17").addClass("future");
}


//gets whats in local storage and adds it to the page

$("#9 .addEvent").val(localStorage.getItem("9"));
$("#10 .addEvent").val(localStorage.getItem("10"));
$("#11 .addEvent").val(localStorage.getItem("11"));
$("#12 .addEvent").val(localStorage.getItem("12"));
$("#13 .addEvent").val(localStorage.getItem("13"));
$("#14 .addEvent").val(localStorage.getItem("14"));
$("#15 .addEvent").val(localStorage.getItem("15"));
$("#16 .addEvent").val(localStorage.getItem("16"));
$("#17 .addEvent").val(localStorage.getItem("17"));


})