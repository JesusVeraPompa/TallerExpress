import { Schema, model } from 'mongoose'

let collection = 'tiendas'
let schema = new Schema({
    id: { type: Number, required: true },
    Nombre: { type: String, required: true },
    Direccion: { type: String, required: true},
    Teléfono: { type: Number, required: true },
},{
    timestamps: true,
})

let Tienda = model(collection, schema)

export default Tienda


