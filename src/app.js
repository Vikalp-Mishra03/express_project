const express = require('express');
const path = require('path')
const app = express();
const port = process.env.PORT || 8000;

// public static path
const static_Path = path.join(__dirname, '../public')

app.use(express.static(static_Path))

console.log(path.join())
app.get('/', (req, res) => {
    res.send('Welcome to my empire')
})
app.get('/about', (req, res) => {
    res.send('here u got all the knowledge about my empire')
})
app.get('/weather', (req, res) => {
    res.send('get information related to weather of my empire')
})
app.get('*', (req, res) => {
    res.send('404 error page')
})

app.listen(port, () => {
    console.log('listening to the port 8000')
})