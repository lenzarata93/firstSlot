function getImg(){
    const images = [
        "./public/images/WELTON PUBLIC.jpg",
       "./public/images/CUNAMI.webp",
    "./public/images/100 godini.jpg",
    "./public/images/CSKA LEVSKI 2 7.jpg",
    "./public/images/EL JEMILI.webp",
    "./public/images/GUNDI.png",
    "./public/images/WELTON HEART.webp",
    "./public/images/Ricardinho.jpg",
    "./public/images/LEVSKI NA LEVSKARITE.jpg",
    "./public/images/LEVSKI LOGO.png",
    "./public/images/LEVSKI FANS WILD.jpg"
    
    ];
    const randomIndex = getRandomIndex(images.length);
    return images[randomIndex];
}

// Функция, която генерира случайно число за избор на символ
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function spinReel(reel, iterationsLeft) {
    const images = reel.querySelectorAll('img');
    const targetImage = "./public/images/LEVSKI FANS WILD.jpg"; // Изображение, за което търсим съвпадение

    images.forEach(img => {
        const src = getImg(); // Взема произволно изображение от списъка
        img.src = src;
    });

    // Проверка за съвпадение с целевото изображение
    if (iterationsLeft > 0) {
        setTimeout(() => {
            // Проверка за съвпадение на всяко изображение в рила
            images.forEach(img => {
                if (img.src === targetImage) {
                    // Ако има съвпадение, направете необходимите действия тук
                    console.log('Съвпадение!');
                }
            });

            spinReel(reel, iterationsLeft - 1);
        }, 100); // Изчаква 100 милисекунди преди да продължи към следващата итерация (може да промените това според вашите предпочитания)
    }
}

function spinAllReels() {
    const reels = document.querySelectorAll('#gameSlot div');
    reels.forEach(reel => {
        spinReel(reel, 25); // Завърта всеки рил 10 пъти
    });
}

// Селектор за бутона "Завърти"
const spinButton = document.querySelector('#action #spin');

// Добавяне на слушател за събитие 'click' на бутона за завъртане
spinButton.addEventListener('click', spinAllReels);