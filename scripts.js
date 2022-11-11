let slides = document.querySelectorAll('.slide')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let imgSlide = document.querySelectorAll('.slide-img')

let position = 0;
let maxSlide = slides.length - 1;

function mouseHover() {
  next.style.display='inline'
  prev.style.display='inline'
}


imgSlide[position].addEventListener("mouseover", mouseHover);

function brain(index, pos, state) {
  if (position === index) {
    position = pos;
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display="none"
    }
    slides[position].style.display='block'
  } 
  else {
    if (state == 'next') {
      position++; 
    }
    else{
      position--
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display="none"
    }

    slides[position].style.display='block'
  }
}

next.addEventListener("click", function () {
  brain(index=maxSlide, pos=0, state='next')
})


prev.addEventListener("click", function () {
  brain(index=0, pos=maxSlide, state='prev')
})
