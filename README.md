AssistenciApp
Aplicación móvil híbrida (Ionic Angular) para gestionar la asistencia de estudiantes y profesores, con un back-end Flask (Python).

Características principales
Login diferenciado para profesor/alumno
Listado de cursos según rol de usuario
Detalle de asistencia con datos provenientes de la API
Generación de código QR (profesor)
Escaneo de QR (alumno, usando la cámara / plugin)
Test unitarios configurados con ng test
API Flask en Python para credenciales, cursos y alumnos
Requisitos previos
NodeJS v16+ (o 18+).
Ionic CLI global (opcional pero recomendado).
Angular CLI global (opcional).
Java JDK (para compilar en Android).
Android Studio instalado (si quieres generar o abrir el proyecto nativo de Android).
Python 3.10+ (para la API en Flask).
(Opcional) Docker si deseas contenedores para la API.


Pasos para ejecutar la App Ionic (modo navegador)
Clonar este repositorio:

git clone https://github.com/miUsuario/AssistenciApp.git
cd AssistenciApp
Instalar dependencias:

npm install
Ejecutar la aplicación en modo navegador (localhost):
ionic serve
O bien:

ng serve
La app se abrirá en http://localhost:8100 (o un puerto distinto).
Test unitarios
Para lanzar los test unitarios (Jasmine + Karma):

ng test --watch=false
Los spec.ts de cada componente/servicio se ejecutarán y verás el reporte por consola o en Chrome Headless.