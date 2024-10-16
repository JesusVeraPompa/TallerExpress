import Tienda from '../../models/Tienda.js'

let create = async (req, res) => {
    try {
        let valueTienda = req.body
        let all = await Tienda.create(valueTienda)
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
        let valueTienda = req.body
        let all = await Tienda.insertMany(valueTienda)
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