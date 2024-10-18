const error_handler_response = (error, req, res, next) => {
    console.log(error)
    if (error.status === 400) {
        return res.status(400).json({
            success: false,
            message:"Error de sintaxis en el JSON del Body",
            message_error: `${error.message}`,
            response: error,
        })
    } else {
        return res.status(500).json({
            success: false,
            message:"Error en los Campos al subir los datos",
            message_error: `${error.message}`,
            response: error,
        })
    }
}

export default error_handler_response
