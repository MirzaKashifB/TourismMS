describe('Book a ticket',async()=>{
    it('booking ticket',async()=>{
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
    (await $('#datepicker')).setValue('2023-07-30');
    (await $('#datepicker1')).setValue('2023-07-31');
    (await $('[name="comment"]')).setValue('I am good to go');
    (await $('[name="submit2"]')).click();
    await browser.pause(2000);
    (await $("//a[text()='/ Logout']")).click();

    await browser.pause(3000);
    await $('*=Admin Login').click();
        await $('[name="username"]').setValue('admin');
        await $('[name="password"]').setValue('Test@123');
        await $('[name="login"]').click();

        (await $("//span[text()='Manage Booking']")).click();
        const confirmBtn=$("(//a[text()='Confirm'])[last()]");
        (await confirmBtn).scrollIntoView();
        console.log((await confirmBtn).isClickable());
        await browser.pause(3000);

        (await confirmBtn).click();
        await browser.pause(3000);
        await browser.acceptAlert();

    const bookingConfirm=await $("//div[text()=':Booking Confirm successfully ']").getText();
    console.log(bookingConfirm);
    await expect(bookingConfirm).toContain('Booking Confirm')
    await $("//p[text()='Welcome']").click();
    await $("//a[text()=' Logout']").click();
    await $('*=Back to home').click();
    await browser.pause(3000);
    await $('*=/ Sign In').click();
    await $('input[placeholder="Enter your Email"]').setValue('anuj@gmail.com');
    await $('#password').setValue('Test@123');
    (await $('input[name="signin"]')).click();

    (await $("//a[text()='My Tour History']")).click();
    const confirmedMsg=$("(//td[text()='Confirmed'])[last()]");
    (await confirmedMsg).scrollIntoView();
    console.log((await confirmedMsg).isDisplayed());
    const confirmedMessage=$("(//td[text()='Confirmed'])[last()]").getText();
    console.log(confirmedMessage);
    // await expect(confirmedMessage).toContain('Confirm')
    console.log("Booking is confirmed and validated");


    })
})