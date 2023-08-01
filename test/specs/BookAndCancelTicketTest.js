describe('TMS',async()=>{
    it('Book and cancel ticket',async()=>{
        await browser.maximizeWindow();
        await browser.url('http://rmgtestingserver/domain/Online_Tourism_Management_System/');
        await $('*=Admin Login').click();
        await $('[name="username"]').setValue('admin');
        await $('[name="password"]').setValue('Test@123');
        await $('[name="login"]').click();
        await $('*=Tour Packages').click();
        await $('*=Create').click();
        (await $('#packagename')).setValue('Ooty Tour');
        (await $('#packagetype')).setValue('Couple Package');
        (await $('#packagelocation')).setValue('Ooty');
        (await $('#packageprice')).setValue('$100');
        (await $('#packagefeatures')).setValue('Free pickUp and drop and free food');
        (await $('#packagedetails')).setValue('Duration will be 3 days and 2 nights');
        const img=await $('#packageimage');
        await img.scrollIntoView();
        await $('#packageimage').setValue('C:/Users/Admin/Desktop/TourismMS/Sydney.jpg')
       const createBtn= $("button[name='submit']");
        (await createBtn).isClickable();
        await $("button[name='submit']").click();
      
        await browser.pause(3000);
        const welcomebtn=$("//p[text()='Welcome']");
        await welcomebtn.scrollIntoView();
        console.log("welcome is displayed"+welcomebtn.isClickable());
    const bookingMsg=await $("//div[text()=':Package Created Successfully ']").getText();
    console.log(bookingMsg);
    await expect(bookingMsg).toContain('Package Created')
    console.log("Booking successful");
    await $("//p[text()='Welcome']").click();
    await $("//a[text()=' Logout']").click();
    await $('*=Back to home').click();
    await browser.pause(3000);
    await $('*=/ Sign In').click();
    await $('input[placeholder="Enter your Email"]').setValue('anuj@gmail.com');
    await $('#password').setValue('Test@123');
    (await $('input[name="signin"]')).click();
    await browser.pause(2000);
    (await $('*=Tour Packages')).click();
    let lastPack=$("(//a[text()='Details'])[last()]");
    await lastPack.scrollIntoView();
    console.log(lastPack.isClickable());
    (await $("(//a[text()='Details'])[last()]")).click();
    await browser.pause(2000);
    (await $('#datepicker')).setValue('2023-08-01');
    (await $('#datepicker1')).setValue('2023-08-03');
    (await $('[name="comment"]')).setValue('I am good to go');
    (await $('[name="submit2"]')).click();
    await browser.pause(2000);
    (await $('*=My Tour History')).click();
    const lastBtn=$("(//tbody/tr/td[9])[last()]");
    await lastBtn.scrollIntoView();
    console.log(lastBtn.isClickable());
    await lastBtn.click();
    await browser.pause(3000);
   // await browser.acceptAlert();
   // const successmsg=(await $("//strong[text()='SUCCESS']")).getText();
    //await expect(successmsg).toHaveTextContaining('SUCCESS')
    //console.log(successmsg);
    
   
    })
})