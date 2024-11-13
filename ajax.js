let images = [
  {
    "path": "img/img01.jpg",
    "name": "name01",
    "caption": "コメント1"
  },
  {
    "path": "img/img02.jpg",
    "name": "name02",
    "caption": "コメント2"
  }
];

//alert(images[0].caption);

let img;
let caption;
let div;

img = document.createElement('img');
img.setAttribute('src', images[0].path);
// <img src="img/img01.jpg">

caption = document.createElement('div');
caption.className = 'inner';
caption.innerHTML = '<p>' + images[0].caption + '<span>' + images[0].name + '</span></p>';
//  <div class="inner"><p>caption<span>name</span></p></div>

div = document.createElement('div');
div.className = 'photo';
div.appendChild(img);
div.appendChild(caption);

document.getElementById('img_unit').appendChild(div);
