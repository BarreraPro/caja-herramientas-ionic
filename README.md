# Caja de Herramientas Ionic

Aplicación móvil desarrollada con Ionic Framework y Angular. Integra consultas a APIs públicas para predicción de género, estimación de edad, universidades por país, clima actual, Pokémon y noticias WordPress.

## Requisitos

- Node.js y npm
- Ionic CLI
- Android Studio para generar el APK

## Instalación

```bash
npm install
```

## Ejecución en navegador

```bash
ionic serve
```

## Compilación

```bash
ionic build
```

## Android con Capacitor

La plataforma Android está preparada en la carpeta `android/`. Para actualizar los archivos nativos después de cambios en la app:

```bash
ionic build
npx cap sync android
npx cap open android
```

Si se trabaja desde una copia nueva del proyecto y la plataforma Android no existe:

```bash
ionic build
npx cap add android
npx cap sync android
npx cap open android
```

## Generar APK

1. Ejecuta `npx cap open android`.
2. Espera a que Android Studio sincronice Gradle.
3. En Android Studio, abre `Build > Build Bundle(s) / APK(s) > Build APK(s)`.
4. Usa la ubicación del APK indicada por Android Studio al finalizar.

## Foto de perfil

La foto mostrada en la pantalla Acerca de está en:

```text
src/assets/img/profile.png
```

Para cambiarla, reemplaza ese archivo manteniendo el mismo nombre y formato.

## Datos de contacto

- Email: `debarreradb1208@gmail.com`
- Teléfono: `829-774-2938`
- GitHub: `https://github.com/BarreraPro`

## Icono de la aplicación

El recurso base del icono está en:

```text
resources/icon.png
```

Para actualizar los iconos nativos:

```bash
npm install -D @capacitor/assets
npx capacitor-assets generate
npx cap sync android
```

## APIs utilizadas

- Genderize: `https://api.genderize.io/?name=irma`
- Agify: `https://api.agify.io/?name=meelad`
- Universidades: `https://adamix.net/proxy.php?country=Dominican+Republic`
- Open-Meteo: `https://api.open-meteo.com/v1/forecast?latitude=18.4861&longitude=-69.9312&current_weather=true&timezone=America%2FSanto_Domingo`
- PokeAPI: `https://pokeapi.co/api/v2/pokemon/pikachu`
- WordPress REST API: `https://wptavern.com/wp-json/wp/v2/posts?per_page=3`

La aplicación muestra mensajes de error cuando una consulta externa no responde o no devuelve resultados.

## Publicar en GitHub

```bash
git status
git add .
git commit -m "Crear app Ionic caja de herramientas"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
git push -u origin main
```
