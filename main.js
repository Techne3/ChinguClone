

function time() {
	var d = new Date();
	// var seconds = d.getSeconds();
	var minutes = d.getMinutes();
	var hours = d.getHours();
	var ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? '0' + minutes : minutes;

	// span.textContent = hours + ":" + minutes + ampm;

	document.getElementById('time').innerHTML = '' + hours + ':' + minutes;
	document.getElementById('hour').innerHTML = '' + ampm + '';
	
}


setInterval(time, 1000);

// Set Month Day and Year with Moment.js

var Now = moment().format('ll');
var x = document.getElementById('date');
x.innerHTML = Now;

// delete text under clock

var textDelete = document.querySelector('.delete-text');

textDelete.addEventListener('click', function(){
	textDelete.style.display = 'none';
});



// github pull request Issue caret 
document.getElementById("pull-request").onclick = function() {
	document.getElementById("twoUp").style.display="none";
	document.getElementById("oneUp").style.display="block";
}



document.getElementById("item-issues").onclick=function() {
	document.getElementById("oneUp").style.display="none";
	document.getElementById("twoUp").style.display="block";
}


function myFunction() {
	var x = document.getElementById("github-issues");
	if (x.innerHTML === "GITHUB ISSUES HISTORY") {
	  x.innerHTML = "GITLAB ISSUES HISTORY";
	} else {
	  x.innerHTML = "GITHUB ISSUES HISTORY";
	}
  }


//   function myFunction() {
// 	var v =document.querySelector("fab");
// 	if (icon.classList.contains('fa-github-alt')) {
// 		icon.classList.remove('fa-github-alt');
// 		icon.classList.add('fab fa-gitlab');
// 	  //   text.innerHTML = 'Hide';
// 	  } else {
// 		icon.classList.remove('fab fa-gitlab');
// 		icon.classList.add('fa-github-alt');

// 	

// document.getElementById('switch').addEventListener('click', function() {
// 	var icon = this.querySelector('i');
// 	var text = this.querySelector('span');
  
// 	if (icon.classList.contains('fa-github-alt')) {
// 	  icon.classList.remove('fa-github-alt');
// 	  icon.classList.add('fab fa-gitlab');
// 	//   text.innerHTML = 'Hide';
// 	} else {
// 	  icon.classList.remove('fab fa-gitlab');
// 	  icon.classList.add('fa-github-alt');
// 	//   text.innerHTML = 'Show';
// 	}
//   });
  

