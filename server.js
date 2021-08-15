import express from 'express'
import mongoose from 'mongoose'

const app = express()

app.get('/', (req,res) => res.status(200).send('hello, world! '));

app.listen(8080, () => console.log('Listening on http://localhost:8080'))
