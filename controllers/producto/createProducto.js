import Producto from '../../models/Producto.js'

let create = async (req, res) => {
    try {
        let valueProducto = req.body
        let all = await Producto.create(valueProducto)
        return res.status(201).json({
            response: all,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}

let createAll = async (req, res) => {
    try {
        let valueProducto = req.body
        let all = await Producto.insertMany(valueProducto)
        return res.status(201).json({
            response: all,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}

export { create, createAll }