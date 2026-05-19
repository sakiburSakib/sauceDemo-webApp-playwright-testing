import menuObject from "../pageObjects/menuObject";

export default class Menu {

    constructor(page) {
        this.page = page;
        this.locate = new menuObject(page);
    }

    async openMenu() {
        await this.locate.menuButton.click();
    }

    async resetAppState() {
        await this.locate.resetAppState.click();
    }

    async logout() {

        await this.openMenu();

        await this.locate.logoutButton.waitFor({
            state: 'visible',
            timeout: 2000
        });

        await this.locate.logoutButton.click();
    }

    async closeMenu() {
        const closeBtn = this.page.locator('#react-burger-cross-btn');
        await closeBtn.click();
    }
}