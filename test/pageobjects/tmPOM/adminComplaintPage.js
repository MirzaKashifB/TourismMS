class complaint{
    get remark(){ return $('[name="remark"]')};
    get submit(){ return $('[name="submit2"]')};

    async complaintSubmit(text){
        (await this.remark).setValue(text);
        (await this.submit).waitForClickable();
        (await this.submit).click();
    }
}
export default new complaint();