// Preloader
$(window).on("load", function(){
  $(".preloader").delay(800).fadeOut("slow");
})

// Dark Mode Theme
$(document).ready(function () {
  var ThemeVal = localStorage.getItem("ThemeMode");
  if (ThemeVal == "dark") {
    $("html").addClass("darkMode");
    $("#btnSwith").attr("checked", "checked");
  } else {
    $("html").removeClass("darkMode");
  }
  $("#btnSwith").click(function () {
    if ($(this).is(":checked")) {
      $("html").addClass("darkMode");
      localStorage.setItem("ThemeMode", "dark");
    } else {
      $("html").removeClass("darkMode");
      localStorage.setItem("ThemeMode", "light");
    }
  });
});

// Header iTyped Init
const txtType = document.getElementById("text-Typing");
ityped.init(txtType, {
  strings: [
    "لورم ایپسوم ",
    " لورم ایپسوم متن ساختگی ",
    "لورم ایپسوم متن ساختگی ",
  ],
});

// CountDown Scripts
var countDown = new Date(2022, 2, 20, 19, 3, 8);
var timer = setInterval(function () {
  var dateTimeNow = new Date().getTime();
  var distance = countDown - dateTimeNow;

  if (distance > 0) {
    var dayTime = 1000 * 60 * 60 * 24;
    var hourTime = 1000 * 60 * 60;
    var minuteTime = 1000 * 60;

    var days = Math.floor(distance / dayTime);
    var hours = Math.floor((distance % dayTime) / hourTime);
    var minutes = Math.floor((distance % hourTime) / minuteTime);
    var seconds = Math.floor((distance % minuteTime) / 1000);

    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML =
      hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML =
      minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML =
      seconds < 10 ? "0" + seconds : seconds;
  } else {
    clearInterval(timer);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);


// AOS Init
$(document).ready(function () {
  AOS.init();
});
