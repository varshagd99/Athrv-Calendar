const express=require('express')

const router=express.Router();

const Calendar=require('../model/Calendar/viewCalendar') 

router.get('/info/',async (req,res)=>{
    
    try{
        let {uid} = req.body
        let info = await Calendar.findDates(uid)
        if(info){
        let dates = []
        for (let i in info.dates)
        {
            let  doc= {date:info.dates[i].date,
                      total:info.dates[i].hrs * 3600,
                      details:[]}
            dates.push(doc);
            
        }
        
        console.log(dates)
        return res.status(200).json(dates)
    }
    else{
        return res.json({msg:`No data entries found for ${uid}` })
    }
    }
    catch(err){
        res.json({message:"there is an error"+err})
    }
})

router.post('/post',async (req,res)=>{
    let {uid,date,hrs,status} = req.body
    const info=new Cal({
       uid:uid,
       dates:[{date:date,hrs:hrs,status:status}]
    })
    try{
        const details=await info.save()
        console.log(details)
        res.json(
            {msg:"done succesfully",info:details}
        )
    }
    catch(err){
        
        console.log(err)

        res.status(400).json({msg:"There is an "+err})
    }
})

router.get('/update',async (req,res)=>{
    let {uid}=req.body
    try{
        let user= await Cal.findOne({uid:uid})
        if(!user)
        {
            res.json({msg:"No data entries found"})
           
        }
        else{

            // let update=await Cal.updateOne({uid:user.uid},
            //     {$set:{}})
            console.log(user)
            res.json(user)
        }
    }
    catch(err){
        console.log(err)
    }
})
module.exports=router