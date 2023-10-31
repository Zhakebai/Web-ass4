let searchButton = document.querySelector('.bx-search');
let searchBar = document.querySelector('.search-bar-container');

let loginButton = document.querySelector('.bx-user');
let login = document.querySelector('.loginForm');
let closeButton = document.querySelector('#formClose');


window.onscroll = () =>{
    searchButton.classList.remove('bx-x');
    searchBar.classList.remove('active');
}

searchButton.addEventListener('click', () => {
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
const shopList = document.getElementById('shopList');

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
    shopList.innerHTML = '';
    let totalPrice = 0;

    shoppingBag.forEach((item) => {
        const shoppingBagItem = document.createElement('li');
        shoppingBagItem.textContent = `${item.name} - $${item.price}`;
        shopList.appendChild(shoppingBagItem);
        totalPrice += item.price;
    });

    if (shoppingBag.length > 0) {
        const totalItem = document.createElement('li');
        totalItem.textContent = `Total: $${totalPrice}`;
        shopList.appendChild(totalItem);
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