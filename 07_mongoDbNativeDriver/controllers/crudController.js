const connectDb = require('../database/dbConnect');


const createProduct = async (product) =>{
    const db = await connectDb();
    await db.collection('products').insertOne(product);
}

const getProducts = async () =>{
    const db = await connectDb();
    return await db.collection('products').find().toArray();
}

const updateProduct = async (filter,details) =>{
    const db = await connectDb();
    await db.collection('products').updateOne(filter,{$set:details});
}

const deleteProduct = async (product) =>{
    const db = await connectDb();
    await db.collection('products').deleteOne(product);
}

module.exports = {createProduct,getProducts,updateProduct,deleteProduct};

