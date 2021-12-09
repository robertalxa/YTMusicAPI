const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const ManagerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    login:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    secretPhrase:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

//Pre save para criptografar a senha antes de salvar
UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
})


const Manager = mongoose.model('Manager', ManagerSchema);

module.exports = Manager;