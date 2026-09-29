import { th } from "@faker-js/faker";
import { Locator, Page } from "@playwright/test";

export class CartPage {
  private readonly page: Page;
  private readonly items: Locator;
  private readonly quantity: Locator;
  private readonly proceedToCheckoutBtn: Locator;
  private readonly home: Locator;
  private readonly banner: Locator;
  private readonly emptyHeader: Locator;
  private readonly deletedBanner: Locator

  constructor(page: Page) {
    this.page = page;
    this.items = this.page.locator(".product-title");
    this.quantity = this.page.getByTestId("product-quantity");
    this.proceedToCheckoutBtn = this.page.getByRole("button", {
      name: "Proceed to checkout",
    });
    this.home = this.page.getByRole("link", { name: "Home" });
    this.banner = this.page
      .locator("div")
      .filter({ hasText: "Product added to shopping" });
    this.emptyHeader = this.page.getByText("The cart is empty. Nothing to display.");
    this.deletedBanner = this.page.locator('div', { hasText: ' Product deleted. ' })
  }

  async removeItem(productName: string) {
    await this.page
      .locator("tr")
      .filter({ hasText: productName })
      .locator(".btn-danger")
      .click();
  }

  getDeletedBanner() {
    return this.deletedBanner.nth(2);
  }

  getEmptyCartHeader() {
    return this.emptyHeader;
  }

  async setQuantity(count: string) {
    await this.quantity.fill(count);
  }

  getURL() {
    return this.page.url();
  }

  getAddedToCartBanner(nthCount: number) {
    return this.banner.nth(nthCount);
  }

  async getItems() {
    return await this.items.allInnerTexts();
  }

  getProceedToCheckout() {
    return this.proceedToCheckoutBtn;
  }

  async goToHome() {
    await this.home.click();
  }

  async getQuantityValues() {
    const count = await this.quantity.all();
    return await Promise.all(count.map((input) => input.inputValue()));
  }

  async getQuantity() {
    return await this.quantity.all();
  }
}
