# Videos del hero

Coloca aquí tus archivos de video (.mp4, ideal H.264, 1920x1080 o 1280x720, sin audio,
5-15 segundos en loop, peso recomendado bajo 8-10MB para que cargue rápido).

Nombres esperados por página (si un archivo no existe, esa página muestra
automáticamente un fondo con degradado de marca en vez de romperse):

| Página      | Archivo esperado              |
|-------------|--------------------------------|
| Inicio      | hero-home.mp4                  |
| Servicios   | hero-servicios.mp4             |
| Tecnología  | hero-tecnologia.mp4            |
| Casos       | hero-casos.mp4                 |
| Nosotros    | hero-nosotros.mp4               |
| Contacto    | hero-contacto.mp4              |

Opcional: agrega una imagen "poster" (primer frame, .jpg) con el mismo nombre
que el video para que se vea algo mientras carga:

- hero-home-poster.jpg
- hero-servicios-poster.jpg
- hero-tecnologia-poster.jpg
- hero-casos-poster.jpg
- hero-nosotros-poster.jpg
- hero-contacto-poster.jpg

Si prefieres usar un solo video para todas las páginas, simplemente duplica
el mismo archivo con los 6 nombres de arriba (o edita el prop `videoSrc` en
cada página dentro de `src/pages/`).

Tip para comprimir video para web (con ffmpeg):

```
ffmpeg -i original.mov -vf scale=1920:-2 -an -c:v libx264 -crf 26 -preset slow hero-home.mp4
```
