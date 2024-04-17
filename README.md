# vue-router

Vue.js Router es una biblioteca oficial para el enrutamiento en aplicaciones Vue.js. 

### Caracteristicas principales

* Anidamiento de rutas: Permite crear estructuras de rutas jerárquicas para aplicaciones complejas.
* Guardias de ruta: Permite controlar el acceso a las rutas y redirigir a los usuarios según determinadas condiciones.
* Enlaces dinámicos: Permite crear enlaces dinámicos que se actualizan automáticamente en función de los datos del componente.

### Agregando Vue Router SPA al comenzar proyecto

![image](https://github.com/fredinfu/vue-router-localstorage/assets/23424560/d9f5af46-45ed-46ef-9276-cb49d9f3d565)

### Archivos y configuraciones agregadas


Una vez creado el proyecto en el archivo podemos ver que se creo una carpeta "router" y un archivo index.js en la ubicacion ./proyecto/src/router/index.js

Podemos ver que se agregaron rutas adicionales para proposito de ver como funciona el router, las rutas agregadas son /bulbasaur, /charmander y /squirtle.

![image](https://github.com/fredinfu/vue-router-localstorage/assets/23424560/ecfc1f83-79f1-4fb6-93e5-4f3eac7a1f34)

Tambien se agrego modificaciones en ./proyecto/src/main.js podemos ver que en la linea 5 y 9 se agrego el uso de router.
![image](https://github.com/fredinfu/vue-router-localstorage/assets/23424560/c683ab47-78ab-4e70-bfaa-3d9822a090ac)


```sh
cd vue-router-localstorage/
```
# vue-localStorage

### Características principales

Almacenamiento clave-valor: localStorage almacena datos en pares de clave-valor. Cada clave debe ser única dentro del mismo origen.

Persistencia: Los datos almacenados en localStorage son persistentes, lo que significa que se conservan incluso después de cerrar la pestaña o el navegador.

Sincronización: localStorage está disponible en todas las pestañas y ventanas del mismo origen. Esto significa que los datos se pueden compartir entre diferentes partes de la misma aplicación web.

![image](https://github.com/fredinfu/vue-router-localstorage/assets/23424560/c844497b-493c-4423-ba1f-aec3a4c3ad52)

### Consideraciones
Seguridad: localStorage no es un método de almacenamiento seguro para datos confidenciales. Si necesitas almacenar datos confidenciales, utiliza un método de almacenamiento más seguro, como cookies HTTP o almacenamiento del lado del servidor.

Privacidad: Los datos almacenados en localStorage son accesibles por JavaScript en el mismo origen. Esto significa que cualquier sitio web en el mismo origen puede acceder a los datos almacenados por tu sitio web.

Rendimiento: El acceso a localStorage puede tener un impacto en el rendimiento de la aplicación, especialmente si se accede a datos grandes con frecuencia.


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
