import {test} from "@playwright/test";
import { LoginPage } from "../pom/login.js";
import { SearchHotel } from "../pom/searchHotel.js";
import { SelectHotal } from "../pom/selectHotel.js";
import { BookHotal } from "../pom/bookHotal.js";

test("Adactin",async({page})=>{
    const loginpage = new LoginPage(page);
    const hotelSearch = new SearchHotel(page);
    const hotelSelect = new SelectHotal(page);
    const hotelBook = new BookHotal(page);
    await loginpage.navigate();
    await loginpage.login("Abhiskouti","Abhi@1234");
    await hotelSearch.search("New York","Hotel Creek","Standard","2 - Two","13/10/2025","14/10/2025","2 - Two","1 - One");
    await hotelSelect.selectHotal();
    await hotelBook.hotelBooking("Abhishek","Ko","India","1234567898765432","American Express","September","2025","847");
    await page.waitForTimeout(9000)
    await page.screenshot({path:"pomSS/HotelBookingCfm.png",fullPage:true})

})