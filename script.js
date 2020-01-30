console.log("script file reporting for class")
console.log(moment())

var getdatetime = document.getElementById("navtime")
var presentdate = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(presentdate)
getdatetime.textContent = presentdate