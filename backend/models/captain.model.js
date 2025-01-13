const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters']
        },
        lastname:{
            type: String,
            minlength: [3, 'Last name must be at least 3 characters']
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    socketId:{
        type: String
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle:{
        color:{
            type: String,
            required: true,
            minlength: [3, 'Color must be at least 3 characters']
        },
        plate:{
            type: String,
            required: true,
            minlength: [3, 'Plate must be at least 3 characters']
        },
        capacity:{
            type: Number,
            required: true
        },
        vehicleType:{
            type: String,
            enum: ['car', 'motorcycle', 'auto'],
            required: true
        }
    },
    location:{
        lat:{
            type: Number,
        },
        long:{
            type: Number,
        }
    }
});

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id, email: this.email }, process.env.JWT_SECRET);
    return token;
}

captainSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;

