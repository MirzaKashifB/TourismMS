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
import createAccountPage from "../../pageobjects/tmPOM/createAccountPage.js";

describe('TMS', () => {
    it('Boot ticket', async () => {
        let adminPassword=await excel.excelData("TestDataIO",3,2);
        let adminName=await excel.excelData("TestDataIO",2,2);
        let userName=await excel.excelData("TestDataIO",4,2);
        let userPassword=await excel.excelData("TestDataIO",5,2);
        let packageName=await excel.excelData("TestDataIO",6,2);
        let PackageType=await excel.excelData("TestDataIO",7,2);
        let Location=await excel.excelData("TestDataIO",8,2);
        let Price=await excel.excelData("TestDataIO",9,2);
        let features=await excel.excelData("TestDataIO",10,2);
        let details=await excel.excelData("TestDataIO",11,2);
        let imgLink=await excel.excelData("TestDataIO",12,2);
        let fromDate=await excel.excelData("TestDataIO",13,2);
        let toDate=await excel.excelData("TestDataIO",14,2);
        let comment=await excel.excelData("TestDataIO",15,2);
        let fullname=await excel.excelData("TestDataIO",18,2)
        let mobilenum=(await excel.excelData("TestDataIO",19,2));
        let mynum=mobilenum+Math.round(Math.random()*1000);
        let email=await excel.excelData("TestDataIO",20,2)
        let createpassword=await excel.excelData("TestDataIO",21,2)
        await browser.maximizeWindow();
        await browser.url("Online_Tourism_Management_System/index.php");
               
        
        await (await homePage.signup).waitForDisplayed();
        (await homePage.signup).click();
        console.log("iiiiiiiiiiiiiiiiiii"+fullname+"111111111"+mobilenum+"iiiiiiiiiiiiiiiiii"+mynum);
       // await createAccountPage.accountCreate(fullname,mobilenum,email,createpassword)

    })
})