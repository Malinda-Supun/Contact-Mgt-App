import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from "body-parser";

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
const PORT = 4000;

//body parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

//serving static files
app.use(express.static('public/images'));

app.get('/',(req, res) => {
    res.send(`Node and express server running on port ${PORT}`);
});

app.listen(PORT, () =>
    console.log(`Your server running on port ${PORT}`)
);

