export default class loginObject {
    
    get usernameInput() { return $('#user-name'); }
    get passwordInput() { return $('#password'); }
    get loginButton()   { return $('#login-button'); }
    get errorMessage()  { return $('[data-test="error"]'); }

}