import Empleado from '../../models/Empleado.js'

let allEmpleado = async (req, res) => {
    try {
        let resultado = await Empleado.find()
        return res.status(200).json({
            response: resultado,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}

let empleadosByID = async (req, res) => {
    try {
        let idValue = req.params.idValue
        let resultado = await Empleado.find({ id: idValue })
        return res.status(200).json({
            response: resultado,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}

let empleadosByNombre = async (req, res) => {
    try {
        let nombreValue = req.params.nombreValue
        let resultado = await Empleado.find({ Nombre: nombreValue })
        return res.status(200).json({
            response: resultado,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}

let empleadosByCargo = async (req, res) => {
    try {
        let cargoValue = req.params.cargoValue
        let resultado = await Empleado.find({ Cargo: cargoValue })
        return res.status(200).json({
            response: resultado,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}


export { allEmpleado,
    empleadosByID,
    empleadosByNombre,
    empleadosByCargo, }