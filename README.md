# ADN-APP

Detector de mutaciones en ADN 

## Comenzando 🚀

Previo al uso de este repositorio se debe de contar con lo siguiente:

[MongoDB] - Base de datos MongoDB

[Angular] - Base de datos Angular

[NodeJS] - Base de datos NoSQL


### Ejecución de forma local 🔧

_Sigue los siguientes pasos para su correcta ejecición_


```
git clone https://github.com/MilthonB/adn-app.git
```

Entrar al directorio clonado adn-app/ADNFRONTEND y ejecuta

```
npm install
```

Luego de generar los modulos ejecuta el siguiente comando para arrancar el frontend de forma local
```
ng serve -o
```
## Ejecutando las pruebas ⚙️

_Rutas URL API_

### Obtener los datos de la mutacion 🔩

_API'S para consultar datos_

```
https://app-node-adn-app.herokuapp.com/api/list
https://app-node-adn-app.herokuapp.com/api/stats
```

### Ejemplos de peticiones ⌨️

_Para hacer peticiones get, post puede instalar postman_
_Para instalarlo en Fedora33 sigue los siguientes pasos. Si no cuentas con Fedora puedes consultar la pagina de [Postman](https://www.postman.com/)_

```
sudo dnf install snapd
sudo ln -s /var/lib/snapd/snap /snap
sudo snap install postman
```

## Peticiones  📦

_Ejemplos de peticiones_


_Esta peticion te regresa los estados, la cantidad de mutaciones y no mutaciones detactadas_

```
    GET https://app-node-adn-app.herokuapp.com/api/stats
```

_Esta peticion te regresa las ultimas 10 Peticiones_

```
    GET https://app-node-adn-app.herokuapp.com/api/list 
```

_Para los POST debes de entrar el postman, nueva pestaña eligir la peticion POST poner la url https://app-node-adn-app.herokuapp.com/api/mutations y a body, raw y cambiar la opcion text a JSON_
```
  POST https://app-node-adn-app.herokuapp.com/api/mutations
{
    "dna": ["ATtttA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
} 
```
## Visitar el sitio 

[ADN-APP](https://app-node-adn-app.herokuapp.com/)
## Contribuyendo 🖇️


---
Por [MilthonB](https://github.com/MilthonB)

[MongoDB]: <http://mongodb.com>
[Angular]: <https://angular.io/>
[NodeJS]: <https://nodejs.org/es/>
