class adminLogin {
    get adminUN() { return $('//input[@name="username"]') };
    get adminPW() { return $('//input[@name="password"]') };
    get signIn() { return $('//input[@name="login"]') };
    get backToHome(){ return $("//a[contains(.,'Back to home')]")}

    async adminlogin(name, pass) {
      await browser.pause(1000);
        (await this.adminUN).setValue(name);
           await browser.pause(1000);
       (await this.adminPW).setValue(pass);
        (await this.signIn).waitForClickable()
        await browser.pause(1000);
        (await this.signIn).click();
    }
}
export default new adminLogin();