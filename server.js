import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import ip from 'ip';

const app = express()
const __dirname = path.resolve();


// Set view engine
app.set('view engine', 'ejs');


// Set static files
app.use(express.static(__dirname + '/website'));


// Set index route
app.get('/', (req, res) => {
  res.render('index');
});




// api stuff
app.get('/api/v1/ip', (req, res) => {
    res.status(200).send((req.header('x-forwarded-for') || req.ip).split(':')[3]);
});

app.use(express.json());

app.post('/api/v1/visitor', (req, res) => {
    if ((req.headers['Content-Type'] || req.headers['content-type']) != 'application/json')
    {
        res.status(400).send('content-type must be application/json');
        return;
    }
    var data = req.body;
    res.status(202);
    
});



var PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    if (PORT == 80)
        console.log('Listening on http://sorrow.live');
    else
        console.log('Listening on http://'+ ip.address() +':' + PORT);
})
