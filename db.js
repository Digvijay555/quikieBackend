const mongoose = require("mongoose")
const CONNECTION_URL ="mongodb://localhost:27017/cryptoshow?directConnection=true"


const connetToMongo = () =>{
    mongoose.connect(CONNECTION_URL)
    .then(()=>{console.log('connection successful')})
    .catch((e)=>{
        console.log('no connection')
    })
}

module.exports = connetToMongo;