import { Selector, ClientFunction } from 'testcafe'

const searchInput = Selector('#searchbox > input.search_query')
const searchButton = Selector('#searchbox > button')
const searchResults = Selector('div.product-container')

const dressesTab = Selector('#block_top_menu > ul> li:nth-child(2)')
const dressOne = Selector("#center_column > ul > li:nth-child(1)")
const dressTwo = Selector('#center_column > ul > li:nth-child(2)')
const addToCartButton1 = Selector('[data-id-product="3"]')
const addToCartButton2 = Selector('[data-id-product="4"')
const continueShopping = Selector('[title="Continue shopping"]')
const proceedToCheckout = Selector('[title="Proceed to checkout"]')
const productSummary = Selector('#summary_products_quantity')

fixture(`setup`)
    .page(`http://automationpractice.com/`)

test(`user can search desired clothing and is returned`, async t => {
    await t
        .typeText(searchInput, "blouse")
        .click(searchButton)
        .expect(searchResults.count).eql(1)
})

test(`user can add items to cart`, async t => {
    await t
        .click(dressesTab)
        .hover(dressOne)
        .click(addToCartButton1)
        .click(continueShopping)
        .hover(dressTwo)
        .click(addToCartButton2)
        .click(proceedToCheckout)
        .expect(productSummary.withText("2 Products").exists).ok()
})