//insta chain detection

const express = require('express')
const puppeteer = require('puppeteer');
const cors = require('cors')
const app =express()
app.use(cors())
app.listen(3000,()=>{
    console.log('listening on port');
    loadBrowser()
})


const loadBrowser = async () => {

    let sessionPath = './userdataNew'

    const browser = await puppeteer.launch({
        userDataDir: sessionPath,
        headless: false,
        // executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
        defaultViewport: null,
        args: ['--start-maximized']
    })

    const [page] = await browser.pages();

    const getinfo = async name=>{
        await page.goto(`https://instagram.com/${name}`, {
            waitUntil: 'networkidle2'
        });
        const t = await page.waitForSelector('#react-root > section > main > div > header > section > div.QGPIr > div')
        return t.evaluate(k => k.textContent)
    }
    app.get('/',(req,res)=>{
        
    })
    app.get('/:name',(req,res)=>{
        (async ()=>{
            var namelist = `${req.params.name}`
            var k = await getinfo(req.params.name)
            console.log("triggered");
            while(k.includes('@'))
            {
                var str =''
                var s = k.indexOf('@')
                while(k[s]!=' '){
                    s++
                    str = str.concat(k[s])
                }
                process.stdout.write(` -> ${str}`);
                k = await getinfo(str)
                namelist = namelist.concat(` -> ${str}`)
                
            }
            
            namelist.concat(' -> end of loop')
            process.stdout.write(' -> end of loop\n');
            res.json({body:namelist})
            
        })()
    })
}
  
  

