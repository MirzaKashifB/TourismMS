class packageDetails{
    get fromDate(){ return $('//input[@id="datepicker"]')}
    get toDate(){ return $('//input[@id="datepicker1"]')}
    get comment(){ return $('//input[@name="comment"]')}
    get book(){ return $('//button[text()="Book"]')}

    async bookPackage(from, to, com){
        (await this.fromDate).waitForDisplayed();
        await browser.pause(1000);
        (await this.fromDate).setValue(from);
        await browser.pause(1000);
        (await this.toDate).setValue(to);
        await browser.pause(1000);
        await (await this.comment).scrollIntoView();
        await (await this.comment).waitForDisplayed();
        (await this.comment).setValue(com);
        await (await this.book).scrollIntoView();
        await (await this.book).waitForClickable();
        (await this.book).click();
        await browser.pause(3000)
    }
}
export default new packageDetails();