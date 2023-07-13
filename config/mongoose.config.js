const mongoose = require('mongoose')

const username = process.env.ATLAS_USERNAME
const password = process.env.ATLAS_PASSWORD
const cluster = process.env.ATLAS_CLUSTER
const db = process.env.ATLAS_DB


const connectionString = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${db}?retryWrites=true&w=majority`

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log(`>>ESTABLISHED CONNECTION TO: ${cluster}, ${db}`))
.catch(err=>console.log(`Mongo connection failed!`, err))