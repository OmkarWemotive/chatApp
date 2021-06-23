
module.exports=(sequelize,Datatypes)=>{

    const Message=sequelize.define('Message',{

        message:
            {
                type:Datatypes.STRING,
                allowNull: false,
            },
        senderId:
            {
                type:Datatypes.INTEGER
            },
        receiverId:
            {
                type:Datatypes.INTEGER
            }

    },{
        freezeTableName: true
    })
    return Message
}