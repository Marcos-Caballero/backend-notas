import { Router } from "express";
/* Importando el esquema */
import Notas from "../../models/nota.js";

/* Rutas */
const router = Router();
/* Recuperar data de la db */
router.get('/notas', async(req, res) => {
    const notas = await Notas.find();
    res.send(notas)
})
/* Enviar la data a la  db */
router.post('/notas', async(req, res) => {
    const nota = new Notas({
        title: req.body.title,
        content: req.body.content,
    })
    await nota.save()
    res.send(nota)
})
/* Recuperar data de la db por ID */
router.get('/notas/:id', async(req, res) => {
    const nota = await Notas.findOne({ _id: req.params.id })
    res.send(nota)
})
/* Editar y actualizar data de la db */
router.patch('/notas/:id', async(req, res) => {
    try {
        const nota = await Notas.findOne({ _id: req.params.id})
        if (req.body.title) {
            nota.title = req.body.title
        } if(req.body.content){
            nota.content = req.body.content
        }
        nota.save()
        res.send(nota)
    } catch (error) {
        res.send('La nota no se ha guardado')
    }
})

/* Eliminar data de la db */
router.delete('/notas/:id', async(req, res) => {
    try {
        const nota = await Notas.deleteOne({ _id: req.params.id})
        res.send(nota)
        } catch (error) {
        res.send('La nota no se ha guardado')
    }
})

export default router;