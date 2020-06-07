const authorsController = require('../controllers/author.controller');
// note that we are exporting a function to server.js!//
module.exports = app => {
    app.get('/api', authorsController.index);
    app.post('/api/authors', authorsController.createAuthor);
    app.get('/api/authors', authorsController.getAllAuthors);
    app.get('/api/authors/:id', authorsController.getAuthor);
    app.put('/api/authors/:id', authorsController.updateAuthor);
    app.delete('/api/authors/:id', authorsController.deleteAuthor);
}