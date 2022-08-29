const burgerIMG = document.querySelector('.burger');
const burgerMenu= document.querySelector('.burger-menu');
const body= document.querySelector('body');
const burgerline = document.querySelectorAll('.burger-line');

const activMenu = () => {
    burgerMenu.classList.toggle("activ-burger-menu");
    body.classList.toggle("lock");
}
burgerIMG.addEventListener('click',activMenu);
const tapMenu = () => {
    burgerMenu.classList.remove("activ-burger-menu");
    body.classList.remove("lock");
}

burgerline.forEach((el)=>{
    el.addEventListener('click',tapMenu)
})
