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
import adminIssue from "../../pageobjects/tmPOM/adminManageIssuePage.js"
import remark from "../../pageobjects/tmPOM/adminComplaintPage.js"
import issueTicketPage from "../../pageobjects/tmPOM/issueTicketPage.js";

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
        var issueDescription=await excel.excelData("TestDataIO",16,2);
        var complaintText=await excel.excelData("TestDataIO",17,2)

        await browser.maximizeWindow();
        await browser.url("Online_Tourism_Management_System/index.php");
        (await homePage.userLogin).click();
        await userLoginPage.userlogin(userName,userPassword);
        (await userHomePage.writeUs).click();
        await issuePage.issueSubmit(2,issueDescription);
        (await userHomePage.userLogout).click();
        (await homePage.AdminLogin).click();
        await AdminLoginPage.adminlogin(adminName,adminPassword);
        await browser.pause(2000);
        (await AdminHomePage.manageIssues).click();
        await browser.pause(2000)
        await adminIssue.clickIssue();
        await browser.pause(2000)
        await browser.switchWindow("Update Compliant");
        await remark.complaintSubmit(complaintText);
        await browser.switchWindow("TMS | Admin manage Issues");
        await browser.pause(2000);
        await AdminHomePage.adminLogout();
        (await AdminLoginPage.backToHome).click();
        await browser.pause(2000);
        (await homePage.userLogin).click();
        await browser.pause(2000);
        await userLoginPage.userlogin(userName,userPassword);
        await browser.pause(2000);
        (await userHomePage.issueTicket).click();
        await issueTicketPage.adminRemark();
        
      

    })
})