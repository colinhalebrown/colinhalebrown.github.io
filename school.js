var countDownSchool = new Date("Jun 12, 2018 15:15:00").getTime();
var now = new Date().getTime();
var distanceSchool = countDownSchool - now;
var x = setInterval(function() {
  
//School Timer
    var days = Math.floor(distanceSchool / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distanceSchool % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distanceSchool % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distanceSchool % (1000 * 60)) / 1000);
    document.getElementById("schoolEnd").innerHTML = days + " day(s) " + hours + " hour(s) " + minutes + " minute(s) " + seconds + " second(s) ";
    if (distanceSchool < 0) {
        clearInterval(x);
        document.getElementById("schoolEnd").innerHTML = "Schools out!";
    }

}, 1000);