describe('Покупка аватара', function () {

    it('Сложный e2e тест на покупку аватар', function () {
         cy.visit('https://pokemonbattle.ru/login');
         cy.get('#root > div > main > section > div.login__content > form > div:nth-child(1) > input').should('be.visible')
         cy.get('#root > div > main > section > div.login__content > form > div:nth-child(1) > input').type('USER_LOGIN');
         cy.get('#password').should('USER_PASSWORD')
         cy.get('#password').type('jqXG1Rap8OqUFXd1jwYV');
         cy.get('#root > div > main > section > div.login__content > form > button').click();
         cy.wait(3000)
         cy.get('#root > div > header > div > div.header__container > button.header__id').should('be.visible');
         cy.get('#root > div > header > div > div.header__container > button.header__id').click({ force: true });
         cy.get('[href="/shop"]').click();
         cy.get('.shop__list > :nth-child(6)').should('be.visible');
         cy.get('#root > div > main > section.shop > ul > li:nth-child(6) > button').click({ force: true });
         cy.get('#root > div > main > form > div > div:nth-child(2) > input').should('be.visible');
         cy.get('#root > div > main > form > div > div:nth-child(2) > input').type('4444 4444 4444 4422');
         cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(1) > input').should('be.visible');
         cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(1) > input').type('12/35');
         cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(2) > input').should('be.visible');
         cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(2) > input').type('125');
         cy.get('#root > div > main > form > div > div.pay__input-box-v2.pay__input-box-last-of > input').should('be.visible');
         cy.get('#root > div > main > form > div > div.pay__input-box-v2.pay__input-box-last-of > input').type('alexandr chepanov');
         cy.get('#root > div > main > form > div > button').should('be.visible');
         cy.get('#root > div > main > form > div > button').click({ force: true });
         cy.get('#cardnumber').should('be.visible');
         cy.get('#cardnumber').type('56456');
         cy.get('#root > div > main > form > div > div > button').should('be.visible')
         cy.get('#root > div > main > form > div > div > button').click({ force: true })
         cy.get('#root > div > main > div.payment__form-container-defolt > form > div > div > img').should('be.visible')
         cy.contains('Покупка прошла успешно') 
         cy.get('#root > div > main > div.payment__form-container-defolt > form > div > button').should('be.visible')
         cy.get('#root > div > main > div.payment__form-container-defolt > form > div > button').click({force:true})
     })
 }) 