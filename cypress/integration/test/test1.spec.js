describe("VoucherCodes Test Engineer Task", function(){

    it('Search for offers in London', function() {
        cy.visit("https://www.vouchercodes.co.uk/")
        cy.url().should('eq', 'https://www.vouchercodes.co.uk/')
        cy.get('[data-ga-action="Restaurant"]')
        .contains('Food')
        .click()
        cy.url().should('eq', 'https://www.vouchercodes.co.uk/restaurant-vouchers.html')
        cy.get('[placeholder="Town or postcode"]')
        .type('London')
        .should('have.value', 'London')
        cy.get('[name="day-select"]')
        .select('Today')
        .contains('Today')
        cy.get('[name="people-select"]')
        .select('5')
        .contains('5')
        cy.get('[data-qa="el:findRestaurantsVoucherButton"]')
        .contains('Find restaurants vouchers')
        .click()
  })

  it('Find "ASOS" & "Apple" in Trending dropdown ', function() {
    
    cy.get('[data-qa="el:trendingHeader"]')
    .contains('Trending')
    .click()
    cy.get('.duration-2000')
    .contains('ASOS')
    .contains('Apple')
    

})




})