class adminHome {
    get tour() { return $("//span[contains(.,'Tour Packages')]") };
    get create() { return $("//a[contains(.,'Create')]") }
    get manageBooking() { return $("//a[contains(.,'Manage Booking')]") }
    get manageIssues() { return $("//a[contains(.,'Manage Issues')]") }
    get welcome() { return $('//p[contains(.,"Welcome")]') };
    get logout() { return $('//a[contains(.,"Logout")]') }

    async adminLogout() {
        (await this.welcome).scrollIntoView();
        (await this.welcome).waitForClickable();
        (await this.welcome).click();
        (await this.logout).waitForClickable();
        (await this.logout).click();
    }
}
export default new adminHome();