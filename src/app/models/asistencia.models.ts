export interface Asistencia {
    fecha: string;
    estado: string;
}

export interface Alumno {
    id: number;
    nombre: string;
    status: number;
    asistencias?: Asistencia[];
}

export interface Curso {
    id: number;
    nombre: string;
    codigo: string;
    seccion: string;
    alumnos?: Alumno[];
}

export interface Profesor {
    id: number;
    nombre: string;
    cursos?: Curso[];
}

export interface Usuario {
    id: number;
    nombre: string;
    user: string;
    correo: string;
    tipoPerfil: string;
}
