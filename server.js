import express from 'express';
import path from 'path';
import mongodb from 'mongodb';
import https from 'https';
import http from 'http';
import fs from 'fs';

const blackList = ["0.0.0.0"];

const privateKey = fs.readFileSync("./certs/sorrow.live.key");
const certificate = fs.readFileSync("./certs/sorrow.live.cert");

const credentials = {
    key: privateKey,
    cert: certificate
};

// Create an express server
const app = express()
const httpApp = express();
const __dirname = path.resolve();
app.use(express.json());

// set MongoDb connection
const MongoClient = mongodb.MongoClient;
const dbclient = new MongoClient('mongodb://localhost:27017', {useUnifiedTopology: true});
await dbclient.connect();
const db = dbclient.db('MyPersonalWebsite');
const collection = db.collection('visitors');


// Set view engine
app.set('view engine', 'ejs');


// Set static files
app.use(express.static(__dirname + '/website'));


// Set index route
app.get('/', (req, res) => {
  res.render('index');
});

// redirect to https
httpApp.get('*', (req, res) => {
  res.redirect('https://sorrow.live/');
});


// api stuff
app.get('/api/v1/ip', (req, res) => {   //route for getting ip of the visitor
    res.header('Connection', 'close');
    res.status(200).send((req.header('x-forwarded-for') || req.ip).split(':')[3]);
});

app.post('/api/v1/visitor', (req, res) => { //route for adding a visitor to the database
    res.header('Connection', 'close');
    if (blackList.includes(req.ip.split(':')[3]))
    {
        res.status(403).send('Forbidden');
    }
    if ((req.headers['Content-Type'] || req.headers['content-type']) != 'application/json')
    {
        res.status(400).send('content-type must be application/json');
        return;
    }
    var data = req.body;

    var visitor = {
        ip: data.ip || req.ip,
        date: data.date,
        page: data.page,
        referrer: data.referrer,
        history: data.history,
        browser: {
            name: data.browser.name,
            engine: data.browser.engine,
            version1a: data.browser.version1a,
            version1b: data.browser.version1b,
            language: data.browser.language,
            online: data.browser.online,
            platform: data.browser.platform,
            cookies: data.browser.cookies,
        },
        screen: {
            width: data.screen.width,
            height: data.screen.height,
            availWidth: data.screen.availWidth,
            availHeight: data.screen.availHeight,
            colorDepth: data.screen.colorDepth,
            pixelDepth: data.screen.pixelDepth,
        },
        inner: {
            width: data.inner.width,
            height: data.inner.height,
        },
        avail: {
            width: data.avail.width,
            height: data.avail.height,
        },
        color: {
            colordepth: data.color.colordepth,
            pixeldepth: data.color.pixeldepth,
        }
    }
    res.status(202).send();
    collection.insertOne(visitor);
});


// Create a server
const httpServer = http.createServer(httpApp);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80);
httpsServer.listen(443, () => {
    console.log('Server running on https://sorrow.live');
});
