import inventoryObject from "../pageObjects/inventoryObject";
import Utilities from "../../utils/utilities";

export default class Inventory {

    constructor(page) {
        this.page = page;
        this.locate = new inventoryObject(page);
        this.utility = new Utilities(page);
    }

   async addThreeRandomProducts() {
    const buttons = this.locate.addToCartButtons;

    for (let i = 0; i < 3; i++) {
        const count = await buttons.count();
        const random = Math.floor(Math.random() * count);

        await buttons.nth(random).click();
        }
    }

    async sortZtoA() {
        await this.locate.sortDropdown.selectOption('za');
    }

    async addFirstProductAfterSort() {

        const productName = await this.locate.inventoryItems
            .first()
            .textContent();

        await this.locate.addToCartButtons
            .first()
            .click();

        return productName;
    }

    async getAllProductNames() {
        return await this.locate.inventoryItems.allTextContents();
    }

    async openCart() {
        await this.locate.cartButton.click();
    }
}