import Empleado from '../../models/Empleado.js'

let allEmpleado = async (req, res) => {
    try {
        let resultado = await Empleado.find()
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
                message: `No se encontro Registro de Empleados en la Base de Datos`,
                registers_found:`${resultado.length}`,
                data: resultado,
            })
        }
    } catch (error) {
        next(error)
    }
}

let empleadosByID = async (req, res) => {
    try {
        let idValue = req.params.idValue
        let resultado = await Empleado.find({ id: idValue })
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

let empleadosByNombre = async (req, res) => {
    try {
        let nombreValue = req.params.nombreValue
        let resultado = await Empleado.find({ Nombre: nombreValue })
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

let empleadosByCargo = async (req, res) => {
    try {
        let cargoValue = req.params.cargoValue
        let resultado = await Empleado.find({ Cargo: cargoValue })
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
                message: `No se encontro Registro en la Base de Datos con: ${cargoValue}`,
                registers_found:`${resultado.length}`,
                data: resultado,
            })
        }
    } catch (error) {
        next(error)
    }
}

export { allEmpleado,
    empleadosByID,
    empleadosByNombre,
    empleadosByCargo, }