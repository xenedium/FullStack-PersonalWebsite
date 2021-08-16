import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import ip from 'ip';

const app = express()
const __dirname = path.resolve();


// render index.html
app.get('/', (req, res) => {
    var options = {
        root: __dirname + '/website',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
  res.sendFile('index.html', options);
});

app.get('/static/css/main.04204eaf.chunk.css',
    (req, res) => {
        var options = {
            root: __dirname + '/website/static/css',
            dotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
        };
        res.sendFile('main.04204eaf.chunk.css', options);
    }
);

app.get('/static/js/2.dd019781.chunk.js', (req, res) => {
    var options = {
        root: __dirname + '/website/static/js',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    res.sendFile('2.dd019781.chunk.js', options);
});

app.get('/static/js/main.f88129e8.chunk.js', (req, res) => {
    var options = {
        root: __dirname + '/website/static/js',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    res.sendFile('main.f88129e8.chunk.js', options);
});

app.get('/static/js/postreq.js', (req, res) => {
    var options = {
        root: __dirname + '/website/static/js',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    res.sendFile('postreq.js', options);
});

app.get('/static/js/postreq.js', (req, res) => {
    var options = {
        root: __dirname + '/website/static/js',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    res.sendFile('postreq.js', options);
});

app.get('/static/media/abderraziqahmed.5cc67725.png', (req, res) => {
    var options = {
        root: __dirname + '/website/static/media/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    res.sendFile('abderraziqahmed.5cc67725.png', options);
});

app.get('/logo192.png', (req, res) => {
    var options = {
        root: __dirname + '/website/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    res.sendFile('logo192.png', options);
});

app.get('/favicon.ico', (req, res) => {
    var options = {
        root: __dirname + '/website/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    res.sendFile('favicon.ico', options);
});


// api stuff
app.get('/api/v1/ip', (req, res) => {
    res.status(200).send((req.header('x-forwarded-for') || req.ip).split(':')[3]);
});



var PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    if (PORT == 80)
        console.log('Listening on http://sorrow.live');
    else
        console.log('Listening on http://'+ ip.address() +':' + PORT);
})
