import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciaDetalleProfesorPage } from './asistencia-detalle-profesor.page';

describe('ControlasistenciaPage', () => {
  let component: AsistenciaDetalleProfesorPage;
  let fixture: ComponentFixture<AsistenciaDetalleProfesorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenciaDetalleProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
