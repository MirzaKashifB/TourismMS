class createPackage {
    get packageName() { return $('//input[@id="packagename"]') };
    get packageType() { return $('//input[@id="packagetype"]') };
    get packageLocation() { return $('//input[@id="packagelocation"]') };
    get packagePrice() { return $('//input[@id="packageprice"]') };
    get packageFeature() { return $('//input[@id="packagefeatures"]') };
    get packageText() { return $('//textarea[@id="packagedetails"]') };
    get packageImage() { return $('#packageimage') };
    get packageCreate() { return $('//button[contains(.,"Create")]') };

    async adminpackage(name, type, loc, price, feature, detail, img) {
        (await this.packageName).setValue(name);
        (await this.packageType).setValue(type);
        (await this.packageLocation).setValue(loc);
        (await this.packagePrice).setValue(price);
        (await this.packageFeature).setValue(feature);
        (await this.packageText).scrollIntoView();
        (await this.packageText).waitForDisplayed();
        (await this.packageText).setValue(detail);
        (await this.packageImage).scrollIntoView();
        (await this.packageImage).waitForClickable();
        (await this.packageImage).setValue(img);
        (await this.packageCreate).scrollIntoView();
        (await this.packageCreate).waitForClickable();        
        (await this.packageCreate).click();
        await browser.pause(2000);

    }
}
export default new createPackage();