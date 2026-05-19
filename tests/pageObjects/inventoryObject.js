export default class inventoryObject {

    constructor(page) {
        this.page = page;
    }

    get addToCartButtons() {
        return this.page.locator('//button[contains(@class,"btn btn_primary")]');
    }

    get cartButton() {
        return this.page.locator('//a[contains(@class,"shopping_cart_link")]');
    }

    get sortDropdown() {
        return this.page.locator('//select[contains(@class,"product_sort_container")]');
    }

    get inventoryItems() {
        return this.page.locator('//div[contains(@class,"inventory_item_name")]');
    }

}