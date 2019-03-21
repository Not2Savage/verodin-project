import { Selector } from 'testcafe'
import homePageObjects from '../objects/homePageObjects';
import dressesPageObjects from '../objects/dressesPageObjects';
import checkoutPageObjects from '../objects/checkoutPageObjects';
import searchPageObjects from '../objects/searchPageObjects';

const home = new homePageObjects
const dresses = new dressesPageObjects
const checkout = new checkoutPageObjects
const search = new searchPageObjects
 
let r = Math.random().toString(36).substring(7)
let email = "test+" + r + "@gmail.com"
let password = r

fixture(`key functionality smoke test`)
    .page(`http://automationpractice.com/`)

test(`user can search desired clothing and is returned`, async t => {
    await t
        .typeText(home.searchInput, "blouse")
        .click(home.searchButton)
        .expect(search.searchResults.count).eql(1)
})

test(`user can add items to cart`, async t => {
    await t
        .click(home.dressesTab)
        .hover(dresses.dressOne)
        .click(dresses.addToCartButton1)
        .click(dresses.continueShopping)
        .hover(dresses.dressTwo)
        .click(dresses.addToCartButton2)
        .click(dresses.proceedToCheckout)
        .expect(checkout.productSummary.withText("2 Products").exists).ok()
        console.log("random"+r)
})
/*
test(`user can create account`, async t =>{
    await t
        .click(signInBannerButton)
        .typeText(createEmailInput, email)
        .click(createAccountButton)
})
*/
