function Slider() {
    this.buttonPrev = null;
    this.buttonNext = null;
    this.imgId = null;
    this.currentIndex = 0;
    this.arrayOfImages = [];
    this.init = function (elId) {
        let that = this; // that === slider
        elId = document.querySelector("#" + elId);

        this.buttonPrev = elId.querySelector(".prev-button");
        this.buttonNext = elId.querySelector(".next-button");
        this.imgId = elId.querySelector(".images-of-pngs");

        this.buttonPrev.addEventListener("click", function (event) {
            that.pressPrevButton(event);
        });

        this.buttonNext.addEventListener("click", function (event) {
            that.pressNextButton(event);
        });

        // add array of images
        this.arrayOfImages.push("img/icons8-твиттер.svg");
        this.arrayOfImages.push("img/icons8-телеграмма-app.svg");
        this.arrayOfImages.push("img/icons8-whatsapp.svg");
        this.arrayOfImages.push("img/icons8-yahoo-mail-app.svg");

        // путь для стартовой картинки
        this.imgId.src = this.arrayOfImages[this.currentIndex];
        // изначально кнопка prev недоступна
        this.buttonPrev.disabled = true;
    };
    this.pressPrevButton = function (event) {
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
    };
    this.pressNextButton = function (event) {
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
    }
}
