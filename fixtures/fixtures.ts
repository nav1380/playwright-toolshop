import { test as base, expect } from "@playwright/test";
import { Toolshop } from "../pages/Landing/Toolshop";
import { ProductPage } from "../pages/Product/ProductPage";
import { LoginPage } from "../pages/Authentication/LoginPage";
import { DashboardPage } from "../pages/Dashboard/DashboardPage";
import { RegistrationPage } from "../pages/Authentication/RegistrationPage";
import { CartPage } from "../pages/Cart/CartPage";
import { CheckoutPage } from "../pages/Checkout/CheckoutPage";
import { registerUser } from "../testdata/registerUser";

type Fixtures = {
  loggedInUser: Toolshop;
  toolShop: Toolshop;
  productPage: ProductPage;
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  registrationPage: RegistrationPage;
  registeredUser: RegistrationPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
};

export const test = base.extend<Fixtures>({
  toolShop: async ({ page }, use) => {
    const toolshop = new Toolshop(page);
    await toolshop.goToToolshop();

    await use(toolshop);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },
  loggedInUser: async ({ page, toolShop, loginPage }, use) => {
    const loggedInUser = new Toolshop(page);

    await toolShop.goToSignIn();
    await loginPage.goToRegistration();

    const registrationPage = new RegistrationPage(page);
    await registrationPage.enterDetails(registerUser);
    await registrationPage.clickRegister();

    await expect(loginPage.getLoginHeader()).toBeVisible();
    await loginPage.enterEmail(registerUser.email);
    await loginPage.enterPassword(registerUser.password);
    await loginPage.clickLogin();

    await use(loggedInUser);
  },
  registeredUser: async ({ page, toolShop, loginPage }, use) => {
    const loggedInUser = new Toolshop(page);

    await toolShop.goToSignIn();
    await loginPage.goToRegistration();

    const registrationPage = new RegistrationPage(page);
    await registrationPage.enterDetails(registerUser);
    await registrationPage.clickRegister();

    await loginPage.goToRegistration();
    await registrationPage.enterDetails(registerUser);
    await registrationPage.clickRegister();
  },
  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);

    await use(productPage);
  },
  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);

    await use(dashboardPage);
  },
  registrationPage: async ({ page }, use) => {
    const registrationPage = new RegistrationPage(page);

    await use(registrationPage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);

    await use(cartPage);
  },
  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);

    await use(checkoutPage);
  },
});

export { expect } from "@playwright/test";
