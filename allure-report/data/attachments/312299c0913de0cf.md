# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: performanceUser.spec.js >> Performance Glitch User >> should be able to sort products and add the first one to the cart
- Location: tests\specs\performanceUser.spec.js:13:9

# Error details

```
Error: toContainText can be only used with Locator object, was called with undefined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
      - generic [ref=e15]: "Checkout: Complete!"
    - generic [ref=e16]:
      - img "Pony Express" [ref=e17]
      - heading "Thank you for your order!" [level=2] [ref=e18]
      - generic [ref=e19]: Your order has been dispatched, and will arrive just as fast as the pony can get there!
      - button "Back Home" [ref=e20] [cursor=pointer]
  - contentinfo [ref=e21]:
    - list [ref=e22]:
      - listitem [ref=e23]:
        - link "Twitter" [ref=e24] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e25]:
        - link "Facebook" [ref=e26] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e27]:
        - link "LinkedIn" [ref=e28] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e29]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | import Login from '../pages/login';
  4  | import Inventory from '../pages/inventory';
  5  | import Cart from '../pages/cart';
  6  | import Checkout from '../pages/checkout';
  7  | import Menu from '../pages/menu';
  8  | import testData from '../../resource/testData.json' assert { type: 'json' };
  9  | import Utilities from '../../utils/utilities';
  10 | 
  11 | test.describe('Performance Glitch User', () => {
  12 | 
  13 |     test('should be able to sort products and add the first one to the cart', async ({ page }) => {
  14 | 
  15 |         const loginPage = new Login(page);
  16 |         const inventoryPage = new Inventory(page);
  17 |         const cartPage = new Cart(page);
  18 |         const checkoutPage = new Checkout(page);
  19 |         const menuPage = new Menu(page);
  20 | 
  21 |         await loginPage.open();
  22 | 
  23 |         await loginPage.login(
  24 |             testData.users.performance.username,
  25 |             testData.users.performance.password
  26 |         );
  27 | 
  28 |         await expect(page).toHaveURL(/inventory/);
  29 | 
  30 |         await menuPage.openMenu();
  31 |         await menuPage.resetAppState();
  32 |         await menuPage.closeMenu();
  33 | 
  34 |         await inventoryPage.sortZtoA();
  35 | 
  36 |         const selectedProduct =
  37 |             await inventoryPage.addFirstProductAfterSort();
  38 | 
  39 |         await inventoryPage.openCart();
  40 | 
  41 |         const cartItems = await cartPage.getCartItems();
  42 |         expect(cartItems[0]).toContain(selectedProduct);
  43 | 
  44 |         await cartPage.clickCheckout();
  45 | 
  46 |         await checkoutPage.fillInformation();
  47 |         await checkoutPage.continueCheckout();
  48 | 
  49 |         const total = await checkoutPage.getTotalPrice();
  50 |         expect(total).toContain('$');
  51 | 
  52 |         await checkoutPage.finishCheckout();
  53 | 
  54 |         await expect(checkoutPage.successMessage)
> 55 |             .toContainText('Thank you for your order');
     |              ^ Error: toContainText can be only used with Locator object, was called with undefined
  56 | 
  57 |         await menuPage.openMenu();
  58 |         await menuPage.resetAppState();
  59 |         await menuPage.closeMenu();
  60 |         await menuPage.logout();
  61 |     });
  62 | 
  63 | });
```