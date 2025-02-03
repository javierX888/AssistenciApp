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

Test unitarios
Para lanzar los test unitarios (Jasmine + Karma):

ng test --watch=false
Los spec.ts de cada componente/servicio se ejecutarán y verás el reporte por consola o en Chrome Headless.

API en Flask
El back-end (directorio API/) contiene apitest.py y un requirements.txt. Para ejecutarla localmente:

Entrar a la carpeta:

cd API
Crear venv (opcional):

python -m venv venv
source venv/bin/activate       # Mac/Linux
venv\Scripts\activate          # Windows
Instalar dependencias:

pip install -r requirements.txt
Ejecutar la API (en modo desarrollo):

python apitest.py
Por defecto iniciará en http://127.0.0.1:5000.

Nota: La API está alojada en Railway. La URL base se configura en src\app\services\consumo-api.service.ts. en caso de quere ejecutarla localmente


Generar APK para Android
Build de la app web (genera carpeta www/):

ionic build
Sincronizar assets con la plataforma Android (genera android/):

npx cap sync android
Abrir en Android Studio:

npx cap open android
En Android Studio, Build > Build Bundle(s)/APK(s) > Build APK(s).
El APK se guardará en android/app/build/outputs/apk/debug/... (o release si escoges una versión firmada).

Despliegue de la API (Railway)
El archivo Procfile o start command en Railway lanza python apitest.py.
Asegúrate de tener en apitest.py:

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
Ajusta la variable baseUrl en consumo-api.service.ts apuntando a tu dominio Railway.


Autores
Javier Gacitúa / Gianfranco Puccio