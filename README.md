# TRABAJO PRÁCTICO FINAL - DESARROLLO DE APLICACIONES MULTIPLATAFORMA

Proyecto para el trabajo final de la materia Desarrollo de Aplicaciones Multiplataforma de la Especialización en IOT de la Universidad de Buenos Aires.

Tema: Sistema de Riego Automatizado.
Consiste en una aplicación para el monitoreo de variables de sensores simuladas.


### Pre-requisitos 📋

**Git**
[Descargar] (https://git-scm.com/downloads)

**Docker**
[Descargar] (https://docs.docker.com/engine/install/)

**Node Js**
[Node] (https://nodejs.org/es/download/)

**Ionic**
[Ionic] (https://ionicframework.com/getting-started)

### Instalación 🔧

Clonar desde: 

[Repositorio] (https://github.com/pabloarancibia/tpfinal)


En la terminal, dentro de /tpfinal ejecutar:
```
docker-compose up
```

en /tpfinal/back ejecutar:
```
node index.js
```

en /tpfinal/front ejecutar:
```
ionic serve
```


Ingresa en tu navegador a http://localhost:8100/


## Wiki 📖

## Sensores
En la pantalla principal podrás ver los sensores.
En cada dispositivo tendrás información sobre su Nombre, Descripcion y Ubicación.

![dispositivos](https://github.com/pabloarancibia/tpfinal/blob/main/img/dispositivos.PNG?raw=true)


## Detalle de Dispositivo
Al hacer click sobre uno de los sensores te mostrará la pantalla de "Detalle del Dispositivo" donde se puede observar la última medición obtebida y 3 botones para navegar en la app. 

![detalle](https://github.com/pabloarancibia/tpfinal/blob/main/img/detalle.PNG?raw=true)

## Abrir/Cerrar Electroválvula.
Al hacer clic en "Abrir electroválvula" se simula una apertura de la valvula de riego y se cambia el estado del botón para que puedas cerrar la válvula.

![cerrar](https://github.com/pabloarancibia/tpfinal/blob/main/img/cerrar.PNG?raw=true)

Una vez cerrada la valvula se realizará una nueva medición para ver los valores actuales y se reflejarán en el gráfico.

## Ver todas las Mediciones
Al hacer click en "Ver todas las mediciones" accederemos al listado correspondiente donde visualizamos cada fecha y medición realizada.

![mediciones](https://github.com/pabloarancibia/tpfinal/blob/main/img/mediciones.PNG?raw=true)

## Ver Log de Riegos

Al hacer clic en "Log de riegos" veremos la cantidad de aperturas y cierres de válvula que se realizó.

![riegos](https://github.com/pabloarancibia/tpfinal/blob/main/img/riegos.PNG?raw=true)

## Construido con 🛠️

Frontend:
* Ionic

Backend:
* Express.js
* Node.js

Base de Datos:
* MySQL



## Autores ✒️

* Pablo Arancibia


## Licencia 📄

Este proyecto está bajo la Licencia GPLV3+. 
