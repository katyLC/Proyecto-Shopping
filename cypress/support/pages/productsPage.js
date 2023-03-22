
export class ProductPage{
    constructor() {
        this.closeModal = '#closeModal';
        this.cartButton = '#goShoppingCart';
    };
    

    agregarProductos(producto){
        console.log(producto)
        cy.get(`[value="${producto}"]`).click();
        cy.get(this.closeModal).click();
    }

    clickShopingCard() {
        cy.get(this.cartButton).click();
    }
}

