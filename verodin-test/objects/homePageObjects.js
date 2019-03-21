import { Selector } from 'testcafe'

export default class homePageObjects{
    constructor(){
        
        this.searchInput = Selector('#searchbox > input.search_query')
        this.searchButton = Selector('#searchbox > button')
        this.dressesTab = Selector('#block_top_menu > ul> li:nth-child(2)')
        this.signInBannerButton = Selector('[class="login"]')
    }
}