
let div = document.querySelector('div');
let content = ' ';
for(let i = 1, i <= 12, i++) {

  content += <div>${i}</div>;
}

div.innerHTML = content;
