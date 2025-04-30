const express = require('express');
const connectDb = require('./config/mongoose');
const noteRoutes = require('./routes/noteRoutes');

const app = express();
app.use(express.json());

const startServer = async()=>{
connectDb();

app.use('/api/notes', noteRoutes);

const PORT =3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

startServer();
