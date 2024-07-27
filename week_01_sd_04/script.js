function time() {
  var time = new Date(),
  hours = time.getHours(),
  minutes = time.getMinutes(),
  seconds = time.getSeconds();

  document.querySelectorAll('#time')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

  function harold(standIn) {
      if (standIn < 10) {
          standIn = '0' + standIn;
      }
      return standIn;
  }
}setInterval(time, 1000);

function date() {
  var dates = new Date(),
  years = dates.getFullYear(),
  month = dates.getMonth(),
  date = dates.getDate(),
  day = dates.getDay(),
  dayS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  monthS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  document.querySelectorAll('#date')[0].innerHTML = date + "-" + monthTo(month) + "-" + years;

  function dayTo(standIn) {
      for (let index = 0; index < dayS.length; index++) {
          if (standIn == index) {
              standIn = dayS[index];
          }
      }
      return standIn;
  }

  function monthTo(standIn) {
      for (let index = 0; index < monthS.length; index++) {
          if (standIn == index) {
              standIn = monthS[index];
          }
      }
      return standIn;
  }
}setInterval(date, 1000);