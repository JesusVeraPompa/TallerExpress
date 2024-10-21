import Producto from '../../models/Producto.js'

let create = async (req, res,next) => {
    try {
        let valueProducto = req.body
        let createProducto = await Producto.create(valueProducto)
        return res.status(201).json({
            success: true,
            message: 'Producto creado con EXITO',
            data: createProducto,
        })
    } catch (error) {
        next(error)
    }
}

let createAll = async (req, res,next) => {
    try {
        let valueProducto = req.body
        let insertManyProducto = await Producto.insertMany(valueProducto)
        return res.status(201).json({
            success: true,
            message: 'Todos los Productos creados con EXITO',
            data: insertManyProducto,
        })
    } catch (error) {
        next(error)
    }
}

export { create, createAll }