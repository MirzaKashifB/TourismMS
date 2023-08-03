class createAccount{
    get fullName(){ return $('[name="fname"]')};
    get mobileNum(){ return $('[name="mobilenumber"]')}
    get email(){return $('//input[@placeholder="Email id"]')}
    get password(){ return $("//div[@id='myModal']/descendant::input[@name='password']")}
    get createBtn(){return $('//input[@name="submit"]')};

    async accountCreate(name,num,email1,password){
        (await this.fullName).waitForDisplayed();
        (await this.fullName).setValue(name);
        (await this.mobileNum).setValue(num);
        await email.setValue(email1);
        await password.setValue(password);
        (await this.createBtn).waitForClickable();
        (await this.createBtn).click();
    }
}
export default new createAccount();