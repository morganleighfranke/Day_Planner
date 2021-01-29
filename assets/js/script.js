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
//update your hours, write a function and then call that function, need to use moment for whatevery hour it currently is

//use an if statement to check what hour it is, add or remove classes to change color of text areas

var currentTime = moment().hour();
console.log(currentTime)


// function updateHourColor(){
// //if the current time on the clock matches the column id, then change that color to red bc it is the current time

// // get current number of hours
// currentTime;
// // loop over time blocks
// for (var i = 0; i < timeblocks.length; i++) {
// // check if we've moved past this time

// $("").each(function(){

    
//     if (hour = currentTime){
//         $(this).addClass(".present");
//     } else if (hour < currentTime){
//         $(this).addClass(".past");
//     } else {
//         $(this).addClass(".future");
//     }})

// }

// updateHourColor();

//maybe create a varibale with an array of 9-16 to represent time on calendar
//possible if code: write if for each time. if hour = 9, then .addClass to div.

// var timeBlock = [9, 10, 11, 12, 13, 14, 15, 16, 17]

// if (currentTime === hour) {
//     var hour = i + 9;
//     for (var i =0; i <timeBlock.length; i++) {
//         if (currentTime === hour) {
//             $(this).addClass("present");
//         } else if (currentTime > hour) {
//             $(this).addClass("past");
//         } else {
//             $(this).addClass("future");
//         }
//     }
// }

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