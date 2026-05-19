# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: standardUser.spec.js >> Standard User >> should able to select three valid products and add to cart
- Location: tests\specs\standardUser.spec.js:13:9

# Error details

```
ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
```

# Test source

```ts
  1  | import cartObject from "../pageObjects/cartObject";
  2  | 
  3  | export default class Cart extends cartObject {
  4  | 
  5  |     constructor(page) {
> 6  |         this.page = page;
     |         ^ ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
  7  |         this.locate = new cartObject(page);
  8  |     }
  9  | 
  10 |     async getCartItems() {
  11 |         return await this.cartItems.allTextContents();
  12 |     }
  13 | 
  14 |     async clickCheckout() {
  15 |         await this.checkoutButton.click();
  16 |     }
  17 | 
  18 | }
```