import checkoutObject from "../pageObjects/checkoutObject";

export default class Checkout {
    constructor(page) {
        this.page = page;
        this.locate = new checkoutObject(page);
    }

    async fillInformation() {
        await this.locate.firstName.fill('Sakib');
        await this.locate.lastName.fill('Rahman');
        await this.locate.postalCode.fill('1234');
    }

    async continueCheckout() {
        await this.locate.continueButton.click();
    }

    async finishCheckout() {
        await this.locate.finishButton.click();
    }

    async getTotalPrice() {
        return await this.locate.totalPrice.textContent();
    }

    get successMessage() {
        return this.locate.successMessage;
    }
}