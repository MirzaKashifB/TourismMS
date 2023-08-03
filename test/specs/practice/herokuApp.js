describe('herohuapp functions',()=>{
    it('login',async()=>{
        await browser.url("https://the-internet.herokuapp.com/")
        const add=(await $("//a[text()='Add/Remove Elements']"))
        add.click();
        
        const addvalue=await $("//button[text()='Add Element']");
        //element.addValue("text") is used to send the data
        addvalue.addValue("Hello guys")
        const deletevalue=await $("*=Delete")
        deletevalue.click();
        //browser.back() for navigating to previous page
        await browser.back();
      //  (await $("//a[text()='Basic Auth']")).click();
       // await browser.sendAlertText("admin")
    //    (await $("//a[text()='Hovers']")).click();
    //     let img1=await $("(//img[@alt='User Avatar'])[1]");
    //     await img1.moveTo();
    //     await browser.back();

        (await $("//a[text()='Key Presses']")).click();
        let element=await $("#target");
        //tab action
        await element.setValue("Tab")
        await browser.pause(2000);
    })
})