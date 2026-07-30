# Finca La Gloria — sitio web

Sitio de una sola página (HTML + CSS + JS, sin frameworks) para mostrar el café de Finca La Gloria y recibir pedidos por WhatsApp.

## Qué hay en esta carpeta

- `index.html` — todo el contenido y la estructura del sitio.
- `styles.css` — todo el diseño (colores, tipografía, layout).
- `script.js` — la lógica del formulario de pedido (arma el mensaje y abre WhatsApp).
- `img/` — las fotos ya recortadas y listas para usar en el sitio.
- `video/` — los videos de la finca, comprimidos para que carguen rápido.
- Las fotos y videos originales (`CAFE.PNG`, `WhatsApp Image...`, `WhatsApp Video...`) se quedan en la carpeta como respaldo, pero **no se suben a internet** — el archivo `.gitignore` los excluye a propósito, porque el sitio ya tiene copias limpias en `img/` y `video/`.

## Ver el sitio en tu computador (antes de publicarlo)

Simplemente haz doble clic en `index.html` y se abre en tu navegador. Así puedes revisar cómo se ve y probar el botón de WhatsApp antes de publicarlo.

## Publicarlo gratis en Vercel — paso a paso

Vercel es gratis para sitios como este (plan "Hobby"). La forma recomendada es conectar el proyecto a GitHub, porque así, cada vez que hagas un cambio, el sitio se actualiza solo.

### 1. Crear una cuenta en GitHub

Entra a [github.com](https://github.com) y crea una cuenta gratis (si ya tienes una, sáltate este paso).

### 2. Crear un repositorio nuevo

1. En GitHub, dale clic al botón verde **New** (o entra a github.com/new).
2. Ponle de nombre, por ejemplo, `finca-la-gloria`.
3. Déjalo en **Public** (o Private, cualquiera funciona con Vercel gratis).
4. **No** marques "Add a README" ni ".gitignore" — ya los tenemos.
5. Dale **Create repository**. GitHub te va a mostrar unos comandos; los vas a necesitar en el paso 4.

### 3. Instalar Git (si no lo tienes)

Este computador ya tiene Git instalado y esta carpeta ya está inicializada como repositorio (lo puedes confirmar porque existe una carpeta oculta `.git`). Si en algún momento usas otro computador, descarga Git desde [git-scm.com](https://git-scm.com/downloads).

### 4. Subir el proyecto a GitHub

Abre una terminal **dentro de esta carpeta** (`CAFE DOÑA GLORIA`) y ejecuta, uno por uno:

```bash
git add index.html styles.css script.js img video .gitignore README.md
git commit -m "Sitio Finca La Gloria"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/finca-la-gloria.git
git push -u origin main
```

Reemplaza `TU-USUARIO` por tu usuario de GitHub (lo ves en la URL que te mostró GitHub en el paso 2). La primera vez te va a pedir iniciar sesión — sigue las instrucciones en pantalla.

> Los videos pesan varios megabytes, así que este primer `push` puede tardar un par de minutos. Es normal.

### 5. Crear cuenta en Vercel

Entra a [vercel.com](https://vercel.com) y dale **Sign Up** → elige **Continue with GitHub**. Así Vercel queda conectado directamente a tu cuenta de GitHub, sin necesidad de otra contraseña.

### 6. Importar el proyecto

1. En el panel de Vercel, dale **Add New...** → **Project**.
2. Busca el repositorio `finca-la-gloria` en la lista y dale **Import**.
3. Vercel va a detectar que es un sitio estático (HTML/CSS/JS) — no necesitas cambiar ninguna configuración, todos los campos se pueden dejar como están.
4. Dale **Deploy**.

En menos de un minuto, Vercel te da una URL pública gratis, algo como `finca-la-gloria.vercel.app`. Esa es la página que le puedes compartir a tu primo y a los clientes.

### 7. Cómo hacer cambios después

Cada vez que quieras editar algo (un texto, un precio, una foto nueva):

1. Edita el archivo correspondiente en esta carpeta.
2. En la terminal, dentro de la carpeta:
   ```bash
   git add -A
   git commit -m "Describe aquí qué cambiaste"
   git push
   ```
3. Vercel detecta el cambio en GitHub automáticamente y vuelve a publicar el sitio solo, en menos de un minuto. No tienes que repetir el paso 6.

### 8. Dominio propio (opcional)

Si más adelante quieren algo como `fincalagloria.com` en vez de `finca-la-gloria.vercel.app`, se compra el dominio en cualquier proveedor (Namecheap, GoDaddy, etc. — tiene un costo anual aparte, eso ya no es gratis) y en Vercel, dentro del proyecto, en **Settings → Domains**, lo agregas y sigues las instrucciones para apuntarlo. Vercel mismo te dice exactamente qué configurar.

## Cosas que puedes querer ajustar

- **Número de WhatsApp**: está en una sola línea al inicio de `script.js` (`WHATSAPP_NUMBER`) y repetido en los enlaces de `index.html` (busca `wa.me`). Si Camilo cambia de número, hay que actualizarlo en los dos lugares.
- **Textos e info técnica del café**: todo el texto vive directo en `index.html`, en español, fácil de ubicar y editar con cualquier editor (recomendado: [VS Code](https://code.visualstudio.com/), gratis).
- **Fotos nuevas**: cuando tu primo te pase fotos limpias (sin texto de Instagram encima), cópialas a la carpeta `img/`, y cambia el nombre del archivo correspondiente en `index.html`.
