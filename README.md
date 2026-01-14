AssistenciApp - Frontend
Aplicación móvil híbrida desarrollada con **Ionic y Angular** para la gestión de asistencia de estudiantes y profesores. Esta aplicación consume una API externa desarrollada en Flask.

## Características principales
*   Login diferenciado para profesor/alumno.
*   Registro de nuevos usuarios (alumnos).
*   Listado de cursos según rol de usuario.
*   Detalle de asistencia con estadísticas y porcentajes en tiempo real.
*   Visualización con colores según rendimiento (rojo <70%, amarillo 70-80%, verde 80-100%).
*   Control de clases: iniciar/finalizar clase (profesor).
*   Justificación de inasistencias (profesor).
*   Generación de código QR dinámico (profesor).
*   Escaneo de QR y captura de foto con cámara (alumno).
*   **Almacenamiento permanente de fotos en Cloudinary**.
*   Menú de perfil con opciones de usuario con captura de foto mediante cámara nativa.
*   Subida permanente de fotos a **Cloudinary** (CDN).
*   **Estadísticas de asistencia** con porcentajes y código de colores (verde, amarillo, rojo).
*   **Control de clases:** iniciar/finalizar clase, justificar inasistencias.
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
La API incluye:
*   Autenticación y registro de usuarios
*   Gestión de cursos y asistencias
*   Registro de clases (incrementa contador de todos los alumnos del curso)
*   **Integración con Cloudinary** para almacenamiento permanente de fotos
*   Endpoints RESTful con CORS habilitado


## Backend (API)
La API de este proyecto se encuentra en un repositorio separado para facilitar su escalabilidad y despliegue:
👉 [Repositorio de la API (Python Flask)](https://github.com/javierX888/API-AssistenciaApp.git)

Para desarrollo local, asegúrate de que la API esté corriendo en `http://localhost:5000`.

## Configuración de Entornos (Environments)
La aplicación utiliza archivos de entorno para manejar la URL de la API:
*   **Desarrollo:** [src/environm
4.  Asegúrate de que [environment.prod.ts](src/environments/environment.prod.ts) apunte a tu API en producción.

**Despliegue de la API:**
La API también se despliega en Vercel. Configura las siguientes variables de entorno:
*   `CLOUDINARY_CLOUD_NAME`
*   `CLOUDINARY_API_KEY`
*   `CLOUDINARY_API_SECRET`ents/environment.ts](src/environments/environment.ts) apunta a Localhost.
*   **Producción:** [src/environments/environment.prod.ts](src/environments/environment.prod.ts) debe apuntar a la URL de tu API desplegada en Vercel o Railway.

## Despliegue en Vercel
Este repositorio está optimizado para desplegarse en **Vercel**:
1.  Importa el repositorio en Vercel.
2.  **Output Directory:** `www`.
3. Tecnologías utilizadas
*   **Frontend:** Ionic 19, Angular 19, Capacitor (Camera API)
*   **Backend:** Flask (Python), Flask-CORS
*   **Almacenamiento:** Cloudinary (fotos)
*   **Deployment:** Vercel (frontend y backend)
*   **Control de versiones:** Git, GitHub

## Estructura del proyecto
```
src/
├── app/
│   ├── services/           # Servicios (API, auth)
│   ├── models/             # Interfaces TypeScript
│   ├── guards/             # Guards de autenticación
│   ├── login/              # Página de login
│   ├── home/               # Dashboard principal
│   ├── crearcuenta/        # Registro de usuarios
│   ├── curso-lista-*/      # Listado de cursos (profesor/alumno)
│   ├── asistencia-detalle-*/ # Detalle con estadísticas
│   └── registrar-asistencia/ # Escaneo QR + foto
├── environments/           # Configuración dev/prod
└── assets/                 # Recursos estáticos
```

##  **Command:** `npm run build`.

## Generar APK para Android
1.  Build de la app: `ionic build`.
2.  Sincronizar con Capacitor: `npx cap sync android`.
3.  Abrir en Android Studio: `npx cap open android`.

## Autores
Javier Gacitúa / Gianfranco Puccio
