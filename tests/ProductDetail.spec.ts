import { test, expect } from "../fixtures/fixtures";
import { relatedProducts } from "../testdata/items";

test.describe("Product Detail Page", () => {
  test("Navigate to a product from the listing", async ({
    toolShop,
    productPage,
  }) => {
    await toolShop.clickItem(" Long Nose Pliers ");
    await expect(productPage.getHeader()).toBeVisible();
  });

  test("Product detail shows name, price, description, image", async ({
    toolShop,
    productPage,
  }) => {
    await toolShop.clickItem(" Long Nose Pliers ");
    await expect(productPage.getHeader()).toBeVisible();
    await expect(productPage.getDescription()).toBeVisible();
    await expect(productPage.getPrice()).toBeVisible();
    await expect(productPage.getImage()).toBeVisible();
  });

  test("Increase/decrease quantity using +/- controls", async ({
    toolShop,
    productPage,
  }) => {
    await toolShop.clickItem(" Combination Pliers ");

    await productPage.addQuantity();
    await productPage.addQuantity();

    expect(await productPage.getQuantity()).toEqual("3");
  });

  test("Manually enter an invalid quantity (0, negative, non-numeric)", async ({
    toolShop,
    productPage,
  }) => {
    await toolShop.clickItem(" Combination Pliers ");

    await productPage.typeInQuantity("A");

    expect(await productPage.getQuantity()).toEqual("1");
  });

  test("Add product to cart from detail page", async ({
    toolShop,
    productPage,
  }) => {
    await toolShop.clickItem(" Combination Pliers ");

    await productPage.clickAddToCart();
    expect(await productPage.getCartQuantity()).toEqual("1");
  });

  test("Add an out-of-stock product to cart (if applicable)", async ({
    toolShop,
    productPage,
  }) => {
    await toolShop.clickItem(" Long Nose Pliers ");

    await expect(productPage.getAddToCart()).toBeDisabled();
  });

  test("View related/similar products section (if present)", async ({
    toolShop,
    productPage,
  }) => {
    await toolShop.clickItem(" Combination Pliers ");

    await expect(productPage.getAddToCart()).toBeVisible();
    expect(await productPage.getFirstCard()).toHaveText(" Pliers ")

    const titles = await productPage.getRelatedProducts()

    titles.forEach((title, index) => {
      expect(title.trim()).toEqual(relatedProducts[index].name)
    })
  });

});
