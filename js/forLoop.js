
let div = document.querySelector('div');
let content = ' ';
let arrayText = 'photo_captions.txt';

function insertTextPic(arr){

let items = '';
for(let i = 0; i <= arrayText.length; i++) {

items += `${arr.length}`;
}
return items;
}

for(let i = 1; i <= 12; i++) {


  content += `<a href="photos/${i}.jpg" data-caption="I love ${insertTextPic(arrayText)} 
  ">
      <img src="photos/thumbnails/${i}.jpg" alt=" ">
  </a>`;

}

div.innerHTML = content;
