

describe("First test", () => {
    it("should visit login page", () => {
      cy.visit("/");
    });

    it("app should has tsh-root element", () => {
        cy.get('tsh-root')
    })

    it("should go to auth page", () => {
        cy.get('.btn-white').click();
        cy.url('auth');
    })

    it("should come back to products list", () => {
       cy.get('h3').click();
       cy.url(''); 
    })

    it("should search 'car' products", () => {
        cy.get('input').type('Car')
        cy.get('.bi-search').click();

        cy.get('h4').should('have.length', 8)
        cy.get('h4').contains('Car')
     })
  });