describe('cypress implementation', () => {
  it('Visits the llyods bank website', () => {
  cy.visit('https://www.lloydsbank.com/products-and-services.html')
  })


  it('Verifies personal banking page', () => {
  cy.get('.current.business-nav-li > .current').click();
  cy.get('[href="/products-and-services.html"] > .btn-text')
  .should('have.text','Products and services')
  cy.get('[data-tealium-narrative="Help and support"] > .btn-text')
  .should('have.text','Help and support')
    cy.get('[data-tealium-narrative="Banking with us"] > .btn-text')
     .should('have.text','Banking with us')
     cy.get('[data-tealium-narrative="Banking online"] > .btn-text')
    .should('have.text','Banking online')

    })


    it('Verifies business banking page', () => {
     cy.get('[data-selector="list-item-1"] > .business-nav-a').click();
     cy.get(':nth-child(2) > [href="/business/retail-business.html"] > .btn-text')
       .should('have.text','£0-£3m turnover')
     cy.get(':nth-child(3) > [href="/business/commercial-banking.html"] > .btn-text')
       .should('have.text','£3m-£25m turnover')
     cy.get('[href="https://commercialbanking.lloydsbank.com"] > .btn-text')
          .should('have.text','£25m+ turnover')
     cy.get('[href="https://resources.lloydsbank.com"] > .btn-text')
         .should('have.text','Resource Centre')
     cy.get(':nth-child(6) > [data-tealium-narrative="Banking online"] > .btn-text')
                  .should('have.text','Banking online')


      })


      it('Verifies private banking page', () => {
      cy.get('[data-selector="list-item-2"] > .business-nav-a').click();
         cy.scrollTo('bottom')
         cy.get('.btt-text-full')
         .should('have.text','Back to top')
          cy.scrollTo('top')
        })
       it('Verifying international banking',() => {
      cy.get('[data-selector="list-item-3"] > .business-nav-a > .btn-text').click();
       cy.get('[href="#search-head"]').click();
       cy.get('#ctl00_Header_searchfield')
       .type('llyods bank')
       cy.get('#ctl00_Header_searchbutton').click();

       })
})