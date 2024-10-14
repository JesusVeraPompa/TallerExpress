import "dotenv/config.js"
import '../../config/database.js'
import Tienda from '../Tienda.js'

const tiendas = [
    {
        id: 1,
        Nombre: 'Pedro Sanchez',
        Direccion: 'calle 48 20 12',
        Teléfono: 3013519674,
    },
    {
        id: 2,
        Nombre: 'Carlos Ochoa',
        Direccion: 'calle 10 24 48',
        Teléfono: 302759143,
    },
    {
        id: 3,
        Nombre: 'Juan Delgado',
        Direccion: 'cra 15a 32 10',
        Teléfono: 3037519832,
    },
    {
        id: 4,
        Nombre: 'Maria Perez',
        Direccion: 'calle 22 48 60',
        Teléfono: 3049537812,
    },
    {
        id: 5,
        Nombre: 'Juana Martinez',
        Direccion: 'calle 5c 50 15',
        Teléfono: 3058561412,
    },
    
]

Tienda.insertMany(tiendas)

