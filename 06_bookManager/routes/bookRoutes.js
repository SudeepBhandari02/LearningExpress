const express = require('express');
const { getBooks, addBook, deleteBook, updateBook, getBookById } = require('../controllers/bookController');
const route = express.Router();

route.get('/', getBooks);
route.post('/', addBook);
route.delete('/:id', deleteBook);
route.put('/:id', updateBook);
route.get('/:id', getBookById);

module.exports = route;