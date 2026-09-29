import { Locator, Page } from "@playwright/test";


export class DashboardPage {

    private readonly page: Page;
    private readonly accountHeader: Locator

    constructor(page: Page) {
        this.page = page;
        this.accountHeader = this.page.getByRole('heading', { name: 'My account' })
    }

    getAccountHeader() {
        return this.accountHeader;
    }

    getURL() {
        return this.page.url()
    }

}