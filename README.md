Fitosfera - Developer Notes
Descripción

Proyecto web estático desarrollado para Fitosfera, banda tributo a Fito & Fitipaldis.

El objetivo era crear una web moderna, responsive y bilingüe (ES/EN) con una estética inspirada en el rock urbano español de los años 90, manteniendo una imagen profesional orientada a la contratación de conciertos.

Stack tecnológico
Frontend
HTML5
CSS3
JavaScript Vanilla (sin frameworks)
Librerías externas
Font Awesome (iconografía)
Hosting
GitHub Pages
Control de versiones
Git
GitHub
SourceTree
Arquitectura

La aplicación sigue una estructura sencilla de separación de responsabilidades:

HTML

Define únicamente la estructura de la página:

Header
Navegación
Hero
Conciertos
Banda
Integrantes
Galería
Contacto
Footer

Los textos traducibles se identifican mediante atributos:

data-i18n="..."
CSS

Responsable de:

Layout
Responsive Design
Animaciones
Paleta de colores
Tipografía
Componentes reutilizables

Se utilizan:

CSS Variables (:root)
Flexbox
CSS Grid
Media Queries
JavaScript

Gestiona todo el contenido dinámico:

Internacionalización (i18n)

Sistema propio basado en un objeto:

const translations = {
  es: {...},
  en: {...}
}

Los textos se actualizan dinámicamente mediante:

data-i18n
Integrantes

Los miembros de la banda se generan dinámicamente:

const members = [...]

Permite añadir o eliminar integrantes sin modificar el HTML.

Conciertos

Los conciertos se generan desde un array:

const concerts = [...]

Permite actualizar fechas sin tocar la estructura de la página.

Cambio de idioma

El selector ES/EN actualiza automáticamente:

Menús
Textos
Botones
Secciones
Footer
Responsive Design

Breakpoints principales:

1024px
768px

Adaptaciones:

Menú hamburguesa en móvil.
Reorganización de Grid y Flexbox.
Galería adaptativa.
Footer responsive.
Ajustes tipográficos.
Gestión de recursos
Imágenes

Ubicación:

images/

Referenciadas mediante rutas relativas:

photo: "images/rafa.jpeg"
Iconos

Implementados mediante Font Awesome:

<i class="fa-brands fa-whatsapp"></i>
<i class="fa-solid fa-envelope"></i>
<i class="fa-solid fa-location-dot"></i>
SEO

Implementado mediante metaetiquetas:

title
description
keywords
Open Graph
Twitter Cards

Preparado para compartir contenido en redes sociales.

Mantenimiento
Añadir un concierto

Modificar:

const concerts = [...]
Añadir un integrante

Modificar:

const members = [...]
Añadir traducciones

Modificar:

const translations = {...}
Sustituir imágenes

Actualizar archivos dentro de:

images/

sin necesidad de modificar HTML.

Objetivos del proyecto
Web rápida y ligera.
Sin dependencias complejas.
Fácil mantenimiento.
Preparada para GitHub Pages.
Código comprensible para futuras modificaciones.
Diseño consistente en escritorio y móvil.
