
let div = document.querySelector('div');
let content = ' ';


for(let i = 1; i <= 12; i++) {


  content += `<a href="photos/${i}.jpg" data-caption="I love hay bales. Took this snap on a drive through the countryside past some straw fields.
  ">
      <img src="photos/thumbnails/${i}.jpg" alt="Hay Bales">
  </a>`;

}

div.innerHTML = content;
