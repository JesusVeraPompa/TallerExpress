import Empleado from '../../models/Empleado.js'

let create = async (req, res, next) => {
    try {
        let valueEmpleado = req.body
        let createEmpleado = await Empleado.create(valueEmpleado)
        return res.status(201).json({
            success: true,
            message: 'Empleado creado con EXITO',
            data: createEmpleado,
        })
    } catch (error) {
        next(error)
    }
}

let createAll = async (req, res,next) => {
    try {
        let valueEmpleado = req.body
        let insertManyEmpleado = await Empleado.insertMany(valueEmpleado)
        return res.status(201).json({
            success: true,
            message: 'Todos los Empleados creados con EXITO',
            data: insertManyEmpleado,
        })
    } catch (error) {
        next(error)
    }
}

export { create, createAll }
