const express = require('express');
const app = express();

app.use(express.static("public"));
app.set('view engine', 'pug');
app.set('views', 'public/views');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/services', (req, res) => {
	res.render('services');
});

const server = app.listen(3000, () => {
	console.log('The server has started at port:' + server.address().port);
});