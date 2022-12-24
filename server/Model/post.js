const mongoose=require('mongoose');

const Schema=mongoose.Schema({
    user_name: String,
    rank: {
        type: String,
        unique: true,
        required: true
    }
},{
    versionKey: false
});

module.exports=mongoose.model('Post',Schema);