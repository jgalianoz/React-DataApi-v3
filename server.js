require('node-jsx-babel').install();

import express from 'express';
import engine from 'react-engine';
import path from 'path';

const port = process.env.PORT || 3000;
const app = express();

// Definimos las rutas de los archivos static

app.use(express.static(path.join(__dirname, '/public')))

// Definimos el engine para archivos jsx

app.engine('.jsx', engine.server.create());

// Configuramos las rutas de las vistas

app.set('views', path.join(__dirname, '/src/client/views'));

// Indicamos que el engine a usar es el de archivos jsx

app.set('view engine', 'jsx');

// Le indicamos que use react-engine como engine de nuestas vistas

app.set('view', engine.expressView);

app.get('*', (req, res) => res.render('index', { title: 'Youtube Data Api' }));

app.listen(port, () => console.log(`Server listen in localhost: ${port}`))

