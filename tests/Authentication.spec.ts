import { test, expect } from "../fixtures/fixtures";
import { invalidCases } from "../testdata/invalidUsers";
import { users } from "../testdata/users";
import { registerUser } from "../testdata/registerUser";
import { invalidRegisteredUser } from "../testdata/registerUser";

test.describe("Authentication", () => {
  test("Log in with valid registered credentials", async ({
    toolShop,
    loginPage,
    dashboardPage,
  }) => {
    await toolShop.goToSignIn();
    await loginPage.enterEmail(users.email);
    await loginPage.enterPassword(users.password);
    await loginPage.clickLogin();
    await expect(dashboardPage.getAccountHeader()).toBeVisible();
  });
  for (const { email, password, locator, expected, scenario } of invalidCases) {
    test(`Log in with ${scenario}`, async ({ toolShop, loginPage }) => {
      await toolShop.goToSignIn();
      await loginPage.enterEmail(email);
      await loginPage.enterPassword(password);
      await loginPage.clickLogin();
      await expect(loginPage.getErrorMessage(locator)).toContainText(expected)
    });
  }
  test('"Sign in" link/button navigates to /account', async ({
    toolShop,
    loginPage,
    dashboardPage,
  }) => {
    await toolShop.goToSignIn();
    await loginPage.enterEmail(users.email);
    await loginPage.enterPassword(users.password);
    await loginPage.clickLogin();
    await expect(dashboardPage.getAccountHeader()).toBeVisible();
    await expect(dashboardPage.getURL()).toContain("account");
  });
});

test.describe("Account Registration", () => {
  test("Register a new account with valid unique data", async ({
    toolShop,
    loginPage,
    registrationPage,
    dashboardPage
  }) => {
    await toolShop.goToSignIn();
    await loginPage.goToRegistration();
    await expect(registrationPage.getRegistrationHeader()).toBeVisible();
    await registrationPage.enterDetails(registerUser);
    await registrationPage.clickRegister();
    await expect(loginPage.getLoginHeader()).toBeVisible();

    await loginPage.enterEmail(registerUser.email);
    await loginPage.enterPassword(registerUser.password);
    await loginPage.clickLogin()

    await expect(dashboardPage.getAccountHeader()).toBeVisible()
  });

  test("Register with an email that already exists", async ({
    toolShop,
    loginPage,
    registrationPage,
  }) => {
    await toolShop.goToSignIn();
    await loginPage.goToRegistration();
    await expect(registrationPage.getRegistrationHeader()).toBeVisible();
    await registrationPage.enterDetails(invalidRegisteredUser);
    await registrationPage.clickRegister();
    await expect(registrationPage.getErrorMessage()).toContainText('A customer with this email address already exists.');
  });
  
  

});
