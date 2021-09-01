### Proyecto deploy firebase angular 

- Crear una aplicación de gestión de alquileres.

Vamos a crear una aplicación que me permita mostrar casas en alquiler, ver los datos de la casa y, posteriormente, situarla en un mapa en Google Maps. 


TAREAS:

1 - Crear modelo de datos para las casas. Inicialmente, vamos a crear un array dentro del servicio que tenga 4 casas. 

2 - Crear un interfaz que defina dicho modelo. 
    Datos: id(number), titulo(string), direccion(string), ciudad(string), numerohabitaciones(number), propierario(string), disponibilidad(boolean), foto(string), latitud(number), longitud(number). 

3 - En app.component, crearemos un menú transversal con dos botones:
    - Listado
    - Nueva casa

4 - Listado cargará componente home, donde se visualizarán todas las casas a modo de cards.

5 - Cada casa tendrá un botón que me lleve a la vista de la casa, donde se visualizarán todos los datos y el mapa.

6 - Nueva casa tendrá un formulario de tipo template sin validaciones que guarde en mi array los datos de la casa. 


// TODO ESTO LO VAMOS A HACER CONTRA UN ARRAY DEL SERVICIO. CUANDO MONTEMOS FIREBASE, SUSTITUIREMOS LAS FUNCIONES DE ARRAY DEL SERVICIO POR LAS PETICIONES A FIREBASE. 

TAREAS UNA A UNA: 

- Tarea crear el servicio, interface y generar rutas según lo explicado arriba. 