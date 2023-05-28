# Parcial 2: Programación con tecnologías web

Juan Diego Yepes Parra - 202022391 - [GitHub](https://github.com/juanyepesp)  

## Descripción

Este repositorio contiene el código fuente de una aplicación web que permite a los usuarios registrarse, iniciar sesión, visualizar y editar (si tienen los permisos) los datos de un conjunto de libros. Este es el repositorio del API de donde se obtiene la información: [API](https://github.com/isis3710-uniandes/Parcial2_BE_S2). 

## Dependencias

Las dependencias que se deben instalar son las que sugieren los tutoriales del curso: 

```bash
npm install
npm install react-bootstrap bootstrap
npm install react-router-dom --save
npm install react-intl --save
```

## Ejecución

Desde la carpeta raíz del proyecto, ejecutar el comando:

```bash
npm start
```

## Uso

La aplicación se ejecuta en el puerto 3000. Las rutas disponibles son:

- `/`: Página de inicio. Muestra el login de la aplicación. 
- `/login`: Funciona de la misma forma que la página de inicio.
- `/home`: Página principal de la aplicación. Muestra la lista de libros, junto con el detalle de cada uno.
- `/home-admin`: Página principal de la aplicación para los usuarios administradores. Muestra la lista de libros, junto con el detalle de cada uno. Además, permite editar los detalles de cada libro.

De igual forma, al hacer login, se redirige al usuario a la página correspondiente según su rol. El rol de administrador puede editar los libros, y cuando se detecta este rol se redirige al endpoint de `/home-admin`. Cualquier otro usuario se redirige a `/home`.

## i18n

La aplicación está disponible en inglés y español. Para cambiar el idioma, se deben cambiar los props de la etiqueta `<IntlProvider>` en el archivo `App.js`.


## Proceso de desarrollo

Lo que se hizo para desarrollar el parcial fue en principio hacer los componentes y las vistas de la aplicación, y luego irlos conectando con el API. Para esto se utilizó el hook `useEffect` de React. Luego, se hizo la parte de enrutamiento, se agregaron los estilos y se hizo la internacionalización. 

## Componentes y elementos

Está la separación entre vistas y componentes. Las vistas son las páginas que se muestran en la aplicación, que en este caso son `Login`, `Home` y `HomeAdmin`. Los componentes son los elementos que se reutilizan en las vistas, y solo fue necesario crear uno, que es `BookDetail`, pero que tiene una variante para el administrador, que es `BookDetailAdmin`. De igual forma, los componentes de `react-bootstrap` se usaron en las vistas, como las Cards, los Forms, los componentes de navegación, etc. Finalmente, i18n se implementó con el componente `IntlProvider` de `react-intl`, y los mensajes se guardaron en el directorio `src/locales`.

## Screenshots

<img width="1549" alt="Screenshot 2023-05-28 at 1 24 15 AM" src="https://github.com/juanyepesp/parcial2-web/assets/77981728/71d177e2-62b4-46c7-85ed-eaff0c604bd7">
<img width="1549" alt="Screenshot 2023-05-28 at 1 24 05 AM" src="https://github.com/juanyepesp/parcial2-web/assets/77981728/90cd46d7-5783-4da1-b6a3-c1d863de3392">
<img width="1549" alt="Screenshot 2023-05-28 at 1 23 54 AM" src="https://github.com/juanyepesp/parcial2-web/assets/77981728/897676f7-1d85-434e-a4c7-0e96baf81ead">



