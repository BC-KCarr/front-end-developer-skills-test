
const toggleBtn = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav-links')
const navItems = document.querySelectorAll('.nav-items')
const hero = document.querySelector('.bg-image-top')

toggleBtn.addEventListener('click', toggleMenu)

let open = false

function toggleMenu() {
  if(!open) {
    hero.classList.add('show')
    toggleBtn.classList.add('close')
    nav.classList.add('show')
    navItems.forEach((item) => {
      item.classList.add('show')
    })
    open = true
  } else {
    hero.classList.remove('show')
    hero.classList.add('close')
    toggleBtn.classList.remove('close')
    nav.classList.remove('show')
    navItems.forEach((item) => {
      item.classList.remove('show')
    })
    open = false
  }

}

let slide_index = 1;
let page = 0
displaySlides(slide_index);
function nextSlide(n) {
  page ++
  displaySlides(slide_index += n);
}
function backSlide(n) {
  page--
  displaySlides(slide_index -= n)
}

function displaySlides(n) {
  let i;
  let slides = document.getElementsByClassName("showSlide");
  let dots = document.querySelectorAll('.dot')
  if (n > slides.length) { slide_index = 1 }
  if (page > 2) { page = 0}
  if (page < 0) { page = 2}
  if (n < 1) { slide_index = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots.forEach((dot) => {
      dot.classList.remove('active')
    })
  }
  
  slides[slide_index - 1].style.display = "block";
  slides[slide_index].style.display = "block";
  slides[slide_index + 1].style.display = "block";
  slides[slide_index + 2].style.display = "block";
  dots[page].classList.add('active')
}