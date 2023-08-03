class tourPackage{
    get detail(){ return $("(//a[contains(.,'Details')])[last()]")}

    async tourDetail(){
        await (await this.detail).scrollIntoView();
        await (await this.detail).waitForClickable();
        (await this.detail).click();
        await browser.pause(2000);
    }
}
export default new tourPackage();