function getImg(){
    const images = [
        "./public/images/WELTON PUBLIC.jpg",
       "./public/images/CUNAMI.webp",
    "./public/images/100 godini.jpg",
    "./public/images/CSKA LEVSKI 0 5.jpeg",
    "./public/images/CSKA LEVSKI 2 7.jpg",
    "./public/images/EL JEMILI.webp",
    "./public/images/GUNDI.png",
    "./public/images/WELTON HEART.webp",
    "./public/images/Ricardinho.jpg",
    "./public/images/LEVSKI NA LEVSKARITE.jpg",
    "./public/images/LEVSKI LOGO.png",
    
    ];
    const randomIndex = getRandomIndex(images.length);
    return images[randomIndex];
}

// Функция, която генерира случайно число за избор на символ
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

// Функция, която завърта всеки рил
function spinReel(reel) {
    const images = reel.querySelectorAll('img');
    images.forEach(img => {
        const src = getImg(); // Взема произволно изображение от списъка
        img.src = src;
    });
}

// Функция, която завърта всички рилове
function spinAllReels() {
    const reels = document.querySelectorAll('#gameSlot div');
    reels.forEach(reel => {
        spinReel(reel);
    });
}

// Селектор за бутона "Завърти"
const spinButton = document.querySelector('#action #spin');

// Добавяне на слушател за събитие 'click' на бутона за завъртане
spinButton.addEventListener('click', spinAllReels);