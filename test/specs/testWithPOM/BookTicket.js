import{expect} from "chai"
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
import excel from "../../excelUtility.js"

describe('TMS', () => {
    it('Boot ticket', async () => {
        var adminName=await excel.excelData("TestDataIO",2,2);
        var adminPassword=await excel.excelData("TestDataIO",3,2);
        var userName=await excel.excelData("TestDataIO",4,2);
        var userPassword=await excel.excelData("TestDataIO",5,2);
        var packageName=await excel.excelData("TestDataIO",6,2);
        var PackageType=await excel.excelData("TestDataIO",7,2);
        var Location=await excel.excelData("TestDataIO",8,2);
        var Price=await excel.excelData("TestDataIO",9,2);
        var features=await excel.excelData("TestDataIO",10,2);
        var details=await excel.excelData("TestDataIO",11,2);
        var imgLink=await excel.excelData("TestDataIO",12,2);
        var fromDate=await excel.excelData("TestDataIO",13,2);
        var toDate=await excel.excelData("TestDataIO",14,2);
        var comment=await excel.excelData("TestDataIO",15,2);
        
        await browser.maximizeWindow();
        await browser.url("Online_Tourism_Management_System/index.php");

        /* admin login*/
        (await homePage.AdminLogin).click();
        await AdminLoginPage.adminlogin(adminName,adminPassword);

        /* create tour package */
        (await AdminHomePage.tour).waitForClickable();
        (await AdminHomePage.tour).click();
        (await AdminHomePage.create).waitForClickable();
        (await AdminHomePage.create).click();
        await browser.pause(2000);
        await createPackagePage.adminpackage(packageName, PackageType, Location, Price, features, details, imgLink)
        await AdminHomePage.adminLogout();
        (await AdminLoginPage.backToHome).click();

        /* user login */
        (await homePage.userLogin).click();
        await userLoginPage.userlogin(userName,userPassword);

        // User Booking tour package
        (await userHomePage.tourPackage).click();
        await browser.pause(2000);
        await tourpackagePage.tourDetail();
        await packageDetailsPage.bookPackage(fromDate,toDate,comment);
        (await userLogin.userlogout).click();

        //admin login
        (await homePage.AdminLogin).click();
        await AdminLoginPage.adminlogin(adminName, adminPassword);

        //admin booking confirm
        (await AdminHomePage.manageBooking).click();
        (await ManageBookingPage.confirmBtn).click();
        await browser.pause(2000);

        //admin logout
        await AdminHomePage.adminLogout();
        (await AdminLoginPage.backToHome).click();
        await browser.pause(2000);

        //user login
        (await homePage.userLogin).click();
        await userLoginPage.userlogin(userName,userPassword);
        await browser.pause(2000);

        //user status check
        (await userHomePage.tourHistory).click();
        await userHistoryPage.statusCheck();

        //user logout
        (await userHomePage.userLogout).click();
             })
})