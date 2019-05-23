// var span = document.querySelector('.date');
// var pm = document.querySelector('.ampm');
function time() {
  var d = new Date();
  // var seconds = d.getSeconds();
  var minutes = d.getMinutes();
  var hours = d.getHours();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;

  // span.textContent = hours + ":" + minutes + ampm;
 	
  document.getElementById('time').innerHTML = "" + hours + ":" + minutes ;
  document.getElementById('hour').innerHTML = "" + ampm + "";
  // document.getElementById('date').innerHTML = "" + tmonth[nmonth].toUpperCase() + " " + ndate + ", " + nyear + "";
}

setInterval(time, 1000);

// Set Month Day and Year with Moment.js

var Now = moment().format('ll');  
var x = document.getElementById("date");
x.innerHTML = Now;


// tmonth = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

// function GetClock() {
//     var d = new Date(+new Date + 12096e5);
//     var dx = d.toGMTString();
//     dx = dx.substr(0, dx.length - 3);
//     d.setTime(Date.parse(dx))
//     d.setSeconds(d.getSeconds() + 0);
//     var nday = d.getDay(),
//         nmonth = d.getMonth(),
//         ndate = d.getDate(),
//         nyear = d.getYear(),
//         nhour = d.getHours(),
//         nmin = d.getMinutes(),
        
//         ap;

//     if (nhour == 0) {
//         ap = " AM";
//         nhour = 12;
//     } else if (nhour < 12) {
//         ap = " AM";
//     } else if (nhour == 12) {
//         ap = " PM";
//     } else if (nhour > 12) {
//         ap = " PM";
//         nhour -= 12;
//     }

//     if (nyear < 1000) nyear += 1900;
//     if (nmin <= 9) nmin = "0" + nmin;
    

  	
//     document.getElementById('time').innerHTML = "" + nhour + ":" + nmin ;
//     document.getElementById('hour').innerHTML = "" + ap + "";
//     document.getElementById('date').innerHTML = "" + tmonth[nmonth].toUpperCase() + " " + ndate + ", " + nyear + "";
// }

// window.onload = function () {
//     GetClock();
//     setInterval(GetClock, 1000);
