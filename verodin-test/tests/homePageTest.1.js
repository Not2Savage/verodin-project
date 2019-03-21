import { Selector } from 'testcafe'

const searchInput = Selector('#searchbox > input.search_query')
const searchButton = Selector('#searchbox > button')
const searchResults = Selector('div.product-container')

const dressesTab = Selector('#block_top_menu > ul> li:nth-child(2)')
const dressOne = Selector("#center_column > ul > li:nth-child(1)")
const dressTwo = Selector('#center_column > ul > li:nth-child(2)')
const addToCartButton1 = Selector('[data-id-product="3"]')
const addToCartButton2 = Selector('[data-id-product="4"]')
const continueShopping = Selector('[title="Continue shopping"]')
const proceedToCheckout = Selector('[title="Proceed to checkout"]')
const productSummary = Selector('#summary_products_quantity')

const signInBannerButton = Selector('[class="login"]')
const signInSubmitButton = Selector('#SubmitLogin')
const signInEmailInput = Selector('#email')
const signInPasswordInput = Selector('#passwd')
const createAccountButton = Selector('#SubmitCreate')
const createEmailInput = Selector('#email-create')
 
let r = Math.random().toString(36).substring(7)
let email = "test+" + r + "@gmail.com"
let password = r

fixture(`key functionality smoke test`)
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
        console.log("random"+r)
})

test(`user can create account`, async t =>{
    await t
        .click(signInBannerButton)
        .typeText(createEmailInput, email)
        .click(createAccountButton)
})
