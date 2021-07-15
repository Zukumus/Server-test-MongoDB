import express from 'express';
import mongoose from 'mongoose';
import router from './Router.js';
import fileUpload from 'express-fileupload';

const port = 3000;
const mongoDB_URL = 'mongodb://Evgeny:Evgeny@cluster0-shard-00-00.ptfrx.mongodb.net:27017,cluster0-shard-00-01.ptfrx.mongodb.net:27017,cluster0-shard-00-02.ptfrx.mongodb.net:27017/TestData?ssl=true&replicaSet=atlas-g00by9-shard-0&authSource=admin&retryWrites=true&w=majority'

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);
// 
async function startApp() {
    try {
        await mongoose.connect(mongoDB_URL, { useNewUrlParser: true })
        app.listen(port, () => console.log(`server started on port: ${port}`));
    } catch (e) {
        console.log(e)
    }
};

startApp();
// GET Method
// app.get('/', (req, res) => {
//     console.log(req.query);
//     res.status(200).json('Server is good worked')
// });