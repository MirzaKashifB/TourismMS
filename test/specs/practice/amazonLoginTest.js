describe('amazon login test',async()=>{
    it('Login to amazon',async()=>{
        await browser.maximizeWindow()
        await browser.url("https://www.amazon.in/");
        console.log(await browser.getTitle());

       await $('#twotabsearchtextbox').setValue('mobile');
       await $('#nav-search-submit-button').click();
       (await $('*=Best Sellers')).click();
        await browser.pause(2000);
    });
});