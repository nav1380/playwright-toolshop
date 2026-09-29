import { expect, Locator, Page } from "@playwright/test";

export class Toolshop {
  private readonly page: Page;
  private readonly pageLogo: Locator;
  private readonly signInBtn: Locator;
  private readonly searchInput: Locator;
  private readonly searchButton: Locator;
  private readonly itemTitles: Locator;
  private readonly sort: Locator;
  private readonly firstCard: Locator;
  private readonly card: Locator;
  private readonly banner: Locator;
  private readonly navBurgerBtn: Locator;
  private readonly mobileNavbar: Locator;
  private readonly itemPrices: Locator;
  private readonly noItemsText: Locator;
  private readonly searchedText: Locator;
  private readonly sortOption: Locator;
  private readonly cart: Locator

  constructor(page: Page) {
    this.page = page;
    this.pageLogo = this.page.locator(
      '[title="Practice Software Testing - Toolshop"]',
    );
    this.signInBtn = this.page.getByRole("link", { name: "Sign in" });
    this.searchInput = this.page.locator("#search-query");
    this.searchButton = this.page.getByRole("button", { name: "Search" });
    this.itemTitles = this.page.locator(".card-title");
    this.sort = this.page.locator(".grid-title");
    this.firstCard = this.page.locator(".card-title").first();
    this.card = this.page.locator(".card");
    this.banner = this.page.locator('[class="img-fluid"]');
    this.navBurgerBtn = this.page.getByRole("button", {
      name: "Toggle navigation",
    });
    this.mobileNavbar = this.page.locator("#navbarSupportedContent");
    this.itemPrices = this.page.locator('[data-test="product-price"]');
    this.noItemsText = this.page.getByTestId("no-results");
    this.searchedText = this.page.getByTestId("search-term");
    this.sortOption = this.page.locator('[data-test="sort"]');
    this.cart = this.page.getByTestId('nav-cart')
  }

  async goToCart() {
    await this.cart.click()
  }

  async navigatePagination(link: string) {
    await this.page.locator('.page-link', { hasText: link }).click()
  }

  getMobileNavbar() {
    return this.mobileNavbar;
  }

  async selectOption(label: string) {
    await this.sortOption.selectOption({ label: label });
  }

  async clickNavBurgerBtn() {
    await this.navBurgerBtn.click();
  }

  async filterItem(item: string) {
    await this.page.getByRole("checkbox", { name: item }).click();
  }

  async goToToolshop() {
    await this.page.goto("https://practicesoftwaretesting.com/");
    await expect(this.pageLogo).toBeVisible();
  }

  async goToSignIn() {
    await expect(this.signInBtn).toBeVisible();
    await this.signInBtn.click();
    await expect(
      this.page.getByRole("heading", { name: "Login" }),
    ).toBeVisible();
  }

  async searchItem(item: string) {
    await this.searchInput.fill(item);
    await this.searchButton.click();
  }

  async getItemTitles() {
    await expect(this.page.locator(".co2-rating-scale").first()).toBeVisible();
    return this.itemTitles.allTextContents();
  }

  async getItemPrices() {
    await expect(this.page.locator(".co2-rating-scale").first()).toBeVisible();
    return this.itemPrices.allTextContents();
  }

  async clickSearch() {
    await this.searchButton.click();
  }

  async clickItem(item: string) {
    const itemName = this.page.locator(".card-title");
    const itemMatch = itemName.filter({ hasText: item }).first();
    await itemMatch.click();
  }

  getFirstCard() {
    return this.firstCard;
  }

  getCards() {
    return this.card;
  }

  getSort() {
    return this.sort.first();
  }

  getBanner() {
    return this.banner;
  }

  getNoItemsText() {
    return this.noItemsText;
  }

  async getSearchedText() {
    return await this.searchedText.innerText();
  }

  async clickHeader(locator: string) {
    await this.page.locator(locator).click();
  }

  getElement(locator: string) {
    return this.page.locator(locator);
  }

  async clickFooter(locator: string) {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent("page"),
      this.page.getByTestId(locator).click(),
    ]);
    await newPage.waitForLoadState();
    return newPage;
  }

  getURL() {
    return this.page.url();
  }

  async clickFilterCategory(locator: string) {
    await this.page.locator("label", { hasText: locator }).click();
  }

  async clickFilterBrand(locator: string) {
    await this.page.locator("label", { hasText: locator }).click();
  }

  async adjustViewportSize() {
    await this.page.setViewportSize({ width: 375, height: 812 });
  }

  async clickNavigationBtn(locator: string) {
    await this.page.getByRole('button', { name: locator })
  }

}
