export class LoginPage{

    constructor(page){
        this.page =page;
        this.userNmae =page.locator("//input[@id='username']");
        this.password =page.locator("//input[@id='password']");
        this.loginBtn =page.locator("//input[@id='login']");
    }
    async navigate(){
        await this.page.goto("http://adactinhotelapp.com/");
    }

    async login(email , pwd){
        await this.userNmae.fill(email);
        await this.password.fill(pwd);
        await this.loginBtn.click();
    }
}