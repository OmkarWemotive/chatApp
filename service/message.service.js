const {QueryTypes} = require('sequelize')
const db=require('../models')
const Message =db.Message

//-----------------------------------Add Operation------------------------------------------------
const addMessage = async(type,data)=>{

    try
    {
        let result
        result = await Post.create(data)
        return result
    }
    catch(e)
    {
        throw Error('Error while insert operation')
    }
}
//-----------------------------------View Post------------------------------------------------
const viewMessage=async()=>{
    try
    {
        const data = await Message.findAll({})
        return data
    }
    catch(e)
    {
        throw Error('Error while fetching message')
    }
}

//-----------------------------------------------------------------------------------------------
module.exports={
    addMessage,
    viewMessage

}