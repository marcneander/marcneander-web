context('Navigation', () => {
    context('Home', () => {
        beforeEach(() => {
            cy.visit('http://localhost:8000').wait(200);
        });

        it('can navigate to contact page', () => {
            cy.get('[data-cy=contact-link]').click();

            cy.location('pathname').should('include', 'contact');
        });

        it('can navigate to profile page and back', () => {
            cy.get('[data-cy=profile-link]').click();
            cy.location('pathname').should('include', 'profile');

            cy.get('[data-cy=logo-link]').click();
            cy.location('pathname').should('eq', '/');
        });
    });

    context('Offcanvas', () => {
        before(() => {
            cy.visit('http://localhost:8000').wait(200);
        });

        beforeEach(() => {
            cy.get('[data-cy=offcanvas-btn]').as('offcanvasBtn');
        });

        it('can be opened', () => {
            cy.get('@offcanvasBtn')
                .should('not.have.class', 'active')
                .click()
                .should('have.class', 'active')
                .click();
        });

        it('can navigate to contact', () => {
            cy.get('@offcanvasBtn').click();
            cy.get('[data-cy=offcanvas-contact-link]').click();
            cy.location('pathname').should('include', 'contact');
        });

        it('can navigate to profile', () => {
            cy.get('@offcanvasBtn').click();
            cy.get('[data-cy=offcanvas-profile-link]').click();
            cy.location('pathname').should('include', 'profile');
        });

        it('can navigate to home', () => {
            cy.get('@offcanvasBtn').click();
            cy.get('[data-cy=offcanvas-home-link]').click();
            cy.location('pathname').should('eq', '/');
        });
    });

    context('Profile', () => {
        beforeEach(() => {
            cy.visit('http://localhost:8000/profile');
        });

        it('can navigate to contact page', () => {
            cy.get('[data-cy=contact-link]').click();
            cy.location('pathname').should('include', 'contact');
        });
    });
});
