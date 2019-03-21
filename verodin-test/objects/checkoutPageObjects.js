import { Selector } from 'testcafe'

export default class checkoutPageObjects{
    constructor(){
        
        this.productSummary = Selector('#summary_products_quantity')

    }
}