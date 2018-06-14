# Prueba técnica

## Ejercicio 1
- Se han creado dos funciones distintas:
    - listar_divisores
    - analizar
- `listar_divisores` itera desde 2 hasta la mitad del número ya que el 1 siempre es divisor
y más de la mitad del número no es posible encontrar más divisores.
De esta manera, se optimiza la comprobación de divisores.
- `analizar` devuelve 3 constantes distintas según el tipo de número que sea.
- Las constantes se exponen al principio de módulo en mayúsculas porque es una convención bastante seguida.
- Se han proporcionado tests unitarios
- El código sigue al estilo PEP-8.

## Ejercicio 2
Se ha realizado una aplicación minimalista en Django sin hacer uso de ninguna base de datos para
poder servir las series mediante AJAX.

Para la ejecución, instalar dependencias:
    pip install -r requirements.txt

y luego ejecutar:
    python ejercicio2/manage.py runserver


Estructura:
    urls.py:
        Estos son los endpoints proporcionados:
            data
                Mediante este endpoint se descarga los datos mediante AJAX
            index.html
            about.html

    views.py:
        Aquí se encuentra la vista que maneja la consulta AJAX para proporcionar las series.

    templates:
        Página html:
            - index.html
            - about.html

    static:
        Todas las componentes estáticas de las páginas HTML
            - javascript
            - css
            - librerías de terceros
            - tests
            - datos de las series


Todo el código javascript se encuentra en:
    ejercicio2/static/js

Se ha usado require.js para modularizar el código.

El módulo principal es "main.js".

`chart1.js` proporciona la función para dibujar el gráfico de lineas.

`chart2.js` proporciona la función para dibujar el gráfico de sectores.

`parse_data.js` prorporciona funciones para parsear y normalizar las series
usando un estilo funcional con `underscore.js`

Todo el código javascript se ha intentado encapsular en unidades facilmente testeables.

El framework usado para testear javascript es QUnit.

Los tests unitarios se encuentran en:
    ejercicio2/static/tests

Para la interfaz de usuario se ha utilizado Bootstrap.
