const express = require ('express')
const app = express() 
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config() 

const authentificationRoute = require('./routes/authentification')
const animeRoute = require ('./routes/anime')
mongoose.connect(`mongodb+srv://kratos123:kratos123@cluster0.bdnjh.mongodb.net/?retryWrites=true&w=majority`,     { useNewUrlParser: true },     () => console.log('Database Connected'))



app.use(express.json())

app.use('/api/user', authentificationRoute)
app.use('',animeRoute)

















app.listen(6000,()=>console.log('server up and working') )  