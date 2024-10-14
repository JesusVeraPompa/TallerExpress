import mongoose from 'mongoose'

let url = process.env.URI_MONGO

console.log(url)

async function conexionDataBase() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log('base de datos conectada')
    } catch (error) {
        console.log(error)
    }
}

conexionDataBase()
