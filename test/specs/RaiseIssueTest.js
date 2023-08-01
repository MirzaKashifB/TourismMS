describe('Raise issue',async()=>{
    it('Issue',async()=>{
        await browser.maximizeWindow();
        await browser.url("//rmgtestingserver/domain/Online_Tourism_Management_System/"); 
        await $('*=/ Sign In').click();
        await $('input[placeholder="Enter your Email"]').setValue('anuj@gmail.com');
        await $('#password').setValue('Test@123');
        (await $('input[name="signin"]')).click();
        await browser.pause(2000);
        (await $('*=/ Write Us')).click();
        (await $('#country')).selectByIndex(2);
        (await $("[name='description']")).setValue('I am unable to book tickets after 6PM');
        await browser.pause(2000);
        
        (await $("//button[text()='Submit']")).click();
        await browser.pause(4000);
        (await $("=/ Logout")).click();
        await browser.pause(2000);
        await $('=Admin Login').click();
        await $('[name="username"]').setValue('admin');
        await $('[name="password"]').setValue('Test@123');
        await $('[name="login"]').click();
        (await $("*=Manage Issues")).click();
        await browser.pause(3000);
        let lastDesc=$("(//a[text()='View '])[last()]");
        (await lastDesc).scrollIntoView();
        console.log((await lastDesc).isClickable());
        (await $("(//a[text()='View '])[last()]")).click();
        await browser.pause(3000);
      
        await browser.switchWindow('Update Compliant')
     
        await $("[name='remark']").setValue('It will be resolved soon')
        await $("[name='submit2']").click();

        await browser.switchWindow('TMS | Admin manage Issues');
       
        let welcome=$("//p[text()='Welcome']");
        await welcome.scrollIntoView();
        console.log(welcome.isClickable());

        await $("//p[text()='Welcome']").click();
        await $("//a[text()=' Logout']").click();
        await $('*=Back to home').click();
        await browser.pause(1000);
        await $('*=/ Sign In').click();
        await $('input[placeholder="Enter your Email"]').setValue('anuj@gmail.com');
        await $('#password').setValue('Test@123');
        (await $('input[name="signin"]')).click();
        (await $("//a[text()='Issue Tickets']")).click();
        let adminText= $("(//tbody/tr/td[5])[last()]");
        adminText.scrollIntoView();
        console.log((await adminText).isDisplayed());
        await expect(adminText).toHaveTextContaining("resolved");
        console.log("Issue is raised");


    })
})