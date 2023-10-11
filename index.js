import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import router from "./src/routes/notas.js";
import cors from "cors";

/* raiz de la app */
const app = express();
/* Concexión a la db */
mongoose.connect('mongodb+srv://admin:admin777@blocnotasdb.akuruqk.mongodb.net/blocnotasdb?retryWrites=true&w=majority')
    .then(() => {
        console.log('Conectado a la base de datos de MongoDB Atlas');
    })
    .catch(error => {
        console.error('Error al conectar a MongoDB Atlas:', error);
    });

/* Configuracion */
const PORT = process.env.PORT || 3000; // Elige un puerto predeterminado (5000) si no se proporciona la variable de entorno PORT.

/* Middleware */
app.use(morgan('dev'));
app.use(express.json());
app.use(
    cors({
        origin: 'https://bloc-de-notas-final.vercel.app/',
    })
);

/* Rutas */
app.get("/", (req, res) => {
    const htmlResponse = `
    <html>
        <head>
            <title>Backend api del bloc de notas</title>
        </head>
        <body>
            <h1>Soy la api que permite la comunicacion con el front</h1>
        </body>
    `;
    res.send(htmlResponse);
});
app.use('/api/', router);

/* Servidor arrancando */
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
    });
