export class SelectHotal {
    constructor (page){
        this.page = page;
        this.select =page.locator("//input[@id='radiobutton_0']");
        this.continueBtn = page.locator("//input[@id='continue']");
    }
    async selectHotal(){
        await this.select.check();
        await this.continueBtn.click();
    }
}