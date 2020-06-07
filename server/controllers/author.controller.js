const { Author } = require('../models/Author.model');



module.exports.index = (req, res) => {
    res.json({
        message:"Hello Author"
    })
}
module.exports.createAuthor = (req, res) => {  
    const {name} = req.body;
    Author.create({
        name
    })
        .then(createdAuthor => res.json(createdAuthor))
        .catch(err => res.json(err));
}

module.exports.getAllAuthors = (req, res) => {
    Author.find({})
        .then(authors => res.json(authors))
        .catch(err => res.status(400).json(err));
}

module.exports.getAuthor = (req, res) => {
    Author.findOne({_id:req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json(err))
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(() => res.json({status: "success"}))
        .catch(err => res.status(400).json(err));
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deleted => res.json(deleted))
        .catch(err => res.json(err))
}


