const Calendar=require('../Schema/calSchema')

module.exports.findDates=async function(uid){
    try{
        return await Calendar.findOne({uid:uid})

    }
    catch(err)
    {
        throw new Error(err)
    }

}