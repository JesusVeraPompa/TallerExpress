# Taller Express - BackEnd

Pasos para Visualizar el Proyecto


1.- Ejecutamos los siguientes Comando por Consola para Limpiar la memoria caché en NPM (Node Package Manager)
~~~
npm cache clear --force
~~~

2.- Ejecutamos los siguientes Comando por Consola para Instalar las Dependencias
~~~
npm install
~~~

3.- Crear un Archivo en el directorio Raiz llamado (.env) y agregar adentro del archivo lo siguiente:
~~~
PORT = 8080
// quitar {} y completa los datos
URI_MONGO = "mongodb+srv://{usuarioMongo}:{contraseña}@{nombreBaseDatos}.w9lh8.mongodb.net/taller_express"
~~~

4.- Ejecutamos los siguientes Comando por Consola para Subir los Datos a la Base de Datos
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