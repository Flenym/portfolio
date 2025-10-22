let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav-menu');

burger.addEventListener('click', run);

function run(){
    burger.classList.toggle('active');
    menu.classList.toggle('show');
}

const scrollBtn = document.getElementById("scrollTopBtn");

 // Показать кнопку при прокрутке вниз
 window.addEventListener("scroll", () => {
   scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
 });
  // Прокрутка вверх при клике
 scrollBtn.addEventListener("click", () => {
   window.scrollTo({
     top: 0,
     behavior: "smooth"
   });
 });