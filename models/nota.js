import mongoose, { Schema } from "mongoose";

/* Esquema */
const schema = mongoose.Schema({
    title: String,
    content: String,
})
/* Guardando y exportando el modelo */
export default mongoose.model('Notas', schema)