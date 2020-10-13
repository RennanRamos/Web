const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const path = require ('path');

const routes = require ('./routes');

const app = express();

mongoose.connect('mongodb+srv://rennan:COLOCA_A_SENHA_DEPOIS@web-qxcpq.mongodb.net/web?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// GET, POST, PUT, DELETE
// req.query = acessar query params (para filtros)
// req.paramns = acessar rout params (para edição, delete)
// req.body = acessar corpo de requisição (para criação, edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);
