import { Schema, model } from 'mongoose'

let collection = 'empleados'
let schema = new Schema({
    id: { type: Number, required: true },
    Nombre: { type: String, required: true },
    Cargo: { type: String, required: true},
    Salario: { type: Number, required: true },
},{
    timestamps: true,
})

let Empleado = model(collection, schema)

export default Empleado

