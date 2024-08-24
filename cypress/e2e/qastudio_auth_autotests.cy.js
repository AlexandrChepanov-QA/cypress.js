import * as main_page from "../locators/main_page.json"
import * as recovery_password_page from "../locators/recovery_password_page.json"
import * as result_page from "../locators/result_page.json"
import * as data from "../helpers/default_data.json"

describe('Проверка формы авторизации', function () {
    beforeEach('Начало теста', function () {
        cy.visit('/'); // вход на сайт 
        cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета для текста сброса пароля
          });

    afterEach('Конец теста', function () {
        cy.get(result_page.close).should('be.visible'); // проверка крестика
    }); 


    it('Верный логин и пароль', function () {  
         cy.get(main_page.title).contains('Форма логина'); // ищем текст формы
         cy.get(main_page.email).type(data.login); // пишем правильные данные в инпуте логина
         cy.get(main_page.password).type(data.password); // пишем правильные данные в инпуте пароля
         cy.get(main_page.login_button).click(); // нажатие кнопки войти
         cy.get(result_page.title).contains('Авторизация прошла успешно'); // проверка текста после успешной авторизации
     })
     
     it('Проверка функционала восстановления пароля', function () {
         cy.get(main_page.fogot_pass_btn).click(); // нажатие кнопки для сброса пароля
         cy.get(recovery_password_page.email).type(data.login); // пишем свой логин для сброса пароля
         cy.get(recovery_password_page.send_button).click(); // нажать на кнопки для отправки кода
         cy.get(result_page.title).contains('Успешно отправили пароль на e-mail'); // проверка на этот текст, что мы успешно изменили пароль 
     })

     it('Верный логин и неверный пароль', function () {
        cy.get(main_page.title).contains('Форма логина'); // ищем текст формы
        cy.get(main_page.email).type(data.login); // пишем правильные данные в инпуте логина
        cy.get(main_page.password).type('iLoveqastudio6'); // пишем неправильные данные в инпуте пароля
        cy.get(main_page.login_button).click(); // нажатие кнопки войти
        cy.get(result_page.title).contains('Такого логина или пароля нет'); // проверка на этот текст, что такого пароля или логина нет
    })

    it('Неверный логин и верный пароль', function () {
        cy.get(main_page.title).contains('Форма логина'); // ищем текст формы
        cy.get(main_page.email).type('german@dolnikow.ru'); // пишем неправильные данные в инпуте логина
        cy.get(main_page.password).type(data.password); // пишем правильные данные в инпуте пароля
        cy.get(main_page.login_button).click(); // нажимаем на кнопку войти
        cy.get(result_page.title).contains('Такого логина или пароля нет'); // проверка на этот текст, что такого пароля или логина нет
    })

    it('Проверка авторизации без @ в логине', function () {
        cy.get(main_page.title).contains('Форма логина'); // ищем текст формы
        cy.get(main_page.email).type('germandolnikov.ru'); // пишем в инпуте логин без @
        cy.get(main_page.password).type(data.password); // пишем правильные данные в инпуте пароля
        cy.get(main_page.login_button).click(); // нажимаем на кнопку войти
        cy.get(result_page.title).contains('Нужно исправить проблему валидации'); // проверка текста, где нужно исправить валидацию
    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.get(main_page.title).contains('Форма логина'); // ищем текст формы
        cy.get(main_page.email).type('GerMan@Dolnikov.ru'); // пишем в инпуте логин с заглавными буквами
        cy.get(main_page.password).type(data.password); // пишем правильные данные в инпуте пароля
        cy.get(main_page.login_button).click(); // нажимаем на кнопку войти
        cy.get(result_page.title).contains('Авторизация прошла успешно'); // проверка на этот текст, что должна пройти авторизация, но на самом деле другой текст
    })
 })