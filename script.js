console.log("script file reporting for class");
console.log(moment());

var getdatetime = document.getElementById("navtime");
var presentdate = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(presentdate);
getdatetime.textContent = presentdate;

function submit9() {
  var event9 = document.getElementById("in9").value;
  console.log(event9)
  localStorage.setItem("1", event9);
  console.log(localstore1);
}
function submit10() {
  var event10 = document.getElementById("in10").value;
  localStorage.setItem("2", event10);
  console.log(localstore2);
}
function submit11() {
  var event11 = document.getElementById("in11").value;
  localStorage.setItem("3", event11);
  console.log(localstore3);
}
function submit12() {
  var event12 = document.getElementById("in12").value;
  localStorage.setItem("4", event12);
  console.log(localstore4);
}
function submit1() {
  var event1 = document.getElementById("in1").value;
  console.log(event1);
  localStorage.setItem("5", event1)
  console.log(localstore5)
}
function submit2() {
  var event2 = document.getElementById("in2").value;
  console.log(event2);
  localStorage.setItem("6", event2);
  console.log(localstore6);
}
function submit3() {
  var event2 = document.getElementById("in3").value;
  console.log(event3);
  localStorage.setItem("7", event3);
  console.log(localstore7);
}
function submit4() {
  var event2 = document.getElementById("in4").value;
  console.log(event4);
  localStorage.setItem("7", event3);
  console.log(localstore7);
}
function submit5() {
  var event2 = document.getElementById("in5").value;
  console.log(event5);
  localStorage.setItem("7", event3);
  console.log(localstore7);
}

localstore1();
localstore2();
localstore3();
localstore4();
localstore5();
localstore6();
localstore7();
localstore8();
localstore9();

// local storage for 9AM
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



