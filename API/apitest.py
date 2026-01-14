import os
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

profesores = [
    {
        "id": 1,
        "nombre": "Juan Pérez",
        "cursos": [
            {
                "id": 1,
                "nombre": "Matemáticas",
                "codigo": "MAT-101",
                "seccion": "013V",
                "alumnos": [
                    {
                        "id": 2,
                        "nombre": "Luis Gonzalez",
                        "status": 0,
                        "asistencias": [
                            {"fecha": "01/03/2024", "estado": "P"},
                            {"fecha": "02/03/2024", "estado": "A"},
                            {"fecha": "03/03/2024", "estado": "P"},
                            {"fecha": "04/03/2024", "estado": "P"},
                            {"fecha": "05/03/2024", "estado": "A"},
                            {"fecha": "06/03/2024", "estado": "P"},
                            {"fecha": "07/03/2024", "estado": "P"},
                            {"fecha": "08/03/2024", "estado": "P"},
                            {"fecha": "09/03/2024", "estado": "A"},
                            {"fecha": "10/03/2024", "estado": "P"}
                        ]
                    },
                    {
                        "id": 3,
                        "nombre": "María",
                        "status": 0,
                        "asistencias": [
                            {"fecha": "01/03/2024", "estado": "P"},
                            {"fecha": "02/03/2024", "estado": "P"},
                            {"fecha": "03/03/2024", "estado": "A"}
                        ]
                    },
                    {
                        "id": 4,
                        "nombre": "Pedro",
                        "status": 1,
                        "asistencias": [
                            {"fecha": "01/03/2024", "estado": "P"}
                        ]
                    },
                    {
                        "id": 5,
                        "nombre": "Ricardo",
                        "status": 1,
                        "asistencias": [
                            {"fecha": "01/03/2024", "estado": "P"}
                        ]
                    },
                    {
                        "id": 6,
                        "nombre": "Juan",
                        "status": 0,
                        "asistencias": [
                            {"fecha": "01/03/2024", "estado": "A"}
                        ]
                    },
                    {
                        "id": 7,
                        "nombre": "Camila",
                        "status": 1,
                        "asistencias": [
                            {"fecha": "01/03/2024", "estado": "P"}
                        ]
                    }
                ]
            },
            {
                "id": 2,
                "nombre": "Física",
                "codigo": "FIS-105",
                "seccion": "015V",
                "alumnos": [
                    {
                        "id": 3,
                        "nombre": "María",
                        "status": 1,
                        "asistencias": [
                            {"fecha": "01/03/2024", "estado": "P"}
                        ]
                    },
                    {
                        "id": 8,
                        "nombre": "Javier",
                        "status": 0,
                        "asistencias": [
                            {"fecha": "01/03/2024", "estado": "A"}
                        ]
                    },
                    {
                        "id": 9,
                        "nombre": "Roberto",
                        "status": 1,
                        "asistencias": [
                            {"fecha": "01/03/2024", "estado": "P"}
                        ]
                    },
                    {
                        "id": 10,
                        "nombre": "Angela",
                        "status": 1,
                        "asistencias": []
                    },
                    {
                        "id": 11,
                        "nombre": "Nicolas",
                        "status": 0,
                        "asistencias": []
                    },
                    {
                        "id": 12,
                        "nombre": "Gabriela",
                        "status": 0,
                        "asistencias": []
                    },
                    {
                        "id": 13,
                        "nombre": "Daniela",
                        "status": 1,
                        "asistencias": []
                    },
                    {
                        "id": 14,
                        "nombre": "Sofia",
                        "status": 1,
                        "asistencias": []
                    },
                    {
                        "id": 7,
                        "nombre": "Camila",
                        "status": 0,
                        "asistencias": []
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "nombre": "Marta Contreras",
        "cursos": [
            {
                "id": 10,
                "nombre": "Historia Universal",
                "codigo": "HIS-200",
                "seccion": "02A",
                "alumnos": [
                    {
                        "id": 2,
                        "nombre": "Luis Gonzalez",
                        "status": 1,
                        "asistencias": []
                    }
                ]
            }
        ]
    }
]

usuarios = [
    {
        "id": 1,
        "user": "docente",
        "password": "password1",
        "nombre": "Juan Perez",
        "perfil":  1,
        "correo": "docente@gmail.com"
    },
    {
        "id": 2,
        "user": "alumno",
        "password": "password2",
        "nombre": "Luis Gonzalez",
        "perfil": 2,
        "correo": "alumno@gmail.com"
    }
]

@app.route('/login', methods=['POST'])
def login():
    username = request.json.get('user')
    password = request.json.get('password')
    
    usuario = next((u for u in usuarios if u["user"] == username and u["password"] == password), None)
    
    if usuario:
        return jsonify({
            "id": usuario["id"],
            "nombre": usuario["nombre"],
            "user": usuario["user"],
            "correo": usuario["correo"],
            "tipoPerfil": usuario["perfil"]
        }), 200
    else:
        return jsonify({"message": "Credenciales incorrectas"}), 401

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('user')
    password = data.get('password')
    correo = data.get('correo')
    nombre = data.get('nombre', username) # Si no viene nombre, usamos el user
    
    # Verificar si el usuario ya existe
    if any(u['user'] == username for u in usuarios):
        return jsonify({"message": "El usuario ya existe"}), 400
    
    nuevo_usuario = {
        "id": len(usuarios) + 1,
        "user": username,
        "password": password,
        "nombre": nombre,
        "perfil": 2,  # 2 para alumno por defecto
        "correo": correo
    }
    usuarios.append(nuevo_usuario)
    return jsonify({"message": "Usuario creado con éxito"}), 201

@app.route('/profesores', methods=['GET'])
def obtener_profesores():
    return jsonify(profesores), 200

@app.route('/profesores/<int:profesor_id>/cursos', methods=['GET'])
def obtener_cursos_profesor(profesor_id):
    profesor = next((p for p in profesores if p["id"] == profesor_id), None)
    if not profesor:
        return jsonify({"message": "Profesor no encontrado"}), 404
    return jsonify(profesor["cursos"]), 200

@app.route('/profesores/<int:profesor_id>/cursos/<int:curso_id>/alumnos', methods=['GET'])
def obtener_alumnos_curso(profesor_id, curso_id):
    profesor = next((p for p in profesores if p["id"] == profesor_id), None)
    if not profesor:
        return jsonify({"message": "Profesor no encontrado"}), 404
    curso = next((c for c in profesor["cursos"] if c["id"] == curso_id), None)
    if not curso:
        return jsonify({"message": "Curso no encontrado"}), 404
    return jsonify(curso["alumnos"]), 200

@app.route('/registrar_asistencia', methods=['POST'])
def registrar_asistencia():
    alumno_id = request.json.get('alumno_id')
    codigo = request.json.get('codigo')
    seccion = request.json.get('seccion')
    fecha = request.json.get('fecha')
    
    for profesor in profesores:
        for curso in profesor["cursos"]:
            if curso["codigo"] == codigo and curso["seccion"] == seccion:
                for alumno in curso["alumnos"]:
                    if alumno["id"] == alumno_id:
                        alumno["status"] = 1  # 1 = presente
                        return jsonify({"message": "Asistencia registrada"}), 200
    
    return jsonify({"message": "No se pudo registrar la asistencia"}), 400

@app.route('/alumnos/<int:alumno_id>/cursos', methods=['GET'])
def obtener_cursos_alumno(alumno_id):
    cursos_encontrados = []
    for profesor in profesores:
        for curso in profesor["cursos"]:
            for alumno in curso["alumnos"]:
                if alumno["id"] == alumno_id:
                    cursos_encontrados.append({
                        "profesorId": profesor["id"],
                        "id": curso["id"],
                        "nombre": curso["nombre"],
                        "codigo": curso["codigo"],
                        "seccion": curso["seccion"]
                    })
                    break
    return jsonify(cursos_encontrados), 200

# NUEVO: obtener un solo alumno de un curso, con su "asistencias"
@app.route('/profesores/<int:prof_id>/cursos/<int:curso_id>/alumnos/<int:alumno_id>', methods=['GET'])
def obtener_alumno_curso(prof_id, curso_id, alumno_id):
    profesor = next((p for p in profesores if p["id"] == prof_id), None)
    if not profesor:
        return jsonify({"message": "Profesor no encontrado"}), 404
    
    curso = next((c for c in profesor["cursos"] if c["id"] == curso_id), None)
    if not curso:
        return jsonify({"message": "Curso no encontrado"}), 404
    
    alumno = next((a for a in curso["alumnos"] if a["id"] == alumno_id), None)
    if not alumno:
        return jsonify({"message": "Alumno no encontrado"}), 404
    
    return jsonify(alumno), 200

# Arrancar la aplicación Flask
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
