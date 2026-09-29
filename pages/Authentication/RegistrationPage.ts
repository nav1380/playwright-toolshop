import { Locator, Page } from "@playwright/test";
import { registerUser, RegisterUser } from "../../testdata/registerUser";

export class RegistrationPage {
  private readonly page: Page;
  private readonly header: Locator;
  private readonly firstName: Locator;
  private readonly lastName: Locator;
  private readonly birthDate: Locator;
  private readonly country: Locator;
  private readonly postalCode: Locator;
  private readonly houseNumber: Locator;
  private readonly street: Locator;
  private readonly city: Locator;
  private readonly state: Locator;
  private readonly phoneNumber: Locator;
  private readonly email: Locator;
  private readonly password: Locator;
  private readonly registerButton: Locator;
  private readonly registerError: Locator

  constructor(page: Page) {
    this.page = page;
    this.header = this.page.getByRole("heading", {
      name: "Customer registration",
    });
    this.firstName = this.page.locator("#first_name");
    this.lastName = this.page.locator("#last_name");
    this.birthDate = this.page.locator("#dob");
    this.country = this.page.locator("#country");
    this.postalCode = this.page.locator("#postal_code");
    this.houseNumber = this.page.locator("#house_number");
    this.street = this.page.locator("#street");
    this.city = this.page.locator("#city");
    this.state = this.page.locator("#state");
    this.phoneNumber = this.page.locator("#phone");
    this.email = this.page.locator("#email");
    this.password = this.page.locator("#password");
    this.registerButton = this.page.getByRole("button", { name: "Register " });
    this.registerError = this.page.locator('[data-test="register-error"]')
  }

  getRegistrationHeader() {
    return this.header;
  }

  async clickRegister() {
    await this.registerButton.click();
  }

  async enterDetails(user: RegisterUser) {
    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.birthDate.fill(user.dateOfBirth);
    await this.country.selectOption({ value: user.country });
    await this.postalCode.fill(user.postalCode);
    await this.houseNumber.fill(user.houseNumber);
    await this.street.fill(user.street);
    await this.city.fill(user.city);
    await this.state.fill(user.state);
    await this.phoneNumber.fill(user.phone);
    await this.email.fill(user.email);
    await this.password.fill(user.password);
  }

  getErrorMessage() {
    return this.registerError;
  }

}
