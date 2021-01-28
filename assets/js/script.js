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

// var currentTime = moment().hour();
// console.log(currentTime)
// var hour = i + 9;

// function updateHourColor(){
// //if the current time on the clock matches the column id, then change that color to red bc it is the current time

// if (hour = currentTime){
//     $(this).addClass(".present");
// } else if (hour < currentTime){
//     $(this).addClass(".past");
// } else {
//     $(this).addClass(".future");
// }

// }

// updateHourColor();


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


});

