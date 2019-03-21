import { Selector } from 'testcafe'

export default class createAccountPageObjects{
    constructor(){
        
        this.emailSignInInput = Selector('#email')
        this.passwordSignInInput = Selector('#passwd')
        this.signInInput = Selector('#SubmitLogin')

        this.emailSignUpInput = Selector('#email_create')
        this.emailSignUpSubmit = Selector('#SubmitCreate')
        
        this.titleRadioMale = Selector('[for = "id_gender1"]')
        this.titleRadioFemale = Selector('[for = "id_gender2"]')
        this.firstNameInput = Selector('#customer_firstname')
        this.lastNameInput = Selector('#customer_lastname')
        this.emailInput = Selector('#email')
        this.passwordInput = Selector('#passwd')
        this.dobDay = Selector('#days')
        this.dobDayOption = this.dobDay.find('option')
        this.dobMonth = Selector('#months')
        this.dobMonthOption = this.dobMonth.find('option')
        this.dobYear = Selector('#years')
        this.dobYearOption = this.dobYear.find('option')
        this.addressFirstName = Selector('#firstname')
        this.addressLastName = Selector('#lastname')
        this.addressCompany = Selector('#company')
        this.addressAddress1 = Selector('#address1')
        this.addressAddress2 = Selector('#address2')
        this.addressCity = Selector('#city')
        this.addressState = Selector('#id_state')
        this.addressStateOption = this.addressState.find('option')
        this.addressZip = Selector('#postcode')
        this.addressCountry = Selector('#id_country')
        this.addressCountryOption = this.addressCountry.find('option')
        this.homePhone = Selector('#phone')
        this.mobilePhone = Selector('#phone_mobile')
        this.addressAlias = Selector('#alias')

        this.registerButton = Selector('#submitAccount')
    }
}