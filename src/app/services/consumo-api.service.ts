import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alumno, Curso, Profesor, Usuario } from '../models/asistencia.models';

@Injectable({
  providedIn: 'root'
})
export class ConsumoAPIService {

  private baseUrl = environment.apiUrl;



  constructor(private http: HttpClient) {}

  // Login
  loginApi(username: string, password: string): Observable<Usuario> {
    const body = { user: username, password: password };
    return this.http.post<Usuario>(`${this.baseUrl}/login`, body);
  }

  // Profesores
  getProfesores(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(`${this.baseUrl}/profesores`);
  }

  // Cursos de un profesor
  getCursosProfesor(profesorId: number): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.baseUrl}/profesores/${profesorId}/cursos`);
  }

  // Alumnos de un curso (lista)
  getAlumnosCurso(profesorId: number, cursoId: number): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(`${this.baseUrl}/profesores/${profesorId}/cursos/${cursoId}/alumnos`);
  }

  // Registrar asistencia
  registrarAsistencia(
    alumnoId: number,
    codigo: string,
    seccion: string,
    fecha: string
  ): Observable<any> {
    const body = { alumno_id: alumnoId, codigo, seccion, fecha };
    return this.http.post<any>(`${this.baseUrl}/registrar_asistencia`, body);
  }

  // Cursos de un alumno
  getCursosAlumno(alumnoId: number): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.baseUrl}/alumnos/${alumnoId}/cursos`);
  }

  // NUEVO: Un solo alumno en un curso, con asistencias
  getAlumnoDeUnCurso(
    profesorId: number,
    cursoId: number,
    alumnoId: number
  ): Observable<Alumno> {
    return this.http.get<Alumno>(
      `${this.baseUrl}/profesores/${profesorId}/cursos/${cursoId}/alumnos/${alumnoId}`
    );
  }
}

