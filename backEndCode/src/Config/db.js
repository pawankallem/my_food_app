const mongoose=require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb+srv://pavan:pavan_123@cluster0.fvvbk.mongodb.net/foodApp?retryWrites=true&w=majority")
}
