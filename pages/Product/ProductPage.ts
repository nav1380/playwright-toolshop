import { Locator, Page } from "@playwright/test";

export class ProductPage {
  private readonly page: Page;
  private readonly header: Locator;
  private readonly logo: Locator;
  private readonly addToCart: Locator;
  private readonly cartQuantity: Locator;
  private readonly price: Locator;
  private readonly description: Locator;
  private readonly image: Locator;
  private readonly minusQuantity: Locator;
  private readonly increaseQuantity: Locator;
  private readonly quantity: Locator;
  private readonly cardTitle: Locator;
  private readonly relatedHeading: Locator;
  private readonly cart: Locator;
  private readonly home: Locator;
  private readonly alert: Locator

  constructor(page: Page) {
    this.page = page;
    this.header = this.page.locator('[data-test="product-name"]');
    this.logo = this.page.locator(
      '[title="Practice Software Testing - Toolshop"]',
    );
    this.addToCart = this.page.getByTestId("add-to-cart");
    this.cartQuantity = this.page.getByTestId("cart-quantity");
    this.price = this.page.locator(".price-section");
    this.description = this.page.locator("#description");
    this.image = this.page.locator(".card-img-wrapper");
    this.minusQuantity = this.page.locator("#btn-decrease-quantity");
    this.increaseQuantity = this.page.locator("#btn-increase-quantity");
    this.quantity = this.page.locator("#quantity-input");
    this.cardTitle = this.page.locator(".card-title");
    this.relatedHeading = this.page.getByRole("heading", {
      name: "Related products",
    });
    this.cart = this.page.getByTestId("nav-cart");
    this.home = this.page.getByRole("link", { name: "Home" });
    this.alert = this.page.getByRole('alert', { name: 'Product added to shopping cart.' })
  }

  getAddedToShoppingCartAlert() {
    return this.alert
  }

  async goToHome() {
    await this.home.click();
  }

  async goToCart() {
    await this.cart.click();
  }

  async getFirstCard() {
    return await this.cardTitle.first();
  }

  async typeInQuantity(input: string) {
    await this.quantity.pressSequentially(input);
  }

  async getQuantity() {
    return await this.quantity.inputValue();
  }

  async addQuantity() {
    await this.increaseQuantity.click();
  }

  async decreaseQuantity() {
    await this.minusQuantity.click();
  }

  getHeader() {
    return this.header;
  }

  getImage() {
    return this.image.first();
  }

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }

  async clickLogo() {
    await this.logo.click();
  }

  getAddToCart() {
    return this.addToCart;
  }

  async clickAddToCart() {
    await this.addToCart.click();
  }

  async getCartQuantity() {
    return await this.cartQuantity.innerText();
  }

  async getRelatedProducts() {
    return await this.cardTitle.allInnerTexts();
  }
}
