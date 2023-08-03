class tourhistory{
    get status(){ return $("(//tbody/tr/td[7])[last()]")}

    async statusCheck(){
        (await this.status).scrollIntoView();
        (await this.status).waitForDisplayed();
        const confirmtext=this.status.getText();
        console.log(confirmtext);
       // await expect(confirmtext).toHaveTextContaining("Confirm")
    }
}
export default new tourhistory();