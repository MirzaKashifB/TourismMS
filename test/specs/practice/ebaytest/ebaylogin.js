import { expect } from "chai";
import ebayExcelUtility from "../../../ebayExcelUtility.js"
import ebayhome from "../../../pageobjects/practicePOM/ebayPOM/homePage.js";
describe('ebay tests',()=>{
    it('login',async()=>{
        const url=await ebayExcelUtility.ebaydata("data",1,2);
       
       // await browser.maximizeWindow();
        await browser.url(url);
        expect(url).to.be.contains("ebay")
        console.log(url);
        (await ebayhome.searchbar).setValue("Laptop");
        (await ebayhome.searchButton).click();
        await browser.pause(2000)
        const pcdrop=await $("#gh-cat");
        await pcdrop.click();
    })
})