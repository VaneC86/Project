let main_header = document.createElement('header');
let wrapper = document.createElement('div');
let header_text = document.createElement('h1');
let header_img = document.createElement('img');

main_header.classList.add('col-xl-12');
wrapper.classList.add('wrapper','d-flex')

main_header.style.background='url(img/header_bg.png) 50% 50%';
main_header.style.backgroundSize='cover';
main_header.style.minWidth='300px';

wrapper.insertAdjacentElement('afterbegin',main_header);

header_img.setAttribute('src','img/flag.png')
header_img.style.width='75px';
header_img.style.marginTop='-17px';


header_text.innerText='Новини України';
header_text.style.display='inline-block';

header_text.style.fontFamily='Lobster';
main_header.insertAdjacentElement('afterbegin',header_text);


main_header.insertAdjacentElement('afterbegin',header_img);


