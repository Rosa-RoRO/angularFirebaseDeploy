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

1. Tarea 1
    1.1. Tarea crear el servicio, interface y generar rutas según lo explicado arriba. 
    2.2. Crear los componentes para asignar a las rutas específicas. 


2. Tarea 2
    2.1. En el servicio de houses crear un mótodo que me devuelva todas las casas.
    2.2. Consumirlo dentro del componente home y pintar cada casa con bootstrap en dicho componente.
    2.3. Crear un botón de ver detalle que link a la vista de detalle.  

[15:14] Juan Antonio Perez
//Siguiente tarea1 - en la vista de detalle cargar los datos de inmmueble y dejar un espacio asignado dentro de la vista para visualizar un mapa.2 - Crear un menu de navegación transversal para ir a lista de inmuebles y cargar el formulario de registro de un immueble.3 - Crear un formulario de tipo template para añadir a través un elemento al array.

git branch featured-vistadetalle
git checkout ... 
