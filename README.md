# **Taller Express - BackEnd**

***

### **1 Ejecutamos por Consola para Limpiar la memoria caché en NPM**
~~~
npm cache clear --force
~~~

***

### **2 Ejecutamos por Consola para Instalar las Dependencias**
~~~
npm install
~~~

***

### **3 Crear un Archivo en el directorio Raiz llamado (.env) y agregar adentro del archivo lo siguiente:**
~~~
PORT = 8080
// quitar {} y completa los datos
URI_MONGO = "mongodb+srv://{usuarioMongo}:{contraseña}@{nombreBaseDatos}.w9lh8.mongodb.net/taller_express"
~~~

***

### **4 Ejecutamos por Consola para Subir los Datos a la Base de Datos**
- Cargamos los datos de la Tienda y luego tecleamos Control+C y luego S
~~~
npm run dataTienda
~~~
- Cargamos los datos de la Producto y luego tecleamos Control+C y luego S
~~~
npm run dataProducto
~~~
- Cargamos los datos de la Empleado y luego tecleamos Control+C y luego S
~~~
npm run dataEmpleado
~~~

***

### **5 Ejecutamos por Consola para Iniciar el Servidor**
~~~
npm run dev
~~~

***

### **6 Consultas en Postman de Tiendas**

- Consulta de todas las Tiendas
~~~
http://localhost:8080/api/tiendas/all
~~~

- Consulta por ID
~~~
http://localhost:8080/api/tiendas/id/{valorID}
~~~

- Consulta por Nombre de la Tienda
~~~
http://localhost:8080/api/tiendas/nombre/{valorNombre}
~~~

- Consulta por Direccion de la Tienda
~~~
http://localhost:8080/api/tiendas/direccion/{valorDireccion}
~~~