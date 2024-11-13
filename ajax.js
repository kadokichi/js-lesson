let ajax = new XMLHttpRequest();
ajax.open('GET','https://h2o-space.com/htmlbook/images.php');
ajax.responseType = 'json';
ajax.send(null);

ajax.onreadystatechange = function() {
  if (ajax.readyState === XMLHttpRequest.DONE && ajax.status === 200) {
    for (let i=0; i<this.response.length; i++) {
      alert(this.response[i].path);
    }
  }
}
