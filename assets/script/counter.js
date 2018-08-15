var myelement = document.getElementById("counter");
var dw = document.getElementById("day-count");
var hw = document.getElementById("hour-count");
var mw = document.getElementById("minute-count");
var sw = document.getElementById("second-count");


var enddate = myelement.getAttribute('time');



var x = setInterval(function () {
  // console.log(event.target)

  var countDownDate = new Date(enddate).getTime();
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // myelement.innerHTML = days + "<br>d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (days < 10) {
    dw.innerHTML = "0" + days;
  } else {
    dw.innerHTML = days;
  }

  if (hours < 10) {
    hw.innerHTML = "0" + hours;
  } else {
    hw.innerHTML = hours;
  }

  if (minutes < 10) {
    mw.innerHTML = "0" + minutes;
  } else {
    mw.innerHTML = minutes;
  }

  if (seconds < 10) {
    sw.innerHTML = "0" + seconds;
  } else {
    sw.innerHTML = seconds;
  }



  if (distance < 0) {
    clearInterval(x);
    myelement.innerHTML = "Event Ended";
    dw.innerHTML = "";
    hw.innerHTML = "";
    mw.innerHTML = "";
    sw.innerHTML = "";
  }
}, 100);
