// make sure the js file is working
console.log("script file reporting for class");
// make sure the jquerry moment library is working
console.log(moment());

// get the date and time and insert in the html element
var getdatetime = document.getElementById("navtime");
// get present date using the moment jquery library
var presentdate = moment().format("MMMM Do YYYY, h:mm:ss a");
// make sure the jquery moment library returns the present date
console.log(presentdate);
// set the getdatetime.textcontent to present date
getdatetime.textContent = presentdate;
// Function naming convention takes the UI element's visible to the user that the function is associated to, the naming convention first takes the element that envokes the function in this case the "submit" button, and I append the other relevent UI elelemt to add context which is the input field title in this case it is "9" which represents the function is being run on the input field when the event associated with the function is envoked by the user, you will see "event" used in my naming convetion as well, the event naming convention is used to add addtional context
function submit9() {
  var event9 = document.getElementById("in9").value;
  console.log(event9)
  localStorage.setItem("1", event9);
  console.log(localstore1);
}
// Setting value from input field in the lcoal storage when user clicks the "submit" button on the input field with the title "10"
function submit10() {
  var event10 = document.getElementById("in10").value;
  localStorage.setItem("2", event10);
  console.log(localstore2);
}
// Setting value from input field in the lcoal storage when user clicks the "submit" button on the input field with the title "11"
function submit11() {
  var event11 = document.getElementById("in11").value;
  localStorage.setItem("3", event11);
  console.log(localstore3);
}
// Setting value from input field in the lcoal storage when user clicks the "submit" button on the input field with the title "12"
function submit12() {
  var event12 = document.getElementById("in12").value;
  localStorage.setItem("4", event12);
  console.log(localstore4);
}
// Setting value from input field in the lcoal storage when user clicks the "submit" button on the input field with the title "1"
function submit1() {
  var event1 = document.getElementById("in1").value;
  console.log(event1);
  localStorage.setItem("5", event1)
  console.log(localstore5)
}
// Setting value from input field in the lcoal storage when user clicks the "submit" button on the input field with the title "2"
function submit2() {
  var event2 = document.getElementById("in2").value;
  console.log(event2);
  localStorage.setItem("6", event2);
  console.log(localstore6);
}
// Setting value from input field in the lcoal storage when user clicks the "submit" button on the input field with the title "3"
function submit3() {
  var event3 = document.getElementById("in3").value;
  console.log(event3);
  localStorage.setItem("7", event3);
  console.log(localstore7);
}
// Setting value from input field in the lcoal storage when user clicks the "submit" button on the input field with the title "4"
function submit4() {
  var event4 = document.getElementById("in4").value;
  console.log(event4);
  localStorage.setItem("8", event4);
  console.log(localstore8);
}
// Setting value from input field in the lcoal storage when user clicks the "submit" button on the input field with the title "5"
function submit5() {
  var event5 = document.getElementById("in5").value;
  console.log(event5);
  localStorage.setItem("9", event5);
  console.log(localstore9);
}
// local storeage tables that store values from the functions
localstore1();
localstore2();
localstore3();
localstore4();
localstore5();
localstore6();
localstore7();
localstore8();
localstore9();

// local storage for 9AM, function gets the value from the local sttorage, the naming convention of the variable is consistent with it's use, the function is getting values from a local storeage table which is why the variable is named "table" a number consistent with the actual table number in the local storage is appended to the table for additional context, i.e. table1 is the first table in the local storage if you were to go into the developer tools in the browser wheile this is running you will see the tables are consistent with the naming convention used.
function localstore1() {
  var table1 = localStorage.getItem("1");
  if (table1 === null) {
    return;
  }
  document.getElementById("in9").value = table1

}

// local storage for 10AM
function localstore2() {
  var table2 = localStorage.getItem("2");
  if (table2 === null) {
    return;
  }
  document.getElementById("in10").value = table2
}

// local storage for 11AM
function localstore3() {
  var table3 = localStorage.getItem("3");
  if (table3 === null) {
    return;
  }
  document.getElementById("in11").value = table3
}

// local storage for 12PM
function localstore4() {
  var table4 = localStorage.getItem("4");
  if (table4 === null) {
    return;
  }
  document.getElementById("in12").value = table4
}

// local storage for 1PM
function localstore5() {
  var table5 = localStorage.getItem("5");
  if (table5 === null) {
    return;
  }
  document.getElementById("in1").value = table5
}

// local storage for 2PM
function localstore6() {
  var table6 = localStorage.getItem("6");
  if (table6 === null) {
    return;
  }
  document.getElementById("in2").value = table6
}

// local storage for 3PM
function localstore7() {
  var table7 = localStorage.getItem("7");
  if (table7 === null) {
    return;
  }
  document.getElementById("in3").value = table7
}

// local storage for 4PM
function localstore8() {
  var table8 = localStorage.getItem("8");
  if (table8 === null) {
    return;
  }
  document.getElementById("in4").value = table8
}

// local storage for 5PM
function localstore9() {
  var table9 = localStorage.getItem("9");
  if (table9 === null) {
    return;
  }
  document.getElementById("in5").value = table9
}



