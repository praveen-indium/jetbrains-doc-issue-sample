describe('load google page', ()=>{
    it('loads google search', ()=>{
        cy.visit("https://www.google.com")
    })

    it('loads google mail', ()=>{
        cy.visitGmail()
    })
})