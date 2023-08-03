import homePage from "../../pageobjects/tmPOM/homePage.js";
import userLogin from "../../pageobjects/tmPOM/userLoginPage.js";
import AdminHomePage from "../../pageobjects/tmPOM/AdminHomePage.js";
import AdminLoginPage from "../../pageobjects/tmPOM/AdminLoginPage.js";
import createPackagePage from "../../pageobjects/tmPOM/createPackagePage.js";
import issuePage from "../../pageobjects/tmPOM/issuePage.js";
import packageDetailsPage from "../../pageobjects/tmPOM/packageDetailsPage.js";
import tourpackagePage from "../../pageobjects/tmPOM/tourpackagePage.js";
import userHomePage from "../../pageobjects/tmPOM/userHomePage.js";
import userLoginPage from "../../pageobjects/tmPOM/userLoginPage.js";
import ManageBookingPage from "../../pageobjects/tmPOM/ManageBookingPage.js";
import userHistoryPage from "../../pageobjects/tmPOM/userHistoryPage.js";

describe('TMS', () => {
    it('Boot ticket', async () => {
        await browser.maximizeWindow();
        await browser.url("http://localhost/travel/index.php");
        (await homePage.AdminLogin).click();
        await AdminLoginPage.adminlogin("admin", "Test@123");
        (await AdminHomePage.tour).waitForClickable();
        (await AdminHomePage.tour).click();
        (await AdminHomePage.create).waitForClickable();
        (await AdminHomePage.create).click();
        await browser.pause(2000);
        await createPackagePage.adminpackage("Goa pack", "Couple", "Goa", 180, "Free lunch", "3 days 2 nights trip", "C:/Users/Admin/Desktop/TourismMS/Sydney.png")
        await AdminHomePage.adminLogout();
        (await AdminLoginPage.backToHome).click();
        await browser.pause(2000);
        (await homePage.userLogin).click();
        await browser.pause(2000);
        await userLoginPage.userlogin("mirzakashifb52@gmail.com","kashif@1234");
        (await userHomePage.tourPackage).click();
        await browser.pause(2000);
        await tourpackagePage.tourDetail();
        await packageDetailsPage.bookPackage("2023/08/02","2023/08/05","Trip of joy");
        (await userLogin.userlogout).click();
        (await homePage.AdminLogin).click();
        await AdminLoginPage.adminlogin("admin", "Test@123");
        (await AdminHomePage.manageBooking).click();
        await ManageBookingPage.confirmClick();
        await browser.pause(2000);
        await AdminHomePage.adminLogout();
        (await AdminLoginPage.backToHome).click();
        await browser.pause(2000);
        (await homePage.userLogin).click();
        await userLoginPage.userlogin("mirzakashifb52@gmail.com","kashif@1234");
        await browser.pause(2000);
        (await userHomePage.tourHistory).click();
        await userHistoryPage.statusCheck();
        (await userHomePage.userLogout).click();

            })
})