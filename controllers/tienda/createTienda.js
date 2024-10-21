import Tienda from '../../models/Tienda.js'

let create = async (req, res,next) => {
    try {
        let valueTienda = req.body
        let createTienda = await Tienda.create(valueTienda)
        return res.status(201).json({
            success: true,
            message: 'Tienda creada con EXITO',
            data: createTienda,
        })
    } catch (error) {
        next(error)
    }
}

let createAll = async (req, res,next) => {
    try {
        let valueTienda = req.body
        let insertManyTienda = await Tienda.insertMany(valueTienda)
        return res.status(201).json({
            success: true,
            message: 'Todos las Tiendas creadas con EXITO',
            data: insertManyTienda,
        })
    } catch (error) {
        next(error)
    }
}

export { create, createAll }