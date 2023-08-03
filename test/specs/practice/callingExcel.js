import excel1 from "../../excelUtility.js"
describe('Excel data',async ()=>{
    it('utilize excel',async()=>{
       let data= await excel1.excelData(1,1);
        console.log(data);
    })
})