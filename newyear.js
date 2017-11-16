var countDownNewYear = new Date("Jan 1, 2018 00:00:00").getTime();
var now = new Date().getTime();
var distanceNewYear = countDownNewYear - now;
var x = setInterval(function() {
//New Year Timer
    var days = Math.floor(distanceNewYear / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distanceNewYear % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distanceNewYear % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distanceNewYear % (1000 * 60)) / 1000);
    document.getElementById("newYearEnd").innerHTML = days + " day(s) " + hours + " hour(s) " + minutes + " minute(s) " + seconds + " second(s) ";
    if (distanceNewYear < 0) {
        clearInterval(x);
        document.getElementById("newYearEnd").innerHTML = "We made it around the sun again!";
    }

}, 1000);