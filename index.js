
const toggleBtn = document.querySelector('.menu-btn')
const toggleBtnMiddle = document.querySelector('.menu-btn-middle')
const nav = document.querySelector('.nav-links')
const navMiddle = document.querySelector('.nav-links-colored')

toggleBtn.addEventListener('click', toggleMenu)
toggleBtnMiddle.addEventListener('click', toggleMenuMiddle)

let open = false

function toggleMenu() {
  if(!open) {
    toggleBtn.classList.add('close')
    nav.classList.add('show')
    open = true
  } else {
    toggleBtn.classList.remove('close')
    nav.classList.remove('show')
    open = false
  }
}

let middleOpen = false

function toggleMenuMiddle() {
  if(!middleOpen) {
    toggleBtnMiddle.classList.add('close')
    navMiddle.classList.add('show')
    middleOpen = true
  } else {
    toggleBtnMiddle.classList.remove('close')
    navMiddle.classList.remove('show')
    middleOpen = false
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