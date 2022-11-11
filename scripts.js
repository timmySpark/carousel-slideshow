let slides = document.querySelectorAll('.slide')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')

let position = 0;
let maxSlide = slides.length - 1;


function brain(eqPos, pos, state) {
  if (position === eqPos) {
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
  brain(eqPos=maxSlide, pos=0, state='next')
})


prev.addEventListener("click", function () {
  brain(eqPos=0, pos=maxSlide, state='prev')
})
