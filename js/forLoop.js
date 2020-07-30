
let div = document.querySelector('div');
let content = ' ';


for(let i = 1; i <= 12; i++) {


  content += `<a href="photos/${i}.jpg" data-caption="I love ${photo_captions.txt/${i}.jpg}.
  ">
      <img src="photos/thumbnails/${i}.jpg" alt=" ">
  </a>`;

}

div.innerHTML = content;
