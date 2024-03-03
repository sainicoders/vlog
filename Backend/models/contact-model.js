const {Schema,model} =require("mongoose");
const contactSchema = new Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    message:{
        type: String,
        require:true,
    }

});

//crete  a model or a collection
const Contact =new model('Contact',contactSchema);
module.exports=Contact;
