//Testing Socket proj w

const express = require('express')
const app = express()
const server = require('http').createServer(app)
var Sock=null
var qrCode=null

const { Client, LocalAuth} = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth({ clientId: "new2" }),
    puppeteer: {
        headless: false,
        executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe'
    }
});


const io = require('socket.io')(server,{
  cors:{origin:['http://localhost:3000']}
})


io.on('connection', (socket)=> {
  console.log(`${socket.id} just connected`);
  Sock=socket
  Sock.emit('gen',qrCode)
  Sock.on('pic',()=>{
    console.log('pic asked');
  })
    
});

app.get('/select', (req, res) => {
  console.log('forwarded');
});


server.listen(3001, () => {
  console.log('listening on :3000');
  client.initialize()

  client.on('qr', qr => {
    qrCode=qr
    Sock && Sock.emit('qr',qr)
  })
  
  client.on('ready', async () => {
    qrCode='connected'
    const pic = await client.getProfilePicUrl(client.info.wid._serialized)
    Sock && Sock.emit('ready',qrCode,pic)
    // Sock && io.sockets.emit('ready')
    console.log('Client is ready!');
  })
});