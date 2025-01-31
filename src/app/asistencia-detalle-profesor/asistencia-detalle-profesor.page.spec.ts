import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciaDetalleProfesorPage } from './asistencia-detalle-profesor.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AsistenciaDetalleProfesorPage', () => {
  let component: AsistenciaDetalleProfesorPage;
  let fixture: ComponentFixture<AsistenciaDetalleProfesorPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AsistenciaDetalleProfesorPage, HttpClientTestingModule] 
    }).compileComponents();

    fixture = TestBed.createComponent(AsistenciaDetalleProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set qrData in ngOnInit', () => {
    // Por si en tu constructor se leen datos, reasignamos:
    component.profesorId = 1;
    component.cursoId = 123;
    component.nombreCurso = 'Curso Prueba';
    // Llamamos manualmente ngOnInit (ya se llamó en fixture.detectChanges, 
    // pero para asegurarlo):
    component.ngOnInit();

    // Revisamos que qrData contenga algo con base a los datos
    // tu code hace `JSON.stringify({ profesorId, cursoId, nombreCurso, fecha })`
    // Esperamos al menos que "profesorId":1, "cursoId":123 y "nombre":"Curso Prueba"
    expect(component.qrData).toContain('"profesorId":1');
    expect(component.qrData).toContain('"cursoId":123');
    expect(component.qrData).toContain('"nombre":"Curso Prueba"');
    expect(component.qrData).toContain('"fecha":');
  });
});
