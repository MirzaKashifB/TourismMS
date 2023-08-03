class manageIssue{
    get lastIssue(){ return $('(//tbody/tr/td[8])[last()]')};

    async clickIssue(){
        (await this.lastIssue).scrollIntoView();
        (await this.lastIssue).isClickable();
        (await this.lastIssue).click();
    }
}
export default new manageIssue();