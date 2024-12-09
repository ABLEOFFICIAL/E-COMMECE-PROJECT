//section 1 image slide
let sliderImage = document.querySelectorAll('.slide');
let arrowRight = document.querySelector('.arrow-right');
let arrowLeft = document.querySelector('.arrow-left');
let cs1 = document.querySelector('.cs1')
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
    cs1.classList.toggle('active');
}
function moveToPrevious(){
    reset();
    sliderImage[0].style.display = 'flex';
    cs1.classList.toggle('active');
}

//add event listener to next button
arrowRight.addEventListener('click', moveToNext);
arrowLeft.addEventListener('click', moveToPrevious);

displayImg();

// dropdown menu
let menu1 = document.getElementById('menu-1');
let menu2 = document.getElementById('menu-2');
let menu3 = document.getElementById('menu-3');
let homeFurn = document.getElementById('home-furn');
let officeFurn = document.getElementById('office-furn');
let hospitalFurn = document.getElementById('hospital-furn');
let arrowDown = document.getElementById('arrow-down');

dropDown = () => {
    menu1.style.display = 'block';
}
dropDown2 = () => {
    menu2.style.display = 'block';
}
dropDown3 = () => {
    menu3.style.display = 'block';
}
removeDrop = () => {
    menu1.style.display = 'none';
}
removeDrop2 = () => {
    menu2.style.display = 'none';
}
removeDrop3 = () => {
    menu3.style.display = 'none';
}
menuStay = () => {
    menu1.style.display = 'block';
}
menuStay2 = () => {
    menu2.style.display = 'block';
}
menuStay3 = () => {
    menu3.style.display = 'block';
}
menuleave = () => {
    menu1.style.display = 'none';
}
menuleave2 = () => {
    menu2.style.display = 'none';
}
menuleave3 = () => {
    menu3.style.display = 'none';
}

homeFurn.addEventListener('mouseover', dropDown);
officeFurn.addEventListener('mouseover', dropDown2);
hospitalFurn.addEventListener('mouseover', dropDown3);
homeFurn.addEventListener('mouseout', removeDrop);
officeFurn.addEventListener('mouseout', removeDrop2);
hospitalFurn.addEventListener('mouseout', removeDrop3);
menu1.addEventListener('mouseover', menuStay);
menu2.addEventListener('mouseover', menuStay2);
menu3.addEventListener('mouseover', menuStay3);
menu1.addEventListener('mouseout', menuleave);
menu2.addEventListener('mouseout', menuleave2);
menu3.addEventListener('mouseout', menuleave3);