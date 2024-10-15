import Producto from '../../models/Producto.js'

let allProducto = async (req, res) => {
    try {
        let resultado = await Producto.find()
        return res.status(200).json({
            response: resultado,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}

let productosByID = async (req, res) => {
    try {
        let idValue = req.params.idValue
        let resultado = await Producto.find({ id: idValue })
        return res.status(200).json({
            response: resultado,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}

let productosByMarca = async (req, res) => {
    try {
        let marcaValue = req.params.marcaValue
        let resultado = await Producto.find({ Marca: marcaValue })
        return res.status(200).json({
            response: resultado,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}

let productosByTipo = async (req, res) => {
    try {
        let tipoValue = req.params.tipoValue
        let resultado = await Producto.find({ Tipo: tipoValue })
        return res.status(200).json({
            response: resultado,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}

export { allProducto,
    productosByID,
    productosByMarca,
    productosByTipo, }