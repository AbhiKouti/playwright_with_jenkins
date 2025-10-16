export class BookHotal {
    constructor(page){
        this.page= page;
        this.firstName = page.locator("//input[@id='first_name']");
        this.lastName = page.locator("//input[@id='last_name']");
        this.address = page.locator("//textarea[@id='address']");
        this.credidCard = page.locator("//input[@id='cc_num']");
        this.cardType = page.locator("//select[@id='cc_type']");
        this.monthSet = page.locator("//select[@id='cc_exp_month']");
        this.yearSet = page.locator("//select[@id='cc_exp_year']");
        this.cvvNo = page.locator("//input[@id='cc_cvv']");
        this.bookNowBtn = page.locator("//input[@id='book_now']");
    }
    async hotelBooking(nameFt,nameLt,adrs,cardNo,typeOfCard,mntSelect,yrSelect,cVV){
        await this.firstName.fill(nameFt)
        await this.lastName.fill(nameLt)
        await this.address.fill(adrs)
        await this.credidCard.fill(cardNo)
        await this.cardType.selectOption(typeOfCard)
        await this.monthSet.selectOption(mntSelect)
        await this.yearSet.selectOption(yrSelect)
        await this.cvvNo.fill(cVV)
        await this.bookNowBtn.click()
    }

}