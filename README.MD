# Proyecto de Héroes
### LINK: https://incomparable-jalebi-1bbfac.netlify.app/
## Descripción del Proyecto
El Proyecto de Héroes es una aplicación web que permite a los usuarios explorar y conocer más sobre varios héroes icónicos a lo largo de la historia y la ficción. Este proyecto se ha desarrollado utilizando tecnologías web estándar como HTML, CSS, y JavaScript, y se ha desplegado en Netlify, aprovechando su capacidad para alojar sitios web estáticos de manera sencilla y eficiente.

Arquitectura del Proyecto
1. **Arquitectura del Sistema**
La arquitectura de este proyecto sigue un modelo de aplicación web estática, lo que significa que no se requiere un servidor backend complejo para manejar la lógica del negocio o las solicitudes dinámicas. La aplicación está estructurada en tres componentes principales:

Frontend:
HTML: Define la estructura básica de la página.
CSS: Proporciona los estilos visuales y el diseño responsivo.
JavaScript: Añade interactividad y manipulación del DOM para mejorar la experiencia del usuario.

Alojamiento (Netlify):
La aplicación está alojada en Netlify, que maneja la entrega de los archivos estáticos de manera eficiente, utilizando su red de distribución de contenido (CDN) para asegurar un rendimiento óptimo.

2. **Componentes del Sistema**

UI/UX (Frontend):
HTML: Estructura semántica y accesible.
CSS: Utilización de Flexbox y Grid para el diseño responsivo, asegurando que el sitio sea accesible en dispositivos móviles y de escritorio.
JavaScript: Lógica para la manipulación del DOM, interacciones del usuario, y animaciones.

Middleware:
Dado que se trata de una aplicación estática, no se requiere middleware en el sentido tradicional de aplicaciones con backend. Sin embargo, se considera el uso de servicios de terceros como Google Analytics para la recolección de datos de uso.

Virtualización:
No se utilizó virtualización directa en este proyecto. Dado que la aplicación es estática y no necesita un entorno de ejecución complejo, no se requieren contenedores o máquinas virtuales.
Pasos de Despliegue

## Organización del Proyecto:
Asegúrate de que todos los archivos de tu proyecto estén organizados en una estructura clara con carpetas para css, js, y cualquier otro recurso necesario.

2. **Despliegue en Netlify**

## Crear una Cuenta en Netlify:
Regístrate en Netlify si aún no tienes una cuenta.

## Nuevo Proyecto en Netlify:
Desde el tablero de Netlify, selecciona "New site from Git" si estás utilizando un sistema de control de versiones como Git, o "Deploy manually" si prefieres subir los archivos directamente.

## Vinculación con Repositorio (Opcional):
Si estás usando GitHub, GitLab o Bitbucket, puedes vincular tu repositorio para un despliegue continuo. Cada vez que hagas un push a la rama principal, Netlify actualizará automáticamente el sitio.

## Subida Manual:
Si no estás utilizando un repositorio, simplemente arrastra y suelta los archivos del proyecto en el área de despliegue de Netlify.

## Configuración del Dominio:
Una vez desplegado, Netlify generará un subdominio gratuito. Puedes personalizar este dominio o configurar un dominio propio en la sección "Domain settings".

## Publicación:
Una vez configurado todo, tu sitio estará disponible en el dominio proporcionado.

# Consideraciones de Virtualización y Middleware

1. **Virtualización**
Entorno Local: Para desarrollo local, se puede usar un servidor web simple como live-server (si estás usando Node.js) para servir el proyecto en un entorno controlado.

Contenedores: No se utilizó Docker ni otra forma de contenedorización dado que el proyecto no tiene dependencias de backend o servicios externos que lo justifiquen.

Maquinas Virtuales: No se usaron máquinas virtuales debido a la naturaleza estática del proyecto.

2. **Middleware**

Servicios de Terceros: Aunque el proyecto es estático, se pueden integrar servicios de terceros para extender su funcionalidad. Por ejemplo, se puede integrar Google Analytics para rastrear el comportamiento de los usuarios en el sitio.

Seguridad y Performance: Netlify maneja automáticamente SSL/TLS para asegurar la conexión, y la distribución a través de su CDN garantiza una alta disponibilidad y velocidad de carga.

## Consideraciones Finales

Escalabilidad: Aunque es una aplicación estática, el uso de un CDN a través de Netlify permite que la aplicación maneje un alto volumen de tráfico sin problemas.
Seguridad: La implementación automática de SSL por parte de Netlify asegura que las conexiones sean seguras.

Desempeño: Netlify optimiza la entrega de los archivos estáticos, lo que resulta en tiempos de carga rápidos, mejorando la experiencia del usuario.
