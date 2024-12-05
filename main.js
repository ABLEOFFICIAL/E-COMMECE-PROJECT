let homeFurn = document.getElementById('home-furn');
let navBar = document.getElementById('nav-bar');

//home- list- item
const hli = ['Bedroom', 'Dinning', 'Living'];
homeFurn.addEventListener('mouseover', displayHomeFurn);

function displayHomeFurn(e) {
    let homeListItem = document.createElement('ul');
    homeListItem.classList.add('home-list-item');
    let homeList;

    homeList.forEach(list => list = hli);

    //append homelist to homelistitems
    homeListItem.appendChild(homeList);
    navBar.appendChild(homeList);

    console.log('hello');
}

