const express=require("express")
const app=express()
const http = require("http").createServer(app);
let io = require("socket.io")(http);

let users=[]
io.on("connection",function(socket){
    console.log("user connected....",socket.id)

    socket.on("user_connected",function(username){
        users[username]=socket.id
        io.emit("user_connected",username)
    })
})

http.listen(3008, function () {

    console.log("Server started");
});


