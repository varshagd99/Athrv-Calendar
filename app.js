const express=require('express')
const mongoose=require('mongoose')

const db=require('./utils/db').URL
const Calendar=require('./routes/cal')


mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology: true},()=>{console.log('MongoDB connected')})
 .catch((err)=>console.log(err))

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/calendar',Calendar)


app.listen(process.env.PORT||5000,console.log("Server connected"))