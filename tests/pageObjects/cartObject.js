export default class cartObject {

    constructor(page) {
        this.page = page;
    }

    get cartItems() {
        return this.page.locator('//div[contains(@class,"inventory_item_name")]');
    }

    get checkoutButton() {
        return this.page.locator('//button[contains(@id,"checkout")]');
    }

}