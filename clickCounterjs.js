const clickbtn = document.querySelector('.clickcount button');
let clicknum = document.querySelector('.countNum h1');

clickbtn.addEventListener('click',increasecount);

function increasecount(){
    clicknum.innerHTML++;
};