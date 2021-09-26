//Add date and time to Header
$(document).ready(function () {
  $("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));
  $("#currentTime").text(moment().format('LTS'));
});

//variables to store the time, and also the "hour" in military format
var currentTime = moment().format('LTS');
var currentHour = moment().format('kk');
// var task = {};

// Add the basic calendar sections
// var scheduleArr = [
//   {hour:"8 AM", task:"", hour:08},
//   {hour:"9 AM", task:"", hour:09},
//   {hour:"10 AM", task:"", hour:10},
//   {hour:"11 AM", task:"", hour:11},
//   {hour:"12 PM", task:"LUNCH", hour:12},
//   {hour:"1 PM", task:"", hour:13},
//   {hour:"2 PM", task:"", hour:14},
//   {hour:"3 PM", task:"", hour:15},
//   {hour:"4 PM", task:"", hour:16},
//   {hour:"5 PM", task:"", hour:17},
// ] 

//dynamically create the calendar form

// function buildSchedule() {
  // console.log('here');
  // //container for the schedule
  // let fullDay="";

  // console.log('here2');
  // for(i = 0; i < scheduleArr.length; i++) {
  //   console.log('here3');
    

   
    // const oneHour = `<form class="row oneHour">
    // <div class="col-sm-2 text-right">scheuldeArr[i].hour</div>
    // <div class="col-sm-9 text-right">scheuldeArr[i].task</div>
    // <div class="col-sm-1 text-right"></div>`;
    
      // console.log(oneHour);


  // fullDay+=oneHour;

  }
  };
    
    // let save= <i class="fas fa-save"></i>
  
    // div +=  "<div class='rfor(i = 8; i < 20; i++) {ow'>";
    




//color code lines based on current time

//icon for save button

//create tasks

//save tasks
// var saveTasks = function() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// };

// var loadTasks = function() {
//   tasks = JSON.parse(localStorage.getItem("tasks"));

  // if nothing in localStorage, create a new object to track all task status arrays
//   if (!tasks) {
//     tasks = {
//       toDo: [],
//       inProgress: [],
//       inReview: [],
//       done: []
//     };
//   }
// };

//update every 5 minutes

buildSchedule();

