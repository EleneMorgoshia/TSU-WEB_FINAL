//having the access to the html elements
const sliderDiv = document.getElementById('sliderDiv')
const slideImg = document.getElementById("slideImg")


//creating arrays where all the images will be set
const imagesArray = [
  "images/news3.png",
  "/images/aboutUs-img2.jpg",
  "/images/recover-3.jpg",
  "/images/recover-4.jpg",
  "/images/recover-2.jpg"
]

let currentIndex = 0
function showSlide(index){
  if(index < 0){
    index = imagesArray.length - 1;
  }else if(index > imagesArray.length - 1){
    index = 0;
  }

  currentIndex = index;
  slideImg.src = imagesArray[index]
}

function nextSlide(){
    currentIndex++;
    showSlide(currentIndex)
}

function prevSlide(){
    currentIndex--;
    showSlide(currentIndex)
}

showSlide(currentIndex)
setInterval(nextSlide,3000)