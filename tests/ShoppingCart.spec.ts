// import { expect, test } from "../fixtures/fixtures";

// test.describe("Shopping Cart", () => {
//   test("Add a single product to cart", async ({
//     toolShop,
//     productPage,
//     cartPage,
//   }) => {
//     await toolShop.clickItem("Bolt Cutters");
//     const items = ["Bolt Cutters"];

//     await productPage.clickAddToCart();

//     await productPage.goToCart();
//     await expect(cartPage.getProceedToCheckout()).toBeVisible();
//     const titles = await cartPage.getItems();

//     titles.forEach((title, index) => {
//       expect(title.trim()).toEqual(items[index]);
//     });
//   });

//   test("Add multiple different products to cart", async ({
//     toolShop,
//     productPage,
//     cartPage,
//   }) => {
//     const items = ["Thor Hammer", "Bolt Cutters"];

//     for (const [index, item] of items.entries()) {
//       await toolShop.clickItem(` ${item} `);
//       await productPage.clickAddToCart();
//       await expect(productPage.getAddedToShoppingCartAlert()).toBeVisible();
//       expect(await productPage.getCartQuantity()).toEqual(String(index + 1));
//       await productPage.goToHome();
//     }

//     await productPage.goToCart();
//     await expect(cartPage.getProceedToCheckout()).toBeVisible();
//     const titles = await cartPage.getItems();

//     titles.forEach((title, index) => {
//       expect(title.trim()).toEqual(items[index]);
//     });
//   });

//   test("Add the same product twice", async ({
//     toolShop,
//     productPage,
//     cartPage,
//   }) => {
//     await toolShop.clickItem("Bolt Cutters");
//     await productPage.clickAddToCart();

//     await expect(cartPage.getAddedToCartBanner(2)).toBeVisible();
//     await productPage.clickAddToCart();
//     await expect(cartPage.getAddedToCartBanner(4)).toBeVisible();

//     expect(await productPage.getCartQuantity()).toEqual("2");

//     await productPage.goToCart();
//     await expect(cartPage.getProceedToCheckout()).toBeVisible();

//     const expectedQuantites = ["2"];
//     const quantites = await cartPage.getQuantityValues();

//     quantites.forEach((quantity, index) => {
//       expect(quantity.trim()).toEqual(expectedQuantites[index]);
//     });
//   });

//   test("Update quantity from the cart page", async ({
//     toolShop,
//     productPage,
//     cartPage,
//   }) => {
//     await toolShop.clickItem("Bolt Cutters");
//     await productPage.clickAddToCart();
//     expect(await productPage.getCartQuantity()).toEqual("1");

//     await productPage.goToCart();
//     await expect(cartPage.getProceedToCheckout()).toBeVisible();

//     const quantities = await cartPage.getQuantity();

//     for (const q of quantities) {
//       await q.fill("5");
//     }

//     const quantityValues = await cartPage.getQuantityValues();
//     quantityValues.forEach((values) => {
//       expect(values.trim()).toEqual("5");
//     });
//   });

//   test("Remove an item from the cart", async ({
//     toolShop,
//     productPage,
//     cartPage,
//   }) => {
//     await toolShop.clickItem("Bolt Cutters");
//     await productPage.clickAddToCart();
//     expect(await productPage.getCartQuantity()).toEqual("1");

//     await productPage.goToHome();
//     await toolShop.clickItem("Thor Hammer");
//     await productPage.clickAddToCart();
//     await expect(cartPage.getAddedToCartBanner(2)).toBeVisible();

//     await productPage.goToCart();
//     await expect(cartPage.getProceedToCheckout()).toBeVisible();

//     await cartPage.removeItem("Thor Hammer");
//     await expect(cartPage.getCartItem("Thor Hammer")).toBeHidden();

//     const expectedItems = ["Bolt Cutters"];
//     const items = await cartPage.getItems();

//     items.forEach((item, index) => {
//       expect(item.trim()).toEqual(expectedItems[index]);
//     });
//   });

//   test("Empty cart state", async ({ toolShop, productPage, cartPage }) => {
//     await toolShop.clickItem("Bolt Cutters");
//     await productPage.clickAddToCart();
//     expect(await productPage.getCartQuantity()).toEqual("1");

//     await productPage.goToCart();
//     await expect(cartPage.getProceedToCheckout()).toBeVisible();

//     await cartPage.removeItem("Bolt Cutters");
//     await expect(cartPage.getEmptyCartHeader()).toBeVisible();
//   });

//   test("Cart total math is correct (sum of line items)", async ({
//     toolShop,
//     productPage,
//     cartPage,
//   }) => {
//     const items = ["Thor Hammer", "Bolt Cutters"];

//     for (const [index, item] of items.entries()) {
//       await toolShop.clickItem(` ${item} `);
//       await productPage.clickAddToCart();
//       await expect(productPage.getAddedToShoppingCartAlert()).toBeVisible();
//       expect(await productPage.getCartQuantity()).toEqual(String(index + 1));
//       await productPage.goToHome();
//     }

//     await toolShop.goToCart();
//     await expect(cartPage.getProceedToCheckout()).toBeVisible();

//     const prices = await cartPage.getItemPrices();
//     let initialPrice = 0;
//     prices.forEach((price) => {
//       initialPrice += parseFloat(price.replace("$", "").trim());
//     });

//     const finalPrice = initialPrice.toFixed(2);
//     await expect(finalPrice).toEqual("59.55");
//   });

//   test("Cart persists after page refresh", async ({
//     toolShop,
//     productPage,
//     cartPage,
//   }) => {
//     const items = ["Combination Pliers", "Thor Hammer", "Bolt Cutters"];

//     for (const [index, item] of items.entries()) {
//       await toolShop.clickItem(` ${item} `);
//       await productPage.clickAddToCart();
//       await expect(productPage.getAddedToShoppingCartAlert()).toBeVisible();
//       expect(await productPage.getCartQuantity()).toEqual(String(index + 1));
//       await productPage.goToHome();
//     }

//     await toolShop.goToCart();
//     await expect(cartPage.getProceedToCheckout()).toBeVisible();

//     await cartPage.reload();
//     await expect(cartPage.getProceedToCheckout()).toBeVisible();

//     const cartItems = await cartPage.getItems();

//     cartItems.forEach((item, index) => {
//       expect(item.trim()).toEqual(items[index]);
//     });
//   });

//   test("Proceed to checkout from car", async ({
//     toolShop,
//     productPage,
//     cartPage,
//     checkoutPage
//   }) => {
//     await toolShop.clickItem(" Pliers ");
//     await productPage.clickAddToCart();
//     expect(await productPage.getCartQuantity()).toEqual("1");

//     await productPage.goToCart();
//     await cartPage.clickProceedToCheckout();

//     await expect(checkoutPage.getLoginHeader()).toBeVisible()
//   });
// });
