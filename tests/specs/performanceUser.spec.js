import { test, expect } from '@playwright/test';

import Login from '../pages/login';
import Inventory from '../pages/inventory';
import Cart from '../pages/cart';
import Checkout from '../pages/checkout';
import Menu from '../pages/menu';
import testData from '../../resource/testData.json' assert { type: 'json' };
import Utilities from '../../utils/utilities';

test.describe('Performance Glitch User', () => {

    test('should be able to sort products and add the first one to the cart', async ({ page }) => {

        const loginPage = new Login(page);
        const inventoryPage = new Inventory(page);
        const cartPage = new Cart(page);
        const checkoutPage = new Checkout(page);
        const menuPage = new Menu(page);

        await loginPage.open();

        await loginPage.login(
            testData.users.performance.username,
            testData.users.performance.password
        );

        await expect(page.locator('.inventory_list')).toBeVisible();
        await menuPage.openMenu();
        await menuPage.resetAppState();
        await menuPage.closeMenu();

        await inventoryPage.sortZtoA();

        const selectedProduct =
            await inventoryPage.addFirstProductAfterSort();

        await inventoryPage.openCart();

        const cartItems = await cartPage.getCartItems();
        expect(cartItems[0]).toContain(selectedProduct);

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