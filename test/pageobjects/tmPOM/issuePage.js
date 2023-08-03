class issuePage{
    get issueSelect(){ return $('//select[@id="country"]')}
    get issuedescription(){ return $('//input[@name="description"]')}
    get issuesubmit(){ return $("//button[text()='Submit']")}

    async issueSubmit(num, desc){
        (await this.issueSelect).selectByIndex(num);
        (await this.issuedescription).setValue(desc);
        (await this.issuesubmit).waitForClickable();
        (await this.issuesubmit).click();
    
    }
}
export default new issuePage();