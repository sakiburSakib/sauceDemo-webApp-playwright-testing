export default class menuObject {

    constructor(page) {
        this.page = page;
    }

    get menuButton() {
        return this.page.locator('//div[contains(@class,"bm-burger-button")]');
    }

    get resetAppState() {
        return this.page.locator('//a[contains(@id,"reset_sidebar_link")]');
    }

    get logoutButton() {
        return this.page.locator('//a[contains(@id,"logout_sidebar_link")]');
    }

}