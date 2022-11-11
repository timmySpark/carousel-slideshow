let slides = document.queryselectorall('.slide')
let prev = document.queryselector('prev')
let next = document.queryselector('next')
let letslide;

let position = 1;

function letSlide(len) {
  if (len>slides.length) {
    position = 1
  }
  else if (len < slides.length) {
    position = len
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display="None"
  }
}

prev.addEventListener("click" , function(){
  letSlide(-1)
  console.log('back');
});
next.addEventListener("click" , function(){
  letSlide(1)
  console.log('front');
});

letSlide();
