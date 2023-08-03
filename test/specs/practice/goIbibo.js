describe('calender test',()=>{
    it('calender popup',async()=>{
        await browser.maximizeWindow();
        await browser.url("https://www.goibibo.com/");
        await browser.$('//span[@class="logSprite icClose"]').click()
        await browser.$("//span[text()='From']").click();
        await browser.$('//span[@class="sc-12foipm-39 hMvqOa"]/../input').setValue('Bengaluru');
        console.log("1111111111-----------1111111111");
       await browser.$("//span[text()='Bengaluru, India']").click()
        await browser.pause(2000);
        (await browser.$('//span[@class="sc-12foipm-39 hMvqOa"]/../input')).setValue("delhi");
        await browser.$('//span[text()="New Delhi, India"]').click();

    })
})