let searchButton = document.querySelector('.bx-search');
let searchBar = document.querySelector('.search-bar-container');

let loginButton = document.querySelector('.bx-user');
let login = document.querySelector('.loginForm');
let closeButton = document.querySelector('#formClose');

let videoBtns = document.querySelectorAll('.vid-btn');




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

videoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        videoBtns.forEach(button => button.classList.remove('active'));
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

document.getElementById('animateButton').addEventListener('click', () => {
    const content = document.querySelector('.about-us .content');
    content.style.animation = 'fadeIn 2s ease-in-out';
    content.style.animationFillMode = 'forwards';
});



