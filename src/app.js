import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import router from "./routes/notas.js";
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
const PORT = process.env.PORT || 5000; // Elige un puerto predeterminado (5000) si no se proporciona la variable de entorno PORT.

/* Middleware */
app.use(morgan('dev'));
app.use(express.json());
app.use(
    cors({
        origin: 'https://bloc-de-notas-final-sb8rh1zs8-maicol-caballeros-projects.vercel.app',
    })
);

/* Rutas */
app.use('/api/', router);

/* Servidor arrancando */
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
    });
