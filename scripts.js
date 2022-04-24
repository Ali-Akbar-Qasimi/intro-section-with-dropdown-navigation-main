let navBar = document.querySelector('nav');
let open = document.querySelector('.open');
let close = document.querySelector('.close');


open.addEventListener('click', function(){
    navBar.classList.add('open');
})
close.addEventListener('click', function(){
    navBar.classList.remove('open');
})

function expand(element){
    let div = document.querySelector(`.${element}`)
    console.log(div)
    div.classList.toggle('show')
    console.log(div)
}

let windowWidth = window.innerWidth;
window.addEventListener('resize', function(){
    windowWidth = window.innerWidth;
    console.log(windowWidth)
    let heroImage = document.querySelector('.hero-image img');
    if(windowWidth >= 700){
        heroImage.src = './images/image-hero-desktop.png';
    }else{
        heroImage.src = './images/image-hero-mobile.png';
    }
})