import 'dotenv/config.js'
import '../../config/database.js'
import Empleado from '../Empleado.js'

const empleados = [
    {
        id: 1,
        Nombre: 'Juan Pérez',
        Cargo: 'Desarrollador',
        Salario: 45000,
    },
    {
        id: 2,
        Nombre: 'María López',
        Cargo: 'Diseñadora',
        Salario: 40000,
    },
    {
        id: 3,
        Nombre: 'Carlos García',
        Cargo: 'Gerente de Proyectos',
        Salario: 60000,
    },
    {
        id: 4,
        Nombre: 'Ana Martínez',
        Cargo: 'Analista de Datos',
        Salario: 48000,
    },
    {
        id: 5,
        Nombre: 'Luis Fernández',
        Cargo: 'Desarrollador',
        Salario: 47000,
    },
    {
        id: 6,
        Nombre: 'Laura Sánchez',
        Cargo: 'Especialista en Marketing',
        Salario: 52000,
    },
    {
        id: 7,
        Nombre: 'Pedro Díaz',
        Cargo: 'Soporte Técnico',
        Salario: 35000,
    },
    {
        id: 8,
        Nombre: 'Sofía Ruiz',
        Cargo: 'Product Manager',
        Salario: 65000,
    },
    {
        id: 9,
        Nombre: 'Diego Torres',
        Cargo: 'Contador',
        Salario: 49000,
    },
    {
        id: 10,
        Nombre: 'Marta Jiménez',
        Cargo: 'Recursos Humanos',
        Salario: 45000,
    },
    {
        id: 11,
        Nombre: 'Javier Morales',
        Cargo: 'Desarrollador',
        Salario: 47000,
    },
    {
        id: 12,
        Nombre: 'Claudia Gómez',
        Cargo: 'Administrativa',
        Salario: 40000,
    },
    {
        id: 13,
        Nombre: 'Francisco Castro',
        Cargo: 'Analista de Sistemas',
        Salario: 53000,
    },
    {
        id: 14,
        Nombre: 'Isabel Romero',
        Cargo: 'Diseñadora',
        Salario: 42000,
    },
    {
        id: 15,
        Nombre: 'Ricardo Silva',
        Cargo: 'Desarrollador',
        Salario: 48000,
    },
]

Empleado.insertMany(empleados)
