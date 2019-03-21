import { Selector } from 'testcafe'

export default class searchPageObjects{
    constructor(){
        
        this.searchResults = Selector('div.product-container')
    }
}