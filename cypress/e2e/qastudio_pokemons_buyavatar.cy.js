describe('Покупка аватара', function () {

    it('Сложный e2e тест на покупку аватар', function () {
         cy.visit('https://pokemonbattle.ru/login'); // вход на сайт 
         cy.get('#root > div > main > section > div.login__content > form > div:nth-child(1) > input').should('be.visible') // проверка инпута логина
         cy.get('#root > div > main > section > div.login__content > form > div:nth-child(1) > input').type('USER_LOGIN'); // пишем логин
         cy.get('#password').should('be.visible') // проверка инпута пароля
         cy.get('#password').type('USER_PASSWORD'); // пишем пароль
         cy.get('#root > div > main > section > div.login__content > form > button').click(); // нажимаем на кнопку войти
         cy.get('#root > div > header > div > div.header__container > button.header__id').should('be.visible'); // проверяем наличия формы профиля на странице тренера
         cy.get('#root > div > header > div > div.header__container > button.header__id').click({ force: true }); // переход на личный кабинет тренера
         cy.get('[href="/shop"]').click(); // переход в магазин тренеров
         cy.get('.shop__list > :nth-child(6)').should('be.visible'); // проверка конкретного тренера
         cy.get('#root > div > main > section.shop > ul > li:nth-child(6) > button').click({ force: true }); // нажимаем на кнопку войти
         cy.get('#root > div > main > form > div > div:nth-child(2) > input').should('be.visible'); // проверка инпута номера карты
         cy.get('#root > div > main > form > div > div:nth-child(2) > input').type('4444 4444 4444 4422'); // заполняем номер карты
         cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(1) > input').should('be.visible'); // проверка инпута срока годности карты
         cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(1) > input').type('12/35'); // заполняем данные срока годности карты
         cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(2) > input').should('be.visible'); // проверка инпута CVV-кода
         cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(2) > input').type('125'); // заполняем CVV-код
         cy.get('#root > div > main > form > div > div.pay__input-box-v2.pay__input-box-last-of > input').should('be.visible'); // проверка инпута имени и фамилии на карте
         cy.get('#root > div > main > form > div > div.pay__input-box-v2.pay__input-box-last-of > input').type('alexandr chepanov'); // заполняем имя и фамилия как на карте
         cy.get('#root > div > main > form > div > button').should('be.visible'); // проверка наличия кнопки отправить
         cy.get('#root > div > main > form > div > button').click({ force: true }); // нажать кнопку отправить
         cy.get('#cardnumber').should('be.visible'); // проверка инпута для того, чтобы подтвердить операцию через СМС-код 
         cy.get('#cardnumber').type('56456'); // пишем 5-значный код из смс
         cy.get('#root > div > main > form > div > div > button').should('be.visible') // нажимаем на кнопку отправить
         cy.get('#root > div > main > form > div > div > button').click({ force: true }) // нажимаем отправить
         cy.get('#root > div > main > div.payment__form-container-defolt > form > div > div > img').should('be.visible') // проверка галочки
         cy.contains('Покупка прошла успешно') // проверяем текста успеха
         cy.get('#root > div > main > div.payment__form-container-defolt > form > div > button').should('be.visible') // проверяем текст для перехода в магазин
         cy.get('#root > div > main > div.payment__form-container-defolt > form > div > button').click({force:true}) // переходим обратно на страницу магазина
     })
 }) 
