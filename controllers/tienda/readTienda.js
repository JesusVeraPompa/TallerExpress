import Tienda from '../../models/Tienda.js'

let allTienda = async (req, res) => {
    try {
        let resultado = await Tienda.find()
        return res.status(200).json({
            response: resultado,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}

let tiendasByID = async (req, res) => {
    try {
        let idValue = req.params.idValue
        let resultado = await Tienda.find({ id: idValue })
        return res.status(200).json({
            response: resultado,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}

let tiendasByDireccion = async (req, res) => {
    try {
        let direccionValue = req.params.direccionValue
        let resultado = await Tienda.find({ Direccion: direccionValue })
        return res.status(200).json({
            response: resultado,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}

let tiendasByNombre = async (req, res) => {
    try {
        let nombreValue = req.params.nombreValue
        let resultado = await Tienda.find({ Nombre: nombreValue })
        return res.status(200).json({
            response: resultado,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}

export { allTienda,
    tiendasByID,
    tiendasByDireccion,
    tiendasByNombre, }