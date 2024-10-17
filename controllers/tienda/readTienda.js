import Tienda from '../../models/Tienda.js'

let allTienda = async (req, res) => {
    try {
        let resultado = await Tienda.find()
        if (resultado.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'Registros encontrados con EXITO',
                registers_found:`${resultado.length}`,
                data: resultado,
            })
        } else {
            return res.status(404).json({
                success: false,
                message: `No se encontro Registro de Tiendas en la Base de Datos`,
                registers_found:`${resultado.length}`,
                data: resultado,
            })
        }
    } catch (error) {
        return res.status(500).json({
            data: error,
        })
    }
}

let tiendasByID = async (req, res) => {
    try {
        let idValue = req.params.idValue
        let resultado = await Tienda.find({ id: idValue })
        if (resultado.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'Registro encontrado con EXITO',
                registers_found:`${resultado.length}`,
                data: resultado,
            })
        } else {
            return res.status(404).json({
                success: false,
                message: `No se encontro Registro en la Base de Datos con: ${idValue}`,
                registers_found:`${resultado.length}`,
                data: resultado,
            })
        }
    } catch (error) {
        next(error)
    }
}

let tiendasByDireccion = async (req, res) => {
    try {
        let direccionValue = req.params.direccionValue
        let resultado = await Tienda.find({ Direccion: direccionValue })
        if (resultado.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'Registro encontrado con EXITO',
                registers_found:`${resultado.length}`,
                data: resultado,
            })
        } else {
            return res.status(404).json({
                success: false,
                message: `No se encontro Registro en la Base de Datos con: ${direccionValue}`,
                registers_found:`${resultado.length}`,
                data: resultado,
            })
        }
    } catch (error) {
        next(error)
    }
}

let tiendasByNombre = async (req, res) => {
    try {
        let nombreValue = req.params.nombreValue
        let resultado = await Tienda.find({ Nombre: nombreValue })
        if (resultado.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'Registro encontrado con EXITO',
                registers_found:`${resultado.length}`,
                data: resultado,
            })
        } else {
            return res.status(404).json({
                success: false,
                message: `No se encontro Registro en la Base de Datos con: ${nombreValue}`,
                registers_found:`${resultado.length}`,
                data: resultado,
            })
        }
    } catch (error) {
        next(error)
    }
}

export { allTienda,
    tiendasByID,
    tiendasByDireccion,
    tiendasByNombre, }