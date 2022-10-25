
# Pokemon Scraping

Este proyecto se realizo para obtener los datos de los pokemones automaticamente desde la api <https://pokeapi.co/> y enviarlos a una base de datos. 

Instalación
-----

Ejecutar el comando:

```ruby
npm i 
```

Ejecución
-----

Crear un archivo .env y agregar las variables para la cadena de conexión con la base de datos: 

```ruby
DB_CNN=mongodb+srv://AdminUser:password@cluster0-shard-00-01-xxxxx.mongodb.net/exapledb?retryWrites=true&w=majority
```
Ejecutar el comando:

```ruby
node index
```
*Nota: El limite de llamadas a la api pueden interrumpir la conexion*