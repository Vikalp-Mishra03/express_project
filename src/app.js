const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

// Public static path
const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../views');

app.set('view engine', 'hbs');
app.set('views', viewsPath);

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/weather', (req, res) => {
    res.send('Get information related to the weather of my empire');
});

app.get('*', (req, res) => {
    res.render('404error');
});

app.listen(port, () => {
    console.log('Listening on port 8000');
});
