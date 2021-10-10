// Add date and time to Header
$(document).ready(function () {

// variables to store the time, and also the "hour" in military format
var currentTime = moment().format('LTS');
var currentHour = moment().format('kk');

var scheduleArr = [];

//display current date and time
$("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));
$("#currentTime").text(moment().format('LTS'));

//call function to color calendar based on time
addColor();
renderPage();
// allStorage();

// scheduleArr = JSON.parse(localStorage.getItem(Key)), JSON.parse(localStorage.getItem(Value)) || [] ;
// console.log(scheduleArr);
// loadMeetings();


  // load tasks from local storage
// function loadMeetings() {
//     var meetingsArr = JSON.parse(localStorage.getItem("tasks"));
    // for(let i = 0; i < localStorage.length; i++) {
    //   const time = localStorage.key(i);
    //   const task = localStorage.value(key);

    //   scheduleArr.push(time, task);
    //   console.log(scheduleArr);

    // }
//     console.log(meetingsArr)
//     // if nothing in localStorage, create a new object to track all task status arrays
//     if (!meetingsArr) {
//       meetingsArr = {
//         Time: [],
//         Task: []
//       };
//     }
//     console.log(meetingsArr);
//   };
  
// save new tasks into Local Storage


function renderPage() {
  console.log("1");
  console.log(localStorage);
  
  scheduleArr = JSON.parse(localStorage.getItem("Arr") );
  console.log("2");
  
  console.log(scheduleArr);
  
  console.log("3");

  if (!scheduleArr) {
    scheduleArr = [];
  };
  
  if (scheduleArr) {
    for(i = 0; i < scheduleArr.length; i++) {
      var dailyTasks = (scheduleArr[i].time);
      
      var tgtBlock = document.getElementById(scheduleArr[i].time).querySelector(".task");      
      // var tgtBlock = tgtParent.querySelector('task');
      tgtBlock.innerHTML =  scheduleArr[i].task;
      
      console.log("inner");
      // var ArrBlock = $(this).siblings('.task').val();
      // var newTime = $(this).parent().attr('id');
      
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
  
  console.log(newTime);
  console.log(newTaskBlock)
  
    var obj = {
      "time": newTime,
      "task": newTaskBlock
    };
  
    console.log(obj);
  
    scheduleArr.push(obj);
    console.log(scheduleArr);
  
    localStorage.setItem("Arr", JSON.stringify(scheduleArr));
  });


});
