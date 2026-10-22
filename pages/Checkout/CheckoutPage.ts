import { Locator, Page } from "@playwright/test";

export class CheckoutPage {

    private readonly page: Page
    private readonly login: Locator
    private readonly continueAsGuest: Locator
    private readonly guestParagraph: Locator
    private readonly loggedInParagraph: Locator

    constructor(page: Page) {
        this.page = page;
        this.login = this.page.getByRole('heading', { name: 'Login' })
        this.continueAsGuest = this.page.getByRole('tab', { name: 'Continue as Guest' })
        this.guestParagraph = this.page.getByText("Checkout without creating an account")
        this.loggedInParagraph = this.page.locator('p.ng-star-inserted')
    }

    getLoginHeader() {
        return this.login
    }

    async clickContinueAsGuest() {
        await this.continueAsGuest.click()
    }

    getGuestParagraph() {
        return this.guestParagraph
    }

    getLoggedInParagraph() {
        return this.loggedInParagraph
    }

}