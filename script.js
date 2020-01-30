console.log("script file reporting for class")
console.log(moment())

var getdatetime = document.getElementById("navtime")
var presentdate = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(presentdate)
getdatetime.textContent = presentdate

localstore1();
// localstore2();
// localstore3();
// localstore4();
// localstore5();
// localstore6();
// localstore7();
// localstore8();
// localstore9();

function localstore1() {
    var table1 = localStorage.getItem("1")
    document.getElementById("in9").value = table1
}



function submit9() {
    var event9 = document.getElementById("in9").value;
    
    localStorage.setItem("1", event9)
}