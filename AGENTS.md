# BONDITRACK

BONDITRACK es una aplicación móvil desarrollada con React Native, Expo y TypeScript.

La aplicación busca mostrar información sobre los colectivos de Buenos Aires, incluyendo su ubicación aproximada en tiempo real, líneas, paradas, favoritos y tiempos estimados de llegada.

## Estructura del proyecto

El proyecto utiliza Expo Router.

* `src/app/` contiene las pantallas y la navegación.
* `src/components/` contiene los componentes reutilizables de la interfaz.
* `assets/` contiene imágenes y otros recursos estáticos.
* `global.css` contiene estilos globales.

Componentes principales actuales:

* `Mapa.tsx` — muestra el mapa y la ubicación de los colectivos.
* `FiltroLinea.tsx` — permite filtrar por línea de colectivo.
* `TarjetaColectivo.tsx` — muestra información de un colectivo.
* `Favoritos.tsx` — administra la selección de líneas o paradas favoritas.

Los componentes reutilizables deben mantenerse fuera de `src/app/`.

## Expo y React Native

Antes de modificar o agregar código que dependa de Expo o React Native:

1. Revisar la versión de Expo instalada en `package.json`.
2. Consultar la documentación correspondiente a esa versión.
3. No asumir que una API de versiones anteriores de Expo sigue disponible.

Las dependencias deben ser compatibles con la versión de Expo utilizada por el proyecto.

Para instalar paquetes relacionados con Expo, utilizar preferentemente:

```bash
npx expo install <paquete>
```

Comandos útiles:

```bash
npx expo start
npx expo lint
npx tsc --noEmit
npx expo-doctor
```

Después de realizar cambios importantes, comprobar que no haya errores de TypeScript ni de lint.

## Navegación

Utilizar Expo Router para la navegación.

Las rutas se encuentran en `src/app/`.

* `index.tsx` es la pantalla principal.
* `_layout.tsx` contiene la configuración del diseño y la navegación de la aplicación.

No colocar componentes reutilizables dentro de `src/app/` si no representan una ruta de la aplicación.

## Estilo del código

* Utilizar TypeScript.
* Mantener los componentes separados según su responsabilidad.
* Priorizar código simple, claro y fácil de entender.
* Utilizar nombres descriptivos.
* Evitar duplicar código de interfaz cuando pueda convertirse razonablemente en un componente reutilizable.
* No agregar librerías si no son realmente necesarias.
* Respetar la estructura y el estilo existentes del proyecto.

## Alcance del proyecto

BONDITRACK es un proyecto escolar.

No introducir arquitecturas innecesariamente complejas, librerías de gestión de estado, servicios externos u otros patrones avanzados cuando una solución más simple sea suficiente.

Las funcionalidades deben implementarse de forma progresiva y mantenerse comprensibles para un estudiante que trabaja en el proyecto.

## Archivos y dependencias

No modificar innecesariamente archivos generados o dependencias instaladas.

`node_modules/` y `.expo/` son carpetas generadas localmente y no deben incluirse en el repositorio.

Mantener `package.json`, `package-lock.json`, `app.json` y `tsconfig.json` coherentes con el proyecto.

No crear manualmente las carpetas nativas `ios/` o `android/` salvo que el proyecto lo requiera explícitamente.