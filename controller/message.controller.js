const {Sequelize} = require('sequelize')
const messageSerice = require('../service/message.service')


//-----------------------------------Add Post------------------------------------------------
const addMessage = async(req,res)=>{

    try
    {
        const data={message:req.body.data}
        const post=await messageSerice.addMessage(data)
        res.status(200).send(post)
    }
    catch(e)
    {
        res.status(400).send(e)
    }
}
//-----------------------------------View my Post------------------------------------------------
const viewMessage=async(req,res)=>{
    try
    {
       const data = await messageSerice.viewMessage()
        res.status(200).send(data)
    }
    catch(e)
    {
        res.status(400).send(e)
    }
}
//-----------------------------------View all Post------------------------------------------------
const viewAllPost=async(req,res)=>{

    try
    {
        const data = await postSerice.viewPost(null)
        res.status(200).send(data)
    }
    catch(e)
    {
        res.status(400).send(e)
    }
}


//-----------------------------------------------------------------------------------------------
module.exports= {
    addMessage,
    viewMessage,

}