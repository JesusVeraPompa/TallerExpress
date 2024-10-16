# **Taller Express - BackEnd**

## **Pasos para Visualizar el Proyecto**

-   [1 - Ejecutamos por Consola para Limpiar la memoria caché en NPM](#1---Ejecutamos-por-Consola-para-Limpiar-la-memoria-caché-en-NPM)
-   [2 - Ejecutamos por Consola para Instalar las Dependencias](#2---Ejecutamos-por-Consola-para-Instalar-las-Dependencias)
-   [3 - Crear un Archivo en el directorio Raiz llamado env y agregar adentro del archivo lo siguiente](#3---Crear-un-Archivo-en-el-directorio-Raiz-llamado-env-y-agregar-adentro-del-archivo-lo-siguiente)
-   [4 - Ejecutamos por Consola para Subir los Datos a la Base de Datos](#4---Ejecutamos-por-Consola-para-Subir-los-Datos-a-la-Base-de-Datos)
-   [5 - Ejecutamos por Consola para Iniciar el Servidor](#5---Ejecutamos-por-Consola-para-Iniciar-el-Servidor)
-   [6 - Consultas en Postman de Tiendas](#6---Consultas-en-Postman-de-Tiendas)
-   [7 - Consultas en Postman de Empleado](#7---Consultas-en-Postman-de-Empleado)
-   [8 - Consultas en Postman de Producto](#8---Consultas-en-Postman-de-Producto)
-   [9 - Creacion en Postman de Tiendas](#9---Creacion-en-Postman-de-Tiendas)
-   [10 - Creacion en Postman de Empleado](#10---Creacion-en-Postman-de-Empleado)
-   [11 - Creacion en Postman de Producto](#11---Creacion-en-Postman-de-Producto)

---

### **1 - Ejecutamos por Consola para Limpiar la memoria caché en NPM**

```
npm cache clear --force
```

---

### **2 - Ejecutamos por Consola para Instalar las Dependencias**

```
npm install
```

---

### **3 - Crear un Archivo en el directorio Raiz llamado env y agregar adentro del archivo lo siguiente**

(.env)

```
PORT = 8080
// quitar {} y completa los datos
URI_MONGO = "mongodb+srv://{usuarioMongo}:{contraseña}@{nombreBaseDatos}.w9lh8.mongodb.net/taller_express"
```

---

### **4 - Ejecutamos por Consola para Subir los Datos a la Base de Datos**

#### - Cargamos los datos de la Tienda y luego tecleamos Control+C y luego S

```
npm run dataTienda
```

#### - Cargamos los datos de la Producto y luego tecleamos Control+C y luego S

```
npm run dataProducto
```

#### - Cargamos los datos de la Empleado y luego tecleamos Control+C y luego S

```
npm run dataEmpleado
```

---

### **5 - Ejecutamos por Consola para Iniciar el Servidor**

```
npm run dev
```

---

### **6 - Consultas en Postman de Tiendas**
(GET)

#### - Consulta de todas las Tiendas

```
http://localhost:8080/api/tiendas/all
```

#### - Consulta por ID

```
http://localhost:8080/api/tiendas/id/{valorID}
```

#### - Consulta por Nombre de la Tienda

```
http://localhost:8080/api/tiendas/nombre/{valorNombre}
```

#### - Consulta por Direccion de la Tienda

```
http://localhost:8080/api/tiendas/direccion/{valorDireccion}
```

---

### **7 - Consultas en Postman de Empleado**
(GET)

#### - Consulta de todos los Empleado

```
http://localhost:8080/api/empleados/all
```

#### - Consulta por ID

```
http://localhost:8080/api/empleados/id/{valorID}
```

#### - Consulta por Nombre del Empleado

```
http://localhost:8080/api/empleados/nombre/{valorNombre}
```

#### - Consulta por Cargo del Empleado

```
http://localhost:8080/api/empleados/cargo/{valorDireccion}
```

---

### **8 - Consultas en Postman de Producto**
(GET)

#### - Consulta de todos los Producto

```
http://localhost:8080/api/productos/all
```

#### - Consulta por ID

```
http://localhost:8080/api/productos/id/{valorID}
```

#### - Consulta por Marca del Producto

```
http://localhost:8080/api/productos/marca/{valorNombre}
```

#### - Consulta por Tipo del Producto

```
http://localhost:8080/api/productos/tipo/{valorDireccion}
```

---


### **9 - Creacion en Postman de Tiendas**
(POST)
#### - Crear un sola Tiendas
- Body -> raw -> JSON (Eliminar los parentesis y dato por la informacion de la Tienda)
```
{
    "id":(dato),
    "Nombre":"(dato)",
    "Direccion":"(dato)",
    "Teléfono":(dato)
}
```
```
http://localhost:8080/api/tiendas/create
```

#### - Crear varios Productos
- Body -> raw -> JSON (Eliminar los parentesis y dato por la informacion del producto)
```
[
    {
        "id":(dato),
        "Nombre":"(dato)",
        "Direccion":"(dato)",
        "Teléfono":(dato)
    },
    {
        "id":(dato),
        "Nombre":"(dato)",
        "Direccion":"(dato)",
        "Teléfono":(dato)
    }
]
```
```
http://localhost:8080/api/tiendas/createAll
```

---

### **10 - Creacion en Postman de Empleado**
(POST)
#### - Crear un solo Empleado
- Body -> raw -> JSON (Eliminar los parentesis y dato por la informacion del Empleado)
```
{
    "id": (dato),
    "Nombre": "(dato)",
    "Cargo": "(dato)",
    "Salario": (dato)
}
```
```
http://localhost:8080/api/empleados/create
```

#### - Crear varios Empleados
- Body -> raw -> JSON (Eliminar los parentesis y dato por la informacion del Empleado)
```
[
    {
        "id": (dato),
        "Nombre": "(dato)",
        "Cargo": "(dato)",
        "Salario": (dato)
    },
    {
        "id": (dato),
        "Nombre": "(dato)",
        "Cargo": "(dato)",
        "Salario": (dato)
    }
]
```
```
http://localhost:8080/api/empleados/createAll
```

---

### **11 - Creacion en Postman de Producto**
(POST)
#### - Crear un solo Producto
- Body -> raw -> JSON (Eliminar los parentesis y dato por la informacion del producto)
```
{
    "id":(dato),
    "Marca":"(dato)",
    "Tipo":"(dato)",
    "Precio":(dato)
}
```
```
http://localhost:8080/api/productos/create
```

#### - Crear varios Productos
- Body -> raw -> JSON (Eliminar los parentesis y dato por la informacion del producto)
```
[
    {
        "id":(dato),
        "Marca":"(dato)",
        "Tipo":"(dato)",
        "Precio":(dato)
    },
    {
        "id":(dato),
        "Marca":"(dato)",
        "Tipo":"(dato)",
        "Precio":(dato)
    }
]
```
```
http://localhost:8080/api/productos/createAll
```

---