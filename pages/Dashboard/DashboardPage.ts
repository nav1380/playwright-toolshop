import { Locator, Page } from "@playwright/test";


export class DashboardPage {

    private readonly page: Page;
    private readonly accountHeader: Locator
    private readonly home: Locator

    constructor(page: Page) {
        this.page = page;
        this.accountHeader = this.page.getByRole('heading', { name: 'My account' })
        this.home = this.page.getByRole('link', { name: 'Home' })
    }

    getAccountHeader() {
        return this.accountHeader;
    }

    getURL() {
        return this.page.url()
    }

    async goToHome() {
        await this.home.click()
    }

}