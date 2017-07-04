const express = require('express');
const app = express();

app.use(express.static("public"));
app.set('views', 'views');
app.set('view engine', 'pug')

app.get('/', (req, res) => {
	res.render('index');
});

const server = app.listen(3000, () => {
	console.log('The server has started at port:' + server.address().port);
});