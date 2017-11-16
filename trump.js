var countDownTrump = new Date("Jan 20, 2021 12:00:00").getTime();
var now = new Date().getTime();
var distanceTrump = countDownTrump - now;
var x = setInterval(function() {
//Trump Timer
    var days = Math.floor(distanceTrump / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distanceTrump % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distanceTrump % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distanceTrump % (1000 * 60)) / 1000);
    document.getElementById("trumpEnd").innerHTML = days + " day(s) " + hours + " hour(s) " + minutes + " minute(s) " + seconds + " second(s) ";
    if (distanceTrump < 0) {
        clearInterval(x);
        document.getElementById("trumpEnd").innerHTML = "Be gone fool!";
    }

}, 1000);