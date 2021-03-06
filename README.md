# ADN-APP

Detector de mutaciones en ADN 

## Comenzando 馃殌

Previo al uso de este repositorio se debe de contar con lo siguiente:

[MongoDB] - MongoDB

[Angular] - Angular

[NodeJS] -  NodeJS


### Ejecuci贸n de forma local 馃敡

_Sigue los siguientes pasos para su correcta ejecuci贸n_


```
git clone https://github.com/MilthonB/adn-app.git
```

Entrar al directorio clonado adn-app/ADNFRONTEND y ejecuta

```
npm install
```

Luego de generar los m贸dulos ejecuta el siguiente comando para arrancar el frontend de forma local
```
ng serve -o
```
## Ejecutando las pruebas 鈿欙笍

_Rutas URL API_

### Obtener los datos de la mutaci贸n 馃敥

_API para consultar datos_

```
https://app-node-adn-app.herokuapp.com/api/mutations
https://app-node-adn-app.herokuapp.com/api/list
https://app-node-adn-app.herokuapp.com/api/stats
```

### Ejemplos de peticiones 鈱笍

_Para hacer peticiones get, post puede instalar postman_
_Para instalarlo en Fedora33 sigue los siguientes pasos. Si no cuentas con Fedora puedes consultar la p谩gina de [Postman](https://www.postman.com/)_

```
sudo dnf install snapd
sudo ln -s /var/lib/snapd/snap /snap
sudo snap install postman
```

## Peticiones  馃摝

_Ejemplos de peticiones_


_Esta petici贸n te regresa los estados, la cantidad de mutaciones y no mutaciones detectadas_

```
    GET https://app-node-adn-app.herokuapp.com/api/stats
```

_Esta petici贸n te regresa los 煤ltimas 10 registros_

```
    GET https://app-node-adn-app.herokuapp.com/api/list 
```

_Esta petici贸n te regresa todo_

```
    GET https://app-node-adn-app.herokuapp.com/api/mutatios 
```


_Para los POST debes de entrar el postman, nueva pesta帽a elegir la petici贸n POST poner la url https://app-node-adn-app.herokuapp.com/api/mutation y a body, raw y cambiar la opci贸n text a JSON_
```
  POST https://app-node-adn-app.herokuapp.com/api/mutation
{
    "dna": ["ATtttA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
} 
```
## Visitar el sitio 

[ADN-APP](https://app-node-adn-app.herokuapp.com/)
## Contribuyendo 馃枃锔?


---
Por [MilthonB](https://github.com/MilthonB)

[MongoDB]: <http://mongodb.com>
[Angular]: <https://angular.io/>
[NodeJS]: <https://nodejs.org/es/>
