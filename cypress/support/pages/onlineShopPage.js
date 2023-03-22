
export class OnlineShopPage {


    constructor(){ 

        this.onlineShopLink = '#onlineshoplink'
    }
    clickOnlineShop(){
        cy.get(this.onlineShopLink).click();
    }
}