import { Locator, Page } from "@playwright/test";

export class LoginPage {

    private readonly page: Page;
    private readonly email: Locator;
    private readonly password: Locator;
    private readonly loginButton: Locator
    private readonly registerButton: Locator
    private readonly header: Locator

    constructor(page: Page) {
        this.page = page
        this.email = this.page.locator('[id="email"]')
        this.password = this.page.locator('[id="password"]')
        this.loginButton = this.page.getByRole('button', { name: 'Login' })
        this.registerButton = this.page.getByRole('link', { name: 'Register your account' })
        this.header = this.page.getByRole('heading', { name: 'Login' })
    }

    async enterEmail(usernameInput: string) {
        await this.email.type(usernameInput)
    }

    async enterPassword(passwordInput: string) {
        await this.password.type(passwordInput)
    }

    async clickLogin() {
        await this.loginButton.click()
    }

    async goToRegistration() {
        await this.registerButton.click()
    }

    getLoginHeader() {
        return this.header;
    }

    getErrorMessage(locator: string) {
        return this.page.locator(locator)
    }

}