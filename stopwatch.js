let addZero = (value) => {
  if (value < 10) {
    value = '0' + value;
  }

  return value;
}

let now = new Date();
let seconds = now.getSeconds();
seconds = addZero(seconds);

let minutes = now.getMinutes();
minutes = addZero(minutes);

let hours = now.getHours();
hours = addZero(hours);

document.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + seconds;
