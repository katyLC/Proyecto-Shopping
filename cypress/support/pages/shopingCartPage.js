
export class ShoppingCardPage{

    constructor(){
            this.nombrelabel = "#productName",
            this.preciolabel= "#productPrice"
            //this.showtotalPrice = "Show total price"
    }

    // validarNombre(nombre){
    //     cy.get(this.nombrelabel).invoke("text").then(texto=>{
    //         expect(texto).is.equal(nombre)
    //     })
    // }

    mostrarPreciototal (){

        cy.xpath("//button[text()='Show total price']").click();

    }
}
