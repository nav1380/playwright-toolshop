import { test, expect } from "../fixtures/fixtures";
import { products } from "../testdata/items";
import { mightyCraftHardware } from "../testdata/items";
import { nameFilter, priceFilter } from "../testdata/filters";
import { paginationProducts } from "../testdata/items";

test.describe("Product Catalog (Listing, Search, Filter, Sort)", () => {
  test("Product listing loads with images, name, and price", async ({
    toolShop,
  }) => {
    const titles = await toolShop.getItemTitles();
    const prices = await toolShop.getItemPrices();

    titles.forEach((title, index) => {
      expect(title.trim()).toEqual(products[index].name);
    });

    prices.forEach((price, index) => {
      expect(price.trim()).toEqual(products[index].price);
    });
  });

  test("Search for an existing product by name", async ({ toolShop }) => {
    await toolShop.searchItem(" Thor Hammer ");
    await toolShop.clickSearch();

    await expect(toolShop.getFirstCard()).toHaveText(" Thor Hammer ");
  });

  test("Search for a non-existent product", async ({ toolShop }) => {
    await toolShop.searchItem("Does not exist");
    await toolShop.clickSearch();

    expect(await toolShop.getSearchedText()).toContain("Does not exist");
    await expect(toolShop.getFirstCard()).toBeHidden();

    await expect(toolShop.getNoItemsText()).toBeVisible();
  });

  test("Clear search resets to full listing", async ({ toolShop }) => {
    await toolShop.clickSearch();

    const titles = await toolShop.getItemTitles();
    titles.forEach((title, index) => {
      expect(title.trim()).toEqual(products[index].name);
    });
  });

  test("Filter by a single category", async ({ toolShop }) => {
    await toolShop.clickFilterCategory("Sander");
    await expect(toolShop.getFirstCard()).toHaveText(" Sheet Sander ");
  });

  test("Filter by a single brand", async ({ toolShop }) => {
    await toolShop.clickFilterBrand("MightyCraft Hardware");

    await expect(toolShop.getFirstCard()).toHaveText(" Claw Hammer ");
    const titles = await toolShop.getItemTitles();

    titles.forEach((title, index) => {
      expect(title.trim()).toEqual(mightyCraftHardware[index]);
    });
  });

  test("Filter by multiple categories/brands simultaneously", async ({
    toolShop,
  }) => {
    await toolShop.clickFilterBrand("MightyCraft Hardware");
    await toolShop.clickFilterCategory("Sander");

    await expect(toolShop.getFirstCard()).toHaveText(" Belt Sander ");
  });

  test("Clear all filters", async ({ toolShop }) => {
    await toolShop.clickFilterBrand("Power Tools");

    await toolShop.clickFilterBrand("Power Tools");
    const titles = await toolShop.getItemTitles();

    titles.forEach((title, index) => {
      expect(title.trim()).toEqual(products[index].name);
    });
  });

  for (const { scenario, label, expected } of nameFilter) {
    test(`Sort by name on ${scenario}`, async ({ toolShop }) => {
      await toolShop.selectOption(label);
      await expect(toolShop.getFirstCard()).toHaveText(expected);
    });
  }

  for (const { scenario, label, expected } of priceFilter) {
    test(`Sort by price on ${scenario}`, async ({ toolShop }) => {
      await toolShop.selectOption(label);
      await expect(toolShop.getFirstCard()).toHaveText(expected);
    });
  }

  test(`Pagination — navigate to next/previous page`, async ({ toolShop }) => {
    await toolShop.navigatePagination("3");
    await expect(toolShop.getFirstCard()).toHaveText(
      " Chisels Set ",
    );

    const titles = await toolShop.getItemTitles();

    titles.forEach((title, index) => {
      expect(title.trim()).toEqual(paginationProducts[index].name);
    });
  });

  test(`Combine search + filter + sort together`, async ({ toolShop }) => {
    await toolShop.clickFilterBrand("MightyCraft Hardware");
    await toolShop.clickFilterCategory("Pliers");
    await toolShop.selectOption("Price (High - Low)");

    await expect(toolShop.getFirstCard()).toHaveText(" Bolt Cutters ");
  });
});
