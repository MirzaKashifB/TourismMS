class manageBooking{
    get confirmBtn(){ return $("(//tbody/tr/td[9])[last()]//a[text()='Confirm']")};
    get cancelBtn(){ return $("(//tbody/tr/td[9])[last()]//a[text()='Cancel']")}

    async confirmClick(){
        (await this.confirmBtn).scrollIntoView();
        (await this.confirmBtn).waitForClickable();
        (await this.confirmBtn).click();
    }
    async cancelClick(){
        (await this.cancelBtn).scrollIntoView();
        (await this.cancelBtn).waitForClickable();
        (await this.cancelBtn).click();
    }
}
export default new manageBooking();