import { Selector } from 'testcafe'

export default class dressesPageObjects{
    constructor(){
        
        this.dressOne = Selector("#center_column > ul > li:nth-child(1)")
        this.dressTwo = Selector('#center_column > ul > li:nth-child(2)')
        this.addToCartButton1 = Selector('[data-id-product="3"]')
        this.addToCartButton2 = Selector('[data-id-product="4"]')
        this.continueShopping = Selector('[title="Continue shopping"]')
        this.proceedToCheckout = Selector('[title="Proceed to checkout"]')
    }
}