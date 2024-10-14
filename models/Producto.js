import { Schema, model } from 'mongoose'

let collection = 'productos'
let schema = new Schema({
    id: { type: Number, required: true },
    Marca: { type: String, required: true },
    Tipo: { type: String, required: true},
    Precio: { type: String, required: true},
},{
    timestamps: true,
})

let Producto = model(collection, schema)

export default Producto