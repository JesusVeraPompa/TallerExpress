import Empleado from '../../models/Empleado.js'

let create = async (req, res) => {
    try {
        let valueEmpleado = req.body
        let all = await Empleado.create(valueEmpleado)
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
        let valueEmpleado = req.body
        let all = await Empleado.insertMany(valueEmpleado)
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
