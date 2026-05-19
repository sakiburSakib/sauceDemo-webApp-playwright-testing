import cartObject from "../pageObjects/cartObject";

export default class Cart {

    constructor(page) {
        this.page = page;
        this.locate = new cartObject(page);
    }

    async getCartItems() {
        return this.locate.cartItems.allTextContents();
    }

    async clickCheckout() {
        await this.locate.checkoutButton.click();
    }

}