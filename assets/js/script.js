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


//gets whats in local storage and adds it to the page

$("#nine .addEvent").val(localStorage.getItem("nine"));
$("#ten .addEvent").val(localStorage.getItem("ten"));
$("#eleven .addEvent").val(localStorage.getItem("eleven"));
$("#twelve .addEvent").val(localStorage.getItem("twelve"));
$("#one .addEvent").val(localStorage.getItem("one"));
$("#two .addEvent").val(localStorage.getItem("two"));
$("#three .addEvent").val(localStorage.getItem("three"));
$("#four .addEvent").val(localStorage.getItem("four"));
$("#five .addEvent").val(localStorage.getItem("five"));


});

