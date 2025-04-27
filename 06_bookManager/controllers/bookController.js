let books = [];

const getBooks = (req, res) => {
    res.status(200).json({
        success: true,
        books,
    });
}

const addBook=(req, res)=>{
    const {title,author} = req.body;
    const newBook={
        id:books.length + 1,
        title,
        author,
    };
    books.push(newBook);
    res.status(201).json({
        success:true,
    });
}

const deleteBook =(req, res)=>{
    const {id}= req.params;
    books = books.filter(book => id!=book.id);
    res.status(204).send();
}

const updateBook = (req,res) =>{
    const {author,title} = req.body;
    const {id} = req.params;
    const book = books.find(book => book.id == id);
    if(!book) return res.status(404).json({error:"book not found"});
    book.author = author;
    book.title = title;
    res.status(200).send();
}

const getBookById = (req,res) =>{
    const {id} = req.params;
    console.log(books);
    
    book = books.find(book => book.id==id);
    console.log(book);
    console.log(id);
    
    if(!book) return res.status(404).json({error:"book not found"});
    
    
    res.status(200).json(book);
}

module.exports = {getBooks,updateBook,deleteBook,addBook,getBookById};