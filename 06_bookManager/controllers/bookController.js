const {getDb} = require('../db/connectDb');
const {ObjectId} = require('mongodb');
 
const getBooks = async (req, res) => {
    try {
        const db = getDb();
        const books =await db.collection('books').find().toArray();
        res.status(200).json({
            success: true,
            books,
        });
    }catch (error) {
        console.error(error);
    }
}

const addBook=async (req, res)=>{
    try {
        const db = getDb();
        const {title,author} = req.body;
        const newBook={
            title,
            author,
        };
        await db.collection('books').insertOne(newBook);
        res.status(201).json({
            success:true,
        });
    } catch (error) {
        console.error(error);
    }
}

const deleteBook =async (req, res)=>{
    try {
        const { id } = req.params;
        const db = await getDb();
        await db.collection('books').deleteOne({ _id: new ObjectId(id) });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete book' });
    }
}

const updateBook =async (req,res) =>{
    try {
        const db = getDb();
        const {author,title} = req.body;
        const {id} = req.params;
        await db.collection('books').updateOne({_id:new ObjectId(id)},{$set:{title,author}});
        res.status(200).send();
    } catch (error) {
        console.error(error);
    }
}

const getBookById =async (req,res) =>{
    try {
        const db = getDb();
        const {id} = req.params;
        const book = await db.collection('books').find({_id:new ObjectId(id)}).toArray();
        res.status(200).json(book);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {getBooks,updateBook,deleteBook,addBook,getBookById};