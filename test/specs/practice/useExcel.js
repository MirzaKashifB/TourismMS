import excel from "exceljs"
import ex1 from "../../excelUtility.js"
describe('Excel data',()=>{
    it('read Data',async()=>{
        // const book=new excel.Workbook();
        // await book.xlsx.readFile('C:/Users/Admin/Desktop/TourismMS/data.xlsx');
        // const sheet=book.getWorksheet('Sheet1');
        // let data=sheet.getRow(1).getCell(1).toString();
        // console.log("1111111111"+data);
        var f1=await ex1.excelData("TestDataIO",2,2);
        console.log(f1);
    })
})