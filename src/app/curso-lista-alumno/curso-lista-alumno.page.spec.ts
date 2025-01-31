import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosalumnoPage } from './curso-lista-alumno.page';
import { ConsumoAPIService } from '../services/consumo-api.service';
import { of } from 'rxjs';

describe('CursosalumnoPage', () => {
  let component: CursosalumnoPage;
  let fixture: ComponentFixture<CursosalumnoPage>;
  let mockApi: jasmine.SpyObj<ConsumoAPIService>;

  beforeEach(async () => {
    // Creamos un spy del servicio con el método getCursosAlumno
    mockApi = jasmine.createSpyObj<ConsumoAPIService>('ConsumoAPIService', [
      'getCursosAlumno'
    ]);
    // Por defecto, que devuelva un observable vacío
    mockApi.getCursosAlumno.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      // Como es standalone => se importa, no se declara
      imports: [CursosalumnoPage],
      providers: [
        { provide: ConsumoAPIService, useValue: mockApi }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CursosalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges(); // dispara ngOnInit => llama this.consumoAPI.getCursosAlumno
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load courses for the alumno', () => {
    // Simulamos retorno
    const mockCursos = [{ id: 1, nombre: 'Matemáticas' }];
    mockApi.getCursosAlumno.and.returnValue(of(mockCursos));

    component.ngOnInit(); // vuelve a llamar
    expect(mockApi.getCursosAlumno).toHaveBeenCalledWith(component.alumnoId);
    expect(component.cursos).toEqual(mockCursos);
  });
});
