let now = new Date();
let seconds = now.getSeconds();
if (seconds < 10) {
  seconds = '0' + seconds;
}
document.getElementById('timer').innerHTML = seconds;
