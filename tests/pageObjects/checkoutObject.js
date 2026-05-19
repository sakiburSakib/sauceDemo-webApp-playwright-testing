export default class checkoutObject {

    constructor(page) {
        this.page = page;
    }

    get firstName() {
        return this.page.locator('//input[contains(@id,"first-name")]');
    }

    get lastName() {
        return this.page.locator('//input[contains(@id,"last-name")]');
    }

    get postalCode() {
        return this.page.locator('//input[contains(@id,"postal-code")]');
    }

    get continueButton() {
        return this.page.locator('//input[contains(@id,"continue")]');
    }

    get finishButton() {
        return this.page.locator('//button[contains(@id,"finish")]');
    }

    get totalPrice() {
        return this.page.locator('//div[contains(@class,"summary_total_label")]');
    }

    get successMessage() {
        return this.page.locator('//h2[contains(@class,"complete-header")]');
    }

}