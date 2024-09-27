# React JS (ñs)


# Indicaciones

## Creando mononrepositorio multipaquete
- En la raiz de todos los proyectos: npm init -y
- Crear carpeta de proyectos 

## Creando app con react: HelloWorld
- En el terminal digitamos: "npm create vite@latest" para crear apps con react.
Confirmar digitando: "y" y luego pulsar enter

- Digitamos ahora el nombre del proyecto: "HellWorld" y pulsamos enter.

- En la lista que se muestra seleccionamos: "React", luego pulsar enter

- En la nueva lista seleccionar "Javascript" y pulsar enter

- En el terminal, acceder a la carpeta del proyecto: "cd HelloWorld"

- Instalar dependencias necesarias: "npm install" y pulsar enter

- Ejecutar app react: "npm run dev" y pulsar enter

- Para instalar bootstrap 
  "npm install bootstrap"
  "npm install react-bootstrap"


- Modificar vite.config.js

    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      server : {
        host: true,
        port: 5173,
        watch: {
          usePolling: true
        }
      }
    })
