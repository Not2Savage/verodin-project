import { Selector } from 'testcafe'
import homePageObjects from '../objects/homePageObjects';
import dressesPageObjects from '../objects/dressesPageObjects';
import checkoutPageObjects from '../objects/checkoutPageObjects';
import searchPageObjects from '../objects/searchPageObjects';
import createAccountPageObjects from '../objects/createAccountPageObjects';

const home = new homePageObjects
const dresses = new dressesPageObjects
const checkout = new checkoutPageObjects
const search = new searchPageObjects
const createAccount = new createAccountPageObjects

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
})

test(`user can create account`, async t =>{
    await t
        .click(home.signInBannerButton)
        .typeText(createAccount.emailSignUpInput, email)
        .click(createAccount.emailSignUpSubmit)
        .click(createAccount.titleRadioMale)
        .typeText(createAccount.firstNameInput, "Hunter")
        .typeText(createAccount.lastNameInput, "Savage")
        .expect(createAccount.emailInput.value).eql(email)
        .typeText(createAccount.passwordInput, password)
        .click(createAccount.dobDay)
        .click(createAccount.dobDayOption.withText('11'))
        .click(createAccount.dobMonth)
        .click(createAccount.dobMonthOption.withText('March'))
        .click(createAccount.dobYear)
        .click(createAccount.dobYearOption.withText('1991'))
        .expect(createAccount.addressFirstName.value).eql("Hunter")
        .expect(createAccount.addressLastName.value).eql("Savage")
        .typeText(createAccount.addressCompany, "Verodin")
        .typeText(createAccount.addressAddress1, "123 Testing Ln")
        .typeText(createAccount.addressAddress2, "PO Box 1234")
        .typeText(createAccount.addressCity, "Rockville")
        .click(createAccount.addressState)
        .click(createAccount.addressStateOption.withText('Maryland'))
        .typeText(createAccount.addressZip, "20850")
        .click(createAccount.addressCountry)
        .click(createAccount.addressCountryOption.withText('United States'))
        .typeText(createAccount.homePhone, "123-456-7890")
        .typeText(createAccount.mobilePhone, "098- 765-4321")
        .selectText(createAccount.addressAlias).pressKey('delete').typeText(createAccount.addressAlias, "Home")
        .click(createAccount.registerButton)
        .expect(Selector("title").innerText).eql('My account - My Store')
    })

