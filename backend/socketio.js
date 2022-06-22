const { instrument } = require('@socket.io/admin-ui')
const express = require('express')
const app = express()
const {Server} = require('socket.io')

const io = new Server(3001,{
    cors:{
        origin:['https://admin.socket.io/#/','http://localhost:3000']
    }
})

io.on("connection", (socket) => {

    console.log(socket.id);
    socket.on('message',(msg,room,cb)=>{
        if(room ==''){
            socket.broadcast.emit('msg-rec',msg)
            cb(msg)
        }
        else{
            socket.to(room).emit('msg-rec',msg)
            cb(msg)
        }
        
    })

    
    socket.on('join-room',(room,cb)=>{
        socket.join(room)
        cb(room)
    })
  });

instrument(io,{auth:false})
// app.listen(3001)