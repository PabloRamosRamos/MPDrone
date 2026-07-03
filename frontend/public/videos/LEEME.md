# Videos del hero

## Estado actual

Cada página ya tiene su propio video de fondo, comprimido a H.264 sin audio
con faststart, en versión desktop + mobile + poster:

| Página | Desktop | Mobile | Poster |
|---|---|---|---|
| Inicio | `hero-drone.mp4` (5.4MB) | `hero-drone-mobile.mp4` (0.7MB) | `hero-drone-poster.jpg` |
| Servicios | `hero-servicios.mp4` (2.6MB) | `hero-servicios-mobile.mp4` (0.7MB) | `hero-servicios-poster.jpg` |
| Galería | `hero-galeria.mp4` (3.1MB) | `hero-galeria-mobile.mp4` (0.6MB) | `hero-galeria-poster.jpg` |
| Nosotros | `hero-nosotros.mp4` (0.5MB) | `hero-nosotros-mobile.mp4` (0.16MB) | `hero-nosotros-poster.jpg` |
| Contacto | `hero-drone.mp4` (compartido con Inicio) | `hero-drone-mobile.mp4` | `hero-drone-poster.jpg` |

La versión mobile se carga automáticamente en pantallas ≤768px usando el
atributo `media` del `<source>` dentro de `<VideoHero>` (sin JS extra). Si
algún archivo referenciado no existe, esa página cae automáticamente a un
fondo con degradado de marca en vez de romperse.

## Cómo reemplazar el video de una página

1. Comprime tu clip con la receta de abajo, usando el mismo nombre que ya usa
   esa página (ej. `hero-servicios.mp4` + `hero-servicios-mobile.mp4` +
   `hero-servicios-poster.jpg`), o un nombre nuevo.
2. Colócalo en esta carpeta.
3. Si usaste un nombre nuevo, actualiza los props `videoSrc`, `videoSrcMobile`
   y `posterSrc` del `<VideoHero>` en `src/pages/<Página>.tsx`.

## Receta de compresión (ffmpeg)

Desktop (1600-1920px, liviano, sin audio, con faststart):

```
ffmpeg -i original.mp4 -vf "scale=1600:-2,fps=30" -an -c:v libx264 -crf 27 -preset veryfast -movflags +faststart -pix_fmt yuv420p hero-nombre.mp4
```

Mobile (960px, aún más liviano):

```
ffmpeg -i original.mp4 -vf "scale=960:-2,fps=30" -an -c:v libx264 -crf 30 -preset veryfast -movflags +faststart -pix_fmt yuv420p hero-nombre-mobile.mp4
```

Poster (primer frame como jpg):

```
ffmpeg -ss 00:00:01 -i original.mp4 -frames:v 1 -vf "scale=1600:-2" -q:v 4 hero-nombre-poster.jpg
```

Metas: sin audio, bajo 5MB en desktop y bajo 1MB en mobile. Si el original es
4K, siempre bajarlo a 1600-1920px antes de subir — no aporta nitidez extra en
un fondo de hero y multiplica el tiempo de encode y el peso del archivo.
