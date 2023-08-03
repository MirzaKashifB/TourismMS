class issueTicket{
    get issueRemark(){ return $("(//tbody/tr/td[5])[last()]")}

    async adminRemark(){
        (await this.issueRemark).scrollIntoView();
        (await this.issueRemark).waitForDisplayed();
        console.log((await this.issueRemark).getText());
    }
}
export default new issueTicket();