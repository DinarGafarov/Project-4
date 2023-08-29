const burger = document.querySelector(".burger__menu");
const burgerBlock = document.querySelector(".header__content");

burger.addEventListener('click', openBurg);

function openBurg(){
    burger.classList.toggle('active');
    burgerBlock.classList.toggle('active');
}
