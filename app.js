const express = require('express')

const app = express()

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const path = __dirname + '/templates/'
app.use(express.static(__dirname + '/static'));
app.get('/', (req, res) => {
  res.sendFile(path + "home.html");
  //res.send('Hello World');
});

app.get('/poster', (req, res) => {
    res.sendFile(path + "add-ride.html");
    //res.send('Hello World');
});

app.get('/commentaires', (req, res) => {
    res.sendFile(path + "contact-page.html");
    //res.send('Hello World');
});

app.get('/logout', (req, res) => {
    res.sendFile(path + "logout.html");
    //res.send('Hello World');
});

app.get('/administration', (req, res) => {
    res.sendFile(path + "administration.html");
    //res.send('Hello World');
});

app.get('/login', (req, res) => {
    res.sendFile(path + "loginadmin.html");
    //res.send('Hello World');
});

app.get('/annonces', (req, res) => {
    res.sendFile(path + "all_posts.html");
    //res.send('Hello World');
});

app.get('/details', (req, res) => {
    res.sendFile(path + "page_annonce.html");
    //res.send('Hello World');
});

app.get('/resultats', (req, res) => {
    res.sendFile(path + "print_recherche.html");
    //res.send('Hello World');
});

app.get('/annoncespassagers', (req, res) => {
    res.sendFile(path + "annonces_passag.html");
    //res.send('Hello World');
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
