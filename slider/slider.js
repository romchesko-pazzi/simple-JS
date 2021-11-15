let buttonPrev = document.getElementById("prev-button");
let buttonNext = document.getElementById("next-button");
let imgId = document.getElementById("images-of-pngs");
let currentIndex = 0;

// add click thing
buttonPrev.addEventListener("click", pressPrevButton);
buttonNext.addEventListener("click", pressNextButton);

// add array of images
let arrayOfImages = [];
arrayOfImages.push("img/icons8-твиттер.svg");
arrayOfImages.push("img/icons8-телеграмма-app.svg");
arrayOfImages.push("img/icons8-whatsapp.svg");
arrayOfImages.push("img/icons8-yahoo-mail-app.svg");

// путь для стартовой картинки
imgId.src = arrayOfImages[currentIndex];
// изначально кнопка prev недоступна
buttonPrev.disabled = true;

function pressPrevButton() {
    // текущий индекс массива -1
    currentIndex--;
    // переприсваивается путю картинки новый индекс(-1)
    imgId.src = arrayOfImages[currentIndex];
    // при нажатии на кнопку prev в последнем элементе массива, кнопка next становится доступна
    buttonNext.disabled = false;
    // если текущий индекс массива равен нулевому элеменету то disable button
    if (currentIndex === 0) {
        buttonPrev.disabled = true;
    }
}

function pressNextButton() {
    // текущий индекс массива +1
    currentIndex++;
    // переприсваивается путю картинки новый индекс(+1)
    imgId.src = arrayOfImages[currentIndex];
    // при нажатии кнопки next, кнопка prev становится доступна
    buttonPrev.disabled = false;
    // если текущий индекс массива равен последнему элементу то disable button
    if (currentIndex === arrayOfImages.length - 1) {
        buttonNext.disabled = true;
    }
}