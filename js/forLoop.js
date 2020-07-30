
let div = document.querySelector('div');
let content = ' ';


for(let i = 1; i <= 12; i++) {


  content += <img src = photos/thumbnails/${i}.jpg>;

}

div.innerHTML = content;
