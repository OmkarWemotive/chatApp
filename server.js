const path=require("path")
const express=require("express")
const app=express()
const http = require("http").createServer(app);
const port = 3000
const io=require("socket.io")(http)
const bodyParser = require('body-parser');

const publicDirectoryPath=path.join(__dirname,'/')

app.use(express.static(publicDirectoryPath))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*")
    next()
})

const { Op} = require('sequelize')
const db=require('./models')
const Message =db.Message

const messageRouter=require('./controller/message.controller')

let users=[]
io.on("connection",function(socket){
    console.log("user connected ",socket.id)

    // socket.on("userConnected",function (username){
    //
    //     users[username]=socket.id
    //     io.emit("userConnected",username)
    //    })

    // socket.on("sendMessage",function (data){
    //
    //    let socketId=users[data.receiver]
    //    io.to(socketId).emit("newMessage",data)
    //     // Message.create({message:data})
    // })

    //server should listen from each client via its socket
    socket.on("new_message",function (data){
    //server send to client
    io.emit("new_message",data)
    Message.create({message:data})
    })
})

app.get("/",function(request,result){
    result.send("hello world  !")
})

app.get('/getMessages',messageRouter.viewMessage)


http.listen(port, function () {
    console.log("Server started "+ port);
});