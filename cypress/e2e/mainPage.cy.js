describe('Visiting the main page', () => {
  before(() => {
    cy.setLocalStorage('temperature-store-Warsaw', JSON.stringify([
      {
        temperature: -4,
        id: 1701853024063,
      },
      {
        temperature: -3,
        id: 1701853034063
      },
      {
        temperature: -5,
        id: 1701853044063
      },
      {
        temperature: -10,
        id: 1701853054063
      },
      {
        temperature: -20,
        id: 1701853064063
      },
    ]))
  });
  beforeEach(() => {
    cy.visit('/');
  });
  it('checks whether all important elements are present', () => {
    cy.get('h1').should('contain.text', 'Temperature in Warsaw');
    cy.get('h2').should('contain.text', 'Current temperature:');
    cy.get('#temperature-data tr').should('have.length.above', 5);
    cy.get('#temperature-chart').should('have.length', 1);
  })
})
