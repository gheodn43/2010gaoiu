const anhtuan = [
    'Imgs/bantim1.PNG',
    'Imgs/bantim2.PNG',
    'Imgs/bantim3.PNG'
];
const huong = [
    'Imgs/huong1.PNG',
    'Imgs/huong2.PNG'
];

let currentIndexTuan = 0;
const characterTuan = document.getElementById('anhtuan');

let currentIndexHuong = 0;
const characterHuong = document.getElementById('huong');

function animateAnhtuan() {
    characterTuan.src = anhtuan[currentIndexTuan];
    currentIndexTuan = (currentIndexTuan + 1) % anhtuan.length;
}
function animateHuong() {
    characterHuong.src = huong[currentIndexHuong];
    currentIndexHuong = (currentIndexHuong + 1) % huong.length;
}
function createHeart() {
    const heartContainer = document.querySelector('.heart-container');
    const heart = document.createElement('img');
    heart.src = 'Imgs/traitim.PNG';
    heart.className = 'floating-heart';

    // Random size between 50px and 70px
    const size = Math.floor(Math.random() * 21) + 50;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    // Random opacity between 0.5 and 1
    const opacity = Math.random() * 0.5 + 0.5;
    heart.style.opacity = opacity;

    // Random starting position (right side of the screen)
    heart.style.right = '0px';
    heart.style.bottom = `${Math.floor(Math.random() * 100)}%`; // Random bottom position

    heartContainer.appendChild(heart);

    // Animation to move left
    setTimeout(() => {
        heart.style.transform = 'translateX(-100vw)';
        heart.style.transition = 'transform 5s linear';
    }, 100);

    // Remove the heart after animation is complete
    setTimeout(() => {
        heartContainer.removeChild(heart);
    }, 6000);
}

// Create multiple hearts at different intervals for more effect
setInterval(createHeart, 500); // Create a new heart every 500ms
setInterval(createHeart, 700); // Additional heart every 700ms


setInterval(animateAnhtuan, 300); 
setInterval(animateHuong, 300); 
