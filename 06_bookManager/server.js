const app = require('./app');
const {connectDb} = require('./db/connectDb')
const port = 3000;

const startServer = async ()=>{
  try {
    await connectDb();
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });

  } catch (error) {
    console.error(error);
  }
}

startServer();