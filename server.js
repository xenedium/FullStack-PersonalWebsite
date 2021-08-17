import express from 'express';
import path from 'path';
import ip from 'ip';
import mongodb from 'mongodb';
import https from 'https';
import fs from 'fs';

const privateKey = fs.readFileSync("./certs/sorrow.live.key");
const certificate = fs.readFileSync("./certs/sorrow.live.cert");

const credentials = {
    key: privateKey,
    cert: certificate
};

// Create an express server
const app = express()
const __dirname = path.resolve();
app.use(express.json());


// Set view engine
app.set('view engine', 'ejs');


// Set static files
app.use(express.static(__dirname + '/website'));


// Set index route
app.get('/', (req, res) => {
  res.render('index');
});

// set MongoDb connection
const MongoClient = mongodb.MongoClient;
const dbclient = new MongoClient('mongodb://localhost:27017', {useUnifiedTopology: true});
await dbclient.connect();
const db = dbclient.db('MyPersonalWebsite');
const collection = db.collection('visitors');

// api stuff
app.get('/api/v1/ip', (req, res) => {   //route for getting ip of the visitor
    res.header('Connection', 'close');
    res.status(200).send((req.header('x-forwarded-for') || req.ip).split(':')[3]);
});

app.post('/api/v1/visitor', (req, res) => { //route for adding a visitor to the database
    res.header('Connection', 'close');
    if ((req.headers['Content-Type'] || req.headers['content-type']) != 'application/json')
    {
        res.status(400).send('content-type must be application/json');
        return;
    }
    var data = req.body;
    // check if data is valid
    if (data.ip == undefined)
    {
        res.status(400).send('ip is required');
        return;
    }
    res.status(202).send();
    collection.insertOne(data);
});


const httpsServer = https.createServer(credentials, app);
httpsServer.listen(443, () => {
    console.log('Server running on https://sorrow.live');
});
