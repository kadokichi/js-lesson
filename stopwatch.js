let addZero = (value) => {
  if (value < 10) {
    value = '0' + value;
  }

  return value;
}

let start;

document.getElementById('start_stop').addEventListener('click', () => {
  start = new Date();

  setInterval(goTimer, 10);

});

let goTimer = () => {
  let now = new Date();

  let milli = now.getTime() - start.getTime();
  let seconds = Math.floor(milli / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds - minutes * 60;
  minutes = minutes - hours * 60;

  hours = addZero(hours);
  seconds = addZero(seconds);
  minutes = addZero(minutes);

  document.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + seconds;
}
