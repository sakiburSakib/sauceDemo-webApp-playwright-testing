# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: standardUser.spec.js >> Standard User >> should able to select three valid products and add to cart
- Location: tests\specs\standardUser.spec.js:13:9

# Error details

```
TypeError: loginPage.clickLogin is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - generic:
            - generic [ref=e7]:
              - button "Open Menu" [ref=e8] [cursor=pointer]
              - img "Open Menu" [ref=e9]
            - generic [ref=e10]:
              - navigation [ref=e12]:
                - link [ref=e13] [cursor=pointer]:
                  - /url: "#"
                  - text: All Items
                - link [ref=e14] [cursor=pointer]:
                  - /url: https://saucelabs.com/
                  - text: About
                - link [ref=e15] [cursor=pointer]:
                  - /url: "#"
                  - text: Logout
                - link [ref=e16] [cursor=pointer]:
                  - /url: "#"
                  - text: Reset App State
              - generic [ref=e17]:
                - button [ref=e18] [cursor=pointer]: Close Menu
                - img [ref=e19]
        - generic [ref=e21]: Swag Labs
      - generic [ref=e24]:
        - generic [ref=e25]: Products
        - generic [ref=e27] [cursor=pointer]:
          - generic [ref=e28]: Name (A to Z)
          - combobox [ref=e29]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e33]:
      - generic [ref=e34]:
        - link "Sauce Labs Backpack" [ref=e36] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack"
        - generic [ref=e37]:
          - generic [ref=e38]:
            - link "Sauce Labs Backpack" [ref=e39] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e40]: Sauce Labs Backpack
            - generic [ref=e41]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e42]:
            - generic [ref=e43]: $29.99
            - button "Add to cart" [ref=e44] [cursor=pointer]
      - generic [ref=e45]:
        - link "Sauce Labs Bike Light" [ref=e47] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light"
        - generic [ref=e48]:
          - generic [ref=e49]:
            - link "Sauce Labs Bike Light" [ref=e50] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e51]: Sauce Labs Bike Light
            - generic [ref=e52]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e53]:
            - generic [ref=e54]: $9.99
            - button "Add to cart" [ref=e55] [cursor=pointer]
      - generic [ref=e56]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e58] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt"
        - generic [ref=e59]:
          - generic [ref=e60]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e61] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e62]: Sauce Labs Bolt T-Shirt
            - generic [ref=e63]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e64]:
            - generic [ref=e65]: $15.99
            - button "Add to cart" [ref=e66] [cursor=pointer]
      - generic [ref=e67]:
        - link "Sauce Labs Fleece Jacket" [ref=e69] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket"
        - generic [ref=e70]:
          - generic [ref=e71]:
            - link "Sauce Labs Fleece Jacket" [ref=e72] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e73]: Sauce Labs Fleece Jacket
            - generic [ref=e74]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e75]:
            - generic [ref=e76]: $49.99
            - button "Add to cart" [ref=e77] [cursor=pointer]
      - generic [ref=e78]:
        - link "Sauce Labs Onesie" [ref=e80] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie"
        - generic [ref=e81]:
          - generic [ref=e82]:
            - link "Sauce Labs Onesie" [ref=e83] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e84]: Sauce Labs Onesie
            - generic [ref=e85]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e86]:
            - generic [ref=e87]: $7.99
            - button "Add to cart" [ref=e88] [cursor=pointer]
      - generic [ref=e89]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e91] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)"
        - generic [ref=e92]:
          - generic [ref=e93]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e94] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e95]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e96]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e97]:
            - generic [ref=e98]: $15.99
            - button "Add to cart" [ref=e99] [cursor=pointer]
  - contentinfo [ref=e100]:
    - list [ref=e101]:
      - listitem [ref=e102]:
        - link "Twitter" [ref=e103] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e104]:
        - link "Facebook" [ref=e105] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e106]:
        - link "LinkedIn" [ref=e107] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e108]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | import Login from '../pages/login';
  4  | import Inventory from '../pages/inventory';
  5  | import Cart from '../pages/cart';
  6  | import testData from '../../resource/testData.json' assert { type: 'json' };
  7  | import Utilities from '../../utils/utilities';
  8  | import Checkout from '../pages/checkout';
  9  | import Menu from '../pages/menu';
  10 | 
  11 | test.describe('Standard User', () => {
  12 | 
  13 |     test('should able to select three valid products and add to cart', async ({ page }) => {
  14 | 
  15 |     const loginPage = new Login(page);
  16 |     const inventoryPage = new Inventory(page);
  17 |     const cartPage = new Cart(page);
  18 |     const checkoutPage = new Checkout(page);
  19 |     const menuPage = new Menu(page);
  20 | 
  21 |     await loginPage.open();
  22 | 
  23 |     await loginPage.login(
  24 |         testData.users.standard.username,
  25 |         testData.users.standard.password
  26 |     );
  27 | 
> 28 |     await loginPage.clickLogin();
     |                     ^ TypeError: loginPage.clickLogin is not a function
  29 | 
  30 |     await expect(page).toHaveURL(/inventory/);
  31 | 
  32 |     await menuPage.openMenu();
  33 |     await menuPage.resetAppState();
  34 |     await menuPage.closeMenu();
  35 | 
  36 |     await inventoryPage.addThreeRandomProducts();
  37 | 
  38 |     await inventoryPage.openCart();
  39 | 
  40 |     const cartItems = await cartPage.getCartItems();
  41 |     expect(cartItems.length).toBe(3);
  42 | 
  43 |     await cartPage.clickCheckout();
  44 | 
  45 |     await checkoutPage.fillInformation();
  46 |     await checkoutPage.continueCheckout();
  47 | 
  48 |     const total = await checkoutPage.getTotalPrice();
  49 |     expect(total).toContain('$');
  50 | 
  51 |     await checkoutPage.finishCheckout();
  52 | 
  53 |     await expect(checkoutPage.successMessage)
  54 |         .toContainText('Thank you for your order');
  55 | 
  56 |     await menuPage.openMenu();
  57 |     await menuPage.resetAppState();
  58 |     await menuPage.closeMenu();
  59 |     await menuPage.logout();
  60 |     })
  61 | });
```