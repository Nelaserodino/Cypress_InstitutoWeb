/// <reference types="Cypress" />
//commands: escribir= reemplaza a .get() .clear() .type()

describe('Test del Checkout', () => {
  let datos_prueba;

  beforeEach('conexión con la web', ()=>{
    //cy.viewport(700,1500)
    cy.visit('https://www.institutoweb.com.ar/test/test2/checkout')
      cy.fixture('./datos')
      .then(datos_test => {  // recibiendo todo el archivo de datos 
          datos_prueba = datos_test  // todos los renglones del json
      })
  })

  it('Completar el Form.', () => {
    
   datos_prueba.forEach((datos)=>{ // un renglon a la vez = forEach
        cy.fixture('./selectores').then(selectores =>{
          cy.escribir(selectores.nombre   , datos.test_nombre);
          cy.escribir(selectores.apellido , datos.test_apellido);
          cy.escribir(selectores.usuario  , datos.test_usuario);
          cy.escribir(selectores.email  , datos.test_email);
          cy.escribir(selectores.domicilio, datos.domicilio);
          cy.escribir(selectores.domicilio2,datos.domicilio2);
          cy.get(selectores.pais).select(datos.pais);
          cy.get(selectores.provincia).select(datos.provincia);
          cy.escribir(selectores.cod_postal, datos.cod_postal);
          cy.get(selectores.misma_direccion).check();
          cy.get(selectores.debito).check();
          cy.get(selectores.guardar_info).check();
          cy.escribir(selectores.tarjeta, datos.tarjeta);
          cy.escribir(selectores.nro_tarjeta,datos.nro_tarjeta);
          cy.escribir(selectores.exp_tarjeta,datos.exp_tarjeta);
          cy.escribir(selectores.cvv_tarjeta,datos.cvv_tarjeta);
          cy.get(selectores.btn_continuar).click();
          cy.get(selectores.titulo_h3).click();
          cy.get(selectores.btn_volver).click();

  })
})
   
  })

})