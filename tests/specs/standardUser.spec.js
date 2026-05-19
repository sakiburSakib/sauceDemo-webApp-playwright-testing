import { test, expect } from '@playwright/test';

import Login from '../pages/login';
import Inventory from '../pages/inventory';
import Cart from '../pages/cart';
import testData from '../../resource/testData.json' assert { type: 'json' };
import Utilities from '../../utils/utilities';
import Checkout from '../pages/checkout';
import Menu from '../pages/menu';

test.describe('Standard User', () => {

    test('should able to select three valid products and add to cart', async ({ page }) => {

        const loginPage = new Login(page);
        const inventoryPage = new Inventory(page);
        const cartPage = new Cart(page);
        const checkoutPage = new Checkout(page);
        const menuPage = new Menu(page);

        await loginPage.open();

        await loginPage.login(
            testData.users.standard.username,
            testData.users.standard.password
        );

       await expect(page.locator('.inventory_list')).toBeVisible();

        await menuPage.openMenu();
        await menuPage.resetAppState();
        await menuPage.closeMenu();

        await inventoryPage.addThreeRandomProducts();

        await inventoryPage.openCart();

        const cartItems = await cartPage.getCartItems();
        expect(cartItems.length).toBe(3);

        await cartPage.clickCheckout();

        await checkoutPage.fillInformation();
        await checkoutPage.continueCheckout();

        const total = await checkoutPage.getTotalPrice();
        expect(total).toContain('$');

        await checkoutPage.finishCheckout();

        await expect(checkoutPage.successMessage)
            .toContainText('Thank you for your order');

        await menuPage.openMenu();
        await menuPage.resetAppState();
        await menuPage.closeMenu();
        await menuPage.logout();
    });

});