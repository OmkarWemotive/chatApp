const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize('web_chat','root','',{
    host:'localhost',
    dialect:'mysql',
    logging:false
})

sequelize.authenticate()
    .then(()=>{
        console.log('connected...')
    }).catch(e=>{
    console.log(e)
})

const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize

db.sequelize.sync()
    .then(()=>{
        console.log('yes re-sync')
    })

db.Message=require('./message')(sequelize,DataTypes)


// db.comments.hasMany(db.users,{foreignKey:'user_id',as:'allComment'})

// db.friendRequest.hasMany(db.users)
// db.friendRequest.belongsTo(db.users)
// db.users.belongsTo(db.friendRequest)

module.exports=db