let ajax = new XMLHttpRequest();
ajax.open('GET','https://h2o-space.com/htmlbook/images.php');
ajax.responseType = 'json';
ajax.send(null);
