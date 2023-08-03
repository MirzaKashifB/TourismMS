import excel from "exceljs"
class ebayexcel{
    async ebaydata(sheet1,row,cell){
        const book=new excel.Workbook();
        await book.xlsx.readFile("C:/Users/Admin/Desktop/TourismMS/ebay.xlsx");
        const sheet=book.getWorksheet(sheet1);
        let data=sheet.getRow(row).getCell(cell).toString();
        return data;
    }
}
export default new ebayexcel();