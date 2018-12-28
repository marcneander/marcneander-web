context('Navigation', () => {
    context('Home', () => {
        beforeEach(() => {
            cy.visit('http://localhost:8000');
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
        beforeEach(() => {
            cy.get('[data-cy=offcanvas-btn]').as('offcanvasBtn');
        });

        it('can be opened', () => {
            cy.get('@offcanvasBtn')
                .should('not.have.class', 'active')
                .click()
                .should('have.class', 'active');
        });

        it('can navigate to contact', () => {
            cy.visit('http://localhost:8000');

            cy.get('@offcanvasBtn').click();
            cy.get('[data-cy=offcanvas-contact-link]')
                .wait(200)
                .click();
            cy.location('pathname').should('include', 'contact');
        });

        it('can navigate to profile', () => {
            cy.get('@offcanvasBtn').click();
            cy.get('[data-cy=offcanvas-profile-link]')
                .wait(200)
                .click();
            cy.location('pathname').should('include', 'profile');
        });

        it('can navigate to home', () => {
            cy.get('@offcanvasBtn').click();
            cy.get('[data-cy=offcanvas-home-link]')
                .wait(200)
                .click();
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
