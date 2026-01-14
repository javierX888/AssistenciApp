AssistenciApp - Frontend
Aplicación móvil híbrida desarrollada con **Ionic y Angular** para la gestión de asistencia de estudiantes y profesores. Esta aplicación consume una API externa desarrollada en Flask.

## Características principales
*   Login diferenciado para profesor/alumno.
*   Registro de nuevos usuarios (alumnos).
*   Listado de cursos según rol de usuario.
*   Detalle de asistencia con datos en tiempo real.
*   Generación de código QR (profesor).
*   Escaneo de QR (alumno).
*   Test unitarios configurados (Jasmine + Karma).

## Requisitos previos
*   **NodeJS** v18+.
*   **Ionic CLI** global (`npm install -g @ionic/cli`).
*   **Java JDK** (para compilar en Android).
*   **Android Studio** (si deseas generar APKs).

## Pasos para ejecutar localmente
1.  Clonar este repositorio:
    ```bash
    git clone https://github.com/javierX888/AssistenciApp.git
    cd AssistenciApp
    ```
2.  Instalar dependencias:
    ```bash
    npm install
    ```
3.  Ejecutar la aplicación:
    ```bash
    ionic serve
    ```
    La app se abrirá en `http://localhost:8100`.

## Backend (API)
La API de este proyecto se encuentra en un repositorio separado para facilitar su escalabilidad y despliegue:
👉 [Repositorio de la API (Python Flask)](https://github.com/javierX888/API-AssistenciaApp.git)

Para desarrollo local, asegúrate de que la API esté corriendo en `http://localhost:5000`.

## Configuración de Entornos (Environments)
La aplicación utiliza archivos de entorno para manejar la URL de la API:
*   **Desarrollo:** [src/environments/environment.ts](src/environments/environment.ts) apunta a Localhost.
*   **Producción:** [src/environments/environment.prod.ts](src/environments/environment.prod.ts) debe apuntar a la URL de tu API desplegada en Vercel o Railway.

## Despliegue en Vercel
Este repositorio está optimizado para desplegarse en **Vercel**:
1.  Importa el repositorio en Vercel.
2.  **Output Directory:** `www`.
3.  **Command:** `npm run build`.

## Generar APK para Android
1.  Build de la app: `ionic build`.
2.  Sincronizar con Capacitor: `npx cap sync android`.
3.  Abrir en Android Studio: `npx cap open android`.

## Autores
Javier Gacitúa / Gianfranco Puccio
