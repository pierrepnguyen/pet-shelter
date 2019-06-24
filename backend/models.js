const mongoose = require('mongoose');
const connect = 'mongodb://localhost/MODEL'; 
// CHANGE MODEL
mongoose.connect(connect, {useNewUrlParser:true});

// CHANGE SCHEMA NAME
const PetSchema = mongoose.Schema({
    name: {
        type: String, 
        minlength: [3, 'Pet name must be at least 3 characters'],
        required: [true, 'Name is required']
    },
    type: { type: String, minlength: [3, 'Pet type must be at least 3 characters'], required: [true, 'Type is required'] },
    description: { type: String, minlength: [3, 'Pet description must be at least 3 characters'], required: [true, 'Description is required'] },
    skill_one: { type: String },
    skill_two: { type: String },
    skill_three: { type: String },
    likes: { type: Number }
}, { timestamps: true });

module.exports = { 
	Pet: mongoose.model('Pet', PetSchema)
}