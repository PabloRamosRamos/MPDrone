# Videos del hero

## Estado actual

Ya hay un video real activo en las 6 páginas (`hero-drone.mp4`), generado a partir
del clip que subiste. Se comprimió así:

- `hero-drone.mp4` — 1920×1080, H.264, sin audio, ~5.4MB (versión desktop)
- `hero-drone-mobile.mp4` — 960×540, H.264, sin audio, ~0.7MB (versión mobile,
  se carga automáticamente en pantallas ≤768px usando el atributo `media` del
  `<source>`, sin JS extra)
- `hero-drone-poster.jpg` — primer frame, se muestra mientras el video carga

Las 6 páginas (Inicio, Servicios, Tecnología, Casos, Nosotros, Contacto)
apuntan a este mismo par de archivos, así el navegador lo descarga una sola
vez y lo reutiliza al navegar entre páginas (queda cacheado).

## Cómo reemplazar o diferenciar por página

Si quieres un video distinto para una página específica:

1. Comprime tu clip siguiendo la receta de abajo (ideal: mismo nombre de
   archivo pero distinto, ej. `hero-servicios.mp4` + `hero-servicios-mobile.mp4`
   + `hero-servicios-poster.jpg`).
2. Colócalo en esta carpeta.
3. En `src/pages/<Página>.tsx`, cambia los props `videoSrc`, `videoSrcMobile`
   y `posterSrc` del `<VideoHero>` para que apunten a los nuevos archivos.

Si el archivo referenciado no existe, esa página cae automáticamente a un
fondo con degradado de marca (no se rompe el diseño).

## Receta de compresión (ffmpeg)

Desktop (1920px, liviano, sin audio, con faststart para reproducción rápida):

```
ffmpeg -i original.mov -vf "scale=1920:-2,fps=30" -an -c:v libx264 -crf 27 -preset slow -movflags +faststart -pix_fmt yuv420p hero-nombre.mp4
```

Mobile (960px, aún más liviano):

```
ffmpeg -i original.mov -vf "scale=960:-2,fps=30" -an -c:v libx264 -crf 30 -preset slow -movflags +faststart -pix_fmt yuv420p hero-nombre-mobile.mp4
```

Poster (primer frame como jpg):

```
ffmpeg -ss 00:00:01 -i original.mov -frames:v 1 -q:v 4 hero-nombre-poster.jpg
```

Metas: sin audio, loop de 6-15s, bajo 5MB en desktop y bajo 1MB en mobile.
