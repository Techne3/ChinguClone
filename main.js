var span = document.getElementById('date');

function time() {
  var d = new Date();
  var seconds = d.getSeconds();
  var minutes = d.getMinutes();
  var hours = d.getHours();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;

  span.textContent = hours + ":" + minutes + ":" + seconds + " " + ampm ;
}

setInterval(time, 1000);

// Set Month Day and Year with Moment.js

var Now = moment().format('ll');  
var x = document.getElementById("months");
x.innerHTML = Now;