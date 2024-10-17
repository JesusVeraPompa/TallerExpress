import Producto from '../../models/Producto.js'

let allProducto = async (req, res) => {
    try {
        let resultado = await Producto.find()
        if (resultado.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'Registros encontrados con EXITO',
                registers_found: `${resultado.length}`,
                data: resultado,
            })
        } else {
            return res.status(404).json({
                success: false,
                message: `No se encontro Registro de Productos en la Base de Datos`,
                registers_found: `${resultado.length}`,
                data: resultado,
            })
        }
    } catch (error) {
        next(error)
    }
}

let productosByID = async (req, res) => {
    try {
        let idValue = req.params.idValue
        let resultado = await Producto.find({ id: idValue })
        if (resultado.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'Registro encontrado con EXITO',
                registers_found: `${resultado.length}`,
                data: resultado,
            })
        } else {
            return res.status(404).json({
                success: false,
                message: `No se encontro Registro en la Base de Datos con: ${idValue}`,
                registers_found: `${resultado.length}`,
                data: resultado,
            })
        }
    } catch (error) {
        next(error)
    }
}

let productosByMarca = async (req, res) => {
    try {
        let marcaValue = req.params.marcaValue
        let resultado = await Producto.find({ Marca: marcaValue })
        if (resultado.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'Registro encontrado con EXITO',
                registers_found: `${resultado.length}`,
                data: resultado,
            })
        } else {
            return res.status(404).json({
                success: false,
                message: `No se encontro Registro en la Base de Datos con: ${marcaValue}`,
                registers_found: `${resultado.length}`,
                data: resultado,
            })
        }
    } catch (error) {
        next(error)
    }
}

let productosByTipo = async (req, res) => {
    try {
        let tipoValue = req.params.tipoValue
        let resultado = await Producto.find({ Tipo: tipoValue })
        if (resultado.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'Registro encontrado con EXITO',
                registers_found: `${resultado.length}`,
                data: resultado,
            })
        } else {
            return res.status(404).json({
                success: false,
                message: `No se encontro Registro en la Base de Datos con: ${tipoValue}`,
                registers_found: `${resultado.length}`,
                data: resultado,
            })
        }
    } catch (error) {
        next(error)
    }
}

export { allProducto, productosByID, productosByMarca, productosByTipo }
