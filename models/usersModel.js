const  mongoose  = require("mongoose");

const UserSchema = new mongoose.Schema({

    username:{ type: String },
    password:{ type: String },
    name:{ type: String },
    address:{ type: String },
    age:{ type: Number },
    phone:{ type: String },
    email:{ type: String }
},{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('usersCollection', UserSchema );