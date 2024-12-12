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
let arrowDown = Array.from(document.querySelectorAll('#arrow-down'));

console.log(arrowDown);
dropDown = () => {
    menu1.style.display = 'block';
    arrowDown[0].style.rotate = '180deg';
}

dropDown2 = () => {
    menu2.style.display = 'block';
    arrowDown[1].style.rotate = '180deg';
}
dropDown3 = () => {
    menu3.style.display = 'block';
    arrowDown[2].style.rotate = '180deg';
}
removeDrop = () => {
    menu1.style.display = 'none';
    arrowDown[0].style.rotate = '0deg';

}
removeDrop2 = () => {
    menu2.style.display = 'none';
    arrowDown[1].style.rotate = '0deg';
}
removeDrop3 = () => {
    menu3.style.display = 'none';
    arrowDown[2].style.rotate = '0deg';
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

// // dropdpwn menu 2
// let menu1 = document.getElementById('menu-1');
// let menu2 = document.getElementById('menu-2');
// let menu3 = document.getElementById('menu-3');
// let homeFurn = document.getElementById('home-furn');
// let officeFurn = document.getElementById('office-furn');
// let hospitalFurn = document.getElementById('hospital-furn');
// let arrowDown = document.getElementById('arrow-down');

// showDropDown = () => {
//     menu1.style.display = 'block';
// }

// homeFurn.addEventListener('mouseover', showDropDown);

// drop down alert
let search = document.getElementById('search');
let alertSection = document.getElementById('alert-section');
let clearAlert = document.getElementById('x-btn');

displayDropDown = () => {
    alertSection.style.display = 'block';
}

hideDropDown = () => {
    // alertSection.classList.add('close-drop');
    alertSection.style.display = 'none';
    // console.log('hello')
}

search.addEventListener('click', displayDropDown);
clearAlert.addEventListener('click', hideDropDown);

// cart alert at work
let cartSection = document.getElementById('cart-alert-sctn');
let cartMenu = document.getElementById('cart-menu');
let cartX = document.getElementById('cart-x');

displayCart = () => {
    cartSection.style.display = 'block';
    cartSection.style.animation = 'showCart .5s ease-in';
}
hideCart = () => {
    cartSection.style.display = 'none';
    cartSection.style.animation = 'closeCart .5s ease-out';
}

cartMenu.addEventListener('click', displayCart);
cartX.addEventListener('click', hideCart);

// display user drop down
let user = document.getElementById('user');
let userList = document.getElementById('user-list');

displayUList = () => {
    userList.classList.toggle('hidden');
}

user.addEventListener('click', displayUList);