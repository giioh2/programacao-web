const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;


app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');


app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('formulario');
});


app.post('/agendar-consulta', (req, res) => {
    const dadosPessoais = req.body;

    console.log(dadosPessoais);
    res.send('Formulário enviado com sucesso!');
});

app.listen(port, () => {
    console.log(`Servidor está ouvindo na porta ${port}`);
});
