// Add date and time to Header
$(document).ready(function () {

  // variables to store the time, and also the "hour" in military format
  var currentTime = moment().format('LTS');
  var currentHour = moment().format('kk');

  // variable to hold our daily planner
  var scheduleArr = [];

  //display current date and time
  $("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));
  $("#currentTime").text(moment().format('LTS'));

  //call function to color calendar based on time
  addColor();

  //call function to render the tasks on page load
  renderPage();


  function renderPage() {

    scheduleArr = JSON.parse(localStorage.getItem("Arr"));
    console.log(scheduleArr);

    // if it's emptly, initiaze it
    if (!scheduleArr) {
      scheduleArr = [];
    };

    //if it's not empty, load up the page
    if (scheduleArr) {
      for (i = 0; i < scheduleArr.length; i++) {
        var dailyTasks = (scheduleArr[i].time);

        var tgtBlock = document.getElementById(scheduleArr[i].time).querySelector(".task");
        tgtBlock.innerHTML = scheduleArr[i].task;

      }
    }

  }


  // add color to calendar
  function addColor() {
    var taskBlock = document.getElementsByClassName("task");
    for (i = 0; i < taskBlock.length; i++) {
      if (i + 8 == currentHour) {
        //if the time block is the current hour, then background is red
        taskBlock[i].style.backgroundColor = '#F5B7B1';
      } else if (i + 8 > currentHour) {
        //if the time block is greater than the current hour, future, then green
        taskBlock[i].style.backgroundColor = '#ABEBC6';
      } else {
        //all other cases means that the time has passed, so grey
        taskBlock[i].style.backgroundColor = '#D5D8DC';
      }
    }
  };



  $('.btn').click(function () {

    var newTaskBlock = $(this).siblings('.task').val();
    var newTime = $(this).parent().attr('id');

    var obj = {
      "time": newTime,
      "task": newTaskBlock
    };

    scheduleArr.push(obj);

    localStorage.setItem("Arr", JSON.stringify(scheduleArr));
  });

});
