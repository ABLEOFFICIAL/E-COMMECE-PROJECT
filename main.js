//section 1 image slide
let sliderImage = document.querySelectorAll('.slide');
let arrowRight = document.querySelector('.arrow-right');
let arrowLeft = document.querySelector('.arrow-left');
let currentSlide = 0;

function reset(){
    for(let i = 0; i < sliderImage.length; i++){
        sliderImage[i].style.display = 'none';
    }
}

function displayImg(){
    reset();
    sliderImage[currentSlide].style.display = 'flex';
}

function moveToNext(){
    reset();
    sliderImage[currentSlide + 1].style.display = 'flex';
}
function moveToPrevious(){
    reset();
    sliderImage[0].style.display = 'flex';
}

//add event listener to next button
arrowRight.addEventListener('click', moveToNext);
arrowLeft.addEventListener('click', moveToPrevious);

displayImg();