import { expect, test } from "../fixtures/fixtures";

test.describe("Checkout", () => {
  test("Checkout as a guest", async ({
    toolShop,
    productPage,
    cartPage,
    checkoutPage,
  }) => {
    await toolShop.clickItem("Bolt Cutters");
    await productPage.clickAddToCart();
    await productPage.goToCart();

    await cartPage.clickProceedToCheckout();

    await checkoutPage.clickContinueAsGuest();
    await expect(checkoutPage.getGuestParagraph()).toBeVisible();
  });

  test("Checkout while logged in", async ({
    loggedInUser,
    productPage,
    dashboardPage,
    cartPage,
    checkoutPage,
  }) => {
    await expect(dashboardPage.getAccountHeader()).toBeVisible();
    await dashboardPage.goToHome();

    await loggedInUser.clickItem("Bolt Cutters");
    await productPage.clickAddToCart();
    await productPage.goToCart();

    await cartPage.clickProceedToCheckout();

    await expect(checkoutPage.getLoggedInParagraph()).toBeVisible();
  });

  test("Attempt checkout with an empty cart", async ({ toolShop }) => {
    await expect(toolShop.getCart()).toBeHidden();
  });

  test("Fill billing/shipping address with valid data", async ({
    loggedInUser,
    productPage,
    dashboardPage,
    cartPage,
    checkoutPage,
  }) => {
    await expect(dashboardPage.getAccountHeader()).toBeVisible();
    await dashboardPage.goToHome();

    await loggedInUser.clickItem("Bolt Cutters");
    await productPage.clickAddToCart();
    await productPage.goToCart();

    await cartPage.clickProceedToCheckout();
    await checkoutPage.clickProceedToCheckout();
    await checkoutPage.clickProceedToCheckout();
  });
});
