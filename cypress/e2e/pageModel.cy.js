
/// <reference types="cypress"/>

import { RegisterPage } from '../support/pages/registerPage'
import { OnlineShopPage } from '../support/pages/onlineShopPage';
import { ProductPage } from '../support/pages/productsPage';
import { ShoppingCardPage } from '../support/pages/shopingCartPage';

describe('Page objetc Model' ,()=> {
    let Data;
    let Productos;
    const registerPage = new RegisterPage();
    const onlineShopPage = new OnlineShopPage();
    const productsPage = new ProductPage();
    const shoppingCardPage = new ShoppingCardPage();

    before('Before',()=>{
        cy.fixture("datos").then(data => {
            Data=data
        });

       
    });

    before('productos',()=>{
        cy.fixture("productos").then(productos=> {
            Productos = productos;
        })
    })


    beforeEach("precondiciones",()=>{
        cy.visit('');
        registerPage.dblClickIniciarSesion();
        cy.get("[id^='use']").should('exist').type(Data.test.Data.usuario);
        cy.get("[id^='pas']").should('exist').type(Data.test.Data.contrasena);
        cy.contains('Log in').click();
      

    })

    it("Agregar Productos", ()=> {
        onlineShopPage.clickOnlineShop();
       Productos.map(producto =>{
        productsPage.agregarProductos(producto.nombre)
       })
        productsPage.clickShopingCard();

        // Productos.map(producto=>{
        //     shoppingCardPage.validarNombre(producto.nombre);
        // })

        shoppingCardPage.mostrarPreciototal();
    })

    
    
    
})