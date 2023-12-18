const puppeteer= require("puppeteer")
const url="https://www.hackerrank.com/auth/login"
const userEmail="Email_Address"
const password="password"
let page

const openBrowswer=puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:['--start-maximized']

})

openBrowswer.then(
    function(browser){
        let newPage =browser.newPage()
        return newPage
    }
).then(
    function(newPage){
   page=newPage
   let newtab=page.goto(url)
    return newtab
    }
).then(
        function(){
            let waitforLinkLogin=page.waitForSelector('#input-1',{visibility:true})
            return waitforLinkLogin
        }
    ).then(
        function(){
            let typeInfoUsername=page.type("#input-1",userEmail,{delay:50})
          
            return typeInfoUsername
        }
        ).then(
            function(){
                let typeInfoPass=page.type("#input-2",password,{delay:50})
              
                return typeInfoPass
            }
            ).then(
            function(){
                let clickLogin=page.click('button[data-analytics="LoginPassword"]',{delay:50})
                return clickLogin
            }
        ).then(
            function(){
               let algoClick = waitAndClick('.topic-card a[data-attr1="algorithms"]',page)
                return algoClick
            }
        ) .then(
            function(){
                let waitWarmup=page.waitForSelector('input[value="warmup"]')
                return waitWarmup
            }
        )
        .then(
            function(){
                let clickWarmup=page.click('input[value="warmup"]')
                return clickWarmup
            }
        )
    .catch(
    function(err){
        console.log(err);
    }
)






function waitAndClick(selector,cPage){
  return new Promise( function(resolve,reject){
     let waitForModalPromise=cPage.waitForSelector(selector)
     waitForModalPromise.then(
        function(){
               let clickModal=cPage.click(selector)
                return clickModal
            }
     ).then(
        function(){
            resolve()
        }
     ).catch(
        function(){
            reject()
        }
     )
}
  )
}