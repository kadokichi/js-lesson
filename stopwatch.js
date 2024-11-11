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

  document.getElementById('timer').innerHTML = seconds;
}
