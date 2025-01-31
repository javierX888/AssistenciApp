import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarAsistenciaPage } from './registrar-asistencia.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('RegistrarAsistenciaPage', () => {
  let component: RegistrarAsistenciaPage;
  let fixture: ComponentFixture<RegistrarAsistenciaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegistrarAsistenciaPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    

    fixture = TestBed.createComponent(RegistrarAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Cambiamos 'simularEscaneo' a 'tomarFoto' o el nombre real que uses
  it('should call tomarFoto', () => {
    // Espiamos el método "tomarFoto"
    const spy = spyOn(component, 'tomarFoto').and.callThrough();

    // Lo llamamos
    component.tomarFoto();

    // Verificamos que se haya llamado
    expect(spy).toHaveBeenCalled();
  });
});
