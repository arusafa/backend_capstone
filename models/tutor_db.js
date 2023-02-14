const mongoose =require("mongoose")

const register_tutor_schema = new mongoose.Schema({

    firstname:{
        type:String,
        require:true,
    },
    lastname:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        require:true,
    },
    password:{
        type:String,
        require:true,
        minLength:5,
    },
    isAccountVerified: {
        
        type: String,
        default:"false"
    },
    accountCreated: {
        type: Date,
        default: Date.now
    },
    
    
    
})

const register_tutor_members =mongoose.model("tutor",register_tutor_schema)
module.exports=register_tutor_members
