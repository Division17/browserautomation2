const puppeteer=require("puppeteer")
let page
const browserOpen=puppeteer.launch({headless: false})

browserOpen.then(
    function(browser){
        const browserPage=browser.pages()
        return browserPage
    }
).then(
    function(browserPage){
        page=browserPage[0]
        const browserGoto= page.goto("https://duckduckgo.com")
    }
).then(
    function(){
        let pagesWait=page.waitForSelector('input[id="searchbox_input"]',{visible:true})
         return pagesWait
    }
)
.then(
    function(){
             let pageType=page.type('input[id="searchbox_input"]',"pepcoding")
             return pageType
    }
).then(
    function(){
    
    let enterWill1=page.keyboard.press("Enter")
    
    return enterWill1
    }
).then(
    function(){
        let pagesWait=page.waitForSelector('a[class="eVNpHGjtxRBq_gLOfGDr LQNqh2U1kzYxREs65IJu"]',{visible:true})
         return pagesWait
    }
)
.then(
    function(){
             let pageType=page.click('a[class="eVNpHGjtxRBq_gLOfGDr LQNqh2U1kzYxREs65IJu"]',"pepcoding")
             return pageType
    }
).catch(
    function(err){
        console.log(err)
    }
    )