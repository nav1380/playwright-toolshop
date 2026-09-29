import { test as base } from "@playwright/test";
import { Toolshop } from "../pages/Landing/Toolshop";
import { ProductPage } from "../pages/Product/ProductPage";
import { LoginPage } from "../pages/Authentication/LoginPage";
import { DashboardPage } from "../pages/Dashboard/DashboardPage";
import { RegistrationPage } from "../pages/Authentication/RegistrationPage";
import { CartPage } from "../pages/Cart/CartPage";

type Fixtures = {
  toolShop: Toolshop;
  productPage: ProductPage;
  loginPage: LoginPage
  dashboardPage: DashboardPage
  registrationPage: RegistrationPage
  cartPage: CartPage
};

export const test = base.extend<Fixtures>({
  toolShop: async ({ page }, use) => {
    const toolshop = new Toolshop(page);
    await toolshop.goToToolshop();

    await use(toolshop);
  },
  loginPage: async ({page}, use) => {
    const loginPage = new LoginPage(page)

    await use(loginPage)
  },
  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);

    await use(productPage);
  },
  dashboardPage: async ({page}, use) => {
    const dashboardPage = new DashboardPage(page);
    
    await use(dashboardPage)
  },
  registrationPage: async ({page}, use) => {
    const registrationPage = new RegistrationPage(page)

    await use(registrationPage)
  },
  cartPage: async ({page}, use) => {
    const cartPage = new CartPage(page)

    await use(cartPage)
  }
});

export { expect } from "@playwright/test";
