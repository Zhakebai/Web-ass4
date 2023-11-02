let searchButton = document.querySelector('.bx-search');
let searchBar = document.querySelector('.search-bar-container');

let loginButton = document.querySelector('.bx-user');
let login = document.querySelector('.loginForm');
let closeButton = document.querySelector('#formClose');

var audio = document.getElementById('audio');
var playPauseBtn = document.getElementById('playPauseBtn');
var count = 0;

function playPause() {
    if (count === 0) {
        count = 1;
        audio.play();
        playPauseBtn.innerHTML = "Pause  &#10073;";
    } else {
        count = 0;
        audio.pause();
        playPauseBtn.innerHTML = "Play &#9658;";
    }
}

function stopAudio() {
    count = 0;
    audio.pause();
    audio.currentTime = 0;
    playPause.textContent = "Play";
}

window.onscroll = () =>{
    searchButton.classList.remove('bx-x');
    searchBar.classList.remove('active');
}

searchButton.addEventListener('mouseover', () => {
    searchButton.classList.toggle('bx-search'); 
    searchButton.classList.toggle('bx-x'); 
    searchBar.classList.toggle('active');
});

loginButton.addEventListener('click', () => { 
    login.classList.add('active');
});

closeButton.addEventListener('click', () => {
    login.classList.remove('active');
});


function ClothingItem(name, price) {
    this.name = name;
    this.price = price;
}

const shoppingBag = [];
const cartTab = document.querySelector('.cartTab');
const shoppingBagList = document.getElementById('shoppingBagList');

const shoppingBagButton = document.getElementById('shoppingBagButton');
shoppingBagButton.addEventListener('click', () => {
    cartTab.style.display = 'block';
});

function addToShoppingBag(itemName, itemPrice) {
    const clothingItem = new ClothingItem(itemName, itemPrice);
    shoppingBag.push(clothingItem);
    renderShoppingBag();
}

function renderShoppingBag() {
    shoppingBagList.innerHTML = '';
    let totalPrice = 0;

    shoppingBag.forEach((item) => {
        const shoppingBagItem = document.createElement('li');
        shoppingBagItem.textContent = `${item.name} - $${item.price}`;
        shoppingBagList.appendChild(shoppingBagItem);
        totalPrice += item.price;
    });

    if (shoppingBag.length > 0) {
        const totalItem = document.createElement('li');
        totalItem.textContent = `Total: $${totalPrice}`;
        shoppingBagList.appendChild(totalItem);
    }
}

const closeCartTabButton = document.getElementById('closeCartTab');
closeCartTabButton.addEventListener('click', () => {
    cartTab.style.display = 'none';
});

const cartAddButtons = document.querySelectorAll('.btn-secondary[title="Cart-add"]');
cartAddButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.card-body');
        const productName = productCard.querySelector('.card-title').textContent;
        const productPrice = parseFloat(productCard.querySelector('.price').textContent.replace('$', ''));
        addToShoppingBag(productName, productPrice);
    });
});