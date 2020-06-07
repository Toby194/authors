const mongoose = require('mongoose');


const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Please provide a author name!'
        ],
        minlength: [
            3,
            'Please provide at least 3 characters.'
        ]
    }
}, {
    timestamps: true
});

module.exports.Author =  mongoose.model('Author', AuthorSchema);
