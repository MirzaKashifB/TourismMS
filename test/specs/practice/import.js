import homepage from "./export.js"

describe('trial script',()=>{
it('launch browser',async()=>{
    await browser.url("https://www.amazon.in/")
    await homepage.getRegister().setValue("i phone 14 pro max")
    await browser.pause(5000)
    
})
})