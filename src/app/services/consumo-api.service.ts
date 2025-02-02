import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumoAPIService {

  private baseUrl = 'https://1hcfx3pg-5000.brs.devtunnels.ms/'; // Ajusta si es otra IP/puerto
  // private baseUrl = 'http://127.0.0.1:5000'; // Ajusta si es otra IP/puerto

  constructor(private http: HttpClient) {}

  // Login
  loginApi(username: string, password: string): Observable<any> {
    const body = { user: username, password: password };
    return this.http.post(`${this.baseUrl}/login`, body);
  }

  // Profesores
  getProfesores(): Observable<any> {
    return this.http.get(`${this.baseUrl}/profesores`);
  }

  // Cursos de un profesor
  getCursosProfesor(profesorId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/profesores/${profesorId}/cursos`);
  }

  // Alumnos de un curso (lista)
  getAlumnosCurso(profesorId: number, cursoId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/profesores/${profesorId}/cursos/${cursoId}/alumnos`);
  }

  // Registrar asistencia
  registrarAsistencia(
    alumnoId: number,
    codigo: string,
    seccion: string,
    fecha: string
  ): Observable<any> {
    const body = { alumno_id: alumnoId, codigo, seccion, fecha };
    return this.http.post(`${this.baseUrl}/registrar_asistencia`, body);
  }

  // Cursos de un alumno
  getCursosAlumno(alumnoId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/alumnos/${alumnoId}/cursos`);
  }

  // NUEVO: Un solo alumno en un curso, con asistencias
  getAlumnoDeUnCurso(
    profesorId: number,
    cursoId: number,
    alumnoId: number
  ): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/profesores/${profesorId}/cursos/${cursoId}/alumnos/${alumnoId}`
    );
  }
}
