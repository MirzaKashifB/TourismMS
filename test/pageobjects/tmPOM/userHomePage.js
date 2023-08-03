class userHome{
    get tourHistory(){ return $("//a[text()='My Tour History']")}
    get issueTicket(){ return $("//a[text()='Issue Tickets']")}
    get tourPackage(){ return $("//a[text()='Tour Packages']")}
    get writeUs(){ return $("//a[contains(.,' / Write Us ')]")}
    get userLogout(){ return $("//a[contains(.,'/ Logout')]")}
    
}
export default new userHome();