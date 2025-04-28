const {MongoClient} = require('mongodb');

const uri = 'mongodb://localhost:27017'; 
const client = new MongoClient(uri);
let db;

const connectDb = async ()=>{
    try{
        await client.connect();
        console.log("connected to database");
        db = client.db("bookStore");
    }catch(e){
        console.log(e);
    }
}

const getDb = ()=>{
    if(!db){
        throw new Error('Database not connected yet!');
    }
    return db;
}

module.exports = {connectDb,getDb};