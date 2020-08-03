
let div = document.querySelector('div');
let content = ' ';
let object = 'js/object.js';




for(let i = 1; i <= object.js.length; i++) {

let result = object[i];

  content += `<a href="photos/${i}.jpg" data-caption = ${result[i]}
  >
      <img src="photos/thumbnails/${i}.jpg" alt=" ">
  </a>`;

}

div.innerHTML = content;
