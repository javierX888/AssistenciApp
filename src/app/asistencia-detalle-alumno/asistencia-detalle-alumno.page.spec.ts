import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciaalumnoPage } from './asistencia-detalle-alumno.page';
import { Router } from '@angular/router';
import { ConsumoAPIService } from '../services/consumo-api.service';
import { of } from 'rxjs';

describe('AsistenciaalumnoPage', () => {
  let component: AsistenciaalumnoPage;
  let fixture: ComponentFixture<AsistenciaalumnoPage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockApi: jasmine.SpyObj<ConsumoAPIService>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj<Router>('Router', ['getCurrentNavigation']);
    mockApi = jasmine.createSpyObj<ConsumoAPIService>('ConsumoAPIService', ['getAlumnoDeUnCurso']);

    // Simulamos un state
    mockRouter.getCurrentNavigation.and.returnValue({
      extras: {
        state: {
          profesorId: 5,
          cursoId: 10,
          alumnoId: 2
          // etc...
        }
      }
    } as any);

    // Por defecto, devuelves un observable con un "alumno"
    mockApi.getAlumnoDeUnCurso.and.returnValue(of({
      id: 2,
      asistencias: []
    }));

    await TestBed.configureTestingModule({
      imports: [AsistenciaalumnoPage],  // Standalone
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ConsumoAPIService, useValue: mockApi }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AsistenciaalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges(); // => ngOnInit -> llama getAlumnoDeUnCurso
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should read navData from router and call getAlumnoDeUnCurso', () => {
    expect(mockRouter.getCurrentNavigation).toHaveBeenCalled();
    expect(component.profesorId).toBe(5);
    expect(component.cursoId).toBe(10);
    expect(component.alumnoId).toBe(2);

    expect(mockApi.getAlumnoDeUnCurso).toHaveBeenCalledWith(5, 10, 2);
    expect(component.asistencias).toEqual([]);
  });
});
