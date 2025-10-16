export class SearchHotel {
    constructor(page){
        this.page = page;
        this.location = page.locator("//select[@id='location']");
        this.Hotels = page.locator("//select[@id='hotels']");
        this.typeHotal = page.locator("//select[@id='room_type']");
        this.noOfRooms = page.locator("//select[@id='room_nos']");
        this.checkInDate = page.locator("//input[@id='datepick_in']");
        this.checkOutDate = page.locator("//input[@id='datepick_out']");
        this.adultsPerRoom =page.locator("//select[@id='adult_room']");
        this.childPerRoom = page.locator("//select[@id='child_room']");
        this.searchBtn = page.locator("//input[@id='Submit']");
    }
    
    async search(hotelLocation,selectHotal,selectType,roomsRequired,checkIn,checkOut,adults,child){
        await this.location.selectOption(hotelLocation)
        await this.Hotels.selectOption(selectHotal)
        await this.typeHotal.selectOption(selectType)
        await this.noOfRooms.selectOption(roomsRequired)
        await this.checkInDate.fill(checkIn)
        await this.checkOutDate.fill(checkOut)
        await this.adultsPerRoom.selectOption(adults)
        await this.childPerRoom.selectOption(child)
        await this.searchBtn.click();
    }

}