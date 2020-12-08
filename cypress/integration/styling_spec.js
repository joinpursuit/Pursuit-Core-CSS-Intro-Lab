describe('Styling', () => {
    it("Name header has the correct font", () => {
      cy
      .get('h1')
      .should('have.css', 'font-family', 'fantasy')
    })
})
  