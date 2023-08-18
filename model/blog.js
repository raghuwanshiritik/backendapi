const mongoose = require('mongoose')



//define schema or(field)
const BlogSchema = new mongoose.Schema({

    title:{ 
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    // image:{
    //     public_id:{
    //         type:String
    //     },
    //     url:{
    //             type:String
    //     }
    // }

},{timestamps:true})



//create collection
//where blog is a collection name
//blogschema is the field of bolg collection
const BlogModel = mongoose.model('bolg',BlogSchema)

module.exports =BlogModel