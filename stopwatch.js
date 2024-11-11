let addZero = (value) => {
  if (value < 10) {
    value = '0' + value;
  }

  return value;
}

document.getElementById('start_stop').addEventListener('click', () => {
  let start = new Date();

  setInterval(goTimer, 10);


});

let goTimer = () => {
  let now = new Date();
  document.getElementById('timer').innerHTML = now.getTime();
}
