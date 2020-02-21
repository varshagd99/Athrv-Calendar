const mongoose=require("mongoose")
const Schema=mongoose.Schema;

const CalenderSchema=new Schema({
    uid:{type:String,
         unique:true},
    dates:[
        { date:{type:Date,
          default:Date.now},
          hrs:Number,
          status:String}]
    // uid:{type:String,
    //     unique:true,
    //     date:[{ type:Date,
    //             unique:true,
    //             status:String,
    //             Noofworkinghrs:Number
    //            }]}
    
})


let cal=mongoose.model('Calender',CalenderSchema)
module.exports=cal