class userLogin{
    get userUsername(){ return $('//input[@placeholder="Enter your Email"]')}
    get userPassword(){ return $('//input[@id="password"]')}
    get loginBtn(){ return $('[name="signin"]')}
    get userlogout(){ return $("//a[text()='/ Logout']")}

    async userlogin(user, password){
        await browser.pause(1000);
        await this.userUsername.setValue(user);
        await browser.pause(1000);
        await this.userPassword.setValue(password)
        await browser.pause(1000);
        await this.loginBtn.click();
    }
}
export default new userLogin();