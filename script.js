function showTime(){

  let date = new Date();

  let time = date.toLocaleTimeString();

  document.getElementById("time").innerHTML = time;
}

setInterval(showTime,1000);

showTime();