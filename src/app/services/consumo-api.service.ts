import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumoAPIService {

  private baseUrl = 'http://127.0.0.1:5000'; // o localhost:5000

  constructor(private http: HttpClient) {}

  // Login: POST /login
  loginApi(username: string, password: string): Observable<any> {
    const body = { user: username, password: password };
    return this.http.post(`${this.baseUrl}/login`, body);
  }

  // Profesores: GET /profesores
  getProfesores(): Observable<any> {
    return this.http.get(`${this.baseUrl}/profesores`);
  }

  // Cursos de un profesor: GET /profesores/:profesor_id/cursos
  getCursosProfesor(profesorId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/profesores/${profesorId}/cursos`);
  }

  // Alumnos de un curso: GET /profesores/:profesor_id/cursos/:curso_id/alumnos
  getAlumnosCurso(profesorId: number, cursoId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/profesores/${profesorId}/cursos/${cursoId}/alumnos`);
  }

  // Registrar asistencia: POST /registrar_asistencia
  registrarAsistencia(alumnoId: number, codigo: string, seccion: string, fecha: string): Observable<any> {
    const body = { alumno_id: alumnoId, codigo, seccion, fecha };
    return this.http.post(`${this.baseUrl}/registrar_asistencia`, body);
  }

  // Cursos de un alumno: GET /alumnos/:alumno_id/cursos
  getCursosAlumno(alumnoId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/alumnos/${alumnoId}/cursos`);
  }
  
}
