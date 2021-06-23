const socket=io()

//------------------------part 1-------------------------------------------------------
function sendMessage()
{
    let message=document.getElementById("message").value

    //sending from client
    socket.emit("new_message",message)
    return false
}
//client listen from server
socket.on("new_message",function (data){
    console.log("server Says   ",data)
    let li=document.createElement("li")
    li.innerHTML=data

    let messages= document.getElementById("messages")
    messages.appendChild(li)
})
$.ajax({
    url:"/getMessages",
    method:"GET",
    success:function (response){
        console.log(response)
        let messages= document.getElementById("messages")
        // let data=JSON.parse(response)
        let data=response
        for(let i=0;i<data.length;i++)
        {
            let li=document.createElement("li")
            li.innerHTML=data[i].message
            messages.appendChild(li)
        }
    }
})

//--------------------------------part 2--------------------------------------------------------
let receiver
let sender
// function enterName()
// {
//     let name=document.getElementById("name").value
//     socket.emit("userConnected",name)
//     sender=name
//     return false
// }
//client listen from server
// socket.on("userConnected",function (username){
//     console.log("server Says   ",username)
//
//     let html=""
//     html+="<li><button onclick='onUserSeleted(this.innerHTML)'>"+ username +"</button></li>"
//
//     let messages= document.getElementById("users").innerHTML += html
// })
// function onUserSeleted(username)
// {
//     receiver=username
// }
// function sendMessage1()
// {
//     let message=document.getElementById("message").value
//
//     //sending from client
//     socket.emit("sendMessage",{sender:sender,receiver:receiver,message:message})
//     return false
// }
// socket.on("newMessage",function(data){
//     console.log(data)
// })






