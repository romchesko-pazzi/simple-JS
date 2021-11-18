let slider = {
    buttonPrev: document.getElementById("prev-button"),
    buttonNext: document.getElementById("next-button"),
    imgId: document.getElementById("images-of-pngs"),
    currentIndex: 0,
    arrayOfImages: [],

    // Запуск(инициализация)
    init: function () {
        // add click thing
        this.buttonPrev.addEventListener("click", this.pressPrevButton);
        this.buttonNext.addEventListener("click", this.pressNextButton);

        // add array of images
        this.arrayOfImages.push("img/icons8-твиттер.svg");
        this.arrayOfImages.push("img/icons8-телеграмма-app.svg");
        this.arrayOfImages.push("img/icons8-whatsapp.svg");
        this.arrayOfImages.push("img/icons8-yahoo-mail-app.svg");

        // путь для стартовой картинки
        this.imgId.src = this.arrayOfImages[this.currentIndex];
        // изначально кнопка prev недоступна
        this.buttonPrev.disabled = true;
    },

    pressPrevButton: function (event) {
        // текущий индекс массива -1
        this.currentIndex--;
        // переприсваивается путю картинки новый индекс(-1)
        this.imgId.src = this.arrayOfImages[this.currentIndex];
        // при нажатии на кнопку prev в последнем элементе массива, кнопка next становится доступна
        this.buttonNext.disabled = false;
        // если текущий индекс массива равен нулевому элеменету то disable button
        if (this.currentIndex === 0) {
            this.buttonPrev.disabled = true;
        }
    },

    pressNextButton: function (event) {
        // текущий индекс массива +1
        this.currentIndex++;
        // переприсваивается путю картинки новый индекс(+1)
        this.imgId.src = this.arrayOfImages[this.currentIndex];
        // при нажатии кнопки next, кнопка prev становится доступна
        this.buttonPrev.disabled = false;
        // если текущий индекс массива равен последнему элементу то disable button
        if (this.currentIndex === this.arrayOfImages.length - 1) {
            this.buttonNext.disabled = true;
        }
    },
}