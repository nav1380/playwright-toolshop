import { test, expect } from '../fixtures/fixtures'
import { footerCases } from '../testdata/footers';
import { navigationCases } from '../testdata/navigation';

test.describe('Navigation & Home Page', () => {

    test('Logo click from any page', async({ toolShop, productPage }) => {
        await toolShop.clickItem(" Bolt Cutters ");

        await productPage.clickLogo()
        await expect(toolShop.getBanner()).toBeVisible()
    })

    for( const { scenario, locator, expectedLocator } of navigationCases ) {
        test(`Header nav links to ${scenario} route correctly`, async({ toolShop }) => {
            await toolShop.clickHeader(locator);

            await expect(toolShop.getElement(expectedLocator)).toBeVisible()
        })
    }

    for ( const { scenario, locatorText, expectedURL } of footerCases) {
        test(`Footer links for ${scenario} are functional`, async({ toolShop }) => {
            const newPage = await toolShop.clickFooter(locatorText);

            await expect(newPage).toHaveURL(expectedURL)
        })
    }

    test('Cart icon shows correct item count badge', async ({ toolShop, productPage }) => {
        await toolShop.clickItem(' Slip Joint Pliers ')
        await productPage.clickAddToCart();

        expect(await productPage.getCartQuantity()).toEqual('1')
    })

    test('Responsive nav / hamburger menu on mobile viewport', async ({ toolShop }) => {
        await toolShop.adjustViewportSize()

        await toolShop.clickNavBurgerBtn()
        await expect(toolShop.getMobileNavbar()).toBeVisible()
    })

})