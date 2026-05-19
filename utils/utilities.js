export default class Utilities {

    constructor(page) {
        this.page = page;
    }

    getPrice(priceText) {
        return parseFloat(priceText.replace('$', ''));
    }

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

}